//Выпадающее мобильное меню
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

//Отображение меню при скролле вверх
var lastScrollTop = 0;
$(window).scroll(function (event) {
	var st = $(this).scrollTop();
	if (st > lastScrollTop) {
		var burger = $('.burger-toggle');
		burger.removeClass('burger-toggle--close');
		burger.siblings('.main-nav').removeClass('main-nav--expand');
		$('.fixed-wrapper').removeClass("fixed-wrapper--upsticky");
	} else if (st > 400) {
		$('.fixed-wrapper').addClass("fixed-wrapper--upsticky");
	}
	lastScrollTop = st;
});

//Валидация формы
$(function() {
	$("form[name='contact']").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			feedback: {
				required: true
			}
		},
		messages: {
			name: "Пожалуйста, введите ваше имя",
			email: "Пожалуйста, введите mail",
			feedback: "Сообщение не может быть пустым"
		},
		submitHandler: function(form, event) {
			ajaxSubmit(form, event);
		}
	});
	$("form[name='contact-en']").validate({
		rules: {
			name: "required",
			email: {
				required: true,
				email: true
			},
			feedback: {
				required: true
			}
		},
		messages: {
			name: "Please, write your name",
			email: "Please, write your email",
			feedback: "Please, write your message"
		},
		submitHandler: function(form, event) {
			ajaxSubmit(form, event);
		}
	});
});

var baseApi = "http://localhost:4100/";

//Ajax-обработчик формы
function ajaxSubmit(form, event) {
	event.preventDefault();
	var name = $(form.elements["name"]);
	var mail = $(form.elements["email"]);
	var feedback = $(form.elements["feedback"]);
	$(".form-tools").removeClass('form-tools--error');
	$.ajax({
		type: "POST",
		url: baseApi + "contact",
		data: JSON.stringify({name: name[0].value, mail: mail[0].value, feedback: feedback[0].value}),
		dataType: "json",
		contentType: "application/json",
		success: function() {
			$(".form-tools").addClass('form-tools--sended');
		},
		error: function () {
			$(".form-tools").addClass('form-tools--error');
		}
	});
}

