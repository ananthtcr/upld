var fileCount = 0;
var addedFiles = 0;
var fileLimit = 3;

$('#filelimit-fine-uploader').fineUploader({
    request: {
        endpoint: 'server/success.html'
    },
    validation: {
        allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
        sizeLimit: 51200 // 50 kB = 50 * 1024 bytes
    },
    debug: true,
    demoMode: true // Undocumented -> Only for the gh-pages demo website
}).on('submit', function(event, id, fileName) {
    fileCount ++;
    if(fileCount > fileLimit) {
        $('#filelimit-fine-uploader .qq-upload-button').hide();
        $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
        return false;
    }
}).on('cancel', function(event, id, fileName) {
    fileCount --;
    if(fileCount <= fileLimit) {
        $('#filelimit-fine-uploader .qq-upload-button').show();
    }
}).on('complete', function(event, id, fileName, responseJSON) {
    if (responseJSON.success) {
        addedFiles ++;
        if(addedFiles >= fileLimit) {
            $('#filelimit-fine-uploader .qq-upload-button').hide();
            $('#filelimit-fine-uploader .qq-upload-drop-area').hide();
        }
    }
});
