let hud = false
function hudPopup() {
    hud = !hud
}

function hudSetup() {
    textFont('Calibri');  // Set a web-safe font (Calibri)
    textSize(32);  // Set text size
    textAlign(CENTER, CENTER);  // Align text to the center
}

function hudDraw() {
    if (hud) {
        background(200);  // Set background color
        fill(0);  // Set text color to black
        text("This is a pop-up message!", 0, 0);  // Draw text at the center
    }  
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

  let msg = getChatGPTResponse(prompt)