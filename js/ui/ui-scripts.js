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

    (function () {
        function on(target, eventName, listener) {
            var method = 'addEventListener';
            if (!target.addEventListener) {
                method = 'attachEvent';
                eventName = 'on' + eventName;
            }

            target[method](eventName, listener);
        }
        var activeTab = document.querySelector('.code-window.active'),
            activeTabTrigger = document.querySelector('.activeTabTrigger');

        on(document, 'click', function (event) {
            var target = event.target || event.srcElement;
            console.log(target);

            if (!/\bcode-tab\b/.test(target.className)) {
                return;
            }
            activeTab.className = activeTab.className.replace(/\b active\b/, '');
            console.log(activeTab.className);
            activeTabTrigger.className = activeTabTrigger.className.replace(/\bactiveTabTrigger\b/, '');
            activeTab = document.getElementById(target.getAttribute('data-tab'));
            activeTabTrigger = target;
            activeTab.className += ' active';
            activeTabTrigger.className += ' activeTabTrigger';
        });
    })();
});

