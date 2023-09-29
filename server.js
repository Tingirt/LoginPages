const express = require('express');
const app = express();
const port = 3000; // Change this to your desired port number

// Serve static files (e.g., HTML, CSS, JS) from a directory
app.use(express.static(__dirname)); // Serve all files in the current directory

// Handle requests for the specific HTML file
app.get('/index.html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
