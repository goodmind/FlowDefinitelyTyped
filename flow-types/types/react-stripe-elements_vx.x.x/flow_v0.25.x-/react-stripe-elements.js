declare module "react-stripe-elements" {
  import typeof * as React from "react";

  declare type ReactStripeElements$ElementChangeResponse = stripe.elements.ReactStripeElements$ElementChangeResponse;

  declare type ReactStripeElements$ElementsOptions = stripe.elements.ReactStripeElements$ElementsOptions;

  declare type ReactStripeElements$TokenOptions = stripe.ReactStripeElements$TokenOptions;

  declare type ReactStripeElements$TokenResponse = stripe.ReactStripeElements$TokenResponse;

  declare type ReactStripeElements$SourceResponse = stripe.ReactStripeElements$SourceResponse;

  declare type ReactStripeElements$SourceOptions = stripe.ReactStripeElements$SourceOptions;

  declare type ReactStripeElements$HTMLStripeElement = stripe.elements.Element;

  /**
   * There's a bug in @types/stripe which defines the property as
   * `declined_code` (with a 'd') but it's in fact `decline_code`
   */
  declare type ReactStripeElements$PatchedTokenResponse = ReactStripeElements$TokenResponse & {
    error?: {
      decline_code?: string
    }
  };

  declare interface ReactStripeElements$StripeProviderOptions {
    stripeAccount?: string;
  }

  declare type ReactStripeElements$StripeProviderProps =
    | ({
        apiKey: string,
        stripe?: empty
      } & ReactStripeElements$StripeProviderOptions)
    | ({
        apiKey?: empty,
        stripe: stripe.Stripe | null
      } & ReactStripeElements$StripeProviderOptions);

  declare interface ReactStripeElements$StripeProps {
    createSource(
      sourceData?: ReactStripeElements$SourceOptions
    ): Promise<ReactStripeElements$SourceResponse>;
    createToken(
      options?: ReactStripeElements$TokenOptions
    ): Promise<ReactStripeElements$PatchedTokenResponse>;
    paymentRequest: $ElementType<stripe.Stripe, "paymentRequest">;
  }

  declare interface ReactStripeElements$InjectOptions {
    withRef?: boolean;
  }

  declare interface ReactStripeElements$InjectedStripeProps {
    stripe?: ReactStripeElements$StripeProps;
  }

  declare type ReactStripeElements$ElementProps = {
    id?: string,
    className?: string,
    elementRef?: (ref: any) => void,
    onChange?: (event: ReactStripeElements$ElementChangeResponse) => void,
    onBlur?: (event: ReactStripeElements$ElementChangeResponse) => void,
    onFocus?: (event: ReactStripeElements$ElementChangeResponse) => void,
    onReady?: (el: ReactStripeElements$HTMLStripeElement) => void
  } & ReactStripeElements$ElementsOptions;

  declare export class StripeProvider
    mixins React.Component<ReactStripeElements$ReactStripeElements$StripeProviderProps> {}
  declare export class Elements
    mixins React.Component<stripe.elements.ElementsCreateOptions> {}
  declare export function injectStripe<P: { [key: string]: any }>(
    WrappedComponent: React.ComponentType<
      P & ReactStripeElements$ReactStripeElements$InjectedStripeProps
    >,
    componentOptions?: ReactStripeElements$ReactStripeElements$InjectOptions
  ): React.ComponentType<P>;

  declare export class CardElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class CardNumberElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class CardExpiryElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class CardCVCElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class PostalCodeElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class PaymentRequestButtonElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class IbanElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
  declare export class IdealBankElement
    mixins React.Component<ReactStripeElements$ReactStripeElements$ElementProps> {}
}
