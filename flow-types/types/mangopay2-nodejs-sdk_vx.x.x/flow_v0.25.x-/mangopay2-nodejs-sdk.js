declare module "mangopay2-nodejs-sdk" {
  import type {
    ApiMethod,
    CountryISO,
    CurrencyISO,
    MakeKeysRequired,
    Omit,
    OmitType,
    PickPartialRequired,
    ValueOf,
    PickPartial,
    DeepPartial
  } from "./types";

  declare export default typeof MangoPay;

  declare class MangoPay {
    constructor(config: MangoPay$Config): this;
    config: MangoPay$Config;
    requestOptions: MangoPay$RequestOptions;
    MangoPay$Users: MangoPay$Users;
    MangoPay$BankAccounts: MangoPay$BankAccounts;
    MangoPay$BankingAliases: MangoPay$BankingAliases;
    MangoPay$DisputeDocuments: MangoPay$DisputeDocuments;
    MangoPay$Wallets: MangoPay$Wallets;
    MangoPay$KycDocuments: MangoPay$KycDocuments;
    MangoPay$UboDeclarations: MangoPay$UboDeclarations;
    MangoPay$Cards: MangoPay$Cards;
    MangoPay$CardRegistrations: MangoPay$CardRegistrations;
    MangoPay$CardPreAuthorizations: MangoPay$CardPreAuthorizations;
    MangoPay$PayIns: MangoPay$PayIns;
    MangoPay$Transfers: MangoPay$Transfers;
    MangoPay$PayOuts: MangoPay$PayOuts;
    MangoPay$Refunds: MangoPay$Refunds;
    MangoPay$Clients: MangoPay$Clients;
    MangoPay$Disputes: MangoPay$Disputes;
    MangoPay$Repudiations: MangoPay$Repudiations;
    MangoPay$Events: MangoPay$Events;
    MangoPay$Responses: MangoPay$Responses;
    MangoPay$Mandates: MangoPay$Mandates;
    MangoPay$Hooks: MangoPay$Hooks;
    MangoPay$Reports: MangoPay$Reports;
    MangoPay$models: typeof MangoPay$models;
    Log(...args: any[]): void;
    authorize(callback: (data: MangoPay$AuthorizationData) => void): void;
    authorize(): Promise<MangoPay$AuthorizationData>;
    buildRequestData(entity: any): any;
    canReadSubRequestData(entity: any, propertyName: any): boolean;
    isExpired(): boolean;
    method(
      method: ApiMethod,
      callback: (...args: any[]) => void,
      options: MangoPay$RequestOptions
    ): any;
  }

  declare var npm$namespace$MangoPay: {
    Users: typeof MangoPay$Users,
    KycDocuments: typeof MangoPay$KycDocuments,
    UboDeclarations: typeof MangoPay$UboDeclarations,
    BankAccounts: typeof MangoPay$BankAccounts,
    Wallets: typeof MangoPay$Wallets,
    Cards: typeof MangoPay$Cards,
    CardRegistrations: typeof MangoPay$CardRegistrations,
    CardPreAuthorizations: typeof MangoPay$CardPreAuthorizations,
    PayIns: typeof MangoPay$PayIns,
    Refunds: typeof MangoPay$Refunds,
    Clients: typeof MangoPay$Clients,
    PayOuts: typeof MangoPay$PayOuts,
    Transfers: typeof MangoPay$Transfers,
    BankingAliases: typeof MangoPay$BankingAliases,
    DisputeDocuments: typeof MangoPay$DisputeDocuments,
    Repudiations: typeof MangoPay$Repudiations,
    Disputes: typeof MangoPay$Disputes,
    Events: typeof MangoPay$Events,
    Responses: typeof MangoPay$Responses,
    Mandates: typeof MangoPay$Mandates,
    Hooks: typeof MangoPay$Hooks,
    Reports: typeof MangoPay$Reports,
    models: typeof npm$namespace$MangoPay$models
  };
  declare interface MangoPay$AuthorizationData {
    access_token: string;
    token_type: string;
    expires_in: number;
  }

  declare interface MangoPay$Headers {
    "Content-Type": string;
    "User-Agent": string;
    "Idempotency-Key": string;
    Authorization: string;
    [header: string]: string | void;
  }

  /**
   * A UTC timestamp in seconds
   */
  declare type MangoPay$Timestamp = number;

  declare type MangoPay$ColumnAndDirection = "ASC" | "DESC";

  declare type MangoPay$AVSResult =
    | "NO_CHECK"
    | "NO_MATCH"
    | "ADDRESS_MATCH_ONLY"
    | "POSTAL_CODE_MATCH_ONLY"
    | "FULL_MATCH";

  declare type MangoPay$SecureMode = "DEFAULT" | "FORCE";

  declare type MangoPay$PreAuthorizationExecutionType = "DIRECT";

  declare type MangoPay$PaymentStatus =
    | "WAITING"
    | "CANCELED"
    | "EXPIRED"
    | "VALIDATED";

  declare type MangoPay$PreAuthorizationStatus =
    | "CREATED"
    | "SUCCEEDED"
    | "FAILED";

  declare interface MangoPay$BillingData {
    Address: models$Address | address$AddressData | string;
  }

  declare interface MangoPay$SecurityInfoData {
    AVSResult: MangoPay$AVSResult;
  }

  declare interface MangoPay$MoneyData {
    /**
     * The currency - should be ISO_4217 format
     */
    Currency: CurrencyISO;

    /**
     * An amount of money in the smallest sub-division of the currency, e.g. 12.60 EUR would be represented as 1260 whereas 12 JPY would be represented as just 12)
     */
    Amount: number;
  }

  declare interface MangoPay$WithResponse<T> {
    statusCode: number;
    body: T;
    headers: MangoPay$Headers;
  }

  declare interface MangoPay$NoArgMethodOverload<R> {
    (
      options: MangoPay$MethodOptionWithResponse
    ): Promise<MangoPay$WithResponse<R>>;
    (options?: MangoPay$MethodOptionWithoutResponse): Promise<R>;
    (
      callback: (data: MangoPay$WithResponse<R>) => void,
      options?: MangoPay$MethodOptionWithResponse
    ): void;
    (
      callback: (data: R) => void,
      options?: MangoPay$MethodOptionWithoutResponse
    ): void;
  }

  declare interface MangoPay$MethodOverload<T, R> {
    (
      data: T,
      options: MangoPay$MethodOptionWithResponse
    ): Promise<MangoPay$WithResponse<R>>;
    (data: T, options?: MangoPay$MethodOptionWithoutResponse): Promise<R>;
    (
      data: T,
      callback: (data: MangoPay$WithResponse<R>) => void,
      options: MangoPay$MethodOptionWithResponse
    ): void;
    (
      data: T,
      callback: (data: R) => void,
      options?: MangoPay$MethodOptionWithoutResponse
    ): void;
  }

  declare interface MangoPay$TwoArgsMethodOverload<T, U, R> {
    (
      data: T,
      extra: U,
      options: MangoPay$MethodOptionWithResponse
    ): Promise<MangoPay$WithResponse<R>>;
    (
      data: T,
      extra: U,
      options?: MangoPay$MethodOptionWithoutResponse
    ): Promise<R>;
    (
      data: T,
      extra: U,
      callback: (data: MangoPay$WithResponse<R>) => void,
      options?: MangoPay$MethodOptionWithResponse
    ): void;
    (
      data: T,
      extra: U,
      callback: (data: R) => void,
      options?: MangoPay$MethodOptionWithoutResponse
    ): void;
  }

  declare interface MangoPay$ThreeArgsMethodOverload<T, U, V, R> {
    (
      data: T,
      extra: U,
      lastArg: V,
      options: MangoPay$MethodOptionWithResponse
    ): Promise<MangoPay$WithResponse<R>>;
    (
      data: T,
      extra: U,
      lastArg: V,
      options?: MangoPay$MethodOptionWithoutResponse
    ): Promise<R>;
    (
      data: T,
      extra: U,
      lastArg: V,
      callback: (data: MangoPay$WithResponse<R>) => void,
      options?: MangoPay$MethodOptionWithResponse
    ): void;
    (
      data: T,
      extra: U,
      lastArg: V,
      callback: (data: R) => void,
      options?: MangoPay$MethodOptionWithoutResponse
    ): void;
  }

  declare interface MangoPay$Config {
    /**
     * API Client Id
     */
    clientId: string;

    /**
     * API Client Api Key
     */
    clientApiKey: string;

    /**
     * API Base URL.The fault base value points to sandbox.
     * Production is 'https://api.mangopay.com'
     * @default "https://api.sandbox.mangopay.com"
     */
    baseUrl?: string;

    /**
     * Active debugging
     * @default false
     */
    debugMode?: boolean;

    /**
     * Log function to be used for debug
     * @default `console.log`
     */
    logClass?: (...args: any[]) => void;

    /**
     * Set the connection timeout limit(in milliseconds)
     * @default 30000
     */
    connectionTimeout?: number;

    /**
     * Set the response timeout limit(in milliseconds)
     * @default 80000
     */
    responseTimeout?: number;

    /**
     * API Version
     * @default 'v2.01'
     */
    apiVersion?: string;

    /**
     * Set a custom error handler
     * @default `console.error`
     */
    errorHandler?: (options: any, err: any) => void;
  }

  declare interface MangoPay$RequestOptions {
    requestConfig: {
      timeout: number
    };
    responseConfig: {
      timeout: number
    };

    /**
     * Path options are replacing the ${placeholders} from apiMethods
     */
    path: {
      clientId: string,
      apiVersion: string,
      +id: string
    };
    headers: $Shape<MangoPay$Headers>;
  }

  declare type MangoPay$WithToJson<T: { [key: string]: any }> = T & {
    toJSON(): any
  };

  declare interface MangoPay$ReadResponseHeaders {
    resolveWithFullResponse: true;
  }

  declare interface MangoPay$PaginationOptions {
    /**
     * The page number of results you wish to return
     * @default 1
     */
    Page?: number;

    /**
     * The number of results to return per page: Max 100;
     * @default 10
     */
    Per_Page?: number;
  }

  declare type MangoPay$FilterOptions = {
    /**
     * The column to sort against and direction - only CreationDate (or Date for the events) is available and ASC or DESC for the direction
     */
    Sort?: MangoPay$ColumnAndDirection,

    /**
     * To return only resources that have CreationDate BEFORE this date
     */
    BeforeDate?: MangoPay$Timestamp,

    /**
     * To return only resources that have CreationDate AFTER this date
     */
    AfterDate?: MangoPay$Timestamp
  } & Record<string, any>;

  declare type MangoPay$MethodOptions = {
    data?: MangoPay$WithToJson<{ [key: string]: any }> | string,
    parameters?: MangoPay$FilterOptions & MangoPay$PaginationOptions
  } & DeepPartial<MangoPay$RequestOptions>;

  declare type MangoPay$MethodOptionWithResponse = {
    resolveWithFullResponse: true
  } & MethodOptions;

  declare type MangoPay$MethodOptionWithoutResponse = {
    resolveWithFullResponse?: false
  } & MethodOptions;

  declare interface MangoPay$DependsObject {
    dependsPropertyName: string;
    propertyName: string;
    propertyValueMapping: Record<string, models$Model>;
  }

  declare interface MangoPay$ModelMethods<T: {}> {
    initialize(): void;

    /**
     * Returns object property value
     * @param attribute
     */
    getData<K: $Keys<T>>(attribute: K): $ElementType<T, K>;

    /**
     * @param attribute - attribute's value to be set or hash of properties with values
     * @param value - value to be set
     */
    setData<K: $Keys<T>>(attribute: K, value: $ElementType<T, K>): this;
    setData(attribute: $Shape<T>): this;
    getReadOnlyProperties(): Array<$Keys<T>>;
    getDependsObjects(): MangoPay$DependsObject[];
    parse(): void;
  }

  declare var npm$namespace$MangoPay$models: {
    PayInExecutionType: typeof MangoPay$models$PayInExecutionType,
    PayInPaymentType: typeof MangoPay$models$PayInPaymentType,
    MandateStatus: typeof MangoPay$models$MandateStatus,
    LegalPersonType: typeof MangoPay$models$LegalPersonType,
    PersonType: typeof MangoPay$models$PersonType,
    BankAccountType: typeof MangoPay$models$BankAccountType,
    DeclaredUboStatus: typeof MangoPay$models$DeclaredUboStatus,
    KycDocumentStatus: typeof MangoPay$models$KycDocumentStatus,
    KycDocumentType: typeof MangoPay$models$KycDocumentType,
    PayOutPaymentType: typeof MangoPay$models$PayOutPaymentType,
    PlatformType: typeof MangoPay$models$PlatformType,
    UboDeclarationRefusedReasonType: typeof MangoPay$models$UboDeclarationRefusedReasonType,
    UboDeclarationStatus: typeof MangoPay$models$UboDeclarationStatus,
    UboRefusedReasonType: typeof MangoPay$models$UboRefusedReasonType,
    UserNaturalCapacity: typeof MangoPay$models$UserNaturalCapacity,

    DeclaredUbo: typeof MangoPay$models$DeclaredUbo,
    Model: typeof MangoPay$models$Model,
    EntityBase: typeof MangoPay$models$EntityBase,
    Money: typeof MangoPay$models$Money,
    Billing: typeof MangoPay$models$Billing,
    BankingAliasIBAN: typeof MangoPay$models$BankingAliasIBAN,
    BankAccountDetails: typeof MangoPay$models$BankAccountDetails,
    ClientWallet: typeof MangoPay$models$ClientWallet,
    Wallet: typeof MangoPay$models$Wallet,
    Document: typeof MangoPay$models$Document,
    SecurityInfo: typeof MangoPay$models$SecurityInfo,
    PayInPaymentDetails: typeof MangoPay$models$PayInPaymentDetails,
    PayInExecutionDetails: typeof MangoPay$models$PayInExecutionDetails,
    PayInExecutionDetailsDirect: typeof MangoPay$models$PayInExecutionDetailsDirect,
    PayInExecutionDetailsWeb: typeof MangoPay$models$PayInExecutionDetailsWeb,
    PayInPaymentDetailsBankWire: typeof MangoPay$models$PayInPaymentDetailsBankWire,
    PayInPaymentDetailsBankingAlias: typeof MangoPay$models$PayInPaymentDetailsBankingAlias,
    PayInPaymentDetailsCard: typeof MangoPay$models$PayInPaymentDetailsCard,
    PayInPaymentDetailsCardDirect: typeof MangoPay$models$PayInPaymentDetailsCardDirect,
    PayInPaymentDetailsCardWeb: typeof MangoPay$models$PayInPaymentDetailsCardWeb,
    PayInPaymentDetailsDirectDebitDirect: typeof MangoPay$models$PayInPaymentDetailsDirectDebitDirect,
    PayInPaymentDetailsDirectDebitWeb: typeof MangoPay$models$PayInPaymentDetailsDirectDebitWeb,
    PayInPaymentDetailsPayPal: typeof MangoPay$models$PayInPaymentDetailsPayPal,
    PayInPaymentDetailsPreAuthorized: typeof MangoPay$models$PayInPaymentDetailsPreAuthorized,
    PayInTemplateURLOptions: typeof MangoPay$models$PayInTemplateURLOptions,
    Refund: typeof MangoPay$models$Refund,
    RefundReasonDetails: typeof MangoPay$models$RefundReasonDetails,
    PlatformCategorization: typeof MangoPay$models$PlatformCategorization,
    DisputeReason: typeof MangoPay$models$DisputeReason,
    PayOut: typeof MangoPay$models$PayOut,
    PayOutPaymentDetails: typeof MangoPay$models$PayOutPaymentDetails,
    PayOutPaymentDetailsBankWire: typeof MangoPay$models$PayOutPaymentDetailsBankWire,
    ReportFilter: typeof MangoPay$models$ReportFilter
  };
  declare var MangoPay$models$PayInExecutionType: MangoPay$IPayInExecutionType;

  declare var MangoPay$models$PayInPaymentType: MangoPay$IPayInPaymentType;

  declare var MangoPay$models$MandateStatus: MangoPay$IMandateStatus;

  declare var MangoPay$models$LegalPersonType: MangoPay$ILegalPersonType;

  declare var MangoPay$models$PersonType: MangoPay$IPersonType;

  declare var MangoPay$models$BankAccountType: MangoPay$IBankAccountType;

  declare var MangoPay$models$DeclaredUboStatus: MangoPay$IDeclaredUboStatus;

  declare var MangoPay$models$KycDocumentStatus: MangoPay$IKycDocumentStatus;

  declare var MangoPay$models$KycDocumentType: MangoPay$IKycDocumentType;

  declare var MangoPay$models$PayOutPaymentType: MangoPay$IPayOutPaymentType;

  declare var MangoPay$models$PlatformType: MangoPay$IPlatformType;

  declare var MangoPay$models$UboDeclarationRefusedReasonType: MangoPay$IUboDeclarationRefusedReasonType;

  declare var MangoPay$models$UboDeclarationStatus: MangoPay$IUboDeclarationStatus;

  declare var MangoPay$models$UboRefusedReasonType: MangoPay$IUboRefusedReasonType;

  declare var MangoPay$models$UserNaturalCapacity: MangoPay$IUserNaturalCapacity;

  declare class MangoPay$models$DeclaredUbo
    mixins Model<uboDeclaration$UboDeclarationData> {
    constructor(data: $Shape<uboDeclaration$UboDeclarationData>): this;
  }

  declare class MangoPay$models$Model<T = any> mixins ModelMethods<T> {
    initialize(): void;
    getData<K: $Keys<T>>(attribute: K): $ElementType<T, K>;
    setData<K: $Keys<T>>(attribute: K, value: $ElementType<T, K>): this;
    setData(attribute: $Shape<T>): this;
    setData(attribute: any, value?: any): this;
    getReadOnlyProperties(): Array<$Keys<T>>;
    getDependsObjects(): MangoPay$DependsObject[];
    parse(): void;
    constructor(data: T): this;
  }

  declare class MangoPay$models$EntityBase<T = any> mixins Model<T> {
    initialize(): void;

    /**
     * Returns object property value
     */
    getData<K: $Keys<T>>(attribute: K): $ElementType<T, K>;

    /**
     * @param attribute - attribute's value to be set or hash of properties with values
     * @param value - value to be set
     */
    setData<K: $Keys<T>>(attribute: K, value: $ElementType<T, K>): this;
    setData(attribute: $Shape<T>): this;
    getReadOnlyProperties(): Array<$Keys<T>>;
    getDependsObjects(): MangoPay$DependsObject[];
    parse(): void;
    toJSON(): any;
  }

  declare class MangoPay$models$Money mixins EntityBase<MangoPay$MoneyData> {
    constructor(data: MangoPay$MoneyData): this;
  }

  declare class MangoPay$models$Billing
    mixins EntityBase<MangoPay$BillingData> {
    constructor(data: MangoPay$BillingData): this;
  }

  declare type MangoPay$models$Address = {} & address$AddressData;

  declare type MangoPay$models$BankingAlias = {} & bankingAlias$IBANBankingAliasData;

  declare class MangoPay$models$BankingAliasIBAN mixins BankingAlias {}

  declare type MangoPay$models$BankAccount = {} & bankAccount$DataIntersection;

  declare class MangoPay$models$BankAccountDetails {
    constructor(data: any): this;
  }

  declare type MangoPay$models$BankAccountDetailsCA = {} & bankAccount$CADetails;

  declare type MangoPay$models$BankAccountDetailsOther = {} & bankAccount$OtherDetails;

  declare type MangoPay$models$BankAccountDetailsGB = {} & bankAccount$GBDetails;

  declare type MangoPay$models$BankAccountDetailsIBAN = {} & bankAccount$IBANDetails;

  declare type MangoPay$models$BankAccountDetailsUS = {} & bankAccount$USDetails;

  declare type MangoPay$models$Transaction = {} & transaction$TransactionData;

  declare class MangoPay$models$ClientWallet
    mixins EntityBase<wallet$WalletData> {}

  declare class MangoPay$models$Wallet mixins EntityBase<wallet$WalletData> {
    constructor(data: wallet$CreateWallet | wallet$UpdateWallet): this;
  }

  declare type MangoPay$models$DocumentPageConsult = {
    /**
     * URL where this document page can be viewed.
     */
    Url: string,

    /**
     * Time in millis when the page consult will expire.
     */
    ExpirationDate: MangoPay$Timestamp
  } & disputeDocument$DocumentPageConsult;

  declare class MangoPay$models$Document mixins EntityBase {
    constructor(data: any): this;
  }

  declare type MangoPay$models$DisputeDocument = {} & disputeDocument$DisputeDocumentData;

  declare type MangoPay$models$DisputeDocumentPage = {} & disputeDocument$CreateDisputeDocumentPage;

  declare type MangoPay$models$KycDocument = {} & kycDocument$KycDocumentData;

  declare type MangoPay$models$KycPage = {} & kycDocument$CreateKycPage;

  declare type MangoPay$models$EMoney = {} & eMoney$EMoneyData;

  declare type MangoPay$models$UboDeclaration = {} & uboDeclaration$UboDeclarationData;

  declare type MangoPay$models$CardRegistration = {} & cardRegistration$CardRegistrationData;

  declare type MangoPay$models$Card = {} & card$CardData;

  declare type MangoPay$models$CardPreAuthorization = {} & cardPreAuthorization$CardPreAuthorizationData;

  declare class MangoPay$models$SecurityInfo
    mixins EntityBase<
        MangoPay$models$SecurityInfo & entityBase$EntityBaseData
      > {
    constructor(data: MangoPay$models$SecurityInfo): this;
  }

  declare type MangoPay$models$UserLegal = {} & user$UserLegalData;

  declare type MangoPay$models$UserNatural = {} & user$UserNaturalData;

  declare type MangoPay$models$User = {} & user$UserData;

  declare type MangoPay$models$PayIn = {} & payIn$BasePayInData;

  declare class MangoPay$models$PayInPaymentDetails mixins EntityBase {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInExecutionDetails mixins EntityBase {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInExecutionDetailsDirect
    mixins PayInExecutionDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInExecutionDetailsWeb
    mixins PayInExecutionDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsBankWire
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsBankingAlias
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsCard
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsCardDirect
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsCardWeb
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsDirectDebitDirect
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsDirectDebitWeb
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsPayPal
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInPaymentDetailsPreAuthorized
    mixins PayInPaymentDetails {
    constructor(data: any): this;
  }

  declare class MangoPay$models$PayInTemplateURLOptions mixins EntityBase {
    constructor(data: any): this;
  }

  declare class MangoPay$models$Refund mixins EntityBase<refund$RefundData> {
    constructor(
      data: refund$CreatePayInRefund | refund$CreateTransferRefund
    ): this;
  }

  declare class MangoPay$models$RefundReasonDetails mixins EntityBase {
    constructor(data: any): this;
  }

  declare type MangoPay$models$Repudiation = {} & repudiation$RepudiationData;

  declare type MangoPay$models$Client = {} & client$ClientData;

  declare class MangoPay$models$PlatformCategorization
    mixins EntityBase<client$PlatformCategorization> {
    constructor(data: client$PlatformCategorization): this;
  }

  declare type MangoPay$models$Dispute = {} & dispute$DisputeData;

  declare class MangoPay$models$DisputeReason mixins Model {
    constructor(data: any): this;
  }

  declare type MangoPay$models$SettlementTransfer = {} & settlementTransfer$SettlementTransferData;

  declare type MangoPay$models$Transfer = {} & transfer$TransferData;

  declare class MangoPay$models$PayOut mixins EntityBase<PayOut$PayOutData> {
    constructor(data: $Shape<PayOut$CreatePayOut>): this;
  }

  declare class MangoPay$models$PayOutPaymentDetails mixins EntityBase {
    constructor(data?: any): this;
  }

  declare class MangoPay$models$PayOutPaymentDetailsBankWire
    mixins PayOutPaymentDetails {
    constructor(data?: any): this;
  }

  declare type MangoPay$models$Mandate = {} & mandate$MandateData;

  declare type MangoPay$models$Hook = {} & hook$HookData;

  declare type MangoPay$models$Report = {} & report$ReportData;

  declare class MangoPay$models$ReportFilter mixins Model<report$Filters> {
    constructor(data?: $Shape<report$Filters>): this;
  }

  declare interface MangoPay$IPayInExecutionType {
    Direct: "DIRECT";
    Web: "WEB";
  }

  declare interface MangoPay$IPayInPaymentType {
    BankWire: "BANK_WIRE";
    Card: "CARD";
    DirectDebit: "DIRECT_DEBIT";
    Preauthorized: "PREAUTHORIZED";
    PayPal: "PAYPAL";
  }

  declare interface MangoPay$IMandateStatus {
    Created: "CREATED";
    Submitted: "SUBMITTED";
    Active: "ACTIVE";
    Failed: "FAILED";
  }

  declare interface MangoPay$ILegalPersonType {
    NotSpecified: "NotSpecified";
    Business: "BUSINESS";
    Organization: "ORGANIZATION";
    Soletrader: "SOLETRADER";
  }

  declare interface MangoPay$IPersonType {
    NotSpecified: "NotSpecified";
    Natural: "NATURAL";
    Legal: "LEGAL";
  }

  declare interface MangoPay$IBankAccountType {
    NotSpecified: "NotSpecified";
    IBAN: "IBAN";
    GB: "GB";
    US: "US";
    CA: "CA";
    OTHER: "OTHER";
  }

  declare interface MangoPay$IDeclaredUboStatus {
    Created: "CREATED";
    Validated: "VALIDATED";
    Refused: "REFUSED";
  }

  declare interface MangoPay$IKycDocumentStatus {
    Created: "CREATED";
    ValidationAsked: "VALIDATION_ASKED";
    Validated: "VALIDATED";
    Refused: "REFUSED";
  }

  declare interface MangoPay$IKycDocumentType {
    IdentityProof: "IDENTITY_PROOF";
    RegistrationProof: "REGISTRATION_PROOF";
    ArticlesOfAssociation: "ARTICLES_OF_ASSOCIATION";
    ShareholderDeclaration: "SHAREHOLDER_DECLARATION";
    AddressProof: "ADDRESS_PROOF";
  }

  declare interface MangoPay$IPayOutPaymentType {
    BankWire: "BANK_WIRE";
  }

  declare interface MangoPay$IPlatformType {
    NotSpecified: "NotSpecified";
    MARKETPLACE: "MARKETPLACE";
    P2P_PAYMENT: "P2P_PAYMENT";
    CROWDFUNDING_DONATION: "CROWDFUNDING_DONATION";
    CROWDFUNDING_REWARD: "CROWDFUNDING_REWARD";
    CROWDFUNDING_EQUITY: "CROWDFUNDING_EQUITY";
    CROWDFUNDING_LOAN: "CROWDFUNDING_LOAN";
    OTHER: "OTHER";
  }

  declare interface MangoPay$IUboDeclarationRefusedReasonType {
    /**
     * When at least one natural user is missing on the declaration
     */
    MissingUbo: "MISSING_UBO";

    /**
     * When at least one natural user should not be declared as UBO
     */
    InvalidDeclaredUbo: "INVALID_DECLARED_UBO";

    /**
     * When at least one natural user declared as UBO has been created
     * with wrong details (i.e. date of birth, country of residence)
     */
    InvalidUboDetails: "INVALID_UBO_DETAILS";
  }

  declare interface MangoPay$IUboDeclarationStatus {
    /**
     * When the UBO declaration was created
     */
    Created: "CREATED";

    /**
     * When validation has been requested for the UBO declaration
     */
    ValidationAsked: "VALIDATION_ASKED";

    /**
     * When the UBO declaration was validated
     */
    Validated: "VALIDATED";

    /**
     * When the UBO declaration was refused
     */
    Refused: "REFUSED";
  }

  declare interface MangoPay$IUboRefusedReasonType {
    /**
     * When user should not be declared as UBO
     */
    InvalidDeclaredUbo: "INVALID_DECLARED_UBO";

    /**
     * When user declared as UBO was created with wrong
     * details (i.e. date of birth, country of residence)
     */
    InvalidUboDetails: "INVALID_UBO_DETAILS";
  }

  declare interface MangoPay$IUserNaturalCapacity {
    /**
     * Real customer
     */
    Normal: "NORMAL";

    /**
     * User used only for declaration purpose
     */
    Declarative: "DECLARATIVE";
  }

  declare interface MangoPay$entityBase$EntityBaseData {
    Id: string;
    Tag: string;
    CreationDate: number;
  }

  declare interface MangoPay$address$AddressData {
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    Region: string;
    PostalCode: string;
    Country: string;
  }

  declare type MangoPay$address$AddressType =
    | string
    | MangoPay$address$AddressData
    | models$Address;

  declare type MangoPay$bankingAlias$BankingAliasType = "IBAN";

  declare type MangoPay$bankingAlias$BankingAliasData = {
    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId: string,

    /**
     * The ID of a wallet
     */
    WalletId: string,

    /**
     * The Country of the Address
     */
    Country: CountryISO,

    /**
     * The type of banking alias (note that only IBAN is available at present)
     */
    Type: MangoPay$bankingAlias$BankingAliasType,

    /**
     * The owner of the wallet/banking alias
     */
    OwnerName: string,

    /**
     * Whether the banking alias is active or not
     */
    Active: boolean
  } & entityBase$EntityBaseData;

  declare type MangoPay$bankingAlias$IBANBankingAliasData = {
    /**
     * The type of banking alias (note that only IBAN is available at present)
     */
    Type: "IBAN",

    /**
     * The IBAN of the banking alias
     */
    IBAN: string,

    /**
     * The BIC of the banking alias
     */
    BIC: string
  } & BankingAliasData;

  declare type MangoPay$bankingAlias$CreateIBANBankingAlias = {} & PickPartialRequired<
    MangoPay$bankingAlias$IBANBankingAliasData,
    "Tag" | "CreditedUserId",
    "OwnerName" | "Country"
  >;

  declare type MangoPay$bankAccount$BankAccountType =
    | "IBAN"
    | "GB"
    | "US"
    | "CA"
    | "OTHER";

  declare type MangoPay$bankAccount$DepositAccountType = "CHECKING" | "SAVINGS";

  declare type MangoPay$bankAccount$BaseData = {
    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The type of bank account
     */
    Type: MangoPay$bankAccount$BankAccountType,

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string,

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType,

    /**
     * @deprecated
     */
    Details?: models$BankAccountDetails,

    /**
     * Whether the bank account is active or not
     */
    Active: boolean
  } & entityBase$EntityBaseData;

  declare interface MangoPay$bankAccount$IBANDetails {
    Type: "IBAN";

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The IBAN of the bank account
     */
    IBAN: string;

    /**
     * The BIC of the bank account
     */
    BIC?: string;
  }

  declare type MangoPay$bankAccount$IBANData = MangoPay$bankAccount$BaseData &
    MangoPay$bankAccount$IBANDetails;

  declare interface MangoPay$bankAccount$USDetails {
    Type: "US";

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The account number of the bank account. US account numbers must be digits only.
     */
    AccountNumber: string;

    /**
     * The ABA of the bank account. Must be numbers only, and 9 digits long
     */
    ABA: string;

    /**
     * The type of account
     */
    DepositAccountType?: MangoPay$bankAccount$DepositAccountType;
  }

  declare type MangoPay$bankAccount$USData = MangoPay$bankAccount$BaseData &
    MangoPay$bankAccount$USDetails;

  declare interface MangoPay$bankAccount$CADetails {
    Type: "CA";

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The branch code of the bank where the bank account. Must be numbers only, and 5 digits long
     */
    BranchCode: string;

    /**
     * The institution number of the bank account. Must be numbers only, and 3 or 4 digits long
     */
    InstitutionNumber: string;

    /**
     * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
     */
    AccountNumber: string;

    /**
     * The name of the bank where the account is held. Must be letters or numbers only and maximum 50 characters long.
     */
    BankName: string;
  }

  declare type MangoPay$bankAccount$CAData = MangoPay$bankAccount$BaseData &
    MangoPay$bankAccount$CADetails;

  declare interface MangoPay$bankAccount$GBDetails {
    Type: "GB";

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The sort code of the bank account. Must be numbers only, and 6 digits long
     */
    SortCode: string;

    /**
     * The account number of the bank account. Must be numbers only. GB account numbers must be 8 digits long.
     */
    AccountNumber: string;
  }

  declare type MangoPay$bankAccount$GBData = MangoPay$bankAccount$BaseData &
    MangoPay$bankAccount$GBDetails;

  declare interface MangoPay$bankAccount$OtherDetails {
    Type: "OTHER";

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: address$AddressType;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The Country of the Address
     */
    Country: string;

    /**
     * The BIC of the bank account
     */
    BIC: string;

    /**
     * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
     */
    AccountNumber: string;
  }

  declare type MangoPay$bankAccount$OtherData = MangoPay$bankAccount$BaseData &
    MangoPay$bankAccount$OtherDetails;

  declare type MangoPay$bankAccount$Data =
    | MangoPay$bankAccount$OtherData
    | MangoPay$bankAccount$CAData
    | MangoPay$bankAccount$GBData
    | MangoPay$bankAccount$IBANData
    | MangoPay$bankAccount$USData;

  declare type MangoPay$bankAccount$DataIntersection = MangoPay$bankAccount$OtherData &
    MangoPay$bankAccount$CAData &
    MangoPay$bankAccount$GBData &
    MangoPay$bankAccount$IBANData &
    MangoPay$bankAccount$USData;

  declare type MangoPay$bankAccount$CreationDetails =
    | MangoPay$bankAccount$OtherDetails
    | MangoPay$bankAccount$CADetails
    | MangoPay$bankAccount$GBDetails
    | MangoPay$bankAccount$IBANDetails
    | MangoPay$bankAccount$USDetails;

  declare type MangoPay$transaction$TransactionNature =
    | "REGULAR"
    | "REPUDIATION"
    | "REFUND"
    | "SETTLEMENT";

  declare type MangoPay$transaction$TransactionType =
    | "PAYIN"
    | "TRANSFER"
    | "PAYOUT";

  declare type MangoPay$transaction$TransactionStatus =
    | "CREATED"
    | "SUCCEEDED"
    | "FAILED";

  declare type MangoPay$transaction$TransactionData = {
    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData,

    /**
     * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
     */
    CreditedFunds: MangoPay$MoneyData,

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData,

    /**
     * The ID of the wallet that was debited
     */
    DebitedWalletId: string,

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string,

    /**
     * A user's ID
     */
    AuthorId: string,

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId: string,

    /**
     * The nature of the transaction
     */
    Nature: MangoPay$transaction$TransactionNature,

    /**
     * The status of the transaction
     */
    Status: MangoPay$transaction$TransactionStatus,

    /**
     * When the transaction happened
     */
    ExecutionDate: MangoPay$Timestamp,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * The type of the transaction
     */
    Type: MangoPay$transaction$TransactionType
  } & entityBase$EntityBaseData;

  declare type MangoPay$wallet$ClientFundsType = "FEES" | "CREDIT";

  declare type MangoPay$wallet$FundsType =
    | "DEFAULT"
    | MangoPay$wallet$ClientFundsType;

  declare type MangoPay$wallet$WalletData = {
    /**
     * An array of userIDs of who own's the wallet. For now, you only can set up a unique owner.
     */
    Owners: [string],

    /**
     * The current balance of the wallet
     */
    Balance: MangoPay$MoneyData,

    /**
     * The type of funds in the wallet
     */
    FundsType: MangoPay$wallet$FundsType,

    /**
     * A desciption of the wallet
     */
    Description: string,

    /**
     * The currency - should be ISO_4217 format
     */
    Currency: CurrencyISO
  } & entityBase$EntityBaseData;

  declare type MangoPay$wallet$ClientWalletData = {
    FundsType: MangoPay$wallet$ClientFundsType
  } & Omit<MangoPay$wallet$WalletData, "Owners" | "Description">;

  declare type MangoPay$wallet$CreateWallet = wallet$UpdateWallet &
    Pick<MangoPay$wallet$WalletData, "Owners" | "Currency" | "Description">;

  declare type MangoPay$wallet$UpdateWallet = PickPartial<
    MangoPay$wallet$WalletData,
    "Tag" | "Description"
  >;

  declare type MangoPay$disputeDocument$DisputeDocumentType =
    | "DELIVERY_PROOF"
    | "INVOICE"
    | "REFUND_PROOF"
    | "USER_CORRESPONDANCE"
    | "USER_ACCEPTANCE_PROOF"
    | "PRODUCT_REPLACEMENT_PROOF"
    | "OTHER";

  declare type MangoPay$disputeDocument$DocumentStatus =
    | "CREATED"
    | "VALIDATION_ASKED"
    | "VALIDATED"
    | "REFUSED";

  declare type MangoPay$disputeDocument$RefusedReasonType =
    | "DOCUMENT_UNREADABLE"
    | "DOCUMENT_NOT_ACCEPTED"
    | "DOCUMENT_HAS_EXPIRED"
    | "DOCUMENT_INCOMPLETE"
    | "DOCUMENT_MISSING"
    | "SPECIFIC_CASE"
    | "DOCUMENT_FALSIFIED"
    | "OTHER";

  declare type MangoPay$disputeDocument$DisputeDocumentData = {
    /**
     * Gives the type of the KYC document
     */
    Type: MangoPay$disputeDocument$DisputeDocumentType,

    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The Id of a Dispute
     */
    DisputeId: string,

    /**
     * The status of this KYC/Dispute document
     */
    Status: MangoPay$disputeDocument$DocumentStatus,

    /**
     * The message accompanying a refusal
     */
    RefusedReasonMessage: string,

    /**
     * The type of reason for refusal
     */
    RefusedReasonType: MangoPay$disputeDocument$RefusedReasonType,

    /**
     * The date when the document was processed by MANGOPAY
     */
    ProcessedDate: MangoPay$Timestamp
  } & entityBase$EntityBaseData;

  declare interface MangoPay$disputeDocument$CreateDisputeDocument {
    /**
     * Gives the type of the KYC document
     */
    Type: MangoPay$disputeDocument$DisputeDocumentType;
    Tag?: string;
  }

  declare interface MangoPay$disputeDocument$SubmitDisputeDocument {
    /**
     * The status of this KYC/Dispute document
     */
    Status: "VALIDATION_ASKED";
    Tag?: string;
  }

  /**
   * - Documents have to be in "CREATED" Status
   * - You can create as many pages as needed
   *
   * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
   * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
   */
  declare interface MangoPay$disputeDocument$CreateDisputeDocumentPage {
    /**
     * The base64 encoded file which needs to be uploaded
     *
     * You need to fill in only the binary code. Do not send the first part that some converters add into the binary code which is
     * `<img src=" data:image/png;base64..." />`
     *
     * e.g.
     * ```json
     *        * {
     *        *   "File": "/9j/4AAQSkZJRgABAQEBLAEsAAD/.../wgARCAAyADIDAREAAhEBAxEB/8QAGwAAAgMBAQEA"
     *        * }
     *        * ```
     */
    File: string;
  }

  declare type MangoPay$disputeDocument$DocumentPageConsult = {
    /**
     * URL where this document page can be viewed.
     */
    Url: string,

    /**
     * Time in millis when the page consult will expire.
     */
    ExpirationDate: MangoPay$Timestamp
  } & disputeDocument$DocumentPageConsult;

  declare type MangoPay$kycDocument$KycDocumentType =
    | "IDENTITY_PROOF"
    | "REGISTRATION_PROOF"
    | "ARTICLES_OF_ASSOCIATION"
    | "SHAREHOLDER_DECLARATION"
    | "ADDRESS_PROOF";

  declare type MangoPay$kycDocument$DocumentStatus =
    | "CREATED"
    | "VALIDATION_ASKED"
    | "VALIDATED"
    | "REFUSED";

  declare type MangoPay$kycDocument$KYCDocumentRefusedReasonType =
    | "DOCUMENT_UNREADABLE"
    | "DOCUMENT_NOT_ACCEPTED"
    | "DOCUMENT_HAS_EXPIRED"
    | "DOCUMENT_INCOMPLETE"
    | "DOCUMENT_MISSING"
    | "DOCUMENT_DO_NOT_MATCH_USER_DATA"
    | "DOCUMENT_DO_NOT_MATCH_ACCOUNT_DATA"
    | "SPECIFIC_CASE"
    | "DOCUMENT_FALSIFIED"
    | "UNDERAGE_PERSON"
    | "SPECIFIC_CASE";

  declare type MangoPay$kycDocument$KycDocumentData = {
    /**
     * Gives the type of the KYC document
     */
    Type: MangoPay$kycDocument$KycDocumentType,

    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The status of this KYC/Dispute document
     */
    Status: MangoPay$kycDocument$DocumentStatus,

    /**
     * The message accompanying a refusal
     */
    RefusedReasonMessage: string,

    /**
     * The type of reason for refusal
     */
    RefusedReasonType: MangoPay$kycDocument$KYCDocumentRefusedReasonType,

    /**
     * The date when the document was processed by MANGOPAY
     */
    ProcessedDate: MangoPay$Timestamp
  } & entityBase$EntityBaseData;

  declare interface MangoPay$kycDocument$CreateKycDocument {
    /**
     * Gives the type of the KYC document
     */
    Type: MangoPay$kycDocument$KycDocumentType;
    Tag?: string;

    /**
     * Gives the type of the KYC document
     */
    Type: MangoPay$kycDocument$KycDocumentType;
    Tag?: string;
  }

  declare interface MangoPay$kycDocument$SubmitKycDocument {
    /**
     * The status of this KYC/Dispute document
     */
    Status: "VALIDATION_ASKED";
    Tag?: string;
  }

  /**
   * - Documents have to be in "CREATED" Status
   * - You can create as many pages as needed
   *
   * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
   * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
   */
  declare interface MangoPay$kycDocument$CreateKycPage {
    /**
     * The base64 encoded file which needs to be uploaded
     *
     * You need to fill in only the binary code. Do not send the first part that some converters add into the binary code which is
     * `<img src=" data:image/png;base64..." />`
     *
     * e.g.
     * ```json
     *        * {
     *        *   "File": "/9j/4AAQSkZJRgABAQEBLAEsAAD/.../wgARCAAyADIDAREAAhEBAxEB/8QAGwAAAgMBAQEA"
     *        * }
     *        * ```
     */
    File: string;
  }

  declare type MangoPay$eMoney$EMoneyData = {
    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The amount of money that has been credited to this user
     */
    CreditedEMoney: MangoPay$MoneyData,

    /**
     * The amount of money that has been debited from this user
     */
    DebitedEMoney: MangoPay$MoneyData
  } & entityBase$EntityBaseData;

  declare type MangoPay$uboDeclaration$UboDeclarationData = {
    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * Status of a UBO Declaration
     */
    Status: kycDocument$DocumentStatus,

    /**
     * Reason types for a UBO Declaration
     */
    RefusedReasonTypes: string[],

    /**
     * Refused Reason Message for a UBO Declaration
     */
    RefusedReasonMessage: string,

    /**
     * An array of UserIDs declared as Ultimate Beneficial Owners of a BUSINESS Legal User.
     */
    DeclaredUBOs: string[]
  } & entityBase$EntityBaseData;

  declare interface MangoPay$uboDeclaration$CreateUboDeclaration {
    DeclaredUBOs?: string[];
  }

  declare interface MangoPay$uboDeclaration$UpdateUboDeclaration {
    Id: string;
    Tag?: string;
    Status?: "VALIDATION_ASKED";

    /**
     * An array of UserIDs declared as Ultimate Beneficial Owners of a BUSINESS Legal User.
     */
    DeclaredUBOs?: string[];
  }

  declare type MangoPay$cardRegistration$CardRegistrationData = {
    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The currency - should be ISO_4217 format
     */
    Currency: CurrencyISO,

    /**
     * A special key to use when registering a card
     */
    AccessKey: string,

    /**
     * A specific value to pass to the CardRegistrationURL
     */
    PreregistrationData: string,

    /**
     * The URL to submit the card details form to
     */
    CardRegistrationURL: string,

    /**
     * Having registered a card, this confirmation hash needs to be updated to the card item
     */
    RegistrationData: string,

    /**
     * The type of card
     */
    CardType: card$CardType,

    /**
     * The ID of a card
     */
    CardId: string,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * Status of the card registration
     */
    Status: card$CardStatus
  } & entityBase$EntityBaseData;

  declare type MangoPay$cardRegistration$CreateCardRegistration = {} & PickPartialRequired<
    MangoPay$cardRegistration$CardRegistrationData,
    "CardType" | "Tag",
    "UserId" | "Currency"
  >;

  declare type MangoPay$cardRegistration$UpdateCardRegistration = PickPartial<
    MangoPay$cardRegistration$CardRegistrationData,
    "Tag" | "RegistrationData"
  >;

  declare type MangoPay$card$CardType =
    | "CB_VISA_MASTERCARD"
    | "DINERS"
    | "MASTERPASS"
    | "MAESTRO"
    | "P24"
    | "IDEAL"
    | "BCMC"
    | "PAYLIB";

  declare type MangoPay$card$CardStatus = "CREATED" | "VALIDATED" | "ERROR";

  declare type MangoPay$card$CardValidity = "UNKNOWN" | "VALID" | "INVALID";

  declare type MangoPay$card$CardData = {
    /**
     * The expiry date of the card - must be in format MMYY
     */
    ExpirationDate: string,

    /**
     * A partially obfuscated version of the credit card number
     */
    Alias: string,

    /**
     * The provider of the card
     */
    CardProvider: string,

    /**
     * The type of card
     */
    CardType: MangoPay$card$CardType,

    /**
     * The Country of the Address
     */
    Country: string,

    /**
     * The card product type - more info
     */
    Product: string,

    /**
     * The bank code
     */
    BankCode: string,

    /**
     * Whether the card is active or not
     */
    Active: boolean,

    /**
     * The currency - should be ISO_4217 format
     */
    Currency: CurrencyISO,

    /**
     * Whether the card is valid or not. Once they process (or attempt to process) a payment with the card we are able to indicate if it is "valid" or "invalid".
     * If they didn’t process a payment yet the "Validity" stay at "unknown".
     */
    Validity: MangoPay$card$CardValidity,

    /**
     * A unique representation of a 16-digits card number
     */
    Fingerprint: string
  } & entityBase$EntityBaseData;

  declare interface MangoPay$card$UpdateCard {
    Id: string;
    Active?: false;
  }

  declare type MangoPay$cardPreAuthorization$CardPreAuthorizationData = {
    /**
     * A user's ID
     */
    AuthorId: string,

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData,

    /**
     * Status of the PreAuthorization
     */
    Status: MangoPay$PreAuthorizationStatus,

    /**
     * The status of the payment after the PreAuthorization. You can pass the PaymentStatus from "WAITING" to "CANCELED" should you need/want to
     */
    PaymentStatus: MangoPay$PaymentStatus,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * How the PreAuthorization has been executed
     */
    ExecutionType: MangoPay$PreAuthorizationExecutionType,

    /**
     * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually.
     * The field lets you activate it automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ),
     * "FORCE" (if you wish to specifically force the secured mode).
     */
    SecureMode: MangoPay$SecureMode,

    /**
     * The ID of a card
     */
    CardId: string,

    /**
     * The value is 'true' if the SecureMode was used
     */
    SecureModeNeeded: boolean,

    /**
     * This is the URL where to redirect users to proceed to 3D secure validation
     */
    SecureModeRedirectUrl: string,

    /**
     * This is the URL where users are automatically redirected after 3D secure validation (if activated)
     */
    SecureModeReturnURL: string,

    /**
     * The date when the payment is to be processed by
     */
    ExpirationDate: MangoPay$Timestamp,

    /**
     * The Id of the associated PayIn
     */
    PayInId: string,

    /**
     * Contains useful information related to the user billing
     */
    Billing: MangoPay$BillingData,

    /**
     * Contains useful information related to security and fraud
     */
    SecurityInfo: MangoPay$SecurityInfoData
  } & entityBase$EntityBaseData;

  declare type MangoPay$cardPreAuthorization$CreateCardPreAuthorization = PickPartialRequired<
    MangoPay$cardPreAuthorization$CardPreAuthorizationData,
    "Tag" | "Billing" | "SecureMode",
    "AuthorId" | "DebitedFunds" | "CardId" | "SecureModeReturnURL"
  >;

  declare type MangoPay$cardPreAuthorization$UpdateCardPreAuthorization = PickPartialRequired<
    MangoPay$cardPreAuthorization$CardPreAuthorizationData,
    "Tag",
    "PaymentStatus" | "Id"
  >;

  declare type MangoPay$hook$HookValidity = "UNKNOWN" | "VALID" | "INVALID";

  declare type MangoPay$hook$HookStatus = "DISABLED" | "ENABLED";

  declare type MangoPay$hook$HookData = {
    /**
     * This is the URL where your receive notification for each EventType
     */
    Url: string,

    /**
     * Whether the hook is enabled or not
     */
    Status: MangoPay$hook$HookStatus,

    /**
     * Whether the hook is valid or not
     */
    Validity: MangoPay$hook$HookValidity,

    /**
     * The event type
     */
    EventType: event$EventType
  } & entityBase$EntityBaseData;

  declare type MangoPay$hook$CreateHook = {} & PickPartialRequired<
    MangoPay$hook$HookData,
    "Tag",
    "EventType" | "Url"
  >;

  declare type MangoPay$hook$UpdateHook = {} & PickPartialRequired<
    MangoPay$hook$HookData,
    "EventType" | "Url" | "Tag",
    "Id"
  >;

  declare interface MangoPay$report$Filters {
    /**
     * To return only resources that have CreationDate BEFORE this date
     */
    BeforeDate: MangoPay$Timestamp;

    /**
     * To return only resources that have CreationDate AFTER this date
     */
    AfterDate: MangoPay$Timestamp;

    /**
     * The type of the transaction
     */
    Type: transaction$TransactionType[];

    /**
     * The status of the transaction
     */
    Status: transaction$TransactionStatus[];

    /**
     * The nature of the transaction
     */
    Nature: transaction$TransactionNature[];

    /**
     * The minimum amount of DebitedFunds
     */
    MinDebitedFundsAmount: number;

    /**
     * The currency for the minimum amount of DebitedFunds
     */
    MinDebitedFundsCurrency: CurrencyISO;

    /**
     * The maximum amount of DebitedFunds
     */
    MaxDebitedFundsAmount: number;

    /**
     * The currency for the maximum amount of DebitedFunds
     */
    MaxDebitedFundsCurrency: CurrencyISO;

    /**
     * The minimum amount of Fees
     */
    MinFeesAmount: number;

    /**
     * The currency for the minimum amount of Fees
     */
    MinFeesCurrency: CurrencyISO;

    /**
     * The maximum amount of Fees
     */
    MaxFeesAmount: number;

    /**
     * The currency for the maximum amount of Fees
     */
    MaxFeesCurrency: CurrencyISO;

    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * The ID of a wallet
     */
    WalletId: string;
  }

  declare type MangoPay$report$Column =
    | "Alias"
    | "AuthorId"
    | "BankAccountId"
    | "BankWireRef"
    | "CardId"
    | "CardType"
    | "Country"
    | "CreationDate"
    | "CreditedFundsAmount"
    | "CreditedFundsCurrency"
    | "CreditedUserId"
    | "CreditedWalletId"
    | "Culture"
    | "DebitedFundsAmount"
    | "DebitedFundsCurrency"
    | "DebitedWalletId"
    | "DeclaredDebitedFundsAmount"
    | "DeclaredDebitedFundsCurrency"
    | "DeclaredFeesAmount"
    | "DeclaredFeesCurrency"
    | "ExecutionDate"
    | "ExecutionType"
    | "ExpirationDate"
    | "FeesAmount"
    | "FeesCurrency"
    | "Id"
    | "Nature"
    | "PaymentType"
    | "PreauthorizationId"
    | "ResultCode"
    | "ResultMessage"
    | "Status"
    | "Tag"
    | "Type"
    | "WireReference";

  declare type MangoPay$report$ReportData = {
    /**
     * The date when the report was executed
     */
    ReportDate: MangoPay$Timestamp,

    /**
     * The URL to download the report
     */
    DownloadURL: string,

    /**
     * A URL that we will ping when the report is ready to download(works in a similar way to the hooks)
     */
    CallbackURL: string,

    /**
     * The format of the report download
     */
    DownloadFormat: "CSV",

    /**
     * The type of report
     */
    ReportType: "TRANSACTIONS",

    /**
     * The column to sort against and direction seperate by a `:`
     */
    Sort: string,

    /**
     * Whether the report should be limited to the first 10 lines(and therefore quicker to execute)
     */
    Preview: boolean,

    /**
     * An object of various filters for the report
     */
    Filters: MangoPay$report$Filters,

    /**
     * A list of columns / infos to show in the report
     */
    Columns: MangoPay$report$Column[],

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string
  } & entityBase$EntityBaseData;

  declare type MangoPay$report$CreateReport = {} & PickPartial<
    MangoPay$report$ReportData,
    | "Tag"
    | "CallbackURL"
    | "DownloadFormat"
    | "Sort"
    | "Preview"
    | "Filters"
    | "Columns"
  >;

  /**
   * - "CREATED" - the mandate has been created
   * - "SUBMITTED" - the mandate has been submitted to the banks and you can now do payments with this mandate
   * - "ACTIVE" - the mandate is active and has been accepted by the banks and/or successfully used in a payment
   * - "FAILED" - the mandate has failed for a variety of reasons and is no longer available for payments
   */
  declare type MangoPay$mandate$MandateStatus = ValueOf<MangoPay$IMandateStatus>;

  declare type MangoPay$mandate$MandateScheme = "SEPA" | "BACS";

  declare type MangoPay$mandate$MandateCultureCode =
    | "EN"
    | "FR"
    | "NL"
    | "DE"
    | "ES"
    | "IT"
    | "PL";

  declare type MangoPay$mandate$MandateExecutionType = "WEB";

  declare type MangoPay$mandate$MandateType = "DIRECT_DEBIT";

  declare type MangoPay$mandate$MandateData = {
    /**
     * An ID of a Bank Account
     */
    BankAccountId: string,

    /**
     * The object owner's UserId
     */
    UserId: string,

    /**
     * The URL to redirect to after payment (whether successful or not)
     */
    ReturnURL: string,

    /**
     * The URL to redirect to user to for them to proceed with the payment
     */
    RedirectURL: string,

    /**
     * The URL to download the mandate
     */
    DocumentURL: string,

    /**
     * The language to use for the mandate confirmation page - needs to be the ISO code of the language
     */
    Culture: MangoPay$mandate$MandateCultureCode,

    /**
     * The type of mandate, but will only be completed once the mandate has been submitted
     */
    Scheme: MangoPay$mandate$MandateScheme,

    /**
     * The status of the mandate:
     */
    Status: MangoPay$mandate$MandateStatus,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * The execution type for creating the mandate
     */
    ExecutionType: MangoPay$mandate$MandateExecutionType,

    /**
     * The type of Mandate
     */
    MandateType: MangoPay$mandate$MandateType,

    /**
     * The banking reference for this mandate
     */
    BankReference: string
  } & entityBase$EntityBaseData;

  declare type MangoPay$mandate$CreateMandate = {} & PickPartialRequired<
    MangoPay$mandate$MandateData,
    "Tag",
    "BankAccountId" | "Culture" | "ReturnURL"
  >;

  /**
   * Should be only one of these values:
   * 1 - for incomes <18K€),
   * 2 - for incomes between 18 and 30K€,
   * 3 - for incomes between 30 and 50K€,
   * 4 - for incomes between 50 and 80K€,
   * 5 - for incomes between 80 and 120K€,
   * 6 - for incomes >120K€
   */
  declare type MangoPay$user$IncomeRange = 1 | 2 | 3 | 4 | 5 | 6;

  declare type MangoPay$user$PersonType = "NATURAL" | "LEGAL";

  declare type MangoPay$user$KYCLevel = "LIGHT" | "REGULAR";

  declare type MangoPay$user$LegalPersonType =
    | "BUSINESS"
    | "ORGANIZATION"
    | "SOLETRADER";

  declare type MangoPay$user$StaticKeys =
    | "KYCLevel"
    | "PersonType"
    | "Id"
    | "CreationDate"
    | "ProofOfIdentity"
    | "ProofOfAddress"
    | "ProofOfRegistration"
    | "LegalRepresentativeProofOfIdentity"
    | "ShareholderDeclaration"
    | "Statute";

  declare type MangoPay$user$UserData = {
    /**
     * Type of user
     */
    PersonType: MangoPay$user$PersonType,

    /**
     * The person's email address (not more than 12 consecutive numbers) - must be a valid email
     */
    Email: string,

    /**
     * KYC Level (LIGHT or REGULAR)
     */
    KYCLevel: MangoPay$user$KYCLevel
  } & entityBase$EntityBaseData;

  declare type MangoPay$user$UserLegalData = {
    PersonType: "LEGAL",

    /**
     * The name of the legal user
     */
    Name: string,

    /**
     * Type for legal user.
     */
    LegalPersonType: MangoPay$user$LegalPersonType,

    /**
     * The address of the company’s headquarters
     */
    HeadquartersAddress: address$AddressType,

    /**
     * The first name of the company’s Legal representative person
     */
    LegalRepresentativeFirstName: string,

    /**
     * The last name of the company’s Legal representative person
     */
    LegalRepresentativeLastName: string,

    /**
     * The address of the company’s Legal representative person
     */
    LegalRepresentativeAddress: address$AddressType,

    /**
     * The email of the company’s Legal representative person - must be valid
     */
    LegalRepresentativeEmail: string,

    /**
     * The date of birth of the company’s Legal representative person - be careful to set the right timezone (should be UTC) to avoid 00h becoming 23h (and hence interpreted as the day before)
     */
    LegalRepresentativeBirthday: MangoPay$Timestamp,

    /**
     * The nationality of the company’s Legal representative person
     */
    LegalRepresentativeNationality: CountryISO,

    /**
     * The country of residence of the company’s Legal representative person
     */
    LegalRepresentativeCountryOfResidence: CountryISO,
    ProofOfIdentity: string | null,

    /**
     * The business statute of the company
     */
    Statute: string | null,

    /**
     * A MANGOPAY reference to the validated document of the proof of registration of the company
     */
    ProofOfRegistration: string | null,

    /**
     * The shareholder declaration of the company
     */
    ShareholderDeclaration: string | null,

    /**
     * The official registered number of the business
     */
    CompanyNumber: string
  } & UserData;

  declare type MangoPay$user$UserNaturalData = {
    PersonType: "NATURAL",

    /**
     * The name of the user
     */
    FirstName: string,

    /**
     * The last name of the user
     */
    LastName: string,

    /**
     * The user address
     */
    Address: string | address$AddressData,

    /**
     * The date of birth of the user - be careful to set the right timezone (should be UTC) to avoid 00h becoming 23h (and hence interpreted as the day before)
     */
    Birthday: MangoPay$Timestamp,

    /**
     * The user’s nationality. ISO 3166-1 alpha-2 format is expected
     */
    Nationality: CountryISO,

    /**
     * The user’s country of residence. ISO 3166-1 alpha-2 format is expected
     */
    CountryOfResidence: CountryISO,

    /**
     * User’s occupation, ie. Work
     */
    Occupation: string,
    IncomeRange: MangoPay$user$IncomeRange,

    /**
     * Maximum length is 255 characters
     */
    ProofOfIdentity: string | null,

    /**
     * Maximum length is 255 characters
     */
    ProofOfAddress: string | null,

    /**
     * The capacity of this user - for use with UBO declarations
     */
    Capacity: "NORMAL" | "DECLARATIVE"
  } & UserData;

  declare type MangoPay$user$RequiredUserLegalData =
    | "LegalPersonType"
    | "Name"
    | "LegalRepresentativeBirthday"
    | "LegalRepresentativeCountryOfResidence"
    | "LegalRepresentativeNationality"
    | "LegalRepresentativeFirstName"
    | "LegalRepresentativeLastName"
    | "Email";

  declare type MangoPay$user$RequiredUserNaturalData =
    | "FirstName"
    | "LastName"
    | "Birthday"
    | "Nationality"
    | "CountryOfResidence"
    | "Email";

  declare type MangoPay$user$BaseUserLegalData = {
    PersonType: "LEGAL"
  } & PickPartial<
    MangoPay$user$UserLegalData,
    | MangoPay$user$RequiredUserLegalData
    | "CompanyNumber"
    | "LegalRepresentativeEmail"
    | "LegalRepresentativeAddress"
    | "HeadquartersAddress"
    | "Tag"
  >;

  declare type MangoPay$user$UpdateUserLegalData = {
    Id: string
  } & BaseUserLegalData;

  declare type MangoPay$user$CreateUserLegalData = {} & MakeKeysRequired<
    MangoPay$user$BaseUserLegalData,
    MangoPay$user$RequiredUserLegalData | "PersonType"
  >;

  declare type MangoPay$user$BaseUserNaturalData = {
    PersonType: "NATURAL"
  } & PickPartial<
    MangoPay$user$UserNaturalData,
    | MangoPay$user$RequiredUserNaturalData
    | "Address"
    | "Occupation"
    | "IncomeRange"
    | "Tag"
  >;

  declare type MangoPay$user$UpdateUserNaturalData = {
    Id: string
  } & BaseUserNaturalData;

  declare type MangoPay$user$CreateUserNaturalData = {} & MakeKeysRequired<
    MangoPay$user$BaseUserNaturalData,
    MangoPay$user$RequiredUserNaturalData | "PersonType"
  >;

  declare type MangoPay$payIn$PayInPaymentType = ValueOf<MangoPay$IPayInPaymentType>;

  declare type MangoPay$payIn$PayInExecutionType =
    | ValueOf<MangoPay$IPayInExecutionType>
    | "EXTERNAL_INSTRUCTION";

  declare interface MangoPay$payIn$TemplateURLOptions {
    Payline: string;
  }

  declare type MangoPay$payIn$BasePayInData = {
    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData,

    /**
     * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
     */
    CreditedFunds: MangoPay$MoneyData,

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData,

    /**
     * The ID of the wallet that was debited
     */
    DebitedWalletId: string,

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string,

    /**
     * A user's ID
     */
    AuthorId: string,

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId: string,

    /**
     * The nature of the transaction
     */
    Nature: transaction$TransactionNature,

    /**
     * The status of the transaction
     */
    Status: transaction$TransactionStatus,

    /**
     * When the transaction happened
     */
    ExecutionDate: MangoPay$Timestamp,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * The type of the transaction
     */
    Type: transaction$TransactionType,

    /**
     * The type of payin
     */
    PaymentType: MangoPay$payIn$PayInPaymentType,

    /**
     * The type of execution for the payin
     */
    ExecutionType: MangoPay$payIn$PayInExecutionType
  } & entityBase$EntityBaseData;

  declare type MangoPay$payIn$CardWebPayInData = {
    ExecutionType: "WEB",
    PaymentType: "CARD",

    /**
     * The URL to redirect to after payment (whether successful or not)
     */
    ReturnURL: string,

    /**
     * The type of card
     */
    CardType: card$CardType,

    /**
     * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it
     * automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
     */
    SecureMode: MangoPay$SecureMode,

    /**
     * The language to use for the payment page - needs to be the ISO code of the language
     */
    Culture: CountryISO,

    /**
     * The URL to use for the payment page template
     */
    TemplateURL: string,

    /**
     * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric characters or spaces.
     * See here for important info. Note that each bank handles this information differently, some show less or no information.
     */
    StatementDescriptor: string,

    /**
     * The URL to redirect to user to for them to proceed with the payment
     */
    RedirectURL: string
  } & BasePayInData;

  declare interface MangoPay$payIn$CreateCardWebPayIn {
    ExecutionType: "WEB";
    PaymentType: "CARD";

    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId?: string;

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData;

    /**
     * The URL to redirect to after payment (whether successful or not)
     */
    ReturnURL: string;

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string;

    /**
     * The type of card
     */
    CardType: card$CardType;

    /**
     * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually.
     * The field lets you activate it automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects
     * there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
     */
    SecureMode?: MangoPay$SecureMode;

    /**
     * The language to use for the payment page - needs to be the ISO code of the language
     */
    Culture: CountryISO;

    /**
     * A URL to an SSL page to allow you to customise the payment page. Must be in the format: array("PAYLINE"=>"https://...") and meet all the
     * specifications listed here. Note that only a template for Payline is currently available
     */
    TemplateURLOptions?: MangoPay$payIn$TemplateURLOptions;

    /**
     * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and
     * can only include alphanumeric characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
     */
    StatementDescriptor?: string;
  }

  declare type MangoPay$payIn$CardDirectPayInData = {
    ExecutionType: "DIRECT",
    PaymentType: "CARD",

    /**
     * This is the URL where users are automatically redirected after 3D secure validation (if activated)
     */
    SecureModeReturnURL: string,

    /**
     * The ID of a card
     */
    CardId: string,

    /**
     * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it
     * automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
     */
    SecureMode: MangoPay$SecureMode,

    /**
     * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric
     * characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
     */
    StatementDescriptor: string,

    /**
     * Contains useful information related to the user billing
     */
    Billing: MangoPay$BillingData,

    /**
     * Contains information related to security and fraud
     */
    SecurityInfo: MangoPay$SecurityInfoData,

    /**
     * The value is 'true' if the SecureMode was used
     */
    SecureModeNeeded: boolean,

    /**
     * This is the URL where to redirect users to proceed to 3D secure validation
     */
    SecureModeRedirectUrl: string
  } & BasePayInData;

  declare interface MangoPay$payIn$CreateCardDirectPayIn {
    ExecutionType: "DIRECT";
    PaymentType: "CARD";

    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId?: string;

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string;

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData;

    /**
     * This is the URL where users are automatically redirected after 3D secure validation (if activated)
     */
    SecureModeReturnURL: string;

    /**
     * The ID of a card
     */
    CardId: string;

    /**
     * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it automatically
     *   with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
     */
    SecureMode?: MangoPay$SecureMode;

    /**
     * Contains useful information related to the user billing
     */
    Billing?: MangoPay$BillingData;

    /**
     * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric characters or spaces.
     * See here for important info. Note that each bank handles this information differently, some show less or no information.
     */
    StatementDescriptor?: string;
  }

  declare type MangoPay$payIn$CardPreAuthorizedPayInData = {
    PreauthorizationId: string,
    ExecutionType: "DIRECT",
    PaymentType: "PREAUTHORIZED"
  } & BasePayInData;

  declare interface MangoPay$payIn$CreateCardPreAuthorizedPayIn {
    ExecutionType: "DIRECT";
    PaymentType: "PREAUTHORIZED";

    /**
     * Custom data that you can add to this item
     */
    Tag?: string;

    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId?: string;

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string;

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData;

    /**
     * The ID of the Preauthorization object
     */
    PreauthorizationId: string;
  }

  declare interface MangoPay$payIn$BankAccountData {
    /**
     * The BIC of the bank account
     */
    BIC: string;

    /**
     * The IBAN of the bank account
     */
    IBAN: string;

    /**
     * The name of the owner of the bank account
     */
    OwnerName: string;

    /**
     * The address of the owner of the bank account
     */
    OwnerAddress: string;

    /**
     * The type of bank account
     */
    Type: ValueOf<MangoPay$IBankAccountType>;
  }

  declare type MangoPay$payIn$BankWireDirectPayInData = {
    ExecutionType: "DIRECT",
    PaymentType: "BANK_WIRE",

    /**
     * The declared debited funds
     */
    DeclaredDebitedFunds: MangoPay$MoneyData,

    /**
     * The declared fees
     */
    DeclaredFees: MangoPay$MoneyData,

    /**
     * Wire reference
     */
    WireReference: string,

    /**
     * Bank account details
     */
    BankAccount: MangoPay$payIn$BankAccountData
  } & BasePayInData;

  declare type MangoPay$payIn$CreateBankWireDirectPayIn = {
    ExecutionType: "DIRECT",
    PaymentType: "BANK_WIRE"
  } & PickPartialRequired<
    MangoPay$payIn$BankWireDirectPayInData,
    "Tag",
    | "AuthorId"
    | "CreditedUserId"
    | "CreditedWalletId"
    | "DeclaredDebitedFunds"
    | "DeclaredFees"
  >;

  declare type MangoPay$payIn$PayInData =
    | MangoPay$payIn$CardDirectPayInData
    | MangoPay$payIn$CardPreAuthorizedPayInData
    | MangoPay$payIn$CardWebPayInData
    | MangoPay$payIn$BankWireDirectPayInData;

  declare type MangoPay$refund$RefundReasonType =
    | "INITIALIZED_BY_CLIENT"
    | "BANKACCOUNT_INCORRECT"
    | "OWNER_DO_NOT_MATCH_BANKACCOUNT"
    | "BANKACCOUNT_HAS_BEEN_CLOSED"
    | "WITHDRAWAL_IMPOSSIBLE_ON_SAVINGS_ACCOUNTS"
    | "OTHER";

  declare interface MangoPay$refund$RefundReason {
    RefundReasonType: MangoPay$refund$RefundReasonType;
  }

  declare type MangoPay$refund$RefundData = {
    /**
     * The nature of the transaction
     */
    Nature: "REFUND",

    /**
     * The initial transaction ID
     */
    InitialTransactionId: string,

    /**
     * The initial transaction type
     */
    InitialTransactionType: transaction$TransactionType,

    /**
     * Contains info about the reason for refund
     */
    RefundReason: MangoPay$refund$RefundReason
  } & transaction$TransactionData;

  declare interface MangoPay$refund$CreatePayInRefund {
    AuthorId: string;
    Tag?: string;
    DebitedFunds?: MangoPay$MoneyData;
    Fees?: MangoPay$MoneyData;
  }

  declare interface MangoPay$refund$CreateTransferRefund {
    AuthorId: string;
    Tag?: string;
  }

  declare type MangoPay$repudiation$RepudiationData = {
    /**
     * The nature of the transaction
     */
    Nature: "REPUDIATION",

    /**
     * The initial transaction ID
     */
    InitialTransactionId: string,

    /**
     * The initial transaction type
     */
    InitialTransactionType: transaction$TransactionType,

    /**
     * Contains info about the reason for refund
     */
    RefundReason: refund$RefundReason
  } & transaction$TransactionData;

  declare type MangoPay$client$BusinessType =
    | "MARKETPLACE"
    | "CROWDFUNDING"
    | "FRANCHISE"
    | "OTHER";

  declare type MangoPay$client$Sector =
    | "RENTALS"
    | "STORES_FASHION_ACCESSORIES_OBJECTS"
    | "BEAUTY_COSMETICS_HEALTH"
    | "FOOD_WINE_RESTAURANTS"
    | "HOSPITALITY_TRAVEL_CORIDING"
    | "ART_MUSIC_ENTERTAINMENT"
    | "FURNITURE_GARDEN"
    | "SERVICES_JOBBING_EDUCATION"
    | "SPORT_RECREATION_ACTIVITIES"
    | "TICKETING";

  declare type MangoPay$client$PlatformType = ValueOf<MangoPay$IPlatformType>;

  declare interface MangoPay$client$PlatformCategorization {
    Sector: MangoPay$client$Sector;
    BusinessType: MangoPay$client$BusinessType;
  }

  declare type MangoPay$client$ClientData = {
    /**
     * The pretty name for the client
     */
    Name: string,

    /**
     * The registered name of your company
     */
    RegisteredName: string,

    /**
     * An ID for the client (i.e. url friendly, lowercase etc - sort of namespace identifier)
     */
    ClientId: string,

    /**
     * The primary branding colour to use for your merchant
     */
    PrimaryThemeColour: string,

    /**
     * The primary branding colour to use for buttons for your merchant
     */
    PrimaryButtonColour: string,

    /**
     * The URL of the logo of your client
     */
    Logo: string,

    /**
     * A list of email addresses to use when contacting you for technical issues/communications
     */
    TechEmails: string[],

    /**
     * A list of email addresses to use when contacting you for admin/commercial issues/communications
     */
    AdminEmails: string[],

    /**
     * A list of email addresses to use when contacting you for fraud/compliance issues/communications
     */
    FraudEmails: string[],

    /**
     * A list of email addresses to use when contacting you for billing issues/communications
     */
    BillingEmails: string[],

    /**
     * The Categorization of your platform, in terms of Business Type and Sector
     */
    PlatformCategorization: MangoPay$client$PlatformCategorization,

    /**
     * A description of what your platform does
     */
    PlatformDescription: string,

    /**
     * The URL for your website
     */
    PlatformURL: string,

    /**
     * The address of the company’s headquarters
     */
    HeadquartersAddress: address$AddressType,

    /**
     * The tax (or VAT) number for your company
     */
    TaxNumber: string,

    /**
     * Your unique MANGOPAY reference which you should use when contacting us
     */
    CompanyReference: string
  } & entityBase$EntityBaseData;

  declare interface MangoPay$client$UpdateClient {
    /**
     * The primary branding colour to use for buttons for your merchant
     */
    PrimaryButtonColour?: string;

    /**
     * The primary branding colour to use for your merchant
     */
    PrimaryThemeColour?: string;

    /**
     * A list of email addresses to use when contacting you for admin/commercial issues/communications
     */
    AdminEmails?: string[];

    /**
     * A list of email addresses to use when contacting you for technical issues/communications
     */
    TechEmails?: string[];

    /**
     * A list of email addresses to use when contacting you for billing issues/communications
     */
    BillingEmails?: string[];

    /**
     * A list of email addresses to use when contacting you for fraud/compliance issues/communications
     */
    FraudEmails?: string[];

    /**
     * The address of the company’s headquarters
     */
    HeadquartersAddress?: address$AddressType;

    /**
     * The tax (or VAT) number for your company
     */
    TaxNumber?: string;

    /**
     * The type of platform
     */
    PlatformType?: MangoPay$client$PlatformType;

    /**
     * A description of what your platform does
     */
    PlatformDescription?: string;

    /**
     * The URL for your website
     */
    PlatformURL?: string;
  }

  declare interface MangoPay$client$UpdateClientLogo {
    /**
     * The base64 encoded file which needs to be uploaded
     */
    File: string;
  }

  declare type MangoPay$event$EventType =
    | "PAYIN_NORMAL_CREATED"
    | "PAYIN_NORMAL_SUCCEEDED"
    | "PAYIN_NORMAL_FAILED"
    | "PAYOUT_NORMAL_CREATED"
    | "PAYOUT_NORMAL_SUCCEEDED"
    | "PAYOUT_NORMAL_FAILED"
    | "TRANSFER_NORMAL_CREATED"
    | "TRANSFER_NORMAL_SUCCEEDED"
    | "TRANSFER_NORMAL_FAILED"
    | "PAYIN_REFUND_CREATED"
    | "PAYIN_REFUND_SUCCEEDED"
    | "PAYIN_REFUND_FAILED"
    | "PAYOUT_REFUND_CREATED"
    | "PAYOUT_REFUND_SUCCEEDED"
    | "PAYOUT_REFUND_FAILED"
    | "TRANSFER_REFUND_CREATED"
    | "TRANSFER_REFUND_SUCCEEDED"
    | "TRANSFER_REFUND_FAILED"
    | "KYC_CREATED"
    | "KYC_VALIDATION_ASKED"
    | "KYC_SUCCEEDED"
    | "KYC_FAILED"
    | "PAYIN_REPUDIATION_CREATED"
    | "PAYIN_REPUDIATION_SUCCEEDED"
    | "PAYIN_REPUDIATION_FAILED"
    | "DISPUTE_DOCUMENT_CREATED"
    | "DISPUTE_DOCUMENT_VALIDATION_ASKED"
    | "DISPUTE_DOCUMENT_SUCCEEDED"
    | "DISPUTE_DOCUMENT_FAILED"
    | "DISPUTE_CREATED"
    | "DISPUTE_SUBMITTED"
    | "DISPUTE_ACTION_REQUIRED"
    | "DISPUTE_FURTHER_ACTION_REQUIRED"
    | "DISPUTE_CLOSED"
    | "DISPUTE_SENT_TO_BANK"
    | "TRANSFER_SETTLEMENT_CREATED"
    | "TRANSFER_SETTLEMENT_SUCCEEDED"
    | "TRANSFER_SETTLEMENT_FAILED"
    | "MANDATE_CREATED"
    | "MANDATE_FAILED"
    | "MANDATE_ACTIVATED"
    | "MANDATE_SUBMITTED"
    | "PREAUTHORIZATION_PAYMENT_WAITING"
    | "PREAUTHORIZATION_PAYMENT_EXPIRED"
    | "PREAUTHORIZATION_PAYMENT_CANCELED"
    | "PREAUTHORIZATION_PAYMENT_VALIDATED"
    | "UBO_DECLARATION_CREATED"
    | "UBO_DECLARATION_VALIDATION_ASKED"
    | "UBO_DECLARATION_REFUSED"
    | "UBO_DECLARATION_VALIDATED";

  declare interface MangoPay$event$EventData {
    /**
     * The ID of whatever the event is
     */
    ResourceId: string;

    /**
     * When the event happened
     */
    Date: MangoPay$Timestamp;

    /**
     * The event type
     */
    EventType: MangoPay$event$EventType;
  }

  declare type MangoPay$dispute$DisputeReasonType =
    | "DUPLICATE"
    | "FRAUD"
    | "PRODUCT_UNACCEPTABLE"
    | "UNKNOWN"
    | "OTHER"
    | "REFUND_CONVERSION_RATE"
    | "LATE_FAILURE_INSUFFICIENT_FUNDS"
    | "LATE_FAILURE_CONTACT_USER"
    | "LATE_FAILURE_BANKACCOUNT_CLOSED"
    | "LATE_FAILURE_BANKACCOUNT_INCOMPATIBLE"
    | "LATE_FAILURE_BANKACCOUNT_INCORRECT"
    | "AUTHORISATION_DISPUTED"
    | "TRANSACTION_NOT_RECOGNIZED"
    | "PRODUCT_NOT_PROVIDED"
    | "CANCELED_REOCCURING_TRANSACTION"
    | "REFUND_NOT_PROCESSED";

  declare type MangoPay$dispute$DisputeStatus =
    | "CREATED"
    | "PENDING_CLIENT_ACTION"
    | "SUBMITTED"
    | "PENDING_BANK_ACTION"
    | "REOPENED_PENDING_CLIENT_ACTION"
    | "CLOSED";

  declare type MangoPay$dispute$DisputeType =
    | "CONTESTABLE"
    | "NOT_CONTESTABLE"
    | "RETRIEVAL";

  declare interface MangoPay$dispute$DisputeReason {
    DisputeReasonType: MangoPay$dispute$DisputeReasonType;
    DisputeReasonMessage: string;
  }

  declare type MangoPay$dispute$DisputeData = {
    /**
     * The initial transaction ID
     */
    InitialTransactionId: string,

    /**
     * The initial transaction type
     */
    InitialTransactionType: transaction$TransactionType,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * Info about the reason for the dispute
     */
    DisputeReason: MangoPay$dispute$DisputeReason,

    /**
     * The status of the dispute
     */
    Status: MangoPay$dispute$DisputeStatus,

    /**
     * Used to communicate information about the dispute status to you
     */
    StatusMessage: string,

    /**
     * The amount of funds that were disputed
     */
    DisputedFunds: MangoPay$MoneyData,

    /**
     * The amount you wish to contest
     */
    ContestedFunds: MangoPay$MoneyData,

    /**
     * The type of dispute
     */
    DisputeType: MangoPay$dispute$DisputeType,

    /**
     * The deadline by which you must contest the dispute (if you wish to contest it)
     */
    ContestDeadlineDate: MangoPay$Timestamp,

    /**
     * The ID of the associated repudiation transaction
     */
    RepudiationId: string
  } & entityBase$EntityBaseData;

  declare type MangoPay$dispute$SubmitDispute = {} & PickPartial<
    MangoPay$dispute$DisputeData,
    "ContestedFunds"
  >;

  declare type MangoPay$dispute$UpdateDispute = {} & PickPartial<
    MangoPay$dispute$DisputeData,
    "Tag"
  >;

  declare interface MangoPay$DisputeReason {
    DisputeReasonType: MangoPay$dispute$DisputeReasonType;
    DisputeReasonMessage: string;
  }

  declare type MangoPay$settlementTransfer$SettlementTransferData = {
    /**
     * The nature of the transaction
     */
    Nature: "SETTLEMENT",

    /**
     * The ID of the associated repudiation transaction
     */
    RepudiationId: string,

    /**
     * The initial transaction ID
     */
    InitialTransactionId: string,

    /**
     * The initial transaction type
     */
    InitialTransactionType: transaction$TransactionType,

    /**
     * Contains info about the reason for refund
     */
    RefundReason: refund$RefundReason
  } & transaction$TransactionData;

  declare type MangoPay$settlementTransfer$CreateSettlementTransfer = {} & PickPartialRequired<
    MangoPay$settlementTransfer$SettlementTransferData,
    "Tag",
    "AuthorId" | "DebitedFunds" | "Fees"
  >;

  declare type MangoPay$transfer$TransferData = {
    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData,

    /**
     * Details about the funds that are being credited (DebitedFunds – Fees = CreditedFunds)
     */
    CreditedFunds: MangoPay$MoneyData,

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData,

    /**
     * The ID of the wallet that was debited
     */
    DebitedWalletId: string,

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string,

    /**
     * A user's ID
     */
    AuthorId: string,

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId: string,

    /**
     * The nature of the transaction
     */
    Nature: transaction$TransactionNature,

    /**
     * The status of the transaction
     */
    Status: transaction$TransactionStatus,

    /**
     * When the transaction happened
     */
    ExecutionDate: MangoPay$Timestamp,

    /**
     * The result code
     */
    ResultCode: string,

    /**
     * A verbal explanation of the ResultCode
     */
    ResultMessage: string,

    /**
     * The type of the transaction
     */
    Type: "TRANSFER"
  } & entityBase$EntityBaseData;

  declare interface MangoPay$transfer$CreateTransfer {
    /**
     * Custom data that you can add to this item
     */
    Tag?: string;

    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * The user ID who is credited (defaults to the owner of the wallet)
     */
    CreditedUserId?: string;

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData;

    /**
     * The ID of the wallet that was debited
     */
    DebitedWalletId: string;

    /**
     * The ID of the wallet where money will be credited
     */
    CreditedWalletId: string;
  }

  declare type MangoPay$PayOut$PayOutData = {
    /**
     * The type of the transaction
     */
    Type: "PAYOUT",
    PaymentType: $ElementType<MangoPay$IPayOutPaymentType, "BankWire">,

    /**
     * An ID of a Bank Account
     */
    BankAccountId: string,

    /**
     * A custom reference you wish to appear on the user’s bank statement (your Client Name is already shown). This reference can contain max 12 characters
     */
    BankWireRef: string
  } & Omit<transfer$TransferData, "Type">;

  declare interface MangoPay$PayOut$CreatePayOut {
    /**
     * A user's ID
     */
    AuthorId: string;

    /**
     * Information about the funds that are being debited
     */
    DebitedFunds: MangoPay$MoneyData;

    /**
     * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
     */
    Fees: MangoPay$MoneyData;

    /**
     * An ID of a Bank Account
     */
    BankAccountId: string;

    /**
     * The ID of the wallet that was debited
     */
    DebitedWalletId: string;

    /**
     * A custom reference you wish to appear on the user’s bank statement (your Client Name is already shown). This reference can contain max 12 characters
     */
    BankWireRef?: string;
    Tag?: string;
  }

  declare class MangoPay$Users {
    /**
     * Create a new user
     * @param user
     */
    create: MangoPay$MethodOverload<
      user$CreateUserLegalData,
      user$UserLegalData
    > &
      MangoPay$MethodOverload<user$CreateUserNaturalData, user$UserNaturalData>;

    /**
     * Update a user
     * @param user
     * @param options
     */
    update: MangoPay$MethodOverload<
      models$UserLegal | user$UpdateUserLegalData,
      user$UserLegalData
    > &
      MangoPay$MethodOverload<
        models$UserNatural | user$UpdateUserNaturalData,
        user$UserNaturalData
      >;

    /**
     * Get natural or legal user by ID
     * @param userId
     * @param options
     */
    get: MangoPay$MethodOverload<
      string,
      user$UserLegalData | user$UserNaturalData
    >;

    /**
     * Get natural user by ID
     * @param userId
     * @param options
     */
    getNatural: MangoPay$MethodOverload<string, user$UserNaturalData>;

    /**
     * Get legal user by ID
     * @param userId
     * @param options
     */
    getLegal: MangoPay$MethodOverload<string, user$UserLegalData>;

    /**
     * Get all users
     */
    getAll: MangoPay$NoArgMethodOverload<
      Array<user$UserLegalData | user$UserNaturalData>
    >;

    /**
     * Create bank account for user
     * @param userId
     * @param bankAccount
     * @param options
     */
    createBankAccount: MangoPay$TwoArgsMethodOverload<
      string,
      bankAccount$USDetails,
      bankAccount$USData
    > &
      MangoPay$TwoArgsMethodOverload<
        string,
        bankAccount$OtherDetails,
        bankAccount$OtherData
      > &
      MangoPay$TwoArgsMethodOverload<
        string,
        bankAccount$IBANDetails,
        bankAccount$IBANData
      > &
      MangoPay$TwoArgsMethodOverload<
        string,
        bankAccount$GBDetails,
        bankAccount$GBData
      > &
      MangoPay$TwoArgsMethodOverload<
        string,
        bankAccount$CADetails,
        bankAccount$CAData
      >;

    /**
     * Deactivate a bank account
     *
     * Note that once deactivated, a bank account can't be reactivated afterwards
     * @param userId
     * @param bankAccountId
     * @param options
     */
    deactivateBankAccount: MangoPay$TwoArgsMethodOverload<string, string, void>;

    /**
     * Get all bank accounts for user
     * @param userId
     * @param options
     */
    getBankAccounts: MangoPay$MethodOverload<string, bankAccount$Data[]>;

    /**
     * Get all bank accounts for user
     * @param userId
     * @param bankAccountId
     * @param options
     */
    getBankAccount: MangoPay$TwoArgsMethodOverload<
      string,
      string,
      bankAccount$Data
    >;

    /**
     * Get all wallets accounts for user
     */
    getWallets: MangoPay$MethodOverload<string, wallet$WalletData[]>;

    /**
     * Get all transactions for user
     * @param userId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;

    /**
     * Get all cards for user
     * @param userId
     * @param options
     */
    getCards: MangoPay$MethodOverload<string, card$CardData[]>;

    /**
     * Create new KYC document
     * @param userId
     * @param kycDocument
     * @param options
     */
    createKycDocument: MangoPay$TwoArgsMethodOverload<
      string,
      kycDocument$CreateKycDocument,
      kycDocument$KycDocumentData
    >;

    /**
     * Get all KYC documents for user
     * @param userId
     * @param options
     */
    getKycDocuments: MangoPay$MethodOverload<
      string,
      kycDocument$KycDocumentData[]
    >;

    /**
     * Get KYC document
     * @param userId
     * @param kycDocumentId
     * @param options
     */
    getKycDocument: MangoPay$TwoArgsMethodOverload<
      string,
      string,
      kycDocument$KycDocumentData
    >;

    /**
     * Update status of KYC Document (Currently only allows for submitting the document)
     * @param userId
     * @param kycDocument
     * @param options
     */
    updateKycDocument: MangoPay$TwoArgsMethodOverload<
      string,
      kycDocument$SubmitKycDocument,
      kycDocument$KycDocumentData
    >;

    /**
     * Create page for KYC document
     * @param userId
     * @param kycDocumentId
     * @param kycPage
     * @param options
     */
    createKycPage: MangoPay$ThreeArgsMethodOverload<
      string,
      string,
      kycDocument$CreateKycPage,
      kycDocument$KycDocumentData
    >;

    /**
     * Create page for KYC document
     * @param userId
     * @param kycDocumentId
     * @param filePath
     * @param options
     */
    createKycPageFromFile: MangoPay$ThreeArgsMethodOverload<
      string,
      string,
      string,
      kycDocument$KycDocumentData
    >;

    /**
     * Get users's EMoney
     * @param userId
     * @param options
     */
    getEMoney: MangoPay$MethodOverload<string, eMoney$EMoneyData>;

    /**
     * Create an UboDeclaration for the user
     * @param userId
     * @param uboDeclaration
     * @param options
     */
    createUboDeclaration: MangoPay$TwoArgsMethodOverload<
      string,
      uboDeclaration$CreateUboDeclaration,
      uboDeclaration$UboDeclarationData
    >;

    /**
     * Get all user preauthorizations
     * @param userId
     * @param options
     */
    getPreAuthorizations: MangoPay$MethodOverload<
      string,
      cardPreAuthorization$CardPreAuthorizationData[]
    >;
  }

  /**
   * You need to create document in order to upload pages on this document.
   *
   * 1. The KYC Document Object is a request to validate a required document. There is one request for one Type of document
   * 2. Upload a file through a Page. A document should get several pages
   * 3. Edit the object Document and set the Status field to "VALIDATION_ASKED" (instead of "CREATED")
   * 4. The demand is received by our team. The object is waiting for a "VALIDATED" status
   *
   * Note that you are not allowed to store KYC documents on your side unless you have permission from the approriate authorities in your country
   */
  declare class MangoPay$KycDocuments {
    /**
     * Get all KycDocuments
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<kycDocument$KycDocumentData[]>;

    /**
     * Get KycDocument
     * @param kycDocumentId
     * @param options
     */
    get: MangoPay$MethodOverload<string, kycDocument$KycDocumentData>;

    /**
     * Creates temporary URLs where each page of a KYC document can be viewed.
     * @param documentId
     */
    createKycDocumentConsult: MangoPay$MethodOverload<string, any>;
  }

  /**
   * An UBO Declaration is an electronic version of the previous KYC document "Shareholder Declaration", in order to declare all the Ultimate Beneficial Owners of a BUSINESS-typed legal User
   * (ie the shareholders with >25% of capital or voting rights).
   *
   * 1. Create each Ultimate Beneficial Owner as a Natural User, who must have a "DECLARATIVE" Capacity.
   * 2. Create a new UBO Declaration for your legal user, and link every Ultimate Beneficial Owners created previously thanks to DeclaredUBOs.
   *   - This list can be empty if your legal user has no Ultimate Beneficial Owner, or no eligible one (ie. no Ultimate Beneficial Owner that owns more than 25% of this company).
   * 3. Edit the UBODeclaration object and set the Status field to "VALIDATION_ASKED" (instead of "CREATED")
   * 4. The demand is received by our team and once processed, it will either get a "VALIDATED" status, or "REFUSED" with more information provided in the RefusedReasonTypes parameter
   *
   * Note that UBO declarations are not yet a requirement for your user to be KYC verified and are optional at this stage
   */
  declare class MangoPay$UboDeclarations {
    /**
     * Retrieves a UBO declaration object from the API.
     * @param id
     * @param options
     */
    get: MangoPay$MethodOverload<string, uboDeclaration$UboDeclarationData>;

    /**
     * Updates a UBO declaration entity.
     * @param uboDeclaration Updated UBO declaration entity - must have ID
     * @param options
     */
    update: MangoPay$MethodOverload<
      uboDeclaration$UpdateUboDeclaration,
      uboDeclaration$UboDeclarationData
    >;
  }

  declare class MangoPay$BankAccounts {
    /**
     * Retrieve list of transactions for a bank account
     * @param bankAccountId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;
  }

  declare class MangoPay$Wallets {
    /**
     * Create new wallet
     * @param wallet
     * @param options
     */
    create: MangoPay$MethodOverload<
      wallet$CreateWallet | models$Wallet,
      wallet$WalletData
    >;

    /**
     * Update wallet
     * @param wallet
     * @param options
     */
    update: MangoPay$MethodOverload<
      wallet$UpdateWallet | models$Wallet,
      wallet$WalletData
    >;

    /**
     * Get a specific wallet
     * @param walletId
     */
    get: MangoPay$MethodOverload<string, wallet$WalletData>;

    /**
     * Get transactions for the wallet
     * @param walletId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;
  }

  declare class MangoPay$Cards {
    /**
     * Get card
     * @param cardId
     * @param ptions
     */
    get: MangoPay$MethodOverload<string, card$CardData>;

    /**
     * Gets a list of cards having the same fingerprint.
     * The fingerprint is a hash uniquely generated per 16-digit card number.
     * @param fingerprint The fingerprint hash
     */
    getByFingerprint: MangoPay$MethodOverload<string, card$CardData[]>;

    /**
     * Update card (currently only supports deactivation)
     * @param card
     * @param options
     */
    update: MangoPay$MethodOverload<card$UpdateCard, card$CardData>;

    /**
     * Get list of Transactions of a Card
     * @param cardId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;

    /**
     * Gets list of PreAuthorizations of a Card.
     * @param cardId
     * @param options
     */
    getPreAuthorizations: MangoPay$MethodOverload<
      string,
      cardPreAuthorization$CardPreAuthorizationData[]
    >;
  }

  /**
   * You need to register a card in order to process a Direct PayIn. Card registration enables you to tokenize a Card. These are the steps to follow:
   *
   * 1. Create a CardRegistration Object
   * 2. Get a PreRegistrationData
   * 3. The user posts PreRegistrationData, AccessKey and card details through a form (PHP & JS samples) to the CardRegistrationURL (5. in the diagram)
   * 4. Get a RegistrationData back
   * 5. Edit the CardRegistration Object (POST method) with the RegistrationData just received
   * 6. Get the CardId ready to use into the Direct PayIn Object
   *
   * - If you don’t want to save the card you must change the field ACTIVE in the card object to false
   */
  declare class MangoPay$CardRegistrations {
    /**
     * Create new card registration
     * @param cardRegistration
     * @param options
     */
    create: MangoPay$MethodOverload<
      cardRegistration$CreateCardRegistration,
      cardRegistration$CardRegistrationData
    >;

    /**
     * Create new card registration
     * @param cardRegistrationId
     * @param options
     */
    get: MangoPay$MethodOverload<string, cardRegistration$CardRegistrationData>;

    /**
     * Update card registration
     * @param cardRegistration
     */
    update: MangoPay$MethodOverload<
      cardRegistration$UpdateCardRegistration,
      cardRegistration$CardRegistrationData
    >;
  }

  /**
   * The PreAuthorization Object ensures the solvency of a registered card for 7 days. The overall process is as follows:
   *
   * 1. Register a card (CardRegistration)
   * 2. Create a PreAuthorization with the CardId. This allows you to charge an amount on a card
   * 3. Charge the card through the PreAuthorized PayIn object (Payins/preauthorized/direct)
   *
   * How does PreAuthorization work?
   * - Once the PreAuthorization object is created the Status is "CREATED" until 3D secure validation.
   * - If the authorization is successful the status is "SUCCEEDED" if it failed the status is "FAILED".
   * - Once Status = "SUCCEEDED" and PaymentStatus = "WAITING" you can charge the card.
   * - The Pay-In amount has to be less than or equal to the amount authorized.
   */
  declare class MangoPay$CardPreAuthorizations {
    /**
     * Create new pre-authorization
     * @param cardPreAuthorization
     * @param options
     */
    create: MangoPay$MethodOverload<
      cardPreAuthorization$CreateCardPreAuthorization,
      cardPreAuthorization$CardPreAuthorizationData
    >;

    /**
     * Get data for Card pre-authorization
     * @param cardPreAuthorizationId
     * @param options
     */
    get: MangoPay$MethodOverload<
      string,
      cardPreAuthorization$CardPreAuthorizationData
    >;

    /**
     * Update pre-authorization object (currently only supports cancellation)
     * @param cardPreAuthorization
     */
    update: MangoPay$MethodOverload<
      cardPreAuthorization$UpdateCardPreAuthorization,
      cardPreAuthorization$CardPreAuthorizationData
    >;
  }

  declare class MangoPay$PayIns {
    /**
     * Create new pay-in
     * @param payIn
     * @param options
     */
    create: MangoPay$MethodOverload<
      payIn$CreateCardDirectPayIn,
      payIn$CardDirectPayInData
    > &
      MangoPay$MethodOverload<
        payIn$CreateCardPreAuthorizedPayIn,
        payIn$CardPreAuthorizedPayInData
      > &
      MangoPay$MethodOverload<
        payIn$CreateCardWebPayIn,
        payIn$CardWebPayInData
      > &
      MangoPay$MethodOverload<
        payIn$CreateBankWireDirectPayIn,
        payIn$BankWireDirectPayInData
      >;

    /**
     * Get pay-in
     * @param payInId
     * @param options
     */
    get: MangoPay$MethodOverload<string, payIn$PayInData>;

    /**
     * Create refund for pay-in object
     * @param payInId
     * @param refundData
     * @param options
     */
    createRefund: MangoPay$TwoArgsMethodOverload<
      string,
      refund$CreatePayInRefund,
      refund$RefundData
    >;

    /**
     * Gets list of Refunds for a PayIn
     * @param payInId
     * @param options
     */
    getRefunds: MangoPay$MethodOverload<string, refund$RefundData[]>;
  }

  declare class MangoPay$Refunds {
    /**
     * Get events
     * @param refundId
     * @param options
     */
    get: MangoPay$MethodOverload<string, refund$RefundData>;
  }

  declare class MangoPay$Clients {
    /**
     * Get the client
     */
    get: MangoPay$NoArgMethodOverload<client$ClientData>;

    /**
     * Update the client
     * @param client
     * @param options
     */
    update: MangoPay$MethodOverload<client$UpdateClient, client$ClientData>;

    /**
     * Upload client logo from base64 image string
     * @param base64Logo
     * @param options
     */
    uploadLogo: MangoPay$MethodOverload<string, client$ClientData>;

    /**
     * Upload client logo from file path
     * @param filePath
     * @param options
     */
    uploadLogoFromFile: MangoPay$MethodOverload<string, client$ClientData>;

    /**
     * Get all client wallets
     * @param options
     */
    getClientWallets: MangoPay$NoArgMethodOverload<wallet$ClientWalletData[]>;

    /**
     * Get a client wallet
     * @param fundsType
     * @param currency
     * @param options
     */
    getClientWallet: MangoPay$TwoArgsMethodOverload<
      wallet$ClientFundsType,
      CurrencyISO,
      wallet$ClientWalletData
    >;

    /**
     * Get client wallets by the type of funds
     * @param fundsType
     * @param options
     */
    getClientWalletsByFundsType: MangoPay$MethodOverload<
      wallet$ClientFundsType,
      wallet$ClientWalletData[]
    >;

    /**
     * Get a client wallet's transactions
     * @param fundsType
     * @param currency
     * @param options
     */
    getClientWalletTransactions: MangoPay$TwoArgsMethodOverload<
      wallet$ClientFundsType,
      CurrencyISO,
      transaction$TransactionData[]
    >;
  }

  declare class MangoPay$PayOuts {
    /**
     * Create new pay-out
     * @param payOut
     * @param options
     */
    create: MangoPay$MethodOverload<PayOut$CreatePayOut, PayOut$PayOutData>;

    /**
     * Get payout
     * @param payOutId
     * @param options
     */
    get: MangoPay$MethodOverload<string, PayOut$PayOutData>;

    /**
     * Gets list of Refunds of a PayOut
     * @param payOutId
     * @param options
     */
    getRefunds: MangoPay$MethodOverload<string, refund$RefundData[]>;
  }

  declare class MangoPay$Transfers {
    /**
     * Create new transfer
     * @param transfer
     * @param options
     */
    create: MangoPay$MethodOverload<
      transfer$CreateTransfer,
      transfer$TransferData
    >;

    /**
     * Get transfer
     * @param transferId
     * @param options
     */
    get: MangoPay$MethodOverload<string, transfer$TransferData>;

    /**
     * Create refund for transfer object
     * @param transferId
     * @param refund
     * @param options
     */
    createRefund: MangoPay$TwoArgsMethodOverload<
      string,
      refund$CreateTransferRefund,
      refund$RefundData
    >;

    /**
     * Gets list of Refunds of a Transfer
     * @param transferId
     * @param options
     */
    getRefunds: MangoPay$MethodOverload<string, refund$RefundData[]>;
  }

  declare class MangoPay$BankingAliases {
    /**
     * Create a banking alias
     * @param bankingAlias
     * @param options
     */
    create: MangoPay$MethodOverload<
      bankingAlias$CreateIBANBankingAlias,
      bankingAlias$IBANBankingAliasData
    >;

    /**
     * Get a banking alias
     * @param bankingAliasId
     * @param options
     */
    get: MangoPay$MethodOverload<string, bankingAlias$IBANBankingAliasData>;

    /**
     * Get all banking aliases
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<bankingAlias$IBANBankingAliasData[]>;

    /**
     * Update banking alias
     * @param bankingAliasId
     * @param options
     */
    update: MangoPay$MethodOverload<
      $Shape<Omit<bankingAlias$CreateIBANBankingAlias, "CreditedUserId">>,
      bankingAlias$IBANBankingAliasData
    >;

    /**
     * Deactivate banking alias
     * @param bankingAliasId
     * @param options
     */
    deactivate: MangoPay$MethodOverload<
      string,
      bankingAlias$IBANBankingAliasData
    >;

    /**
     * Activate banking alias
     * @param bankingAliasId
     * @param options
     */
    activate: MangoPay$MethodOverload<
      string,
      bankingAlias$IBANBankingAliasData
    >;
  }

  declare class MangoPay$DisputeDocuments {
    /**
     * Get all KycDocuments
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<disputeDocument$DisputeDocumentData[]>;

    /**
     * Get KycDocument
     * @param documentId
     * @param options
     */
    get: MangoPay$MethodOverload<string, disputeDocument$DisputeDocumentData>;

    /**
     * Creates temporary URLs where each page of a KYC document can be viewed.
     * @param documentId
     */
    createDisputeDocumentConsult: MangoPay$MethodOverload<string, any>;
  }

  declare class MangoPay$Repudiations {
    /**
     * Gets list of Refunds of a Repudiation
     * @param repudiationId
     * @param options
     */
    getRefunds: MangoPay$MethodOverload<string, refund$RefundData[]>;
  }

  declare class MangoPay$Disputes {
    /**
     * Get dispute
     * @param disputeId
     * @param options
     */
    get: MangoPay$MethodOverload<string, dispute$DisputeData>;

    /**
     * Get all disputes
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<dispute$DisputeData[]>;

    /**
     * Update dispute's tag
     * @param dispute
     * @param options
     */
    update: MangoPay$MethodOverload<dispute$UpdateDispute, dispute$DisputeData>;

    /**
     * Contest dispute
     * @param disputeId
     * @param contestedFunds
     * @param options
     */
    contestDispute: MangoPay$TwoArgsMethodOverload<
      string,
      MangoPay$MoneyData,
      dispute$DisputeData
    >;

    /**
     * This method is used to resubmit a Dispute if it is reopened requiring more docs
     * @param disputeId
     * @param options
     */
    resubmitDispute: MangoPay$MethodOverload<string, dispute$DisputeData>;

    /**
     * Close dispute
     * @param disputeId
     * @param options
     */
    closeDispute: MangoPay$MethodOverload<string, dispute$DisputeData>;

    /**
     * Gets dispute's transactions
     * @param disputeId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;

    /**
     * Gets dispute's documents for wallet
     * @param walletId
     * @param options
     */
    getDisputesForWallet: MangoPay$MethodOverload<
      string,
      dispute$DisputeData[]
    >;

    /**
     * Gets user's disputes
     * @param userId
     * @param options
     */
    getDisputesForUser: MangoPay$MethodOverload<string, dispute$DisputeData[]>;

    /**
     * Gets repudiation
     * @param repudiationId
     * @param options
     */
    getRepudiation: MangoPay$MethodOverload<
      string,
      repudiation$RepudiationData[]
    >;

    /**
     * Creates settlement transfer
     * @param settlementTransfer
     * @param repudiationId
     * @param options
     */
    createSettlementTransfer: MangoPay$TwoArgsMethodOverload<
      settlementTransfer$CreateSettlementTransfer,
      string,
      settlementTransfer$SettlementTransferData
    >;

    /**
     * Gets settlement transfer
     * @param settlementTransferId
     * @param options
     */
    getSettlementTransfer: MangoPay$MethodOverload<
      string,
      settlementTransfer$SettlementTransferData
    >;

    /**
     * Gets documents for dispute
     * @param disputeId
     * @param options
     */
    getDocumentsForDispute: MangoPay$MethodOverload<
      string,
      disputeDocument$DisputeDocumentData[]
    >;

    /**
     * Update dispute document
     * @param disputeId
     * @param disputeDocument
     * @param options
     */
    updateDisputeDocument: MangoPay$TwoArgsMethodOverload<
      string,
      $Shape<disputeDocument$DisputeDocumentData>,
      disputeDocument$DisputeDocumentData
    >;

    /**
     * Creates document for dispute
     * @param disputeId
     * @param disputeDocument
     * @param options
     */
    createDisputeDocument: MangoPay$TwoArgsMethodOverload<
      string,
      disputeDocument$CreateDisputeDocument,
      disputeDocument$DisputeDocumentData
    >;

    /**
     * Creates document's page for dispute
     * @param disputeId
     * @param disputeDocumentId
     * @param disputeDocumentPage
     * @param options
     */
    createDisputeDocumentPage: MangoPay$ThreeArgsMethodOverload<
      string,
      string,
      disputeDocument$CreateDisputeDocumentPage,
      disputeDocument$DisputeDocumentData
    >;

    /**
     * Creates document's page for dispute from file
     * @param disputeId
     * @param disputeDocumentId
     * @param file
     * @param options
     */
    createDisputeDocumentPageFromFile: MangoPay$ThreeArgsMethodOverload<
      string,
      string,
      string,
      disputeDocument$DisputeDocumentData
    >;

    /**
     * Retrieve a list of Disputes pending settlement
     * @param options
     */
    getPendingSettlement: MangoPay$NoArgMethodOverload<dispute$DisputeData[]>;
  }

  declare class MangoPay$Events {
    /**
     * Get events
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<event$EventData[]>;
  }

  declare class MangoPay$Responses {
    /**
     * Get response from previous call
     * @param options
     */
    get: MangoPay$NoArgMethodOverload<any[]>;
  }

  declare class MangoPay$Mandates {
    /**
     * Create a new Mandate
     * @param mandate
     * @param options
     */
    create: MangoPay$MethodOverload<mandate$CreateMandate, mandate$MandateData>;

    /**
     * Get all mandates
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<mandate$MandateData[]>;

    /**
     * Get mandate by ID
     * @param mandateId
     * @param options
     */
    get: MangoPay$MethodOverload<string, mandate$MandateData>;

    /**
     * Cancel a mandate
     * @param mandateId
     * @param options
     */
    cancel: MangoPay$MethodOverload<string, mandate$MandateData>;

    /**
     * Gets user's mandates
     * @param userId
     * @param options
     */
    getMandatesForUser: MangoPay$MethodOverload<string, mandate$MandateData[]>;

    /**
     * Gets bank account mandates
     * @param userId
     * @param bankAccountId
     * @param options
     */
    getMandatesForBankAccount: MangoPay$TwoArgsMethodOverload<
      string,
      string,
      mandate$MandateData[]
    >;

    /**
     * Gets Transactions for a Mandate
     * @param mandateId
     * @param options
     */
    getTransactions: MangoPay$MethodOverload<
      string,
      transaction$TransactionData[]
    >;
  }

  declare class MangoPay$Hooks {
    /**
     * Create new hook
     * @param hook
     * @param options
     */
    create: MangoPay$MethodOverload<hook$CreateHook, hook$HookData>;

    /**
     * Get hook
     * @param hookId
     * @param options
     */
    get: MangoPay$MethodOverload<string, hook$HookData>;

    /**
     * Save hook
     * @param hook
     * @param options
     */
    update: MangoPay$MethodOverload<hook$UpdateHook, hook$HookData>;

    /**
     * Get all hooks
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<hook$HookData[]>;
  }

  declare class MangoPay$Reports {
    /**
     * Create a report
     * @param report
     * @param options
     */
    create: MangoPay$MethodOverload<report$CreateReport, report$ReportData>;

    /**
     * Get a report
     * @param reportId
     * @param options
     */
    get: MangoPay$MethodOverload<string, report$ReportData>;

    /**
     * Get all reports
     * @param options
     */
    getAll: MangoPay$NoArgMethodOverload<report$ReportData[]>;
  }
}
