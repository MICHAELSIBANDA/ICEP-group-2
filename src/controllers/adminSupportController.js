const { readData, writeData } = require("../utils/fileHandler");

exports.getAllSupportRequests = (req, res) => {
  const requests = readData("supportRequests.json");
  res.json(requests);
};

exports.updateSupportStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status is required" });
  }

  const requests = readData("supportRequests.json");

  const requestIndex = requests.findIndex(
    r => r.id === Number(id)
  );

  if (requestIndex === -1) {
    return res.status(404).json({ message: "Support request not found" });
  }

  requests[requestIndex].status = status;

  writeData("supportRequests.json", requests);

  res.json({
    message: "Status updated successfully",
    updatedRequest: requests[requestIndex]
  });
};
