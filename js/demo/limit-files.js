var filelimituploader = new qq.FineUploader({
    element: document.getElementById('filelimit-fine-uploader'),
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    validation: {
        itemLimit: 3
    },
    debug: true
});
