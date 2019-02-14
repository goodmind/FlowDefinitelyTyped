declare module "gapi.client.cloudkms" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud Key Management Service (KMS) API v1
   */
  declare function gapi$client$load(
    name: "cloudkms",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudkms",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: cloudkms$ProjectsResource;

  declare interface gapi$client$cloudkms$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     * Next ID: 4
     */
    auditLogConfigs?: cloudkms$AuditLogConfig[];
    exemptedMembers?: string[];

    /**
     * Specifies a service that will be enabled for audit logging.
     * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
     * `allServices` is a special value that covers all services.
     */
    service?: string;
  }

  declare interface gapi$client$cloudkms$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission.
     * Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];

    /**
     * The log type that this config enables.
     */
    logType?: string;
  }

  declare interface gapi$client$cloudkms$Binding {
    /**
     * The condition that is associated with this binding.
     * NOTE: an unsatisfied condition will not allow user access via current
     * binding. Different bindings, including their conditions, are examined
     * independently.
     * This field is GOOGLE_INTERNAL.
     */
    condition?: cloudkms$Expr;

    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:
     *
     * &#42; `allUsers`: A special identifier that represents anyone who is
     * on the internet; with or without a Google account.
     *
     * &#42; `allAuthenticatedUsers`: A special identifier that represents anyone
     * who is authenticated with a Google account or a service account.
     *
     * &#42; `user:{emailid}`: An email address that represents a specific Google
     * account. For example, `alice@gmail.com` or `joe@example.com`.
     *
     *
     * &#42; `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * &#42; `group:{emailid}`: An email address that represents a Google group.
     * For example, `admins@example.com`.
     *
     *
     * &#42; `domain:{domain}`: A Google Apps domain name that represents all the
     * users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];

    /**
     * Role that is assigned to `members`.
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     * Required
     */
    role?: string;
  }

  declare interface gapi$client$cloudkms$CryptoKey {
    /**
     * Output only. The time at which this CryptoKey was created.
     */
    createTime?: string;

    /**
     * Labels with user defined metadata.
     */
    labels?: Record<string, string>;

    /**
     * Output only. The resource name for this CryptoKey in the format
     * `projects/&#42;/locations/&#42;/keyRings/&#42;/cryptoKeys/&#42;`.
     */
    name?: string;

    /**
     * At next_rotation_time, the Key Management Service will automatically:
     *
     * 1. Create a new version of this CryptoKey.
     * 2. Mark the new version as primary.
     *
     * Key rotations performed manually via
     * CreateCryptoKeyVersion and
     * UpdateCryptoKeyPrimaryVersion
     * do not affect next_rotation_time.
     */
    nextRotationTime?: string;

    /**
     * Output only. A copy of the "primary" CryptoKeyVersion that will be used
     * by Encrypt when this CryptoKey is given
     * in EncryptRequest.name.
     *
     * The CryptoKey's primary version can be updated via
     * UpdateCryptoKeyPrimaryVersion.
     */
    primary?: cloudkms$CryptoKeyVersion;

    /**
     * The immutable purpose of this CryptoKey. Currently, the only acceptable
     * purpose is ENCRYPT_DECRYPT.
     */
    purpose?: string;

    /**
     * next_rotation_time will be advanced by this period when the service
     * automatically rotates a key. Must be at least one day.
     *
     * If rotation_period is set, next_rotation_time must also be set.
     */
    rotationPeriod?: string;
  }

  declare interface gapi$client$cloudkms$CryptoKeyVersion {
    /**
     * Output only. The time at which this CryptoKeyVersion was created.
     */
    createTime?: string;

    /**
     * Output only. The time this CryptoKeyVersion's key material was
     * destroyed. Only present if state is
     * DESTROYED.
     */
    destroyEventTime?: string;

    /**
     * Output only. The time this CryptoKeyVersion's key material is scheduled
     * for destruction. Only present if state is
     * DESTROY_SCHEDULED.
     */
    destroyTime?: string;

    /**
     * Output only. The resource name for this CryptoKeyVersion in the format
     * `projects/&#42;/locations/&#42;/keyRings/&#42;/cryptoKeys/&#42;/cryptoKeyVersions/&#42;`.
     */
    name?: string;

    /**
     * The current state of the CryptoKeyVersion.
     */
    state?: string;
  }

  declare interface gapi$client$cloudkms$DecryptRequest {
    /**
     * Optional data that must match the data originally supplied in
     * EncryptRequest.additional_authenticated_data.
     */
    additionalAuthenticatedData?: string;

    /**
     * Required. The encrypted data originally returned in
     * EncryptResponse.ciphertext.
     */
    ciphertext?: string;
  }

  declare interface gapi$client$cloudkms$DecryptResponse {
    /**
     * The decrypted data originally supplied in EncryptRequest.plaintext.
     */
    plaintext?: string;
  }

  declare interface gapi$client$cloudkms$EncryptRequest {
    /**
     * Optional data that, if specified, must also be provided during decryption
     * through DecryptRequest.additional_authenticated_data.  Must be no
     * larger than 64KiB.
     */
    additionalAuthenticatedData?: string;

    /**
     * Required. The data to encrypt. Must be no larger than 64KiB.
     */
    plaintext?: string;
  }

  declare interface gapi$client$cloudkms$EncryptResponse {
    /**
     * The encrypted data.
     */
    ciphertext?: string;

    /**
     * The resource name of the CryptoKeyVersion used in encryption.
     */
    name?: string;
  }

  declare interface gapi$client$cloudkms$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;

    /**
     * Textual representation of an expression in
     * Common Expression Language syntax.
     *
     * The application context of the containing message determines which
     * well-known feature set of CEL is supported.
     */
    expression?: string;

    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;

    /**
     * An optional title for the expression, i.e. a short string describing
     * its purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }

  declare interface gapi$client$cloudkms$KeyRing {
    /**
     * Output only. The time at which this KeyRing was created.
     */
    createTime?: string;

    /**
     * Output only. The resource name for the KeyRing in the format
     * `projects/&#42;/locations/&#42;/keyRings/&#42;`.
     */
    name?: string;
  }

  declare interface gapi$client$cloudkms$ListCryptoKeyVersionsResponse {
    /**
     * The list of CryptoKeyVersions.
     */
    cryptoKeyVersions?: gapi$client$cloudkms$CryptoKeyVersion[];

    /**
     * A token to retrieve next page of results. Pass this value in
     * ListCryptoKeyVersionsRequest.page_token to retrieve the next page of
     * results.
     */
    nextPageToken?: string;

    /**
     * The total number of CryptoKeyVersions that matched the
     * query.
     */
    totalSize?: number;
  }

  declare interface gapi$client$cloudkms$ListCryptoKeysResponse {
    /**
     * The list of CryptoKeys.
     */
    cryptoKeys?: gapi$client$cloudkms$CryptoKey[];

    /**
     * A token to retrieve next page of results. Pass this value in
     * ListCryptoKeysRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;

    /**
     * The total number of CryptoKeys that matched the query.
     */
    totalSize?: number;
  }

  declare interface gapi$client$cloudkms$ListKeyRingsResponse {
    /**
     * The list of KeyRings.
     */
    keyRings?: gapi$client$cloudkms$KeyRing[];

    /**
     * A token to retrieve next page of results. Pass this value in
     * ListKeyRingsRequest.page_token to retrieve the next page of results.
     */
    nextPageToken?: string;

    /**
     * The total number of KeyRings that matched the query.
     */
    totalSize?: number;
  }

  declare interface gapi$client$cloudkms$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: cloudkms$Location[];

    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudkms$Location {
    /**
     * Cross-service attributes for the location. For example
     *
     * {"cloud.googleapis.com/region": "us-east1"}
     */
    labels?: Record<string, string>;

    /**
     * The canonical id for this location. For example: `"us-east1"`.
     */
    locationId?: string;

    /**
     * Service-specific metadata. For example the available capacity at the given
     * location.
     */
    metadata?: Record<string, any>;

    /**
     * Resource name for the location, which may vary between implementations.
     * For example: `"projects/example-project/locations/us-east1"`
     */
    name?: string;
  }

  declare interface gapi$client$cloudkms$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: gapi$client$cloudkms$AuditConfig[];

    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$cloudkms$Binding[];

    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other.
     * It is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the policy.
     *
     * If no `etag` is provided in the call to `setIamPolicy`, then the existing
     * policy is overwritten blindly.
     */
    etag?: string;
    iamOwned?: boolean;

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface gapi$client$cloudkms$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$cloudkms$Policy;

    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
     * the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used:
     * paths: "bindings, etag"
     * This field is only used by Cloud IAM.
     */
    updateMask?: string;
  }

  declare interface gapi$client$cloudkms$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface gapi$client$cloudkms$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$cloudkms$UpdateCryptoKeyPrimaryVersionRequest {
    /**
     * The id of the child CryptoKeyVersion to use as primary.
     */
    cryptoKeyVersionId?: string;
  }

  declare interface gapi$client$cloudkms$CryptoKeyVersionsResource {
    /**
     * Create a new CryptoKeyVersion in a CryptoKey.
     *
     * The server will assign the next sequential id. If unset,
     * state will be set to
     * ENABLED.
     */
    create(request: {
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
       * Required. The name of the CryptoKey associated with
       * the CryptoKeyVersions.
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
    }): Request<gapi$client$cloudkms$CryptoKeyVersion>;

    /**
     * Schedule a CryptoKeyVersion for destruction.
     *
     * Upon calling this method, CryptoKeyVersion.state will be set to
     * DESTROY_SCHEDULED
     * and destroy_time will be set to a time 24
     * hours in the future, at which point the state
     * will be changed to
     * DESTROYED, and the key
     * material will be irrevocably destroyed.
     *
     * Before the destroy_time is reached,
     * RestoreCryptoKeyVersion may be called to reverse the process.
     */
    destroy(request: {
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
       * The resource name of the CryptoKeyVersion to destroy.
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
    }): Request<gapi$client$cloudkms$CryptoKeyVersion>;

    /**
     * Returns metadata for a given CryptoKeyVersion.
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
       * The name of the CryptoKeyVersion to get.
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
    }): Request<gapi$client$cloudkms$CryptoKeyVersion>;

    /**
     * Lists CryptoKeyVersions.
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
       * Optional limit on the number of CryptoKeyVersions to
       * include in the response. Further CryptoKeyVersions can
       * subsequently be obtained by including the
       * ListCryptoKeyVersionsResponse.next_page_token in a subsequent request.
       * If unspecified, the server will pick an appropriate default.
       */
      pageSize?: number,

      /**
       * Optional pagination token, returned earlier via
       * ListCryptoKeyVersionsResponse.next_page_token.
       */
      pageToken?: string,

      /**
       * Required. The resource name of the CryptoKey to list, in the format
       * `projects/&#42;/locations/&#42;/keyRings/&#42;/cryptoKeys/&#42;`.
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
    }): Request<gapi$client$cloudkms$ListCryptoKeyVersionsResponse>;

    /**
     * Update a CryptoKeyVersion's metadata.
     *
     * state may be changed between
     * ENABLED and
     * DISABLED using this
     * method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to
     * move between other states.
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
       * Output only. The resource name for this CryptoKeyVersion in the format
       * `projects/&#42;/locations/&#42;/keyRings/&#42;/cryptoKeys/&#42;/cryptoKeyVersions/&#42;`.
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
       * Required list of fields to be updated in this request.
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
    }): Request<gapi$client$cloudkms$CryptoKeyVersion>;

    /**
     * Restore a CryptoKeyVersion in the
     * DESTROY_SCHEDULED,
     * state.
     *
     * Upon restoration of the CryptoKeyVersion, state
     * will be set to DISABLED,
     * and destroy_time will be cleared.
     */
    restore(request: {
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
       * The resource name of the CryptoKeyVersion to restore.
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
    }): Request<gapi$client$cloudkms$CryptoKeyVersion>;
  }

  declare interface gapi$client$cloudkms$CryptoKeysResource {
    /**
     * Create a new CryptoKey within a KeyRing.
     *
     * CryptoKey.purpose is required.
     */
    create(request: {
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
       * Required. It must be unique within a KeyRing and match the regular
       * expression `[a-zA-Z0-9_-]{1,63}`
       */
      cryptoKeyId?: string,

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
       * Required. The name of the KeyRing associated with the
       * CryptoKeys.
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
    }): Request<gapi$client$cloudkms$CryptoKey>;

    /**
     * Decrypts data that was protected by Encrypt.
     */
    decrypt(request: {
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
       * Required. The resource name of the CryptoKey to use for decryption.
       * The server will choose the appropriate version.
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
    }): Request<gapi$client$cloudkms$DecryptResponse>;

    /**
     * Encrypts data, so that it can only be recovered by a call to Decrypt.
     */
    encrypt(request: {
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
       * Required. The resource name of the CryptoKey or CryptoKeyVersion
       * to use for encryption.
       *
       * If a CryptoKey is specified, the server will use its
       * primary version.
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
    }): Request<gapi$client$cloudkms$EncryptResponse>;

    /**
     * Returns metadata for a given CryptoKey, as well as its
     * primary CryptoKeyVersion.
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
       * The name of the CryptoKey to get.
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
    }): Request<gapi$client$cloudkms$CryptoKey>;

    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
     */
    getIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$Policy>;

    /**
     * Lists CryptoKeys.
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
       * Optional limit on the number of CryptoKeys to include in the
       * response.  Further CryptoKeys can subsequently be obtained by
       * including the ListCryptoKeysResponse.next_page_token in a subsequent
       * request.  If unspecified, the server will pick an appropriate default.
       */
      pageSize?: number,

      /**
       * Optional pagination token, returned earlier via
       * ListCryptoKeysResponse.next_page_token.
       */
      pageToken?: string,

      /**
       * Required. The resource name of the KeyRing to list, in the format
       * `projects/&#42;/locations/&#42;/keyRings/&#42;`.
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
    }): Request<gapi$client$cloudkms$ListCryptoKeysResponse>;

    /**
     * Update a CryptoKey.
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
       * Output only. The resource name for this CryptoKey in the format
       * `projects/&#42;/locations/&#42;/keyRings/&#42;/cryptoKeys/&#42;`.
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
       * Required list of fields to be updated in this request.
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
    }): Request<gapi$client$cloudkms$CryptoKey>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
     */
    setIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being specified.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     *
     * Note: This operation is designed to be used for building permission-aware
     * UIs and command-line tools, not for authorization checking. This operation
     * may "fail open" without warning.
     */
    testIamPermissions(request: {
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
       * REQUIRED: The resource for which the policy detail is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$TestIamPermissionsResponse>;

    /**
     * Update the version of a CryptoKey that will be used in Encrypt
     */
    updatePrimaryVersion(request: {
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
       * The resource name of the CryptoKey to update.
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
    }): Request<gapi$client$cloudkms$CryptoKey>;
    cryptoKeyVersions: gapi$client$cloudkms$CryptoKeyVersionsResource;
  }

  declare interface gapi$client$cloudkms$KeyRingsResource {
    /**
     * Create a new KeyRing in a given Project and Location.
     */
    create(request: {
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
       * Required. It must be unique within a location and match the regular
       * expression `[a-zA-Z0-9_-]{1,63}`
       */
      keyRingId?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Required. The resource name of the location associated with the
       * KeyRings, in the format `projects/&#42;/locations/&#42;`.
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
    }): Request<gapi$client$cloudkms$KeyRing>;

    /**
     * Returns metadata for a given KeyRing.
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
       * The name of the KeyRing to get.
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
    }): Request<gapi$client$cloudkms$KeyRing>;

    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
     */
    getIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$Policy>;

    /**
     * Lists KeyRings.
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
       * Optional limit on the number of KeyRings to include in the
       * response.  Further KeyRings can subsequently be obtained by
       * including the ListKeyRingsResponse.next_page_token in a subsequent
       * request.  If unspecified, the server will pick an appropriate default.
       */
      pageSize?: number,

      /**
       * Optional pagination token, returned earlier via
       * ListKeyRingsResponse.next_page_token.
       */
      pageToken?: string,

      /**
       * Required. The resource name of the location associated with the
       * KeyRings, in the format `projects/&#42;/locations/&#42;`.
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
    }): Request<gapi$client$cloudkms$ListKeyRingsResponse>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
     */
    setIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being specified.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     *
     * Note: This operation is designed to be used for building permission-aware
     * UIs and command-line tools, not for authorization checking. This operation
     * may "fail open" without warning.
     */
    testIamPermissions(request: {
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
       * REQUIRED: The resource for which the policy detail is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudkms$TestIamPermissionsResponse>;
    cryptoKeys: gapi$client$cloudkms$CryptoKeysResource;
  }

  declare interface gapi$client$cloudkms$LocationsResource {
    /**
     * Get information about a location.
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
       * Resource name for the location.
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
    }): Request<gapi$client$cloudkms$Location>;

    /**
     * Lists information about the supported locations for this service.
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
       * The standard list filter.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource that owns the locations collection, if applicable.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * The standard list page size.
       */
      pageSize?: number,

      /**
       * The standard list page token.
       */
      pageToken?: string,

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
    }): Request<gapi$client$cloudkms$ListLocationsResponse>;
    keyRings: gapi$client$cloudkms$KeyRingsResource;
  }

  declare interface gapi$client$cloudkms$ProjectsResource {
    locations: gapi$client$cloudkms$LocationsResource;
  }
}
