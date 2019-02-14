declare module "gapi.client.consumersurveys" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    mobileapppanels: typeof gapi$client$mobileapppanels,
    results: typeof gapi$client$results,
    surveys: typeof gapi$client$surveys
  };

  /**
   * Load Consumer Surveys API v2
   */
  declare function gapi$client$load(
    name: "consumersurveys",
    version: "v2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "consumersurveys",
    version: "v2",
    callback: () => any
  ): void;

  declare var gapi$client$mobileapppanels: consumersurveys$MobileapppanelsResource;

  declare var gapi$client$results: consumersurveys$ResultsResource;

  declare var gapi$client$surveys: consumersurveys$SurveysResource;

  declare interface gapi$client$consumersurveys$FieldMask {
    fields?: gapi$client$consumersurveys$FieldMask[];
    id?: number;
  }

  declare interface gapi$client$consumersurveys$MobileAppPanel {
    country?: string;
    isPublicPanel?: boolean;
    language?: string;
    mobileAppPanelId?: string;
    name?: string;
    owners?: string[];
  }

  declare interface gapi$client$consumersurveys$MobileAppPanelsListResponse {
    pageInfo?: consumersurveys$PageInfo;

    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;

    /**
     * An individual predefined panel of Opinion Rewards mobile users.
     */
    resources?: gapi$client$consumersurveys$MobileAppPanel[];
    tokenPagination?: consumersurveys$TokenPagination;
  }

  declare interface gapi$client$consumersurveys$PageInfo {
    resultPerPage?: number;
    startIndex?: number;
    totalResults?: number;
  }

  declare interface gapi$client$consumersurveys$ResultsGetRequest {
    resultMask?: consumersurveys$ResultsMask;
  }

  declare interface gapi$client$consumersurveys$ResultsMask {
    fields?: gapi$client$consumersurveys$FieldMask[];
    projection?: string;
  }

  declare interface gapi$client$consumersurveys$Survey {
    audience?: consumersurveys$SurveyAudience;
    cost?: consumersurveys$SurveyCost;
    customerData?: string;
    description?: string;
    owners?: string[];
    questions?: consumersurveys$SurveyQuestion[];
    rejectionReason?: consumersurveys$SurveyRejection;
    state?: string;
    surveyUrlId?: string;
    title?: string;
    wantedResponseCount?: number;
  }

  declare interface gapi$client$consumersurveys$SurveyAudience {
    ages?: string[];
    country?: string;
    countrySubdivision?: string;
    gender?: string;
    languages?: string[];
    mobileAppPanelId?: string;
    populationSource?: string;
  }

  declare interface gapi$client$consumersurveys$SurveyCost {
    costPerResponseNanos?: string;
    currencyCode?: string;
    maxCostPerResponseNanos?: string;
    nanos?: string;
  }

  declare interface gapi$client$consumersurveys$SurveyQuestion {
    answerOrder?: string;
    answers?: string[];
    hasOther?: boolean;
    highValueLabel?: string;
    images?: consumersurveys$SurveyQuestionImage[];
    lastAnswerPositionPinned?: boolean;
    lowValueLabel?: string;
    mustPickSuggestion?: boolean;
    numStars?: string;
    openTextPlaceholder?: string;
    openTextSuggestions?: string[];
    question?: string;
    sentimentText?: string;
    singleLineResponse?: boolean;
    thresholdAnswers?: string[];
    type?: string;
    unitOfMeasurementLabel?: string;
    videoId?: string;
  }

  declare interface gapi$client$consumersurveys$SurveyQuestionImage {
    altText?: string;
    data?: string;
    url?: string;
  }

  declare interface gapi$client$consumersurveys$SurveyRejection {
    explanation?: string;
    type?: string;
  }

  declare interface gapi$client$consumersurveys$SurveyResults {
    status?: string;
    surveyUrlId?: string;
  }

  declare interface gapi$client$consumersurveys$SurveysDeleteResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface gapi$client$consumersurveys$SurveysListResponse {
    pageInfo?: gapi$client$consumersurveys$PageInfo;

    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;

    /**
     * An individual survey resource.
     */
    resources?: gapi$client$consumersurveys$Survey[];
    tokenPagination?: consumersurveys$TokenPagination;
  }

  declare interface gapi$client$consumersurveys$SurveysStartRequest {
    /**
     * Threshold to start a survey automically if the quoted prices is less than or equal to this value. See Survey.Cost for more details.
     */
    maxCostPerResponseNanos?: string;
  }

  declare interface gapi$client$consumersurveys$SurveysStartResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface gapi$client$consumersurveys$SurveysStopResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface gapi$client$consumersurveys$TokenPagination {
    nextPageToken?: string;
    previousPageToken?: string;
  }

  declare interface gapi$client$consumersurveys$MobileapppanelsResource {
    /**
     * Retrieves a MobileAppPanel that is available to the authenticated user.
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
       * External URL ID for the panel.
       */
      panelId: string,

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
    }): Request<gapi$client$consumersurveys$MobileAppPanel>;

    /**
     * Lists the MobileAppPanels available to the authenticated user.
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
      maxResults?: number,

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
      startIndex?: number,
      token?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$MobileAppPanelsListResponse>;

    /**
     * Updates a MobileAppPanel. Currently the only property that can be updated is the owners property.
     */
    update(request: {
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
       * External URL ID for the panel.
       */
      panelId: string,

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
    }): Request<gapi$client$consumersurveys$MobileAppPanel>;
  }

  declare interface gapi$client$consumersurveys$ResultsResource {
    /**
     * Retrieves any survey results that have been produced so far. Results are formatted as an Excel file. You must add "?alt=media" to the URL as an
     * argument to get results.
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
       * External URL ID for the survey.
       */
      surveyUrlId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$SurveyResults>;
  }

  declare interface gapi$client$consumersurveys$SurveysResource {
    /**
     * Removes a survey from view in all user GET requests.
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
       * External URL ID for the survey.
       */
      surveyUrlId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$SurveysDeleteResponse>;

    /**
     * Retrieves information about the specified survey.
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
       * External URL ID for the survey.
       */
      surveyUrlId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$Survey>;

    /**
     * Creates a survey.
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
    }): Request<gapi$client$consumersurveys$Survey>;

    /**
     * Lists the surveys owned by the authenticated user.
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
      maxResults?: number,

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
      startIndex?: number,
      token?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$SurveysListResponse>;

    /**
     * Begins running a survey.
     */
    start(request: {
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
      resourceId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$SurveysStartResponse>;

    /**
     * Stops a running survey.
     */
    stop(request: {
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
      resourceId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$SurveysStopResponse>;

    /**
     * Updates a survey. Currently the only property that can be updated is the owners property.
     */
    update(request: {
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
       * External URL ID for the survey.
       */
      surveyUrlId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$consumersurveys$Survey>;
  }
}
