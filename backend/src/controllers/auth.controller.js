const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { readJSON, writeJSON } = require("../utils/fileHandler");

exports.register = async (req, res) => {
  const { studentNumber, name, email, password } = req.body;

  const users = readJSON("users.json");

  const exists = users.find(u => u.studentNumber === studentNumber);
  if (exists) return res.status(400).json({ message: "Student already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    studentNumber,
    name,
    email,
    password: hashedPassword
  });

  writeJSON("users.json", users);
  res.json({ message: "Registration successful" });
};

exports.login = async (req, res) => {
  const { studentNumber, password } = req.body;

  const users = readJSON("users.json");
  const user = users.find(u => u.studentNumber === studentNumber);

  if (!user) return res.status(404).json({ message: "User not found" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, studentNumber: user.studentNumber },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ token });
};
