import express from "express";
import {
  createSteelQuery,
  getSteelQueries,
  deleteSteelQuery,
} from "../controllers/steelHandbookController.js";

const router = express.Router();

router.post("/", createSteelQuery);     
router.get("/", getSteelQueries);       
router.delete("/:id", deleteSteelQuery);

export default router;
