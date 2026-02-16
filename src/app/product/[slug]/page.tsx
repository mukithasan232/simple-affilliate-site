import { getProductBySlug, getProductsByCategory } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import styles from "./product.module.css";
import Rating from "@/components/ui/Rating";
import ProsCons from "@/components/ui/ProsCons";
import FAQ from "@/components/ui/FAQ";
import AffiliateCTA from "@/components/ui/AffiliateCTA";
import ComparisonTable from "@/components/ui/ComparisonTable";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    const relatedProducts = getProductsByCategory(product.category).filter((p: any) => p.id !== product.id);

    // Schema Markup
    const jsonLd = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": [product.image],
        "description": product.reviewSummary,
        "brand": {
            "@type": "Brand",
            "name": product.category
        },
        "offers": {
            "@type": "Offer",
            "url": product.link,
            "priceCurrency": "USD",
            "price": product.price,
            "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": product.rating, // Correct placement for ratingValue
            "reviewCount": "128"
        }
    };

    return (
        <div className={styles.productPage}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Sticky Buy Bar */}
            <div className={styles.stickyBar}>
                <div className="container">
                    <div className={styles.stickyInner}>
                        <div className={styles.stickyInfo}>
                            <img src={product.image} alt="" className={styles.stickyImg} />
                            <div>
                                <strong>{product.title}</strong>
                                <p>${product.price}</p>
                            </div>
                        </div>
                        <a href={product.link} target="_blank" className="btn btn-primary">
                            Check Price on Amazon
                        </a>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Breadcrumbs */}
                <nav className={styles.breadcrumbs}>
                    <a href="/">Home</a> / <a href="/categories">Categories</a> / <span>{product.title}</span>
                </nav>

                <div className={styles.mainGrid}>
                    <div className={styles.gallery}>
                        <div className={styles.mainImage}>
                            <Image src={product.image} alt={product.title} width={600} height={600} priority />
                        </div>
                    </div>

                    <div className={styles.info}>
                        <span className={styles.category}>{product.category}</span>
                        <h1 className={styles.title}>{product.title}</h1>

                        <Rating value={product.rating} count={128} />

                        <div className={styles.priceSection}>
                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>${product.price}</span>
                                {product.oldPrice && <span className={styles.oldPrice}>${product.oldPrice}</span>}
                            </div>
                            <a href={product.link} target="_blank" className="btn btn-primary">
                                View Price on Amazon
                            </a>
                        </div>

                        <div className={styles.summary}>
                            <h3>Our Expert Review</h3>
                            <p>{product.reviewSummary}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.reviewContent}>
                    <ProsCons pros={product.pros} cons={product.cons} />

                    <section className={styles.features}>
                        <h3>Technical <span className="text-gradient">Specifications</span></h3>
                        <div className={styles.featureGrid}>
                            {product.features.map((feature, i) => (
                                <div key={i} className={styles.featureItem}>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {relatedProducts.length > 0 && (
                        <div style={{ margin: '6rem 0' }}>
                            <ComparisonTable
                                products={[product, ...relatedProducts]}
                                title={`Compare with other ${product.category}`}
                            />
                        </div>
                    )}

                    <AffiliateCTA
                        title={`Ready to upgrade? Get the ${product.title} today.`}
                        price={product.price}
                        link={product.link}
                        badge={product.badge}
                    />

                    <FAQ faqs={product.faqs} />
                </div>
            </div>
        </div>
    );
}
