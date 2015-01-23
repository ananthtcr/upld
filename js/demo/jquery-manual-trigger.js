var manualuploader = $('#manual-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    autoUpload: false,
    template: "qq-template-manual-noedit",
    debug: true
});

$('#triggerUpload').click(function() {
    manualuploader.fineUploader('uploadStoredFiles');
});
