import Link from "next/link";
import styles from "./pricing.module.css";
import { Check } from "lucide-react";

const tiers = [
    {
        name: "Starter",
        price: "19",
        description: "Perfect for beginners starting their affiliate journey.",
        features: [
            "Up to 50 Products",
            "Smart Amazon Scraper",
            "Basic SEO Optimization",
            "Custom Domain Support",
            "Standard Support"
        ],
        buttonText: "Start Free Trial",
        link: "/api/auth/signin",
        highlighted: false
    },
    {
        name: "Pro",
        price: "49",
        description: "Advanced tools for scaling your affiliate business.",
        features: [
            "Unlimited Products",
            "Priority Scraping Queue",
            "AI Content Generation",
            "Advanced Analytics",
            "Priority 24/7 Support",
            "Bulk Import/Export"
        ],
        buttonText: "Get Pro Access",
        link: "/api/auth/signin",
        highlighted: true
    },
    {
        name: "Enterprise",
        price: "99",
        description: "Custom solutions for large affiliate networks.",
        features: [
            "Whitelabel Dashboard",
            "Team Collaboration",
            "API Access",
            "Dedicated Account Manager",
            "Custom Integrations"
        ],
        buttonText: "Contact Sales",
        link: "mailto:sales@affiliatepro.com",
        highlighted: false
    }
];

export default function PricingPage() {
    return (
        <div className={styles.pricingPage}>
            <div className="container">
                <header className={styles.header}>
                    <h1 className="text-gradient">Choose Your Plan</h1>
                    <p>Start your professional affiliate site in minutes. No credit card required to start.</p>
                </header>

                <div className={styles.grid}>
                    {tiers.map((tier) => (
                        <div key={tier.name} className={`${styles.card} ${tier.highlighted ? styles.highlighted : ""}`}>
                            {tier.highlighted && <span className={styles.tag}>Most Popular</span>}
                            <div className={styles.cardHeader}>
                                <h3>{tier.name}</h3>
                                <div className={styles.price}>
                                    <span className={styles.currency}>$</span>
                                    <span className={styles.amount}>{tier.price}</span>
                                    <span className={styles.period}>/mo</span>
                                </div>
                                <p>{tier.description}</p>
                            </div>

                            <ul className={styles.features}>
                                {tier.features.map((feature) => (
                                    <li key={feature}>
                                        <Check className={styles.icon} size={20} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.link}
                                className={`btn ${tier.highlighted ? "btn-primary" : "btn-secondary"} ${styles.btn}`}
                            >
                                {tier.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className={styles.faq}>
                    <h2>Frequently Asked Questions</h2>
                    <div className={styles.faqGrid}>
                        <div>
                            <h4>Can I change plans later?</h4>
                            <p>Yes, you can upgrade or downgrade your plan at any time from your dashboard settings.</p>
                        </div>
                        <div>
                            <h4>Is there a free trial?</h4>
                            <p>We offer a 14-day free trial on our Starter and Pro plans so you can test all features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
