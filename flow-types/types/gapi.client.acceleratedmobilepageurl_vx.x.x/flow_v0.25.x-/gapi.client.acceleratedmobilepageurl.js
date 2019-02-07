declare module "gapi.client.acceleratedmobilepageurl" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    ampUrls: typeof client$ampUrls
  };

  /**
   * Load Accelerated Mobile Pages (AMP) URL API v1
   */
  declare function client$load(
    name: "acceleratedmobilepageurl",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "acceleratedmobilepageurl",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$ampUrls: acceleratedmobilepageurl$acceleratedmobilepageurl$AmpUrlsResource;

  declare interface acceleratedmobilepageurl$AmpUrl {
    /**
     * The AMP URL pointing to the publisher's web server.
     */
    ampUrl?: string;

    /**
     * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
     * the cached document in the Google AMP Cache.
     */
    cdnAmpUrl?: string;

    /**
     * The original non-AMP URL.
     */
    originalUrl?: string;
  }

  declare interface acceleratedmobilepageurl$AmpUrlError {
    /**
     * The error code of an API call.
     */
    errorCode?: string;

    /**
     * An optional descriptive error message.
     */
    errorMessage?: string;

    /**
     * The original non-AMP URL.
     */
    originalUrl?: string;
  }

  declare interface acceleratedmobilepageurl$BatchGetAmpUrlsRequest {
    /**
     * The lookup_strategy being requested.
     */
    lookupStrategy?: string;

    /**
     * List of URLs to look up for the paired AMP URLs.
     * The URLs are case-sensitive. Up to 50 URLs per lookup
     * (see [Usage Limits](/amp/cache/reference/limits)).
     */
    urls?: string[];
  }

  declare interface acceleratedmobilepageurl$BatchGetAmpUrlsResponse {
    /**
     * For each URL in BatchAmpUrlsRequest, the URL response. The response might
     * not be in the same order as URLs in the batch request.
     * If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
     * only once.
     */
    client$ampUrls?: acceleratedmobilepageurl$AmpUrl[];

    /**
     * The errors for requested URLs that have no AMP URL.
     */
    urlErrors?: acceleratedmobilepageurl$AmpUrlError[];
  }

  declare interface acceleratedmobilepageurl$AmpUrlsResource {
    /**
     * Returns AMP URL(s) and equivalent
     * [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
     */
    batchGet(request: {
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
    }): Request<acceleratedmobilepageurl$BatchGetAmpUrlsResponse>;
  }
}
