
// Reload on top
$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
});

// Scroll
if ($(window).width() >= 1024) {
$(function() {
    $('.nav-nav a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

}
// MMenu Init
if ($(window).width() <= 1023) {
    $("#menu").mmenu({
        "pageScroll": true,
        "offCanvas": {
            "position": "right"        }
    });

}

 // Header Fixed   
 $(window).scroll(function () {
 	var height = $(window).scrollTop();
 	if (height >100) {
 		$('header').addClass('header-fixed');
 	}
 	else if (height <50) {
 		$('header').removeClass('header-fixed');
 	}
 }); 

 // HOme Page Slider

 jQuery("#homeslider").layerSlider({
 	responsive: false,
 	responsiveUnder: 1900,
 	layersContainer: 1900,
 	//hoverPrevNext: false,
 	skinsPath: 'css/skins/'
 }); 


 // Products
 $('.prod-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})