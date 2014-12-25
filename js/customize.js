$(document).ready(function(){

    var BASE_URL = 'http://releases.fineuploader.com',
        VERSION = '5.1.0-12';

    $("#customize-form").submit(function(e) {

        var jquery = '',
            endpoint = '',
            base = 'fineuploader-' + VERSION + '.zip';

        $("#jquery_fieldset").find("input[type='checkbox']:checked").each(function(i, checkbox){
            jquery = 'jquery.';
        });

        $("#ep_fieldset").find("input[type='radio']:checked").each(function(i, radio){
            if (radio.value) {
                endpoint = radio.value + '.';
            }
        });


        var url = BASE_URL + '/' + VERSION + '/' + endpoint + jquery + base;
        $("<iframe>")
            .hide()
            .prop("src", url)
            .appendTo("body");

        e.preventDefault();
        e.stopPropagation();
        return false;
    });
});
