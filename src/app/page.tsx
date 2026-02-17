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
          <h2 className="section-title">Explore by <span className="text-gradient">Category</span></h2>
          <div className={styles.categoryGrid}>
            {categories.map((cat) => (
              <Link href={`/categories/${cat.slug}`} key={cat.slug} className={styles.categoryCard}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <h3>{cat.name}</h3>
                <p>{cat.count}+ Expert Reviews</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section id="deals" className={styles.deals}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div>
              <h2 className="section-title" style={{ textAlign: "left", marginBottom: "0.5rem" }}>
                Hot <span className="text-gradient">Deals</span> Right Now
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>Real-time price drops on top-rated electronics.</p>
            </div>
            <Link href="/deals" className={styles.viewAll}>View all deals →</Link>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Comparison Section */}
          <div style={{ marginTop: '6rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 className="section-title">The <span className="text-gradient">Showdown</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>How the top contenders stack up against each other.</p>
            </div>
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
              <h2>We Put Tech to the <span className="text-gradient">Ultimate Test</span></h2>
              <p>
                Our mission is to help you buy the best gear without the headache. We buy, test, and break down every product so you make the right choice every time.
              </p>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <h4>500+</h4>
                  <p>Analyzed</p>
                </div>
                <div className={styles.statItem}>
                  <h4>1.2M</h4>
                  <p>Readers</p>
                </div>
                <div className={styles.statItem}>
                  <h4>100%</h4>
                  <p>Unbiased</p>
                </div>
              </div>
            </div>
            <div className={styles.trustImage}>
              <div className={styles.trustImgGradient}></div>
              <img src="/images/verified.png" alt="Verified Experts" className={styles.trustImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Latest from Blog */}
      <section className={styles.blogSection}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title">Buying <span className="text-gradient">Guides</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Master the market with our deep-dive reviews and tutorials.</p>
          </div>
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
                    <span>👤 {post.author.name}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <Link href="/blog" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Browse All Guides →</Link>
          </div>
        </div>
      </section>

      <section className={styles.saasPromotion}>
        <div className="container">
          <div className={styles.saasCard}>
            <div className={styles.saasText}>
              <span className={styles.badge}>Next-Gen Platform</span>
              <h2>Launch Your <span className="text-gradient">Empire</span></h2>
              <p>Love this high-converting experience? You can launch a similar profitable niche site today with our specialized SaaS toolkit.</p>
              <div className={styles.saasActions}>
                <Link href="/pricing" className="btn btn-primary" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>Get Started Now</Link>
                <Link href="/blog" className={styles.viewAll}>Learn how it works →</Link>
              </div>
            </div>
            <div className={styles.saasVisual}>
              <div className={styles.dashboardPreview}>
                <div className={styles.previewHeader}>
                  <div className={styles.dots}><span /><span /><span /></div>
                  <div className={styles.searchBar}>https://your-empire.com/admin</div>
                </div>
                <div className={styles.previewContent}>
                  <div className={styles.skeletonLine} style={{ width: '60%', background: 'var(--primary)', opacity: 0.3 }} />
                  <div className={styles.skeletonLine} style={{ width: '90%' }} />
                  <div className={styles.skeletonGrid}>
                    <div className={styles.skeletonBox} style={{ background: 'linear-gradient(45deg, #1e293b, #334155)' }} />
                    <div className={styles.skeletonBox} style={{ background: 'linear-gradient(45deg, #1e293b, #334155)' }} />
                    <div className={styles.skeletonBox} style={{ background: 'linear-gradient(45deg, #1e293b, #334155)' }} />
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
