const express = require("express");   // Imports Express.js
const { getQuote } = require("node-quotegen");  // Imports getQuote

const app = express();  // Creates an instance

// Define a GET route to generate random quote
app.get("/api/quote", (req, res) => {
  const quote = getQuote();
  res.json({ quote });
});

// Start the server  
app.listen(3000, () => {
  console.log("Link to random quote: http://localhost:3000/api/quote/");
});