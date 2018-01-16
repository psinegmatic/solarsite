function expandMenu() {
	var burger = $('.burger-toggle');
	burger.toggleClass('burger-toggle--close');
	burger.siblings('.main-nav').toggleClass('main-nav--expand');
}

//Плавный скролл
$(document).on('click', 'a[href^="#"]', function (event) {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	expandMenu();
	return false;
});

//Выпадающая навигация
$(document).ready(function () {
	$('.burger-toggle').click(function () {
		return expandMenu();
	});
});

//Фиксированое меню
$(window).scroll(function () {
	if ($(this).scrollTop() > 90) {
		$('.main-header').addClass("main-header--fixed");
		$('.fixed-wrapper').addClass("fixed-wrapper--fixed");
	} else {
		$('.main-header').removeClass("main-header--fixed");
		$('.fixed-wrapper').removeClass("fixed-wrapper--fixed");
	}
});

var lastScrollTop = 0;
$(window).scroll(function (event) {
	var st = $(this).scrollTop();
	console.log(st);
	if (st > lastScrollTop) {
		$('.fixed-wrapper').removeClass("fixed-wrapper--upsticky");
	} else if (st > 300) {
		$('.fixed-wrapper').addClass("fixed-wrapper--upsticky");
	}
	lastScrollTop = st;
});