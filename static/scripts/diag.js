var graphCanvas = null;
var graphCanvasContext = null;

$(document).ready(
	function() {
		graphCanvas = document.getElementById('graph-canvas');
		graphCanvasContext = graphCanvas.getContext('2d');
		
		graphCanvasContext.clearRect(0, 0, graphCanvas.width, graphCanvas.height);
		graphCanvasContext.fillStyle='orangered';
		for (var i; i < 100; i++) {
			graphCanvasContext.fillRect(i, 50, 1, 10);
		}
		graphCanvasContext.stroke();
});