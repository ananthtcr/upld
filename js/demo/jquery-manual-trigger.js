var manualuploader = $('#manual-fine-uploader').fineUploader({
    multiple: !qq.ios7(),
    request: {
        endpoint: 'server/success.html'
    },
    autoUpload: false,
    text: {
        uploadButton: '<i class="icon-plus icon-white"></i> Select Files'
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});

$('#triggerUpload').click(function() {
    manualuploader.fineUploader('uploadStoredFiles');
});
