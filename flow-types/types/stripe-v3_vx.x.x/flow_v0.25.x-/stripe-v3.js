declare module "stripe-v3" {
  declare var stripe$Stripe: stripe$stripe$StripeStatic;
  declare interface stripe$StripeStatic {
    (publicKey: string, options?: stripe$StripeOptions): stripe$Stripe;
    version: number;
  }

  declare interface stripe$Stripe {
    elements(
      options?: elements$elements$ElementsCreateOptions
    ): elements$elements$Elements;
    createToken(
      element: elements$elements$Element,
      options?: stripe$TokenOptions
    ): Promise<stripe$TokenResponse>;
    createToken(
      name: "bank_account",
      options: stripe$BankAccountTokenOptions
    ): Promise<stripe$TokenResponse>;
    createToken(
      name: "pii",
      options: stripe$PiiTokenOptions
    ): Promise<stripe$TokenResponse>;
    createSource(
      element: elements$elements$Element,
      options?: {
        owner?: stripe$OwnerInfo
      }
    ): Promise<stripe$SourceResponse>;
    createSource(options: stripe$SourceOptions): Promise<stripe$SourceResponse>;
    retrieveSource(
      options: stripe$RetrieveSourceOptions
    ): Promise<stripe$SourceResponse>;
    paymentRequest(
      options: paymentRequest$paymentRequest$StripePaymentRequestOptions
    ): paymentRequest$paymentRequest$StripePaymentRequest;
  }

  declare interface stripe$StripeOptions {
    stripeAccount?: string;
  }

  declare interface stripe$TokenOptions {
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
    currency?: string;
  }

  declare interface stripe$BankAccountTokenOptions {
    country: string;
    currency: string;
    routing_number: string;
    account_number: string;
    account_holder_name: string;
    account_holder_type: string;
  }

  declare interface stripe$PiiTokenOptions {
    personal_id_number: string;
  }

  declare interface stripe$OwnerInfo {
    address?: {
      city?: string,
      country?: string,
      line1?: string,
      line2?: string,
      postal_code?: string,
      state?: string
    };
    name?: string;
    email?: string;
    phone?: string;
  }

  declare interface stripe$SourceOptions {
    type: string;
    flow?: "redirect" | "receiver" | "code_verification" | "none";
    sepa_debit?: {
      iban: string
    };
    currency?: string;
    amount?: number;
    owner?: stripe$OwnerInfo;
    metadata?: {};
    statement_descriptor?: string;
    redirect?: {
      return_url: string
    };
    token?: string;
    usage?: "reusable" | "single_use";
    three_d_secure?: {
      card: string
    };
  }

  declare interface stripe$Token {
    id: string;
    object: string;
    bank_account?: stripe$BankAccount;
    card?: stripe$Card;
    client_ip: string;
    created: number;
    livemode: boolean;
    type: string;
    used: boolean;
  }

  declare interface stripe$TokenResponse {
    token?: stripe$Token;
    error?: stripe$Error;
  }

  declare interface stripe$Source {
    client_secret: string;
    created: number;
    currency: string;
    id: string;
    owner: {
      address: string | null,
      email: string | null,
      name: string | null,
      phone: string | null,
      verified_address: string | null,
      verified_email: string | null,
      verified_name: string | null,
      verified_phone: string | null
    };
    sepa_debit?: {
      bank_code: string | null,
      country: string | null,
      fingerprint: string,
      last4: string,
      mandate_reference: string
    };
    card?: stripe$Card;
    status?: string;
    redirect?: {
      status: string,
      url: string
    };
    three_d_secure?: {
      authenticated: boolean
    };
  }

  declare interface stripe$SourceResponse {
    source?: stripe$Source;
    error?: stripe$Error;
  }

  declare interface stripe$Error {
    type: string;
    charge: string;
    message?: string;
    code?: string;
    decline_code?: string;
    param?: string;
  }

  declare type stripe$statusType =
    | "new"
    | "validated"
    | "verified"
    | "verification_failed"
    | "errored";

  declare interface stripe$BankAccount {
    id: string;
    object: string;
    account_holder_name: string;
    account_holder_type: string;
    bank_name: string;
    country: string;
    currency: string;
    fingerprint: string;
    last4: string;
    routing_number: string;
    status: stripe$statusType;
  }

  declare type stripe$brandType =
    | "Visa"
    | "American Express"
    | "MasterCard"
    | "Discover"
    | "JCB"
    | "Diners Club"
    | "Unknown";

  declare type stripe$checkType = "pass" | "fail" | "unavailable" | "unchecked";

  declare type stripe$fundingType = "credit" | "debit" | "prepaid" | "unknown";

  declare type stripe$tokenizationType = "apple_pay" | "android_pay";

  declare interface stripe$Card {
    id: string;
    object: string;
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line1_check?: stripe$checkType;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    address_zip_check?: stripe$checkType;
    brand: stripe$brandType;
    country: string;
    currency?: string;
    cvc_check?: stripe$checkType;
    dynamic_last4: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: stripe$fundingType;
    last4: string;
    metadata: any;
    name?: string;
    tokenization_method?: stripe$tokenizationType;
    three_d_secure?: "required" | "recommended" | "optional" | "not_supported";
  }

  declare interface stripe$RetrieveSourceOptions {
    id: string;
    client_secret: string;
  }

  declare interface paymentRequest$DisplayItem {
    amount: number;
    label: string;
    pending?: boolean;
  }

  declare interface paymentRequest$StripePaymentRequestUpdateOptions {
    currency: string;
    total: paymentRequest$DisplayItem;
    displayItems?: paymentRequest$DisplayItem[];
    shippingOptions?: paymentRequest$ShippingOption[];
  }

  declare type paymentRequest$StripePaymentRequestOptions = {
    country: string,
    requestPayerName?: boolean,
    requestPayerEmail?: boolean,
    requestPayerPhone?: boolean,
    requestShipping?: boolean
  } & paymentRequest$StripePaymentRequestUpdateOptions;

  declare interface paymentRequest$UpdateDetails {
    status: "success" | "fail" | "invalid_shipping_address";
    total?: paymentRequest$DisplayItem;
    displayItems?: paymentRequest$DisplayItem[];
    shippingOptions?: paymentRequest$ShippingOption[];
  }

  declare interface paymentRequest$ShippingOption {
    id: string;
    label: string;
    detail?: string;
    amount: number;
  }

  declare interface paymentRequest$ShippingAddress {
    country: string;
    addressLine: string[];
    region: string;
    city: string;
    postalCode: string;
    recipient: string;
    phone: string;
    sortingCode?: string;
    dependentLocality?: string;
  }

  declare interface paymentRequest$StripePaymentResponse {
    complete: (status: string) => void;
    payerName?: string;
    payerEmail?: string;
    payerPhone?: string;
    shippingAddress?: paymentRequest$ShippingAddress;
    shippingOption?: paymentRequest$ShippingOption;
    methodName: string;
  }

  declare type paymentRequest$StripeTokenPaymentResponse = {
    token: stripe$Token
  } & paymentRequest$StripePaymentResponse;

  declare type paymentRequest$StripeSourcePaymentResponse = {
    source: stripe$Source
  } & paymentRequest$StripePaymentResponse;

  declare interface paymentRequest$StripePaymentRequest {
    canMakePayment(): Promise<{
      applePay?: boolean
    } | null>;
    show(): void;
    update(options: paymentRequest$StripePaymentRequestUpdateOptions): void;
    on(
      event: "token",
      elements$handler: (
        response: paymentRequest$StripeTokenPaymentResponse
      ) => void
    ): void;
    on(
      event: "source",
      elements$handler: (
        response: paymentRequest$StripeSourcePaymentResponse
      ) => void
    ): void;
    on(event: "cancel", elements$handler: () => void): void;
    on(
      event: "shippingaddresschange",
      elements$handler: (response: {
        updateWith: (options: paymentRequest$UpdateDetails) => void,
        shippingAddress: paymentRequest$ShippingAddress
      }) => void
    ): void;
    on(
      event: "shippingoptionchange",
      elements$handler: (response: {
        updateWith: (options: paymentRequest$UpdateDetails) => void,
        shippingOption: paymentRequest$ShippingOption
      }) => void
    ): void;
  }

  declare interface elements$ElementsCreateOptions {
    fonts?: elements$Font[];
    locale?: string;
  }

  declare type elements$handler = (
    response?: elements$ElementChangeResponse
  ) => void;

  declare type elements$eventTypes = "blur" | "change" | "focus" | "ready";

  declare interface elements$Element {
    mount(domElement: any): void;
    on(event: elements$eventTypes, elements$handler: elements$handler): void;
    on(
      event: "click",
      elements$handler: (response: {
        preventDefault: () => void
      }) => void
    ): void;
    focus(): void;
    blur(): void;
    clear(): void;
    unmount(): void;
    destroy(): void;
    update(options: elements$ElementsOptions): void;
  }

  declare interface elements$ElementChangeResponse {
    elementType: string;
    brand: string;
    complete: boolean;
    empty: boolean;
    value?: {
      postalCode: string | number
    };
    country?: string;
    bankName?: string;
    error?: stripe$Error;
  }

  declare interface elements$ElementOptions {
    fonts?: elements$Font[];
    locale?: string;
  }

  declare type elements$elementsType =
    | "card"
    | "cardNumber"
    | "cardExpiry"
    | "cardCvc"
    | "postalCode"
    | "paymentRequestButton"
    | "iban";

  declare interface elements$Elements {
    create(
      type: elements$elementsType,
      options?: elements$ElementsOptions
    ): elements$Element;
  }

  declare interface elements$ElementsOptions {
    classes?: {
      base?: string,
      complete?: string,
      empty?: string,
      focus?: string,
      invalid?: string,
      webkitAutofill?: string
    };
    hidePostalCode?: boolean;
    hideIcon?: boolean;
    iconStyle?: "solid" | "default";
    placeholder?: string;
    placeholderCountry?: string;
    style?: {
      base?: elements$Style,
      complete?: elements$Style,
      empty?: elements$Style,
      invalid?: elements$Style,
      paymentRequestButton?: elements$PaymentRequestButtonStyleOptions
    };
    value?:
      | string
      | {
          [objectKey: string]: string
        };
    paymentRequest?: paymentRequest$paymentRequest$StripePaymentRequest;
    supportedCountries?: string[];
    disabled?: boolean;
  }

  declare type elements$Style = {
    ":hover"?: elements$StyleOptions,
    ":focus"?: elements$StyleOptions,
    "::placeholder"?: elements$StyleOptions,
    "::selection"?: elements$StyleOptions,
    ":-webkit-autofill"?: elements$StyleOptions,
    "::-ms-clear"?: elements$StyleOptions
  } & elements$StyleOptions;

  declare interface elements$Font {
    family?: string;
    src?: string;
    display?: string;
    style?: string;
    unicodeRange?: string;
    weight?: string;
    cssSrc?: string;
  }

  declare interface elements$StyleOptions {
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontSmoothing?: string;
    fontStyle?: string;
    fontVariant?: string;
    iconColor?: string;
    lineHeight?: string;
    letterSpacing?: string;
    textAlign?: string;
    textDecoration?: string;
    textShadow?: string;
    textTransform?: string;
  }

  declare interface elements$PaymentRequestButtonStyleOptions {
    type?: "default" | "donate" | "buy";
    theme: "dark" | "light" | "light-outline";
    height: string;
  }
}
