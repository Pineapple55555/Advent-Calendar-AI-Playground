// startServer.js
const { exec } = require('child_process');

// Start the app.js server
exec('node app.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error starting server: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Server started: ${stdout}`);
});

/* This code will be needed in the actual game files to call startServer.js
// p5.js game code
function setup() {
  createCanvas(400, 400);
  // Call your server via HTTP after starting it
  fetch('http://localhost:3000')
    .then(response => response.text())
    .then(data => console.log(data))  // Server response
    .catch(error => console.error('Error:', error));
}

function draw() {
  background(220);
}

*/