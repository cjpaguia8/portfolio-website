import React, { useEffect, useRef } from "react";

const Projects = () => {
  const canvasContainerRef = useRef();

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasContainerRef.current.appendChild(canvas);

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) {
      alert("WebGL is not supported");
      return;
    }

    // Vertex Shader
    const vertexShaderSource = `
      precision mediump float;
      attribute vec2 vertPosition;
      attribute vec3 vertColor;
      varying vec3 fragColor;
      void main() {
        fragColor = vertColor;
        gl_Position = vec4(vertPosition, 0.0, 1.0);
      }
    `;
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);

    // Fragment Shader
    const fragmentShaderSource = `
      precision mediump float;
      varying vec3 fragColor;
      void main() {
        gl_FragColor = vec4(fragColor, 1.0);
      }
    `;
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);

    // Program
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Triangle Vertices
    const triangleVertices = new Float32Array([
      // X, Y,        R, G, B
      0.0, 0.5,      1.0, 0.0, 0.0,
      -0.5, -0.5,    0.0, 1.0, 0.0,
      0.5, -0.5,     0.0, 0.0, 1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);

    const positionAttribLocation = gl.getAttribLocation(program, "vertPosition");
    gl.vertexAttribPointer(
      positionAttribLocation, 2, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 0
    );
    gl.enableVertexAttribArray(positionAttribLocation);

    const colorAttribLocation = gl.getAttribLocation(program, "vertColor");
    gl.vertexAttribPointer(
      colorAttribLocation, 3, gl.FLOAT, false, 5 * Float32Array.BYTES_PER_ELEMENT, 2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(colorAttribLocation);

    // Clear Canvas and Draw
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // Cleanup on unmount
    return () => {
      canvasContainerRef.current.removeChild(canvas);
    };
  }, []);

  return <div ref={canvasContainerRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Projects;
