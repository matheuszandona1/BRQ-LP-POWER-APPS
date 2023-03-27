$(document).ready(function () {
	$("#telefone").mask("(00) 00000-0000")
})

$(".slide-parent").slick({
	centerMode: true,
	slidesToShow: 1,
	centerPadding: "25%",
	arrows: false,
	dots: true,
	autoplay: false,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "0px",
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "0px",
				slidesToShow: 1,
			},
		},
	],
})
$(document).ready(function () {
	// ocultar todas as tabs, exceto a primeira
	$(".slide-parent:not(:first)").hide()

	// adicionar a classe "active" à primeira slider__pills
	$(".slider__pills:first").addClass("active")

	// quando uma slider__pills é clicada
	$(".slider__pills").click(function () {
		// obter o data-tab da slider__pills clicada
		var tab_id = $(this).attr("data-tab")

		// remover a classe "active" de todas as slider__pills
		$(".slider__pills").removeClass("active")

		// adicionar a classe "active" à slider__pills clicada
		$(this).addClass("active")

		// ocultar todas as tabs
		$(".slide-parent").hide()
		$(".slide-parent").slick("refresh")
		console.log("passei por aq")

		// mostrar a tab correspondente ao data-tab da slider__pills clicada
		$("#" + tab_id).show()
	})
})
$(document).ready(function () {
	$(".w-tab-link").on("click", function () {})
})
$(document).ready(function () {
	// switch tabs
	$(".tab").click(function () {
		var cont = $(this).data("switch")
		$(".solutions__tabs--content").removeClass("active")
		$("#" + cont).addClass("active")
		$(".tab").removeClass("active")
		$(this).addClass("active")
	})
})

$(".faq__question").click(function () {
	$(this).find(".faq__question--text").toggleClass("active")
	$(this).find(".faq__question--answer").slideToggle()
})
