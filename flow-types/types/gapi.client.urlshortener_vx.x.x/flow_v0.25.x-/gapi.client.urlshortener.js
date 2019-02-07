declare module "gapi.client.urlshortener" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    url: typeof client$url
  };

  /**
   * Load URL Shortener API v1
   */
  declare function client$load(
    name: "urlshortener",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "urlshortener",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$url: urlshortener$urlshortener$UrlResource;

  declare interface urlshortener$AnalyticsSnapshot {
    /**
     * Top browsers, e.g. "Chrome"; sorted by (descending) click counts. Only present if this data is available.
     */
    browsers?: urlshortener$StringCount[];

    /**
     * Top countries (expressed as country codes), e.g. "US" or "DE"; sorted by (descending) click counts. Only present if this data is available.
     */
    countries?: urlshortener$StringCount[];

    /**
     * Number of clicks on all goo.gl short URLs pointing to this long URL.
     */
    longUrlClicks?: string;

    /**
     * Top platforms or OSes, e.g. "Windows"; sorted by (descending) click counts. Only present if this data is available.
     */
    platforms?: urlshortener$StringCount[];

    /**
     * Top referring hosts, e.g. "www.google.com"; sorted by (descending) click counts. Only present if this data is available.
     */
    referrers?: urlshortener$StringCount[];

    /**
     * Number of clicks on this short URL.
     */
    shortUrlClicks?: string;
  }

  declare interface urlshortener$AnalyticsSummary {
    /**
     * Click analytics over all time.
     */
    allTime?: urlshortener$AnalyticsSnapshot;

    /**
     * Click analytics over the last day.
     */
    day?: urlshortener$AnalyticsSnapshot;

    /**
     * Click analytics over the last month.
     */
    month?: urlshortener$AnalyticsSnapshot;

    /**
     * Click analytics over the last two hours.
     */
    twoHours?: urlshortener$AnalyticsSnapshot;

    /**
     * Click analytics over the last week.
     */
    week?: urlshortener$AnalyticsSnapshot;
  }

  declare interface urlshortener$StringCount {
    /**
     * Number of clicks for this top entry, e.g. for this particular country or browser.
     */
    count?: string;

    /**
     * Label assigned to this top entry, e.g. "US" or "Chrome".
     */
    id?: string;
  }

  declare interface urlshortener$Url {
    /**
     * A summary of the click analytics for the short and long URL. Might not be present if not requested or currently unavailable.
     */
    analytics?: urlshortener$AnalyticsSummary;

    /**
     * Time the short URL was created; ISO 8601 representation using the yyyy-MM-dd'T'HH:mm:ss.SSSZZ format, e.g. "2010-10-14T19:01:24.944+00:00".
     */
    created?: string;

    /**
     * Short URL, e.g. "http://goo.gl/l6MS".
     */
    id?: string;

    /**
     * The fixed string "urlshortener#url".
     */
    kind?: string;

    /**
     * Long URL, e.g. "http://www.google.com/". Might not be present if the status is "REMOVED".
     */
    longUrl?: string;

    /**
     * Status of the target URL. Possible values: "OK", "MALWARE", "PHISHING", or "REMOVED". A URL might be marked "REMOVED" if it was flagged as spam, for
     * example.
     */
    status?: string;
  }

  declare interface urlshortener$UrlHistory {
    /**
     * A list of URL resources.
     */
    items?: urlshortener$Url[];

    /**
     * Number of items returned with each full "page" of results. Note that the last page could have fewer items than the "itemsPerPage" value.
     */
    itemsPerPage?: number;

    /**
     * The fixed string "urlshortener#urlHistory".
     */
    kind?: string;

    /**
     * A token to provide to get the next page of results.
     */
    nextPageToken?: string;

    /**
     * Total number of short URLs associated with this user (may be approximate).
     */
    totalItems?: number;
  }

  declare interface urlshortener$UrlResource {
    /**
     * Expands a short URL or gets creation time and analytics.
     */
    get(request: {
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
       * Additional information to return.
       */
      projection?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The short URL, including the protocol.
       */
      shortUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<urlshortener$Url>;

    /**
     * Creates a new short URL.
     */
    insert(request: {
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
    }): Request<urlshortener$Url>;

    /**
     * Retrieves a list of URLs shortened by a user.
     */
    list(request: {
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
       * Additional information to return.
       */
      projection?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Token for requesting successive pages of results.
       */
      "start-token"?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<urlshortener$UrlHistory>;
  }
}
