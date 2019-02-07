declare module "gapi.client.adexperiencereport" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    sites: typeof client$sites,
    violatingSites: typeof client$violatingSites
  };

  /**
   * Load Google Ad Experience Report API v1
   */
  declare function client$load(
    name: "adexperiencereport",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "adexperiencereport",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$sites: adexperiencereport$adexperiencereport$SitesResource;

  declare var client$violatingSites: adexperiencereport$adexperiencereport$ViolatingSitesResource;

  declare interface adexperiencereport$PlatformSummary {
    /**
     * The status of the site reviewed for the Better Ads Standards.
     */
    betterAdsStatus?: string;

    /**
     * The date on which ad filtering begins.
     */
    enforcementTime?: string;

    /**
     * The ad filtering status of the site.
     */
    filterStatus?: string;

    /**
     * The last time that the site changed status.
     */
    lastChangeTime?: string;

    /**
     * The assigned regions for the site and platform.
     */
    region?: string[];

    /**
     * A link that leads to a full ad experience report.
     */
    reportUrl?: string;

    /**
     * Whether the site is currently under review.
     */
    underReview?: boolean;
  }

  declare interface adexperiencereport$SiteSummaryResponse {
    /**
     * Summary for the desktop review of the site.
     */
    desktopSummary?: adexperiencereport$PlatformSummary;

    /**
     * Summary for the mobile review of the site.
     */
    mobileSummary?: adexperiencereport$PlatformSummary;

    /**
     * The name of the site reviewed.
     */
    reviewedSite?: string;
  }

  declare interface adexperiencereport$ViolatingSitesResponse {
    /**
     * A list of summaries of violating sites.
     */
    client$violatingSites?: adexperiencereport$SiteSummaryResponse[];
  }

  declare interface adexperiencereport$SitesResource {
    /**
     * Gets a summary of the ad experience rating of a site.
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
       * The required site name. It should be the site property whose ad experiences
       * may have been reviewed, and it should be URL-encoded. For example,
       * sites/https%3A%2F%2Fwww.google.com. The server will return an error of
       * BAD_REQUEST if this field is not filled in. Note that if the site property
       * is not yet verified in Search Console, the reportUrl field returned by the
       * API will lead to the verification page, prompting the user to go through
       * that process before they can gain access to the Ad Experience Report.
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
    }): Request<adexperiencereport$SiteSummaryResponse>;
  }

  declare interface adexperiencereport$ViolatingSitesResource {
    /**
     * Lists sites with Ad Experience Report statuses of "Failing" or "Warning".
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
    }): Request<adexperiencereport$ViolatingSitesResponse>;
  }
}
