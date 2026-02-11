const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { readData, writeData } = require("../utils/fileHandler");

const ADMINS = [
  {
    id: "admin1",
    studentNumber: process.env.ADMIN1_STUDENT_NUMBER,
    hashedPassword: process.env.ADMIN1_HASHED_PASSWORD,
    studentName: process.env.ADMIN1_NAME,
    role: "admin"
  },
  {
    id: "admin2",
    studentNumber: process.env.ADMIN2_STUDENT_NUMBER,
    hashedPassword: process.env.ADMIN2_HASHED_PASSWORD,
    studentName: process.env.ADMIN2_NAME,
    role: "admin"
  }
];

exports.registerStudent = async (req, res) => {
  try {
    const { studentNumber, studentName, password } = req.body;

    if (!studentNumber || !studentName || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const students = readData("students.json");

    const existingStudent = students.find(
      s => s.studentNumber === studentNumber
    );

    if (existingStudent) {
      return res.status(400).json({ message: "Student number already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = {
      id: Date.now(),
      studentNumber,
      studentName,
      role: "student",
      password: hashedPassword
    };

    students.push(newStudent);
    writeData("students.json", students);

    res.status(201).json({ message: "Registration successful." });

  } catch (error) {
    res.status(500).json({ message: "Registration failed.", error });
  }
};


exports.loginStudent = async (req, res) => {
  try {
    const { studentNumber, password } = req.body;

   
    const admin = ADMINS.find(
      a => a.studentNumber === studentNumber
    );

    if (admin) {
      const isAdminPasswordValid = await bcrypt.compare(
        password,
        admin.hashedPassword
      );

    if (!isAdminPasswordValid) {
      return res.status(401).json({ message: "Invalid admin credentials." });
    }

    const token = jwt.sign(
      {
        id: admin.id,
        studentNumber: admin.studentNumber,
        studentName: admin.studentName,
        role: admin.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.json({
      message: "Admin login successful.",
      token
    });
  
  }
    const students = readData("students.json");

    const student = students.find(
      s => s.studentNumber === studentNumber
    );

    if (!student) {
      return res.status(400).json({ message: "Invalid student number." });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      student.password
    );

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password." });
    }

    const token = jwt.sign(
      {
        id: student.id,
        studentNumber: student.studentNumber,
        studentName: student.studentName,
        role: student.role
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login successful.",
      token
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed.", error });
  }

};
