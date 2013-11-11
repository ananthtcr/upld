manualuploader = new qq.FineUploader({
    element: document.getElementById("manual-fine-uploader"),
    request: {
        endpoint: 'server/success.html'
    },
    template: "qq-template-manual-noedit",
    autoUpload: false,
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});

qq(document.getElementById("triggerUpload")).attach("click", function() {
    manualuploader.uploadStoredFiles();
});
