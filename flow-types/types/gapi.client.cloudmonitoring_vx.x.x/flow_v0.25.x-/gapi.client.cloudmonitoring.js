declare module "gapi.client.cloudmonitoring" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    metricDescriptors: typeof gapi$client$metricDescriptors,
    timeseries: typeof gapi$client$timeseries,
    timeseriesDescriptors: typeof gapi$client$timeseriesDescriptors
  };

  /**
   * Load Cloud Monitoring API v2beta2
   */
  declare function gapi$client$load(
    name: "cloudmonitoring",
    version: "v2beta2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudmonitoring",
    version: "v2beta2",
    callback: () => any
  ): void;

  declare var gapi$client$metricDescriptors: cloudmonitoring$MetricDescriptorsResource;

  declare var gapi$client$timeseries: cloudmonitoring$TimeseriesResource;

  declare var gapi$client$timeseriesDescriptors: cloudmonitoring$TimeseriesDescriptorsResource;

  declare interface gapi$client$cloudmonitoring$DeleteMetricDescriptorResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#deleteMetricDescriptorResponse".
     */
    kind?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListMetricDescriptorsRequest {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsRequest".
     */
    kind?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListMetricDescriptorsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listMetricDescriptorsResponse".
     */
    kind?: string;

    /**
     * The returned metric descriptors.
     */
    metrics?: cloudmonitoring$MetricDescriptor[];

    /**
     * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, pass this
     * value to the pageToken query parameter.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListTimeseriesDescriptorsRequest {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsRequest".
     */
    kind?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListTimeseriesDescriptorsResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesDescriptorsResponse".
     */
    kind?: string;

    /**
     * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set this
     * value to the pageToken query parameter.
     */
    nextPageToken?: string;

    /**
     * The oldest timestamp of the interval of this query, as an RFC 3339 string.
     */
    oldest?: string;

    /**
     * The returned time series descriptors.
     */
    timeseries?: cloudmonitoring$TimeseriesDescriptor[];

    /**
     * The youngest timestamp of the interval of this query, as an RFC 3339 string.
     */
    youngest?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListTimeseriesRequest {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesRequest".
     */
    kind?: string;
  }

  declare interface gapi$client$cloudmonitoring$ListTimeseriesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#listTimeseriesResponse".
     */
    kind?: string;

    /**
     * Pagination token. If present, indicates that additional results are available for retrieval. To access the results past the pagination limit, set the
     * pageToken query parameter to this value. All of the points of a time series will be returned before returning any point of the subsequent time series.
     */
    nextPageToken?: string;

    /**
     * The oldest timestamp of the interval of this query as an RFC 3339 string.
     */
    oldest?: string;

    /**
     * The returned time series.
     */
    timeseries?: cloudmonitoring$Timeseries[];

    /**
     * The youngest timestamp of the interval of this query as an RFC 3339 string.
     */
    youngest?: string;
  }

  declare interface gapi$client$cloudmonitoring$MetricDescriptor {
    /**
     * Description of this metric.
     */
    description?: string;

    /**
     * Labels defined for this metric.
     */
    labels?: cloudmonitoring$MetricDescriptorLabelDescriptor[];

    /**
     * The name of this metric.
     */
    name?: string;

    /**
     * The project ID to which the metric belongs.
     */
    project?: string;

    /**
     * Type description for this metric.
     */
    typeDescriptor?: cloudmonitoring$MetricDescriptorTypeDescriptor;
  }

  declare interface gapi$client$cloudmonitoring$MetricDescriptorLabelDescriptor {
    /**
     * Label description.
     */
    description?: string;

    /**
     * Label key.
     */
    key?: string;
  }

  declare interface gapi$client$cloudmonitoring$MetricDescriptorTypeDescriptor {
    /**
     * The method of collecting data for the metric. See Metric types.
     */
    metricType?: string;

    /**
     * The data type of of individual points in the metric's time series. See Metric value types.
     */
    valueType?: string;
  }

  declare interface gapi$client$cloudmonitoring$Point {
    /**
     * The value of this data point. Either "true" or "false".
     */
    boolValue?: boolean;

    /**
     * The value of this data point as a distribution. A distribution value can contain a list of buckets and/or an underflowBucket and an overflowBucket. The
     * values of these points can be used to create a histogram.
     */
    distributionValue?: cloudmonitoring$PointDistribution;

    /**
     * The value of this data point as a double-precision floating-point number.
     */
    doubleValue?: number;

    /**
     * The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this
     * interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be
     * non-empty. Both start and end are RFC 3339 strings.
     */
    end?: string;

    /**
     * The value of this data point as a 64-bit integer.
     */
    int64Value?: string;

    /**
     * The interval [start, end] is the time period to which the point's value applies. For gauge metrics, whose values are instantaneous measurements, this
     * interval should be empty (start should equal end). For cumulative metrics (of which deltas and rates are special cases), the interval should be
     * non-empty. Both start and end are RFC 3339 strings.
     */
    start?: string;

    /**
     * The value of this data point in string format.
     */
    stringValue?: string;
  }

  declare interface gapi$client$cloudmonitoring$PointDistribution {
    /**
     * The finite buckets.
     */
    buckets?: cloudmonitoring$PointDistributionBucket[];

    /**
     * The overflow bucket.
     */
    overflowBucket?: cloudmonitoring$PointDistributionOverflowBucket;

    /**
     * The underflow bucket.
     */
    underflowBucket?: cloudmonitoring$PointDistributionUnderflowBucket;
  }

  declare interface gapi$client$cloudmonitoring$PointDistributionBucket {
    /**
     * The number of events whose values are in the interval defined by this bucket.
     */
    count?: string;

    /**
     * The lower bound of the value interval of this bucket (inclusive).
     */
    lowerBound?: number;

    /**
     * The upper bound of the value interval of this bucket (exclusive).
     */
    upperBound?: number;
  }

  declare interface gapi$client$cloudmonitoring$PointDistributionOverflowBucket {
    /**
     * The number of events whose values are in the interval defined by this bucket.
     */
    count?: string;

    /**
     * The lower bound of the value interval of this bucket (inclusive).
     */
    lowerBound?: number;
  }

  declare interface gapi$client$cloudmonitoring$PointDistributionUnderflowBucket {
    /**
     * The number of events whose values are in the interval defined by this bucket.
     */
    count?: string;

    /**
     * The upper bound of the value interval of this bucket (exclusive).
     */
    upperBound?: number;
  }

  declare interface gapi$client$cloudmonitoring$Timeseries {
    /**
     * The data points of this time series. The points are listed in order of their end timestamp, from younger to older.
     */
    points?: gapi$client$cloudmonitoring$Point[];

    /**
     * The descriptor of this time series.
     */
    timeseriesDesc?: cloudmonitoring$TimeseriesDescriptor;
  }

  declare interface gapi$client$cloudmonitoring$TimeseriesDescriptor {
    /**
     * The label's name.
     */
    labels?: Record<string, string>;

    /**
     * The name of the metric.
     */
    metric?: string;

    /**
     * The Developers Console project number to which this time series belongs.
     */
    project?: string;
  }

  declare interface gapi$client$cloudmonitoring$TimeseriesDescriptorLabel {
    /**
     * The label's name.
     */
    key?: string;

    /**
     * The label's value.
     */
    value?: string;
  }

  declare interface gapi$client$cloudmonitoring$TimeseriesPoint {
    /**
     * The data point in this time series snapshot.
     */
    point?: gapi$client$cloudmonitoring$Point;

    /**
     * The descriptor of this time series.
     */
    timeseriesDesc?: gapi$client$cloudmonitoring$TimeseriesDescriptor;
  }

  declare interface gapi$client$cloudmonitoring$WriteTimeseriesRequest {
    /**
     * The label's name.
     */
    commonLabels?: Record<string, string>;

    /**
     * Provide time series specific labels and the data points for each time series. The labels in timeseries and the common_labels should form a complete
     * list of labels that required by the metric.
     */
    timeseries?: gapi$client$cloudmonitoring$TimeseriesPoint[];
  }

  declare interface gapi$client$cloudmonitoring$WriteTimeseriesResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "cloudmonitoring#writeTimeseriesResponse".
     */
    kind?: string;
  }

  declare interface gapi$client$cloudmonitoring$MetricDescriptorsResource {
    /**
     * Create a new metric.
     */
    create(request: {
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
       * The project id. The value can be the numeric project ID or string-based project name.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$cloudmonitoring$MetricDescriptor>;

    /**
     * Delete an existing metric.
     */
    delete(request: {
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
       * Name of the metric.
       */
      metric: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID to which the metric belongs.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$cloudmonitoring$DeleteMetricDescriptorResponse>;

    /**
     * List metric descriptors that match the query. If the query is not set, then all of the metric descriptors will be returned. Large responses will be
     * paginated, use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
     * of the nextPageToken.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Maximum number of metric descriptors per page. Used for pagination. If not specified, count = 100.
       */
      count?: number,

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
       * The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of
       * results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project id. The value can be the numeric project ID or string-based project name.
       */
      project: string,

      /**
       * The query used to search against existing metrics. Separate keywords with a space; the service joins all keywords with AND, meaning that all keywords
       * must match for a metric to be returned. If this field is omitted, all metrics are returned. If an empty string is passed with this field, no metrics
       * are returned.
       */
      query?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$cloudmonitoring$ListMetricDescriptorsResponse>;
  }

  declare interface gapi$client$cloudmonitoring$TimeseriesResource {
    /**
     * List the data points of the time series that match the metric and labels values and that have data points in the interval. Large responses are
     * paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
     * of the nextPageToken.
     */
    list(request: {
      /**
       * The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics
       * with a value type of INT64 or DOUBLE.
       */
      aggregator?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Maximum number of data points per page, which is used for pagination of results.
       */
      count?: number,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * A collection of labels for the matching time series, which are represented as:
       * - key==value: key equals the value
       * - key=~value: key regex matches the value
       * - key!=value: key does not equal the value
       * - key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could
       * specify:
       * label=cloud.googleapis.com%2Flocation=~us-central1.&#42;
       */
      labels?: string,

      /**
       * Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
       */
      metric: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time
       * interval will be (youngest - 4 hours, youngest]
       */
      oldest?: string,

      /**
       * The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of
       * results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest
       * parameters should not be used together. Units:
       * - s: second
       * - m: minute
       * - h: hour
       * - d: day
       * - w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
       *
       * If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
       */
      timespan?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for
       * non-cumulative metric types. Units:
       * - m: minute
       * - h: hour
       * - d: day
       * - w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
       */
      window?: string,

      /**
       * End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
       */
      youngest: string
    }): Request<gapi$client$cloudmonitoring$ListTimeseriesResponse>;

    /**
     * Put data points to one or more time series for one or more metrics. If a time series does not exist, a new time series will be created. It is not
     * allowed to write a time series point that is older than the existing youngest point of that time series. Points that are older than the existing
     * youngest point of that time series will be discarded silently. Therefore, users should make sure that points of a time series are written sequentially
     * in the order of their end time.
     */
    write(request: {
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
       * The project ID. The value can be the numeric project ID or string-based project name.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$cloudmonitoring$WriteTimeseriesResponse>;
  }

  declare interface gapi$client$cloudmonitoring$TimeseriesDescriptorsResource {
    /**
     * List the descriptors of the time series that match the metric and labels values and that have data points in the interval. Large responses are
     * paginated; use the nextPageToken returned in the response to request subsequent pages of results by setting the pageToken query parameter to the value
     * of the nextPageToken.
     */
    list(request: {
      /**
       * The aggregation function that will reduce the data points in each window to a single point. This parameter is only valid for non-cumulative metrics
       * with a value type of INT64 or DOUBLE.
       */
      aggregator?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Maximum number of time series descriptors per page. Used for pagination. If not specified, count = 100.
       */
      count?: number,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * A collection of labels for the matching time series, which are represented as:
       * - key==value: key equals the value
       * - key=~value: key regex matches the value
       * - key!=value: key does not equal the value
       * - key!~value: key regex does not match the value  For example, to list all of the time series descriptors for the region us-central1, you could
       * specify:
       * label=cloud.googleapis.com%2Flocation=~us-central1.&#42;
       */
      labels?: string,

      /**
       * Metric names are protocol-free URLs as listed in the Supported Metrics page. For example, compute.googleapis.com/instance/disk/read_ops_count.
       */
      metric: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Start of the time interval (exclusive), which is expressed as an RFC 3339 timestamp. If neither oldest nor timespan is specified, the default time
       * interval will be (youngest - 4 hours, youngest]
       */
      oldest?: string,

      /**
       * The pagination token, which is used to page through large result sets. Set this value to the value of the nextPageToken to retrieve the next page of
       * results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID to which this time series belongs. The value can be the numeric project ID or string-based project name.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Length of the time interval to query, which is an alternative way to declare the interval: (youngest - timespan, youngest]. The timespan and oldest
       * parameters should not be used together. Units:
       * - s: second
       * - m: minute
       * - h: hour
       * - d: day
       * - w: week  Examples: 2s, 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
       *
       * If neither oldest nor timespan is specified, the default time interval will be (youngest - 4 hours, youngest].
       */
      timespan?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * The sampling window. At most one data point will be returned for each window in the requested time interval. This parameter is only valid for
       * non-cumulative metric types. Units:
       * - m: minute
       * - h: hour
       * - d: day
       * - w: week  Examples: 3m, 4w. Only one unit is allowed, for example: 2w3d is not allowed; you should use 17d instead.
       */
      window?: string,

      /**
       * End of the time interval (inclusive), which is expressed as an RFC 3339 timestamp.
       */
      youngest: string
    }): Request<gapi$client$cloudmonitoring$ListTimeseriesDescriptorsResponse>;
  }
}
