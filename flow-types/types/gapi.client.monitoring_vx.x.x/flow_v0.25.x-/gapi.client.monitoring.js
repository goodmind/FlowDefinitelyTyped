declare module "gapi.client.monitoring" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Stackdriver Monitoring API v3
   */
  declare function gapi$client$load(
    name: "monitoring",
    version: "v3"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "monitoring",
    version: "v3",
    callback: () => any
  ): void;

  declare var gapi$client$projects: monitoring$ProjectsResource;

  declare interface gapi$client$monitoring$BucketOptions {
    /**
     * The explicit buckets.
     */
    explicitBuckets?: monitoring$Explicit;

    /**
     * The exponential buckets.
     */
    exponentialBuckets?: monitoring$Exponential;

    /**
     * The linear bucket.
     */
    linearBuckets?: monitoring$Linear;
  }

  declare interface gapi$client$monitoring$CollectdPayload {
    /**
     * The end time of the interval.
     */
    endTime?: string;

    /**
     * The measurement metadata. Example: "process_id" -> 12345
     */
    metadata?: Record<string, monitoring$TypedValue>;

    /**
     * The name of the plugin. Example: "disk".
     */
    plugin?: string;

    /**
     * The instance name of the plugin Example: "hdcl".
     */
    pluginInstance?: string;

    /**
     * The start time of the interval.
     */
    startTime?: string;

    /**
     * The measurement type. Example: "memory".
     */
    type?: string;

    /**
     * The measurement type instance. Example: "used".
     */
    typeInstance?: string;

    /**
     * The measured values during this time interval. Each value must have a different dataSourceName.
     */
    values?: monitoring$CollectdValue[];
  }

  declare interface gapi$client$monitoring$CollectdPayloadError {
    /**
     * Records the error status for the payload. If this field is present, the partial errors for nested values won't be populated.
     */
    error?: monitoring$Status;

    /**
     * The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads.
     */
    index?: number;

    /**
     * Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value
     * errors.
     */
    valueErrors?: monitoring$CollectdValueError[];
  }

  declare interface gapi$client$monitoring$CollectdValue {
    /**
     * The data source for the collectd value. For example there are two data sources for network measurements: "rx" and "tx".
     */
    dataSourceName?: string;

    /**
     * The type of measurement.
     */
    dataSourceType?: string;

    /**
     * The measurement value.
     */
    value?: monitoring$TypedValue;
  }

  declare interface gapi$client$monitoring$CollectdValueError {
    /**
     * Records the error status for the value.
     */
    error?: monitoring$Status;

    /**
     * The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads.
     */
    index?: number;
  }

  declare interface gapi$client$monitoring$CreateCollectdTimeSeriesRequest {
    /**
     * The collectd payloads representing the time series data. You must not include more than a single point for each time series, so no two payloads can
     * have the same values for all of the fields plugin, plugin_instance, type, and type_instance.
     */
    collectdPayloads?: gapi$client$monitoring$CollectdPayload[];

    /**
     * The version of collectd that collected the data. Example: "5.3.0-192.el6".
     */
    collectdVersion?: string;

    /**
     * The monitored resource associated with the time series.
     */
    resource?: monitoring$MonitoredResource;
  }

  declare interface gapi$client$monitoring$CreateCollectdTimeSeriesResponse {
    /**
     * Records the error status for points that were not written due to an error.Failed requests for which nothing is written will return an error response
     * instead.
     */
    payloadErrors?: gapi$client$monitoring$CollectdPayloadError[];
  }

  declare interface gapi$client$monitoring$CreateTimeSeriesRequest {
    /**
     * The new data to be added to a list of time series. Adds at most one data point to each of several time series. The new data point must be more recent
     * than any other point in its time series. Each TimeSeries value must fully specify a unique time series by supplying all label values for the metric and
     * the monitored resource.
     */
    timeSeries?: monitoring$TimeSeries[];
  }

  declare interface gapi$client$monitoring$Distribution {
    /**
     * Required in the Stackdriver Monitoring API v3. The values for each bucket specified in bucket_options. The sum of the values in bucketCounts must equal
     * the value in the count field of the Distribution object. The order of the bucket counts follows the numbering schemes described for the three bucket
     * types. The underflow bucket has number 0; the finite buckets, if any, have numbers 1 through N-2; and the overflow bucket has number N-1. The size of
     * bucket_counts must not be greater than N. If the size is less than N, then the remaining buckets are assigned values of zero.
     */
    bucketCounts?: string[];

    /**
     * Required in the Stackdriver Monitoring API v3. Defines the histogram bucket boundaries.
     */
    bucketOptions?: gapi$client$monitoring$BucketOptions;

    /**
     * The number of values in the population. Must be non-negative. This value must equal the sum of the values in bucket_counts if a histogram is provided.
     */
    count?: string;

    /**
     * The arithmetic mean of the values in the population. If count is zero then this field must be zero.
     */
    mean?: number;

    /**
     * If specified, contains the range of the population values. The field must not be present if the count is zero. This field is presently ignored by the
     * Stackdriver Monitoring API v3.
     */
    range?: monitoring$Range;

    /**
     * The sum of squared deviations from the mean of the values in the population. For values x_i this is:
     * Sum[i=1..n]((x_i - mean)^2)
     * Knuth, "The Art of Computer Programming", Vol. 2, page 323, 3rd edition describes Welford's method for accumulating this sum in one pass.If count is
     * zero then this field must be zero.
     */
    sumOfSquaredDeviation?: number;
  }

  declare interface gapi$client$monitoring$Explicit {
    /**
     * The values must be monotonically increasing.
     */
    bounds?: number[];
  }

  declare interface gapi$client$monitoring$Exponential {
    /**
     * Must be greater than 1.
     */
    growthFactor?: number;

    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number;

    /**
     * Must be greater than 0.
     */
    scale?: number;
  }

  declare interface gapi$client$monitoring$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string;

    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string;

    /**
     * The field JSON name.
     */
    jsonName?: string;

    /**
     * The field type.
     */
    kind?: string;

    /**
     * The field name.
     */
    name?: string;

    /**
     * The field number.
     */
    number?: number;

    /**
     * The index of the field type in Type.oneofs, for message or enumeration types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number;

    /**
     * The protocol buffer options.
     */
    options?: monitoring$Option[];

    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean;

    /**
     * The field type URL, without the scheme, for message or enumeration types. Example: "type.googleapis.com/google.protobuf.Timestamp".
     */
    typeUrl?: string;
  }

  declare interface gapi$client$monitoring$Group {
    /**
     * A user-assigned name for this group, used only for display purposes.
     */
    displayName?: string;

    /**
     * The filter used to determine which monitored resources belong to this group.
     */
    filter?: string;

    /**
     * If true, the members of this group are considered to be a cluster. The system can perform additional analysis on groups that are clusters.
     */
    isCluster?: boolean;

    /**
     * Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored
     * and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
     */
    name?: string;

    /**
     * The name of the group's parent, if it has one. The format is "projects/{project_id_or_number}/groups/{group_id}". For groups with no parent, parentName
     * is the empty string, "".
     */
    parentName?: string;
  }

  declare interface gapi$client$monitoring$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string;

    /**
     * The label key.
     */
    key?: string;

    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string;
  }

  declare interface gapi$client$monitoring$Linear {
    /**
     * Must be greater than 0.
     */
    numFiniteBuckets?: number;

    /**
     * Lower bound of the first bucket.
     */
    offset?: number;

    /**
     * Must be greater than 0.
     */
    width?: number;
  }

  declare interface gapi$client$monitoring$ListGroupMembersResponse {
    /**
     * A set of monitored resources in the group.
     */
    members?: monitoring$MonitoredResource[];

    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;

    /**
     * The total number of elements matching this request.
     */
    totalSize?: number;
  }

  declare interface gapi$client$monitoring$ListGroupsResponse {
    /**
     * The groups that match the specified filters.
     */
    group?: gapi$client$monitoring$Group[];

    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$monitoring$ListMetricDescriptorsResponse {
    /**
     * The metric descriptors that are available to the project and that match the value of filter, if present.
     */
    metricDescriptors?: monitoring$MetricDescriptor[];

    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$monitoring$ListMonitoredResourceDescriptorsResponse {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;

    /**
     * The monitored resource descriptors that are available to this project and that match filter, if present.
     */
    resourceDescriptors?: monitoring$MonitoredResourceDescriptor[];
  }

  declare interface gapi$client$monitoring$ListTimeSeriesResponse {
    /**
     * If there are more results than have been returned, then this field is set to a non-empty value. To see the additional results, use that value as
     * pageToken in the next call to this method.
     */
    nextPageToken?: string;

    /**
     * One or more time series that match the filter included in the request.
     */
    timeSeries?: monitoring$TimeSeries[];
  }

  declare interface gapi$client$monitoring$Metric {
    /**
     * The set of label values that uniquely identify this metric. All labels listed in the MetricDescriptor must be assigned values.
     */
    labels?: Record<string, string>;

    /**
     * An existing metric type, see google.api.MetricDescriptor. For example, custom.googleapis.com/invoice/paid/amount.
     */
    type?: string;
  }

  declare interface gapi$client$monitoring$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string;

    /**
     * A concise name for the metric, which can be displayed in user interfaces. Use sentence case without an ending period, for example "Request count". This
     * field is optional but it is recommended to be set for any metrics associated with user-visible concepts, such as Quota.
     */
    displayName?: string;

    /**
     * The set of labels that can be used to describe a specific instance of this metric type. For example, the
     * appengine.googleapis.com/http/server/response_latencies metric type has a label for the HTTP response code, response_code, so you can look at latencies
     * for successful responses or just for responses that failed.
     */
    labels?: gapi$client$monitoring$LabelDescriptor[];

    /**
     * Whether the metric records instantaneous values, changes to a value, etc. Some combinations of metric_kind and value_type might not be supported.
     */
    metricKind?: string;

    /**
     * The resource name of the metric descriptor.
     */
    name?: string;

    /**
     * The metric type, including its DNS name prefix. The type is not URL-encoded. All user-defined custom metric types have the DNS name
     * custom.googleapis.com. Metric types should use a natural hierarchical grouping. For example:
     * "custom.googleapis.com/invoice/paid/amount"
     * "appengine.googleapis.com/http/server/response_latencies"
     */
    type?: string;

    /**
     * The unit in which the metric value is reported. It is only applicable if the value_type is INT64, DOUBLE, or DISTRIBUTION. The supported units are a
     * subset of The Unified Code for Units of Measure (http://unitsofmeasure.org/ucum.html) standard:Basic units (UNIT)
     * bit bit
     * By byte
     * s second
     * min minute
     * h hour
     * d dayPrefixes (PREFIX)
     * k kilo (10&#42;&#42;3)
     * M mega (10&#42;&#42;6)
     * G giga (10&#42;&#42;9)
     * T tera (10&#42;&#42;12)
     * P peta (10&#42;&#42;15)
     * E exa (10&#42;&#42;18)
     * Z zetta (10&#42;&#42;21)
     * Y yotta (10&#42;&#42;24)
     * m milli (10&#42;&#42;-3)
     * u micro (10&#42;&#42;-6)
     * n nano (10&#42;&#42;-9)
     * p pico (10&#42;&#42;-12)
     * f femto (10&#42;&#42;-15)
     * a atto (10&#42;&#42;-18)
     * z zepto (10&#42;&#42;-21)
     * y yocto (10&#42;&#42;-24)
     * Ki kibi (2&#42;&#42;10)
     * Mi mebi (2&#42;&#42;20)
     * Gi gibi (2&#42;&#42;30)
     * Ti tebi (2&#42;&#42;40)GrammarThe grammar includes the dimensionless unit 1, such as 1/s.The grammar also includes these connectors:
     * / division (as an infix operator, e.g. 1/s).
     * . multiplication (as an infix operator, e.g. GBy.d)The grammar for a unit is as follows:
     * Expression = Component { "." Component } { "/" Component } ;
     *
     * Component = [ PREFIX ] UNIT [ Annotation ]
     * | Annotation
     * | "1"
     * ;
     *
     * Annotation = "{" NAME "}" ;
     * Notes:
     * Annotation is just a comment if it follows a UNIT and is  equivalent to 1 if it is used alone. For examples,  {requests}/s == 1/s, By{transmitted}/s ==
     * By/s.
     * NAME is a sequence of non-blank printable ASCII characters not  containing '{' or '}'.
     */
    unit?: string;

    /**
     * Whether the measurement is an integer, a floating-point number, etc. Some combinations of metric_kind and value_type might not be supported.
     */
    valueType?: string;
  }

  declare interface gapi$client$monitoring$MonitoredResource {
    /**
     * Required. Values for all of the labels listed in the associated monitored resource descriptor. For example, Compute Engine VM instances use the labels
     * "project_id", "instance_id", and "zone".
     */
    labels?: Record<string, string>;

    /**
     * Required. The monitored resource type. This field must match the type field of a MonitoredResourceDescriptor object. For example, the type of a Compute
     * Engine VM instance is gce_instance.
     */
    type?: string;
  }

  declare interface gapi$client$monitoring$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that might be used in documentation.
     */
    description?: string;

    /**
     * Optional. A concise name for the monitored resource type that might be displayed in user interfaces. It should be a Title Cased Noun Phrase, without
     * any article or other determiners. For example, "Google Cloud SQL Database".
     */
    displayName?: string;

    /**
     * Required. A set of labels used to describe instances of this monitored resource type. For example, an individual Google Cloud SQL database is
     * identified by values for the labels "database_id" and "zone".
     */
    labels?: gapi$client$monitoring$LabelDescriptor[];

    /**
     * Optional. The resource name of the monitored resource descriptor: "projects/{project_id}/monitoredResourceDescriptors/{type}" where {type} is the value
     * of the type field in this object and {project_id} is a project ID that provides API-specific context for accessing the type. APIs that do not use
     * project information can use the resource name format "monitoredResourceDescriptors/{type}".
     */
    name?: string;

    /**
     * Required. The monitored resource type. For example, the type "cloudsql_database" represents databases in Google Cloud SQL. The maximum length of this
     * value is 256 characters.
     */
    type?: string;
  }

  declare interface gapi$client$monitoring$Option {
    /**
     * The option's name. For protobuf built-in options (options defined in descriptor.proto), this is the short name. For example, "map_entry". For custom
     * options, it should be the fully-qualified name. For example, "google.api.http".
     */
    name?: string;

    /**
     * The option's value packed in an Any message. If the value is a primitive, the corresponding wrapper type defined in google/protobuf/wrappers.proto
     * should be used. If the value is an enum, it should be stored as an int32 value using the google.protobuf.Int32Value type.
     */
    value?: Record<string, any>;
  }

  declare interface gapi$client$monitoring$Point {
    /**
     * The time interval to which the data point applies. For GAUGE metrics, only the end time of the interval is used. For DELTA metrics, the start and end
     * time should specify a non-zero interval, with subsequent points specifying contiguous and non-overlapping intervals. For CUMULATIVE metrics, the start
     * and end time should specify a non-zero interval, with subsequent points specifying the same start time and increasing end times, until an event resets
     * the cumulative value to zero and sets a new start time for the following points.
     */
    interval?: monitoring$TimeInterval;

    /**
     * The value of the data point.
     */
    value?: monitoring$TypedValue;
  }

  declare interface gapi$client$monitoring$Range {
    /**
     * The maximum of the population values.
     */
    max?: number;

    /**
     * The minimum of the population values.
     */
    min?: number;
  }

  declare interface gapi$client$monitoring$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated protobuf element. For example: "google/protobuf/source_context.proto".
     */
    fileName?: string;
  }

  declare interface gapi$client$monitoring$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details. There is a common set of message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface gapi$client$monitoring$TimeInterval {
    /**
     * Required. The end of the time interval.
     */
    endTime?: string;

    /**
     * Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
     */
    startTime?: string;
  }

  declare interface gapi$client$monitoring$TimeSeries {
    /**
     * The associated metric. A fully-specified metric used to identify the time series.
     */
    metric?: gapi$client$monitoring$Metric;

    /**
     * The metric kind of the time series. When listing time series, this metric kind might be different from the metric kind of the associated metric if this
     * time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as
     * the metric kind of the associated metric. If the associated metric's descriptor must be auto-created, then this field specifies the metric kind of the
     * new descriptor and must be either GAUGE (the default) or CUMULATIVE.
     */
    metricKind?: string;

    /**
     * The data points of this time series. When listing time series, the order of the points is specified by the list method.When creating a time series,
     * this field must contain exactly one point and the point's type must be the same as the value type of the associated metric. If the associated metric's
     * descriptor must be auto-created, then the value type of the descriptor is determined by the point's type, which must be BOOL, INT64, DOUBLE, or
     * DISTRIBUTION.
     */
    points?: gapi$client$monitoring$Point[];

    /**
     * The associated monitored resource. Custom metrics can use only certain monitored resource types in their time series data.
     */
    resource?: gapi$client$monitoring$MonitoredResource;

    /**
     * The value type of the time series. When listing time series, this value type might be different from the value type of the associated metric if this
     * time series is an alignment or reduction of other time series.When creating a time series, this field is optional. If present, it must be the same as
     * the type of the data in the points field.
     */
    valueType?: string;
  }

  declare interface gapi$client$monitoring$Type {
    /**
     * The list of fields.
     */
    fields?: gapi$client$monitoring$Field[];

    /**
     * The fully qualified message name.
     */
    name?: string;

    /**
     * The list of types appearing in oneof definitions in this type.
     */
    oneofs?: string[];

    /**
     * The protocol buffer options.
     */
    options?: gapi$client$monitoring$Option[];

    /**
     * The source context.
     */
    sourceContext?: gapi$client$monitoring$SourceContext;

    /**
     * The source syntax.
     */
    syntax?: string;
  }

  declare interface gapi$client$monitoring$TypedValue {
    /**
     * A Boolean value: true or false.
     */
    boolValue?: boolean;

    /**
     * A distribution value.
     */
    distributionValue?: gapi$client$monitoring$Distribution;

    /**
     * A 64-bit double-precision floating-point number. Its magnitude is approximately &plusmn;10<sup>&plusmn;300</sup> and it has 16 significant digits of
     * precision.
     */
    doubleValue?: number;

    /**
     * A 64-bit integer. Its range is approximately &plusmn;9.2x10<sup>18</sup>.
     */
    int64Value?: string;

    /**
     * A variable-length string value.
     */
    stringValue?: string;
  }

  declare interface gapi$client$monitoring$CollectdTimeSeriesResource {
    /**
     * Stackdriver Monitoring Agent only: Creates a new time series.<aside class="caution">This method is only for use by the Stackdriver Monitoring Agent.
     * Use projects.timeSeries.create instead.</aside>
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
       * The project in which to create the time series. The format is "projects/PROJECT_ID_OR_NUMBER".
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
    }): Request<gapi$client$monitoring$CreateCollectdTimeSeriesResponse>;
  }

  declare interface gapi$client$monitoring$MembersResource {
    /**
     * Lists the monitored resources that are members of a group.
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
       * An optional list filter describing the members to be returned. The filter may reference the type, labels, and metadata of monitored resources that
       * comprise the group. For example, to return only resources representing Compute Engine VM instances, use this filter:
       * resource.type = "gce_instance"
       */
      filter?: string,

      /**
       * Required. The end of the time interval.
       */
      "interval.endTime"?: string,

      /**
       * Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
       */
      "interval.startTime"?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The group whose members are listed. The format is "projects/{project_id_or_number}/groups/{group_id}".
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A positive number that is the maximum number of results to return.
       */
      pageSize?: number,

      /**
       * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method
       * to return additional results from the previous method call.
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
    }): Request<gapi$client$monitoring$ListGroupMembersResponse>;
  }

  declare interface gapi$client$monitoring$GroupsResource {
    /**
     * Creates a new group.
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
       * The project in which to create the group. The format is "projects/{project_id_or_number}".
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
      upload_protocol?: string,

      /**
       * If true, validate this request but do not create the group.
       */
      validateOnly?: boolean
    }): Request<gapi$client$monitoring$Group>;

    /**
     * Deletes an existing group.
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
       * The group to delete. The format is "projects/{project_id_or_number}/groups/{group_id}".
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
     * Gets a single group.
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
       * The group to retrieve. The format is "projects/{project_id_or_number}/groups/{group_id}".
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
    }): Request<gapi$client$monitoring$Group>;

    /**
     * Lists the existing groups.
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
       * A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups that are ancestors of the specified group. The groups are returned in
       * order, starting with the immediate parent and ending with the most distant ancestor. If the specified group has no immediate parent, the results are
       * empty.
       */
      ancestorsOfGroup?: string,

      /**
       * OAuth bearer token.
       */
      bearer_token?: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns groups whose parentName field contains the group name. If no groups have
       * this parent, the results are empty.
       */
      childrenOfGroup?: string,

      /**
       * A group name: "projects/{project_id_or_number}/groups/{group_id}". Returns the descendants of the specified group. This is a superset of the results
       * returned by the childrenOfGroup filter, and includes children-of-children, and so forth.
       */
      descendantsOfGroup?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The project whose groups are to be listed. The format is "projects/{project_id_or_number}".
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A positive number that is the maximum number of results to return.
       */
      pageSize?: number,

      /**
       * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method
       * to return additional results from the previous method call.
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
    }): Request<gapi$client$monitoring$ListGroupsResponse>;

    /**
     * Updates an existing group. You can change any group attributes except name.
     */
    update(request: {
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
       * Output only. The name of this group. The format is "projects/{project_id_or_number}/groups/{group_id}". When creating a group, this field is ignored
       * and a new name is created consisting of the project specified in the call to CreateGroup and a unique {group_id} that is generated automatically.
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
      upload_protocol?: string,

      /**
       * If true, validate this request but do not update the existing group.
       */
      validateOnly?: boolean
    }): Request<gapi$client$monitoring$Group>;
    members: gapi$client$monitoring$MembersResource;
  }

  declare interface gapi$client$monitoring$MetricDescriptorsResource {
    /**
     * Creates a new metric descriptor. User-created metric descriptors define custom metrics.
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
       * The project on which to execute the request. The format is "projects/{project_id_or_number}".
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
    }): Request<gapi$client$monitoring$MetricDescriptor>;

    /**
     * Deletes a metric descriptor. Only user-created custom metrics can be deleted.
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
       * The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example of
       * {metric_id} is: "custom.googleapis.com/my_test_metric".
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
     * Gets a single metric descriptor. This method does not require a Stackdriver account.
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
       * The metric descriptor on which to execute the request. The format is "projects/{project_id_or_number}/metricDescriptors/{metric_id}". An example value
       * of {metric_id} is "compute.googleapis.com/instance/disk/read_bytes_count".
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
    }): Request<gapi$client$monitoring$MetricDescriptor>;

    /**
     * Lists metric descriptors that match a filter. This method does not require a Stackdriver account.
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
       * If this field is empty, all custom and system-defined metric descriptors are returned. Otherwise, the filter specifies which metric descriptors are to
       * be returned. For example, the following filter matches all custom metrics:
       * metric.type = starts_with("custom.googleapis.com/")
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The project on which to execute the request. The format is "projects/{project_id_or_number}".
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A positive number that is the maximum number of results to return.
       */
      pageSize?: number,

      /**
       * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method
       * to return additional results from the previous method call.
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
    }): Request<gapi$client$monitoring$ListMetricDescriptorsResponse>;
  }

  declare interface gapi$client$monitoring$MonitoredResourceDescriptorsResource {
    /**
     * Gets a single monitored resource descriptor. This method does not require a Stackdriver account.
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
       * The monitored resource descriptor to get. The format is "projects/{project_id_or_number}/monitoredResourceDescriptors/{resource_type}". The
       * {resource_type} is a predefined type, such as cloudsql_database.
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
    }): Request<gapi$client$monitoring$MonitoredResourceDescriptor>;

    /**
     * Lists monitored resource descriptors that match a filter. This method does not require a Stackdriver account.
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
       * An optional filter describing the descriptors to be returned. The filter can reference the descriptor's type and labels. For example, the following
       * filter returns only Google Compute Engine descriptors that have an id label:
       * resource.type = starts_with("gce_") AND resource.label:id
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The project on which to execute the request. The format is "projects/{project_id_or_number}".
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A positive number that is the maximum number of results to return.
       */
      pageSize?: number,

      /**
       * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method
       * to return additional results from the previous method call.
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
    }): Request<gapi$client$monitoring$ListMonitoredResourceDescriptorsResponse>;
  }

  declare interface gapi$client$monitoring$TimeSeriesResource {
    /**
     * Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be
     * written, a corresponding failure message is included in the error response.
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
       * The project on which to execute the request. The format is "projects/{project_id_or_number}".
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
     * Lists time series that match a filter. This method does not require a Stackdriver account.
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
       * The alignment period for per-time series alignment. If present, alignmentPeriod must be at least 60 seconds. After per-time series alignment, each time
       * series will contain data points only on the period boundaries. If perSeriesAligner is not specified or equals ALIGN_NONE, then this field is ignored.
       * If perSeriesAligner is specified and does not equal ALIGN_NONE, then this field must be defined; otherwise an error is returned.
       */
      "aggregation.alignmentPeriod"?: string,

      /**
       * The approach to be used to combine time series. Not all reducer functions may be applied to all time series, depending on the metric type and the value
       * type of the original time series. Reduction may change the metric type of value type of the time series.Time series data must be aligned in order to
       * perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE and
       * alignmentPeriod must be specified; otherwise, an error is returned.
       */
      "aggregation.crossSeriesReducer"?: string,

      /**
       * The set of fields to preserve when crossSeriesReducer is specified. The groupByFields determine how the time series are partitioned into subsets prior
       * to applying the aggregation function. Each subset contains time series that have the same value for each of the grouping fields. Each individual time
       * series is a member of exactly one subset. The crossSeriesReducer is applied to each subset of time series. It is not possible to reduce across
       * different resource types, so this field implicitly contains resource.type. Fields not specified in groupByFields are aggregated away. If groupByFields
       * is not specified and all the time series have the same resource type, then the time series are aggregated into a single output time series. If
       * crossSeriesReducer is not defined, this field is ignored.
       */
      "aggregation.groupByFields"?: string,

      /**
       * The approach to be used to align individual time series. Not all alignment functions may be applied to all time series, depending on the metric type
       * and value type of the original time series. Alignment may change the metric type or the value type of the time series.Time series data must be aligned
       * in order to perform cross-time series reduction. If crossSeriesReducer is specified, then perSeriesAligner must be specified and not equal ALIGN_NONE
       * and alignmentPeriod must be specified; otherwise, an error is returned.
       */
      "aggregation.perSeriesAligner"?: string,

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
       * A monitoring filter that specifies which time series should be returned. The filter must specify a single metric type, and can additionally specify
       * metric labels and other information. For example:
       * metric.type = "compute.googleapis.com/instance/cpu/usage_time" AND
       * metric.label.instance_name = "my-instance-name"
       */
      filter?: string,

      /**
       * Required. The end of the time interval.
       */
      "interval.endTime"?: string,

      /**
       * Optional. The beginning of the time interval. The default value for the start time is the end time. The start time must not be later than the end time.
       */
      "interval.startTime"?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The project on which to execute the request. The format is "projects/{project_id_or_number}".
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Specifies the order in which the points of the time series should be returned. By default, results are not ordered. Currently, this field must be left
       * blank.
       */
      orderBy?: string,

      /**
       * A positive number that is the maximum number of results to return. When view field sets to FULL, it limits the number of Points server will return; if
       * view field is HEADERS, it limits the number of TimeSeries server will return.
       */
      pageSize?: number,

      /**
       * If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method
       * to return additional results from the previous method call.
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
      upload_protocol?: string,

      /**
       * Specifies which information is returned about the time series.
       */
      view?: string
    }): Request<gapi$client$monitoring$ListTimeSeriesResponse>;
  }

  declare interface gapi$client$monitoring$ProjectsResource {
    collectdTimeSeries: gapi$client$monitoring$CollectdTimeSeriesResource;
    groups: gapi$client$monitoring$GroupsResource;
    metricDescriptors: gapi$client$monitoring$MetricDescriptorsResource;
    monitoredResourceDescriptors: gapi$client$monitoring$MonitoredResourceDescriptorsResource;
    timeSeries: gapi$client$monitoring$TimeSeriesResource;
  }
}
