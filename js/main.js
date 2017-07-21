$(document).ready(function() {

    if($("body").height() < $(window).height()){
        $("footer").css({
            /*"position":"absolute", "bottom":"0px",*/

            'position': 'fixed',
            'bottom': '0px',
            'left': '0px',
            'right': '0px',
            'margin-bottom': '0px'
        });
    }


    $("#Client_Logo").owlCarousel({
        autoPlay : 3000,
        items : 5,
        transitionStyle : "fade",
        pagination: true,
    });


	$(function(){
	    $('#mixed-items').mixItUp();
	});


	new WOW().init();

	// DOM Content Load Event Actions;
	$( window ).load(function() {
		$('div#loading').remove();
		$('body').removeClass('loading');
	});


     $('.menu').onePageNav({
         currentClass: 'active',
         changeHash: true,
         scrollSpeed: 1200,
         top : 0
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });


    // Animated Scrolling
    (function(){
        var topoffset = 0;
          $('#scroll').click(function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top-topoffset
                }, 1000);
                return false;
              } // target.length
            } //location hostname
          }); //on click

          $.scrollUp({
            scrollDistance: 2000,
            scrollSpeed: 1200,
          });
      }())
 


});
