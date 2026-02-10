const { readData } = require('../utils/fileHandler');

exports.getAnnouncements = (req, res) => {
    const announcements = readData('announcements.json');
    res.json(announcements);
};