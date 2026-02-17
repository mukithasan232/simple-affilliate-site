import { getAllProducts } from "@/lib/products";
import ProductCard from "@/components/product/ProductCard";
import styles from "./deals.module.css";

export const metadata = {
    title: "Best Tech Deals & Discounts | Affiliate Pro",
    description: "Save big on the latest tech. We track price drops and limited-time offers on the best gadgets and electronics.",
};

export default async function DealsPage() {
    const allProducts = await getAllProducts();
    const deals = allProducts.filter((p: any) => p.oldPrice && p.oldPrice > p.price);

    return (
        <div className={styles.dealsPage}>
            <div className="container">
                <header className={styles.header}>
                    <span className={styles.badge}>Limited Time Offers</span>
                    <h1>Today&apos;s Best <span className="text-gradient">Tech Deals</span></h1>
                    <p>We research and track price drops across major retailers so you don&apos;t have to.</p>
                </header>

                {deals.length > 0 ? (
                    <div className={styles.dealsGrid}>
                        {deals.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noDeals}>
                        <p>No active deals found at the moment. Check back soon!</p>
                    </div>
                )}
            </div>
        </div>
    );
}
