$(document).ready(function() {

    if($("body").height() < $(window).height()){
        $("footer").css({
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


	// DOM Content Load Event Actions;
	$( window ).load(function() {
		$('div#loading').remove();
		$('body').removeClass('loading');
	});
});
