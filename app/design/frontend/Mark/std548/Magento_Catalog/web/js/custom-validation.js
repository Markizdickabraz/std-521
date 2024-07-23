define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function ($) {
    "use strict";

    return function (config, element) {

        $.validator.addMethod(
            'custom-validate-mark',
            function (value) {
                return /^[а-яА-ЯёЁіІїЇєЄґҐ-]+$/.test(value);
            },
            $.mage.__('Введіть тільки кириличні символи і дефіси')
        );

        $(document).ready(function () {
            var $lastname = $(element).find('input[name="lastname"]');
            var $firstname = $(element).find('input[name="firstname"]');

            if ($lastname.length) {
                $lastname.rules('add', {
                    'custom-validate-mark': true
                });

                $lastname.on('keyup', function () {
                    $(this).valid();
                });
            }

            if ($firstname.length) {
                $firstname.rules('add', {
                    'custom-validate-mark': true
                });

                $firstname.on('keyup', function () {
                    $(this).valid();
                });
            }
        });
    }
});

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    input.valid {
        border-color: green !important;
    }
    input.error {
        border-color: red !important;
    }
`;
document.getElementsByTagName('head')[0].appendChild(style);
