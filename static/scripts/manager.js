const pages = ['home', 'videos', 'events', 'info', 'diag'];
var currentPageId = 0;
var prevPage = 0;
var diag_canvas = null;
var diag_canvas_context = null;

window.onresize = function() {
	update();
};

function update() {
	$('.page.active').css("padding-top", ($('#navbar').outerHeight()) + "px");
}

function changePage() {
	if ($(this).hasClass("active")) {
		return;
	} else {
		transition(pages[currentPageId], $(this).data("page"));
	}
}

function transition(currentPage, nextPage) {
	$('#' + currentPage).addClass("hv");
	$('#' + currentPage).removeClass("active");
	$('#' + currentPage).addClass("hidden");
	$('.' + currentPage + '-btn').removeClass("active");
	$('#' + nextPage).addClass("cv");
	$('#' + nextPage).removeClass("hidden");
	$('#' + nextPage).addClass("active");
	$('.' + nextPage + '-btn').addClass("active");
	setTimeout(
	function() {		
		$('#' + currentPage).removeClass("hv");
		$('#' + nextPage).removeClass("cv");
	}, 500);
	currentPageId = pages.indexOf(nextPage);
	console.log(currentPageId);
	update();
}

//disabled for now
/*window.onwheel = function(event) {
	currentPage = pages.indexOf(window.location.hash.substr(1));
	if (currentPage == -1) currentPage = 0;
	
	prevPage = currentPage;
	if (currentPage == 0) {
		if (event.deltaY > 0) {
			currentPage += 1;
		}
	} else if (currentPage == pages.length - 1) {
		if (event.deltaY < 0) {
			currentPage -= 1;
		}
	} else {
		currentPage += (event.deltaY / Math.abs(event.deltaY));
	}
	window.location.hash = pages[currentPage];
	$('#' + pages[prevPage] + "-btn").removeClass("active");
	$('#' + pages[currentPage] + "-btn").addClass("active");
	
	return false;
};*/

$(document).ready(
	function() {
		pages.forEach(function(page) {
			$('.' + page + '-btn-lnk').click(changePage);
		});
		
		update();
		
		// fake diagnostics graph in homepage
		diag_canvas = document.getElementById('diag-canvas');
		diag_canvas_context = diag_canvas.getContext('2d');
		
		setInterval(
		function() {
			diag_canvas_context.clearRect(0, 0, diag_canvas.width, diag_canvas.height);
			diag_canvas_context.fillStyle='orangered';
			diag_canvas_context.fillRect(0, 20, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 35, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 50, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 65, randomRange(0, 100), 10);
			diag_canvas_context.stroke();			
			diag_canvas_context.fillRect(0, 80, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 95, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 110, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
			diag_canvas_context.fillRect(0, 125, randomRange(0, 100), 10);
			diag_canvas_context.stroke();
		}, 200);
	}
);

function randomRange(min, max) {
	return Math.floor(Math.random() * (Math.ceil(max)-Math.floor(min))) + Math.floor(min);
}