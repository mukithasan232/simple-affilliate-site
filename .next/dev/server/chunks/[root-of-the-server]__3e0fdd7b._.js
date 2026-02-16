module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/api/admin/scrape/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$jsdom$29$__ = __turbopack_context__.i("[externals]/jsdom [external] (jsdom, cjs, [project]/node_modules/jsdom)");
;
;
async function POST(req) {
    try {
        const { url } = await req.json();
        if (!url || !url.includes("amazon.com")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Please provide a valid Amazon URL"
            }, {
                status: 400
            });
        }
        const response = await fetch(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.9"
            }
        });
        const html = await response.text();
        const dom = new __TURBOPACK__imported__module__$5b$externals$5d2f$jsdom__$5b$external$5d$__$28$jsdom$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$jsdom$29$__["JSDOM"](html);
        const document = dom.window.document;
        // Helper to get text by selector
        const getText = (selector)=>document.querySelector(selector)?.textContent?.trim() || "";
        // Extracting Data
        const title = getText("#productTitle");
        const priceRaw = getText(".a-price .a-offscreen") || getText("#priceblock_ourprice") || getText("#priceblock_dealprice");
        const oldPriceRaw = getText(".a-price.a-text-price span[aria-hidden='true']");
        const price = parseFloat(priceRaw.replace(/[^0-9.]/g, "")) || 0;
        const oldPrice = parseFloat(oldPriceRaw.replace(/[^0-9.]/g, "")) || null;
        const ratingRaw = getText("#acrCustomerReviewText").split(" ")[0];
        const rating = parseFloat(getText(".a-icon-alt").split(" ")[0]) || 0;
        // Image URL - usually in a script or a specific img tag
        const imgTag = document.querySelector("#landingImage");
        const image = imgTag?.src || "";
        // Features (Bullet points)
        const features = Array.from(document.querySelectorAll("#feature-bullets li span")).map((span)=>span.textContent?.trim()).filter((text)=>text && !text.toLowerCase().includes("see more")).slice(0, 5);
        const scrapedData = {
            title,
            price,
            oldPrice,
            rating,
            image,
            features,
            link: url,
            category: "General",
            featured: false,
            badge: "",
            pros: [
                "High quality",
                "Reliable performance"
            ],
            cons: [
                "May be expensive for some",
                "Limited stock"
            ],
            reviewSummary: `A comprehensive look at the ${title}. It offers great value and performance for its category.`,
            faqs: [
                {
                    q: "Is it worth the price?",
                    a: "Based on our analysis, yes it offers solid value."
                }
            ]
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(scrapedData);
    } catch (error) {
        console.error("Scrape Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to scrape product data. Amazon might be blocking the request."
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3e0fdd7b._.js.map