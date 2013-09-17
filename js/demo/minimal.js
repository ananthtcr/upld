var uploader = new qq.FineUploader({
    multiple: !qq.ios7(),
    element: document.getElementById('fine-uploader'),
    request: {
        endpoint: 'server/success.html'
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
