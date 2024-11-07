let sound;
let gainNode;
let userInteracted = false; // Flag to track user interaction

function preload() {
  sound = loadSound('resources/Music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Setup the gain node to increase volume
  const audioContext = getAudioContext();
  gainNode = audioContext.createGain();
  sound.disconnect();  // Disconnect the sound from the default output
  sound.connect(gainNode);  // Connect it to the gain node
  gainNode.connect(audioContext.destination);  // Connect the gain node to the output

  // Set up a listener for the first user interaction (click anywhere on the page)
  window.addEventListener('click', () => {
    if (!userInteracted) {
      userInteracted = true; // Mark that the user has interacted
      getAudioContext().resume().then(() => {
        console.log("AudioContext resumed and sound will play.");
        gainNode.gain.value = 2.0; // Set volume (adjust this value as needed)
        sound.play();  // Play the sound after resuming the AudioContext
      }).catch((err) => {
        console.error("Failed to resume AudioContext:", err);
      });
    }
  });

  // Call your other functions here
  setupCamera();
  setupLandscape();
  hudSetup()
}

function draw() {
  frameRate(60);
  drawLandscape();
  drawCamera();
  hudDraw
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

async function callGPT() {
  const message = "Tell me a funny joke!";
  const response = await getChatGPTResponse(message); // Call the function from gptPromptManager.js
  console.log("GPT Response: ", response); // Handle the response as needed
}
