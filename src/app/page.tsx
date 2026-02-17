import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.css";
import Link from "next/link";
import ComparisonTable from "@/components/ui/ComparisonTable";
import blogPosts from "@/data/blog.json";
import Newsletter from "@/components/ui/Newsletter";
import { getFeaturedProducts } from "@/lib/products";

export default async function Home() {
  const featuredProducts: any[] = await getFeaturedProducts();

  const categories = [
    { name: "Laptops", icon: "💻", slug: "laptops", count: 12 },
    { name: "Peripherals", icon: "⌨️", slug: "peripherals", count: 24 },
    { name: "Audio Gear", icon: "🎧", slug: "audio", count: 18 },
    { name: "Monitors", icon: "🖥️", slug: "monitors", count: 15 },
  ];

  return (
    <div>
      <Hero />

      {/* Featured Categories */}
      <section className={styles.categories}>
        <div className="container">
          <h2 className="section-title">Shop by <span className="text-gradient">Category</span></h2>
          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <Link href={`/categories/${cat.slug}`} key={cat.slug} className={styles.categoryCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.count}+ Products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section id="deals" className={styles.deals}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: 0 }}>
              Today&apos;s <span className="text-gradient">Top Picks</span>
            </h2>
            <Link href="/deals" className={styles.viewAll}>View all deals →</Link>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Comparison Section */}
          <div style={{ marginTop: '4rem' }}>
            <ComparisonTable
              products={featuredProducts.slice(0, 3)}
              title="Best Value Comparison"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className={styles.trust}>
        <div className="container">
          <div className={styles.trustInner}>
            <div className={styles.trustText}>
              <h2>Why Hundreds of Readers <span className="text-gradient">Trust Us</span></h2>
              <p>
                We spend hours testing and researching every product we recommend. Our reviews are
                completely independent, and we only suggest products we would use ourselves.
              </p>
              <div className={styles.stats}>
                <div>
                  <h4>500+</h4>
                  <p>Products Tested</p>
                </div>
                <div>
                  <h4>1M+</h4>
                  <p>Monthly Readers</p>
                </div>
                <div>
                  <h4>100%</h4>
                  <p>Unbiased Reviews</p>
                </div>
              </div>
            </div>
            <div className={styles.trustImage}>
              <img src="/images/verified.png" alt="Verified Experts" className={styles.trustImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className={styles.blogSection}>
        <div className="container">
          <h2 className="section-title">Latest <span className="text-gradient">Insights</span></h2>
          <div className={styles.blogGrid}>
            {blogPosts.slice(0, 3).map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.id} className={styles.blogCard}>
                <div className={styles.blogImgWrapper}>
                  <img src={post.image} alt={post.title} />
                  <span className={styles.blogCat}>{post.category}</span>
                </div>
                <div className={styles.blogContent}>
                  <h3>{post.title}</h3>
                  <div className={styles.blogMeta}>
                    <span>By {post.author.name}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="btn">View All Insights →</Link>
          </div>
        </div>
      </section>

      <section className={styles.saasPromotion}>
        <div className="container">
          <div className={styles.saasCard}>
            <div className={styles.saasText}>
              <span className={styles.badge}>New Feature</span>
              <h2>Start Your Own <span className="text-gradient">Affiliate Business</span></h2>
              <p>Love this site? You can build one exactly like it in minutes. Access our powerful Amazon scraper and conversion-optimized templates.</p>
              <div className={styles.saasActions}>
                <Link href="/pricing" className="btn btn-primary">View Pricing Plans</Link>
                <Link href="/blog" className="viewAll">Learn more →</Link>
              </div>
            </div>
            <div className={styles.saasVisual}>
              <div className={styles.dashboardPreview}>
                <div className={styles.previewHeader}>
                  <div className={styles.dots}><span /><span /><span /></div>
                  <div className={styles.searchBar}>amazon.com/dp/...</div>
                </div>
                <div className={styles.previewContent}>
                  <div className={styles.skeletonLine} style={{ width: '80%' }} />
                  <div className={styles.skeletonLine} style={{ width: '100%', height: '40px' }} />
                  <div className={styles.skeletonGrid}>
                    <div className={styles.skeletonBox} />
                    <div className={styles.skeletonBox} />
                    <div className={styles.skeletonBox} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
