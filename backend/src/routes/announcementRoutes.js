const express = require('express');
const router = express.Router();
const authmiddleware = require('../middleware/authmiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const{
    getAnnouncements,
    createAnnouncement
} = require('../controllers/announcementController');

// Get all announcements
router.get('/', authmiddleware, getAnnouncements);
// Create new announcement (admin only)
router.post('/', authmiddleware, adminMiddleware, createAnnouncement);


module.exports = router;