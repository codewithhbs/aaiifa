import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import teamRoutes from "./routes/teamRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";
import membershipRoutes from "./routes/membershipRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import steelQueryRoutes from "./routes/steelQueryRoutes.js";
import newsletterRoutes from "./routes/newsletterRoutes.js";
import teamCategoryRoutes from "./routes/teamCategoryRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.get("/", (req, res) => {
  res.send("AAIIFA API is running");
});
app.use("/api/auth", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/settings", settingsRoutes);
app.use("/api/membership", membershipRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/steel-query", steelQueryRoutes);
app.use("/api/newsletter", newsletterRoutes);
app.use("/api/team-categories", teamCategoryRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
