// use objectsList to find objects that can be interacted with
// usign playerCamera

let rayDirection = createVector(0, 0, -1); // Camera is looking down the negative Z-axis by default


function checkRaycast(camX, camY, camZ) {
    // Loop through all objects and check if the ray (camera view direction) intersects them
    for (let obj of objectsList) {
      let distToObj = dist(camX, camY, camZ, obj.position.x, obj.position.y, obj.position.z);
      if (distToObj < 200) {
        // Log if the object is in the camera's view
        console.warn("Camera is looking at an object at", obj.name, obj.position,"and", camX, camY, camZ);
      }
    }
  }

function mathsStuff(){
    // Calculate the camera's forward direction vector (ray direction)
    rayDirection.x = camX
    rayDirection.y = camY
    rayDirection.z = camZ
    rayDirection.normalize(); // Normalize the direction for consistent raycasting

}

function checkRaycastWip(camX, camY, camZ) {
    // ray starts
    let rayOrigin = createVector(camX, camY, camZ);
  
    let rayDirection = createVector(0, 0, -1).normalize();
  
    // Check for intersections with objects
    for (let obj of objectsList) {
        // Calculate the distance to the object's center
        let toObj = p5.Vector.sub(obj.position, rayOrigin);
        
        // Project this vector onto the ray direction
        let projection = toObj.dot(rayDirection);
        
        // Check if the projection is positive (the object is in front of the camera)
        if (projection > 0) {
            // Calculate the closest point on the ray to the object's center
            let closestPoint = rayOrigin.copy().add(rayDirection.copy().mult(projection));
  
            // Check the distance to the closest point
            let distanceToClosestPoint = p5.Vector.dist(closestPoint, obj.position);
  
            // Assuming the object has a bounding radius (size/2), check if it's within that radius
            if (distanceToClosestPoint < obj.size / 2) {
                console.warn("Camera is looking at an object at", obj.position);
            }
        }
    }
  }
  