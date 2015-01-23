$(document).ready(function () {
    $(document).on('click', '#navbar a', function() {
        if ($(this).attr('href').indexOf('./#') == 0) {
            $('#navbar li').removeClass('active');
            $(this).parent().addClass('active');
        }
    });


    $('#jquery-wrapped-fine-uploader').fineUploader({
        request: {
            endpoint: 'server/success.html',
            method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
        },
        debug: true
    });
});
