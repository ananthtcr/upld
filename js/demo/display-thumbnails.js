var thumbnailuploader = new qq.FineUploader({
    element: $('#thumbnail-fine-uploader')[0],
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    callbacks: {
        onComplete: function(id, fileName, responseJSON) {
            if (responseJSON.success) {
                $('#thumbnail-fine-uploader').append('<img src="img/success.jpg" alt="' + fileName + '">');
            }
        }
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
