const { readData, writeData } = require('../utils/fileHandler');

//Student + Admin: view announcements
exports.getAnnouncements = (req, res) => {
    const announcements = readData('announcements.json');
    res.json(announcements);
};

//Admin: create announcement
exports.createAnnouncement = (req, res) => {
    const { title, message } = req.body;

    if (!title || !message) {
        return res.status(400).json({ message: "Title and message are required" });
    };

    const announcements = readData('announcements.json');
    const newAnnouncement = {
        id: Date.now(),
        title,
        message,
        createdAt: new Date()
    };

    announcements.unshift(newAnnouncement);
    writeData('announcements.json', announcements);

    res.status(201).json({ message: "Announcement posted successfully"});

};