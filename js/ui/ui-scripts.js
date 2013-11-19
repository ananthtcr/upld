window.onLoad = function() {

	var num = 50; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.menu').addClass('fixed');
	    } else {
	        $('.menu').removeClass('fixed');
	    }
	});
}