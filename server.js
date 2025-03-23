// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Allow frontend requests


// Start the server
app.listen(5000, () => {
  const packageJson = require('./package.json');
  console.log("Author:", packageJson.author); }
);
