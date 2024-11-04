let canvas;
let angleX = 0;  // Angle of rotation around the square
let angleY = 0;  // Angle of rotation around the square
let radius = 300;  // Distance of the camera from the square
let sensitivity = 0.005
let speed = 10

let cameraThirdPerson = false
let pressedKeys = {}

let headHeight = -100
let x = 0; // Player's position on the x-axis
let y = headHeight; // Player's position on the y-axis (height)
let z = 200; // Player's position on the z-axis

let rotY = 0; // Horizontal rotation (left-right)
let rotX = 0; // Vertical rotation (up-down)

let isJumping = false
let isFalling = false

function drawCamera() {
  cameraThirdPerson? thirdPerson() : firstPerson()
  movementUpdate()
}

function thirdPerson() {
  // Update camera position based on angle
  let camX = radius * cos(angleX); // X position of camera in circular path
  let camZ = radius * sin(angleX); // Z position of camera in circular path
  let camY = radius * sin(angleY); // Z position of camera in circular path

  // Set the camera position and point it towards the center (0, 0, 0)
  camera(camX, camY, camZ, 0, 0, 0, 0, 1, 0); // (camX, camY, camZ) -> (targetX, targetY, targetZ)
}
function firstPerson() {
  // First-person camera calculations
  camX = x + cos(rotY) * cos(rotX) * 500; // Left and right
  camY = y + sin(rotX) * -500; // Up and down
  camZ = z + sin(rotY) * cos(rotX) * 500; // Left and right

  camera(x, y, z, // Camera position (the player's position)
         camX, camY, camZ, // Target position (where the camera is looking)
         0, 1, 0); // Up vector

}

function mouseMoved() {
  cameraThirdPerson? mouseMovedTP() : mouseMovedFP()
}

function mouseMovedTP() {
  // If pointer lock is active, update the angle based on mouse movement
  if (document.pointerLockElement === canvas.elt) {
    angleX += movedX * sensitivity; // Adjust sensitivity here
    angleY += movedY * sensitivity; // Adjust sensitivity here
  }
}
function mouseMovedFP() {
  console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}, Yaw: ${rotY}, Pitch: ${rotX}`);
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

function keyPressed() {
  pressedKeys[key] = true;

  if (key === "v") {
    cameraThirdPerson = !cameraThirdPerson 
  }
  if (key === " ") {
    if (!isJumping) {
      y -= 40
      isJumping = true
    }

  }
}
function keyReleased() {
  delete pressedKeys[key];
  }

function movementUpdate() {

  if (pressedKeys.w) {
    x += cos(rotY) * speed; // Move forward
    z += sin(rotY) * speed;
  }
  if (pressedKeys.a) {
    x -= cos(rotY + PI / 2) * speed; // Strafe left
    z -= sin(rotY + PI / 2) * speed;
  }
  if (pressedKeys.s) {
    x -= cos(rotY) * speed; // Move backward
    z -= sin(rotY) * speed;
  }
  if (pressedKeys.d) {
    x += cos(rotY + PI / 2) * speed; // Strafe right
    z += sin(rotY + PI / 2) * speed;
  }

  // falling
  if (isJumping) {
    if (y <= headHeight) {
      y += 5
    }
    else {
      isJumping = false
    }
  }

}