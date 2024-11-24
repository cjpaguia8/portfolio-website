import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ThreeJSCanvas.module.css";

const ThreeJSCanvas = () => {
  const canvasContainerRef = useRef();

  useEffect(() => {
    // Create the scene, camera, and renderer
    var objColor = new THREE.Color().setHex(0x00ff00);
    var bgColor = new THREE.Color().setHex(0x000000);


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer's canvas to the container
    canvasContainerRef.current.appendChild(renderer.domElement);

    // Set background color
    scene.background = new THREE.Color(bgColor); 

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry();
    // const geometry = new THREE.TorusGeometry
    const material = new THREE.MeshBasicMaterial({ color: objColor });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    // Set the camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      renderer.dispose();
      canvasContainerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={canvasContainerRef}
      className={styles.canvasContainer} // Apply the CSS module class
    ></div>
  );
};

export default ThreeJSCanvas;












// import React, { useEffect } from "react";
// import * as THREE from "three";

// const ThreeJSCanvas = () => {
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );

//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     const geometry = new THREE.BoxGeometry();
//     const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//     const cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);

//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;

//       renderer.render(scene, camera);
//     };

//     animate();

//     // Clean up on component unmount
//     return () => {
//       document.body.removeChild(renderer.domElement);
//     };
//   }, []);

//   return null;
// };

// export default ThreeJSCanvas;