const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("./config");

// Function to generate access token
const generateAccessToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "15m" });
};

// Function to generate refresh token
const generateRefreshToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
};

module.exports = { generateAccessToken, generateRefreshToken };
