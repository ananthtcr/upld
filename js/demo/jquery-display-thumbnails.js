$('#thumbnail-fine-uploader').fineUploader({
    multiple: !qq.ios7(),
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
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
