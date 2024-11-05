function keyPressed() {
    pressedKeys[key] = true;
  
    if (key === "v") {
        // if calC then set camera as default pos
        if (calendarCamera) {

        }
        // if not set to default player pos
        else {

        }
        calendarCamera = !calendarCamera 

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
  
  