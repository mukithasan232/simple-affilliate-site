import blogPosts from "@/data/blog.json";
import Link from "next/link";
import styles from "./blog.module.css";

export default function BlogPage() {
    return (
        <div className={styles.blogPage}>
            <div className="container">
                <h1 className="section-title">Latest from our <span className="text-gradient">Blog</span></h1>

                <div className={styles.postGrid}>
                    {blogPosts.map((post) => (
                        <article key={post.id} className={styles.postCard}>
                            <div className={styles.postDate}>{post.date}</div>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                Read More →
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
