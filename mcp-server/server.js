import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { getProjectData, updateProduct, addCategory, addProduct as addProductToProject, updateTheme } from "./project_utils.js";
import bodyParser from "body-parser";
import multer from "multer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 4000;
const ADMIN_API_KEY = process.env.ADMIN_KEY || "secret123";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, ".."))); // Serve project root

// Multer Config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(path.resolve(__dirname, ".."), "image"));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
    res.sendFile(path.join(path.resolve(__dirname, ".."), "index.html"));
});

// Middleware for Auth
const checkAuth = (req, res, next) => {
    const apiKey = req.headers["x-api-key"] || req.query.api_key;
    if (apiKey === ADMIN_API_KEY) {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }
};

app.get("/api/products", async (req, res) => {
    try {
        const data = await getProjectData();
        res.json(data); // Returns { products, categories, translations }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/products/add", checkAuth, async (req, res) => {
    try {
        await addProductToProject(req.body);
        res.json({ success: true, message: "Product added" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/products/:id", checkAuth, async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = { ...req.body, id };

        await updateProduct(updateData);
        res.json({ success: true, message: `Product ${id} updated` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/categories", checkAuth, async (req, res) => {
    try {
        await addCategory(req.body);
        res.json({ success: true, message: "Category created" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/api/theme", checkAuth, async (req, res) => {
    try {
        await updateTheme(req.body);
        res.json({ success: true, message: "Theme updated" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.post("/api/upload", checkAuth, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        // Return relative path for frontend usage
        const relativePath = "image/" + req.file.filename;
        res.json({ path: relativePath });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Admin server running at http://localhost:${PORT}`);
    console.log(`API Key: ${ADMIN_API_KEY}`);
});
