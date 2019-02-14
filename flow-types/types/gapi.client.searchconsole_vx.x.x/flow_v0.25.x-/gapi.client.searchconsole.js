declare module "gapi.client.searchconsole" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    urlTestingTools: typeof gapi$client$urlTestingTools
  };

  /**
   * Load Google Search Console URL Testing Tools API v1
   */
  declare function gapi$client$load(
    name: "searchconsole",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "searchconsole",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$urlTestingTools: searchconsole$UrlTestingToolsResource;

  declare interface gapi$client$searchconsole$BlockedResource {
    /**
     * URL of the blocked resource.
     */
    url?: string;
  }

  declare interface gapi$client$searchconsole$Image {
    /**
     * Image data in format determined by the mime type. Currently, the format
     * will always be "image/png", but this might change in the future.
     */
    data?: string;

    /**
     * The mime-type of the image data.
     */
    mimeType?: string;
  }

  declare interface gapi$client$searchconsole$MobileFriendlyIssue {
    /**
     * Rule violated.
     */
    rule?: string;
  }

  declare interface gapi$client$searchconsole$ResourceIssue {
    /**
     * Describes a blocked resource issue.
     */
    blockedResource?: gapi$client$searchconsole$BlockedResource;
  }

  declare interface gapi$client$searchconsole$RunMobileFriendlyTestRequest {
    /**
     * Whether or not screenshot is requested. Default is false.
     */
    requestScreenshot?: boolean;

    /**
     * URL for inspection.
     */
    url?: string;
  }

  declare interface gapi$client$searchconsole$RunMobileFriendlyTestResponse {
    /**
     * Test verdict, whether the page is mobile friendly or not.
     */
    mobileFriendliness?: string;

    /**
     * List of mobile-usability issues.
     */
    mobileFriendlyIssues?: gapi$client$searchconsole$MobileFriendlyIssue[];

    /**
     * Information about embedded resources issues.
     */
    resourceIssues?: gapi$client$searchconsole$ResourceIssue[];

    /**
     * Screenshot of the requested URL.
     */
    screenshot?: gapi$client$searchconsole$Image;

    /**
     * Final state of the test, can be either complete or an error.
     */
    testStatus?: searchconsole$TestStatus;
  }

  declare interface gapi$client$searchconsole$TestStatus {
    /**
     * Error details if applicable.
     */
    details?: string;

    /**
     * Status of the test.
     */
    status?: string;
  }

  declare interface gapi$client$searchconsole$MobileFriendlyTestResource {
    /**
     * Runs Mobile-Friendly Test for a given URL.
     */
    run(request: {
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
    }): Request<gapi$client$searchconsole$RunMobileFriendlyTestResponse>;
  }

  declare interface gapi$client$searchconsole$UrlTestingToolsResource {
    mobileFriendlyTest: gapi$client$searchconsole$MobileFriendlyTestResource;
  }
}
