<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- jQuery
    ====================================================================== -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <!-- Fine Uploader Gallery CSS file
    ====================================================================== -->
    <link href="client/fine-uploader-gallery.css" rel="stylesheet">

    <!-- Fine Uploader S3 jQuery JS file
    ====================================================================== -->
    <script src="client/s3.jquery.fine-uploader.js"></script>

    <!-- Fine Uploader Customized Gallery template
    ====================================================================== -->
    <script type="text/template" id="qq-template-s3">
        <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
            <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
                <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
            </div>
            <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
                <span class="qq-upload-drop-area-text-selector"></span>
            </div>
            <div class="qq-upload-button-selector qq-upload-button">
                <div>Upload a file</div>
            </div>
            <span class="qq-drop-processing-selector qq-drop-processing">
                <span>Processing dropped files...</span>
                <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>
            </span>
            <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">
                <li>
                    <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
                    <div class="qq-progress-bar-container-selector qq-progress-bar-container">
                        <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
                    </div>
                    <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
                    <div class="qq-thumbnail-wrapper">
                        <a class="preview-link" target="_blank">
                            <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale>
                        </a>
                    </div>
                    <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>
                    <button type="button" class="qq-upload-retry-selector qq-upload-retry">
                        <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
                        Retry
                    </button>

                    <div class="qq-file-info">
                        <div class="qq-file-name">
                            <span class="qq-upload-file-selector qq-upload-file"></span>
                            <span class="qq-edit-filename-icon-selector qq-edit-filename-icon" aria-label="Edit filename"></span>
                        </div>
                        <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text">
                        <span class="qq-upload-size-selector qq-upload-size"></span>
                        <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">
                            <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">
                            <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
                        </button>
                        <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">
                            <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
                        </button>
                    </div>
                </li>
            </ul>

            <dialog class="qq-alert-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Close</button>
                </div>
            </dialog>

            <dialog class="qq-confirm-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">No</button>
                    <button type="button" class="qq-ok-button-selector">Yes</button>
                </div>
            </dialog>

            <dialog class="qq-prompt-dialog-selector">
                <div class="qq-dialog-message-selector"></div>
                <input type="text">
                <div class="qq-dialog-buttons">
                    <button type="button" class="qq-cancel-button-selector">Cancel</button>
                    <button type="button" class="qq-ok-button-selector">Ok</button>
                </div>
            </dialog>
        </div>
    </script>

    <style>
        #fine-uploader-s3 .preview-link {
            display: block;
            height: 100%;
            width: 100%;
        }
    </style>

    <title>Fine Uploader S3 Demo</title>
</head>
<body>
    <!-- Fine Uploader DOM Element
    ====================================================================== -->
    <div id="fine-uploader-s3"></div>

    <!-- Your code to create an instance of Fine Uploader and bind to the DOM/template
    ====================================================================== -->
    <script>
        $('#fine-uploader-s3').fineUploaderS3({
            template: 'qq-template-s3',
            request: {
                endpoint: "upload.fineuploader.com",
                accessKey: "AKIAJB6BSMFWTAXC5M2Q"
            },
            signature: {
                endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
            },
            uploadSuccess: {
                endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php?success",
                params: {
                    isBrowserPreviewCapable: qq.supportedFeatures.imagePreviews
                }
            },
            iframeSupport: {
                localBlankPagePath: "/server/success.html"
            },
            cors: {
                expected: true
            },
            chunking: {
                enabled: true
            },
            resume: {
                enabled: true
            },
            deleteFile: {
                enabled: true,
                method: "POST",
                endpoint: "http://s3-demo.fineuploader.com/s3demo-thumbnails-cors.php"
            },
            validation: {
                itemLimit: 5,
                sizeLimit: 15000000
            },
            thumbnails: {
                placeholders: {
                    notAvailablePath: "/server/not_available-generic.png",
                    waitingPath: "/server/waiting-generic.png"
                }
            },
            callbacks: {
                onComplete: function(id, name, response) {
                    var previewLink = qq(this.getItemByFileId(id)).getByClass('preview-link')[0];

                    if (response.success) {
                        previewLink.setAttribute("href", response.tempLink)
                    }
                }
            }
        });
    </script>
</body>
</html>