import styles from "./Testimonials.module.css";
import Image from "next/image";

const testimonials = [
    {
        name: "James Wilson",
        role: "Tech Enthusiast",
        content: "This site saved me hours of research. The comparison tables are incredibly helpful and spot on.",
        avatar: "/images/avatars/user1.png"
    },
    {
        name: "Sarah Chen",
        role: "Graphic Designer",
        content: "Found my perfect monitor setup through their expert guides. Highly recommend the depth of their reviews.",
        avatar: "/images/avatars/user2.png"
    },
    {
        name: "Michael Ross",
        role: "Professional Gamer",
        content: "The real-time deals are a game changer. I managed to snag a top-tier GPU at its lowest price.",
        avatar: "/images/avatars/user3.png"
    }
];

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 className="section-title">What Our <span className="text-gradient">Readers</span> Say</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '-1.5rem' }}>Trusted by over 1.2M readers for honest product advice.</p>
                </div>
                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.content}>
                                <p>&quot;{t.content}&quot;</p>
                            </div>
                            <div className={styles.user}>
                                <div className={styles.avatar}>
                                    {t.name.charAt(0)}
                                </div>
                                <div className={styles.info}>
                                    <h4>{t.name}</h4>
                                    <p>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
