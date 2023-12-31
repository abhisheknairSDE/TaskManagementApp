const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtMiddleware = (req, res, next) => {
  
  const token = req.query.token;
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded;
      next(); 
    } catch (error) {
      res.status(401).json({ message: "Invalid token." });
    }
  };
  
  module.exports = jwtMiddleware;
  