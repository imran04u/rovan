 // Header Fixed   
 $(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height >3) {
    $('header').addClass('header-fixed');
  }
  else if (height == 0) {
    $('header').removeClass('header-fixed');
  }
});  



$(document).ready(function() {
 
if($(window).width() <= 1024){
	 $("#menu").mmenu({
	   "offCanvas": {
		 "position": "right"
	   }
	 });  
	}	
});









