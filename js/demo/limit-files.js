var filelimituploader = new qq.FineUploader({
    element: $('#filelimit-fine-uploader')[0],
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
        sizeLimit: 51200, // 50 kB = 50 * 1024 bytes
        itemLimit: 3
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
