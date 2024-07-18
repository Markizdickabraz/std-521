define([
    'jquery',
], function($) {
    'use strict';

    return function(originalComponent) {
        return originalComponent.extend({
            initialize: function () {
                this._super();
                this.applyInputMask();
                return this;
            },
            applyInputMask: function() {
                $(document).ready(function() {
                    setTimeout(function() {
                        $('input[name="telephone"]').inputmask({"mask": "+99 (999) 999 99 99"});
                    }, 1000);
                });
            }
        });
    };
});
