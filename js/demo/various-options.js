var restricteduploader = new qq.FineUploader({
    element: document.getElementById("restricted-fine-uploader"),
    request: {
        endpoint: 'server/success.html'
    },
    multiple: false,
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'txt'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
