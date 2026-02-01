# DealDokan Management Guide

## 1. Managing Products (The Easy Way)
You do **not** need to touch code to add or edit products.

### Access the Admin Panel
Go to: [http://localhost:4000/admin.html](http://localhost:4000/admin.html)

### How to Add a Product
1. Click the big purple **"Add Product"** button.
2. Select a **Category** (e.g., Laptops).
3. Enter the Title, Price, and Image URL (or upload an image).
4. Click **Add**. It will instantly appear on the main site.

### How to Edit a Product
**Method 1: From the Admin Panel**
1. Search for the product in the list.
2. Click the **Pencil Icon** (Actions column).
3. Change the details and click Save.

**Method 2: From the Main Site (Fastest)**
1. Go to the home page: [http://localhost:4000/](http://localhost:4000/)
2. Hover over any product card.
3. Click the small **Edit Button** that appears in the corner.
4. This takes you directly to the editing screen for that product.

---

## 2. Changing the Design (Colors & Style)
To change the look of the site, you need to edit **`style.css`**.

### Changing Colors
Scroll to the top of `style.css` and find the `:root` section. Change these codes:

```css
:root {
    --primary: #4f46e5;        /* <--- Change this for the main button color */
    --accent: #ec4899;         /* <--- Change this for highlights */
    --bg-body: #f8f9fa;        /* <--- Light mode background */
}
```

### Changing Fonts
To change the font, update this line in `style.css`:
```css
body {
    font-family: 'Inter', sans-serif; /* <--- Replace 'Inter' with another font */
}
```
*Note: You may need to import the new font from Google Fonts in `index.html` head section.*

---

## 3. Changing Text (English & Bangla)
All text is stored in **`translator.js`**.

1. Open `translator.js`.
2. Find the text you want to change (e.g., `"hero_title"`).
3. Edit the English text inside the `en: { ... }` block.
4. Edit the Bangla text inside the `bn: { ... }` block.

---

## 4. Troubleshooting
**"Failed to load data" error?**
- Make sure the backend server is running.
- Run this command in your terminal:
  ```bash
  npm run start-admin
  ```
