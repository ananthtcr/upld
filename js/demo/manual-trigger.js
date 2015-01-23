manualuploader = new qq.FineUploader({
    element: document.getElementById("manual-fine-uploader"),
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    template: "qq-template-manual-noedit",
    autoUpload: false,
    debug: true
});

qq(document.getElementById("triggerUpload")).attach("click", function() {
    manualuploader.uploadStoredFiles();
});
