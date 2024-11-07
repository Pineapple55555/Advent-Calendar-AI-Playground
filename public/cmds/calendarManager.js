function setupCal() {
    scene = new THREE.Scene();
    // Load the STL model
    let loader = new THREE.STLLoader();
    loader.load('../resources/box.stl', function (geometry) {
        let material = new THREE.MeshBasicMaterial({ color: 0x555555 });
        stlMesh = new THREE.Mesh(geometry, material);

        // Add the mesh to the scene
        scene.add(stlMesh);
    });
}

function drawCal() {
    // Update the Three.js scene
    if (stlMesh) {
        // Rotate the model if needed
        stlMesh.rotation.y += 0.01;  // This is optional
    }

    // Render the Three.js scene onto the p5.js WebGL canvas
    renderer.render(scene, camera);
}

// stuff



