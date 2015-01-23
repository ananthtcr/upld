var uploader = new qq.FineUploader({
    element: document.getElementById('fine-uploader'),
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    debug: true
});
