var manualuploader;
var fileCount = 0;
var addedFiles = 0;
var fileLimit = 3;

var filelimituploader = new qq.FineUploader({
    element: $('#filelimit-fine-uploader')[0],
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    callbacks: {
        onSubmit: function(id, fileName) {
            fileCount ++;
            if(fileCount > fileLimit) {
                $('#filelimit-fine-uploader .qq-upload-button').hide();
                $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
                return false;
            }
        },
        onCancel: function(id, fileName) {
            fileCount --;
            if(fileCount <= fileLimit) {
                $('#filelimit-fine-uploader .qq-upload-button').show();
            }
        },
        onComplete: function(id, fileName, responseJSON) {
            if (responseJSON.success) {
                addedFiles ++;
                if(addedFiles >= fileLimit) {
                    $('#filelimit-fine-uploader .qq-upload-button').hide();
                    $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
                }
            }
        }
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
});
