const{ readData, writeData } = require('../utils/fileHandler');

exports.createSupportRequest = (req, res) => {
    const{type, description} = req.body;

    if(!type || !description){
        return res.status(400).json({message: "All fields are required."});
    }

    const supportRequests = readData('supportRequests.json');

    const newRequest = {
        id: Date.now(),
        studentId: req.user.id,
        type,
        description,
        status: "Pending",
        createdAt: new Date()
    };

    supportRequests.push(newRequest);
    writeData('supportRequests.json', supportRequests);

    res.status(201).json({message: "Support request created successfully."});
};

exports.getMyRequests = (req, res) => {
  const requests = readData("supportRequests.json");

  const myRequests = requests.filter(
    (r) => r.studentId === req.user.id
  );
  res.json(myRequests);
};  
