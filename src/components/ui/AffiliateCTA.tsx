import styles from "./AffiliateCTA.module.css";

interface AffiliateCTAProps {
    title: string;
    price: number;
    link: string;
    badge?: string;
}

export default function AffiliateCTA({ title, price, link, badge }: AffiliateCTAProps) {
    return (
        <div className={styles.ctaBox}>
            <div className={styles.content}>
                {badge && <span className={styles.badge}>{badge}</span>}
                <h3>{title}</h3>
                <p className={styles.disclosure}>* Price and availability are checked daily</p>
            </div>
            <div className={styles.actions}>
                <div className={styles.price}>${price}</div>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                >
                    View on Amazon
                </a>
            </div>
        </div>
    );
}
