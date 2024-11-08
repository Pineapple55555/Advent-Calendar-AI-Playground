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
  if (key === "q") {
    hudToggle()
    }
  }
  function keyReleased() {
    delete pressedKeys[key];
    }
  
  600,-500,0