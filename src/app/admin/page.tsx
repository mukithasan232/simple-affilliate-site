"use client";

import { useState, useEffect } from "react";
import styles from "./admin.module.css";

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [productList, setProductList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [scrapeUrl, setScrapeUrl] = useState("");
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isLoggedIn) {
            fetchProducts();
        }
    }, [isLoggedIn]);

    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProductList(data);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") {
            setIsLoggedIn(true);
        } else {
            alert("Invalid password");
        }
    };

    const handleScrape = async () => {
        if (!scrapeUrl) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/scrape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-admin-secret": password
                },
                body: JSON.stringify({ url: scrapeUrl }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setEditingProduct(data);
            setIsModalOpen(true);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-admin-secret": password
                },
                body: JSON.stringify(editingProduct),
            });
            if (res.ok) {
                alert("Product saved successfully!");
                setIsModalOpen(false);
                fetchProducts();
            }
        } catch (error) {
            alert("Failed to save product");
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this product?")) return;
        try {
            const res = await fetch(`/api/products?id=${id}`, {
                method: "DELETE",
                headers: {
                    "x-admin-secret": password
                }
            });
            if (res.ok) fetchProducts();
            else alert("Action failed. If you're on Vercel, ensure ADMIN_SECRET is set in project settings (fallback: admin123).");
        } catch (error) {
            alert("Delete failed");
        }
    };

    if (!isLoggedIn) {
        return (
            <div className={styles.loginPage}>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <h1>Admin Access</h1>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.loginInput}
                    />
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className={styles.adminDashboard}>
            <div className="container">
                <header className={styles.adminHeader}>
                    <div>
                        <h1>Admin <span className="text-gradient">Dashboard</span></h1>
                        <p>Manage your affiliate products and automation</p>
                    </div>
                    <div className={styles.headerActions}>
                        <div className={styles.scrapeBox}>
                            <input
                                type="text"
                                placeholder="Paste Amazon Link..."
                                value={scrapeUrl}
                                onChange={(e) => setScrapeUrl(e.target.value)}
                            />
                            <button
                                className="btn btn-primary"
                                onClick={handleScrape}
                                disabled={isLoading}
                            >
                                {isLoading ? "Scraping..." : "Smart Add"}
                            </button>
                        </div>
                    </div>
                </header>

                <div className={styles.stats}>
                    <div className={styles.statCard}>
                        <h3>Total Products</h3>
                        <p className={styles.statValue}>{productList.length}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Featured</h3>
                        <p className={styles.statValue}>{productList.filter(p => p.featured).length}</p>
                    </div>
                    <div className={styles.statCard}>
                        <h3>Categories</h3>
                        <p className={styles.statValue}>{[...new Set(productList.map(p => p.category))].length}</p>
                    </div>
                </div>

                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((p) => (
                                <tr key={p.id}>
                                    <td>
                                        <img src={p.image} alt="" className={styles.tableImg} />
                                    </td>
                                    <td>
                                        <div className={styles.titleCell}>{p.title}</div>
                                    </td>
                                    <td><span className={styles.badge}>{p.category}</span></td>
                                    <td><strong>${p.price}</strong></td>
                                    <td className={styles.actions}>
                                        <button className={styles.deleteBtn} onClick={() => handleDelete(p.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>Confirm <span className="text-gradient">Scraped Data</span></h2>
                        <form onSubmit={handleSave} className={styles.editForm}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.title}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={editingProduct?.price}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <select
                                        value={editingProduct?.category}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                                    >
                                        <option value="Laptops">Laptops</option>
                                        <option value="Peripherals">Peripherals</option>
                                        <option value="Audio">Audio</option>
                                        <option value="Monitors">Monitors</option>
                                        <option value="General">General</option>
                                    </select>
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Badge</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.badge}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                                        placeholder="e.g., Best Overall"
                                    />
                                </div>
                            </div>
                            <div className={styles.modalActions}>
                                <button type="button" className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add Product To Live Site</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
