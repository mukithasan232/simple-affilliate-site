import Link from "next/link";
import blogPosts from "@/data/blog.json";
import styles from "./blog.module.css";
import Image from "next/image";

export const metadata = {
    title: "Expert Tech Reviews & Buying Guides | Affiliate Pro Blog",
    description: "Stay updated with the latest in tech. Our experts research and review the best gadgets to help you make informed buying decisions.",
};

export default function BlogPage() {
    return (
        <div className={styles.blogPage}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className="section-title">Tech <span className="text-gradient">Insights</span></h1>
                    <p className={styles.subtitle}>In-depth analysis and expert guides to elevate your digital life.</p>
                </header>

                <div className={styles.grid}>
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`} key={post.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <div className={styles.categoryBadge}>{post.category}</div>
                                <img src={post.image} alt={post.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <div className={styles.meta}>
                                    <span>{post.author.name}</span>
                                    <span className={styles.dot}>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h2 className={styles.title}>{post.title}</h2>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <span className={styles.readMore}>Read Article →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
