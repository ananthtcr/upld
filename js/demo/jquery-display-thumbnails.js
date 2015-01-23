$('#thumbnail-fine-uploader').fineUploader({
    template: "qq-simple-thumbnails-template",
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    debug: true
});
