declare module "gapi.client.groupsmigration" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    archive: typeof gapi$client$archive
  };

  /**
   * Load Groups Migration API v1
   */
  declare function gapi$client$load(
    name: "groupsmigration",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "groupsmigration",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$archive: groupsmigration$ArchiveResource;

  declare interface gapi$client$groupsmigration$Groups {
    /**
     * The kind of insert resource this is.
     */
    kind?: string;

    /**
     * The status of the insert request.
     */
    responseCode?: string;
  }

  declare interface gapi$client$groupsmigration$ArchiveResource {
    /**
     * Inserts a new mail into the archive of the Google group.
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
       * The group ID
       */
      groupId: string,

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
    }): Request<gapi$client$groupsmigration$Groups>;
  }
}
