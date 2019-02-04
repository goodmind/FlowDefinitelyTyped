declare module 'mangopay2-nodejs-sdk' {
        import type {
          ApiMethod,CountryISO,CurrencyISO,MakeKeysRequired,Omit,OmitType,PickPartialRequired,ValueOf,PickPartial,DeepPartial
        } from './types';

	declare module.exports: typeof MangoPay

	declare class MangoPay  {
constructor(config: MangoPay$MangoPay$Config): this;
config: MangoPay$MangoPay$Config;
requestOptions: MangoPay$MangoPay$RequestOptions;
MangoPay$Users: MangoPay$MangoPay$Users;
MangoPay$BankAccounts: MangoPay$MangoPay$BankAccounts;
MangoPay$BankingAliases: MangoPay$MangoPay$BankingAliases;
MangoPay$DisputeDocuments: MangoPay$MangoPay$DisputeDocuments;
MangoPay$Wallets: MangoPay$MangoPay$Wallets;
MangoPay$KycDocuments: MangoPay$MangoPay$KycDocuments;
MangoPay$UboDeclarations: MangoPay$MangoPay$UboDeclarations;
MangoPay$Cards: MangoPay$MangoPay$Cards;
MangoPay$CardRegistrations: MangoPay$MangoPay$CardRegistrations;
MangoPay$CardPreAuthorizations: MangoPay$MangoPay$CardPreAuthorizations;
MangoPay$PayIns: MangoPay$MangoPay$PayIns;
MangoPay$Transfers: MangoPay$MangoPay$Transfers;
MangoPay$PayOuts: MangoPay$MangoPay$PayOuts;
MangoPay$Refunds: MangoPay$MangoPay$Refunds;
MangoPay$Clients: MangoPay$MangoPay$Clients;
MangoPay$Disputes: MangoPay$MangoPay$Disputes;
MangoPay$Repudiations: MangoPay$MangoPay$Repudiations;
MangoPay$Events: MangoPay$MangoPay$Events;
MangoPay$Responses: MangoPay$MangoPay$Responses;
MangoPay$Mandates: MangoPay$MangoPay$Mandates;
MangoPay$Hooks: MangoPay$MangoPay$Hooks;
MangoPay$Reports: MangoPay$MangoPay$Reports;
models: typeof undefined;
Log(...args: any[]): void;
authorize(callback: (data: MangoPay$MangoPay$AuthorizationData) => void): void;
authorize(): Promise<MangoPay$MangoPay$AuthorizationData>;
buildRequestData(entity: any): any;
canReadSubRequestData(entity: any, propertyName: any): boolean;
isExpired(): boolean;
method(
method: ApiMethod,
callback: (...args: any[]) => void,
options: MangoPay$MangoPay$RequestOptions): any
}
	declare interface MangoPay$AuthorizationData {
access_token: string,
token_type: string,
expires_in: number
} 

declare interface MangoPay$Headers {
"Content-Type": string,
"User-Agent": string,
"Idempotency-Key": string,
Authorization: string,
[header: string]: string | void
} 


/**
 * A UTC timestamp in seconds
 */
declare type MangoPay$Timestamp = number;

declare type MangoPay$ColumnAndDirection = "ASC" | "DESC";

declare type MangoPay$AVSResult = "NO_CHECK"
| "NO_MATCH"
| "ADDRESS_MATCH_ONLY"
| "POSTAL_CODE_MATCH_ONLY"
| "FULL_MATCH";

declare type MangoPay$SecureMode = "DEFAULT" | "FORCE";

declare type MangoPay$PreAuthorizationExecutionType = "DIRECT";

declare type MangoPay$PaymentStatus = "WAITING" | "CANCELED" | "EXPIRED" | "VALIDATED";

declare type MangoPay$PreAuthorizationStatus = "CREATED" | "SUCCEEDED" | "FAILED";

declare interface MangoPay$BillingData {
models$Address: models$models$Address | address$address$AddressData | string
} 

declare interface MangoPay$SecurityInfoData {
MangoPay$AVSResult: MangoPay$AVSResult
} 

declare interface MangoPay$MoneyData {

/**
 * The currency - should be ISO_4217 format
 */
Currency: CurrencyISO,

/**
 * An amount of money in the smallest sub-division of the currency, e.g. 12.60 EUR would be represented as 1260 whereas 12 JPY would be represented as just 12)
 */
Amount: number
} 

declare interface MangoPay$WithResponse<T> {
statusCode: number,
body: T,
headers: MangoPay$Headers
} 

declare interface MangoPay$NoArgMethodOverload<R> {
(options: MangoPay$MethodOptionWithResponse): Promise<MangoPay$WithResponse<R>>,
(options?: MangoPay$MethodOptionWithoutResponse): Promise<R>,
(callback: (data: MangoPay$WithResponse<R>) => void, options?: MangoPay$MethodOptionWithResponse): void,
(callback: (data: R) => void, options?: MangoPay$MethodOptionWithoutResponse): void
} 

declare interface MangoPay$MethodOverload<T, R> {
(data: T, options: MangoPay$MethodOptionWithResponse): Promise<MangoPay$WithResponse<R>>,
(data: T, options?: MangoPay$MethodOptionWithoutResponse): Promise<R>,
(data: T, callback: (data: MangoPay$WithResponse<R>) => void, options: MangoPay$MethodOptionWithResponse): void,
(data: T, callback: (data: R) => void, options?: MangoPay$MethodOptionWithoutResponse): void
} 

declare interface MangoPay$TwoArgsMethodOverload<T, U, R> {
(data: T, extra: U, options: MangoPay$MethodOptionWithResponse): Promise<MangoPay$WithResponse<R>>,
(data: T, extra: U, options?: MangoPay$MethodOptionWithoutResponse): Promise<R>,
(data: T, extra: U, callback: (data: MangoPay$WithResponse<R>) => void, options?: MangoPay$MethodOptionWithResponse): void,
(data: T, extra: U, callback: (data: R) => void, options?: MangoPay$MethodOptionWithoutResponse): void
} 

declare interface MangoPay$ThreeArgsMethodOverload<T, U, V, R> {
(data: T, extra: U, lastArg: V, options: MangoPay$MethodOptionWithResponse): Promise<MangoPay$WithResponse<R>>,
(data: T, extra: U, lastArg: V, options?: MangoPay$MethodOptionWithoutResponse): Promise<R>,
(data: T, extra: U, lastArg: V, callback: (data: MangoPay$WithResponse<R>) => void, options?: MangoPay$MethodOptionWithResponse): void,
(data: T, extra: U, lastArg: V, callback: (data: R) => void, options?: MangoPay$MethodOptionWithoutResponse): void
} 

declare interface MangoPay$Config {

/**
 * API Client Id
 */
clientId: string,

/**
 * API Client Api Key
 */
clientApiKey: string,

/**
 * API Base URL.The fault base value points to sandbox.
 * Production is 'https://api.mangopay.com'
 * @default "https://api.sandbox.mangopay.com"
 */
baseUrl?: string,

/**
 * Active debugging
 * @default false
 */
debugMode?: boolean,

/**
 * Log function to be used for debug
 * @default `console.log`
 */
logClass(...args: any[]): void,

/**
 * Set the connection timeout limit(in milliseconds)
 * @default 30000
 */
connectionTimeout?: number,

/**
 * Set the response timeout limit(in milliseconds)
 * @default 80000
 */
responseTimeout?: number,

/**
 * API Version
 * @default 'v2.01'
 */
apiVersion?: string,

/**
 * Set a custom error handler
 * @default `console.error`
 */
errorHandler(options: any, err: any): void
} 

declare interface MangoPay$RequestOptions {
requestConfig: {
timeout: number
},
responseConfig: {
timeout: number
},

/**
 * Path options are replacing the ${placeholders} from apiMethods
 */
path: {
clientId: string,
apiVersion: string,
+id: string
},
headers: $Shape<MangoPay$Headers>
} 

declare type MangoPay$WithToJson<T: {[key: string]: any}> = T & {
toJSON(): any
};

declare interface MangoPay$ReadResponseHeaders {
resolveWithFullResponse: true
} 

declare interface MangoPay$PaginationOptions {

/**
 * The page number of results you wish to return
 * @default 1
 */
Page?: number,

/**
 * The number of results to return per page: Max 100;
 * @default 10
 */
Per_Page?: number
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
} & Record<string, any>


declare type MangoPay$MethodOptions = {
data?: MangoPay$WithToJson<{[key: string]: any}> | string,
parameters?: MangoPay$FilterOptions & MangoPay$PaginationOptions
} & DeepPartial<MangoPay$RequestOptions>


declare type MangoPay$MethodOptionWithResponse = {
resolveWithFullResponse: true
} & MangoPay$MethodOptions


declare type MangoPay$MethodOptionWithoutResponse = {
resolveWithFullResponse?: false
} & MangoPay$MethodOptions


declare interface MangoPay$DependsObject {
dependsPropertyName: string,
propertyName: string,
propertyValueMapping: Record<string, models$models$Model>
} 

declare interface MangoPay$ModelMethods<T: {}> {
initialize(): void,

/**
 * Returns object property value
 * @param attribute
 */
getData<K: $Keys<T>>(attribute: K): $ElementType<T, K>,

/**
 * @param attribute - attribute's value to be set or hash of properties with values
 * @param value - value to be set
 */
setData<K: $Keys<T>>(attribute: K, value: $ElementType<T, K>): this,
setData(attribute: $Shape<T>): this,
getReadOnlyProperties(): Array<$Keys<T>>,
getDependsObjects(): MangoPay$DependsObject[],
parse(): void
} 


      declare var npm$namespace$models: {
        
        PayInExecutionType: typeof models$PayInExecutionType,
PayInPaymentType: typeof models$PayInPaymentType,
MandateStatus: typeof models$MandateStatus,
LegalPersonType: typeof models$LegalPersonType,
PersonType: typeof models$PersonType,
BankAccountType: typeof models$BankAccountType,
DeclaredUboStatus: typeof models$DeclaredUboStatus,
KycDocumentStatus: typeof models$KycDocumentStatus,
KycDocumentType: typeof models$KycDocumentType,
PayOutPaymentType: typeof models$PayOutPaymentType,
PlatformType: typeof models$PlatformType,
UboDeclarationRefusedReasonType: typeof models$UboDeclarationRefusedReasonType,
UboDeclarationStatus: typeof models$UboDeclarationStatus,
UboRefusedReasonType: typeof models$UboRefusedReasonType,
UserNaturalCapacity: typeof models$UserNaturalCapacity,
      }
declare var models$PayInExecutionType: MangoPay$IPayInExecutionType;

declare var models$PayInPaymentType: MangoPay$IPayInPaymentType;

declare var models$MandateStatus: MangoPay$IMandateStatus;

declare var models$LegalPersonType: MangoPay$ILegalPersonType;

declare var models$PersonType: MangoPay$IPersonType;

declare var models$BankAccountType: MangoPay$IBankAccountType;

declare var models$DeclaredUboStatus: MangoPay$IDeclaredUboStatus;

declare var models$KycDocumentStatus: MangoPay$IKycDocumentStatus;

declare var models$KycDocumentType: MangoPay$IKycDocumentType;

declare var models$PayOutPaymentType: MangoPay$IPayOutPaymentType;

declare var models$PlatformType: MangoPay$IPlatformType;

declare var models$UboDeclarationRefusedReasonType: MangoPay$IUboDeclarationRefusedReasonType;

declare var models$UboDeclarationStatus: MangoPay$IUboDeclarationStatus;

declare var models$UboRefusedReasonType: MangoPay$IUboRefusedReasonType;

declare var models$UserNaturalCapacity: MangoPay$IUserNaturalCapacity;

declare class models$DeclaredUbo mixins models$Model<uboDeclaration$uboDeclaration$UboDeclarationData> {
constructor(data: $Shape<uboDeclaration$uboDeclaration$UboDeclarationData>): this
}

declare class models$Model<T> mixins MangoPay$ModelMethods<T> {
initialize(): void;
getData<K: $Keys<T>>(attribute: K): $ElementType<T, K>;
setData<K: $Keys<T>>(attribute: K, value: $ElementType<T, K>): this;
setData(attribute: $Shape<T>): this;
setData(attribute: any, value?: any): this;
getReadOnlyProperties(): Array<$Keys<T>>;
getDependsObjects(): MangoPay$DependsObject[];
parse(): void;
constructor(data: T): this
}

declare class models$EntityBase<T> mixins models$Model<T> {
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
toJSON(): any
}

declare class models$Money mixins models$EntityBase<MangoPay$MoneyData> {
constructor(data: MangoPay$MoneyData): this
}

declare class models$Billing mixins models$EntityBase<MangoPay$BillingData> {
constructor(data: MangoPay$BillingData): this
}

declare type models$Address = {} & address$address$AddressData


declare type models$BankingAlias = {} & bankingAlias$bankingAlias$IBANBankingAliasData


declare class models$BankingAliasIBAN mixins models$BankingAlias {}

declare type models$BankAccount = {} & bankAccount$bankAccount$DataIntersection


declare class models$BankAccountDetails  {
constructor(data: any): this
}

declare type models$BankAccountDetailsCA = {} & bankAccount$bankAccount$CADetails


declare type models$BankAccountDetailsOther = {} & bankAccount$bankAccount$OtherDetails


declare type models$BankAccountDetailsGB = {} & bankAccount$bankAccount$GBDetails


declare type models$BankAccountDetailsIBAN = {} & bankAccount$bankAccount$IBANDetails


declare type models$BankAccountDetailsUS = {} & bankAccount$bankAccount$USDetails


declare type models$Transaction = {} & transaction$transaction$TransactionData


declare class models$ClientWallet mixins models$EntityBase<wallet$wallet$WalletData> {}

declare class models$Wallet mixins models$EntityBase<wallet$wallet$WalletData> {
constructor(data: wallet$wallet$CreateWallet | wallet$wallet$UpdateWallet): this
}

declare type models$DocumentPageConsult = {

/**
 * URL where this document page can be viewed.
 */
Url: string,

/**
 * Time in millis when the page consult will expire.
 */
ExpirationDate: MangoPay$Timestamp
} & disputeDocument$models$DocumentPageConsult


declare class models$Document mixins models$EntityBase {
constructor(data: any): this
}

declare type models$DisputeDocument = {} & disputeDocument$disputeDocument$DisputeDocumentData


declare type models$DisputeDocumentPage = {} & disputeDocument$disputeDocument$CreateDisputeDocumentPage


declare type models$KycDocument = {} & kycDocument$kycDocument$KycDocumentData


declare type models$KycPage = {} & kycDocument$kycDocument$CreateKycPage


declare type models$EMoney = {} & eMoney$eMoney$EMoneyData


declare type models$UboDeclaration = {} & uboDeclaration$uboDeclaration$UboDeclarationData


declare type models$CardRegistration = {} & cardRegistration$cardRegistration$CardRegistrationData


declare type models$Card = {} & card$card$CardData


declare type models$CardPreAuthorization = {} & cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData


declare class models$SecurityInfo mixins models$EntityBase<models$SecurityInfo & entityBase$entityBase$EntityBaseData> {
constructor(data: models$SecurityInfo): this
}

declare type models$UserLegal = {} & user$user$UserLegalData


declare type models$UserNatural = {} & user$user$UserNaturalData


declare type models$User = {} & user$user$UserData


declare type models$PayIn = {} & payIn$payIn$BasePayInData


declare class models$PayInPaymentDetails mixins models$EntityBase {
constructor(data: any): this
}

declare class models$PayInExecutionDetails mixins models$EntityBase {
constructor(data: any): this
}

declare class models$PayInExecutionDetailsDirect mixins models$PayInExecutionDetails {
constructor(data: any): this
}

declare class models$PayInExecutionDetailsWeb mixins models$PayInExecutionDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsBankWire mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsBankingAlias mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsCard mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsCardDirect mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsCardWeb mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsDirectDebitDirect mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsDirectDebitWeb mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsPayPal mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInPaymentDetailsPreAuthorized mixins models$PayInPaymentDetails {
constructor(data: any): this
}

declare class models$PayInTemplateURLOptions mixins models$EntityBase {
constructor(data: any): this
}

declare class models$Refund mixins models$EntityBase<refund$refund$RefundData> {
constructor(data: refund$refund$CreatePayInRefund | refund$refund$CreateTransferRefund): this
}

declare class models$RefundReasonDetails mixins models$EntityBase {
constructor(data: any): this
}

declare type models$Repudiation = {} & repudiation$repudiation$RepudiationData


declare type models$Client = {} & client$client$ClientData


declare class models$PlatformCategorization mixins models$EntityBase<client$models$PlatformCategorization> {
constructor(data: client$models$PlatformCategorization): this
}

declare type models$Dispute = {} & dispute$dispute$DisputeData


declare class models$DisputeReason mixins models$Model {
constructor(data: any): this
}

declare type models$SettlementTransfer = {} & settlementTransfer$settlementTransfer$SettlementTransferData


declare type models$Transfer = {} & transfer$transfer$TransferData


declare class models$PayOut mixins models$EntityBase<models$PayOut.PayOut$PayOutData> {
constructor(data: $Shape<models$PayOut.PayOut$CreatePayOut>): this
}

declare class models$PayOutPaymentDetails mixins models$EntityBase {
constructor(data?: any): this
}

declare class models$PayOutPaymentDetailsBankWire mixins models$PayOutPaymentDetails {
constructor(data?: any): this
}

declare type models$Mandate = {} & mandate$mandate$MandateData


declare type models$Hook = {} & hook$hook$HookData


declare type models$Report = {} & report$report$ReportData


declare class models$ReportFilter mixins models$Model<report$report$Filters> {
constructor(data?: $Shape<report$report$Filters>): this
}

declare interface MangoPay$IPayInExecutionType {
Direct: "DIRECT",
Web: "WEB"
} 

declare interface MangoPay$IPayInPaymentType {
BankWire: "BANK_WIRE",
models$Card: "CARD",
DirectDebit: "DIRECT_DEBIT",
Preauthorized: "PREAUTHORIZED",
PayPal: "PAYPAL"
} 

declare interface MangoPay$IMandateStatus {
Created: "CREATED",
Submitted: "SUBMITTED",
Active: "ACTIVE",
Failed: "FAILED"
} 

declare interface MangoPay$ILegalPersonType {
NotSpecified: "NotSpecified",
Business: "BUSINESS",
Organization: "ORGANIZATION",
Soletrader: "SOLETRADER"
} 

declare interface MangoPay$IPersonType {
NotSpecified: "NotSpecified",
Natural: "NATURAL",
Legal: "LEGAL"
} 

declare interface MangoPay$IBankAccountType {
NotSpecified: "NotSpecified",
IBAN: "IBAN",
GB: "GB",
US: "US",
CA: "CA",
OTHER: "OTHER"
} 

declare interface MangoPay$IDeclaredUboStatus {
Created: "CREATED",
Validated: "VALIDATED",
Refused: "REFUSED"
} 

declare interface MangoPay$IKycDocumentStatus {
Created: "CREATED",
ValidationAsked: "VALIDATION_ASKED",
Validated: "VALIDATED",
Refused: "REFUSED"
} 

declare interface MangoPay$IKycDocumentType {
IdentityProof: "IDENTITY_PROOF",
RegistrationProof: "REGISTRATION_PROOF",
ArticlesOfAssociation: "ARTICLES_OF_ASSOCIATION",
ShareholderDeclaration: "SHAREHOLDER_DECLARATION",
AddressProof: "ADDRESS_PROOF"
} 

declare interface MangoPay$IPayOutPaymentType {
BankWire: "BANK_WIRE"
} 

declare interface MangoPay$IPlatformType {
NotSpecified: "NotSpecified",
MARKETPLACE: "MARKETPLACE",
P2P_PAYMENT: "P2P_PAYMENT",
CROWDFUNDING_DONATION: "CROWDFUNDING_DONATION",
CROWDFUNDING_REWARD: "CROWDFUNDING_REWARD",
CROWDFUNDING_EQUITY: "CROWDFUNDING_EQUITY",
CROWDFUNDING_LOAN: "CROWDFUNDING_LOAN",
OTHER: "OTHER"
} 

declare interface MangoPay$IUboDeclarationRefusedReasonType {

/**
 * When at least one natural user is missing on the declaration
 */
MissingUbo: "MISSING_UBO",

/**
 * When at least one natural user should not be declared as UBO
 */
InvalidDeclaredUbo: "INVALID_DECLARED_UBO",

/**
 * When at least one natural user declared as UBO has been created
 * with wrong details (i.e. date of birth, country of residence)
 */
InvalidUboDetails: "INVALID_UBO_DETAILS"
} 

declare interface MangoPay$IUboDeclarationStatus {

/**
 * When the UBO declaration was created
 */
Created: "CREATED",

/**
 * When validation has been requested for the UBO declaration
 */
ValidationAsked: "VALIDATION_ASKED",

/**
 * When the UBO declaration was validated
 */
Validated: "VALIDATED",

/**
 * When the UBO declaration was refused
 */
Refused: "REFUSED"
} 

declare interface MangoPay$IUboRefusedReasonType {

/**
 * When user should not be declared as UBO
 */
InvalidDeclaredUbo: "INVALID_DECLARED_UBO",

/**
 * When user declared as UBO was created with wrong
 * details (i.e. date of birth, country of residence)
 */
InvalidUboDetails: "INVALID_UBO_DETAILS"
} 

declare interface MangoPay$IUserNaturalCapacity {

/**
 * Real customer
 */
Normal: "NORMAL",

/**
 * User used only for declaration purpose
 */
Declarative: "DECLARATIVE"
} 

declare interface entityBase$EntityBaseData {
Id: string,
Tag: string,
CreationDate: number
} 

declare interface address$AddressData {
AddressLine1: string,
AddressLine2: string,
City: string,
Region: string,
PostalCode: string,
Country: string
} 

declare type address$AddressType = string | address$AddressData | models$models$Address;

declare type bankingAlias$BankingAliasType = "IBAN";

declare type bankingAlias$BankingAliasData = {

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
Type: bankingAlias$BankingAliasType,

/**
 * The owner of the wallet/banking alias
 */
OwnerName: string,

/**
 * Whether the banking alias is active or not
 */
Active: boolean
} & entityBase$entityBase$EntityBaseData


declare type bankingAlias$IBANBankingAliasData = {

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
} & bankingAlias$BankingAliasData


declare type bankingAlias$CreateIBANBankingAlias = {} & PickPartialRequired<bankingAlias$IBANBankingAliasData, "Tag" | "CreditedUserId", "OwnerName" | "Country">


declare type bankAccount$BankAccountType = "IBAN"
| "GB"
| "US"
| "CA"
| "OTHER";

declare type bankAccount$DepositAccountType = "CHECKING" | "SAVINGS";

declare type bankAccount$BaseData = {

/**
 * The object owner's UserId
 */
UserId: string,

/**
 * The type of bank account
 */
Type: bankAccount$BankAccountType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * @deprecated
 */
Details?: models$models$BankAccountDetails,

/**
 * Whether the bank account is active or not
 */
Active: boolean
} & entityBase$entityBase$EntityBaseData


declare interface bankAccount$IBANDetails {
Type: "IBAN",

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The IBAN of the bank account
 */
IBAN: string,

/**
 * The BIC of the bank account
 */
BIC?: string
} 

declare type bankAccount$IBANData = bankAccount$BaseData & bankAccount$IBANDetails;

declare interface bankAccount$USDetails {
Type: "US",

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The account number of the bank account. US account numbers must be digits only.
 */
AccountNumber: string,

/**
 * The ABA of the bank account. Must be numbers only, and 9 digits long
 */
ABA: string,

/**
 * The type of account
 */
bankAccount$DepositAccountType?: bankAccount$DepositAccountType
} 

declare type bankAccount$USData = bankAccount$BaseData & bankAccount$USDetails;

declare interface bankAccount$CADetails {
Type: "CA",

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The branch code of the bank where the bank account. Must be numbers only, and 5 digits long
 */
BranchCode: string,

/**
 * The institution number of the bank account. Must be numbers only, and 3 or 4 digits long
 */
InstitutionNumber: string,

/**
 * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
 */
AccountNumber: string,

/**
 * The name of the bank where the account is held. Must be letters or numbers only and maximum 50 characters long.
 */
BankName: string
} 

declare type bankAccount$CAData = bankAccount$BaseData & bankAccount$CADetails;

declare interface bankAccount$GBDetails {
Type: "GB",

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The sort code of the bank account. Must be numbers only, and 6 digits long
 */
SortCode: string,

/**
 * The account number of the bank account. Must be numbers only. GB account numbers must be 8 digits long.
 */
AccountNumber: string
} 

declare type bankAccount$GBData = bankAccount$BaseData & bankAccount$GBDetails;

declare interface bankAccount$OtherDetails {
Type: "OTHER",

/**
 * The address of the owner of the bank account
 */
OwnerAddress: address$address$AddressType,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The Country of the Address
 */
Country: string,

/**
 * The BIC of the bank account
 */
BIC: string,

/**
 * The account number of the bank account. Must be numbers only. Canadian account numbers must be a maximum of 20 digits.
 */
AccountNumber: string
} 

declare type bankAccount$OtherData = bankAccount$BaseData & bankAccount$OtherDetails;

declare type bankAccount$Data = bankAccount$OtherData
| bankAccount$CAData
| bankAccount$GBData
| bankAccount$IBANData
| bankAccount$USData;

declare type bankAccount$DataIntersection = bankAccount$OtherData & bankAccount$CAData & bankAccount$GBData & bankAccount$IBANData & bankAccount$USData;

declare type bankAccount$CreationDetails = bankAccount$OtherDetails
| bankAccount$CADetails
| bankAccount$GBDetails
| bankAccount$IBANDetails
| bankAccount$USDetails;

declare type transaction$TransactionNature = "REGULAR" | "REPUDIATION" | "REFUND" | "SETTLEMENT";

declare type transaction$TransactionType = "PAYIN" | "TRANSFER" | "PAYOUT";

declare type transaction$TransactionStatus = "CREATED" | "SUCCEEDED" | "FAILED";

declare type transaction$TransactionData = {

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
Type: transaction$TransactionType
} & entityBase$entityBase$EntityBaseData


declare type wallet$ClientFundsType = "FEES" | "CREDIT";

declare type wallet$FundsType = "DEFAULT" | wallet$ClientFundsType;

declare type wallet$WalletData = {

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
wallet$FundsType: wallet$FundsType,

/**
 * A desciption of the wallet
 */
Description: string,

/**
 * The currency - should be ISO_4217 format
 */
Currency: CurrencyISO
} & entityBase$entityBase$EntityBaseData


declare type wallet$ClientWalletData = {
wallet$FundsType: wallet$ClientFundsType
} & Omit<wallet$WalletData, "Owners" | "Description">


declare type wallet$CreateWallet = wallet$UpdateWallet & Pick<wallet$WalletData, "Owners" | "Currency" | "Description">;

declare type wallet$UpdateWallet = PickPartial<wallet$WalletData, "Tag" | "Description">;

declare type disputeDocument$DisputeDocumentType = "DELIVERY_PROOF"
| "INVOICE"
| "REFUND_PROOF"
| "USER_CORRESPONDANCE"
| "USER_ACCEPTANCE_PROOF"
| "PRODUCT_REPLACEMENT_PROOF"
| "OTHER";

declare type disputeDocument$DocumentStatus = "CREATED" | "VALIDATION_ASKED" | "VALIDATED" | "REFUSED";

declare type disputeDocument$RefusedReasonType = "DOCUMENT_UNREADABLE"
| "DOCUMENT_NOT_ACCEPTED"
| "DOCUMENT_HAS_EXPIRED"
| "DOCUMENT_INCOMPLETE"
| "DOCUMENT_MISSING"
| "SPECIFIC_CASE"
| "DOCUMENT_FALSIFIED"
| "OTHER";

declare type disputeDocument$DisputeDocumentData = {

/**
 * Gives the type of the KYC document
 */
Type: disputeDocument$DisputeDocumentType,

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
Status: disputeDocument$DocumentStatus,

/**
 * The message accompanying a refusal
 */
RefusedReasonMessage: string,

/**
 * The type of reason for refusal
 */
disputeDocument$RefusedReasonType: disputeDocument$RefusedReasonType,

/**
 * The date when the document was processed by MANGOPAY
 */
ProcessedDate: MangoPay$Timestamp
} & entityBase$entityBase$EntityBaseData


declare interface disputeDocument$CreateDisputeDocument {

/**
 * Gives the type of the KYC document
 */
Type: disputeDocument$DisputeDocumentType,
Tag?: string
} 

declare interface disputeDocument$SubmitDisputeDocument {

/**
 * The status of this KYC/Dispute document
 */
Status: "VALIDATION_ASKED",
Tag?: string
} 


/**
 * - Documents have to be in "CREATED" Status
 * - You can create as many pages as needed
 * 
 * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
 * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
 */
declare interface disputeDocument$CreateDisputeDocumentPage {

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
File: string
} 

declare type disputeDocument$DocumentPageConsult = {

/**
 * URL where this document page can be viewed.
 */
Url: string,

/**
 * Time in millis when the page consult will expire.
 */
ExpirationDate: MangoPay$Timestamp
} & disputeDocument$disputeDocument$DocumentPageConsult


declare type kycDocument$KycDocumentType = "IDENTITY_PROOF"
| "REGISTRATION_PROOF"
| "ARTICLES_OF_ASSOCIATION"
| "SHAREHOLDER_DECLARATION"
| "ADDRESS_PROOF";

declare type kycDocument$DocumentStatus = "CREATED" | "VALIDATION_ASKED" | "VALIDATED" | "REFUSED";

declare type kycDocument$KYCDocumentRefusedReasonType = "DOCUMENT_UNREADABLE"
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

declare type kycDocument$KycDocumentData = {

/**
 * Gives the type of the KYC document
 */
Type: kycDocument$KycDocumentType,

/**
 * The object owner's UserId
 */
UserId: string,

/**
 * The status of this KYC/Dispute document
 */
Status: kycDocument$DocumentStatus,

/**
 * The message accompanying a refusal
 */
RefusedReasonMessage: string,

/**
 * The type of reason for refusal
 */
disputeDocument$RefusedReasonType: kycDocument$KYCDocumentRefusedReasonType,

/**
 * The date when the document was processed by MANGOPAY
 */
ProcessedDate: MangoPay$Timestamp
} & entityBase$entityBase$EntityBaseData


declare interface kycDocument$CreateKycDocument {

/**
 * Gives the type of the KYC document
 */
Type: kycDocument$KycDocumentType,
Tag?: string,

/**
 * Gives the type of the KYC document
 */
Type: kycDocument$KycDocumentType,
Tag?: string
} 

declare interface kycDocument$SubmitKycDocument {

/**
 * The status of this KYC/Dispute document
 */
Status: "VALIDATION_ASKED",
Tag?: string
} 


/**
 * - Documents have to be in "CREATED" Status
 * - You can create as many pages as needed
 * 
 * Remember to change Status to "VALIDATION_ASKED" to submit KYC documents
 * The maximum size per page is about 7Mb (or 10Mb when base64encoded). The following formats are accepted for the documents : .pdf, .jpeg, .jpg, .gif and .png. The minimum size is 1Kb.
 */
declare interface kycDocument$CreateKycPage {

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
File: string
} 

declare type eMoney$EMoneyData = {

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
} & entityBase$entityBase$EntityBaseData


declare type uboDeclaration$UboDeclarationData = {

/**
 * The object owner's UserId
 */
UserId: string,

/**
 * Status of a UBO Declaration
 */
Status: kycDocument$kycDocument$DocumentStatus,

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
} & entityBase$entityBase$EntityBaseData


declare interface uboDeclaration$CreateUboDeclaration {
DeclaredUBOs?: string[]
} 

declare interface uboDeclaration$UpdateUboDeclaration {
Id: string,
Tag?: string,
Status?: "VALIDATION_ASKED",

/**
 * An array of UserIDs declared as Ultimate Beneficial Owners of a BUSINESS Legal User.
 */
DeclaredUBOs?: string[]
} 

declare type cardRegistration$CardRegistrationData = {

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
card$CardType: card$card$CardType,

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
Status: card$card$CardStatus
} & entityBase$entityBase$EntityBaseData


declare type cardRegistration$CreateCardRegistration = {} & PickPartialRequired<cardRegistration$CardRegistrationData, "CardType" | "Tag", "UserId" | "Currency">


declare type cardRegistration$UpdateCardRegistration = PickPartial<cardRegistration$CardRegistrationData, "Tag" | "RegistrationData">;

declare type card$CardType = "CB_VISA_MASTERCARD"
| "DINERS"
| "MASTERPASS"
| "MAESTRO"
| "P24"
| "IDEAL"
| "BCMC"
| "PAYLIB";

declare type card$CardStatus = "CREATED" | "VALIDATED" | "ERROR";

declare type card$CardValidity = "UNKNOWN" | "VALID" | "INVALID";

declare type card$CardData = {

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
card$CardType: card$CardType,

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
Validity: card$CardValidity,

/**
 * A unique representation of a 16-digits card number
 */
Fingerprint: string
} & entityBase$entityBase$EntityBaseData


declare interface card$UpdateCard {
Id: string,
Active?: false
} 

declare type cardPreAuthorization$CardPreAuthorizationData = {

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
MangoPay$PaymentStatus: MangoPay$PaymentStatus,

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
MangoPay$SecureMode: MangoPay$SecureMode,

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
models$Billing: MangoPay$BillingData,

/**
 * Contains useful information related to security and fraud
 */
models$SecurityInfo: MangoPay$SecurityInfoData
} & entityBase$entityBase$EntityBaseData


declare type cardPreAuthorization$CreateCardPreAuthorization = PickPartialRequired<cardPreAuthorization$CardPreAuthorizationData, "Tag" | "Billing" | "SecureMode", "AuthorId" | "DebitedFunds" | "CardId" | "SecureModeReturnURL">;

declare type cardPreAuthorization$UpdateCardPreAuthorization = PickPartialRequired<cardPreAuthorization$CardPreAuthorizationData, "Tag", "PaymentStatus" | "Id">;

declare type hook$HookValidity = "UNKNOWN" | "VALID" | "INVALID";

declare type hook$HookStatus = "DISABLED" | "ENABLED";

declare type hook$HookData = {

/**
 * This is the URL where your receive notification for each EventType
 */
Url: string,

/**
 * Whether the hook is enabled or not
 */
Status: hook$HookStatus,

/**
 * Whether the hook is valid or not
 */
Validity: hook$HookValidity,

/**
 * The event type
 */
event$EventType: event$event$EventType
} & entityBase$entityBase$EntityBaseData


declare type hook$CreateHook = {} & PickPartialRequired<hook$HookData, "Tag", "EventType" | "Url">


declare type hook$UpdateHook = {} & PickPartialRequired<hook$HookData, "EventType" | "Url" | "Tag", "Id">


declare interface report$Filters {

/**
 * To return only resources that have CreationDate BEFORE this date
 */
BeforeDate: MangoPay$Timestamp,

/**
 * To return only resources that have CreationDate AFTER this date
 */
AfterDate: MangoPay$Timestamp,

/**
 * The type of the transaction
 */
Type: transaction$transaction$TransactionType[],

/**
 * The status of the transaction
 */
Status: transaction$transaction$TransactionStatus[],

/**
 * The nature of the transaction
 */
Nature: transaction$transaction$TransactionNature[],

/**
 * The minimum amount of DebitedFunds
 */
MinDebitedFundsAmount: number,

/**
 * The currency for the minimum amount of DebitedFunds
 */
MinDebitedFundsCurrency: CurrencyISO,

/**
 * The maximum amount of DebitedFunds
 */
MaxDebitedFundsAmount: number,

/**
 * The currency for the maximum amount of DebitedFunds
 */
MaxDebitedFundsCurrency: CurrencyISO,

/**
 * The minimum amount of Fees
 */
MinFeesAmount: number,

/**
 * The currency for the minimum amount of Fees
 */
MinFeesCurrency: CurrencyISO,

/**
 * The maximum amount of Fees
 */
MaxFeesAmount: number,

/**
 * The currency for the maximum amount of Fees
 */
MaxFeesCurrency: CurrencyISO,

/**
 * A user's ID
 */
AuthorId: string,

/**
 * The ID of a wallet
 */
WalletId: string
} 

declare type report$Column = "Alias"
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

declare type report$ReportData = {

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
report$Filters: report$Filters,

/**
 * A list of columns / infos to show in the report
 */
Columns: report$Column[],

/**
 * The result code
 */
ResultCode: string,

/**
 * A verbal explanation of the ResultCode
 */
ResultMessage: string
} & entityBase$entityBase$EntityBaseData


declare type report$CreateReport = {} & PickPartial<report$ReportData, "Tag"
| "CallbackURL"
| "DownloadFormat"
| "Sort"
| "Preview"
| "Filters"
| "Columns">



/**
 * - "CREATED" - the mandate has been created
 * - "SUBMITTED" - the mandate has been submitted to the banks and you can now do payments with this mandate
 * - "ACTIVE" - the mandate is active and has been accepted by the banks and/or successfully used in a payment
 * - "FAILED" - the mandate has failed for a variety of reasons and is no longer available for payments
 */
declare type mandate$MandateStatus = ValueOf<MangoPay$IMandateStatus>;

declare type mandate$MandateScheme = "SEPA" | "BACS";

declare type mandate$MandateCultureCode = "EN"
| "FR"
| "NL"
| "DE"
| "ES"
| "IT"
| "PL";

declare type mandate$MandateExecutionType = "WEB";

declare type mandate$MandateType = "DIRECT_DEBIT";

declare type mandate$MandateData = {

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
Culture: mandate$MandateCultureCode,

/**
 * The type of mandate, but will only be completed once the mandate has been submitted
 */
Scheme: mandate$MandateScheme,

/**
 * The status of the mandate:
 */
Status: mandate$MandateStatus,

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
ExecutionType: mandate$MandateExecutionType,

/**
 * The type of Mandate
 */
mandate$MandateType: mandate$MandateType,

/**
 * The banking reference for this mandate
 */
BankReference: string
} & entityBase$entityBase$EntityBaseData


declare type mandate$CreateMandate = {} & PickPartialRequired<mandate$MandateData, "Tag", "BankAccountId" | "Culture" | "ReturnURL">



/**
 * Should be only one of these values:
 * 1 - for incomes <18K€),
 * 2 - for incomes between 18 and 30K€,
 * 3 - for incomes between 30 and 50K€,
 * 4 - for incomes between 50 and 80K€,
 * 5 - for incomes between 80 and 120K€,
 * 6 - for incomes >120K€
 */
declare type user$IncomeRange = 1
| 2
| 3
| 4
| 5
| 6;

declare type user$PersonType = "NATURAL" | "LEGAL";

declare type user$KYCLevel = "LIGHT" | "REGULAR";

declare type user$LegalPersonType = "BUSINESS" | "ORGANIZATION" | "SOLETRADER";

declare type user$StaticKeys = "KYCLevel"
| "PersonType"
| "Id"
| "CreationDate"
| "ProofOfIdentity"
| "ProofOfAddress"
| "ProofOfRegistration"
| "LegalRepresentativeProofOfIdentity"
| "ShareholderDeclaration"
| "Statute";

declare type user$UserData = {

/**
 * Type of user
 */
user$PersonType: user$PersonType,

/**
 * The person's email address (not more than 12 consecutive numbers) - must be a valid email
 */
Email: string,

/**
 * KYC Level (LIGHT or REGULAR)
 */
user$KYCLevel: user$KYCLevel
} & entityBase$entityBase$EntityBaseData


declare type user$UserLegalData = {
user$PersonType: "LEGAL",

/**
 * The name of the legal user
 */
Name: string,

/**
 * Type for legal user.
 */
user$LegalPersonType: user$LegalPersonType,

/**
 * The address of the company’s headquarters
 */
HeadquartersAddress: address$address$AddressType,

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
LegalRepresentativeAddress: address$address$AddressType,

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
} & user$UserData


declare type user$UserNaturalData = {
user$PersonType: "NATURAL",

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
models$Address: string | address$address$AddressData,

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
user$IncomeRange: user$IncomeRange,

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
} & user$UserData


declare type user$RequiredUserLegalData = "LegalPersonType"
| "Name"
| "LegalRepresentativeBirthday"
| "LegalRepresentativeCountryOfResidence"
| "LegalRepresentativeNationality"
| "LegalRepresentativeFirstName"
| "LegalRepresentativeLastName"
| "Email";

declare type user$RequiredUserNaturalData = "FirstName"
| "LastName"
| "Birthday"
| "Nationality"
| "CountryOfResidence"
| "Email";

declare type user$BaseUserLegalData = {
user$PersonType: "LEGAL"
} & PickPartial<user$UserLegalData, user$RequiredUserLegalData
| "CompanyNumber"
| "LegalRepresentativeEmail"
| "LegalRepresentativeAddress"
| "HeadquartersAddress"
| "Tag">


declare type user$UpdateUserLegalData = {
Id: string
} & user$BaseUserLegalData


declare type user$CreateUserLegalData = {} & MakeKeysRequired<user$BaseUserLegalData, user$RequiredUserLegalData | "PersonType">


declare type user$BaseUserNaturalData = {
user$PersonType: "NATURAL"
} & PickPartial<user$UserNaturalData, user$RequiredUserNaturalData
| "Address"
| "Occupation"
| "IncomeRange"
| "Tag">


declare type user$UpdateUserNaturalData = {
Id: string
} & user$BaseUserNaturalData


declare type user$CreateUserNaturalData = {} & MakeKeysRequired<user$BaseUserNaturalData, user$RequiredUserNaturalData | "PersonType">


declare type payIn$PayInPaymentType = ValueOf<MangoPay$IPayInPaymentType>;

declare type payIn$PayInExecutionType = ValueOf<MangoPay$IPayInExecutionType> | "EXTERNAL_INSTRUCTION";

declare interface payIn$TemplateURLOptions {
Payline: string
} 

declare type payIn$BasePayInData = {

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
Nature: transaction$transaction$TransactionNature,

/**
 * The status of the transaction
 */
Status: transaction$transaction$TransactionStatus,

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
Type: transaction$transaction$TransactionType,

/**
 * The type of payin
 */
PaymentType: payIn$PayInPaymentType,

/**
 * The type of execution for the payin
 */
ExecutionType: payIn$PayInExecutionType
} & entityBase$entityBase$EntityBaseData


declare type payIn$CardWebPayInData = {
ExecutionType: "WEB",
PaymentType: "CARD",

/**
 * The URL to redirect to after payment (whether successful or not)
 */
ReturnURL: string,

/**
 * The type of card
 */
card$CardType: card$card$CardType,

/**
 * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it
 * automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
 */
MangoPay$SecureMode: MangoPay$SecureMode,

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
} & payIn$BasePayInData


declare interface payIn$CreateCardWebPayIn {
ExecutionType: "WEB",
PaymentType: "CARD",

/**
 * A user's ID
 */
AuthorId: string,

/**
 * The user ID who is credited (defaults to the owner of the wallet)
 */
CreditedUserId?: string,

/**
 * Information about the funds that are being debited
 */
DebitedFunds: MangoPay$MoneyData,

/**
 * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
 */
Fees: MangoPay$MoneyData,

/**
 * The URL to redirect to after payment (whether successful or not)
 */
ReturnURL: string,

/**
 * The ID of the wallet where money will be credited
 */
CreditedWalletId: string,

/**
 * The type of card
 */
card$CardType: card$card$CardType,

/**
 * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually.
 * The field lets you activate it automatically with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects
 * there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
 */
MangoPay$SecureMode?: MangoPay$SecureMode,

/**
 * The language to use for the payment page - needs to be the ISO code of the language
 */
Culture: CountryISO,

/**
 * A URL to an SSL page to allow you to customise the payment page. Must be in the format: array("PAYLINE"=>"https://...") and meet all the
 * specifications listed here. Note that only a template for Payline is currently available
 */
payIn$TemplateURLOptions?: payIn$TemplateURLOptions,

/**
 * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and
 * can only include alphanumeric characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
 */
StatementDescriptor?: string
} 

declare type payIn$CardDirectPayInData = {
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
MangoPay$SecureMode: MangoPay$SecureMode,

/**
 * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric
 * characters or spaces. See here for important info. Note that each bank handles this information differently, some show less or no information.
 */
StatementDescriptor: string,

/**
 * Contains useful information related to the user billing
 */
models$Billing: MangoPay$BillingData,

/**
 * Contains information related to security and fraud
 */
models$SecurityInfo: MangoPay$SecurityInfoData,

/**
 * The value is 'true' if the SecureMode was used
 */
SecureModeNeeded: boolean,

/**
 * This is the URL where to redirect users to proceed to 3D secure validation
 */
SecureModeRedirectUrl: string
} & payIn$BasePayInData


declare interface payIn$CreateCardDirectPayIn {
ExecutionType: "DIRECT",
PaymentType: "CARD",

/**
 * A user's ID
 */
AuthorId: string,

/**
 * The user ID who is credited (defaults to the owner of the wallet)
 */
CreditedUserId?: string,

/**
 * The ID of the wallet where money will be credited
 */
CreditedWalletId: string,

/**
 * Information about the funds that are being debited
 */
DebitedFunds: MangoPay$MoneyData,

/**
 * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
 */
Fees: MangoPay$MoneyData,

/**
 * This is the URL where users are automatically redirected after 3D secure validation (if activated)
 */
SecureModeReturnURL: string,

/**
 * The ID of a card
 */
CardId: string,

/**
 * The SecureMode corresponds to '3D secure' for CB Visa and MasterCard. This field lets you activate it manually. The field lets you activate it automatically
 *   with "DEFAULT" (Secured Mode will be activated from €50 or when MANGOPAY detects there is a higher risk ), "FORCE" (if you wish to specifically force the secured mode).
 */
MangoPay$SecureMode?: MangoPay$SecureMode,

/**
 * Contains useful information related to the user billing
 */
models$Billing?: MangoPay$BillingData,

/**
 * A custom description to appear on the user's bank statement. It can be up to 10 characters long, and can only include alphanumeric characters or spaces.
 * See here for important info. Note that each bank handles this information differently, some show less or no information.
 */
StatementDescriptor?: string
} 

declare type payIn$CardPreAuthorizedPayInData = {
PreauthorizationId: string,
ExecutionType: "DIRECT",
PaymentType: "PREAUTHORIZED"
} & payIn$BasePayInData


declare interface payIn$CreateCardPreAuthorizedPayIn {
ExecutionType: "DIRECT",
PaymentType: "PREAUTHORIZED",

/**
 * Custom data that you can add to this item
 */
Tag?: string,

/**
 * A user's ID
 */
AuthorId: string,

/**
 * The user ID who is credited (defaults to the owner of the wallet)
 */
CreditedUserId?: string,

/**
 * The ID of the wallet where money will be credited
 */
CreditedWalletId: string,

/**
 * Information about the funds that are being debited
 */
DebitedFunds: MangoPay$MoneyData,

/**
 * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
 */
Fees: MangoPay$MoneyData,

/**
 * The ID of the Preauthorization object
 */
PreauthorizationId: string
} 

declare interface payIn$BankAccountData {

/**
 * The BIC of the bank account
 */
BIC: string,

/**
 * The IBAN of the bank account
 */
IBAN: string,

/**
 * The name of the owner of the bank account
 */
OwnerName: string,

/**
 * The address of the owner of the bank account
 */
OwnerAddress: string,

/**
 * The type of bank account
 */
Type: ValueOf<MangoPay$IBankAccountType>
} 

declare type payIn$BankWireDirectPayInData = {
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
models$BankAccount: payIn$BankAccountData
} & payIn$BasePayInData


declare type payIn$CreateBankWireDirectPayIn = {
ExecutionType: "DIRECT",
PaymentType: "BANK_WIRE"
} & PickPartialRequired<payIn$BankWireDirectPayInData, "Tag", "AuthorId"
| "CreditedUserId"
| "CreditedWalletId"
| "DeclaredDebitedFunds"
| "DeclaredFees">


declare type payIn$PayInData = payIn$CardDirectPayInData | payIn$CardPreAuthorizedPayInData | payIn$CardWebPayInData | payIn$BankWireDirectPayInData;

declare type refund$RefundReasonType = "INITIALIZED_BY_CLIENT"
| "BANKACCOUNT_INCORRECT"
| "OWNER_DO_NOT_MATCH_BANKACCOUNT"
| "BANKACCOUNT_HAS_BEEN_CLOSED"
| "WITHDRAWAL_IMPOSSIBLE_ON_SAVINGS_ACCOUNTS"
| "OTHER";

declare interface refund$RefundReason {
refund$RefundReasonType: refund$RefundReasonType
} 

declare type refund$RefundData = {

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
InitialTransactionType: transaction$transaction$TransactionType,

/**
 * Contains info about the reason for refund
 */
refund$RefundReason: refund$RefundReason
} & transaction$transaction$TransactionData


declare interface refund$CreatePayInRefund {
AuthorId: string,
Tag?: string,
DebitedFunds?: MangoPay$MoneyData,
Fees?: MangoPay$MoneyData
} 

declare interface refund$CreateTransferRefund {
AuthorId: string,
Tag?: string
} 

declare type repudiation$RepudiationData = {

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
InitialTransactionType: transaction$transaction$TransactionType,

/**
 * Contains info about the reason for refund
 */
refund$RefundReason: refund$refund$RefundReason
} & transaction$transaction$TransactionData


declare type client$BusinessType = "MARKETPLACE" | "CROWDFUNDING" | "FRANCHISE" | "OTHER";

declare type client$Sector = "RENTALS"
| "STORES_FASHION_ACCESSORIES_OBJECTS"
| "BEAUTY_COSMETICS_HEALTH"
| "FOOD_WINE_RESTAURANTS"
| "HOSPITALITY_TRAVEL_CORIDING"
| "ART_MUSIC_ENTERTAINMENT"
| "FURNITURE_GARDEN"
| "SERVICES_JOBBING_EDUCATION"
| "SPORT_RECREATION_ACTIVITIES"
| "TICKETING";

declare type client$PlatformType = ValueOf<MangoPay$IPlatformType>;

declare interface client$PlatformCategorization {
client$Sector: client$Sector,
client$BusinessType: client$BusinessType
} 

declare type client$ClientData = {

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
client$PlatformCategorization: client$PlatformCategorization,

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
HeadquartersAddress: address$address$AddressType,

/**
 * The tax (or VAT) number for your company
 */
TaxNumber: string,

/**
 * Your unique MANGOPAY reference which you should use when contacting us
 */
CompanyReference: string
} & entityBase$entityBase$EntityBaseData


declare interface client$UpdateClient {

/**
 * The primary branding colour to use for buttons for your merchant
 */
PrimaryButtonColour?: string,

/**
 * The primary branding colour to use for your merchant
 */
PrimaryThemeColour?: string,

/**
 * A list of email addresses to use when contacting you for admin/commercial issues/communications
 */
AdminEmails?: string[],

/**
 * A list of email addresses to use when contacting you for technical issues/communications
 */
TechEmails?: string[],

/**
 * A list of email addresses to use when contacting you for billing issues/communications
 */
BillingEmails?: string[],

/**
 * A list of email addresses to use when contacting you for fraud/compliance issues/communications
 */
FraudEmails?: string[],

/**
 * The address of the company’s headquarters
 */
HeadquartersAddress?: address$address$AddressType,

/**
 * The tax (or VAT) number for your company
 */
TaxNumber?: string,

/**
 * The type of platform
 */
client$PlatformType?: client$PlatformType,

/**
 * A description of what your platform does
 */
PlatformDescription?: string,

/**
 * The URL for your website
 */
PlatformURL?: string
} 

declare interface client$UpdateClientLogo {

/**
 * The base64 encoded file which needs to be uploaded
 */
File: string
} 

declare type event$EventType = "PAYIN_NORMAL_CREATED"
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

declare interface event$EventData {

/**
 * The ID of whatever the event is
 */
ResourceId: string,

/**
 * When the event happened
 */
Date: MangoPay$Timestamp,

/**
 * The event type
 */
event$EventType: event$EventType
} 

declare type dispute$DisputeReasonType = "DUPLICATE"
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

declare type dispute$DisputeStatus = "CREATED"
| "PENDING_CLIENT_ACTION"
| "SUBMITTED"
| "PENDING_BANK_ACTION"
| "REOPENED_PENDING_CLIENT_ACTION"
| "CLOSED";

declare type dispute$DisputeType = "CONTESTABLE" | "NOT_CONTESTABLE" | "RETRIEVAL";

declare interface dispute$DisputeReason {
dispute$DisputeReasonType: dispute$DisputeReasonType,
DisputeReasonMessage: string
} 

declare type dispute$DisputeData = {

/**
 * The initial transaction ID
 */
InitialTransactionId: string,

/**
 * The initial transaction type
 */
InitialTransactionType: transaction$transaction$TransactionType,

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
dispute$DisputeReason: dispute$DisputeReason,

/**
 * The status of the dispute
 */
Status: dispute$DisputeStatus,

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
dispute$DisputeType: dispute$DisputeType,

/**
 * The deadline by which you must contest the dispute (if you wish to contest it)
 */
ContestDeadlineDate: MangoPay$Timestamp,

/**
 * The ID of the associated repudiation transaction
 */
RepudiationId: string
} & entityBase$entityBase$EntityBaseData


declare type dispute$SubmitDispute = {} & PickPartial<dispute$DisputeData, "ContestedFunds">


declare type dispute$UpdateDispute = {} & PickPartial<dispute$DisputeData, "Tag">


declare interface MangoPay$DisputeReason {
dispute$DisputeReasonType: dispute$DisputeReasonType,
DisputeReasonMessage: string
} 

declare type settlementTransfer$SettlementTransferData = {

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
InitialTransactionType: transaction$transaction$TransactionType,

/**
 * Contains info about the reason for refund
 */
refund$RefundReason: refund$refund$RefundReason
} & transaction$transaction$TransactionData


declare type settlementTransfer$CreateSettlementTransfer = {} & PickPartialRequired<settlementTransfer$SettlementTransferData, "Tag", "AuthorId" | "DebitedFunds" | "Fees">


declare type transfer$TransferData = {

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
Nature: transaction$transaction$TransactionNature,

/**
 * The status of the transaction
 */
Status: transaction$transaction$TransactionStatus,

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
} & entityBase$entityBase$EntityBaseData


declare interface transfer$CreateTransfer {

/**
 * Custom data that you can add to this item
 */
Tag?: string,

/**
 * A user's ID
 */
AuthorId: string,

/**
 * The user ID who is credited (defaults to the owner of the wallet)
 */
CreditedUserId?: string,

/**
 * Information about the funds that are being debited
 */
DebitedFunds: MangoPay$MoneyData,

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
CreditedWalletId: string
} 

declare type PayOut$PayOutData = {

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
} & Omit<transfer$transfer$TransferData, "Type">


declare interface PayOut$CreatePayOut {

/**
 * A user's ID
 */
AuthorId: string,

/**
 * Information about the funds that are being debited
 */
DebitedFunds: MangoPay$MoneyData,

/**
 * Information about the fees that were taken by the client for this transaction (and were hence transferred to the Client's platform wallet)
 */
Fees: MangoPay$MoneyData,

/**
 * An ID of a Bank Account
 */
BankAccountId: string,

/**
 * The ID of the wallet that was debited
 */
DebitedWalletId: string,

/**
 * A custom reference you wish to appear on the user’s bank statement (your Client Name is already shown). This reference can contain max 12 characters
 */
BankWireRef?: string,
Tag?: string
} 

declare class MangoPay$Users  {

/**
 * Create a new user
 * @param user
 */
create: MangoPay$MethodOverload<user$user$CreateUserLegalData, user$user$UserLegalData> & MangoPay$MethodOverload<user$user$CreateUserNaturalData, user$user$UserNaturalData>;

/**
 * Update a user
 * @param user
 * @param options
 */
update: MangoPay$MethodOverload<models$models$UserLegal | user$user$UpdateUserLegalData, user$user$UserLegalData> & MangoPay$MethodOverload<models$models$UserNatural | user$user$UpdateUserNaturalData, user$user$UserNaturalData>;

/**
 * Get natural or legal user by ID
 * @param userId
 * @param options
 */
get: MangoPay$MethodOverload<string, user$user$UserLegalData | user$user$UserNaturalData>;

/**
 * Get natural user by ID
 * @param userId
 * @param options
 */
getNatural: MangoPay$MethodOverload<string, user$user$UserNaturalData>;

/**
 * Get legal user by ID
 * @param userId
 * @param options
 */
getLegal: MangoPay$MethodOverload<string, user$user$UserLegalData>;

/**
 * Get all users
 */
getAll: MangoPay$NoArgMethodOverload<Array<user$user$UserLegalData | user$user$UserNaturalData>>;

/**
 * Create bank account for user
 * @param userId
 * @param bankAccount
 * @param options
 */
createBankAccount: MangoPay$TwoArgsMethodOverload<string, bankAccount$bankAccount$USDetails, bankAccount$bankAccount$USData> & MangoPay$TwoArgsMethodOverload<string, bankAccount$bankAccount$OtherDetails, bankAccount$bankAccount$OtherData> & MangoPay$TwoArgsMethodOverload<string, bankAccount$bankAccount$IBANDetails, bankAccount$bankAccount$IBANData> & MangoPay$TwoArgsMethodOverload<string, bankAccount$bankAccount$GBDetails, bankAccount$bankAccount$GBData> & MangoPay$TwoArgsMethodOverload<string, bankAccount$bankAccount$CADetails, bankAccount$bankAccount$CAData>;

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
getBankAccounts: MangoPay$MethodOverload<string, bankAccount$bankAccount$Data[]>;

/**
 * Get all bank accounts for user
 * @param userId
 * @param bankAccountId
 * @param options
 */
getBankAccount: MangoPay$TwoArgsMethodOverload<string, string, bankAccount$bankAccount$Data>;

/**
 * Get all wallets accounts for user
 */
getWallets: MangoPay$MethodOverload<string, wallet$wallet$WalletData[]>;

/**
 * Get all transactions for user
 * @param userId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>;

/**
 * Get all cards for user
 * @param userId
 * @param options
 */
getCards: MangoPay$MethodOverload<string, card$card$CardData[]>;

/**
 * Create new KYC document
 * @param userId
 * @param kycDocument
 * @param options
 */
createKycDocument: MangoPay$TwoArgsMethodOverload<string, kycDocument$kycDocument$CreateKycDocument, kycDocument$kycDocument$KycDocumentData>;

/**
 * Get all KYC documents for user
 * @param userId
 * @param options
 */
getKycDocuments: MangoPay$MethodOverload<string, kycDocument$kycDocument$KycDocumentData[]>;

/**
 * Get KYC document
 * @param userId
 * @param kycDocumentId
 * @param options
 */
getKycDocument: MangoPay$TwoArgsMethodOverload<string, string, kycDocument$kycDocument$KycDocumentData>;

/**
 * Update status of KYC Document (Currently only allows for submitting the document)
 * @param userId
 * @param kycDocument
 * @param options
 */
updateKycDocument: MangoPay$TwoArgsMethodOverload<string, kycDocument$kycDocument$SubmitKycDocument, kycDocument$kycDocument$KycDocumentData>;

/**
 * Create page for KYC document
 * @param userId
 * @param kycDocumentId
 * @param kycPage
 * @param options
 */
createKycPage: MangoPay$ThreeArgsMethodOverload<string, string, kycDocument$kycDocument$CreateKycPage, kycDocument$kycDocument$KycDocumentData>;

/**
 * Create page for KYC document
 * @param userId
 * @param kycDocumentId
 * @param filePath
 * @param options
 */
createKycPageFromFile: MangoPay$ThreeArgsMethodOverload<string, string, string, kycDocument$kycDocument$KycDocumentData>;

/**
 * Get users's EMoney
 * @param userId
 * @param options
 */
getEMoney: MangoPay$MethodOverload<string, eMoney$eMoney$EMoneyData>;

/**
 * Create an UboDeclaration for the user
 * @param userId
 * @param uboDeclaration
 * @param options
 */
createUboDeclaration: MangoPay$TwoArgsMethodOverload<string, uboDeclaration$uboDeclaration$CreateUboDeclaration, uboDeclaration$uboDeclaration$UboDeclarationData>;

/**
 * Get all user preauthorizations
 * @param userId
 * @param options
 */
getPreAuthorizations: MangoPay$MethodOverload<string, cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData[]>
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
declare class MangoPay$KycDocuments  {

/**
 * Get all KycDocuments
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<kycDocument$kycDocument$KycDocumentData[]>;

/**
 * Get KycDocument
 * @param kycDocumentId
 * @param options
 */
get: MangoPay$MethodOverload<string, kycDocument$kycDocument$KycDocumentData>;

/**
 * Creates temporary URLs where each page of a KYC document can be viewed.
 * @param documentId
 */
createKycDocumentConsult: MangoPay$MethodOverload<string, any>
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
declare class MangoPay$UboDeclarations  {

/**
 * Retrieves a UBO declaration object from the API.
 * @param id
 * @param options
 */
get: MangoPay$MethodOverload<string, uboDeclaration$uboDeclaration$UboDeclarationData>;

/**
 * Updates a UBO declaration entity.
 * @param uboDeclaration Updated UBO declaration entity - must have ID
 * @param options
 */
update: MangoPay$MethodOverload<uboDeclaration$uboDeclaration$UpdateUboDeclaration, uboDeclaration$uboDeclaration$UboDeclarationData>
}

declare class MangoPay$BankAccounts  {

/**
 * Retrieve list of transactions for a bank account
 * @param bankAccountId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>
}

declare class MangoPay$Wallets  {

/**
 * Create new wallet
 * @param wallet
 * @param options
 */
create: MangoPay$MethodOverload<wallet$wallet$CreateWallet | models$models$Wallet, wallet$wallet$WalletData>;

/**
 * Update wallet
 * @param wallet
 * @param options
 */
update: MangoPay$MethodOverload<wallet$wallet$UpdateWallet | models$models$Wallet, wallet$wallet$WalletData>;

/**
 * Get a specific wallet
 * @param walletId
 */
get: MangoPay$MethodOverload<string, wallet$wallet$WalletData>;

/**
 * Get transactions for the wallet
 * @param walletId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>
}

declare class MangoPay$Cards  {

/**
 * Get card
 * @param cardId
 * @param ptions
 */
get: MangoPay$MethodOverload<string, card$card$CardData>;

/**
 * Gets a list of cards having the same fingerprint.
 * The fingerprint is a hash uniquely generated per 16-digit card number.
 * @param fingerprint The fingerprint hash
 */
getByFingerprint: MangoPay$MethodOverload<string, card$card$CardData[]>;

/**
 * Update card (currently only supports deactivation)
 * @param card
 * @param options
 */
update: MangoPay$MethodOverload<card$card$UpdateCard, card$card$CardData>;

/**
 * Get list of Transactions of a Card
 * @param cardId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>;

/**
 * Gets list of PreAuthorizations of a Card.
 * @param cardId
 * @param options
 */
getPreAuthorizations: MangoPay$MethodOverload<string, cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData[]>
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
declare class MangoPay$CardRegistrations  {

/**
 * Create new card registration
 * @param cardRegistration
 * @param options
 */
create: MangoPay$MethodOverload<cardRegistration$cardRegistration$CreateCardRegistration, cardRegistration$cardRegistration$CardRegistrationData>;

/**
 * Create new card registration
 * @param cardRegistrationId
 * @param options
 */
get: MangoPay$MethodOverload<string, cardRegistration$cardRegistration$CardRegistrationData>;

/**
 * Update card registration
 * @param cardRegistration
 */
update: MangoPay$MethodOverload<cardRegistration$cardRegistration$UpdateCardRegistration, cardRegistration$cardRegistration$CardRegistrationData>
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
declare class MangoPay$CardPreAuthorizations  {

/**
 * Create new pre-authorization
 * @param cardPreAuthorization
 * @param options
 */
create: MangoPay$MethodOverload<cardPreAuthorization$cardPreAuthorization$CreateCardPreAuthorization, cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData>;

/**
 * Get data for Card pre-authorization
 * @param cardPreAuthorizationId
 * @param options
 */
get: MangoPay$MethodOverload<string, cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData>;

/**
 * Update pre-authorization object (currently only supports cancellation)
 * @param cardPreAuthorization
 */
update: MangoPay$MethodOverload<cardPreAuthorization$cardPreAuthorization$UpdateCardPreAuthorization, cardPreAuthorization$cardPreAuthorization$CardPreAuthorizationData>
}

declare class MangoPay$PayIns  {

/**
 * Create new pay-in
 * @param payIn
 * @param options
 */
create: MangoPay$MethodOverload<payIn$payIn$CreateCardDirectPayIn, payIn$payIn$CardDirectPayInData> & MangoPay$MethodOverload<payIn$payIn$CreateCardPreAuthorizedPayIn, payIn$payIn$CardPreAuthorizedPayInData> & MangoPay$MethodOverload<payIn$payIn$CreateCardWebPayIn, payIn$payIn$CardWebPayInData> & MangoPay$MethodOverload<payIn$payIn$CreateBankWireDirectPayIn, payIn$payIn$BankWireDirectPayInData>;

/**
 * Get pay-in
 * @param payInId
 * @param options
 */
get: MangoPay$MethodOverload<string, payIn$payIn$PayInData>;

/**
 * Create refund for pay-in object
 * @param payInId
 * @param refundData
 * @param options
 */
createRefund: MangoPay$TwoArgsMethodOverload<string, refund$refund$CreatePayInRefund, refund$refund$RefundData>;

/**
 * Gets list of Refunds for a PayIn
 * @param payInId
 * @param options
 */
getRefunds: MangoPay$MethodOverload<string, refund$refund$RefundData[]>
}

declare class MangoPay$Refunds  {

/**
 * Get events
 * @param refundId
 * @param options
 */
get: MangoPay$MethodOverload<string, refund$refund$RefundData>
}

declare class MangoPay$Clients  {

/**
 * Get the client
 */
get: MangoPay$NoArgMethodOverload<client$client$ClientData>;

/**
 * Update the client
 * @param client
 * @param options
 */
update: MangoPay$MethodOverload<client$client$UpdateClient, client$client$ClientData>;

/**
 * Upload client logo from base64 image string
 * @param base64Logo
 * @param options
 */
uploadLogo: MangoPay$MethodOverload<string, client$client$ClientData>;

/**
 * Upload client logo from file path
 * @param filePath
 * @param options
 */
uploadLogoFromFile: MangoPay$MethodOverload<string, client$client$ClientData>;

/**
 * Get all client wallets
 * @param options
 */
getClientWallets: MangoPay$NoArgMethodOverload<wallet$wallet$ClientWalletData[]>;

/**
 * Get a client wallet
 * @param fundsType
 * @param currency
 * @param options
 */
getClientWallet: MangoPay$TwoArgsMethodOverload<wallet$wallet$ClientFundsType, CurrencyISO, wallet$wallet$ClientWalletData>;

/**
 * Get client wallets by the type of funds
 * @param fundsType
 * @param options
 */
getClientWalletsByFundsType: MangoPay$MethodOverload<wallet$wallet$ClientFundsType, wallet$wallet$ClientWalletData[]>;

/**
 * Get a client wallet's transactions
 * @param fundsType
 * @param currency
 * @param options
 */
getClientWalletTransactions: MangoPay$TwoArgsMethodOverload<wallet$wallet$ClientFundsType, CurrencyISO, transaction$transaction$TransactionData[]>
}

declare class MangoPay$PayOuts  {

/**
 * Create new pay-out
 * @param payOut
 * @param options
 */
create: MangoPay$MethodOverload<models$PayOut.PayOut$CreatePayOut, models$PayOut.PayOut$PayOutData>;

/**
 * Get payout
 * @param payOutId
 * @param options
 */
get: MangoPay$MethodOverload<string, models$PayOut.PayOut$PayOutData>;

/**
 * Gets list of Refunds of a PayOut
 * @param payOutId
 * @param options
 */
getRefunds: MangoPay$MethodOverload<string, refund$refund$RefundData[]>
}

declare class MangoPay$Transfers  {

/**
 * Create new transfer
 * @param transfer
 * @param options
 */
create: MangoPay$MethodOverload<transfer$transfer$CreateTransfer, transfer$transfer$TransferData>;

/**
 * Get transfer
 * @param transferId
 * @param options
 */
get: MangoPay$MethodOverload<string, transfer$transfer$TransferData>;

/**
 * Create refund for transfer object
 * @param transferId
 * @param refund
 * @param options
 */
createRefund: MangoPay$TwoArgsMethodOverload<string, refund$refund$CreateTransferRefund, refund$refund$RefundData>;

/**
 * Gets list of Refunds of a Transfer
 * @param transferId
 * @param options
 */
getRefunds: MangoPay$MethodOverload<string, refund$refund$RefundData[]>
}

declare class MangoPay$BankingAliases  {

/**
 * Create a banking alias
 * @param bankingAlias
 * @param options
 */
create: MangoPay$MethodOverload<bankingAlias$bankingAlias$CreateIBANBankingAlias, bankingAlias$bankingAlias$IBANBankingAliasData>;

/**
 * Get a banking alias
 * @param bankingAliasId
 * @param options
 */
get: MangoPay$MethodOverload<string, bankingAlias$bankingAlias$IBANBankingAliasData>;

/**
 * Get all banking aliases
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<bankingAlias$bankingAlias$IBANBankingAliasData[]>;

/**
 * Update banking alias
 * @param bankingAliasId
 * @param options
 */
update: MangoPay$MethodOverload<$Shape<Omit<bankingAlias$bankingAlias$CreateIBANBankingAlias, "CreditedUserId">>, bankingAlias$bankingAlias$IBANBankingAliasData>;

/**
 * Deactivate banking alias
 * @param bankingAliasId
 * @param options
 */
deactivate: MangoPay$MethodOverload<string, bankingAlias$bankingAlias$IBANBankingAliasData>;

/**
 * Activate banking alias
 * @param bankingAliasId
 * @param options
 */
activate: MangoPay$MethodOverload<string, bankingAlias$bankingAlias$IBANBankingAliasData>
}

declare class MangoPay$DisputeDocuments  {

/**
 * Get all KycDocuments
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<disputeDocument$disputeDocument$DisputeDocumentData[]>;

/**
 * Get KycDocument
 * @param documentId
 * @param options
 */
get: MangoPay$MethodOverload<string, disputeDocument$disputeDocument$DisputeDocumentData>;

/**
 * Creates temporary URLs where each page of a KYC document can be viewed.
 * @param documentId
 */
createDisputeDocumentConsult: MangoPay$MethodOverload<string, any>
}

declare class MangoPay$Repudiations  {

/**
 * Gets list of Refunds of a Repudiation
 * @param repudiationId
 * @param options
 */
getRefunds: MangoPay$MethodOverload<string, refund$refund$RefundData[]>
}

declare class MangoPay$Disputes  {

/**
 * Get dispute
 * @param disputeId
 * @param options
 */
get: MangoPay$MethodOverload<string, dispute$dispute$DisputeData>;

/**
 * Get all disputes
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<dispute$dispute$DisputeData[]>;

/**
 * Update dispute's tag
 * @param dispute
 * @param options
 */
update: MangoPay$MethodOverload<dispute$dispute$UpdateDispute, dispute$dispute$DisputeData>;

/**
 * Contest dispute
 * @param disputeId
 * @param contestedFunds
 * @param options
 */
contestDispute: MangoPay$TwoArgsMethodOverload<string, MangoPay$MoneyData, dispute$dispute$DisputeData>;

/**
 * This method is used to resubmit a Dispute if it is reopened requiring more docs
 * @param disputeId
 * @param options
 */
resubmitDispute: MangoPay$MethodOverload<string, dispute$dispute$DisputeData>;

/**
 * Close dispute
 * @param disputeId
 * @param options
 */
closeDispute: MangoPay$MethodOverload<string, dispute$dispute$DisputeData>;

/**
 * Gets dispute's transactions
 * @param disputeId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>;

/**
 * Gets dispute's documents for wallet
 * @param walletId
 * @param options
 */
getDisputesForWallet: MangoPay$MethodOverload<string, dispute$dispute$DisputeData[]>;

/**
 * Gets user's disputes
 * @param userId
 * @param options
 */
getDisputesForUser: MangoPay$MethodOverload<string, dispute$dispute$DisputeData[]>;

/**
 * Gets repudiation
 * @param repudiationId
 * @param options
 */
getRepudiation: MangoPay$MethodOverload<string, repudiation$repudiation$RepudiationData[]>;

/**
 * Creates settlement transfer
 * @param settlementTransfer
 * @param repudiationId
 * @param options
 */
createSettlementTransfer: MangoPay$TwoArgsMethodOverload<settlementTransfer$settlementTransfer$CreateSettlementTransfer, string, settlementTransfer$settlementTransfer$SettlementTransferData>;

/**
 * Gets settlement transfer
 * @param settlementTransferId
 * @param options
 */
getSettlementTransfer: MangoPay$MethodOverload<string, settlementTransfer$settlementTransfer$SettlementTransferData>;

/**
 * Gets documents for dispute
 * @param disputeId
 * @param options
 */
getDocumentsForDispute: MangoPay$MethodOverload<string, disputeDocument$disputeDocument$DisputeDocumentData[]>;

/**
 * Update dispute document
 * @param disputeId
 * @param disputeDocument
 * @param options
 */
updateDisputeDocument: MangoPay$TwoArgsMethodOverload<string, $Shape<disputeDocument$disputeDocument$DisputeDocumentData>, disputeDocument$disputeDocument$DisputeDocumentData>;

/**
 * Creates document for dispute
 * @param disputeId
 * @param disputeDocument
 * @param options
 */
createDisputeDocument: MangoPay$TwoArgsMethodOverload<string, disputeDocument$disputeDocument$CreateDisputeDocument, disputeDocument$disputeDocument$DisputeDocumentData>;

/**
 * Creates document's page for dispute
 * @param disputeId
 * @param disputeDocumentId
 * @param disputeDocumentPage
 * @param options
 */
createDisputeDocumentPage: MangoPay$ThreeArgsMethodOverload<string, string, disputeDocument$disputeDocument$CreateDisputeDocumentPage, disputeDocument$disputeDocument$DisputeDocumentData>;

/**
 * Creates document's page for dispute from file
 * @param disputeId
 * @param disputeDocumentId
 * @param file
 * @param options
 */
createDisputeDocumentPageFromFile: MangoPay$ThreeArgsMethodOverload<string, string, string, disputeDocument$disputeDocument$DisputeDocumentData>;

/**
 * Retrieve a list of Disputes pending settlement
 * @param options
 */
getPendingSettlement: MangoPay$NoArgMethodOverload<dispute$dispute$DisputeData[]>
}

declare class MangoPay$Events  {

/**
 * Get events
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<event$event$EventData[]>
}

declare class MangoPay$Responses  {

/**
 * Get response from previous call
 * @param options
 */
get: MangoPay$NoArgMethodOverload<any[]>
}

declare class MangoPay$Mandates  {

/**
 * Create a new Mandate
 * @param mandate
 * @param options
 */
create: MangoPay$MethodOverload<mandate$mandate$CreateMandate, mandate$mandate$MandateData>;

/**
 * Get all mandates
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<mandate$mandate$MandateData[]>;

/**
 * Get mandate by ID
 * @param mandateId
 * @param options
 */
get: MangoPay$MethodOverload<string, mandate$mandate$MandateData>;

/**
 * Cancel a mandate
 * @param mandateId
 * @param options
 */
cancel: MangoPay$MethodOverload<string, mandate$mandate$MandateData>;

/**
 * Gets user's mandates
 * @param userId
 * @param options
 */
getMandatesForUser: MangoPay$MethodOverload<string, mandate$mandate$MandateData[]>;

/**
 * Gets bank account mandates
 * @param userId
 * @param bankAccountId
 * @param options
 */
getMandatesForBankAccount: MangoPay$TwoArgsMethodOverload<string, string, mandate$mandate$MandateData[]>;

/**
 * Gets Transactions for a Mandate
 * @param mandateId
 * @param options
 */
getTransactions: MangoPay$MethodOverload<string, transaction$transaction$TransactionData[]>
}

declare class MangoPay$Hooks  {

/**
 * Create new hook
 * @param hook
 * @param options
 */
create: MangoPay$MethodOverload<hook$hook$CreateHook, hook$hook$HookData>;

/**
 * Get hook
 * @param hookId
 * @param options
 */
get: MangoPay$MethodOverload<string, hook$hook$HookData>;

/**
 * Save hook
 * @param hook
 * @param options
 */
update: MangoPay$MethodOverload<hook$hook$UpdateHook, hook$hook$HookData>;

/**
 * Get all hooks
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<hook$hook$HookData[]>
}

declare class MangoPay$Reports  {

/**
 * Create a report
 * @param report
 * @param options
 */
create: MangoPay$MethodOverload<report$report$CreateReport, report$report$ReportData>;

/**
 * Get a report
 * @param reportId
 * @param options
 */
get: MangoPay$MethodOverload<string, report$report$ReportData>;

/**
 * Get all reports
 * @param options
 */
getAll: MangoPay$NoArgMethodOverload<report$report$ReportData[]>
}
    }
