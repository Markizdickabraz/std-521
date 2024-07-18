<?php
declare(strict_types=1);

namespace Vendor\CustomAddressValidation\Plugin;

class ModifyCheckoutField
{
    /**
     * Modify checkout street field validation
     */
    public function afterProcess(
        \Magento\Checkout\Block\Checkout\LayoutProcessor $subject,
        array $jsLayout
    ) {
        //Shipping Address
        if (isset(
            $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']
            ['children']['shippingAddress']['children']['shipping-address-fieldset']['children']
        )) {
            $shippingAddressFieldset = &$jsLayout['components']['checkout']['children']['steps']['children']
            ['shipping-step']['children'] ['shippingAddress']['children']['shipping-address-fieldset']['children'];
            $shippingAddressFieldset = $this->addValidationForFields($shippingAddressFieldset);
        }

        //Billing Address on payment method
        if (isset($jsLayout['components']['checkout']['children']['steps']['children']['billing-step']
            ['children']['payment']['children']['payments-list']['children'])) {
            $paymentList = $jsLayout['components']['checkout']['children']['steps']['children']['billing-step']
            ['children']['payment']['children']['payments-list']['children'];

            foreach ($paymentList as $key => $payment) {
                if (isset($payment['children']['form-fields']['children'])) {
                    $paymentsListFormFields = &$jsLayout['components']['checkout']['children']['steps']
                    ['children']['billing-step']['children']['payment']['children']['payments-list']
                    ['children'][$key]['children']['form-fields']['children'];
                    $paymentsListFormFields = $this->addValidationForFields($paymentsListFormFields);
                }
            }
        }

        //Billing Address on payment page
        if (isset($jsLayout['components']['checkout']['children']['steps']['children']['billing-step']
            ['children']['payment']['children']['afterMethods']['children'])) {
            if (isset($jsLayout['components']['checkout']['children']['steps']['children']['billing-step']['children']
                ['payment']['children']['afterMethods']['children']['billing-address-form']['children']['form-fields']
                ['children'])) {
                $billingAddressFormFormFields = &$jsLayout['components']['checkout']['children']['steps']['children']
                ['billing-step']['children']['payment']['children']['afterMethods']
                ['children']['billing-address-form']['children']['form-fields']['children'];
                $billingAddressFormFormFields = $this->addValidationForFields($billingAddressFormFormFields);
            }
        }

        return $jsLayout;
    }

    /**
     * @param $formFields
     * @return array
     */
    private function addValidationForFields($formFields): array
    {
        $formFields['street']['children'][0]['validation']['validate-special-characters'] = true;
        $formFields['street']['children'][1]['validation']['validate-special-characters'] = true;
        $formFields['street']['children'][2]['validation']['validate-special-characters'] = true;

        return $formFields;
    }
}
