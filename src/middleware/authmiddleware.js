const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  //check if token is present
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    //Verify the token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //attach the decoded user info to request 
    req.user = decoded; 

    next(); //allow access
  } catch (err) {
    return res.status(401).json({ message: "Invalid token or expired token." });
  }
};

module.exports = authMiddleware;