declare module "gapi.client.webmasters" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    searchanalytics: typeof gapi$client$searchanalytics,
    sitemaps: typeof gapi$client$sitemaps,
    sites: typeof gapi$client$sites,
    urlcrawlerrorscounts: typeof gapi$client$urlcrawlerrorscounts,
    urlcrawlerrorssamples: typeof gapi$client$urlcrawlerrorssamples
  };

  /**
   * Load Search Console API v3
   */
  declare function gapi$client$load(
    name: "webmasters",
    version: "v3"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "webmasters",
    version: "v3",
    callback: () => any
  ): void;

  declare var gapi$client$searchanalytics: webmasters$SearchanalyticsResource;

  declare var gapi$client$sitemaps: webmasters$SitemapsResource;

  declare var gapi$client$sites: webmasters$SitesResource;

  declare var gapi$client$urlcrawlerrorscounts: webmasters$UrlcrawlerrorscountsResource;

  declare var gapi$client$urlcrawlerrorssamples: webmasters$UrlcrawlerrorssamplesResource;

  declare interface gapi$client$webmasters$ApiDataRow {
    clicks?: number;
    ctr?: number;
    impressions?: number;
    keys?: string[];
    position?: number;
  }

  declare interface gapi$client$webmasters$ApiDimensionFilter {
    dimension?: string;
    expression?: string;
    operator?: string;
  }

  declare interface gapi$client$webmasters$ApiDimensionFilterGroup {
    filters?: gapi$client$webmasters$ApiDimensionFilter[];
    groupType?: string;
  }

  declare interface gapi$client$webmasters$SearchAnalyticsQueryRequest {
    /**
     * [Optional; Default is "auto"] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page,
     * all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page,
     * depending on how you want your data calculated; see  the help documentation to learn how data is calculated differently by site versus by page.
     *
     * Note: If you group or filter by page, you cannot aggregate by property.
     *
     * If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will
     * get an error. The API will never change your aggregation type if the requested type is invalid.
     */
    aggregationType?: string;

    /**
     * [Optional] Zero or more filters to apply to the dimension grouping values; for example, 'query contains "buy"' to see only data where the query string
     * contains the substring "buy" (not case-sensitive). You can filter by a dimension without grouping by it.
     */
    dimensionFilterGroups?: gapi$client$webmasters$ApiDimensionFilterGroup[];

    /**
     * [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to
     * create a unique row key for each row. Results are grouped in the order that you supply these dimensions.
     */
    dimensions?: string[];

    /**
     * [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value
     * is included in the range.
     */
    endDate?: string;

    /**
     * [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 5,000 (inclusive).
     */
    rowLimit?: number;

    /**
     * [Optional; Default is "web"] The search type to filter for.
     */
    searchType?: string;

    /**
     * [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This
     * value is included in the range.
     */
    startDate?: string;

    /**
     * [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number.
     */
    startRow?: number;
  }

  declare interface gapi$client$webmasters$SearchAnalyticsQueryResponse {
    /**
     * How the results were aggregated.
     */
    responseAggregationType?: string;

    /**
     * A list of rows grouped by the key values in the order given in the query.
     */
    rows?: gapi$client$webmasters$ApiDataRow[];
  }

  declare interface gapi$client$webmasters$SitemapsListResponse {
    /**
     * Contains detailed information about a specific URL submitted as a sitemap.
     */
    sitemap?: webmasters$WmxSitemap[];
  }

  declare interface gapi$client$webmasters$SitesListResponse {
    /**
     * Contains permission level information about a Search Console site. For more information, see Permissions in Search Console.
     */
    siteEntry?: webmasters$WmxSite[];
  }

  declare interface gapi$client$webmasters$UrlCrawlErrorCount {
    /**
     * The error count at the given timestamp.
     */
    count?: string;

    /**
     * The date and time when the crawl attempt took place, in RFC 3339 format.
     */
    timestamp?: string;
  }

  declare interface gapi$client$webmasters$UrlCrawlErrorCountsPerType {
    /**
     * The crawl error type.
     */
    category?: string;

    /**
     * The error count entries time series.
     */
    entries?: gapi$client$webmasters$UrlCrawlErrorCount[];

    /**
     * The general type of Googlebot that made the request (see list of Googlebot user-agents for the user-agents used).
     */
    platform?: string;
  }

  declare interface gapi$client$webmasters$UrlCrawlErrorsCountsQueryResponse {
    /**
     * The time series of the number of URL crawl errors per error category and platform.
     */
    countPerTypes?: gapi$client$webmasters$UrlCrawlErrorCountsPerType[];
  }

  declare interface gapi$client$webmasters$UrlCrawlErrorsSample {
    /**
     * The time the error was first detected, in RFC 3339 format.
     */
    first_detected?: string;

    /**
     * The time when the URL was last crawled, in RFC 3339 format.
     */
    last_crawled?: string;

    /**
     * The URL of an error, relative to the site.
     */
    pageUrl?: string;

    /**
     * The HTTP response code, if any.
     */
    responseCode?: number;

    /**
     * Additional details about the URL, set only when calling get().
     */
    urlDetails?: webmasters$UrlSampleDetails;
  }

  declare interface gapi$client$webmasters$UrlCrawlErrorsSamplesListResponse {
    /**
     * Information about the sample URL and its crawl error.
     */
    urlCrawlErrorSample?: gapi$client$webmasters$UrlCrawlErrorsSample[];
  }

  declare interface gapi$client$webmasters$UrlSampleDetails {
    /**
     * List of sitemaps pointing at this URL.
     */
    containingSitemaps?: string[];

    /**
     * A sample set of URLs linking to this URL.
     */
    linkedFromUrls?: string[];
  }

  declare interface gapi$client$webmasters$WmxSite {
    /**
     * The user's permission level for the site.
     */
    permissionLevel?: string;

    /**
     * The URL of the site.
     */
    siteUrl?: string;
  }

  declare interface gapi$client$webmasters$WmxSitemap {
    /**
     * The various content types in the sitemap.
     */
    contents?: webmasters$WmxSitemapContent[];

    /**
     * Number of errors in the sitemap. These are issues with the sitemap itself that need to be fixed before it can be processed correctly.
     */
    errors?: string;

    /**
     * If true, the sitemap has not been processed.
     */
    isPending?: boolean;

    /**
     * If true, the sitemap is a collection of sitemaps.
     */
    isSitemapsIndex?: boolean;

    /**
     * Date & time in which this sitemap was last downloaded. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastDownloaded?: string;

    /**
     * Date & time in which this sitemap was submitted. Date format is in RFC 3339 format (yyyy-mm-dd).
     */
    lastSubmitted?: string;

    /**
     * The url of the sitemap.
     */
    path?: string;

    /**
     * The type of the sitemap. For example: rssFeed.
     */
    type?: string;

    /**
     * Number of warnings for the sitemap. These are generally non-critical issues with URLs in the sitemaps.
     */
    warnings?: string;
  }

  declare interface gapi$client$webmasters$WmxSitemapContent {
    /**
     * The number of URLs from the sitemap that were indexed (of the content type).
     */
    indexed?: string;

    /**
     * The number of URLs in the sitemap (of the content type).
     */
    submitted?: string;

    /**
     * The specific type of content in this sitemap. For example: web.
     */
    type?: string;
  }

  declare interface gapi$client$webmasters$SearchanalyticsResource {
    /**
     * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date
     * range of one or more days.
     *
     * When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a
     * broad date range query grouped by date for any metric, and see which day rows are returned.
     */
    query(request: {
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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$SearchAnalyticsQueryResponse>;
  }

  declare interface gapi$client$webmasters$SitemapsResource {
    /**
     * Deletes a sitemap from this site.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
       */
      feedpath: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Retrieves information about a specific sitemap.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The URL of the actual sitemap. For example: http://www.example.com/sitemap.xml
       */
      feedpath: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$WmxSitemap>;

    /**
     * Lists the sitemaps-entries submitted for this site, or included in the sitemap index file (if sitemapIndex is specified in the request).
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * A URL of a site's sitemap index. For example: http://www.example.com/sitemapindex.xml
       */
      sitemapIndex?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$SitemapsListResponse>;

    /**
     * Submits a sitemap for a site.
     */
    submit(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The URL of the sitemap to add. For example: http://www.example.com/sitemap.xml
       */
      feedpath: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;
  }

  declare interface gapi$client$webmasters$SitesResource {
    /**
     * Adds a site to the set of the user's sites in Search Console.
     */
    add(request: {
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
       * The URL of the site to add.
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Removes a site from the set of the user's Search Console sites.
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
       * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Retrieves information about specific site.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The URI of the property as defined in Search Console. Examples: http://www.example.com/ or android-app://com.example/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$WmxSite>;

    /**
     * Lists the user's Search Console sites.
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
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$SitesListResponse>;
  }

  declare interface gapi$client$webmasters$UrlcrawlerrorscountsResource {
    /**
     * Retrieves a time series of the number of URL crawl errors per error category and platform.
     */
    query(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The crawl error category. For example: serverError. If not specified, returns results for all categories.
       */
      category?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * If true, returns only the latest crawl error counts.
       */
      latestCountsOnly?: boolean,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The user agent type (platform) that made the request. For example: web. If not specified, returns results for all platforms.
       */
      platform?: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$UrlCrawlErrorsCountsQueryResponse>;
  }

  declare interface gapi$client$webmasters$UrlcrawlerrorssamplesResource {
    /**
     * Retrieves details about crawl errors for a site's sample URL.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The crawl error category. For example: authPermissions
       */
      category: string,

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
       * The user agent type (platform) that made the request. For example: web
       */
      platform: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL
       * https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
       */
      url: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$UrlCrawlErrorsSample>;

    /**
     * Lists a site's sample URLs for the specified crawl error category and platform.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The crawl error category. For example: authPermissions
       */
      category: string,

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
       * The user agent type (platform) that made the request. For example: web
       */
      platform: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$webmasters$UrlCrawlErrorsSamplesListResponse>;

    /**
     * Marks the provided site's sample URL as fixed, and removes it from the samples list.
     */
    markAsFixed(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The crawl error category. For example: authPermissions
       */
      category: string,

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
       * The user agent type (platform) that made the request. For example: web
       */
      platform: string,

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
       * The site's URL, including protocol. For example: http://www.example.com/
       */
      siteUrl: string,

      /**
       * The relative path (without the site) of the sample URL. It must be one of the URLs returned by list(). For example, for the URL
       * https://www.example.com/pagename on the site https://www.example.com/, the url value is pagename
       */
      url: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;
  }
}
