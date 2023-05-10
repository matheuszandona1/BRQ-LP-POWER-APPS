$(document).ready(function () {
	$("#telefone").mask("(00) 00000-0000")
})

$(".slide-parent").slick({
	slidesToShow: 3,
	arrows: true,
	dots: true,
	autoplay: false,
	// centerMode: true,
	// centerPadding: "20%",
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerPadding: "0px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerPadding: "0px",
				slidesToShow: 1,
			},
		},
	],
})


$(".faq__question").click(function () {
	$(this).find(".faq__question--text").toggleClass("active")
	$(this).find(".faq__question--answer").slideToggle()
})
