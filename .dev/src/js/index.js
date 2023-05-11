$(document).ready(function () {
	$("#telefone").mask("(00) 00000-0000")
})

$(".slide-parent").slick({
	slidesToShow: 2,
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1,
			},
		},
	],
})
$(".slick-prev").click(function () {
	$(".slide-parent").slick("slickPrev")
})

$(".slick-next").click(function () {
	$(".slide-parent").slick("slickNext")
})

$(".faq__question").click(function () {
	$(this).find(".faq__question--text").toggleClass("active")
	$(this).find(".faq__question--answer").slideToggle()
})
