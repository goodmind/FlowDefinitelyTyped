declare module 'stripe' {
        declare class Stripe  {
DEFAULT_HOST: string;
DEFAULT_PORT: string;
DEFAULT_BASE_PATH: string;
DEFAULT_API_VERSION: string;
DEFAULT_TIMEOUT: number;
PACKAGE_VERSION: string;
USER_AGENT: {
bindings_version: string,
lang: string,
lang_version: string,
platform: string,
publisher: string,
uname: string
};
USER_AGENT_SERIALIZED: string;
resources: typeof undefined;
Stripe$StripeResource: typeof undefined;
constructor(apiKey: string, version?: string): this;
accounts: Stripe$resources.resources$Accounts;
balance: Stripe$resources.resources$Balance;
charges: Stripe$resources.resources$Charges;
coupons: Stripe$resources.resources$Coupons;
customers: Stripe$resources.resources$Customers;
disputes: Stripe$resources.resources$Disputes;
events: Stripe$resources.resources$Events;
invoices: Stripe$resources.resources$Invoices;
invoiceItems: Stripe$resources.resources$InvoiceItems;
payouts: Stripe$resources.resources$Payouts;
plans: Stripe$resources.resources$Plans;

/**
 * @deprecated
 */
recipientCards: Stripe$resources.resources$RecipientCards;

/**
 * @deprecated
 */
recipients: Stripe$resources.resources$Recipients;
subscriptions: Stripe$resources.resources$Subscriptions;
subscriptionItems: Stripe$resources.resources$SubscriptionItems;
tokens: Stripe$resources.resources$Tokens;
transfers: Stripe$resources.resources$Transfers;
applicationFees: Stripe$resources.resources$ApplicationFees;
fileUploads: Stripe$resources.resources$FileUploads;
bitcoinReceivers: Stripe$resources.resources$BitcoinReceivers;
refunds: Stripe$resources.resources$Refunds;
countrySpecs: Stripe$resources.resources$CountrySpecs;
orders: Stripe$resources.resources$Orders;
products: Stripe$resources.resources$Products;
skus: Stripe$resources.resources$SKUs;
webhooks: Stripe$resources.resources$WebHooks;
ephemeralKeys: Stripe$resources.resources$EphemeralKeys;
usageRecords: Stripe$resources.resources$UsageRecords;
usageRecordSummaries: Stripe$resources.resources$UsageRecordSummaries;
setHost(host: string): void;
setHost(host: string, port: string | number): void;
setHost(host: string, port: string | number, protocol: string): void;
setProtocol(protocol: string): void;
setPort(port: string | number): void;
setApiVersion(version?: string): void;
setApiKey(key?: string): void;
setTimeout(timeout?: number): void;
setHttpAgent(agent: string): void;
getConstant(c: string): any;
getClientUserAgent(response: (userAgent: string) => void): void
}
	declare module.exports: typeof Stripe

	declare type Stripe$IBankAccount = bankAccounts$Stripe$IBankAccount;

declare type Stripe$ICard = cards$Stripe$ICard;

declare type accounts$IAccount = {

/**
 * Value is "account"
 */
object: string,

/**
 * Whether or not the account can create live charges
 */
charges_enabled: boolean,

/**
 * The country of the account
 */
country: string,

/**
 * Whether or not account details have been submitted yet. Standalone
 * accounts cannot receive transfers before this is true.
 */
details_submitted: boolean,

/**
 * The display name for this account. This is used on the Stripe dashboard to
 * help you differentiate between accounts.
 */
display_name: string,

/**
 * Whether or not Stripe will send automatic transfers for this account. This
 * is only false when Stripe is waiting for additional information from the
 * account holder.
 */
payouts_enabled: boolean,

/**
 * The state of the account’s information requests, including what
 * information is needed and by when it must be provided.
 */
verification: {

/**
 * A string describing the reason for this account being unable to charge
 * and/or transfer, if that is the case. Possible values are "rejected.fraud",
 * "rejected.terms_of_service", "rejected.listed", "rejected.other",
 * "fields_needed", "listed", or "other".
 */
disabled_reason: string,

/**
 * At what time the fields_needed must be provided. If this date is in
 * the past, the account is already in bad standing, and providing
 * fields_needed is necessary to re-enable transfers and prevent other
 * consequences. If this date is in the future, fields_needed must be
 * provided to ensure the account remains in good standing.
 */
due_by: number,

/**
 * Field names that need to be provided for the account to remain in good
 * standing. Nested fields are separated by "." (for example,
 * "legal_entity.first_name").
 */
fields_needed: string[]
}
} & Stripe$IResourceObject & accounts$IAccountShared


declare type accounts$IAccountCreationOptions = {

/**
 * The country the account holder resides in or that the business is legally
 * established in. For example, if you are in the United States and the
 * business you’re creating an account for is legally represented in Canada,
 * you would use “CA” as the country for the account being created.
 * 
 * optional, default is your own country
 */
country?: string,

/**
 * The email address of the account holder. For standalone accounts, Stripe
 * will email your user with instructions for how to set up their account. For
 * managed accounts, this is only to make the account easier to identify to
 * you: Stripe will never directly reach out to your users.
 * 
 * required if type is "standard"
 */
email?: string,

/**
 * Whether you'd like to create a Custom or Standard account. Custom
 * accounts have extra parameters available to them, and require that you,
 * the platform, handle all communication with the account holder.
 * Standard accounts are normal Stripe accounts: Stripe will email the
 * account holder to setup a username and password, and handle all account
 * management directly with them. Possible values are custom and standard.
 */
type: "custom" | "standard"
} & accounts$IAccountUpdateOptions


declare interface accounts$IAccountShared {
business_logo?: string,

/**
 * The publicly sharable name for this account
 */
business_name?: string,

/**
 * A CSS hex color value representing the primary branding color for this
 * account
 */
business_primary_color?: string,

/**
 * The URL that best shows the service or product provided for this account
 */
business_url?: string,

/**
 * A boolean for whether or not Stripe should try to reclaim negative
 * balances from the account holder’s bank account. See our managed
 * account bank transfer guide for more information
 */
debit_negative_balances?: boolean,

/**
 * Account-level settings to automatically decline certain types of charges
 * regardless of the bank’s decision.
 */
decline_charge_on?: {

/**
 * Whether or not Stripe should automatically decline charges with an
 * incorrect zip/postal code. This setting only applies if a card includes a
 * zip code and the bank specifically marks it as failed.
 */
avs_failure?: boolean,

/**
 * Whether or not Stripe should automatically decline charges with an
 * incorrect CVC. This setting only applies if a card includes a CVC and the
 * bank specifically marks it as failed.
 */
cvc_failure?: boolean
},

/**
 * Three-letter ISO currency code representing the default currency for the
 * account. This must be a currency that Stripe supports in the account’s
 * country.
 */
default_currency?: string,

/**
 * Email address of the account holder. For standalone accounts, this is used
 * to email them asking them to claim their Stripe account. For managed
 * accounts, this is only to make the account easier to identify to you: Stripe
 * will not email the account holder.
 */
email?: string,

/**
 * Information about the holder of this account, i.e. the user receiving funds
 * from this account
 */
legal_entity?: {},

/**
 * A set of key/value pairs that you can attach to an account object. It can be
 * useful for storing additional information about the account in a structured
 * format. This can be unset by updating the value to null and then saving.
 */
metadata?: Stripe$IMetadata,

/**
 * Internal-only description of the product being sold or service being
 * provided by this account. It’s used by Stripe for risk and underwriting
 * purposes.
 */
product_description?: string,

/**
 * The text that will appear on credit card statements by default if a charge is
 * being made directly on the account.
 */
statement_descriptor?: string,

/**
 * A publicly shareable email address that can be reached for support for this
 * account
 */
support_email?: string,

/**
 * A publicly shareable phone number that can be reached for support for
 * this account
 */
support_phone?: string,

/**
 * A publicly shareable URL that can be reached for support for this account
 */
support_url?: string,

/**
 * Details on who accepted the Stripe terms of service, and when they
 * accepted it. See our updating managed accounts guide for more
 * information
 */
tos_acceptance?: {

/**
 * The unix timestamp that Stripe’s terms of service were agreed to by the
 * account holder
 */
date: number,

/**
 * The IP address from which Stripe’s terms of service were agreed to by the account holder
 */
ip?: string,

/**
 * The user agent of the browser from which Stripe’s terms of service
 * were agreed to by the account holder
 */
user_agent?: string
},

/**
 * Details on when funds from charges are available,
 * and when they are paid out to an external account.
 * See our Setting Bank and Debit Card Payouts documentation for details.
 */
payout_schedule?: {

/**
 * The number of days charges for the account will be held before being
 * paid out. May also be the string “minimum” for the lowest available
 * value (based on country). Default is “minimum”. Does not apply when
 * interval is “manual”.
 */
delay_days?: number | string,

/**
 * How frequently funds will be paid out. One of "manual" (for only
 * triggered via API call), "daily", "weekly", or "monthly". Default is "daily".
 */
interval?: "manual" | "daily" | "weekly" | "monthly",

/**
 * The day of the month funds will be paid out. Required and available
 * only if interval is "monthly".
 */
monthly_anchor?: number,

/**
 * The day of the week funds will be paid out, of the style ‘monday’,
 * ‘tuesday’, etc. Required and available only if interval is weekly.
 */
weekly_anchor?: "monday"
| "tuesday"
| "wednesday"
| "thursday"
| "friday"
| "saturday"
| "sunday"
},

/**
 * The text that appears on the bank account statement for payouts.
 * If not set, this defaults to the platform’s bank descriptor as set in the Dashboard.
 */
payout_statement_descriptor?: string
} 

declare type accounts$IAccountUpdateOptions = {

/**
 * A card or bank account to attach to the account. You can provide either a
 * token, like the ones returned by Stripe.js, or a dictionary as documented in
 * the external_account parameter for either card or bank account creation.
 * 
 * This will create a new external account object, make it the new default
 * external account for its currency, and delete the old default if one exists. If
 * you want to add additional external accounts instead of replacing the
 * existing default for this currency, use the bank account or card creation
 * API.
 */
external_account?: {

/**
 * The type of external account. Should be "bank_account".
 */
object: string,

/**
 * The account number for the bank account in string form. Must be a
 * checking account.
 */
account_number: string,

/**
 * The country the bank account is in.
 */
country: string,

/**
 * The currency the bank account is in. This must be a country/currency
 * pairing that Stripe supports.
 */
currency: string,

/**
 * The name of the person or business that owns the bank account. This
 * field is required when attaching the bank account to a customer object.
 */
account_holder_name?: string,

/**
 * The type of entity that holds the account. This can be either
 * "individual" or "company". This field is required when attaching the
 * bank account to a customer object.
 */
account_holder_type?: "individual" | "company" | null,

/**
 * The routing number, sort code, or other country-appropriate institution
 * number for the bank account. For US bank accounts, this is required
 * and should be the ACH routing number, not the wire routing number. If
 * you are providing an IBAN for account_number, this field is not
 * required.
 */
routing_number?: string
}
} & Stripe$IDataOptions & accounts$IAccountShared


declare type accounts$IExternalAccountCreationOptions = {

/**
 * When adding a card to a customer, the parameter name is source. When
 * adding to an account, the parameter name is external_account. The
 * value can either be a token, like the ones returned by our Stripe.js, or a
 * dictionary containing a user’s credit card details (with the options shown
 * below). Stripe will automatically validate the card.
 */
external_account: string,

/**
 * Only applicable on accounts (not customers or recipients). If you set this to true (or if this is the first external account being added
 * in this currency) this card will become the default external account for its currency.
 */
default_for_currency?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type accounts$IExternalAccountUpdateOptions = {

/**
 * If set to true, this bank account will become the default external account for its currency.
 */
default_for_currency?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type accounts$IBankAccountListOptions = {
object: "bank_account"
} & Stripe$IListOptions


declare type accounts$ICardListOptions = {
object: "card"
} & Stripe$IListOptions


declare interface accounts$IRejectReason {

/**
 * The reason for rejecting the account. May be one of "fraud",
 * "terms_of_service", or "other".
 */
reason: "fraud" | "terms_of_service" | "other"
} 

declare interface accounts$ILoginLink {
object: "login_link",
created: number,

/**
 * A single-use login link for an Express account to access their Stripe dashboard.
 */
url: string
} 

declare type applicationFees$IApplicationFee = {

/**
 * Value is "application_fee"
 */
object: string,

/**
 * ID of the Stripe account this fee was taken from. [Expandable]
 */
account: string | accounts$accounts$IAccount,

/**
 * Amount earned, in cents/pence.
 */
amount: number,

/**
 * Positive integer or zero
 */
amount_refunded: number,

/**
 * ID of the Connect Application that earned the fee. [Expandable]
 */
application: string | applications$applications$IApplication,

/**
 * Balance transaction that describes the impact of this collected application
 * fee on your account balance (not including refunds). [Expandable]
 */
balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * ID of the charge that the application fee was taken from. [Expandable]
 */
charge: string | charges$charges$ICharge,
created: number,

/**
 * Three-letter ISO code representing the currency of the charge.
 */
currency: string,
livemode: boolean,

/**
 * ID of the corresponding charge on the platform account, if this fee was the
 * result of a charge using the destination parameter. [Expandable]
 */
originating_transaction: string,

/**
 * Whether or not the fee has been fully refunded. If the fee is only partially
 * refunded, this attribute will still be false.
 */
refunded: boolean,

/**
 * A list of refunds that have been applied to the fee.
 */
refunds: applicationFees$IApplicationFeeRefunds
} & Stripe$IResourceObject


declare type applicationFees$IApplicationFeeListOptions = {

/**
 * Only return application fees for the charge specified by this charge ID.
 */
charge: string
} & Stripe$IListOptionsCreated


declare type applicationFees$IApplicationFeeRefund = {

/**
 * Value is "fee_refund"
 */
object: string,

/**
 * Amount, in cents/pence.
 */
amount: number,

/**
 * Balance transaction that describes the impact on your account balance.
 */
balance_transaction: string | balance$balance$IBalanceTransaction,
created: number,

/**
 * Three-letter ISO code representing the currency.
 */
currency: string,

/**
 * ID of the application fee that was refunded.
 */
fee: string | applicationFees$IApplicationFee,

/**
 * A set of key/value pairs that you can attach to the object. It can be useful
 * for storing additional information in a structured format.
 */
metadata: Stripe$IMetadata
} & Stripe$IResourceObject


declare type applicationFees$IApplicationFeeRefunds = {} & Stripe$IList<applicationFees$IApplicationFeeRefund> & resources$resources$ApplicationFeeRefunds


declare type applicationFees$IApplicationFeeRefundCreationOptions = {

/**
 * A positive integer in pence representing how much of this fee to refund.
 * Can only refund up to the unrefunded amount remaining of the fee.
 * 
 * default is entire application fee
 */
amount?: number
} & Stripe$IDataOptionsWithMetadata


declare type balance$IBalance = {

/**
 * Value is 'balance'
 */
object: string,

/**
 * Funds that are available to be paid out automatically by Stripe or explicitly
 * via the transfers API. The available balance for each currency and payment
 * type can be found in the source_types property.
 */
available: balance$ISourceType[],
livemode: boolean,

/**
 * Funds that are not available in the balance yet, due to the 7-day rolling pay
 * cycle. The pending balance for each currency and payment type can be
 * found in the source_types property
 */
pending: balance$ISourceType[]
} & Stripe$IObject


declare interface balance$ISourceType {
currency: string,
amount: number,
source_types: {
card: number,
bitcoin_receiver?: number,
customer_bank_account?: number,
alipay_account?: number
}
} 

declare type balance$IBalanceTransaction = {

/**
 * Value is 'balance_transaction'
 */
object: string,

/**
 * Gross amount of the transaction, in cents/pence.
 */
amount: number,

/**
 * The date the transaction's net funds will become available in the Stripe balance.
 */
available_on: number,
created: number,

/**
 * Three-letter ISO currency code representing the currency.
 */
currency: string,
description?: string,

/**
 * Fee (in cents/pence) paid for this transaction
 */
fee: number,

/**
 * Detailed breakdown of fees (in cents/pence) paid for this transaction
 */
fee_details: Array<{
amount: number,
application: string,

/**
 * Three-letter ISO currency code representing the currency of the amount that was disputed.
 */
currency: string,
description: string,

/**
 * Type of the fee, one of: "application_fee", "stripe_fee"" or "tax".
 */
type: string
}>,

/**
 * Net amount of the transaction, in cents.
 */
net: number,

/**
 * The Stripe object this transaction is related to. [Expandable]
 */
source: string | Stripe$IResourceObject,

/**
 * The transfers (if any) for which source is a source_transaction.
 */
source_transfers: Stripe$IList<transfers$transfers$ITransfer>,

/**
 * If the transaction's net funds are available in the Stripe balance yet. Either "available" or "pending".
 */
status: string,

/**
 * Transaction type: "adjustment", "application_fee",
 * "application_fee_refund", "charge", "payment", "payment_refund",
 * "refund", "transfer", "transfer_cancel", "transfer_failure", or
 * "transfer_refund".
 */
type: string
} & Stripe$IResourceObject


declare type balance$IBalanceListOptions = {
available_on?: string | Stripe$IDateFilter,
currency?: string,

/**
 * Only returns transactions that are related to the specified Stripe object ID
 * (e.g. filtering by a charge ID will return all related charge transactions).
 */
source?: string,

/**
 * Only returns transactions of the given type.
 */
type?: "charge"
| "refund"
| "adjustment"
| "application_fee"
| "application_fee_refund"
| "transfer"
| "payment"
| "payout"
| "payout_failure"
| "stripe_fee"
| "network_cost",

/**
 * For automatic Stripe payouts only, only returns transactions that were payed out on the specified payout ID.
 */
payout?: string,

/**
 * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
 */
limit?: number
} & Stripe$IListOptionsCreated



/**
 * To charge a credit or a debit card, you create a charge object. You can retrieve and refund individual
 * charges as well as list all charges. Charges are identified by a unique random ID.
 */
declare type charges$ICharge = {

/**
 * Value is 'charge'
 */
object: "charge",

/**
 * Amount charged in cents/pence, positive integer or zero.
 */
amount: number,

/**
 * Amount in cents/pence refunded (can be less than the amount attribute on the
 * charge if a partial refund was issued), positive integer or zero.
 */
amount_refunded: number,

/**
 * ID of the Connect application that created the charge. [Expandable]
 */
application?: string | applications$applications$IApplication | null,

/**
 * The application fee (if any) for the charge. See the Connect documentation
 * for details. [Expandable]
 */
application_fee?: string | applicationFees$applicationFees$IApplicationFee | null,

/**
 * ID of the balance transaction that describes the impact of this charge on
 * your account balance (not including refunds or disputes). [Expandable]
 */
balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * If the charge was created without capturing, this boolean represents whether or not it is
 * still uncaptured or has since been captured.
 */
captured: boolean,
created: number,

/**
 * Three-letter ISO currency code representing the currency in which the
 * charge was made.
 */
currency: string,

/**
 * ID of the customer this charge is for if one exists. [Expandable]
 */
customer: string | customers$ephemeralKeys$ICustomer | null,
description?: string,

/**
 * The account (if any) the charge was made on behalf of, with an automatic
 * transfer. See the [Connect documentation]
 * <https://stripe.com/docs/connect/destination-charges> for details.
 * [Expandable]
 */
destination?: string | accounts$accounts$IAccount | null,

/**
 * Details about the dispute if the charge has been disputed.
 */
dispute?: disputes$disputes$IDispute | null,

/**
 * Error code explaining reason for charge failure if available (see the errors section for a list of
 * codes: https://stripe.com/docs/api#errors).
 */
failure_code: string | null,

/**
 * Message to user further explaining reason for charge failure if available.
 */
failure_message: string | null,

/**
 * Hash with information on fraud assessments for the charge.
 */
fraud_details: {

/**
 * Assessments reported by you have the key user_report and, if set, possible values of "safe" and "fraudulent".
 */
user_report?: "fraudulent" | "safe",

/**
 * Assessments from Stripe have the key stripe_report and, if set, the value "fraudulent".
 */
stripe_report?: "fraudulent"
},

/**
 * ID of the invoice this charge is for if one exists. [Expandable]
 */
invoice: string | invoices$invoices$IInvoice | null,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The Stripe account ID for which these funds are intended. Automatically
 * set if you use the destination parameter. For details, see [Creating
 * Separate Charges and Transfers]
 * <https://stripe.com/docs/connect/charges-transfers#on-behalf-of>.
 */
on_behalf_of?: string | null,

/**
 * ID of the order this charge is for if one exists. [Expandable]
 */
order: string | orders$orders$IOrder | null,

/**
 * Details about whether the payment was accepted, and why. See
 * understanding declines for details. [Expandable]
 */
outcome?: charges$IOutcome,

/**
 * true if the charge succeeded, or was successfully authorized for later capture.
 */
paid: boolean,

/**
 * This is the email address that the receipt for this charge was sent to.
 */
receipt_email: string | null,

/**
 * This is the transaction number that appears on email receipts sent for this charge.
 */
receipt_number: string | null,

/**
 * Whether or not the charge has been fully refunded. If the charge is only partially refunded,
 * this attribute will still be false.
 */
refunded: boolean,

/**
 * A list of refunds that have been applied to the charge.
 */
refunds: charges$IChargeRefunds,

/**
 * ID of the review associated with this charge if one exists. [Expandable]
 */
review?: string | reviews$reviews$IReview | null,

/**
 * Shipping information for the charge.
 */
shipping?: Stripe$IShippingInformation | null,

/**
 * For most Stripe users, the source of every charge is a credit or debit card.
 * This hash is then the card object describing that card.
 */
source: cards$Stripe$ICard | bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver | bankAccounts$Stripe$IBankAccount,

/**
 * The transfer ID which created this charge. Only present if the charge came
 * from another Stripe account. See the Connect documentation for details.
 * [Expandable]
 */
source_transfer: string | transfers$transfers$ITransfer | null,

/**
 * Extra information about a charge. This will appear on your customer’s
 * credit card statement.
 */
statement_descriptor: string | null,

/**
 * The status of the payment is either "succeeded", "pending", or "failed".
 */
status: "succeeded" | "pending" | "failed",

/**
 * ID of the transfer to the destination account (only applicable if the
 * charge was created using the destination parameter). [Expandable]
 */
transfer?: string | transfers$transfers$ITransfer,

/**
 * A string that identifies this transaction as part of a group.
 * See the [Connect documentation]
 * <https://stripe.com/docs/connect/charges-transfers#grouping-transactions>
 * for details.
 */
transfer_group?: string | null
} & Stripe$IResourceObject


declare type charges$IChargeCreationOptions = {

/**
 * A positive integer in the smallest currency unit (e.g 100 cents to charge
 * $1.00, or 1 to charge ¥1, a 0-decimal currency) representing how much to
 * charge the card. The minimum amount is £0.50 (or equivalent in charge
 * currency).
 */
amount: number,

/**
 * 3-letter ISO code for currency.
 */
currency: string,

/**
 * A fee in pence that will be applied to the charge and transferred to the
 * application owner's Stripe account. To use an application fee, the request
 * must be made on behalf of another account, using the Stripe-Account
 * header, an OAuth key, or the destination parameter. For more
 * information, see the application fees documentation.
 * 
 * Connect only.
 */
application_fee?: number,

/**
 * Whether or not to immediately capture the charge. When false, the charge
 * issues an authorization (or pre-authorization), and will need to be
 * captured later. Uncaptured charges expire in 7 days. For more information,
 * see authorizing charges and settling later.
 */
capture?: boolean,

/**
 * An arbitrary string which you can attach to a charge object. It is displayed
 * when in the web interface alongside the charge. Note that if you use Stripe
 * to send automatic email receipts to your customers, your receipt emails
 * will include the description of the charge(s) that they are describing.
 */
description?: string,

/**
 * An account to make the charge on behalf of. If specified, the charge will be
 * attributed to the destination account for tax reporting, and the funds from
 * the charge will be transferred to the destination account. The ID of the
 * resulting transfer will be returned in the transfer field of the response. See
 * the documentation for details.
 * 
 * Connect only.
 */
destination?: string | {

/**
 * ID of the Stripe account this fee will be transferred to.
 */
account: string,

/**
 * A positive integer in the smallest currency unit (e.g 100 cents to charge
 * $1.00, or 1 to charge ¥1, a 0-decimal currency) reflecting the amount of the
 * charge to be transferred to the destination[account].
 */
amount?: number
},

/**
 * A string that identifies this transaction as part of a group.
 * See the Connect documentation for details.
 * 
 * Connect only.
 */
transfer_group?: string,

/**
 * The Stripe account ID that these funds are intended for.
 * Automatically set if you use the destination parameter.
 * See the Connect documentation for details.
 * 
 * Connect only.
 */
on_behalf_of?: string,

/**
 * The email address to send this charge's receipt to. The receipt will not be
 * sent until the charge is paid. If this charge is for a customer, the email
 * address specified here will override the customer's email address.
 * Receipts will not be sent for test mode charges. If receipt_email is
 * specified for a charge in live mode, a receipt will be sent regardless of your
 * email settings.
 */
receipt_email?: string,

/**
 * Shipping information for the charge. Helps prevent fraud on charges for
 * physical goods. For more information, see the Charge object
 * documentation.
 */
shipping?: Stripe$IShippingInformation,

/**
 * The ID of an existing customer that will be charged in this request.
 */
customer?: string,

/**
 * A payment source to be charged, such as a credit card. If you also pass a
 * customer ID, the source must be the ID of a source belonging to the
 * customer. Otherwise, if you do not pass a customer ID, the source you
 * provide must either be a token, like the ones returned by Stripe.js, or a
 * object containing a user's credit card details, with the options described
 * below. Although not all information is required, the extra info helps
 * prevent fraud.
 */
source?: sources$sources$ISourceCreationOptions,

/**
 * An arbitrary string to be displayed on your customer's credit card
 * statement. This may be up to 22 characters. As an example, if your
 * website is RunClub and the item you're charging for is a race ticket, you
 * may want to specify a statement_descriptor of
 * RunClub 5K race ticket. The statement description may not include
 * <>"' characters, and will appear on your customer's statement in capital
 * letters. Non-ASCII characters are automatically stripped. While most
 * banks display this information consistently, some may display it
 * incorrectly or not at all.
 */
statement_descriptor?: string
} & Stripe$IDataOptionsWithMetadata


declare type charges$IChargeCaptureOptions = {

/**
 * A positive integer in the smallest currency unit (e.g 100 cents to charge
 * $1.00, or 1 to charge ¥1, a 0-decimal currency) representing how much to
 * charge the card. The minimum amount is £0.50 (or equivalent in charge
 * currency).
 */
amount?: number
} & Stripe$IDataOptions


declare type charges$IChargeUpdateOptions = {

/**
 * An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge.
 * Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the description
 * of the charge(s) that they are describing. This can be unset by updating the value to null and then saving.
 */
description?: string,

/**
 * A set of key/value pairs you can attach to a charge giving information about its riskiness.
 */
fraud_details?: {

/**
 * If you believe a charge is fraudulent, include a user_report key with a value of fraudulent. If you believe a
 * charge is safe, include a user_report key with a value of safe. Note that you must refund a charge before setting
 * the user_report to fraudulent. Stripe will use the information you send to improve our fraud detection algorithm
 */
user_report?: "fraudulent" | "safe"
},

/**
 * This is the email address that the receipt for this charge will be sent to.
 * If this field is updated, then a new email receipt will be sent to the updated address.
 */
receipt_email?: string,

/**
 * Shipping information for the charge. Helps prevent fraud on charges for
 * physical goods.
 */
shipping?: Stripe$IShippingInformation
} & Stripe$IDataOptionsWithMetadata


declare type charges$IChargeListOptions = {

/**
 * Only return charges for the customer specified by this customer ID.
 */
customer?: string,

/**
 * A filter on the list based on the source of the charge. The value can be a
 * dictionary with the following options:
 */
source?: {

/**
 * Return charges that match this source type string. Available options are
 * "all", "alipay_account", "bitcoin_receiver", or "card".
 */
object: "all" | "alipay_account" | "bitcoin_receiver" | "card"
}
} & Stripe$IListOptionsCreated


declare interface charges$IOutcome {

/**
 * The value reversed_after_approval indicates the payment was blocked by Stripe after
 * bank authorization, and may temporarily appear as “pending” on a cardholder’s statement.
 */
network_status: "approved_by_network" | "declined_by_network" | "not_sent_to_network" | "reversed_after_approval",

/**
 * An enumerated value providing a more detailed explanation of the outcome’s type. Charges
 * blocked by Radar’s default block rule have the value highest_risk_level. Charges placed
 * in review by Radar’s default review rule have the value elevated_risk_level. Charges
 * authorized, blocked, or placed in review by custom rules have the value rule. See
 * understanding declines for more details.
 */
reason: string | null,

/**
 * Stripe’s evaluation of the riskiness of the payment. Possible values for evaluated
 * payments are normal, elevated, highest. For non-card payments, and card-based payments
 * predating the public assignment of risk levels, this field will have the value not_assessed.
 * In the event of an error in the evaluation, this field will have the value unknown.
 */
risk_level?: string | null,

/**
 * The ID of the Radar rule that matched the payment, if applicable. [Expandable]
 */
rule?: string | string[] | null,

/**
 * See [understanding declines]<https://stripe.com/docs/declines> and
 * [Radar reviews]<https://stripe.com/docs/radar/review> for details.
 */
type: "authorized"
| "manual_review"
| "issuer_declined"
| "blocked"
| "invalid",

/**
 * A human-readable description of the outcome type and reason, designed for you (the
 * recipient of the payment), not your customer.
 */
seller_message: string
} 

declare type charges$IChargeRefunds = {} & Stripe$IList<refunds$refunds$IRefund> & resources$resources$ChargeRefunds



/**
 * A discount represents the actual application of a coupon to a particular customer. It contains information
 * about when the discount began and when it will end.
 */
declare type coupons$IDiscount = {

/**
 * Value is 'discount'
 */
object: "discount",

/**
 * Hash describing the coupon applied to create this discount
 */
coupon: coupons$ICoupon,
customer: string,

/**
 * If the coupon has a duration of once or repeating, the date that this discount will end. If the coupon
 * used has a forever duration, this attribute will be null.
 */
end: number,

/**
 * Date that the coupon was applied
 */
start: number,

/**
 * The subscription that this coupon is applied to, if it is applied to a particular subscription
 */
subscription: string
} & Stripe$IObject



/**
 * A coupon contains information about a percent-off or amount-off discount you might want to apply to a customer.
 * Coupons only apply to invoices; they do not apply to one-off charges.
 */
declare type coupons$ICoupon = {

/**
 * Value is 'coupon'
 */
object: "coupon",

/**
 * Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
 */
amount_off: number,
created: number,

/**
 * If amount_off has been set, the currency of the amount to take off.
 */
currency: string,

/**
 * One of "forever", "once", and "repeating". Describes how long a customer who applies this coupon will get the discount.
 */
duration: "forever" | "once" | "repeating",

/**
 * If duration is repeating, the number of months the coupon applies. Null if coupon duration is forever or once.
 */
duration_in_months: number,
livemode: boolean,

/**
 * Maximum number of times this coupon can be redeemed, in total, before it is no longer valid.
 */
max_redemptions: number,
metadata: Stripe$IMetadata,

/**
 * Percent that will be taken off the subtotal of any invoices for this customer for the duration
 * of the coupon. For example, a coupon with percent_off of 50 will make a $100 invoice $50 instead.
 */
percent_off: number,

/**
 * Date after which the coupon can no longer be redeemed
 */
redeem_by: number,

/**
 * Number of times this coupon has been applied to a customer.
 */
times_redeemed: number,

/**
 * Taking account of the above properties, whether this coupon can still be applied to a customer
 */
valid: boolean
} & Stripe$IResourceObject


declare type coupons$ICouponCreationOptions = {

/**
 * Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific
 * code you’ll give to your customer to use when signing up (e.g. FALL25OFF). If you don’t want to specify a particular code, you
 * can leave the ID blank and we’ll generate a random code for you.
 */
id?: string,

/**
 * Specifies how long the discount will be in effect. Can be forever, once, or repeating.
 */
duration: "forever" | "once" | "repeating",

/**
 * A positive integer representing the amount to subtract from an invoice total (required if percent_off is not passed)
 */
amount_off?: number,

/**
 * Currency of the amount_off parameter (required if amount_off is passed)
 */
currency?: string,

/**
 * Required only if duration is repeating, in which case it must be a positive integer that specifies the number of months
 * the discount will be in effect.
 */
duration_in_months?: number,

/**
 * A positive integer specifying the number of times the coupon can be redeemed before it’s no longer valid.
 * 
 * For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
 */
max_redemptions?: number,

/**
 * A positive integer between 1 and 100 that represents the discount the coupon will apply (required if amount_off is not passed)
 */
percent_off?: number,

/**
 * Unix timestamp specifying the last time at which the coupon can be redeemed.
 * After the redeem_by date, the coupon can no longer be applied to new customers.
 */
redeem_by?: number
} & Stripe$IDataOptionsWithMetadata



/**
 * Customer objects allow you to perform recurring charges and track multiple charges that are associated
 * with the same customer. The API allows you to create, delete, and update your customers. You can
 * retrieve individual customers as well as a list of all your customers.
 */
declare type customers$ICustomer = {

/**
 * Value is 'customer'
 */
object: "customer",

/**
 * Current balance, if any, being stored on the customer's account. If negative, the customer has credit to apply to
 * the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance
 * does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied
 * to any invoice. This balance is only taken into account for recurring charges.
 */
account_balance?: number,
created: number,

/**
 * The currency the customer can be charged in for recurring billing purposes (subscriptions, invoices, invoice items).
 */
currency: string | null,

/**
 * ID of the default source attached to this customer. [Expandable]
 */
default_source: string
| cards$Stripe$ICard
| bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver
| bankAccounts$Stripe$IBankAccount
| null,

/**
 * Whether or not the latest charge for the customer's latest invoice has failed
 */
delinquent: boolean,
description?: string,

/**
 * Describes the current discount active on the customer, if there is one.
 */
discount?: coupons$coupons$IDiscount,
email?: string,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * Shipping information associated with the customer.
 */
shipping: Stripe$IShippingInformation | null,

/**
 * The customer’s payment sources, if any
 */
sources?: Stripe$IList<cards$Stripe$ICard | bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver | bankAccounts$Stripe$IBankAccount>,
cards?: resources$resources$CustomerCards,

/**
 * The customer's current subscriptions, if any
 */
subscriptions: customers$ICustomerSubscriptions,

/**
 * customer id
 */
customer: string
} & Stripe$IResourceObject


declare type customers$ICustomerSubscriptions = {} & Stripe$IList<subscriptions$subscriptions$ISubscription> & resources$resources$CustomerSubscriptions


declare type customers$ICustomerCreationOptions = {

/**
 * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that
 * will be used before attempting any charges to the customer's card; a positive amount will be added to the next invoice.
 */
account_balance?: number,

/**
 * If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the
 * API will not have the discount.
 */
coupon?: string,

/**
 * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can
 * be unset by updating the value to null and then saving.
 */
description?: string,

/**
 * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking.
 * This can be unset by updating the value to null and then saving.
 */
email?: string,

/**
 * The identifier of the plan to subscribe the customer to. If provided, the returned customer object will have a list of subscriptions
 * that the customer is currently subscribed to. If you subscribe a customer to a plan without a free trial, the customer must have a
 * valid card as well.
 */
plan?: string,

/**
 * The quantity you'd like to apply to the subscription you're creating (if you pass in a plan). For example, if your plan is
 * 10 cents/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged 50 cents
 * (5 x 10 cents) monthly. Defaults to 1 if not set. Only applies when the plan parameter is also provided.
 */
quantity?: number,
shipping?: Stripe$IShippingInformation,

/**
 * The source can either be a token, like the ones returned by our Stripe.js, or
 * a dictionary containing a user’s credit card details.
 */
source?: sources$sources$ISourceCreationOptionsExtended,

/**
 * A positive decimal (with at most two decimal places) between 1 and 100.
 * This represents the percentage of the subscription invoice subtotal that
 * will be calculated and added as tax to the final amount each billing period.
 * For example, a plan which charges $10/month with a tax_percent of 20.0
 * will charge $12 per invoice. Can only be used if a plan is provided.
 */
tax_percent?: number,

/**
 * Unix timestamp representing the end of the trial period the customer will get before being charged. If set, trial_end will
 * override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to
 * end the customer's trial immediately. Only applies when the plan parameter is also provided.
 */
trial_end?: number | "now"
} & Stripe$IDataOptionsWithMetadata


declare type customers$ICustomerUpdateOptions = {

/**
 * An integer amount in cents that is the starting account balance for your customer. A negative amount represents a credit that
 * will be used before attempting any charges to the customer's card; a positive amount will be added to the next invoice.
 */
account_balance?: number,

/**
 * If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the
 * API will not have the discount.
 */
coupon?: string,

/**
 * ID of source to make the customer’s new default for invoice payments
 */
default_source?: string,

/**
 * An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard. This can
 * be unset by updating the value to null and then saving.
 */
description?: string,

/**
 * Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking.
 * This can be unset by updating the value to null and then saving.
 */
email?: string,
shipping?: Stripe$IShippingInformation,

/**
 * The source can either be a token, like the ones returned by our Stripe.js, or
 * a dictionary containing a user’s credit card details (with the options shown
 * below). Passing source will create a new source object, make it the new
 * customer default source, and delete the old customer default if one exists.
 * If you want to add additional sources instead of replacing the existing
 * default, use the card creation API. Whenever you attach a card to a
 * customer, Stripe will automatically validate the card.
 */
source?: sources$sources$ISourceCreationOptionsExtended
} & Stripe$IDataOptionsWithMetadata


declare type customers$ICustomerListOptions = {

/**
 * A filter on the list based on the customer’s email field. The value must be a string.
 */
email?: string
} & Stripe$IListOptionsCreated


declare type customers$ICustomerSourceCreationOptions = {

/**
 * When adding a card to a customer, the parameter name is source. When
 * adding to an account, the parameter name is external_account. The
 * value can either be a token, like the ones returned by our Stripe.js, or a
 * dictionary containing a user’s credit card details (with the options shown
 * below). Stripe will automatically validate the card.
 */
source: sources$sources$ISourceCreationOptions
} & Stripe$IDataOptionsWithMetadata


declare type customers$ICustomerCardSourceCreationOptions = {
source: cards$sources$ISourceCreationOptions
} & customers$ICustomerSourceCreationOptions


declare type customers$IBankAccountSourceListOptions = {
object: "bank_account"
} & Stripe$IListOptions


declare type customers$ICardSourceListOptions = {
object: "card"
} & Stripe$IListOptions



/**
 * A dispute occurs when a customer questions your charge with their bank or credit card company.
 * When a customer disputes your charge, you're given the opportunity to respond to the dispute with
 * evidence that shows the charge is legitimate. You can find more information about the dispute process
 * in our disputes FAQ: https://stripe.com/help/disputes
 */
declare type disputes$IDispute = {

/**
 * Value is 'dispute'
 */
object: "dispute",

/**
 * Disputed amount. Usually the amount of the charge, but can differ (usually because of currency
 * fluctuation or because only part of the order is disputed).
 */
amount: number,

/**
 * List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your
 * Stripe account as a result of this dispute.
 */
balance_transactions: balance$balance$IBalanceTransaction[],

/**
 * ID of the charge that was disputed. [Expandable]
 */
charge: string | charges$charges$ICharge,

/**
 * Date dispute was opened
 */
created: number,

/**
 * Three-letter ISO currency code representing the currency of the amount that was disputed.
 */
currency: string,

/**
 * Evidence provided to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
 */
evidence: disputes$IDisputeEvidence,

/**
 * Information about the evidence submission.
 */
evidence_details?: {

/**
 * Date by which evidence must be submitted in order to successfully challenge dispute. Will be null
 * if the customer's bank or credit card company doesn't allow a response for this particular dispute.
 */
due_by: number,

/**
 * Whether or not evidence has been saved for this dispute.
 */
has_evidence: boolean,

/**
 * Whether or not the last evidence submission was submitted past the due date. Defaults to false
 * if no evidence submissions have occurred. If true, then delivery of the latest evidence is not guaranteed.
 */
past_due: boolean,

/**
 * The number of times the evidence has been submitted. You may submit evidence a maximum of 5 times
 */
submission_count: number
},

/**
 * If true, it is still possible to refund the disputed payment. Once the payment has been fully
 * refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
 */
is_charge_refundable: boolean,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * Reason given by cardholder for dispute.
 * Possible values are duplicate, fraudulent, subscription_canceled, product_unacceptable,
 * product_not_received, unrecognized, credit_not_processed, incorrect_account_details,
 * insufficient_funds, bank_cannot_process, debit_not_authorized, general.
 * Read more about dispute reasons: https://stripe.com/help/disputes#reasons
 */
reason: "duplicate"
| "fraudulent"
| "subscription_canceled"
| "product_unacceptable"
| "product_not_received"
| "unrecognized"
| "credit_not_processed"
| "incorrect_account_details"
| "insufficient_funds"
| "bank_cannot_process"
| "debit_not_authorized"
| "general",

/**
 * Current status of dispute. Possible values are warning_needs_response, warning_under_review, warning_closed,
 * needs_response, response_disabled, under_review, charge_refunded, won, lost.
 */
status: "warning_needs_response"
| "warning_under_review"
| "warning_closed"
| "needs_response"
| "response_disabled"
| "under_review"
| "charge_refunded"
| "won"
| "lost"
} & Stripe$IResourceObject


declare interface disputes$IDisputeEvidence {

/**
 * Any server or activity logs showing proof that the customer accessed or downloaded the purchased
 * digital product. This information should include IP addresses, corresponding timestamps, and any
 * detailed recorded activity.
 */
access_activity_log?: string,

/**
 * The billing addess provided by the customer.
 */
billing_address?: string,

/**
 * (ID of a file upload) Your subscription cancellation policy, as shown to the customer. [Expandable]
 */
cancellation_policy?: string,

/**
 * An explanation of how and when the customer was shown your refund policy prior to purchase.
 */
cancellation_policy_disclosure?: string,

/**
 * A justification for why the customer's subscription was not canceled.
 */
cancellation_rebuttal?: string,

/**
 * (ID of a file upload) Any communication with the customer that you feel is relevant to your case (for
 * example emails proving that they received the product or service, or demonstrating their use of or
 * satisfaction with the product or service).
 */
customer_communication?: string,

/**
 * The email address of the customer.
 */
customer_email_address?: string,

/**
 * The name of the customer.
 */
customer_name?: string,

/**
 * The IP address that the customer used when making the purchase.
 */
customer_purchase_ip?: string,

/**
 * (ID of a file upload) A relevant document or contract showing the customer's signature. [Expandable]
 */
customer_signature?: string,

/**
 * (ID of a file upload) Documentation for the prior charge that can uniquely identify the charge,
 * such as a receipt, shipping label, work order, etc. This document should be paired with a similar
 * document from the disputed payment that proves the two payments are separate. [Expandable]
 */
duplicate_charge_documentation?: string,

/**
 * An explanation of the difference between the disputed charge and the prior charge that appears to be a duplicate.
 */
duplicate_charge_explanation?: string,

/**
 * The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
 */
duplicate_charge_id?: string,

/**
 * A description of the product or service which was sold.
 */
product_description?: string,

/**
 * (ID of a file upload) Any receipt or message sent to the customer notifying them of the charge. [Expandable]
 */
receipt?: string,

/**
 * (ID of a file upload) Your refund policy, as shown to the customer. [Expandable]
 */
refund_policy?: string,

/**
 * Documentation demonstrating that the customer was shown your refund policy prior to purchase.
 */
refund_policy_disclosure?: string,

/**
 * A justification for why the customer is not entitled to a refund.
 */
refund_refusal_explanation?: string,

/**
 * The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
 */
service_date?: string,

/**
 * (ID of a file upload) Documentation showing proof that a service was provided to the customer. This could
 * include a copy of a signed contract, work order, or other form of written agreement.
 */
service_documentation?: string,

/**
 * The address to which a physical product was shipped. You should try to include as much complete address information as possible.
 */
shipping_address?: string,

/**
 * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used
 * for this purchase, please separate them with commas.
 */
shipping_carrier?: string,

/**
 * The date on which a physical product began its route to the shipping address, in a clear human-readable format.
 */
shipping_date?: string,

/**
 * (ID of a file upload) Documentation showing proof that a product was shipped to the customer at the same address
 * the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc, and should
 * show the full shipping address of the customer, if possible. [Expandable]
 */
shipping_documentation?: string,

/**
 * The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers
 * were generated for this purchase, please separate them with commas.
 */
shipping_tracking_number?: string,

/**
 * (ID of a file upload) Any additional evidence or statements. [Expandable]
 */
uncategorized_file?: string,

/**
 * Any additional evidence or statements.
 */
uncategorized_text?: string
} 

declare type disputes$IDisputeUpdateOptions = {

/**
 * Evidence to upload to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review.
 */
evidence?: disputes$IDisputeEvidence
} & Stripe$IDataOptionsWithMetadata


declare type events$IEvent = {

/**
 * Value is "event"
 */
object: "event",

/**
 * The Stripe API version used to render data.
 * Note: this property is populated for events on or after October 31, 2014.
 */
api_version: string,
created: number,

/**
 * Hash containing data associated with the event.
 */
data: {

/**
 * describes the object the event is about. For example, an
 * invoice.created event will have a full invoice object as the value of
 * the object key.
 */
object: Stripe$IObject,
previous_attributes?: {}
},
livemode: boolean,

/**
 * Number of webhooks yet to be delivered successfully (return a 20x response) to the URLs you’ve specified.
 * 
 * positive integer or zero
 */
pending_webhooks: number,

/**
 * ID of the API request that caused the event. If null, the event was
 * automatic (e.g. Stripe’s automatic subscription handling). Request logs are
 * available in the dashboard but currently not in the API. Note: this property
 * is populated for events on or after April 23, 2013.
 */
request?: string,

/**
 * Description of the event: e.g. invoice.created, charge.refunded, etc.
 */
type: string
} & Stripe$IResourceObject


declare type events$IEventListOptions = {

/**
 * A string containing a specific event name, or group of events using * as a
 * wildcard. The list will be filtered to include only events with a matching
 * event property
 */
type: string
} & Stripe$IListOptionsCreated


declare type fileUploads$IFileUpdate = {

/**
 * Value is "file_upload"
 */
object: "file_upload",
created: number,

/**
 * The purpose of the uploaded file. Possible values are "business_logo",
 * "dispute_evidence", "identity_document", "incorporation_article",
 * "incorporation_document".
 */
purpose: fileUploads$IPurpose,

/**
 * The size in bytes of the file upload object.
 */
size: number,

/**
 * The type of the file returned. Returns one of the following:
 * pdf, jpg, png.
 */
type: "pdf" | "jpg" | "png",

/**
 * A read-only URL where the uploaded file can be accessed. Will be nil
 * unless the uploaded file has one of the following purposes:
 *   business_logo, dispute_evidence, incorporation_document.
 * Also nil if retrieved with the publishable API key.
 */
url: string
} & Stripe$IResourceObject


declare type fileUploads$IFileUploadCreationOptions = {
purpose: fileUploads$IPurpose,
file: {
data: string | Buffer,
name: string,
type: string | "application/octet-stream"
}
} & Stripe$IDataOptions


declare type fileUploads$IFileUploadListOptions = {

/**
 * The file purpose to filter queries by. If none is provided, files will not be
 * filtered by purpose.
 */
purpose: fileUploads$IPurpose
} & Stripe$IListOptionsCreated


declare type fileUploads$IPurpose = "business_logo"
| "dispute_evidence"
| "identity_document"
| "incorporation_article"
| "incorporation_document";


/**
 * Invoices are statements of what a customer owes for a particular billing period, including subscriptions,
 * invoice items, and any automatic proration adjustments if necessary. Once an invoice is created, payment
 * is automatically attempted. Note that the payment, while automatic, does not happen exactly at the time of
 * invoice creation. If you have configured webhooks, the invoice will wait until one hour after the last
 * webhook is successfully sent (or the last webhook times out after failing). Any customer credit on the
 * account is applied before determining how much is due for that invoice (the amount that will be actually
 * charged). If the amount due for the invoice is less than 50 cents (the minimum for a charge), we add the
 * amount to the customer's running account balance to be added to the next invoice. If this amount is
 * negative, it will act as a credit to offset the next invoice. Note that the customer account balance does
 * not include unpaid invoices; it only includes balances that need to be taken into account when calculating
 * the amount due for the next invoice.
 */
declare type invoices$IInvoice = {

/**
 * Value is 'invoice'
 */
object: "invoice",

/**
 * Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge
 * amount, for example, or if there is account credit that can be applied to the invoice, the amount_due may
 * be 0. If there is a positive starting_balance for the invoice (the customer owes money), the amount_due
 * will also take that into account. The charge that gets generated for the invoice will be for the amount
 * specified in amount_due.
 */
amount_due: number,

/**
 * The amount, in cents, that was paid.
 */
amount_paid: number,

/**
 * The amount remaining, in cents, that is due.
 */
amount_remaining: number,

/**
 * The fee in cents that will be applied to the invoice and transferred to the application owner's
 * Stripe account when the invoice is paid.
 */
application_fee: number,

/**
 * Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any
 * payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt
 * count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
 */
attempt_count: number,

/**
 * Whether or not an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after
 * the invoice.created webhook, for example, so you might not want to display that invoice as unpaid to your
 * users.
 */
attempted: boolean,

/**
 * Either charge_automatically, or send_invoice. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
 */
billing: "charge_automatically" | "send_invoice",

/**
 * Indicates the reason why the invoice was created. subscription_cycle indicates an invoice created by a subscription advancing into a new period. subscription_update indicates an invoice created due to creating or updating a subscription. subscription is set for all old invoices to indicate either a change to a subscription or a period advancement. manual is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The upcoming value is reserved for simulated invoices per the upcoming invoice endpoint.
 */
billing_reason: "subscription_cycle"
| "subscription_update"
| "subscription"
| "manual"
| "upcoming",

/**
 * ID of the latest charge generated for this invoice, if any. [Expandable]
 */
charge: string | charges$charges$ICharge,

/**
 * Whether or not the invoice is still trying to collect payment. An invoice is closed if it's either paid or
 * it has been marked closed. A closed invoice will no longer attempt to collect payment.
 */
closed: boolean,

/**
 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
 */
currency: string,
customer: string,

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 */
date: number,

/**
 * An arbitrary string attached to the object. Often useful for displaying to users.
 */
description: string,
discount: coupons$coupons$IDiscount | null,

/**
 * The date on which payment for this invoice is due. This value will be null for invoices where billing=charge_automatically.
 */
due_date: number | null,

/**
 * Ending customer balance after attempting to pay invoice. If the invoice has not been attempted yet,
 * this will be null.
 */
ending_balance: number | null,

/**
 * Whether or not the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription
 * status as if the invoice were succcessfully paid. Once an invoice has been forgiven, it cannot be unforgiven
 * or reopened
 */
forgiven: boolean,

/**
 * The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been frozen yet, this will be null.
 */
hosted_invoice_url: string | null,

/**
 * The link to download the PDF for the invoice. If the invoice has not been frozen yet, this will be null.
 */
invoice_pdf: string | null,

/**
 * The individual line items that make up the invoice.
 * 
 * lines is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
 */
lines: Stripe$IList<invoices$IInvoiceLineItem>,

/**
 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
 */
livemode: boolean,

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata: Stripe$IMetadata,

/**
 * The time at which payment will next be attempted.
 */
next_payment_attempt: number,

/**
 * A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer’s unique invoice_prefix if it is specified.
 */
number: string,

/**
 * Whether or not payment was successfully collected for this invoice. An invoice can be paid (most commonly)
 * with a charge or with credit from the customer's account balance.
 */
paid: boolean,

/**
 * End of the usage period during which invoice items were added to this invoice
 */
period_end: number,

/**
 * Start of the usage period during which invoice items were added to this invoice
 */
period_start: number,

/**
 * This is the transaction number that appears on email receipts sent for this invoice.
 */
receipt_number: string,

/**
 * Starting customer balance before attempting to pay invoice. If the invoice has not been attempted yet,
 * this will be the current customer balance.
 */
starting_balance: number,

/**
 * Extra information about an invoice for the customer's credit card statement.
 */
statement_descriptor: string,

/**
 * The subscription that this invoice was prepared for, if any.
 */
subscription: string | subscriptions$subscriptions$ISubscription,

/**
 * Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
 */
subscription_proration_date: number,

/**
 * Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied
 */
subtotal: number,

/**
 * The amount of tax included in the total, calculated from tax_percent and the subtotal. If no tax_percent
 * is defined, this value will be null.
 */
tax: number | null,

/**
 * This percentage of the subtotal has been added to the total amount of the invoice, including invoice line
 * items and discounts. This field is inherited from the subscription's tax_percent field, but can be changed
 * before the invoice is paid. This field defaults to null.
 */
tax_percent: number | null,

/**
 * Total after discount
 */
total: number,

/**
 * The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to
 * deliver, this will match date). Invoice payment is delayed until webhooks are delivered, or until all webhook
 * delivery attempts have been exhausted.
 */
webhooks_delivered_at: number
} & Stripe$IResourceObject


declare type invoices$IInvoiceLineItem = {

/**
 * The ID of the source of this line item, either an invoice item or a subscription
 */
id: string,

/**
 * Value is "line_item"
 */
object: "line_item",

/**
 * The amount, in cents/pence
 */
amount: number,
currency: string,

/**
 * A text description of the line item, if the line item is an invoice item
 */
description: string,

/**
 * If true, discounts will apply to this line item. Always false for prorations.
 */
discountable: boolean,

/**
 * Whether or not this is a test line item
 */
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The period this line_item covers. For subscription line items, this is the subscription period. For prorations, this starts when
 * the proration was calculated, and ends at the period end of the subscription. For invoice items, this is the time at which the
 * invoice item was created, so the period start and end are the same time.
 */
period: invoices$IPeriod,

/**
 * The plan of the subscription, if the line item is a subscription or a proration
 */
plan: plans$plans$IPlan,

/**
 * Whether or not this is a proration
 */
proration: boolean,

/**
 * The quantity of the subscription, if the line item is a subscription or a proration
 */
quantity: number,

/**
 * When type is invoiceitem, the subscription that the invoice item pertains to, if any. Left blank when
 * type is already subscription, as it'd be redundant with id.
 */
subscription: string,

/**
 * A string identifying the type of the source of this line item, either an invoiceitem or a subscription
 */
type: "invoiceitem" | "subscription"
} & Stripe$IResourceObject


declare type invoices$IInvoiceCreationOptions = {
customer: string,

/**
 * A fee in pence that will be applied to the invoice and transferred to the application owner’s Stripe account.
 * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee.
 * For more information, see the application fees documentation.
 */
application_fee?: number,
description?: string,

/**
 * Extra information about a charge for the customer’s credit card statement.
 */
statement_descriptor?: string,

/**
 * The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for
 * the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
 */
subscription?: string,

/**
 * The percent tax rate applied to the invoice, represented as a decimal number.
 */
tax_percent?: number
} & Stripe$IDataOptionsWithMetadata


declare type invoices$IInvoiceUpdateOptions = {

/**
 * A fee in pence that will be applied to the invoice and transferred to the application owner’s Stripe account.
 * The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee.
 * For more information, see the application fees documentation.
 */
application_fee?: number,

/**
 * Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
 */
closed?: boolean,
description?: string,

/**
 * Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice
 * instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been
 * forgiven, it cannot be unforgiven or reopened.
 */
forgiven?: boolean,

/**
 * Extra information about a charge for the customer’s credit card statement.
 */
statement_descriptor?: string,

/**
 * The percent tax rate applied to the invoice, represented as a decimal number.
 */
tax_percent?: number
} & Stripe$IDataOptionsWithMetadata


declare type invoices$IInvoicePayOptions = {

/**
 * A payment source to be charged. The source must be the ID of a source
 * belonging to the customer associated with the invoice being paid.
 */
source?: sources$sources$ISourceCreationOptions
} & Stripe$IDataOptionsWithMetadata


declare type invoices$IInvoiceListOptions = {

/**
 * The identifier of the customer whose invoices to return. If none is provided, all invoices will be returned.
 */
customer?: string,
date?: Stripe$IDateFilter
} & Stripe$IListOptions


declare type invoices$IInvoiceLineItemRetrievalOptions = {
coupon?: string,

/**
 * In the case of upcoming invoices, the customer of the upcoming invoice is required. In other cases it is ignored.
 */
customer?: string,

/**
 * In the case of upcoming invoices, the subscription of the upcoming invoice is optional. In other cases it is ignored.
 */
subscription?: string,
subscription_plan?: string,
subscription_prorate?: boolean,
subscription_proration_date?: number,
subscription_quantity?: number,
subscription_trial_end?: number
} & Stripe$IListOptions


declare type invoices$IInvoiceUpcomingOptions = {

/**
 * The code of the coupon to apply. If a subscription or subscription_plan is provided, the invoice returned will preview updating
 * or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming
 * invoice from among the customer’s subscriptions.
 */
coupon?: string,

/**
 * The identifier of the subscription for which you’d like to retrieve the upcoming invoice. If not provided, but a subscription_plan
 * is provided, you will preview creating a subscription to that plan. If neither subscription nor subscription_plan is provided, you
 * will retrieve the next upcoming invoice from among the customer’s subscriptions.
 */
subscription?: string,

/**
 * If set, the invoice returned will preview updating the subscription given to this plan, or creating a new subscription to this plan
 * if no subscription is given.
 */
subscription_plan?: string,

/**
 * If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If
 * set, one of subscription_plan or subscription, and one of subscription_plan, subscription_quantity or subscription_trial_end are
 * required.
 */
subscription_prorate?: boolean,

/**
 * If previewing an update to a subscription, and doing proration, subscription_proration_date forces the proration to be calculated as
 * though the update was done at the specified time. The time given must be within the current subscription period, and cannot be
 * before the subscription was on its current plan.If set, subscription, and one of subscription_plan, subscription_quantity or
 * subscription_trial_end are required. Also, subscription_proration cannot be set to false.
 */
subscription_proration_date?: number,

/**
 * If provided, the invoice returned will preview updating or creating a subscription with that quantity. If set, one of subscription_plan
 * or subscription is required.
 */
subscription_quantity?: number,

/**
 * If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of subscription_plan
 * or subscription is required.
 */
subscription_trial_end?: number
} & Stripe$IDataOptions


declare interface invoices$IPeriod {

/**
 * The period start date
 */
start: number,

/**
 * The period end date
 */
end: number
} 

declare type invoiceItems$InvoiceItem = {

/**
 * Value is "invoiceitem"
 */
object: "invoiceitem",
amount: number,
currency: string,
customer: string,
date: number,
description: string,

/**
 * If true, discounts will apply to this invoice item. Always false for prorations.
 */
discountable: boolean,

/**
 * If null, the invoice item is pending and will be included in the upcoming invoice.
 */
invoice: string | null,
livemode: boolean,
metadata: Stripe$IMetadata,
period: invoices$invoices$IPeriod,

/**
 * If the invoice item is a proration, the plan of the subscription that the proration was computed for.
 */
plan: plans$plans$IPlan,

/**
 * Whether or not the invoice item was created automatically as a proration adjustment when the customer switched plans
 */
proration: boolean,

/**
 * If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
 */
quantity: number,

/**
 * The subscription that this invoice item has been created for, if any.
 */
subscription: string | subscriptions$subscriptions$ISubscription
} & Stripe$IResourceObject


declare type invoiceItems$InvoiceItemCreationOptions = {

/**
 * The integer amount in cents of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer’s
 * account, pass a negative amount.
 */
amount: number,

/**
 * 3-letter ISO code for currency.
 */
currency: string,

/**
 * The ID of the customer who will be billed when this invoice item is billed.
 */
customer: string,

/**
 * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
 * This can be unset by updating the value to null and then saving.
 */
description?: string,

/**
 * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for
 * all other invoice items.
 */
discountable?: boolean,

/**
 * The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming
 * scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item
 * to an invoice that has already been paid, attempted or closed.
 */
invoice?: string,

/**
 * The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming
 * scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice
 * item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
 */
subscription?: string
} & Stripe$IDataOptionsWithMetadata


declare type invoiceItems$InvoiceItemUpdateOptions = {

/**
 * The integer amount in cents/pence of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's
 * account, pass a negative amount.
 */
amount?: number,

/**
 * An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking. This can be
 * unset by updating the value to null and then saving.
 */
description?: string,

/**
 * Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other
 * invoice items. Cannot be set to true for prorations.
 */
discountable?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type invoiceItems$InvoiceItemListOptions = {

/**
 * The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
 */
customer?: string
} & Stripe$IListOptionsCreated


declare type orders$IOrder = {

/**
 * Value is "order"
 */
object: "order",

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal
 * currency) representing the total amount for the order.
 */
amount: number,

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal
 * currency) representing the total amount returned for the order thus far.
 */
amount_returned: number,

/**
 * ID of the Connect Application that created the order.
 */
application: string,
application_fee: number,

/**
 * The ID of the payment used to pay for the order. Present if the order status is paid, fulfilled, or refunded. [Expandable]
 */
charge: string | charges$charges$ICharge,
created: number,

/**
 * 3-letter ISO code representing the currency in which the order was made.
 */
currency: string,

/**
 * The customer used for the order. [Expandable]
 */
customer: string | customers$customers$ICustomer,

/**
 * The email address of the customer placing the order.
 */
email: string,
external_coupon_code: string,

/**
 * List of items constituting the order.
 */
items: orders$IOrderItem[],
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The shipping method that is currently selected for this order, if any. If present, it is equal to one of the ids of shipping methods
 * in the shipping_methods array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected
 * the first method.
 */
selected_shipping_method: string,

/**
 * The shipping address for the order. Present if the order is for goods to be shipped.
 */
shipping: Stripe$IShippingInformation,

/**
 * A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or
 * when paying it.
 */
shipping_methods: orders$IShippingMethod[],
status: orders$OrderStatus,

/**
 * The timestamps at which the order status was updated
 */
status_transitions: {
canceled: number,
fulfiled: number,
paid: number,
returned: number
},
updated: number
} & Stripe$IResourceObject


declare type orders$IOrderItem = {

/**
 * value is "order_item"
 */
object: "order_item",

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
 * representing the total amount for the line item.
 */
amount: number,

/**
 * 3-letter ISO code representing the currency of the line item.
 */
currency: string,

/**
 * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
 */
description: string,

/**
 * The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU). [Expandable]
 */
parent: string | skus$skus$ISku,

/**
 * A positive integer representing the number of instances of parent that are included in this order item.
 * Applicable/present only if type is sku.
 */
quantity: number,

/**
 * The type of line item. One of "sku", "tax", "shipping", or "discount".
 */
type: "sku" | "tax" | "shipping" | "discount"
} & Stripe$IObject


declare type orders$IOrderCreationOptions = {

/**
 * 3-letter ISO code representing the currency in which the order should be made. Stripe will validate that all entries in items match
 * the currency specified here.
 */
currency: string,

/**
 * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
 */
coupon?: string,

/**
 * The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create
 * the order. Subsequently, the customer will also be charged to pay the order. If email or shipping are also provided, they will
 * override the values retrieved from the customer object.
 */
customer?: string,

/**
 * The email address of the customer placing the order.
 */
email?: string,

/**
 * List of items constituting the order.
 */
items?: orders$IOrderItemCreationHash[],

/**
 * Shipping address for the order. Required if any of the SKUs are for products that have shippable set to true.
 */
shipping?: Stripe$IShippingInformation
} & Stripe$IDataOptionsWithMetadata


declare type orders$IOrderUpdateOptions = {

/**
 * A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
 */
coupon?: string,

/**
 * The shipping method to select for fulfilling this order. If specified, must be one of the ids of a shipping method in the
 * shipping_methods array. If specified, will overwrite the existing selected shipping method, updating items as necessary.
 */
selected_shipping_method?: string,
status: orders$OrderStatus
} & Stripe$IDataOptionsWithMetadata


declare type orders$IOrderPayOptions = {

/**
 * The ID of an existing customer that will be charged in this request.
 * 
 * Either customer or source is required
 */
customer?: string,

/**
 * A payment source to be charged, such as a credit card. If you also pass a customer ID, the source must be the ID of a source belonging
 * to the customer. Otherwise, if you do not pass a customer ID, the source you provide must either be a token, like the ones returned
 * by Stripe.js, or a object containing a user's credit card details, with the options described below. Although not all information is
 * required, the extra info helps prevent fraud.
 * 
 * Either source or customer is required
 */
source?: sources$sources$ISourceCreationOptions,

/**
 * A fee in cents/pence that will be applied to the order and transferred to the application owner's Stripe account. To use an application
 * fee, the request must be made on behalf of another account, using the Stripe-Account header or OAuth key. For more information, see
 * the application fees documentation.
 */
application_fee?: number,

/**
 * The email address of the customer placing the order. If a customer is specified, that customer's email address will be used.
 * 
 * Optional, but required if not previously specified.
 */
email?: string
} & Stripe$IDataOptionsWithMetadata


declare type orders$IOrderListOptions = {

/**
 * Only return orders for the given customer
 */
customer?: string,

/**
 * Only return orders with the given IDs
 */
ids?: string[],

/**
 * Only return orders that have the given status. One of "created", "paid", "fulfilled", or "refunded".
 */
status: orders$OrderStatus,

/**
 * Filter orders based on when they were "paid", "fulfilled", "canceled", or "returned"
 */
status_transitions?: {

/**
 * A filter on the list based on the object canceled field. The value can be a string with an integer Unix timestamp,
 * or it can be a dictionary with the following options:
 */
canceled?: Stripe$IDateFilter,

/**
 * A filter on the list based on the object fulfilled field. The value can be a string with an integer Unix timestamp,
 * or it can be a dictionary with the following options:
 */
fulfilled?: Stripe$IDateFilter,

/**
 * A filter on the list based on the object paid field. The value can be a string with an integer Unix timestamp,
 * or it can be a dictionary with the following options:
 */
paid?: Stripe$IDateFilter,

/**
 * A filter on the list based on the object returned field. The value can be a string with an integer Unix timestamp,
 * or it can be a dictionary with the following options:
 */
returned?: Stripe$IDateFilter
}
} & Stripe$IListOptionsCreated


declare interface orders$IOrderItemCreationHash {

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
 * representing the total amount for the line item.
 */
amount?: number,

/**
 * 3-letter ISO code representing the currency of the line item.
 */
currency?: string,

/**
 * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
 */
description?: string,

/**
 * The ID of the SKU being ordered.
 */
parent: string,

/**
 * The quantity of this order item. When type is sku, this is the number of instances of the SKU to be ordered.
 */
quantity?: number,

/**
 * The type of line item. One of "sku", "tax", "shipping", or "discount".
 */
type?: "sku" | "tax" | "shipping" | "discount"
} 

declare interface orders$IShippingMethod {
id: string,

/**
 * A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a 0-decimal currency)
 * representing the total amount for the line item.
 */
amount: number,

/**
 * 3-letter ISO code representing the currency of the line item.
 */
currency: string,

/**
 * The estimated delivery date for the given shipping method. Can be either a specific date or a range.
 */
delivery_estimate: {

/**
 * If type is "exact", date will be the expected delivery date in the format YYYY-MM-DD
 */
date: string,

/**
 * If type is "range", earliest will be be the earliest delivery date in the format YYYY-MM-DD
 */
earliest: string,

/**
 * If type is "range", latest will be the latest delivery date in the format YYYY-MM-DD
 */
latest: string,

/**
 * The type of estimate. Must be either "range" or "exact"
 */
type: "range" | "exact"
},

/**
 * Description of the line item, meant to be displayable to the user (e.g., "Express shipping").
 */
description: string
} 


/**
 * Current order status. One of created, paid, canceled, fulfilled, or returned. More detail in the Relay API Overview.
 */
declare type orders$OrderStatus = "created"
| "paid"
| "canceled"
| "fulfilled"
| "returned";

declare type payouts$IPayout = {

/**
 * Value is "payout"
 */
object: "payout",

/**
 * Amount (in cents) to be transferred to your bank account or debit card
 */
amount: number,

/**
 * Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays
 */
arrival_date: number,

/**
 * Balance transaction that describes the impact of this transfer on your account balance. [Expandable]
 */
balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch
 */
created: number,

/**
 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
 * https://stripe.com/docs/currencies
 */
currency: string,

/**
 * An arbitrary string attached to the object. Often useful for displaying to users
 */
description: string,

/**
 * ID of the bank account or card the payout was sent to. [Expandable]
 */
destination: string | bankAccounts$Stripe$IBankAccount | cards$cards$ICardHash,

/**
 * If the payout failed or was canceled, this will be the ID of the balance
 * transaction that reversed the initial balance transaction, and puts the
 * funds from the failed payout back in your balance. [Expandable]
 */
failure_balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * Error code explaining reason for payout failure if available. See Types of payout failures for a
 * list of failure codes: https://stripe.com/docs/api#payout_failures
 */
failure_code: string,

/**
 * Message to user further explaining reason for the payout failure if available
 */
failure_message: string,

/**
 * Flag indicating whether the object exists in live mode or test mode
 */
livemode: boolean,

/**
 * Set of key/value pairs that you can attach to an object. It can be useful for storing additional
 * information about the object in a structured format.
 */
metadata: Stripe$IMetadata,

/**
 * The method used to send this payout, which can be standard or instant. instant is only supported
 * for payouts to debit cards.
 */
method: payouts$PayoutMethods,

/**
 * The source balance this payout came from.
 * One of card, bank_account, bitcoin_receiver, or alipay_account
 */
source_type: "alipay_account" | "bank_account" | "bitcoin_receiver" | "card",

/**
 * Extra information about a payout to be displayed on the user's bank statement
 */
statement_descriptor: string,

/**
 * Current status of the payout (paid, pending, in_transit, canceled or failed).
 * A payout will be pending until it is submitted to the bank, at which point it
 * becomes in_transit. It will then change to paid if the transaction goes through.
 * If it does not go through successfully, its status will change to failed or canceled.
 */
status: "canceled"
| "failed"
| "in_transit"
| "paid"
| "pending",

/**
 * Can be bank_account or card.
 */
type: payouts$PayoutTypes
} & Stripe$IResourceObject


declare type payouts$IPayoutCreationOptions = {

/**
 * A positive integer in cents representing how much to payout.
 */
amount: number,

/**
 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
 * https://stripe.com/docs/currencies
 */
currency: string,

/**
 * An arbitrary string attached to the object. Often useful for displaying to users.
 * This can be unset by updating the value to null and then saving.
 */
description?: string,

/**
 * The ID of a bank account or a card to send the payout to. If no destination is supplied,
 * the default external account for the specified currency will be used.
 */
destination?: string,

/**
 * The method used to send this payout, which can be standard or instant.
 * instant is only supported for payouts to debit cards.
 */
method?: payouts$PayoutMethods,

/**
 * The source balance to draw this payout from. Balances for different payment sources are
 * kept separately. You can find the amounts with the balances API.
 * Valid options are: alipay_account, bank_account, and card.
 */
source_type?: "alipay_account" | "bank_account" | "card",

/**
 * A string to be displayed on the recipient’s bank or card statement. This may be at most 22 characters.
 * Attempting to use a statement_descriptor longer than 22 characters will return an error.
 * Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.
 */
statement_descriptor?: string
} & Stripe$IDataOptionsWithMetadata


declare type payouts$IPayoutListOptions = {
arrival_date?: string | Stripe$IDateFilter,
destination?: string,
status?: "canceled" | "failed" | "paid" | "pending"
} & Stripe$IListOptionsCreated


declare type payouts$PayoutMethods = "instant" | "standard";

declare type payouts$PayoutTypes = "bank_account" | "card";

declare interface plans$ITier {

/**
 * Per unit price for units relevant to the tier.
 */
amount: number,

/**
 * Up to and including to this quantity will be contained in the tier.
 */
up_to: number
} 

declare interface plans$ITransformUsage {

/**
 * Divide usage by this number.
 */
divide_by: number,

/**
 * After division, either round the result `up` or `down`.
 */
round: "up" | "down"
} 


/**
 * A subscription plan contains the pricing information for different products and feature levels on your site.
 * For example, you might have a $10/month plan for basic features and a different $20/month plan for premium features.
 */
declare type plans$IPlan = {

/**
 * Value is "plan"
 */
object: "plan",

/**
 * Whether the plan is currently available for new subscriptions.
 */
active: boolean,

/**
 * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
 */
aggregate_usage: "sum"
| "last_during_period"
| "last_ever"
| "max"
| null,

/**
 * The amount in cents to be charged on the interval specified
 */
amount: number,

/**
 * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
 */
billing_scheme: "per_unit" | "tiered",

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 */
created: number,

/**
 * Three-letter ISO currency code, in lowercase. Must be a supported currency.
 */
currency: string,

/**
 * One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed.
 */
interval: plans$IntervalUnit,

/**
 * The number of intervals (specified in the `interval` property) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
 */
interval_count: number,

/**
 * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
 */
livemode: boolean,

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata: Stripe$IMetadata,

/**
 * A brief description of the plan, hidden from customers.
 */
nickname: string | null,

/**
 * The product whose pricing this plan determines. [Expandable]
 */
product?: string | products$products$IProduct,

/**
 * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
 */
tiers: plans$ITier[] | null,

/**
 * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
 */
tiers_mode: "graduated" | "volume" | null,

/**
 * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
 */
transform_usage: plans$ITransformUsage | null,

/**
 * Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`.
 */
trial_period_days: number,

/**
 * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
 */
usage_type: "metered" | "licensed"
} & Stripe$IResourceObject


declare type plans$IPlanCreationOptions = {

/**
 * An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this
 * ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test
 * modes.
 */
id?: string,

/**
 * A positive integer in cents/pence (or 0 for a free plan) representing how much to charge (on a recurring basis).
 */
amount: number,

/**
 * 3-letter ISO code for currency.
 */
currency: string,

/**
 * Specifies billing frequency. Either "day", "week", "month" or "year".
 */
interval: plans$IntervalUnit,

/**
 * The product whose pricing the created plan will represent. This can either be the ID of an existing product, or a dictionary containing
 * fields used to create a service product.
 */
product: string | plans$IPlanCreationOptionsProductHash,

/**
 * The number of intervals between each subscription billing. For example, interval=month and interval_count=3 bills every 3 months.
 * Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
 */
interval_count?: number,

/**
 * A brief description of the plan, hidden from customers.
 */
nickname?: string,

/**
 * Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
 */
aggregate_usage?: "sum" | "last_during_period" | "last_ever" | "max",

/**
 * Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
 */
billing_scheme?: "per_unit" | "tiered",

/**
 * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
 */
livemode?: boolean,

/**
 * Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
 */
metadata?: Stripe$IMetadata,

/**
 * Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
 */
tiers?: plans$ITier[],

/**
 * Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
 */
tiers_mode?: "graduated" | "volume",

/**
 * Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
 */
transform_usage?: plans$ITransformUsage,

/**
 * Default number of trial days when subscribing a customer to this plan using `trial_from_plan=true`.
 */
trial_period_days?: number,

/**
 * Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.
 */
usage_type?: "metered" | "licensed"
} & Stripe$IDataOptionsWithMetadata


declare type plans$IPlanUpdateOptions = {

/**
 * A brief description of the plan, hidden from customers. This can be unset by updating the value to null and then saving.
 */
nickname?: string,

/**
 * The product the plan belongs to. Note that after updating, statement descriptors and line items of the plan in active subscriptions will
 * be affected.
 */
product?: string
} & Stripe$IDataOptionsWithMetadata


declare interface plans$IPlanCreationOptionsProductHash {

/**
 * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
 */
id?: string,

/**
 * The product’s name, meant to be displayable to the customer.
 */
name: string,

/**
 * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information about the object in a structured
 * format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to metadata.
 */
metadata?: Stripe$IOptionsMetadata,

/**
 * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description may not
 * include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically stripped. While
 * most banks display this information consistently, some may display it incorrectly or not at all.
 */
statement_descriptor?: string
} 

declare type plans$IntervalUnit = "day" | "week" | "month" | "year";

declare type products$IProduct = {

/**
 * Value is "product"
 */
object: "product",

/**
 * Whether or not the product is currently available for purchase.
 */
active: boolean,

/**
 * A list of up to 5 attributes that each SKU can provide values for (e.g. ["color", "size"]).
 */
attributes: string[],

/**
 * A short one-line description of the product, meant to be displayable to the customer.
 */
caption: string,

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 */
created: number,

/**
 * An array of connect application identifiers that cannot purchase this product.
 */
deactivated_on: string[],

/**
 * The product’s description, meant to be displayable to the customer.
 */
description: string,

/**
 * A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
 */
images: string[],
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The product’s name, meant to be displayable to the customer.
 */
name: string,
package_dimensions: products$IPackageDimensions,

/**
 * Whether this product is a shipped good.
 */
shippable: boolean,

/**
 * A sublist of active SKUs associated with this product.
 */
skus: Stripe$IList<skus$skus$ISku>,
updated: number,

/**
 * Extra information about a product which will appear on your customer’s credit card statement. In the case that multiple products are billed
 * at once, the first statement descriptor will be used. Only available on products of type=service.
 */
statement_descriptor: string,

/**
 * The type of the product. The product is either of type good, which is eligible for use with Orders and SKUs, or service, which is eligible for
 * use with Subscriptions and Plans.
 */
type: products$ProductType,

/**
 * A URL of a publicly-accessible webpage for this product.
 */
url: string
} & Stripe$IResourceObject


declare type products$IProductCreationOptions = {

/**
 * The identifier for the product. Must be unique. If not provided, an identifier will be randomly generated.
 * Applicable to both service and good types.
 */
id?: string,

/**
 * The product’s name, meant to be displayable to the customer.
 * Applicable to both service and good types.
 */
name: string,

/**
 * The type of the product. The product is either of type service, which is eligible for use with Subscriptions
 * and Plans or good, which is eligible for use with Orders and SKUs.
 */
type: products$ProductType,

/**
 * Whether or not the product is currently available for purchase. Defaults to true. May only be set if type=good.
 */
active?: boolean,

/**
 * A list of up to 5 alphanumeric attributes that each SKU can provide values for (e.g. ["color", "size"]).
 * Applicable to both service and good types.
 */
attributes?: string[],

/**
 * A short one-line description of the product, meant to be displayable to the customer. May only be set if type=good.
 */
caption?: string,

/**
 * An array of Connect application names or identifiers that should not be able to order the SKUs for this product.
 * May only be set if type=good.
 */
deactivate_on?: string[],

/**
 * The product’s description, meant to be displayable to the customer. May only be set if type=good.
 */
description?: string,

/**
 * A list of up to 8 URLs of images for this product, meant to be displayable to the customer. May only be set if type=good.
 */
images?: string[],

/**
 * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own
 * package_dimensions. May only be set if type=good.
 */
package_dimensions?: products$IPackageDimensions,

/**
 * Whether this product is shipped (i.e. physical goods). Defaults to true. May only be set if type=good.
 */
shippable?: boolean,

/**
 * A URL of a publicly-accessible webpage for this product. May only be set if type=good.
 */
url?: string,

/**
 * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description
 * may not include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically
 * stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
 * May only be set if type=service.
 */
statement_descriptor?: string
} & Stripe$IDataOptionsWithMetadata


declare type products$IProductUpdateOptions = {

/**
 * Whether or not the product is available for purchase. Setting this to false also deactivates any active, related SKUs. Setting this to
 * true does not automatically activate any deactivated, related SKUs.
 */
active?: boolean,

/**
 * A short one-line description of the product, meant to be displayable to the customer.
 */
caption?: string,

/**
 * An array of Connect application names or identifiers that should not be able to order the SKUs for this product. This can be unset
 * by updating the value to null and then saving.
 */
deactivate_on?: string[],

/**
 * The product’s description, meant to be displayable to the customer.
 */
description?: string,

/**
 * A list of up to 8 URLs of images for this product, meant to be displayable to the customer. This can be unset by updating the value to
 * null and then saving.
 */
images?: string[],

/**
 * The product’s name, meant to be displayable to the customer.
 */
name?: string,

/**
 * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own
 * package_dimensions.
 */
package_dimensions?: products$IPackageDimensions,

/**
 * Whether this product is shipped (i.e. physical goods). Defaults to true.
 */
shippable?: boolean,

/**
 * A URL of a publicly-accessible webpage for this product.
 */
url?: string,

/**
 * An arbitrary string to be displayed on your customer’s credit card statement. This may be up to 22 characters. The statement description
 * may not include <>”’ characters, and will appear on your customer’s statement in capital letters. Non-ASCII characters are automatically
 * stripped. While most banks display this information consistently, some may display it incorrectly or not at all.
 * May only be set if type=service.
 */
statement_descriptor?: string
} & Stripe$IDataOptionsWithMetadata


declare type products$IProductListOptions = {

/**
 * Only return products that are active or inactive (e.g. pass false to list all inactive products).
 */
active?: boolean,

/**
 * Only return products with the given IDs.
 */
ids?: string[],

/**
 * Only return products that can be shipped (i.e., physical, not digital products).
 */
shippable?: boolean,

/**
 * Only return products with the given url
 */
url?: string
} & Stripe$IListOptions



/**
 * The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its
 * own package_dimensions
 */
declare interface products$IPackageDimensions {

/**
 * Height, in inches. Maximum precision is 2 decimal places.
 */
height: number,

/**
 * Length, in inches. Maximum precision is 2 decimal places.
 */
length: number,

/**
 * Weight, in ounces. Maximum precision is 2 decimal places.
 */
weight: number,

/**
 * Width, in inches. Maximum precision is 2 decimal places.
 */
width: number
} 

declare type products$ProductType = "service" | "good";



declare type recipients$IRecipient = {} & Stripe$IResourceObject


declare type skus$ISku = {

/**
 * Value is "sku"
 */
object: "sku",

/**
 * Whether or not the SKU is available for purchase.
 */
active: boolean,
attributes: skus$ISkuAttributes,
created: number,

/**
 * 3-letter ISO code for currency.
 */
currency: string,

/**
 * The URL of an image for this SKU, meant to be displayable to the customer.
 */
image: string,
inventory: skus$IInventory,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The dimensions of this SKU for shipping purposes.
 */
package_dimensions: products$products$IPackageDimensions,

/**
 * The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
 * Japanese Yen being a 0-decimal currency).
 */
price: number,

/**
 * The ID of the product this SKU is associated with. The product must be currently active. [Expandable]
 */
product: string | products$products$IProduct,
updated: number
} & Stripe$IResourceObject


declare type skus$ISkuCreationOptions = {

/**
 * The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
 */
id?: string,

/**
 * 3-letter ISO code for currency.
 */
currency: string,
inventory: skus$IInventory,

/**
 * The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
 * Japanese Yen being a 0-decimal currency).
 */
price: number,

/**
 * The ID of the product this SKU is associated with.
 */
product: string,

/**
 * Whether or not the SKU is available for purchase. Default to true.
 */
active?: boolean,
attributes?: skus$ISkuAttributes,

/**
 * The URL of an image for this SKU, meant to be displayable to the customer.
 */
image?: string,

/**
 * The dimensions of this SKU for shipping purposes.
 */
package_dimensions?: products$products$IPackageDimensions
} & Stripe$IDataOptionsWithMetadata


declare type skus$ISkuUpdateOptions = {

/**
 * Whether or not the SKU is available for purchase.
 */
active?: boolean,

/**
 * 3-letter ISO code for currency.
 */
currency?: string,

/**
 * The URL of an image for this SKU, meant to be displayable to the customer.
 * This can be unset by updating the value to null and then saving.
 */
image?: string,
inventory?: skus$IInventory,

/**
 * The dimensions of this SKU for shipping purposes.
 */
package_dimensions?: products$products$IPackageDimensions,

/**
 * The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 1 to charge ¥1,
 * Japanese Yen being a 0-decimal currency).
 */
price?: number,

/**
 * The ID of the product this SKU is associated with.
 */
product?: string
} & Stripe$IDataOptionsWithMetadata


declare type skus$ISkuListOptions = {

/**
 * Only return SKUs that are active or inactive (e.g. pass false to list all inactive products).
 */
active?: boolean,

/**
 * Only return SKUs that have the specified key/value pairs in this partially constructed dictionary.
 * Can be specified only if product is also supplied. For instance, if the associated product has
 * attributes ["color", "size"], passing in attributes[color]=red returns all the SKUs for this product
 * that have color set to red.
 */
attributes?: skus$ISkuAttributes,

/**
 * Only return SKUs with the given IDs.
 */
ids?: string[],

/**
 * Only return SKUs that are either in stock or out of stock (e.g. pass false to list all SKUs that are out of stock).
 * If no value is provided, all SKUs are returned.
 */
in_stock?: boolean,

/**
 * The ID of the product whose SKUs will be retrieved.
 */
product?: string
} & Stripe$IListOptions



/**
 * Description of the SKU’s inventory.
 */
declare interface skus$IInventory {

/**
 * The count of inventory available. Will be present if and only if type is "finite".
 * 
 * Positive integer or zero
 */
quantity?: number,

/**
 * Inventory type. Possible values are "finite", "bucket"" (not quantified), and "infinite".
 */
type: "finite" | "bucket" | "infinite",

/**
 * An indicator of the inventory available. Possible values are "in_stock", "limited", and "out_of_stock".
 * Will be present if and only if type is "bucket".
 */
value?: "in_stock" | "limited" | "out_of_stock"
} 


/**
 * A dictionary of attributes and values for the attributes defined by the product.
 * If, for example, a product’s attributes are ["size", "gender"],
 * a valid SKU has the following dictionary of attributes: {"size": "Medium", "gender": "Unisex"}.
 */
declare interface skus$ISkuAttributes {} 

declare interface ephemeralKeys$IStripeVersion {

/**
 * https://stripe.com/docs/upgrades#api-changelog
 */
stripe_version: string
} 


/**
 * Customer objects allow you to perform recurring charges and track multiple charges that are associated
 * with the same customer. The API allows you to create, delete, and update your customers. You can
 * retrieve individual customers as well as a list of all your customers.
 */
declare type ephemeralKeys$ICustomer = {

/**
 * Value is 'customer'
 */
object: "customer",

/**
 * Current balance, if any, being stored on the customer's account. If negative, the customer has credit to apply to
 * the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance
 * does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied
 * to any invoice. This balance is only taken into account for recurring charges.
 */
account_balance?: number,
created: number,

/**
 * The currency the customer can be charged in for recurring billing purposes (subscriptions, invoices, invoice items).
 */
currency: string | null,

/**
 * ID of the default source attached to this customer. [Expandable]
 */
default_source: string
| cards$Stripe$ICard
| bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver
| bankAccounts$Stripe$IBankAccount
| null,

/**
 * Whether or not the latest charge for the customer's latest invoice has failed
 */
delinquent: boolean,
description?: string,

/**
 * Describes the current discount active on the customer, if there is one.
 */
discount?: coupons$coupons$IDiscount,
email?: string,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * Shipping information associated with the customer.
 */
shipping: Stripe$IShippingInformation | null,

/**
 * The customer’s payment sources, if any
 */
sources?: Stripe$IList<cards$Stripe$ICard | bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver | bankAccounts$Stripe$IBankAccount>,
cards?: resources$resources$CustomerCards,

/**
 * The customer's current subscriptions, if any
 */
subscriptions: customers$ICustomerSubscriptions,

/**
 * customer id
 */
customer: string
} & Stripe$IResourceObject


declare type ephemeralKeys$IEphemeralKey = {
object: "ephemeral_key",
associated_objects: ephemeralKeys$IAssociatedObject[],
created: number,
expires: number,
livemode: boolean,
secret: string
} & Stripe$IResourceObject


declare interface ephemeralKeys$IAssociatedObject {
id: string,
type: string
} 

declare type tokens$IToken = {} & tokens$ICardToken & tokens$IBankAccountToken


declare type tokens$ICardToken = {

/**
 * Hash describing the card used to make the charge
 */
card?: cards$cards$ICardHash
} & tokens$ITokenBase


declare type tokens$IBankAccountToken = {

/**
 * Hash describing the bank account
 */
bank_account?: bankAccounts$bankAccounts$IBankAccountHash
} & tokens$ITokenBase


declare type tokens$ITokenBase = {

/**
 * Value is "token""
 */
object: "token",

/**
 * IP address of the client that generated the token
 */
client_ip: string,
created: number,
livemode: boolean,

/**
 * Type of the token: card or bank_account
 */
type: "card" | "bank_account",

/**
 * Whether or not this token has already been used (tokens can be used only once)
 */
used: boolean
} & Stripe$IResourceObject


declare type tokens$ITokenCreationOptionsBase = {

/**
 * The customer (owned by the application's account) to create a
 * token for. For use with Stripe Connect only; this can only be used
 * with an OAuth access token or Stripe-Account header. For more
 * details, see the shared customers documentation.
 * 
 * Stripe connect only
 */
customer?: string
} & Stripe$IDataOptions


declare type tokens$ICardTokenCreationOptions = {

/**
 * The card this token will represent. If you also pass in a customer,
 * the card must be the ID of a card belonging to the customer.
 * Otherwise, if you do not pass a customer, a object containing a
 * user's credit card details, with the options described below.
 */
card?: sources$sources$ISourceCreationOptions
} & tokens$ITokenCreationOptionsBase


declare type tokens$IBankAccountTokenCreationOptions = {

/**
 * The card this token will represent. If you also pass in a customer,
 * the card must be the ID of a card belonging to the customer.
 * Otherwise, if you do not pass a customer, a object containing a
 * user's credit card details, with the options described below.
 */
bank_account: bankAccounts$sources$ISourceCreationOptions
} & tokens$ITokenCreationOptionsBase


declare type tokens$IPiiTokenCreationOptions = {
pii: {

/**
 * The personal_id_number for PII in string form.
 */
personal_id_number: string
}
} & Stripe$IDataOptions


declare type transfers$ITransfer = {

/**
 * Value is "transfer"
 */
object: "transfer",

/**
 * Amount (in cents) to be transferred to your bank account
 */
amount: number,

/**
 * Amount in cents reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
 */
amount_reversed: number,
application_fee: string,

/**
 * Balance transaction that describes the impact of this transfer on your account balance. [Expandable]
 */
balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * Time that this record of the transfer was first created.
 */
created: number,

/**
 * Three-letter ISO currency code representing the currency.
 */
currency: string,

/**
 * Date the transfer is scheduled to arrive in the bank. This factors in delays like weekends or bank holidays.
 */
date: number,

/**
 * Internal-only description of the transfer
 */
description: string,

/**
 * ID of the bank account, card, or Stripe account the transfer was sent to. [Expandable]
 */
destination: string | bankAccounts$Stripe$IBankAccount | cards$cards$ICardHash | accounts$accounts$IAccount,

/**
 * If the destination is a Stripe account, this will be the ID of the
 * payment that the destination account received for the transfer. [Expandable]
 */
destination_payment: string,

/**
 * Error code explaining reason for transfer failure if available. See Types of transfer failures for a
 * list of failure codes: https://stripe.com/docs/api#transfer_failures
 */
failure_code: string,

/**
 * Message to user further explaining reason for transfer failure if available.
 */
failure_message: string,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * A list of reversals that have been applied to the transfer.
 */
reversals: transfers$ITransferReversals,

/**
 * Whether or not the transfer has been fully reversed. If the transfer is only partially reversed, this attribute
 * will still be false.
 */
reversed: boolean,

/**
 * ID of the charge (or other transaction) that was used to fund the
 * transfer. If null, the transfer was funded from the available
 * balance. [Expandable]
 */
source_transaction: string | charges$charges$ICharge,

/**
 * The source balance this transfer came from.
 * One of card, bank_account, bitcoin_receiver, or alipay_account
 */
source_type: transfers$SourceTypes,

/**
 * Extra information about a transfer to be displayed on the user's bank statement.
 */
statement_descriptor: string,

/**
 * Current status of the transfer (paid, pending, in_transit, canceled or failed).
 * A transfer will be pending until it is submitted to the bank, at which point
 * it becomes in_transit. It will then change to paid if the transaction goes
 * through. If it does not go through successfully, its status will change to
 * failed or canceled.
 */
status: transfers$Statuses,

/**
 * Can be card, bank_account, or stripe_account.
 */
type: "card" | "bank_account" | "stripe_account"
} & Stripe$IResourceObject


declare type transfers$ITransferReversals = {} & Stripe$IList<transferReversals$transferReversals$IReversal> & resources$resources$TransferReversals


declare type transfers$ITransferCreationOptions = {

/**
 * A positive integer in cents/pence representing how much to transfer.
 */
amount: number,

/**
 * 3-letter ISO code for currency.
 */
currency: string,

/**
 * The id of a bank account or a card to send the transfer to, or the
 * string "default_for_currency" to use the default external
 * account for the specified currency.
 * 
 * If you use Stripe Connect, this can be the the id of a connected
 * Stripe account; see the details about when such transfers are
 * permitted.
 */
destination: string,

/**
 * You can use this parameter to transfer funds from a charge (or
 * other transaction) before they are added to your available
 * balance. A pending balance will transfer immediately but the
 * funds will not become available until the original charge
 * becomes available. See the Connect documentation for details.
 */
source_transaction?: string,

/**
 * A string that identifies this transaction as part of a group.
 * See the Connect documentation for details.
 */
transfer_group?: string
} & Stripe$IDataOptionsWithMetadata


declare type transfers$ITransferUpdateOptions = {

/**
 * An arbitrary string which you can attach to a transfer object. It is
 * displayed when in the web interface alongside the transfer. This
 * can be unset by updating the value to null and then saving.
 */
description?: string
} & Stripe$IDataOptionsWithMetadata


declare type transfers$ITransferListOptions = {
date?: Stripe$IDateFilter,

/**
 * Only return transfers for the destination specified by this
 * account ID.
 */
destination?: string,

/**
 * Only return transfers with the specified transfer group.
 */
transfer_group?: string | null
} & Stripe$IListOptionsCreated


declare type transfers$SourceTypes = "alipay_account" | "bank_account" | "bitcoin_receiver" | "card";

declare type transfers$Statuses = "pending"
| "paid"
| "failed"
| "in_transit"
| "canceled";

declare type transferReversals$IReversal = {

/**
 * Value is 'transfer_reversal'
 */
object: "transfer_reversal",

/**
 * Amount reversed, in cents/pence.
 */
amount: number,

/**
 * Balance transaction that describes the impact of this reversal on your account balance. [Expandable]
 */
balance_transaction: string | balance$balance$IBalanceTransaction,
created: number,

/**
 * Three-letter ISO currency code representing the currency.
 */
currency: string,
metadata: Stripe$IMetadata,

/**
 * ID of the transfer that was reversed. [Expandable]
 */
transfer: string | transfers$transfers$ITransfer
} & Stripe$IResourceObject


declare type transferReversals$IReversalCreationOptions = {

/**
 * A positive integer in cents/pence representing how much of this transfer to reverse. Can only reverse up to the unreversed amount
 * remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts.
 */
amount?: number,

/**
 * An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the dashboard. This will
 * be unset if you POST an empty value.
 */
description?: string,

/**
 * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is
 * given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to
 * the amount of the transfer reversed.
 */
refund_application_fee?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type transferReversals$IReversalUpdateOptions = {

/**
 * An arbitrary string which you can attach to a reversal object. It is displayed when in the web interface alongside the
 * reversal. This can be unset by updating the value to null and then saving.
 */
description?: string
} & Stripe$IDataOptionsWithMetadata


declare type bankAccounts$IBankAccount = bankAccounts$bankAccounts$IBankAccount;

declare type bankAccounts$IBankAccountHash = {

/**
 * value is "bank_account"
 */
object: "bank_account",

/**
 * The name of the person or business that owns the bank account.
 */
account_holder_name: string | null,

/**
 * The type of entity that holds the account. This can be either
 * "individual"" or "company".
 */
account_holder_type: "individual" | "company" | null,

/**
 * Name of the bank associated with the routing number, e.g. WELLS FARGO.
 */
bank_name: string,

/**
 * Two-letter ISO code representing the country the bank account is located in.
 */
country: string,

/**
 * Three-letter ISO currency code representing the currency paid out to the bank account.
 */
currency: string,
customer?: string,

/**
 * Uniquely identifies this particular bank account. You can use this attribute
 * to check whether two bank accounts are the same.
 */
fingerprint: string,
last4: string,

/**
 * The routing transit number for the bank account.
 */
routing_number: string,

/**
 * Possible values are "new", "validated", "verified", "verification_failed",
 * or "errored". A bank account that hasn’t had any activity or validation
 * performed is "new". If Stripe can determine that the bank account exists, its
 * status will be "validated". Note that there often isn’t enough information
 * to know (e.g. for smaller credit unions), and the validation is not always
 * run. If customer bank account verification has succeeded, the bank
 * account status will be "verified". If the verification failed for any reason,
 * such as microdeposit failure, the status will be "verification_failed". If a
 * transfer sent to this bank account fails, we’ll set the status to "errored""
 * and will not continue to send transfers until the bank details are updated.
 */
status: "new"
| "validated"
| "verified"
| "verification_failed"
| "errored"
} & Stripe$IResourceObject


declare interface bankAccounts$ISourceCreationOptions {

/**
 * The account number for the bank account in string form.
 * Must be a checking account.
 */
account_number: string,

/**
 * The country the bank account is in.
 */
country: string,

/**
 * The currency the bank account is in. This must be a
 * country/currency pairing that Stripe supports.
 */
currency: string,

/**
 * The routing number, sort code, or other country-appropriate
 * institution number for the bank account. For US bank
 * accounts, this is required and should be the ACH routing
 * number, not the wire routing number. If you are providing an
 * IBAN for account_number, this field is not required.
 */
routing_number?: string,

/**
 * The name of the person or business that owns the bank
 * account. This field is required when attaching the bank
 * account to a customer object.
 */
account_holder_name?: string,

/**
 * The type of entity that holds the account. This can be either
 * "individual" or "company". This field is required when
 * attaching the bank account to a customer object.
 */
account_holder_type?: "individual" | "company",

/**
 * The type of payment source. Should be "card".
 */
object: "card",

/**
 * Two digit number representing the card's expiration month.
 */
exp_month: number,

/**
 * Two or four digit number representing the card's expiration year.
 */
exp_year: number,

/**
 * The card number, as a string without any separators.
 */
number: string,

/**
 * Card security code. Required unless your account is registered in
 * Australia, Canada, or the United States. Highly recommended to always
 * include this value.
 */
cvc?: string,

/**
 * Cardholder's full name.
 */
name?: string,
address_city?: string,
address_country?: string,
address_line1?: string,
address_line2?: string,
address_state?: string,
address_zip?: string,
metadata?: Stripe$IOptionsMetadata,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type bankAccounts$IBankAccountUpdateOptions = {

/**
 * The name of the person or business that owns the bank account.
 */
account_holder_name?: string | null,

/**
 * The type of entity that holds the account. This can be either "individual" or "company".
 */
account_holder_type?: "individual" | "company" | null
} & Stripe$IDataOptionsWithMetadata


declare interface bankAccounts$IBankAccountVerifyOptions {

/**
 * Two positive integers, in cents, equal to the values of the microdeposits sent to the bank account.
 */
amounts: [number, number]
} 


/**
 * A Bitcoin receiver wraps a Bitcoin address so that a customer can push a payment to you. This guide describes how to use
 * receivers to create Bitcoin payments.
 */
declare type bitcoinReceivers$IBitcoinReceiver = {

/**
 * Value is "bitcoin_receiver"
 */
object: "bitcoin_receiver",

/**
 * True when this bitcoin receiver has received a non-zero amount of bitcoin.
 */
active: boolean,

/**
 * The amount of currency that you are collecting as payment.
 */
amount: number,

/**
 * The amount of currency to which bitcoin_amount_received has been converted.
 */
amount_received: number,

/**
 * The amount of bitcoin that the customer should send to fill the receiver. The bitcoin_amount is denominated in Satoshi:
 * there are 10^8 Satoshi in one bitcoin.
 */
bitcoin_amount: number,

/**
 * The amount of bitcoin that has been sent by the customer to this receiver.
 */
bitcoin_amount_received: number,

/**
 * This URI can be displayed to the customer as a clickable link (to activate their bitcoin client) or as a QR code (for mobile wallets).
 */
bitcoin_uri: number,
created: number,

/**
 * Three-letter ISO currency code representing the currency to which the bitcoin will be converted.
 */
currency: string,
customer: string,
description: string,

/**
 * The customer's email address, set by the API call that creates the receiver.
 */
email: string,

/**
 * This flag is initially false and updates to true when the customer sends the bitcoin_amount to this receiver.
 */
filled: boolean,

/**
 * A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
 */
inbound_address: string,
livemode: boolean,
metadata: Stripe$IMetadata,

/**
 * The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
 */
payment: string,

/**
 * The refund address for these bitcoin, if communicated by the customer.
 */
refund_address: string,

/**
 * A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the
 * receiver with a publishable key.
 */
transactions: Stripe$IList<bitcoinReceivers$IBitcoinTransaction>,

/**
 * This receiver contains uncaptured funds that can be used for a payment or refunded.
 */
uncaptured_funds: boolean,
used_for_payment: boolean
} & Stripe$IResourceObject


declare type bitcoinReceivers$IBitcoinTransaction = {

/**
 * Value is 'list'
 */
object: string,

/**
 * The amount of currency that the transaction was converted to in real-time.
 */
amount: number,

/**
 * The amount of bitcoin contained in the transaction.
 */
bitcoin_amount: number,
created: number,

/**
 * The currency to which this transaction was converted.
 */
currency: string,

/**
 * The receiver to which this transaction was sent.
 */
receiver: string
} & Stripe$IResourceObject


declare type bitcoinReceivers$IBitcoinReceiverCreationOptions = {

/**
 * The amount of currency that you will be paid.
 */
amount: number,

/**
 * The currency to which the bitcoin will be converted. You will be paid out in this currency. Only USD is currently supported.
 */
currency: string,

/**
 * The email address of the customer.
 */
email: string,
description?: string,

/**
 * A flag that indicates whether you would like Stripe to automatically handle refunds for any mispayments to the receiver.
 */
refund_mispayments?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type bitcoinReceivers$IBitcoinReceiverListOptions = {

/**
 * Filter for active receivers.
 */
active?: boolean,

/**
 * Filter for filled receivers.
 */
filled?: boolean,

/**
 * Filter for receivers with uncaptured funds.
 */
uncaptured_funds?: boolean
} & Stripe$IListOptions


declare type cards$ICard = cards$cards$ICard;


/**
 * Hash describing the card used to make the charge
 */
declare type cards$ICardHash = {

/**
 * ID of card (used in conjunction with a customer or recipient ID)
 */
id: string,

/**
 * Value is 'card'
 */
object: "card",

/**
 * The card number
 */
number?: string,

/**
 * Card brand. Can be Visa, American Express, MasterCard, Discover, JCB, Diners Club, or Unknown.
 */
brand: "Visa"
| "American Express"
| "MasterCard"
| "Discover"
| "JCB"
| "Diners Club"
| "Unknown",
exp_month: number,
exp_year: number,

/**
 * Card funding type. Can be credit, debit, prepaid, or unknown
 */
funding: "credit" | "debit" | "prepaid" | "unknown",
last4: string,
address_city: string | null,

/**
 * Billing address country, if provided when creating card
 */
address_country: string | null,
address_line1: string | null,

/**
 * If address_line1 was provided, results of the check: pass, fail, unavailable, or unchecked.
 */
address_line1_check: "pass"
| "fail"
| "unavailable"
| "unchecked"
| null,
address_line2: string | null,
address_state: string | null,
address_zip: string | null,

/**
 * If address_zip was provided, results of the check: pass, fail, unavailable, or unchecked.
 */
address_zip_check: "pass"
| "fail"
| "unavailable"
| "unchecked"
| null,

/**
 * Two-letter ISO code representing the country of the card. You could use this
 * attribute to get a sense of the international breakdown of cards you've collected.
 */
country: string,

/**
 * If a CVC was provided, results of the check: pass, fail, unavailable, or unchecked
 */
cvc_check: "pass" | "fail" | "unavailable" | "unchecked",

/**
 * (For Apple Pay integrations only.) The last four digits of the device account number.
 */
dynamic_last4: string | null,

/**
 * Cardholder name
 */
name: string | null,

/**
 * Uniquely identifies this particular card number. You can use this attribute to check
 * whether two customers who've signed up with you are using the same card number, for example.
 */
fingerprint: string,
metadata?: Stripe$IMetadata,

/**
 * If the card number is tokenized, this is the method that was
 * used. Can be "apple_pay" or "android_pay".
 */
tokenization_method: "apple_pay" | "android_pay" | null
} & Stripe$IResourceObject


declare type cards$ICardUpdateOptions = {
address_city?: string,
address_country?: string,
address_line1?: string,
address_line2?: string,
address_state?: string,
address_zip?: string,

/**
 * Only applicable on accounts (not customers or recipients).
 * If set to true, this card will become the default external
 * account for its currency.
 * 
 * Managed accounts only
 */
default_for_currency?: boolean,
exp_month?: number,
exp_year?: number,

/**
 * Cardholder name
 */
name?: string
} & Stripe$IDataOptionsWithMetadata


declare interface cards$ISourceCreationOptions {

/**
 * The account number for the bank account in string form.
 * Must be a checking account.
 */
account_number: string,

/**
 * The country the bank account is in.
 */
country: string,

/**
 * The currency the bank account is in. This must be a
 * country/currency pairing that Stripe supports.
 */
currency: string,

/**
 * The routing number, sort code, or other country-appropriate
 * institution number for the bank account. For US bank
 * accounts, this is required and should be the ACH routing
 * number, not the wire routing number. If you are providing an
 * IBAN for account_number, this field is not required.
 */
routing_number?: string,

/**
 * The name of the person or business that owns the bank
 * account. This field is required when attaching the bank
 * account to a customer object.
 */
account_holder_name?: string,

/**
 * The type of entity that holds the account. This can be either
 * "individual" or "company". This field is required when
 * attaching the bank account to a customer object.
 */
account_holder_type?: "individual" | "company",

/**
 * The type of payment source. Should be "card".
 */
object: "card",

/**
 * Two digit number representing the card's expiration month.
 */
exp_month: number,

/**
 * Two or four digit number representing the card's expiration year.
 */
exp_year: number,

/**
 * The card number, as a string without any separators.
 */
number: string,

/**
 * Card security code. Required unless your account is registered in
 * Australia, Canada, or the United States. Highly recommended to always
 * include this value.
 */
cvc?: string,

/**
 * Cardholder's full name.
 */
name?: string,
address_city?: string,
address_country?: string,
address_line1?: string,
address_line2?: string,
address_state?: string,
address_zip?: string,
metadata?: Stripe$IOptionsMetadata,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type cards$ISourceCreationOptionsExtended = {

/**
 * Required when adding a card to an account (not applicable to a
 * customers or recipients). The card (which must be a debit card) can be
 * used as a transfer destination for funds in this currency. Currently, the
 * only supported currency for debit card transfers is usd.
 * 
 * Managed accounts only.
 */
currency?: string,

/**
 * Only applicable on accounts (not customers or recipients). If you set
 * this to true (or if this is the first external account being added in this
 * currency) this card will become the default external account for its
 * currency.
 * 
 * Managed accounts only.
 */
default_for_currency?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} & cards$ISourceCreationOptions


declare type subscriptions$SubscriptionStatus = "trialing"
| "active"
| "past_due"
| "canceled"
| "unpaid";

declare type subscriptions$SubscriptionBilling = "charge_automatically" | "send_invoice";


/**
 * Subscriptions allow you to charge a customer's card on a recurring basis. A subscription ties a customer to
 * a particular plan you've created: https://stripe.com/docs/api#create_plan
 */
declare type subscriptions$ISubscription = {

/**
 * Value is "subscription"
 */
object: "subscription",

/**
 * A positive decimal that represents the fee percentage of the subscription invoice amount that will be transferred to
 * the application owner's Stripe account each billing period.
 */
application_fee_percent: number,

/**
 * If the subscription has been canceled with the at_period_end flag set to true, cancel_at_period_end on the
 * subscription will be true. You can use this attribute to determine whether a subscription that has a status
 * of active is scheduled to be canceled at the end of the current period.
 */
cancel_at_period_end: boolean,

/**
 * If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with
 * cancel_at_period_end, canceled_at will still reflect the date of the initial cancellation request, not the end of the
 * subscription period when the subscription is automatically moved to a canceled state.
 */
canceled_at: number | null,
created: number,

/**
 * End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
 */
current_period_end: number,

/**
 * Start of the current period that the subscription has been invoiced for
 */
current_period_start: number,

/**
 * ID of the customer who owns the subscription. [Expandable]
 */
customer: string | customers$ephemeralKeys$ICustomer,

/**
 * Describes the current discount applied to this subscription, if there is one. When billing, a discount applied to a
 * subscription overrides a discount applied on a customer-wide basis.
 */
discount: coupons$coupons$IDiscount | null,

/**
 * If the subscription has ended (either because it was canceled or because the customer was switched to a subscription
 * to a new plan), the date the subscription ended
 */
ended_at: number | null,
metadata: Stripe$IMetadata,
items: Stripe$IList<subscriptionItems$subscriptionItems$ISubscriptionItem>,

/**
 * Hash describing the plan the customer is subscribed to.  Only set if the subscription
 * contains a single plan.
 */
plan?: plans$plans$IPlan | null,

/**
 * The number of subscriptions for the associated plan
 */
quantity: number,

/**
 * Date the subscription started
 */
start: number,

/**
 * Possible values are "trialing", "active", "past_due", "canceled", or "unpaid". A subscription still in its trial period is trialing
 * and moves to active when the trial period is over. When payment to renew the subscription fails, the subscription becomes
 * past_due. After Stripe has exhausted all payment retry attempts, the subscription ends up with a status of either canceled
 * or unpaid depending on your retry settings. Note that when a subscription has a status of unpaid, no subsequent invoices
 * will be attempted (invoices will be created, but then immediately automatically closed. Additionally, updating customer
 * card details will not lead to Stripe retrying the latest invoice.). After receiving updated card details from a customer,
 * you may choose to reopen and pay their closed invoices.
 */
status: subscriptions$SubscriptionStatus,

/**
 * If provided, each invoice created by this subscription will apply the tax rate, increasing the amount billed to the customer.
 */
tax_percent: number,

/**
 * If the subscription has a trial, the end of that trial.
 */
trial_end: number | null,

/**
 * If the subscription has a trial, the beginning of that trial.
 */
trial_start: number | null,

/**
 * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the
 * end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an
 * invoice with payment instructions.
 */
billing: subscriptions$SubscriptionBilling
} & Stripe$IResourceObject


declare type subscriptions$ISubscriptionCustCreationOptions = {

/**
 * @deprecated Use items property instead.
 */
plan?: string,

/**
 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
 * subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order
 * to set an application fee percentage. For more information, see the application fees documentation.
 */
application_fee_percent?: number,

/**
 * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that
 * particular subscription.
 */
coupon?: string,
source?: sources$cards$ISourceCreationOptions,

/**
 * The quantity you'd like to apply to the subscription you're creating. For example, if your plan is £10/user/month, and your customer
 * has 5 users, you could pass 5 as the quantity to have the customer charged £50 (5 x £10) monthly. If you update a subscription but
 * don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute
 * unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit
 * the quantity attribute and will default to 1 unless you pass a quantity parameter.
 */
quantity?: number,

/**
 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
 * subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month
 * with a tax_percent of 20.0 will charge $12 per invoice.
 */
tax_percent?: number,

/**
 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end
 * will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the
 * customer's trial immediately.
 */
trial_end?: number | "now",

/**
 * Integer representing the number of trial period days before the customer is charged for the first time.
 */
trial_period_days?: number,

/**
 * Indicates if a plan’s trial_period_days should be applied to the subscription. Setting trial_end per subscription is preferred,
 * and this defaults to false. Setting this flag to true together with trial_end is not allowed.
 */
trial_from_plan?: boolean,

/**
 * List of subscription items, each with an attached plan.
 */
items?: subscriptions$ISubscriptionCreationItem[],

/**
 * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the
 * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment
 * instructions. Defaults to "charge_automatically".
 */
billing?: subscriptions$SubscriptionBilling,

/**
 * Number of days a customer has to pay invoices generated by this subscription.
 * Only valid for subscriptions where billing=send_invoice.
 */
days_until_due?: number,

/**
 * A future timestamp to anchor the subscription’s billing cycle. This is used to determine the date of the first full invoice, and, for plans
 * with month or year intervals, the day of the month for subsequent invoices.
 */
billing_cycle_anchor?: number,

/**
 * Boolean (default true). Use with a billing_cycle_anchor timestamp to determine whether the customer will be invoiced a prorated amount until
 * the anchor date. If false, the anchor period will be free (similar to a trial).
 */
prorate?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type subscriptions$ISubscriptionCreationOptions = {

/**
 * *
 * The identifier of the customer to subscribe.
 */
customer: string
} & subscriptions$ISubscriptionCustCreationOptions


declare type subscriptions$ISubscriptionUpdateOptions = {

/**
 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
 * subtotal that will be transferred to the application owner’s Stripe account. The request must be made with an OAuth key in order
 * to set an application fee percentage. For more information, see the application fees documentation.
 */
application_fee_percent?: number,

/**
 * The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that
 * particular subscription.
 */
coupon?: string,

/**
 * @deprecated Use items property instead.
 */
plan?: string,

/**
 * Flag telling us whether to prorate switching plans during a billing cycle.
 */
prorate?: boolean,

/**
 * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the
 * same proration that was previewed with upcoming invoice endpoint. It can also be used to implement custom proration logic, such as
 * prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
 */
proration_date?: number,

/**
 * The quantity you'd like to apply to the subscription you're creating. For example, if your plan is £10/user/month, and your customer
 * has 5 users, you could pass 5 as the quantity to have the customer charged £50 (5 x £10) monthly. If you update a subscription but
 * don't change the plan ID (e.g. changing only the trial_end), the subscription will inherit the old subscription's quantity attribute
 * unless you pass a new quantity parameter. If you update a subscription and change the plan ID, the new subscription will not inherit
 * the quantity attribute and will default to 1 unless you pass a quantity parameter.
 */
quantity?: number,
source?: sources$cards$ISourceCreationOptions,

/**
 * A positive decimal (with at most two decimal places) between 1 and 100. This represents the percentage of the subscription invoice
 * subtotal that will be calculated and added as tax to the final amount each billing period. For example, a plan which charges $10/month
 * with a tax_percent of 20.0 will charge $12 per invoice.
 */
tax_percent?: number,

/**
 * Unix timestamp representing the end of the trial period the customer will get before being charged for the first time. If set, trial_end
 * will override the default trial period of the plan the customer is being subscribed to. The special value now can be provided to end the
 * customer's trial immediately.
 */
trial_end?: number | "now",

/**
 * Either "charge_automatically", or "send_invoice". When charging automatically, Stripe will attempt to pay this subscription at the end of the
 * cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment
 * instructions.
 */
billing?: subscriptions$SubscriptionBilling,

/**
 * Number of days a customer has to pay invoices generated by this subscription. Only valid for subscriptions where billing=send_invoice.
 */
days_until_due?: number,

/**
 * List of subscription items, each with an attached plan.
 */
items?: subscriptions$ISubscriptionUpdateItem[],

/**
 * String, unchanged (default) or now. This allows you to reset the billing cycle of a subscription.
 */
billing_cycle_anchor?: "unchanged" | "now",

/**
 * Boolean indicating whether this subscription should cancel at the end of the current period.
 */
cancel_at_period_end?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type subscriptions$ISubscriptionCancellationOptions = {

/**
 * A flag that if set to true will delay the cancellation of the subscription until the end of the current period.
 */
at_period_end?: boolean
} & Stripe$IDataOptions


declare type subscriptions$ISubscriptionListOptions = {

/**
 * The billing mode of the subscriptions to retrieve. Either "charge_automatically" or "send_invoice".
 */
billing?: subscriptions$SubscriptionBilling,

/**
 * The ID of the customer whose subscriptions will be retrieved
 */
customer?: string,

/**
 * The ID of the plan whose subscriptions will be retrieved
 */
plan?: string,

/**
 * The status of the subscriptions to retrieve.
 */
status?: subscriptions$SubscriptionStatus | "all"
} & Stripe$IListOptionsCreated


declare interface subscriptions$ISubscriptionCreationItem {

/**
 * Plan ID for this item.
 */
plan: string,

/**
 * Quantity for this item.
 */
quantity?: number
} 

declare interface subscriptions$ISubscriptionUpdateItem {

/**
 * SubscriptionItem to update.
 */
id?: string,

/**
 * Delete all usage for a given subscription item. Only allowed when deleted is set to true and the current plan’s
 * usage_type is metered.
 */
clear_usage?: boolean,

/**
 * Delete the specified item if set to true.
 */
deleted?: boolean,

/**
 * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information about
 * the object in a structured format.
 */
metadata?: Stripe$IOptionsMetadata,

/**
 * Plan ID for this item.
 */
plan?: string,

/**
 * Quantity for this item.
 */
quantity?: number
} 


/**
 * Subscription items allow you to create customer subscriptions with more than one plan, making it easy to represent
 * complex billing relationships.
 */
declare type subscriptionItems$ISubscriptionItem = {

/**
 * Value is "subscription_item"
 */
object: "subscription_item",
created: number,

/**
 * Set of key/value pairs that you can attach to an object. It can be useful for storing additional information
 * about the object in a structured format.
 */
metadata: Stripe$IMetadata,

/**
 * Hash describing the plan the customer is subscribed to
 */
plan: plans$plans$IPlan,

/**
 * The quantity of the plan to which the customer should be subscribed.
 */
quantity: number
} & Stripe$IResourceObject


declare type subscriptionItems$ISubscriptionItemCreationOptions = {

/**
 * The identifier of the plan to add to the subscription.
 */
plan: string,

/**
 * The identifier of the subscription to modify.
 */
subscription: string,

/**
 * The quantity you’d like to apply to the subscription item you’re creating.
 */
quantity?: number,

/**
 * Flag indicating whether to prorate switching plans during a billing cycle.
 */
prorate?: boolean,

/**
 * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
 * proration that was previewed with the upcoming invoice endpoint.
 */
proration_date?: number
} & Stripe$IDataOptionsWithMetadata


declare type subscriptionItems$ISubscriptionItemUpdateOptions = {

/**
 * The identifier of the new plan for this subscription item.
 */
plan?: string,

/**
 * Flag indicating whether to prorate switching plans during a billing cycle.
 */
prorate?: boolean,

/**
 * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
 * proration that was previewed with the upcoming invoice endpoint.
 */
proration_date?: number,

/**
 * The quantity you’d like to apply to the subscription item you’re creating.
 */
quantity?: number
} & Stripe$IDataOptionsWithMetadata


declare type subscriptionItems$ISubscriptionItemDeleteOptions = {

/**
 * Flag indicating whether to prorate switching plans during a billing cycle.
 */
prorate?: boolean,

/**
 * If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same
 * proration that was previewed with the upcoming invoice endpoint.
 */
proration_date?: number
} & Stripe$IDataOptions


declare type subscriptionItems$ISubscriptionItemListOptions = {

/**
 * The ID of the subscription whose items will be retrieved.
 */
subscription: string
} & Stripe$IListOptionsCreated


declare interface refunds$IRefund {
id: string,

/**
 * Value is 'refund'
 */
object: string,

/**
 * Amount in cents/pence.
 */
amount: number,

/**
 * Balance transaction that describes the impact of this reversal on your account balance.
 */
balance_transaction: string | balance$balance$IBalanceTransaction,

/**
 * ID of the charge that was refunded. [Expandable]
 */
charge: string | charges$charges$ICharge,
created: number,

/**
 * Three-letter ISO currency code representing the currency in which the charge was made.
 */
currency: string,
description: string,

/**
 * A set of key/value pairs that you can attach to the object. It can be useful
 * for storing additional information in a structured format.
 */
metadata: Stripe$IMetadata,

/**
 * Reason for the refund. If set, possible values are "duplicate", "fraudulent", and "requested_by_customer".
 */
reason: string,

/**
 * This is the transaction number that appears on email receipts sent for this refund.
 */
receipt_number: string,

/**
 * Status of the refund. For credit card refunds, this can be succeeded or failed.
 * For other types of refunds, it can be pending, succeeded, failed, or canceled.
 */
status: "pending" | "succeeded" | "failed" | "canceled",

/**
 * If the refund failed, the reason for refund failure if known.
 */
failure_reason?: "lost_or_stolen_card" | "expired_or_canceled_card" | "unknown"
} 

declare type refunds$IRefundCreationOptions = {

/**
 * A positive integer in cents/pence representing how much of this charge to
 * refund. Can only refund up to the unrefunded amount remaining of the
 * charge.
 * 
 * default is entire charge
 */
amount?: number,

/**
 * String indicating the reason for the refund. If set, possible values are
 * "duplicate", "fraudulent", and "requested_by_customer". Specifying
 * "fraudulent" as the reason when you believe the charge to be fraudulent
 * will help us improve our fraud detection algorithms.
 */
reason?: string,

/**
 * Boolean indicating whether the application fee should be refunded when
 * refunding this charge. If a full charge refund is given, the full application
 * fee will be refunded. Else, the application fee will be refunded with an
 * amount proportional to the amount of the charge refunded.
 * An application fee can only be refunded by the application that created the
 * charge.
 * 
 * Connect only, default is false.
 */
refund_application_fee?: boolean,

/**
 * Boolean indicating whether the transfer should be reversed when
 * refunding this charge. The transfer will be reversed for the same amount
 * being refunded (either the entire or partial amount).
 * A transfer can only be reversed by the application that created the charge.
 * 
 * Connect only, default is false.
 */
reverse_transfer?: boolean
} & Stripe$IDataOptionsWithMetadata


declare type refunds$IRefundCreationOptionsWithCharge = {

/**
 * The identifier of the charge to refund.
 */
charge: string
} & refunds$IRefundCreationOptions


declare type refunds$IRefundListOptions = {

/**
 * Only return refunds for the charge specified by this charge ID.
 */
charge?: string
} & Stripe$IListOptions


declare interface sources$ISourceCreationOptions {

/**
 * The account number for the bank account in string form.
 * Must be a checking account.
 */
account_number: string,

/**
 * The country the bank account is in.
 */
country: string,

/**
 * The currency the bank account is in. This must be a
 * country/currency pairing that Stripe supports.
 */
currency: string,

/**
 * The routing number, sort code, or other country-appropriate
 * institution number for the bank account. For US bank
 * accounts, this is required and should be the ACH routing
 * number, not the wire routing number. If you are providing an
 * IBAN for account_number, this field is not required.
 */
routing_number?: string,

/**
 * The name of the person or business that owns the bank
 * account. This field is required when attaching the bank
 * account to a customer object.
 */
account_holder_name?: string,

/**
 * The type of entity that holds the account. This can be either
 * "individual" or "company". This field is required when
 * attaching the bank account to a customer object.
 */
account_holder_type?: "individual" | "company",

/**
 * The type of payment source. Should be "card".
 */
object: "card",

/**
 * Two digit number representing the card's expiration month.
 */
exp_month: number,

/**
 * Two or four digit number representing the card's expiration year.
 */
exp_year: number,

/**
 * The card number, as a string without any separators.
 */
number: string,

/**
 * Card security code. Required unless your account is registered in
 * Australia, Canada, or the United States. Highly recommended to always
 * include this value.
 */
cvc?: string,

/**
 * Cardholder's full name.
 */
name?: string,
address_city?: string,
address_country?: string,
address_line1?: string,
address_line2?: string,
address_state?: string,
address_zip?: string,
metadata?: Stripe$IOptionsMetadata,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} 

declare type sources$ISourceCreationOptionsExtended = {

/**
 * Required when adding a card to an account (not applicable to a
 * customers or recipients). The card (which must be a debit card) can be
 * used as a transfer destination for funds in this currency. Currently, the
 * only supported currency for debit card transfers is usd.
 * 
 * Managed accounts only.
 */
currency?: string,

/**
 * Only applicable on accounts (not customers or recipients). If you set
 * this to true (or if this is the first external account being added in this
 * currency) this card will become the default external account for its
 * currency.
 * 
 * Managed accounts only.
 */
default_for_currency?: boolean,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} & sources$ISourceCreationOptions


declare type countrySpecs$ICountrySpec = {

/**
 * Value is "country_spec"
 */
object: "country_spec",

/**
 * The default currency for this country. This applies to both payment methods and bank accounts.
 */
default_currency: string,

/**
 * Currencies that can be accepted in the specific country (for transfers).
 */
supported_bank_account_currencies: {},

/**
 * Currencies that can be accepted in the specified country (for payments).
 */
supported_payment_currencies: string[],

/**
 * Payment methods available in the specified country. You will need to enable bitcoin and ACH payments on your account for those methods to
 * appear in this list. The stripe payment method refers to charging through your platform.
 */
supported_payment_methods: string[],

/**
 * Lists the types of verification data needed to keep an account open. Includes 'minimum' fields, which every account must eventually
 * provide, as well as a 'additional' fields, which are only required for some merchants.
 */
verification_fields: {
individual: {
minimum: string[],
additional: string[]
},
company: {
minimum: string[],
additional: string[]
}
}
} & Stripe$IResourceObject


declare type reviews$IReview = {

/**
 * String representing the object’s type. Objects of the same type share the same value.
 */
object: "review",

/**
 * The charge associated with this review. [Expandable]
 */
charge: string | charges$charges$ICharge,

/**
 * Time at which the object was created. Measured in seconds since the Unix epoch.
 */
created: number,

/**
 * Has the value true if the object exists in live mode or the value false if the object exists in test mode.
 */
livemode: boolean,

/**
 * If true, the review needs action.
 */
open: boolean,

/**
 * The reason the review is currently open or closed.
 */
reason: "rule"
| "manual"
| "approved"
| "refunded"
| "refunded_as_fraud"
| "disputed"
} & Stripe$IResourceObject


declare type applications$IApplication = {

/**
 * String representing the object’s type. Objects of the same type share the same value.
 */
object: "application",

/**
 * String representing the application’s name.
 */
name: string
} & Stripe$IResourceObject


declare type usageRecords$IUsageRecordAction = "increment" | "set";

declare interface usageRecords$IUsageRecordCreationOptions {

/**
 * The usage quantity for the specified timestamp
 */
quantity: number,

/**
 * The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided subscription_item
 */
timestamp: number,

/**
 * Valid values are increment (default) or set. When using increment the specified quantity will be added to the usage at the specified
 * timestamp. The set action will overwrite the usage quantity at that timestamp.
 */
action?: usageRecords$IUsageRecordAction
} 

declare type usageRecords$IUsageRecord = {
object: "usage_record",
id: string,
livemode: boolean,
quantity: number,
subscription_item: string,
timestamp: number
} & Stripe$IObject



/**
 * A object with a data property that contains an array of up to limit summaries,
 * starting after summary starting_after. Each entry in the array is a separate summary object.
 * If no more summaries are available, the resulting array is empty.
 */
declare type usageRecordSummaries$IUsageRecordSummaries = {
object: "list"
} & Stripe$IList<usageRecordSummaries$IUsageRecordSummariesItem>


declare interface usageRecordSummaries$IUsageRecordSummariesItem {
id: string,
object: string,
invoice: string,
livemode: boolean,
period: invoices$invoices$IPeriod,
subscription_item: string,
total_usage: number
} 

declare type usageRecordSummaries$IUsageRecordSummariesListOptions = {

/**
 * Only summary items for the given subscription item.
 */
subscription_item: string,

/**
 * A limit on the number of objects to be returned. The limit can range between 1 and 100.
 * @default 10
 */
limit?: number
} & Stripe$IListOptions


declare class Stripe$StripeResource  {
constructor(stripe: Stripe, urlData: any): this
}

declare class resources$UsageRecords mixins Stripe$StripeResource {

/**
 * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
 */
create(
subscription: string,
data: usageRecords$usageRecords$IUsageRecordCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<usageRecords$usageRecords$IUsageRecord>): Promise<usageRecords$usageRecords$IUsageRecord>;
create(
subscription: string,
data: usageRecords$usageRecords$IUsageRecordCreationOptions,
response?: Stripe$IResponseFn<usageRecords$usageRecords$IUsageRecord>): Promise<usageRecords$usageRecords$IUsageRecord>
}

declare class resources$UsageRecordSummaries mixins Stripe$StripeResource {

/**
 * Creates a usage record for a specified subscription item and date, and fills it with a quantity.
 */
list(
data: usageRecordSummaries$usageRecordSummaries$IUsageRecordSummariesListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<usageRecordSummaries$usageRecordSummaries$IUsageRecordSummaries>): Promise<usageRecordSummaries$usageRecordSummaries$IUsageRecordSummaries>;
list(
data: usageRecordSummaries$usageRecordSummaries$IUsageRecordSummariesListOptions,
response?: Stripe$IResponseFn<usageRecordSummaries$usageRecordSummaries$IUsageRecordSummaries>): Promise<usageRecordSummaries$usageRecordSummaries$IUsageRecordSummaries>
}

declare class resources$Accounts mixins Stripe$StripeResource {

/**
 * With Connect, you can create Stripe accounts for your users. To do this, you'll first need to register your platform.
 */
create(
data: accounts$accounts$IAccountCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
create(
data: accounts$accounts$IAccountCreationOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;

/**
 * Retrieves the details of the account.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
retrieve(
id: string,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
retrieve(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
retrieve(
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;

/**
 * Updates an account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * 
 * You may only update accounts that you manage. To update your own account, you can currently only do so via the dashboard.
 * For more information on updating managed accounts, see our guide.
 */
update(
id: string,
data: accounts$accounts$IAccountUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
update(
id: string,
data: accounts$accounts$IAccountUpdateOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;

/**
 * With Connect, you may delete Stripe accounts you manage.
 * 
 * Managed accounts created using test-mode keys can be deleted at any time. Managed accounts created using live-mode keys may only be
 * deleted once all balances are zero.
 * 
 * If you are looking to close your own account, use the data tab in your account settings instead.
 */
del(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
id: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * With Connect, you may flag managed accounts as suspicious.
 * 
 * Managed accounts created using test-mode keys can be rejected at any time. Managed accounts created using live-mode keys may only be
 * rejected once all balances are zero.
 */
reject(
id: string,
data: accounts$accounts$IRejectReason,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;
reject(
id: string,
data: accounts$accounts$IRejectReason,
response?: Stripe$IResponseFn<accounts$accounts$IAccount>): Promise<accounts$accounts$IAccount>;

/**
 * Returns a list of accounts connected to your platform via Connect. If you’re not a platform, the list will be empty.
 */
list(
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<accounts$accounts$IAccount>>): Promise<Stripe$IList<accounts$accounts$IAccount>>;
list(
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<accounts$accounts$IAccount>>): Promise<Stripe$IList<accounts$accounts$IAccount>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<accounts$accounts$IAccount>>): Promise<Stripe$IList<accounts$accounts$IAccount>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<accounts$accounts$IAccount>>): Promise<Stripe$IList<accounts$accounts$IAccount>>;

/**
 * When you create a new bank account or credit card, you must specify a managed account to create it on.
 * 
 * If the bank account's owner has no other external account in the bank account's currency, the new bank account will become the
 * default for that currency. However, if the owner already has a bank account for that currency, the new account will only become
 * the default if the default_for_currency parameter is set to true.
 * 
 * If the account has no default destination card, then the new card will become the default. However, if the owner already has a
 * default then it will not change. To change the default, you should set default_for_currency to true when creating a card for a
 * managed account.
 */
createExternalAccount(
accId: string,
data: accounts$accounts$IExternalAccountCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;
createExternalAccount(
accId: string,
data: accounts$accounts$IExternalAccountCreationOptions,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;

/**
 * By default, you can see the 10 most recent bank accounts stored on a managed account directly on the object, but you can also
 * retrieve details about a specific bank account stored on the Stripe account.
 */
retrieveExternalAccount(
accId: string,
bankAccId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<bankAccounts$bankAccounts$IBankAccount>): Promise<bankAccounts$bankAccounts$IBankAccount>;
retrieveExternalAccount(
accId: string,
bankAccId: string,
response?: Stripe$IResponseFn<bankAccounts$bankAccounts$IBankAccount>): Promise<bankAccounts$bankAccounts$IBankAccount>;

/**
 * You can always see the 10 most recent cards directly on a managed account; this method lets you retrieve details about a specific
 * card stored on the account.
 */
retrieveCard(
accId: string,
cardId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
retrieveCard(
accId: string,
cardId: string,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * Updates the metadata of a bank account belonging to a managed account, and optionally sets it as the default for its currency.
 * Other bank account details are not editable by design.
 */
updateExternalAccount(
accId: string,
bankAccId: string,
data: accounts$accounts$IExternalAccountUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<bankAccounts$bankAccounts$IBankAccount>): Promise<bankAccounts$bankAccounts$IBankAccount>;
updateExternalAccount(
accId: string,
bankAccId: string,
data: accounts$accounts$IExternalAccountUpdateOptions,
response?: Stripe$IResponseFn<bankAccounts$bankAccounts$IBankAccount>): Promise<bankAccounts$bankAccounts$IBankAccount>;

/**
 * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
 * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
 * interruption.
 * 
 * When you update a card, Stripe will automatically validate the card.
 */
updateExternalAccount(
accId: string,
cardId: string,
data: cards$cards$ICardUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
updateExternalAccount(
accId: string,
cardId: string,
data: cards$cards$ICardUpdateOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * You can delete destination bank accounts and cards from a managed account. If a bank account is the default external account for its currency
 * or card's default_for_currency property is true, it can only be deleted if it is the only external account for that currency, and the
 * currency is not the Stripe account's default currency. Otherwise, you must set another external account to be the default for the currency
 * before deleting it.
 */
deleteExternalAccount(
accId: string,
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteExternalAccount(
accId: string,
id: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * You can see a list of the bank accounts belonging to a managed account. Note that the 10 most recent external accounts are always
 * available by default on the corresponding Stripe object. If you need more than those 10, you can use this API method and the limit
 * and starting_after parameters to page through additional bank accounts.
 */
listExternalAccounts(
accId: string,
data: accounts$accounts$IBankAccountListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>): Promise<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>;
listExternalAccounts(
accId: string,
data: accounts$accounts$IBankAccountListOptions,
response?: Stripe$IResponseFn<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>): Promise<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>;

/**
 * You can see a list of the cards belonging to a managed account. Note that the 10 most recent external accounts are available on the
 * account object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page
 * through additional cards.
 */
listExternalAccounts(
accId: string,
data: accounts$accounts$ICardListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
listExternalAccounts(
accId: string,
data: accounts$accounts$ICardListOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;

/**
 * Creates a single-use login link for an Express account to access their Stripe dashboard.
 * You may only create login links for Express accounts connected to your platform.
 * Returns a login link object if the call succeeded.
 */
createLoginLink(
accId: string,
response?: Stripe$IResponseFn<accounts$accounts$ILoginLink>): Promise<accounts$accounts$ILoginLink>;
createLoginLink(
accId: string,
redirectUrl?: string,
response?: Stripe$IResponseFn<accounts$accounts$ILoginLink>): Promise<accounts$accounts$ILoginLink>
}

declare class resources$ApplicationFees mixins Stripe$StripeResource {

/**
 * Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the
 * application fee.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFee>): Promise<applicationFees$applicationFees$IApplicationFee>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFee>): Promise<applicationFees$applicationFees$IApplicationFee>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFee>): Promise<applicationFees$applicationFees$IApplicationFee>;
retrieve(
id: string,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFee>): Promise<applicationFees$applicationFees$IApplicationFee>;

/**
 * Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most
 * recent fees appearing first.
 */
list(
data: applicationFees$applicationFees$IApplicationFeeListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>;
list(
data: applicationFees$applicationFees$IApplicationFeeListOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFee>>;

/**
 * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
 * the fee was originally collected from.
 * 
 * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
 * 
 * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
 * application fee, or when trying to refund more money than is left on an application fee.
 */
refund(
feeId: string,
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
refund(
feeId: string,
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
refund(
feeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
refund(
feeId: string,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
 * the fee was originally collected from.
 * 
 * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
 * 
 * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
 * application fee, or when trying to refund more money than is left on an application fee.
 */
createRefund(
feeId: string,
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
createRefund(
feeId: string,
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
createRefund(
feeId: string,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
createRefund(
feeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
 * about a specific refund stored on the application fee.
 */
retreiveRefund(
feeId: string,
refundId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
retreiveRefund(
feeId: string,
refundId: string,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
 * unchanged.
 * 
 * This request only accepts metadata as an argument.
 */
updateRefund(
feeId: string,
refundId: string,
data: {
metadata?: Stripe$IOptionsMetadata
},
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
updateRefund(
feeId: string,
refundId: string,
data: {
metadata?: Stripe$IOptionsMetadata
},
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
 * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
 * parameters to page through additional refunds.
 */
listRefunds(
feeId: string,
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
listRefunds(
feeId: string,
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
listRefunds(
feeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
listRefunds(
feeId: string,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>
}

declare class resources$ApplicationFeeRefunds mixins Stripe$StripeResource {

/**
 * Refunds an application fee that has previously been collected but not yet refunded. Funds will be refunded to the Stripe account that
 * the fee was originally collected from.
 * 
 * You can optionally refund only part of an application fee. You can do so as many times as you wish until the entire fee has been refunded.
 * 
 * Once entirely refunded, an application fee can't be refunded again. This method will throw an error when called on an already-refunded
 * application fee, or when trying to refund more money than is left on an application fee.
 */
create(
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
create(
data: applicationFees$applicationFees$IApplicationFeeRefundCreationOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
create(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
create(
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details
 * about a specific refund stored on the application fee.
 */
retrieve(
refundId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
retrieve(
refundId: string,
options: Stripe$IDataOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
retrieve(
refundId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
retrieve(
refundId: string,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left
 * unchanged.
 * 
 * This request only accepts metadata as an argument.
 */
update(
refundId: string,
data: {
metadata?: Stripe$IOptionsMetadata
},
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;
update(
refundId: string,
data: {
metadata?: Stripe$IOptionsMetadata
},
response?: Stripe$IResponseFn<applicationFees$applicationFees$IApplicationFeeRefund>): Promise<applicationFees$applicationFees$IApplicationFeeRefund>;

/**
 * You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available
 * by default on the application fee object. If you need more than those 10, you can use this API method and the limit and starting_after
 * parameters to page through additional refunds.
 */
list(
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
list(
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>): Promise<Stripe$IList<applicationFees$applicationFees$IApplicationFeeRefund>>
}

declare class resources$Balance mixins Stripe$StripeResource {
retrieve(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<balance$balance$IBalance>): Promise<balance$balance$IBalance>;
retrieve(
response?: Stripe$IResponseFn<balance$balance$IBalance>): Promise<balance$balance$IBalance>;
retrieveTransaction(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<balance$balance$IBalanceTransaction>;
retrieveTransaction(
id: string,
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<balance$balance$IBalanceTransaction>;
listTransactions(
data: balance$balance$IBalanceListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<Stripe$IList<balance$balance$IBalanceTransaction>>;
listTransactions(
data: balance$balance$IBalanceListOptions,
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<Stripe$IList<balance$balance$IBalanceTransaction>>;
listTransactions(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<Stripe$IList<balance$balance$IBalanceTransaction>>;
listTransactions(
response?: Stripe$IResponseFn<balance$balance$IBalanceTransaction>): Promise<Stripe$IList<balance$balance$IBalanceTransaction>>
}

declare class resources$BitcoinReceivers mixins Stripe$StripeResource {

/**
 * Creates a Bitcoin receiver object that can be used to accept bitcoin payments from your customer. The receiver exposes a Bitcoin address
 * and is created with a bitcoin to USD exchange rate that is valid for 10 minutes.
 */
create(
data: bitcoinReceivers$bitcoinReceivers$IBitcoinReceiverCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;
create(
data: bitcoinReceivers$bitcoinReceivers$IBitcoinReceiverCreationOptions,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;

/**
 * Retrieves the Bitcoin receiver with the given ID.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;
retrieve(
id: string,
response?: Stripe$IResponseFn<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>): Promise<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>;

/**
 * Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.
 */
list(
data: bitcoinReceivers$bitcoinReceivers$IBitcoinReceiverListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>>): Promise<Stripe$IList<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>>;
list(
data: bitcoinReceivers$bitcoinReceivers$IBitcoinReceiverListOptions,
response?: Stripe$IResponseFn<Stripe$IList<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>>): Promise<Stripe$IList<bitcoinReceivers$bitcoinReceivers$IBitcoinReceiver>>;
setMetadata(): void;
getMetadata(): void
}

declare class resources$Charges mixins Stripe$StripeResource {

/**
 * To charge a credit card, you create a charge object. If your API key is in test mode, the supplied card won't actually be charged, though
 * everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).
 * @returns Returns a charge object if the charge succeeded. Throws an error if something goes wrong. A common source of error is an invalid or
expired card, or a valid card with insufficient available balance. If the cvc parameter is provided, Stripe will attempt to check the CVC's
correctness, and the check's result will be returned. Similarly, If address_line1 or address_zip are provided, Stripe will similarly try to
check the validity of those parameters. Some banks do not support checking one or more of these parameters, in which case Stripe will return
an 'unavailable' result. Also note that, depending on the bank, charges can succeed even when passed incorrect CVC and address information.
 * @param options Options for creating a charge.
 * @param response A callback to receive the response and newly created charge, or errors if they exist.
 */
create(
data: charges$charges$IChargeCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
create(
data: charges$charges$IChargeCreationOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;

/**
 * Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned
 * from your previous request, and Stripe will return the corresponding charge information. The same information is
 * returned when creating or refunding the charge.
 * @param id The identifier of the charge to be retrieved
 * @param response A callback that takes in a potential error and a charge object.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
retrieve(
id: string,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;

/**
 * Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * This request accepts only the description, metadata, receipt_emailand fraud_details as arguments.
 * @param id The identifier of the charge to be updated
 * @param data An object containing the updated properties.
 */
update(
id: string,
data: charges$charges$IChargeUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
update(
id: string,
data: charges$charges$IChargeUpdateOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;

/**
 * Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first
 * you created a charge with the capture option set to false. Uncaptured payments expire exactly seven days after they are
 * created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.
 */
capture(
id: string,
data?: charges$charges$IChargeCaptureOptions,
options?: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;

/**
 * Returns a list of charges you've previously created. The charges are returned in sorted order, with the most recent charges
 * appearing first.
 * @returns An object with a data property that contains an array of up to limit charges, starting after charge starting_after.
Each entry in the array is a separate charge object. If no more charges are available, the resulting array will be empty.
If you provide a non-existent customer ID, this call throws an error. You can optionally request that the response include
the total count of all charges that match your filters. To do so, specify include[]=total_count in your request.
 * @param data Filtering options for the returned items.
 */
list(
data: charges$charges$IChargeListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;
list(
data: charges$charges$IChargeListOptions,
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;

/**
 * When you create a new refund, you must specify a charge to create it on.
 * Creating a new refund will refund a charge that has previously been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were originally charged are also refunded.
 * You can optionally refund only part of a charge. You can do so as many times as you wish until the entire charge has been refunded.
 * Once entirely refunded, a charge can't be refunded again. This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
 */
refund(
chargeId: string,
data: refunds$refunds$IRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
refund(
chargeId: string,
data: refunds$refunds$IRefundCreationOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
refund(
chargeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
refund(
chargeId: string,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * When you create a new refund, you must specify a charge to create it on. Creating a new refund will refund a charge that has previously
 * been created but not yet refunded. Funds will be refunded to the credit or debit card that was originally charged. The fees you were
 * originally charged are also refunded. You can optionally refund only part of a charge. You can do so as many times as you wish until
 * the entire charge has been refunded. Once entirely refunded, a charge can't be refunded again. This method will throw an error when
 * called on an already-refunded charge, or when trying to refund more money than is left on a charge.
 * @returns Returns the refund object if the refund succeeded. Throws an error if the charge has already been refunded or an invalid
charge identifier was provided.
 * @param id The identifier of the charge to be refunded.
 * @param data Options for specifying reasons and refund amount
 * @param response The refund.
 * @deprecated According to source code (https://github.com/stripe/stripe-node/blob/master/lib/resources/Charges.js#L43)
 */
createRefund(
id: string,
data: refunds$refunds$IRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
createRefund(
id: string,
data: refunds$refunds$IRefundCreationOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
createRefund(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
createRefund(
id: string,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * By default, you can see the 10 most recent refunds stored directly on the charge object, but you can also retrieve details about a specific
 * refund stored on the charge.
 * @param chargeId The ID of the charge refunded
 * @param refundId The ID of the refund to retrieve
 */
retrieveRefund(
chargeId: string,
refundId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieveRefund(
chargeId: string,
refundId: string,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * This request only accepts metadata as an argument.
 * @param chargeId The ID of the charge refunded
 * @param refundId The ID of the refund to update
 */
updateRefund(
chargeId: string,
refundId: string,
data: Stripe$IDataOptionsWithMetadata,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
updateRefund(
chargeId: string,
refundId: string,
data: Stripe$IDataOptionsWithMetadata,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on
 * the charge object. If you need more than those 10, you can use this API method and the limit and starting_after parameters to page through
 * additional refunds.
 * @returns A object with a data property that contains an array of up to limit refunds, starting after refund starting_after.
Each entry in the array is a separate refund object. If no more refunds are available, the resulting array will be empty. If you provide
a non-existent customer ID or charge ID, this call throws an error. You can optionally request that the response include the total count
of all refunds that match your filters. To do so, specify include[]=total_count in your request.
 * @param chargeId The ID of the charge refunded
 * @param data Used to filter the refunds returned
 */
listRefunds(
chargeId: string,
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
listRefunds(
chargeId: string,
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
listRefunds(
chargeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
listRefunds(
chargeId: string,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
markAsSafe(
chargeId: string,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>;
markAsFraudulent(
chargeId: string,
response?: Stripe$IResponseFn<charges$charges$ICharge>): Promise<charges$charges$ICharge>
}

declare class resources$ChargeRefunds mixins Stripe$StripeResource {

/**
 * When you create a new refund, you must specify a charge to create it on.
 * 
 * Creating a new refund will refund a charge that has previously been created but not yet refunded.
 * Funds will be refunded to the credit or debit card that was originally charged.
 * The fees you were originally charged are also refunded.
 * 
 * You can optionally refund only part of a charge.
 * You can do so as many times as you wish until the entire charge has been refunded.
 * 
 * Once entirely refunded, a charge can't be refunded again.
 * This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
 */
create(
data: refunds$refunds$IRefundCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
create(
data: refunds$refunds$IRefundCreationOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
create(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
create(
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Retrieves the details of an existing refund.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Updates the specified refund by setting the values of the parameters passed.
 * Any parameters not provided will be left unchanged.
 * 
 * This request only accepts metadata as an argument.
 */
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
 * with the most recent refunds appearing first.
 * For convenience, the 10 most recent refunds are always available by default on the charge object.
 */
list(
data: refunds$refunds$IRefundListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
data: refunds$refunds$IRefundListOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>
}

declare class resources$Coupons mixins Stripe$StripeResource {

/**
 * You can create coupons easily via the coupon management page of the Stripe dashboard. Coupon creation is also accessible via the API if
 * you need to create coupons on the fly. A coupon has either a percent_off or an amount_off and currency. If you set an amount_off, that
 * amount will be subtracted from any invoice's subtotal. For example, an invoice with a subtotal of $10 will have a final total of $0 if
 * a coupon with an amount_off of 2000 is applied to it and an invoice with a subtotal of $30 will have a final total of $10 if a coupon
 * with an amount_off of 2000 is applied to it.
 * @returns Returns the coupon object.
 * @param data Options for creating the coupon.
 */
create(
data: coupons$coupons$ICouponCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;
create(
data: coupons$coupons$ICouponCreationOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;

/**
 * Retrieves the coupon with the given ID.
 * @returns Returns a coupon if a valid coupon ID was provided. Throws an error otherwise.
 * @param id The ID of the desired coupon
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;
retrieve(
id: string,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;

/**
 * Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.
 * @returns The newly updated coupon object if the call succeeded. Otherwise, this call throws an error, such as if the coupon has
been deleted.
 * @param id The ID of the coupon to be updated
 * @param data Metadata to update
 */
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
response?: Stripe$IResponseFn<coupons$coupons$ICoupon>): Promise<coupons$coupons$ICoupon>;

/**
 * You can delete coupons via the coupon management page of the Stripe dashboard. However, deleting a coupon does not affect any
 * customers who have already applied the coupon; it means that new customers can't redeem the coupon. You can also delete coupons
 * via the API.
 * @returns An object with the deleted coupon's ID and a deleted flag upon success. Otherwise, this call throws an error, such as
if the coupon has already been deleted.
 * @param id The ID of the coupon to be deleted.
 */
del(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
id: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * Returns a list of your coupons.
 * @returns A object with a data property that contains an array of up to limit coupons, starting after coupon starting_after. Each
entry in the array is a separate coupon object. If no more coupons are available, the resulting array will be empty. This request
should never throw an error. You can optionally request that the response include the total count of all coupons. To do so, specify
include[]=total_count in your request.
 * @param data Filtering options for the list.
 */
list(
data: Stripe$IListOptionsCreated,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<coupons$coupons$ICoupon>>): Promise<Stripe$IList<coupons$coupons$ICoupon>>;
list(
data: Stripe$IListOptionsCreated,
response?: Stripe$IResponseFn<Stripe$IList<coupons$coupons$ICoupon>>): Promise<Stripe$IList<coupons$coupons$ICoupon>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<coupons$coupons$ICoupon>>): Promise<Stripe$IList<coupons$coupons$ICoupon>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<coupons$coupons$ICoupon>>): Promise<Stripe$IList<coupons$coupons$ICoupon>>
}

declare class resources$CustomerCards mixins Stripe$StripeResource {

/**
 * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card,
 * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default,
 * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
 * @returns Returns the card object.
 */
create(
data: {
card?: sources$sources$ISourceCreationOptionsExtended
},
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
create(
data: {
card?: sources$sources$ISourceCreationOptionsExtended
},
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
 * cards are always available by default on the customer or recipient object. If you need more than
 * those 10, you can use this API method and the limit and starting_after parameters to page through
 * additional cards.
 * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
that the response include the total count of all cards for the customer or recipient. To do so,
specify include[]=total_count in your request.
 * @param data Filtering options
 */
list(
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
list(
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;

/**
 * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
 * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
 * interruption. When you update a card, Stripe will automatically validate the card.
 * @returns Returns the card object.
 * @param cardId The ID of the card to be retrieved.
 */
update(
cardId: string,
data: cards$cards$ICardUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
update(
cardId: string,
data: cards$cards$ICardUpdateOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but
 * you can also retrieve details about a specific card stored on the customer or recipient.
 * @returns Returns the card object.
 * @param cardId The ID of the card to be retrieved.
 */
retrieve(
cardId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
retrieve(
cardId: string,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * You can delete cards from a customer or recipient. If you delete a card that is currently the
 * default source on a customer, then the most recently added source will become the new default.
 * If you delete a card that is the last remaining source on the customer then the default_source
 * attribute will become null. Similarly, if you delete the default card on a recipient, then the
 * most recently added card will become the new default. If you delete the last remaining card on
 * a recipient, then the default_card attribute will become null. Note that for cards belonging to
 * customers, you may want to prevent customers on paid subscriptions from deleting all cards on
 * file so that there is at least one default card for the next invoice payment attempt.
 * @returns Returns the deleted card object.
 * @param cardId The ID of the card to be retrieved.
 */
del(
cardId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
cardId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$Customers mixins Stripe$StripeResource {

/**
 * Creates a new customer object.
 * @returns Returns a customer object if the call succeeded. The returned object will have information about subscriptions, discount,
and payment sources, if that information has been provided. If a non-free plan is specified and a source is not provided (unless
the plan has a trial period), the call will throw an error. If a non-existent plan or a non-existent or expired coupon is provided,
the call will throw an error. If a source has been attached to the customer, the returned customer object will have a default_source
attribute, which is an ID that can be expanded into the full source details when retrieving the customer.
 * @param data The options for the new customer
 */
create(
data: customers$customers$ICustomerCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;
create(
data: customers$customers$ICustomerCreationOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;

/**
 * Returns a list of your customers. The customers are returned sorted by creation date, with the most recently created customers
 * appearing first.
 * @returns A object with a data property that contains an array of up to limit customers, starting after customer starting_after.
Each entry in the array is a separate customer object. If no more customers are available, the resulting array will be empty.
This request should never throw an error. You can optionally request that the response include the total count of all customers
that match your filters. To do so, specify include[]=total_count in your request.
 * @param data Allows you to filter the customers you want.
 */
list(
data: customers$customers$ICustomerListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<customers$ephemeralKeys$ICustomer>>): Promise<Stripe$IList<customers$ephemeralKeys$ICustomer>>;
list(
data: customers$customers$ICustomerListOptions,
response?: Stripe$IResponseFn<Stripe$IList<customers$ephemeralKeys$ICustomer>>): Promise<Stripe$IList<customers$ephemeralKeys$ICustomer>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<customers$ephemeralKeys$ICustomer>>): Promise<Stripe$IList<customers$ephemeralKeys$ICustomer>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<customers$ephemeralKeys$ICustomer>>): Promise<Stripe$IList<customers$ephemeralKeys$ICustomer>>;

/**
 * Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * For example, if you pass the card parameter, that becomes the customer's active card to be used for all charges in the future.
 * When you update a customer to a new valid card: for each of the customer's current subscriptions, if the subscription is in the
 * past_due state, then the latest unpaid, unclosed invoice for the subscription will be retried (note that this retry will not count
 * as an automatic retry, and will not affect the next regularly scheduled payment for the invoice). (Note also that no invoices
 * pertaining to subscriptions in the unpaid state, or invoices pertaining to canceled subscriptions, will be retried as a result
 * of updating the customer's card.) This request accepts mostly the same arguments as the customer creation call.
 * @returns Returns the customer object if the update succeeded. Throws an error if update parameters are invalid (e.g. specifying
an invalid coupon or an invalid card).
 * @param id The identifier of the customer to be retrieved.
 */
update(
id: string,
data: customers$customers$ICustomerUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;
update(
id: string,
data: customers$customers$ICustomerUpdateOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;

/**
 * Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer
 * creation.
 * @returns Returns a customer object if a valid identifier was provided. When requesting the ID of a customer that has been deleted,
a subset of the customer's information will be returned, including a "deleted" property, which will be true.
 * @param id The identifier of the customer to be retrieved.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;
retrieve(
id: string,
response?: Stripe$IResponseFn<customers$ephemeralKeys$ICustomer>): Promise<customers$ephemeralKeys$ICustomer>;

/**
 * Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.
 * @returns Returns an object with a deleted parameter on success. If the customer ID does not exist, this call throws an error. Unlike
other objects, deleted customers can still be retrieved through the API, in order to be able to track the history of customers while
still removing their credit card details and preventing any further operations to be performed (such as adding a new subscription).
 * @param id The identifier of the customer to be deleted.
 */
del(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
id: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * When you create a new credit card, you must specify a customer or recipient to create it on. If the card's owner has no default card,
 * then the new card will become the default. However, if the owner already has a default then it will not change. To change the default,
 * you should either update the customer to have a new default_source or update the recipient to have a new default_card.
 * @returns Returns the card object.
 * @param customerId The customer ID to which to add the card.
 * @deprecated
 */
createCard(
customerId: string,
data: {
card?: sources$sources$ISourceCreationOptionsExtended
},
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
createCard(
customerId: string,
data: {
card?: sources$sources$ISourceCreationOptionsExtended
},
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * By default, you can see the 10 most recent cards stored on a customer or recipient directly on the customer or recipient object, but
 * you can also retrieve details about a specific card stored on the customer or recipient.
 * @returns Returns the card object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param cardId The ID of the card to be retrieved.
 */
retrieveCard(
customerId: string,
cardId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
retrieveCard(
customerId: string,
cardId: string,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
 * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
 * interruption. When you update a card, Stripe will automatically validate the card.
 * @returns Returns the card object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param cardId The ID of the card to be retrieved.
 */
updateCard(
customerId: string,
cardId: string,
data: cards$cards$ICardUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
updateCard(
customerId: string,
cardId: string,
data: cards$cards$ICardUpdateOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * You can delete cards from a customer or recipient. If you delete a card that is currently the
 * default source on a customer, then the most recently added source will become the new default.
 * If you delete a card that is the last remaining source on the customer then the default_source
 * attribute will become null. Similarly, if you delete the default card on a recipient, then the
 * most recently added card will become the new default. If you delete the last remaining card on
 * a recipient, then the default_card attribute will become null. Note that for cards belonging to
 * customers, you may want to prevent customers on paid subscriptions from deleting all cards on
 * file so that there is at least one default card for the next invoice payment attempt.
 * @returns Returns the deleted card object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param cardId The ID of the card to be retrieved.
 */
deleteCard(
customerId: string,
cardId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteCard(
customerId: string,
cardId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
 * cards are always available by default on the customer or recipient object. If you need more than
 * those 10, you can use this API method and the limit and starting_after parameters to page through
 * additional cards.
 * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
that the response include the total count of all cards for the customer or recipient. To do so,
specify include[]=total_count in your request.
 * @param customerId The ID of the customer whose cards will be retrieved
 * @param data Filtering options
 */
listCards(
customerId: string,
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
listCards(
customerId: string,
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
listCards(
customerId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
listCards(
customerId: string,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;

/**
 * When adding a card to a customer, the parameter name is source. When
 * adding to an account, the parameter name is external_account. The
 * value can either be a token, like the ones returned by our Stripe.js, or a
 * dictionary containing a user's credit card details.
 * Stripe will automatically validate the card.
 * @returns Returns the card object.
 * @param customerId The customer ID to which to add the card.
 */
createSource(
customerId: string,
data: customers$customers$ICustomerCardSourceCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
createSource(
customerId: string,
data: customers$customers$ICustomerCardSourceCreationOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * When adding a card to a customer, the parameter name is source. When
 * adding to an account, the parameter name is external_account. The
 * value can either be a token, like the ones returned by our Stripe.js, or a
 * dictionary containing a user’s credit card details.
 * Stripe will automatically validate the card.
 * @returns Returns the card or bank account object.
 * @param customerId The customer ID to which to add the card.
 */
createSource(
customerId: string,
data: customers$customers$ICustomerSourceCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;
createSource(
customerId: string,
data: customers$customers$ICustomerSourceCreationOptions,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;

/**
 * You can see a list of the cards belonging to a customer or recipient. Note that the 10 most recent
 * cards are always available by default on the customer or recipient object. If you need more than
 * those 10, you can use this API method and the limit and starting_after parameters to page through
 * additional cards.
 * @returns Returns a list of the cards stored on the customer or recipient. You can optionally request
that the response include the total count of all cards for the customer or recipient. To do so,
specify include[]=total_count in your request.
 * @param customerId The ID of the customer whose cards will be retrieved
 * @param data Filtering options
 */
listSources(
customerId: string,
data: customers$customers$ICardSourceListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;
listSources(
customerId: string,
data: customers$customers$ICardSourceListOptions,
response?: Stripe$IResponseFn<Stripe$IList<cards$cards$ICard>>): Promise<Stripe$IList<cards$cards$ICard>>;

/**
 * You can see a list of the bank accounts belonging to a customer or recipient. Note that the 10 most recent
 * bank accounts are always available by default on the customer or recipient object. If you need more than
 * those 10, you can use this API method and the limit and starting_after parameters to page through
 * additional cards.
 * @returns Returns a list of the bank accounts stored on the customer or recipient. You can optionally request
that the response include the total count of all bank accounts for the customer or recipient. To do so,
specify include[]=total_count in your request.
 * @param customerId The ID of the customer whose cards will be retrieved
 * @param data Filtering options
 */
listSources(
customerId: string,
data: customers$customers$IBankAccountSourceListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>): Promise<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>;
listSources(
customerId: string,
data: customers$customers$IBankAccountSourceListOptions,
response?: Stripe$IResponseFn<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>): Promise<Stripe$IList<bankAccounts$bankAccounts$IBankAccount>>;

/**
 * By default, you can see the 10 most recent cards/bank accounts stored on a customer or recipient directly on the customer or recipient object, but
 * you can also retrieve details about a specific card/bank account stored on the customer or recipient.
 * @returns Returns the card/bank account object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param sourceId The ID of the source to be retrieved.
 */
retrieveSource(
customerId: string,
sourceId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;
retrieveSource(
customerId: string,
sourceId: string,
response?: Stripe$IResponseFn<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>): Promise<cards$cards$ICard | bankAccounts$bankAccounts$IBankAccount>;

/**
 * If you need to update only some card details, like the billing address or expiration date, you can do so without having to re-enter the
 * full card details. Stripe also works directly with card networks so that your customers can continue using your service without
 * interruption. When you update a card, Stripe will automatically validate the card.
 * @returns Returns the card object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param sourceId The ID of the card to be retrieved.
 */
updateSource(
customerId: string,
sourceId: string,
data: cards$cards$ICardUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
updateSource(
customerId: string,
sourceId: string,
data: cards$cards$ICardUpdateOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;

/**
 * Updates the metadata, account_holder_name, and account_holder_type of a bank account belonging to a Customer. Other bank account details
 * are not editable by design.
 * @returns Returns the bank account object.
 * @param customerId The ID of the customer whose card needs to be retrieved.
 * @param sourceId The ID of the bank account to be updated.
 */
updateSource(
customerId: string,
sourceId: string,
data: bankAccounts$bankAccounts$IBankAccountUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<cards$cards$ICard>): Promise<cards$cards$ICard>;
updateSource(
customerId: string,
sourceId: string,
data: bankAccounts$bankAccounts$IBankAccountUpdateOptions,
response?: Stripe$IResponseFn<bankAccounts$bankAccounts$IBankAccount>): Promise<bankAccounts$bankAccounts$IBankAccount>;

/**
 * You can delete cards or bank accounts from a customer or recipient. If you delete a card or bank account that is currently the
 * default source on a customer, then the most recently added source will become the new default.
 * If you delete a card or bank account that is the last remaining source on the customer then the default_source
 * attribute will become null. Similarly, if you delete the default card or bank account on a recipient, then the
 * most recently added source will become the new default. If you delete the last remaining source on
 * a recipient, then the default_card attribute will become null. Note that for sources belonging to
 * customers, you may want to prevent customers on paid subscriptions from deleting all sources on
 * file so that there is at least one default source for the next invoice payment attempt.
 * @returns Returns a confirmation object.
 * @param customerId The ID of the customer whose source needs to be deleted.
 * @param sourceId The ID of the source to be deleted.
 */
deleteSource(
customerId: string,
sourceId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteSource(
customerId: string,
sourceId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * A customer's bank account must first be verified before it can be charged. Stripe supports instant verification using Plaid for many of
 * the most popular banks. If your customer's bank is not supported or you do not wish to integrate with Plaid, you must manually verify
 * the customer's bank account using the API.
 * @returns Returns the bank account object.
 * @param customerId The ID of the customer whose source needs to be verified.
 * @param sourceId The ID of the source to be verified.
 */
verifySource(
customerId: string,
sourceId: string,
data: bankAccounts$bankAccounts$IBankAccountVerifyOptions,
options: Stripe$HeaderOptions): Promise<bankAccounts$bankAccounts$IBankAccount>;
verifySource(
customerId: string,
sourceId: string,
data: bankAccounts$bankAccounts$IBankAccountVerifyOptions): Promise<bankAccounts$bankAccounts$IBankAccount>;

/**
 * Creates a new subscription on an existing customer.
 * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
period).
 * @param customerId The customer to which the add the subscription.
 * @param options The options for the new subscription
 */
createSubscription(
customerId: string,
data: subscriptions$subscriptions$ISubscriptionCustCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
createSubscription(
customerId: string,
data: subscriptions$subscriptions$ISubscriptionCustCreationOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer
 * object, but you can also retrieve details about a specific active subscription for a customer.
 * @returns Returns the subscription object.
 * @param customerId The customer ID for the subscription
 * @param subscriptionId The ID of the subscription to retrieve
 */
retrieveSubscription(
customerId: string,
subscriptionId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
retrieveSubscription(
customerId: string,
subscriptionId: string,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities,
 * we will optionally prorate the price we charge next month to make up for any price changes.
 * 
 * By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a $10 plan, she'll be billed
 * $10 immediately. If she then switches to a $20 plan on May 15, on June 1 she'll be billed $25 ($20 for a renewal of her
 * subscription and a $5 prorating adjustment for the previous month). Similarly, a downgrade will generate a credit to be
 * applied to the next invoice. We also prorate when you make quantity changes. Switching plans does not change the billing
 * date or generate an immediate charge unless you're switching between different intervals (e.g. monthly to yearly), in which
 * case we apply a credit for the time unused on the old plan and charge for the new plan starting right away, resetting the
 * billing date. (Note that if we charge for the new plan, and that payment fails, the plan change will not go into effect). If
 * you'd like to charge for an upgrade immediately, just pass prorate as true as usual, and then invoice the customer as soon
 * as you make the subscription change. That'll collect the proration adjustments into a new invoice, and Stripe will automatically
 * attempt to pay the invoice. If you don't want to prorate at all, set the prorate option to false and the customer would be billed
 * $10 on May 1 and $20 on June 1. Similarly, if you set prorate to false when switching between different billing intervals
 * (monthly to yearly, for example), we won't generate any credits for the old subscription's unused time, although we will still
 * reset the billing date and bill immediately for the new subscription.
 * @returns The newly updated subscription object if the call succeeded. If a charge is required for the update, and
the charge fails, this call raises throws an error, and the subscription update does not go into effect.
 * @param customerId The ID of the customer whose subscription needs to be updated.
 * @param subscriptionId The ID of the subscription to update.
 * @param data The fields to update
 */
updateSubscription(
customerId: string,
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
updateSubscription(
customerId: string,
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionUpdateOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until
 * the end of the period, at which point it will be canceled and not renewed. By default, the subscription is terminated
 * immediately. In either case, the customer will not be charged again for the subscription. Note, however, that any pending
 * invoice items that you've created will still be charged for at the end of the period unless manually deleted. If you've set
 * the subscription to cancel at period end, any pending prorations will also be left in place and collected at the end of the
 * period, but if the subscription is set to cancel immediately, pending prorations will be removed. By default, all unpaid
 * invoices for the customer will be closed upon subscription cancellation. We do this in order to prevent unexpected payment
 * retries once the customer has canceled a subscription. However, you can reopen the invoices manually after subscription
 * cancellation to have us proceed with automatic retries, or you could even re-attempt payment yourself on all unpaid invoices
 * before allowing the customer to cancel the subscription at all.
 * @returns The canceled subscription object. Its subscription status will be set to "canceled" unless you've set at_period_end
to true when canceling, in which case the status will remain "active" but the cancel_at_period_end attribute will change to true.
 * @param customerId The ID of the customer whose subscription needs to be cancelled.
 * @param subscriptionId The ID of the subscription to cancel.
 * @param data Specify when to cancel the subscription
 */
cancelSubscription(
customerId: string,
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionCancellationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
cancelSubscription(
customerId: string,
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionCancellationOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
cancelSubscription(
customerId: string,
subscriptionId: string,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available
 * by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page
 * through additional subscriptions.
 * @returns Returns a list of the customer's active subscriptions. You can optionally request that the response include the total
count of all subscriptions for the customer. To do so, specify include[]=total_count in your request.
 * @param customerId The ID of the customer whose subscriptions will be retrieved
 * @param data Filtering options
 */
listSubscriptions(
customerId: string,
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
listSubscriptions(
customerId: string,
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
listSubscriptions(
customerId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
listSubscriptions(
customerId: string,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;

/**
 * Removes the currently applied discount on a customer.
 * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
discount exists on this customer.
 * @param customerId The ID of the customer.
 */
deleteDiscount(
customerId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteDiscount(
customerId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * Removes the currently applied discount on a subscription.
 * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
discount exists on this subscription.
 * @param customerId The ID of the customer.
 * @param subscriptionId The ID of the subscription.
 */
deleteSubscriptionDiscount(
customerId: string,
subscriptionId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteSubscriptionDiscount(
customerId: string,
subscriptionId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$SubscriptionsBase mixins Stripe$StripeResource {

/**
 * By default, you can see the 10 most recent active subscriptions stored on a customer directly on the customer
 * object, but you can also retrieve details about a specific active subscription for a customer.
 * @returns Returns the subscription object.
 * @param subscriptionId The ID of the subscription to retrieve
 */
retrieve(
subscriptionId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
retrieve(
subscriptionId: string,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities,
 * we will optionally prorate the price we charge next month to make up for any price changes.
 * 
 * By default, we prorate subscription changes. For example, if a customer signs up on May 1 for a $10 plan, she'll be billed
 * $10 immediately. If she then switches to a $20 plan on May 15, on June 1 she'll be billed $25 ($20 for a renewal of her
 * subscription and a $5 prorating adjustment for the previous month). Similarly, a downgrade will generate a credit to be
 * applied to the next invoice. We also prorate when you make quantity changes. Switching plans does not change the billing
 * date or generate an immediate charge unless you're switching between different intervals (e.g. monthly to yearly), in which
 * case we apply a credit for the time unused on the old plan and charge for the new plan starting right away, resetting the
 * billing date. (Note that if we charge for the new plan, and that payment fails, the plan change will not go into effect). If
 * you'd like to charge for an upgrade immediately, just pass prorate as true as usual, and then invoice the customer as soon
 * as you make the subscription change. That'll collect the proration adjustments into a new invoice, and Stripe will automatically
 * attempt to pay the invoice. If you don't want to prorate at all, set the prorate option to false and the customer would be billed
 * $10 on May 1 and $20 on June 1. Similarly, if you set prorate to false when switching between different billing intervals
 * (monthly to yearly, for example), we won't generate any credits for the old subscription's unused time, although we will still
 * reset the billing date and bill immediately for the new subscription.
 * @returns The newly updated subscription object if the call succeeded. If a charge is required for the update, and
the charge fails, this call raises throws an error, and the subscription update does not go into effect.
 * @param subscriptionId The ID of the subscription to update.
 * @param data The fields to update
 */
update(
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
update(
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionUpdateOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * Cancels a customer's subscription. If you set the at_period_end parameter to true, the subscription will remain active until
 * the end of the period, at which point it will be canceled and not renewed. By default, the subscription is terminated
 * immediately. In either case, the customer will not be charged again for the subscription. Note, however, that any pending
 * invoice items that you've created will still be charged for at the end of the period unless manually deleted. If you've set
 * the subscription to cancel at period end, any pending prorations will also be left in place and collected at the end of the
 * period, but if the subscription is set to cancel immediately, pending prorations will be removed. By default, all unpaid
 * invoices for the customer will be closed upon subscription cancellation. We do this in order to prevent unexpected payment
 * retries once the customer has canceled a subscription. However, you can reopen the invoices manually after subscription
 * cancellation to have us proceed with automatic retries, or you could even re-attempt payment yourself on all unpaid invoices
 * before allowing the customer to cancel the subscription at all.
 * @returns The canceled subscription object. Its subscription status will be set to "canceled" unless you've set at_period_end
to true when canceling, in which case the status will remain "active" but the cancel_at_period_end attribute will change to true.
 * @param subscriptionId The ID of the subscription to cancel.
 * @param data Specify when to cancel the subscription
 */
del(
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionCancellationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
del(
subscriptionId: string,
data: subscriptions$subscriptions$ISubscriptionCancellationOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
del(
subscriptionId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
del(
subscriptionId: string,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;

/**
 * You can see a list of the customer's active subscriptions. Note that the 10 most recent active subscriptions are always available
 * by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page
 * through additional subscriptions.
 * @returns Returns a list of the customer's active subscriptions. You can optionally request that the response include the total
count of all subscriptions for the customer. To do so, specify include[]=total_count in your request.
 * @param data Filtering options
 */
list(
data: subscriptions$subscriptions$ISubscriptionListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
list(
data: subscriptions$subscriptions$ISubscriptionListOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<subscriptions$subscriptions$ISubscription>>): Promise<Stripe$IList<subscriptions$subscriptions$ISubscription>>;

/**
 * Removes the currently applied discount on a subscription.
 * @returns An object with a deleted flag set to true upon success. This call throws an error otherwise, such as if no
discount exists on this subscription.
 * @param subscriptionId The ID of the subscription.
 */
deleteDiscount(
subscriptionId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
deleteDiscount(
subscriptionId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$Subscriptions mixins resources$SubscriptionsBase {

/**
 * Creates a new subscription on an existing customer.
 * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
period).
 * @param options The options for the new subscription
 */
create(
data: subscriptions$subscriptions$ISubscriptionCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
create(
data: subscriptions$subscriptions$ISubscriptionCreationOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>
}

declare class resources$CustomerSubscriptions mixins resources$SubscriptionsBase {

/**
 * Creates a new subscription on an existing customer.
 * @returns The newly created subscription object if the call succeeded. If the customer has no card or the
attempted charge fails, this call throws an error (unless the specified plan is free or has a trial
period).
 * @param options The options for the new subscription
 */
create(
data: subscriptions$subscriptions$ISubscriptionCustCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>;
create(
data: subscriptions$subscriptions$ISubscriptionCustCreationOptions,
response?: Stripe$IResponseFn<subscriptions$subscriptions$ISubscription>): Promise<subscriptions$subscriptions$ISubscription>
}

declare class resources$SubscriptionItems mixins Stripe$StripeResource {

/**
 * Adds a new item to an existing subscription. No existing items will be changed or replaced.
 * @returns The created subscription item object is returned if successful. Otherwise, this call throws an error.
 * @param options The options for the new subscription item.
 */
create(
data: subscriptionItems$subscriptionItems$ISubscriptionItemCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
create(
data: subscriptionItems$subscriptionItems$ISubscriptionItemCreationOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;

/**
 * Retrieves the subscription item with the given ID.
 * @returns Returns a subscription item if a valid subscription item ID was provided. Throws an error otherwise.
 * @param subscriptionItemId The identifier of the subscription item to retrieve.
 */
retrieve(
subscriptionItemId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
retrieve(
subscriptionItemId: string,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;

/**
 * Updates the plan or quantity of an item on a current subscription.
 * @param subscriptionItemId The identifier of the subscription item to modify.
 * @param data The fields to update
 */
update(
subscriptionItemId: string,
data: subscriptionItems$subscriptionItems$ISubscriptionItemUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
update(
subscriptionItemId: string,
data: subscriptionItems$subscriptionItems$ISubscriptionItemUpdateOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;

/**
 * Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.
 * @returns An subscription item object with a deleted flag upon success. Otherwise, this call throws an error, such as if the
subscription item has already been deleted.
 * @param subscriptionItemId The identifier of the subscription item to delete.
 * @param data Specify whether to prorate and from when.
 */
del(
subscriptionItemId: string,
data: subscriptionItems$subscriptionItems$ISubscriptionItemDeleteOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
del(
subscriptionItemId: string,
data: subscriptionItems$subscriptionItems$ISubscriptionItemDeleteOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
del(
subscriptionItemId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;
del(
subscriptionItemId: string,
response?: Stripe$IResponseFn<subscriptionItems$subscriptionItems$ISubscriptionItem>): Promise<subscriptionItems$subscriptionItems$ISubscriptionItem>;

/**
 * Returns a list of your subscription items for a given subscription.
 * @returns Returns a list of your subscription items for a given subscription.
 * @param data Filtering options
 */
list(
data: subscriptionItems$subscriptionItems$ISubscriptionItemListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptionItems$subscriptionItems$ISubscriptionItem>>): Promise<Stripe$IList<subscriptionItems$subscriptionItems$ISubscriptionItem>>;
list(
data: subscriptionItems$subscriptionItems$ISubscriptionItemListOptions,
response?: Stripe$IResponseFn<Stripe$IList<subscriptionItems$subscriptionItems$ISubscriptionItem>>): Promise<Stripe$IList<subscriptionItems$subscriptionItems$ISubscriptionItem>>
}

declare class resources$Disputes mixins Stripe$StripeResource {

/**
 * Retrieves the dispute with the given ID.
 */
retrieve(
disputeId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;
retrieve(
disputeId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;
retrieve(
disputeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;
retrieve(
disputeId: string,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;

/**
 * When you get a dispute, contacting your customer is always the best first step. If that doesn't work, you can submit evidence in
 * order to help us resolve the dispute in your favor. You can do this in your dashboard, but if you prefer, you can use the API to
 * submit evidence programmatically. Depending on your dispute type, different evidence fields will give you a better chance of winning
 * your dispute. You may want to consult our guide to dispute types to help you figure out which evidence fields to provide:
 * https://stripe.com/help/dispute-types
 * @param data The fields to update
 */
update(
disputeId: string,
data: disputes$disputes$IDisputeUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;
update(
disputeId: string,
data: disputes$disputes$IDisputeUpdateOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;

/**
 * Closing the dispute for a charge indicates that you do not have any evidence to submit and are
 * essentially ‘dismissing’ the dispute, acknowledging it as lost
 * 
 * The status of the dispute will change from needs_response to lost.
 * 
 * *Closing a dispute is irreversible!*
 */
close(
disputeId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;
close(
disputeId: string,
response?: Stripe$IResponseFn<disputes$disputes$IDispute>): Promise<disputes$disputes$IDispute>;

/**
 * Returns a list of your disputes.
 */
list(
data: Stripe$IListOptionsCreated,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<disputes$disputes$IDispute>>): Promise<Stripe$IList<disputes$disputes$IDispute>>;
list(
data: Stripe$IListOptionsCreated,
response?: Stripe$IResponseFn<Stripe$IList<disputes$disputes$IDispute>>): Promise<Stripe$IList<disputes$disputes$IDispute>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<disputes$disputes$IDispute>>): Promise<Stripe$IList<disputes$disputes$IDispute>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<disputes$disputes$IDispute>>): Promise<Stripe$IList<disputes$disputes$IDispute>>;
setMetadata(): void;
getMetadata(): void
}

declare class resources$Events mixins Stripe$StripeResource {

/**
 * Retrieves the details of an event. Supply the unique identifier of the event, which you might have
 * received in a webhook.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<events$events$IEvent>): Promise<events$events$IEvent>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<events$events$IEvent>): Promise<events$events$IEvent>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<events$events$IEvent>): Promise<events$events$IEvent>;
retrieve(
id: string,
response?: Stripe$IResponseFn<events$events$IEvent>): Promise<events$events$IEvent>;

/**
 * List events, going back up to 30 days.
 */
list(
data: events$events$IEventListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<events$events$IEvent>>): Promise<Stripe$IList<events$events$IEvent>>;
list(
data: events$events$IEventListOptions,
response?: Stripe$IResponseFn<Stripe$IList<events$events$IEvent>>): Promise<Stripe$IList<events$events$IEvent>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<events$events$IEvent>>): Promise<Stripe$IList<events$events$IEvent>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<events$events$IEvent>>): Promise<Stripe$IList<events$events$IEvent>>
}

declare class resources$FileUploads mixins Stripe$StripeResource {

/**
 * To upload a file to Stripe, you’ll need to send a request of type multipart/form-data.
 * The request should contain the file you would like to upload, as well as the parameters for creating a file.
 * 
 * All of Stripe’s officially supported API libraries should have support for sending multipart/form-data.
 */
create(
data: fileUploads$fileUploads$IFileUploadCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;
create(
data: fileUploads$fileUploads$IFileUploadCreationOptions,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;

/**
 * Retrieves the details of an existing file object.
 * Supply the unique file upload ID from a file creation request, and Stripe will return the corresponding transfer information.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;
retrieve(
id: string,
response?: Stripe$IResponseFn<fileUploads$fileUploads$IFileUpdate>): Promise<fileUploads$fileUploads$IFileUpdate>;

/**
 * Returns a list of the files that you have uploaded to Stripe.
 * The file uploads are returned sorted by creation date, with the most recently created file uploads appearing first.
 */
list(
data: fileUploads$fileUploads$IFileUploadListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>): Promise<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>;
list(
data: fileUploads$fileUploads$IFileUploadListOptions,
response?: Stripe$IResponseFn<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>): Promise<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>): Promise<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>): Promise<Stripe$IList<fileUploads$fileUploads$IFileUpdate>>
}

declare class resources$Invoices mixins Stripe$StripeResource {

/**
 * If you need to invoice your customer outside the regular billing cycle, you can create an invoice that
 * pulls in all pending invoice items, including prorations. The customer's billing cycle and regular subscription
 * won't be affected. Once you create the invoice, it'll be picked up and paid automatically, though you can
 * choose to pay it right away: https://stripe.com/docs/api#pay_invoice
 * @returns Returns the invoice object if there are pending invoice items to invoice. Throws an error if there
are no pending invoice items or if the customer ID provided is invalid.
 * @param data Options used to create the invoice.
 */
create(
data: invoices$invoices$IInvoiceCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
create(
data: invoices$invoices$IInvoiceCreationOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;

/**
 * Retrieves the invoice with the given ID. The invoice object contains a
 * lines hash that contains information about the subscriptions and invoice items that have been applied to the
 * invoice, as well as any prorations that Stripe has automatically calculated. Each line on the invoice has an
 * amount attribute that represents the amount actually contributed to the invoice's total. For invoice items and
 * prorations, the amount attribute is the same as for the invoice item or proration respectively. For
 * subscriptions, the amount may be different from the plan's regular price depending on whether the invoice
 * covers a trial period or the invoice period differs from the plan's usual interval. The invoice object has
 * both a subtotal and a total. The subtotal represents the total before any discounts, while the total is the final
 * amount to be charged to the customer after all coupons have been applied. The invoice also has a
 * next_payment_attempt attribute that tells you the next time (as a Unix timestamp) payment for the invoice will be
 * automatically attempted. For invoices that have been closed or that have reached the maximum number of retries
 * (specified in your retry settings), the next_payment_attempt will be null.
 * @returns Returns an invoice object if a valid invoice ID was provided. Throws an error otherwise.
 * @param id The ID of the desired invoice.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieve(
id: string,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;

/**
 * When retrieving an invoice, you'll get a lines property containing the total count of line items and the first
 * handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.
 * @returns Returns a list of line_item objects.
 * @param id The id of the invoice containing the lines to be retrieved
 * @param data Filtering options
 */
retrieveLines(
id: string,
data: invoices$invoices$IInvoiceLineItemRetrievalOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoiceLineItem>>): Promise<invoices$invoices$IInvoiceLineItem>;
retrieveLines(
id: string,
data: invoices$invoices$IInvoiceLineItemRetrievalOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoiceLineItem>>): Promise<invoices$invoices$IInvoiceLineItem>;
retrieveLines(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoiceLineItem>>): Promise<invoices$invoices$IInvoiceLineItem>;
retrieveLines(
id: string,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoiceLineItem>>): Promise<invoices$invoices$IInvoiceLineItem>;

/**
 * At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending,
 * including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable
 * to the customer. Note that when you are viewing an upcoming invoice, you are simply viewing a preview -- the invoice has
 * not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API
 * to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or
 * update pending invoice items, or update the customer's discount.
 * @returns Returns an invoice if a valid customer ID was provided. Throws an error otherwise.
 * @param id The identifier of the customer whose upcoming invoice you'd like to retrieve.
 */
retrieveUpcoming(
id: string,
data: invoices$invoices$IInvoiceUpcomingOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieveUpcoming(
id: string,
data: invoices$invoices$IInvoiceUpcomingOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieveUpcoming(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
retrieveUpcoming(
id: string,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;

/**
 * Until an invoice is paid, it is marked as open (closed=false). If you'd like to stop Stripe from automatically attempting
 * payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the
 * closed parameter.
 * @returns Returns the invoice object.
 * @param id The ID of the invoice to update
 * @param data Fields to update
 */
update(
id: string,
data: invoices$invoices$IInvoiceUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
update(
id: string,
data: invoices$invoices$IInvoiceUpdateOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;

/**
 * Stripe automatically creates and then attempts to pay invoices for customers on subscriptions. We'll also retry unpaid
 * invoices according to your retry settings. However, if you'd like to attempt to collect payment on an invoice out of the
 * normal retry schedule or for some other reason, you can do so.
 * @returns Returns the invoice object.
 * @param id The ID of the invoice to pay.
 */
pay(
id: string,
data: invoices$invoices$IInvoicePayOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
pay(
id: string,
data: invoices$invoices$IInvoicePayOptions,
response: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
pay(
id: string,
data: invoices$invoices$IInvoicePayOptions): Promise<invoices$invoices$IInvoice>;
pay(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;
pay(
id: string,
response?: Stripe$IResponseFn<invoices$invoices$IInvoice>): Promise<invoices$invoices$IInvoice>;

/**
 * You can list all invoices, or list the invoices for a specific customer. The invoices are returned
 * sorted by creation date, with the most recently created invoices appearing first.
 * @returns A object with a data property that contains an array of invoice objects. Throws an error if the
customer ID is invalid.
 * @param data Filtering options
 */
list(
data: invoices$invoices$IInvoiceListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoice>>): Promise<Stripe$IList<invoices$invoices$IInvoice>>;
list(
data: invoices$invoices$IInvoiceListOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoice>>): Promise<Stripe$IList<invoices$invoices$IInvoice>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<invoices$invoices$IInvoice>>): Promise<Stripe$IList<invoices$invoices$IInvoice>>
}

declare class resources$InvoiceItems mixins Stripe$StripeResource {

/**
 * Adds an arbitrary charge or credit to the customer’s upcoming invoice.
 */
create(
data: invoiceItems$invoiceItems$InvoiceItemCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;
create(
data: invoiceItems$invoiceItems$InvoiceItemCreationOptions,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;

/**
 * Retrieves the invoice item with the given ID.
 */
retrieve(
invoiceItemId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;
retrieve(
invoiceItemId: string,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;

/**
 * Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the
 * invoice it's attached to is closed.
 */
update(
invoiceItemId: string,
data: invoiceItems$invoiceItems$InvoiceItemUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;
update(
invoiceItemId: string,
data: invoiceItems$invoiceItems$InvoiceItemUpdateOptions,
response?: Stripe$IResponseFn<invoiceItems$invoiceItems$InvoiceItem>): Promise<invoiceItems$invoiceItems$InvoiceItem>;

/**
 * Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice
 * items appearing first.
 */
list(
data: invoiceItems$invoiceItems$InvoiceItemListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>): Promise<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>;
list(
data: invoiceItems$invoiceItems$InvoiceItemListOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>): Promise<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>): Promise<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>): Promise<Stripe$IList<invoiceItems$invoiceItems$InvoiceItem>>;

/**
 * Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it's attached
 * to is closed.
 */
del(
invoiceItemId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
invoiceItemId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$Payouts mixins Stripe$StripeResource {

/**
 * To send funds to your own bank account, you create a new payout object. Your Stripe balance must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.
 * 
 * If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.
 * 
 * If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from.
 * The balance object details available and pending amounts by source type.
 */
create(
data: payouts$payouts$IPayoutCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;
create(
data: payouts$payouts$IPayoutCreationOptions,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;

/**
 * Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.
 */
retrieve(
payoutId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;
retrieve(
payoutId: string,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;

/**
 * Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.
 */
update(
payoutId: string,
data: Stripe$IDataOptionsWithMetadata,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;
update(
payoutId: string,
data: Stripe$IDataOptionsWithMetadata,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;

/**
 * Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.
 */
list(
data: payouts$payouts$IPayoutListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<payouts$payouts$IPayout>>): Promise<Stripe$IList<payouts$payouts$IPayout>>;
list(
data: payouts$payouts$IPayoutListOptions,
response?: Stripe$IResponseFn<Stripe$IList<payouts$payouts$IPayout>>): Promise<Stripe$IList<payouts$payouts$IPayout>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<payouts$payouts$IPayout>>): Promise<Stripe$IList<payouts$payouts$IPayout>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<payouts$payouts$IPayout>>): Promise<Stripe$IList<payouts$payouts$IPayout>>;

/**
 * A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance, and the fees you were originally charged on the payout will be refunded.
 * You may not cancel automatic Stripe payouts.
 */
cancel(
payoutId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>;
cancel(
payoutId: string,
response?: Stripe$IResponseFn<payouts$payouts$IPayout>): Promise<payouts$payouts$IPayout>
}

declare class resources$Plans mixins Stripe$StripeResource {

/**
 * You can create plans easily via the plan management page of the Stripe dashboard. Plan creation is also
 * accessible via the API if you need to create plans on the fly.
 * @returns The newly created plan
 * @param data Creation options for the new plan.
 */
create(
data: plans$plans$IPlanCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;
create(
data: plans$plans$IPlanCreationOptions,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;

/**
 * Retrieves the plan with the given ID.
 * @returns Returns a plan if a valid plan ID was provided. Throws an error otherwise.
 * @param planName The identifier of the desired plan.
 */
retrieve(
planName: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;
retrieve(
planName: string,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;

/**
 * Updates the name of a plan. Other plan details (price, interval, etc.) are, by design, not editable.
 * @returns The updated plan object is returned upon success. Otherwise, this call throws an error.
 * @param planName The identifier of the plan to update
 * @param data The fields to update
 */
update(
planName: string,
data: plans$plans$IPlanUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;
update(
planName: string,
data: plans$plans$IPlanUpdateOptions,
response?: Stripe$IResponseFn<plans$plans$IPlan>): Promise<plans$plans$IPlan>;

/**
 * You can delete plans via the plan management page of the Stripe dashboard. However, deleting a plan does not affect
 * any current subscribers to the plan; it merely means that new subscribers can't be added to that plan. You can also
 * delete plans via the API.
 * @returns An object with the deleted plan's ID and a deleted flag upon success. Otherwise, this call throws an error, such as if the plan has already been deleted.
 * @param planName The identifier of the plan to be deleted.
 */
del(
planName: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
planName: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;

/**
 * Returns a list of your plans.
 * @returns An object with a data property that contains an array of up to limit plans, starting after plan starting_after.
Each entry in the array is a separate plan object. If no more plans are available, the resulting array will be empty. This
request should never throw an error. You can optionally request that the response include the total count of all plans. To
do so, specify include[]=total_count in your request.
 */
list(
data: resources$IPlanListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<plans$plans$IPlan>>): Promise<Stripe$IList<plans$plans$IPlan>>;
list(
data: resources$IPlanListOptions,
response?: Stripe$IResponseFn<Stripe$IList<plans$plans$IPlan>>): Promise<Stripe$IList<plans$plans$IPlan>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<plans$plans$IPlan>>): Promise<Stripe$IList<plans$plans$IPlan>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<plans$plans$IPlan>>): Promise<Stripe$IList<plans$plans$IPlan>>
}

declare type resources$IPlanListOptions = {

/**
 * Only return plans that are active or inactive (e.g., pass false to list all inactive products).
 */
active?: boolean,

/**
 * Only return plans for the given product.
 */
product?: string
} & Stripe$IListOptionsCreated



/**
 * @deprecated
 */
declare class resources$RecipientCards mixins Stripe$StripeResource {

/**
 * @deprecated
 */
create(): void;

/**
 * @deprecated
 */
list(): void;

/**
 * @deprecated
 */
update(id: string): void;

/**
 * @deprecated
 */
retrieve(id: string): void;

/**
 * @deprecated
 */
del(id: string): void
}


/**
 * @deprecated
 */
declare class resources$Recipients mixins Stripe$StripeResource {

/**
 * @deprecated
 */
create(): void;

/**
 * @deprecated
 */
list(): void;

/**
 * @deprecated
 */
update(id: string): void;

/**
 * @deprecated
 */
retrieve(id: string): void;

/**
 * @deprecated
 */
del(id: string): void
}

declare class resources$Refunds mixins Stripe$StripeResource {

/**
 * When you create a new refund, you must specify a charge to create it on.
 * 
 * Creating a new refund will refund a charge that has previously been created but not yet refunded.
 * Funds will be refunded to the credit or debit card that was originally charged.
 * The fees you were originally charged are also refunded.
 * 
 * You can optionally refund only part of a charge.
 * You can do so as many times as you wish until the entire charge has been refunded.
 * 
 * Once entirely refunded, a charge can't be refunded again.
 * This method will throw an error when called on an already-refunded charge, or when trying to refund more money than is left on a charge.
 */
create(
data: refunds$refunds$IRefundCreationOptionsWithCharge,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
create(
data: refunds$refunds$IRefundCreationOptionsWithCharge,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Retrieves the details of an existing refund.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
retrieve(
id: string,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Updates the specified refund by setting the values of the parameters passed.
 * Any parameters not provided will be left unchanged.
 * 
 * This request only accepts metadata as an argument.
 */
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;
update(
id: string,
data: Stripe$IDataOptionsWithMetadata,
response?: Stripe$IResponseFn<refunds$refunds$IRefund>): Promise<refunds$refunds$IRefund>;

/**
 * Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order,
 * with the most recent refunds appearing first.
 * For convenience, the 10 most recent refunds are always available by default on the charge object.
 */
list(
data: refunds$refunds$IRefundListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
data: refunds$refunds$IRefundListOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<refunds$refunds$IRefund>>): Promise<Stripe$IList<refunds$refunds$IRefund>>
}

declare class resources$Tokens mixins Stripe$StripeResource {

/**
 * Creates a single use token that wraps the details of a credit card. This token can be used
 * in place of a credit card object with any API method. These tokens can only be used once:
 * by creating a new charge object, or attaching them to a customer.
 */
create(
data: tokens$tokens$ICardTokenCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<tokens$tokens$ICardToken>): Promise<tokens$tokens$ICardToken>;
create(
data: tokens$tokens$ICardTokenCreationOptions,
response?: Stripe$IResponseFn<tokens$tokens$ICardToken>): Promise<tokens$tokens$ICardToken>;

/**
 * Creates a single use token that wraps the details of a bank account. This token can be used
 * in place of a bank account object with any API method. These tokens can only be used once:
 * by attaching them to a recipient or managed account.
 */
create(
data: tokens$tokens$IBankAccountTokenCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<tokens$tokens$IBankAccountToken>): Promise<tokens$tokens$IBankAccountToken>;
create(
data: tokens$tokens$IBankAccountTokenCreationOptions,
response?: Stripe$IResponseFn<tokens$tokens$IBankAccountToken>): Promise<tokens$tokens$IBankAccountToken>;

/**
 * Creates a single use token that wraps the details of personally identifiable information (PII).
 * This token can be used in place of a personal_id_number in the Account Update API method.
 * These tokens can only be used once.
 */
create(
data: tokens$tokens$IPiiTokenCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>;
create(
data: tokens$tokens$IPiiTokenCreationOptions,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>;

/**
 * Retrieves the token with the given ID.
 */
retrieve(
tokenId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>;
retrieve(
tokenId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>;
retrieve(
tokenId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>;
retrieve(
tokenId: string,
response?: Stripe$IResponseFn<tokens$tokens$IToken>): Promise<tokens$tokens$IToken>
}

declare class resources$Transfers mixins Stripe$StripeResource {

/**
 * To send funds from your Stripe account to a third-party recipient or to your own bank account, you create a new transfer
 * object. Your Stripe balance must be able to cover the transfer amount, or you'll receive an "Insufficient Funds" error.
 * 
 * If your API key is in test mode, money won't actually be sent, though everything else will occur as if in live mode.
 * 
 * If you are creating a manual transfer or a special case transfer on a Stripe account that uses multiple payment source
 * types, you'll need to specify the source type balance that the transfer should draw from. The balance object details
 * available and pending amounts by source type.
 */
create(
data: transfers$transfers$ITransferCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
create(
data: transfers$transfers$ITransferCreationOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;

/**
 * Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or
 * the transfer list, and Stripe will return the corresponding transfer information.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
retrieve(
id: string,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;

/**
 * Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left
 * unchanged.
 * 
 * This request accepts only the description and metadata as arguments.
 */
update(
id: string,
data: transfers$transfers$ITransferUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
update(
id: string,
data: transfers$transfers$ITransferUpdateOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;

/**
 * Returns a list of existing transfers sent to third-party bank accounts or that Stripe has sent you. The transfers are
 * returned in sorted order, with the most recently created transfers appearing first.
 */
list(
data: transfers$transfers$ITransferListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transfers$transfers$ITransfer>>): Promise<Stripe$IList<transfers$transfers$ITransfer>>;
list(
data: transfers$transfers$ITransferListOptions,
response?: Stripe$IResponseFn<Stripe$IList<transfers$transfers$ITransfer>>): Promise<Stripe$IList<transfers$transfers$ITransfer>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transfers$transfers$ITransfer>>): Promise<Stripe$IList<transfers$transfers$ITransfer>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<transfers$transfers$ITransfer>>): Promise<Stripe$IList<transfers$transfers$ITransfer>>;
cancel(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
cancel(
id: string,
response?: Stripe$IResponseFn<transfers$transfers$ITransfer>): Promise<transfers$transfers$ITransfer>;
listTransactions(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;
listTransactions(
response?: Stripe$IResponseFn<Stripe$IList<charges$charges$ICharge>>): Promise<Stripe$IList<charges$charges$ICharge>>;

/**
 * When you create a new reversal, you must specify a transfer to create it on.
 * 
 * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
 * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
 * 
 * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
 * until the entire transfer has been reversed.
 * 
 * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
 * or when trying to reverse more money than is left on a transfer.
 */
reverse(
id: string,
data: transferReversals$transferReversals$IReversalCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
reverse(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
reverse(
id: string,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * When you create a new reversal, you must specify a transfer to create it on.
 * 
 * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
 * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
 * 
 * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
 * until the entire transfer has been reversed.
 * 
 * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
 * or when trying to reverse more money than is left on a transfer.
 */
createReversal(
transferId: string,
data: transferReversals$transferReversals$IReversalCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
createReversal(
transferId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
createReversal(
transferId: string,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
 * specific reversal stored on the transfer.
 */
retrieveReversal(
transferId: string,
reversalId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
retrieveReversal(
transferId: string,
reversalId: string,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * 
 * This request only accepts metadata and description as arguments.
 */
updateReversal(
transferId: string,
reversalId: string,
data: transferReversals$transferReversals$IReversalUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
updateReversal(
transferId: string,
reversalId: string,
data: transferReversals$transferReversals$IReversalUpdateOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
 * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
 * parameters to page through additional reversals.
 */
listReversals(
transferId: string,
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
listReversals(
transferId: string,
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
listReversals(
transferId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
listReversals(
transferId: string,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
setMetadata(): void;
getMetadata(): void
}

declare class resources$TransferReversals mixins Stripe$StripeResource {

/**
 * When you create a new reversal, you must specify a transfer to create it on.
 * 
 * Creating a new reversal on a transfer that has previously been created but not paid out will return the funds to your available balance
 * and refund the fees you were originally charged on the transfer. You may not reverse automatic Stripe transfers.
 * 
 * When reversing transfers to Stripe accounts, you can optionally reverse part of the transfer. You can do so as many times as you wish
 * until the entire transfer has been reversed.
 * 
 * Once entirely reversed, a transfer can't be reversed again. This method will return an error when called on an already-reversed transfer,
 * or when trying to reverse more money than is left on a transfer.
 */
create(
data: transferReversals$transferReversals$IReversalCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
create(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
create(
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a
 * specific reversal stored on the transfer.
 */
retrieve(
reversalId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
retrieve(
reversalId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
retrieve(
reversalId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
retrieve(
reversalId: string,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * 
 * This request only accepts metadata and description as arguments.
 */
update(
reversalId: string,
data: transferReversals$transferReversals$IReversalUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;
update(
reversalId: string,
data: transferReversals$transferReversals$IReversalUpdateOptions,
response?: Stripe$IResponseFn<transferReversals$transferReversals$IReversal>): Promise<transferReversals$transferReversals$IReversal>;

/**
 * You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by
 * default on the transfer object. If you need more than those 10, you can use this API method and the limit and starting_after
 * parameters to page through additional reversals.
 */
list(
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
list(
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<transferReversals$transferReversals$IReversal>>): Promise<Stripe$IList<transferReversals$transferReversals$IReversal>>
}

declare class resources$CountrySpecs mixins Stripe$StripeResource {

/**
 * Lists all Country Spec objects available in the API.
 */
list(
data: Stripe$IListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>): Promise<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>;
list(
data: Stripe$IListOptions,
response?: Stripe$IResponseFn<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>): Promise<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>): Promise<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>): Promise<Stripe$IList<countrySpecs$countrySpecs$ICountrySpec>>;

/**
 * Returns a Country Spec for a given Country code.
 * @param retrieve An ISO country code. Available country codes can be listed with the List Country Specs endpoint.
 */
retrieve(
id: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<countrySpecs$countrySpecs$ICountrySpec>): Promise<countrySpecs$countrySpecs$ICountrySpec>;
retrieve(
id: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<countrySpecs$countrySpecs$ICountrySpec>): Promise<countrySpecs$countrySpecs$ICountrySpec>;
retrieve(
id: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<countrySpecs$countrySpecs$ICountrySpec>): Promise<countrySpecs$countrySpecs$ICountrySpec>;
retrieve(
id: string,
response?: Stripe$IResponseFn<countrySpecs$countrySpecs$ICountrySpec>): Promise<countrySpecs$countrySpecs$ICountrySpec>
}

declare class resources$Orders  {

/**
 * Creates a new order object.
 */
create(
data: orders$orders$IOrderCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
create(
data: orders$orders$IOrderCreationOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;

/**
 * Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list,
 * and Stripe will return the corresponding order information.
 */
retrieve(
orderId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
retrieve(
orderId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
retrieve(
orderId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
retrieve(
orderId: string,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;

/**
 * Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * This request accepts only the metadata, and status as arguments.
 */
update(
orderId: string,
data: orders$orders$IOrderUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
update(
orderId: string,
data: orders$orders$IOrderUpdateOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;

/**
 * Pay an order by providing a source to create a payment.
 */
pay(
orderId: string,
data: orders$orders$IOrderPayOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;
pay(
orderId: string,
data: orders$orders$IOrderPayOptions,
response?: Stripe$IResponseFn<orders$orders$IOrder>): Promise<orders$orders$IOrder>;

/**
 * Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.
 */
list(
data: orders$orders$IOrderListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<orders$orders$IOrder>>): Promise<Stripe$IList<orders$orders$IOrder>>;
list(
data: orders$orders$IOrderListOptions,
response?: Stripe$IResponseFn<Stripe$IList<orders$orders$IOrder>>): Promise<Stripe$IList<orders$orders$IOrder>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<orders$orders$IOrder>>): Promise<Stripe$IList<orders$orders$IOrder>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<orders$orders$IOrder>>): Promise<Stripe$IList<orders$orders$IOrder>>
}

declare class resources$Products  {

/**
 * Creates a new product object.
 */
create(
data: products$products$IProductCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;
create(
data: products$products$IProductCreationOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;

/**
 * Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product
 * list, and Stripe will return the corresponding product information.
 */
retrieve(
productId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;
retrieve(
productId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;
retrieve(
productId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;
retrieve(
productId: string,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;

/**
 * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * 
 * Note that a product's attributes are not editable. Instead, you would need to deactivate the existing product and create a new one
 * with the new attribute values.
 */
update(
productId: string,
data: products$products$IProductUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;
update(
productId: string,
data: products$products$IProductUpdateOptions,
response?: Stripe$IResponseFn<products$products$IProduct>): Promise<products$products$IProduct>;

/**
 * Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.
 */
list(
data: products$products$IProductListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<products$products$IProduct>>): Promise<Stripe$IList<products$products$IProduct>>;
list(
data: products$products$IProductListOptions,
response?: Stripe$IResponseFn<Stripe$IList<products$products$IProduct>>): Promise<Stripe$IList<products$products$IProduct>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<products$products$IProduct>>): Promise<Stripe$IList<products$products$IProduct>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<products$products$IProduct>>): Promise<Stripe$IList<products$products$IProduct>>;

/**
 * Delete a product. Deleting a product is only possible if it has no SKUs associated with it.
 */
del(
productId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
productId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$SKUs  {

/**
 * Creates a new SKU associated with a product.
 */
create(
data: skus$skus$ISkuCreationOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;
create(
data: skus$skus$ISkuCreationOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;

/**
 * Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the
 * product, and Stripe will return the corresponding SKU information.
 */
retrieve(
skuId: string,
data: Stripe$IDataOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;
retrieve(
skuId: string,
data: Stripe$IDataOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;
retrieve(
skuId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;
retrieve(
skuId: string,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;

/**
 * Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
 * 
 * Note that a SKU's attributes are not editable. Instead, you would need to deactivate the existing SKU and create a new one with
 * the new attribute values.
 */
update(
skuId: string,
data: skus$skus$ISkuUpdateOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;
update(
skuId: string,
data: skus$skus$ISkuUpdateOptions,
response?: Stripe$IResponseFn<skus$skus$ISku>): Promise<skus$skus$ISku>;

/**
 * Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.
 */
list(
data: skus$skus$ISkuListOptions,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<skus$skus$ISku>>): Promise<Stripe$IList<skus$skus$ISku>>;
list(
data: skus$skus$ISkuListOptions,
response?: Stripe$IResponseFn<Stripe$IList<skus$skus$ISku>>): Promise<Stripe$IList<skus$skus$ISku>>;
list(
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IList<skus$skus$ISku>>): Promise<Stripe$IList<skus$skus$ISku>>;
list(
response?: Stripe$IResponseFn<Stripe$IList<skus$skus$ISku>>): Promise<Stripe$IList<skus$skus$ISku>>;

/**
 * Delete a SKU. Deleting a SKU is only possible until it has been used in an order.
 */
del(
skuId: string,
options: Stripe$HeaderOptions,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>;
del(
skuId: string,
response?: Stripe$IResponseFn<Stripe$IDeleteConfirmation>): Promise<Stripe$IDeleteConfirmation>
}

declare class resources$WebHooks  {
constructEvent(
requestBody: any,
signature: string | string[],
endpointSecret: string,
tolerance?: number): events$events$IEvent
}

declare class resources$EphemeralKeys  {
create(
customer: ephemeralKeys$ephemeralKeys$ICustomer,
stripe_version: ephemeralKeys$ephemeralKeys$IStripeVersion,
response?: Stripe$IResponseFn<ephemeralKeys$ephemeralKeys$IEphemeralKey>): Promise<ephemeralKeys$ephemeralKeys$IEphemeralKey>
}

declare interface Stripe$IObject {
object: string
} 

declare type Stripe$IResourceObject = {
id: string
} & Stripe$IObject


declare type Stripe$IResponseFn<R> = (err: Stripe$IStripeError, value: R) => void;

declare interface Stripe$IDeleteConfirmation {
id: string,
object: string,
deleted: boolean
} 


/**
 * A filter on the list based on this object field. The value can
 * be a string with an integer Unix timestamp, or it can be a
 * dictionary with the following options:
 */
declare type Stripe$IDateFilter = string | {

/**
 * Return values where the created field is after this timestamp.
 */
gt?: string,

/**
 * Return values where the created field is after or equal to this timestamp.
 */
gte?: string,

/**
 * Return values where the created field is before this timestamp.
 */
lt?: string,

/**
 * Return values where the created field is before or equal to this timestamp.
 */
lte?: string
};


/**
 * A set of key/value pairs that you can attach to an object. It can be useful for storing
 * additional information about the object in a structured format.
 */
declare interface Stripe$IOptionsMetadata {
[x: string]: string | number
} 


/**
 * A set of key/value pairs that you can attach to an object. It can be useful for storing
 * additional information about the object in a structured format.
 */
declare interface Stripe$IMetadata {
[x: string]: string
} 

declare interface Stripe$IShippingInformation {

/**
 * Shipping address.
 */
address: {

/**
 * Address line 1 (Street address/PO Box/Company name)
 */
line1: string,

/**
 * Address line 2 (Apartment/Suite/Unit/Building)
 */
line2?: string,

/**
 * City/Suburb/Town/Village
 */
city?: string,

/**
 * State/Province/County
 */
state?: string,

/**
 * Zip/Postal Code
 */
postal_code?: string,

/**
 * 2-letter country code
 */
country?: string
},

/**
 * Recipient name.
 */
name: string,

/**
 * The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
 */
carrier?: string,

/**
 * Recipient phone (including extension).
 */
phone?: string,

/**
 * The tracking number for a physical product, obtained from the delivery service. If multiple
 * tracking numbers were generated for this purchase, please separate them with commas.
 */
tracking_number?: string
} 

declare interface Stripe$IList<T> {

/**
 * Value is 'list'
 */
object: string,

/**
 * An array containing the actual response elements, paginated by any request parameters.
 */
data: T[],

/**
 * Whether or not there are more elements available after this set. If false, this set comprises the end of the list.
 */
has_more: boolean,

/**
 * The URL for accessing this list.
 */
url: string,

/**
 * The total number of items available. This value is not included by default,
 * but you can request it by specifying ?include[]=total_count
 */
total_count?: number
} 

declare type Stripe$IListOptions = {

/**
 * A cursor for use in pagination. ending_before is an object ID that defines your place in the list. For instance, if you make
 * a list request and receive 100 objects, starting with obj_bar, your subsequent call can include ending_before=obj_bar in
 * order to fetch the previous page of the list.
 */
ending_before?: string,

/**
 * A limit on the number of objects to be returned. Limit can range between 1 and 100 items.
 */
limit?: number,

/**
 * A cursor for use in pagination. starting_after is an object ID that defines your place in the list. For instance, if you make
 * a list request and receive 100 objects, ending with obj_foo, your subsequent call can include starting_after=obj_foo in order
 * to fetch the next page of the list.
 */
starting_after?: string
} & Stripe$IDataOptions


declare type Stripe$IListOptionsCreated = {

/**
 * A filter on the list based on the object created field. The value can be a string with an integer Unix timestamp, or it can
 * be a dictionary.
 */
created?: string | Stripe$IDateFilter
} & Stripe$IListOptions


declare interface Stripe$IDataOptions {
expand?: string[],
include?: string[]
} 

declare type Stripe$IDataOptionsWithMetadata = {

/**
 * A set of key/value pairs that you can attach to an object. It can be
 * useful for storing additional information about the object in a structured
 * format. You can unset an individual key by setting its value to null and
 * then saving. To clear all keys, set metadata to null, then save.
 */
metadata?: Stripe$IOptionsMetadata
} & Stripe$IDataOptions


declare interface Stripe$IHeaderOptions {

/**
 * To safely retry an API request without accidentally performing the same operation twice,
 * you can attach a unique key to any POST request made to the Stripe API via the Idempotency-Key: <key> header.
 * For example, if a request to create a charge fails due to a network connection error, you can make
 * a second request with the same key to guarantee that only a single charge is created.
 * The creation of the key is completely up to you. We suggest using random strings or UUIDs.
 * We'll always send back the same response for requests made with the same key, even if you make the request
 * with different request parameters. The keys expire after 24 hours.
 */
idempotency_key?: string,
stripe_account?: string,
api_key?: string,

/**
 * Many objects contain the ID of a related object in their response properties. For example, a Charge may have an associated Customer ID.
 * Those objects can be expanded inline with the expand request parameter. Objects that can be expanded are noted in this documentation.
 * This parameter is available on all API requests, and applies to the response of that request only.
 * 
 * You can nest expand requests with the dot property. For example, requesting invoice.customer on a charge will expand the invoice property
 * into a full Invoice object, and will then expand the customer property on that invoice into a full Customer object.
 * 
 * You can expand multiple objects at once by identifying multiple items in the expand array.
 */
expand?: string[]
} 


/**
 * Header options can either be a Connect Account Secret Key,
 * or a hash with one or more of these keys: idempotency_key, stripe_account, api_key
 */
declare type Stripe$HeaderOptions = Stripe$IHeaderOptions | string;

declare class errors$_Error mixins Error {
message: string
}



declare type errors$RawType = "card_error" | "invalid_request_error" | "api_error" | "idempotency_error";

declare class errors$StripeError mixins errors$_Error, Stripe$IStripeError {
static populate(type: errors$RawType): errors$StripeError;
rawType: errors$RawType;
code: string;
raw: any;
headers: {
[key: string]: string
};
requestId: string;
detail: any;
readonly: number;
params: string;
type: string
}

declare class errors$StripeCardError mixins errors$StripeError {
type: "StripeCardError"
}

declare class errors$StripeInvalidRequestError mixins errors$StripeError {
type: "StripeInvalidRequestError"
}

declare class errors$StripeAPIError mixins errors$StripeError {
type: "StripeAPIError"
}

declare class errors$StripeAuthenticationError mixins errors$StripeError {
type: "StripeAuthenticationError"
}

declare class errors$StripePermissionError mixins errors$StripeError {
type: "StripePermissionError"
}

declare class errors$StripeRateLimitError mixins errors$StripeError {
type: "StripeRateLimitError"
}

declare class errors$StripeConnectionError mixins errors$StripeError {
type: "StripeConnectionError"
}

declare class errors$StripeSignatureVerificationError mixins errors$StripeError {
type: "StripeSignatureVerificationError"
}

declare class errors$StripeIdempotencyError mixins errors$StripeError {
type: "StripeIdempotencyError"
}


/**
 * Stripe uses conventional HTTP response codes to indicate success or failure of an API request.
 * In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error that
 * resulted from the provided information (e.g. a required parameter was missing, a charge failed, etc.),
 * and codes in the 5xx range indicate an error with Stripe's servers. Not all errors map cleanly onto HTTP
 * response codes, however. When a request is valid but does not complete successfully (e.g. a card is
 * declined), we return a 402 error code.
 * 
 * 200 - OK                           Everything worked as expected.
 * 400 - Bad Request                  Often missing a required parameter.
 * 401 - Unauthorized                 No valid API key provided.
 * 402 - Request Failed               Parameters were valid but request failed.
 * 404 - Not Found                    The requested item doesn't exist.
 * 500, 502, 503, 504 - Server Errors Something went wrong on Stripe's end.
 */
declare interface Stripe$IStripeError {

/**
 * The type of error returned. Can be invalid_request_error, api_error, or card_error.
 * 
 * 
 * invalid_request_error Invalid request errors arise when your request has invalid parameters.
 * 
 * api_error             API errors cover any other type of problem (e.g. a temporary problem with Stripe's
 *                        servers) and should turn up only very infrequently.
 * 
 * card_error            Card errors are the most common type of error you should expect to handle. They result
 *                        when the user enters a card that can't be charged for some reason.
 */
type: string,

/**
 * A human-readable message giving more details about the error. For card errors, these messages can
 * be shown to your users.
 */
message?: string,

/**
 * For card errors, a short string from amongst those listed on the right describing the kind of card
 * error that occurred.
 * 
 * incorrect_number          The card number is incorrect.
 * invalid_number            The card number is not a valid credit card number.
 * invalid_expiry_month      The card's expiration month is invalid.
 * invalid_expiry_year       The card's expiration year is invalid.
 * invalid_cvc               The card's security code is invalid.
 * expired_card              The card has expired.
 * incorrect_cvc             The card's security code is incorrect.
 * incorrect_zip             The card's zip code failed validation.
 * card_declined             The card was declined.
 * missing                   There is no card on a customer that is being charged.
 * processing_error          An error occurred while processing the card.
 * rate_limit                An error occurred due to requests hitting the API too
 *                              quickly. Please let us know if you're consistently running
 *                              into this error.
 */
code?: string,

/**
 * The parameter the error relates to if the error is parameter-specific. You can use this to display a
 * message near the correct form field, for example.
 */
param?: string
} 
    }
