import { JSDOM } from "jsdom";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, "..");
const INDEX_HTML_PATH = path.join(ROOT_DIR, "index.html");
const TRANSLATOR_JS_PATH = path.join(ROOT_DIR, "translator.js");
const STYLE_CSS_PATH = path.join(ROOT_DIR, "style.css");

export async function getProjectData() {
    const htmlContent = await fs.readFile(INDEX_HTML_PATH, "utf-8");
    const jsContent = await fs.readFile(TRANSLATOR_JS_PATH, "utf-8");

    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    const translationsMatch = jsContent.match(/const translations = ({[\s\S]*?});/);
    if (!translationsMatch) {
        throw new Error("Could not find translations object in translator.js");
    }

    const translations = eval(`(${translationsMatch[1]})`);

    const products = [];
    const categories = [];

    // Extract Products
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const titleEl = card.querySelector(".title");
        if (!titleEl) return;

        const id = titleEl.getAttribute("data-translate");
        if (!id) return;

        const priceEl = card.querySelector(".current-price") || card.querySelector(".price");
        const oldPriceEl = card.querySelector(".old-price");
        const imgEl = card.querySelector("img");
        const linkEl = card.querySelector("a"); // Simplified selector
        const tagEl = card.querySelector(".tag-category") || card.querySelector(".tag");

        const tagKey = tagEl ? tagEl.getAttribute("data-translate") : null;

        products.push({
            id,
            title_en: translations.en[id],
            title_bn: translations.bn[id],
            price: priceEl ? priceEl.textContent.trim() : "",
            old_price: oldPriceEl ? oldPriceEl.textContent.trim() : "",
            image: imgEl ? imgEl.getAttribute("src") : "",
            link: linkEl ? linkEl.getAttribute("href") : "",
            tag_key: tagKey,
            tag_en: tagKey ? translations.en[tagKey] : (tagEl ? tagEl.textContent.trim() : ""),
            tag_bn: tagKey ? translations.bn[tagKey] : "",
        });
    });

    // Extract Categories
    const catTitles = document.querySelectorAll(".cat-title");
    catTitles.forEach(h2 => {
        const id = h2.getAttribute("data-translate");
        const iconEl = h2.querySelector("i") || h2.querySelector("span.cat-icon");
        const iconClass = iconEl ? iconEl.className : "";
        const title = h2.textContent.trim();
        if (id) {
            categories.push({ id, title, iconClass });
        }
    });

    return { products, categories, translations };
}

export async function updateProduct(data) {
    const { id, title_en, title_bn, price, old_price, image, link } = data;

    let htmlContent = await fs.readFile(INDEX_HTML_PATH, "utf-8");
    let jsContent = await fs.readFile(TRANSLATOR_JS_PATH, "utf-8");

    // Update Translations
    if (title_en || title_bn) {
        const lines = jsContent.split("\n");
        let inEn = false;
        let inBn = false;

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes("en: {")) inEn = true;
            if (lines[i].includes("bn: {")) { inEn = false; inBn = true; }
            if (lines[i].includes("};")) { inEn = false; inBn = false; }

            if (inEn && title_en && lines[i].trim().startsWith(`${id}:`)) {
                lines[i] = lines[i].replace(/:(\s*)(["'])((?:(?!\2|\\).|\\.)*)\2/, `:$1${JSON.stringify(title_en)}`);
            }

            if (inBn && title_bn && lines[i].trim().startsWith(`${id}:`)) {
                lines[i] = lines[i].replace(/:(\s*)(["'])((?:(?!\2|\\).|\\.)*)\2/, `:$1${JSON.stringify(title_bn)}`);
            }
        }
        jsContent = lines.join("\n");
        await fs.writeFile(TRANSLATOR_JS_PATH, jsContent, "utf-8");
    }

    // Update HTML
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;

    const cards = doc.querySelectorAll(".card");
    let found = false;

    for (const card of cards) {
        const titleEl = card.querySelector(".title");
        if (titleEl && titleEl.getAttribute("data-translate") === id) {
            found = true;

            // Updated for new structure
            if (price !== undefined) {
                let priceRow = card.querySelector(".price-row");
                // If using old structure, might fallback
                if (!priceRow) {
                    // Try old .price-area
                    priceRow = card.querySelector(".price-area");
                }

                if (priceRow) {
                    const priceEl = priceRow.querySelector(".current-price") || priceRow.querySelector(".price");
                    if (priceEl) priceEl.textContent = price;

                    const oldPriceEl = priceRow.querySelector(".old-price");
                    if (oldPriceEl && old_price !== undefined) {
                        oldPriceEl.textContent = old_price;
                    }
                }
            }

            if (image) {
                const img = card.querySelector("img");
                if (img) img.setAttribute("src", image);
            }

            if (link) {
                const btn = card.querySelector("a.btn-amazon") || card.querySelector("a.btn");
                if (btn) btn.setAttribute("href", link);
            }
        }
    }

    if (found) {
        await fs.writeFile(INDEX_HTML_PATH, dom.serialize(), "utf-8");
    }

    return { success: true, id };
}

export async function addCategory(data) {
    const { title_en, title_bn, icon } = data;
    const id = `cat_${Date.now()}`;

    let htmlContent = await fs.readFile(INDEX_HTML_PATH, "utf-8");
    let jsContent = await fs.readFile(TRANSLATOR_JS_PATH, "utf-8");

    // 1. Update Translator.js
    function injectTranslation(content, lang, key, value) {
        const regex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?)(\\s*})`);
        return content.replace(regex, `$1,\n        "${key}": "${value}"$2`);
    }

    jsContent = injectTranslation(jsContent, "en", id, title_en);
    jsContent = injectTranslation(jsContent, "bn", id, title_bn || title_en);

    await fs.writeFile(TRANSLATOR_JS_PATH, jsContent, "utf-8");

    // 2. Update HTML
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;
    const main = doc.querySelector("main#all-deals");

    if (main) {
        const h2 = doc.createElement("h2");
        h2.className = "cat-title";
        h2.setAttribute("data-translate", id);
        // Map common icons
        let iconHtml = '<i class="bi bi-tag me-2"></i>';
        if (icon === 'laptop') iconHtml = '<i class="bi bi-laptop me-2"></i>';
        if (icon === 'mouse') iconHtml = '<i class="bi bi-mouse me-2"></i>';
        if (icon === 'headphone') iconHtml = '<i class="bi bi-headphones me-2"></i>';
        if (icon) iconHtml = `<i class="${icon} me-2"></i>`;

        h2.innerHTML = `${iconHtml} ${title_en}`;

        const div = doc.createElement("div");
        div.className = "grid mb-5";
        div.id = `grid_${id}`;

        div.innerHTML = `
            <div class="card hover-lift placeholder-card">
                <div class="card-body d-flex align-items-center justify-content-center text-muted" style="min-height: 200px; background: rgba(0,0,0,0.02);">
                    <p class="mb-0">No products yet. Add one via Admin.</p>
                </div>
            </div>
        `;

        main.appendChild(h2);
        main.appendChild(div);

        await fs.writeFile(INDEX_HTML_PATH, dom.serialize(), "utf-8");
    }

    return { success: true, id };
}

export async function addProduct(data) {
    const { categoryId, title_en, title_bn, price, image, link } = data;
    const id = `product_${Date.now()}`;

    let htmlContent = await fs.readFile(INDEX_HTML_PATH, "utf-8");
    let jsContent = await fs.readFile(TRANSLATOR_JS_PATH, "utf-8");

    // Update Translations
    function injectTranslation(content, lang, key, value) {
        const regex = new RegExp(`(${lang}:\\s*{[\\s\\S]*?)(\\s*})`);
        return content.replace(regex, `$1,\n        "${key}": "${value}"$2`);
    }
    jsContent = injectTranslation(jsContent, "en", id, title_en);
    jsContent = injectTranslation(jsContent, "bn", id, title_bn || title_en);
    await fs.writeFile(TRANSLATOR_JS_PATH, jsContent, "utf-8");

    // Update HTML
    const dom = new JSDOM(htmlContent);
    const doc = dom.window.document;

    // Find grid by category
    const catTitle = doc.querySelector(`h2[data-translate="${categoryId}"]`);
    if (!catTitle) throw new Error("Category not found: " + categoryId);

    let grid = catTitle.nextElementSibling;
    while (grid && !grid.classList.contains("grid")) {
        grid = grid.nextElementSibling;
    }

    if (grid) {
        const ph = grid.querySelector(".placeholder-card");
        if (ph) ph.remove();

        const card = doc.createElement("div");
        card.className = "card hover-lift";

        card.innerHTML = `
            <div class="card-img-wrapper">
                <img src="${image || 'image/laptop.jpg'}" class="card-img" alt="Product">
            </div>
            <div class="card-body">
                <div class="tag-category">New</div>
                <div class="title" data-translate="${id}">${title_en}</div>
                <div class="price-row">
                    <span class="current-price">$${price}</span>
                </div>
                <a href="${link || '#'}" class="btn-amazon" target="_blank" data-translate="product_btn">View Deal</a>
            </div>
        `;

        grid.prepend(card);
        await fs.writeFile(INDEX_HTML_PATH, dom.serialize(), "utf-8");
    }

    return { success: true, id };
}

export async function updateTheme(data) {
    const { primary } = data;

    let cssContent = await fs.readFile(STYLE_CSS_PATH, "utf-8");

    if (primary) {
        // Regex to replace --primary: #...; 
        // We match --primary:\s* and then a color code or name up to the semicolon
        cssContent = cssContent.replace(/--primary:\s*[^;]+;/, `--primary: ${primary};`);

        // Also update primary glow if possible (simple hex-to-rgba is hard without lib, 
        // so we might just leave it or approximate it if needed. 
        // For now, just changing the main primary color is a huge win.)
    }

    await fs.writeFile(STYLE_CSS_PATH, cssContent, "utf-8");
    return { success: true };
}

