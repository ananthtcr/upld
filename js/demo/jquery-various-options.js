$('#restricted-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    multiple: false,
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    showMessage: function(message) {
        // Using Bootstrap's classes and jQuery selector and DOM manipulation
        $('#restricted-fine-uploader').append('<div class="alert alert-error">' + message + '</div>');
    },
    debug: true
});
