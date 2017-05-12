function startWebGL(canvas) {
	gl = WebGLUtils.setupWebGL(canvas);
	if (!gl) {
		alert("Impossibile inizializzare WebGL.");
	}
	
	gl.viewport(0, 0, canvas.width, canvas.height);
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
}