import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <span className="text-gradient">AffiliatePro</span>
                        </Link>
                        <p className={styles.desc}>
                            Your trusted source for honest product reviews, comparisons, and buying guides.
                            Helping you make smarter shopping decisions since 2026.
                        </p>
                    </div>

                    <div className={styles.linksCategory}>
                        <h3>Categories</h3>
                        <ul>
                            <li><Link href="/categories">Technology</Link></li>
                            <li><Link href="/categories">Home & Kitchen</Link></li>
                            <li><Link href="/categories">Gaming</Link></li>
                            <li><Link href="/categories">Lifestyle</Link></li>
                        </ul>
                    </div>

                    <div className={styles.linksCategory}>
                        <h3>Useful Links</h3>
                        <ul>
                            <li><Link href="/blog">Latest Articles</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className={styles.newsletter}>
                        <h3>Newsletter</h3>
                        <p>Get the best deals and tips straight to your inbox.</p>
                        <form className={styles.form}>
                            <input type="email" placeholder="Email address" required />
                            <button type="submit" className="btn btn-primary">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 AffiliatePro. All rights reserved.</p>
                    <p className={styles.disclaimer}>
                        <strong>Amazon Associate Disclaimer:</strong> As an Amazon Associate, we earn from qualifying purchases.
                        Prices and availability are accurate at the time of posting but are subject to change.
                    </p>
                </div>
            </div>
        </footer>
    );
}
