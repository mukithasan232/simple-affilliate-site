"use client";

import Image from "next/image";
import styles from "./ComparisonTable.module.css";

interface Product {
    id: string;
    title: string;
    price: number;
    rating: number;
    images: string[];
    specifications: Record<string, any>;
    affiliateLink: string;
    badge?: string;
}

interface ComparisonTableProps {
    products: Product[];
    title?: string;
}

export default function ComparisonTable({ products, title = "Quick Comparison" }: ComparisonTableProps) {
    if (!products || products.length === 0) return null;

    return (
        <div className={styles.container}>
            <h2 className="text-gradient" style={{ marginBottom: '2rem' }}>{title}</h2>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product Details</th>
                            {products.map((p, index) => (
                                <th key={p.id}>
                                    <div className={styles.productHeader}>
                                        {index === 0 && <span className={styles.winnerBadge}>★ Top Choice</span>}
                                        <div className={styles.imageWrapper}>
                                            <img src={p.images[0]} alt={p.title} />
                                        </div>
                                        <span className={styles.title}>{p.title}</span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Price</td>
                            {products.map((p) => (
                                <td key={p.id}>
                                    <div className={styles.priceCell}>${p.price}</div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>User Rating</td>
                            {products.map((p) => (
                                <td key={p.id}>
                                    <div className={styles.ratingCell}>
                                        <div className={styles.stars}>
                                            {"★".repeat(Math.floor(p.rating))}
                                            <span style={{ opacity: 0.3 }}>{"★".repeat(5 - Math.floor(p.rating))}</span>
                                        </div>
                                        <div className={styles.ratingValue}>{p.rating} / 5</div>
                                    </div>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Key Specs</td>
                            {products.map((p) => (
                                <td key={p.id}>
                                    <ul className={styles.featureList}>
                                        {Object.entries(p.specifications).slice(0, 4).map(([key, val], i) => (
                                            <li key={i}>
                                                <span className={styles.checkIcon}>✓</span> <strong>{key}:</strong> {val}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <td>Action</td>
                            {products.map((p) => (
                                <td key={p.id}>
                                    <div className={styles.actionCell}>
                                        <a
                                            href={p.affiliateLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.amazonBtn}
                                        >
                                            View on Amazon
                                        </a>
                                    </div>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
