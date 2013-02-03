manualuploader = new qq.FineUploader({
    element: $('#manual-fine-uploader')[0],
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
    manualuploader.uploadStoredFiles();
});
