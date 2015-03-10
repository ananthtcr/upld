window.onload = function() {
    var iframes = document.getElementsByTagName('iframe'),
        maxIframeWidth = 800,
        minIframeWidth = 500,
        currentIframeWidth = 0,

        updateWidth = function() {
            var newWidth = Math.min(window.innerWidth - 50, maxIframeWidth);
            newWidth = Math.max(newWidth, minIframeWidth);

            if (newWidth !== currentIframeWidth) {
                currentIframeWidth = newWidth;
                for (var i = 0; i < iframes.length; i++) {
                    iframes[i].width = newWidth;
                }
            }
        };

    window.onresize = updateWidth;
    updateWidth();
};