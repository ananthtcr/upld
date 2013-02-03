$(document).ready(function() {
    var $fub = $('#fine-uploader-basic');
    var $messages = $('#messages');

    var uploader = new qq.FineUploaderBasic({
        button: $fub[0],
        request: {
            endpoint: 'server/success.html'
        },
        validation: {
            allowedExtensions: ['jpeg', 'jpg', 'gif', 'png'],
            sizeLimit: 204800 // 200 kB = 200 * 1024 bytes
        },
        callbacks: {
            onSubmit: function(id, fileName) {
                $messages.append('<div id="file-' + id + '" class="alert" style="margin: 20px 0 0"></div>');
            },
            onUpload: function(id, fileName) {
                $('#file-' + id).addClass('alert-info')
                                .html('<img src="master/client/loading.gif" alt="Initializing. Please hold."> ' +
                                      'Initializing ' +
                                      '“' + fileName + '”');
            },
            onProgress: function(id, fileName, loaded, total) {
                if (loaded < total) {
                    progress = Math.round(loaded / total * 100) + '% of ' + Math.round(total / 1024) + ' kB';
                    $('#file-' + id).removeClass('alert-info')
                                    .html('<img src="master/client/loading.gif" alt="In progress. Please hold."> ' +
                                          'Uploading ' +
                                          '“' + fileName + '” ' +
                                          progress /*+
                                          ' <span class="btn btn-warning"><i class="icon-remove"></i></span>'*/);
                } else {
                    $('#file-' + id).addClass('alert-info')
                                    .html('<img src="master/client/loading.gif" alt="Saving. Please hold."> ' +
                                          'Saving ' +
                                          '“' + fileName + '”');
                }
            },
            onComplete: function(id, fileName, responseJSON) {
                if (responseJSON.success) {
                    $('#file-' + id).removeClass('alert-info')
                                    .addClass('alert-success')
                                    .html('<i class="icon-ok"></i> ' +
                                          'Successfully saved ' +
                                          '“' + fileName + '”' +
                                          '<br><img src="img/success.jpg" alt="' + fileName + '">');
                } else {
                    $('#file-' + id).removeClass('alert-info')
                                    .addClass('alert-error')
                                    .html('<i class="icon-exclamation-sign"></i> ' +
                                          'Error with ' +
                                          '“' + fileName + '”: ' +
                                          responseJSON.error);
                }
            }
        },
        debug: true,
        demoMode: true // Undocumented -> Only for the gh-pages demo website
    });
});
