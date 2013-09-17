$('#edit-file-uploader').fineUploader({
    multiple: !qq.ios7(),
    request: {
        endpoint: 'server/success.html'
    },
    editFilename: {
        enabled: true
    },
    autoUpload: false,
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});

$('#edit-file-upload-trigger').click(function() {
    $('#edit-file-uploader').fineUploader('uploadStoredFiles');
});
