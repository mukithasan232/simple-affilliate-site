import { NextResponse } from "next/server";
import sql from "@/lib/db"; // Use Neon Postgres
import products from "@/data/products.json"; // Fallback for initial seeding

function isAdmin(req: Request) {
    const secret = req.headers.get("x-admin-secret");
    const ADMIN_SECRET = process.env.ADMIN_SECRET || "admin123";
    return secret === ADMIN_SECRET;
}

// Transform snake_case DB rows to camelCase frontend objects
function mapProduct(row: any) {
    return {
        id: row.id,
        title: row.title,
        slug: row.slug,
        category: row.category,
        price: parseFloat(row.price),
        oldPrice: row.old_price ? parseFloat(row.old_price) : null,
        discount: row.discount ? parseFloat(row.discount) : null,
        rating: row.rating ? parseFloat(row.rating) : 0,
        images: row.images,
        affiliateLink: row.affiliate_link,
        featured: row.featured,
        badge: row.badge,
        pros: row.pros,
        cons: row.cons,
        description: row.description,
        specifications: row.specifications,
        faqs: row.faqs
    };
}

export async function GET() {
    // If no DB URL, return local JSON (development without DB)
    if (!sql) {
        return NextResponse.json(products);
    }

    try {
        const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`;

        // Auto-seed if empty
        if (rows.length === 0 && products.length > 0) {
            console.log("Seeding database with initial products...");
            for (const p of products) {
                await sql`
                    INSERT INTO products (
                        id, title, slug, category, price, old_price, discount, rating, 
                        images, affiliate_link, featured, badge, pros, cons, description, specifications, faqs
                    ) VALUES (
                        ${p.id}, ${p.title}, ${p.slug}, ${p.category}, ${p.price}, 
                        ${p.oldPrice || null}, ${p.discount || null}, ${p.rating}, 
                        ${p.images}, ${p.affiliateLink}, ${p.featured || false}, ${p.badge || null}, 
                        ${p.pros || []}, ${p.cons || []}, ${p.description || ""}, 
                        ${JSON.stringify(p.specifications || {})}, ${JSON.stringify(p.faqs || [])}
                    ) ON CONFLICT (id) DO NOTHING
                `;
            }
            // Fetch again after seeding
            const seededRows = await sql`SELECT * FROM products ORDER BY created_at DESC`;
            return NextResponse.json(seededRows.map(mapProduct));
        }

        return NextResponse.json(rows.map(mapProduct));
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: "Failed to load products" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    if (!isAdmin(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!sql) {
        return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    try {
        const p = await req.json();

        // 1. Generate ID if missing
        if (!p.id) {
            // Simple ID generation
            p.id = `p${Date.now()}`;
        }

        // 2. Generate slug if missing
        if (!p.slug && p.title) {
            p.slug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        }

        // 3. Upsert (Insert or Update)
        await sql`
            INSERT INTO products (
                id, title, slug, category, price, old_price, discount, rating, 
                images, affiliate_link, featured, badge, pros, cons, description, specifications, faqs
            ) VALUES (
                ${p.id}, ${p.title}, ${p.slug}, ${p.category}, ${p.price}, 
                ${p.oldPrice || null}, ${p.discount || null}, ${p.rating}, 
                ${p.images}, ${p.affiliateLink}, ${p.featured || false}, ${p.badge || null}, 
                ${p.pros || []}, ${p.cons || []}, ${p.description || ""}, 
                ${JSON.stringify(p.specifications || {})}, ${JSON.stringify(p.faqs || [])}
            )
            ON CONFLICT (id) DO UPDATE SET
                title = EXCLUDED.title,
                slug = EXCLUDED.slug,
                category = EXCLUDED.category,
                price = EXCLUDED.price,
                old_price = EXCLUDED.old_price,
                discount = EXCLUDED.discount,
                rating = EXCLUDED.rating,
                images = EXCLUDED.images,
                affiliate_link = EXCLUDED.affiliate_link,
                featured = EXCLUDED.featured,
                badge = EXCLUDED.badge,
                pros = EXCLUDED.pros,
                cons = EXCLUDED.cons,
                description = EXCLUDED.description,
                specifications = EXCLUDED.specifications,
                faqs = EXCLUDED.faqs
        `;

        return NextResponse.json(p);

    } catch (error: any) {
        console.error("Save Error:", error);
        return NextResponse.json({ error: "Failed to save product" }, { status: 500 });
    }
}

export async function DELETE(req: Request) {
    if (!isAdmin(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!sql) {
        return NextResponse.json({ error: "Database not configured" }, { status: 500 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

    try {
        await sql`DELETE FROM products WHERE id = ${id}`;
        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
    }
}
