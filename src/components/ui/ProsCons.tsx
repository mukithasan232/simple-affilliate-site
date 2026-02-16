import styles from "./ProsCons.module.css";

interface ProsConsProps {
    pros: string[];
    cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
    return (
        <div className={styles.container}>
            <div className={styles.prosCard}>
                <h3>What we Liked</h3>
                <ul>
                    {pros.map((p, i) => (
                        <li key={i}>
                            <span className={styles.check}>✓</span> {p}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.consCard}>
                <h3>What could be better</h3>
                <ul>
                    {cons.map((c, i) => (
                        <li key={i}>
                            <span className={styles.cross}>×</span> {c}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
