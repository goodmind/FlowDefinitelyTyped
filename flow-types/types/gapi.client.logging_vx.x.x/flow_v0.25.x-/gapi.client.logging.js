declare module "gapi.client.logging" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    billingAccounts: typeof client$billingAccounts,
    entries: typeof client$entries,
    folders: typeof client$folders,
    monitoredResourceDescriptors: typeof client$monitoredResourceDescriptors,
    organizations: typeof client$organizations,
    projects: typeof client$projects
  };

  /**
   * Load Stackdriver Logging API v2
   */
  declare function client$load(
    name: "logging",
    version: "v2"
  ): PromiseLike<void>;

  declare function client$load(
    name: "logging",
    version: "v2",
    callback: () => any
  ): void;

  declare var client$billingAccounts: logging$logging$BillingAccountsResource;

  declare var client$entries: logging$logging$EntriesResource;

  declare var client$folders: logging$logging$FoldersResource;

  declare var client$monitoredResourceDescriptors: logging$logging$MonitoredResourceDescriptorsResource;

  declare var client$organizations: logging$logging$OrganizationsResource;

  declare var client$projects: logging$logging$ProjectsResource;

  declare interface logging$BucketOptions {
    /**
     * The explicit buckets.
     */
    explicitBuckets?: logging$Explicit;

    /**
     * The exponential buckets.
     */
    exponentialBuckets?: logging$Exponential;

    /**
     * The linear bucket.
     */
    linearBuckets?: logging$Linear;
  }

  declare interface logging$Explicit {
    /**
     * The values must be monotonically increasing.
     */
    bounds?: number[];
  }

  declare interface logging$Exponential {
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

  declare interface logging$HttpRequest {
    /**
     * The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted.
     */
    cacheFillBytes?: string;

    /**
     * Whether or not an entity was served from cache (with or without validation).
     */
    cacheHit?: boolean;

    /**
     * Whether or not a cache lookup was attempted.
     */
    cacheLookup?: boolean;

    /**
     * Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if cache_hit is True.
     */
    cacheValidatedWithOriginServer?: boolean;

    /**
     * The request processing latency on the server, from the time the request was received until the response was sent.
     */
    latency?: string;

    /**
     * Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket"
     */
    protocol?: string;

    /**
     * The referer URL of the request, as defined in HTTP/1.1 Header Field Definitions (http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
     */
    referer?: string;

    /**
     * The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: "192.168.1.1", "FE80::0202:B3FF:FE1E:8329".
     */
    remoteIp?: string;

    /**
     * The request method. Examples: "GET", "HEAD", "PUT", "POST".
     */
    requestMethod?: string;

    /**
     * The size of the HTTP request message in bytes, including the request headers and the request body.
     */
    requestSize?: string;

    /**
     * The scheme (http, https), the host name, the path and the query portion of the URL that was requested. Example:
     * "http://example.com/some/info?color=red".
     */
    requestUrl?: string;

    /**
     * The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body.
     */
    responseSize?: string;

    /**
     * The IP address (IPv4 or IPv6) of the origin server that the request was sent to.
     */
    serverIp?: string;

    /**
     * The response code indicating the status of response. Examples: 200, 404.
     */
    status?: number;

    /**
     * The user agent sent by the client. Example: "Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)".
     */
    userAgent?: string;
  }

  declare interface logging$LabelDescriptor {
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

  declare interface logging$Linear {
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

  declare interface logging$ListExclusionsResponse {
    /**
     * A list of exclusions.
     */
    exclusions?: logging$LogExclusion[];

    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again
     * using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string;
  }

  declare interface logging$ListLogEntriesRequest {
    /**
     * Optional. A filter that chooses which log entries to return. See Advanced Logs Filters. Only log entries that match the filter are returned. An empty
     * filter matches all log entries in the resources listed in resource_names. Referencing a parent resource that is not listed in resource_names will cause
     * the filter to return no results. The maximum length of the filter is 20000 characters.
     */
    filter?: string;

    /**
     * Optional. How the results should be sorted. Presently, the only permitted values are "timestamp asc" (default) and "timestamp desc". The first option
     * returns entries in order of increasing values of LogEntry.timestamp (oldest first), and the second option returns entries in order of decreasing
     * timestamps (newest first). Entries with equal timestamps are returned in order of their insert_id values.
     */
    orderBy?: string;

    /**
     * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of next_page_token in the response
     * indicates that more results might be available.
     */
    pageSize?: number;

    /**
     * Optional. If present, then retrieve the next batch of results from the preceding call to this method. page_token must be the value of next_page_token
     * from the previous response. The values of other method parameters should be identical to those in the previous call.
     */
    pageToken?: string;

    /**
     * Deprecated. Use resource_names instead. One or more project identifiers or project numbers from which to retrieve log entries. Example:
     * "my-project-1A". If present, these project identifiers are converted to resource name format and added to the list of resources in resource_names.
     */
    projectIds?: string[];

    /**
     * Required. Names of one or more parent resources from which to retrieve log entries:
     * "projects/[PROJECT_ID]"
     * "organizations/[ORGANIZATION_ID]"
     * "billingAccounts/[BILLING_ACCOUNT_ID]"
     * "folders/[FOLDER_ID]"
     * Projects listed in the project_ids field are added to this list.
     */
    resourceNames?: string[];
  }

  declare interface logging$ListLogEntriesResponse {
    /**
     * A list of log entries. If entries is empty, nextPageToken may still be returned, indicating that more entries may exist. See nextPageToken for more
     * information.
     */
    client$entries?: logging$LogEntry[];

    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method
     * again using the value of nextPageToken as pageToken.If a value for next_page_token appears and the entries field is empty, it means that the search
     * found no log entries so far but it did not have time to search all the possible log entries. Retry the method with this value for page_token to
     * continue the search. Alternatively, consider speeding up the search by changing your filter to specify a single log name or resource type, or to narrow
     * the time range of the search.
     */
    nextPageToken?: string;
  }

  declare interface logging$ListLogMetricsResponse {
    /**
     * A list of logs-based metrics.
     */
    metrics?: logging$LogMetric[];

    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call this method again
     * using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string;
  }

  declare interface logging$ListLogsResponse {
    /**
     * A list of log names. For example, "projects/my-project/syslog" or "organizations/123/cloudresourcemanager.googleapis.com%2Factivity".
     */
    logNames?: string[];

    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method
     * again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string;
  }

  declare interface logging$ListMonitoredResourceDescriptorsResponse {
    /**
     * If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method
     * again using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string;

    /**
     * A list of resource descriptors.
     */
    resourceDescriptors?: logging$MonitoredResourceDescriptor[];
  }

  declare interface logging$ListSinksResponse {
    /**
     * If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again
     * using the value of nextPageToken as pageToken.
     */
    nextPageToken?: string;

    /**
     * A list of sinks.
     */
    sinks?: logging$LogSink[];
  }

  declare interface logging$LogEntry {
    /**
     * Optional. Information about the HTTP request associated with this log entry, if applicable.
     */
    httpRequest?: logging$HttpRequest;

    /**
     * Optional. A unique identifier for the log entry. If you provide a value, then Stackdriver Logging considers other log entries in the same project, with
     * the same timestamp, and with the same insert_id to be duplicates which can be removed. If omitted in new log entries, then Stackdriver Logging assigns
     * its own unique identifier. The insert_id is also used to order log entries that have the same timestamp value.
     */
    insertId?: string;

    /**
     * The log entry payload, represented as a structure that is expressed as a JSON object.
     */
    jsonPayload?: Record<string, any>;

    /**
     * Optional. A set of user-defined (key, value) data that provides additional information about the log entry.
     */
    labels?: Record<string, string>;

    /**
     * Required. The resource name of the log to which this log entry belongs:
     * "projects/[PROJECT_ID]/logs/[LOG_ID]"
     * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     * "folders/[FOLDER_ID]/logs/[LOG_ID]"
     * A project number may optionally be used in place of PROJECT_ID. The  project number is translated to its corresponding PROJECT_ID internally  and the
     * log_name field will contain PROJECT_ID in queries and exports.[LOG_ID] must be URL-encoded within log_name. Example:
     * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". [LOG_ID] must be less than 512 characters long and can only include the
     * following characters: upper and lower case alphanumeric characters, forward-slash, underscore, hyphen, and period.For backward compatibility, if
     * log_name begins with a forward-slash, such as /projects/..., then the log entry is ingested as usual but the forward-slash is removed. Listing the log
     * entry will not show the leading slash and filtering for a log name with a leading slash will never return any results.
     */
    logName?: string;

    /**
     * Optional. Information about an operation associated with the log entry, if applicable.
     */
    operation?: logging$LogEntryOperation;

    /**
     * The log entry payload, represented as a protocol buffer. Some Google Cloud Platform services use this field for their log entry payloads.
     */
    protoPayload?: Record<string, any>;

    /**
     * Output only. The time the log entry was received by Stackdriver Logging.
     */
    receiveTimestamp?: string;

    /**
     * Required. The monitored resource associated with this log entry. Example: a log entry that reports a database error would be associated with the
     * monitored resource designating the particular database that reported the error.
     */
    resource?: logging$MonitoredResource;

    /**
     * Optional. The severity of the log entry. The default value is LogSeverity.DEFAULT.
     */
    severity?: string;

    /**
     * Optional. Source code location information associated with the log entry, if any.
     */
    sourceLocation?: logging$LogEntrySourceLocation;

    /**
     * The log entry payload, represented as a Unicode string (UTF-8).
     */
    textPayload?: string;

    /**
     * Optional. The time the event described by the log entry occurred. This time is used to compute the log entry's age and to enforce the logs retention
     * period. If this field is omitted in a new log entry, then Stackdriver Logging assigns it the current time.Incoming log entries should have timestamps
     * that are no more than the logs retention period in the past, and no more than 24 hours in the future. See the entries.write API method for more
     * information.
     */
    timestamp?: string;

    /**
     * Optional. Resource name of the trace associated with the log entry, if any. If it contains a relative resource name, the name is assumed to be relative
     * to //tracing.googleapis.com. Example: projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824
     */
    trace?: string;
  }

  declare interface logging$LogEntryOperation {
    /**
     * Optional. Set this to True if this is the first log entry in the operation.
     */
    first?: boolean;

    /**
     * Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation.
     */
    id?: string;

    /**
     * Optional. Set this to True if this is the last log entry in the operation.
     */
    last?: boolean;

    /**
     * Optional. An arbitrary producer identifier. The combination of id and producer must be globally unique. Examples for producer:
     * "MyDivision.MyBigCompany.com", "github.com/MyProject/MyApplication".
     */
    producer?: string;
  }

  declare interface logging$LogEntrySourceLocation {
    /**
     * Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string;

    /**
     * Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be
     * used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example:
     * qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
     */
    function?: string;

    /**
     * Optional. Line within the source file. 1-based; 0 indicates no line number available.
     */
    line?: string;
  }

  declare interface logging$LogExclusion {
    /**
     * Optional. A description of this exclusion.
     */
    description?: string;

    /**
     * Optional. If set to True, then this exclusion is disabled and it does not exclude any log entries. You can use exclusions.patch to change the value of
     * this field.
     */
    disabled?: boolean;

    /**
     * Required. An advanced logs filter that matches the log entries to be excluded. By using the sample function, you can exclude less than 100% of the
     * matching log entries. For example, the following filter matches 99% of low-severity log entries from load balancers:
     * "resource.type=http_load_balancer severity<ERROR sample(insertId, 0.99)"
     */
    filter?: string;

    /**
     * Required. A client-assigned identifier, such as "load-balancer-exclusion". Identifiers are limited to 100 characters and can include only letters,
     * digits, underscores, hyphens, and periods.
     */
    name?: string;
  }

  declare interface logging$LogLine {
    /**
     * App-provided log message.
     */
    logMessage?: string;

    /**
     * Severity of this log entry.
     */
    severity?: string;

    /**
     * Where in the source code this log message was written.
     */
    sourceLocation?: logging$SourceLocation;

    /**
     * Approximate time when this log entry was made.
     */
    time?: string;
  }

  declare interface logging$LogMetric {
    /**
     * Optional. The bucket_options are required when the logs-based metric is using a DISTRIBUTION value type and it describes the bucket boundaries used to
     * create a histogram of the extracted values.
     */
    bucketOptions?: logging$BucketOptions;

    /**
     * Optional. A description of this metric, which is used in documentation.
     */
    description?: string;

    /**
     * Required. An advanced logs filter which is used to match log entries. Example:
     * "resource.type=gae_app AND severity>=ERROR"
     * The maximum length of the filter is 20000 characters.
     */
    filter?: string;

    /**
     * Optional. A map from a label key string to an extractor expression which is used to extract data from a log entry field and assign as the label value.
     * Each label key specified in the LabelDescriptor must have an associated extractor expression in this map. The syntax of the extractor expression is the
     * same as for the value_extractor field.The extracted value is converted to the type defined in the label descriptor. If the either the extraction or the
     * type conversion fails, the label will have a default value. The default value for a string label is an empty string, for an integer label its 0, and
     * for a boolean label its false.Note that there are upper bounds on the maximum number of labels and the number of active time series that are allowed in
     * a project.
     */
    labelExtractors?: Record<string, string>;

    /**
     * Optional. The metric descriptor associated with the logs-based metric. If unspecified, it uses a default metric descriptor with a DELTA metric kind,
     * INT64 value type, with no labels and a unit of "1". Such a metric counts the number of log entries matching the filter expression.The name, type, and
     * description fields in the metric_descriptor are output only, and is constructed using the name and description field in the LogMetric.To create a
     * logs-based metric that records a distribution of log values, a DELTA metric kind with a DISTRIBUTION value type must be used along with a
     * value_extractor expression in the LogMetric.Each label in the metric descriptor must have a matching label name as the key and an extractor expression
     * as the value in the label_extractors map.The metric_kind and value_type fields in the metric_descriptor cannot be updated once initially configured.
     * New labels can be added in the metric_descriptor, but existing labels cannot be modified except for their description.
     */
    metricDescriptor?: logging$MetricDescriptor;

    /**
     * Required. The client-assigned metric identifier. Examples: "error_count", "nginx/requests".Metric identifiers are limited to 100 characters and can
     * include only the following characters: A-Z, a-z, 0-9, and the special characters _-.,+!&#42;',()%/. The forward-slash character (/) denotes a hierarchy of
     * name pieces, and it cannot be the first character of the name.The metric identifier in this field must not be URL-encoded
     * (https://en.wikipedia.org/wiki/Percent-encoding). However, when the metric identifier appears as the [METRIC_ID] part of a metric_name API parameter,
     * then the metric identifier must be URL-encoded. Example: "projects/my-project/metrics/nginx%2Frequests".
     */
    name?: string;

    /**
     * Optional. A value_extractor is required when using a distribution logs-based metric to extract the values to record from a log entry. Two functions are
     * supported for value extraction: EXTRACT(field) or REGEXP_EXTRACT(field, regex). The argument are:  1. field: The name of the log entry field from which
     * the value is to be  extracted.  2. regex: A regular expression using the Google RE2 syntax  (https://github.com/google/re2/wiki/Syntax) with a single
     * capture  group to extract data from the specified log entry field. The value  of the field is converted to a string before applying the regex.  It is
     * an error to specify a regex that does not include exactly one  capture group.The result of the extraction must be convertible to a double type, as the
     * distribution always records double values. If either the extraction or the conversion to double fails, then those values are not recorded in the
     * distribution.Example: REGEXP_EXTRACT(jsonPayload.request, ".&#42;quantity=(\d+).&#42;")
     */
    valueExtractor?: string;

    /**
     * Deprecated. The API version that created or updated this metric. The v2 format is used by default and cannot be changed.
     */
    version?: string;
  }

  declare interface logging$LogSink {
    /**
     * Required. The export destination:
     * "storage.googleapis.com/[GCS_BUCKET]"
     * "bigquery.googleapis.com/projects/[PROJECT_ID]/datasets/[DATASET]"
     * "pubsub.googleapis.com/projects/[PROJECT_ID]/topics/[TOPIC_ID]"
     * The sink's writer_identity, set when the sink is created, must have permission to write to the destination or else the log entries are not exported.
     * For more information, see Exporting Logs With Sinks.
     */
    destination?: string;

    /**
     * Deprecated. This field is ignored when creating or updating sinks.
     */
    endTime?: string;

    /**
     * Optional. An advanced logs filter. The only exported log entries are those that are in the resource owning the sink and that match the filter. For
     * example:
     * logName="projects/[PROJECT_ID]/logs/[LOG_ID]" AND severity>=ERROR
     */
    filter?: string;

    /**
     * Optional. This field applies only to sinks owned by organizations and folders. If the field is false, the default, only the logs owned by the sink's
     * parent resource are available for export. If the field is true, then logs from all the projects, folders, and billing accounts contained in the sink's
     * parent resource are also available for export. Whether a particular log entry from the children is exported depends on the sink's filter expression.
     * For example, if this field is true, then the filter resource.type=gce_instance would export all Compute Engine VM instance log entries from all
     * projects in the sink's parent. To only export entries from certain child projects, filter on the project part of the log name:
     * logName:("projects/test-project1/" OR "projects/test-project2/") AND
     * resource.type=gce_instance
     */
    includeChildren?: boolean;

    /**
     * Required. The client-assigned sink identifier, unique within the project. Example: "my-syslog-errors-to-pubsub". Sink identifiers are limited to 100
     * characters and can include only the following characters: upper and lower-case alphanumeric characters, underscores, hyphens, and periods.
     */
    name?: string;

    /**
     * Deprecated. The log entry format to use for this sink's exported log entries. The v2 format is used by default and cannot be changed.
     */
    outputVersionFormat?: string;

    /**
     * Deprecated. This field is ignored when creating or updating sinks.
     */
    startTime?: string;

    /**
     * Output only. An IAM identity&mdash;a service account or group&mdash;under which Stackdriver Logging writes the exported log entries to the sink's
     * destination. This field is set by sinks.create and sinks.update, based on the setting of unique_writer_identity in those methods.Until you grant this
     * identity write-access to the destination, log entry exports from this sink will fail. For more information, see Granting access for a resource. Consult
     * the destination service's documentation to determine the appropriate IAM roles to assign to the identity.
     */
    writerIdentity?: string;
  }

  declare interface logging$MetricDescriptor {
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
    labels?: logging$LabelDescriptor[];

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

  declare interface logging$MonitoredResource {
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

  declare interface logging$MonitoredResourceDescriptor {
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
    labels?: logging$LabelDescriptor[];

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

  declare interface logging$RequestLog {
    /**
     * App Engine release version.
     */
    appEngineRelease?: string;

    /**
     * Application that handled this request.
     */
    appId?: string;

    /**
     * An indication of the relative cost of serving this request.
     */
    cost?: number;

    /**
     * Time when the request finished.
     */
    endTime?: string;

    /**
     * Whether this request is finished or active.
     */
    finished?: boolean;

    /**
     * Whether this is the first RequestLog entry for this request. If an active request has several RequestLog entries written to Stackdriver Logging, then
     * this field will be set for one of them.
     */
    first?: boolean;

    /**
     * Internet host and port number of the resource being requested.
     */
    host?: string;

    /**
     * HTTP version of request. Example: "HTTP/1.1".
     */
    httpVersion?: string;

    /**
     * An identifier for the instance that handled the request.
     */
    instanceId?: string;

    /**
     * If the instance processing this request belongs to a manually scaled module, then this is the 0-based index of the instance. Otherwise, this value is
     * -1.
     */
    instanceIndex?: number;

    /**
     * Origin IP address.
     */
    ip?: string;

    /**
     * Latency of the request.
     */
    latency?: string;

    /**
     * A list of log lines emitted by the application while serving this request.
     */
    line?: logging$LogLine[];

    /**
     * Number of CPU megacycles used to process request.
     */
    megaCycles?: string;

    /**
     * Request method. Example: "GET", "HEAD", "PUT", "POST", "DELETE".
     */
    method?: string;

    /**
     * Module of the application that handled this request.
     */
    moduleId?: string;

    /**
     * The logged-in user who made the request.Most likely, this is the part of the user's email before the @ sign. The field value is the same for different
     * requests from the same user, but different users can have similar names. This information is also available to the application via the App Engine Users
     * API.This field will be populated starting with App Engine 1.9.21.
     */
    nickname?: string;

    /**
     * Time this request spent in the pending request queue.
     */
    pendingTime?: string;

    /**
     * Referrer URL of request.
     */
    referrer?: string;

    /**
     * Globally unique identifier for a request, which is based on the request start time. Request IDs for requests which started later will compare greater
     * as strings than those for requests which started earlier.
     */
    requestId?: string;

    /**
     * Contains the path and query portion of the URL that was requested. For example, if the URL was "http://example.com/app?name=val", the resource would be
     * "/app?name=val". The fragment identifier, which is identified by the # character, is not included.
     */
    resource?: string;

    /**
     * Size in bytes sent back to client by request.
     */
    responseSize?: string;

    /**
     * Source code for the application that handled this request. There can be more than one source reference per deployed application if source code is
     * distributed among multiple repositories.
     */
    sourceReference?: logging$SourceReference[];

    /**
     * Time when the request started.
     */
    startTime?: string;

    /**
     * HTTP response status code. Example: 200, 404.
     */
    status?: number;

    /**
     * Task name of the request, in the case of an offline request.
     */
    taskName?: string;

    /**
     * Queue name of the request, in the case of an offline request.
     */
    taskQueueName?: string;

    /**
     * Stackdriver Trace identifier for this request.
     */
    traceId?: string;

    /**
     * File or class that handled the request.
     */
    urlMapEntry?: string;

    /**
     * User agent that made the request.
     */
    userAgent?: string;

    /**
     * Version of the application that handled this request.
     */
    versionId?: string;

    /**
     * Whether this was a loading request for the instance.
     */
    wasLoadingRequest?: boolean;
  }

  declare interface logging$SourceLocation {
    /**
     * Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name.
     */
    file?: string;

    /**
     * Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information is used in
     * contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example:
     * qual.if.ied.Class.method (Java), dir/package.func (Go), function (Python).
     */
    functionName?: string;

    /**
     * Line within the source file.
     */
    line?: string;
  }

  declare interface logging$SourceReference {
    /**
     * Optional. A URI string identifying the repository. Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
     */
    repository?: string;

    /**
     * The canonical and persistent identifier of the deployed revision. Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"
     */
    revisionId?: string;
  }

  declare interface logging$WriteLogEntriesRequest {
    /**
     * Required. The log entries to send to Stackdriver Logging. The order of log entries in this list does not matter. Values supplied in this method's
     * log_name, resource, and labels fields are copied into those log entries in this list that do not include values for their corresponding fields. For
     * more information, see the LogEntry type.If the timestamp or insert_id fields are missing in log entries, then this method supplies the current time or
     * a unique identifier, respectively. The supplied values are chosen so that, among the log entries that did not supply their own values, the entries
     * earlier in the list will sort before the entries later in the list. See the entries.list method.Log entries with timestamps that are more than the logs
     * retention period in the past or more than 24 hours in the future might be discarded. Discarding does not return an error.To improve throughput and to
     * avoid exceeding the quota limit for calls to entries.write, you should try to include several log entries in this list, rather than calling this method
     * for each individual log entry.
     */
    client$entries?: logging$LogEntry[];

    /**
     * Optional. Default labels that are added to the labels field of all log entries in entries. If a log entry already has a label with the same key as a
     * label in this parameter, then the log entry's label is not changed. See LogEntry.
     */
    labels?: Record<string, string>;

    /**
     * Optional. A default log resource name that is assigned to all log entries in entries that do not specify a value for log_name:
     * "projects/[PROJECT_ID]/logs/[LOG_ID]"
     * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
     * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
     * "folders/[FOLDER_ID]/logs/[LOG_ID]"
     * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog" or
     * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
     */
    logName?: string;

    /**
     * Optional. Whether valid entries should be written even if some other entries fail due to INVALID_ARGUMENT or PERMISSION_DENIED errors. If any entry is
     * not written, then the response status is the error associated with one of the failed entries and the response includes error details keyed by the
     * entries' zero-based index in the entries.write method.
     */
    partialSuccess?: boolean;

    /**
     * Optional. A default monitored resource object that is assigned to all log entries in entries that do not specify a value for resource. Example:
     * { "type": "gce_instance",
     * "labels": {
     * "zone": "us-central1-a", "instance_id": "00000000000000000000" }}
     * See LogEntry.
     */
    resource?: logging$MonitoredResource;
  }

  declare interface logging$ExclusionsResource {
    /**
     * Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions
     * in a resource.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The parent resource in which to create the exclusion:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
    }): Request<logging$LogExclusion>;

    /**
     * Deletes an exclusion.
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
       * Required. The resource name of an existing exclusion to delete:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
     * Gets the description of an exclusion.
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
       * Required. The resource name of an existing exclusion:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
    }): Request<logging$LogExclusion>;

    /**
     * Lists all the exclusions in a parent resource.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose exclusions are to be listed.
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListExclusionsResponse>;

    /**
     * Changes one or more properties of an existing exclusion.
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
       * Required. The resource name of the exclusion to update:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
       * Required. A nonempty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the
       * LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the
       * filter and description of an exclusion, specify an update_mask of "filter,description".
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
    }): Request<logging$LogExclusion>;

    /**
     * Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions
     * in a resource.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The parent resource in which to create the exclusion:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
    }): Request<logging$LogExclusion>;

    /**
     * Deletes an exclusion.
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
       * Required. The resource name of an existing exclusion to delete:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
     * Gets the description of an exclusion.
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
       * Required. The resource name of an existing exclusion:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
    }): Request<logging$LogExclusion>;

    /**
     * Lists all the exclusions in a parent resource.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose exclusions are to be listed.
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListExclusionsResponse>;

    /**
     * Changes one or more properties of an existing exclusion.
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
       * Required. The resource name of the exclusion to update:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
       * Required. A nonempty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the
       * LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the
       * filter and description of an exclusion, specify an update_mask of "filter,description".
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
    }): Request<logging$LogExclusion>;

    /**
     * Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions
     * in a resource.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The parent resource in which to create the exclusion:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
    }): Request<logging$LogExclusion>;

    /**
     * Deletes an exclusion.
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
       * Required. The resource name of an existing exclusion to delete:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
     * Gets the description of an exclusion.
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
       * Required. The resource name of an existing exclusion:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
    }): Request<logging$LogExclusion>;

    /**
     * Lists all the exclusions in a parent resource.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose exclusions are to be listed.
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListExclusionsResponse>;

    /**
     * Changes one or more properties of an existing exclusion.
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
       * Required. The resource name of the exclusion to update:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
       * Required. A nonempty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the
       * LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the
       * filter and description of an exclusion, specify an update_mask of "filter,description".
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
    }): Request<logging$LogExclusion>;

    /**
     * Creates a new exclusion in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions
     * in a resource.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The parent resource in which to create the exclusion:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
    }): Request<logging$LogExclusion>;

    /**
     * Deletes an exclusion.
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
       * Required. The resource name of an existing exclusion to delete:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
     * Gets the description of an exclusion.
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
       * Required. The resource name of an existing exclusion:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
    }): Request<logging$LogExclusion>;

    /**
     * Lists all the exclusions in a parent resource.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose exclusions are to be listed.
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListExclusionsResponse>;

    /**
     * Changes one or more properties of an existing exclusion.
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
       * Required. The resource name of the exclusion to update:
       * "projects/[PROJECT_ID]/exclusions/[EXCLUSION_ID]"
       * "organizations/[ORGANIZATION_ID]/exclusions/[EXCLUSION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/exclusions/[EXCLUSION_ID]"
       * "folders/[FOLDER_ID]/exclusions/[EXCLUSION_ID]"
       * Example: "projects/my-project-id/exclusions/my-exclusion-id".
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
       * Required. A nonempty list of fields to change in the existing exclusion. New values for the fields are taken from the corresponding fields in the
       * LogExclusion included in this request. Fields not mentioned in update_mask are not changed and are ignored in the request.For example, to change the
       * filter and description of an exclusion, specify an update_mask of "filter,description".
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
    }): Request<logging$LogExclusion>;
  }

  declare interface logging$LogsResource {
    /**
     * Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not
     * be deleted.
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
       * Required. The resource name of the log to delete:
       * "projects/[PROJECT_ID]/logs/[LOG_ID]"
       * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
       * "folders/[FOLDER_ID]/logs/[LOG_ID]"
       * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog",
       * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
       */
      logName: string,

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
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The resource name that owns the logs:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListLogsResponse>;

    /**
     * Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not
     * be deleted.
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
       * Required. The resource name of the log to delete:
       * "projects/[PROJECT_ID]/logs/[LOG_ID]"
       * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
       * "folders/[FOLDER_ID]/logs/[LOG_ID]"
       * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog",
       * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
       */
      logName: string,

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
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The resource name that owns the logs:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListLogsResponse>;

    /**
     * Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not
     * be deleted.
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
       * Required. The resource name of the log to delete:
       * "projects/[PROJECT_ID]/logs/[LOG_ID]"
       * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
       * "folders/[FOLDER_ID]/logs/[LOG_ID]"
       * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog",
       * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
       */
      logName: string,

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
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The resource name that owns the logs:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListLogsResponse>;

    /**
     * Deletes all the log entries in a log. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not
     * be deleted.
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
       * Required. The resource name of the log to delete:
       * "projects/[PROJECT_ID]/logs/[LOG_ID]"
       * "organizations/[ORGANIZATION_ID]/logs/[LOG_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/logs/[LOG_ID]"
       * "folders/[FOLDER_ID]/logs/[LOG_ID]"
       * [LOG_ID] must be URL-encoded. For example, "projects/my-project-id/logs/syslog",
       * "organizations/1234567890/logs/cloudresourcemanager.googleapis.com%2Factivity". For more information about log names, see LogEntry.
       */
      logName: string,

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
     * Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The resource name that owns the logs:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListLogsResponse>;
  }

  declare interface logging$SinksResource {
    /**
     * Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's
     * writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The resource in which to create the sink:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
       * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's
       * parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of
       * writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is
       * owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from
       * the new sink. For more information, see writer_identity in LogSink.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
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
       * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

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
     * Gets a sink.
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
       * Required. The resource name of the sink:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Lists sinks.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose sinks are to be listed:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListSinksResponse>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's
     * writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The resource in which to create the sink:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
       * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's
       * parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of
       * writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is
       * owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from
       * the new sink. For more information, see writer_identity in LogSink.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
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
       * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

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
     * Gets a sink.
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
       * Required. The resource name of the sink:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Lists sinks.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose sinks are to be listed:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListSinksResponse>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's
     * writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The resource in which to create the sink:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
       * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's
       * parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of
       * writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is
       * owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from
       * the new sink. For more information, see writer_identity in LogSink.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
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
       * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

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
     * Gets a sink.
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
       * Required. The resource name of the sink:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Lists sinks.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose sinks are to be listed:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListSinksResponse>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Creates a sink that exports specified log entries to a destination. The export of newly-ingested log entries begins immediately, unless the sink's
     * writer_identity is not permitted to write to the destination. A sink can export log entries only from the resource owning the sink.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The resource in which to create the sink:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
       * Examples: "projects/my-logging-project", "organizations/123456789".
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
       * Optional. Determines the kind of IAM identity returned as writer_identity in the new sink. If this value is omitted or set to false, and if the sink's
       * parent is a project, then the value returned as writer_identity is the same group or service account used by Stackdriver Logging before the addition of
       * writer identities to this API. The sink's destination must be in the same project as the sink itself.If this field is set to true, or if the sink is
       * owned by a non-project resource such as an organization, then the value of writer_identity will be a unique service account used only for exports from
       * the new sink. For more information, see writer_identity in LogSink.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Deletes a sink. If the sink has a unique writer_identity, then that service account is also deleted.
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
       * Required. The full resource name of the sink to delete, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

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
     * Gets a sink.
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
       * Required. The resource name of the sink:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<logging$LogSink>;

    /**
     * Lists sinks.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The parent resource whose sinks are to be listed:
       * "projects/[PROJECT_ID]"
       * "organizations/[ORGANIZATION_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]"
       * "folders/[FOLDER_ID]"
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
    }): Request<logging$ListSinksResponse>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;

    /**
     * Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter. The updated sink
     * might also have a new writer_identity; see the unique_writer_identity field.
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
       * Required. The full resource name of the sink to update, including the parent resource and the sink identifier:
       * "projects/[PROJECT_ID]/sinks/[SINK_ID]"
       * "organizations/[ORGANIZATION_ID]/sinks/[SINK_ID]"
       * "billingAccounts/[BILLING_ACCOUNT_ID]/sinks/[SINK_ID]"
       * "folders/[FOLDER_ID]/sinks/[SINK_ID]"
       * Example: "projects/my-project-id/sinks/my-sink-id".
       */
      sinkName: string,

      /**
       * Optional. See sinks.create for a description of this field. When updating a sink, the effect of this field on the value of writer_identity in the
       * updated sink depends on both the old and new values of this field:
       * If the old and new values of this field are both false or both true, then there is no change to the sink's writer_identity.
       * If the old value is false and the new value is true, then writer_identity is changed to a unique service account.
       * It is an error if the old value is true and the new value is set to false or defaulted to false.
       */
      uniqueWriterIdentity?: boolean,

      /**
       * Optional. Field mask that specifies the fields in sink that need an update. A sink field will be overwritten if, and only if, it is in the update mask.
       * name and output only fields cannot be updated.An empty updateMask is temporarily treated as using the following mask for backwards compatibility
       * purposes:  destination,filter,includeChildren At some point in the future, behavior will be removed and specifying an empty updateMask will be an
       * error.For a detailed FieldMask definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmaskExample:
       * updateMask=filter.
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
    }): Request<logging$LogSink>;
  }

  declare interface logging$BillingAccountsResource {
    exclusions: logging$ExclusionsResource;
    logs: logging$LogsResource;
    sinks: logging$SinksResource;
  }

  declare interface logging$EntriesResource {
    /**
     * Lists log entries. Use this method to retrieve log entries from Stackdriver Logging. For ways to export log entries, see Exporting Logs.
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
    }): Request<logging$ListLogEntriesResponse>;

    /**
     * Log entry resourcesWrites log entries to Stackdriver Logging. This API method is the only way to send log entries to Stackdriver Logging. This method
     * is used, directly or indirectly, by the Stackdriver Logging agent (fluentd) and all logging libraries configured to use Stackdriver Logging.
     */
    write(request: {
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
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<{}>;
  }

  declare interface logging$FoldersResource {
    exclusions: logging$ExclusionsResource;
    logs: logging$LogsResource;
    sinks: logging$SinksResource;
  }

  declare interface logging$MonitoredResourceDescriptorsResource {
    /**
     * Lists the descriptors for monitored resource types used by Stackdriver Logging.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
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
    }): Request<logging$ListMonitoredResourceDescriptorsResponse>;
  }

  declare interface logging$OrganizationsResource {
    exclusions: logging$ExclusionsResource;
    logs: logging$LogsResource;
    sinks: logging$SinksResource;
  }

  declare interface logging$MetricsResource {
    /**
     * Creates a logs-based metric.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The resource name of the project in which to create the metric:
       * "projects/[PROJECT_ID]"
       * The new metric must be provided in the request.
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
    }): Request<logging$LogMetric>;

    /**
     * Deletes a logs-based metric.
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
       * The resource name of the metric to delete:
       * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
       */
      metricName: string,

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
     * Gets a logs-based metric.
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
       * The resource name of the desired metric:
       * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
       */
      metricName: string,

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
    }): Request<logging$LogMetric>;

    /**
     * Lists logs-based metrics.
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
       * Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of nextPageToken in the response
       * indicates that more results might be available.
       */
      pageSize?: number,

      /**
       * Optional. If present, then retrieve the next batch of results from the preceding call to this method. pageToken must be the value of nextPageToken from
       * the previous response. The values of other method parameters should be identical to those in the previous call.
       */
      pageToken?: string,

      /**
       * Required. The name of the project containing the metrics:
       * "projects/[PROJECT_ID]"
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
    }): Request<logging$ListLogMetricsResponse>;

    /**
     * Creates or updates a logs-based metric.
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
       * The resource name of the metric to update:
       * "projects/[PROJECT_ID]/metrics/[METRIC_ID]"
       * The updated metric must be provided in the request and it's name field must be the same as [METRIC_ID] If the metric does not exist in [PROJECT_ID],
       * then a new metric is created.
       */
      metricName: string,

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
    }): Request<logging$LogMetric>;
  }

  declare interface logging$ProjectsResource {
    exclusions: logging$ExclusionsResource;
    logs: logging$LogsResource;
    metrics: logging$MetricsResource;
    sinks: logging$SinksResource;
  }
}
