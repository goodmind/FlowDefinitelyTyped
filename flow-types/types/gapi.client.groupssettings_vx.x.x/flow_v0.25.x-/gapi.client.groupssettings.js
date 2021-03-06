declare module "gapi.client.groupssettings" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    groups: typeof gapi$client$groups
  };

  /**
   * Load Groups Settings API v1
   */
  declare function gapi$client$load(
    name: "groupssettings",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "groupssettings",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$groups: groupssettings$GroupsResource;

  declare interface gapi$client$groupssettings$Groups {
    /**
     * Are external members allowed to join the group.
     */
    allowExternalMembers?: string;

    /**
     * Is google allowed to contact admins.
     */
    allowGoogleCommunication?: string;

    /**
     * If posting from web is allowed.
     */
    allowWebPosting?: string;

    /**
     * If the group is archive only
     */
    archiveOnly?: string;

    /**
     * Custom footer text.
     */
    customFooterText?: string;

    /**
     * Default email to which reply to any message should go.
     */
    customReplyTo?: string;

    /**
     * Default message deny notification message
     */
    defaultMessageDenyNotificationText?: string;

    /**
     * Description of the group
     */
    description?: string;

    /**
     * Email id of the group
     */
    email?: string;

    /**
     * Whether to include custom footer.
     */
    includeCustomFooter?: string;

    /**
     * If this groups should be included in global address list or not.
     */
    includeInGlobalAddressList?: string;

    /**
     * If the contents of the group are archived.
     */
    isArchived?: string;

    /**
     * The type of the resource.
     */
    kind?: string;

    /**
     * Maximum message size allowed.
     */
    maxMessageBytes?: number;

    /**
     * Can members post using the group email address.
     */
    membersCanPostAsTheGroup?: string;

    /**
     * Default message display font. Possible values are: DEFAULT_FONT FIXED_WIDTH_FONT
     */
    messageDisplayFont?: string;

    /**
     * Moderation level for messages. Possible values are: MODERATE_ALL_MESSAGES MODERATE_NON_MEMBERS MODERATE_NEW_MEMBERS MODERATE_NONE
     */
    messageModerationLevel?: string;

    /**
     * Name of the Group
     */
    name?: string;

    /**
     * Primary language for the group.
     */
    primaryLanguage?: string;

    /**
     * Whome should the default reply to a message go to. Possible values are: REPLY_TO_CUSTOM REPLY_TO_SENDER REPLY_TO_LIST REPLY_TO_OWNER REPLY_TO_IGNORE
     * REPLY_TO_MANAGERS
     */
    replyTo?: string;

    /**
     * Should the member be notified if his message is denied by owner.
     */
    sendMessageDenyNotification?: string;

    /**
     * Is the group listed in groups directory
     */
    showInGroupDirectory?: string;

    /**
     * Moderation level for messages detected as spam. Possible values are: ALLOW MODERATE SILENTLY_MODERATE REJECT
     */
    spamModerationLevel?: string;

    /**
     * Permissions to add members. Possible values are: ALL_MANAGERS_CAN_ADD ALL_MEMBERS_CAN_ADD NONE_CAN_ADD
     */
    whoCanAdd?: string;

    /**
     * Permission to contact owner of the group via web UI. Possible values are: ANYONE_CAN_CONTACT ALL_IN_DOMAIN_CAN_CONTACT ALL_MEMBERS_CAN_CONTACT
     * ALL_MANAGERS_CAN_CONTACT
     */
    whoCanContactOwner?: string;

    /**
     * Permissions to invite members. Possible values are: ALL_MEMBERS_CAN_INVITE ALL_MANAGERS_CAN_INVITE NONE_CAN_INVITE
     */
    whoCanInvite?: string;

    /**
     * Permissions to join the group. Possible values are: ANYONE_CAN_JOIN ALL_IN_DOMAIN_CAN_JOIN INVITED_CAN_JOIN CAN_REQUEST_TO_JOIN
     */
    whoCanJoin?: string;

    /**
     * Permission to leave the group. Possible values are: ALL_MANAGERS_CAN_LEAVE ALL_MEMBERS_CAN_LEAVE NONE_CAN_LEAVE
     */
    whoCanLeaveGroup?: string;

    /**
     * Permissions to post messages to the group. Possible values are: NONE_CAN_POST ALL_MANAGERS_CAN_POST ALL_MEMBERS_CAN_POST ALL_OWNERS_CAN_POST
     * ALL_IN_DOMAIN_CAN_POST ANYONE_CAN_POST
     */
    whoCanPostMessage?: string;

    /**
     * Permissions to view group. Possible values are: ANYONE_CAN_VIEW ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
     */
    whoCanViewGroup?: string;

    /**
     * Permissions to view membership. Possible values are: ALL_IN_DOMAIN_CAN_VIEW ALL_MEMBERS_CAN_VIEW ALL_MANAGERS_CAN_VIEW
     */
    whoCanViewMembership?: string;
  }

  declare interface gapi$client$groupssettings$GroupsResource {
    /**
     * Gets one resource by id.
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
       * The resource ID
       */
      groupUniqueId: string,

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
    }): Request<gapi$client$groupssettings$Groups>;

    /**
     * Updates an existing resource. This method supports patch semantics.
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
       * The resource ID
       */
      groupUniqueId: string,

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
    }): Request<gapi$client$groupssettings$Groups>;

    /**
     * Updates an existing resource.
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
       * The resource ID
       */
      groupUniqueId: string,

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
    }): Request<gapi$client$groupssettings$Groups>;
  }
}
