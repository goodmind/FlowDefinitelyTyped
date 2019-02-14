declare module "gapi.client.appstate" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    states: typeof gapi$client$states
  };

  /**
   * Load Google App State API v1
   */
  declare function gapi$client$load(
    name: "appstate",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "appstate",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$states: appstate$StatesResource;

  declare interface gapi$client$appstate$GetResponse {
    /**
     * The current app state version.
     */
    currentStateVersion?: string;

    /**
     * The requested data.
     */
    data?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string appstate#getResponse.
     */
    kind?: string;

    /**
     * The key for the data.
     */
    stateKey?: number;
  }

  declare interface gapi$client$appstate$ListResponse {
    /**
     * The app state data.
     */
    items?: gapi$client$appstate$GetResponse[];

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string appstate#listResponse.
     */
    kind?: string;

    /**
     * The maximum number of keys allowed for this user.
     */
    maximumKeyCount?: number;
  }

  declare interface gapi$client$appstate$UpdateRequest {
    /**
     * The new app state data that your application is trying to update with.
     */
    data?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string appstate#updateRequest.
     */
    kind?: string;
  }

  declare interface gapi$client$appstate$WriteResult {
    /**
     * The version of the data for this key on the server.
     */
    currentStateVersion?: string;

    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string appstate#writeResult.
     */
    kind?: string;

    /**
     * The written key.
     */
    stateKey?: number;
  }

  declare interface gapi$client$appstate$StatesResource {
    /**
     * Clears (sets to empty) the data for the passed key if and only if the passed version matches the currently stored version. This method results in a
     * conflict error on version mismatch.
     */
    clear(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The version of the data to be cleared. Version strings are returned by the server.
       */
      currentDataVersion?: string,

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
       * The key for the data to be retrieved.
       */
      stateKey: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$appstate$WriteResult>;

    /**
     * Deletes a key and the data associated with it. The key is removed and no longer counts against the key quota. Note that since this method is not safe
     * in the face of concurrent modifications, it should only be used for development and testing purposes. Invoking this method in shipping code can result
     * in data loss and data corruption.
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
       * The key for the data to be retrieved.
       */
      stateKey: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Retrieves the data corresponding to the passed key. If the key does not exist on the server, an HTTP 404 will be returned.
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
       * The key for the data to be retrieved.
       */
      stateKey: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$appstate$GetResponse>;

    /**
     * Lists all the states keys, and optionally the state data.
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
       * Whether to include the full data in addition to the version number
       */
      includeData?: boolean,

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
    }): Request<gapi$client$appstate$ListResponse>;

    /**
     * Update the data associated with the input key if and only if the passed version matches the currently stored version. This method is safe in the face
     * of concurrent writes. Maximum per-key size is 128KB.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The version of the app state your application is attempting to update. If this does not match the current version, this method will return a conflict
       * error. If there is no data stored on the server for this key, the update will succeed irrespective of the value of this parameter.
       */
      currentStateVersion?: string,

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
       * The key for the data to be retrieved.
       */
      stateKey: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$appstate$WriteResult>;
  }
}
