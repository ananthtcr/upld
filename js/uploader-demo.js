$(document).ready(function() {
    var uploader = new qq.FileUploader({
        element: $('#basicUploadSuccessExample')[0],
        action: "http://valums.github.com/file-uploader/success.html"
    });



    var uploader2 = new qq.FileUploader({
        element: $('#manualUploadModeExample')[0],
        action: "http://valums.github.com/file-uploader/success.html",
        autoUpload: false
    });

    $('#triggerUpload').click(function() {
        uploader2.uploadStoredFiles();
    });


    var uploader3 = new qq.FileUploader({
        element: $('#basicUploadFailureExample')[0],
        action: "http://valums.github.com/file-uploader/failure.html",
        autoUpload: false
    });
});
