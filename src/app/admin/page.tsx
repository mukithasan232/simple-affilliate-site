"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./admin.module.css";

export default function AdminPage() {
    const { data: session, status } = useSession();
    const [productList, setProductList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [scrapeUrl, setScrapeUrl] = useState("");
    const [editingProduct, setEditingProduct] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletingProductId, setDeletingProductId] = useState<string | null>(null);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        if (session) {
            fetchProducts();
        }
    }, [session]);

    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        if (Array.isArray(data)) {
            setProductList(data);
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");
        const result = await signIn("credentials", {
            username,
            password,
            redirect: false,
        });

        if (result?.error) {
            setLoginError("Invalid username or password");
        }
    };

    const handleManualAdd = () => {
        setEditingProduct({
            title: "",
            price: 0,
            category: "General",
            images: [],
            affiliateLink: "",
            brand: "",
            specifications: {},
            faqs: [],
            pros: [],
            cons: [],
            description: ""
        });
        setIsModalOpen(true);
    };

    const handleScrape = async () => {
        if (!scrapeUrl) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/scrape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: scrapeUrl }),
            });

            if (!res.ok) {
                const text = await res.text();
                let errorMessage = "Failed to scrape product data.";
                try {
                    const errorData = JSON.parse(text);
                    errorMessage = errorData.error || errorMessage;
                } catch (e) {
                    errorMessage = `Server Error (${res.status}). Amazon might be blocking the request.`;
                }
                throw new Error(errorMessage);
            }

            const data = await res.json();
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
            const product = { ...editingProduct };
            if (!product.id) product.id = 'p' + Date.now();
            if (!product.slug) product.slug = product.title.toLowerCase().replace(/[^a-z0-9]/g, '-');

            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
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

    const handleRefresh = async (product: any) => {
        if (!confirm(`Refresh data for ${product.title}? This will re-scrape Amazon.`)) return;
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/scrape", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ url: product.affiliateLink }),
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);

            // Merge new data with old product ID
            const updatedProduct = { ...data, id: product.id, affiliateLink: product.affiliateLink };
            setEditingProduct(updatedProduct);

            // Open modal for review
            setIsModalOpen(true);
        } catch (error: any) {
            alert(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteClick = (id: string) => {
        setDeletingProductId(id);
    };

    const confirmDelete = async () => {
        if (!deletingProductId) return;
        setIsLoading(true);
        try {
            const res = await fetch(`/api/products?id=${deletingProductId}`, {
                method: "DELETE",
            });
            if (res.ok) {
                fetchProducts();
                setDeletingProductId(null);
            } else {
                const data = await res.json();
                alert(data.error || "Delete failed");
            }
        } catch (error) {
            alert("Delete failed");
        } finally {
            setIsLoading(false);
        }
    };

    if (status === "loading") {
        return <div className={styles.loading}>Loading Dashboard...</div>;
    }

    if (!session) {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginForm}>
                    <h1>Admin <span className="text-gradient">Access</span></h1>
                    <p>Enter your credentials to manage your affiliate site.</p>

                    <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={styles.loginInput}
                                required
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-body)' }}
                            />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.loginInput}
                                required
                                style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid var(--border)', background: 'var(--bg-card)', color: 'var(--text-body)' }}
                            />
                        </div>
                        {loginError && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginBottom: '1rem' }}>{loginError}</p>}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            style={{ width: '100%' }}
                        >
                            Log In
                        </button>
                    </form>

                    <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        Don't have an account? <a href="/pricing" style={{ color: 'var(--primary)' }}>View Pricing</a>
                    </p>
                </div>
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
                        <button
                            className="btn"
                            onClick={handleManualAdd}
                            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)' }}
                        >
                            + Manual Add
                        </button>
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
                                        <img src={p.images?.[0]} alt="" className={styles.tableImg} />
                                    </td>
                                    <td>
                                        <div className={styles.titleCell}>{p.title}</div>
                                    </td>
                                    <td><span className={styles.badge}>{p.category}</span></td>
                                    <td><strong>${p.price}</strong></td>
                                    <td className={styles.actions}>
                                        <button className={styles.editBtn} onClick={() => {
                                            setEditingProduct(p);
                                            setIsModalOpen(true);
                                        }}>Edit</button>
                                        <button className={styles.refreshBtn} onClick={() => handleRefresh(p)} title="Re-scrape Price">
                                            ↻
                                        </button>
                                        <button className={styles.deleteBtn} onClick={() => handleDeleteClick(p.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {deletingProductId && (
                <div className={styles.modalOverlay}>
                    <div className={styles.deleteModal}>
                        <h2>Confirm <span className="text-gradient">Deletion</span></h2>
                        <p>Are you sure you want to delete this product? This action cannot be undone.</p>
                        <div className={styles.modalActions}>
                            <button className="btn" onClick={() => setDeletingProductId(null)}>Cancel</button>
                            <button className={`btn ${styles.btnDanger}`} onClick={confirmDelete} disabled={isLoading}>
                                {isLoading ? "Deleting..." : "Delete Permanently"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h2>Confirm <span className="text-gradient">Scraped Data</span></h2>

                        {editingProduct?.images?.[0] && (
                            <div className={styles.scrapedPreview}>
                                <img src={editingProduct.images[0]} alt="Preview" />
                                <p>Image successfully detected</p>
                            </div>
                        )}

                        <form onSubmit={handleSave} className={styles.editForm}>
                            <div className={styles.formGrid}>
                                <div className={styles.formGroup}>
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.title || ""}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Slug (URL handle)</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.slug || ""}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                                        placeholder="e.g., acer-nitro-5"
                                        required
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Image URL</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.images?.[0] || ""}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, images: [e.target.value] })}
                                        placeholder="https://..."
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Price ($)</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={editingProduct?.price || 0}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, price: parseFloat(e.target.value) })}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Category</label>
                                    <select
                                        value={editingProduct?.category || "General"}
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
                                        value={editingProduct?.badge || ""}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, badge: e.target.value })}
                                        placeholder="e.g., Best Overall"
                                    />
                                </div>
                                <div className={styles.formGroup} style={{ gridColumn: 'span 2' }}>
                                    <label>Affiliate Link</label>
                                    <input
                                        type="text"
                                        value={editingProduct?.affiliateLink || ""}
                                        onChange={(e) => setEditingProduct({ ...editingProduct, affiliateLink: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className={styles.modalActions}>
                                <button type="button" className="btn" onClick={() => setIsModalOpen(false)}>Cancel</button>
                                <button type="submit" className="btn btn-primary">
                                    {editingProduct?.id ? "Update Live Product" : "Add to Live Site"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
