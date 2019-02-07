declare module "gapi.client.consumersurveys" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    mobileapppanels: typeof client$mobileapppanels,
    results: typeof client$results,
    surveys: typeof client$surveys
  };

  /**
   * Load Consumer Surveys API v2
   */
  declare function client$load(
    name: "consumersurveys",
    version: "v2"
  ): PromiseLike<void>;

  declare function client$load(
    name: "consumersurveys",
    version: "v2",
    callback: () => any
  ): void;

  declare var client$mobileapppanels: consumersurveys$consumersurveys$MobileapppanelsResource;

  declare var client$results: consumersurveys$consumersurveys$ResultsResource;

  declare var client$surveys: consumersurveys$consumersurveys$SurveysResource;

  declare interface consumersurveys$FieldMask {
    fields?: consumersurveys$FieldMask[];
    id?: number;
  }

  declare interface consumersurveys$MobileAppPanel {
    country?: string;
    isPublicPanel?: boolean;
    language?: string;
    mobileAppPanelId?: string;
    name?: string;
    owners?: string[];
  }

  declare interface consumersurveys$MobileAppPanelsListResponse {
    pageInfo?: consumersurveys$PageInfo;

    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;

    /**
     * An individual predefined panel of Opinion Rewards mobile users.
     */
    resources?: consumersurveys$MobileAppPanel[];
    tokenPagination?: consumersurveys$TokenPagination;
  }

  declare interface consumersurveys$PageInfo {
    resultPerPage?: number;
    startIndex?: number;
    totalResults?: number;
  }

  declare interface consumersurveys$ResultsGetRequest {
    resultMask?: consumersurveys$ResultsMask;
  }

  declare interface consumersurveys$ResultsMask {
    fields?: consumersurveys$FieldMask[];
    projection?: string;
  }

  declare interface consumersurveys$Survey {
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

  declare interface consumersurveys$SurveyAudience {
    ages?: string[];
    country?: string;
    countrySubdivision?: string;
    gender?: string;
    languages?: string[];
    mobileAppPanelId?: string;
    populationSource?: string;
  }

  declare interface consumersurveys$SurveyCost {
    costPerResponseNanos?: string;
    currencyCode?: string;
    maxCostPerResponseNanos?: string;
    nanos?: string;
  }

  declare interface consumersurveys$SurveyQuestion {
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

  declare interface consumersurveys$SurveyQuestionImage {
    altText?: string;
    data?: string;
    url?: string;
  }

  declare interface consumersurveys$SurveyRejection {
    explanation?: string;
    type?: string;
  }

  declare interface consumersurveys$SurveyResults {
    status?: string;
    surveyUrlId?: string;
  }

  declare interface consumersurveys$SurveysDeleteResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface consumersurveys$SurveysListResponse {
    pageInfo?: consumersurveys$PageInfo;

    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;

    /**
     * An individual survey resource.
     */
    resources?: consumersurveys$Survey[];
    tokenPagination?: consumersurveys$TokenPagination;
  }

  declare interface consumersurveys$SurveysStartRequest {
    /**
     * Threshold to start a survey automically if the quoted prices is less than or equal to this value. See Survey.Cost for more details.
     */
    maxCostPerResponseNanos?: string;
  }

  declare interface consumersurveys$SurveysStartResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface consumersurveys$SurveysStopResponse {
    /**
     * Unique request ID used for logging and debugging. Please include in any error reporting or troubleshooting requests.
     */
    requestId?: string;
  }

  declare interface consumersurveys$TokenPagination {
    nextPageToken?: string;
    previousPageToken?: string;
  }

  declare interface consumersurveys$MobileapppanelsResource {
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
    }): Request<consumersurveys$MobileAppPanel>;

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
    }): Request<consumersurveys$MobileAppPanelsListResponse>;

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
    }): Request<consumersurveys$MobileAppPanel>;
  }

  declare interface consumersurveys$ResultsResource {
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
    }): Request<consumersurveys$SurveyResults>;
  }

  declare interface consumersurveys$SurveysResource {
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
    }): Request<consumersurveys$SurveysDeleteResponse>;

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
    }): Request<consumersurveys$Survey>;

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
    }): Request<consumersurveys$Survey>;

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
    }): Request<consumersurveys$SurveysListResponse>;

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
    }): Request<consumersurveys$SurveysStartResponse>;

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
    }): Request<consumersurveys$SurveysStopResponse>;

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
    }): Request<consumersurveys$Survey>;
  }
}
