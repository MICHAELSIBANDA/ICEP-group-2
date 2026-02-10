const fs = require('fs');
const path = require('path');

const getFilePath = (filename) => {
    return path.join(__dirname, '..', 'data', filename);
};

const readData = (fileName) => {
    const filePath = getFilePath(fileName);

    if (!fs.existsSync(filePath)) {
        return [];
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
};  

const writeData = (fileName, data) => {
    const filePath = getFilePath(fileName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = {
    readData,
    writeData
};
