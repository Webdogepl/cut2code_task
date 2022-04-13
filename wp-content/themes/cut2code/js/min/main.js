$ = jQuery.noConflict(true);

var speed = 20;

function incElementNumber(id) {
	let element = $(id);
	let endNumber = $(id).text();
	incElementNumberRecursive(0, endNumber, element);
}

function incElementNumberRecursive(i, endNumber, element) {
	if (i <= endNumber) {
		element.text(i);
		setTimeout(function () {
			incElementNumberRecursive(i + 1, endNumber, element);
		}, speed);
	}
}

$(".nbr").each(function () {
	incElementNumber(this);
});

/*---------- ACCORDION ----------*/

$(".question").click(function () {
	let answer = $(this).next();

	if (answer.length > 0) {
		if (answer.is(":visible")) {
			answer.slideUp();
		} else {
			answer.slideDown();
		}
	}
});

/*---------- MENU ----------*/

function toggleMenu() {
	$(".nav").toggleClass("nav--active");
}
$(".menuToggle").click(toggleMenu);

$(".menu-item").click(toggleMenu);
