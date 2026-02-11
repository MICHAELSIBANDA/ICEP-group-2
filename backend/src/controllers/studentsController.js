const { readData, writeData } = require("../utils/fileHandler");

// Get all students
exports.getAllStudents = (req, res) => {
  const students = readData("students.json");
  res.json(students);
};

// Delete a student
exports.deleteStudent = (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });

  const studentId = req.params.id;
  const students = readData("students.json");

  const index = students.findIndex((s) => s.id.toString() === studentId);
  if (index === -1) return res.status(404).json({ message: "Student not found" });

  const [deletedStudent] = students.splice(index, 1);
  writeData("students.json", students);

  res.json({ message: "Student deleted successfully", deletedStudent });
};

// Restore a student
exports.restoreStudent = (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });

  const restoredStudent = req.body;
  const students = readData("students.json");

  if (!students.find((s) => s.id.toString() === restoredStudent.id.toString())) {
    students.push(restoredStudent);
    writeData("students.json", students);
  }

  res.json({ message: "Student restored successfully" });
};
