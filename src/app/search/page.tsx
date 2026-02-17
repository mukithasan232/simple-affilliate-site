import Fuse from 'fuse.js';
import Link from 'next/link';
import ProductCard from '@/components/product/ProductCard';
import styles from './search.module.css';
import { getAllProducts } from "@/lib/products";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const { q } = await searchParams;
    const query = q || "";
    const products: any[] = await getAllProducts();

    const fuse = new Fuse(products, {
        keys: ['title', 'category', 'description', 'badge'],
        threshold: 0.4,
    });

    // Handle Fuse result type manually
    const searchResults = fuse.search(query);
    const results = query
        ? searchResults.map(result => result.item)
        : products;

    return (
        <div className={styles.page}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className="section-title">
                        {query ? (
                            <>Results for <span className="text-gradient">"{query}"</span></>
                        ) : (
                            <>All <span className="text-gradient">Products</span></>
                        )}
                    </h1>
                    <p className={styles.count}>{results.length} items found</p>
                </header>

                {results.length > 0 ? (
                    <div className={styles.grid}>
                        {results.map((product: any) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noResults}>
                        <p>No products found matching "{query}".</p>
                        <Link href="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
