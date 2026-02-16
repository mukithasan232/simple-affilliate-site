"use server";

import { neon } from "@neondatabase/serverless";

// Helper to get SQL client
const getSql = () => {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not defined");
    }
    return neon(process.env.DATABASE_URL);
};

// Map DB row to Product type
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

export async function getProducts() {
    try {
        const sql = getSql();
        const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`;
        return rows.map(mapProduct);
    } catch (error) {
        console.error("Database Error:", error);
        return [];
    }
}

export async function getProductBySlug(slug: string) {
    try {
        const sql = getSql();
        const rows = await sql`SELECT * FROM products WHERE slug = ${slug} LIMIT 1`;
        if (rows.length === 0) return null;
        return mapProduct(rows[0]);
    } catch (error) {
        console.error("Database Error:", error);
        return null;
    }
}

export async function getProductsByCategory(category: string) {
    try {
        const sql = getSql();
        // Case-insensitive category match
        const rows = await sql`SELECT * FROM products WHERE LOWER(category) = LOWER(${category}) ORDER BY created_at DESC`;
        return rows.map(mapProduct);
    } catch (error) {
        console.error("Database Error:", error);
        return [];
    }
}
