
let objectsList = [];

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


function setupLandscape() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.mouseClicked(requestPointerLock); // Request pointer lock on click

    purpleBox = new newObject("purpleBox",0,0,0,[150, 70, 255], 100, true)
    objectsList.push(purpleBox)

    calendarTemp = new newObject("calendarTemp",600,-500,0,[0, 0, 255], [100, 1000, 1000], true)
    objectsList.push(calendarTemp)

    theFloor = new newObject("theFloor",0,0,0,[100, 100, 100, 50], [1000, 1000], false)
    objectsList.push(theFloor)

    //calender = new newCalendar(0,-50,0)
    //calender.preload()

    // set up light here


  }
  
  function drawLandscape() {
    background(200);

    theFloor.display("translate(0, 50, 0);rotateX(HALF_PI);plane(1000, 1000);")

    // Render a central square (or box)

    purpleBox.display("box(this.size)")
    calendarTemp.display("box(this.size)")

    
    //calender.display()


    // draw all objects with no extras
    /*for (let i of objectsList) {

    } */


  }

