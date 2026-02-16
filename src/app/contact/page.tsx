import styles from "./static.module.css";

export default function ContactPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className="section-title">Contact <span className="text-gradient">Us</span></h1>
                <div className={styles.content}>
                    <p>
                        Have a question about a review or want us to test a specific product?
                        We&apos;d love to hear from you.
                    </p>
                    <form className={styles.contactForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Your Name" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Your Email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows={5} placeholder="How can we help?"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
