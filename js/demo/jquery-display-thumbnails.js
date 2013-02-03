$('#thumbnail-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html'
    },
    multiple: false,
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    text: {
        uploadButton: 'Click or Drop'
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
}).on('complete', function(event, id, fileName, responseJSON) {
    if (responseJSON.success) {
        $(this).append('<img src="img/success.jpg" alt="' + fileName + '">');
    }
});
