const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');
const { readData, writeData } = require('../utils/fileHandler');


router.get('/', authMiddleware, adminMiddleware, (req, res) => {
    const requests = readData('supportRequests.json');
    res.json(requests);
});

router.patch('/:id', authMiddleware, adminMiddleware, (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
        return res.status(400).json({ message: "Status is required." });
    }

    const requests = readData('supportRequests.json');
    const requestIndex = requests.findIndex(r => r.id === parseInt(id));

    if (requestIndex === -1) {
        return res.status(404).json({ message: "Request not found." });
    }

    requests[requestIndex].status = status;
    writeData('supportRequests.json', requests);

    res.json({ message: "Request updated successfully." });
});

module.exports = router;