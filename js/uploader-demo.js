$(document).ready(function() {
    var uploader = new qq.FileUploader({
        element: $('#basicUploadSuccessExample')[0],
        action: "success.html",
        demoMode: true //DO NOT USE THIS OPTION IN PRODUCTION CODE - FORCES GET REQUESTS INSTEAD OF POST - ONLY FOR THE FINE-UPLOADER DEMO
    });



    var uploader2 = new qq.FileUploader({
        element: $('#manualUploadModeExample')[0],
        action: "success.html",
        autoUpload: false,
        demoMode: true, //DO NOT USE THIS OPTION IN PRODUCTION CODE - FORCES GET REQUESTS INSTEAD OF POST - ONLY FOR THE FINE-UPLOADER DEMO
        uploadButtonText: "Select Files"
    });

    $('#triggerUpload').click(function() {
        uploader2.uploadStoredFiles();
    });


    var uploader3 = new qq.FileUploader({
        element: $('#basicUploadFailureExample')[0],
        action: "failure.html",
        demoMode: true,
        debug: true, //DO NOT USE THIS OPTION IN PRODUCTION CODE - FORCES GET REQUESTS INSTEAD OF POST - ONLY FOR THE FINE-UPLOADER DEMO
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
        demoMode: true, //DO NOT USE THIS OPTION IN PRODUCTION CODE - FORCES GET REQUESTS INSTEAD OF POST - ONLY FOR THE FINE-UPLOADER DEMO
        multiple: false,
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 50000,
        uploadButtonText: "Click Or Drop"
    });
});
