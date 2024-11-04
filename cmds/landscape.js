function setupLandscape() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.mouseClicked(requestPointerLock); // Request pointer lock on click
  }
  
  function drawLandscape() {
    background(200);

    // Render a central square (or box)
    push();
    fill(150, 0, 255);
    box(100);  // This is the square we'll observe
    pop();

    // Render ground plane for reference
    push();
    fill(100, 100, 100, 50);
    translate(0, 50, 0);
    rotateX(HALF_PI);
    plane(600, 600);
    pop();
  }