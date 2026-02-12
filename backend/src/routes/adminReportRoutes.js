const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const { readData } = require('../utils/fileHandler');

router.get('/', authMiddleware, adminMiddleware, (req, res) => {
  const announcements = readData('announcements.json');
  const feedback = readData('feedback.json');
  const students = readData('students.json');
  const support = readData('supportRequests.json');
  const users = readData('students.json');
  

  const totalAnnouncements = announcements.length;
  const totalFeedback = feedback.length;
  const totalStudents = students.length;
  const totalSupport = support.length;
  const totalUsers = Array.isArray(users) ? users.length : 0;

  const supportByStatus = support.reduce((acc, r) => {
    const status = r.status || 'Unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const ratings = feedback.map(f => Number(f.rating)).filter(r => !isNaN(r));
  const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2) : null;

  res.json({
    totalAnnouncements,
    totalFeedback,
    totalStudents,
    totalSupport,
    totalUsers,
    supportByStatus,
    avgRating
  });
});

module.exports = router;
