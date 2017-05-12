var event_canvas;
var gl;

$(document).ready(
	function () {
		event_canvas = document.getElementById('event-canvas');
		startWebGL(event_canvas);
	}
);
