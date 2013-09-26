var btuploader = new qq.FineUploader({
    multiple: !qq.ios7(),
    element: document.getElementById('bootstrapped-fine-uploader'),
    request: {
        endpoint: 'server/success.html'
    },
    template: "qq-template-bootstrap",
    classes: {
        success: 'alert alert-success',
        fail: 'alert alert-error'
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
