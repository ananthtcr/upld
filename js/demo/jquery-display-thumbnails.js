$('#thumbnail-fine-uploader').fineUploader({
    multiple: !qq.ios7(),
    template: "qq-simple-thumbnails-template",
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
