declare module "gapi.client.gamesconfiguration" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    achievementConfigurations: typeof gapi$client$achievementConfigurations,
    imageConfigurations: typeof gapi$client$imageConfigurations,
    leaderboardConfigurations: typeof gapi$client$leaderboardConfigurations
  };

  /**
   * Load Google Play Game Services Publishing API v1configuration
   */
  declare function gapi$client$load(
    name: "gamesconfiguration",
    version: "v1configuration"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "gamesconfiguration",
    version: "v1configuration",
    callback: () => any
  ): void;

  declare var gapi$client$achievementConfigurations: gamesconfiguration$AchievementConfigurationsResource;

  declare var gapi$client$imageConfigurations: gamesconfiguration$ImageConfigurationsResource;

  declare var gapi$client$leaderboardConfigurations: gamesconfiguration$LeaderboardConfigurationsResource;

  declare interface gapi$client$gamesconfiguration$AchievementConfiguration {
    /**
     * The type of the achievement.
     * Possible values are:
     * - "STANDARD" - Achievement is either locked or unlocked.
     * - "INCREMENTAL" - Achievement is incremental.
     */
    achievementType?: string;

    /**
     * The draft data of the achievement.
     */
    draft?: gamesconfiguration$AchievementConfigurationDetail;

    /**
     * The ID of the achievement.
     */
    id?: string;

    /**
     * The initial state of the achievement.
     * Possible values are:
     * - "HIDDEN" - Achievement is hidden.
     * - "REVEALED" - Achievement is revealed.
     * - "UNLOCKED" - Achievement is unlocked.
     */
    initialState?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#achievementConfiguration.
     */
    kind?: string;

    /**
     * The read-only published data of the achievement.
     */
    published?: gamesconfiguration$AchievementConfigurationDetail;

    /**
     * Steps to unlock. Only applicable to incremental achievements.
     */
    stepsToUnlock?: number;

    /**
     * The token for this resource.
     */
    token?: string;
  }

  declare interface gapi$client$gamesconfiguration$AchievementConfigurationDetail {
    /**
     * Localized strings for the achievement description.
     */
    description?: gamesconfiguration$LocalizedStringBundle;

    /**
     * The icon url of this achievement. Writes to this field are ignored.
     */
    iconUrl?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#achievementConfigurationDetail.
     */
    kind?: string;

    /**
     * Localized strings for the achievement name.
     */
    name?: gamesconfiguration$LocalizedStringBundle;

    /**
     * Point value for the achievement.
     */
    pointValue?: number;

    /**
     * The sort rank of this achievement. Writes to this field are ignored.
     */
    sortRank?: number;
  }

  declare interface gapi$client$gamesconfiguration$AchievementConfigurationListResponse {
    /**
     * The achievement configurations.
     */
    items?: gapi$client$gamesconfiguration$AchievementConfiguration[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#achievementConfigurationListResponse.
     */
    kind?: string;

    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$gamesconfiguration$GamesNumberAffixConfiguration {
    /**
     * When the language requires special treatment of "small" numbers (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in
     * Polish).
     */
    few?: gamesconfiguration$LocalizedStringBundle;

    /**
     * When the language requires special treatment of "large" numbers (as with numbers ending 11-99 in Maltese).
     */
    many?: gamesconfiguration$LocalizedStringBundle;

    /**
     * When the language requires special treatment of numbers like one (as with the number 1 in English and most other languages; in Russian, any number
     * ending in 1 but not ending in 11 is in this class).
     */
    one?: gamesconfiguration$LocalizedStringBundle;

    /**
     * When the language does not require special treatment of the given quantity (as with all numbers in Chinese, or 42 in English).
     */
    other?: gamesconfiguration$LocalizedStringBundle;

    /**
     * When the language requires special treatment of numbers like two (as with 2 in Welsh, or 102 in Slovenian).
     */
    two?: gamesconfiguration$LocalizedStringBundle;

    /**
     * When the language requires special treatment of the number 0 (as in Arabic).
     */
    zero?: gamesconfiguration$LocalizedStringBundle;
  }

  declare interface gapi$client$gamesconfiguration$GamesNumberFormatConfiguration {
    /**
     * The curreny code string. Only used for CURRENCY format type.
     */
    currencyCode?: string;

    /**
     * The number of decimal places for number. Only used for NUMERIC format type.
     */
    numDecimalPlaces?: number;

    /**
     * The formatting for the number.
     * Possible values are:
     * - "NUMERIC" - Numbers are formatted to have no digits or a fixed number of digits after the decimal point according to locale. An optional custom unit
     * can be added.
     * - "TIME_DURATION" - Numbers are formatted to hours, minutes and seconds.
     * - "CURRENCY" - Numbers are formatted to currency according to locale.
     */
    numberFormatType?: string;

    /**
     * An optional suffix for the NUMERIC format type. These strings follow the same  plural rules as all Android string resources.
     */
    suffix?: gapi$client$gamesconfiguration$GamesNumberAffixConfiguration;
  }

  declare interface gapi$client$gamesconfiguration$ImageConfiguration {
    /**
     * The image type for the image.
     */
    imageType?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#imageConfiguration.
     */
    kind?: string;

    /**
     * The resource ID of resource which the image belongs to.
     */
    resourceId?: string;

    /**
     * The url for this image.
     */
    url?: string;
  }

  declare interface gapi$client$gamesconfiguration$LeaderboardConfiguration {
    /**
     * The draft data of the leaderboard.
     */
    draft?: gamesconfiguration$LeaderboardConfigurationDetail;

    /**
     * The ID of the leaderboard.
     */
    id?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#leaderboardConfiguration.
     */
    kind?: string;

    /**
     * The read-only published data of the leaderboard.
     */
    published?: gamesconfiguration$LeaderboardConfigurationDetail;

    /**
     * Maximum score that can be posted to this leaderboard.
     */
    scoreMax?: string;

    /**
     * Minimum score that can be posted to this leaderboard.
     */
    scoreMin?: string;

    /**
     * The type of the leaderboard.
     * Possible values are:
     * - "LARGER_IS_BETTER" - Larger scores posted are ranked higher.
     * - "SMALLER_IS_BETTER" - Smaller scores posted are ranked higher.
     */
    scoreOrder?: string;

    /**
     * The token for this resource.
     */
    token?: string;
  }

  declare interface gapi$client$gamesconfiguration$LeaderboardConfigurationDetail {
    /**
     * The icon url of this leaderboard. Writes to this field are ignored.
     */
    iconUrl?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#leaderboardConfigurationDetail.
     */
    kind?: string;

    /**
     * Localized strings for the leaderboard name.
     */
    name?: gamesconfiguration$LocalizedStringBundle;

    /**
     * The score formatting for the leaderboard.
     */
    scoreFormat?: gapi$client$gamesconfiguration$GamesNumberFormatConfiguration;

    /**
     * The sort rank of this leaderboard. Writes to this field are ignored.
     */
    sortRank?: number;
  }

  declare interface gapi$client$gamesconfiguration$LeaderboardConfigurationListResponse {
    /**
     * The leaderboard configurations.
     */
    items?: gapi$client$gamesconfiguration$LeaderboardConfiguration[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string games#leaderboardConfigurationListResponse.
     */
    kind?: string;

    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$gamesconfiguration$LocalizedString {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#localizedString.
     */
    kind?: string;

    /**
     * The locale string.
     */
    locale?: string;

    /**
     * The string value.
     */
    value?: string;
  }

  declare interface gapi$client$gamesconfiguration$LocalizedStringBundle {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesConfiguration#localizedStringBundle.
     */
    kind?: string;

    /**
     * The locale strings.
     */
    translations?: gapi$client$gamesconfiguration$LocalizedString[];
  }

  declare interface gapi$client$gamesconfiguration$AchievementConfigurationsResource {
    /**
     * Delete the achievement configuration with the given ID.
     */
    delete(request: {
      /**
       * The ID of the achievement used by this method.
       */
      achievementId: string,

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
    }): Request<void>;

    /**
     * Retrieves the metadata of the achievement configuration with the given ID.
     */
    get(request: {
      /**
       * The ID of the achievement used by this method.
       */
      achievementId: string,

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
    }): Request<gapi$client$gamesconfiguration$AchievementConfiguration>;

    /**
     * Insert a new achievement configuration in this application.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The application ID from the Google Play developer console.
       */
      applicationId: string,

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
    }): Request<gapi$client$gamesconfiguration$AchievementConfiguration>;

    /**
     * Returns a list of the achievement configurations in this application.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The application ID from the Google Play developer console.
       */
      applicationId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may
       * be less than the specified maxResults.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The token returned by the previous request.
       */
      pageToken?: string,

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
    }): Request<gapi$client$gamesconfiguration$AchievementConfigurationListResponse>;

    /**
     * Update the metadata of the achievement configuration with the given ID. This method supports patch semantics.
     */
    patch(request: {
      /**
       * The ID of the achievement used by this method.
       */
      achievementId: string,

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
    }): Request<gapi$client$gamesconfiguration$AchievementConfiguration>;

    /**
     * Update the metadata of the achievement configuration with the given ID.
     */
    update(request: {
      /**
       * The ID of the achievement used by this method.
       */
      achievementId: string,

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
    }): Request<gapi$client$gamesconfiguration$AchievementConfiguration>;
  }

  declare interface gapi$client$gamesconfiguration$ImageConfigurationsResource {
    /**
     * Uploads an image for a resource with the given ID and image type.
     */
    upload(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Selects which image in a resource for this method.
       */
      imageType: string,

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
       * The ID of the resource used by this method.
       */
      resourceId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$gamesconfiguration$ImageConfiguration>;
  }

  declare interface gapi$client$gamesconfiguration$LeaderboardConfigurationsResource {
    /**
     * Delete the leaderboard configuration with the given ID.
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
       * The ID of the leaderboard.
       */
      leaderboardId: string,

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
    }): Request<void>;

    /**
     * Retrieves the metadata of the leaderboard configuration with the given ID.
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
       * The ID of the leaderboard.
       */
      leaderboardId: string,

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
    }): Request<gapi$client$gamesconfiguration$LeaderboardConfiguration>;

    /**
     * Insert a new leaderboard configuration in this application.
     */
    insert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The application ID from the Google Play developer console.
       */
      applicationId: string,

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
    }): Request<gapi$client$gamesconfiguration$LeaderboardConfiguration>;

    /**
     * Returns a list of the leaderboard configurations in this application.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The application ID from the Google Play developer console.
       */
      applicationId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may
       * be less than the specified maxResults.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The token returned by the previous request.
       */
      pageToken?: string,

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
    }): Request<gapi$client$gamesconfiguration$LeaderboardConfigurationListResponse>;

    /**
     * Update the metadata of the leaderboard configuration with the given ID. This method supports patch semantics.
     */
    patch(request: {
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
       * The ID of the leaderboard.
       */
      leaderboardId: string,

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
    }): Request<gapi$client$gamesconfiguration$LeaderboardConfiguration>;

    /**
     * Update the metadata of the leaderboard configuration with the given ID.
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
       * The ID of the leaderboard.
       */
      leaderboardId: string,

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
    }): Request<gapi$client$gamesconfiguration$LeaderboardConfiguration>;
  }
}
