import styles from "./static.module.css";

export default function PrivacyPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className="section-title">Privacy <span className="text-gradient">Policy</span></h1>
                <div className={styles.content}>
                    <p>Last updated: February 16, 2026</p>
                    <p>
                        At AffiliatePro, we take your privacy seriously. This policy describes what information we collect
                        and how we use it.
                    </p>
                    <h2>Information Collection</h2>
                    <p>
                        We collect information when you subscribe to our newsletter, such as your email address.
                        We also use cookies to analyze site traffic and improve your browsing experience.
                    </p>
                    <h2>Data Usage</h2>
                    <p>
                        Your data is used solely to provide services to you, such as sending requested newsletters
                        or personalizing content. We do not sell your personal information to third parties.
                    </p>
                </div>
            </div>
        </div>
    );
}
