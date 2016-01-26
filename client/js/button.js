/*globals qq*/

/**
 * This module represents an upload or "Select File(s)" button.  It's job is to embed an opaque `<input type="file">`
 * element as a child of a provided "container" element.  This "container" element (`options.element`) is used to provide
 * a custom style for the `<input type="file">` element.
 *
 * @param o Options to override the default values
 */
qq.UploadButton = function(o) {
    "use strict";

    var self = this,

        disposeSupport = new qq.DisposeSupport(),

        options = {
            // "Container" element
            element: null,

            // If true adds `multiple` attribute to `<input type="file">`
            multiple: false,

            // Corresponds to the `accept` attribute on the associated `<input type="file">`
            acceptFiles: null,

            // A true value allows folders to be selected, if supported by the UA
            folders: false,

            // `name` attribute of `<input type="file">`
            name: "qqfile",

            // Called when the browser invokes the onchange handler on the `<input type="file">`
            onChange: function(input) {}
        },
        input, buttonId;

    // Overrides any of the default option values with any option values passed in during construction.
    qq.extend(options, o);

    buttonId = qq.getUniqueId();

    // Embed an opaque `<input type="file">` element as a child of `options.element`.
    function createInput() {
        var input = document.createElement("input");

        input.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, buttonId);
        input.setAttribute("title", "file input");

        self.setMultiple(options.multiple, input);

        if (options.folders && qq.supportedFeatures.folderSelection) {
            // selecting directories is only possible in Chrome now, via a vendor-specific prefixed attribute
            input.setAttribute("webkitdirectory", "");
        }

        if (options.acceptFiles) {
            input.setAttribute("accept", options.acceptFiles);
        }

        input.setAttribute("type", "file");
        input.setAttribute("name", options.name);

        qq(input).css({
            position: "absolute",
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: "Arial",
            // It's especially important to make this an arbitrarily large value
            // to ensure the rendered input button in IE takes up the entire
            // space of the container element.  Otherwise, the left side of the
            // button will require a double-click to invoke the file chooser.
            // In other browsers, this might cause other issues, so a large font-size
            // is only used in IE.  There is a bug in IE8 where the opacity style is  ignored
            // in some cases when the font-size is large.  So, this workaround is not applied
            // to IE8.
            fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
            margin: 0,
            padding: 0,
            cursor: "pointer",
            opacity: 0
        });

        options.element.appendChild(input);

        disposeSupport.attach(input, "change", function() {
            options.onChange(input);
        });

        return input;
    }

    // Make button suitable container for input
    qq(options.element).css({
        position: "relative",
        overflow: "hidden",
        // Make sure browse button is in the right side in Internet Explorer
        direction: "ltr"
    });

    // Exposed API
    qq.extend(this, {
        getInput: function() {
            return input;
        },

        getButtonId: function() {
            return buttonId;
        },

        setMultiple: function(isMultiple, optInput) {
            var input = optInput || this.getInput();

            if (isMultiple) {
                input.setAttribute("multiple", "");
            }
            else {
                input.removeAttribute("multiple");
            }
        },

        setAcceptFiles: function(acceptFiles) {
            if (acceptFiles !== options.acceptFiles) {
                input.setAttribute("accept", acceptFiles);
            }
        },

        reset: function() {
            if (input.parentNode) {
                qq(input).remove();
            }

            qq(options.element).removeClass(options.focusClass);
            input = null;
            input = createInput();
        }
    });

    input = createInput();
};

qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";
