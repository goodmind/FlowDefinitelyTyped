declare module 'gapi.client.adsensehost' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        accounts: typeof client$accounts,
adclients: typeof client$adclients,
associationsessions: typeof client$associationsessions,
customchannels: typeof client$customchannels,
reports: typeof client$reports,
urlchannels: typeof client$urlchannels,
      }

/**
 * Load AdSense Host API v4.1
 */
declare function client$load(name: "adsensehost", version: "v4.1"): PromiseLike<void>


declare function client$load(name: "adsensehost", version: "v4.1", callback: () => any): void


declare var client$accounts: adsensehost$adsensehost$AccountsResource;

declare var client$adclients: adsensehost$adsensehost$AdclientsResource;

declare var client$associationsessions: adsensehost$adsensehost$AssociationsessionsResource;

declare var client$customchannels: adsensehost$adsensehost$CustomchannelsResource;

declare var client$reports: adsensehost$adsensehost$ReportsResource;

declare var client$urlchannels: adsensehost$adsensehost$UrlchannelsResource;

declare interface adsensehost$Account {

/**
 * Unique identifier of this account.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#account.
 */
kind?: string,

/**
 * Name of this account.
 */
name?: string,

/**
 * Approval status of this account. One of: PENDING, APPROVED, DISABLED.
 */
status?: string
} 

declare interface adsensehost$Accounts {

/**
 * ETag of this response for caching purposes.
 */
etag?: string,

/**
 * The accounts returned in this list response.
 */
items?: adsensehost$Account[],

/**
 * Kind of list this is, in this case adsensehost#accounts.
 */
kind?: string
} 

declare interface adsensehost$AdClient {

/**
 * Whether this ad client is opted in to ARC.
 */
arcOptIn?: boolean,

/**
 * Unique identifier of this ad client.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#adClient.
 */
kind?: string,

/**
 * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
 */
productCode?: string,

/**
 * Whether this ad client supports being reported on.
 */
supportsReporting?: boolean
} 

declare interface adsensehost$AdClients {

/**
 * ETag of this response for caching purposes.
 */
etag?: string,

/**
 * The ad clients returned in this list response.
 */
items?: adsensehost$AdClient[],

/**
 * Kind of list this is, in this case adsensehost#adClients.
 */
kind?: string,

/**
 * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
 */
nextPageToken?: string
} 

declare interface adsensehost$AdCode {

/**
 * The ad code snippet.
 */
adCode?: string,

/**
 * Kind this is, in this case adsensehost#adCode.
 */
kind?: string
} 

declare interface adsensehost$AdStyle {

/**
 * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
 */
colors?: {

/**
 * The color of the ad background.
 */
background?: string,

/**
 * The color of the ad border.
 */
border?: string,

/**
 * The color of the ad text.
 */
text?: string,

/**
 * The color of the ad title.
 */
title?: string,

/**
 * The color of the ad url.
 */
url?: string
},

/**
 * The style of the corners in the ad (deprecated: never populated, ignored).
 */
corners?: string,

/**
 * The font which is included in the style.
 */
font?: {

/**
 * The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA.
 */
family?: string,

/**
 * The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE.
 */
size?: string
},

/**
 * Kind this is, in this case adsensehost#adStyle.
 */
kind?: string
} 

declare interface adsensehost$AdUnit {

/**
 * Identity code of this ad unit, not necessarily unique across ad clients.
 */
code?: string,

/**
 * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
 */
contentAdsSettings?: {

/**
 * The backup option to be used in instances where no ad is available.
 */
backupOption?: {

/**
 * Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
 */
color?: string,

/**
 * Type of the backup option. Possible values are BLANK, COLOR and URL.
 */
type?: string,

/**
 * URL to use when type is set to URL.
 */
url?: string
},

/**
 * Size of this ad unit. Size values are in the form SIZE_{width}_{height}.
 */
size?: string,

/**
 * Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.
 */
type?: string
},

/**
 * Custom style information specific to this ad unit.
 */
customStyle?: adsensehost$AdStyle,

/**
 * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#adUnit.
 */
kind?: string,

/**
 * Settings specific to WAP mobile content ads (AFMC - deprecated).
 */
mobileContentAdsSettings?: {

/**
 * The markup language to use for this ad unit.
 */
markupLanguage?: string,

/**
 * The scripting language to use for this ad unit.
 */
scriptingLanguage?: string,

/**
 * Size of this ad unit.
 */
size?: string,

/**
 * Type of this ad unit.
 */
type?: string
},

/**
 * Name of this ad unit.
 */
name?: string,

/**
 * Status of this ad unit. Possible values are:
 * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
 * 
 * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
 * 
 * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
 */
status?: string
} 

declare interface adsensehost$AdUnits {

/**
 * ETag of this response for caching purposes.
 */
etag?: string,

/**
 * The ad units returned in this list response.
 */
items?: adsensehost$AdUnit[],

/**
 * Kind of list this is, in this case adsensehost#adUnits.
 */
kind?: string,

/**
 * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
 */
nextPageToken?: string
} 

declare interface adsensehost$AssociationSession {

/**
 * Hosted account id of the associated publisher after association. Present if status is ACCEPTED.
 */
accountId?: string,

/**
 * Unique identifier of this association session.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#associationSession.
 */
kind?: string,

/**
 * The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)
 */
productCodes?: string[],

/**
 * Redirect URL of this association session. Used to redirect users into the AdSense association flow.
 */
redirectUrl?: string,

/**
 * Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.
 */
status?: string,

/**
 * The preferred locale of the user themselves when going through the AdSense association flow.
 */
userLocale?: string,

/**
 * The locale of the user's hosted website.
 */
websiteLocale?: string,

/**
 * The URL of the user's hosted website.
 */
websiteUrl?: string
} 

declare interface adsensehost$CustomChannel {

/**
 * Code of this custom channel, not necessarily unique across ad clients.
 */
code?: string,

/**
 * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#customChannel.
 */
kind?: string,

/**
 * Name of this custom channel.
 */
name?: string
} 

declare interface adsensehost$CustomChannels {

/**
 * ETag of this response for caching purposes.
 */
etag?: string,

/**
 * The custom channels returned in this list response.
 */
items?: adsensehost$CustomChannel[],

/**
 * Kind of list this is, in this case adsensehost#customChannels.
 */
kind?: string,

/**
 * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
 */
nextPageToken?: string
} 

declare interface adsensehost$Report {

/**
 * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
 */
averages?: string[],

/**
 * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for
 * each metric in the request.
 */
headers?: Array<{

/**
 * The currency of this column. Only present if the header type is METRIC_CURRENCY.
 */
currency?: string,

/**
 * The name of the header.
 */
name?: string,

/**
 * The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
 */
type?: string
}>,

/**
 * Kind this is, in this case adsensehost#report.
 */
kind?: string,

/**
 * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The
 * dimension cells contain strings, and the metric cells contain numbers.
 */
rows?: string[][],

/**
 * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or
 * the report row limit.
 */
totalMatchedRows?: string,

/**
 * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
 */
totals?: string[],

/**
 * Any warnings associated with generation of the report.
 */
warnings?: string[]
} 

declare interface adsensehost$UrlChannel {

/**
 * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
 */
id?: string,

/**
 * Kind of resource this is, in this case adsensehost#urlChannel.
 */
kind?: string,

/**
 * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
 */
urlPattern?: string
} 

declare interface adsensehost$UrlChannels {

/**
 * ETag of this response for caching purposes.
 */
etag?: string,

/**
 * The URL channels returned in this list response.
 */
items?: adsensehost$UrlChannel[],

/**
 * Kind of list this is, in this case adsensehost#urlChannels.
 */
kind?: string,

/**
 * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
 */
nextPageToken?: string
} 

declare interface adsensehost$AdclientsResource {

/**
 * Get information about one of the ad clients in the specified publisher's AdSense account.
 */
get(
request: {

/**
 * Account which contains the ad client.
 */
accountId: string,

/**
 * Ad client to get.
 */
adClientId: string,

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
}): Request<adsensehost$AdClient>,

/**
 * List all hosted ad clients in the specified hosted account.
 */
list(
request: {

/**
 * Account for which to list ad clients.
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
 * The maximum number of ad clients to include in the response, used for paging.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
 * response.
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
}): Request<adsensehost$AdClients>,

/**
 * Get information about one of the ad clients in the Host AdSense account.
 */
get(
request: {

/**
 * Ad client to get.
 */
adClientId: string,

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
}): Request<adsensehost$AdClient>,

/**
 * List all host ad clients in this AdSense account.
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
 * The maximum number of ad clients to include in the response, used for paging.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
 * response.
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
}): Request<adsensehost$AdClients>
} 

declare interface adsensehost$AdunitsResource {

/**
 * Delete the specified ad unit from the specified publisher AdSense account.
 */
delete(
request: {

/**
 * Account which contains the ad unit.
 */
accountId: string,

/**
 * Ad client for which to get ad unit.
 */
adClientId: string,

/**
 * Ad unit to delete.
 */
adUnitId: string,

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
}): Request<adsensehost$AdUnit>,

/**
 * Get the specified host ad unit in this AdSense account.
 */
get(
request: {

/**
 * Account which contains the ad unit.
 */
accountId: string,

/**
 * Ad client for which to get ad unit.
 */
adClientId: string,

/**
 * Ad unit to get.
 */
adUnitId: string,

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
}): Request<adsensehost$AdUnit>,

/**
 * Get ad code for the specified ad unit, attaching the specified host custom channels.
 */
getAdCode(
request: {

/**
 * Account which contains the ad client.
 */
accountId: string,

/**
 * Ad client with contains the ad unit.
 */
adClientId: string,

/**
 * Ad unit to get the code for.
 */
adUnitId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Host custom channel to attach to the ad code.
 */
hostCustomChannelId?: string,

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
}): Request<adsensehost$AdCode>,

/**
 * Insert the supplied ad unit into the specified publisher AdSense account.
 */
insert(
request: {

/**
 * Account which will contain the ad unit.
 */
accountId: string,

/**
 * Ad client into which to insert the ad unit.
 */
adClientId: string,

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
}): Request<adsensehost$AdUnit>,

/**
 * List all ad units in the specified publisher's AdSense account.
 */
list(
request: {

/**
 * Account which contains the ad client.
 */
accountId: string,

/**
 * Ad client for which to list ad units.
 */
adClientId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Whether to include inactive ad units. Default: true.
 */
includeInactive?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * The maximum number of ad units to include in the response, used for paging.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
 * response.
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
}): Request<adsensehost$AdUnits>,

/**
 * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
 */
patch(
request: {

/**
 * Account which contains the ad client.
 */
accountId: string,

/**
 * Ad client which contains the ad unit.
 */
adClientId: string,

/**
 * Ad unit to get.
 */
adUnitId: string,

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
}): Request<adsensehost$AdUnit>,

/**
 * Update the supplied ad unit in the specified publisher AdSense account.
 */
update(
request: {

/**
 * Account which contains the ad client.
 */
accountId: string,

/**
 * Ad client which contains the ad unit.
 */
adClientId: string,

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
}): Request<adsensehost$AdUnit>
} 

declare interface adsensehost$ReportsResource {

/**
 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
 * specify "alt=csv" as a query parameter.
 */
generate(
request: {

/**
 * Hosted account upon which to report.
 */
accountId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Dimensions to base the report on.
 */
dimension?: string,

/**
 * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
 */
endDate: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Filters to be run on the report.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
 */
locale?: string,

/**
 * The maximum number of rows of report data to return.
 */
maxResults?: number,

/**
 * Numeric columns to include in the report.
 */
metric?: string,

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
 * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no
 * prefix is specified, the column is sorted ascending.
 */
sort?: string,

/**
 * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
 */
startDate: string,

/**
 * Index of the first row of report data to return.
 */
startIndex?: number,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<adsensehost$Report>,

/**
 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
 * specify "alt=csv" as a query parameter.
 */
generate(
request: {

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Dimensions to base the report on.
 */
dimension?: string,

/**
 * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
 */
endDate: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Filters to be run on the report.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
 */
locale?: string,

/**
 * The maximum number of rows of report data to return.
 */
maxResults?: number,

/**
 * Numeric columns to include in the report.
 */
metric?: string,

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
 * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no
 * prefix is specified, the column is sorted ascending.
 */
sort?: string,

/**
 * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
 */
startDate: string,

/**
 * Index of the first row of report data to return.
 */
startIndex?: number,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<adsensehost$Report>
} 

declare interface adsensehost$AccountsResource {

/**
 * Get information about the selected associated AdSense account.
 */
get(
request: {

/**
 * Account to get information about.
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
}): Request<adsensehost$Account>,

/**
 * List hosted accounts associated with this AdSense account by ad client id.
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
 * Ad clients to list accounts for.
 */
filterAdClientId: string,

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
}): Request<adsensehost$Accounts>,
client$adclients: adsensehost$AdclientsResource,
adunits: adsensehost$AdunitsResource,
client$reports: adsensehost$ReportsResource
} 

declare interface adsensehost$AssociationsessionsResource {

/**
 * Create an association session for initiating an association with an AdSense user.
 */
start(
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
 * Products to associate with the user.
 */
productCode: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string,

/**
 * The preferred locale of the user.
 */
userLocale?: string,

/**
 * The locale of the user's hosted website.
 */
websiteLocale?: string,

/**
 * The URL of the user's hosted website.
 */
websiteUrl: string
}): Request<adsensehost$AssociationSession>,

/**
 * Verify an association session after the association callback returns from AdSense signup.
 */
verify(
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
 * The token returned to the association callback URL.
 */
token: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<adsensehost$AssociationSession>
} 

declare interface adsensehost$CustomchannelsResource {

/**
 * Delete a specific custom channel from the host AdSense account.
 */
delete(
request: {

/**
 * Ad client from which to delete the custom channel.
 */
adClientId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Custom channel to delete.
 */
customChannelId: string,

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
}): Request<adsensehost$CustomChannel>,

/**
 * Get a specific custom channel from the host AdSense account.
 */
get(
request: {

/**
 * Ad client from which to get the custom channel.
 */
adClientId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Custom channel to get.
 */
customChannelId: string,

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
}): Request<adsensehost$CustomChannel>,

/**
 * Add a new custom channel to the host AdSense account.
 */
insert(
request: {

/**
 * Ad client to which the new custom channel will be added.
 */
adClientId: string,

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
}): Request<adsensehost$CustomChannel>,

/**
 * List all host custom channels in this AdSense account.
 */
list(
request: {

/**
 * Ad client for which to list custom channels.
 */
adClientId: string,

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
 * The maximum number of custom channels to include in the response, used for paging.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
 * previous response.
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
}): Request<adsensehost$CustomChannels>,

/**
 * Update a custom channel in the host AdSense account. This method supports patch semantics.
 */
patch(
request: {

/**
 * Ad client in which the custom channel will be updated.
 */
adClientId: string,

/**
 * Data format for the response.
 */
alt?: string,

/**
 * Custom channel to get.
 */
customChannelId: string,

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
}): Request<adsensehost$CustomChannel>,

/**
 * Update a custom channel in the host AdSense account.
 */
update(
request: {

/**
 * Ad client in which the custom channel will be updated.
 */
adClientId: string,

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
}): Request<adsensehost$CustomChannel>
} 

declare interface adsensehost$UrlchannelsResource {

/**
 * Delete a URL channel from the host AdSense account.
 */
delete(
request: {

/**
 * Ad client from which to delete the URL channel.
 */
adClientId: string,

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
 * URL channel to delete.
 */
urlChannelId: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<adsensehost$UrlChannel>,

/**
 * Add a new URL channel to the host AdSense account.
 */
insert(
request: {

/**
 * Ad client to which the new URL channel will be added.
 */
adClientId: string,

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
}): Request<adsensehost$UrlChannel>,

/**
 * List all host URL channels in the host AdSense account.
 */
list(
request: {

/**
 * Ad client for which to list URL channels.
 */
adClientId: string,

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
 * The maximum number of URL channels to include in the response, used for paging.
 */
maxResults?: number,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
 * previous response.
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
}): Request<adsensehost$UrlChannels>
} 
    }
