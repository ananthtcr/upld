$(document).ready(function(){
    var BASE_URL = 'http://releases.fineuploader.com',
        version = '5.7.0';

        updateDownloadUrl = function() {
            var base = 'fine-uploader-' + version + '.zip',
                endpoint = '',
                jquery = '';

            if ($('#ep_all').prop('checked')) {
                $("#jquery_fieldset input[name='jquery']")
                    .prop('disabled', true)
                    .prop('checked', false);
            }
            else {
                $("#jquery_fieldset input[name='jquery']").prop('disabled', false);

                if ($("#jquery_fieldset input[name='jquery']").is(':checked')) {
                    jquery = 'jquery.';
                }
            }


            $("#ep_fieldset").find("input[type='radio']:checked").each(function() {
                if (this.value) {
                    endpoint = this.value + '.';
                }
            });

            $('#build-btn').attr('href', BASE_URL + '/' + version + '/' + endpoint + jquery + base);
        };


    document.getElementById('build-btn').innerHTML += ' ' + version;
    updateDownloadUrl();
    $('#customize-form').change(updateDownloadUrl);
});
