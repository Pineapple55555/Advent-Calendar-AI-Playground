class Player {
    constructor(x,y,z) {
        this.x = x
        this.y = y
        this.z = z
        this.headLoc = -100
        this.speed = 10
        this.isJumping = false
        this.isFalling = false
    }

    move() {

    }
}

function movementUpdate() {
    if (calendarCamera) {
        if (pressedKeys.d) {
            z += speed
          }
          if (pressedKeys.w) {
            y -= speed
          }
          if (pressedKeys.a) {
            z -= speed
          }
          if (pressedKeys.s) {
            y += speed
          }
          console.error(rotY,rotX)
    }
    else {
        playerMovement()
    }
}

function playerMovement() {

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
  
    //console.error(isJumping, isFalling)
    // falling
    if (isJumping) {
      // finished jumping
      if (y <= -60 + headHeight) {
        isJumping = false
        isFalling = true
      }
      // starting to jump (up)
      else {
        y -= 5
      }
    }
    if (isFalling) {
      if (y < headHeight) {
        // falling (down)
        y += 5
      }
      else {
        isFalling = false
      }
    }
  
  }