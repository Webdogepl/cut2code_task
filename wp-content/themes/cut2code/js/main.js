$ = jQuery.noConflict(true);

/*--------- Intersection Observer for statistics ----------*/

let statistics = document.querySelector(".statistics");
let observer = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio == 1) {
				increaseNumbers();
			}
		});
	},
	{ threshold: 1 }
);
observer.observe(statistics);

/*---------- Increase numbers ------------*/

function increaseNumbers() {
	var speed = 150;

	function incElementNumber(id) {
		let element = $(id);
		let endNumber = $(id).text();
		incElementNumberRecursive(0, endNumber, element);
	}

	function incElementNumberRecursive(i, endNumber, element) {
		if (i <= endNumber) {
			element.text(i);
			speed -= 2;
			setTimeout(function () {
				incElementNumberRecursive(i + 1, endNumber, element);
			}, speed);
		}
	}

	$(".nbr").each(function () {
		incElementNumber(this);
		observer.unobserve(statistics);
	});
}

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
