document.addEventListener("DOMContentLoaded", function () {

	// Custom JS
	//  ===== START OWL-CAROUSEL JS ===== 
	$(document).ready(function () {
		$(".gallery-carousel").owlCarousel({
			loop: true,
			nav: true,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true,
			navText: '❮❯',
			margin: 20,
			checkVisibility: false,
			responsiveClass: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					autoWidth: false,
				},
				640: {
					items: 2,
					autoWidth: true,
				},
				980: {
					items: 3,
					autoWidth: true,
				},
				1280: {
					items: 4,
					autoWidth: true,
				}
			},
			onInitialized: slideOpacity,
			onTranslated: slideOpacity
		});
		function slideOpacity() {
			$('.gallery-carousel .owl-item.opacity').removeClass('opacity');
			$('.gallery-carousel .owl-item.active').eq(-1).addClass('opacity');
			$('.gallery-carousel2 .owl-item.opacity').removeClass('opacity');
			$('.gallery-carousel2 .owl-item.active').eq(-1).addClass('opacity');
		}
	});
	//  ===== END OWL-CAROUSEL JS ===== 

	//  ===== START FEEDBACK OWL-CAROUSEL JS ===== 
	$(document).ready(function () {
		$("#feedback-carousel").owlCarousel({
			loop: true,
			dots: false,
			autoplay: true,
			autoplayHoverPause: true,
			navText: '❮❯',
			responsiveClass: true,
			responsive: {
				// breakpoint from 0 up
				0: {
					items: 1,
					margin: 0,
					nav: true,
				},
				980: {
					items: 2,
					nav: true,
					margin: 20,
					// autoWidth: true,
				},
				1280: {
					items: 2,
					nav: true,
					margin: 20,
					autoWidth: true,
				},
				1400: {
					items: 2,
					nav: true,
					margin: 20,
					autoWidth: false,
				},

			},
		});
	});
	//  ===== END FEEDBACK OWL-CAROUSEL JS ===== 

	//  ===== START STICK MENU JS ===== 
	jQuery("document").ready(function ($) {
		var nav = $('.header-bottom');

		$(window).scroll(function () {

			if ($(window).width() >= '992' && $(window).width() <= '1199') {
				if ($(this).scrollTop() > ($('header').height())) {
					nav.addClass("f-nav");
				} else {
					nav.removeClass("f-nav");
				}
			} else {
				if ($(this).scrollTop() > ($('header').height()) - ($('.header-bottom').height())) {
					nav.addClass("f-nav");
				} else {
					nav.removeClass("f-nav");
				}
			}
		});

	});
	//  ===== END STICK MENU JS ===== 

	//  ===== START DATERANGEPICKER JS ===== 
	$('#datepicker').datepicker({
		dateFormat: "dd.mm.yy",
	});
	$.datepicker.regional.lv = {
		currentText: "Å odien",
		monthNames: ["Janvāris", "Februāris", "Gājiens", "Aprīlis", "Maijs", "Jūnijs",
			"Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
		monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "JÅin",
			"JÅil", "Aug", "Sep", "Okt", "Nov", "Dec"],
		dayNames: [
			"svētdiena",
			"pirmdiena",
			"otrdiena",
			"trešdien",
			"ceturtdiena",
			"piektdiena",
			"sestdiena"
		],
		dayNamesShort: ["svt", "prm", "otr", "tre", "ctr", "pkt", "sst"],
		dayNamesMin: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "Ss"],
		weekHeader: "Ned.",
		dateFormat: "dd.mm.yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: "",
		beforeShowDay: $.datepicker.noWeekends
	};
	$.datepicker.setDefaults($.datepicker.regional.lv);
	//  ===== END DATERANGEPICKER JS ===== 

	//  ===== START ANIMATION JS ===== 
	AOS.init({
		offset: 100,
		duration: 500,
		delay: 0,
		once: true,
		anchorPlacement: 'top-bottom',
	});
	//  ===== END ANIMATION JS ===== 

	//  ===== START MENU NAVIGATION JS ===== 
	$(document).ready(function () {
		$("#menu").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});
	//  ===== END MENU NAVIGATION JS ===== 

	//  ===== START goTo JS ===== 
	$.fn.goTo = function () {
		$('html, body').animate({
			scrollTop: (($(this).offset().top - 150) + 'px')
		}, 'slow');
		return this;
	}
	//  ===== END goTo JS ===== 

	//  ===== START BACK-TO-TOP SHOW JS ===== 
	$(document).ready(function () {
		$('body').append('<a href="#" class="back-to-top"><div class="arrow-8"></div></a>');
	});

	$(function () {
		$.fn.scrollToTop = function () {
			$(this).hide().removeAttr("href");
			if ($(window).scrollTop() >= "1600") $(this).fadeIn("slow")
			var scrollDiv = $(this);
			$(window).scroll(function () {
				if ($(window).scrollTop() <= "1600") $(scrollDiv).fadeOut("slow")
				else $(scrollDiv).fadeIn("slow")
			});
			$(this).click(function () {
				$("html, body").animate({ scrollTop: 0 }, "slow")
			})
		}
	});

	$(function () {
		$(".back-to-top").scrollToTop();
	});
	//  ===== END BACK-TO-TOP SHOW JS ===== 

});