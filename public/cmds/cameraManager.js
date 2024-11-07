let canvas;
let angleX = 0;  // Angle of rotation around the square
let angleY = 90;  // Angle of rotation around the square
let radius = 300;  // Distance of the camera from the square
let sensitivity = 0.005
let speed = 10
let fov = 0

let calendarCamera = false
let pressedKeys = {}


let headHeight = -100
let x = 0; // Player's position on the x-axis
let y = headHeight; // Player's position on the y-axis (height)
let z = 200; // Player's position on the z-axis
let playerCamera;
let calcCamera;
let randomBox;

let rotY = 0; // Horizontal rotation (left-right)
let rotX = 0; // Vertical rotation (up-down)

let isJumping = false
let isFalling = false


function setupCamera() {
  fov = PI / 3 ;
  //let randomBoxPos = randomBox.position
}

function drawCamera() {
  calendarCamera? calPerson() : firstPerson()
  movementUpdate()
  drawBeam()

}

function drawBeam() {

  let beamLength = 500; // Adjust for desired beam length
  let beamX = camX + beamLength * cos(rotY) * cos(rotX);
  let beamY = camY + beamLength * sin(rotX) * cos(rotX);
  let beamZ = camZ + beamLength * sin(rotY) * cos(rotX);

  push();
  stroke(0, 0, 255); // Color of the beam
  strokeWeight(2);
  line(camX, camY, camZ, beamX, beamY, beamZ); // Extend beam in positive z-direction
  pop();
}

function calPerson() {
  // Update camera position based on angle
  camX = x + cos(rotY) * cos(rotX) * 500; // Left and right
  camY = y + sin(rotX) * -500; // Up and down
  camZ = z + sin(rotY) * cos(rotX) * 500; // Left and right

  perspective(fov, windowWidth/windowHeight, 10, 2000)
  calcCamera = camera(x, y, z, // Camera position (the player's position)
         camX, y, z, // Target position (where the camera is looking)
         0, 1, 0); // Up vector

  checkRaycast(camX, camY, camZ)
}
function firstPerson() {
  // First-person camera calculations
  camX = x + cos(rotY) * cos(rotX) * 500; // Left and right
  camY = y + sin(rotX) * -500; // Up and down
  camZ = z + sin(rotY) * cos(rotX) * 500; // Left and right

  perspective(fov, windowWidth/windowHeight, 10, 2000)
  playerCamera = camera(x, y, z, // Camera position (the player's position)
         camX, camY, camZ, // Target position (where the camera is looking)
         0, 1, 0); // Up vector
  
  checkRaycast(camX, camY, camZ)

}

function mouseMoved() {
  calendarCamera? mouseMovedCalP() : mouseMovedFP()
}

function mouseMovedCalP() {
  // If pointer lock is active, update the angle based on mouse movement
  if (document.pointerLockElement === canvas.elt) {
    angleX += movedX * sensitivity; // Adjust sensitivity here
    angleY += movedY * sensitivity; // Adjust sensitivity here
  }
}
function mouseMovedFP() {
  if (document.pointerLockElement === canvas.elt) {
    rotY += movedX * 0.005; // Adjust yaw
    rotX -= movedY * 0.005; // Adjust pitch
    rotX = constrain(rotX, -PI / 2, PI / 2); // Limit vertical rotation
    
  }
}
// Request pointer lock when clicking the canvas
function requestPointerLock() {
  if (canvas) {
    canvas.elt.requestPointerLock();
  } else {
    console.error("Canvas is not defined");
  }
}

function changeCamera() {
  // if calC then set camera as default pos
  if (calendarCamera) {
    camera(x, y, z, // Camera position (the player's position)
         camX, camY, camZ, // Target position (where the camera is looking)
         0, 1, 0); // Up vector  
  }
  // if not set to default player pos
  else {
    camera(x, y, z, // Camera position (the player's position)
         camX, camY, camZ, // Target position (where the camera is looking)
         0, 1, 0); // Up vector
  }
}