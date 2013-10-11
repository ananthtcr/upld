var thumbnailuploader = new qq.FineUploader({
    multiple: !qq.ios7(),
    template: "qq-simple-thumbnails-template",
    element: document.getElementById("thumbnail-fine-uploader"),
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
