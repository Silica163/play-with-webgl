const canvas = document.getElementById("webgl");
const gl = canvas.getContext("webgl");

console.log(gl);

// clear canvas color
// red green blue alpha
gl.clearColor(0,0,0,1);
gl.clear(gl.COLOR_BUFFER_BIT);
