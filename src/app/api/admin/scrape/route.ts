import { NextResponse } from "next/server";
import { JSDOM } from "jsdom";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
    const session: any = await getServerSession(authOptions);

    if (session?.user?.role !== "admin") {
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

        if (html.includes("To discuss automated access to Amazon data please contact") || html.includes("captcha")) {
            return NextResponse.json({
                error: "Amazon blocked the request. This is common on cloud servers. Try again in a few minutes or add products manually."
            }, { status: 403 });
        }

        const dom = new JSDOM(html);
        const document = dom.window.document;

        // Helper to get text by selector
        const getText = (selector: string) => document.querySelector(selector)?.textContent?.trim() || "";

        // Extracting Data
        const title = getText("#productTitle");

        // Price Selectors (Amazon changes these often)
        const priceSelectors = [
            ".a-price .a-offscreen",
            "#priceblock_ourprice",
            "#priceblock_dealprice",
            ".a-price.a-text-price .a-offscreen",
            "#kindle-price",
            "#price_inside_buybox"
        ];

        let priceRaw = "";
        for (const selector of priceSelectors) {
            priceRaw = getText(selector);
            if (priceRaw) break;
        }

        const oldPriceRaw = getText(".a-price.a-text-price span[aria-hidden='true']") || getText(".basisPrice .a-offscreen");

        const price = parseFloat(priceRaw.replace(/[^0-9.]/g, "")) || 0;
        const oldPrice = parseFloat(oldPriceRaw.replace(/[^0-9.]/g, "")) || null;

        // Rating
        const ratingText = getText(".a-icon-alt");
        const rating = parseFloat(ratingText.split(" ")[0]) || 0;

        // Image URL - Better extraction
        let images: string[] = [];
        const imgTag = document.querySelector("#landingImage") || document.querySelector("#imgBlkFront") || document.querySelector("#ebooksImgBlkFront");

        if (imgTag) {
            const dynamicImage = imgTag.getAttribute("data-a-dynamic-image");
            if (dynamicImage) {
                try {
                    const imgObj = JSON.parse(dynamicImage);
                    images = [Object.keys(imgObj)[0]]; // Get the first (usually highest res) image
                } catch (e) {
                    images = [(imgTag as HTMLImageElement).src];
                }
            } else {
                images = [(imgTag as HTMLImageElement).src];
            }
        }

        // Specifications
        const specifications: Record<string, string> = {};
        const features = Array.from(document.querySelectorAll("#feature-bullets li span"))
            .map(span => span.textContent?.trim())
            .filter(text => text && !text.toLowerCase().includes("see more"))
            .slice(0, 5);

        features.forEach((f, i) => {
            if (f) {
                const parts = f.split(":");
                if (parts.length > 1) specifications[parts[0].trim()] = parts[1].trim();
                else specifications[`Feature ${i + 1}`] = f;
            }
        });

        const scrapedData = {
            title,
            price,
            oldPrice,
            rating,
            images,
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
