const { readData, writeData } = require('../utils/fileHandler');

exports.submitFeedback = (req, res) => {
    const { message, rating } = req.body;

    // Validation
    if (!message || message.trim() === "") {
        return res.status(400).json({
            message: "Feedback message is required."
        });
    }

    if (rating === undefined || rating === null) {
        return res.status(400).json({
            message: "Rating is required."
        });
    }

    const numericRating = Number(rating);

    if (Number.isNaN(numericRating) || numericRating < 1 || numericRating > 5) {
        return res.status(400).json({
            message: "Rating must be a number between 1 and 5."
        });
    }

    const feedbacks = readData('feedback.json');

    const newFeedback = {
        id: Date.now(),
        studentId: req.user.id,
        message: message.trim(),
        rating: numericRating,
        date: new Date().toISOString()
    };

    feedbacks.push(newFeedback);
    writeData('feedback.json', feedbacks);

    res.status(201).json({
        message: "Feedback submitted successfully."
    });
};

exports.getMyFeedbacks = (req, res) => {
    const feedbacks = readData('feedback.json');

    const studentFeedback = feedbacks.filter(
        fb => fb.studentId === req.user.id
    );

    res.json(studentFeedback);
};
