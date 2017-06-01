(function() {

	function triggerReveals() {
		sr.reveal('.bottomReveal', {
			origin: 'bottom'
		}).reveal('.leftReveal', {
			origin: 'left'
		}).reveal('.rightReveal', {
			origin: 'right'
		}).reveal('.topReveal', {
			origin: 'top'
		});

		sr.reveal('.rotateBottomReveal', {
			origin: 'bottom',
			rotate: { x: 90 }
		}).reveal('.rotateLeftReveal', {
			origin: 'left',
			rotate: { x: 90 }
		}).reveal('.rotateRightReveal', {
			origin: 'right',
			rotate: { x: 90 }
		}).reveal('.rotateTopReveal', {
			origin: 'top',
			rotate: { x: 90 }
		});

		sr.reveal('.scaleReveal', {
			origin: 'top',
			scale: 0.6
		});
	}

    /* ---- navbar offset ---- */
	function scrollToID(id, speed) {
		var offSet = 69;
		var targetOffset = $(id).offset().top - offSet;
		$('html,body').animate({
			scrollTop: targetOffset
		}, speed);
	}

	function initMagnificPopup(id) {
		$('#'+id).magnificPopup({
			delegate: 'a.zoom',
			type: 'image',
			fixedContentPos: false,
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true,
				preload: [0,2]
			}
		});
	}

	/* ---- nav smooth scroll ---- */
	function initSmoothScroll() {
		$('.scroll-link').on('click', function(event) {
			event.preventDefault();
			var sectionID = $(this).attr("data-id");
			scrollToID('#' + sectionID, 750);
		});
		$('.scroll-top').on('click', function(event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1200);
		});
	}

	function initIsotope() {
		var $grid = $('.grid').isotope({
			layoutMode: 'masonry'
		});
		var $filterButtonGroup = $('.filter-button-group');
		$filterButtonGroup.on('click', 'li', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		$filterButtonGroup.each(function (t, e) {
			var i = $(e);
			i.on("click", "li", function () {
				i.find(".active").removeClass("active"), $(this).addClass("active")
			})
		});
	}

	/* ---- navbar adjust on scroll ---- */
	function initNavbarScroll() {
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 70) {
				$('.navbar').addClass('navbar-switch')
			} else {
				$('.navbar').removeClass('navbar-switch')
			}
		});
	}

	/* ---- animations ---- */
	function initAnimations() {
		if (typeof sr == 'undefined') {
			window.sr = ScrollReveal({
				duration: 1600,
				delay: 50
			});
		}
		Royal_Preloader.config({
			onComplete: function () {
				triggerReveals();
			}
		});
	}

	/* ---- close mobile nav on click ---- */
	function initMobileNav() {
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
		});
	}

	$(document).ready(function() {
		initNavbarScroll();
		initAnimations();
		initMobileNav();
		initMagnificPopup('#photography');
		initMagnificPopup('#mixed-media');
		initSmoothScroll();
		initIsotope();
	});

}());



