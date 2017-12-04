new UISearch( document.getElementById( 'sb-search' ) );

// Animation CSS
if($(window).width() >= 1024){
  new WOW().init();
}

// Mobile Menu
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












