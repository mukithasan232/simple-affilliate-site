import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsPath = path.join(process.cwd(), "src/data/products.json");

function isAdmin(req: Request) {
    const secret = req.headers.get("x-admin-secret");
    return secret === process.env.ADMIN_SECRET;
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

        // Generate simple ID if not provided
        if (!newProduct.id) {
            newProduct.id = "p" + (products.length + 1);
        }

        // Generate slug from title if not provided
        if (!newProduct.slug && newProduct.title) {
            newProduct.slug = newProduct.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        }

        products.push(newProduct);
        saveProducts(products);

        return NextResponse.json(newProduct);
    } catch (error) {
        return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
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
        products = products.filter((p: any) => p.id !== id);
        saveProducts(products);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
