import express from "express";
import { registerUser, loginUser } from "../controllers/oauthController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { admin } from "../middlewares/adminMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);


router.get("/admin-only-route", protect, admin, adminController.someFunction);

export default router;