import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    product: {
        id: string;
        title: string;
        slug: string;
        price: number;
        oldPrice?: number | null;
        images: string[];
        badge?: string;
        discount?: number | null;
        rating: number;
        affiliateLink: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className={styles.card}>
            {product.badge && <span className={styles.badge}>{product.badge}</span>}

            <div className={styles.imageWrapper}>
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={300}
                    height={300}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <div className={styles.rating}>
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                    <span>({product.rating})</span>
                </div>

                <h3 className={styles.title}>{product.title}</h3>

                <div className={styles.priceRow}>
                    <span className={styles.price}>${product.price}</span>
                    {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
                    {product.discount && <span className={styles.discount}>-{product.discount}%</span>}
                </div>

                <div className={styles.actions}>
                    <Link href={`/product/${product.slug}`} className={`${styles.btn} ${styles.btnOutline}`}>
                        Read Review
                    </Link>
                    <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnAmazon}`}>
                        View Deal
                    </a>
                </div>
            </div>
        </div>
    );
}
