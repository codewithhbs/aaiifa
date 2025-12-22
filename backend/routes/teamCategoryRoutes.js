import express from "express";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
  toggleCategoryStatus
} from "../controllers/teamCategoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getCategories);
router.put("/:id", updateCategory);  
router.put("/:id/status", toggleCategoryStatus);
router.delete("/:id", deleteCategory);

export default router;
