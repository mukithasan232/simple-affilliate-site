import blogPosts from "@/data/blog.json";
import { notFound } from "next/navigation";
import styles from "./post.module.css";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <div className={styles.postPage}>
            <div className="container">
                <article className={styles.article}>
                    <header className={styles.header}>
                        <div className={styles.meta}>
                            <span>{post.date}</span> • <span>By {post.author}</span>
                        </div>
                        <h1 className={styles.title}>{post.title}</h1>
                    </header>

                    <div className={styles.excerpt}>
                        <p>{post.excerpt}</p>
                    </div>

                    <div className={styles.content}>
                        {post.content}
                        <p style={{ marginTop: '2rem' }}>
                            Detailed content for this article is being researched and will be updated soon.
                            In the meantime, check out our recommended products in this category!
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}
