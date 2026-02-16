import styles from "./static.module.css";

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className="section-title">About <span className="text-gradient">AffiliatePro</span></h1>
                <div className={styles.content}>
                    <p>
                        Welcome to AffiliatePro, your premier destination for unbiased product reviews and expert buying guides.
                        Founded in 2026, our mission is to help consumers make smarter, more informed shopping decisions
                        in an increasingly complex marketplace.
                    </p>
                    <h2>How We Work</h2>
                    <p>
                        We spend hundreds of hours researching and testing products in various categories.
                        Our reviews are based on technical specifications, real-world performance, and extensive user feedback analysis.
                    </p>
                    <h2>Affiliate Disclosure</h2>
                    <p>
                        AffiliatePro participates in the Amazon Services LLC Associates Program, an affiliate advertising program
                        designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
                        This comes at no extra cost to you and helps support our research efforts.
                    </p>
                </div>
            </div>
        </div>
    );
}
