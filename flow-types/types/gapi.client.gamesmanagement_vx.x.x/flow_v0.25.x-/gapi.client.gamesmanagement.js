declare module "gapi.client.gamesmanagement" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    achievements: typeof client$achievements,
    applications: typeof client$applications,
    events: typeof client$events,
    players: typeof client$players,
    quests: typeof client$quests,
    rooms: typeof client$rooms,
    scores: typeof client$scores,
    turnBasedMatches: typeof client$turnBasedMatches
  };

  /**
   * Load Google Play Game Services Management API v1management
   */
  declare function client$load(
    name: "gamesmanagement",
    version: "v1management"
  ): PromiseLike<void>;

  declare function client$load(
    name: "gamesmanagement",
    version: "v1management",
    callback: () => any
  ): void;

  declare var client$achievements: gamesmanagement$gamesmanagement$AchievementsResource;

  declare var client$applications: gamesmanagement$gamesmanagement$ApplicationsResource;

  declare var client$events: gamesmanagement$gamesmanagement$EventsResource;

  declare var client$players: gamesmanagement$gamesmanagement$PlayersResource;

  declare var client$quests: gamesmanagement$gamesmanagement$QuestsResource;

  declare var client$rooms: gamesmanagement$gamesmanagement$RoomsResource;

  declare var client$scores: gamesmanagement$gamesmanagement$ScoresResource;

  declare var client$turnBasedMatches: gamesmanagement$gamesmanagement$TurnBasedMatchesResource;

  declare interface gamesmanagement$AchievementResetAllResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetAllResponse.
     */
    kind?: string;

    /**
     * The achievement reset results.
     */
    results?: gamesmanagement$AchievementResetResponse[];
  }

  declare interface gamesmanagement$AchievementResetMultipleForAllRequest {
    /**
     * The IDs of achievements to reset.
     */
    achievement_ids?: string[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetMultipleForAllRequest.
     */
    kind?: string;
  }

  declare interface gamesmanagement$AchievementResetResponse {
    /**
     * The current state of the achievement. This is the same as the initial state of the achievement.
     * Possible values are:
     * - "HIDDEN"- Achievement is hidden.
     * - "REVEALED" - Achievement is revealed.
     * - "UNLOCKED" - Achievement is unlocked.
     */
    currentState?: string;

    /**
     * The ID of an achievement for which player state has been updated.
     */
    definitionId?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#achievementResetResponse.
     */
    kind?: string;

    /**
     * Flag to indicate if the requested update actually occurred.
     */
    updateOccurred?: boolean;
  }

  declare interface gamesmanagement$EventsResetMultipleForAllRequest {
    /**
     * The IDs of events to reset.
     */
    event_ids?: string[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#eventsResetMultipleForAllRequest.
     */
    kind?: string;
  }

  declare interface gamesmanagement$GamesPlayedResource {
    /**
     * True if the player was auto-matched with the currently authenticated user.
     */
    autoMatched?: boolean;

    /**
     * The last time the player played the game in milliseconds since the epoch in UTC.
     */
    timeMillis?: string;
  }

  declare interface gamesmanagement$GamesPlayerExperienceInfoResource {
    /**
     * The current number of experience points for the player.
     */
    currentExperiencePoints?: string;

    /**
     * The current level of the player.
     */
    currentLevel?: gamesmanagement$GamesPlayerLevelResource;

    /**
     * The timestamp when the player was leveled up, in millis since Unix epoch UTC.
     */
    lastLevelUpTimestampMillis?: string;

    /**
     * The next level of the player. If the current level is the maximum level, this should be same as the current level.
     */
    nextLevel?: gamesmanagement$GamesPlayerLevelResource;
  }

  declare interface gamesmanagement$GamesPlayerLevelResource {
    /**
     * The level for the user.
     */
    level?: number;

    /**
     * The maximum experience points for this level.
     */
    maxExperiencePoints?: string;

    /**
     * The minimum experience points for this level.
     */
    minExperiencePoints?: string;
  }

  declare interface gamesmanagement$HiddenPlayer {
    /**
     * The time this player was hidden.
     */
    hiddenTimeMillis?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayer.
     */
    kind?: string;

    /**
     * The player information.
     */
    player?: gamesmanagement$Player;
  }

  declare interface gamesmanagement$HiddenPlayerList {
    /**
     * The players.
     */
    items?: gamesmanagement$HiddenPlayer[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#hiddenPlayerList.
     */
    kind?: string;

    /**
     * The pagination token for the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gamesmanagement$Player {
    /**
     * The base URL for the image that represents the player.
     */
    avatarImageUrl?: string;

    /**
     * The url to the landscape mode player banner image.
     */
    bannerUrlLandscape?: string;

    /**
     * The url to the portrait mode player banner image.
     */
    bannerUrlPortrait?: string;

    /**
     * The name to display for the player.
     */
    displayName?: string;

    /**
     * An object to represent Play Game experience information for the player.
     */
    experienceInfo?: gamesmanagement$GamesPlayerExperienceInfoResource;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#player.
     */
    kind?: string;

    /**
     * Details about the last time this player played a multiplayer game with the currently authenticated player. Populated for PLAYED_WITH player collection
     * members.
     */
    lastPlayedWith?: gamesmanagement$GamesPlayedResource;

    /**
     * An object representation of the individual components of the player's name. For some players, these fields may not be present.
     */
    name?: {
      /**
       * The family name of this player. In some places, this is known as the last name.
       */
      familyName?: string,

      /**
       * The given name of this player. In some places, this is known as the first name.
       */
      givenName?: string
    };

    /**
     * The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for
     * the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.
     */
    originalPlayerId?: string;

    /**
     * The ID of the player.
     */
    playerId?: string;

    /**
     * The player's profile settings. Controls whether or not the player's profile is visible to other players.
     */
    profileSettings?: gamesmanagement$ProfileSettings;

    /**
     * The player's title rewarded for their game activities.
     */
    title?: string;
  }

  declare interface gamesmanagement$PlayerScoreResetAllResponse {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
     */
    kind?: string;

    /**
     * The leaderboard reset results.
     */
    results?: gamesmanagement$PlayerScoreResetResponse[];
  }

  declare interface gamesmanagement$PlayerScoreResetResponse {
    /**
     * The ID of an leaderboard for which player state has been updated.
     */
    definitionId?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#playerScoreResetResponse.
     */
    kind?: string;

    /**
     * The time spans of the updated score.
     * Possible values are:
     * - "ALL_TIME" - The score is an all-time score.
     * - "WEEKLY" - The score is a weekly score.
     * - "DAILY" - The score is a daily score.
     */
    resetScoreTimeSpans?: string[];
  }

  declare interface gamesmanagement$ProfileSettings {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#profileSettings.
     */
    kind?: string;

    /**
     * The player's current profile visibility. This field is visible to both 1P and 3P APIs.
     */
    profileVisible?: boolean;
  }

  declare interface gamesmanagement$QuestsResetMultipleForAllRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#questsResetMultipleForAllRequest.
     */
    kind?: string;

    /**
     * The IDs of quests to reset.
     */
    quest_ids?: string[];
  }

  declare interface gamesmanagement$ScoresResetMultipleForAllRequest {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string gamesManagement#scoresResetMultipleForAllRequest.
     */
    kind?: string;

    /**
     * The IDs of leaderboards to reset.
     */
    leaderboard_ids?: string[];
  }

  declare interface gamesmanagement$AchievementsResource {
    /**
     * Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your
     * application.
     */
    reset(request: {
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
    }): Request<gamesmanagement$AchievementResetResponse>;

    /**
     * Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for
     * your application.
     */
    resetAll(request: {
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
    }): Request<gamesmanagement$AchievementResetAllResponse>;

    /**
     * Resets all draft achievements for all players. This method is only available to user accounts for your developer console.
     */
    resetAllForAllPlayers(request: {
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
     * Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft
     * achievements can be reset.
     */
    resetForAllPlayers(request: {
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
     * Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft
     * achievements may be reset.
     */
    resetMultipleForAllPlayers(request: {
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
  }

  declare interface gamesmanagement$ApplicationsResource {
    /**
     * Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.
     */
    listHidden(request: {
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
       * The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may
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
    }): Request<gamesmanagement$HiddenPlayerList>;
  }

  declare interface gamesmanagement$EventsResource {
    /**
     * Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester
     * accounts for your application. All quests for this player that use the event will also be reset.
     */
    reset(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the event.
       */
      eventId: string,

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
     * Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your
     * application. All quests for this player will also be reset.
     */
    resetAll(request: {
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
     * Resets all draft events for all players. This method is only available to user accounts for your developer console. All quests that use any of these
     * events will also be reset.
     */
    resetAllForAllPlayers(request: {
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
     * Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be
     * reset. All quests that use the event will also be reset.
     */
    resetForAllPlayers(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The ID of the event.
       */
      eventId: string,

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
     * Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be
     * reset. All quests that use any of the events will also be reset.
     */
    resetMultipleForAllPlayers(request: {
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
  }

  declare interface gamesmanagement$PlayersResource {
    /**
     * Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     */
    hide(request: {
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
       * A player ID. A value of me may be used in place of the authenticated player's ID.
       */
      playerId: string,

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
     * Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.
     */
    unhide(request: {
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
       * A player ID. A value of me may be used in place of the authenticated player's ID.
       */
      playerId: string,

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
  }

  declare interface gamesmanagement$QuestsResource {
    /**
     * Resets all player progress on the quest with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester
     * accounts for your application.
     */
    reset(request: {
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
       * The ID of the quest.
       */
      questId: string,

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
     * Resets all player progress on all quests for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your
     * application.
     */
    resetAll(request: {
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
     * Resets all draft quests for all players. This method is only available to user accounts for your developer console.
     */
    resetAllForAllPlayers(request: {
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
     * Resets all player progress on the quest with the given ID for all players. This method is only available to user accounts for your developer console.
     * Only draft quests can be reset.
     */
    resetForAllPlayers(request: {
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
       * The ID of the quest.
       */
      questId: string,

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
     * Resets quests with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft quests may be
     * reset.
     */
    resetMultipleForAllPlayers(request: {
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
  }

  declare interface gamesmanagement$RoomsResource {
    /**
     * Reset all rooms for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your
     * application.
     */
    reset(request: {
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
     * Deletes rooms where the only room participants are from whitelisted tester accounts for your application. This method is only available to user
     * accounts for your developer console.
     */
    resetForAllPlayers(request: {
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
  }

  declare interface gamesmanagement$ScoresResource {
    /**
     * Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester
     * accounts for your application.
     */
    reset(request: {
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
    }): Request<gamesmanagement$PlayerScoreResetResponse>;

    /**
     * Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your
     * application.
     */
    resetAll(request: {
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
    }): Request<gamesmanagement$PlayerScoreResetAllResponse>;

    /**
     * Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.
     */
    resetAllForAllPlayers(request: {
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
     * Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only
     * draft leaderboards can be reset.
     */
    resetForAllPlayers(request: {
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
     * Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only
     * draft leaderboards may be reset.
     */
    resetMultipleForAllPlayers(request: {
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
  }

  declare interface gamesmanagement$TurnBasedMatchesResource {
    /**
     * Reset all turn-based match data for a user. This method is only accessible to whitelisted tester accounts for your application.
     */
    reset(request: {
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
     * Deletes turn-based matches where the only match participants are from whitelisted tester accounts for your application. This method is only available
     * to user accounts for your developer console.
     */
    resetForAllPlayers(request: {
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
  }
}
