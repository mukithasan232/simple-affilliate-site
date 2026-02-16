import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import redis from "@/lib/redis"; // Import Redis utility

const productsPath = path.join(process.cwd(), "src/data/products.json");

function isAdmin(req: Request) {
    const secret = req.headers.get("x-admin-secret");
    const ADMIN_SECRET = process.env.ADMIN_SECRET || "admin123";
    return secret === ADMIN_SECRET;
}

// Read products (Redis -> Local Fallback)
async function getProducts() {
    // 1. Try Redis first
    if (redis) {
        try {
            const products = await redis.get<any[]>("products:all");
            if (products) return products;
        } catch (error) {
            console.error("Redis Read Error:", error);
        }
    }

    // 2. Fallback to local file
    const data = fs.readFileSync(productsPath, "utf8");
    const localProducts = JSON.parse(data);

    // 3. Seed Redis if empty (Self-healing)
    if (redis) {
        try {
            await redis.set("products:all", localProducts);
        } catch (error) {
            console.error("Redis Seed Error:", error);
        }
    }

    return localProducts;
}

// Save products (Redis ONLY for production updates)
async function saveProducts(products: any[]) {
    if (redis) {
        await redis.set("products:all", products);
    } else {
        // Fallback for local development without Redis env vars
        fs.writeFileSync(productsPath, JSON.stringify(products, null, 4), "utf8");
    }
}

export async function GET() {
    try {
        const products = await getProducts(); // Now async
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    if (!isAdmin(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        const newProduct = await req.json();
        const products = await getProducts(); // Now async

        // Check if updating existing product
        const existingIndex = products.findIndex((p: any) => p.id === newProduct.id);

        if (existingIndex > -1) {
            // Update existing
            products[existingIndex] = { ...products[existingIndex], ...newProduct };
        } else {
            // Create new
            if (!newProduct.id) {
                newProduct.id = "p" + (products.length + 1);
            }
            if (!newProduct.slug && newProduct.title) {
                newProduct.slug = newProduct.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            }
            products.push(newProduct);
        }

        await saveProducts(products); // Now async & uses Redis if available

        return NextResponse.json(newProduct);

    } catch (error: any) {
        console.error("Save Error:", error);
        return NextResponse.json({ error: "Failed to save product. Ensure Redis is configured." }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    if (!isAdmin(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    try {
        let products = await getProducts(); // Now async
        const initialLength = products.length;
        products = products.filter((p: any) => p.id !== id);

        if (products.length === initialLength) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        await saveProducts(products); // Now async
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
