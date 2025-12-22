import express from "express";
import {
  getWebSettings,
  saveWebSettings,
  getSMTPSettings,
  saveSMTPSettings,
} from "../controllers/settingsController.js";

const router = express.Router();

// Web Settings
router.get("/web", getWebSettings);
router.post("/web", saveWebSettings);
// SMTP Settings
router.get("/smtp", getSMTPSettings);
router.post("/smtp", saveSMTPSettings);

export default router;
