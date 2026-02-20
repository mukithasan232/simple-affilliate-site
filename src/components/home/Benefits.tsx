import styles from "./Benefits.module.css";
import { ShieldCheck, Zap, Truck, RotateCcw } from "lucide-react";

const benefits = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Verified Reviews",
        description: "We only recommend products with a proven track record of quality and reliability."
    },
    {
        icon: <Zap size={32} />,
        title: "Instant Comparison",
        description: "Compare the latest specs and prices across top brands in seconds."
    },
    {
        icon: <Truck size={32} />,
        title: "Fast Shipping",
        description: "Direct links to products with Prime shipping for the fastest possible delivery."
    },
    {
        icon: <RotateCcw size={32} />,
        title: "Better Choices",
        description: "Decrease your return rate by making the right choice the first time."
    }
];

export default function Benefits() {
    return (
        <section className={styles.benefits}>
            <div className="container">
                <div className={styles.grid}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.iconWrapper}>
                                {benefit.icon}
                            </div>
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
