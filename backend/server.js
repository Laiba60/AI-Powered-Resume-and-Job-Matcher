// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Import dependencies
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"; 

// Import routes
import authRoutes from "./routes/authRoutes.js";
import resumeRoute from "./routes/resumeRoute.js";

// Initialize Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});