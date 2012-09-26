$(document).ready(function() {
    var uploader = new qq.FileUploader({
        element: $('#basicUploadSuccessExample')[0],
        action: "success.html",
        demoMode: true
    });



    var uploader2 = new qq.FileUploader({
        element: $('#manualUploadModeExample')[0],
        action: "success.html",
        autoUpload: false,
        demoMode: true,
        uploadButtonText: "Select Files"
    });

    $('#triggerUpload').click(function() {
        uploader2.uploadStoredFiles();
    });


    var uploader3 = new qq.FileUploader({
        element: $('#basicUploadFailureExample')[0],
        action: "failure.html",
        demoMode: true,
        debug: true,
        failedUploadTextDisplay: {
            mode: 'custom',
            maxChars: 40,
            responseProperty: 'error',
            enableTooltip: true
        }
    });


    var uploader4 = new qq.FileUploader({
        element: $('#uploadWithVariousOptionsExample')[0],
        action: "success.html",
        demoMode: true,
        multiple: false,
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 50000,
        uploadButtonText: "Click Or Drop"
    });
});
