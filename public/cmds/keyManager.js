function keyPressed() {
    pressedKeys[key] = true;
  
    if (key === "v") {
        changeCamera()
        
        calendarCamera = !calendarCamera 

    }
    if (key === " ") {
      if (!isJumping && !isFalling && y == 0 && !calendarCamera ); {
        isJumping = true
      }
  
    }
  }
  function keyReleased() {
    delete pressedKeys[key];
    }
  
  600,-500,0