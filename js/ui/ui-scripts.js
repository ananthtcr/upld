$(document).ready(function() {
//    console.log('ready!');
//    var num = 275; //number of pixels before modifying styles
//
//    $(window).bind('scroll', function () {
//        if ($(window).scrollTop() > num) {
//            $('.demo-subnav').addClass('fixed');
//                console.log('it is fixed');
////                $('body').css("padding-top", "40px");
//                $('.demo-subnav').css("margin-top", "40px");
//
//
//        } else {
//            $('.demo-subnav').removeClass('fixed');
////            $('body').css({'padding-top' : '30px',
////                           'height' : 'auto'
////            });
//            $('.demo-subnav').css("margin-top", "0px");
//        }
//    });
    $('.view-code').each(function(index, el) {
        var $viewCode = $(el),
            toggleLink = $viewCode.children('a'),
            sourceView = $viewCode.children('.source-view')
            codeTabs = $(this).find('.code-tab');
        
        $(toggleLink).on('click', function() {
            sourceView.animate({
                opactiy: 'toggle',
                height: 'toggle'
            });
        });
        
        codeTabs.each(function(index, element) {
            var $codeTab = $(element);
            
            $codeTab.on('click', function(event) {
                var active = $codeTab.hasClass('activeTabTrigger');
                if (active) return false;
                else {
                    var windowClassName = $codeTab.data('tab'),
                        windowEl = $viewCode.find('#'+windowClassName);
                    console.log(windowEl);
                    
                    sourceView.find('.activeTabTrigger').first().removeClass('activeTabTrigger');
                    sourceView.find('.active').first().removeClass('active');
                    
                    $codeTab.addClass('activeTabTrigger');
                    windowEl.addClass('active');
                }
            });
          
        });
        
        
        // 1. Click the tab
        // 2. Show relevant code
        // 3. Disable tab
       
    });

    /*
    (function () {

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
    */
});

