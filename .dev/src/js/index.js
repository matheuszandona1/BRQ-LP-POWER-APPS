$(document).ready(function () {
	$("#telefone").mask("(00) 00000-0000")
})

$(document).ready(function () {
	$(".slide-parent").hide()
	$(".slide-parent:first").show()

	$(".slider__pills:first").addClass("active")

	$(".slider__pills").click(function () {
		var tab_id = $(this).attr("data-tab")
		$(".slider__pills").removeClass("active")
		$("#" + tab_id).show()
		$(this).addClass("active")
	})
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
