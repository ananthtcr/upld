$(document).ready(function() {
//    console.log('ready!');
//    var num = 105; //number of pixels before modifying styles
//
//    $(window).bind('scroll', function () {
//        if ($(window).scrollTop() > num) {
//            $('.demo-nav').addClass('fixed');
//                console.log('it is fixed');
////                $('body').css("padding-top", "40px");
//                $('.demo-nav').css("margin-top", "40px");
//
//
//        } else {
//            $('.demo-nav').removeClass('fixed');
////            $('body').css({'padding-top' : '30px',
////                           'height' : 'auto'
////            });
//            $('.demo-nav').css("margin-top", "0px");
//        }
//    });
    $( '.view-code a' ).click(function() {
        var viewCode =  $(this).siblings('.source-view');

        viewCode.animate({
            opacity: "toggle",
            height: "toggle"
        });
    });
});

