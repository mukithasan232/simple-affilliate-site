import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

export async function POST(req: Request) {
    const secret = req.headers.get("x-admin-secret");
    if (secret !== process.env.ADMIN_SECRET) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const { url } = await req.json();

        if (!url || !url.includes("amazon.com")) {
            return NextResponse.json({ error: "Please provide a valid Amazon URL" }, { status: 400 });
        }

        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9",
            },
        });

        const html = await response.text();
        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Helper to get text by selector
        const getText = (selector: string) => document.querySelector(selector)?.textContent?.trim() || "";

        // Extracting Data
        const title = getText("#productTitle");
        const priceRaw = getText(".a-price .a-offscreen") || getText("#priceblock_ourprice") || getText("#priceblock_dealprice");
        const oldPriceRaw = getText(".a-price.a-text-price span[aria-hidden='true']");
        const price = parseFloat(priceRaw.replace(/[^0-9.]/g, "")) || 0;
        const oldPrice = parseFloat(oldPriceRaw.replace(/[^0-9.]/g, "")) || null;
        const ratingRaw = getText("#acrCustomerReviewText").split(" ")[0];
        const rating = parseFloat(getText(".a-icon-alt").split(" ")[0]) || 0;

        // Image URL - usually in a script or a specific img tag
        const imgTag = document.querySelector("#landingImage") as HTMLImageElement;
        const image = imgTag?.src || "";

        // Specifications (Object from bullets)
        const specifications: Record<string, string> = {};
        const features = Array.from(document.querySelectorAll("#feature-bullets li span"))
            .map(span => span.textContent?.trim())
            .filter(text => text && !text.toLowerCase().includes("see more"))
            .slice(0, 5);

        features.forEach((f, i) => {
            if (f) {
                const parts = f.split(":");
                if (parts.length > 1) specifications[parts[0].trim()] = parts[1].trim();
                else specifications[`Detail ${i + 1}`] = f;
            }
        });

        const scrapedData = {
            title,
            price,
            oldPrice,
            rating,
            images: [image],
            specifications,
            affiliateLink: url,
            category: "General", // Default category
            featured: false,
            badge: "",
            pros: ["High quality", "Reliable performance"], // AI placeholders
            cons: ["May be expensive for some", "Limited stock"],
            description: `A comprehensive look at the ${title}. It offers great value and performance for its category.`,
            faqs: [
                { q: "Is it worth the price?", a: "Based on our analysis, yes it offers solid value." }
            ]
        };

        return NextResponse.json(scrapedData);
    } catch (error) {
        console.error("Scrape Error:", error);
        return NextResponse.json({ error: "Failed to scrape product data. Amazon might be blocking the request." }, { status: 500 });
    }
}
