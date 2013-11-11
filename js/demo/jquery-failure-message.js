$('#failed-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/failure.html'
    },
    failedUploadTextDisplay: {
        mode: 'custom',
        maxChars: 40,
        responseProperty: 'error',
        enableTooltip: true
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
