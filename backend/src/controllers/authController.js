const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { readData, writeData } = require('../utils/fileHandler');

exports.registerStudent = async (req, res) => {
    try {
        const { studentNumber, studentName, password } = req.body;

        //ensure fields are provided
        if (!studentNumber || !studentName || !password) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const students = readData('students.json');

        //check if student number already exists
        const existingStudent = students.find
            (s => s.studentNumber === studentNumber);
        if (existingStudent) {
            return res.status(400).json({ message: "Student number already exists." });
        }

        //hash password
        const hashedPassword = await bycrypt.hash(password, 10);

        //create new student object
        const newStudent = {
            studentNumber,
            studentName,
            password: hashedPassword
        };

        //add new student to students array
        students.push(newStudent);

        //write updated students array back to file
        writeData('students.json', students);

        res.status(201).json({ message: "Registration successful." });
    } catch (error) {
        res.status(500).json({ message: "Registration failed.", error });
    }
};

exports.loginStudent = async (req, res) => {
    try {
        const { studentNumber, password } = req.body;

        const students = readData('students.json');

        //find student by student number
        const student = students.find
            (s => s.studentNumber === studentNumber);
        if (!student) {
            return res.status(400).json({ message: "Invalid student number." });
        }

        //compare provided password with stored hashed password
        const isPasswordValid = await bycrypt.compare(
            password, 
            student.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid password." });
        }

        //generate JWT token
        const token = jwt.sign(
            {
                studentId: student.id,
                studentNumber: student.studentNumber,
                studentName: student.studentName
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        
        res.json({ message: "Login successful.", token });
    } catch (error) {
        res.status(500).json({ message: "Login failed.", error });
    }
            
};