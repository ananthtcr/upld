var thumbnailuploader = new qq.FineUploader({
    template: "qq-simple-thumbnails-template",
    element: document.getElementById("thumbnail-fine-uploader"),
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    debug: true
});
