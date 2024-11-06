
function setup() {
  setupCamera()
  setupLandscape()
  playmusic()
  preload()
  // Classify the sound from microphone in real time
  classifier.classifyStart(gotResult);
}

function draw() {
  frameRate(60)
  drawLandscape()
  drawCamera()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
