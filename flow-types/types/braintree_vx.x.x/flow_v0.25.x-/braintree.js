declare module "braintree" {
  declare export default typeof braintree;

  declare var braintree: typeof npm$namespace$braintree;

  declare var npm$namespace$braintree: {
    Environment: typeof braintree$Environment,
    TransactionRequestSource: typeof braintree$TransactionRequestSource,
    BraintreeGateway: typeof braintree$BraintreeGateway,
    AddOn: typeof braintree$AddOn,
    Address: typeof braintree$Address,
    CreditCard: typeof braintree$CreditCard,
    CreditCardVerification: typeof braintree$CreditCardVerification,
    Customer: typeof braintree$Customer,
    Discount: typeof braintree$Discount,
    Dispute: typeof braintree$Dispute,
    MerchantAccount: typeof braintree$MerchantAccount,
    PaymentMethodNonce: typeof braintree$PaymentMethodNonce,
    Plan: typeof braintree$Plan,
    SettlementBatchSummary: typeof braintree$SettlementBatchSummary,
    Subscription: typeof braintree$Subscription,
    Transaction: typeof braintree$Transaction,
    TransactionLineItem: typeof braintree$TransactionLineItem,
    AndroidPayCard: typeof braintree$AndroidPayCard,
    ApplePayCard: typeof braintree$ApplePayCard,
    MasterpassCard: typeof braintree$MasterpassCard,
    PayPalAccount: typeof braintree$PayPalAccount,
    SamsungPayCard: typeof braintree$SamsungPayCard,
    VenmoAccount: typeof braintree$VenmoAccount,
    VisaCheckoutCard: typeof braintree$VisaCheckoutCard,
    Test: typeof braintree$Test
  };

  /**
   * Braintree Config and Client
   */

  declare export var braintree$Environment: {|
    +Development: "Development", // "Development"
    +Production: "Production", // "Production"
    +Qa: "Qa", // "Qa"
    +Sandbox: "Sandbox" // "Sandbox"
  |};

  declare export interface braintree$GatewayConfig {
    environment: any;
    merchantId: string;
    publicKey: string;
    privateKey: string;
  }

  declare export class braintree$BraintreeGateway {
    constructor(config: braintree$GatewayConfig): this;
    config: any;
    addOn: braintree$AddOnGateway;
    address: braintree$AddressGateway;
    clientToken: braintree$ClientTokenGateway;
    creditCard: braintree$CreditCardGateway;
    creditCardVerification: braintree$CreditCardVerificationGateway;
    customer: braintree$CustomerGateway;
    discount: braintree$DiscountGateway;
    dispute: braintree$DisputeGateway;
    merchantAccountGateway: braintree$MerchantAccountGateway;
    paymentMethod: braintree$PaymentMethodGateway;
    paymentMethodNonce: braintree$PaymentMethodNonceGateway;
    plan: braintree$PlanGateway;
    settlementBatchSummary: braintree$SettlementBatchSummaryGateway;
    subscription: braintree$SubscriptionGateway;
    testing: braintree$TestingGateway;
    transaction: braintree$TransactionGateway;
    transactionLineItem: braintree$TransactionLineItemGateway;
  }

  declare interface braintree$ValidatedResponse<T> {
    success: boolean;
    errors: () => string[];
    message: string;
    params: Record<string, any>;
    address: /* Flow doesn't support conditional types, use $Call utility type */ any;
    creditCard: /* Flow doesn't support conditional types, use $Call utility type */ any;
    customer: /* Flow doesn't support conditional types, use $Call utility type */ any;
    dispute: /* Flow doesn't support conditional types, use $Call utility type */ any;
    merchantAccount: /* Flow doesn't support conditional types, use $Call utility type */ any;
    paymentMethod: /* Flow doesn't support conditional types, use $Call utility type */ any;
    settlementBatchSumary: /* Flow doesn't support conditional types, use $Call utility type */ any;
    subscription: /* Flow doesn't support conditional types, use $Call utility type */ any;
    transaction: /* Flow doesn't support conditional types, use $Call utility type */ any;
    clientToken: /* Flow doesn't support conditional types, use $Call utility type */ any;
  }

  /**
   * Gateways
   */
  declare interface braintree$AddOnGateway {
    all(): Promise<braintree$AddOn[]>;
  }

  declare interface braintree$AddressGateway {
    create(
      request: braintree$AddressCreateRequest
    ): Promise<braintree$ValidatedResponse<braintree$Address>>;
    delete(customerId: string, addressId: string): Promise<void>;
    find(customerId: string, addressId: string): Promise<braintree$Address>;
    update(
      customerId: string,
      addressId: string,
      updates: braintree$AddressUpdateRequest
    ): Promise<braintree$ValidatedResponse<braintree$Address>>;
  }

  declare interface braintree$ClientTokenGateway {
    generate(
      request: braintree$ClientTokenRequest
    ): Promise<braintree$ValidatedResponse<braintree$ClientToken>>;
  }

  declare interface braintree$CreditCardGateway {
    create(
      request: braintree$CreditCardCreateRequest
    ): Promise<braintree$ValidatedResponse<braintree$CreditCard>>;
    delete(creditCardToken: string): Promise<void>;
    expiringBetween(
      startDate: Date,
      endDate: Date
    ): Promise<braintree$CreditCard>;
    find(creditCardToken: string): Promise<braintree$CreditCard>;
    update(
      creditCardToken: string,
      updates: braintree$CreditCardUpdateRequest
    ): Promise<braintree$ValidatedResponse<braintree$CreditCard>>;
  }

  declare interface braintree$CreditCardVerificationGateway {
    search(searchFn: any): Promise<braintree$CreditCardVerification[]>;
  }

  declare interface braintree$CustomerGateway {
    create(
      request: braintree$CustomerCreateRequest
    ): Promise<braintree$ValidatedResponse<braintree$Customer>>;
    delete(customerId: string): Promise<void>;
    find(customerId: string): Promise<braintree$Customer>;
    search(searchFn: any): Promise<braintree$Customer[]>;
    update(
      customerId: string,
      updates: braintree$CustomerUpdateRequest
    ): Promise<braintree$ValidatedResponse<braintree$Customer>>;
  }

  declare interface braintree$DiscountGateway {
    all(): Promise<braintree$Discount[]>;
  }

  declare interface braintree$DisputeGateway {
    accept(
      disputeId: string
    ): Promise<braintree$ValidatedResponse<braintree$Dispute>>;
    addFileEvidence(
      disputeId: string,
      evidence: {
        documentId: string,
        category?: string
      }
    ): Promise<braintree$ValidatedResponse<braintree$Evidence>>;
    addTextEvidence(
      disputeId: string,
      evidence: {
        content: string,
        category?: string
      }
    ): Promise<braintree$ValidatedResponse<braintree$Evidence>>;
    finalize(
      disputeId: string
    ): Promise<braintree$ValidatedResponse<braintree$Dispute>>;
    find(disputeId: string): Promise<braintree$Dispute>;
    removeEvidence(
      disputeId: string,
      evidenceId: string
    ): Promise<braintree$ValidatedResponse<braintree$Dispute>>;
    search(searchFn: any): Promise<braintree$Dispute[]>;
  }

  declare interface braintree$MerchantAccountGateway {
    all(): Promise<braintree$MerchantAccount[]>;
    create(
      request: braintree$MerchantAccountCreateRequest
    ): Promise<braintree$ValidatedResponse<braintree$MerchantAccount>>;
    createForCurrency(
      currency: string,
      id?: string
    ): Promise<braintree$ValidatedResponse<braintree$MerchantAccount>>;
    update(
      merchantAccountId: string,
      updates: braintree$MerchantAccountUpdateRequest
    ): Promise<braintree$ValidatedResponse<braintree$MerchantAccount>>;
    find(merchantAccountId: string): Promise<braintree$MerchantAccount>;
  }

  declare interface braintree$PaymentMethodGateway {
    create(
      request: braintree$PaymentMethodCreateRequest
    ): Promise<braintree$ValidatedResponse<braintree$PaymentMethod>>;
    delete(token: string): Promise<void>;
    find(token: string): Promise<braintree$PaymentMethod>;
    grant(
      sharedPaymentMethodToken: string,
      options: {
        allowVaulting?: boolean,
        includeBillingPostalCode?: boolean,
        revokeAfter?: Date
      }
    ): Promise<$ReadOnly<string>>;
    revoke(sharedPaymentMethodToken: string): Promise<void>;
    update(
      token: string,
      updates: braintree$PaymentMethodUpdateRequest
    ): Promise<braintree$ValidatedResponse<braintree$PaymentMethod>>;
  }

  declare interface braintree$PaymentMethodNonceGateway {
    create(
      paymentMethodToken: string
    ): Promise<braintree$ValidatedResponse<braintree$PaymentMethodNonce>>;
    find(paymentMethodNonce: string): Promise<braintree$PaymentMethodNonce>;
  }

  declare interface braintree$PlanGateway {
    all(): Promise<braintree$Plan[]>;
  }

  declare interface braintree$SettlementBatchSummaryGateway {
    generate(request: {
      settlementDate: string,
      groupByCustomField?: string
    }): Promise<braintree$SettlementBatchSummary>;
  }

  declare interface braintree$SubscriptionGateway {
    cancel(subscriptionId: string): Promise<void>;
    create(
      request: braintree$SubscriptionRequest
    ): Promise<braintree$ValidatedResponse<braintree$Subscription>>;
    find(subscriptionId: string): Promise<braintree$Subscription>;
    retryCharge(
      subscriptionId: string,
      amount?: string,
      submitForSettlement?: boolean
    ): Promise<braintree$ValidatedResponse<braintree$Subscription>>;
    search(searchFn: any): Promise<braintree$Subscription[]>;
    update(
      subscriptionId: string,
      updates: braintree$SubscriptionRequest
    ): Promise<braintree$ValidatedResponse<braintree$Subscription>>;
  }

  declare interface braintree$TestingGateway {
    settle(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    settlementConfirm(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    settlementDecline(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    settlementOperationWithEnvironmentCheck(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    settlementPending(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
  }

  declare interface braintree$TransactionGateway {
    cancelRelease(transactionId: string): Promise<void>;
    cloneTransaction(
      transactionId: string,
      options: {
        amount: string,
        options: {
          submitForSettlement: boolean
        }
      }
    ): Promise<void>;
    find(transactionId: string): Promise<braintree$Transaction>;
    holdInEscrow(transactionId: string): Promise<braintree$Transaction>;
    refund(
      transactionId: string,
      amount?: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    releaseFromEscrow(transactionId: string): Promise<braintree$Transaction>;
    sale(
      request: braintree$TransactionRequest
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    search(searchFn: any): Promise<braintree$Transaction[]>;
    submitForPartialSettlement(
      authorizedTransactionId: string,
      amount: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    submitForSettlement(
      transactionId: string,
      amount?: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
    void(
      transactionId: string
    ): Promise<braintree$ValidatedResponse<braintree$Transaction>>;
  }

  declare interface braintree$TransactionLineItemGateway {
    findAll(transactionId: string): Promise<braintree$TransactionLineItem[]>;
  }

  /**
   * Request and Response Objects
   * Add-On
   */
  declare export class braintree$AddOn {
    amount: string;
    currentBillingCycle: number;
    description: string;
    id: string;
    kind: string;
    name: string;
    neverExpires: boolean;
    numberOfBillingCycles: number;
    quantity: number;
  }

  declare export interface braintree$AddOnAddRequest {
    amount?: string;
    inheritedFromId: string;
    neverExpires?: boolean;
    numberOfBillingCycles?: number;
    quantity?: number;
  }

  declare export interface braintree$AddOnUpdateRequest {
    amount?: string;
    existingId: string;
    neverExpires?: boolean;
    numberOfBillingCycles?: number;
    quantity?: number;
  }

  /**
   * Address
   */
  declare export class braintree$Address {
    company: string;
    countryCodeAlpha2: string;
    countryCodeAlpha3: string;
    countryCodeNumeric: string;
    countryName: string;
    createdAt: Date;
    customerId: string;
    extendedAddress: string;
    firstName: string;
    id: string;
    lastName: string;
    locality: string;
    postalCode: string;
    region: string;
    streetAddress: string;
    updatedAt: Date;
  }

  declare export interface braintree$AddressCreateRequest {
    company?: string;
    countryCodeAlpha2?: string;
    countryCodeAlpha3?: string;
    countryCodeNumeric?: string;
    countryName?: string;
    customerId: string;
    extendedAddress?: string;
    firstName?: string;
    lastName?: string;
    locality?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
  }

  declare export interface braintree$AddressUpdateRequest {
    company?: string;
    countryCodeAlpha2?: string;
    countryCodeAlpha3?: string;
    countryCodeNumeric?: string;
    countryName?: string;
    extendedAddress?: string;
    firstName?: string;
    lastName?: string;
    locality?: string;
    postalCode?: string;
    region?: string;
    streetAddress?: string;
  }

  /**
   * Client Token
   */
  declare export interface braintree$ClientTokenRequest {
    customerId?: string;
    merchantAccountId?: string;
    options?: {
      failOnDuplicatePaymentMethod?: boolean,
      makeDefault?: boolean,
      verifyCard?: boolean
    };
    version?: string;
  }

  /**
   * Credit Card
   */
  declare export class braintree$CreditCard {
    billingAddress: braintree$Address;
    bin: string;
    cardholderName: string;
    cardType: string;
    commercial: braintree$Commercial;
    countryOfIssuance: string;
    createdAt: Date;
    customerId: string;
    customerLocation: braintree$CustomerLocation;
    debit: string;
    default: boolean;
    durbinRegulated: braintree$DurbinRegulated;
    expirationDate: string;
    expirationMonth: string;
    expirationYear: string;
    expired: boolean;
    healthcare: braintree$HealthCare;
    imageUrl: string;
    issuingBank: string;
    last4: string;
    maskedNumber: string;
    payroll: braintree$Payroll;
    prepaid: braintree$Prepaid;
    productId: string;
    subscriptions: braintree$Subscription[];
    token: string;
    uniqueNumberIdentifier: string;
    updatedAt: Date;
    verification: braintree$CreditCardVerification;
  }

  declare export interface braintree$CreditCardCreateRequest {
    billingAddress?: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    billingAddressId?: string;
    cardholderName?: string;
    customerId: string;
    cvv?: string;
    expirationDate?: string;
    expirationMonth?: string;
    expirationYear?: string;
    number?: string;
    options?: {
      failOnDuplicatePaymentMethod?: boolean,
      makeDefault?: boolean,
      verificationAmount?: string,
      verificationMerchantAccountId?: string,
      verifyCard?: boolean
    };
    paymentMethodNonce?: string;
    token?: string;
  }

  declare export interface braintree$CreditCardUpdateRequest {
    billingAddress?: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string,
      options?: {
        updateExisting?: boolean
      }
    };
    cardholderName?: string;
    cvv?: string;
    expirationDate?: string;
    expirationMonth?: string;
    expirationYear?: string;
    number?: string;
  }

  /**
   * Credit Card Verification
   */
  declare export class braintree$CreditCardVerification {
    amount: string;
    avsErrorResponseCode: string;
    avsPostalCodeResponseCode: string;
    avsScreetAddressResponseCode: string;
    billing: {
      company?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    createdAt: Date;
    creditCard: {
      bin: string,
      cardholderName?: string,
      cardType: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      customerLocation: braintree$CustomerLocation,
      debit: string,
      durbinRegulated: braintree$DurbinRegulated,
      expirationDate?: string,
      expirationMonth?: string,
      expirationYear?: string,
      healthcare: braintree$HealthCare,
      issuingBank: string,
      last4: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      token: string,
      uniqueNumberIdentifier: string
    };
    currencyIsoCode: string;
    cvvResponseCode: string;
    gatewayRejectionReason: string;
    id: string;
    merchantAccountId: string;
    processorResponseCode: string;
    processorResponseText: string;
    processorResponseType: string;
    riskData: braintree$TransactionRiskData;
    status: string;
  }

  /**
   * Customer
   */
  declare export class braintree$Customer {
    addresses: braintree$Address[];
    androidPayCards: braintree$AndroidPayCard[];
    applePayCards: braintree$ApplePayCard[];
    company: string;
    createdAt: Date;
    creditCards: braintree$CreditCard[];
    customFields: any;
    email: string;
    fax: string;
    firstName: string;
    id: string;
    lastName: string;
    masterpassCards: braintree$MasterpassCard[];
    paymentMethods: braintree$PaymentMethod[];
    paypalAccounts: braintree$PayPalAccount[];
    phone: string;
    samsungPayCards: braintree$SamsungPayCard[];
    updatedAt: Date;
    venmoAccounts: braintree$VenmoAccount[];
    visaCheckoutCards: braintree$VisaCheckoutCard[];
    website: string;
  }

  declare export interface braintree$CustomerCreateRequest {
    company?: string;
    creditCard?: braintree$CreditCardCreateRequest;
    customFields?: any;
    deviceData?: string;
    email?: string;
    fax?: string;
    firstName?: string;
    id?: string;
    lastName?: string;
    paymentMethodNonce?: string;
    phone?: string;
    riskData?: braintree$CustomerRiskData;
    website?: string;
  }

  declare export interface braintree$CustomerUpdateRequest {
    company?: string;
    creditCard?: braintree$CreditCardUpdateRequest;
    customFields?: any;
    defaultPaymentMethodToken?: string;
    deviceData?: string;
    email?: string;
    fax?: string;
    firstName?: string;
    lastName?: string;
    paymentMethodNonce?: string;
    phone?: string;
    riskData?: braintree$CustomerRiskData;
    website?: string;
  }

  declare export interface braintree$CustomerRiskData {
    customerBrowser?: string;
    customerIp?: string;
  }

  /**
   * Discount
   */
  declare export class braintree$Discount {
    amount: string;
    currentBillingCycle: number;
    description: string;
    id: string;
    kind: string;
    name: string;
    neverExpires: boolean;
    numberOfBillingCycles: number;
    quantity: number;
  }

  declare export interface braintree$DiscountAddRequest {
    amount?: string;
    inheritedFromId: string;
    neverExpires?: boolean;
    numberOfBillingCycles?: number;
    quantity?: number;
  }

  declare export interface braintree$DiscountUpdateRequest {
    amount?: string;
    existingId: string;
    neverExpires?: boolean;
    numberOfBillingCycles?: number;
    quantity?: number;
  }

  /**
   * Dispute
   */
  declare export class braintree$Dispute {
    amountDisputed: string;
    amountWon: string;
    caseNumber: string;
    createdAt: Date;
    currencyIsoCode: string;
    evidence: braintree$Evidence;
    id: string;
    kind: string;
    merchantAccountId: string;
    originalDisputeId: string;
    processorComments: string;
    reason: string;
    reasonCode: string;
    reasonDescription: string;
    receivedDate: Date;
    referenceNumber: string;
    replyByDate: Date;
    status: braintree$DisputeStatus;
    statusHistory: braintree$DisputeStatusHistory;
    transaction: {
      amount: string,
      createdAt: Date,
      id: string,
      orderId: string,
      paymentInstrumentSubtype: string,
      purchaseOrderNumber: string
    };
    updatedAt: Date;
  }

  declare export type braintree$DisputeStatus =
    | "Accepted"
    | "Disputed"
    | "Expired"
    | "Open"
    | "Lost"
    | "Won";

  declare export interface braintree$DisputeStatusHistory {
    disbursementDate: Date;
    effectiveDate: Date;
    status: braintree$DisputeStatus;
    timestamp: Date;
  }

  declare export interface braintree$Evidence {
    comment?: string;
    createdAt: Date;
    id: string;
    sendToProcessorAt: Date;
    url?: string;
  }

  /**
   * Merchant Account
   */
  declare export class braintree$MerchantAccount {
    business: braintree$MerchantBusiness;
    currencyIsoCode: string;
    default: boolean;
    funding: braintree$MerchantFunding;
    id: string;
    individual: braintree$MerchantIndividual;
    masterMerchantAccount: braintree$MerchantAccount;
    status: braintree$MerchantAccountStatus;
  }

  declare export interface braintree$MerchantAccountCreateRequest {
    business?: braintree$MerchantBusiness;
    funding: braintree$MerchantFunding;
    id: string;
    individual: braintree$MerchantIndividual;
    masterMerchantAccountId: string;
    status: braintree$MerchantAccountStatus;
    tosAccepted: boolean;
  }

  declare export interface braintree$MerchantAccountUpdateRequest {
    business?: braintree$MerchantBusiness;
    funding: braintree$MerchantFunding;
    id: string;
    individual: braintree$MerchantIndividual;
    masterMerchantAccountId: string;
    status: braintree$MerchantAccountStatus;
  }

  declare export interface braintree$MerchantBusiness {
    address?: braintree$MerchantAddressDetails;
    addressDetails?: braintree$MerchantAddressDetails;
    dbaName?: string;
    legalName?: string;
    taxId?: string;
  }

  declare export interface braintree$MerchantAddressDetails {
    locality: string;
    postalCode: string;
    region: string;
    streetAddress: string;
  }

  declare export interface braintree$MerchantFunding {
    accountNumber?: string;
    accountNumberLast4?: string;
    descriptor?: string;
    destination: string;
    email?: string;
    mobilePhone?: string;
    routingNumber?: string;
  }

  declare export interface braintree$MerchantIndividual {
    addressDetails: braintree$MerchantAddressDetails;
    dateOfBirth: string;
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    ssn?: string;
    ssnLast4?: string;
  }

  declare export type braintree$MerchantAccountStatus =
    | "Pending"
    | "Active"
    | "Suspended";

  /**
   * Payment Method
   */
  declare export type braintree$PaymentMethod =
    | braintree$AndroidPayCard
    | braintree$ApplePayCard
    | braintree$PayPalAccount
    | braintree$CreditCard
    | braintree$SamsungPayCard
    | braintree$VenmoAccount
    | braintree$VisaCheckoutCard
    | braintree$MasterpassCard;

  declare export interface braintree$PaymentMethodCreateRequest {
    billingAddress?: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    billingAddressId?: string;
    cardholderName?: string;
    customerId: string;
    cvv?: string;
    deviceData?: string;
    expirationDate?: string;
    expirationMonth?: string;
    expirationYear?: string;
    number?: string;
    options?: {
      failOnDuplicatePaymentMethod?: boolean,
      makeDefault?: boolean,
      verificationAcmount?: string,
      verificationMerchantAccountId?: string,
      verifyCard?: boolean
    };
    paymentMethodNonce: string;
  }

  declare export interface braintree$PaymentMethodUpdateRequest {
    billingAddress?: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string,
      options?: {
        updateExisting?: boolean
      }
    };
    billingAddressId?: string;
    cardholderName?: string;
    cvv?: string;
    deviceData?: string;
    expirationDate?: string;
    expirationMonth?: string;
    expirationYear?: string;
    number?: string;
    options?: {
      makeDefault?: boolean,
      verificationAcmount?: string,
      verificationMerchantAccountId?: string,
      verifyCard?: boolean
    };
    paymentMethodNonce?: string;
  }

  /**
   * Payment Method Nonce
   */
  declare export class braintree$PaymentMethodNonce {
    binData: braintree$BinData;
    default: boolean;
    details: braintree$NonceDetails;
    nonce: string;
    threeDSecureInfo: braintree$TransactionThreeDSecureInfo;
    type: braintree$PaymentMethodType;
  }

  declare export interface braintree$BinData {
    commercial?: braintree$Commercial;
    countryOfIssuance?: string;
    debit?: braintree$Debit;
    durbinRegulated?: braintree$DurbinRegulated;
    healthcare?: braintree$HealthCare;
    issuingBank?: string;
    payroll?: braintree$Payroll;
    prepaid?: braintree$Prepaid;
    productId?: string;
  }

  declare export interface braintree$NonceDetails {
    bin?: string;
    cardType?: string;
    lastTwo?: string;
  }

  declare export type braintree$PaymentMethodType =
    | "AndroidPayCard"
    | "ApplePayCard"
    | "CreditCard"
    | "MasterpassCard"
    | "PayPalAccount"
    | "UsBankAccount"
    | "VenmoAccount"
    | "VisaCheckoutCard"
    | "SamsungPayCard";

  /**
   * Plan
   */
  declare export class braintree$Plan {
    addOns: braintree$AddOn[];
    billingDayOfMonth: number;
    billingFrequency: number;
    createdAt: Date;
    currenyIsoCode: string;
    description: string;
    discounts: braintree$Discount[];
    id: string;
    name: string;
    numberOfBillingCycles: number;
    price: string;
    trialDuration: number;
    trialDurationUnit: string;
    trialPeriod: boolean;
    updatedAt: Date;
  }

  /**
   * Settlement Batch Summary
   */
  declare export class braintree$SettlementBatchSummary {
    records: Array<Record<string, any>>;
  }

  /**
   * Subscription
   */
  declare export class braintree$Subscription {
    addOns: braintree$AddOn[];
    balance: string;
    billingDayOfMonth: number;
    billingPeriodEndDate: Date;
    billingPeriodStartDate: Date;
    createdAt: Date;
    currentBillingCycle: number;
    daysPastDue: number;
    descriptor: braintree$Descriptor;
    discounts: braintree$Discount[];
    failureCount: number;
    firstBillingDate: Date;
    id: string;
    merchantAccountId: string;
    neverExpires: boolean;
    nextBillAmount: string;
    nextBillingDate: Date;
    nextBillingPeriodAmount: string;
    numberOfBillingCycles: number;
    paidThroughDate: Date;
    paymentMethodToken: string;
    planId: string;
    price: string;
    status: braintree$SubscriptionStatus;
    statusHistory: braintree$SubscriptionHistory[];
    transactions: braintree$Transaction[];
    trialDuration: number;
    trialDurationUnit: string;
    trialPeriod: boolean;
    updatedAt: Date;
  }

  declare export interface braintree$SubscriptionRequest {
    addOns?: {
      add?: braintree$AddOnAddRequest[],
      remove?: string[],
      update?: braintree$AddOnUpdateRequest[]
    };
    billingDayOfMonth?: number;
    descriptor?: braintree$Descriptor;
    discounts?: {
      add?: braintree$DiscountAddRequest[],
      remove?: string[],
      update?: braintree$DiscountUpdateRequest[]
    };
    firstBillingDate?: Date;
    id: string;
    merchantAccountId: string;
    neverExpires?: boolean;
    numberOfBillingCycles?: number;
    options?: {
      doNotInheritAddOnsOrDiscounts?: boolean,
      paypal?: {
        description?: string
      },
      startImmediately?: boolean
    };
    paymentMethodNonce?: string;
    paymentMethodToken: string;
    planId: string;
    price?: string;
    trialDuration?: number;
    trialDurationUnit?: string;
    trialPeriod?: boolean;
  }

  declare export interface braintree$SubscriptionHistory {
    balance: string;
    price: string;
    status: braintree$SubscriptionStatus;
    subscriptionSource: braintree$SubscriptionSource;
  }

  declare export type braintree$SubscriptionStatus =
    | "Active"
    | "Canceled"
    | "Expired"
    | "PastDue"
    | "Pending";

  declare export type braintree$SubscriptionSource =
    | "api"
    | "control_panel"
    | "recurring";

  /**
   * Transaction
   */
  declare export class braintree$Transaction {
    addOns: braintree$AddOn[];
    additionalProccessorResponse: string;
    amount: string;
    androidPayCard: {
      bin: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      debit: braintree$Debit,
      durbinRegulated: braintree$DurbinRegulated,
      expirationMonth: string,
      expirationYear: string,
      googleTransactionId: string,
      healthcare: braintree$HealthCare,
      imageUrl: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      sourceCardLast4: string,
      sourceCardType: string,
      sourceDescription: string,
      token: string,
      virtualCardLast4: string,
      virtualCardType: string
    };
    applePayCard: {
      bin: string,
      cardType: string,
      cardholderName: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      debit: braintree$Debit,
      durbinRegulated: braintree$DurbinRegulated,
      expirationMonth: string,
      expirationYear: string,
      healthcare: braintree$HealthCare,
      imageUrl: string,
      issuingBank: string,
      last4: string,
      paymentInsuranceName: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      sourceDescription: string,
      token: string
    };
    authorizationAdjustments: braintree$AuthorizationAdjustment[];
    authorizationExpiresAt: Date;
    avsErrorResponseCode: string;
    avsPostalCodeResponseCode: string;
    avsStreetAddressResponseCode: string;
    billing: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      id?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    channel: string;
    createdAt: Date;
    creditCard: {
      bin: string,
      cardholderName?: string,
      cardType: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      customerLocation: braintree$CustomerLocation,
      debit: string,
      durbinRegulated: braintree$DurbinRegulated,
      expirationDate?: string,
      expirationMonth?: string,
      expirationYear?: string,
      healthcare: braintree$HealthCare,
      imageUrl?: string,
      issuingBank: string,
      last4: string,
      maskedNumber?: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      token: string,
      uniqueNumberIdentifier: string
    };
    currencyIsoCode: string;
    customer: {
      company?: string,
      customFields?: any,
      email?: string,
      fax?: string,
      firstName?: string,
      id: string,
      lastName?: string,
      phone?: string,
      website?: string
    };
    customFields: Record<string, any>;
    cvvResponseCode: string;
    descriptor: braintree$Descriptor;
    disbursementDetails: braintree$DisbursementDetails;
    discountAmount: string;
    discounts: braintree$Discount[];
    disputes: braintree$Dispute[];
    escrowStatus: braintree$EscrowStatus;
    facilitatedDetails: braintree$FacilitatedDetails;
    facilitatorDetails: braintree$FacilitatorDetails;
    gatewayRejectionReason: braintree$GatewayRejectionReason;
    id: string;
    lineItems: braintree$TransactionLineItem[];
    masterpassCardDetails: {
      bin: string,
      cardType: string,
      cardholderName: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      customerLocation: braintree$CustomerLocation,
      debit: braintree$Debit,
      durbinRegulated: braintree$DurbinRegulated,
      expirationDate: string,
      expirationMonth: string,
      expirationYear: string,
      healthcare: braintree$HealthCare,
      imageUrl: string,
      issuingBank: string,
      last4: string,
      maskedNumber: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      token: string
    };
    merchantAccountId: string;
    networkTransactionId: string;
    orderId: string;
    paymentInstrumentType: braintree$PaymentInstrumentType;
    paypalAccount: {
      authorizationId: string,
      captureId: string,
      customField: string,
      imageUrl: string,
      payerEmail: string,
      payerFirstName: string,
      payerId: string,
      payerLastName: string,
      payerStatus: string,
      paymentId: string,
      refundFromTransactionFeeAmount: string,
      refundFromTransactionFeeCurrencyIsoCode: string,
      refundId: string,
      sellerProtectionStatus: string,
      taxId: string,
      taxIdType: string,
      token: string,
      transactionFeeAmount: string,
      transactionFeeCurrencyIsoCode: string
    };
    planId: string;
    processorAuthorizationCode: string;
    processorResponseCode: string;
    processorResponseText: string;
    processorResponseType: braintree$TransactionProcessorResponseType;
    processorSettlementResponseCode: string;
    processorSettlementResponseText: string;
    purchaseOrderNumber: string;
    recurring: boolean;
    refundIds: string[];
    refundedTransactionId: string;
    riskData: braintree$TransactionRiskData;
    samsungPayCardDetails: {
      bin: string,
      cardType: string,
      cardholderName: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      customerLocation: braintree$CustomerLocation,
      debit: braintree$Debit,
      durbinRegulated: braintree$DurbinRegulated,
      expirationDate: string,
      expirationMonth: string,
      expirationYear: string,
      healthcare: braintree$HealthCare,
      imageUrl: string,
      issuingBank: string,
      last4: string,
      maskedNumber: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      sourceCardLast4: string,
      token: string
    };
    serviceFeeAmount: string;
    settlementBatchId: string;
    shipping: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      id?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    shippingAmount: string;
    shipsFromPostalCode: string;
    status: braintree$TransactionStatus;
    statusHistory: braintree$TransactionStatusHistory;
    subscription: {
      billingPeriodEndDate: Date,
      billingPeriodStartDate: Date
    };
    subscriptionId: string;
    taxAmount: string;
    taxExempt: boolean;
    threeDSecureInfo: braintree$TransactionThreeDSecureInfo;
    type: string;
    updatedAt: Date;
    venmoAccount: {
      imageUrl: string,
      sourceDescription: string,
      token: string,
      username: string,
      venmoUserId: string
    };
    visaCheckoutCardDetails: {
      bin: string,
      callId: string,
      cardType: string,
      cardholderName: string,
      commercial: braintree$Commercial,
      countryOfIssuance: string,
      customerLocation: braintree$CustomerLocation,
      debit: braintree$Debit,
      durbinRegulated: braintree$DurbinRegulated,
      expirationDate: string,
      expirationMonth: string,
      expirationYear: string,
      healthcare: braintree$HealthCare,
      imageUrl: string,
      issuingBank: string,
      last4: string,
      maskedNumber: string,
      payroll: braintree$Payroll,
      prepaid: braintree$Prepaid,
      productId: string,
      token: string
    };
    voiceReferralNumber: string;
  }

  declare interface braintree$ClientToken {
    clientToken: string;
  }

  declare export interface braintree$TransactionRequest {
    amount: string;
    billing?: {
      company?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string
    };
    billingAddressId?: string;
    channel?: string;
    creditCard?: {
      cardholderName?: string,
      cvv?: string,
      expirationDate?: string,
      expirationMonth?: string,
      expirationYear?: string,
      number?: string,
      token?: string
    };
    customer?: {
      company?: string,
      customFields?: any,
      email?: string,
      fax?: string,
      firstName?: string,
      id: string,
      lastName?: string,
      phone?: string,
      website?: string
    };
    customerId?: string;
    customFields?: Record<string, any>;
    descriptor?: braintree$Descriptor;
    deviceData?: string;
    deviceSessionId?: string;
    discountAmount?: string;
    externalVault?: {
      previousNetworkTransactionId?: string,
      status?: string
    };
    lineItems?: braintree$TransactionLineItem[];
    merchantAccountId?: string;
    options?: {
      addBillingAddressToPaymentMethod?: boolean,
      holdInEscrow?: boolean,
      paypal?: {
        customField?: string,
        description?: string
      },
      skipAdvancedFraudChecking?: boolean,
      skipAvs?: boolean,
      skipCvv?: boolean,
      storeInVault?: boolean,
      storeInVaultOnSuccess?: boolean,
      storeShippingAddressInVault?: boolean,
      submitForSettlement?: boolean,
      threeDSecure?: {
        required?: boolean
      },
      venmo?: {
        profileId?: string
      }
    };
    orderId?: string;
    paymentMethodNonce?: string;
    paymentMethodToken?: string;
    purchaseOrderNumber?: string;
    recurring?: boolean;
    riskData?: braintree$CustomerRiskData;
    serviceFeeAmount?: string;
    sharedBillingAddressId?: string;
    sharedCustomerId?: string;
    sharedPaymentMethodNonce?: string;
    sharedPaymentMethodToken?: string;
    sharedShippingAddressId?: string;
    shipping?: {
      company?: string,
      countryCodeAlpha2?: string,
      countryCodeAlpha3?: string,
      countryCodeNumeric?: string,
      countryName?: string,
      extendedAddress?: string,
      firstName?: string,
      lastName?: string,
      locality?: string,
      postalCode?: string,
      region?: string,
      streetAddress?: string
    };
    shippingAddressId?: string;
    shippingAmount?: string;
    shipsFromPostalCode?: string;
    taxAmount?: string;
    taxExempt?: boolean;
    threeDSecurePassThru?: {
      cavv?: string,
      eciFlag: string,
      threeDSecureVision?: string,
      xid?: string
    };
    transactionSource?: $Values<typeof braintree$TransactionRequestSource>;
  }

  declare export interface braintree$AuthorizationAdjustment {
    amount: string;
    success: boolean;
    timestamp: Date;
    processorResponseType: string;
    processorResponseCode: string;
    processorResponseText: string;
  }

  declare export interface braintree$Descriptor {
    name: string;
    phone: string;
    url: string;
  }

  declare export interface braintree$DisbursementDetails {
    disbursementDate: Date;
    fundsHeld: boolean;
    settlementAmount: string;
    settlementCurrencyExchangeRate: string;
    settlementCurrencyIsoCode: string;
    success: boolean;
  }

  declare export type braintree$EscrowStatus =
    | "hold_pending"
    | "held"
    | "release_pending"
    | "released"
    | "refunded";

  declare export interface braintree$FacilitatedDetails {
    merchantId: string;
    merchantName: string;
    paymentMethodNonce: string;
  }

  declare export interface braintree$FacilitatorDetails {
    oauthApplicationClientId: string;
    oauthApplicationName: string;
    sourcePaymentMethodToken: string;
  }

  declare export type braintree$GatewayRejectionReason =
    | "application_incomplete"
    | "avs"
    | "avs_and_cvv"
    | "cvv"
    | "duplicate"
    | "fraud"
    | "risk_threshold"
    | "three_d_secure"
    | "token_issuance";

  declare export type braintree$PaymentInstrumentType =
    | "android_pay_card"
    | "apple_pay_card"
    | "credit_card"
    | "masterpass_card"
    | "paypal_account"
    | "samsung_pay_card"
    | "venmo_account"
    | "visa_checkout_card";

  declare export type braintree$TransactionProcessorResponseType =
    | "approved"
    | "soft_declined"
    | "hard_declined";

  declare export var braintree$TransactionRequestSource: {|
    +recurring: "recurring", // "recurring"
    +unscheduled: "unscheduled", // "unscheduled"
    +recurring_first: "recurring_first", // "recurring_first"
    +moto: "moto" // "moto"
  |};

  declare export interface braintree$TransactionRiskData {
    decision: string;
    deviceDataCaptured: boolean;
    fraudServiceProvider: string;
    id: string;
  }

  declare export type braintree$TransactionStatus =
    | "authorization_expired"
    | "authorized"
    | "authorizing"
    | "settlement_pending"
    | "settlement_declined"
    | "failed"
    | "gateway_rejected"
    | "processor_declined"
    | "settled"
    | "settling"
    | "submitted_for_settlement"
    | "voided";

  declare export interface braintree$TransactionStatusHistory {
    amount: string;
    status: braintree$TransactionStatus;
    timestamp: Date;
    transactionsource: braintree$TransactionSource;
    user: string;
  }

  declare export type braintree$TransactionSource =
    | "Api"
    | "ControlPanel"
    | "Recurring";

  declare export interface braintree$TransactionThreeDSecureInfo {
    enrolled: string;
    liabilityShiftPossible: boolean;
    liabilityShifted: boolean;
    status: string;
  }

  /**
   * Transaction Line Item
   */
  declare export class braintree$TransactionLineItem {
    commodityCode: string;
    description: string;
    discountAmount: string;
    kind: string;
    name: string;
    productCode: string;
    quantity: string;
    taxAmount: string;
    totalAmount: string;
    unitAmount: string;
    unitOfMeasure: string;
    unitTaxAmount: string;
    url: string;
  }

  /**
   * Payment Method Instances
   */
  declare export type braintree$Commercial = "Yes" | "No" | "Unknown";

  declare export type braintree$CustomerLocation = "US" | "International";

  declare export type braintree$Debit = "Yes" | "No" | "Unknown";

  declare export type braintree$DurbinRegulated = "Yes" | "No" | "Unknown";

  declare export type braintree$HealthCare = "Yes" | "No" | "Unknown";

  declare export type braintree$Payroll = "Yes" | "No" | "Unknown";

  declare export type braintree$Prepaid = "Yes" | "No" | "Unknown";

  /**
   * Android Pay Card
   */
  declare export class braintree$AndroidPayCard {
    bin: string;
    createdAt: Date;
    customerId: string;
    default: boolean;
    expirationMonth: string;
    expirationYear: string;
    googleTransactionId: string;
    imageUrl: string;
    sourceCardLast4: string;
    sourceCardType: string;
    sourceDescription: string;
    subscriptions: braintree$Subscription[];
    token: string;
    updatedAt: Date;
    virtualCardLast4: string;
    virtualCardType: string;
  }

  /**
   * Apple Pay Card
   */
  declare export class braintree$ApplePayCard {
    bin: string;
    cardType: string;
    cardholderName: string;
    createdAt: Date;
    customerId: string;
    default: boolean;
    expirationMonth: string;
    expirationYear: string;
    expired: boolean;
    imageUrl: string;
    last4: string;
    paymentInsuranceName: string;
    sourceDescription: string;
    token: string;
    subscriptions: braintree$Subscription[];
    updatedAt: Date;
  }

  /**
   * Masterpass Card
   */
  declare export class braintree$MasterpassCard {
    billingAddress: braintree$Address;
    bin: string;
    cardType: string;
    cardholderName: string;
    commercial: braintree$Commercial;
    countryOfIssuance: string;
    createdAt: Date;
    customerId: string;
    customerLocation: braintree$CustomerLocation;
    debit: braintree$Debit;
    durbinRegulated: braintree$DurbinRegulated;
    expirationDate: string;
    expirationMonth: string;
    expirationYear: string;
    expired: boolean;
    healthcare: braintree$HealthCare;
    imageUrl: string;
    issuingBank: string;
    last4: string;
    maskedNumber: string;
    payroll: braintree$Payroll;
    prepaid: braintree$Prepaid;
    productId: string;
    token: string;
    subscriptions: braintree$Subscription[];
    uniqueNumberIdentifier: string;
    updatedAt: Date;
  }

  /**
   * PayPal Account
   */
  declare export class braintree$PayPalAccount {
    imageUrl: string;
    payerId: string;
    token: string;
    billingAgreementId: string;
    createdAt: Date;
    customerId: string;
    default: boolean;
    email: string;
    revokedAt: string;
    subscriptions: braintree$Subscription[];
    updatedAt: Date;
  }

  /**
   * Samsung Pay Card
   */
  declare export class braintree$SamsungPayCard {
    billingAddress: braintree$Address;
    bin: string;
    cardType: string;
    cardholderName: string;
    commercial: braintree$Commercial;
    countryOfIssuance: string;
    createdAt: Date;
    customerId: string;
    customerLocation: braintree$CustomerLocation;
    debit: braintree$Debit;
    durbinRegulated: braintree$DurbinRegulated;
    expirationDate: string;
    expirationMonth: string;
    expirationYear: string;
    expired: boolean;
    healthcare: braintree$HealthCare;
    imageUrl: string;
    issuingBank: string;
    last4: string;
    maskedNumber: string;
    payroll: braintree$Payroll;
    prepaid: braintree$Prepaid;
    productId: string;
    sourceCardLast4: string;
    subscriptions: braintree$Subscription[];
    token: string;
    uniqueNumberIdentifier: string;
    updatedAt: Date;
  }

  /**
   * Venmo Account
   */
  declare export class braintree$VenmoAccount {
    createdAt: Date;
    customerId: string;
    default: boolean;
    imageUrl: string;
    sourceDescription: string;
    subscriptions: braintree$Subscription[];
    token: string;
    username: string;
    updatedAt: Date;
    venmoUserId: string;
  }

  /**
   * Visa Checkout Card
   */
  declare export class braintree$VisaCheckoutCard {
    billingAddress: braintree$Address;
    bin: string;
    callId: string;
    cardType: string;
    cardholderName: string;
    commercial: braintree$Commercial;
    countryOfIssuance: string;
    createdAt: Date;
    customerId: string;
    customerLocation: braintree$CustomerLocation;
    debit: braintree$Debit;
    default: boolean;
    durbinRegulated: braintree$DurbinRegulated;
    expirationDate: string;
    expirationMonth: string;
    expirationYear: string;
    expired: boolean;
    healthcare: braintree$HealthCare;
    imageUrl: string;
    issuingBank: string;
    last4: string;
    maskedNumber: string;
    payroll: braintree$Payroll;
    prepaid: braintree$Prepaid;
    productId: string;
    subscriptions: braintree$Subscription[];
    token: string;
    uniqueNumberIdentifier: string;
    updatedAt: Date;
  }

  /**
   * Test
   */
  declare export class braintree$Test {
    CreditCardDefaults: {
      CountryOfIssuance: string,
      IssuingBank: string
    };
    CreditCardNumbers: {
      AmexPayWithPoints: {
        IneligibleCard: string,
        InsufficientPoints: string,
        Success: string
      },
      CardTypeIndicators: {
        Commercial: string,
        CountryOfIssuance: string,
        Debit: string,
        DurbinRegulated: string,
        Fraud: string,
        Healthcare: string,
        Hiper: string,
        HiperCard: string,
        IssuingBank: string,
        No: string,
        Payroll: string,
        Prepaid: string,
        Unknown: string
      },
      Dispute: {
        Chargeback: string
      }
    };
    MerchantAccountTest: {
      AccountNotAuthorizedContactUs: string,
      AnotherUsBankMerchantAccount: string,
      Approve: string,
      BankRejectedNone: string,
      BankRejectedUpdateFundingInformation: string,
      InsufficientFundsContactUs: string,
      UsBankMerchantAccount: string
    };
    Nonces: {
      AbstractTransactable: string,
      AmexExpressCheckout: string,
      AndroidPay: string,
      AndroidPayAmEx: string,
      AndroidPayDiscover: string,
      AndroidPayMasterCard: string,
      AndroidPayVisa: string,
      ApplePayAmEx: string,
      ApplePayMasterCard: string,
      ApplePayVisa: string,
      Coinbase: string,
      Consumed: string,
      Europe: string,
      GatewayRejectedFraud: string,
      LuhnInvalid: string,
      MasterpassAmEx: string,
      MasterpassDiscover: string,
      MasterpassMasterCard: string,
      MasterpassVisa: string,
      PayPalBillingAgreement: string,
      PayPalFuturePayment: string,
      PayPalFuturePaymentRefreshToken: string,
      PayPalOneTimePayment: string,
      ProcessorDeclinedAmEx: string,
      ProcessorDeclinedDiscover: string,
      ProcessorDeclinedMasterCard: string,
      ProcessorDeclinedVisa: string,
      ProcessorFailureJCB: string,
      SEPA: string,
      SamsungPayAmEx: string,
      SamsungPayDiscover: string,
      SamsungPayMasterCard: string,
      SamsungPayVisa: string,
      Transactable: string,
      TransactableAmEx: string,
      TransactableCommercial: string,
      TransactableCountryOfIssuanceCAD: string,
      TransactableCountryOfIssuanceUSA: string,
      TransactableDebit: string,
      TransactableDinersClub: string,
      TransactableDiscover: string,
      TransactableDurbinRegulated: string,
      TransactableHealthcare: string,
      TransactableIssuingBankNetworkOnly: string,
      TransactableJCB: string,
      TransactableMaestro: string,
      TransactableMasterCard: string,
      TransactableNoIndicators: string,
      TransactablePayroll: string,
      TransactablePrepaid: string,
      TransactableUnknownIndicators: string,
      TransactableVisa: string,
      VenmoAccount: string,
      VisaCheckoutAmEx: string,
      VisaCheckoutDiscover: string,
      VisaCheckoutMasterCard: string,
      VisaCheckoutVisa: string
    };
    TransactionAmounts: {
      Authorize: string,
      Decline: string,
      Fail: string
    };
  }

  /**
   * Errors
   */
  declare export type braintree$AuthenticationError = {} & Error;

  declare export type braintree$AuthorizationError = {} & Error;

  declare export type braintree$DownForMaintenanceError = {} & Error;

  declare export type braintree$InvalidChallengeError = {} & Error;

  declare export type braintree$InvalidKeysError = {} & Error;

  declare export type braintree$InvalidSignatureError = {} & Error;

  declare export type braintree$InvalidTransparentRedirectHashError = {} & Error;

  declare export type braintree$NotFoundError = {} & Error;

  declare export type braintree$ServerError = {} & Error;

  declare export type braintree$TestOperationPerformedInProductionError = {} & Error;

  declare export type braintree$TooManyRequestsError = {} & Error;

  declare export type braintree$UnexpectedError = {} & Error;

  declare export type braintree$UpgradeRequired = {} & Error;
}
