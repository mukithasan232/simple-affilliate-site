"use client";

import { useState, useEffect } from "react";
import styles from "./ExitIntent.module.css";

export default function ExitIntent() {
    const [show, setShow] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !dismissed) {
                setShow(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [dismissed]);

    if (!show) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.close} onClick={() => { setShow(false); setDismissed(true); }}>×</button>
                <h2>Wait! Don&apos;t Miss This <span className="text-gradient">Exclusive Deal</span></h2>
                <p>Subscribe to our newsletter and get a secret list of Amazon coupons!</p>
                <form className={styles.form}>
                    <input type="email" placeholder="Email address" required />
                    <button type="submit" className="btn btn-primary">Send Me the List</button>
                </form>
            </div>
        </div>
    );
}
