var vertexShaderText =
[
'precision mediump float;',
'',
'attribute vec2 vertPosition;',
'attribute vec3 vertColor;',
'varying vec3 fragColor;',
'',
'void main()',
'{',
'   fragColor = vertColor;',
'   gl_Position = vec4(vertPosition, 0.0, 1.0);',
'}'
].join('\n');

var fragmentShaderText =
[
'precision mediump float;',
'',
'varying vec3 fragColor;',
'void main()',
'{',
'   gl_FragColor = vec4(fragColor, 1.0);',
'}'
].join('\n');



var InitDemo = function () {
    console.log('this is working');

    var canvas = document.getElementById('canvas');
    var gl = canvas.getContext('webgl');

    if (!gl) {
        console.log('no support for webgl. using experimental')
        gl = canvas.getContext('experimental-webgl');
    }

    if (!gl) {
        alert('no webgl');
    }

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    //gl.viewport(0, 0, window.innerWidth, window.innerHeight);

    //gl.clearColor(R, G, B, A);
    gl.clearColor(0.75, 0.8, 0.7, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
    //create shaders
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    //now compile vertex and fragment shader from code in this file
    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);


    //now compile
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling vertex shader!', gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        console.error('ERROR compiling fragment shader!', gl.getShaderInfoLog(fragmentShader));
        return;
    }

    //need to combine and tell openGL these are the two programs
    //we want to use together.
    //create a 'program' in opengl. a graphics card entire pipline

    var program = gl.createProgram();
    //attach vertex and frag shader
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    //need to link program together: compile then link (Like C)
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('ERROR linking program!', gl.getProgramInfoLog(program));
        return;
    }

    //Validate program. catches additional errors that you run into. 
    //only do in debug releases not full release.
    //takes a long time
    gl.validateProgram(program);
    if (!gl.getProgramParameter(program, gl.VALIDATE_STATUS)) {
        console.error('ERROR validating program', gl.getProgramInfoLog(program));
        return;
    }

    //now it is ready to accept our vertices.

    //need to set information that graphics card is going to be using
    


    //Create Buffer
    var triangleVertices =
    [ //X, Y,         R, G, B
        0.0, 0.5,     1.0, 1.0, 0.0,
        -0.5, -0.5,   0.7, 0.0, 1.0,
        0.5, -0.5,     0.1, 1.0, 0.6
    ];

    //^ this is sitting on computer accessible memory.
    //graphics card doesnt know what this is.
    //we need to use buffer
    var triangleVertexBufferObject = gl.createBuffer();
    //the active buffer we are using is an array buffer (vars being passed to the graphics card)
    //we are binding tirnagle vertex buffer object to be the active buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
    //specify the data on the active buffer:
    //gl.bufferData(gl.ARRAY_BUFFER, triangleVertices, gl.STATIC_DRAW);
    //javascript is 64 bit floating point precision number
    //opengl is expecting it in 32 bits.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
    //STATIC_DRAW - send cpu to gpu at once. (no changes)

	//now need to inform the vertex shader that the values are vertices.
    //currently the data is just sitting on the GPU.

    var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
    var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');

    //need to specify layout of that attirubte
    gl.vertexAttribPointer(
        positionAttribLocation,
        2, //number of elements per attribute (because its a vec2)
        gl.FLOAT, //type of elm
        gl.FLASE, //its not going to be normalized
        5 * Float32Array.BYTES_PER_ELEMENT, //Size of an individual vertex = 2 * size of a 32 float
        0 // Offset from the beginning of a single vertex to this attribute
    );

    gl.vertexAttribPointer(
        colorAttribLocation,
        3, //number of elements per attribute (because its a vec3)
        gl.FLOAT, //type of elm
        gl.FLASE, //its not going to be normalized
        5 * Float32Array.BYTES_PER_ELEMENT, //Size of an individual vertex = 2 * size of a 32 float
        2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
    );


    //enable vertex attrib array
    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(colorAttribLocation);

    // //Main render loop!!
    // //what might look like in C++
    // // while (true) {
    // //     updateWorld();
    // //     renderWorld();
    // // }
    // //What might look like in Javascript
    // // var loop = function () {
    // //     updateWorld();
    // //     renderWorld();
    // //     if (running) {
    // //         requestAnimationFrame(loop);
    // //     }
    // // }
    // // requestAnimationFrame(loop);

    gl.useProgram(program);
    gl.drawArrays(gl.TRIANGLES, 0, 3);//shape. how many vertices to skip. how many vertices to draw.
   


};  
