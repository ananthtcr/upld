$('#filelimit-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        itemLimit: 3
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
