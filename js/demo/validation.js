var restrictedUploader = new qq.FineUploader({
    element: document.getElementById("fine-uploader-validation"),
    template: 'qq-template-validation',
    request: {
        endpoint: '/server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    thumbnails: {
        placeholders: {
            waitingPath: '/source/placeholders/waiting-generic.png',
            notAvailablePath: '/source/placeholders/not_available-generic.png'
        }
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        itemLimit: 3,
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    debug: true
});
