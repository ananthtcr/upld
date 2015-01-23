$('#edit-file-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    autoUpload: false,
    debug: true
});

$('#edit-file-upload-trigger').click(function() {
    $('#edit-file-uploader').fineUploader('uploadStoredFiles');
});
