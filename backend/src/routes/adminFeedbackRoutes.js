const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const { readData } = require("../utils/fileHandler");

router.get("/", authMiddleware, adminMiddleware, (req, res) => {
  const feedback = readData("feedback.json");
  res.json(feedback);
});

module.exports = router;
