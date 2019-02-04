declare module 'gapi.client.adexchangebuyer2' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        accounts: typeof client$accounts,
      }

/**
 * Load Ad Exchange Buyer API II v2beta1
 */
declare function client$load(name: "adexchangebuyer2", version: "v2beta1"): PromiseLike<void>


declare function client$load(name: "adexchangebuyer2", version: "v2beta1", callback: () => any): void


declare var client$accounts: adexchangebuyer2$adexchangebuyer2$AccountsResource;

declare interface adexchangebuyer2$AbsoluteDateRange {

/**
 * The end date of the range (inclusive).
 * Must be within the 30 days leading up to current date, and must be equal to
 * or after start_date.
 */
endDate?: adexchangebuyer2$Date,

/**
 * The start date of the range (inclusive).
 * Must be within the 30 days leading up to current date, and must be equal to
 * or before end_date.
 */
startDate?: adexchangebuyer2$Date
} 

declare interface adexchangebuyer2$AddDealAssociationRequest {

/**
 * The association between a creative and a deal that should be added.
 */
association?: adexchangebuyer2$CreativeDealAssociation
} 

declare interface adexchangebuyer2$AppContext {

/**
 * The app types this restriction applies to.
 */
appTypes?: string[]
} 

declare interface adexchangebuyer2$AuctionContext {

/**
 * The auction types this restriction applies to.
 */
auctionTypes?: string[]
} 

declare interface adexchangebuyer2$BidMetricsRow {

/**
 * The number of bids that Ad Exchange received from the buyer.
 */
bids?: adexchangebuyer2$MetricValue,

/**
 * The number of bids that were permitted to compete in the auction.
 */
bidsInAuction?: adexchangebuyer2$MetricValue,

/**
 * The number of bids for which the buyer was billed.
 */
billedImpressions?: adexchangebuyer2$MetricValue,

/**
 * The number of bids that won an impression.
 */
impressionsWon?: adexchangebuyer2$MetricValue,

/**
 * The number of bids for which the corresponding impression was measurable
 * for viewability (as defined by Active View).
 */
measurableImpressions?: adexchangebuyer2$MetricValue,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions,

/**
 * The number of bids for which the corresponding impression was viewable (as
 * defined by Active View).
 */
viewableImpressions?: adexchangebuyer2$MetricValue
} 

declare interface adexchangebuyer2$BidResponseWithoutBidsStatusRow {

/**
 * The number of impressions for which there was a bid response with the
 * specified status.
 */
impressionCount?: adexchangebuyer2$MetricValue,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions,

/**
 * The status specifying why the bid responses were considered to have no
 * applicable bids.
 */
status?: string
} 

declare interface adexchangebuyer2$CalloutStatusRow {

/**
 * The ID of the callout status.
 * See [callout-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/callout-status-codes).
 */
calloutStatusId?: number,

/**
 * The number of impressions for which there was a bid request or bid response
 * with the specified callout status.
 */
impressionCount?: adexchangebuyer2$MetricValue,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions
} 

declare interface adexchangebuyer2$Client {

/**
 * The globally-unique numerical ID of the client.
 * The value of this field is ignored in create and update operations.
 */
clientAccountId?: string,

/**
 * Name used to represent this client to publishers.
 * You may have multiple clients that map to the same entity,
 * but for each client the combination of `clientName` and entity
 * must be unique.
 * You can specify this field as empty.
 */
clientName?: string,

/**
 * Numerical identifier of the client entity.
 * The entity can be an advertiser, a brand, or an agency.
 * This identifier is unique among all the entities with the same type.
 * 
 * A list of all known advertisers with their identifiers is available in the
 * [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
 * file.
 * 
 * A list of all known brands with their identifiers is available in the
 * [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
 * file.
 * 
 * A list of all known agencies with their identifiers is available in the
 * [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
 * file.
 */
entityId?: string,

/**
 * The name of the entity. This field is automatically fetched based on
 * the type and ID.
 * The value of this field is ignored in create and update operations.
 */
entityName?: string,

/**
 * The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
 */
entityType?: string,

/**
 * The role which is assigned to the client buyer. Each role implies a set of
 * permissions granted to the client. Must be one of `CLIENT_DEAL_VIEWER`,
 * `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
 */
role?: string,

/**
 * The status of the client buyer.
 */
status?: string,

/**
 * Whether the client buyer will be visible to sellers.
 */
visibleToSeller?: boolean
} 

declare interface adexchangebuyer2$ClientUser {

/**
 * Numerical account ID of the client buyer
 * with which the user is associated; the
 * buyer must be a client of the current sponsor buyer.
 * The value of this field is ignored in an update operation.
 */
clientAccountId?: string,

/**
 * User's email address. The value of this field
 * is ignored in an update operation.
 */
email?: string,

/**
 * The status of the client user.
 */
status?: string,

/**
 * The unique numerical ID of the client user
 * that has accepted an invitation.
 * The value of this field is ignored in an update operation.
 */
userId?: string
} 

declare interface adexchangebuyer2$ClientUserInvitation {

/**
 * Numerical account ID of the client buyer
 * that the invited user is associated with.
 * The value of this field is ignored in create operations.
 */
clientAccountId?: string,

/**
 * The email address to which the invitation is sent. Email
 * addresses should be unique among all client users under each sponsor
 * buyer.
 */
email?: string,

/**
 * The unique numerical ID of the invitation that is sent to the user.
 * The value of this field is ignored in create operations.
 */
invitationId?: string
} 

declare interface adexchangebuyer2$Correction {

/**
 * The contexts for the correction.
 */
contexts?: adexchangebuyer2$ServingContext[],

/**
 * Additional details about what was corrected.
 */
details?: string[],

/**
 * The type of correction that was applied to the creative.
 */
type?: string
} 

declare interface adexchangebuyer2$Creative {

/**
 * The account that this creative belongs to.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
accountId?: string,

/**
 * The link to AdChoices destination page.
 */
adChoicesDestinationUrl?: string,

/**
 * The name of the company being advertised in the creative.
 */
advertiserName?: string,

/**
 * The agency ID for this creative.
 */
agencyId?: string,

/**
 * @OutputOnly The last update timestamp of the creative via API.
 */
apiUpdateTime?: string,

/**
 * All attributes for the ads that may be shown from this creative.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
attributes?: string[],

/**
 * The set of destination URLs for the creative.
 */
clickThroughUrls?: string[],

/**
 * @OutputOnly Shows any corrections that were applied to this creative.
 */
corrections?: adexchangebuyer2$Correction[],

/**
 * The buyer-defined creative ID of this creative.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
creativeId?: string,

/**
 * @OutputOnly The top-level deals status of this creative.
If disapproved, an entry for 'auctionType=DIRECT_DEALS' (or 'ALL') in
serving_restrictions will also exist. Note
that this may be nuanced with other contextual restrictions, in which case,
it may be preferable to read from serving_restrictions directly.
Can be used to filter the response of the
creatives.list
method.
 */
dealsStatus?: string,

/**
 * @OutputOnly Detected advertiser IDs, if any.
 */
detectedAdvertiserIds?: string[],

/**
 * @OutputOnly The detected domains for this creative.
 */
detectedDomains?: string[],

/**
 * @OutputOnly The detected languages for this creative. The order is arbitrary. The codes
are 2 or 5 characters and are documented at
https://developers.google.com/adwords/api/docs/appendix/languagecodes.
 */
detectedLanguages?: string[],

/**
 * @OutputOnly Detected product categories, if any.
See the ad-product-categories.txt file in the technical documentation
for a list of IDs.
 */
detectedProductCategories?: number[],

/**
 * @OutputOnly Detected sensitive categories, if any.
See the ad-sensitive-categories.txt file in the technical documentation for
a list of IDs. You should use these IDs along with the
excluded-sensitive-category field in the bid request to filter your bids.
 */
detectedSensitiveCategories?: number[],

/**
 * @OutputOnly The filtering stats for this creative.
 */
filteringStats?: adexchangebuyer2$FilteringStats,

/**
 * An HTML creative.
 */
html?: adexchangebuyer2$HtmlContent,

/**
 * The set of URLs to be called to record an impression.
 */
impressionTrackingUrls?: string[],

/**
 * A native creative.
 */
native?: adexchangebuyer2$NativeContent,

/**
 * @OutputOnly The top-level open auction status of this creative.
If disapproved, an entry for 'auctionType = OPEN_AUCTION' (or 'ALL') in
serving_restrictions will also exist. Note
that this may be nuanced with other contextual restrictions, in which case,
it may be preferable to read from serving_restrictions directly.
Can be used to filter the response of the
creatives.list
method.
 */
openAuctionStatus?: string,

/**
 * All restricted categories for the ads that may be shown from this creative.
 */
restrictedCategories?: string[],

/**
 * @OutputOnly The granular status of this ad in specific contexts.
A context here relates to where something ultimately serves (for example,
a physical location, a platform, an HTTPS vs HTTP request, or the type
of auction).
 */
servingRestrictions?: adexchangebuyer2$ServingRestriction[],

/**
 * All vendor IDs for the ads that may be shown from this creative.
 * See https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt
 * for possible values.
 */
vendorIds?: number[],

/**
 * @OutputOnly The version of this creative.
 */
version?: number,

/**
 * A video creative.
 */
video?: adexchangebuyer2$VideoContent
} 

declare interface adexchangebuyer2$CreativeDealAssociation {

/**
 * The account the creative belongs to.
 */
accountId?: string,

/**
 * The ID of the creative associated with the deal.
 */
creativeId?: string,

/**
 * The externalDealId for the deal associated with the creative.
 */
dealsId?: string
} 

declare interface adexchangebuyer2$CreativeStatusRow {

/**
 * The number of bids with the specified status.
 */
bidCount?: adexchangebuyer2$MetricValue,

/**
 * The ID of the creative status.
 * See [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
 */
creativeStatusId?: number,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions
} 

declare interface adexchangebuyer2$Date {

/**
 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
 * if specifying a year/month where the day is not significant.
 */
day?: number,

/**
 * Month of year. Must be from 1 to 12.
 */
month?: number,

/**
 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
 * a year.
 */
year?: number
} 

declare interface adexchangebuyer2$Disapproval {

/**
 * Additional details about the reason for disapproval.
 */
details?: string[],

/**
 * The categorized reason for disapproval.
 */
reason?: string
} 

declare interface adexchangebuyer2$FilterSet {

/**
 * An absolute date range, defined by a start date and an end date.
 * Interpreted relative to Pacific time zone.
 */
absoluteDateRange?: adexchangebuyer2$AbsoluteDateRange,

/**
 * The ID of the buyer account on which to filter; optional.
 */
buyerAccountId?: string,

/**
 * The ID of the creative on which to filter; optional.
 */
creativeId?: string,

/**
 * The ID of the deal on which to filter; optional.
 */
dealId?: string,

/**
 * The environment on which to filter; optional.
 */
environment?: string,

/**
 * The ID of the filter set; unique within the account of the filter set
 * owner.
 * The value of this field is ignored in create operations.
 */
filterSetId?: string,

/**
 * The format on which to filter; optional.
 */
format?: string,

/**
 * The account ID of the buyer who owns this filter set.
 * The value of this field is ignored in create operations.
 */
ownerAccountId?: string,

/**
 * The list of platforms on which to filter; may be empty. The filters
 * represented by multiple platforms are ORed together (i.e. if non-empty,
 * results must match any one of the platforms).
 */
platforms?: string[],

/**
 * An open-ended realtime time range, defined by the aggregation start
 * timestamp.
 */
realtimeTimeRange?: adexchangebuyer2$RealtimeTimeRange,

/**
 * A relative date range, defined by an offset from today and a duration.
 * Interpreted relative to Pacific time zone.
 */
relativeDateRange?: adexchangebuyer2$RelativeDateRange,

/**
 * The list of IDs of the seller (publisher) networks on which to filter;
 * may be empty. The filters represented by multiple seller network IDs are
 * ORed together (i.e. if non-empty, results must match any one of the
 * publisher networks).
 * See [seller-network-ids](https://developers.google.com/ad-exchange/rtb/downloads/seller-network-ids)
 * file for the set of existing seller network IDs.
 */
sellerNetworkIds?: number[],

/**
 * The granularity of time intervals if a time series breakdown is desired;
 * optional.
 */
timeSeriesGranularity?: string
} 

declare interface adexchangebuyer2$FilteredBidCreativeRow {

/**
 * The number of bids with the specified creative.
 */
bidCount?: adexchangebuyer2$MetricValue,

/**
 * The ID of the creative.
 */
creativeId?: string,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions
} 

declare interface adexchangebuyer2$FilteredBidDetailRow {

/**
 * The number of bids with the specified detail.
 */
bidCount?: adexchangebuyer2$MetricValue,

/**
 * The ID of the detail. The associated value can be looked up in the
 * dictionary file corresponding to the DetailType in the response message.
 */
detailId?: number,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions
} 

declare interface adexchangebuyer2$FilteringStats {

/**
 * The day during which the data was collected.
 * The data is collected from 00:00:00 to 23:59:59 PT.
 * During switches from PST to PDT and back, the day may
 * contain 23 or 25 hours of data instead of the usual 24.
 */
date?: adexchangebuyer2$Date,

/**
 * The set of filtering reasons for this date.
 */
reasons?: adexchangebuyer2$Reason[]
} 

declare interface adexchangebuyer2$HtmlContent {

/**
 * The height of the HTML snippet in pixels.
 */
height?: number,

/**
 * The HTML snippet that displays the ad when inserted in the web page.
 */
snippet?: string,

/**
 * The width of the HTML snippet in pixels.
 */
width?: number
} 

declare interface adexchangebuyer2$Image {

/**
 * Image height in pixels.
 */
height?: number,

/**
 * The URL of the image.
 */
url?: string,

/**
 * Image width in pixels.
 */
width?: number
} 

declare interface adexchangebuyer2$ImpressionMetricsRow {

/**
 * The number of impressions available to the buyer on Ad Exchange.
 * In some cases this value may be unavailable.
 */
availableImpressions?: adexchangebuyer2$MetricValue,

/**
 * The number of impressions for which Ad Exchange sent the buyer a bid
 * request.
 */
bidRequests?: adexchangebuyer2$MetricValue,

/**
 * The number of impressions that match the buyer's inventory pretargeting.
 */
inventoryMatches?: adexchangebuyer2$MetricValue,

/**
 * The number of impressions for which Ad Exchange received a response from
 * the buyer that contained at least one applicable bid.
 */
responsesWithBids?: adexchangebuyer2$MetricValue,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions,

/**
 * The number of impressions for which the buyer successfully sent a response
 * to Ad Exchange.
 */
successfulResponses?: adexchangebuyer2$MetricValue
} 

declare interface adexchangebuyer2$ListBidMetricsResponse {

/**
 * List of rows, each containing a set of bid metrics.
 */
bidMetricsRows?: adexchangebuyer2$BidMetricsRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListBidMetricsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.bidMetrics.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListBidResponseErrorsResponse {

/**
 * List of rows, with counts of bid responses aggregated by callout status.
 */
calloutStatusRows?: adexchangebuyer2$CalloutStatusRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListBidResponseErrorsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.bidResponseErrors.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListBidResponsesWithoutBidsResponse {

/**
 * List of rows, with counts of bid responses without bids aggregated by
 * status.
 */
bidResponseWithoutBidsStatusRows?: adexchangebuyer2$BidResponseWithoutBidsStatusRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListBidResponsesWithoutBidsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.bidResponsesWithoutBids.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListClientUserInvitationsResponse {

/**
 * The returned list of client users.
 */
invitations?: adexchangebuyer2$ClientUserInvitation[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListClientUserInvitationsRequest.pageToken
 * field in the subsequent call to the
 * clients.invitations.list
 * method to retrieve the next
 * page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListClientUsersResponse {

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListClientUsersRequest.pageToken
 * field in the subsequent call to the
 * clients.invitations.list
 * method to retrieve the next
 * page of results.
 */
nextPageToken?: string,

/**
 * The returned list of client users.
 */
users?: adexchangebuyer2$ClientUser[]
} 

declare interface adexchangebuyer2$ListClientsResponse {

/**
 * The returned list of clients.
 */
clients?: adexchangebuyer2$Client[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListClientsRequest.pageToken
 * field in the subsequent call to the
 * accounts.clients.list method
 * to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListCreativeStatusBreakdownByCreativeResponse {

/**
 * List of rows, with counts of bids with a given creative status aggregated
 * by creative.
 */
filteredBidCreativeRows?: adexchangebuyer2$FilteredBidCreativeRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListCreativeStatusBreakdownByCreativeRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.filteredBids.creatives.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListCreativeStatusBreakdownByDetailResponse {

/**
 * The type of detail that the detail IDs represent.
 */
detailType?: string,

/**
 * List of rows, with counts of bids with a given creative status aggregated
 * by detail.
 */
filteredBidDetailRows?: adexchangebuyer2$FilteredBidDetailRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListCreativeStatusBreakdownByDetailRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.filteredBids.details.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListCreativesResponse {

/**
 * The list of creatives.
 */
creatives?: adexchangebuyer2$Creative[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListCreativesRequest.page_token
 * field in the subsequent call to `ListCreatives` method to retrieve the next
 * page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListDealAssociationsResponse {

/**
 * The list of associations.
 */
associations?: adexchangebuyer2$CreativeDealAssociation[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListDealAssociationsRequest.page_token
 * field in the subsequent call to 'ListDealAssociation' method to retrieve
 * the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListFilterSetsResponse {

/**
 * The filter sets belonging to the buyer.
 */
filterSets?: adexchangebuyer2$FilterSet[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListFilterSetsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListFilteredBidRequestsResponse {

/**
 * List of rows, with counts of filtered bid requests aggregated by callout
 * status.
 */
calloutStatusRows?: adexchangebuyer2$CalloutStatusRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListFilteredBidRequestsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.filteredBidRequests.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListFilteredBidsResponse {

/**
 * List of rows, with counts of filtered bids aggregated by filtering reason
 * (i.e. creative status).
 */
creativeStatusRows?: adexchangebuyer2$CreativeStatusRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListFilteredBidsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.filteredBids.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListImpressionMetricsResponse {

/**
 * List of rows, each containing a set of impression metrics.
 */
impressionMetricsRows?: adexchangebuyer2$ImpressionMetricsRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListImpressionMetricsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.impressionMetrics.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListLosingBidsResponse {

/**
 * List of rows, with counts of losing bids aggregated by loss reason (i.e.
 * creative status).
 */
creativeStatusRows?: adexchangebuyer2$CreativeStatusRow[],

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListLosingBidsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.losingBids.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string
} 

declare interface adexchangebuyer2$ListNonBillableWinningBidsResponse {

/**
 * A token to retrieve the next page of results.
 * Pass this value in the
 * ListNonBillableWinningBidsRequest.pageToken
 * field in the subsequent call to the
 * accounts.filterSets.nonBillableWinningBids.list
 * method to retrieve the next page of results.
 */
nextPageToken?: string,

/**
 * List of rows, with counts of bids not billed aggregated by reason.
 */
nonBillableWinningBidStatusRows?: adexchangebuyer2$NonBillableWinningBidStatusRow[]
} 

declare interface adexchangebuyer2$LocationContext {

/**
 * IDs representing the geo location for this context.
 * Please refer to the
 * [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv)
 * file for different geo criteria IDs.
 */
geoCriteriaIds?: number[]
} 

declare interface adexchangebuyer2$MetricValue {

/**
 * The expected value of the metric.
 */
value?: string,

/**
 * The variance (i.e. square of the standard deviation) of the metric value.
 * If value is exact, variance is 0.
 * Can be used to calculate margin of error as a percentage of value, using
 * the following formula, where Z is the standard constant that depends on the
 * desired size of the confidence interval (e.g. for 90% confidence interval,
 * use Z = 1.645):
 * 
 * marginOfError = 100 &#42; Z &#42; sqrt(variance) / value
 */
variance?: string
} 

declare interface adexchangebuyer2$NativeContent {

/**
 * The name of the advertiser or sponsor, to be displayed in the ad creative.
 */
advertiserName?: string,

/**
 * The app icon, for app download ads.
 */
appIcon?: adexchangebuyer2$Image,

/**
 * A long description of the ad.
 */
body?: string,

/**
 * A label for the button that the user is supposed to click.
 */
callToAction?: string,

/**
 * The URL that the browser/SDK will load when the user clicks the ad.
 */
clickLinkUrl?: string,

/**
 * The URL to use for click tracking.
 */
clickTrackingUrl?: string,

/**
 * A short title for the ad.
 */
headline?: string,

/**
 * A large image.
 */
image?: adexchangebuyer2$Image,

/**
 * A smaller image, for the advertiser's logo.
 */
logo?: adexchangebuyer2$Image,

/**
 * The price of the promoted app including currency info.
 */
priceDisplayText?: string,

/**
 * The app rating in the app store. Must be in the range [0-5].
 */
starRating?: number,

/**
 * The URL to the app store to purchase/download the promoted app.
 */
storeUrl?: string,

/**
 * The URL to fetch a native video ad.
 */
videoUrl?: string
} 

declare interface adexchangebuyer2$NonBillableWinningBidStatusRow {

/**
 * The number of bids with the specified status.
 */
bidCount?: adexchangebuyer2$MetricValue,

/**
 * The values of all dimensions associated with metric values in this row.
 */
rowDimensions?: adexchangebuyer2$RowDimensions,

/**
 * The status specifying why the winning bids were not billed.
 */
status?: string
} 

declare interface adexchangebuyer2$PlatformContext {

/**
 * The platforms this restriction applies to.
 */
platforms?: string[]
} 

declare interface adexchangebuyer2$RealtimeTimeRange {

/**
 * The start timestamp of the real-time RTB metrics aggregation.
 */
startTimestamp?: string
} 

declare interface adexchangebuyer2$Reason {

/**
 * The number of times the creative was filtered for the status. The
 * count is aggregated across all publishers on the exchange.
 */
count?: string,

/**
 * The filtering status code. Please refer to the
 * [creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt)
 * file for different statuses.
 */
status?: number
} 

declare interface adexchangebuyer2$RelativeDateRange {

/**
 * The number of days in the requested date range. E.g. for a range spanning
 * today, 1. For a range spanning the last 7 days, 7.
 */
durationDays?: number,

/**
 * The end date of the filter set, specified as the number of days before
 * today. E.g. for a range where the last date is today, 0.
 */
offsetDays?: number
} 

declare interface adexchangebuyer2$RemoveDealAssociationRequest {

/**
 * The association between a creative and a deal that should be removed.
 */
association?: adexchangebuyer2$CreativeDealAssociation
} 

declare interface adexchangebuyer2$RowDimensions {

/**
 * The time interval that this row represents.
 */
timeInterval?: adexchangebuyer2$TimeInterval
} 

declare interface adexchangebuyer2$SecurityContext {

/**
 * The security types in this context.
 */
securities?: string[]
} 

declare interface adexchangebuyer2$ServingContext {

/**
 * Matches all contexts.
 */
all?: string,

/**
 * Matches impressions for a particular app type.
 */
appType?: adexchangebuyer2$AppContext,

/**
 * Matches impressions for a particular auction type.
 */
auctionType?: adexchangebuyer2$AuctionContext,

/**
 * Matches impressions coming from users &#42;or&#42; publishers in a specific
 * location.
 */
location?: adexchangebuyer2$LocationContext,

/**
 * Matches impressions coming from a particular platform.
 */
platform?: adexchangebuyer2$PlatformContext,

/**
 * Matches impressions for a particular security type.
 */
securityType?: adexchangebuyer2$SecurityContext
} 

declare interface adexchangebuyer2$ServingRestriction {

/**
 * The contexts for the restriction.
 */
contexts?: adexchangebuyer2$ServingContext[],

/**
 * Any disapprovals bound to this restriction.
 * Only present if status=DISAPPROVED.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
disapprovalReasons?: adexchangebuyer2$Disapproval[],

/**
 * The status of the creative in this context (for example, it has been
 * explicitly disapproved or is pending review).
 */
status?: string
} 

declare interface adexchangebuyer2$TimeInterval {

/**
 * The timestamp marking the end of the range (exclusive) for which data is
 * included.
 */
endTime?: string,

/**
 * The timestamp marking the start of the range (inclusive) for which data is
 * included.
 */
startTime?: string
} 

declare interface adexchangebuyer2$VideoContent {

/**
 * The URL to fetch a video ad.
 */
videoUrl?: string
} 

declare interface adexchangebuyer2$WatchCreativeRequest {

/**
 * The Pub/Sub topic to publish notifications to.
 * This topic must already exist and must give permission to
 * ad-exchange-buyside-reports@google.com to write to the topic.
 * This should be the full resource name in
 * "projects/{project_id}/topics/{topic_id}" format.
 */
topic?: string
} 

declare interface adexchangebuyer2$InvitationsResource {

/**
 * Creates and sends out an email invitation to access
 * an Ad Exchange client buyer account.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer that the user
 * should be associated with. (required)
 */
clientAccountId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ClientUserInvitation>,

/**
 * Retrieves an existing client user invitation.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer that the user invitation
 * to be retrieved is associated with. (required)
 */
clientAccountId: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Numerical identifier of the user invitation to retrieve. (required)
 */
invitationId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ClientUserInvitation>,

/**
 * Lists all the client users invitations for a client
 * with a given account ID.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer to list invitations for.
 * (required)
 * You must either specify a string representation of a
 * numerical account identifier or the `-` character
 * to list all the invitations for all the clients
 * of a given sponsor buyer.
 */
clientAccountId: string,

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
 * Requested page size. Server may return fewer clients than requested.
 * If unspecified, server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListClientUserInvitationsResponse.nextPageToken
 * returned from the previous call to the
 * clients.invitations.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListClientUserInvitationsResponse>
} 

declare interface adexchangebuyer2$UsersResource {

/**
 * Retrieves an existing client user.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer
 * that the user to be retrieved is associated with. (required)
 */
clientAccountId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * Numerical identifier of the user to retrieve. (required)
 */
userId: string
}): Request<adexchangebuyer2$ClientUser>,

/**
 * Lists all the known client users for a specified
 * sponsor buyer account ID.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the sponsor buyer of the client to list users for.
 * (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The account ID of the client buyer to list users for. (required)
 * You must specify either a string representation of a
 * numerical account identifier or the `-` character
 * to list all the client users for all the clients
 * of a given sponsor buyer.
 */
clientAccountId: string,

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
 * Requested page size. The server may return fewer clients than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListClientUsersResponse.nextPageToken
 * returned from the previous call to the
 * accounts.clients.users.list method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListClientUsersResponse>,

/**
 * Updates an existing client user.
 * Only the user status can be changed on update.
 */
update(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer that the user to be retrieved
 * is associated with. (required)
 */
clientAccountId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string,

/**
 * Numerical identifier of the user to retrieve. (required)
 */
userId: string
}): Request<adexchangebuyer2$ClientUser>
} 

declare interface adexchangebuyer2$ClientsResource {

/**
 * Creates a new client buyer.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Unique numerical account ID for the buyer of which the client buyer
 * is a customer; the sponsor buyer to create a client for. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Client>,

/**
 * Gets a client buyer with a given client account ID.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Numerical account ID of the client's sponsor buyer. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Numerical account ID of the client buyer to retrieve. (required)
 */
clientAccountId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Client>,

/**
 * Lists all the clients for the current sponsor buyer.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Unique numerical account ID of the sponsor buyer to list the clients for.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

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
 * Requested page size. The server may return fewer clients than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListClientsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.clients.list method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListClientsResponse>,

/**
 * Updates an existing client buyer.
 */
update(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Unique numerical account ID for the buyer of which the client buyer
 * is a customer; the sponsor buyer to update a client for. (required)
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Unique numerical account ID of the client to update. (required)
 */
clientAccountId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Client>,
invitations: adexchangebuyer2$InvitationsResource,
users: adexchangebuyer2$UsersResource
} 

declare interface adexchangebuyer2$DealAssociationsResource {

/**
 * Associate an existing deal with a creative.
 */
add(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account the creative belongs to.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The ID of the creative associated with the deal.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * List all creative-deal associations.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account to list the associations from.
 * Specify "-" to list all creatives the current user has access to.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The creative ID to list the associations from.
 * Specify "-" to list all creatives under the above account.
 */
creativeId: string,

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
 * Requested page size. Server may return fewer associations than requested.
 * If unspecified, server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListDealAssociationsResponse.next_page_token
 * returned from the previous call to 'ListDealAssociations' method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * An optional query string to filter deal associations. If no filter is
 * specified, all associations will be returned.
 * Supported queries are:
 * <ul>
 * <li>accountId=<i>account_id_string</i>
 * <li>creativeId=<i>creative_id_string</i>
 * <li>dealsId=<i>deals_id_string</i>
 * <li>dealsStatus:{approved, conditionally_approved, disapproved,
 * not_checked}
 * <li>openAuctionStatus:{approved, conditionally_approved, disapproved,
 * not_checked}
 * </ul>
 * Example: 'dealsId=12345 AND dealsStatus:disapproved'
 */
query?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListDealAssociationsResponse>,

/**
 * Remove the association between a deal and a creative.
 */
remove(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account the creative belongs to.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The ID of the creative associated with the deal.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>
} 

declare interface adexchangebuyer2$CreativesResource {

/**
 * Creates a creative.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account that this creative belongs to.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Indicates if multiple creatives can share an ID or not. Default is
 * NO_DUPLICATES (one ID per creative).
 */
duplicateIdMode?: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Creative>,

/**
 * Gets a creative.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account the creative belongs to.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The ID of the creative to retrieve.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Creative>,

/**
 * Lists creatives.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account to list the creatives from.
 * Specify "-" to list all creatives the current user has access to.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

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
 * Requested page size. The server may return fewer creatives than requested
 * (due to timeout constraint) even if more are available via another call.
 * If unspecified, server will pick an appropriate default.
 * Acceptable values are 1 to 1000, inclusive.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListCreativesResponse.next_page_token
 * returned from the previous call to 'ListCreatives' method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * An optional query string to filter creatives. If no filter is specified,
 * all active creatives will be returned.
 * Supported queries are:
 * <ul>
 * <li>accountId=<i>account_id_string</i>
 * <li>creativeId=<i>creative_id_string</i>
 * <li>dealsStatus: {approved, conditionally_approved, disapproved,
 * not_checked}
 * <li>openAuctionStatus: {approved, conditionally_approved, disapproved,
 * not_checked}
 * <li>attribute: {a numeric attribute from the list of attributes}
 * <li>disapprovalReason: {a reason from
 * DisapprovalReason
 * </ul>
 * Example: 'accountId=12345 AND (dealsStatus:disapproved AND
 * disapprovalReason:unacceptable_content) OR attribute:47'
 */
query?: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListCreativesResponse>,

/**
 * Stops watching a creative. Will stop push notifications being sent to the
 * topics when the creative changes status.
 */
stopWatching(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account of the creative to stop notifications for.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The creative ID of the creative to stop notifications for.
 * Specify "-" to specify stopping account level notifications.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * Updates a creative.
 */
update(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account that this creative belongs to.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The buyer-defined creative ID of this creative.
 * Can be used to filter the response of the
 * creatives.list
 * method.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$Creative>,

/**
 * Watches a creative. Will result in push notifications being sent to the
 * topic when the creative changes status.
 */
watch(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * The account of the creative to watch.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The creative ID to watch for status changes.
 * Specify "-" to watch all creatives under the above account.
 * If both creative-level and account-level notifications are
 * sent, only a single notification will be sent to the
 * creative-level notification topic.
 */
creativeId: string,

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
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,
dealAssociations: adexchangebuyer2$DealAssociationsResource,

/**
 * List all creatives associated with a specific reason for which bids were
 * filtered, with the number of bids filtered for each creative.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The ID of the creative status for which to retrieve a breakdown by
 * creative.
 * See
 * [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
 */
creativeStatusId: number,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListCreativeStatusBreakdownByCreativeResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.filteredBids.creatives.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListCreativeStatusBreakdownByCreativeResponse>
} 

declare interface adexchangebuyer2$BidMetricsResource {

/**
 * Lists all metrics that are measured in terms of number of bids.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListBidMetricsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.bidMetrics.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListBidMetricsResponse>
} 

declare interface adexchangebuyer2$BidResponseErrorsResource {

/**
 * List all errors that occurred in bid responses, with the number of bid
 * responses affected for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListBidResponseErrorsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.bidResponseErrors.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListBidResponseErrorsResponse>
} 

declare interface adexchangebuyer2$BidResponsesWithoutBidsResource {

/**
 * List all reasons for which bid responses were considered to have no
 * applicable bids, with the number of bid responses affected for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListBidResponsesWithoutBidsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.bidResponsesWithoutBids.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListBidResponsesWithoutBidsResponse>
} 

declare interface adexchangebuyer2$FilteredBidRequestsResource {

/**
 * List all reasons that caused a bid request not to be sent for an
 * impression, with the number of bid requests not sent for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListFilteredBidRequestsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.filteredBidRequests.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListFilteredBidRequestsResponse>
} 

declare interface adexchangebuyer2$DetailsResource {

/**
 * List all details associated with a specific reason for which bids were
 * filtered, with the number of bids filtered for each detail.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * The ID of the creative status for which to retrieve a breakdown by detail.
 * See
 * [creative-status-codes](https://developers.google.com/ad-exchange/rtb/downloads/creative-status-codes).
 * Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
 */
creativeStatusId: number,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListCreativeStatusBreakdownByDetailResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.filteredBids.details.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListCreativeStatusBreakdownByDetailResponse>
} 

declare interface adexchangebuyer2$FilteredBidsResource {

/**
 * List all reasons for which bids were filtered, with the number of bids
 * filtered for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListFilteredBidsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.filteredBids.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListFilteredBidsResponse>,
creatives: adexchangebuyer2$CreativesResource,
details: adexchangebuyer2$DetailsResource
} 

declare interface adexchangebuyer2$ImpressionMetricsResource {

/**
 * Lists all metrics that are measured in terms of number of impressions.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListImpressionMetricsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.impressionMetrics.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListImpressionMetricsResponse>
} 

declare interface adexchangebuyer2$LosingBidsResource {

/**
 * List all reasons for which bids lost in the auction, with the number of
 * bids that lost for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListLosingBidsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.losingBids.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListLosingBidsResponse>
} 

declare interface adexchangebuyer2$NonBillableWinningBidsResource {

/**
 * List all reasons for which winning bids were not billable, with the number
 * of bids not billed for each reason.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to apply.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListNonBillableWinningBidsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.nonBillableWinningBids.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListNonBillableWinningBidsResponse>
} 

declare interface adexchangebuyer2$FilterSetsResource {

/**
 * Creates the specified filter set for the account with the given account ID.
 */
create(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * Whether the filter set is transient, or should be persisted indefinitely.
 * By default, filter sets are not transient.
 * If transient, it will be available for at least 1 hour after creation.
 */
isTransient?: boolean,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$FilterSet>,

/**
 * Deletes the requested filter set from the account with the given account
 * ID.
 */
delete(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to delete.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<{}>,

/**
 * Retrieves the requested filter set for the account with the given account
 * ID.
 */
get(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

/**
 * Selector specifying which fields to include in a partial response.
 */
fields?: string,

/**
 * The ID of the filter set to get.
 */
filterSetId: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$FilterSet>,

/**
 * Lists all filter sets for the account with the given account ID.
 */
list(
request: {

/**
 * V1 error format.
 */
"$.xgafv"?: string,

/**
 * OAuth access token.
 */
access_token?: string,

/**
 * Account ID of the buyer.
 */
accountId: string,

/**
 * Data format for response.
 */
alt?: string,

/**
 * OAuth bearer token.
 */
bearer_token?: string,

/**
 * JSONP
 */
callback?: string,

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
 * Requested page size. The server may return fewer results than requested.
 * If unspecified, the server will pick an appropriate default.
 */
pageSize?: number,

/**
 * A token identifying a page of results the server should return.
 * Typically, this is the value of
 * ListFilterSetsResponse.nextPageToken
 * returned from the previous call to the
 * accounts.filterSets.list
 * method.
 */
pageToken?: string,

/**
 * Pretty-print response.
 */
pp?: boolean,

/**
 * Returns response with indentations and line breaks.
 */
prettyPrint?: boolean,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 */
quotaUser?: string,

/**
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<adexchangebuyer2$ListFilterSetsResponse>,
bidMetrics: adexchangebuyer2$BidMetricsResource,
bidResponseErrors: adexchangebuyer2$BidResponseErrorsResource,
bidResponsesWithoutBids: adexchangebuyer2$BidResponsesWithoutBidsResource,
filteredBidRequests: adexchangebuyer2$FilteredBidRequestsResource,
filteredBids: adexchangebuyer2$FilteredBidsResource,
impressionMetrics: adexchangebuyer2$ImpressionMetricsResource,
losingBids: adexchangebuyer2$LosingBidsResource,
nonBillableWinningBids: adexchangebuyer2$NonBillableWinningBidsResource
} 

declare interface adexchangebuyer2$AccountsResource {
clients: adexchangebuyer2$ClientsResource,
creatives: adexchangebuyer2$CreativesResource,
filterSets: adexchangebuyer2$FilterSetsResource
} 
    }
