$(document).ready(function(){
    var BASE_URL = 'http://releases.fineuploader.com',
        version = '5.1.0-12';

        updateDownloadUrl = function() {
            var base = 'fineuploader-' + version + '.zip',
                endpoint = '',
                jquery = '';

            if ($("#jquery_fieldset input[name='jquery']").is(':checked')) {
                jquery = 'jquery.';
            }

            $("#ep_fieldset").find("input[type='radio']:checked").each(function() {
                if (this.value) {
                    endpoint = this.value + '.';
                }
            });

            $('#build-btn').attr('href', BASE_URL + '/' + version + '/' + endpoint + jquery + base);
        };

    updateDownloadUrl();
    $('#customize-form').change(updateDownloadUrl);
});
