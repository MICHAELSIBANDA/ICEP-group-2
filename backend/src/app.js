require("dotenv").config();

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const announcementRoutes = require("./routes/announcementRoutes");
const supportRoutes = require("./routes/supportRoutes");
const feedBackRoutes = require("./routes/feedBackRoutes");
const adminFeedbackRoutes = require("./routes/adminFeedbackRoutes");
const adminSupportRoutes = require("./routes/adminSupportRoutes");
const adminReportRoutes = require("./routes/adminReportRoutes");
const studentsRoutes = require("./routes/studentsRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/announcements", announcementRoutes);
app.use("/api/support", supportRoutes);
app.use("/api/feedback", feedBackRoutes);
app.use("/api/admin/feedback", adminFeedbackRoutes);
app.use("/api/admin/support", adminSupportRoutes);
app.use("/api/students", studentsRoutes);
app.use("/api/admin/report", adminReportRoutes);

// Health check route
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "CampusConnect backend is running." });
});

module.exports = app;
