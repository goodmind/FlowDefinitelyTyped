declare module "gapi.client.deploymentmanager" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    deployments: typeof gapi$client$deployments,
    manifests: typeof gapi$client$manifests,
    operations: typeof gapi$client$operations,
    resources: typeof gapi$client$resources,
    types: typeof gapi$client$types
  };

  /**
   * Load Google Cloud Deployment Manager API v2
   */
  declare function gapi$client$load(
    name: "deploymentmanager",
    version: "v2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "deploymentmanager",
    version: "v2",
    callback: () => any
  ): void;

  declare var gapi$client$deployments: deploymentmanager$DeploymentsResource;

  declare var gapi$client$manifests: deploymentmanager$ManifestsResource;

  declare var gapi$client$operations: deploymentmanager$OperationsResource;

  declare var gapi$client$resources: deploymentmanager$ResourcesResource;

  declare var gapi$client$types: deploymentmanager$TypesResource;

  declare interface gapi$client$deploymentmanager$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     */
    auditLogConfigs?: deploymentmanager$AuditLogConfig[];
    exemptedMembers?: string[];

    /**
     * Specifies a service that will be enabled for audit logging. For example, `storage.googleapis.com`, `cloudsql.googleapis.com`. `allServices` is a
     * special value that covers all services.
     */
    service?: string;
  }

  declare interface gapi$client$deploymentmanager$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of permission. Follows the same format of [Binding.members][].
     */
    exemptedMembers?: string[];

    /**
     * The log type that this config enables.
     */
    logType?: string;
  }

  declare interface gapi$client$deploymentmanager$AuthorizationLoggingOptions {
    /**
     * The type of the permission that was checked.
     */
    permissionType?: string;
  }

  declare interface gapi$client$deploymentmanager$Binding {
    /**
     * The condition that is associated with this binding. NOTE: an unsatisfied condition will not allow user access via current binding. Different bindings,
     * including their conditions, are examined independently. This field is GOOGLE_INTERNAL.
     */
    condition?: deploymentmanager$Expr;

    /**
     * Specifies the identities requesting access for a Cloud Platform resource. `members` can have the following values:
     *
     * &#42; `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account.
     *
     * &#42; `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account.
     *
     * &#42; `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@gmail.com` or `joe@example.com`.
     *
     *
     *
     * &#42; `serviceAccount:{emailid}`: An email address that represents a service account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * &#42; `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`.
     *
     *
     *
     * &#42; `domain:{domain}`: A Google Apps domain name that represents all the users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];

    /**
     * Role that is assigned to `members`. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     */
    role?: string;
  }

  declare interface gapi$client$deploymentmanager$Condition {
    /**
     * Trusted attributes supplied by the IAM system.
     */
    iam?: string;

    /**
     * An operator to apply the subject with.
     */
    op?: string;

    /**
     * Trusted attributes discharged by the service.
     */
    svc?: string;

    /**
     * Trusted attributes supplied by any service that owns resources and uses the IAM system for access control.
     */
    sys?: string;

    /**
     * DEPRECATED. Use 'values' instead.
     */
    value?: string;

    /**
     * The objects of the condition. This is mutually exclusive with 'value'.
     */
    values?: string[];
  }

  declare interface gapi$client$deploymentmanager$ConfigFile {
    /**
     * The contents of the file.
     */
    content?: string;
  }

  declare interface gapi$client$deploymentmanager$Deployment {
    /**
     * An optional user-provided description of the deployment.
     */
    description?: string;

    /**
     * Provides a fingerprint to use in requests to modify a deployment, such as update(), stop(), and cancelPreview() requests. A fingerprint is a randomly
     * generated value that must be provided with update(), stop(), and cancelPreview() requests to perform optimistic locking. This ensures optimistic
     * concurrency so that only one request happens at a time.
     *
     * The fingerprint is initially generated by Deployment Manager and changes after every request to modify data. To get the latest fingerprint value,
     * perform a get() request to a deployment.
     */
    fingerprint?: string;

    /**
     * Output only. Unique identifier for the resource; defined by the server.
     */
    id?: string;

    /**
     * Output only. Timestamp when the deployment was created, in RFC3339 text format .
     */
    insertTime?: string;

    /**
     * Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63 characters long and
     * must conform to the following regular expression: [a-z]([-a-z0-9]&#42;[a-z0-9])? Label values must be between 0 and 63 characters long and must conform to
     * the regular expression ([a-z]([-a-z0-9]&#42;[a-z0-9])?)?
     */
    labels?: deploymentmanager$DeploymentLabelEntry[];

    /**
     * Output only. URL of the manifest representing the last manifest that was successfully deployed.
     */
    manifest?: string;

    /**
     * Name of the resource; provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
     * Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]&#42;[a-z0-9])? which means the first character must be
     * a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     */
    name?: string;

    /**
     * Output only. The Operation that most recently ran, or is currently running, on this deployment.
     */
    operation?: deploymentmanager$Operation;

    /**
     * Output only. Self link for the deployment.
     */
    selfLink?: string;

    /**
     * [Input Only] The parameters that define your deployment, including the deployment configuration and relevant templates.
     */
    target?: deploymentmanager$TargetConfiguration;

    /**
     * Output only. If Deployment Manager is currently updating or previewing an update to this deployment, the updated configuration appears here.
     */
    update?: deploymentmanager$DeploymentUpdate;
  }

  declare interface gapi$client$deploymentmanager$DeploymentLabelEntry {
    key?: string;
    value?: string;
  }

  declare interface gapi$client$deploymentmanager$DeploymentUpdate {
    /**
     * Output only. An optional user-provided description of the deployment after the current update has been applied.
     */
    description?: string;

    /**
     * Output only. Map of labels; provided by the client when the resource is created or updated. Specifically: Label keys must be between 1 and 63
     * characters long and must conform to the following regular expression: [a-z]([-a-z0-9]&#42;[a-z0-9])? Label values must be between 0 and 63 characters long
     * and must conform to the regular expression ([a-z]([-a-z0-9]&#42;[a-z0-9])?)?
     */
    labels?: deploymentmanager$DeploymentUpdateLabelEntry[];

    /**
     * Output only. URL of the manifest representing the update configuration of this deployment.
     */
    manifest?: string;
  }

  declare interface gapi$client$deploymentmanager$DeploymentUpdateLabelEntry {
    key?: string;
    value?: string;
  }

  declare interface gapi$client$deploymentmanager$DeploymentsCancelPreviewRequest {
    /**
     * Specifies a fingerprint for cancelPreview() requests. A fingerprint is a randomly generated value that must be provided in cancelPreview() requests to
     * perform optimistic locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to
     * make a new update request while another user attempts to cancel a preview, this would prevent one of the requests).
     *
     * The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint
     * value, perform a get() request on the deployment.
     */
    fingerprint?: string;
  }

  declare interface gapi$client$deploymentmanager$DeploymentsListResponse {
    /**
     * Output only. The deployments contained in this response.
     */
    deployments?: gapi$client$deploymentmanager$Deployment[];

    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$deploymentmanager$DeploymentsStopRequest {
    /**
     * Specifies a fingerprint for stop() requests. A fingerprint is a randomly generated value that must be provided in stop() requests to perform optimistic
     * locking. This ensures optimistic concurrency so that the deployment does not have conflicting requests (e.g. if someone attempts to make a new update
     * request while another user attempts to stop an ongoing update request, this would prevent a collision).
     *
     * The fingerprint is initially generated by Deployment Manager and changes after every request to modify a deployment. To get the latest fingerprint
     * value, perform a get() request on the deployment.
     */
    fingerprint?: string;
  }

  declare interface gapi$client$deploymentmanager$Expr {
    /**
     * An optional description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;

    /**
     * Textual representation of an expression in Common Expression Language syntax.
     *
     * The application context of the containing message determines which well-known feature set of CEL is supported.
     */
    expression?: string;

    /**
     * An optional string indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
     */
    location?: string;

    /**
     * An optional title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
     */
    title?: string;
  }

  declare interface gapi$client$deploymentmanager$ImportFile {
    /**
     * The contents of the file.
     */
    content?: string;

    /**
     * The name of the file.
     */
    name?: string;
  }

  declare interface gapi$client$deploymentmanager$LogConfig {
    /**
     * Cloud audit options.
     */
    cloudAudit?: deploymentmanager$LogConfigCloudAuditOptions;

    /**
     * Counter options.
     */
    counter?: deploymentmanager$LogConfigCounterOptions;

    /**
     * Data access options.
     */
    dataAccess?: deploymentmanager$LogConfigDataAccessOptions;
  }

  declare interface gapi$client$deploymentmanager$LogConfigCloudAuditOptions {
    /**
     * Information used by the Cloud Audit Logging pipeline.
     */
    authorizationLoggingOptions?: gapi$client$deploymentmanager$AuthorizationLoggingOptions;

    /**
     * The log_name to populate in the Cloud Audit Record.
     */
    logName?: string;
  }

  declare interface gapi$client$deploymentmanager$LogConfigCounterOptions {
    /**
     * The field value to attribute.
     */
    field?: string;

    /**
     * The metric to update.
     */
    metric?: string;
  }

  declare interface gapi$client$deploymentmanager$LogConfigDataAccessOptions {
    /**
     * Whether Gin logging should happen in a fail-closed manner at the caller. This is relevant only in the LocalIAM implementation, for now.
     */
    logMode?: string;
  }

  declare interface gapi$client$deploymentmanager$Manifest {
    /**
     * Output only. The YAML configuration for this manifest.
     */
    config?: gapi$client$deploymentmanager$ConfigFile;

    /**
     * Output only. The fully-expanded configuration file, including any templates and references.
     */
    expandedConfig?: string;

    /**
     * Output only. Unique identifier for the resource; defined by the server.
     */
    id?: string;

    /**
     * Output only. The imported files for this manifest.
     */
    imports?: gapi$client$deploymentmanager$ImportFile[];

    /**
     * Output only. Timestamp when the manifest was created, in RFC3339 text format.
     */
    insertTime?: string;

    /**
     * Output only. The YAML layout for this manifest.
     */
    layout?: string;

    /**
     * Output only.
     *
     * The name of the manifest.
     */
    name?: string;

    /**
     * Output only. Self link for the manifest.
     */
    selfLink?: string;
  }

  declare interface gapi$client$deploymentmanager$ManifestsListResponse {
    /**
     * Output only. Manifests contained in this list response.
     */
    manifests?: gapi$client$deploymentmanager$Manifest[];

    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$deploymentmanager$Operation {
    /**
     * [Output Only] Reserved for future use.
     */
    clientOperationId?: string;

    /**
     * [Deprecated] This field is deprecated.
     */
    creationTimestamp?: string;

    /**
     * [Output Only] A textual description of the operation, which is set when the operation is created.
     */
    description?: string;

    /**
     * [Output Only] The time that this operation was completed. This value is in RFC3339 text format.
     */
    endTime?: string;

    /**
     * [Output Only] If errors are generated during processing of the operation, this field will be populated.
     */
    error?: {
      /**
       * [Output Only] The array of errors encountered while processing this operation.
       */
      errors?: Array<{
        /**
         * [Output Only] The error type identifier for this error.
         */
        code?: string,

        /**
         * [Output Only] Indicates the field in the request that caused the error. This property is optional.
         */
        location?: string,

        /**
         * [Output Only] An optional, human-readable error message.
         */
        message?: string
      }>
    };

    /**
     * [Output Only] If the operation fails, this field contains the HTTP error message that was returned, such as NOT FOUND.
     */
    httpErrorMessage?: string;

    /**
     * [Output Only] If the operation fails, this field contains the HTTP error status code that was returned. For example, a 404 means the resource was not
     * found.
     */
    httpErrorStatusCode?: number;

    /**
     * [Output Only] The unique identifier for the resource. This identifier is defined by the server.
     */
    id?: string;

    /**
     * [Output Only] The time that this operation was requested. This value is in RFC3339 text format.
     */
    insertTime?: string;

    /**
     * [Output Only] Type of the resource. Always compute#operation for Operation resources.
     */
    kind?: string;

    /**
     * [Output Only] Name of the resource.
     */
    name?: string;

    /**
     * [Output Only] The type of operation, such as insert, update, or delete, and so on.
     */
    operationType?: string;

    /**
     * [Output Only] An optional progress indicator that ranges from 0 to 100. There is no requirement that this be linear or support any granularity of
     * operations. This should not be used to guess when the operation will be complete. This number should monotonically increase as the operation
     * progresses.
     */
    progress?: number;

    /**
     * [Output Only] The URL of the region where the operation resides. Only available when performing regional operations.
     */
    region?: string;

    /**
     * [Output Only] Server-defined URL for the resource.
     */
    selfLink?: string;

    /**
     * [Output Only] The time that this operation was started by the server. This value is in RFC3339 text format.
     */
    startTime?: string;

    /**
     * [Output Only] The status of the operation, which can be one of the following: PENDING, RUNNING, or DONE.
     */
    status?: string;

    /**
     * [Output Only] An optional textual description of the current status of the operation.
     */
    statusMessage?: string;

    /**
     * [Output Only] The unique target ID, which identifies a specific incarnation of the target resource.
     */
    targetId?: string;

    /**
     * [Output Only] The URL of the resource that the operation modifies. For operations related to creating a snapshot, this points to the persistent disk
     * that the snapshot was created from.
     */
    targetLink?: string;

    /**
     * [Output Only] User who requested the operation, for example: user@example.com.
     */
    user?: string;

    /**
     * [Output Only] If warning messages are generated during processing of the operation, this field will be populated.
     */
    warnings?: Array<{
      /**
       * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
       */
      code?: string,

      /**
       * [Output Only] Metadata about this warning in key: value format. For example:
       * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
       */
      data?: Array<{
        /**
         * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
         * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
         * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
         * for IP forwarding).
         */
        key?: string,

        /**
         * [Output Only] A warning data value corresponding to the key.
         */
        value?: string
      }>,

      /**
       * [Output Only] A human-readable description of the warning code.
       */
      message?: string
    }>;

    /**
     * [Output Only] The URL of the zone where the operation resides. Only available when performing per-zone operations.
     */
    zone?: string;
  }

  declare interface gapi$client$deploymentmanager$OperationsListResponse {
    /**
     * Output only. A token used to continue a truncated list request.
     */
    nextPageToken?: string;

    /**
     * Output only. Operations contained in this list response.
     */
    operations?: gapi$client$deploymentmanager$Operation[];
  }

  declare interface gapi$client$deploymentmanager$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: gapi$client$deploymentmanager$AuditConfig[];

    /**
     * Associates a list of `members` to a `role`. `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$deploymentmanager$Binding[];

    /**
     * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly
     * suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is
     * returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will
     * be applied to the same version of the policy.
     *
     * If no `etag` is provided in the call to `setIamPolicy`, then the existing policy is overwritten blindly.
     */
    etag?: string;
    iamOwned?: boolean;

    /**
     * If more than one rule is specified, the rules are applied in the following manner: - All matching LOG rules are always applied. - If any
     * DENY/DENY_WITH_LOG rule matches, permission is denied. Logging will be applied if one or more matching rule requires logging. - Otherwise, if any
     * ALLOW/ALLOW_WITH_LOG rule matches, permission is granted. Logging will be applied if one or more matching rule requires logging. - Otherwise, if no
     * rule applies, permission is denied.
     */
    rules?: deploymentmanager$Rule[];

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface gapi$client$deploymentmanager$Resource {
    /**
     * The Access Control Policy set on this resource.
     */
    accessControl?: deploymentmanager$ResourceAccessControl;

    /**
     * Output only. The evaluated properties of the resource with references expanded. Returned as serialized YAML.
     */
    finalProperties?: string;

    /**
     * Output only. Unique identifier for the resource; defined by the server.
     */
    id?: string;

    /**
     * Output only. Timestamp when the resource was created or acquired, in RFC3339 text format .
     */
    insertTime?: string;

    /**
     * Output only. URL of the manifest representing the current configuration of this resource.
     */
    manifest?: string;

    /**
     * Output only. The name of the resource as it appears in the YAML config.
     */
    name?: string;

    /**
     * Output only. The current properties of the resource before any references have been filled in. Returned as serialized YAML.
     */
    properties?: string;

    /**
     * Output only. The type of the resource, for example compute.v1.instance, or cloudfunctions.v1beta1.function.
     */
    type?: string;

    /**
     * Output only. If Deployment Manager is currently updating or previewing an update to this resource, the updated configuration appears here.
     */
    update?: deploymentmanager$ResourceUpdate;

    /**
     * Output only. Timestamp when the resource was updated, in RFC3339 text format .
     */
    updateTime?: string;

    /**
     * Output only. The URL of the actual resource.
     */
    url?: string;

    /**
     * Output only. If warning messages are generated during processing of this resource, this field will be populated.
     */
    warnings?: Array<{
      /**
       * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
       */
      code?: string,

      /**
       * [Output Only] Metadata about this warning in key: value format. For example:
       * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
       */
      data?: Array<{
        /**
         * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
         * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
         * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
         * for IP forwarding).
         */
        key?: string,

        /**
         * [Output Only] A warning data value corresponding to the key.
         */
        value?: string
      }>,

      /**
       * [Output Only] A human-readable description of the warning code.
       */
      message?: string
    }>;
  }

  declare interface gapi$client$deploymentmanager$ResourceAccessControl {
    /**
     * The GCP IAM Policy to set on the resource.
     */
    gcpIamPolicy?: string;
  }

  declare interface gapi$client$deploymentmanager$ResourceUpdate {
    /**
     * The Access Control Policy to set on this resource after updating the resource itself.
     */
    accessControl?: gapi$client$deploymentmanager$ResourceAccessControl;

    /**
     * Output only. If errors are generated during update of the resource, this field will be populated.
     */
    error?: {
      /**
       * [Output Only] The array of errors encountered while processing this operation.
       */
      errors?: Array<{
        /**
         * [Output Only] The error type identifier for this error.
         */
        code?: string,

        /**
         * [Output Only] Indicates the field in the request that caused the error. This property is optional.
         */
        location?: string,

        /**
         * [Output Only] An optional, human-readable error message.
         */
        message?: string
      }>
    };

    /**
     * Output only. The expanded properties of the resource with reference values expanded. Returned as serialized YAML.
     */
    finalProperties?: string;

    /**
     * Output only. The intent of the resource: PREVIEW, UPDATE, or CANCEL.
     */
    intent?: string;

    /**
     * Output only. URL of the manifest representing the update configuration of this resource.
     */
    manifest?: string;

    /**
     * Output only. The set of updated properties for this resource, before references are expanded. Returned as serialized YAML.
     */
    properties?: string;

    /**
     * Output only. The state of the resource.
     */
    state?: string;

    /**
     * Output only. If warning messages are generated during processing of this resource, this field will be populated.
     */
    warnings?: Array<{
      /**
       * [Output Only] A warning code, if applicable. For example, Compute Engine returns NO_RESULTS_ON_PAGE if there are no results in the response.
       */
      code?: string,

      /**
       * [Output Only] Metadata about this warning in key: value format. For example:
       * "data": [ { "key": "scope", "value": "zones/us-east1-d" }
       */
      data?: Array<{
        /**
         * [Output Only] A key that provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for
         * a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and
         * a suggested replacement, or a warning about invalid network settings (for example, if an instance attempts to perform IP forwarding but is not enabled
         * for IP forwarding).
         */
        key?: string,

        /**
         * [Output Only] A warning data value corresponding to the key.
         */
        value?: string
      }>,

      /**
       * [Output Only] A human-readable description of the warning code.
       */
      message?: string
    }>;
  }

  declare interface gapi$client$deploymentmanager$ResourcesListResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;

    /**
     * Resources contained in this list response.
     */
    resources?: gapi$client$deploymentmanager$Resource[];
  }

  declare interface gapi$client$deploymentmanager$Rule {
    /**
     * Required
     */
    action?: string;

    /**
     * Additional restrictions that must be met. All conditions must pass for the rule to match.
     */
    conditions?: gapi$client$deploymentmanager$Condition[];

    /**
     * Human-readable description of the rule.
     */
    description?: string;

    /**
     * If one or more 'in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in at least one of these entries.
     */
    ins?: string[];

    /**
     * The config returned to callers of tech.iam.IAM.CheckPolicy for any entries that match the LOG action.
     */
    logConfigs?: gapi$client$deploymentmanager$LogConfig[];

    /**
     * If one or more 'not_in' clauses are specified, the rule matches if the PRINCIPAL/AUTHORITY_SELECTOR is in none of the entries.
     */
    notIns?: string[];

    /**
     * A permission is a string of form '..' (e.g., 'storage.buckets.list'). A value of '&#42;' matches all permissions, and a verb part of '&#42;' (e.g.,
     * 'storage.buckets.&#42;') matches all verbs.
     */
    permissions?: string[];
  }

  declare interface gapi$client$deploymentmanager$TargetConfiguration {
    /**
     * The configuration to use for this deployment.
     */
    config?: gapi$client$deploymentmanager$ConfigFile;

    /**
     * Specifies any files to import for this configuration. This can be used to import templates or other files. For example, you might import a text file in
     * order to use the file in a template.
     */
    imports?: gapi$client$deploymentmanager$ImportFile[];
  }

  declare interface gapi$client$deploymentmanager$TestPermissionsRequest {
    /**
     * The set of permissions to check for the 'resource'. Permissions with wildcards (such as '&#42;' or 'storage.&#42;') are not allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$deploymentmanager$TestPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$deploymentmanager$Type {
    /**
     * Output only. Unique identifier for the resource; defined by the server.
     */
    id?: string;

    /**
     * Output only. Timestamp when the type was created, in RFC3339 text format.
     */
    insertTime?: string;

    /**
     * Name of the type.
     */
    name?: string;

    /**
     * Output only. The Operation that most recently ran, or is currently running, on this type.
     */
    operation?: gapi$client$deploymentmanager$Operation;

    /**
     * Output only. Self link for the type.
     */
    selfLink?: string;
  }

  declare interface gapi$client$deploymentmanager$TypesListResponse {
    /**
     * A token used to continue a truncated list request.
     */
    nextPageToken?: string;

    /**
     * Output only. A list of resource types supported by Deployment Manager.
     */
    types?: gapi$client$deploymentmanager$Type[];
  }

  declare interface gapi$client$deploymentmanager$DeploymentsResource {
    /**
     * Cancels and removes the preview currently associated with the deployment.
     */
    cancelPreview(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Deletes a deployment and all of the resources in the deployment.
     */
    delete(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Sets the policy to use for deleting resources.
       */
      deletePolicy?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Gets information about a specific deployment.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Deployment>;

    /**
     * Gets the access control policy for a resource. May be empty if no such policy or resource exists.
     */
    getIamPolicy(request: {
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
       * Project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name of the resource for this request.
       */
      resource: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Policy>;

    /**
     * Creates a deployment and all of the resources described by the deployment manifest.
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
       * If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what
       * your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the update() method or you can use
       * the cancelPreview() method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must
       * separately delete this deployment if you want to remove it.
       */
      preview?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Lists all deployments for a given project.
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
       * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
       *
       * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
       * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
       * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
       * literal value must match the entire field.
       *
       * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
       *
       * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
       * on nested fields to take advantage of labels to organize and search for results based on label values.
       *
       * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
       * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
       * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
       *
       * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
       * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
       * is returned first.
       *
       * Currently, only sorting by name or creationTimestamp desc is supported.
       */
      orderBy?: string,

      /**
       * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$DeploymentsListResponse>;

    /**
     * Updates a deployment and all of the resources described by the deployment manifest. This method supports patch semantics.
     */
    patch(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Sets the policy to use for creating new resources.
       */
      createPolicy?: string,

      /**
       * Sets the policy to use for deleting resources.
       */
      deletePolicy?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This
       * allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must
       * provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request
       * with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview
       * and you must separately delete this deployment if you want to remove it.
       */
      preview?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy.
     */
    setIamPolicy(request: {
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
       * Project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name of the resource for this request.
       */
      resource: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Policy>;

    /**
     * Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.
     */
    stop(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Returns permissions that a caller has on the specified resource.
     */
    testIamPermissions(request: {
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
       * Project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name of the resource for this request.
       */
      resource: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$TestPermissionsResponse>;

    /**
     * Updates a deployment and all of the resources described by the deployment manifest.
     */
    update(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Sets the policy to use for creating new resources.
       */
      createPolicy?: string,

      /**
       * Sets the policy to use for deleting resources.
       */
      deletePolicy?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This
       * allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must
       * provide a target.config with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request
       * with the update() or you can cancelPreview() to remove the preview altogether. Note that the deployment will still exist after you cancel the preview
       * and you must separately delete this deployment if you want to remove it.
       */
      preview?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;
  }

  declare interface gapi$client$deploymentmanager$ManifestsResource {
    /**
     * Gets information about a specific manifest.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The name of the manifest for this request.
       */
      manifest: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Manifest>;

    /**
     * Lists all manifests for a given deployment.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
       *
       * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
       * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
       * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
       * literal value must match the entire field.
       *
       * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
       *
       * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
       * on nested fields to take advantage of labels to organize and search for results based on label values.
       *
       * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
       * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
       * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
       *
       * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
       * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
       * is returned first.
       *
       * Currently, only sorting by name or creationTimestamp desc is supported.
       */
      orderBy?: string,

      /**
       * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$ManifestsListResponse>;
  }

  declare interface gapi$client$deploymentmanager$OperationsResource {
    /**
     * Gets information about a specific operation.
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
       * The name of the operation for this request.
       */
      operation: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Operation>;

    /**
     * Lists all operations for a project.
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
       * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
       *
       * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
       * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
       * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
       * literal value must match the entire field.
       *
       * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
       *
       * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
       * on nested fields to take advantage of labels to organize and search for results based on label values.
       *
       * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
       * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
       * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
       *
       * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
       * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
       * is returned first.
       *
       * Currently, only sorting by name or creationTimestamp desc is supported.
       */
      orderBy?: string,

      /**
       * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$OperationsListResponse>;
  }

  declare interface gapi$client$deploymentmanager$ResourcesResource {
    /**
     * Gets information about a single resource.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

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
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The name of the resource for this request.
       */
      resource: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$Resource>;

    /**
     * Lists all resources in a given deployment.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The name of the deployment for this request.
       */
      deployment: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
       *
       * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
       * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
       * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
       * literal value must match the entire field.
       *
       * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
       *
       * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
       * on nested fields to take advantage of labels to organize and search for results based on label values.
       *
       * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
       * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
       * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
       *
       * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
       * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
       * is returned first.
       *
       * Currently, only sorting by name or creationTimestamp desc is supported.
       */
      orderBy?: string,

      /**
       * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$ResourcesListResponse>;
  }

  declare interface gapi$client$deploymentmanager$TypesResource {
    /**
     * Lists all resource types for Deployment Manager.
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
       * Sets a filter {expression} for filtering listed resources. Your {expression} must be in the format: field_name comparison_string literal_string.
       *
       * The field_name is the name of the field you want to compare. Only atomic field types are supported (string, number, boolean). The comparison_string
       * must be either eq (equals) or ne (not equals). The literal_string is the string value to filter to. The literal value must be valid for the type of
       * field you are filtering by (string, number, boolean). For string fields, the literal value is interpreted as a regular expression using RE2 syntax. The
       * literal value must match the entire field.
       *
       * For example, to filter for instances that do not have a name of example-instance, you would use name ne example-instance.
       *
       * You can filter on nested fields. For example, you could filter on instances that have set the scheduling.automaticRestart field to true. Use filtering
       * on nested fields to take advantage of labels to organize and search for results based on label values.
       *
       * To filter on multiple expressions, provide each separate expression within parentheses. For example, (scheduling.automaticRestart eq true) (zone eq
       * us-central1-f). Multiple expressions are treated as AND expressions, meaning that resources must match all expressions to pass the filters.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of results per page that should be returned. If the number of available results is larger than maxResults, Compute Engine returns a
       * nextPageToken that can be used to get the next page of results in subsequent list requests. Acceptable values are 0 to 500, inclusive. (Default: 500)
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name.
       *
       * You can also sort results in descending order based on the creation timestamp using orderBy="creationTimestamp desc". This sorts results based on the
       * creationTimestamp field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation
       * is returned first.
       *
       * Currently, only sorting by name or creationTimestamp desc is supported.
       */
      orderBy?: string,

      /**
       * Specifies a page token to use. Set pageToken to the nextPageToken returned by a previous list request to get the next page of results.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The project ID for this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$deploymentmanager$TypesListResponse>;
  }
}
