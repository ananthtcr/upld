$(document).ready(function() {
    $('.view-code').each(function(index, el) {
        var $viewCode = $(el),
            toggleLink = $viewCode.children('BUTTON:first'),
            sourceView = $viewCode.children('.source-view'),
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

            $codeTab.keydown(function(event) {
                if (event.which === 13) {
                    $(this).click();
                }
            })
        });
    });

    $('.nav li a').on('click',function(){
        $('.nav-collapse').collapse('hide');
    });


    /* table column/row highlighting */
    var allCells = $(".table-highlight td");

    allCells.on("mouseover", function() {
        var el = $(this), pos = el.index();
        el.parent().find("th, td").addClass("highlight");
        allCells.filter(":nth-child(" + (pos + 1) + ")").addClass("highlight");
    })
    .on("mouseout", function() {
        allCells.removeClass("highlight");
    });
});