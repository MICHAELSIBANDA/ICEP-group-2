const express = require('express');
const router = express.Router();

// Import the auth middleware
const authMiddleware = require('../middleware/authMiddleware');
const {
    createSupportRequest,
    getMyRequests,
} = require('../controllers/supportController');

//submit a support request
router.post('/', authMiddleware, createSupportRequest);

//view my support requests
router.get('/', authMiddleware, getMyRequests);

module.exports = router;