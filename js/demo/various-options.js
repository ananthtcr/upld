var restricteduploader = new qq.FineUploader({
    element: document.getElementById("restricted-fine-uploader"),
    request: {
        endpoint: 'server/success.html',
        method: 'GET' // Only for the gh-pages demo website due to Github Pages limitations
    },
    multiple: false,
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    debug: true
});
