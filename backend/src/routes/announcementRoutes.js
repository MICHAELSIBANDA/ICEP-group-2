const express = require('express');
const router = express.Router();

const{
    getAnnouncements
} = require('../controllers/announcementController');

// Get all announcements
router.get('/', getAnnouncements);

module.exports = router;