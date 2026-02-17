import sql from "@/lib/db";
import products from "@/data/products.json";

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

export async function getProductBySlug(slug: string) {
    if (sql) {
        try {
            const rows = await sql`SELECT * FROM products WHERE slug = ${slug}`;
            if (rows.length > 0) return mapProduct(rows[0]);
        } catch (error) {
            console.error("DB Error fetch product:", error);
        }
    }
    return products.find(p => p.slug === slug);
}

export async function getAllProducts() {
    if (sql) {
        try {
            const rows = await sql`SELECT * FROM products ORDER BY created_at DESC`;
            if (rows.length > 0) return rows.map(mapProduct);
        } catch (error) {
            console.error("DB Error fetch all:", error);
        }
    }
    return products;
}

export async function getFeaturedProducts() {
    if (sql) {
        try {
            const rows = await sql`SELECT * FROM products WHERE featured = true ORDER BY created_at DESC`;
            if (rows.length > 0) return rows.map(mapProduct);
        } catch (error) {
            console.error("DB Error fetch featured:", error);
        }
    }
    return products.filter(p => p.featured);
}

export async function getProductsByCategory(category: string) {
    if (sql) {
        try {
            // Case insensitive search might be better but let's stick to exact match or ILIKE if needed
            // Assuming category is stored as capitalized or exact string
            const rows = await sql`SELECT * FROM products WHERE category ILIKE ${category} ORDER BY created_at DESC`;
            if (rows.length > 0) return rows.map(mapProduct);
        } catch (error) {
            console.error("DB Error fetch category:", error);
        }
    }
    return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

export async function getProductsByIds(ids: string[]) {
    if (!ids || ids.length === 0) return [];

    if (sql) {
        try {
            // Using ANY for array check
            const rows = await sql`SELECT * FROM products WHERE id = ANY(${ids}) ORDER BY created_at DESC`;
            if (rows.length > 0) return rows.map(mapProduct);
        } catch (error) {
            console.error("DB Error fetch by ids:", error);
        }
    }
    return products.filter(p => ids.includes(p.id));
}
