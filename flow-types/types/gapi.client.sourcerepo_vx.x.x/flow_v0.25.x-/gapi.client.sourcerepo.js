declare module "gapi.client.sourcerepo" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Cloud Source Repositories API v1
   */
  declare function gapi$client$load(
    name: "sourcerepo",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "sourcerepo",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: sourcerepo$ProjectsResource;

  declare interface gapi$client$sourcerepo$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     * Next ID: 4
     */
    auditLogConfigs?: sourcerepo$AuditLogConfig[];
    exemptedMembers?: string[];

    /**
     * Specifies a service that will be enabled for audit logging.
     * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
     * `allServices` is a special value that covers all services.
     */
    service?: string;
  }

  declare interface gapi$client$sourcerepo$AuditLogConfig {
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

  declare interface gapi$client$sourcerepo$Binding {
    /**
     * The condition that is associated with this binding.
     * NOTE: an unsatisfied condition will not allow user access via current
     * binding. Different bindings, including their conditions, are examined
     * independently.
     * This field is GOOGLE_INTERNAL.
     */
    condition?: sourcerepo$Expr;

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

  declare interface gapi$client$sourcerepo$Expr {
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

  declare interface gapi$client$sourcerepo$ListReposResponse {
    /**
     * If non-empty, additional repositories exist within the project. These
     * can be retrieved by including this value in the next ListReposRequest's
     * page_token field.
     */
    nextPageToken?: string;

    /**
     * The listed repos.
     */
    repos?: sourcerepo$Repo[];
  }

  declare interface gapi$client$sourcerepo$MirrorConfig {
    /**
     * ID of the SSH deploy key at the other hosting service.
     * Removing this key from the other service would deauthorize
     * Google Cloud Source Repositories from mirroring.
     */
    deployKeyId?: string;

    /**
     * URL of the main repository at the other hosting service.
     */
    url?: string;

    /**
     * ID of the webhook listening to updates to trigger mirroring.
     * Removing this webook from the other hosting service will stop
     * Google Cloud Source Repositories from receiving notifications,
     * and thereby disabling mirroring.
     */
    webhookId?: string;
  }

  declare interface gapi$client$sourcerepo$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: gapi$client$sourcerepo$AuditConfig[];

    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$sourcerepo$Binding[];

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

  declare interface gapi$client$sourcerepo$Repo {
    /**
     * How this repository mirrors a repository managed by another service.
     */
    mirrorConfig?: gapi$client$sourcerepo$MirrorConfig;

    /**
     * Resource name of the repository, of the form
     * `projects/<project>/repos/<repo>`.  The repo name may contain slashes.
     * eg, `projects/myproject/repos/name/with/slash`
     */
    name?: string;

    /**
     * The disk usage of the repo, in bytes.
     * Only returned by GetRepo.
     */
    size?: string;

    /**
     * URL to clone the repository from Google Cloud Source Repositories.
     */
    url?: string;
  }

  declare interface gapi$client$sourcerepo$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$sourcerepo$Policy;

    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
     * the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used:
     * paths: "bindings, etag"
     * This field is only used by Cloud IAM.
     */
    updateMask?: string;
  }

  declare interface gapi$client$sourcerepo$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface gapi$client$sourcerepo$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$sourcerepo$ReposResource {
    /**
     * Creates a repo in the given project with the given name.
     *
     * If the named repository already exists, `CreateRepo` returns
     * `ALREADY_EXISTS`.
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
       * The project in which to create the repo. Values are of the form
       * `projects/<project>`.
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
    }): Request<gapi$client$sourcerepo$Repo>;

    /**
     * Deletes a repo.
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
       * The name of the repo to delete. Values are of the form
       * `projects/<project>/repos/<repo>`.
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
     * Returns information about a repo.
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
       * The name of the requested repository. Values are of the form
       * `projects/<project>/repos/<repo>`.
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
    }): Request<gapi$client$sourcerepo$Repo>;

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
    }): Request<gapi$client$sourcerepo$Policy>;

    /**
     * Returns all repos belonging to a project. The sizes of the repos are
     * not set by ListRepos.  To get the size of a repo, use GetRepo.
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
       * The project ID whose repos should be listed. Values are of the form
       * `projects/<project>`.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Maximum number of repositories to return; between 1 and 500.
       * If not set or zero, defaults to 100 at the server.
       */
      pageSize?: number,

      /**
       * Resume listing repositories where a prior ListReposResponse
       * left off. This is an opaque token that must be obtained from
       * a recent, prior ListReposResponse's next_page_token field.
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
    }): Request<gapi$client$sourcerepo$ListReposResponse>;

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
    }): Request<gapi$client$sourcerepo$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
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
    }): Request<gapi$client$sourcerepo$TestIamPermissionsResponse>;
  }

  declare interface gapi$client$sourcerepo$ProjectsResource {
    repos: gapi$client$sourcerepo$ReposResource;
  }
}
