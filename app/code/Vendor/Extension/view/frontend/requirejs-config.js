var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/model/checkout-data-resolver': {
                'Vendor_Extension/js/model/checkout-data-resolver': true
            },
            'Magento_Checkout/js/view/summary/abstract-total': {
                'Vendor_Extension/js/view/summary/abstract-total-mixins': true
            }
        }
    }
};
