import styles from "./Newsletter.module.css";

export default function Newsletter() {
    return (
        <section className={styles.newsletter}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2>Join the <span className="text-gradient">Inner Circle</span></h2>
                        <p>Get exclusive early access to the best Amazon deals and expert buying guides.</p>
                    </div>
                    <form className={styles.form}>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit" className="btn btn-primary">Join Now</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
