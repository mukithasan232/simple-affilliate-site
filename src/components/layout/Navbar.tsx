"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "../ui/SearchBar";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className="container">
                <div className={styles.navbarInner}>
                    <Link href="/" className={styles.logo}>
                        <span className="text-gradient">AffiliatePro</span>
                    </Link>

                    <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/categories" onClick={() => setIsMenuOpen(false)}>Categories</Link>
                        <SearchBar />
                        <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                        <ThemeToggle />
                        <Link href="/admin" className="btn btn-primary">Admin</Link>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className={isMenuOpen ? styles.open : ""}></span>
                        <span className={isMenuOpen ? styles.open : ""}></span>
                        <span className={isMenuOpen ? styles.open : ""}></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}
