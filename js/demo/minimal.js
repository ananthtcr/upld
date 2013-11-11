var uploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader'),
    request: {
        endpoint: 'server/success.html'
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
