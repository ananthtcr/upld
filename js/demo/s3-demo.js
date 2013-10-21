$('#s3-demo-container').fineUploaderS3({
    multiple: !qq.ios7(),
    template: "simple-previews-template",
    debug: true,
    multiple: !qq.ios7(),
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
    messages: {
        unsupportedBrowser: "<h3>This demo is not functional in IE7 as IE7 has no support for CORS!</h3>"
    },
    thumbnails: {
        placeholders: {
            notAvailablePath: "/server/image_not_available.jpg",
            waitingPath: "/server/image_loading.gif"
        }
    },
    formatFileName: function(name) {
        if (name !== undefined && name.length > 20) {
            name = name.slice(0, 6) + '...' + name.slice(-8);
        }
        return name;
    }
})
    .on('complete', function(event, id, name, response, xhr) {
        var $fileEl = $(this).fineUploaderS3("getItemByFileId", id),
            $viewBtn = $fileEl.find(".view-btn");

        if (response.success) {
            $viewBtn.show();
            $viewBtn.attr("href", response.tempLink);
        }
    });
