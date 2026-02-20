import Hero from "@/components/home/Hero";
import ProductCard from "@/components/product/ProductCard";
import styles from "./page.module.css";
import Link from "next/link";
import ComparisonTable from "@/components/ui/ComparisonTable";
import blogPosts from "@/data/blog.json";
import Newsletter from "@/components/ui/Newsletter";
import { getFeaturedProducts } from "@/lib/products";
import Benefits from "@/components/home/Benefits";
import Testimonials from "@/components/home/Testimonials";

export default async function Home() {
  const featuredProducts: any[] = await getFeaturedProducts();
  const laptopProducts = featuredProducts.filter(p => p.category.toLowerCase() === 'laptops').slice(0, 2);
  const audioProducts = featuredProducts.filter(p => p.category.toLowerCase() === 'audio').slice(0, 2);

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
      <Benefits />

      {/* Featured Categories */}
      <section className={styles.categories}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 className="section-title">Shop by <span className="text-gradient">Department</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '-1.5rem' }}>Find exactly what you need in our expert-curated categories.</p>
          </div>
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

      {/* Category Spotlight - Laptops */}
      {laptopProducts.length > 0 && (
        <section className={styles.spotlight}>
          <div className="container">
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightText}>
                <span className={styles.catBadge}>Best for Performance</span>
                <h2>Premium <span className="text-gradient">Laptops</span></h2>
                <p>From ultrabooks to gaming beasts, we&apos;ve tested the top performers for 2025.</p>
                <Link href="/categories/laptops" className="btn btn-primary">See All Laptops →</Link>
              </div>
              <div className={styles.spotlightProducts}>
                {laptopProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
            {featuredProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Spotlight - Audio Gear */}
      {audioProducts.length > 0 && (
        <section className={styles.spotlight} style={{ background: 'var(--bg-body)' }}>
          <div className="container">
            <div className={styles.spotlightCard} style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%)' }}>
              <div className={styles.spotlightProducts}>
                {audioProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className={styles.spotlightText}>
                <span className={styles.catBadge} style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>Immersive Audio</span>
                <h2>Best <span className="text-gradient">Audio Gear</span></h2>
                <p>Crisp sound, deep bass, and total immersion. Discover our top picks for audiophiles.</p>
                <Link href="/categories/audio" className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #6366f1 100%)' }}>Shop Audio Gear →</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Comparison Section */}
      <section className={styles.comparison}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">The <span className="text-gradient">Showdown</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>How the top contenders stack up against each other.</p>
          </div>
          <ComparisonTable
            products={featuredProducts.slice(0, 3)}
            title="Best Value Comparison"
          />
        </div>
      </section>

      <Testimonials />

      {/* Trending Now */}
      <section className={styles.deals} style={{ background: 'rgba(99, 102, 241, 0.02)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Trending <span className="text-gradient">Products</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '-1.5rem' }}>Most popular items based on our reader data.</p>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.filter(p => p.rating >= 4.7).slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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

      {/* New Arrivals */}
      <section className={styles.deals}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="section-title" style={{ textAlign: "left", marginBottom: "0" }}>
              New <span className="text-gradient">Arrivals</span>
            </h2>
            <Link href="/categories" className={styles.viewAll}>Explore all categories →</Link>
          </div>
          <div className={styles.productGrid}>
            {featuredProducts.slice(-4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
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
