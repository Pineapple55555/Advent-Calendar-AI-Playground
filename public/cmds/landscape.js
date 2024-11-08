
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
  for (let i = 0; i < 5; i+=1) {   
    for (let j = 0; j < 5; j+=1) {
      purpleBox = new newObject((i+","+j),0,i*-100,(j*100)+350,[150, 70, 255], 100, true)
      calendarList.push(purpleBox)
    }

  }
  console.log(calendarList)
} 

function drawCalendar() {
  for (let i = 0; i < calendarList.length; i++) {
    calendarList[i].display("box(this.size)")
  }
}


function setupCoolBoxes() {
  let boxPos = createVector(0,0,0)
  

} 
function drawCoolBoxes() {
  
}