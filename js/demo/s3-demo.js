$('#s3-demo-container').fineUploaderS3({
    debug: true,
    request: {
        endpoint: "upload.fineuploader.com",
        accessKey: "AKIAJB6BSMFWTAXC5M2Q",
        signatureEndpoint: "http://s3-demo.fineuploader.com/s3demo.php",
        successEndpoint: "http://s3-demo.fineuploader.com/s3demo.php?success",
        successRedirectEndpoint: "/server/success.html",
        acl: "public-read"
    },
    fileTemplate: '<li>' +
        '<div class="qq-progress-bar"></div>' +
        '<span class="qq-upload-spinner"></span>' +
        '<span class="qq-upload-finished"></span>' +
        '<span class="qq-upload-file"></span>' +
        '<span class="qq-upload-size"></span>' +
        '<button class="qq-upload-cancel btn btn-small">{cancelButtonText}</button>' +
        '<button class="qq-upload-retry btn btn-small">{retryButtonText}</button>' +
        '<button class="qq-upload-delete btn btn-small">{deleteButtonText}</button>' +
        '<span class="qq-upload-status-text">{statusText}</span>' +
        '</li>',
    cors: {
        expected: true,
        allowXdr: true
    },
    retry: {
        showButton: true
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
        endpoint: "http://s3-demo.fineuploader.com/s3demo.php"
    },
    validation: {
        itemLimit: 5,
        sizeLimit: 15000000
    }
})
    .on('complete', function(event, id, name, response, xhr) {
        var key = $(this).fineUploaderS3("getKey", id),
            $fileEl = $(this).fineUploaderS3("getItemByFileId", id),
            fileUrl = "http://upload.fineuploader.com/" + key,
            $viewBtn = $("<a>View</a>");

        if (response.success) {
            $viewBtn.addClass("btn btn-small");
            $viewBtn.attr("href", fileUrl);
            $viewBtn.attr("target", "_blank");

            $fileEl.find(".qq-upload-status-text").before($viewBtn);
        }
    });
