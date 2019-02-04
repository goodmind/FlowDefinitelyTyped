declare module 'gapi.client.cloudresourcemanager' {
        
      declare var npm$namespace$client: {
        load: typeof client$load,
        folders: typeof client$folders,
liens: typeof client$liens,
operations: typeof client$operations,
organizations: typeof client$organizations,
projects: typeof client$projects,
      }

/**
 * Load Google Cloud Resource Manager API v1
 */
declare function client$load(name: "cloudresourcemanager", version: "v1"): PromiseLike<void>


declare function client$load(name: "cloudresourcemanager", version: "v1", callback: () => any): void


declare var client$folders: cloudresourcemanager$cloudresourcemanager$FoldersResource;

declare var client$liens: cloudresourcemanager$cloudresourcemanager$LiensResource;

declare var client$operations: cloudresourcemanager$cloudresourcemanager$OperationsResource;

declare var client$organizations: cloudresourcemanager$cloudresourcemanager$OrganizationsResource;

declare var client$projects: cloudresourcemanager$cloudresourcemanager$ProjectsResource;

declare interface cloudresourcemanager$Ancestor {

/**
 * Resource id of the ancestor.
 */
resourceId?: cloudresourcemanager$ResourceId
} 

declare interface cloudresourcemanager$AuditConfig {

/**
 * The configuration for logging of each type of permission.
 * Next ID: 4
 */
auditLogConfigs?: cloudresourcemanager$AuditLogConfig[],

/**
 * Specifies a service that will be enabled for audit logging.
 * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
 * `allServices` is a special value that covers all services.
 */
service?: string
} 

declare interface cloudresourcemanager$AuditLogConfig {

/**
 * Specifies the identities that do not cause logging for this type of
 * permission.
 * Follows the same format of Binding.members.
 */
exemptedMembers?: string[],

/**
 * The log type that this config enables.
 */
logType?: string
} 

declare interface cloudresourcemanager$Binding {

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
members?: string[],

/**
 * Role that is assigned to `members`.
 * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
 * Required
 */
role?: string
} 

declare interface cloudresourcemanager$BooleanPolicy {

/**
 * If `true`, then the `Policy` is enforced. If `false`, then any
 * configuration is acceptable.
 * 
 * Suppose you have a `Constraint` `constraints/compute.disableSerialPortAccess`
 * with `constraint_default` set to `ALLOW`. A `Policy` for that
 * `Constraint` exhibits the following behavior:
 * - If the `Policy` at this resource has enforced set to `false`, serial
 * port connection attempts will be allowed.
 * - If the `Policy` at this resource has enforced set to `true`, serial
 * port connection attempts will be refused.
 * - If the `Policy` at this resource is `RestoreDefault`, serial port
 * connection attempts will be allowed.
 * - If no `Policy` is set at this resource or anywhere higher in the
 * resource hierarchy, serial port connection attempts will be allowed.
 * - If no `Policy` is set at this resource, but one exists higher in the
 * resource hierarchy, the behavior is as if the`Policy` were set at
 * this resource.
 * 
 * The following examples demonstrate the different possible layerings:
 * 
 * Example 1 (nearest `Constraint` wins):
 * `organizations/foo` has a `Policy` with:
 * {enforced: false}
 * `projects/bar` has no `Policy` set.
 * The constraint at `projects/bar` and `organizations/foo` will not be
 * enforced.
 * 
 * Example 2 (enforcement gets replaced):
 * `organizations/foo` has a `Policy` with:
 * {enforced: false}
 * `projects/bar` has a `Policy` with:
 * {enforced: true}
 * The constraint at `organizations/foo` is not enforced.
 * The constraint at `projects/bar` is enforced.
 * 
 * Example 3 (RestoreDefault):
 * `organizations/foo` has a `Policy` with:
 * {enforced: true}
 * `projects/bar` has a `Policy` with:
 * {RestoreDefault: {}}
 * The constraint at `organizations/foo` is enforced.
 * The constraint at `projects/bar` is not enforced, because
 * `constraint_default` for the `Constraint` is `ALLOW`.
 */
enforced?: boolean
} 

declare interface cloudresourcemanager$ClearOrgPolicyRequest {

/**
 * Name of the `Constraint` of the `Policy` to clear.
 */
constraint?: string,

/**
 * The current version, for concurrency control. Not sending an `etag`
 * will cause the `Policy` to be cleared blindly.
 */
etag?: string
} 

declare interface cloudresourcemanager$Constraint {

/**
 * Defines this constraint as being a BooleanConstraint.
 */
booleanConstraint?: any,

/**
 * The evaluation behavior of this constraint in the absense of 'Policy'.
 */
constraintDefault?: string,

/**
 * Detailed description of what this `Constraint` controls as well as how and
 * where it is enforced.
 * 
 * Mutable.
 */
description?: string,

/**
 * The human readable name.
 * 
 * Mutable.
 */
displayName?: string,

/**
 * Defines this constraint as being a ListConstraint.
 */
listConstraint?: cloudresourcemanager$ListConstraint,

/**
 * Immutable value, required to globally be unique. For example,
 * `constraints/serviceuser.services`
 */
name?: string,

/**
 * Version of the `Constraint`. Default version is 0;
 */
version?: number
} 

declare interface cloudresourcemanager$FolderOperation {

/**
 * The resource name of the folder or organization we are either creating
 * the folder under or moving the folder to.
 */
destinationParent?: string,

/**
 * The display name of the folder.
 */
displayName?: string,

/**
 * The type of this operation.
 */
operationType?: string,

/**
 * The resource name of the folder's parent.
 * Only applicable when the operation_type is MOVE.
 */
sourceParent?: string
} 

declare interface cloudresourcemanager$FolderOperationError {

/**
 * The type of operation error experienced.
 */
errorMessageId?: string
} 

declare interface cloudresourcemanager$GetAncestryResponse {

/**
 * Ancestors are ordered from bottom to top of the resource hierarchy. The
 * first ancestor is the project itself, followed by the project's parent,
 * etc.
 */
ancestor?: cloudresourcemanager$Ancestor[]
} 

declare interface cloudresourcemanager$GetEffectiveOrgPolicyRequest {

/**
 * The name of the `Constraint` to compute the effective `Policy`.
 */
constraint?: string
} 

declare interface cloudresourcemanager$GetOrgPolicyRequest {

/**
 * Name of the `Constraint` to get the `Policy`.
 */
constraint?: string
} 

declare interface cloudresourcemanager$Lien {

/**
 * The creation time of this Lien.
 */
createTime?: string,

/**
 * A system-generated unique identifier for this Lien.
 * 
 * Example: `liens/1234abcd`
 */
name?: string,

/**
 * A stable, user-visible/meaningful string identifying the origin of the
 * Lien, intended to be inspected programmatically. Maximum length of 200
 * characters.
 * 
 * Example: 'compute.googleapis.com'
 */
origin?: string,

/**
 * A reference to the resource this Lien is attached to. The server will
 * validate the parent against those for which Liens are supported.
 * 
 * Example: `projects/1234`
 */
parent?: string,

/**
 * Concise user-visible strings indicating why an action cannot be performed
 * on a resource. Maximum lenth of 200 characters.
 * 
 * Example: 'Holds production API key'
 */
reason?: string,

/**
 * The types of operations which should be blocked as a result of this Lien.
 * Each value should correspond to an IAM permission. The server will
 * validate the permissions against those for which Liens are supported.
 * 
 * An empty list is meaningless and will be rejected.
 * 
 * Example: ['resourcemanager.projects.delete']
 */
restrictions?: string[]
} 

declare interface cloudresourcemanager$ListAvailableOrgPolicyConstraintsRequest {

/**
 * Size of the pages to be returned. This is currently unsupported and will
 * be ignored. The server may at any point start using this field to limit
 * page size.
 */
pageSize?: number,

/**
 * Page token used to retrieve the next page. This is currently unsupported
 * and will be ignored. The server may at any point start using this field.
 */
pageToken?: string
} 

declare interface cloudresourcemanager$ListAvailableOrgPolicyConstraintsResponse {

/**
 * The collection of constraints that are settable on the request resource.
 */
constraints?: cloudresourcemanager$Constraint[],

/**
 * Page token used to retrieve the next page. This is currently not used.
 */
nextPageToken?: string
} 

declare interface cloudresourcemanager$ListConstraint {

/**
 * Optional. The Google Cloud Console will try to default to a configuration
 * that matches the value specified in this `Constraint`.
 */
suggestedValue?: string
} 

declare interface cloudresourcemanager$ListLiensResponse {

/**
 * A list of Liens.
 */
client$liens?: cloudresourcemanager$Lien[],

/**
 * Token to retrieve the next page of results, or empty if there are no more
 * results in the list.
 */
nextPageToken?: string
} 

declare interface cloudresourcemanager$ListOrgPoliciesRequest {

/**
 * Size of the pages to be returned. This is currently unsupported and will
 * be ignored. The server may at any point start using this field to limit
 * page size.
 */
pageSize?: number,

/**
 * Page token used to retrieve the next page. This is currently unsupported
 * and will be ignored. The server may at any point start using this field.
 */
pageToken?: string
} 

declare interface cloudresourcemanager$ListOrgPoliciesResponse {

/**
 * Page token used to retrieve the next page. This is currently not used, but
 * the server may at any point start supplying a valid token.
 */
nextPageToken?: string,

/**
 * The `Policies` that are set on the resource. It will be empty if no
 * `Policies` are set.
 */
policies?: cloudresourcemanager$OrgPolicy[]
} 

declare interface cloudresourcemanager$ListPolicy {

/**
 * The policy all_values state.
 */
allValues?: string,

/**
 * List of values allowed  at this resource. Can only be set if no values
 * are set for `denied_values` and `all_values` is set to
 * `ALL_VALUES_UNSPECIFIED`.
 */
allowedValues?: string[],

/**
 * List of values denied at this resource. Can only be set if no values are
 * set for `allowed_values` and `all_values` is set to
 * `ALL_VALUES_UNSPECIFIED`.
 */
deniedValues?: string[],

/**
 * Determines the inheritance behavior for this `Policy`.
 * 
 * By default, a `ListPolicy` set at a resource supercedes any `Policy` set
 * anywhere up the resource hierarchy. However, if `inherit_from_parent` is
 * set to `true`, then the values from the effective `Policy` of the parent
 * resource are inherited, meaning the values set in this `Policy` are
 * added to the values inherited up the hierarchy.
 * 
 * Setting `Policy` hierarchies that inherit both allowed values and denied
 * values isn't recommended in most circumstances to keep the configuration
 * simple and understandable. However, it is possible to set a `Policy` with
 * `allowed_values` set that inherits a `Policy` with `denied_values` set.
 * In this case, the values that are allowed must be in `allowed_values` and
 * not present in `denied_values`.
 * 
 * For example, suppose you have a `Constraint`
 * `constraints/serviceuser.services`, which has a `constraint_type` of
 * `list_constraint`, and with `constraint_default` set to `ALLOW`.
 * Suppose that at the Organization level, a `Policy` is applied that
 * restricts the allowed API activations to {`E1`, `E2`}. Then, if a
 * `Policy` is applied to a project below the Organization that has
 * `inherit_from_parent` set to `false` and field all_values set to DENY,
 * then an attempt to activate any API will be denied.
 * 
 * The following examples demonstrate different possible layerings:
 * 
 * Example 1 (no inherited values):
 * `organizations/foo` has a `Policy` with values:
 * {allowed_values: “E1” allowed_values:”E2”}
 * ``projects/bar`` has `inherit_from_parent` `false` and values:
 * {allowed_values: "E3" allowed_values: "E4"}
 * The accepted values at `organizations/foo` are `E1`, `E2`.
 * The accepted values at `projects/bar` are `E3`, and `E4`.
 * 
 * Example 2 (inherited values):
 * `organizations/foo` has a `Policy` with values:
 * {allowed_values: “E1” allowed_values:”E2”}
 * `projects/bar` has a `Policy` with values:
 * {value: “E3” value: ”E4” inherit_from_parent: true}
 * The accepted values at `organizations/foo` are `E1`, `E2`.
 * The accepted values at `projects/bar` are `E1`, `E2`, `E3`, and `E4`.
 * 
 * Example 3 (inheriting both allowed and denied values):
 * `organizations/foo` has a `Policy` with values:
 * {allowed_values: "E1" allowed_values: "E2"}
 * `projects/bar` has a `Policy` with:
 * {denied_values: "E1"}
 * The accepted values at `organizations/foo` are `E1`, `E2`.
 * The value accepted at `projects/bar` is `E2`.
 * 
 * Example 4 (RestoreDefault):
 * `organizations/foo` has a `Policy` with values:
 * {allowed_values: “E1” allowed_values:”E2”}
 * `projects/bar` has a `Policy` with values:
 * {RestoreDefault: {}}
 * The accepted values at `organizations/foo` are `E1`, `E2`.
 * The accepted values at `projects/bar` are either all or none depending on
 * the value of `constraint_default` (if `ALLOW`, all; if
 * `DENY`, none).
 * 
 * Example 5 (no policy inherits parent policy):
 * `organizations/foo` has no `Policy` set.
 * `projects/bar` has no `Policy` set.
 * The accepted values at both levels are either all or none depending on
 * the value of `constraint_default` (if `ALLOW`, all; if
 * `DENY`, none).
 * 
 * Example 6 (ListConstraint allowing all):
 * `organizations/foo` has a `Policy` with values:
 * {allowed_values: “E1” allowed_values: ”E2”}
 * `projects/bar` has a `Policy` with:
 * {all: ALLOW}
 * The accepted values at `organizations/foo` are `E1`, E2`.
 *              * Any value is accepted at `projects/bar`.
 *              *
 *              * Example 7 (ListConstraint allowing none):
 *              * `organizations/foo` has a `Policy` with values:
 *              * {allowed_values: “E1” allowed_values: ”E2”}
 *              * `projects/bar` has a `Policy` with:
 *              * {all: DENY}
 *              * The accepted values at `organizations/foo` are `E1`, E2`.
 * No value is accepted at `projects/bar`.
 */
inheritFromParent?: boolean,

/**
 * Optional. The Google Cloud Console will try to default to a configuration
 * that matches the value specified in this `Policy`. If `suggested_value`
 * is not set, it will inherit the value specified higher in the hierarchy,
 * unless `inherit_from_parent` is `false`.
 */
suggestedValue?: string
} 

declare interface cloudresourcemanager$ListProjectsResponse {

/**
 * Pagination token.
 * 
 * If the result set is too large to fit in a single response, this token
 * is returned. It encodes the position of the current result cursor.
 * Feeding this value into a new list request with the `page_token` parameter
 * gives the next page of the results.
 * 
 * When `next_page_token` is not filled in, there is no next page and
 * the list returned is the last page in the result set.
 * 
 * Pagination tokens have a limited lifetime.
 */
nextPageToken?: string,

/**
 * The list of Projects that matched the list filter. This list can
 * be paginated.
 */
client$projects?: cloudresourcemanager$Project[]
} 

declare interface cloudresourcemanager$Operation {

/**
 * If the value is `false`, it means the operation is still in progress.
 * If `true`, the operation is completed, and either `error` or `response` is
 * available.
 */
done?: boolean,

/**
 * The error result of the operation in case of failure or cancellation.
 */
error?: cloudresourcemanager$Status,

/**
 * Service-specific metadata associated with the operation.  It typically
 * contains progress information and common metadata such as create time.
 * Some services might not provide such metadata.  Any method that returns a
 * long-running operation should document the metadata type, if any.
 */
metadata?: Record<string, any>,

/**
 * The server-assigned name, which is only unique within the same service that
 * originally returns it. If you use the default HTTP mapping, the
 * `name` should have the format of `operations/some/unique/name`.
 */
name?: string,

/**
 * The normal response of the operation in case of success.  If the original
 * method returns no data on success, such as `Delete`, the response is
 * `google.protobuf.Empty`.  If the original method is standard
 * `Get`/`Create`/`Update`, the response should be the resource.  For other
 * methods, the response should have the type `XxxResponse`, where `Xxx`
 * is the original method name.  For example, if the original method name
 * is `TakeSnapshot()`, the inferred response type is
 * `TakeSnapshotResponse`.
 */
response?: Record<string, any>
} 

declare interface cloudresourcemanager$OrgPolicy {

/**
 * For boolean `Constraints`, whether to enforce the `Constraint` or not.
 */
booleanPolicy?: cloudresourcemanager$BooleanPolicy,

/**
 * The name of the `Constraint` the `Policy` is configuring, for example,
 * `constraints/serviceuser.services`.
 * 
 * Immutable after creation.
 */
constraint?: string,

/**
 * An opaque tag indicating the current version of the `Policy`, used for
 * concurrency control.
 * 
 * When the `Policy` is returned from either a `GetPolicy` or a
 * `ListOrgPolicy` request, this `etag` indicates the version of the current
 * `Policy` to use when executing a read-modify-write loop.
 * 
 * When the `Policy` is returned from a `GetEffectivePolicy` request, the
 * `etag` will be unset.
 * 
 * When the `Policy` is used in a `SetOrgPolicy` method, use the `etag` value
 * that was returned from a `GetOrgPolicy` request as part of a
 * read-modify-write loop for concurrency control. Not setting the `etag`in a
 * `SetOrgPolicy` request will result in an unconditional write of the
 * `Policy`.
 */
etag?: string,

/**
 * List of values either allowed or disallowed.
 */
listPolicy?: cloudresourcemanager$ListPolicy,

/**
 * Restores the default behavior of the constraint; independent of
 * `Constraint` type.
 */
restoreDefault?: any,

/**
 * The time stamp the `Policy` was previously updated. This is set by the
 * server, not specified by the caller, and represents the last time a call to
 * `SetOrgPolicy` was made for that `Policy`. Any value set by the client will
 * be ignored.
 */
updateTime?: string,

/**
 * Version of the `Policy`. Default version is 0;
 */
version?: number
} 

declare interface cloudresourcemanager$Organization {

/**
 * Timestamp when the Organization was created. Assigned by the server.
 * @OutputOnly
 */
creationTime?: string,

/**
 * A friendly string to be used to refer to the Organization in the UI.
 * Assigned by the server, set to the primary domain of the G Suite
 * customer that owns the organization.
 * @OutputOnly
 */
displayName?: string,

/**
 * The organization's current lifecycle state. Assigned by the server.
 * @OutputOnly
 */
lifecycleState?: string,

/**
 * Output Only. The resource name of the organization. This is the
 * organization's relative path in the API. Its format is
 * "organizations/[organization_id]". For example, "organizations/1234".
 */
name?: string,

/**
 * The owner of this Organization. The owner should be specified on
 * creation. Once set, it cannot be changed.
 * This field is required.
 */
owner?: cloudresourcemanager$OrganizationOwner
} 

declare interface cloudresourcemanager$OrganizationOwner {

/**
 * The Google for Work customer id used in the Directory API.
 */
directoryCustomerId?: string
} 

declare interface cloudresourcemanager$Policy {

/**
 * Specifies cloud audit logging configuration for this policy.
 */
auditConfigs?: cloudresourcemanager$AuditConfig[],

/**
 * Associates a list of `members` to a `role`.
 * `bindings` with no members will result in an error.
 */
bindings?: cloudresourcemanager$Binding[],

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
etag?: string,

/**
 * Version of the `Policy`. The default version is 0.
 */
version?: number
} 

declare interface cloudresourcemanager$Project {

/**
 * Creation time.
 * 
 * Read-only.
 */
createTime?: string,

/**
 * The labels associated with this Project.
 * 
 * Label keys must be between 1 and 63 characters long and must conform
 * to the following regular expression: \[a-z\](\[-a-z0-9\]&#42;\[a-z0-9\])?.
 * 
 * Label values must be between 0 and 63 characters long and must conform
 * to the regular expression (\[a-z\](\[-a-z0-9\]&#42;\[a-z0-9\])?)?.
 * 
 * No more than 256 labels can be associated with a given resource.
 * 
 * Clients should store labels in a representation such as JSON that does not
 * depend on specific characters being disallowed.
 * 
 * Example: <code>"environment" : "dev"</code>
 * Read-write.
 */
labels?: Record<string, string>,

/**
 * The Project lifecycle state.
 * 
 * Read-only.
 */
lifecycleState?: string,

/**
 * The user-assigned display name of the Project.
 * It must be 4 to 30 characters.
 * Allowed characters are: lowercase and uppercase letters, numbers,
 * hyphen, single-quote, double-quote, space, and exclamation point.
 * 
 * Example: <code>My Project</code>
 * Read-write.
 */
name?: string,

/**
 * An optional reference to a parent Resource.
 * 
 * The only supported parent type is "organization". Once set, the parent
 * cannot be modified. The `parent` can be set on creation or using the
 * `UpdateProject` method; the end user must have the
 * `resourcemanager.projects.create` permission on the parent.
 * 
 * Read-write.
 */
parent?: cloudresourcemanager$ResourceId,

/**
 * The unique, user-assigned ID of the Project.
 * It must be 6 to 30 lowercase letters, digits, or hyphens.
 * It must start with a letter.
 * Trailing hyphens are prohibited.
 * 
 * Example: <code>tokyo-rain-123</code>
 * Read-only after creation.
 */
projectId?: string,

/**
 * The number uniquely identifying the project.
 * 
 * Example: <code>415104041262</code>
 * Read-only.
 */
projectNumber?: string
} 

declare interface cloudresourcemanager$ProjectCreationStatus {

/**
 * Creation time of the project creation workflow.
 */
createTime?: string,

/**
 * True if the project can be retrieved using GetProject. No other operations
 * on the project are guaranteed to work until the project creation is
 * complete.
 */
gettable?: boolean,

/**
 * True if the project creation process is complete.
 */
ready?: boolean
} 

declare interface cloudresourcemanager$ResourceId {

/**
 * Required field for the type-specific id. This should correspond to the id
 * used in the type-specific API's.
 */
id?: string,

/**
 * Required field representing the resource type this id is for.
 * At present, the valid types are: "organization"
 */
type?: string
} 

declare interface cloudresourcemanager$SearchOrganizationsRequest {

/**
 * An optional query string used to filter the Organizations to return in
 * the response. Filter rules are case-insensitive.
 * 
 * 
 * Organizations may be filtered by `owner.directoryCustomerId` or by
 * `domain`, where the domain is a Google for Work domain, for example:
 * 
 * |Filter|Description|
 * |------|-----------|
 * |owner.directorycustomerid:123456789|Organizations with
 * `owner.directory_customer_id` equal to `123456789`.|
 * |domain:google.com|Organizations corresponding to the domain `google.com`.|
 * 
 * This field is optional.
 */
filter?: string,

/**
 * The maximum number of Organizations to return in the response.
 * This field is optional.
 */
pageSize?: number,

/**
 * A pagination token returned from a previous call to `SearchOrganizations`
 * that indicates from where listing should continue.
 * This field is optional.
 */
pageToken?: string
} 

declare interface cloudresourcemanager$SearchOrganizationsResponse {

/**
 * A pagination token to be used to retrieve the next page of results. If the
 * result is too large to fit within the page size specified in the request,
 * this field will be set with a token that can be used to fetch the next page
 * of results. If this field is empty, it indicates that this response
 * contains the last page of results.
 */
nextPageToken?: string,

/**
 * The list of Organizations that matched the search query, possibly
 * paginated.
 */
client$organizations?: cloudresourcemanager$Organization[]
} 

declare interface cloudresourcemanager$SetIamPolicyRequest {

/**
 * REQUIRED: The complete policy to be applied to the `resource`. The size of
 * the policy is limited to a few 10s of KB. An empty policy is a
 * valid policy but certain Cloud Platform services (such as Projects)
 * might reject them.
 */
policy?: cloudresourcemanager$Policy,

/**
 * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
 * the fields in the mask will be modified. If no mask is provided, the
 * following default mask is used:
 * paths: "bindings, etag"
 * This field is only used by Cloud IAM.
 */
updateMask?: string
} 

declare interface cloudresourcemanager$SetOrgPolicyRequest {

/**
 * `Policy` to set on the resource.
 */
policy?: cloudresourcemanager$OrgPolicy
} 

declare interface cloudresourcemanager$Status {

/**
 * The status code, which should be an enum value of google.rpc.Code.
 */
code?: number,

/**
 * A list of messages that carry the error details.  There is a common set of
 * message types for APIs to use.
 */
details?: Array<Record<string, any>>,

/**
 * A developer-facing error message, which should be in English. Any
 * user-facing error message should be localized and sent in the
 * google.rpc.Status.details field, or localized by the client.
 */
message?: string
} 

declare interface cloudresourcemanager$TestIamPermissionsRequest {

/**
 * The set of permissions to check for the `resource`. Permissions with
 * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
 * information see
 * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
 */
permissions?: string[]
} 

declare interface cloudresourcemanager$TestIamPermissionsResponse {

/**
 * A subset of `TestPermissionsRequest.permissions` that the caller is
 * allowed.
 */
permissions?: string[]
} 

declare interface cloudresourcemanager$FoldersResource {

/**
 * Clears a `Policy` from a resource.
 */
clearOrgPolicy(
request: {

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
 * Name of the resource for the `Policy` to clear.
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
}): Request<{}>,

/**
 * Gets the effective `Policy` on a resource. This is the result of merging
 * `Policies` in the resource hierarchy. The returned `Policy` will not have
 * an `etag`set because it is a computed `Policy` across multiple resources.
 */
getEffectiveOrgPolicy(
request: {

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
 * The name of the resource to start computing the effective `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Gets a `Policy` on a resource.
 * 
 * If no `Policy` is set on the resource, a `Policy` is returned with default
 * values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
 * `etag` value can be used with `SetOrgPolicy()` to create or update a
 * `Policy` during read-modify-write.
 */
getOrgPolicy(
request: {

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
 * Name of the resource the `Policy` is set on.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Lists `Constraints` that could be applied on the specified resource.
 */
listAvailableOrgPolicyConstraints(
request: {

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
 * Name of the resource to list `Constraints` for.
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
}): Request<cloudresourcemanager$ListAvailableOrgPolicyConstraintsResponse>,

/**
 * Lists all the `Policies` set for a particular resource.
 */
listOrgPolicies(
request: {

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
 * Name of the resource to list Policies for.
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
}): Request<cloudresourcemanager$ListOrgPoliciesResponse>,

/**
 * Updates the specified `Policy` on the resource. Creates a new `Policy` for
 * that `Constraint` on the resource if one does not exist.
 * 
 * Not supplying an `etag` on the request `Policy` results in an unconditional
 * write of the `Policy`.
 */
setOrgPolicy(
request: {

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
 * Resource name of the resource to attach the `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>
} 

declare interface cloudresourcemanager$LiensResource {

/**
 * Create a Lien which applies to the resource denoted by the `parent` field.
 * 
 * Callers of this method will require permission on the `parent` resource.
 * For example, applying to `projects/1234` requires permission
 * `resourcemanager.projects.updateLiens`.
 * 
 * NOTE: Some resources may limit the number of Liens which may be applied.
 */
create(
request: {

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
}): Request<cloudresourcemanager$Lien>,

/**
 * Delete a Lien by `name`.
 * 
 * Callers of this method will require permission on the `parent` resource.
 * For example, a Lien with a `parent` of `projects/1234` requires permission
 * `resourcemanager.projects.updateLiens`.
 */
delete(
request: {

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
 * The name/identifier of the Lien to delete.
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
}): Request<{}>,

/**
 * List all Liens applied to the `parent` resource.
 * 
 * Callers of this method will require permission on the `parent` resource.
 * For example, a Lien with a `parent` of `projects/1234` requires permission
 * `resourcemanager.projects.get`.
 */
list(
request: {

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
 * The maximum number of items to return. This is a suggestion for the server.
 */
pageSize?: number,

/**
 * The `next_page_token` value returned from a previous List request, if any.
 */
pageToken?: string,

/**
 * The name of the resource to list all attached Liens.
 * For example, `projects/1234`.
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
 * Legacy upload protocol for media (e.g. "media", "multipart").
 */
uploadType?: string,

/**
 * Upload protocol for media (e.g. "raw", "multipart").
 */
upload_protocol?: string
}): Request<cloudresourcemanager$ListLiensResponse>
} 

declare interface cloudresourcemanager$OperationsResource {

/**
 * Gets the latest state of a long-running operation.  Clients can use this
 * method to poll the operation result at intervals as recommended by the API
 * service.
 */
get(
request: {

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
 * The name of the operation resource.
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
}): Request<cloudresourcemanager$Operation>
} 

declare interface cloudresourcemanager$OrganizationsResource {

/**
 * Clears a `Policy` from a resource.
 */
clearOrgPolicy(
request: {

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
 * Name of the resource for the `Policy` to clear.
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
}): Request<{}>,

/**
 * Fetches an Organization resource identified by the specified resource name.
 */
get(
request: {

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
 * The resource name of the Organization to fetch, e.g. "organizations/1234".
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
}): Request<cloudresourcemanager$Organization>,

/**
 * Gets the effective `Policy` on a resource. This is the result of merging
 * `Policies` in the resource hierarchy. The returned `Policy` will not have
 * an `etag`set because it is a computed `Policy` across multiple resources.
 */
getEffectiveOrgPolicy(
request: {

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
 * The name of the resource to start computing the effective `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Gets the access control policy for an Organization resource. May be empty
 * if no such policy or resource exists. The `resource` field should be the
 * organization's resource name, e.g. "organizations/123".
 * 
 * Authorization requires the Google IAM permission
 * `resourcemanager.organizations.getIamPolicy` on the specified organization
 */
getIamPolicy(
request: {

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
}): Request<cloudresourcemanager$Policy>,

/**
 * Gets a `Policy` on a resource.
 * 
 * If no `Policy` is set on the resource, a `Policy` is returned with default
 * values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
 * `etag` value can be used with `SetOrgPolicy()` to create or update a
 * `Policy` during read-modify-write.
 */
getOrgPolicy(
request: {

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
 * Name of the resource the `Policy` is set on.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Lists `Constraints` that could be applied on the specified resource.
 */
listAvailableOrgPolicyConstraints(
request: {

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
 * Name of the resource to list `Constraints` for.
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
}): Request<cloudresourcemanager$ListAvailableOrgPolicyConstraintsResponse>,

/**
 * Lists all the `Policies` set for a particular resource.
 */
listOrgPolicies(
request: {

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
 * Name of the resource to list Policies for.
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
}): Request<cloudresourcemanager$ListOrgPoliciesResponse>,

/**
 * Searches Organization resources that are visible to the user and satisfy
 * the specified filter. This method returns Organizations in an unspecified
 * order. New Organizations do not necessarily appear at the end of the
 * results.
 * 
 * Search will only return organizations on which the user has the permission
 * `resourcemanager.organizations.get`
 */
search(
request: {

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
}): Request<cloudresourcemanager$SearchOrganizationsResponse>,

/**
 * Sets the access control policy on an Organization resource. Replaces any
 * existing policy. The `resource` field should be the organization's resource
 * name, e.g. "organizations/123".
 * 
 * Authorization requires the Google IAM permission
 * `resourcemanager.organizations.setIamPolicy` on the specified organization
 */
setIamPolicy(
request: {

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
}): Request<cloudresourcemanager$Policy>,

/**
 * Updates the specified `Policy` on the resource. Creates a new `Policy` for
 * that `Constraint` on the resource if one does not exist.
 * 
 * Not supplying an `etag` on the request `Policy` results in an unconditional
 * write of the `Policy`.
 */
setOrgPolicy(
request: {

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
 * Resource name of the resource to attach the `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Returns permissions that a caller has on the specified Organization.
 * The `resource` field should be the organization's resource name,
 * e.g. "organizations/123".
 * 
 * There are no permissions required for making this API call.
 */
testIamPermissions(
request: {

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
}): Request<cloudresourcemanager$TestIamPermissionsResponse>
} 

declare interface cloudresourcemanager$ProjectsResource {

/**
 * Clears a `Policy` from a resource.
 */
clearOrgPolicy(
request: {

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
 * Name of the resource for the `Policy` to clear.
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
}): Request<{}>,

/**
 * Request that a new Project be created. The result is an Operation which
 * can be used to track the creation process. It is automatically deleted
 * after a few hours, so there is no need to call DeleteOperation.
 * 
 * Our SLO permits Project creation to take up to 30 seconds at the 90th
 * percentile. As of 2016-08-29, we are observing 6 seconds 50th percentile
 * latency. 95th percentile latency is around 11 seconds. We recommend
 * polling at the 5th second with an exponential backoff.
 * 
 * Authorization requires the Google IAM permission
 * `resourcemanager.projects.create` on the specified parent for the new
 * project.
 */
create(
request: {

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
}): Request<cloudresourcemanager$Operation>,

/**
 * Marks the Project identified by the specified
 * `project_id` (for example, `my-project-123`) for deletion.
 * This method will only affect the Project if the following criteria are met:
 * 
 * + The Project does not have a billing account associated with it.
 * + The Project has a lifecycle state of
 * ACTIVE.
 * 
 * This method changes the Project's lifecycle state from
 * ACTIVE
 * to DELETE_REQUESTED.
 * The deletion starts at an unspecified time,
 * at which point the Project is no longer accessible.
 * 
 * Until the deletion completes, you can check the lifecycle state
 * checked by retrieving the Project with GetProject,
 * and the Project remains visible to ListProjects.
 * However, you cannot update the project.
 * 
 * After the deletion completes, the Project is not retrievable by
 * the  GetProject and
 * ListProjects methods.
 * 
 * The caller must have modify permissions for this Project.
 */
delete(
request: {

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
 * The Project ID (for example, `foo-bar-123`).
 * 
 * Required.
 */
projectId: string,

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
}): Request<{}>,

/**
 * Retrieves the Project identified by the specified
 * `project_id` (for example, `my-project-123`).
 * 
 * The caller must have read permissions for this Project.
 */
get(
request: {

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
 * The Project ID (for example, `my-project-123`).
 * 
 * Required.
 */
projectId: string,

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
}): Request<cloudresourcemanager$Project>,

/**
 * Gets a list of ancestors in the resource hierarchy for the Project
 * identified by the specified `project_id` (for example, `my-project-123`).
 * 
 * The caller must have read permissions for this Project.
 */
getAncestry(
request: {

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
 * The Project ID (for example, `my-project-123`).
 * 
 * Required.
 */
projectId: string,

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
}): Request<cloudresourcemanager$GetAncestryResponse>,

/**
 * Gets the effective `Policy` on a resource. This is the result of merging
 * `Policies` in the resource hierarchy. The returned `Policy` will not have
 * an `etag`set because it is a computed `Policy` across multiple resources.
 */
getEffectiveOrgPolicy(
request: {

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
 * The name of the resource to start computing the effective `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Returns the IAM access control policy for the specified Project.
 * Permission is denied if the policy or the resource does not exist.
 * 
 * Authorization requires the Google IAM permission
 * `resourcemanager.projects.getIamPolicy` on the project
 */
getIamPolicy(
request: {

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
}): Request<cloudresourcemanager$Policy>,

/**
 * Gets a `Policy` on a resource.
 * 
 * If no `Policy` is set on the resource, a `Policy` is returned with default
 * values including `POLICY_TYPE_NOT_SET` for the `policy_type oneof`. The
 * `etag` value can be used with `SetOrgPolicy()` to create or update a
 * `Policy` during read-modify-write.
 */
getOrgPolicy(
request: {

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
 * Name of the resource the `Policy` is set on.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Lists Projects that are visible to the user and satisfy the
 * specified filter. This method returns Projects in an unspecified order.
 * New Projects do not necessarily appear at the end of the list.
 */
list(
request: {

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
 * An expression for filtering the results of the request.  Filter rules are
 * case insensitive. The fields eligible for filtering are:
 * 
 * + `name`
 * + `id`
 * + <code>labels.<em>key</em></code> where &#42;key&#42; is the name of a label
 * 
 * Some examples of using labels as filters:
 * 
 * |Filter|Description|
 * |------|-----------|
 * |name:how&#42;|The project's name starts with "how".|
 * |name:Howl|The project's name is `Howl` or `howl`.|
 * |name:HOWL|Equivalent to above.|
 * |NAME:howl|Equivalent to above.|
 * |labels.color:&#42;|The project has the label `color`.|
 * |labels.color:red|The project's label `color` has the value `red`.|
 * |labels.color:red&nbsp;labels.size:big|The project's label `color` has the value `red` and its label `size` has the value `big`.
 * 
 * If you specify a filter that has both `parent.type` and `parent.id`, then
 * the `resourcemanager.projects.list` permission is checked on the parent.
 * If the user has this permission, all projects under the parent will be
 * returned after remaining filters have been applied. If the user lacks this
 * permission, then all projects for which the user has the
 * `resourcemanager.projects.get` permission will be returned after remaining
 * filters have been applied. If no filter is specified, the call will return
 * projects for which the user has `resourcemanager.projects.get` permissions.
 * 
 * Optional.
 */
filter?: string,

/**
 * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
 */
key?: string,

/**
 * OAuth 2.0 token for the current user.
 */
oauth_token?: string,

/**
 * The maximum number of Projects to return in the response.
 * The server can return fewer Projects than requested.
 * If unspecified, server picks an appropriate default.
 * 
 * Optional.
 */
pageSize?: number,

/**
 * A pagination token returned from a previous call to ListProjects
 * that indicates from where listing should continue.
 * 
 * Optional.
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
}): Request<cloudresourcemanager$ListProjectsResponse>,

/**
 * Lists `Constraints` that could be applied on the specified resource.
 */
listAvailableOrgPolicyConstraints(
request: {

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
 * Name of the resource to list `Constraints` for.
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
}): Request<cloudresourcemanager$ListAvailableOrgPolicyConstraintsResponse>,

/**
 * Lists all the `Policies` set for a particular resource.
 */
listOrgPolicies(
request: {

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
 * Name of the resource to list Policies for.
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
}): Request<cloudresourcemanager$ListOrgPoliciesResponse>,

/**
 * Sets the IAM access control policy for the specified Project. Replaces
 * any existing policy.
 * 
 * The following constraints apply when using `setIamPolicy()`:
 * 
 * + Project does not support `allUsers` and `allAuthenticatedUsers` as
 * `members` in a `Binding` of a `Policy`.
 * 
 * + The owner role can be granted only to `user` and `serviceAccount`.
 * 
 * + Service accounts can be made owners of a project directly
 * without any restrictions. However, to be added as an owner, a user must be
 * invited via Cloud Platform console and must accept the invitation.
 * 
 * + A user cannot be granted the owner role using `setIamPolicy()`. The user
 * must be granted the owner role using the Cloud Platform Console and must
 * explicitly accept the invitation.
 * 
 * + Invitations to grant the owner role cannot be sent using
 * `setIamPolicy()`;
 * they must be sent only using the Cloud Platform Console.
 * 
 * + Membership changes that leave the project without any owners that have
 * accepted the Terms of Service (ToS) will be rejected.
 * 
 * + If the project is not part of an organization, there must be at least
 * one owner who has accepted the Terms of Service (ToS) agreement in the
 * policy. Calling `setIamPolicy()` to remove the last ToS-accepted owner
 * from the policy will fail. This restriction also applies to legacy
 * projects that no longer have owners who have accepted the ToS. Edits to
 * IAM policies will be rejected until the lack of a ToS-accepting owner is
 * rectified.
 * 
 * + Calling this method requires enabling the App Engine Admin API.
 * 
 * Note: Removing service accounts from policies or changing their roles
 * can render services completely inoperable. It is important to understand
 * how the service account is being used before removing or updating its
 * roles.
 * 
 * Authorization requires the Google IAM permission
 * `resourcemanager.projects.setIamPolicy` on the project
 */
setIamPolicy(
request: {

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
}): Request<cloudresourcemanager$Policy>,

/**
 * Updates the specified `Policy` on the resource. Creates a new `Policy` for
 * that `Constraint` on the resource if one does not exist.
 * 
 * Not supplying an `etag` on the request `Policy` results in an unconditional
 * write of the `Policy`.
 */
setOrgPolicy(
request: {

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
 * Resource name of the resource to attach the `Policy`.
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
}): Request<cloudresourcemanager$OrgPolicy>,

/**
 * Returns permissions that a caller has on the specified Project.
 * 
 * There are no permissions required for making this API call.
 */
testIamPermissions(
request: {

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
}): Request<cloudresourcemanager$TestIamPermissionsResponse>,

/**
 * Restores the Project identified by the specified
 * `project_id` (for example, `my-project-123`).
 * You can only use this method for a Project that has a lifecycle state of
 * DELETE_REQUESTED.
 * After deletion starts, the Project cannot be restored.
 * 
 * The caller must have modify permissions for this Project.
 */
undelete(
request: {

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
 * The project ID (for example, `foo-bar-123`).
 * 
 * Required.
 */
projectId: string,

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
}): Request<{}>,

/**
 * Updates the attributes of the Project identified by the specified
 * `project_id` (for example, `my-project-123`).
 * 
 * The caller must have modify permissions for this Project.
 */
update(
request: {

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
 * The project ID (for example, `my-project-123`).
 * 
 * Required.
 */
projectId: string,

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
}): Request<cloudresourcemanager$Project>
} 
    }
