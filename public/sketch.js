let sendButton;
let responseText = "";

function setup() {
  createCanvas(600, 400);
  background(220);
  
  // Remove the input box and button since we no longer need them.
  // Set the initial message
  sendMessage();
}

function draw() {
  background(220);
  textSize(16);
  fill(0);
  text(responseText, 10, 30, width - 20); // Display response with word wrap
}
