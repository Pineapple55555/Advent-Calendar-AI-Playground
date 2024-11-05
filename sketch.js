
function setup() {
  setupCamera()
  setupLandscape()
  playmusic()
}

function draw() {
  frameRate(60)
  drawLandscape()
  drawCamera()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
