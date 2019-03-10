declare module "applepayjs" {
  /**
   * ApplePaySession is the entry point for Apple Pay on the web.
   */
  declare class ApplePaySession mixins EventTarget {
    /**
     * The entry point for Apple Pay on the web.
     * @param version - The version number of the ApplePay JS API you are using. The current API version number is 3.
     * @param paymentRequest - An ApplePayPaymentRequest object that contains the information to be displayed on the Apple Pay payment sheet.
     */
    constructor(
      version: number,
      paymentRequest: ApplePayJS$ApplePayPaymentRequest
    ): this;

    /**
     * A callback function that is automatically called when the payment UI is dismissed.
     */
    oncancel: (event: ApplePayJS$Event) => void;

    /**
     * A callback function that is automatically called when the user has authorized the Apple Pay payment with Touch ID, Face ID, or passcode.
     */
    onpaymentauthorized: (
      event: ApplePayJS$ApplePayPaymentAuthorizedEvent
    ) => void;

    /**
     * A callback function that is automatically called when a new payment method is selected.
     */
    onpaymentmethodselected: (
      event: ApplePayJS$ApplePayPaymentMethodSelectedEvent
    ) => void;

    /**
     * A callback function that is called when a shipping contact is selected in the payment sheet.
     */
    onshippingcontactselected: (
      event: ApplePayJS$ApplePayShippingContactSelectedEvent
    ) => void;

    /**
     * A callback function that is automatically called when a shipping method is selected.
     */
    onshippingmethodselected: (
      event: ApplePayJS$ApplePayShippingMethodSelectedEvent
    ) => void;

    /**
     * A callback function that is automatically called when the payment sheet is displayed.
     */
    onvalidatemerchant: (
      event: ApplePayJS$ApplePayValidateMerchantEvent
    ) => void;

    /**
     * Indicates whether the device supports Apple Pay.
     * @returns true if the device supports making payments with Apple Pay; otherwise, false.
     */
    static canMakePayments(): boolean;

    /**
     * Indicates whether the device supports Apple Pay and whether the user has an active card in Wallet.
     * @param merchantIdentifier - The merchant ID created when the merchant enrolled in Apple Pay.
     * @returns true if the device supports Apple Pay and there is at least one active card in Wallet that is qualified for payments on the web; otherwise, false.
     */
    static canMakePaymentsWithActiveCard(
      merchantIdentifier: string
    ): Promise<boolean>;

    /**
     * Displays the Set up Apple Pay button.
     * @param merchantIdentifier - The merchant ID created when the merchant enrolled in Apple Pay.
     * @returns A boolean value indicating whether setup was successful.
     */
    static openPaymentSetup(merchantIdentifier: string): Promise<boolean>;

    /**
     * Verifies whether a web browser supports a given Apple Pay JS API version.
     * @param version - A number representing the Apple Pay JS API version being checked. The initial version is 1. The latest version is 3.
     * @returns A boolean value indicating whether the web browser supports the given API version. Returns false if the web browser does not support the specified version.
     */
    static supportsVersion(version: number): boolean;

    /**
     * Aborts the current Apple Pay session.
     */
    abort(): void;

    /**
     * Begins the merchant validation process.
     */
    begin(): void;

    /**
     * Completes the validation for a merchant session.
     * @param merchantSession - An opaque message session object.
     */
    completeMerchantValidation(merchantSession: any): void;

    /**
     * Completes the payment authorization with a result.
     * @param result - The status of the payment, whether it succeeded or failed for Apple Pay JS versions 1 and 2,
     * or the result of the payment authorization, including its status and list of errors for Apple Pay JS version 3.
     */
    completePayment(
      result: number | ApplePayJS$ApplePayPaymentAuthorizationResult
    ): void;

    /**
     * Call after a payment method has been selected for Apple Pay JS versions 1 and 2.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completePaymentMethodSelection(
      newTotal: ApplePayJS$ApplePayLineItem,
      newLineItems: ApplePayJS$ApplePayLineItem[]
    ): void;

    /**
     * Completes the selection of a payment method with an update for Apple Pay JS version 3.
     * @param update - The updated payment method.
     */
    completePaymentMethodSelection(
      update: ApplePayJS$ApplePayPaymentMethodUpdate
    ): void;

    /**
     * Completes the selection of a shipping contact with an update for Apple Pay JS versions 1 and 2.
     * @param status - The status of the shipping contact update.
     * @param newShippingMethods - A sequence of ApplePayShippingMethod dictionaries.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completeShippingContactSelection(
      status: number,
      newShippingMethods: ApplePayJS$ApplePayShippingMethod[],
      newTotal: ApplePayJS$ApplePayLineItem,
      newLineItems: ApplePayJS$ApplePayLineItem[]
    ): void;

    /**
     * Completes the selection of a shipping contact with an update for Apple Pay JS version 3.
     * @param update - The updated shipping contact.
     */
    completeShippingContactSelection(
      update: ApplePayJS$ApplePayShippingContactUpdate
    ): void;

    /**
     * Call after the shipping method has been selected for Apple Pay JS versions 1 and 2.
     * @param status - The status of the shipping method update.
     * @param newTotal - An ApplePayLineItem dictionary representing the total price for the purchase.
     * @param newLineItems - A sequence of ApplePayLineItem dictionaries.
     */
    completeShippingMethodSelection(
      status: number,
      newTotal: ApplePayJS$ApplePayLineItem,
      newLineItems: ApplePayJS$ApplePayLineItem[]
    ): void;

    /**
     * Completes the selection of a shipping method with an update for Apple Pay JS version 3.
     * @param update - The updated shipping method.
     */
    completeShippingMethodSelection(
      update: ApplePayJS$ApplePayShippingMethodUpdate
    ): void;

    /**
     * The requested action succeeded.
     */
    static STATUS_SUCCESS: number;

    /**
     * The requested action failed.
     */
    static STATUS_FAILURE: number;

    /**
     * The billing address is not valid.
     */
    static STATUS_INVALID_BILLING_POSTAL_ADDRESS: number;

    /**
     * The shipping address is not valid.
     */
    static STATUS_INVALID_SHIPPING_POSTAL_ADDRESS: number;

    /**
     * The shipping contact information is not valid.
     */
    static STATUS_INVALID_SHIPPING_CONTACT: number;

    /**
     * The PIN information is not valid. Cards on the China Union Pay network may require a PIN.
     */
    static STATUS_PIN_INCORRECT: number;

    /**
     * The maximum number of tries for a PIN has been reached and the user has been locked out. Cards on the China Union Pay network may require a PIN.
     */
    static STATUS_PIN_LOCKOUT: number;

    /**
     * The required PIN information was not provided. Cards on the China Union Pay payment network may require a PIN to authenticate the transaction.
     */
    static STATUS_PIN_REQUIRED: number;
  }
  declare var ApplePayJS: typeof npm$namespace$ApplePayJS;

  declare var npm$namespace$ApplePayJS: {
    ApplePayPaymentAuthorizedEvent: typeof ApplePayJS$ApplePayPaymentAuthorizedEvent,
    ApplePayPaymentMethodSelectedEvent: typeof ApplePayJS$ApplePayPaymentMethodSelectedEvent,
    ApplePayShippingContactSelectedEvent: typeof ApplePayJS$ApplePayShippingContactSelectedEvent,
    ApplePayShippingContactUpdate: typeof ApplePayJS$ApplePayShippingContactUpdate,
    ApplePayShippingMethodSelectedEvent: typeof ApplePayJS$ApplePayShippingMethodSelectedEvent,
    ApplePayValidateMerchantEvent: typeof ApplePayJS$ApplePayValidateMerchantEvent,
    Event: typeof ApplePayJS$Event
  };

  /**
   * Field names used for requesting contact information in a payment request.
   */
  declare type ApplePayJS$ApplePayContactField =
    | "email"
    | "name"
    | "phone"
    | "postalAddress"
    | "phoneticName";

  /**
   * A customizable error type that you create to indicate problems with the address or contact information on an Apple Pay sheet.
   */
  declare interface ApplePayJS$ApplePayError {
    /**
     * The error code for this instance.
     */
    code: ApplePayJS$ApplePayErrorCode;

    /**
     * The name of the field that contains the error.
     */
    contactField?: ApplePayJS$ApplePayErrorContactField;

    /**
     * A localized, user-facing string that describes the error.
     */
    message: string;
  }

  /**
   * The error code that indicates whether an error on the payment sheet is for shipping or billing information, or for another kind of error.
   */
  declare type ApplePayJS$ApplePayErrorCode =
    | "shippingContactInvalid"
    | "billingContactInvalid"
    | "addressUnserviceable"
    | "unknown";

  /**
   * Names of the fields in the shipping or billing contact information, used to locate errors in the payment sheet.
   */
  declare type ApplePayJS$ApplePayErrorContactField =
    | "phoneNumber"
    | "emailAddress"
    | "name"
    | "phoneticName"
    | "postalAddress"
    | "addressLines"
    | "locality"
    | "subLocality"
    | "postalCode"
    | "administrativeArea"
    | "subAdministrativeArea"
    | "country"
    | "countryCode";

  /**
   * Defines a line item in a payment request - for example, total, tax, discount, or grand total.
   */
  declare interface ApplePayJS$ApplePayLineItem {
    /**
     * A short, localized description of the line item.
     */
    label: string;

    /**
     * The line item's amount.
     */
    amount: string;

    /**
     * A value that indicates if the line item is final or pending.
     */
    type?: ApplePayJS$ApplePayLineItemType;
  }

  /**
   * A type that indicates whether a line item is final or pending.
   */
  declare type ApplePayJS$ApplePayLineItemType = "final" | "pending";

  /**
   * The payment capabilities supported by the merchant.
   */
  declare type ApplePayJS$ApplePayMerchantCapability =
    | "supports3DS"
    | "supportsEMV"
    | "supportsCredit"
    | "supportsDebit";

  /**
   * Represents the result of authorizing a payment request and contains encrypted payment information.
   */
  declare interface ApplePayJS$ApplePayPayment {
    /**
     * The encrypted information for an authorized payment.
     */
    token: ApplePayJS$ApplePayPaymentToken;

    /**
     * The billing contact selected by the user for this transaction.
     */
    billingContact?: ApplePayJS$ApplePayPaymentContact;

    /**
     * The shipping contact selected by the user for this transaction.
     */
    shippingContact?: ApplePayJS$ApplePayPaymentContact;
  }

  /**
   * The ApplePayPaymentAuthorizedEvent class defines the attributes contained by the ApplePaySession.onpaymentauthorized callback function.
   */
  declare class ApplePayJS$ApplePayPaymentAuthorizedEvent
    mixins ApplePayJS$Event {
    /**
     * The authorized payment information for this transaction.
     */
    payment: ApplePayJS$ApplePayPayment;
  }

  /**
   * The result of payment authorization, including status and errors.
   */
  declare interface ApplePayJS$ApplePayPaymentAuthorizationResult {
    /**
     * The status code for the authorization result.
     */
    status: number;

    /**
     * A list of custom errors to display on the payment sheet.
     */
    errors?: ApplePayJS$ApplePayError[];
  }

  /**
   * Encapsulates contact information needed for billing and shipping.
   */
  declare interface ApplePayJS$ApplePayPaymentContact {
    /**
     * An email address for the contact.
     */
    emailAddress?: string;

    /**
     * The contact's family name.
     */
    familyName?: string;

    /**
     * The contact's given name.
     */
    givenName?: string;

    /**
     * A phone number for the contact.
     */
    phoneNumber?: string;

    /**
     * The phonetic spelling of the contact's family name.
     */
    phoneticFamilyName?: string;

    /**
     * The phonetic spelling of the contact's given name.
     */
    phoneticGivenName?: string;

    /**
     * The street portion of the address for the contact.
     */
    addressLines?: string[];

    /**
     * The city for the contact.
     */
    locality?: string;

    /**
     * Additional information associated with the location, typically defined at the city or town level (such as district or neighborhood), in a postal address.
     */
    subLocality?: string;

    /**
     * The state for the contact.
     */
    administrativeArea?: string;

    /**
     * The subadministrative area (such as a county or other region) in a postal address.
     */
    subAdministrativeArea?: string;

    /**
     * The zip code or postal code, where applicable, for the contact.
     */
    postalCode?: string;

    /**
     * The name of the country for the contact.
     */
    country?: string;

    /**
     * The contact’s two-letter ISO 3166 country code.
     */
    countryCode?: string;
  }

  /**
   * A dictionary that describes an Apple Pay payment card.
   */
  declare interface ApplePayJS$ApplePayPaymentMethod {
    /**
     * A string, suitable for display, that describes the card.
     */
    displayName: string;

    /**
     * A string, suitable for display, that is the name of the payment network backing the card.
     */
    network: string;

    /**
     * A value representing the card's type of payment.
     */
    type: ApplePayJS$ApplePayPaymentMethodType;

    /**
     * The payment pass object currently selected to complete the payment.
     */
    paymentPass: ApplePayJS$ApplePayPaymentPass;
  }

  /**
   * A payment card's type of payment.
   */
  declare type ApplePayJS$ApplePayPaymentMethodType =
    | "debit"
    | "credit"
    | "prepaid"
    | "store";

  /**
   * The ApplePayPaymentMethodSelectedEvent class defines the attributes contained by the ApplePaySession.onpaymentmethodselected callback function.
   */
  declare class ApplePayJS$ApplePayPaymentMethodSelectedEvent
    mixins ApplePayJS$Event {
    /**
     * The card used to complete a payment.
     */
    paymentMethod: ApplePayJS$ApplePayPaymentMethod;
  }

  /**
   * Updated transaction details resulting from a change in payment method.
   */
  declare interface ApplePayJS$ApplePayPaymentMethodUpdate {
    /**
     * An optional list of line items.
     */
    newLineItems?: ApplePayJS$ApplePayLineItem[];

    /**
     * The new total resulting from a change in the payment method.
     */
    newTotal: ApplePayJS$ApplePayLineItem;
  }

  /**
   * Represents a provisioned payment card for Apple Pay payments.
   */
  declare interface ApplePayJS$ApplePayPaymentPass {
    /**
     * The unique identifier for the primary account number for the payment card.
     */
    primaryAccountIdentifier: string;

    /**
     * A version of the primary account number suitable for display in your UI.
     */
    primaryAccountNumberSuffix: string;

    /**
     * The unique identifier for the device-specific account number.
     */
    deviceAccountIdentifier?: string;

    /**
     * A version of the device account number suitable for display in your UI.
     */
    deviceAccountNumberSuffix?: string;

    /**
     * The activation state of the pass.
     */
    activationState: ApplePayJS$ApplePayPaymentPassActivationState;
  }

  /**
   * Payment pass activation states.
   */
  declare type ApplePayJS$ApplePayPaymentPassActivationState =
    | "activated"
    | "requiresActivation"
    | "activating"
    | "suspended"
    | "deactivated";

  /**
   * Encapsulates a request for payment, including information about payment processing capabilities, the payment amount, and shipping information.
   */
  declare interface ApplePayJS$ApplePayPaymentRequest {
    /**
     * The merchant's two-letter ISO 3166 country code.
     */
    countryCode: string;

    /**
     * The three-letter ISO 4217 currency code for the payment.
     */
    currencyCode: string;

    /**
     * A set of line items that explain recurring payments and/or additional charges.
     */
    lineItems?: ApplePayJS$ApplePayLineItem[];

    /**
     * The payment capabilities supported by the merchant.
     * The value must at least contain ApplePayMerchantCapability.supports3DS.
     */
    merchantCapabilities: ApplePayJS$ApplePayMerchantCapability[];

    /**
     * The payment networks supported by the merchant.
     */
    supportedNetworks: string[];

    /**
     * A line item representing the total for the payment.
     */
    total: ApplePayJS$ApplePayLineItem;

    /**
     * Billing contact information for the user.
     */
    billingContact?: ApplePayJS$ApplePayPaymentContact;

    /**
     * The billing information that you require from the user in order to process the transaction.
     */
    requiredBillingContactFields?: ApplePayJS$ApplePayContactField[];

    /**
     * The shipping information that you require from the user in order to fulfill the order.
     */
    requiredShippingContactFields?: ApplePayJS$ApplePayContactField[];

    /**
     * Shipping contact information for the user.
     */
    shippingContact?: ApplePayJS$ApplePayPaymentContact;

    /**
     * A set of shipping method objects that describe the available shipping methods.
     */
    shippingMethods?: ApplePayJS$ApplePayShippingMethod[];

    /**
     * How the items are to be shipped.
     */
    shippingType?: ApplePayJS$ApplePayShippingType;

    /**
     * A list of ISO 3166 country codes for limiting payments to cards from specific countries.
     */
    supportedCountries?: string[];

    /**
     * Optional user-defined data.
     */
    applicationData?: string;
  }

  /**
   * An object that contains the user's payment credentials.
   */
  declare interface ApplePayJS$ApplePayPaymentToken {
    /**
     * An object containing the encrypted payment data.
     */
    paymentData: any;

    /**
     * Information about the card used in the transaction.
     */
    paymentMethod: ApplePayJS$ApplePayPaymentMethod;

    /**
     * A unique identifier for this payment.
     */
    transactionIdentifier: string;
  }

  /**
   * Encapsulates the attributes contained by the onshippingcontactselected callback function.
   */
  declare class ApplePayJS$ApplePayShippingContactSelectedEvent
    mixins ApplePayJS$Event {
    /**
     * The shipping address selected by the user.
     */
    shippingContact: ApplePayJS$ApplePayPaymentContact;
  }

  /**
   * Updated transaction details resulting from a change in shipping contact, including any errors.
   */
  declare class ApplePayJS$ApplePayShippingContactUpdate {
    /**
     * List of custom errors to display on the payment sheet.
     */
    errors: ApplePayJS$ApplePayError[];

    /**
     * An optional list of updated line items.
     */
    newLineItems: ApplePayJS$ApplePayLineItem[];

    /**
     * A list of shipping methods that are available to the updated shipping contact.
     */
    newShippingMethods: ApplePayJS$ApplePayShippingMethod[];

    /**
     * The new total resulting from a change in the shipping contact.
     */
    newTotal: ApplePayJS$ApplePayLineItem;
  }

  /**
   * Defines a shipping method for delivering physical goods.
   */
  declare interface ApplePayJS$ApplePayShippingMethod {
    /**
     * A short description of the shipping method.
     */
    label: string;

    /**
     * A further description of the shipping method.
     */
    detail?: string;

    /**
     * The amount associated with this shipping method.
     */
    amount: string;

    /**
     * A client-defined identifier.
     */
    identifier?: string;
  }

  /**
   * The ApplePayShippingMethodSelectedEvent class defines the attribute contained by the ApplePaySession.onshippingmethodselected callback function.
   */
  declare class ApplePayJS$ApplePayShippingMethodSelectedEvent
    mixins ApplePayJS$Event {
    /**
     * The shipping method selected by the user.
     */
    shippingMethod: ApplePayJS$ApplePayShippingMethod;
  }

  /**
   * Updated transaction details resulting from a change in shipping method.
   */
  declare interface ApplePayJS$ApplePayShippingMethodUpdate {
    /**
     * An optional list of updated line items.
     */
    newLineItems?: ApplePayJS$ApplePayLineItem[];

    /**
     * The new total resulting from a change in the shipping method.
     */
    newTotal: ApplePayJS$ApplePayLineItem;
  }

  /**
   * A type that indicates how purchased items are to be shipped.
   */
  declare type ApplePayJS$ApplePayShippingType =
    | "shipping"
    | "delivery"
    | "storePickup"
    | "servicePickup";

  /**
   * The attributes contained by the onvalidatemerchant callback function.
   */
  declare class ApplePayJS$ApplePayValidateMerchantEvent
    mixins ApplePayJS$Event {
    /**
     * The URL your server must use to validate itself and obtain a merchant session object.
     */
    validationURL: string;
  }

  declare class ApplePayJS$Event {
    bubbles: boolean;
    cancelBubble: boolean;
    cancelable: boolean;
    composed: boolean;
    currentTarget: EventTarget;
    defaultPrevented: boolean;
    eventPhase: number;
    isTrusted: boolean;
    returnValue: boolean;
    srcElement: EventTarget;
    target: EventTarget;
    timeStamp: string;
    type: string;
    composedPath(): Node[];
    initEvent(type?: string, bubbles?: boolean, cancelable?: boolean): void;
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
    static AT_TARGET: number;
    static BLUR: number;
    static BUBBLING_PHASE: number;
    static CAPTURING_PHASE: number;
    static CHANGE: number;
    static CLICK: number;
    static DBLCLICK: number;
    static DRAGDROP: number;
    static FOCUS: number;
    static KEYDOWN: number;
    static KEYPRESS: number;
    static KEYUP: number;
    static MOUSEDOWN: number;
    static MOUSEDRAG: number;
    static MOUSEMOVE: number;
    static MOUSEOUT: number;
    static MOUSEOVER: number;
    static MOUSEUP: number;
    static NONE: number;
    static SELECT: number;
  }
}
