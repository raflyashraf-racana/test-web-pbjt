import express from "express";
import { getMitra } from "../controllers/mitraController.js";

const router = express.Router();

// Endpoint: /api/mitra
router.get("/", getMitra);

export default router;
