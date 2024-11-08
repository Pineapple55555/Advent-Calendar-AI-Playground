// use objectsList to find objects that can be interacted with
// usign playerCamera

//let rayDirection = createVector(0, 0, -1); // Camera is looking down the negative Z-axis by default


function checkRaycast(camX, camY, camZ) {
    let intersectedBoxes = [];
    // Loop through all objects and check if the ray (camera view direction) intersects them
    for (let obj of calendarList) {
      if (camRay.intersectsBox(camX, camY, camZ, obj.x, obj.y, obj.z, obj.size, obj.size, obj.size)) {
        intersectedBoxes.push(obj);
      }
    }
    return intersectedBoxes
  }


  

class theRayBeam {
  constructor(name, camX,cameY,camZ) {
    this.name = name
    this.amount = -470
    this.beamLength = 100; // Adjust for desired beam length
    this.theBeam
    this.startX
    this.startY
    this.startZ

    this.beamX
    this.beamY
    this.beamZ

  }
  setupBeam() {

  }
  updateBeam() {
    this.startX = camX + this.amount * cos(rotY) * cos(rotX);
    this.startY = camY - this.amount * sin(rotX) * cos(rotX);
    this.startZ = camZ + this.amount * sin(rotY) * cos(rotX);

    this.beamX = camX + this.beamLength * cos(rotY) * cos(rotX);
    this.beamY = camY - this.beamLength * sin(rotX) * cos(rotX);
    this.beamZ = camZ + this.beamLength * sin(rotY) * cos(rotX);

  }
  drawBeam() {
    this.updateBeam()
    push();
    stroke(0, 0, 255); // Color of the beam
    strokeWeight(2);
    this.theBeam = line(this.startX, this.startY, this.startZ, this.beamX, this.beamY, this.beamZ); // Extend beam in positive z-direction
    pop();
  }
  intersectsBox(camX, camY, camZ, boxX, boxY, boxZ, boxWidth, boxHeight, boxDepth) {
    // Calculate the boundaries of the box

    let halfWidth = boxWidth / 2;
    let halfHeight = boxHeight / 2;
    let halfDepth = boxDepth / 2;

    let minX = boxX - halfWidth;
    let maxX = boxX + halfWidth;
    let minY = boxY - halfHeight;
    let maxY = boxY + halfHeight;
    let minZ = boxZ - halfDepth;
    let maxZ = boxZ + halfDepth;

    // Ray's min and max coordinates along each axis
    let tminX = Math.min(this.startX, this.beamX);
    let tmaxX = Math.max(this.startX, this.beamX);
    let tminY = Math.min(this.startY, this.beamY);
    let tmaxY = Math.max(this.startY, this.beamY);
    let tminZ = Math.min(this.startZ, this.beamZ);
    let tmaxZ = Math.max(this.startZ, this.beamZ);

    // Check if the box lies within the ray's min and max on all three axes
    // For each axis, check if the box's min and max are between the ray's min and max
    if (tmaxX < minX || tminX > maxX) return false;
    if (tmaxY < minY || tminY > maxY) return false;
    if (tmaxZ < minZ || tminZ > maxZ) return false;

    // If all axes pass, there is an intersection
    return true;
    
  }
}