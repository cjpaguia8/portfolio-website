import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./ThreeJSCanvas.module.css";

const ThreeJSCanvas = () => {
  const bgColor = new THREE.Color().setHex(0xC2B7B2);
  const sphereColor = new THREE.Color().setHex(0x426394);
  const torusColor = new THREE.Color().setHex(0x304B6C);
  const tor2Color = new THREE.Color().setHex(0x8A6F6A);


  const canvasContainerRef = useRef();

  useEffect(() => {
    // Create the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const clock = new THREE.Clock();

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer's canvas to the container
    canvasContainerRef.current.appendChild(renderer.domElement);

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Set background color
    scene.background = new THREE.Color(bgColor);

    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );



    // Add geometries to the scene
    // const geometry = new THREE.BoxGeometry();
    const torusGeo = new THREE.TorusGeometry(1.5, 0.2);
    const tor2Geo = new THREE.TorusGeometry(2, 0.15);
    const sphereGeo = new THREE.SphereGeometry(0.5);
    const torusMat = new THREE.MeshBasicMaterial({ color: torusColor });
    const tor2Mat = new THREE.MeshBasicMaterial({ color: tor2Color });
    const sphereMat = new THREE.MeshBasicMaterial({ color: sphereColor });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    const torus2 = new THREE.Mesh(tor2Geo, tor2Mat);
    scene.add(torus);
    scene.add(sphere);
    scene.add(torus2);

    // Set the camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      // const delta = clock.getDelta();

      requestAnimationFrame(animate);
      // torus.rotation.x += 0.01;
      torus.rotation.y += 0.02;
      // sphere.rotation.x += 0.01;
      // sphere.rotation.y += 0.01;
      sphere.position.x = 0.5*Math.cos(elapsedTime * 5);
      sphere.position.y = 0.5*Math.sin(elapsedTime * 5);
      sphere.position.z = 0.5*(Math.cos(elapsedTime * 5) * Math.sin(elapsedTime*5));
      torus2.rotation.x += 0.03;
      // torus2.rotation.y += 0.03;
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