// src/middleware/auth.js

const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // Get the JWT token from the request header
  const token = req.header("Authorization");

  // Check if token is present
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the decoded user information to the request object
    req.user = decoded.user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid Token" });
  }
};

module.exports = authenticate;
