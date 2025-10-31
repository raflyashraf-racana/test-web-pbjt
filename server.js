import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import mitraRoutes from "./backend/routes/mitraRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Path setup (karena pakai ES Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint
app.use("/api/mitra", mitraRoutes);

// Serve React build files
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
