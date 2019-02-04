declare module 'stripe-checkout' {
        declare interface StripeCheckoutStatic {
configure(options: StripeCheckoutOptions): StripeCheckoutHandler
} 
	declare interface StripeCheckoutHandler {
open(options?: StripeCheckoutOptions): void,
close(): void
} 
	declare interface StripeCheckoutOptions {
key?: string,
token(token: stripe.Token): void,
source(source: stripe.Source): void,
image?: string,
name?: string,
description?: string,
amount?: number,
locale?: string,
currency?: string,
panelLabel?: string,
zipCode?: boolean,
billingAddress?: boolean,
email?: string,
shippingAddress?: boolean,
label?: string,
allowRememberMe?: boolean,
bitcoin?: boolean,
alipay?: boolean | "auto",
alipayReusable?: boolean,
opened(): void,
closed(): void
} 
	declare var StripeCheckout: StripeCheckoutStatic;
    }
