$('#failed-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/failure.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    failedUploadTextDisplay: {
        mode: 'custom',
        maxChars: 40,
        responseProperty: 'error',
        enableTooltip: true
    },
    debug: true
});
