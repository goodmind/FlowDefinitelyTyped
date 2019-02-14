declare module "gapi.client.servicecontrol" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    services: typeof gapi$client$services
  };

  /**
   * Load Google Service Control API v1
   */
  declare function gapi$client$load(
    name: "servicecontrol",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "servicecontrol",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$services: servicecontrol$ServicesResource;

  declare interface gapi$client$servicecontrol$AllocateInfo {
    /**
     * A list of label keys that were unused by the server in processing the
     * request. Thus, for similar requests repeated in a certain future time
     * window, the caller can choose to ignore these labels in the requests
     * to achieve better client-side cache hits and quota aggregation.
     */
    unusedArguments?: string[];
  }

  declare interface gapi$client$servicecontrol$AllocateQuotaRequest {
    /**
     * Operation that describes the quota allocation.
     */
    allocateOperation?: servicecontrol$QuotaOperation;

    /**
     * Specifies which version of service configuration should be used to process
     * the request. If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$AllocateQuotaResponse {
    /**
     * Indicates the decision of the allocate.
     */
    allocateErrors?: servicecontrol$QuotaError[];

    /**
     * WARNING: DO NOT use this field until this warning message is removed.
     */
    allocateInfo?: gapi$client$servicecontrol$AllocateInfo;

    /**
     * The same operation_id value used in the AllocateQuotaRequest. Used for
     * logging and diagnostics purposes.
     */
    operationId?: string;

    /**
     * Quota metrics to indicate the result of allocation. Depending on the
     * request, one or more of the following metrics will be included:
     *
     * 1. Per quota group or per quota metric incremental usage will be specified
     * using the following delta metric :
     * "serviceruntime.googleapis.com/api/consumer/quota_used_count"
     *
     * 2. The quota limit reached condition will be specified using the following
     * boolean metric :
     * "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics?: servicecontrol$MetricValueSet[];

    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$AuditLog {
    /**
     * Authentication information.
     */
    authenticationInfo?: servicecontrol$AuthenticationInfo;

    /**
     * Authorization information. If there are multiple
     * resources or permissions involved, then there is
     * one AuthorizationInfo element for each {resource, permission} tuple.
     */
    authorizationInfo?: servicecontrol$AuthorizationInfo[];

    /**
     * Other service-specific data about the request, response, and other
     * information associated with the current audited event.
     */
    metadata?: Record<string, any>;

    /**
     * The name of the service method or operation.
     * For API calls, this should be the name of the API method.
     * For example,
     *
     * "google.datastore.v1.Datastore.RunQuery"
     * "google.logging.v1.LoggingService.DeleteLog"
     */
    methodName?: string;

    /**
     * The number of items returned from a List or Query API method,
     * if applicable.
     */
    numResponseItems?: string;

    /**
     * The operation request. This may not include all request parameters,
     * such as those that are too large, privacy-sensitive, or duplicated
     * elsewhere in the log record.
     * It should never include user-generated data, such as file contents.
     * When the JSON object represented here has a proto equivalent, the proto
     * name will be indicated in the `@type` property.
     */
    request?: Record<string, any>;

    /**
     * Metadata about the operation.
     */
    requestMetadata?: servicecontrol$RequestMetadata;

    /**
     * The resource or collection that is the target of the operation.
     * The name is a scheme-less URI, not including the API service name.
     * For example:
     *
     * "shelves/SHELF_ID/books"
     * "shelves/SHELF_ID/books/BOOK_ID"
     */
    resourceName?: string;

    /**
     * The operation response. This may not include all response elements,
     * such as those that are too large, privacy-sensitive, or duplicated
     * elsewhere in the log record.
     * It should never include user-generated data, such as file contents.
     * When the JSON object represented here has a proto equivalent, the proto
     * name will be indicated in the `@type` property.
     */
    response?: Record<string, any>;

    /**
     * Deprecated, use `metadata` field instead.
     * Other service-specific data about the request, response, and other
     * activities.
     */
    serviceData?: Record<string, any>;

    /**
     * The name of the API service performing the operation. For example,
     * `"datastore.googleapis.com"`.
     */
    serviceName?: string;

    /**
     * The status of the overall operation.
     */
    status?: servicecontrol$Status;
  }

  declare interface gapi$client$servicecontrol$AuthenticationInfo {
    /**
     * The authority selector specified by the requestor, if any.
     * It is not guaranteed that the principal was allowed to use this authority.
     */
    authoritySelector?: string;

    /**
     * The email address of the authenticated user (or service account on behalf
     * of third party principal) making the request. For privacy reasons, the
     * principal email address is redacted for all read-only operations that fail
     * with a "permission denied" error.
     */
    principalEmail?: string;

    /**
     * The third party identification (if any) of the authenticated user making
     * the request.
     * When the JSON object represented here has a proto equivalent, the proto
     * name will be indicated in the `@type` property.
     */
    thirdPartyPrincipal?: Record<string, any>;
  }

  declare interface gapi$client$servicecontrol$AuthorizationInfo {
    /**
     * Whether or not authorization for `resource` and `permission`
     * was granted.
     */
    granted?: boolean;

    /**
     * The required IAM permission.
     */
    permission?: string;

    /**
     * The resource being accessed, as a REST-style string. For example:
     *
     * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
     */
    resource?: string;
  }

  declare interface gapi$client$servicecontrol$CheckError {
    /**
     * The error code.
     */
    code?: string;

    /**
     * Free-form text providing details on the error cause of the error.
     */
    detail?: string;
  }

  declare interface gapi$client$servicecontrol$CheckInfo {
    /**
     * Consumer info of this check.
     */
    consumerInfo?: servicecontrol$ConsumerInfo;

    /**
     * A list of fields and label keys that are ignored by the server.
     * The client doesn't need to send them for following requests to improve
     * performance and allow better aggregation.
     */
    unusedArguments?: string[];
  }

  declare interface gapi$client$servicecontrol$CheckRequest {
    /**
     * The operation to be checked.
     */
    operation?: servicecontrol$Operation;

    /**
     * Requests the project settings to be returned as part of the check response.
     */
    requestProjectSettings?: boolean;

    /**
     * Specifies which version of service configuration should be used to process
     * the request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId?: string;

    /**
     * Indicates if service activation check should be skipped for this request.
     * Default behavior is to perform the check and apply relevant quota.
     */
    skipActivationCheck?: boolean;
  }

  declare interface gapi$client$servicecontrol$CheckResponse {
    /**
     * Indicate the decision of the check.
     *
     * If no check errors are present, the service should process the operation.
     * Otherwise the service should use the list of errors to determine the
     * appropriate action.
     */
    checkErrors?: gapi$client$servicecontrol$CheckError[];

    /**
     * Feedback data returned from the server during processing a Check request.
     */
    checkInfo?: gapi$client$servicecontrol$CheckInfo;

    /**
     * The same operation_id value used in the CheckRequest.
     * Used for logging and diagnostics purposes.
     */
    operationId?: string;

    /**
     * Quota information for the check request associated with this response.
     */
    quotaInfo?: servicecontrol$QuotaInfo;

    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$ConsumerInfo {
    /**
     * The Google cloud project number, e.g. 1234567890. A value of 0 indicates
     * no project number is found.
     */
    projectNumber?: string;
  }

  declare interface gapi$client$servicecontrol$Distribution {
    /**
     * The number of samples in each histogram bucket. `bucket_counts` are
     * optional. If present, they must sum to the `count` value.
     *
     * The buckets are defined below in `bucket_option`. There are N buckets.
     * `bucket_counts[0]` is the number of samples in the underflow bucket.
     * `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
     * in each of the finite buckets. And `bucket_counts[N] is the number
     *              * of samples in the overflow bucket. See the comments of `bucket_option`
     *              * below for more details.
     *              *
     *              * Any suffix of trailing zeros may be omitted.
     *              *
     */
    bucketCounts?: string[];

    /**
     * The total number of samples in the distribution. Must be >= 0.
     */
    count?: string;

    /**
     * Buckets with arbitrary user-provided width.
     */
    explicitBuckets?: servicecontrol$ExplicitBuckets;

    /**
     * Buckets with exponentially growing width.
     */
    exponentialBuckets?: servicecontrol$ExponentialBuckets;

    /**
     * Buckets with constant width.
     */
    linearBuckets?: servicecontrol$LinearBuckets;

    /**
     * The maximum of the population of values. Ignored if `count` is zero.
     */
    maximum?: number;

    /**
     * The arithmetic mean of the samples in the distribution. If `count` is
     * zero then this field must be zero.
     */
    mean?: number;

    /**
     * The minimum of the population of values. Ignored if `count` is zero.
     */
    minimum?: number;

    /**
     * The sum of squared deviations from the mean:
     * Sum[i=1..count]((x_i - mean)^2)
     * where each x_i is a sample values. If `count` is zero then this field
     * must be zero, otherwise validation of the request fails.
     */
    sumOfSquaredDeviation?: number;
  }

  declare interface gapi$client$servicecontrol$EndReconciliationRequest {
    /**
     * Operation that describes the quota reconciliation.
     */
    reconciliationOperation?: servicecontrol$QuotaOperation;

    /**
     * Specifies which version of service configuration should be used to process
     * the request. If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$EndReconciliationResponse {
    /**
     * The same operation_id value used in the EndReconciliationRequest. Used for
     * logging and diagnostics purposes.
     */
    operationId?: string;

    /**
     * Metric values as tracked by One Platform before the adjustment was made.
     * The following metrics will be included:
     *
     * 1. Per quota metric total usage will be specified using the following gauge
     * metric:
     * "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
     *
     * 2. Value for each quota limit associated with the metrics will be specified
     * using the following gauge metric:
     * "serviceruntime.googleapis.com/quota/limit"
     *
     * 3. Delta value of the usage after the reconciliation for limits associated
     * with the metrics will be specified using the following metric:
     * "serviceruntime.googleapis.com/allocation/reconciliation_delta"
     * The delta value is defined as:
     * new_usage_from_client - existing_value_in_spanner.
     * This metric is not defined in serviceruntime.yaml or in Cloud Monarch.
     * This metric is meant for callers' use only. Since this metric is not
     * defined in the monitoring backend, reporting on this metric will result in
     * an error.
     */
    quotaMetrics?: servicecontrol$MetricValueSet[];

    /**
     * Indicates the decision of the reconciliation end.
     */
    reconciliationErrors?: servicecontrol$QuotaError[];

    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$ExplicitBuckets {
    /**
     * 'bound' is a list of strictly increasing boundaries between
     * buckets. Note that a list of length N-1 defines N buckets because
     * of fenceposting. See comments on `bucket_options` for details.
     *
     * The i'th finite bucket covers the interval
     * [bound[i-1], bound[i])
     * where i ranges from 1 to bound_size() - 1. Note that there are no
     * finite buckets at all if 'bound' only contains a single element; in
     * that special case the single bound defines the boundary between the
     * underflow and overflow buckets.
     *
     * bucket number                   lower bound    upper bound
     * i == 0 (underflow)              -inf           bound[i]
     * 0 < i < bound_size()            bound[i-1]     bound[i]
     * i == bound_size() (overflow)    bound[i-1]     +inf
     */
    bounds?: number[];
  }

  declare interface gapi$client$servicecontrol$ExponentialBuckets {
    /**
     * The i'th exponential bucket covers the interval
     * [scale &#42; growth_factor^(i-1), scale &#42; growth_factor^i)
     * where i ranges from 1 to num_finite_buckets inclusive.
     * Must be larger than 1.0.
     */
    growthFactor?: number;

    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2.
     * See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number;

    /**
     * The i'th exponential bucket covers the interval
     * [scale &#42; growth_factor^(i-1), scale &#42; growth_factor^i)
     * where i ranges from 1 to num_finite_buckets inclusive.
     * Must be > 0.
     */
    scale?: number;
  }

  declare interface gapi$client$servicecontrol$LinearBuckets {
    /**
     * The number of finite buckets. With the underflow and overflow buckets,
     * the total number of buckets is `num_finite_buckets` + 2.
     * See comments on `bucket_options` for details.
     */
    numFiniteBuckets?: number;

    /**
     * The i'th linear bucket covers the interval
     * [offset + (i-1) &#42; width, offset + i &#42; width)
     * where i ranges from 1 to num_finite_buckets, inclusive.
     */
    offset?: number;

    /**
     * The i'th linear bucket covers the interval
     * [offset + (i-1) &#42; width, offset + i &#42; width)
     * where i ranges from 1 to num_finite_buckets, inclusive.
     * Must be strictly positive.
     */
    width?: number;
  }

  declare interface gapi$client$servicecontrol$LogEntry {
    /**
     * A unique ID for the log entry used for deduplication. If omitted,
     * the implementation will generate one based on operation_id.
     */
    insertId?: string;

    /**
     * A set of user-defined (key, value) data that provides additional
     * information about the log entry.
     */
    labels?: Record<string, string>;

    /**
     * Required. The log to which this log entry belongs. Examples: `"syslog"`,
     * `"book_log"`.
     */
    name?: string;

    /**
     * The log entry payload, represented as a protocol buffer that is
     * expressed as a JSON object. The only accepted type currently is
     * AuditLog.
     */
    protoPayload?: Record<string, any>;

    /**
     * The severity of the log entry. The default value is
     * `LogSeverity.DEFAULT`.
     */
    severity?: string;

    /**
     * The log entry payload, represented as a structure that
     * is expressed as a JSON object.
     */
    structPayload?: Record<string, any>;

    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string;

    /**
     * The time the event described by the log entry occurred. If
     * omitted, defaults to operation start time.
     */
    timestamp?: string;
  }

  declare interface gapi$client$servicecontrol$MetricValue {
    /**
     * A boolean value.
     */
    boolValue?: boolean;

    /**
     * A distribution value.
     */
    distributionValue?: gapi$client$servicecontrol$Distribution;

    /**
     * A double precision floating point value.
     */
    doubleValue?: number;

    /**
     * The end of the time period over which this metric value's measurement
     * applies.
     */
    endTime?: string;

    /**
     * A signed 64-bit integer value.
     */
    int64Value?: string;

    /**
     * The labels describing the metric value.
     * See comments on google.api.servicecontrol.v1.Operation.labels for
     * the overriding relationship.
     */
    labels?: Record<string, string>;

    /**
     * A money value.
     */
    moneyValue?: servicecontrol$Money;

    /**
     * The start of the time period over which this metric value's measurement
     * applies. The time period has different semantics for different metric
     * types (cumulative, delta, and gauge). See the metric definition
     * documentation in the service configuration for details.
     */
    startTime?: string;

    /**
     * A text string value.
     */
    stringValue?: string;
  }

  declare interface gapi$client$servicecontrol$MetricValueSet {
    /**
     * The metric name defined in the service configuration.
     */
    metricName?: string;

    /**
     * The values in this metric.
     */
    metricValues?: gapi$client$servicecontrol$MetricValue[];
  }

  declare interface gapi$client$servicecontrol$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;

    /**
     * Number of nano (10^-9) units of the amount.
     * The value must be between -999,999,999 and +999,999,999 inclusive.
     * If `units` is positive, `nanos` must be positive or zero.
     * If `units` is zero, `nanos` can be positive, zero, or negative.
     * If `units` is negative, `nanos` must be negative or zero.
     * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number;

    /**
     * The whole units of the amount.
     * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string;
  }

  declare interface gapi$client$servicecontrol$Operation {
    /**
     * Identity of the consumer who is using the service.
     * This field should be filled in for the operations initiated by a
     * consumer, but not for service-initiated operations that are
     * not related to a specific consumer.
     *
     * This can be in one of the following formats:
     * project:<project_id>,
     * project_number:<project_number>,
     * api_key:<api_key>.
     */
    consumerId?: string;

    /**
     * End time of the operation.
     * Required when the operation is used in ServiceController.Report,
     * but optional when the operation is used in ServiceController.Check.
     */
    endTime?: string;

    /**
     * DO NOT USE. This is an experimental field.
     */
    importance?: string;

    /**
     * Labels describing the operation. Only the following labels are allowed:
     *
     * - Labels describing monitored resources as defined in
     * the service configuration.
     * - Default labels of metric values. When specified, labels defined in the
     * metric value override these default.
     * - The following labels defined by Google Cloud Platform:
     * - `cloud.googleapis.com/location` describing the location where the
     * operation happened,
     * - `servicecontrol.googleapis.com/user_agent` describing the user agent
     * of the API request,
     * - `servicecontrol.googleapis.com/service_agent` describing the service
     * used to handle the API request (e.g. ESP),
     * - `servicecontrol.googleapis.com/platform` describing the platform
     * where the API is served (e.g. GAE, GCE, GKE).
     */
    labels?: Record<string, string>;

    /**
     * Represents information to be logged.
     */
    logEntries?: gapi$client$servicecontrol$LogEntry[];

    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration.
     * The data type used in the MetricValueSet must agree with
     * the data type specified in the metric definition.
     *
     * Within a single operation, it is not allowed to have more than one
     * MetricValue instances that have the same metric names and identical
     * label value combinations. If a request has such duplicated MetricValue
     * instances, the entire request is rejected with
     * an invalid argument error.
     */
    metricValueSets?: gapi$client$servicecontrol$MetricValueSet[];

    /**
     * Identity of the operation. This must be unique within the scope of the
     * service that generated the operation. If the service calls
     * Check() and Report() on the same operation, the two calls should carry
     * the same id.
     *
     * UUID version 4 is recommended, though not required.
     * In scenarios where an operation is computed from existing information
     * and an idempotent id is desirable for deduplication purpose, UUID version 5
     * is recommended. See RFC 4122 for details.
     */
    operationId?: string;

    /**
     * Fully qualified name of the operation. Reserved for future use.
     */
    operationName?: string;

    /**
     * Represents the properties needed for quota check. Applicable only if this
     * operation is for a quota check request. If this is not specified, no quota
     * check will be performed.
     */
    quotaProperties?: servicecontrol$QuotaProperties;

    /**
     * DO NOT USE. This field is deprecated, use "resources" field instead.
     * The resource name of the parent of a resource in the resource hierarchy.
     *
     * This can be in one of the following formats:
     * - “projects/<project-id or project-number>”
     * - “folders/<folder-id>”
     * - “organizations/<organization-id>”
     */
    resourceContainer?: string;

    /**
     * The resources that are involved in the operation.
     */
    resources?: servicecontrol$ResourceInfo[];

    /**
     * Required. Start time of the operation.
     */
    startTime?: string;

    /**
     * User defined labels for the resource that this operation is associated
     * with. Only a combination of 1000 user labels per consumer project are
     * allowed.
     */
    userLabels?: Record<string, string>;
  }

  declare interface gapi$client$servicecontrol$QuotaError {
    /**
     * Error code.
     */
    code?: string;

    /**
     * Free-form text that provides details on the cause of the error.
     */
    description?: string;

    /**
     * Subject to whom this error applies. See the specific enum for more details
     * on this field. For example, "clientip:<ip address of client>" or
     * "project:<Google developer project id>".
     */
    subject?: string;
  }

  declare interface gapi$client$servicecontrol$QuotaInfo {
    /**
     * Quota Metrics that have exceeded quota limits.
     * For QuotaGroup-based quota, this is QuotaGroup.name
     * For QuotaLimit-based quota, this is QuotaLimit.name
     * See: google.api.Quota
     * Deprecated: Use quota_metrics to get per quota group limit exceeded status.
     */
    limitExceeded?: string[];

    /**
     * Map of quota group name to the actual number of tokens consumed. If the
     * quota check was not successful, then this will not be populated due to no
     * quota consumption.
     *
     * We are not merging this field with 'quota_metrics' field because of the
     * complexity of scaling in Chemist client code base. For simplicity, we will
     * keep this field for Castor (that scales quota usage) and 'quota_metrics'
     * for SuperQuota (that doesn't scale quota usage).
     */
    quotaConsumed?: Record<string, number>;

    /**
     * Quota metrics to indicate the usage. Depending on the check request, one or
     * more of the following metrics will be included:
     *
     * 1. For rate quota, per quota group or per quota metric incremental usage
     * will be specified using the following delta metric:
     * "serviceruntime.googleapis.com/api/consumer/quota_used_count"
     *
     * 2. For allocation quota, per quota metric total usage will be specified
     * using the following gauge metric:
     * "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
     *
     * 3. For both rate quota and allocation quota, the quota limit reached
     * condition will be specified using the following boolean metric:
     * "serviceruntime.googleapis.com/quota/exceeded"
     */
    quotaMetrics?: gapi$client$servicecontrol$MetricValueSet[];
  }

  declare interface gapi$client$servicecontrol$QuotaOperation {
    /**
     * Identity of the consumer for whom this quota operation is being performed.
     *
     * This can be in one of the following formats:
     * project:<project_id>,
     * project_number:<project_number>,
     * api_key:<api_key>.
     */
    consumerId?: string;

    /**
     * Labels describing the operation.
     */
    labels?: Record<string, string>;

    /**
     * Fully qualified name of the API method for which this quota operation is
     * requested. This name is used for matching quota rules or metric rules and
     * billing status rules defined in service configuration. This field is not
     * required if the quota operation is performed on non-API resources.
     *
     * Example of an RPC method name:
     * google.example.library.v1.LibraryService.CreateShelf
     */
    methodName?: string;

    /**
     * Identity of the operation. This is expected to be unique within the scope
     * of the service that generated the operation, and guarantees idempotency in
     * case of retries.
     *
     * UUID version 4 is recommended, though not required. In scenarios where an
     * operation is computed from existing information and an idempotent id is
     * desirable for deduplication purpose, UUID version 5 is recommended. See
     * RFC 4122 for details.
     */
    operationId?: string;

    /**
     * Represents information about this operation. Each MetricValueSet
     * corresponds to a metric defined in the service configuration.
     * The data type used in the MetricValueSet must agree with
     * the data type specified in the metric definition.
     *
     * Within a single operation, it is not allowed to have more than one
     * MetricValue instances that have the same metric names and identical
     * label value combinations. If a request has such duplicated MetricValue
     * instances, the entire request is rejected with
     * an invalid argument error.
     */
    quotaMetrics?: gapi$client$servicecontrol$MetricValueSet[];

    /**
     * Quota mode for this operation.
     */
    quotaMode?: string;
  }

  declare interface gapi$client$servicecontrol$QuotaProperties {
    /**
     * Quota mode for this operation.
     */
    quotaMode?: string;
  }

  declare interface gapi$client$servicecontrol$ReleaseQuotaRequest {
    /**
     * Operation that describes the quota release.
     */
    releaseOperation?: gapi$client$servicecontrol$QuotaOperation;

    /**
     * Specifies which version of service configuration should be used to process
     * the request. If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$ReleaseQuotaResponse {
    /**
     * The same operation_id value used in the ReleaseQuotaRequest. Used for
     * logging and diagnostics purposes.
     */
    operationId?: string;

    /**
     * Quota metrics to indicate the result of release. Depending on the
     * request, one or more of the following metrics will be included:
     *
     * 1. For rate quota, per quota group or per quota metric released amount
     * will be specified using the following delta metric:
     * "serviceruntime.googleapis.com/api/consumer/quota_refund_count"
     *
     * 2. For allocation quota, per quota metric total usage will be specified
     * using the following gauge metric:
     * "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
     *
     * 3. For allocation quota, value for each quota limit associated with
     * the metrics will be specified using the following gauge metric:
     * "serviceruntime.googleapis.com/quota/limit"
     */
    quotaMetrics?: gapi$client$servicecontrol$MetricValueSet[];

    /**
     * Indicates the decision of the release.
     */
    releaseErrors?: gapi$client$servicecontrol$QuotaError[];

    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$ReportError {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string;

    /**
     * Details of the error when processing the Operation.
     */
    status?: servicecontrol$Status;
  }

  declare interface gapi$client$servicecontrol$ReportInfo {
    /**
     * The Operation.operation_id value from the request.
     */
    operationId?: string;

    /**
     * Quota usage info when processing the `Operation`.
     */
    quotaInfo?: gapi$client$servicecontrol$QuotaInfo;
  }

  declare interface gapi$client$servicecontrol$ReportRequest {
    /**
     * Operations to be reported.
     *
     * Typically the service should report one operation per request.
     * Putting multiple operations into a single request is allowed, but should
     * be used only when multiple operations are natually available at the time
     * of the report.
     *
     * If multiple operations are in a single request, the total request size
     * should be no larger than 1MB. See ReportResponse.report_errors for
     * partial failure behavior.
     */
    operations?: gapi$client$servicecontrol$Operation[];

    /**
     * Specifies which version of service config should be used to process the
     * request.
     *
     * If unspecified or no matching version can be found, the
     * latest one will be used.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$ReportResponse {
    /**
     * Partial failures, one for each `Operation` in the request that failed
     * processing. There are three possible combinations of the RPC status:
     *
     * 1. The combination of a successful RPC status and an empty `report_errors`
     * list indicates a complete success where all `Operations` in the
     * request are processed successfully.
     * 2. The combination of a successful RPC status and a non-empty
     * `report_errors` list indicates a partial success where some
     * `Operations` in the request succeeded. Each
     * `Operation` that failed processing has a corresponding item
     * in this list.
     * 3. A failed RPC status indicates a general non-deterministic failure.
     * When this happens, it's impossible to know which of the
     * 'Operations' in the request succeeded or failed.
     */
    reportErrors?: gapi$client$servicecontrol$ReportError[];

    /**
     * Quota usage for each quota release `Operation` request.
     *
     * Fully or partially failed quota release request may or may not be present
     * in `report_quota_info`. For example, a failed quota release request will
     * have the current quota usage info when precise quota library returns the
     * info. A deadline exceeded quota request will not have quota usage info.
     *
     * If there is no quota release request, report_quota_info will be empty.
     */
    reportInfos?: gapi$client$servicecontrol$ReportInfo[];

    /**
     * The actual config id used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$RequestMetadata {
    /**
     * The IP address of the caller.
     * For caller from internet, this will be public IPv4 or IPv6 address.
     * For caller from a Compute Engine VM with external IP address, this
     * will be the VM's external IP address. For caller from a Compute
     * Engine VM without external IP address, if the VM is in the same
     * organization (or project) as the accessed resource, `caller_ip` will
     * be the VM's internal IPv4 address, otherwise the `caller_ip` will be
     * redacted to "gce-internal-ip".
     * See https://cloud.google.com/compute/docs/vpc/ for more information.
     */
    callerIp?: string;

    /**
     * The network of the caller.
     * Set only if the network host project is part of the same GCP organization
     * (or project) as the accessed resource.
     * See https://cloud.google.com/compute/docs/vpc/ for more information.
     * This is a scheme-less URI full resource name. For example:
     *
     * "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
     */
    callerNetwork?: string;

    /**
     * The user agent of the caller.
     * This information is not authenticated and should be treated accordingly.
     * For example:
     *
     * +   `google-api-python-client/1.4.0`:
     * The request was made by the Google API client for Python.
     * +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
     * The request was made by the Google Cloud SDK CLI (gcloud).
     * +   `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`:
     * The request was made from the `my-project` App Engine app.
     * NOLINT
     */
    callerSuppliedUserAgent?: string;
  }

  declare interface gapi$client$servicecontrol$ResourceInfo {
    /**
     * The identifier of the parent of this resource instance.
     * Must be in one of the following formats:
     * - “projects/<project-id or project-number>”
     * - “folders/<folder-id>”
     * - “organizations/<organization-id>”
     */
    resourceContainer?: string;

    /**
     * Name of the resource. This is used for auditing purposes.
     */
    resourceName?: string;
  }

  declare interface gapi$client$servicecontrol$StartReconciliationRequest {
    /**
     * Operation that describes the quota reconciliation.
     */
    reconciliationOperation?: gapi$client$servicecontrol$QuotaOperation;

    /**
     * Specifies which version of service configuration should be used to process
     * the request. If unspecified or no matching version can be found, the latest
     * one will be used.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$StartReconciliationResponse {
    /**
     * The same operation_id value used in the StartReconciliationRequest. Used
     * for logging and diagnostics purposes.
     */
    operationId?: string;

    /**
     * Metric values as tracked by One Platform before the start of
     * reconciliation. The following metrics will be included:
     *
     * 1. Per quota metric total usage will be specified using the following gauge
     * metric:
     * "serviceruntime.googleapis.com/allocation/consumer/quota_used_count"
     *
     * 2. Value for each quota limit associated with the metrics will be specified
     * using the following gauge metric:
     * "serviceruntime.googleapis.com/quota/limit"
     */
    quotaMetrics?: gapi$client$servicecontrol$MetricValueSet[];

    /**
     * Indicates the decision of the reconciliation start.
     */
    reconciliationErrors?: gapi$client$servicecontrol$QuotaError[];

    /**
     * ID of the actual config used to process the request.
     */
    serviceConfigId?: string;
  }

  declare interface gapi$client$servicecontrol$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface gapi$client$servicecontrol$ServicesResource {
    /**
     * Attempts to allocate quota for the specified consumer. It should be called
     * before the operation is executed.
     *
     * This method requires the `servicemanagement.services.quota`
     * permission on the specified service. For more information, see
     * [Cloud IAM](https://cloud.google.com/iam).
     *
     * &#42;&#42;NOTE:&#42;&#42; The client &#42;&#42;must&#42;&#42; fail-open on server errors `INTERNAL`,
     * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
     * reliability, the server may inject these errors to prohibit any hard
     * dependency on the quota functionality.
     */
    allocateQuota(request: {
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
       * Name of the service as specified in the service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See google.api.Service for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$AllocateQuotaResponse>;

    /**
     * Checks an operation with Google Service Control to decide whether
     * the given operation should proceed. It should be called before the
     * operation is executed.
     *
     * If feasible, the client should cache the check results and reuse them for
     * 60 seconds. In case of server errors, the client can rely on the cached
     * results for longer time.
     *
     * NOTE: the CheckRequest has the size limit of 64KB.
     *
     * This method requires the `servicemanagement.services.check` permission
     * on the specified service. For more information, see
     * [Google Cloud IAM](https://cloud.google.com/iam).
     */
    check(request: {
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
       * The service name as specified in its service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See
       * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
       * for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$CheckResponse>;

    /**
     * Signals the quota controller that service ends the ongoing usage
     * reconciliation.
     *
     * This method requires the `servicemanagement.services.quota`
     * permission on the specified service. For more information, see
     * [Google Cloud IAM](https://cloud.google.com/iam).
     */
    endReconciliation(request: {
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
       * Name of the service as specified in the service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See google.api.Service for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$EndReconciliationResponse>;

    /**
     * Releases previously allocated quota done through AllocateQuota method.
     *
     * This method requires the `servicemanagement.services.quota`
     * permission on the specified service. For more information, see
     * [Cloud IAM](https://cloud.google.com/iam).
     *
     *
     * &#42;&#42;NOTE:&#42;&#42; The client &#42;&#42;must&#42;&#42; fail-open on server errors `INTERNAL`,
     * `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system
     * reliability, the server may inject these errors to prohibit any hard
     * dependency on the quota functionality.
     */
    releaseQuota(request: {
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
       * Name of the service as specified in the service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See google.api.Service for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$ReleaseQuotaResponse>;

    /**
     * Reports operation results to Google Service Control, such as logs and
     * metrics. It should be called after an operation is completed.
     *
     * If feasible, the client should aggregate reporting data for up to 5
     * seconds to reduce API traffic. Limiting aggregation to 5 seconds is to
     * reduce data loss during client crashes. Clients should carefully choose
     * the aggregation time window to avoid data loss risk more than 0.01%
     * for business and compliance reasons.
     *
     * NOTE: the ReportRequest has the size limit of 1MB.
     *
     * This method requires the `servicemanagement.services.report` permission
     * on the specified service. For more information, see
     * [Google Cloud IAM](https://cloud.google.com/iam).
     */
    report(request: {
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
       * The service name as specified in its service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See
       * [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service)
       * for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$ReportResponse>;

    /**
     * Unlike rate quota, allocation quota does not get refilled periodically.
     * So, it is possible that the quota usage as seen by the service differs from
     * what the One Platform considers the usage is. This is expected to happen
     * only rarely, but over time this can accumulate. Services can invoke
     * StartReconciliation and EndReconciliation to correct this usage drift, as
     * described below:
     * 1. Service sends StartReconciliation with a timestamp in future for each
     * metric that needs to be reconciled. The timestamp being in future allows
     * to account for in-flight AllocateQuota and ReleaseQuota requests for the
     * same metric.
     * 2. One Platform records this timestamp and starts tracking subsequent
     * AllocateQuota and ReleaseQuota requests until EndReconciliation is
     * called.
     * 3. At or after the time specified in the StartReconciliation, service
     * sends EndReconciliation with the usage that needs to be reconciled to.
     * 4. One Platform adjusts its own record of usage for that metric to the
     * value specified in EndReconciliation by taking in to account any
     * allocation or release between StartReconciliation and EndReconciliation.
     *
     * Signals the quota controller that the service wants to perform a usage
     * reconciliation as specified in the request.
     *
     * This method requires the `servicemanagement.services.quota`
     * permission on the specified service. For more information, see
     * [Google Cloud IAM](https://cloud.google.com/iam).
     */
    startReconciliation(request: {
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
       * Name of the service as specified in the service configuration. For example,
       * `"pubsub.googleapis.com"`.
       *
       * See google.api.Service for the definition of a service name.
       */
      serviceName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$servicecontrol$StartReconciliationResponse>;
  }
}
