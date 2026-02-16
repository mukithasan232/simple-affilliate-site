import styles from "./FAQ.module.css";

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
    if (!faqs || faqs.length === 0) return null;

    return (
        <section className={styles.faqSection}>
            <h2 className="text-gradient">Common Questions</h2>
            <div className={styles.faqList}>
                {faqs.map((faq, i) => (
                    <div key={i} className={styles.faqItem}>
                        <h4 className={styles.question}>Q: {faq.q}</h4>
                        <p className={styles.answer}>{faq.a}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
