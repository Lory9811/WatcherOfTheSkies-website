const pages = ['home', 'videos', 'events', 'info', 'diag'];
var currentPageId = 0;
var prevPage = 0;
var diagCanvas = null;
var diagCanvasContext = null;

window.onresize = function() {
	update();
};

function update() {
	$('.page.active').css("padding-top", ($('#navbar').outerHeight()) + "px");
}

function changePage() {
	if ($(this).parent().hasClass("active") && !$(this).hasClass("btn") && !$(this).hasClass("video-bar-link")) {
		return;
	} else {
		transition(pages[currentPageId], $(this).data("page"), pages[currentPageId] != "diag" ? $(this).data("orientation") : "horizontal");
	}
}

function transition(currentPage, nextPage, orientation) {
	console.log(currentPageId);
	$('#' + currentPage).addClass(orientation == "vertical" ? "hv" : "hh");
	$('#' + currentPage).removeClass("active");
	$('.' + currentPage + '-btn').removeClass("active");
	$('#' + nextPage).addClass(orientation == "vertical" ? "cv" : "ch");
	$('#' + nextPage).removeClass("hidden");
	$('#' + nextPage).addClass("active");
	$('.' + nextPage + '-btn').addClass("active");
	setTimeout(
	function() {
		$('#' + currentPage).removeClass(orientation == "vertical" ? "hv" : "hh");
		$('#' + nextPage).removeClass(orientation == "vertical" ? "cv" : "ch");
		$('#' + currentPage).addClass("hidden");
	}, 500);
	currentPageId = pages.indexOf(nextPage);
	update();
}

function toggleLogin() {
	login = $('#login-popup');
	if (login.hasClass("hidden")) {
		login.removeClass("hidden");
	} else {
		login.addClass("hidden");
	}
}

$(document).ready(
	function() {
		pages.forEach(function(page) {
			$('.' + page + '-btn-lnk').click(changePage);
		});
		
		$('#login').click(toggleLogin);
		
		update();
		
		// fake diagnostics graph in homepage
		diagCanvas = document.getElementById('diag-canvas');
		diagCanvasContext = diagCanvas.getContext('2d');
		
		setInterval(
		function() {
			diagCanvasContext.clearRect(0, 0, diagCanvas.width, diagCanvas.height);
			diagCanvasContext.fillStyle='orangered';
			diagCanvasContext.fillRect(0, 20, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 35, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 50, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 65, randomRange(0, 100), 10);		
			diagCanvasContext.fillRect(0, 80, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 95, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 110, randomRange(0, 100), 10);
			diagCanvasContext.fillRect(0, 125, randomRange(0, 100), 10);
			diagCanvasContext.stroke();
		}, 200);
});

function randomRange(min, max) {
	return Math.floor(Math.random() * (Math.ceil(max)-Math.floor(min))) + Math.floor(min);
}