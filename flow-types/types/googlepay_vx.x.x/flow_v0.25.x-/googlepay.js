declare module "googlepay" {
  declare interface api$ApiVersion {
    apiVersion: number;
    apiVersionMinor: number;
  }

  declare type api$EnvironmentType = "PRODUCTION" | "TEST";

  declare interface api$PaymentOptions {
    environment?: api$EnvironmentType;
  }

  declare type api$ButtonColor = "default" | "black" | "white";

  declare type api$ButtonType = "long" | "short";

  declare interface api$ButtonOptions {
    onClick: EventListener;
    buttonColor?: api$ButtonColor;
    buttonType?: api$ButtonType;
  }

  declare type api$IsReadyToPayRequest = {
    allowedPaymentMethods: api$PaymentMethod[],
    existingPaymentMethodRequired?: boolean
  } & api$ApiVersion;

  declare interface api$IsReadyToPayResponse {
    result: boolean;
    paymentMethodPresent?: boolean;
  }

  declare type api$PaymentMethod = api$CardPaymentMethod;

  declare type api$AllowedPaymentMethodType = "CARD";

  declare interface api$BasePaymentMethod {
    type: api$AllowedPaymentMethodType;
    tokenizationSpecification?: api$PaymentMethodTokenizationSpecification;
  }

  declare type api$PaymentMethodTokenizationSpecification =
    | api$PaymentGatewayTokenizationSpecification
    | api$DirectTokenizationSpecification;

  declare type api$TokenizationType = "DIRECT" | "PAYMENT_GATEWAY";

  declare interface api$BasePaymentMethodTokenizationSpecification {
    type: api$TokenizationType;
  }

  declare type api$PaymentGatewayTokenizationSpecification = {
    type: "PAYMENT_GATEWAY",
    parameters: {
      [parameter: string]: string
    }
  } & api$BasePaymentMethodTokenizationSpecification;

  declare type api$DirectTokenizationSpecification = {
    type: "DIRECT",
    parameters: {
      protocolVersion: string,
      publicKey: string
    }
  } & api$BasePaymentMethodTokenizationSpecification;

  declare type api$CardPaymentMethod = {
    type: "CARD",
    parameters: api$CardParameters
  } & api$BasePaymentMethod;

  declare type api$AllowedAuthMethod = "PAN_ONLY" | "CRYPTOGRAM_3DS";

  declare type api$AllowedCardNetwork =
    | "AMEX"
    | "DISCOVER"
    | "JCB"
    | "MASTERCARD"
    | "VISA";

  declare interface api$CardParameters {
    allowedAuthMethods: api$AllowedAuthMethod[];
    allowedCardNetworks: api$AllowedCardNetwork[];
    allowPrepaidCards?: boolean;
    billingAddressRequired?: boolean;
    billingAddressParameters?: api$BillingAddressParameters;
  }

  declare type api$BillingAddressFormat = "FULL" | "MIN";

  declare interface api$BillingAddressParameters {
    format?: api$BillingAddressFormat;
    phoneNumberRequired?: boolean;
  }

  declare type api$PaymentDataRequest = {
    merchantInfo: api$MerchantInfo,
    allowedPaymentMethods: api$PaymentMethod[],
    transactionInfo: api$TransactionInfo,
    emailRequired?: boolean,
    shippingAddressRequired?: boolean,
    shippingAddressParameters?: api$ShippingAddressParameters
  } & api$ApiVersion;

  declare type api$PaymentData = {
    paymentMethodData: api$PaymentMethodData,
    email?: string,
    shippingAddress?: api$Address
  } & api$ApiVersion;

  declare interface api$MerchantInfo {
    merchantId: string;
    merchantName?: string;
    merchantOrigin?: string;
  }

  declare type api$TransactionInfo =
    | api$UnknownPriceTransactionInfo
    | api$KnownPriceTransactionInfo;

  declare type api$TotalPriceStatus =
    | "ESTIMATED"
    | "FINAL"
    | "NOT_CURRENTLY_KNOWN";

  declare interface api$BaseTransactionInfo {
    totalPriceStatus: api$TotalPriceStatus;
    currencyCode: string;
  }

  declare type api$UnknownPriceTransactionInfo = {
    totalPriceStatus: "NOT_CURRENTLY_KNOWN"
  } & api$BaseTransactionInfo;

  declare type api$KnownPriceTransactionInfo = {
    totalPriceStatus: "ESTIMATED" | "FINAL",
    totalPrice: string
  } & api$BaseTransactionInfo;

  declare interface api$ShippingAddressParameters {
    allowedCountryCodes?: string[];
    phoneNumberRequired?: boolean;
  }

  declare type api$PaymentMethodData = api$CardPaymentMethodData;

  declare interface api$BasePaymentMethodData {
    type: api$AllowedPaymentMethodType;
    description: string;
    tokenizationData: api$PaymentMethodTokenizationData;
  }

  declare interface api$PaymentMethodTokenizationData {
    type: api$TokenizationType;
    token?: string;
  }

  declare type api$CardPaymentMethodData = {
    type: "CARD",
    info: api$CardInfo
  } & api$BasePaymentMethodData;

  declare interface api$CardInfo {
    cardDetails: string;
    cardNetwork: api$AllowedCardNetwork;
    billingAddress?: api$Address;
  }

  declare type api$Address = api$AddressMin | api$AddressFull;

  declare interface api$AddressMin {
    name: string;
    postalCode: string;
    countryCode: string;
    phoneNumber?: string;
  }

  declare type api$AddressFull = {
    address1: string,
    address2: string,
    address3: string,
    locality: string,
    administrativeArea: string,
    sortingCode: string
  } & api$AddressMin;

  declare type api$ErrorStatusCode =
    | "BUYER_ACCOUNT_ERROR"
    | "CANCELED"
    | "DEVELOPER_ERROR"
    | "INTERNAL_ERROR";

  declare interface api$PaymentsError {
    statusCode: api$ErrorStatusCode;
    statusMessage: string;
  }

  declare class api$PaymentsClient {
    constructor(paymentOptions: api$PaymentOptions): this;
    createButton(request: api$ButtonOptions): HTMLElement;
    isReadyToPay(
      request: api$IsReadyToPayRequest
    ): Promise<api$IsReadyToPayResponse>;
    loadPaymentData(request: api$PaymentDataRequest): Promise<api$PaymentData>;
    prefetchPaymentData(request: api$PaymentDataRequest): void;
  }
}
