const jwt = require("jsonwebtoken");
require('dotenv').config();

const jwtMiddleware = (req, res, next) => {
  
  const token = req.query.token;
  console.log('=== THIS IS TOKEN INSIDE JWT --  ' + token);
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }
    
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      req.user = decoded;
      next(); 
    } catch (error) {
      console.log('== THIS IS ERROR FOR JWT == ');
      res.status(401).json({ message: "Invalid token." });
    }
  };
  
  module.exports = jwtMiddleware;
  