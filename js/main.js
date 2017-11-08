
$( document ).ready(function() {

    $('.percentageLoads').animate({height:'100%'}, 2000, "linear");

    setTimeout(function(){ 
        $('.percentageScale').addClass("scale");
    }, 2005);

    setTimeout(function(){ 
        $(this).scrollTop(0);
        $('.percentageScale').addClass("width");
        $('.precontent, .textanim').animate({opacity:'0'}, 500, "linear");
    }, 2500);
    
    setTimeout(function(){ 
        $('#preloader').hide();
        $('body').addClass("show");

// H2 Aniation
$('.ml3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
.add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
        return 200 * (i+1)
    }
})


// H2 Aniation
$('.ml12').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: false})
.add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: function(el, i) {
        return 3260 + 30 * i;
    }
})

}, 3000);

    setTimeout(function(){ 
        $('.bg1').addClass("revealico");
        $('.bg2').addClass("revealico");
    }, 6000);

    $('.tiltimg').tilt({
        glare: true,
        maxGlare: .3,
        transition: true,  
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 500,
    })
    $('.tiltmob').tilt({
        glare: false,
        maxGlare: .3,
        transition: true,  
        easing: "cubic-bezier(.03,.98,.52,.99)",
        perspective: 900,
    })

// End document ready
});

