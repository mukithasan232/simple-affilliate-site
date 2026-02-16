import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsPath = path.join(process.cwd(), "src/data/products.json");

function isAdmin(req: Request) {
    const secret = req.headers.get("x-admin-secret");
    const ADMIN_SECRET = process.env.ADMIN_SECRET || "admin123";
    return secret === ADMIN_SECRET;
}

function getProducts() {
    const data = fs.readFileSync(productsPath, "utf8");
    return JSON.parse(data);
}

function saveProducts(products: any[]) {
    fs.writeFileSync(productsPath, JSON.stringify(products, null, 4), "utf8");
}

export async function GET() {
    try {
        const products = getProducts();
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
        const products = getProducts();

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

        saveProducts(products);

        return NextResponse.json(newProduct);

    } catch (error: any) {
        console.error("Save Error:", error);
        // Specific error for Vercel Read-Only Filesystem
        if (error.code === 'EROFS' || error.message.includes('read-only')) {
            return NextResponse.json({
                error: "Deployment Limit: Cannot write to files on Vercel. You must connect a Storage Database (Blob/KV/Firebase)."
            }, { status: 500 });
        }
        return NextResponse.json({ error: "Failed to save product" }, { status: 500 });
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
        let products = getProducts();
        const initialLength = products.length;
        products = products.filter((p: any) => p.id !== id);

        if (products.length === initialLength) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        saveProducts(products);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete Error:", error);
        if (error.code === 'EROFS' || error.message.includes('read-only')) {
            return NextResponse.json({
                error: "Deployment Limit: Cannot delete files on Vercel (Read-Only FS). Please use a real database."
            }, { status: 500 });
        }
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
