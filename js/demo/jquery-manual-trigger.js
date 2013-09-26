var manualuploader = $('#manual-fine-uploader').fineUploader({
    multiple: !qq.ios7(),
    request: {
        endpoint: 'server/success.html'
    },
    autoUpload: false,
    template: "qq-template-manual-noedit",
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});

$('#triggerUpload').click(function() {
    manualuploader.fineUploader('uploadStoredFiles');
});
