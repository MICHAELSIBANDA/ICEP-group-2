const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authmiddleware");
const { deleteStudent, restoreStudent, getAllStudents } = require("../controllers/studentsController");

// Get all students
router.get("/", authMiddleware, getAllStudents);

// Delete a student
router.delete("/:id", authMiddleware, deleteStudent);

// Restore a student
router.post("/restore/:id", authMiddleware, restoreStudent);

module.exports = router;
