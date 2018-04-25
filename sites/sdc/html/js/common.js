
// Header Fixed   
$(window).scroll(function () {
	var height = $(window).scrollTop();
	if (height > 3) {
		$('header').addClass('header-fixed');
	} else if (height == 0) {
		$('header').removeClass('header-fixed');
	}
});




// Mobile Menu



$(document).ready(function () {
if($(window).width() <= 1024){
 $("#menu").mmenu({
   "offCanvas": {
     "position": "right"
   }
 });
}
//** services-list

$('.toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .ser-ans').removeClass('show');
        $this.parent().parent().find('li .ser-ans').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});


	// Slider Script
	jQuery("#wowslider-container1").wowSlider({
		effect: "fade",
		prev: "",
		next: "",
		duration: 30 * 100,
		delay: 30 * 100,
		width: 533,
		height: 800,
		autoPlay: true,
		autoPlayVideo: false,
		playPause: true,
		stopOnHover: true,
		loop: true,
		bullets: 1,
		caption: true,
		captionEffect: "fade",
		controls: true,
		controlsThumb: true,
		responsive: 1,
		fullScreen: true,
		gestures: 2,
		onBeforeStep: 0,
		images: 0
	});

	
 


});
