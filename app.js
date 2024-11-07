// app.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to handle ChatGPT question request
app.post('/ask', (req, res) => {
  const { question } = req.body; // Get the question from the request body

  // Simulate querying the ChatGPT API and generating a response
  const answer = `Response to: ${question}`; // Replace with actual API call if needed

  res.json({ answer }); // Send the answer back to the client

  // Close the server after handling the request
  console.log('Shutting down server after responding...');
  server.close(() => {
    console.log('Server has shut down.');
  });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
