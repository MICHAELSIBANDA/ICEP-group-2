const express = require('express');
const router = express.Router();

const{
    registerStudent,
    loginStudent
} = require('../controllers/authController');

// Register route
router.post('/register', registerStudent);

// Login route
router.post('/login', loginStudent);

module.exports = router;