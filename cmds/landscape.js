
let objectsList = [];
let calendarList = [];

class newObject {
  constructor(name, x,y,z, colour, size, interactable) {
    this.name = name
    this.x = x
    this.y = y
    this.z = z
    this.size = size
    this.position =  createVector(x,y,z), // Position of the box
    this.colour = colour
    this.interactable = interactable
  }
  display(extraOptions) {
    push()
    fill(this.colour)
    translate(this.position);
    eval(extraOptions); 

    pop();
    
    
  }
}

class newCalendar {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    this.model = null
    this.path = "../resources/box.stl"
  }
  preload() {
    // Load the STL file from the resources folder
    this.model = loadModel("../resources/box.stl");
  }
  display() {
    if (this.model) {
      model(this.model)
    }
  }
}

function setupLandscape() { setupBase() ; setupCalendar()} ; function drawLandscape() { drawBase() ; drawCalendar()}

// set up canvas, floor and sky
function setupBase() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.mouseClicked(requestPointerLock); // Request pointer lock on click
  // floor
  theFloor = new newObject("theFloor",0,0,0,[100, 100, 100, 50], [1000, 1000], false)
  objectsList.push(theFloor)
}
function drawBase() {
  background(200);

  theFloor.display("translate(0, 50, 0);rotateX(HALF_PI);plane(1000, 1000);")
}

// set up calendar
function setupCalendar() {
  // other objects
  purpleBox = new newObject("purpleBox",0,0,0,[150, 70, 255], 100, true)
  calendarList.push(purpleBox)
}

function drawCalendar() {
  purpleBox.display("box(this.size)")
}


