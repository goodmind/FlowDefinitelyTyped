declare module 'gapi.client.doubleclickbidmanager' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        lineitems: typeof client$lineitems,
queries: typeof client$queries,
reports: typeof client$reports,
sdf: typeof client$sdf,
      }

/**
 * Load DoubleClick Bid Manager API v1
 */
declare function client$load(name: "doubleclickbidmanager", version: "v1"): PromiseLike<void>


declare function client$load(name: "doubleclickbidmanager", version: "v1", callback: () => any): void


declare var client$lineitems: doubleclickbidmanager$doubleclickbidmanager$LineitemsResource;

declare var client$queries: doubleclickbidmanager$doubleclickbidmanager$QueriesResource;

declare var client$reports: doubleclickbidmanager$doubleclickbidmanager$ReportsResource;

declare var client$sdf: doubleclickbidmanager$doubleclickbidmanager$SdfResource;

declare interface doubleclickbidmanager$DownloadLineItemsRequest {

/**
 * File specification (column names, types, order) in which the line items will be returned. Default to EWF.
 */
fileSpec?: string,

/**
 * Ids of the specified filter type used to filter line items to fetch. If omitted, all the line items will be returned.
 */
filterIds?: string[],

/**
 * Filter type used to filter line items to fetch.
 */
filterType?: string,

/**
 * Format in which the line items will be returned. Default to CSV.
 */
format?: string
} 

declare interface doubleclickbidmanager$DownloadLineItemsResponse {

/**
 * Retrieved line items in CSV format. For more information about file formats, see  Entity Write File Format.
 */
lineItems?: string
} 

declare interface doubleclickbidmanager$DownloadRequest {

/**
 * File types that will be returned.
 */
fileTypes?: string[],

/**
 * The IDs of the specified filter type. This is used to filter entities to fetch. At least one ID must be specified. Only one ID is allowed for the
 * ADVERTISER_ID filter type. For INSERTION_ORDER_ID or LINE_ITEM_ID filter types, all IDs must be from the same Advertiser.
 */
filterIds?: string[],

/**
 * Filter type used to filter line items to fetch.
 */
filterType?: string,

/**
 * SDF Version (column names, types, order) in which the entities will be returned. Default to 3.
 */
version?: string
} 

declare interface doubleclickbidmanager$DownloadResponse {

/**
 * Retrieved ad groups in SDF format.
 */
adGroups?: string,

/**
 * Retrieved ads in SDF format.
 */
ads?: string,

/**
 * Retrieved insertion orders in SDF format.
 */
insertionOrders?: string,

/**
 * Retrieved line items in SDF format.
 */
lineItems?: string
} 

declare interface doubleclickbidmanager$FilterPair {

/**
 * Filter type.
 */
type?: string,

/**
 * Filter value.
 */
value?: string
} 

declare interface doubleclickbidmanager$ListQueriesResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listQueriesResponse".
 */
kind?: string,

/**
 * Retrieved queries.
 */
client$queries?: doubleclickbidmanager$Query[]
} 

declare interface doubleclickbidmanager$ListReportsResponse {

/**
 * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#listReportsResponse".
 */
kind?: string,

/**
 * Retrieved reports.
 */
client$reports?: doubleclickbidmanager$Report[]
} 

declare interface doubleclickbidmanager$Parameters {

/**
 * Filters used to match traffic data in your report.
 */
filters?: doubleclickbidmanager$FilterPair[],

/**
 * Data is grouped by the filters listed in this field.
 */
groupBys?: string[],

/**
 * Whether to include data from Invite Media.
 */
includeInviteData?: boolean,

/**
 * Metrics to include as columns in your report.
 */
metrics?: string[],

/**
 * Report type.
 */
type?: string
} 

declare interface doubleclickbidmanager$Query {

/**
 * Identifies what kind of resource this is. Value: the fixed string "doubleclickbidmanager#query".
 */
kind?: string,

/**
 * Query metadata.
 */
metadata?: doubleclickbidmanager$QueryMetadata,

/**
 * Query parameters.
 */
params?: doubleclickbidmanager$Parameters,

/**
 * Query ID.
 */
queryId?: string,

/**
 * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored
 * otherwise.
 */
reportDataEndTimeMs?: string,

/**
 * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored
 * otherwise.
 */
reportDataStartTimeMs?: string,

/**
 * Information on how often and when to run a query.
 */
schedule?: doubleclickbidmanager$QuerySchedule,

/**
 * Canonical timezone code for report data time. Defaults to America/New_York.
 */
timezoneCode?: string
} 

declare interface doubleclickbidmanager$QueryMetadata {

/**
 * Range of report data.
 */
dataRange?: string,

/**
 * Format of the generated report.
 */
format?: string,

/**
 * The path to the location in Google Cloud Storage where the latest report is stored.
 */
googleCloudStoragePathForLatestReport?: string,

/**
 * The path in Google Drive for the latest report.
 */
googleDrivePathForLatestReport?: string,

/**
 * The time when the latest report started to run.
 */
latestReportRunTimeMs?: string,

/**
 * Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR
 * BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE
 * 
 * An locale string not in the list above will generate reports in English.
 */
locale?: string,

/**
 * Number of reports that have been generated for the query.
 */
reportCount?: number,

/**
 * Whether the latest report is currently running.
 */
running?: boolean,

/**
 * Whether to send an email notification when a report is ready. Default to false.
 */
sendNotification?: boolean,

/**
 * List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification.
 */
shareEmailAddress?: string[],

/**
 * Query title. It is used to name the reports generated from this query.
 */
title?: string
} 

declare interface doubleclickbidmanager$QuerySchedule {

/**
 * Datetime to periodically run the query until.
 */
endTimeMs?: string,

/**
 * How often the query is run.
 */
frequency?: string,

/**
 * Time of day at which a new report will be generated, represented as minutes past midnight. Range is 0 to 1439. Only applies to scheduled reports.
 */
nextRunMinuteOfDay?: number,

/**
 * Canonical timezone code for report generation time. Defaults to America/New_York.
 */
nextRunTimezoneCode?: string
} 

declare interface doubleclickbidmanager$Report {

/**
 * Key used to identify a report.
 */
key?: doubleclickbidmanager$ReportKey,

/**
 * Report metadata.
 */
metadata?: doubleclickbidmanager$ReportMetadata,

/**
 * Report parameters.
 */
params?: doubleclickbidmanager$Parameters
} 

declare interface doubleclickbidmanager$ReportFailure {

/**
 * Error code that shows why the report was not created.
 */
errorCode?: string
} 

declare interface doubleclickbidmanager$ReportKey {

/**
 * Query ID.
 */
queryId?: string,

/**
 * Report ID.
 */
reportId?: string
} 

declare interface doubleclickbidmanager$ReportMetadata {

/**
 * The path to the location in Google Cloud Storage where the report is stored.
 */
googleCloudStoragePath?: string,

/**
 * The ending time for the data that is shown in the report.
 */
reportDataEndTimeMs?: string,

/**
 * The starting time for the data that is shown in the report.
 */
reportDataStartTimeMs?: string,

/**
 * Report status.
 */
status?: doubleclickbidmanager$ReportStatus
} 

declare interface doubleclickbidmanager$ReportStatus {

/**
 * If the report failed, this records the cause.
 */
failure?: doubleclickbidmanager$ReportFailure,

/**
 * The time when this report either completed successfully or failed.
 */
finishTimeMs?: string,

/**
 * The file type of the report.
 */
format?: string,

/**
 * The state of the report.
 */
state?: string
} 

declare interface doubleclickbidmanager$RowStatus {

/**
 * Whether the stored entity is changed as a result of upload.
 */
changed?: boolean,

/**
 * Entity Id.
 */
entityId?: string,

/**
 * Entity name.
 */
entityName?: string,

/**
 * Reasons why the entity can't be uploaded.
 */
errors?: string[],

/**
 * Whether the entity is persisted.
 */
persisted?: boolean,

/**
 * Row number.
 */
rowNumber?: number
} 

declare interface doubleclickbidmanager$RunQueryRequest {

/**
 * Report data range used to generate the report.
 */
dataRange?: string,

/**
 * The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
 */
reportDataEndTimeMs?: string,

/**
 * The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if dataRange is CUSTOM_DATES and ignored otherwise.
 */
reportDataStartTimeMs?: string,

/**
 * Canonical timezone code for report data time. Defaults to America/New_York.
 */
timezoneCode?: string
} 

declare interface doubleclickbidmanager$UploadLineItemsRequest {

/**
 * Set to true to get upload status without actually persisting the line items.
 */
dryRun?: boolean,

/**
 * Format the line items are in. Default to CSV.
 */
format?: string,

/**
 * Line items in CSV to upload. Refer to  Entity Write File Format for more information on file format.
 */
lineItems?: string
} 

declare interface doubleclickbidmanager$UploadLineItemsResponse {

/**
 * Status of upload.
 */
uploadStatus?: doubleclickbidmanager$UploadStatus
} 

declare interface doubleclickbidmanager$UploadStatus {

/**
 * Reasons why upload can't be completed.
 */
errors?: string[],

/**
 * Per-row upload status.
 */
rowStatus?: doubleclickbidmanager$RowStatus[]
} 

declare interface doubleclickbidmanager$LineitemsResource {

/**
 * Retrieves line items in CSV format.
 */
downloadlineitems(
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
}): Request<doubleclickbidmanager$DownloadLineItemsResponse>,

/**
 * Uploads line items in CSV format.
 */
uploadlineitems(
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
}): Request<doubleclickbidmanager$UploadLineItemsResponse>
} 

declare interface doubleclickbidmanager$QueriesResource {

/**
 * Creates a query.
 */
createquery(
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
}): Request<doubleclickbidmanager$Query>,

/**
 * Deletes a stored query as well as the associated stored reports.
 */
deletequery(
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
 * Query ID to delete.
 */
queryId: string,

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
 * Retrieves a stored query.
 */
getquery(
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
 * Query ID to retrieve.
 */
queryId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<doubleclickbidmanager$Query>,

/**
 * Retrieves stored queries.
 */
listqueries(
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
}): Request<doubleclickbidmanager$ListQueriesResponse>,

/**
 * Runs a stored query to generate a report.
 */
runquery(
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
 * Query ID to run.
 */
queryId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<void>
} 

declare interface doubleclickbidmanager$ReportsResource {

/**
 * Retrieves stored reports.
 */
listreports(
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
 * Query ID with which the reports are associated.
 */
queryId: string,

/**
 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
 * Overrides userIp if both are provided.
 */
quotaUser?: string,

/**
 * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
 */
userIp?: string
}): Request<doubleclickbidmanager$ListReportsResponse>
} 

declare interface doubleclickbidmanager$SdfResource {

/**
 * Retrieves entities in SDF format.
 */
download(
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
}): Request<doubleclickbidmanager$DownloadResponse>
} 
    }
