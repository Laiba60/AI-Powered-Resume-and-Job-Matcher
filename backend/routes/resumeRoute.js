import express from "express";
import { getResumeAnalysis } from "../controllers/resumeController.js";

const router = express.Router();

router.get("/analyze", getResumeAnalysis);

export default router;