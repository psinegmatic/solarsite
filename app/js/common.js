$(document).on('click', 'a[href^="#"]', function (event) {
	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
	return false;
});

$(document).ready(function () {
	$('.burger-toggle').click(function () {
		$(this).toggleClass('burger-toggle--close');
		$(this).siblings('.main-nav').toggleClass('main-nav--expand');
	})
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 90){
		$('.main-header').addClass("main-header--fixed");
		$('.fixed-wrapper').addClass("fixed-wrapper--fixed");
	} else {
		$('.main-header').removeClass("main-header--fixed");
		$('.fixed-wrapper').removeClass("fixed-wrapper--fixed");
	}
});