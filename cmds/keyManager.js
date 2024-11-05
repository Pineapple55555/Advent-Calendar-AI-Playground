function keyPressed() {
    pressedKeys[key] = true;
  
    if (key === "v") {
      cameraThirdPerson = !cameraThirdPerson 
    }
    if (key === " ") {
      if (!isJumping && !isFalling && y == 0); {
        isJumping = true
      }
  
    }
  }
  function keyReleased() {
    delete pressedKeys[key];
    }
  
  