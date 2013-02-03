var faileduploader = new qq.FineUploader({
    element: document.getElementById('failed-fine-uploader'),
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
