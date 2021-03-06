declare module "gapi.client.bigquerydatatransfer" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load BigQuery Data Transfer API v1
   */
  declare function gapi$client$load(
    name: "bigquerydatatransfer",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "bigquerydatatransfer",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: bigquerydatatransfer$ProjectsResource;

  declare interface gapi$client$bigquerydatatransfer$CheckValidCredsResponse {
    /**
     * If set to `true`, the credentials exist and are valid.
     */
    hasValidCreds?: boolean;
  }

  declare interface gapi$client$bigquerydatatransfer$DataSource {
    /**
     * Indicates the type of authorization.
     */
    authorizationType?: string;

    /**
     * Data source client id which should be used to receive refresh token.
     * When not supplied, no offline credentials are populated for data transfer.
     */
    clientId?: string;

    /**
     * Specifies whether the data source supports automatic data refresh for the
     * past few days, and how it's supported.
     * For some data sources, data might not be complete until a few days later,
     * so it's useful to refresh data automatically.
     */
    dataRefreshType?: string;

    /**
     * Data source id.
     */
    dataSourceId?: string;

    /**
     * Default data refresh window on days.
     * Only meaningful when `data_refresh_type` = `SLIDING_WINDOW`.
     */
    defaultDataRefreshWindowDays?: number;

    /**
     * Default data transfer schedule.
     * Examples of valid schedules include:
     * `1st,3rd monday of month 15:30`,
     * `every wed,fri of jan,jun 13:15`, and
     * `first sunday of quarter 00:00`.
     */
    defaultSchedule?: string;

    /**
     * User friendly data source description string.
     */
    description?: string;

    /**
     * User friendly data source name.
     */
    displayName?: string;

    /**
     * Url for the help document for this data source.
     */
    helpUrl?: string;

    /**
     * Disables backfilling and manual run scheduling
     * for the data source.
     */
    manualRunsDisabled?: boolean;

    /**
     * The minimum interval between two consecutive scheduled runs.
     */
    minimumScheduleInterval?: string;

    /**
     * Data source resource name.
     */
    name?: string;

    /**
     * Data source parameters.
     */
    parameters?: bigquerydatatransfer$DataSourceParameter[];

    /**
     * Api auth scopes for which refresh token needs to be obtained. Only valid
     * when `client_id` is specified. Ignored otherwise. These are scopes needed
     * by a data source to prepare data and ingest them into BigQuery,
     * e.g., https://www.googleapis.com/auth/bigquery
     */
    scopes?: string[];

    /**
     * Specifies whether the data source supports a user defined schedule, or
     * operates on the default schedule.
     * When set to `true`, user can override default schedule.
     */
    supportsCustomSchedule?: boolean;

    /**
     * Indicates whether the data source supports multiple transfers
     * to different BigQuery targets.
     */
    supportsMultipleTransfers?: boolean;

    /**
     * Transfer type. Currently supports only batch transfers,
     * which are transfers that use the BigQuery batch APIs (load or
     * query) to ingest the data.
     */
    transferType?: string;

    /**
     * The number of seconds to wait for an update from the data source
     * before BigQuery marks the transfer as failed.
     */
    updateDeadlineSeconds?: number;
  }

  declare interface gapi$client$bigquerydatatransfer$DataSourceParameter {
    /**
     * All possible values for the parameter.
     */
    allowedValues?: string[];

    /**
     * Parameter description.
     */
    description?: string;

    /**
     * Parameter display name in the user interface.
     */
    displayName?: string;

    /**
     * When parameter is a record, describes child fields.
     */
    fields?: gapi$client$bigquerydatatransfer$DataSourceParameter[];

    /**
     * Cannot be changed after initial creation.
     */
    immutable?: boolean;

    /**
     * For integer and double values specifies maxminum allowed value.
     */
    maxValue?: number;

    /**
     * For integer and double values specifies minimum allowed value.
     */
    minValue?: number;

    /**
     * Parameter identifier.
     */
    paramId?: string;

    /**
     * If set to true, schema should be taken from the parent with the same
     * parameter_id. Only applicable when parameter type is RECORD.
     */
    recurse?: boolean;

    /**
     * Can parameter have multiple values.
     */
    repeated?: boolean;

    /**
     * Is parameter required.
     */
    required?: boolean;

    /**
     * Parameter type.
     */
    type?: string;

    /**
     * Description of the requirements for this field, in case the user input does
     * not fulfill the regex pattern or min/max values.
     */
    validationDescription?: string;

    /**
     * URL to a help document to further explain the naming requirements.
     */
    validationHelpUrl?: string;

    /**
     * Regular expression which can be used for parameter validation.
     */
    validationRegex?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$ListDataSourcesResponse {
    /**
     * List of supported data sources and their transfer settings.
     */
    dataSources?: gapi$client$bigquerydatatransfer$DataSource[];

    /**
     * Output only. The next-pagination token. For multiple-page list results,
     * this token can be used as the
     * `ListDataSourcesRequest.page_token`
     * to request the next page of list results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: bigquerydatatransfer$Location[];

    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$ListTransferConfigsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results,
     * this token can be used as the
     * `ListTransferConfigsRequest.page_token`
     * to request the next page of list results.
     */
    nextPageToken?: string;

    /**
     * Output only. The stored pipeline transfer configurations.
     */
    transferConfigs?: bigquerydatatransfer$TransferConfig[];
  }

  declare interface gapi$client$bigquerydatatransfer$ListTransferLogsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results,
     * this token can be used as the
     * `GetTransferRunLogRequest.page_token`
     * to request the next page of list results.
     */
    nextPageToken?: string;

    /**
     * Output only. The stored pipeline transfer messages.
     */
    transferMessages?: bigquerydatatransfer$TransferMessage[];
  }

  declare interface gapi$client$bigquerydatatransfer$ListTransferRunsResponse {
    /**
     * Output only. The next-pagination token. For multiple-page list results,
     * this token can be used as the
     * `ListTransferRunsRequest.page_token`
     * to request the next page of list results.
     */
    nextPageToken?: string;

    /**
     * Output only. The stored pipeline transfer runs.
     */
    transferRuns?: bigquerydatatransfer$TransferRun[];
  }

  declare interface gapi$client$bigquerydatatransfer$Location {
    /**
     * Cross-service attributes for the location. For example
     *
     * {"cloud.googleapis.com/region": "us-east1"}
     */
    labels?: Record<string, string>;

    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string;

    /**
     * Service-specific metadata. For example the available capacity at the given
     * location.
     */
    metadata?: Record<string, any>;

    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$ScheduleTransferRunsRequest {
    /**
     * End time of the range of transfer runs. For example,
     * `"2017-05-30T00:00:00+00:00"`.
     */
    endTime?: string;

    /**
     * Start time of the range of transfer runs. For example,
     * `"2017-05-25T00:00:00+00:00"`.
     */
    startTime?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$ScheduleTransferRunsResponse {
    /**
     * The transfer runs that were scheduled.
     */
    runs?: bigquerydatatransfer$TransferRun[];
  }

  declare interface gapi$client$bigquerydatatransfer$TransferConfig {
    /**
     * The number of days to look back to automatically refresh the data.
     * For example, if `data_refresh_window_days = 10`, then every day
     * BigQuery reingests data for [today-10, today-1], rather than ingesting data
     * for just [today-1].
     * Only valid if the data source supports the feature. Set the value to  0
     * to use the default value.
     */
    dataRefreshWindowDays?: number;

    /**
     * Data source id. Cannot be changed once data transfer is created.
     */
    dataSourceId?: string;

    /**
     * Output only. Region in which BigQuery dataset is located.
     */
    datasetRegion?: string;

    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string;

    /**
     * Is this config disabled. When set to true, no runs are scheduled
     * for a given transfer.
     */
    disabled?: boolean;

    /**
     * User specified display name for the data transfer.
     */
    displayName?: string;

    /**
     * The resource name of the transfer config.
     * Transfer config names have the form
     * `projects/{project_id}/transferConfigs/{config_id}`.
     * Where `config_id` is usually a uuid, even though it is not
     * guaranteed or required. The name is ignored when creating a transfer
     * config.
     */
    name?: string;

    /**
     * Output only. Next time when data transfer will run.
     */
    nextRunTime?: string;

    /**
     * Data transfer specific parameters.
     */
    params?: Record<string, any>;

    /**
     * Data transfer schedule.
     * If the data source does not support a custom schedule, this should be
     * empty. If it is empty, the default value for the data source will be
     * used.
     * The specified times are in UTC.
     * Examples of valid format:
     * `1st,3rd monday of month 15:30`,
     * `every wed,fri of jan,jun 13:15`, and
     * `first sunday of quarter 00:00`.
     * See more explanation about the format here:
     * https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
     * NOTE: the granularity should be at least 8 hours, or less frequent.
     */
    schedule?: string;

    /**
     * Output only. State of the most recently updated transfer run.
     */
    state?: string;

    /**
     * Output only. Data transfer modification time. Ignored by server on input.
     */
    updateTime?: string;

    /**
     * Output only. Unique ID of the user on whose behalf transfer is done.
     * Applicable only to data sources that do not support service accounts.
     * When set to 0, the data source service account credentials are used.
     */
    userId?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$TransferMessage {
    /**
     * Message text.
     */
    messageText?: string;

    /**
     * Time when message was logged.
     */
    messageTime?: string;

    /**
     * Message severity.
     */
    severity?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$TransferRun {
    /**
     * Output only. Data source id.
     */
    dataSourceId?: string;

    /**
     * Output only. Region in which BigQuery dataset is located.
     */
    datasetRegion?: string;

    /**
     * The BigQuery target dataset id.
     */
    destinationDatasetId?: string;

    /**
     * Output only. Time when transfer run ended.
     * Parameter ignored by server for input requests.
     */
    endTime?: string;

    /**
     * The resource name of the transfer run.
     * Transfer run names have the form
     * `projects/{project_id}/locations/{location}/transferConfigs/{config_id}/runs/{run_id}`.
     * The name is ignored when creating a transfer run.
     */
    name?: string;

    /**
     * Data transfer specific parameters.
     */
    params?: Record<string, any>;

    /**
     * For batch transfer runs, specifies the date and time that
     * data should be ingested.
     */
    runTime?: string;

    /**
     * Output only. Describes the schedule of this transfer run if it was
     * created as part of a regular schedule. For batch transfer runs that are
     * scheduled manually, this is empty.
     * NOTE: the system might choose to delay the schedule depending on the
     * current load, so `schedule_time` doesn't always matches this.
     */
    schedule?: string;

    /**
     * Minimum time after which a transfer run can be started.
     */
    scheduleTime?: string;

    /**
     * Output only. Time when transfer run was started.
     * Parameter ignored by server for input requests.
     */
    startTime?: string;

    /**
     * Output only. Data transfer run state. Ignored for input requests.
     */
    state?: string;

    /**
     * Output only. Last time the data transfer run state was updated.
     */
    updateTime?: string;

    /**
     * Output only. Unique ID of the user on whose behalf transfer is done.
     * Applicable only to data sources that do not support service accounts.
     * When set to 0, the data source service account credentials are used.
     */
    userId?: string;
  }

  declare interface gapi$client$bigquerydatatransfer$DataSourcesResource {
    /**
     * Returns true if valid credentials exist for the given data source and
     * requesting user.
     * Some data sources doesn't support service account, so we need to talk to
     * them on behalf of the end user. This API just checks whether we have OAuth
     * token for the particular user, which is a pre-requisite before user can
     * create a transfer config.
     */
    checkValidCreds(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The data source in the form:
       * `projects/{project_id}/dataSources/{data_source_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$CheckValidCredsResponse>;

    /**
     * Retrieves a supported data source and returns its settings,
     * which can be used for UI rendering.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/dataSources/{data_source_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$DataSource>;

    /**
     * Lists supported data sources and returns their settings,
     * which can be used for UI rendering.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListDataSourcesRequest` list results. For multiple-page
       * results, `ListDataSourcesResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * The BigQuery project id for which data sources should be returned.
       * Must be in the form: `projects/{project_id}`
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListDataSourcesResponse>;

    /**
     * Returns true if valid credentials exist for the given data source and
     * requesting user.
     * Some data sources doesn't support service account, so we need to talk to
     * them on behalf of the end user. This API just checks whether we have OAuth
     * token for the particular user, which is a pre-requisite before user can
     * create a transfer config.
     */
    checkValidCreds(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The data source in the form:
       * `projects/{project_id}/dataSources/{data_source_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$CheckValidCredsResponse>;

    /**
     * Retrieves a supported data source and returns its settings,
     * which can be used for UI rendering.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/dataSources/{data_source_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$DataSource>;

    /**
     * Lists supported data sources and returns their settings,
     * which can be used for UI rendering.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListDataSourcesRequest` list results. For multiple-page
       * results, `ListDataSourcesResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * The BigQuery project id for which data sources should be returned.
       * Must be in the form: `projects/{project_id}`
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListDataSourcesResponse>;
  }

  declare interface gapi$client$bigquerydatatransfer$TransferLogsResource {
    /**
     * Returns user facing log messages for the data transfer run.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Message types to return. If not populated - INFO, WARNING and ERROR
       * messages are returned.
       */
      messageTypes?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransferLogsRequest` list results. For multiple-page
       * results, `ListTransferLogsResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * Transfer run name in the form:
       * `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListTransferLogsResponse>;

    /**
     * Returns user facing log messages for the data transfer run.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Message types to return. If not populated - INFO, WARNING and ERROR
       * messages are returned.
       */
      messageTypes?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransferLogsRequest` list results. For multiple-page
       * results, `ListTransferLogsResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * Transfer run name in the form:
       * `projects/{project_id}/transferConfigs/{config_Id}/runs/{run_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListTransferLogsResponse>;
  }

  declare interface gapi$client$bigquerydatatransfer$RunsResource {
    /**
     * Deletes the specified transfer run.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
       */
      name: string,

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
    }): Request<{}>;

    /**
     * Returns information about the particular transfer run.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferRun>;

    /**
     * Returns information about running and completed jobs.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransferRunsRequest` list results. For multiple-page
       * results, `ListTransferRunsResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * Name of transfer configuration for which transfer runs should be retrieved.
       * Format of transfer configuration resource name is:
       * `projects/{project_id}/transferConfigs/{config_id}`.
       */
      parent: string,

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
       * Indicates how run attempts are to be pulled.
       */
      runAttempt?: string,

      /**
       * When specified, only transfer runs with requested states are returned.
       */
      states?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$bigquerydatatransfer$ListTransferRunsResponse>;
    transferLogs: gapi$client$bigquerydatatransfer$TransferLogsResource;

    /**
     * Deletes the specified transfer run.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
       */
      name: string,

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
    }): Request<{}>;

    /**
     * Returns information about the particular transfer run.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferRun>;

    /**
     * Returns information about running and completed jobs.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransferRunsRequest` list results. For multiple-page
       * results, `ListTransferRunsResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * Name of transfer configuration for which transfer runs should be retrieved.
       * Format of transfer configuration resource name is:
       * `projects/{project_id}/transferConfigs/{config_id}`.
       */
      parent: string,

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
       * Indicates how run attempts are to be pulled.
       */
      runAttempt?: string,

      /**
       * When specified, only transfer runs with requested states are returned.
       */
      states?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$bigquerydatatransfer$ListTransferRunsResponse>;
    transferLogs: gapi$client$bigquerydatatransfer$TransferLogsResource;
  }

  declare interface gapi$client$bigquerydatatransfer$TransferConfigsResource {
    /**
     * Creates a new data transfer configuration.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Optional OAuth2 authorization code to use with this transfer configuration.
       * This is required if new credentials are needed, as indicated by
       * `CheckValidCreds`.
       * In order to obtain authorization_code, please make a
       * request to
       * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
       *
       * &#42; client_id should be OAuth client_id of BigQuery DTS API for the given
       * data source returned by ListDataSources method.
       * &#42; data_source_scopes are the scopes returned by ListDataSources method.
       * &#42; redirect_uri is an optional parameter. If not specified, then
       * authorization code is posted to the opener of authorization flow window.
       * Otherwise it will be sent to the redirect uri. A special value of
       * urn:ietf:wg:oauth:2.0:oob means that authorization code should be
       * returned in the title bar of the browser, with the page text prompting
       * the user to copy the code and paste it in the application.
       */
      authorizationCode?: string,

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
       * The BigQuery project id where the transfer configuration should be created.
       * Must be in the format /projects/{project_id}/locations/{location_id}
       * or
       * /projects/{project_id}/locations/-
       * In case when '-' is specified as location_id, location is infered from
       * the destination dataset region.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Deletes a data transfer configuration,
     * including any associated transfer runs and logs.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}`
       */
      name: string,

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
    }): Request<{}>;

    /**
     * Returns information about a data transfer config.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Returns information about all data transfers in the project.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * When specified, only configurations of requested data sources are returned.
       */
      dataSourceIds?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransfersRequest` list results. For multiple-page
       * results, `ListTransfersResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * The BigQuery project id for which data sources
       * should be returned: `projects/{project_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListTransferConfigsResponse>;

    /**
     * Updates a data transfer configuration.
     * All fields must be set, even if they are not updated.
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Optional OAuth2 authorization code to use with this transfer configuration.
       * If it is provided, the transfer configuration will be associated with the
       * gaia id of the authorizing user.
       * In order to obtain authorization_code, please make a
       * request to
       * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
       *
       * &#42; client_id should be OAuth client_id of BigQuery DTS API for the given
       * data source returned by ListDataSources method.
       * &#42; data_source_scopes are the scopes returned by ListDataSources method.
       * &#42; redirect_uri is an optional parameter. If not specified, then
       * authorization code is posted to the opener of authorization flow window.
       * Otherwise it will be sent to the redirect uri. A special value of
       * urn:ietf:wg:oauth:2.0:oob means that authorization code should be
       * returned in the title bar of the browser, with the page text prompting
       * the user to copy the code and paste it in the application.
       */
      authorizationCode?: string,

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
       * The resource name of the transfer config.
       * Transfer config names have the form
       * `projects/{project_id}/transferConfigs/{config_id}`.
       * Where `config_id` is usually a uuid, even though it is not
       * guaranteed or required. The name is ignored when creating a transfer
       * config.
       */
      name: string,

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
       * Required list of fields to be updated in this request.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Creates transfer runs for a time range [range_start_time, range_end_time].
     * For each date - or whatever granularity the data source supports - in the
     * range, one transfer run is created.
     * Note that runs are created per UTC time in the time range.
     */
    scheduleRuns(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Transfer configuration name in the form:
       * `projects/{project_id}/transferConfigs/{config_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ScheduleTransferRunsResponse>;
    runs: gapi$client$bigquerydatatransfer$RunsResource;

    /**
     * Creates a new data transfer configuration.
     */
    create(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Optional OAuth2 authorization code to use with this transfer configuration.
       * This is required if new credentials are needed, as indicated by
       * `CheckValidCreds`.
       * In order to obtain authorization_code, please make a
       * request to
       * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
       *
       * &#42; client_id should be OAuth client_id of BigQuery DTS API for the given
       * data source returned by ListDataSources method.
       * &#42; data_source_scopes are the scopes returned by ListDataSources method.
       * &#42; redirect_uri is an optional parameter. If not specified, then
       * authorization code is posted to the opener of authorization flow window.
       * Otherwise it will be sent to the redirect uri. A special value of
       * urn:ietf:wg:oauth:2.0:oob means that authorization code should be
       * returned in the title bar of the browser, with the page text prompting
       * the user to copy the code and paste it in the application.
       */
      authorizationCode?: string,

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
       * The BigQuery project id where the transfer configuration should be created.
       * Must be in the format /projects/{project_id}/locations/{location_id}
       * or
       * /projects/{project_id}/locations/-
       * In case when '-' is specified as location_id, location is infered from
       * the destination dataset region.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Deletes a data transfer configuration,
     * including any associated transfer runs and logs.
     */
    delete(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}`
       */
      name: string,

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
    }): Request<{}>;

    /**
     * Returns information about a data transfer config.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The field will contain name of the resource requested, for example:
       * `projects/{project_id}/transferConfigs/{config_id}`
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Returns information about all data transfers in the project.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * When specified, only configurations of requested data sources are returned.
       */
      dataSourceIds?: string,

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
       * Page size. The default page size is the maximum value of 1000 results.
       */
      pageSize?: number,

      /**
       * Pagination token, which can be used to request a specific page
       * of `ListTransfersRequest` list results. For multiple-page
       * results, `ListTransfersResponse` outputs
       * a `next_page` token, which can be used as the
       * `page_token` value to request the next page of list results.
       */
      pageToken?: string,

      /**
       * The BigQuery project id for which data sources
       * should be returned: `projects/{project_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ListTransferConfigsResponse>;

    /**
     * Updates a data transfer configuration.
     * All fields must be set, even if they are not updated.
     */
    patch(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Optional OAuth2 authorization code to use with this transfer configuration.
       * If it is provided, the transfer configuration will be associated with the
       * gaia id of the authorizing user.
       * In order to obtain authorization_code, please make a
       * request to
       * https://www.gstatic.com/bigquerydatatransfer/oauthz/auth?client_id=<datatransferapiclientid>&scope=<data_source_scopes>&redirect_uri=<redirect_uri>
       *
       * &#42; client_id should be OAuth client_id of BigQuery DTS API for the given
       * data source returned by ListDataSources method.
       * &#42; data_source_scopes are the scopes returned by ListDataSources method.
       * &#42; redirect_uri is an optional parameter. If not specified, then
       * authorization code is posted to the opener of authorization flow window.
       * Otherwise it will be sent to the redirect uri. A special value of
       * urn:ietf:wg:oauth:2.0:oob means that authorization code should be
       * returned in the title bar of the browser, with the page text prompting
       * the user to copy the code and paste it in the application.
       */
      authorizationCode?: string,

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
       * The resource name of the transfer config.
       * Transfer config names have the form
       * `projects/{project_id}/transferConfigs/{config_id}`.
       * Where `config_id` is usually a uuid, even though it is not
       * guaranteed or required. The name is ignored when creating a transfer
       * config.
       */
      name: string,

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
       * Required list of fields to be updated in this request.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$bigquerydatatransfer$TransferConfig>;

    /**
     * Creates transfer runs for a time range [range_start_time, range_end_time].
     * For each date - or whatever granularity the data source supports - in the
     * range, one transfer run is created.
     * Note that runs are created per UTC time in the time range.
     */
    scheduleRuns(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Transfer configuration name in the form:
       * `projects/{project_id}/transferConfigs/{config_id}`.
       */
      parent: string,

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
    }): Request<gapi$client$bigquerydatatransfer$ScheduleTransferRunsResponse>;
    runs: gapi$client$bigquerydatatransfer$RunsResource;
  }

  declare interface gapi$client$bigquerydatatransfer$LocationsResource {
    /**
     * Get information about a location.
     */
    get(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * Resource name for the location.
       */
      name: string,

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
    }): Request<gapi$client$bigquerydatatransfer$Location>;

    /**
     * Lists information about the supported locations for this service.
     */
    list(request: {
      /**
       * V1 error format.
       */
      "$.xgafv"?: string,

      /**
       * OAuth access token.
       */
      access_token?: string,

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
       * The standard list filter.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource that owns the locations collection, if applicable.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The standard list page size.
       */
      pageSize?: number,

      /**
       * The standard list page token.
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
    }): Request<gapi$client$bigquerydatatransfer$ListLocationsResponse>;
    dataSources: gapi$client$bigquerydatatransfer$DataSourcesResource;
    transferConfigs: gapi$client$bigquerydatatransfer$TransferConfigsResource;
  }

  declare interface gapi$client$bigquerydatatransfer$ProjectsResource {
    dataSources: gapi$client$bigquerydatatransfer$DataSourcesResource;
    locations: gapi$client$bigquerydatatransfer$LocationsResource;
    transferConfigs: gapi$client$bigquerydatatransfer$TransferConfigsResource;
  }
}
