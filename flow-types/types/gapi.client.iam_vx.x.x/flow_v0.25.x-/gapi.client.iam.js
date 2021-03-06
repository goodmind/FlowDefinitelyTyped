declare module "gapi.client.iam" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    organizations: typeof gapi$client$organizations,
    permissions: typeof gapi$client$permissions,
    projects: typeof gapi$client$projects,
    roles: typeof gapi$client$roles
  };

  /**
   * Load Google Identity and Access Management (IAM) API v1
   */
  declare function gapi$client$load(
    name: "iam",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "iam",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$organizations: iam$OrganizationsResource;

  declare var gapi$client$permissions: iam$PermissionsResource;

  declare var gapi$client$projects: iam$ProjectsResource;

  declare var gapi$client$roles: iam$RolesResource;

  declare interface gapi$client$iam$AuditData {
    /**
     * Policy delta between the original policy and the newly set policy.
     */
    policyDelta?: iam$PolicyDelta;
  }

  declare interface gapi$client$iam$Binding {
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

  declare interface gapi$client$iam$BindingDelta {
    /**
     * The action that was performed on a Binding.
     * Required
     */
    action?: string;

    /**
     * The condition that is associated with this binding.
     * This field is GOOGLE_INTERNAL.
     * This field is not logged in IAM side because it's only for audit logging.
     * Optional
     */
    condition?: iam$Expr;

    /**
     * A single identity requesting access for a Cloud Platform resource.
     * Follows the same format of Binding.members.
     * Required
     */
    member?: string;

    /**
     * Role that is assigned to `members`.
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     * Required
     */
    role?: string;
  }

  declare interface gapi$client$iam$CreateRoleRequest {
    /**
     * The Role resource to create.
     */
    role?: iam$Role;

    /**
     * The role id to use for this role.
     */
    roleId?: string;
  }

  declare interface gapi$client$iam$CreateServiceAccountKeyRequest {
    /**
     * Which type of key and algorithm to use for the key.
     * The default is currently a 2K RSA key.  However this may change in the
     * future.
     */
    keyAlgorithm?: string;

    /**
     * The output format of the private key. `GOOGLE_CREDENTIALS_FILE` is the
     * default output format.
     */
    privateKeyType?: string;
  }

  declare interface gapi$client$iam$CreateServiceAccountRequest {
    /**
     * Required. The account id that is used to generate the service account
     * email address and a stable unique id. It is unique within a project,
     * must be 6-30 characters long, and match the regular expression
     * `[a-z]([-a-z0-9]&#42;[a-z0-9])` to comply with RFC1035.
     */
    accountId?: string;

    /**
     * The ServiceAccount resource to create.
     * Currently, only the following values are user assignable:
     * `display_name` .
     */
    serviceAccount?: iam$ServiceAccount;
  }

  declare interface gapi$client$iam$Expr {
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

  declare interface gapi$client$iam$ListRolesResponse {
    /**
     * To retrieve the next page of results, set
     * `ListRolesRequest.page_token` to this value.
     */
    nextPageToken?: string;

    /**
     * The Roles defined on this resource.
     */
    roles?: iam$Role[];
  }

  declare interface gapi$client$iam$ListServiceAccountKeysResponse {
    /**
     * The public keys for the service account.
     */
    keys?: iam$ServiceAccountKey[];
  }

  declare interface gapi$client$iam$ListServiceAccountsResponse {
    /**
     * The list of matching service accounts.
     */
    accounts?: iam$ServiceAccount[];

    /**
     * To retrieve the next page of results, set
     * ListServiceAccountsRequest.page_token
     * to this value.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$iam$Permission {
    /**
     * The current custom role support level.
     */
    customRolesSupportLevel?: string;

    /**
     * A brief description of what this Permission is used for.
     */
    description?: string;

    /**
     * The name of this Permission.
     */
    name?: string;

    /**
     * This permission can ONLY be used in predefined roles.
     */
    onlyInPredefinedRoles?: boolean;

    /**
     * The current launch stage of the permission.
     */
    stage?: string;

    /**
     * The title of this Permission.
     */
    title?: string;
  }

  declare interface gapi$client$iam$Policy {
    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$iam$Binding[];

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

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface gapi$client$iam$PolicyDelta {
    /**
     * The delta for Bindings between two policies.
     */
    bindingDeltas?: gapi$client$iam$BindingDelta[];
  }

  declare interface gapi$client$iam$QueryGrantableRolesRequest {
    /**
     * Required. The full resource name to query from the list of grantable roles.
     *
     * The name follows the Google Cloud Platform resource format.
     * For example, a Cloud Platform project with id `my-project` will be named
     * `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    fullResourceName?: string;

    /**
     * Optional limit on the number of roles to include in the response.
     */
    pageSize?: number;

    /**
     * Optional pagination token returned in an earlier
     * QueryGrantableRolesResponse.
     */
    pageToken?: string;
    view?: string;
  }

  declare interface gapi$client$iam$QueryGrantableRolesResponse {
    /**
     * To retrieve the next page of results, set
     * `QueryGrantableRolesRequest.page_token` to this value.
     */
    nextPageToken?: string;

    /**
     * The list of matching roles.
     */
    roles?: iam$Role[];
  }

  declare interface gapi$client$iam$QueryTestablePermissionsRequest {
    /**
     * Required. The full resource name to query from the list of testable
     * permissions.
     *
     * The name follows the Google Cloud Platform resource format.
     * For example, a Cloud Platform project with id `my-project` will be named
     * `//cloudresourcemanager.googleapis.com/projects/my-project`.
     */
    fullResourceName?: string;

    /**
     * Optional limit on the number of permissions to include in the response.
     */
    pageSize?: number;

    /**
     * Optional pagination token returned in an earlier
     * QueryTestablePermissionsRequest.
     */
    pageToken?: string;
  }

  declare interface gapi$client$iam$QueryTestablePermissionsResponse {
    /**
     * To retrieve the next page of results, set
     * `QueryTestableRolesRequest.page_token` to this value.
     */
    nextPageToken?: string;

    /**
     * The Permissions testable on the requested resource.
     */
    permissions?: gapi$client$iam$Permission[];
  }

  declare interface gapi$client$iam$Role {
    /**
     * The current deleted state of the role. This field is read only.
     * It will be ignored in calls to CreateRole and UpdateRole.
     */
    deleted?: boolean;

    /**
     * Optional.  A human-readable description for the role.
     */
    description?: string;

    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string;

    /**
     * The names of the permissions this role grants when bound in an IAM policy.
     */
    includedPermissions?: string[];

    /**
     * The name of the role.
     *
     * When Role is used in CreateRole, the role name must not be set.
     *
     * When Role is used in output and other input such as UpdateRole, the role
     * name is the complete path, e.g., roles/logging.viewer for curated roles
     * and organizations/{ORGANIZATION_ID}/roles/logging.viewer for custom roles.
     */
    name?: string;

    /**
     * The current launch stage of the role.
     */
    stage?: string;

    /**
     * Optional.  A human-readable title for the role.  Typically this
     * is limited to 100 UTF-8 bytes.
     */
    title?: string;
  }

  declare interface gapi$client$iam$ServiceAccount {
    /**
     * Optional. A user-specified description of the service account.  Must be
     * fewer than 100 UTF-8 bytes.
     */
    displayName?: string;

    /**
     * @OutputOnly The email address of the service account.
     */
    email?: string;

    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string;

    /**
     * The resource name of the service account in the following format:
     * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
     *
     * Requests using `-` as a wildcard for the `PROJECT_ID` will infer the
     * project from the `account` and the `ACCOUNT` value can be the `email`
     * address or the `unique_id` of the service account.
     *
     * In responses the resource name will always be in the format
     * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
     */
    name?: string;

    /**
     * @OutputOnly . The OAuth2 client id for the service account.
     * This is used in conjunction with the OAuth2 clientconfig API to make
     * three legged OAuth2 (3LO) flows to access the data of Google users.
     */
    oauth2ClientId?: string;

    /**
     * @OutputOnly The id of the project that owns the service account.
     */
    projectId?: string;

    /**
     * @OutputOnly The unique and stable id of the service account.
     */
    uniqueId?: string;
  }

  declare interface gapi$client$iam$ServiceAccountKey {
    /**
     * Specifies the algorithm (and possibly key size) for the key.
     */
    keyAlgorithm?: string;

    /**
     * The resource name of the service account key in the following format
     * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.
     */
    name?: string;

    /**
     * The private key data. Only provided in `CreateServiceAccountKey`
     * responses. Make sure to keep the private key data secure because it
     * allows for the assertion of the service account identity.
     * When decoded, the private key data can be used to authenticate with
     * Google API client libraries and with
     * <a href="/sdk/gcloud/reference/auth/activate-service-account">gcloud
     * auth activate-service-account</a>.
     */
    privateKeyData?: string;

    /**
     * The output format for the private key.
     * Only provided in `CreateServiceAccountKey` responses, not
     * in `GetServiceAccountKey` or `ListServiceAccountKey` responses.
     *
     * Google never exposes system-managed private keys, and never retains
     * user-managed private keys.
     */
    privateKeyType?: string;

    /**
     * The public key data. Only provided in `GetServiceAccountKey` responses.
     */
    publicKeyData?: string;

    /**
     * The key can be used after this timestamp.
     */
    validAfterTime?: string;

    /**
     * The key can be used before this timestamp.
     */
    validBeforeTime?: string;
  }

  declare interface gapi$client$iam$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$iam$Policy;
  }

  declare interface gapi$client$iam$SignBlobRequest {
    /**
     * The bytes to sign.
     */
    bytesToSign?: string;
  }

  declare interface gapi$client$iam$SignBlobResponse {
    /**
     * The id of the key used to sign the blob.
     */
    keyId?: string;

    /**
     * The signed blob.
     */
    signature?: string;
  }

  declare interface gapi$client$iam$SignJwtRequest {
    /**
     * The JWT payload to sign, a JSON JWT Claim set.
     */
    payload?: string;
  }

  declare interface gapi$client$iam$SignJwtResponse {
    /**
     * The id of the key used to sign the JWT.
     */
    keyId?: string;

    /**
     * The signed JWT.
     */
    signedJwt?: string;
  }

  declare interface gapi$client$iam$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface gapi$client$iam$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$iam$UndeleteRoleRequest {
    /**
     * Used to perform a consistent read-modify-write.
     */
    etag?: string;
  }

  declare interface gapi$client$iam$RolesResource {
    /**
     * Creates a new Role.
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
       * The resource name of the parent resource in one of the following formats:
       * `organizations/{ORGANIZATION_ID}`
       * `projects/{PROJECT_ID}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Soft deletes a role. The role is suspended and cannot be used to create new
     * IAM Policy Bindings.
     * The Role will not be included in `ListRoles()` unless `show_deleted` is set
     * in the `ListRolesRequest`. The Role contains the deleted boolean set.
     * Existing Bindings remains, but are inactive. The Role can be undeleted
     * within 7 days. After 7 days the Role is deleted and all Bindings associated
     * with the role are removed.
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
       * Used to perform a consistent read-modify-write.
       */
      etag?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource name of the role in one of the following formats:
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Gets a Role definition.
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
       * The resource name of the role in one of the following formats:
       * `roles/{ROLE_NAME}`
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Lists the Roles defined on a resource.
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
       * Optional limit on the number of roles to include in the response.
       */
      pageSize?: number,

      /**
       * Optional pagination token returned in an earlier ListRolesResponse.
       */
      pageToken?: string,

      /**
       * The resource name of the parent resource in one of the following formats:
       * `` (empty string) -- this refers to curated roles.
       * `organizations/{ORGANIZATION_ID}`
       * `projects/{PROJECT_ID}`
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
       * Include Roles that have been deleted.
       */
      showDeleted?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Optional view for the returned Role objects.
       */
      view?: string
    }): Request<gapi$client$iam$ListRolesResponse>;

    /**
     * Updates a Role definition.
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
       * The resource name of the role in one of the following formats:
       * `roles/{ROLE_NAME}`
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
       * A mask describing which fields in the Role have changed.
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Undelete a Role, bringing it back in its previous state.
     */
    undelete(request: {
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
       * The resource name of the role in one of the following formats:
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Creates a new Role.
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
       * The resource name of the parent resource in one of the following formats:
       * `organizations/{ORGANIZATION_ID}`
       * `projects/{PROJECT_ID}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Soft deletes a role. The role is suspended and cannot be used to create new
     * IAM Policy Bindings.
     * The Role will not be included in `ListRoles()` unless `show_deleted` is set
     * in the `ListRolesRequest`. The Role contains the deleted boolean set.
     * Existing Bindings remains, but are inactive. The Role can be undeleted
     * within 7 days. After 7 days the Role is deleted and all Bindings associated
     * with the role are removed.
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
       * Used to perform a consistent read-modify-write.
       */
      etag?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The resource name of the role in one of the following formats:
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Gets a Role definition.
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
       * The resource name of the role in one of the following formats:
       * `roles/{ROLE_NAME}`
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Lists the Roles defined on a resource.
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
       * Optional limit on the number of roles to include in the response.
       */
      pageSize?: number,

      /**
       * Optional pagination token returned in an earlier ListRolesResponse.
       */
      pageToken?: string,

      /**
       * The resource name of the parent resource in one of the following formats:
       * `` (empty string) -- this refers to curated roles.
       * `organizations/{ORGANIZATION_ID}`
       * `projects/{PROJECT_ID}`
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
       * Include Roles that have been deleted.
       */
      showDeleted?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Optional view for the returned Role objects.
       */
      view?: string
    }): Request<gapi$client$iam$ListRolesResponse>;

    /**
     * Updates a Role definition.
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
       * The resource name of the role in one of the following formats:
       * `roles/{ROLE_NAME}`
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
       * A mask describing which fields in the Role have changed.
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Undelete a Role, bringing it back in its previous state.
     */
    undelete(request: {
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
       * The resource name of the role in one of the following formats:
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Gets a Role definition.
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
       * The resource name of the role in one of the following formats:
       * `roles/{ROLE_NAME}`
       * `organizations/{ORGANIZATION_ID}/roles/{ROLE_NAME}`
       * `projects/{PROJECT_ID}/roles/{ROLE_NAME}`
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
    }): Request<gapi$client$iam$Role>;

    /**
     * Lists the Roles defined on a resource.
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
       * Optional limit on the number of roles to include in the response.
       */
      pageSize?: number,

      /**
       * Optional pagination token returned in an earlier ListRolesResponse.
       */
      pageToken?: string,

      /**
       * The resource name of the parent resource in one of the following formats:
       * `` (empty string) -- this refers to curated roles.
       * `organizations/{ORGANIZATION_ID}`
       * `projects/{PROJECT_ID}`
       */
      parent?: string,

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
       * Include Roles that have been deleted.
       */
      showDeleted?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * Optional view for the returned Role objects.
       */
      view?: string
    }): Request<gapi$client$iam$ListRolesResponse>;

    /**
     * Queries roles that can be granted on a particular resource.
     * A role is grantable if it can be used as the role in a binding for a policy
     * for that resource.
     */
    queryGrantableRoles(request: {
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
    }): Request<gapi$client$iam$QueryGrantableRolesResponse>;
  }

  declare interface gapi$client$iam$OrganizationsResource {
    roles: gapi$client$iam$RolesResource;
  }

  declare interface gapi$client$iam$PermissionsResource {
    /**
     * Lists the permissions testable on a resource.
     * A permission is testable if it can be tested for an identity on a resource.
     */
    queryTestablePermissions(request: {
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
    }): Request<gapi$client$iam$QueryTestablePermissionsResponse>;
  }

  declare interface gapi$client$iam$KeysResource {
    /**
     * Creates a ServiceAccountKey
     * and returns it.
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
    }): Request<gapi$client$iam$ServiceAccountKey>;

    /**
     * Deletes a ServiceAccountKey.
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
       * The resource name of the service account key in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
     * Gets the ServiceAccountKey
     * by key id.
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
       * The resource name of the service account key in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}`.
       *
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
       * The output format of the public key requested.
       * X509_PEM is the default output format.
       */
      publicKeyType?: string,

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
    }): Request<gapi$client$iam$ServiceAccountKey>;

    /**
     * Lists ServiceAccountKeys.
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
       * Filters the types of keys the user wants to include in the list
       * response. Duplicate key types are not allowed. If no key type
       * is provided, all keys are returned.
       */
      keyTypes?: string,

      /**
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       *
       * Using `-` as a wildcard for the `PROJECT_ID`, will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
    }): Request<gapi$client$iam$ListServiceAccountKeysResponse>;
  }

  declare interface gapi$client$iam$ServiceAccountsResource {
    /**
     * Creates a ServiceAccount
     * and returns it.
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
       * Required. The resource name of the project associated with the service
       * accounts, such as `projects/my-project-123`.
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
    }): Request<gapi$client$iam$ServiceAccount>;

    /**
     * Deletes a ServiceAccount.
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
     * Gets a ServiceAccount.
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
    }): Request<gapi$client$iam$ServiceAccount>;

    /**
     * Returns the IAM access control policy for a
     * ServiceAccount.
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
    }): Request<gapi$client$iam$Policy>;

    /**
     * Lists ServiceAccounts for a project.
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
       * Required. The resource name of the project associated with the service
       * accounts, such as `projects/my-project-123`.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Optional limit on the number of service accounts to include in the
       * response. Further accounts can subsequently be obtained by including the
       * ListServiceAccountsResponse.next_page_token
       * in a subsequent request.
       */
      pageSize?: number,

      /**
       * Optional pagination token returned in an earlier
       * ListServiceAccountsResponse.next_page_token.
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
    }): Request<gapi$client$iam$ListServiceAccountsResponse>;

    /**
     * Sets the IAM access control policy for a
     * ServiceAccount.
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
    }): Request<gapi$client$iam$Policy>;

    /**
     * Signs a blob using a service account's system-managed private key.
     */
    signBlob(request: {
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
    }): Request<gapi$client$iam$SignBlobResponse>;

    /**
     * Signs a JWT using a service account's system-managed private key.
     *
     * If no expiry time (`exp`) is provided in the `SignJwtRequest`, IAM sets an
     * an expiry time of one hour by default. If you request an expiry time of
     * more than one hour, the request will fail.
     */
    signJwt(request: {
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       * Using `-` as a wildcard for the `PROJECT_ID` will infer the project from
       * the account. The `ACCOUNT` value can be the `email` address or the
       * `unique_id` of the service account.
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
    }): Request<gapi$client$iam$SignJwtResponse>;

    /**
     * Tests the specified permissions against the IAM access control policy
     * for a ServiceAccount.
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
    }): Request<gapi$client$iam$TestIamPermissionsResponse>;

    /**
     * Updates a ServiceAccount.
     *
     * Currently, only the following fields are updatable:
     * `display_name` .
     * The `etag` is mandatory.
     */
    update(request: {
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
       * The resource name of the service account in the following format:
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
       *
       * Requests using `-` as a wildcard for the `PROJECT_ID` will infer the
       * project from the `account` and the `ACCOUNT` value can be the `email`
       * address or the `unique_id` of the service account.
       *
       * In responses the resource name will always be in the format
       * `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}`.
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
    }): Request<gapi$client$iam$ServiceAccount>;
    keys: gapi$client$iam$KeysResource;
  }

  declare interface gapi$client$iam$ProjectsResource {
    roles: gapi$client$iam$RolesResource;
    serviceAccounts: gapi$client$iam$ServiceAccountsResource;
  }
}
