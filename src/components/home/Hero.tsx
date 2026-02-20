import styles from "./Hero.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.saleBanner}>
                        <span className={styles.pulse}></span>
                        Flash Sale: Up to 40% Off Premium Gear
                    </div>
                    <h1 className={styles.title}>
                        The Ultimate Guide to <span className="text-gradient">Premium Gear</span> & Daily Deals
                    </h1>
                    <p className={styles.subtitle}>
                        We research, test, and compare the best products on Amazon so you don&apos;t have to.
                        Smart shopping starts here with honest reviews and real-time deals.
                    </p>
                    <div className={styles.actions}>
                        <Link href="#deals" className="btn btn-primary">Today&apos;s Top Deals</Link>
                        <Link href="/categories" className="btn btn-accent">Browse Categories</Link>
                    </div>
                </div>
            </div>
            <div className={styles.bgGlow}></div>
        </section>
    );
}
