	$(document).ready(function () {
		$("#telefone").mask("(00) 00000-0000")
	})




    $(".slide-parent").slick({
		centerMode: true,
		slidesToShow: 1,
		centerPadding: "25%",
		arrows:false,
		dots:true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: "40px",
					slidesToShow: 1,
				},
			},
		],
	})



	$(document).ready(function() {
		$('.slide-parent').hide(); 
		$('.slide-parent:first').show(); 
		$('.tablinks:first').addClass('active');
	  
		$('.slider__pills').click(function(){  
		  var tab_id = $(this).attr('data-tab'); 
		  $('.slider__pills').removeClass('active');  
		  $('.slide-parent').hide(); 
		  $('#'+tab_id).show(); 
		  $(this).addClass('active');  
		})
	  })