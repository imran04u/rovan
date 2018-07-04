
// MMenu Init
if($(window).width() <= 1023){
	$("#menu").mmenu({
		"offCanvas": {
			"position": "right"
		}
	});

}

 // Header Fixed   
 $(window).scroll(function () {
 	var height = $(window).scrollTop();
 	if (height >100) {
 		$('header').addClass('header-fixed');
 	}
 	else if (height == 0) {
 		$('header').removeClass('header-fixed');
 	}
 }); 

 // HOme Page Slider

 jQuery("#homeslider").layerSlider({
 	responsive: false,
 	responsiveUnder: 1900,
 	layersContainer: 1900,
 	hoverPrevNext: true,
 	skinsPath: 'css/skins/'
 }); 