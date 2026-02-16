# Affiliate Pro - Next.js Affiliate Marketing Platform 🚀

**Affiliate Pro** is a high-performance, SEO-optimized affiliate marketing platform built with **Next.js 15**, **TypeScript**, and **Neon Postgres**. It features a premium design, dynamic blog system, real-time product management, and automated Amazon scraping capabilities.

## 🌟 Live Demo
**[Visit Live Site](https://simple-affilliate-site.vercel.app/)**

## ✨ Key Features

### 🛒 High-Converting Product System
*   **Dynamic Product Grid**: Premium cards with badges, ratings, and real-time price updates.
*   **Smart Search**: Fuzzy search engine (Fuse.js) that handles typos and finds products instantly.
*   **Category Pages**: Dedicated landing pages for "Laptops", "Monitors", etc., with side-by-side comparison tables.
*   **Detailed Reviews**: Rich product pages with pros/cons, specs, FAQs, and "Buy on Amazon" CTAs.

### 📝 SEO & Content Engine
*   **Integrated Blog**: A full-featured blog system with author profiles, read times, and categories.
*   **Smart Interlinking**: Blog posts automatically recommend relevant products to drive sales.
*   **Metadata Automation**: Dynamic SEO titles, descriptions, and OpenGraph images for every page.
*   **Sitemap & Robots**: Automatically generated for optimal search engine indexing.

### 🛠️ Powerful Admin Dashboard
*   **Secure Access**: Protected by a secret key (`ADMIN_SECRET`).
*   **Amazon Scraper**: Paste an Amazon link, and the system automatically scrapes the Title, Price, Image, and Rating.
*   **Database Management**: Add, Edit, Quote, and Delete products directly from the UI.
*   **Serverless Backend**: Powered by **Neon Postgres** for scalable, persistent data storage.

## 🏗️ Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Language**: TypeScript
*   **Styling**: CSS Modules (Custom Premium Design)
*   **Database**: Neon Serverless Postgres
*   **Search**: Fuse.js
*   **Deployment**: Vercel

## 📦 Project Structure

```
├── src/
│   ├── app/                # Next.js App Router pages & API routes
│   │   ├── api/            # Backend API (Products, Scraper, Admin)
│   │   ├── admin/          # Admin Dashboard
│   │   ├── blog/           # Blog System
│   │   ├── categories/     # Category Landing Pages
│   │   ├── product/        # Product Details Pages
│   │   ├── search/         # Search Results Page
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable UI Components
│   ├── data/               # Initial JSON Data (Seeding)
│   └── lib/                # Utilities (DB Config, formatting)
├── public/                 # Static Assets
├── schema.sql              # Database Schema
└── next.config.ts          # Next.js Configuration
```

## ⚡ Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/mukithasan232/simple-affilliate-site.git
cd simple-affilliate-site
npm install
```

### 2. Configure Environment
Create a `.env.local` file in the root directory:
```env
# Admin Password (default: admin123)
ADMIN_SECRET=your_secret_password

# Database Connection (Neon Postgres)
DATABASE_URL=postgresql://user:password@host/neondb?sslmode=require
```

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to see the site.
Visit `http://localhost:3000/admin` to manage products.

### 4. Deploy to Vercel
1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Add the `ADMIN_SECRET` and `DATABASE_URL` environment variables in Vercel Settings.
4.  Deploy! Withe the database connected, your product updates will persist live.

## 📝 License
This project is open source and available under the MIT License.
