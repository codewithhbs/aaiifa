import express from "express";
import { dashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();
router.get("/stats", dashboardStats);

export default router;
