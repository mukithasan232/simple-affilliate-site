# DealDokan - Affiliate Tech Deals Platform 🛍️

**DealDokan** is a modern, bilingual (English/Bengali) affiliate marketing platform designed to curate the internet's best technology deals. It serves as a daily hub for students, gamers, and professionals seeking budget-friendly laptops, peripherals, and audio gear.

## 🚀 Live Demo
**[Visit DealDokan Live](https://simple-affilliate-site.web.app)**

## ✨ Key Features

### 🌐 Public-Facing Website
*   **Dynamic Product Grid**: Beautiful cards showcasing products with images, tags (e.g., "Best Value", "Budget King"), and price comparisons.
*   **Smart Pricing Engine**: Automatic calculation of discount percentages based on old vs. new prices.
*   **Bilingual Support**: Instant toggle between **English** and **Bengali** for all UI elements and product titles.
*   **Dark Mode**: Fully supported dark/light theme respecting system preferences.
*   **Performance**: Optimized for fast loading on Firebase Hosting.

### 🛠️ Custom Local Admin Panel
*   **Local CMS**: A secure dashboard running locally at `http://localhost:4000/admin.html`.
*   **File-Based Database**: Edits made in the admin panel (prices, titles, tags) directly update the source code files (`index.html` & `translator.js`), eliminating the need for an external database.
*   **Real-time Updates**: Changes are reflected instantly in your local environment, ready for deployment.

## 🛠 Technical Architecture
*   **Frontend**: HTML5, CSS3 (Bootstrap 5 + Custom Styles), Vanilla JavaScript.
*   **Backend (Admin)**: Node.js, Express.
*   **Deployment**: Firebase Hosting.

## 📦 Project Structure
```
├── index.html          # Main landing page
├── admin.html          # Local Admin Panel (Excluded from deploy)
├── style.css           # Global styles and themes
├── translator.js       # Localization logic and data
├── theme.js            # Dark/Light mode logic
├── updatePrice.js      # Pricing calculation logic
├── mcp-server/         # Backend server for Admin Panel
│   ├── server.js       # Express server entry point
│   └── project_utils.js# File manipulation logic
└── firebase.json       # Hosting configuration
```

## ⚡ Quick Start (Local Development)

1.  **Install Dependencies**:
    ```bash
    cd mcp-server
    npm install
    cd ..
    ```

2.  **Start the Admin Server**:
    ```bash
    npm run serve
    ```
    *   Access the Admin Panel at: `http://localhost:4000/admin.html`
    *   (Optional) Run a separate live server for the frontend if needed, though the admin server serves static files too.

3.  **Deploy to Firebase**:
    ```bash
    firebase deploy
    ```

## 📝 License
This project is open source and available under the [ISC License](LICENSE).
