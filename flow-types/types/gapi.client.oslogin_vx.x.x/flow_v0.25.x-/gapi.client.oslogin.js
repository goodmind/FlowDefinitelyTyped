declare module "gapi.client.oslogin" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    users: typeof gapi$client$users
  };

  /**
   * Load Google Cloud OS Login API v1alpha
   */
  declare function gapi$client$load(
    name: "oslogin",
    version: "v1alpha"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "oslogin",
    version: "v1alpha",
    callback: () => any
  ): void;

  declare var gapi$client$users: oslogin$UsersResource;

  declare interface gapi$client$oslogin$ImportSshPublicKeyResponse {
    /**
     * The login profile information for the user.
     */
    loginProfile?: oslogin$LoginProfile;
  }

  declare interface gapi$client$oslogin$LoginProfile {
    /**
     * A unique user ID for identifying the user.
     */
    name?: string;

    /**
     * The list of POSIX accounts associated with the Directory API user.
     */
    posixAccounts?: oslogin$PosixAccount[];

    /**
     * A map from SSH public key fingerprint to the associated key object.
     */
    sshPublicKeys?: Record<string, oslogin$SshPublicKey>;

    /**
     * Indicates if the user is suspended.
     */
    suspended?: boolean;
  }

  declare interface gapi$client$oslogin$PosixAccount {
    /**
     * The GECOS (user information) entry for this account.
     */
    gecos?: string;

    /**
     * The default group ID.
     */
    gid?: string;

    /**
     * The path to the home directory for this account.
     */
    homeDirectory?: string;

    /**
     * Only one POSIX account can be marked as primary.
     */
    primary?: boolean;

    /**
     * The path to the logic shell for this account.
     */
    shell?: string;

    /**
     * System identifier for which account the username or uid applies to.
     * By default, the empty value is used.
     */
    systemId?: string;

    /**
     * The user ID.
     */
    uid?: string;

    /**
     * The username of the POSIX account.
     */
    username?: string;
  }

  declare interface gapi$client$oslogin$SshPublicKey {
    /**
     * An expiration time in microseconds since epoch.
     */
    expirationTimeUsec?: string;

    /**
     * The SHA-256 fingerprint of the SSH public key.
     * Output only.
     */
    fingerprint?: string;

    /**
     * Public key text in SSH format, defined by
     * <a href="https://www.ietf.org/rfc/rfc4253.txt" target="_blank">RFC4253</a>
     * section 6.6.
     */
    key?: string;
  }

  declare interface gapi$client$oslogin$SshPublicKeysResource {
    /**
     * Deletes an SSH public key.
     */
    delete(request: {
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
       * The fingerprint of the public key to update. Public keys are identified by
       * their SHA-256 fingerprint. The fingerprint of the public key is in format
       * `users/{user}/sshPublicKeys/{fingerprint}`.
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
    }): Request<{}>;

    /**
     * Retrieves an SSH public key.
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
       * The fingerprint of the public key to retrieve. Public keys are identified
       * by their SHA-256 fingerprint. The fingerprint of the public key is in
       * format `users/{user}/sshPublicKeys/{fingerprint}`.
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
    }): Request<gapi$client$oslogin$SshPublicKey>;

    /**
     * Updates an SSH public key and returns the profile information. This method
     * supports patch semantics.
     */
    patch(request: {
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
       * The fingerprint of the public key to update. Public keys are identified by
       * their SHA-256 fingerprint. The fingerprint of the public key is in format
       * `users/{user}/sshPublicKeys/{fingerprint}`.
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
       * Mask to control which fields get updated. Updates all if not present.
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$oslogin$SshPublicKey>;
  }

  declare interface gapi$client$oslogin$UsersResource {
    /**
     * Retrieves the profile information used for logging in to a virtual machine
     * on Google Compute Engine.
     */
    getLoginProfile(request: {
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
       * The unique ID for the user in format `users/{user}`.
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
    }): Request<gapi$client$oslogin$LoginProfile>;

    /**
     * Adds an SSH public key and returns the profile information. Default POSIX
     * account information is set when no username and UID exist as part of the
     * login profile.
     */
    importSshPublicKey(request: {
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
       * The unique ID for the user in format `users/{user}`.
       */
      parent: string,

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
    }): Request<gapi$client$oslogin$ImportSshPublicKeyResponse>;
    sshPublicKeys: gapi$client$oslogin$SshPublicKeysResource;
  }
}
