const express = require('express');
const router = express.Router();    

const authMiddleware = require('../middleware/authMiddleware');
const {
    submitFeedback,
    getMyFeedbacks
} = require('../controllers/feedbackController');

//submit feedback
router.post('/', authMiddleware, submitFeedback);

//get my feedback
router.get('/', authMiddleware, getMyFeedbacks);

module.exports = router;