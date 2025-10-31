import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getMitra = (req, res) => {
  try {
    const dataPath = path.join(__dirname, "../data/mitra.json");
    const jsonData = fs.readFileSync(dataPath, "utf-8");
    const mitra = JSON.parse(jsonData);
    res.status(200).json(mitra);
  } catch (error) {
    res.status(500).json({ message: "Gagal membaca data mitra", error });
  }
};
