// use objectsList to find objects that can be interacted with
// usign playerCamera

//let rayDirection = createVector(0, 0, -1); // Camera is looking down the negative Z-axis by default


function checkRaycast(camX, camY, camZ) {
    // Loop through all objects and check if the ray (camera view direction) intersects them
    for (let obj of calendarList) {
      if (isCameraInsideBox(camX, camY, camZ, obj.x, obj.y, obj.z, obj.size, obj.size, obj.size)) {
      }
    }
  }

  function isCameraInsideBox(camX, camY, camZ, boxX, boxY, boxZ, boxWidth, boxHeight, boxDepth) {
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

    // Check if the camera is within the box boundaries on all axes
    return (
        //camX >= minX && camX <= maxX &&
        camY >= minY && camY <= maxY &&
        camZ >= minZ && camZ <= maxZ
    );
}
  