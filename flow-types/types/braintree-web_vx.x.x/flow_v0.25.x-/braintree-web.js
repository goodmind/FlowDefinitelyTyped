declare module "braintree-web" {
  declare var npm$namespace$braintree: {
    client: typeof braintree$client,
    paypal: typeof braintree$paypal,
    hostedFields: typeof braintree$hostedFields,
    threeDSecure: typeof braintree$threeDSecure,
    dataCollector: typeof braintree$dataCollector,
    americanExpress: typeof braintree$americanExpress,
    unionpay: typeof braintree$unionpay,
    applePay: typeof braintree$applePay,
    usBankAccount: typeof braintree$usBankAccount,
    VERSION: typeof braintree$VERSION,
    ApplePayStatusCodes: typeof braintree$ApplePayStatusCodes,
    ApplePaySession: typeof braintree$ApplePaySession
  };
  declare export interface braintree$AmericanExpress {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link AmericanExpress} instance.
     * @returns {void}
     */
    create: (
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Gets the rewards balance associated with a Braintree nonce.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Request options
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the returned server data.
     * @returns {void}
     * @example var americanExpress = require('braintree-web/american-express');
     *
     * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
     * var options = {nonce: existingBraintreeNonce};
     * americanExpressInstance.getRewardsBalance(options, function (getErr, payload) {
     * if (getErr || payload.error) {
     * // Handle error
     * return;
     * }
     *
     * console.log('Rewards amount: ' + payload.rewardsAmount);
     * });
     * });
     */
    getRewardsBalance(
      options: {
        nonce: string
      },
      callback: braintree$callback
    ): void;

    /**
     * Gets the Express Checkout nonce profile given a nonce from American Express.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Request options
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the returned server data.
     * @returns {void}
     * @example var americanExpress = require('braintree-web/american-express');
     *
     * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
     * var options = {nonce: existingAmericanExpressNonce};
     * americanExpressInstance.getExpressCheckoutProfile(options, function (getErr, payload) {
     * if (getErr) {
     * // Handle error
     * return;
     * }
     *
     * console.log('Number of cards: ' + payload.amexExpressCheckoutCards.length);
     * });
     * });
     */
    getExpressCheckoutProfile(
      options: {
        nonce: string
      },
      callback: braintree$callback
    ): void;
  }

  declare interface braintree$ApplePayPaymentRequest {
    total: {
      label: string,
      amount: string
    };
    countryCode: string;
    currencyCode: string;
    supportedNetworks: string[];
    merchantCapabilities: string[];
    billingContact?: any;
    shippingContact?: any;
    shippingMethods?: any;
    shippingType?: any;
    requiredBillingContactFields?: any;
    requiredShippingContactFields?: any;
  }

  declare export var braintree$ApplePayStatusCodes: {|
    +STATUS_SUCCESS: 1, // 1
    +STATUS_FAILURE: 1, // 1
    +STATUS_INVALID_BILLING_POSTAL_ADDRESS: 2, // 2
    +STATUS_INVALID_SHIPPING_POSTAL_ADDRESS: 3, // 3
    +STATUS_INVALID_SHIPPING_CONTACT: 4, // 4
    +STATUS_PIN_REQUIRED: 5, // 5
    +STATUS_PIN_INCORRECT: 6, // 6
    +STATUS_PIN_LOCKOUT: 7 // 7
  |};

  declare interface braintree$ApplePayPayload {
    merchantIdentifier: string;
    domainName: string;
    displayName: string;
  }

  declare export class braintree$ApplePaySession {
    constructor(
      version: number,
      request: braintree$ApplePayPaymentRequest
    ): this;
    canMakePayments(): boolean;
    canMakePaymentsWithActiveCard(merchantIdentifier: string): boolean;
    completeMerchantValidation(merchantSession: any): void;
    abort(): void;
    begin(): void;
    completePayment(
      status: $Values<typeof braintree$ApplePayStatusCodes>
    ): void;
    completePaymentMethodSelection(newTotal: any, newLineItems: any): void;
    completeShippingContactSelection(
      status: $Values<typeof braintree$ApplePayStatusCodes>,
      newShippingMethods: any,
      newTotal: any,
      newLineItems: any
    ): void;
    completeShippingMethodSelection(
      status: $Values<typeof braintree$ApplePayStatusCodes>,
      newTotal: any,
      newLineItems: any
    ): void;
    supportsVersion(version: number): boolean;
    oncancel: (event: any) => void;
    onpaymentauthorized: (event: any) => void;
    onpaymentmethodselected: (event: any) => void;
    onshippingcontactselected: (event: any) => void;
    onshippingmethodselected: (event: any) => void;
    onvalidatemerchant: (event: any) => void;
  }

  declare export interface braintree$ApplePay {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link ApplePay} instance.
     * @returns {void}
     */
    create: (
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Merges a payment request with Braintree defaults
     * The following properties are assigned to `paymentRequest` if not already defined
     * - countryCode
     * - currencyCode
     * - merchantCapabilities
     * - supportedNetworks
     * @public
     * @param {external} :ApplePayPaymentRequest} paymentRequest The payment request details to apply on top of those from Braintree.
     * @returns {external} :ApplePayPaymentRequest} The decorated `paymentRequest`.
     * @example var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     * // ...
     * var paymentRequest = applePay.createPaymentRequest({
     * total: {
     * label: 'My Company',
     * amount: '19.99'
     * });
     *
     * console.log(paymentRequest);
     * // { total: { }, countryCode: 'US', currencyCode: 'USD', merchantCapabilities: [ ], supportedNetworks: [ ] }
     */
    createPaymentRequest(
      paymentRequest: braintree$ApplePayPaymentRequest
    ): braintree$ApplePayPaymentRequest;

    /**
     * Validates the merchant website, as required by ApplePaySession before payment can be authorized.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Options
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the Apple Pay merchant session object.
     * Pass the merchant session to your Apple Pay session's completeMerchantValidation method.
     * @returns {void}
     * @example var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     * var session = new ApplePaySession(1, {
     * // This should be the payment request object that
     * // contains the information needed to display the payment sheet.
     * });
     *
     * session.onvalidatemerchant = function (event) {
     * applePay.performValidation({
     * validationURL: event.validationURL
     * }, function(err, validationData) {
     * if (err) {
     * console.error(err);
     * session.abort();
     * return;
     * }
     * session.completeMerchantValidation(validationData);
     * });
     * };
     * });
     */
    performValidation(
      options: {
        validationURL: string,
        displayName?: string,
        merchantIdentifier?: string
      },
      callback: braintree$callback
    ): void;

    /**
     * Tokenizes an Apple Pay payment.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Options
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the tokenized payload.
     * @returns {void}
     * @example var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     * var session = new ApplePaySession(1, { });
     *
     * session.onpaymentauthorized = function (event) {
     * applePay.tokenize({
     * token: event.payment.token
     * }, function (err, tokenizedPayload) {
     * if (err) {
     * session.completePayment(ApplePaySession.STATUS_FAILURE);
     * return;
     * }
     * session.completePayment(ApplePaySession.STATUS_SUCCESS);
     *
     * // Send the tokenizedPayload to your server.
     * });
     * };
     * });
     */
    tokenize(
      options: {
        token: any
      },
      callback: braintree$callback
    ): void;
  }

  /**
   * This object is returned by {@link Client#getConfiguration|getConfiguration}. This information is used extensively by other Braintree modules to properly configure themselves.
   * @property {object} client The braintree-web/client parameters.
   * @property {string} client.authorization A tokenizationKey or clientToken.
   * @property {object} gatewayConfiguration Gateway-supplied configuration.
   * @property {object} analyticsMetadata Analytics-specific data.
   * @property {string} analyticsMetadata.sessionId Uniquely identifies a browsing session.
   * @property {string} analyticsMetadata.sdkVersion The braintree.js version.
   * @property {string} analyticsMetadata.merchantAppId Identifies the merchant's web app.
   */
  declare interface braintree$ClientAnalyticsMetadata {
    sessionId: string;
    sdkVersion: string;
    merchantAppId: string;
  }

  declare interface braintree$Configuration {
    client: braintree$Client;
    gatewayConfiguration: any;
    analyticsMetadata: braintree$ClientAnalyticsMetadata;
  }

  declare interface braintree$CreditCardInfo {
    number: string;
    cvv: string;
    expirationDate: string;
    billingAddress: {
      postalCode?: string
    };
  }

  declare export interface braintree$Client {
    authorization: string;

    /**
     * @function
     * @description This function is the entry point for the <code>braintree.client</code> module. It is used for creating {@link Client} instances that service communication to Braintree servers.
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Object containing all {@link Client} options:
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the {@link Client} instance.
     * @returns {void}
     * @example var createClient = require('braintree-web/client').create;
     *
     * createClient({
     * authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     * ...
     * });
     * @static
     */
    create(options: {
      authorization: string
    }): Promise<braintree$Client>;
    create(
      options: {
        authorization: string
      },
      callback: braintree$callback
    ): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Returns a copy of the configuration values.
     * @public
     * @returns {braintree$Client} ~configuration} configuration
     */
    getConfiguration(): braintree$Configuration;

    /**
     * Used by other modules to formulate all network requests to the Braintree gateway. It is also capable of being used directly from your own form to tokenize credit card information. However, be sure to satisfy PCI compliance if you use direct card tokenization.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Request options:
     * @param {braintree$callback} callback The second argument, <code>data</code>, is the returned server data.
     * @example <caption>Direct Credit Card Tokenization</caption>
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     * authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     * var form = document.getElementById('my-form-id');
     * var data = {
     * creditCard: {
     * number: form['cc-number'].value,
     * cvv: form['cc-cvv'].value,
     * expirationDate: form['cc-date'].value,
     * billingAddress: {
     * postalCode: form['cc-postal'].value
     * },
     * options: {
     * validate: false
     * }
     * }
     * };
     *
     * // Warning: For a merchant to be eligible for the easiest level of PCI compliance (SAQ A),
     * // payment fields cannot be hosted on your checkout page.
     * // For an alternative to the following, use Hosted Fields.
     * clientInstance.request({
     * endpoint: 'payment_methods/credit_cards',
     * method: 'post',
     * data: data
     * }, function (requestErr, response) {
     * // More detailed example of handling API errors: https://codepen.io/braintree/pen/MbwjdM
     * if (requestErr) { throw new Error(requestErr); }
     *
     * console.log('Got nonce:', response.creditCards[0].nonce);
     * });
     * });
     * @returns {void}
     */
    request(
      options: {
        method: string,
        endpoint: string,
        data: any,
        timeout?: number
      },
      callback: braintree$callback
    ): void;
  }

  declare export interface braintree$DataCollector {
    /**
     * @static
     * @function create
     * @description Creates a DataCollector instance. Requires advanced fraud protection to be enabled in the Braintree gateway. Contact our [support team](mailto:support
     * @braintreepayments .com) to configure your Kount ID.
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link DataCollector} instance.
     * @returns {void}
     */
    create(options: {
      client: braintree$Client,
      kount: boolean,
      paypal: boolean
    }): Promise<braintree$DataCollector>;
    create(
      options: {
        client: braintree$Client,
        kount: boolean,
        paypal: boolean
      },
      callback: braintree$callback
    ): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @memberof DataCollector
     * @name deviceData
     * @type {string}
     * @description JSON string to pass with server transactions.
     * @instance
     */
    deviceData: string;

    /**
     * @memberof DataCollector
     * @name teardown
     * @function
     * @description Cleanly remove all event handlers and DOM nodes that were added.
     * @param {braintree$callback} callback Called once teardown is complete. No data is returned if teardown completes successfully.
     * @instance
     * @returns {void}
     */
    teardown(callback?: braintree$callback): void;
  }

  /**
   * Fields used in {@link module:braintree-web/hosted-fields~fieldOptions fields options}
   * @typedef field
   */
  declare interface braintree$HostedFieldsField {
    selector: string;
    placeholder?: string;
    type?: string;
    formatInput?: boolean;
    select?:
      | boolean
      | {
          options: string[]
        };
  }

  /**
   * An object that has {@link module:braintree-web/hosted-fields~field field objects} for each field. Used in {@link module:braintree-web/hosted-fields~create create}.
   * @typedef fieldOptions
   */
  declare interface braintree$HostedFieldFieldOptions {
    number: braintree$HostedFieldsField;
    expirationDate?: braintree$HostedFieldsField;
    expirationMonth?: braintree$HostedFieldsField;
    expirationYear?: braintree$HostedFieldsField;
    cvv: braintree$HostedFieldsField;
    postalCode?: braintree$HostedFieldsField;
  }

  /**
   * @description Information about the card type, sent in {@link HostedFields~stateObject|stateObjects}.
   * @property {string} type The code-friendly representation of the card type. It will be one of the following strings:
   * - `american-express`
   * - `diners-club`
   * - `discover`
   * - `jcb`
   * - `maestro`
   * - `master-card`
   * - `unionpay`
   * - `visa`
   * @property {string} niceType The pretty-printed card type. It will be one of the following strings:
   * - `American Express`
   * - `Diners Club`
   * - `Discover`
   * - `JCB`
   * - `Maestro`
   * - `MasterCard`
   * - `UnionPay`
   * - `Visa`
   * @property {object} code
   * This object contains data relevant to the security code requirements of the card brand.
   * For example, on a Visa card there will be a <code>CVV</code> of 3 digits, whereas an
   * American Express card requires a 4-digit <code>CID</code>.
   * @property {string} code.name <code>"CVV"</code> <code>"CID"</code> <code>"CVC"</code>
   * @property {number} code.size The expected length of the security code. Typically, this is 3 or 4.
   */
  declare interface braintree$HostedFieldsCardCode {
    name: string;
    size: number;
  }

  declare interface braintree$HostedFieldsHostedFieldsCard {
    type: string;
    niceType: string;
    code: braintree$HostedFieldsCardCode;
  }

  /**
   * @description Data about Hosted Fields fields, sent in {@link HostedFields~stateObject|stateObjects}.
   * @property {HTMLElement} container Reference to the container DOM element on your page associated with the current event.
   * @property {boolean} isFocused Whether or not the input is currently focused.
   * @property {boolean} isEmpty Whether or not the user has entered a value in the input.
   * @property {boolean} isPotentiallyValid
   * A determination based on the future validity of the input value.
   * This is helpful when a user is entering a card number and types <code>"41"</code>.
   * While that value is not valid for submission, it is still possible for
   * it to become a fully qualified entry. However, if the user enters <code>"4x"</code>
   * it is clear that the card number can never become valid and isPotentiallyValid will
   * return false.
   * @property {boolean} isValid Whether or not the value of the associated input is <i>fully</i> qualified for submission.
   */
  declare interface braintree$HostedFieldsHostedFieldsFieldData {
    container: HTMLElement;
    isFocused: boolean;
    isEmpty: boolean;
    isPotentiallyValid: boolean;
    isValid: boolean;
  }

  /**
   * @description The event payload sent from {@link HostedFields#on|on} or {@link HostedFields#getState|getState}.
   * @property {HostedFields~hostedFieldsCard[]} cards
   * This will return an array of potential {@link HostedFields~hostedFieldsCard|cards}. If the card type has been determined, the array will contain only one card.
   * Internally, Hosted Fields uses <a href="https://github.com/braintree/credit-card-type">credit-card-type</a>,
   * an open-source card detection library.
   * @property {string} emittedBy
   * The name of the field associated with an event. This will not be included if returned by {@link HostedFields#getState|getState}. It will be one of the following strings:<br>
   * - `"number"`
   * - `"cvv"`
   * - `"expirationDate"`
   * - `"expirationMonth"`
   * - `"expirationYear"`
   * - `"postalCode"`
   * @property {object} fields
   * @property {?HostedFields~hostedFieldsFieldData} fields.number {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the number field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.cvv {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the CVV field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationDate {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration date field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationMonth {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration month field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationYear {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration year field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.postalCode {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the postal code field, if it is present.
   */
  declare type braintree$HostedFieldsHostedFieldsFieldName =
    | "number"
    | "cvv"
    | "expirationDate"
    | "expirationMonth"
    | "expirationYear"
    | "postalCode";

  declare type braintree$HostedFieldsFieldDataFields = $ObjMapi<
    { [k: braintree$HostedFieldsHostedFieldsFieldName]: any },
    <key>(key) => braintree$HostedFieldsHostedFieldsFieldData
  >;

  declare interface braintree$HostedFieldsStateObject {
    cards: braintree$HostedFieldsHostedFieldsCard[];
    emittedBy: braintree$HostedFieldsHostedFieldsFieldName;
    fields: braintree$HostedFieldsFieldDataFields;
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} details.lastFour Last four digits of card number.
   * @property {string} description A human-readable description.
   * @property {string} type The payment method type, always `CreditCard`.
   */
  declare interface braintree$HostedFieldsAccountDetails {
    cardType: string;
    lastTwo: string;
    lastFour: string;
  }

  declare interface braintree$HostedFieldsTokenizePayload {
    nonce: string;
    details: braintree$HostedFieldsAccountDetails;
    type: string;
    description: string;
  }

  declare export interface braintree$HostedFields {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link HostedFields} instance.
     * @returns {void}
     * @example braintree.hostedFields.create({
     * client: clientInstance,
     * styles: {
     * 'input': {
     * 'font-size': '16pt',
     * 'color': '#3A3A3A'
     * },
     * '.number': {
     * 'font-family': 'monospace'
     * },
     * '.valid': {
     * 'color': 'green'
     * }
     * },
     * fields: {
     * number: {
     * selector: '#card-number'
     * },
     * cvv: {
     * selector: '#cvv'
     * },
     * expirationDate: {
     * selector: '#expiration-date'
     * }
     * }
     * }, callback);
     */
    create(options: {
      client: braintree$Client,
      fields: braintree$HostedFieldFieldOptions,
      styles: any
    }): Promise<braintree$HostedFields>;
    create(
      options: {
        client: braintree$Client,
        fields: braintree$HostedFieldFieldOptions,
        styles: any
      },
      callback: braintree$callback
    ): void;

    /**
     * An object that represents CSS that will be applied in each hosted field. This object looks similar to CSS. Typically, these styles involve fonts (such as `font-family` or `color`).
     *
     * These are the CSS properties that Hosted Fields supports. Any other CSS should be specified on your page and outside of any Braintree configuration. Trying to set unsupported properties will fail and put a warning in the console.
     *
     * Supported CSS properties are:
     * `color`
     * `font-family`
     * `font-size-adjust`
     * `font-size`
     * `font-stretch`
     * `font-style`
     * `font-variant-alternates`
     * `font-variant-caps`
     * `font-variant-east-asian`
     * `font-variant-ligatures`
     * `font-variant-numeric`
     * `font-variant`
     * `font-weight`
     * `font`
     * `letter-spacing`
     * `line-height`
     * `opacity`
     * `outline`
     * `text-shadow`
     * `transition`
     * `-moz-osx-font-smoothing`
     * `-moz-tap-highlight-color`
     * `-moz-transition`
     * `-webkit-font-smoothing`
     * `-webkit-tap-highlight-color`
     * `-webkit-transition`
     * @typedef {{[key: string]: any}} styleOptions
     */
    styleOptions: any;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @name HostedFields#on
     * @function
     * @param {string} event The name of the event to which you are subscribing.
     * @param {function} handler A callback to handle the event.
     * @description Subscribes a handler function to a named event. `event` should be {@link HostedFields#event:blur|blur}, {@link HostedFields#event:focus|focus}, {@link HostedFields#event:empty|empty}, {@link HostedFields#event:notEmpty|notEmpty}, {@link HostedFields#event:cardTypeChange|cardTypeChange}, or {@link HostedFields#event:validityChange|validityChange}. Events will emit a {@link HostedFields~stateObject|stateObject}.
     * @example <caption>Listening to a Hosted Field event, in this case 'focus'</caption>
     * hostedFields.create({ ... }, function (createErr, hostedFieldsInstance) {
     * hostedFieldsInstance.on('focus', function (event) {
     * console.log(event.emittedBy, 'has been focused');
     * });
     * });
     * @returns {void}
     */
    on(
      event: string,
      handler: (event: braintree$HostedFieldsStateObject) => void
    ): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/hosted-fields.create|create}
     * @public
     * @param {braintree$callback} callback Callback executed on completion, containing an error if one occurred. No data is returned if teardown completes successfully.
     * @example hostedFieldsInstance.teardown(function (teardownErr) {
     * if (teardownErr) {
     * console.error('Could not tear down Hosted Fields!');
     * } else {
     * console.info('Hosted Fields has been torn down!');
     * }
     * });
     * @returns {void}
     */
    teardown(callback?: braintree$callback): void;

    /**
     * Tokenizes fields and returns a nonce payload.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options All tokenization options for the Hosted Fields component.
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link HostedFields~tokenizePayload|tokenizePayload}
     * @example <caption>Tokenize a card</caption>
     * hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
     * if (tokenizeErr) {
     * switch (tokenizeErr.code) {
     * case 'HOSTED_FIELDS_FIELDS_EMPTY':
     * console.error('All fields are empty! Please fill out the form.');
     * break;
     * case 'HOSTED_FIELDS_FIELDS_INVALID':
     * console.error('Some fields are invalid:', tokenizeErr.details.invalidFieldKeys);
     * break;
     * case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
     * console.error('Tokenization failed server side. Is the card valid?');
     * break;
     * case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
     * console.error('Network error occurred when tokenizing.');
     * break;
     * default:
     * console.error('Something bad happened!', tokenizeErr);
     * }
     * } else {
     * console.log('Got nonce:', payload.nonce);
     * }
     * });
     * @example <caption>Tokenize and vault a card</caption>
     * hostedFieldsInstance.tokenize({
     * vault: true
     * }, function (tokenizeErr, payload) {
     * if (tokenizeErr) {
     * console.error(tokenizeErr);
     * } else {
     * console.log('Got nonce:', payload.nonce);
     * }
     * });
     * @returns {void}
     */
    tokenize(options?: {
      vault?: boolean,
      cardholderName?: string,
      billingAddress?: any
    }): Promise<braintree$HostedFieldsTokenizePayload>;
    tokenize(
      options: {
        vault?: boolean,
        cardholderName?: string,
        billingAddress?: any
      },
      callback: braintree$callback
    ): void;
    tokenize(callback: braintree$callback): void;

    /**
     * Add a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
     * @public
     * @param {string} field The field you wish to add a class to. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} classname The class to be added.
     * @param {braintree$callback} callback Callback executed on completion, containing an error if one occurred. No data is returned if the class is added successfully.
     * @example hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
     * if (addClassErr) {
     * console.error(addClassErr);
     * }
     * });
     * @returns {void}
     */
    addClass(
      field: string,
      classname: string,
      callback?: braintree$callback
    ): void;

    /**
     * Removes a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
     * @public
     * @param {string} field The field you wish to remove a class from. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} classname The class to be removed.
     * @param {braintree$callback} callback Callback executed on completion, containing an error if one occurred. No data is returned if the class is removed successfully.
     * @example hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
     * if (addClassErr) {
     * console.error(addClassErr);
     * return;
     * }
     *
     * // some time later...
     * hostedFieldsInstance.removeClass('number', 'custom-class');
     * });
     * @returns {void}
     */
    removeClass(
      field: string,
      classname: string,
      callback?: braintree$callback
    ): void;

    /**
     * Sets the placeholder of a {@link module:braintree-web/hosted-fields~field field}.
     * @public
     * @param {string} field The field whose placeholder you wish to change. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} placeholder Will be used as the `placeholder` attribute of the input.
     * @param {braintree$callback} callback Callback executed on completion, containing an error if one occurred. No data is returned if the placeholder updated successfully.
     * @example hostedFieldsInstance.setPlaceholder('number', '4111 1111 1111 1111', function (placeholderErr) {
     * if (placeholderErr) {
     * console.error(placeholderErr);
     * }
     * });
     * @example <caption>Update CVV field on card type change</caption>
     * hostedFieldsInstance.on('cardTypeChange', function (event) {
     * // Update the placeholder value if there is only one possible card type
     * if (event.cards.length === 1) {
     * hostedFields.setPlaceholder('cvv', event.cards[0].code.name, function (placeholderErr) {
     * if (placeholderErr) {
     * // Handle errors, such as invalid field name
     * console.error(placeholderErr);
     * }
     * });
     * }
     * });
     * @returns {void}
     */
    setPlaceholder(
      field: string,
      placeholder: string,
      callback?: braintree$callback
    ): void;

    /**
     * Clear the value of a {@link module:braintree-web/hosted-fields~field field}.
     * @public
     * @param {string} field The field whose placeholder you wish to clear. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {braintree$callback} callback Callback executed on completion, containing an error if one occurred. No data is returned if the field cleared successfully.
     * @returns {void}
     * @example hostedFieldsInstance.clear('number', function (clearErr) {
     * if (clearErr) {
     * console.error(clearErr);
     * }
     * });
     * @example <caption>Clear several fields</caption>
     * hostedFieldsInstance.clear('number');
     * hostedFieldsInstance.clear('cvv');
     * hostedFieldsInstance.clear('expirationDate');
     */
    clear(field: string, callback?: braintree$callback): void;

    /**
     * Returns an {@link HostedFields~stateObject|object} that includes the state of all fields and possible card types.
     * @public
     * @returns {{[key: string]: any}} {@link HostedFields~stateObject|stateObject}
     * @example <caption>Check if all fields are valid</caption>
     * var state = hostedFields.getState();
     *
     * var formValid = Object.keys(state.fields).every(function (key) {
     * return state.fields[key].isValid;
     * });
     */
    getState(): any;
  }

  /**
   * @property {Function} close A handle to close the PayPal checkout flow.
   */
  declare interface braintree$PayPalTokenizeReturn {
    close: () => any;
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {string} type The payment method type, always `PayPalAccount`.
   * @property {object} details Additional PayPal account details.
   * @property {string} details.email User's email address.
   * @property {string} details.payerId User's payer ID, the unique identifier for each PayPal account.
   * @property {string} details.firstName User's given name.
   * @property {string} details.lastName User's surname.
   * @property {?string} details.countryCode User's 2 character country code.
   * @property {?string} details.phone User's phone number (e.g. 555-867-5309).
   * @property {?object} details.shippingAddress User's shipping address details, only available if shipping address is enabled.
   * @property {string} details.shippingAddress.recipientName Recipient of postage.
   * @property {string} details.shippingAddress.line1 Street number and name.
   * @property {string} details.shippingAddress.line2 Extended address.
   * @property {string} details.shippingAddress.city City or locality.
   * @property {string} details.shippingAddress.state State or region.
   * @property {string} details.shippingAddress.postalCode Postal code.
   * @property {string} details.shippingAddress.countryCode 2 character country code (e.g. US).
   * @property {?object} details.billingAddress User's billing address details.
   * Not available to all merchants; [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support) for details on eligibility and enabling this feature.
   * To enable this feature, [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support).
   * Alternatively, see `shippingAddress` above as an available client opt
   * To enable this feature, [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support).
   * @property {string} details.billingAddress.line1 Street number and name.
   * @property {string} details.billingAddress.line2 Extended address.
   * @property {string} details.billingAddress.city City or locality.
   * @property {string} details.billingAddress.state State or region.
   * @property {string} details.billingAddress.postalCode Postal code.
   * @property {string} details.billingAddress.countryCode 2 character country code (e.g. US).
   */
  declare interface braintree$PayPalShippingAddress {
    recipientName: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
  }

  declare interface braintree$PayPalBillingAddress {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
  }

  declare interface braintree$PayPalAccountDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    phone: string;
    shippingAddress: braintree$PayPalShippingAddress;
    billingAddress: braintree$PayPalBillingAddress;
  }

  declare interface braintree$PayPalTokenizePayload {
    nonce: string;
    type: string;
    details: braintree$PayPalAccountDetails;
  }

  declare export interface braintree$PayPal {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link PayPal} instance.
     * @example braintree.paypal.create({
     * client: clientInstance
     * }, function (createErr, paypalInstance) {
     * if (createErr) {
     * if (createErr.code === 'PAYPAL_BROWSER_NOT_SUPPORTED') {
     * console.error('This browser is not supported.');
     * } else {
     * console.error('Error!', createErr);
     * }
     * }
     * });
     * @returns {void}
     */
    create: (
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Launches the PayPal login flow and returns a nonce payload. Only one PayPal login flow should be active at a time. One way to achieve this is to disable your PayPal button while the flow is open.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options All tokenization options for the PayPal component.
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link PayPal~tokenizePayload|tokenizePayload}.
     * @example button.addEventListener('click', function () {
     * // Disable the button so that we don't attempt to open multiple popups.
     * button.setAttribute('disabled', 'disabled');
     *
     * // Because PayPal tokenization opens a popup, this must be called
     * // as a result of a user action, such as a button click.
     * paypalInstance.tokenize({
     * flow: 'vault' // Required
     * // Any other tokenization options
     * }, function (tokenizeErr, payload) {
     * button.removeAttribute('disabled');
     *
     * if (tokenizeErr) {
     * // Handle tokenization errors or premature flow closure
     *
     * switch (tokenizeErr.code) {
     * case 'PAYPAL_POPUP_CLOSED':
     * console.error('Customer closed PayPal popup.');
     * break;
     * case 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED':
     * console.error('PayPal tokenization failed. See details:', tokenizeErr.details);
     * break;
     * case 'PAYPAL_FLOW_FAILED':
     * console.error('Unable to initialize PayPal flow. Are your options correct?', tokenizeErr.details);
     * break;
     * default:
     * console.error('Error!', tokenizeErr);
     * }
     * } else {
     * // Submit payload.nonce to your server
     * }
     * });
     * });
     * @returns {braintree$PayPal} ~tokenizeReturn} A handle to close the PayPal checkout frame.
     */
    tokenize(
      options: {
        flow: string,
        intent?: string,
        offerCredit?: boolean,
        useraction?: string,
        amount?: string | number,
        currency?: string,
        displayName?: string,
        locale?: string,
        enableShippingAddress?: boolean,
        shippingAddressOverride?: braintree$PayPalShippingAddress,
        shippingAddressEditable?: boolean,
        billingAgreementDescription?: string
      },
      callback: braintree$callback
    ): braintree$PayPalTokenizeReturn;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/paypal.create|create}.
     * @public
     * @param {braintree$callback} callback Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: () => void): void;
  }

  /**
   * @property {string} nonce The new payment method nonce produced by the 3D Secure lookup. The original nonce passed into {@link ThreeDSecure#verifyCard|verifyCard} was consumed. This new nonce should be used to transact on your server.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} description A human-readable description.
   * @property {boolean} liabilityShiftPossible Indicates whether the card was eligible for 3D Secure.
   * @property {boolean} liabilityShifted Indicates whether the liability for fraud has been shifted away from the merchant.
   */
  declare interface braintree$ThreeDSecureAccountDetails {
    cardType: string;
    lastTwo: string;
  }

  declare interface braintree$ThreeDSecureVerifyPayload {
    nonce: string;
    details: braintree$ThreeDSecureAccountDetails;
    description: string;
    liabilityShiftPossible: boolean;
    liabilityShifted: boolean;
  }

  declare export interface braintree$ThreeDSecure {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link ThreeDSecure} instance.
     * @returns {void}
     * @example braintree.threeDSecure.create({
     * client: client
     * }, callback);
     */
    create(options: {
      client: braintree$Client
    }): Promise<braintree$ThreeDSecure>;
    create(
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @callback ThreeDSecure ~addFrameCallback
     * @description The callback used for options.addFrame in {@link ThreeDSecure#verifyCard|verifyCard}.
     * @returns {void}
     */
    addFrameCallback: (
      err?: braintree$BraintreeError,
      iframe?: HTMLIFrameElement
    ) => void;

    /**
     * @callback ThreeDSecure ~removeFrameCallback
     * @description The callback used for options.removeFrame in {@link ThreeDSecure#verifyCard|verifyCard}.
     * @returns {void}
     */
    removeFrameCallback: () => void;

    /**
     * Launch the 3D Secure login flow, returning a nonce payload.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Options for card verification.
     * @param {errback} callback The second argument, <code>data</code>, is a {@link ThreeDSecure~verifyPayload|verifyPayload}
     * @returns {void}
     * @example <caption>Verifying an existing nonce with 3DS</caption>
     * var my3DSContainer;
     *
     * threeDSecure.verifyCard({
     * nonce: existingNonce,
     * amount: 123.45,
     * addFrame: function (err, iframe) {
     * // Set up your UI and add the iframe.
     * my3DSContainer = document.createElement('div');
     * my3DSContainer.appendChild(iframe);
     * document.body.appendChild(my3DSContainer);
     * },
     * removeFrame: function () {
     * // Remove UI that you added in addFrame.
     * document.body.removeChild(my3DSContainer);
     * }
     * }, function (err, payload) {
     * if (err) {
     * console.error(err);
     * return;
     * }
     *
     * if (payload.liabilityShifted) {
     * // Liablity has shifted
     * submitNonceToServer(payload.nonce);
     * } else if (payload.liabilityShiftPossible) {
     * // Liablity may still be shifted
     * // Decide if you want to submit the nonce
     * } else {
     * // Liablity has not shifted and will not shift
     * // Decide if you want to submit the nonce
     * }
     * });
     */
    verifyCard(options: {
      nonce: string,
      amount: number,
      addFrame: (
        err?: braintree$BraintreeError,
        iframe?: HTMLIFrameElement
      ) => void,
      removeFrame?: () => void
    }): Promise<braintree$ThreeDSecureVerifyPayload>;
    verifyCard(
      options: {
        nonce: string,
        amount: number,
        addFrame: (
          err?: braintree$BraintreeError,
          iframe?: HTMLIFrameElement
        ) => void,
        removeFrame: () => void
      },
      callback: braintree$callback
    ): void;

    /**
     * Cancel the 3DS flow and return the verification payload if available.
     * @public
     * @param {errback} callback The second argument is a {@link ThreeDSecure~verifyPayload|verifyPayload}. If there is no verifyPayload (the initial lookup did not complete), an error will be returned.
     * @returns {void}
     * @example threeDSecure.cancelVerifyCard(function (err, verifyPayload) {
     * if (err) {
     * // Handle error
     * console.log(err.message); // No verification payload available
     * return;
     * }
     *
     * verifyPayload.nonce; // The nonce returned from the 3ds lookup call
     * verifyPayload.liabilityShifted; // boolean
     * verifyPayload.liabilityShiftPossible; // boolean
     * });
     */
    cancelVerifyCard(callback: braintree$callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/three-d-secure.create|create}
     * @public
     * @param {errback} callback Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: braintree$callback): void;
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {string} type Always <code>CreditCard</code>.
   * @property {object} details Additional account details:
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} description A human-readable description.
   */
  declare interface braintree$UnionPayAccountDetails {
    cardType: string;
    lastTwo: string;
    description: string;
  }

  declare interface braintree$UnionPayTokenizePayload {
    nonce: string;
    type: string;
    details: braintree$UnionPayAccountDetails;
  }

  /**
   * @property {string} enrollmentId UnionPay enrollment ID. This value should be passed to `tokenize`.
   * @property {boolean} smsCodeRequired UnionPay `smsCodeRequired` flag.
   * </p><b>true</b> - the user will receive an SMS code that needs to be supplied for tokenization.
   * </p><b>false</b> - the card can be immediately tokenized.
   */
  declare interface braintree$UnionPayEnrollPayload {
    enrollmentId: string;
    smsCodeRequired: boolean;
  }

  /**
   * @property {boolean} isUnionPay Determines if this card is a UnionPay card.
   * @property {boolean} isDebit Determines if this card is a debit card. This property is only present if `isUnionPay` is `true`.
   * @property {object} unionPay UnionPay specific properties. This property is only present if `isUnionPay` is `true`.
   * @property {boolean} unionPay.supportsTwoStepAuthAndCapture Determines if the card allows for an authorization, but settling the transaction later.
   * @property {boolean} unionPay.isSupported Determines if Braintree can process this UnionPay card. When false, Braintree cannot process this card and the user should use a different card.
   */
  declare interface braintree$UnionPayProperties {
    supportsTwoStepAuthAndCapture: boolean;
    isSupported: boolean;
  }

  declare interface braintree$UnionPayFetchCapabilitiesPayload {
    isUnionPay: boolean;
    isDebit: boolean;
    unionPay: braintree$UnionPayProperties;
  }

  declare export interface braintree$UnionPay {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link UnionPay} instance.
     * @returns {void}
     * @example braintree.unionpay.create({ client: clientInstance }, function (createErr, unionpayInstance) {
     * if (createErr) {
     * console.error(createErr);
     * return;
     * }
     * // ...
     * });
     */
    create: (
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Fetches the capabilities of a card, including whether or not the SMS enrollment process is required.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options UnionPay {@link UnionPay#fetchCapabilities fetchCapabilities} options
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link UnionPay#fetchCapabilitiesPayload fetchCapabilitiesPayload}.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.fetchCapabilities({
     * card: {
     * number: '4111111111111111'
     * }
     * }, function (fetchErr, cardCapabilities) {
     * if (fetchErr) {
     * console.error(fetchErr);
     * return;
     * }
     *
     * if (cardCapabilities.isUnionPay) {
     * if (cardCapabilities.unionPay && !cardCapabilities.unionPay.isSupported) {
     * // Braintree cannot process this UnionPay card.
     * // Ask the user for a different card.
     * return;
     * }
     *
     * if (cardCapabilities.isDebit) {
     * // CVV and expiration date are not required
     * } else {
     * // CVV and expiration date are required
     * }
     *
     * // Show mobile phone number field for enrollment
     * }
     * });
     * @example <caption>With Hosted Fields</caption>
     * // Fetch capabilities on `blur` inside of the Hosted Fields `create` callback
     * hostedFieldsInstance.on('blur', function (event) {
     * // Only attempt to fetch capabilities when a valid card number has been entered
     * if (event.emittedBy === 'number' && event.fields.number.isValid) {
     * unionpayInstance.fetchCapabilities({
     * hostedFields: hostedFieldsInstance
     * }, function (fetchErr, cardCapabilities) {
     * if (fetchErr) {
     * console.error(fetchErr);
     * return;
     * }
     *
     * if (cardCapabilities.isUnionPay) {
     * if (cardCapabilities.unionPay && !cardCapabilities.unionPay.isSupported) {
     * // Braintree cannot process this UnionPay card.
     * // Ask the user for a different card.
     * return;
     * }
     * if (cardCapabilities.isDebit) {
     * // CVV and expiration date are not required
     * // Hide the containers with your `cvv` and `expirationDate` fields
     * } else {
     * // CVV and expiration date are required
     * }
     * } else {
     * // Not a UnionPay card
     * // When form is complete, tokenize using your Hosted Fields instance
     * }
     *
     * // Show your own mobile country code and phone number inputs for enrollment
     * });
     * });
     * });
     * @returns {void}
     */
    fetchCapabilities(
      options: {
        card: any,
        hostedFields: braintree$HostedFields
      },
      callback: braintree$callback
    ): void;

    /**
     * Enrolls a UnionPay card. Use {@link UnionPay#fetchCapabilities|fetchCapabilities} to determine if the SMS enrollment process is required.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options UnionPay enrollment options:
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link UnionPay~enrollPayload|enrollPayload}.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.enroll({
     * card: {
     * number: '4111111111111111',
     * expirationMonth: '12',
     * expirationYear: '2038'
     * },
     * mobile: {
     * countryCode: '62',
     * number: '111111111111'
     * }
     * }, function (enrollErr, response) {
     * if (enrollErr) {
     * console.error(enrollErr);
     * return;
     * }
     *
     * if (response.smsCodeRequired) {
     * // If smsCodeRequired, wait for SMS auth code from customer
     * // Then use response.enrollmentId during {@link UnionPay#tokenize}
     * } else {
     * // SMS code is not required from the user.
     * // {@link UnionPay#tokenize} can be called immediately
     * });
     * @example <caption>With Hosted Fields</caption>
     * unionpayInstance.enroll({
     * hostedFields: hostedFields,
     * mobile: {
     * countryCode: '62',
     * number: '111111111111'
     * }
     * }, function (enrollErr, response) {
     * if (enrollErr) {
     * console.error(enrollErr);
     * return;
     * }
     *
     * if (response.smsCodeRequired) {
     * // If smsCodeRequired, wait for SMS auth code from customer
     * // Then use response.enrollmentId during {@link UnionPay#tokenize}
     * } else {
     * // SMS code is not required from the user.
     * // {@link UnionPay#tokenize} can be called immediately
     * }
     * });
     * @returns {void}
     */
    enroll(
      options: {
        card: any,
        hostedFields: braintree$HostedFields,
        mobile: any
      },
      callback: braintree$callback
    ): void;

    /**
     * Tokenizes a UnionPay card and returns a nonce payload.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options UnionPay tokenization options:
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link UnionPay~tokenizePayload|tokenizePayload}.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.tokenize({
     * card: {
     * number: '4111111111111111',
     * expirationMonth: '12',
     * expirationYear: '2038',
     * cvv: '123'
     * },
     * enrollmentId: enrollResponse.enrollmentId, // Returned from enroll
     * smsCode: '11111' // Received by customer's phone, if SMS enrollment was required. Otherwise it should be omitted
     * }, function (tokenizeErr, response) {
     * if (tokenizeErr) {
     * console.error(tokenizeErr);
     * return;
     * }
     *
     * // Send response.nonce to your server
     * });
     * @example <caption>With Hosted Fields</caption>
     * unionpayInstance.tokenize({
     * hostedFields: hostedFieldsInstance,
     * enrollmentId: enrollResponse.enrollmentId, // Returned from enroll
     * smsCode: '11111' // Received by customer's phone, if SMS enrollment was required. Otherwise it should be omitted
     * }, function (tokenizeErr, response) {
     * if (tokenizeErr) {
     * console.error(tokenizeErr);
     * return;
     * }
     *
     * // Send response.nonce to your server
     * });
     * @returns {void}
     */
    tokenize(
      options: {
        card: any,
        hostedFields: braintree$HostedFields,
        enrollmentId: string,
        smsCode: string
      },
      callback: braintree$callback
    ): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/unionpay.create|create}. This only needs to be called when using UnionPay with Hosted Fields.
     * @public
     * @param {braintree$callback} callback Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example unionpayInstance.teardown(function (teardownErr) {
     * if (teardownErr) {
     * console.error('Could not tear down UnionPay.');
     * } else {
     * console.log('UnionPay has been torn down.');
     * }
     * });
     * @returns {void}
     */
    teardown(callback?: braintree$callback): void;
  }

  /**
   * @module braintree-web/us-bank-account
   * @description This module is for accepting payments of US bank accounts.
   */
  declare export interface braintree$USBankAccount {
    /**
     * @static
     * @function create
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options Creation options:
     * @param {braintree$callback} callback The second argument, `data`, is the {@link USBankAccount} instance.
     * @returns {void}
     */
    create: (
      options: {
        client: braintree$Client
      },
      callback: braintree$callback
    ) => void;

    /**
     * @description The current version of the SDK, i.e. `{@pkg version}`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Tokenizes bank information to return a payment method nonce. You can tokenize bank details by providing information like account and routing numbers. You can also tokenize with a bank login UI that prompts the customer to log into their bank account.
     * @public
     * @param {"NO PRINT IMPLEMENTED: JSDocTypeLiteral"} options All tokenization options for the US Bank Account component.
     * @param {braintree$callback} callback The second argument, <code>data</code>, is a {@link USBankAccount~tokenizePayload|tokenizePayload}.
     * @returns {void}
     * @example <caption>Tokenizing raw bank details</caption>
     * submitButton.addEventListener('click', function (event) {
     * var routingNumberInput = document.querySelector('input#routing-number');
     * var accountNumberInput = document.querySelector('input#account-number');
     * var accountHolderNameInput = document.querySelector('input#account-holder-name');
     * var accountTypeInput = document.querySelector('input[name="account-type"]:checked');
     * var billingAddressStreetInput = document.querySelector('input#street-address');
     * var billingAddressExtendedInput = document.querySelector('input#extended-address');
     * var billingAddressLocalityInput = document.querySelector('input#locality');
     * var billingAddressRegionSelect = document.querySelector('select#region');
     * var billingAddressPostalInput = document.querySelector('input#postal-code');
     *
     * event.preventDefault();
     *
     * usBankAccountInstance.tokenize({
     * bankDetails: {
     * routingNumber: routingNumberInput.value,
     * accountNumber: accountNumberInput.value,
     * accountHolderName: accountHolderNameInput.value,
     * accountType: accountTypeInput.value,
     * billingAddress: {
     * streetAddress: billingAddressStreetInput.value,
     * extendedAddress: billingAddressExtendedInput.value,
     * locality: billingAddressLocalityInput.value,
     * region: billingAddressRegionSelect.value,
     * postalCode: billingAddressPostalInput.value
     * }
     * },
     * mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
     * }, function (tokenizeErr, tokenizedPayload) {
     * if (tokenizeErr) {
     * console.error('There was an error tokenizing the bank details.');
     * return;
     * }
     *
     * // Send tokenizePayload.nonce to your server here!
     * });
     * });
     * @example <caption>Tokenizing with bank login UI</caption>
     * bankLoginButton.addEventListener('click', function (event) {
     * event.preventDefault();
     *
     * usBankAccountInstance.tokenize({
     * bankLogin: {
     * displayName: 'My Online Store'
     * },
     * mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
     * }, function (tokenizeErr, tokenizedPayload) {
     * if (tokenizeErr) {
     * console.error('There was an error tokenizing the bank details.');
     * return;
     * }
     *
     * // Send tokenizePayload.nonce to your server here!
     * });
     * });
     */
    tokenize(
      options: {
        mandateText: string,
        bankDetails: any,
        bankLogin: any
      },
      callback: braintree$callback
    ): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/us-bank-account.create|create}.
     * @public
     * @param {braintree$callback} callback Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: braintree$callback): void;
  }

  /**
   * Enum for {@link BraintreeError} types.
   * @name BraintreeError.types
   * @enum {}
   * @readonly
   * @memberof BraintreeError
   * @property {string} CUSTOMER An error caused by the customer.
   * @property {string} MERCHANT An error that is actionable by the merchant.
   * @property {string} NETWORK An error due to a network problem.
   * @property {string} INTERNAL An error caused by Braintree code.
   * @property {string} UNKNOWN An error where the origin is unknown.
   */
  declare export type braintree$BraintreeError$Types =
    | "CUSTOMER"
    | "MERCHANT"
    | "NETWORK"
    | "INTERNAL"
    | "UNKNOWN";

  declare export interface braintree$BraintreeError {
    /**
     * @type {string}
     * @description A code that corresponds to specific errors.
     */
    code: string;

    /**
     * @type {string}
     * @description A short description of the error.
     */
    message: string;

    /**
     * @type {BraintreeError$types}
     * @description The type of error.
     */
    type: braintree$BraintreeError$Types;

    /**
     * @type {"NO PRINT IMPLEMENTED: JSDocOptionalType"}
     * @description Additional information about the error, such as an underlying network error response.
     */
    details: any;
  }

  /**
   * @global
   * @callback callback
   * @description The Node.js-style callback pattern used throughout the SDK.
   * @returns {void}
   */
  declare type braintree$callback = (
    err?: braintree$BraintreeError,
    data?: any
  ) => void;

  /**
   * @type {module} :braintree-web/client}
   */
  declare export var braintree$client: braintree$Client;

  /**
   * @type {module} :braintree-web/paypal}
   */
  declare export var braintree$paypal: braintree$PayPal;

  /**
   * @type {module} :braintree-web/hosted-fields}
   */
  declare export var braintree$hostedFields: braintree$HostedFields;

  /**
   * @type {module} :braintree-web/three-d-secure}
   */
  declare export var braintree$threeDSecure: braintree$ThreeDSecure;

  /**
   * @type {module} :braintree-web/data-collector}
   */
  declare export var braintree$dataCollector: braintree$DataCollector;

  /**
   * @type {module} :braintree-web/american-express}
   */
  declare export var braintree$americanExpress: braintree$AmericanExpress;

  /**
   * @type {module} :braintree-web/unionpay}
   */
  declare export var braintree$unionpay: braintree$UnionPay;

  /**
   * @type {module} :braintree-web/apple-pay}
   */
  declare export var braintree$applePay: braintree$ApplePay;

  /**
   * @type {module} :braintree-web/us-bank-account}
   */
  declare export var braintree$usBankAccount: braintree$USBankAccount;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  declare export var braintree$VERSION: string;
  declare export default typeof braintree;
}
