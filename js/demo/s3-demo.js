var s3Uploader = new qq.s3.FineUploader({
    debug: true,
    element: document.getElementById('fine-uploader-s3'),
    template: 'qq-template-s3',
    request: {
        endpoint: "upload.fineuploader.com",
        accessKey: "AKIAJB6BSMFWTAXC5M2Q"
    },
    signature: {
        endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
    },
    uploadSuccess: {
        endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php?success",
        params: {
            isBrowserPreviewCapable: qq.supportedFeatures.imagePreviews
        }
    },
    iframeSupport: {
        localBlankPagePath: "/server/success.html"
    },
    cors: {
        expected: true
    },
    chunking: {
        enabled: true
    },
    resume: {
        enabled: true
    },
    deleteFile: {
        enabled: true,
        method: "POST",
        endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
    },
    validation: {
        itemLimit: 5,
        sizeLimit: 15000000
    },
    thumbnails: {
        placeholders: {
            notAvailablePath: "/server/not_available-generic.png",
            waitingPath: "/server/waiting-generic.png"
        }
    },
    callbacks: {
        onComplete: function(id, name, response) {
            var previewLink = qq(this.getItemByFileId(id)).getByClass('preview-link')[0];

            if (response.success) {
                previewLink.setAttribute("href", response.tempLink)
            }
        }
    }
});
