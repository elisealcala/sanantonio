(function ($) {
	$(document).ready(init);
	function init() {
		$('.single-item-slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			speed: 300,
			arrows: true,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000
		});

		$('.item-list-movil').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			infinite: true,
			speed: 300,
			arrows: false,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 5000
		});


		$('.webform-button--submit').val('Enviar');
		$('#edit-submit-galeria').val('Buscar');

		$('.file--mime-application-pdf').find('a').each(function() {
			console.log($(this));
			$(this).val('Descargar archivo');
			$(this).text('Descargar archivo');
		});

		$('.demo').datepicker({
		  next_button: '&gt;',
		  prev_button: '&lt;'
		});

		$('#menu').click(function() {
			$('div.region-primary-menu').find('ul.menu').toggleClass("right");
		});

		$('.navbar-toggle').click(function() {
			$('aside.menu-offcanvas').toggleClass('show-offcanvas');
			$('div.layout-container').toggleClass('right-position');
		});

	};
})(jQuery);