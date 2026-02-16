import ProductCard from "@/components/product/ProductCard";
import products from "@/data/products.json";
import styles from "./categories.module.css";
import Link from "next/link";
import ComparisonTable from "@/components/ui/ComparisonTable";

export default function CategoriesPage() {
    const categories = [...new Set(products.map((p) => p.category))];

    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className="section-title">Product <span className="text-gradient">Categories</span></h1>

                {categories.map((cat) => {
                    const categoryProducts = products.filter(p => p.category === cat);
                    return (
                        <section key={cat} className={styles.section}>
                            <div className={styles.sectionHeader}>
                                <h2 className={styles.catTitle}>{cat}</h2>
                                <span className={styles.count}>
                                    {categoryProducts.length} Products
                                </span>
                            </div>
                            <div className={styles.grid}>
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            {/* Category Comparison */}
                            <div style={{ marginTop: '3rem' }}>
                                <ComparisonTable
                                    products={categoryProducts.slice(0, 3)}
                                    title={`Best ${cat} Comparison`}
                                />
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}
