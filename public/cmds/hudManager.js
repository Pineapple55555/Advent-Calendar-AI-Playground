let hud = false
let hudGraphics
let messageResult


function hudToggle() {
    hud = !hud
    console.log("hudtoggled")
}

function hudPopup() {
  if (hud) {
    hudDraw()
  }
}

function hudSetup() {
  hudGraphics = createGraphics(600, 400);
  hudGraphics.textSize(32); 
  hudGraphics.textAlign(CENTER, CENTER);  // Align text to the center

  // generate the message for board
  let message = sendMessage()
  message.then((messageResult) => {
    console.log(messageResult); // This will log the resolved value of message
  });
}

function hudDraw() {
  //background(100, 150, 200);
  drawHUD()

  let hudDistance = -400

  let hudX = camX + hudDistance * cos(rotY) * cos(rotX);
  let hudY = camY - hudDistance * sin(rotX) * cos(rotX);
  let hudZ = camZ + hudDistance * sin(rotY) * cos(rotX);


  push();
  resetMatrix(); // Reset transformations to ensure HUD alignment
  applyMatrix(
  1, 0, 0, 0,     // Rotation for yaw (left/right rotation)
  0, 1, 0, 0,                     // No change for the vertical 'up' direction (pitch is handled)
  0, 0, 1, 0,    // Adjust the rotation around the Y-axis
  hudX, hudY, hudZ, 1              // Position the HUD in front of the camera
);
  translate(0, 0, 500)
  image(hudGraphics, -width / 2, -height / 2); // Center HUD on the canvas
  pop();
  //console.log(checkRaycast(camX, camY, camZ))
}

function drawHUD() {
  // Clear `hudGraphics` to prevent old content from staying
  hudGraphics.clear();

  // Draw a semi-transparent black box as HUD background
  hudGraphics.fill(0, 0, 0, 150); // Semi-transparent black
  hudGraphics.rectMode(CENTER);
  hudGraphics.rect(hudGraphics.width / 2, hudGraphics.height / 2, 300, 200); // Rectangle size

  // Add some text inside the box
  hudGraphics.fill(255); // White text color
  hudGraphics.text(checkRaycast(camX, camY, camZ), hudGraphics.width / 2, hudGraphics.height / 2 - 20);
  hudGraphics.text((str(messageResult)), hudGraphics.width / 2, hudGraphics.height / 2 + 20);
  
  // text gen
  
    
      //hudGraphics.text(messageResult, hudGraphics.width / 2, hudGraphics.height / 2 + 20);
    
  
}


async function sendMessage() {
    let rng = Math.floor(Math.random() * 3)
    let inputMessage
    if (rng == 0){
      inputMessage = "give me a good joke in the style of a christmas cracker"; // Hardcoded message
    }
    else if (rng == 1){
      inputMessage = "give me a short christmas fact - the kind of thing you'd find in a cracker";
    }
    else{
      inputMessage = "give me two-option christmas quiz question; cracker style. Put the answer underneath";
    }
    const response = await getChatGPTResponse(inputMessage);
    responseText = response ? response : "Error getting response";
    return responseText
  }

  //let msg = getChatGPTResponse(prompt)