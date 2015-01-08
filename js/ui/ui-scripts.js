$(document).ready(function() {
    var maybeDisplayPhpDownloadModal = function() {
        if (location.hash.indexOf('php-download') === 1) {
            $('#fineuploader-php-modal').modal('show').on('hidden', function() {
                location.hash = '';
            });
        }
    };

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

                    sourceView.find('.activeTabTrigger').first().removeClass('activeTabTrigger');
                    sourceView.find('.active').first().removeClass('active');
                    
                    $codeTab.addClass('activeTabTrigger');
                    windowEl.addClass('active');
                }
            });
        });
    });

    $('.nav li a').on('click',function(){
        $('.nav-collapse').collapse('hide');
    });

    maybeDisplayPhpDownloadModal();
    $(window).on('hashchange', function() {
        maybeDisplayPhpDownloadModal();
    });
});