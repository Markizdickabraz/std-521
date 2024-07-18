define([
    'jquery'
], function ($) {
    'use strict';

    /**
     * Validate that string has specific special characters
     * @param {String} value
     * @return {Boolean}
     */
    function validateSpecialCharacters(value) {
        console.log(/^[a-zA-Z0-9\u0400-\u04FF\u0456\u0490\u0491\u0457\u0404\u0406\u0407 ]+$/.test(value));
        return /^[a-zA-Z0-9\u0400-\u04FF\u0456\u0490\u0491\u0457\u0404\u0406\u0407 ]+$/.test(value);
    }

    return function (validator) {
        validator.addRule(
            'validate-special-characters',
            function (value) {
                if ($.mage.isEmptyNoTrim(value)) {
                    console.log($.mage.isEmptyNoTrim())
                    return true;
                }
                return validateSpecialCharacters(value);
            },
            $.mage.__('Please remove invalid characters: {}%')
        );

        return validator;
    };
});
