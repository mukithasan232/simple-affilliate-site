import ProductCard from "@/components/product/ProductCard";
import products from "@/data/products.json";
import styles from "../categories.module.css";
import { notFound } from "next/navigation";
import ComparisonTable from "@/components/ui/ComparisonTable";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const catName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
        title: `Best ${catName} of 2026 | Affiliate Pro Reviews`,
        description: `Expert reviews and comparisons of the top-rated ${slug} available on Amazon.`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Map slugs to display names if needed, or just capitalize
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    const categoryProducts = products.filter(
        p => p.category.toLowerCase() === slug.toLowerCase()
    );

    if (categoryProducts.length === 0) {
        // Fallback: search for similar or show all
    }

    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className="section-title">Best <span className="text-gradient">{categoryName}</span></h1>
                <p className={styles.subtitle}>Our top-rated products in the {categoryName} category, thoroughly tested and reviewed.</p>

                {categoryProducts.length > 0 ? (
                    <>
                        <div className={styles.grid}>
                            {categoryProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        <div style={{ marginTop: '5rem' }}>
                            <h2 className="section-title">Side-by-Side <span className="text-gradient">Comparison</span></h2>
                            <ComparisonTable
                                products={categoryProducts.slice(0, 4)}
                                title={`Top ${categoryName} Performance Grid`}
                            />
                        </div>
                    </>
                ) : (
                    <div className={styles.noProducts}>
                        <p>No products found in this category yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
