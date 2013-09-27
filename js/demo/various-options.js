var restricteduploader = new qq.FineUploader({
    multiple: !qq.ios7(),
    // If we're using jQuery, there's another way of selecting the DOM node
    element: $('#restricted-fine-uploader')[0],
    request: {
        endpoint: 'server/success.html'
    },
    multiple: false,
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    text: {
        uploadButton: 'Click or Drop'
    },
    showMessage: function(message) {
        // Using Bootstrap's classes and jQuery selector and DOM manipulation
        $('#restricted-fine-uploader').append('<div class="alert alert-error">' + message + '</div>');
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
