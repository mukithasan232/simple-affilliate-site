import blogPosts from "@/data/blog.json";
import { notFound } from "next/navigation";
import styles from "./article.module.css";
import ProductCard from "@/components/product/ProductCard";
import { getProductsByIds } from "@/lib/products";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | Affiliate Pro`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        notFound();
    }

    const recommendedProducts: any[] = await getProductsByIds(post.recommendedProducts || []);

    // Schema Markup for Article
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author.name
        },
        "datePublished": post.date,
        "description": post.excerpt
    };

    return (
        <article className={styles.articlePage}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="container-small">
                <header className={styles.header}>
                    <div className={styles.category}>{post.category}</div>
                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.authorBar}>
                        <img src={post.author.avatar || "/images/default-avatar.jpg"} alt={post.author.name} className={styles.avatar} />
                        <div className={styles.authorInfo}>
                            <strong>{post.author.name}</strong>
                            <span>{post.author.role} • {new Date(post.date).toLocaleDateString()}</span>
                        </div>
                    </div>
                </header>

                <div className={styles.heroImage}>
                    <img src={post.image} alt={post.title} />
                </div>

                <div className={styles.content}>
                    {post.content.split('\n\n').map((para, i) => {
                        if (para.startsWith('###')) {
                            return <h3 key={i}>{para.replace('###', '').trim()}</h3>;
                        }
                        return <p key={i}>{para}</p>;
                    })}
                </div>

                {recommendedProducts.length > 0 && (
                    <section className={styles.recommendations}>
                        <h2 className="section-title">Top Recommended <span className="text-gradient">Gear</span></h2>
                        <div className={styles.productGrid}>
                            {recommendedProducts.map((product: any) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </article>
    );
}
