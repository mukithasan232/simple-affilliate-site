import products from "@/data/products.json";

export function getProductBySlug(slug: string) {
    return products.find(p => p.slug === slug);
}

export function getAllProducts() {
    return products;
}

export function getFeaturedProducts() {
    return products.filter(p => p.featured);
}

export function getProductsByCategory(category: string) {
    return products.filter(p => p.category === category);
}
