const { readData, writeData } = require('../utils/fileHandler');

exports.submitFeedback = (req, res) => {
    const { message, rating } = req.body;

    if (!message || !rating) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const feedbacks = readData('feedback.json');

    const newFeedback = {
        id: Date.now(),
        studentId: req.user.id,
        message,
        rating,
        date: new Date().toISOString()
    };

    feedbacks.push(newFeedback);
    writeData('feedback.json', feedbacks);

    res.status(201).json({ message: "Feedback submitted successfully." });
};

exports.getMyFeedbacks = (req, res) => {
    const feedback = readData('feedback.json');

    const studentFeedback = feedback.filter(
        fb => fb.studentId === req.user.id
    );
    res.json(studentFeedback);
};