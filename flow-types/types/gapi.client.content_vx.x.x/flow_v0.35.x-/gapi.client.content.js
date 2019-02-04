declare module 'gapi.client.content' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        accounts: typeof client$accounts,
accountstatuses: typeof client$accountstatuses,
accounttax: typeof client$accounttax,
datafeeds: typeof client$datafeeds,
datafeedstatuses: typeof client$datafeedstatuses,
inventory: typeof client$inventory,
orders: typeof client$orders,
products: typeof client$products,
productstatuses: typeof client$productstatuses,
shippingsettings: typeof client$shippingsettings,
      }

/**
 * Load Content API for Shopping v2
 */
declare function client$load(name: "content", version: "v2"): PromiseLike<void>


declare function client$load(name: "content", version: "v2", callback: () => any): void


declare var client$accounts: content$content$AccountsResource;

declare var client$accountstatuses: content$content$AccountstatusesResource;

declare var client$accounttax: content$content$AccounttaxResource;

declare var client$datafeeds: content$content$DatafeedsResource;

declare var client$datafeedstatuses: content$content$DatafeedstatusesResource;

declare var client$inventory: content$content$InventoryResource;

declare var client$orders: content$content$OrdersResource;

declare var client$products: content$content$ProductsResource;

declare var client$productstatuses: content$content$ProductstatusesResource;

declare var client$shippingsettings: content$content$ShippingsettingsResource;

declare interface content$Account {

/**
 * Indicates whether the merchant sells adult content.
 */
adultContent?: boolean,

/**
 * List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status active to the list. It
 * will remain in a pending state until approved or rejected either in the AdWords interface or through the  AdWords API. To delete an active link, or to
 * cancel a link request, remove it from the list.
 */
adwordsLinks?: content$AccountAdwordsLink[],

/**
 * Merchant Center account ID.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#account".
 */
kind?: string,

/**
 * Display name for the account.
 */
name?: string,

/**
 * URL for individual seller reviews, i.e., reviews for each child account.
 */
reviewsUrl?: string,

/**
 * Client-specific, locally-unique, internal ID for the child account.
 */
sellerId?: string,

/**
 * Users with access to the account. Every account (except for subaccounts) must have at least one admin user.
 */
users?: content$AccountUser[],

/**
 * The merchant's website.
 */
websiteUrl?: string,

/**
 * List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status active to the list. It
 * will remain in a pending state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request,
 * remove it from the list.
 */
youtubeChannelLinks?: content$AccountYouTubeChannelLink[]
} 

declare interface content$AccountAdwordsLink {

/**
 * Customer ID of the AdWords account.
 */
adwordsId?: string,

/**
 * Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be
 * either active if it was approved in Google AdWords or pending if it's pending approval. Upon insertion, it represents the intended status of the link.
 * Re-uploading a link with status active when it's still pending or with status pending when it's already active will have no effect: the status will
 * remain unchanged. Re-uploading a link with deprecated status inactive is equivalent to not submitting the link at all and will delete the link if it
 * was active or cancel the link request if it was pending.
 */
status?: string
} 

declare interface content$AccountIdentifier {

/**
 * The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).
 */
aggregatorId?: string,

/**
 * The merchant account ID, set for individual accounts and subaccounts.
 */
merchantId?: string
} 

declare interface content$AccountStatus {

/**
 * The ID of the account for which the status is reported.
 */
accountId?: string,

/**
 * A list of account level issues.
 */
accountLevelIssues?: content$AccountStatusAccountLevelIssue[],

/**
 * A list of data quality issues.
 */
dataQualityIssues?: content$AccountStatusDataQualityIssue[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountStatus".
 */
kind?: string,

/**
 * Whether the account's website is claimed or not.
 */
websiteClaimed?: boolean
} 

declare interface content$AccountStatusAccountLevelIssue {

/**
 * Country for which this issue is reported.
 */
country?: string,

/**
 * Additional details about the issue.
 */
detail?: string,

/**
 * Issue identifier.
 */
id?: string,

/**
 * Severity of the issue.
 */
severity?: string,

/**
 * Short description of the issue.
 */
title?: string
} 

declare interface content$AccountStatusDataQualityIssue {

/**
 * Country for which this issue is reported.
 */
country?: string,

/**
 * A more detailed description of the issue.
 */
detail?: string,

/**
 * Actual value displayed on the landing page.
 */
displayedValue?: string,

/**
 * Example items featuring the issue.
 */
exampleItems?: content$AccountStatusExampleItem[],

/**
 * Issue identifier.
 */
id?: string,

/**
 * Last time the account was checked for this issue.
 */
lastChecked?: string,

/**
 * The attribute name that is relevant for the issue.
 */
location?: string,

/**
 * Number of items in the account found to have the said issue.
 */
numItems?: number,

/**
 * Severity of the problem.
 */
severity?: string,

/**
 * Submitted value that causes the issue.
 */
submittedValue?: string
} 

declare interface content$AccountStatusExampleItem {

/**
 * Unique item ID as specified in the uploaded product data.
 */
itemId?: string,

/**
 * Landing page of the item.
 */
link?: string,

/**
 * The item value that was submitted.
 */
submittedValue?: string,

/**
 * Title of the item.
 */
title?: string,

/**
 * The actual value on the landing page.
 */
valueOnLandingPage?: string
} 

declare interface content$AccountTax {

/**
 * The ID of the account to which these account tax settings belong.
 */
accountId?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountTax".
 */
kind?: string,

/**
 * Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.
 */
rules?: content$AccountTaxTaxRule[]
} 

declare interface content$AccountTaxTaxRule {

/**
 * Country code in which tax is applicable.
 */
country?: string,

/**
 * State (or province) is which the tax is applicable, described by its location id (also called criteria id).
 */
locationId?: string,

/**
 * Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.
 */
ratePercent?: string,

/**
 * If true, shipping charges are also taxed.
 */
shippingTaxed?: boolean,

/**
 * Whether the tax rate is taken from a global tax table or specified explicitly.
 */
useGlobalRate?: boolean
} 

declare interface content$AccountUser {

/**
 * Whether user is an admin.
 */
admin?: boolean,

/**
 * User's email address.
 */
emailAddress?: string
} 

declare interface content$AccountYouTubeChannelLink {

/**
 * Channel ID.
 */
channelId?: string,

/**
 * Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be
 * either active if it was approved in YT Creator Studio or pending if it's pending approval. Upon insertion, it represents the intended status of the
 * link. Re-uploading a link with status active when it's still pending or with status pending when it's already active will have no effect: the status
 * will remain unchanged. Re-uploading a link with deprecated status inactive is equivalent to not submitting the link at all and will delete the link if
 * it was active or cancel the link request if it was pending.
 */
status?: string
} 

declare interface content$AccountsAuthInfoResponse {

/**
 * The account identifiers corresponding to the authenticated user.
 * - For an individual account: only the merchant ID is defined
 * - For an aggregator: only the aggregator ID is defined
 * - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined.
 */
accountIdentifiers?: content$AccountIdentifier[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse".
 */
kind?: string
} 

declare interface content$AccountsClaimWebsiteResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse".
 */
kind?: string
} 

declare interface content$AccountsCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$AccountsCustomBatchRequestEntry[]
} 

declare interface content$AccountsCustomBatchRequestEntry {

/**
 * The account to create or update. Only defined if the method is insert or update.
 */
account?: content$Account,

/**
 * The ID of the targeted account. Only defined if the method is get, delete or claimwebsite.
 */
accountId?: string,

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * Whether the account should be deleted if the account has offers. Only applicable if the method is delete.
 */
force?: boolean,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string,

/**
 * Only applicable if the method is claimwebsite. Indicates whether or not to take the claim from another account in case there is a conflict.
 */
overwrite?: boolean
} 

declare interface content$AccountsCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$AccountsCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".
 */
kind?: string
} 

declare interface content$AccountsCustomBatchResponseEntry {

/**
 * The retrieved, created, or updated account. Not defined if the method was delete or claimwebsite.
 */
account?: content$Account,

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponseEntry".
 */
kind?: string
} 

declare interface content$AccountsListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of accounts.
 */
nextPageToken?: string,
resources?: content$Account[]
} 

declare interface content$AccountstatusesCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$AccountstatusesCustomBatchRequestEntry[]
} 

declare interface content$AccountstatusesCustomBatchRequestEntry {

/**
 * The ID of the (sub-)account whose status to get.
 */
accountId?: string,

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The ID of the managing account.
 */
merchantId?: string,

/**
 * The method (get).
 */
method?: string
} 

declare interface content$AccountstatusesCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$AccountstatusesCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".
 */
kind?: string
} 

declare interface content$AccountstatusesCustomBatchResponseEntry {

/**
 * The requested account status. Defined if and only if the request was successful.
 */
accountStatus?: content$AccountStatus,

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors
} 

declare interface content$AccountstatusesListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of account statuses.
 */
nextPageToken?: string,
resources?: content$AccountStatus[]
} 

declare interface content$AccounttaxCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$AccounttaxCustomBatchRequestEntry[]
} 

declare interface content$AccounttaxCustomBatchRequestEntry {

/**
 * The ID of the account for which to get/update account tax settings.
 */
accountId?: string,

/**
 * The account tax settings to update. Only defined if the method is update.
 */
accountTax?: content$AccountTax,

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string
} 

declare interface content$AccounttaxCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$AccounttaxCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".
 */
kind?: string
} 

declare interface content$AccounttaxCustomBatchResponseEntry {

/**
 * The retrieved or updated account tax settings.
 */
accountTax?: content$AccountTax,

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponseEntry".
 */
kind?: string
} 

declare interface content$AccounttaxListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of account tax settings.
 */
nextPageToken?: string,
resources?: content$AccountTax[]
} 

declare interface content$CarrierRate {

/**
 * Carrier service, such as "UPS" or "Fedex". The list of supported carriers can be retrieved via the getSupportedCarriers method. Required.
 */
carrierName?: string,

/**
 * Carrier service, such as "ground" or "2 days". The list of supported services for a carrier can be retrieved via the getSupportedCarriers method.
 * Required.
 */
carrierService?: string,

/**
 * Additive shipping rate modifier. Can be negative. For example { "value": "1", "currency" : "USD" } adds $1 to the rate, { "value": "-3", "currency" :
 * "USD" } removes $3 from the rate. Optional.
 */
flatAdjustment?: content$Price,

/**
 * Name of the carrier rate. Must be unique per rate group. Required.
 */
name?: string,

/**
 * Shipping origin for this carrier rate. Required.
 */
originPostalCode?: string,

/**
 * Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example "5.4" increases the rate by 5.4%, "-3" decreases
 * the rate by 3%. Optional.
 */
percentageAdjustment?: string
} 

declare interface content$CarriersCarrier {

/**
 * The CLDR country code of the carrier (e.g., "US"). Always present.
 */
country?: string,

/**
 * The name of the carrier (e.g., "UPS"). Always present.
 */
name?: string,

/**
 * A list of supported services (e.g., "ground") for that carrier. Contains at least one service.
 */
services?: string[]
} 

declare interface content$Datafeed {

/**
 * The two-letter ISO 639-1 language in which the attributes are defined in the data feed.
 */
attributeLanguage?: string,

/**
 * [DEPRECATED] Please use target.language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for
 * targetCountry.
 */
contentLanguage?: string,

/**
 * The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported.
 */
contentType?: string,

/**
 * Fetch schedule for the feed file.
 */
fetchSchedule?: content$DatafeedFetchSchedule,

/**
 * The filename of the feed. All feeds must have a unique file name.
 */
fileName?: string,

/**
 * Format of the feed file.
 */
format?: content$DatafeedFormat,

/**
 * The ID of the data feed.
 */
id?: string,

/**
 * [DEPRECATED] Please use target.includedDestination instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center).
 */
intendedDestinations?: string[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeed".
 */
kind?: string,

/**
 * A descriptive name of the data feed.
 */
name?: string,

/**
 * [DEPRECATED] Please use target.country instead. The country where the items in the feed will be included in the search index, represented as a CLDR
 * territory code.
 */
targetCountry?: string,

/**
 * The targets this feed should apply to (country, language, destinations).
 */
targets?: content$DatafeedTarget[]
} 

declare interface content$DatafeedFetchSchedule {

/**
 * The day of the month the feed file should be fetched (1-31).
 */
dayOfMonth?: number,

/**
 * The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP
 * protocols, so the value will need to be a valid link using one of those four protocols.
 */
fetchUrl?: string,

/**
 * The hour of the day the feed file should be fetched (0-23).
 */
hour?: number,

/**
 * The minute of the hour the feed file should be fetched (0-59). Read-only.
 */
minuteOfHour?: number,

/**
 * An optional password for fetch_url.
 */
password?: string,

/**
 * Whether the scheduled fetch is paused or not.
 */
paused?: boolean,

/**
 * Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".
 */
timeZone?: string,

/**
 * An optional user name for fetch_url.
 */
username?: string,

/**
 * The day of the week the feed file should be fetched.
 */
weekday?: string
} 

declare interface content$DatafeedFormat {

/**
 * Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV
 * data feeds.
 */
columnDelimiter?: string,

/**
 * Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected.
 */
fileEncoding?: string,

/**
 * Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds.
 */
quotingMode?: string
} 

declare interface content$DatafeedStatus {

/**
 * The country for which the status is reported, represented as a  CLDR territory code.
 */
country?: string,

/**
 * The ID of the feed for which the status is reported.
 */
datafeedId?: string,

/**
 * The list of errors occurring in the feed.
 */
errors?: content$DatafeedStatusError[],

/**
 * The number of items in the feed that were processed.
 */
itemsTotal?: string,

/**
 * The number of items in the feed that were valid.
 */
itemsValid?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeedStatus".
 */
kind?: string,

/**
 * The two-letter ISO 639-1 language for which the status is reported.
 */
language?: string,

/**
 * The last date at which the feed was uploaded.
 */
lastUploadDate?: string,

/**
 * The processing status of the feed.
 */
processingStatus?: string,

/**
 * The list of errors occurring in the feed.
 */
warnings?: content$DatafeedStatusError[]
} 

declare interface content$DatafeedStatusError {

/**
 * The code of the error, e.g., "validation/invalid_value".
 */
code?: string,

/**
 * The number of occurrences of the error in the feed.
 */
count?: string,

/**
 * A list of example occurrences of the error, grouped by product.
 */
examples?: content$DatafeedStatusExample[],

/**
 * The error message, e.g., "Invalid price".
 */
message?: string
} 

declare interface content$DatafeedStatusExample {

/**
 * The ID of the example item.
 */
itemId?: string,

/**
 * Line number in the data feed where the example is found.
 */
lineNumber?: string,

/**
 * The problematic value.
 */
value?: string
} 

declare interface content$DatafeedTarget {

/**
 * The country where the items in the feed will be included in the search index, represented as a  CLDR territory code.
 */
country?: string,

/**
 * The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).
 */
excludedDestinations?: string[],

/**
 * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included
 * unless provided in the excluded_destination field.
 */
includedDestinations?: string[],

/**
 * The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for targets[].country.
 */
language?: string
} 

declare interface content$DatafeedsCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$DatafeedsCustomBatchRequestEntry[]
} 

declare interface content$DatafeedsCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The data feed to insert.
 */
datafeed?: content$Datafeed,

/**
 * The ID of the data feed to get or delete.
 */
datafeedId?: string,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string
} 

declare interface content$DatafeedsCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$DatafeedsCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".
 */
kind?: string
} 

declare interface content$DatafeedsCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * The requested data feed. Defined if and only if the request was successful.
 */
datafeed?: content$Datafeed,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors
} 

declare interface content$DatafeedsListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of datafeeds.
 */
nextPageToken?: string,
resources?: content$Datafeed[]
} 

declare interface content$DatafeedstatusesCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$DatafeedstatusesCustomBatchRequestEntry[]
} 

declare interface content$DatafeedstatusesCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target
 * datafeeds this parameter is required.
 */
country?: string,

/**
 * The ID of the data feed to get.
 */
datafeedId?: string,

/**
 * The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target
 * datafeeds this parameter is required.
 */
language?: string,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string
} 

declare interface content$DatafeedstatusesCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$DatafeedstatusesCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".
 */
kind?: string
} 

declare interface content$DatafeedstatusesCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * The requested data feed status. Defined if and only if the request was successful.
 */
datafeedStatus?: content$DatafeedStatus,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors
} 

declare interface content$DatafeedstatusesListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of datafeed statuses.
 */
nextPageToken?: string,
resources?: content$DatafeedStatus[]
} 

declare interface content$DeliveryTime {

/**
 * Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to
 * minTransitTimeInDays. Required.
 */
maxTransitTimeInDays?: number,

/**
 * Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Required.
 */
minTransitTimeInDays?: number
} 

declare interface content$Error {

/**
 * The domain of the error.
 */
domain?: string,

/**
 * A description of the error.
 */
message?: string,

/**
 * The error code.
 */
reason?: string
} 

declare interface content$Errors {

/**
 * The HTTP status of the first error in errors.
 */
code?: number,

/**
 * A list of errors.
 */
errors?: content$Error[],

/**
 * The message of the first error in errors.
 */
message?: string
} 

declare interface content$Headers {

/**
 * A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.
 */
locations?: content$LocationIdSet[],

/**
 * A list of inclusive number of items upper bounds. The last value can be "infinity". For example ["10", "50", "infinity"] represents the headers "<= 10
 * items", " 50 items". Must be non-empty. Can only be set if all other fields are not set.
 */
numberOfItems?: string[],

/**
 * A list of postal group names. The last value can be "all other locations". Example: ["zone 1", "zone 2", "all other locations"]. The referred postal
 * code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.
 */
postalCodeGroupNames?: string[],

/**
 * be "infinity". For example [{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]
 * represents the headers "<= $10", " $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other
 * fields are not set.
 */
prices?: content$Price[],

/**
 * be "infinity". For example [{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}] represents the headers
 * "<= 10kg", " 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.
 */
weights?: content$Weight[]
} 

declare interface content$Installment {

/**
 * The amount the buyer has to pay per month.
 */
amount?: content$Price,

/**
 * The number of installments the buyer has to pay.
 */
months?: string
} 

declare interface content$Inventory {

/**
 * The availability of the product.
 */
availability?: string,

/**
 * Number and amount of installments to pay for an item. Brazil only.
 */
installment?: content$Installment,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#inventory".
 */
kind?: string,

/**
 * Loyalty points that users receive after purchasing the item. Japan only.
 */
loyaltyPoints?: content$LoyaltyPoints,

/**
 * Store pickup information. Only supported for local inventory. Not setting pickup means "don't update" while setting it to the empty value ({} in JSON)
 * means "delete". Otherwise, pickupMethod and pickupSla must be set together, unless pickupMethod is "not supported".
 */
pickup?: content$InventoryPickup,

/**
 * The price of the product.
 */
price?: content$Price,

/**
 * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
 */
quantity?: number,

/**
 * The sale price of the product. Mandatory if sale_price_effective_date is defined.
 */
salePrice?: content$Price,

/**
 * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
 */
salePriceEffectiveDate?: string,

/**
 * The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.
 */
sellOnGoogleQuantity?: number
} 

declare interface content$InventoryCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$InventoryCustomBatchRequestEntry[]
} 

declare interface content$InventoryCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * Price and availability of the product.
 */
client$inventory?: content$Inventory,

/**
 * The ID of the managing account.
 */
merchantId?: string,

/**
 * The ID of the product for which to update price and availability.
 */
productId?: string,

/**
 * The code of the store for which to update price and availability. Use online to update price and availability of an online product.
 */
storeCode?: string
} 

declare interface content$InventoryCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$InventoryCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponse".
 */
kind?: string
} 

declare interface content$InventoryCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#inventoryCustomBatchResponseEntry".
 */
kind?: string
} 

declare interface content$InventoryPickup {

/**
 * Whether store pickup is available for this offer and whether the pickup option should be shown as buy, reserve, or not supported. Only supported for
 * local inventory. Unless the value is "not supported", must be submitted together with pickupSla.
 */
pickupMethod?: string,

/**
 * The expected date that an order will be ready for pickup, relative to when the order is placed. Only supported for local inventory. Must be submitted
 * together with pickupMethod.
 */
pickupSla?: string
} 

declare interface content$InventorySetRequest {

/**
 * The availability of the product.
 */
availability?: string,

/**
 * Number and amount of installments to pay for an item. Brazil only.
 */
installment?: content$Installment,

/**
 * Loyalty points that users receive after purchasing the item. Japan only.
 */
loyaltyPoints?: content$LoyaltyPoints,

/**
 * Store pickup information. Only supported for local inventory. Not setting pickup means "don't update" while setting it to the empty value ({} in JSON)
 * means "delete". Otherwise, pickupMethod and pickupSla must be set together, unless pickupMethod is "not supported".
 */
pickup?: content$InventoryPickup,

/**
 * The price of the product.
 */
price?: content$Price,

/**
 * The quantity of the product. Must be equal to or greater than zero. Supported only for local products.
 */
quantity?: number,

/**
 * The sale price of the product. Mandatory if sale_price_effective_date is defined.
 */
salePrice?: content$Price,

/**
 * A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.
 */
salePriceEffectiveDate?: string,

/**
 * The quantity of the product that is reserved for sell-on-google ads. Supported only for online products.
 */
sellOnGoogleQuantity?: number
} 

declare interface content$InventorySetResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#inventorySetResponse".
 */
kind?: string
} 

declare interface content$LocationIdSet {

/**
 * A non-empty list of location IDs. They must all be of the same location type (e.g., state).
 */
locationIds?: string[]
} 

declare interface content$LoyaltyPoints {

/**
 * Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.
 */
name?: string,

/**
 * The retailer's loyalty points in absolute value.
 */
pointsValue?: string,

/**
 * The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.
 */
ratio?: number
} 

declare interface content$Order {

/**
 * Whether the order was acknowledged.
 */
acknowledged?: boolean,

/**
 * The channel type of the order: "purchaseOnGoogle" or "googleExpress".
 */
channelType?: string,

/**
 * The details of the customer who placed the order.
 */
customer?: content$OrderCustomer,

/**
 * The details for the delivery.
 */
deliveryDetails?: content$OrderDeliveryDetails,

/**
 * The REST id of the order. Globally unique.
 */
id?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#order".
 */
kind?: string,

/**
 * Line items that are ordered.
 */
lineItems?: content$OrderLineItem[],
merchantId?: string,

/**
 * Merchant-provided id of the order.
 */
merchantOrderId?: string,

/**
 * The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued for $20, the net amount will be
 * $80.
 */
netAmount?: content$Price,

/**
 * The details of the payment method.
 */
paymentMethod?: content$OrderPaymentMethod,

/**
 * The status of the payment.
 */
paymentStatus?: string,

/**
 * The date when the order was placed, in ISO 8601 format.
 */
placedDate?: string,

/**
 * The details of the merchant provided promotions applied to the order. More details about the program are here.
 */
promotions?: content$OrderPromotion[],

/**
 * Refunds for the order.
 */
refunds?: content$OrderRefund[],

/**
 * Shipments of the order.
 */
shipments?: content$OrderShipment[],

/**
 * The total cost of shipping for all items.
 */
shippingCost?: content$Price,

/**
 * The tax for the total shipping cost.
 */
shippingCostTax?: content$Price,

/**
 * The requested shipping option.
 */
shippingOption?: string,

/**
 * The status of the order.
 */
status?: string
} 

declare interface content$OrderAddress {

/**
 * CLDR country code (e.g. "US").
 */
country?: string,

/**
 * Strings representing the lines of the printed label for mailing the order, for example:
 * John Smith
 * 1600 Amphitheatre Parkway
 * Mountain View, CA, 94043
 * United States
 */
fullAddress?: string[],

/**
 * Whether the address is a post office box.
 */
isPostOfficeBox?: boolean,

/**
 * City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).
 */
locality?: string,

/**
 * Postal Code or ZIP (e.g. "94043").
 */
postalCode?: string,

/**
 * Name of the recipient.
 */
recipientName?: string,

/**
 * Top-level administrative subdivision of the country (e.g. "CA").
 */
region?: string,

/**
 * Street-level part of the address.
 */
streetAddress?: string[]
} 

declare interface content$OrderCancellation {

/**
 * The actor that created the cancellation.
 */
actor?: string,

/**
 * Date on which the cancellation has been created, in ISO 8601 format.
 */
creationDate?: string,

/**
 * The quantity that was canceled.
 */
quantity?: number,

/**
 * The reason for the cancellation. Orders that are cancelled with a noInventory reason will lead to the removal of the product from POG until you make an
 * update to that product. This will not affect your Shopping ads.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrderCustomer {

/**
 * Email address of the customer.
 */
email?: string,

/**
 * If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has
 * already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow.
 */
explicitMarketingPreference?: boolean,

/**
 * Full name of the customer.
 */
fullName?: string
} 

declare interface content$OrderDeliveryDetails {

/**
 * The delivery address
 */
address?: content$OrderAddress,

/**
 * The phone number of the person receiving the delivery.
 */
phoneNumber?: string
} 

declare interface content$OrderLineItem {

/**
 * Cancellations of the line item.
 */
cancellations?: content$OrderCancellation[],

/**
 * The channel type of the order: "purchaseOnGoogle" or "googleExpress".
 */
channelType?: string,

/**
 * The id of the line item.
 */
id?: string,

/**
 * Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.
 */
price?: content$Price,

/**
 * Product data from the time of the order placement.
 */
product?: content$OrderLineItemProduct,

/**
 * Number of items canceled.
 */
quantityCanceled?: number,

/**
 * Number of items delivered.
 */
quantityDelivered?: number,

/**
 * Number of items ordered.
 */
quantityOrdered?: number,

/**
 * Number of items pending.
 */
quantityPending?: number,

/**
 * Number of items returned.
 */
quantityReturned?: number,

/**
 * Number of items shipped.
 */
quantityShipped?: number,

/**
 * Details of the return policy for the line item.
 */
returnInfo?: content$OrderLineItemReturnInfo,

/**
 * Returns of the line item.
 */
returns?: content$OrderReturn[],

/**
 * Details of the requested shipping for the line item.
 */
shippingDetails?: content$OrderLineItemShippingDetails,

/**
 * Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total tax amount will be $4.
 */
tax?: content$Price
} 

declare interface content$OrderLineItemProduct {

/**
 * Brand of the item.
 */
brand?: string,

/**
 * The item's channel (online or local).
 */
channel?: string,

/**
 * Condition or state of the item.
 */
condition?: string,

/**
 * The two-letter ISO 639-1 language code for the item.
 */
contentLanguage?: string,

/**
 * Global Trade Item Number (GTIN) of the item.
 */
gtin?: string,

/**
 * The REST id of the product.
 */
id?: string,

/**
 * URL of an image of the item.
 */
imageLink?: string,

/**
 * Shared identifier for all variants of the same product.
 */
itemGroupId?: string,

/**
 * Manufacturer Part Number (MPN) of the item.
 */
mpn?: string,

/**
 * An identifier of the item.
 */
offerId?: string,

/**
 * Price of the item.
 */
price?: content$Price,

/**
 * URL to the cached image shown to the user when order was placed.
 */
shownImage?: string,

/**
 * The CLDR territory code of the target country of the product.
 */
targetCountry?: string,

/**
 * The title of the product.
 */
title?: string,

/**
 * Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive
 * list of variant attributes here.
 */
variantAttributes?: content$OrderLineItemProductVariantAttribute[]
} 

declare interface content$OrderLineItemProductVariantAttribute {

/**
 * The dimension of the variant.
 */
dimension?: string,

/**
 * The value for the dimension.
 */
value?: string
} 

declare interface content$OrderLineItemReturnInfo {

/**
 * How many days later the item can be returned.
 */
daysToReturn?: number,

/**
 * Whether the item is returnable.
 */
isReturnable?: boolean,

/**
 * URL of the item return policy.
 */
policyUrl?: string
} 

declare interface content$OrderLineItemShippingDetails {

/**
 * The delivery by date, in ISO 8601 format.
 */
deliverByDate?: string,

/**
 * Details of the shipping method.
 */
method?: content$OrderLineItemShippingDetailsMethod,

/**
 * The ship by date, in ISO 8601 format.
 */
shipByDate?: string
} 

declare interface content$OrderLineItemShippingDetailsMethod {

/**
 * The carrier for the shipping. Optional. See shipments[].carrier for a list of acceptable values.
 */
carrier?: string,

/**
 * Maximum transit time.
 */
maxDaysInTransit?: number,

/**
 * The name of the shipping method.
 */
methodName?: string,

/**
 * Minimum transit time.
 */
minDaysInTransit?: number
} 

declare interface content$OrderPaymentMethod {

/**
 * The billing address.
 */
billingAddress?: content$OrderAddress,

/**
 * The card expiration month (January = 1, February = 2 etc.).
 */
expirationMonth?: number,

/**
 * The card expiration year (4-digit, e.g. 2015).
 */
expirationYear?: number,

/**
 * The last four digits of the card number.
 */
lastFourDigits?: string,

/**
 * The billing phone number.
 */
phoneNumber?: string,

/**
 * The type of instrument.
 * 
 * Acceptable values are:
 * - "AMEX"
 * - "DISCOVER"
 * - "JCB"
 * - "MASTERCARD"
 * - "UNIONPAY"
 * - "VISA"
 * - ""
 */
type?: string
} 

declare interface content$OrderPromotion {
benefits?: content$OrderPromotionBenefit[],

/**
 * The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours
 * due to the validation review.
 * Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the
 * time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the
 * same format.
 */
effectiveDates?: string,

/**
 * Optional. The text code that corresponds to the promotion when applied on the retailer?s website.
 */
genericRedemptionCode?: string,

/**
 * The unique ID of the promotion.
 */
id?: string,

/**
 * The full title of the promotion.
 */
longTitle?: string,

/**
 * Whether the promotion is applicable to all products or only specific products.
 */
productApplicability?: string,

/**
 * Indicates that the promotion is valid online.
 */
redemptionChannel?: string
} 

declare interface content$OrderPromotionBenefit {

/**
 * The discount in the order price when the promotion is applied.
 */
discount?: content$Price,

/**
 * The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.
 */
offerIds?: string[],

/**
 * Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types.
 */
subType?: string,

/**
 * The impact on tax when the promotion is applied.
 */
taxImpact?: content$Price,

/**
 * Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping).
 */
type?: string
} 

declare interface content$OrderRefund {

/**
 * The actor that created the refund.
 */
actor?: string,

/**
 * The amount that is refunded.
 */
amount?: content$Price,

/**
 * Date on which the item has been created, in ISO 8601 format.
 */
creationDate?: string,

/**
 * The reason for the refund.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrderReturn {

/**
 * The actor that created the refund.
 */
actor?: string,

/**
 * Date on which the item has been created, in ISO 8601 format.
 */
creationDate?: string,

/**
 * Quantity that is returned.
 */
quantity?: number,

/**
 * The reason for the return.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrderShipment {

/**
 * The carrier handling the shipment.
 * 
 * Acceptable values are:
 * - "gsx"
 * - "ups"
 * - "united parcel service"
 * - "usps"
 * - "united states postal service"
 * - "fedex"
 * - "dhl"
 * - "ecourier"
 * - "cxt"
 * - "google"
 * - "on trac"
 * - "ontrac"
 * - "on-trac"
 * - "on_trac"
 * - "delvic"
 * - "dynamex"
 * - "lasership"
 * - "smartpost"
 * - "fedex smartpost"
 * - "mpx"
 * - "uds"
 * - "united delivery service"
 */
carrier?: string,

/**
 * Date on which the shipment has been created, in ISO 8601 format.
 */
creationDate?: string,

/**
 * Date on which the shipment has been delivered, in ISO 8601 format. Present only if status is delievered
 */
deliveryDate?: string,

/**
 * The id of the shipment.
 */
id?: string,

/**
 * The line items that are shipped.
 */
lineItems?: content$OrderShipmentLineItemShipment[],

/**
 * The status of the shipment.
 */
status?: string,

/**
 * The tracking id for the shipment.
 */
trackingId?: string
} 

declare interface content$OrderShipmentLineItemShipment {

/**
 * The id of the line item that is shipped.
 */
lineItemId?: string,

/**
 * The quantity that is shipped.
 */
quantity?: number
} 

declare interface content$OrdersAcknowledgeRequest {

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string
} 

declare interface content$OrdersAcknowledgeResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".
 */
kind?: string
} 

declare interface content$OrdersAdvanceTestOrderResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".
 */
kind?: string
} 

declare interface content$OrdersCancelLineItemRequest {

/**
 * Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The
 * amount must not be larger than the net amount left on the order.
 */
amount?: content$Price,

/**
 * The ID of the line item to cancel.
 */
lineItemId?: string,

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * The quantity to cancel.
 */
quantity?: number,

/**
 * The reason for the cancellation.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCancelLineItemResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".
 */
kind?: string
} 

declare interface content$OrdersCancelRequest {

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * The reason for the cancellation.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCancelResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".
 */
kind?: string
} 

declare interface content$OrdersCreateTestOrderRequest {

/**
 * The test order template to use. Specify as an alternative to testOrder as a shortcut for retrieving a template and then creating an order using that
 * template.
 */
templateName?: string,

/**
 * The test order to create.
 */
testOrder?: content$TestOrder
} 

declare interface content$OrdersCreateTestOrderResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".
 */
kind?: string,

/**
 * The ID of the newly created test order.
 */
orderId?: string
} 

declare interface content$OrdersCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$OrdersCustomBatchRequestEntry[]
} 

declare interface content$OrdersCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * Required for cancel method.
 */
cancel?: content$OrdersCustomBatchRequestEntryCancel,

/**
 * Required for cancelLineItem method.
 */
cancelLineItem?: content$OrdersCustomBatchRequestEntryCancelLineItem,

/**
 * The ID of the managing account.
 */
merchantId?: string,

/**
 * The merchant order id. Required for updateMerchantOrderId and getByMerchantOrderId methods.
 */
merchantOrderId?: string,

/**
 * The method to apply.
 */
method?: string,

/**
 * The ID of the operation. Unique across all operations for a given order. Required for all methods beside get and getByMerchantOrderId.
 */
operationId?: string,

/**
 * The ID of the order. Required for all methods beside getByMerchantOrderId.
 */
orderId?: string,

/**
 * Required for refund method.
 */
refund?: content$OrdersCustomBatchRequestEntryRefund,

/**
 * Required for returnLineItem method.
 */
returnLineItem?: content$OrdersCustomBatchRequestEntryReturnLineItem,

/**
 * Required for shipLineItems method.
 */
shipLineItems?: content$OrdersCustomBatchRequestEntryShipLineItems,

/**
 * Required for updateShipment method.
 */
updateShipment?: content$OrdersCustomBatchRequestEntryUpdateShipment
} 

declare interface content$OrdersCustomBatchRequestEntryCancel {

/**
 * The reason for the cancellation.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCustomBatchRequestEntryCancelLineItem {

/**
 * Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The
 * amount must not be larger than the net amount left on the order.
 */
amount?: content$Price,

/**
 * The ID of the line item to cancel.
 */
lineItemId?: string,

/**
 * The quantity to cancel.
 */
quantity?: number,

/**
 * The reason for the cancellation.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCustomBatchRequestEntryRefund {

/**
 * The amount that is refunded.
 */
amount?: content$Price,

/**
 * The reason for the refund.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCustomBatchRequestEntryReturnLineItem {

/**
 * The ID of the line item to return.
 */
lineItemId?: string,

/**
 * The quantity to return.
 */
quantity?: number,

/**
 * The reason for the return.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersCustomBatchRequestEntryShipLineItems {

/**
 * Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a
 * list of acceptable values.
 */
carrier?: string,

/**
 * Line items to ship.
 */
lineItems?: content$OrderShipmentLineItemShipment[],

/**
 * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
 */
shipmentId?: string,

/**
 * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
 */
shipmentInfos?: content$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[],

/**
 * Deprecated. Please use shipmentInfo instead. The tracking id for the shipment.
 */
trackingId?: string
} 

declare interface content$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo {

/**
 * The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a list of acceptable values.
 */
carrier?: string,

/**
 * The ID of the shipment.
 */
shipmentId?: string,

/**
 * The tracking id for the shipment.
 */
trackingId?: string
} 

declare interface content$OrdersCustomBatchRequestEntryUpdateShipment {

/**
 * The carrier handling the shipment. Not updated if missing. See shipments[].carrier in the  Orders resource representation for a list of acceptable
 * values.
 */
carrier?: string,

/**
 * The ID of the shipment.
 */
shipmentId?: string,

/**
 * New status for the shipment. Not updated if missing.
 */
status?: string,

/**
 * The tracking id for the shipment. Not updated if missing.
 */
trackingId?: string
} 

declare interface content$OrdersCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$OrdersCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".
 */
kind?: string
} 

declare interface content$OrdersCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors,

/**
 * The status of the execution. Only defined if the method is not get or getByMerchantOrderId and if the request was successful.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponseEntry".
 */
kind?: string,

/**
 * The retrieved order. Only defined if the method is get and if the request was successful.
 */
order?: content$Order
} 

declare interface content$OrdersGetByMerchantOrderIdResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".
 */
kind?: string,

/**
 * The requested order.
 */
order?: content$Order
} 

declare interface content$OrdersGetTestOrderTemplateResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".
 */
kind?: string,

/**
 * The requested test order template.
 */
template?: content$TestOrder
} 

declare interface content$OrdersListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of orders.
 */
nextPageToken?: string,
resources?: content$Order[]
} 

declare interface content$OrdersRefundRequest {

/**
 * The amount that is refunded.
 */
amount?: content$Price,

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * The reason for the refund.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersRefundResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".
 */
kind?: string
} 

declare interface content$OrdersReturnLineItemRequest {

/**
 * The ID of the line item to return.
 */
lineItemId?: string,

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * The quantity to return.
 */
quantity?: number,

/**
 * The reason for the return.
 */
reason?: string,

/**
 * The explanation of the reason.
 */
reasonText?: string
} 

declare interface content$OrdersReturnLineItemResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".
 */
kind?: string
} 

declare interface content$OrdersShipLineItemsRequest {

/**
 * Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See shipments[].carrier in the  Orders resource representation for a
 * list of acceptable values.
 */
carrier?: string,

/**
 * Line items to ship.
 */
lineItems?: content$OrderShipmentLineItemShipment[],

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * Deprecated. Please use shipmentInfo instead. The ID of the shipment.
 */
shipmentId?: string,

/**
 * Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).
 */
shipmentInfos?: content$OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo[],

/**
 * Deprecated. Please use shipmentInfo instead. The tracking id for the shipment.
 */
trackingId?: string
} 

declare interface content$OrdersShipLineItemsResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".
 */
kind?: string
} 

declare interface content$OrdersUpdateMerchantOrderIdRequest {

/**
 * The merchant order id to be assigned to the order. Must be unique per merchant.
 */
merchantOrderId?: string,

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string
} 

declare interface content$OrdersUpdateMerchantOrderIdResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".
 */
kind?: string
} 

declare interface content$OrdersUpdateShipmentRequest {

/**
 * The carrier handling the shipment. Not updated if missing. See shipments[].carrier in the  Orders resource representation for a list of acceptable
 * values.
 */
carrier?: string,

/**
 * The ID of the operation. Unique across all operations for a given order.
 */
operationId?: string,

/**
 * The ID of the shipment.
 */
shipmentId?: string,

/**
 * New status for the shipment. Not updated if missing.
 */
status?: string,

/**
 * The tracking id for the shipment. Not updated if missing.
 */
trackingId?: string
} 

declare interface content$OrdersUpdateShipmentResponse {

/**
 * The status of the execution.
 */
executionStatus?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".
 */
kind?: string
} 

declare interface content$PostalCodeGroup {

/**
 * The CLDR territory code of the country the postal code group applies to. Required.
 */
country?: string,

/**
 * The name of the postal code group, referred to in headers. Required.
 */
name?: string,

/**
 * A range of postal codes. Required.
 */
postalCodeRanges?: content$PostalCodeRange[]
} 

declare interface content$PostalCodeRange {

/**
 * A postal code or a pattern of the form prefix&#42; denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410&#42;",
 * "9&#42;". Required.
 */
postalCodeRangeBegin?: string,

/**
 * A postal code or a pattern of the form prefix&#42; denoting the inclusive upper bound of the range defining the area. It must have the same length as
 * postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern
 * then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes
 * matching postalCodeRangeBegin.
 */
postalCodeRangeEnd?: string
} 

declare interface content$Price {

/**
 * The currency of the price.
 */
currency?: string,

/**
 * The price represented as a number.
 */
value?: string
} 

declare interface content$Product {

/**
 * Additional URLs of images of the item.
 */
additionalImageLinks?: string[],

/**
 * Additional categories of the item (formatted as in products feed specification).
 */
additionalProductTypes?: string[],

/**
 * Set to true if the item is targeted towards adults.
 */
adult?: boolean,

/**
 * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
 */
adwordsGrouping?: string,

/**
 * Similar to adwords_grouping, but only works on CPC.
 */
adwordsLabels?: string[],

/**
 * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
 */
adwordsRedirect?: string,

/**
 * Target age group of the item.
 */
ageGroup?: string,

/**
 * Specifies the intended aspects for the product.
 */
aspects?: content$ProductAspect[],

/**
 * Availability status of the item.
 */
availability?: string,

/**
 * The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
 */
availabilityDate?: string,

/**
 * Brand of the item.
 */
brand?: string,

/**
 * The item's channel (online or local).
 */
channel?: string,

/**
 * Color of the item.
 */
color?: string,

/**
 * Condition or state of the item.
 */
condition?: string,

/**
 * The two-letter ISO 639-1 language code for the item.
 */
contentLanguage?: string,

/**
 * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g.,
 * { "name": "size type", "type": "text", "value": "regular" }). This is useful for submitting attributes not explicitly exposed by the API.
 */
customAttributes?: content$ProductCustomAttribute[],

/**
 * A list of custom (merchant-provided) custom attribute groups.
 */
customGroups?: content$ProductCustomGroup[],

/**
 * Custom label 0 for custom grouping of items in a Shopping campaign.
 */
customLabel0?: string,

/**
 * Custom label 1 for custom grouping of items in a Shopping campaign.
 */
customLabel1?: string,

/**
 * Custom label 2 for custom grouping of items in a Shopping campaign.
 */
customLabel2?: string,

/**
 * Custom label 3 for custom grouping of items in a Shopping campaign.
 */
customLabel3?: string,

/**
 * Custom label 4 for custom grouping of items in a Shopping campaign.
 */
customLabel4?: string,

/**
 * Description of the item.
 */
description?: string,

/**
 * Specifies the intended destinations for the product.
 */
destinations?: content$ProductDestination[],

/**
 * An identifier for an item for dynamic remarketing campaigns.
 */
displayAdsId?: string,

/**
 * URL directly to your item's landing page for dynamic remarketing campaigns.
 */
displayAdsLink?: string,

/**
 * Advertiser-specified recommendations.
 */
displayAdsSimilarIds?: string[],

/**
 * Title of an item for dynamic remarketing campaigns.
 */
displayAdsTitle?: string,

/**
 * Offer margin for dynamic remarketing campaigns.
 */
displayAdsValue?: number,

/**
 * The energy efficiency class as defined in EU directive 2010/30/EU.
 */
energyEfficiencyClass?: string,

/**
 * Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in
 * productstatuses as googleExpirationDate and might be earlier if expirationDate is too far in the future.
 */
expirationDate?: string,

/**
 * Target gender of the item.
 */
gender?: string,

/**
 * Google's category of the item (see Google product taxonomy).
 */
googleProductCategory?: string,

/**
 * Global Trade Item Number (GTIN) of the item.
 */
gtin?: string,

/**
 * The REST id of the product.
 */
id?: string,

/**
 * False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the
 * Unique Product Identifier Rules for all target countries except for Canada.
 */
identifierExists?: boolean,

/**
 * URL of an image of the item.
 */
imageLink?: string,

/**
 * Number and amount of installments to pay for an item. Brazil only.
 */
installment?: content$Installment,

/**
 * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
 */
isBundle?: boolean,

/**
 * Shared identifier for all variants of the same product.
 */
itemGroupId?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#product".
 */
kind?: string,

/**
 * URL directly linking to your item's page on your website.
 */
link?: string,

/**
 * Loyalty points that users receive after purchasing the item. Japan only.
 */
loyaltyPoints?: content$LoyaltyPoints,

/**
 * The material of which the item is made.
 */
material?: string,

/**
 * Maximal product handling time (in business days).
 */
maxHandlingTime?: string,

/**
 * Minimal product handling time (in business days).
 */
minHandlingTime?: string,

/**
 * Link to a mobile-optimized version of the landing page.
 */
mobileLink?: string,

/**
 * Manufacturer Part Number (MPN) of the item.
 */
mpn?: string,

/**
 * The number of identical products in a merchant-defined multipack.
 */
multipack?: string,

/**
 * An identifier of the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission.
 * Only valid unicode characters are accepted. See the products feed specification for details.
 */
offerId?: string,

/**
 * Whether an item is available for purchase only online.
 */
onlineOnly?: boolean,

/**
 * The item's pattern (e.g. polka dots).
 */
pattern?: string,

/**
 * Price of the item.
 */
price?: content$Price,

/**
 * Your category of the item (formatted as in products feed specification).
 */
productType?: string,

/**
 * The unique ID of a promotion.
 */
promotionIds?: string[],

/**
 * Advertised sale price of the item.
 */
salePrice?: content$Price,

/**
 * Date range during which the item is on sale (see products feed specification).
 */
salePriceEffectiveDate?: string,

/**
 * The quantity of the product that is reserved for sell-on-google ads.
 */
sellOnGoogleQuantity?: string,

/**
 * Shipping rules.
 */
shipping?: content$ProductShipping[],

/**
 * Height of the item for shipping.
 */
shippingHeight?: content$ProductShippingDimension,

/**
 * The shipping label of the product, used to group product in account-level shipping rules.
 */
shippingLabel?: string,

/**
 * Length of the item for shipping.
 */
shippingLength?: content$ProductShippingDimension,

/**
 * Weight of the item for shipping.
 */
shippingWeight?: content$ProductShippingWeight,

/**
 * Width of the item for shipping.
 */
shippingWidth?: content$ProductShippingDimension,

/**
 * System in which the size is specified. Recommended for apparel items.
 */
sizeSystem?: string,

/**
 * The cut of the item. Recommended for apparel items.
 */
sizeType?: string,

/**
 * Size of the item.
 */
sizes?: string[],

/**
 * The CLDR territory code for the item.
 */
targetCountry?: string,

/**
 * Tax information.
 */
taxes?: content$ProductTax[],

/**
 * Title of the item.
 */
title?: string,

/**
 * The preference of the denominator of the unit price.
 */
unitPricingBaseMeasure?: content$ProductUnitPricingBaseMeasure,

/**
 * The measure and dimension of an item.
 */
unitPricingMeasure?: content$ProductUnitPricingMeasure,

/**
 * The read-only list of intended destinations which passed validation.
 */
validatedDestinations?: string[],

/**
 * Read-only warnings.
 */
warnings?: content$Error[]
} 

declare interface content$ProductAspect {

/**
 * The name of the aspect.
 */
aspectName?: string,

/**
 * The name of the destination. Leave out to apply to all destinations.
 */
destinationName?: string,

/**
 * Whether the aspect is required, excluded or should be validated.
 */
intention?: string
} 

declare interface content$ProductCustomAttribute {

/**
 * The name of the attribute. Underscores will be replaced by spaces upon insertion.
 */
name?: string,

/**
 * The type of the attribute.
 */
type?: string,

/**
 * Free-form unit of the attribute. Unit can only be used for values of type INT or FLOAT.
 */
unit?: string,

/**
 * The value of the attribute.
 */
value?: string
} 

declare interface content$ProductCustomGroup {

/**
 * The sub-attributes.
 */
attributes?: content$ProductCustomAttribute[],

/**
 * The name of the group. Underscores will be replaced by spaces upon insertion.
 */
name?: string
} 

declare interface content$ProductDestination {

/**
 * The name of the destination.
 */
destinationName?: string,

/**
 * Whether the destination is required, excluded or should be validated.
 */
intention?: string
} 

declare interface content$ProductShipping {

/**
 * The CLDR territory code of the country to which an item will ship.
 */
country?: string,

/**
 * The location where the shipping is applicable, represented by a location group name.
 */
locationGroupName?: string,

/**
 * The numeric id of a location that the shipping rate applies to as defined in the AdWords API.
 */
locationId?: string,

/**
 * The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a &#42; wildcard, a range between
 * two postal codes or two postal code prefixes of equal length.
 */
postalCode?: string,

/**
 * Fixed shipping price, represented as a number.
 */
price?: content$Price,

/**
 * The geographic region to which a shipping rate applies.
 */
region?: string,

/**
 * A free-form description of the service class or delivery speed.
 */
service?: string
} 

declare interface content$ProductShippingDimension {

/**
 * The unit of value.
 * 
 * Acceptable values are:
 * - "cm"
 * - "in"
 */
unit?: string,

/**
 * The dimension of the product used to calculate the shipping cost of the item.
 */
value?: number
} 

declare interface content$ProductShippingWeight {

/**
 * The unit of value.
 */
unit?: string,

/**
 * The weight of the product used to calculate the shipping cost of the item.
 */
value?: number
} 

declare interface content$ProductStatus {

/**
 * Date on which the item has been created, in ISO 8601 format.
 */
creationDate?: string,

/**
 * A list of data quality issues associated with the product.
 */
dataQualityIssues?: content$ProductStatusDataQualityIssue[],

/**
 * The intended destinations for the product.
 */
destinationStatuses?: content$ProductStatusDestinationStatus[],

/**
 * Date on which the item expires in Google Shopping, in ISO 8601 format.
 */
googleExpirationDate?: string,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productStatus".
 */
kind?: string,

/**
 * Date on which the item has been last updated, in ISO 8601 format.
 */
lastUpdateDate?: string,

/**
 * The link to the product.
 */
link?: string,

/**
 * Product data after applying all the join inputs.
 */
product?: content$Product,

/**
 * The id of the product for which status is reported.
 */
productId?: string,

/**
 * The title of the product.
 */
title?: string
} 

declare interface content$ProductStatusDataQualityIssue {

/**
 * A more detailed error string.
 */
detail?: string,

/**
 * The fetch status for landing_page_errors.
 */
fetchStatus?: string,

/**
 * The id of the data quality issue.
 */
id?: string,

/**
 * The attribute name that is relevant for the issue.
 */
location?: string,

/**
 * The severity of the data quality issue.
 */
severity?: string,

/**
 * The time stamp of the data quality issue.
 */
timestamp?: string,

/**
 * The value of that attribute that was found on the landing page
 */
valueOnLandingPage?: string,

/**
 * The value the attribute had at time of evaluation.
 */
valueProvided?: string
} 

declare interface content$ProductStatusDestinationStatus {

/**
 * The destination's approval status.
 */
approvalStatus?: string,

/**
 * The name of the destination
 */
destination?: string,

/**
 * Whether the destination is required, excluded, selected by default or should be validated.
 */
intention?: string
} 

declare interface content$ProductTax {

/**
 * The country within which the item is taxed, specified as a CLDR territory code.
 */
country?: string,

/**
 * The numeric id of a location that the tax rate applies to as defined in the AdWords API.
 */
locationId?: string,

/**
 * The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using &#42; wildcard, a range between two ZIP codes or two
 * ZIP code prefixes of equal length. Examples: 94114, 94&#42;, 94002-95460, 94&#42;-95&#42;.
 */
postalCode?: string,

/**
 * The percentage of tax rate that applies to the item price.
 */
rate?: number,

/**
 * The geographic region to which the tax rate applies.
 */
region?: string,

/**
 * Set to true if tax is charged on shipping.
 */
taxShip?: boolean
} 

declare interface content$ProductUnitPricingBaseMeasure {

/**
 * The unit of the denominator.
 */
unit?: string,

/**
 * The denominator of the unit price.
 */
value?: string
} 

declare interface content$ProductUnitPricingMeasure {

/**
 * The unit of the measure.
 */
unit?: string,

/**
 * The measure of an item.
 */
value?: number
} 

declare interface content$ProductsCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$ProductsCustomBatchRequestEntry[]
} 

declare interface content$ProductsCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string,

/**
 * The product to insert. Only required if the method is insert.
 */
product?: content$Product,

/**
 * The ID of the product to get or delete. Only defined if the method is get or delete.
 */
productId?: string
} 

declare interface content$ProductsCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$ProductsCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".
 */
kind?: string
} 

declare interface content$ProductsCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors defined if and only if the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponseEntry".
 */
kind?: string,

/**
 * The inserted product. Only defined if the method is insert and if the request was successful.
 */
product?: content$Product
} 

declare interface content$ProductsListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of products.
 */
nextPageToken?: string,
resources?: content$Product[]
} 

declare interface content$ProductstatusesCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$ProductstatusesCustomBatchRequestEntry[]
} 

declare interface content$ProductstatusesCustomBatchRequestEntry {

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,
includeAttributes?: boolean,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string,

/**
 * The ID of the product whose status to get.
 */
productId?: string
} 

declare interface content$ProductstatusesCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$ProductstatusesCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".
 */
kind?: string
} 

declare interface content$ProductstatusesCustomBatchResponseEntry {

/**
 * The ID of the request entry this entry responds to.
 */
batchId?: number,

/**
 * A list of errors, if the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponseEntry".
 */
kind?: string,

/**
 * The requested product status. Only defined if the request was successful.
 */
productStatus?: content$ProductStatus
} 

declare interface content$ProductstatusesListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of products statuses.
 */
nextPageToken?: string,
resources?: content$ProductStatus[]
} 

declare interface content$RateGroup {

/**
 * A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the
 * rate group to apply. May only be empty for the last rate group of a service. Required.
 */
applicableShippingLabels?: string[],

/**
 * A list of carrier rates that can be referred to by mainTable or singleValue.
 */
carrierRates?: content$CarrierRate[],

/**
 * A table defining the rate group, when singleValue is not expressive enough. Can only be set if singleValue is not set.
 */
mainTable?: content$Table,

/**
 * The value of the rate group (e.g. flat rate $10). Can only be set if mainTable and subtables are not set.
 */
singleValue?: content$Value,

/**
 * A list of subtables referred to by mainTable. Can only be set if mainTable is set.
 */
subtables?: content$Table[]
} 

declare interface content$Row {

/**
 * The list of cells that constitute the row. Must have the same length as columnHeaders for two-dimensional tables, a length of 1 for one-dimensional
 * tables. Required.
 */
cells?: content$Value[]
} 

declare interface content$Service {

/**
 * A boolean exposing the active status of the shipping service. Required.
 */
active?: boolean,

/**
 * The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.
 */
currency?: string,

/**
 * The CLDR territory code of the country to which the service applies. Required.
 */
deliveryCountry?: string,

/**
 * Time spent in various aspects from order to the delivery of the product. Required.
 */
deliveryTime?: content$DeliveryTime,

/**
 * Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have
 * the same currency.
 */
minimumOrderValue?: content$Price,

/**
 * Free-form name of the service. Must be unique within target account. Required.
 */
name?: string,

/**
 * Shipping rate group definitions. Only the last one is allowed to have an empty applicableShippingLabels, which means "everything else". The other
 * applicableShippingLabels must not overlap.
 */
rateGroups?: content$RateGroup[]
} 

declare interface content$ShippingSettings {

/**
 * The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
 */
accountId?: string,

/**
 * A list of postal code groups that can be referred to in services. Optional.
 */
postalCodeGroups?: content$PostalCodeGroup[],

/**
 * The target account's list of services. Optional.
 */
services?: content$Service[]
} 

declare interface content$ShippingsettingsCustomBatchRequest {

/**
 * The request entries to be processed in the batch.
 */
entries?: content$ShippingsettingsCustomBatchRequestEntry[]
} 

declare interface content$ShippingsettingsCustomBatchRequestEntry {

/**
 * The ID of the account for which to get/update account shipping settings.
 */
accountId?: string,

/**
 * An entry ID, unique within the batch request.
 */
batchId?: number,

/**
 * The ID of the managing account.
 */
merchantId?: string,
method?: string,

/**
 * The account shipping settings to update. Only defined if the method is update.
 */
shippingSettings?: content$ShippingSettings
} 

declare interface content$ShippingsettingsCustomBatchResponse {

/**
 * The result of the execution of the batch requests.
 */
entries?: content$ShippingsettingsCustomBatchResponseEntry[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse".
 */
kind?: string
} 

declare interface content$ShippingsettingsCustomBatchResponseEntry {

/**
 * The ID of the request entry to which this entry responds.
 */
batchId?: number,

/**
 * A list of errors defined if, and only if, the request failed.
 */
errors?: content$Errors,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponseEntry".
 */
kind?: string,

/**
 * The retrieved or updated account shipping settings.
 */
shippingSettings?: content$ShippingSettings
} 

declare interface content$ShippingsettingsGetSupportedCarriersResponse {

/**
 * A list of supported carriers. May be empty.
 */
carriers?: content$CarriersCarrier[],

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse".
 */
kind?: string
} 

declare interface content$ShippingsettingsListResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse".
 */
kind?: string,

/**
 * The token for the retrieval of the next page of shipping settings.
 */
nextPageToken?: string,
resources?: content$ShippingSettings[]
} 

declare interface content$Table {

/**
 * Headers of the table's columns. Optional: if not set then the table has only one dimension.
 */
columnHeaders?: content$Headers,

/**
 * Name of the table. Required for subtables, ignored for the main table.
 */
name?: string,

/**
 * Headers of the table's rows. Required.
 */
rowHeaders?: content$Headers,

/**
 * The list of rows that constitute the table. Must have the same length as rowHeaders. Required.
 */
rows?: content$Row[]
} 

declare interface content$TestOrder {

/**
 * The details of the customer who placed the order.
 */
customer?: content$TestOrderCustomer,

/**
 * Identifies what kind of resource this is. Value: the fixed string "content#testOrder".
 */
kind?: string,

/**
 * Line items that are ordered. At least one line item must be provided.
 */
lineItems?: content$TestOrderLineItem[],

/**
 * The details of the payment method.
 */
paymentMethod?: content$TestOrderPaymentMethod,

/**
 * Identifier of one of the predefined delivery addresses for the delivery.
 */
predefinedDeliveryAddress?: string,

/**
 * The details of the merchant provided promotions applied to the order. More details about the program are here.
 */
promotions?: content$OrderPromotion[],

/**
 * The total cost of shipping for all items.
 */
shippingCost?: content$Price,

/**
 * The tax for the total shipping cost.
 */
shippingCostTax?: content$Price,

/**
 * The requested shipping option.
 */
shippingOption?: string
} 

declare interface content$TestOrderCustomer {

/**
 * Email address of the customer.
 */
email?: string,

/**
 * If set, this indicates the user explicitly chose to opt in or out of providing marketing rights to the merchant. If unset, this indicates the user has
 * already made this choice in a previous purchase, and was thus not shown the marketing right opt in/out checkbox during the checkout flow. Optional.
 */
explicitMarketingPreference?: boolean,

/**
 * Full name of the customer.
 */
fullName?: string
} 

declare interface content$TestOrderLineItem {

/**
 * Product data from the time of the order placement.
 */
product?: content$TestOrderLineItemProduct,

/**
 * Number of items ordered.
 */
quantityOrdered?: number,

/**
 * Details of the return policy for the line item.
 */
returnInfo?: content$OrderLineItemReturnInfo,

/**
 * Details of the requested shipping for the line item.
 */
shippingDetails?: content$OrderLineItemShippingDetails,

/**
 * Unit tax for the line item.
 */
unitTax?: content$Price
} 

declare interface content$TestOrderLineItemProduct {

/**
 * Brand of the item.
 */
brand?: string,

/**
 * The item's channel.
 */
channel?: string,

/**
 * Condition or state of the item.
 */
condition?: string,

/**
 * The two-letter ISO 639-1 language code for the item.
 */
contentLanguage?: string,

/**
 * Global Trade Item Number (GTIN) of the item. Optional.
 */
gtin?: string,

/**
 * URL of an image of the item.
 */
imageLink?: string,

/**
 * Shared identifier for all variants of the same product. Optional.
 */
itemGroupId?: string,

/**
 * Manufacturer Part Number (MPN) of the item. Optional.
 */
mpn?: string,

/**
 * An identifier of the item.
 */
offerId?: string,

/**
 * The price for the product.
 */
price?: content$Price,

/**
 * The CLDR territory code of the target country of the product.
 */
targetCountry?: string,

/**
 * The title of the product.
 */
title?: string,

/**
 * Variant attributes for the item. Optional.
 */
variantAttributes?: content$OrderLineItemProductVariantAttribute[]
} 

declare interface content$TestOrderPaymentMethod {

/**
 * The card expiration month (January = 1, February = 2 etc.).
 */
expirationMonth?: number,

/**
 * The card expiration year (4-digit, e.g. 2015).
 */
expirationYear?: number,

/**
 * The last four digits of the card number.
 */
lastFourDigits?: string,

/**
 * The billing address.
 */
predefinedBillingAddress?: string,

/**
 * The type of instrument. Note that real orders might have different values than the four values accepted by createTestOrder.
 */
type?: string
} 

declare interface content$Value {

/**
 * The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.
 */
carrierRateName?: string,

/**
 * A flat rate. Can only be set if all other fields are not set.
 */
flatRate?: content$Price,

/**
 * If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.
 */
noShipping?: boolean,

/**
 * A percentage of the price represented as a number in decimal notation (e.g., "5.4"). Can only be set if all other fields are not set.
 */
pricePercentage?: string,

/**
 * The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set.
 */
subtableName?: string
} 

declare interface content$Weight {

/**
 * The weight unit.
 */
unit?: string,

/**
 * The weight represented as a number.
 */
value?: string
} 

declare interface content$AccountsResource {

/**
 * Returns information about the authenticated user.
 */
authinfo(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountsAuthInfoResponse>,

/**
 * Claims the website of a Merchant Center sub-account. This method can only be called for accounts to which the managing account has access: either the
 * managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
claimwebsite(
request: {

/**
 * The ID of the account whose website is claimed.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Only available to selected merchants. When set to True, this flag removes any existing claim on the requested website by another account and replaces
 * it with a claim from this account.
 */
overwrite?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountsClaimWebsiteResponse>,

/**
 * Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountsCustomBatchResponse>,

/**
 * Deletes a Merchant Center sub-account. This method can only be called for multi-client accounts.
 */
delete(
request: {

/**
 * The ID of the account.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Flag to delete sub-accounts with products. The default value is false.
 */
force?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Retrieves a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account
 * itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
get(
request: {

/**
 * The ID of the account.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Account>,

/**
 * Creates a Merchant Center sub-account. This method can only be called for multi-client accounts.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Account>,

/**
 * Lists the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of accounts to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountsListResponse>,

/**
 * Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account
 * itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch semantics.
 */
patch(
request: {

/**
 * The ID of the account.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Account>,

/**
 * Updates a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the managing account
 * itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
update(
request: {

/**
 * The ID of the account.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Account>
} 

declare interface content$AccountstatusesResource {
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountstatusesCustomBatchResponse>,

/**
 * Retrieves the status of a Merchant Center account. This method can only be called for accounts to which the managing account has access: either the
 * managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
get(
request: {

/**
 * The ID of the account.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountStatus>,

/**
 * Lists the statuses of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of account statuses to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountstatusesListResponse>
} 

declare interface content$AccounttaxResource {

/**
 * Retrieves and updates tax settings of multiple accounts in a single request.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccounttaxCustomBatchResponse>,

/**
 * Retrieves the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing
 * account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
get(
request: {

/**
 * The ID of the account for which to get/update account tax settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountTax>,

/**
 * Lists the tax settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of tax settings to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccounttaxListResponse>,

/**
 * Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing
 * account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch
 * semantics.
 */
patch(
request: {

/**
 * The ID of the account for which to get/update account tax settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountTax>,

/**
 * Updates the tax settings of the account. This method can only be called for accounts to which the managing account has access: either the managing
 * account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
update(
request: {

/**
 * The ID of the account for which to get/update account tax settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$AccountTax>
} 

declare interface content$DatafeedsResource {
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$DatafeedsCustomBatchResponse>,

/**
 * Deletes a datafeed configuration from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,
datafeedId: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Retrieves a datafeed configuration from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,
datafeedId: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Datafeed>,

/**
 * Registers a datafeed configuration with your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Datafeed>,

/**
 * Lists the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of products to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$DatafeedsListResponse>,

/**
 * Updates a datafeed configuration of your Merchant Center account. This method can only be called for non-multi-client accounts. This method supports
 * patch semantics.
 */
patch(
request: {

/**
 * Data format for the response.
 */
alt?: string,
datafeedId: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Datafeed>,

/**
 * Updates a datafeed configuration of your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
update(
request: {

/**
 * Data format for the response.
 */
alt?: string,
datafeedId: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Datafeed>
} 

declare interface content$DatafeedstatusesResource {
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$DatafeedstatusesCustomBatchResponse>,

/**
 * Retrieves the status of a datafeed from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is
 * required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
 */
country?: string,
datafeedId: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is
 * required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.
 */
language?: string,
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$DatafeedStatus>,

/**
 * Lists the statuses of the datafeeds in your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of products to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$DatafeedstatusesListResponse>
} 

declare interface content$InventoryResource {

/**
 * Updates price and availability for multiple products or stores in a single request. This operation does not update the expiration date of the products.
 * This method can only be called for non-multi-client accounts.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$InventoryCustomBatchResponse>,

/**
 * Updates price and availability of a product in your Merchant Center account. This operation does not update the expiration date of the product. This
 * method can only be called for non-multi-client accounts.
 */
set(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the product for which to update price and availability.
 */
productId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The code of the store for which to update price and availability. Use online to update price and availability of an online product.
 */
storeCode: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$InventorySetResponse>
} 

declare interface content$OrdersResource {

/**
 * Marks an order as acknowledged. This method can only be called for non-multi-client accounts.
 */
acknowledge(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersAcknowledgeResponse>,

/**
 * Sandbox only. Moves a test order from state "inProgress" to state "pendingShipment". This method can only be called for non-multi-client accounts.
 */
advancetestorder(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the test order to modify.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersAdvanceTestOrderResponse>,

/**
 * Cancels all line items in an order, making a full refund. This method can only be called for non-multi-client accounts.
 */
cancel(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order to cancel.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersCancelResponse>,

/**
 * Cancels a line item, making a full refund. This method can only be called for non-multi-client accounts.
 */
cancellineitem(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersCancelLineItemResponse>,

/**
 * Sandbox only. Creates a test order. This method can only be called for non-multi-client accounts.
 */
createtestorder(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersCreateTestOrderResponse>,

/**
 * Retrieves or modifies multiple orders in a single request. This method can only be called for non-multi-client accounts.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersCustomBatchResponse>,

/**
 * Retrieves an order from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Order>,

/**
 * Retrieves an order using merchant order id. This method can only be called for non-multi-client accounts.
 */
getbymerchantorderid(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * The merchant order id to be looked for.
 */
merchantOrderId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersGetByMerchantOrderIdResponse>,

/**
 * Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox. This method can only be called for
 * non-multi-client accounts.
 */
gettestordertemplate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * The name of the template to retrieve.
 */
templateName: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersGetTestOrderTemplateResponse>,

/**
 * Lists the orders in your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
list(
request: {

/**
 * Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that
 * have not been acknowledged.
 * We recommend using this filter set to false, in conjunction with the acknowledge call, such that only un-acknowledged orders are returned.
 */
acknowledged?: boolean,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250
 * orders per page.
 * Known issue: All List calls will return all Orders without limit regardless of the value of this field.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ordering of the returned list. The only supported value are placedDate desc and placedDate asc for now, which returns orders sorted by placement
 * date. "placedDate desc" stands for listing orders by placement date, from oldest to most recent. "placedDate asc" stands for listing orders by
 * placement date, from most recent to oldest. In future releases we'll support other sorting criteria.
 */
orderBy?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Obtains orders placed before this date (exclusively), in ISO 8601 format.
 */
placedDateEnd?: string,

/**
 * Obtains orders placed after this date (inclusively), in ISO 8601 format.
 */
placedDateStart?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * Obtains orders that match any of the specified statuses. Multiple values can be specified with comma separation. Additionally, please note that active
 * is a shortcut for pendingShipment and partiallyShipped, and completed is a shortcut for shipped , partiallyDelivered, delivered, partiallyReturned,
 * returned, and canceled.
 */
statuses?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersListResponse>,

/**
 * Refund a portion of the order, up to the full amount paid. This method can only be called for non-multi-client accounts.
 */
refund(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order to refund.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersRefundResponse>,

/**
 * Returns a line item. This method can only be called for non-multi-client accounts.
 */
returnlineitem(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersReturnLineItemResponse>,

/**
 * Marks line item(s) as shipped. This method can only be called for non-multi-client accounts.
 */
shiplineitems(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersShipLineItemsResponse>,

/**
 * Updates the merchant order ID for a given order. This method can only be called for non-multi-client accounts.
 */
updatemerchantorderid(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersUpdateMerchantOrderIdResponse>,

/**
 * Updates a shipment's status, carrier, and/or tracking ID. This method can only be called for non-multi-client accounts.
 */
updateshipment(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The ID of the order.
 */
orderId: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$OrdersUpdateShipmentResponse>
} 

declare interface content$ProductsResource {

/**
 * Retrieves, inserts, and deletes multiple products in a single request. This method can only be called for non-multi-client accounts.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ProductsCustomBatchResponse>,

/**
 * Deletes a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
delete(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the product.
 */
productId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>,

/**
 * Retrieves a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the product.
 */
productId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Product>,

/**
 * Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this
 * method updates that entry. This method can only be called for non-multi-client accounts.
 */
insert(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$Product>,

/**
 * Lists the products in your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
 */
includeInvalidInsertedItems?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of products to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ProductsListResponse>
} 

declare interface content$ProductstatusesResource {

/**
 * Gets the statuses of multiple products in a single request. This method can only be called for non-multi-client accounts.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Flag to include full product data in the results of this request. The default value is false.
 */
includeAttributes?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ProductstatusesCustomBatchResponse>,

/**
 * Gets the status of a product from your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
get(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Flag to include full product data in the result of this get request. The default value is false.
 */
includeAttributes?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * The ID of the product.
 */
productId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ProductStatus>,

/**
 * Lists the statuses of the products in your Merchant Center account. This method can only be called for non-multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Flag to include full product data in the results of the list request. The default value is false.
 */
includeAttributes?: boolean,

/**
 * Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).
 */
includeInvalidInsertedItems?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of product statuses to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ProductstatusesListResponse>
} 

declare interface content$ShippingsettingsResource {

/**
 * Retrieves and updates the shipping settings of multiple accounts in a single request.
 */
custombatch(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingsettingsCustomBatchResponse>,

/**
 * Retrieves the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the
 * managing account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
get(
request: {

/**
 * The ID of the account for which to get/update shipping settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingSettings>,

/**
 * Retrieves supported carriers and carrier services for an account.
 */
getsupportedcarriers(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the account for which to retrieve the supported carriers.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingsettingsGetSupportedCarriersResponse>,

/**
 * Lists the shipping settings of the sub-accounts in your Merchant Center account. This method can only be called for multi-client accounts.
 */
list(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of shipping settings to return in the response, used for paging.
 */
maxResults?: number,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The token returned by the previous request.
 */
pageToken?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingsettingsListResponse>,

/**
 * Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing
 * account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account. This method supports patch
 * semantics.
 */
patch(
request: {

/**
 * The ID of the account for which to get/update shipping settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingSettings>,

/**
 * Updates the shipping settings of the account. This method can only be called for accounts to which the managing account has access: either the managing
 * account itself for any Merchant Center account, or any sub-account when the managing account is a multi-client account.
 */
update(
request: {

/**
 * The ID of the account for which to get/update shipping settings.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Flag to run the request in dry-run mode.
 */
dryRun?: boolean,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The ID of the managing account.
 */
merchantId: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<content$ShippingSettings>
} 
    }
