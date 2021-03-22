import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import React from 'react';

import { ProgressBar } from 'Component/ProgressBar/ProgressBar';
import { Checkout as CheckoutSource } from 'SourceRoute/Checkout/Checkout.component';

/** @namespace ProgressBarTheme/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends CheckoutSource {
    renderProgressBar() {
        const progressPoints = ['Shipping', 'Reviews & Payments'];
        let step;
        if (this.props.checkoutStep === 'SHIPPING_STEP') {
            step = 1;
        } else if (this.props.checkoutStep === 'BILLING_STEP') {
            step = 2;
        } else {
            // eslint-disable-next-line no-magic-numbers
            step = 3;
        }

        return <ProgressBar step={ step } progressPoints={ progressPoints } />;
    }

    render() {
        return (
            <main block="Checkout">
                { this.renderProgressBar() }
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
