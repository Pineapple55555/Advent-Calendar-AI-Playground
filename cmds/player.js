class Player {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
        this.headLoc = -100
        this.speed = 10
    }

    move() {

    }
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
  
    console.log(isJumping, isFalling)
    // falling
    if (isJumping) {
      // finished jumping
      if (y <= -40 + headHeight) {
        isJumping = false
        isFalling = true
      }
      // starting to jump
      else {
        y -= 10
      }
    }
    if (isFalling) {
      if (y >= headHeight) {
        y -= 5
      }
      else {
        isFalling = false
      }
    }
  
  }