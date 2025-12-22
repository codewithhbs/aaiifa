import express from "express";
import {
  getMemberships,
  createMembership,
  deleteMembership,
} from "../controllers/membershipController.js";

const router = express.Router();

router.get("/", getMemberships);
router.post("/", createMembership);
router.delete("/:id", deleteMembership);

export default router;
