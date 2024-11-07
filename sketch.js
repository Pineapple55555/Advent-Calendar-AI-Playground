
function setup() {

  setupCamera()
  setupLandscape()
  //setupCal()
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

