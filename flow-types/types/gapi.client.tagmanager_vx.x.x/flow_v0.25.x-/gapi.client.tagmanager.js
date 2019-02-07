declare module "gapi.client.tagmanager" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    accounts: typeof client$accounts
  };

  /**
   * Load Tag Manager API v2
   */
  declare function client$load(
    name: "tagmanager",
    version: "v2"
  ): PromiseLike<void>;

  declare function client$load(
    name: "tagmanager",
    version: "v2",
    callback: () => any
  ): void;

  declare var client$accounts: tagmanager$tagmanager$AccountsResource;

  declare interface tagmanager$Account {
    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string;

    /**
     * The fingerprint of the GTM Account as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;

    /**
     * Account display name.
     */
    name?: string;

    /**
     * GTM Account's API relative path.
     */
    path?: string;

    /**
     * Whether the account shares data anonymously with Google and others. This flag enables benchmarking by sharing your data in an anonymous form. Google
     * will remove all identifiable information about your website, combine the data with hundreds of other anonymous sites and report aggregate trends in the
     * benchmarking service.
     */
    shareData?: boolean;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;
  }

  declare interface tagmanager$AccountAccess {
    /**
     * Whether the user has no access, user access, or admin access to an account.
     */
    permission?: string;
  }

  declare interface tagmanager$BuiltInVariable {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * Name of the built-in variable to be used to refer to the built-in variable.
     */
    name?: string;

    /**
     * GTM BuiltInVariable's API relative path.
     */
    path?: string;

    /**
     * Type of built-in variable.
     */
    type?: string;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$Condition {
    /**
     * A list of named parameters (key/value), depending on the condition's type. Notes:
     * - For binary operators, include parameters named arg0 and arg1 for specifying the left and right operands, respectively.
     * - At this time, the left operand (arg0) must be a reference to a variable.
     * - For case-insensitive Regex matching, include a boolean parameter named ignore_case that is set to true. If not specified or set to any other value,
     * the matching will be case sensitive.
     * - To negate an operator, include a boolean parameter named negate boolean parameter that is set to true.
     */
    parameter?: tagmanager$Parameter[];

    /**
     * The type of operator for this condition.
     */
    type?: string;
  }

  declare interface tagmanager$Container {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * The Container ID uniquely identifies the GTM Container.
     */
    containerId?: string;

    /**
     * List of domain names associated with the Container.
     */
    domainName?: string[];

    /**
     * The fingerprint of the GTM Container as computed at storage time. This value is recomputed whenever the account is modified.
     */
    fingerprint?: string;

    /**
     * Container display name.
     */
    name?: string;

    /**
     * Container Notes.
     */
    notes?: string;

    /**
     * GTM Container's API relative path.
     */
    path?: string;

    /**
     * Container Public ID.
     */
    publicId?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * List of Usage Contexts for the Container. Valid values include: web, android, or ios.
     */
    usageContext?: string[];
  }

  declare interface tagmanager$ContainerAccess {
    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * List of Container permissions.
     */
    permission?: string;
  }

  declare interface tagmanager$ContainerVersion {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * The built-in variables in the container that this version was taken from.
     */
    builtInVariable?: tagmanager$BuiltInVariable[];

    /**
     * The container that this version was taken from.
     */
    container?: tagmanager$Container;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string;

    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean;

    /**
     * Container version description.
     */
    description?: string;

    /**
     * The fingerprint of the GTM Container Version as computed at storage time. This value is recomputed whenever the container version is modified.
     */
    fingerprint?: string;

    /**
     * The folders in the container that this version was taken from.
     */
    folder?: tagmanager$Folder[];

    /**
     * Container version display name.
     */
    name?: string;

    /**
     * GTM ContainerVersions's API relative path.
     */
    path?: string;

    /**
     * The tags in the container that this version was taken from.
     */
    tag?: tagmanager$Tag[];

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * The triggers in the container that this version was taken from.
     */
    trigger?: tagmanager$Trigger[];

    /**
     * The variables in the container that this version was taken from.
     */
    variable?: tagmanager$Variable[];

    /**
     * The zones in the container that this version was taken from.
     */
    zone?: tagmanager$Zone[];
  }

  declare interface tagmanager$ContainerVersionHeader {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * The Container Version ID uniquely identifies the GTM Container Version.
     */
    containerVersionId?: string;

    /**
     * A value of true indicates this container version has been deleted.
     */
    deleted?: boolean;

    /**
     * Container version display name.
     */
    name?: string;

    /**
     * Number of macros in the container version.
     */
    numMacros?: string;

    /**
     * Number of rules in the container version.
     */
    numRules?: string;

    /**
     * Number of tags in the container version.
     */
    numTags?: string;

    /**
     * Number of triggers in the container version.
     */
    numTriggers?: string;

    /**
     * Number of variables in the container version.
     */
    numVariables?: string;

    /**
     * Number of zones in the container version.
     */
    numZones?: string;

    /**
     * GTM Container Versions's API relative path.
     */
    path?: string;
  }

  declare interface tagmanager$CreateBuiltInVariableResponse {
    /**
     * List of created built-in variables.
     */
    builtInVariable?: tagmanager$BuiltInVariable[];
  }

  declare interface tagmanager$CreateContainerVersionRequestVersionOptions {
    /**
     * The name of the container version to be created.
     */
    name?: string;

    /**
     * The notes of the container version to be created.
     */
    notes?: string;
  }

  declare interface tagmanager$CreateContainerVersionResponse {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean;

    /**
     * The container version created.
     */
    containerVersion?: tagmanager$ContainerVersion;

    /**
     * Auto generated workspace path created as a result of version creation. This field should only be populated if the created version was not a quick
     * preview.
     */
    newWorkspacePath?: string;

    /**
     * Whether version creation failed when syncing the workspace to the latest container version.
     */
    syncStatus?: tagmanager$SyncStatus;
  }

  declare interface tagmanager$CreateWorkspaceProposalRequest {
    /**
     * If present, an initial comment to associate with the workspace proposal.
     */
    initialComment?: tagmanager$WorkspaceProposalHistoryComment;

    /**
     * List of users to review the workspace proposal.
     */
    reviewers?: tagmanager$WorkspaceProposalUser[];
  }

  declare interface tagmanager$Entity {
    /**
     * Represents how the entity has been changed in the workspace.
     */
    changeStatus?: string;

    /**
     * The Folder being represented by the entity.
     */
    folder?: tagmanager$Folder;

    /**
     * The tag being represented by the entity.
     */
    tag?: tagmanager$Tag;

    /**
     * The trigger being represented by the entity.
     */
    trigger?: tagmanager$Trigger;

    /**
     * The variable being represented by the entity.
     */
    variable?: tagmanager$Variable;
  }

  declare interface tagmanager$Environment {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * The environment authorization code.
     */
    authorizationCode?: string;

    /**
     * The last update time-stamp for the authorization code.
     */
    authorizationTimestamp?: tagmanager$Timestamp;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * Represents a link to a container version.
     */
    containerVersionId?: string;

    /**
     * The environment description. Can be set or changed only on USER type environments.
     */
    description?: string;

    /**
     * Whether or not to enable debug by default for the environment.
     */
    enableDebug?: boolean;

    /**
     * GTM Environment ID uniquely identifies the GTM Environment.
     */
    environmentId?: string;

    /**
     * The fingerprint of the GTM environment as computed at storage time. This value is recomputed whenever the environment is modified.
     */
    fingerprint?: string;

    /**
     * The environment display name. Can be set or changed only on USER type environments.
     */
    name?: string;

    /**
     * GTM Environment's API relative path.
     */
    path?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * The type of this environment.
     */
    type?: string;

    /**
     * Default preview page url for the environment.
     */
    url?: string;

    /**
     * Represents a link to a quick preview of a workspace.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$Folder {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * The fingerprint of the GTM Folder as computed at storage time. This value is recomputed whenever the folder is modified.
     */
    fingerprint?: string;

    /**
     * The Folder ID uniquely identifies the GTM Folder.
     */
    folderId?: string;

    /**
     * Folder display name.
     */
    name?: string;

    /**
     * User notes on how to apply this folder in the container.
     */
    notes?: string;

    /**
     * GTM Folder's API relative path.
     */
    path?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$FolderEntities {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * The list of tags inside the folder.
     */
    tag?: tagmanager$Tag[];

    /**
     * The list of triggers inside the folder.
     */
    trigger?: tagmanager$Trigger[];

    /**
     * The list of variables inside the folder.
     */
    variable?: tagmanager$Variable[];
  }

  declare interface tagmanager$GetWorkspaceStatusResponse {
    /**
     * The merge conflict after sync.
     */
    mergeConflict?: tagmanager$MergeConflict[];

    /**
     * Entities that have been changed in the workspace.
     */
    workspaceChange?: tagmanager$Entity[];
  }

  declare interface tagmanager$ListAccountsResponse {
    /**
     * List of GTM Accounts that a user has access to.
     */
    account?: tagmanager$Account[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListContainerVersionsResponse {
    /**
     * All container version headers of a GTM Container.
     */
    containerVersionHeader?: tagmanager$ContainerVersionHeader[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListContainersResponse {
    /**
     * All Containers of a GTM Account.
     */
    container?: tagmanager$Container[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListEnabledBuiltInVariablesResponse {
    /**
     * All GTM BuiltInVariables of a GTM container.
     */
    builtInVariable?: tagmanager$BuiltInVariable[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListEnvironmentsResponse {
    /**
     * All Environments of a GTM Container.
     */
    environment?: tagmanager$Environment[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListFoldersResponse {
    /**
     * All GTM Folders of a GTM Container.
     */
    folder?: tagmanager$Folder[];

    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface tagmanager$ListTagsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * All GTM Tags of a GTM Container.
     */
    tag?: tagmanager$Tag[];
  }

  declare interface tagmanager$ListTriggersResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * All GTM Triggers of a GTM Container.
     */
    trigger?: tagmanager$Trigger[];
  }

  declare interface tagmanager$ListUserPermissionsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * All GTM UserPermissions of a GTM Account.
     */
    userPermission?: tagmanager$UserPermission[];
  }

  declare interface tagmanager$ListVariablesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * All GTM Variables of a GTM Container.
     */
    variable?: tagmanager$Variable[];
  }

  declare interface tagmanager$ListWorkspacesResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;

    /**
     * All Workspaces of a GTM Container.
     */
    workspace?: tagmanager$Workspace[];
  }

  declare interface tagmanager$MergeConflict {
    /**
     * The base version entity (since the latest sync operation) that has conflicting changes compared to the workspace. If this field is missing, it means
     * the workspace entity is deleted from the base version.
     */
    entityInBaseVersion?: tagmanager$Entity;

    /**
     * The workspace entity that has conflicting changes compared to the base version. If an entity is deleted in a workspace, it will still appear with a
     * deleted change status.
     */
    entityInWorkspace?: tagmanager$Entity;
  }

  declare interface tagmanager$Parameter {
    /**
     * The named key that uniquely identifies a parameter. Required for top-level parameters, as well as map values. Ignored for list values.
     */
    key?: string;

    /**
     * This list parameter's parameters (keys will be ignored).
     */
    list?: tagmanager$Parameter[];

    /**
     * This map parameter's parameters (must have keys; keys must be unique).
     */
    map?: tagmanager$Parameter[];

    /**
     * The parameter type. Valid values are:
     * - boolean: The value represents a boolean, represented as 'true' or 'false'
     * - integer: The value represents a 64-bit signed integer value, in base 10
     * - list: A list of parameters should be specified
     * - map: A map of parameters should be specified
     * - template: The value represents any text; this can include variable references (even variable references that might return non-string types)
     */
    type?: string;

    /**
     * A parameter's value (may contain variable references such as "{{myVariable}}") as appropriate to the specified type.
     */
    value?: string;
  }

  declare interface tagmanager$PublishContainerVersionResponse {
    /**
     * Compiler errors or not.
     */
    compilerError?: boolean;

    /**
     * The container version created.
     */
    containerVersion?: tagmanager$ContainerVersion;
  }

  declare interface tagmanager$QuickPreviewResponse {
    /**
     * Were there compiler errors or not.
     */
    compilerError?: boolean;

    /**
     * The quick previewed container version.
     */
    containerVersion?: tagmanager$ContainerVersion;

    /**
     * Whether quick previewing failed when syncing the workspace to the latest container version.
     */
    syncStatus?: tagmanager$SyncStatus;
  }

  declare interface tagmanager$RevertBuiltInVariableResponse {
    /**
     * Whether the built-in variable is enabled after reversion.
     */
    enabled?: boolean;
  }

  declare interface tagmanager$RevertFolderResponse {
    /**
     * Folder as it appears in the latest container version since the last workspace synchronization operation. If no folder is present, that means the folder
     * was deleted in the latest container version.
     */
    folder?: tagmanager$Folder;
  }

  declare interface tagmanager$RevertTagResponse {
    /**
     * Tag as it appears in the latest container version since the last workspace synchronization operation. If no tag is present, that means the tag was
     * deleted in the latest container version.
     */
    tag?: tagmanager$Tag;
  }

  declare interface tagmanager$RevertTriggerResponse {
    /**
     * Trigger as it appears in the latest container version since the last workspace synchronization operation. If no trigger is present, that means the
     * trigger was deleted in the latest container version.
     */
    trigger?: tagmanager$Trigger;
  }

  declare interface tagmanager$RevertVariableResponse {
    /**
     * Variable as it appears in the latest container version since the last workspace synchronization operation. If no variable is present, that means the
     * variable was deleted in the latest container version.
     */
    variable?: tagmanager$Variable;
  }

  declare interface tagmanager$SetupTag {
    /**
     * If true, fire the main tag if and only if the setup tag fires successfully. If false, fire the main tag regardless of setup tag firing status.
     */
    stopOnSetupFailure?: boolean;

    /**
     * The name of the setup tag.
     */
    tagName?: string;
  }

  declare interface tagmanager$SyncStatus {
    /**
     * Synchornization operation detected a merge conflict.
     */
    mergeConflict?: boolean;

    /**
     * An error occurred during the synchronization operation.
     */
    syncError?: boolean;
  }

  declare interface tagmanager$SyncWorkspaceResponse {
    /**
     * The merge conflict after sync. If this field is not empty, the sync is still treated as successful. But a version cannot be created until all conflicts
     * are resolved.
     */
    mergeConflict?: tagmanager$MergeConflict[];

    /**
     * Indicates whether synchronization caused a merge conflict or sync error.
     */
    syncStatus?: tagmanager$SyncStatus;
  }

  declare interface tagmanager$Tag {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * Blocking rule IDs. If any of the listed rules evaluate to true, the tag will not fire.
     */
    blockingRuleId?: string[];

    /**
     * Blocking trigger IDs. If any of the listed triggers evaluate to true, the tag will not fire.
     */
    blockingTriggerId?: string[];

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * The fingerprint of the GTM Tag as computed at storage time. This value is recomputed whenever the tag is modified.
     */
    fingerprint?: string;

    /**
     * Firing rule IDs. A tag will fire when any of the listed rules are true and all of its blockingRuleIds (if any specified) are false.
     */
    firingRuleId?: string[];

    /**
     * Firing trigger IDs. A tag will fire when any of the listed triggers are true and all of its blockingTriggerIds (if any specified) are false.
     */
    firingTriggerId?: string[];

    /**
     * If set to true, this tag will only fire in the live environment (e.g. not in preview or debug mode).
     */
    liveOnly?: boolean;

    /**
     * Tag display name.
     */
    name?: string;

    /**
     * User notes on how to apply this tag in the container.
     */
    notes?: string;

    /**
     * The tag's parameters.
     */
    parameter?: tagmanager$Parameter[];

    /**
     * Parent folder id.
     */
    parentFolderId?: string;

    /**
     * GTM Tag's API relative path.
     */
    path?: string;

    /**
     * User defined numeric priority of the tag. Tags are fired asynchronously in order of priority. Tags with higher numeric value fire first. A tag's
     * priority can be a positive or negative value. The default value is 0.
     */
    priority?: tagmanager$Parameter;

    /**
     * The end timestamp in milliseconds to schedule a tag.
     */
    scheduleEndMs?: string;

    /**
     * The start timestamp in milliseconds to schedule a tag.
     */
    scheduleStartMs?: string;

    /**
     * The list of setup tags. Currently we only allow one.
     */
    setupTag?: tagmanager$SetupTag[];

    /**
     * Option to fire this tag.
     */
    tagFiringOption?: string;

    /**
     * The Tag ID uniquely identifies the GTM Tag.
     */
    tagId?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * The list of teardown tags. Currently we only allow one.
     */
    teardownTag?: tagmanager$TeardownTag[];

    /**
     * GTM Tag Type.
     */
    type?: string;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$TeardownTag {
    /**
     * If true, fire the teardown tag if and only if the main tag fires successfully. If false, fire the teardown tag regardless of main tag firing status.
     */
    stopTeardownOnFailure?: boolean;

    /**
     * The name of the teardown tag.
     */
    tagName?: string;
  }

  declare interface tagmanager$Timestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count
     * forward in time. Must be from 0 to 999,999,999 inclusive.
     */
    nanos?: number;

    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     */
    seconds?: string;
  }

  declare interface tagmanager$Trigger {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * Used in the case of auto event tracking.
     */
    autoEventFilter?: tagmanager$Condition[];

    /**
     * Whether or not we should only fire tags if the form submit or link click event is not cancelled by some other event handler (e.g. because of
     * validation). Only valid for Form Submission and Link Click triggers.
     */
    checkValidation?: tagmanager$Parameter;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * A visibility trigger minimum continuous visible time (in milliseconds). Only valid for AMP Visibility trigger.
     */
    continuousTimeMinMilliseconds?: tagmanager$Parameter;

    /**
     * Used in the case of custom event, which is fired iff all Conditions are true.
     */
    customEventFilter?: tagmanager$Condition[];

    /**
     * Name of the GTM event that is fired. Only valid for Timer triggers.
     */
    eventName?: tagmanager$Parameter;

    /**
     * The trigger will only fire iff all Conditions are true.
     */
    filter?: tagmanager$Condition[];

    /**
     * The fingerprint of the GTM Trigger as computed at storage time. This value is recomputed whenever the trigger is modified.
     */
    fingerprint?: string;

    /**
     * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled horizontally.
     * Only valid for AMP scroll triggers.
     */
    horizontalScrollPercentageList?: tagmanager$Parameter;

    /**
     * Time between triggering recurring Timer Events (in milliseconds). Only valid for Timer triggers.
     */
    interval?: tagmanager$Parameter;

    /**
     * Time between Timer Events to fire (in seconds). Only valid for AMP Timer trigger.
     */
    intervalSeconds?: tagmanager$Parameter;

    /**
     * Limit of the number of GTM events this Timer Trigger will fire. If no limit is set, we will continue to fire GTM events until the user leaves the page.
     * Only valid for Timer triggers.
     */
    limit?: tagmanager$Parameter;

    /**
     * Max time to fire Timer Events (in seconds). Only valid for AMP Timer trigger.
     */
    maxTimerLengthSeconds?: tagmanager$Parameter;

    /**
     * Trigger display name.
     */
    name?: string;

    /**
     * User notes on how to apply this trigger in the container.
     */
    notes?: string;

    /**
     * Additional parameters.
     */
    parameter?: tagmanager$Parameter[];

    /**
     * Parent folder id.
     */
    parentFolderId?: string;

    /**
     * GTM Trigger's API relative path.
     */
    path?: string;

    /**
     * A click trigger CSS selector (i.e. "a", "button" etc.). Only valid for AMP Click trigger.
     */
    selector?: tagmanager$Parameter;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * A visibility trigger minimum total visible time (in milliseconds). Only valid for AMP Visibility trigger.
     */
    totalTimeMinMilliseconds?: tagmanager$Parameter;

    /**
     * The Trigger ID uniquely identifies the GTM Trigger.
     */
    triggerId?: string;

    /**
     * Defines the data layer event that causes this trigger.
     */
    type?: string;

    /**
     * Globally unique id of the trigger that auto-generates this (a Form Submit, Link Click or Timer listener) if any. Used to make incompatible auto-events
     * work together with trigger filtering based on trigger ids. This value is populated during output generation since the tags implied by triggers don't
     * exist until then. Only valid for Form Submit, Link Click and Timer triggers.
     */
    uniqueTriggerId?: tagmanager$Parameter;

    /**
     * List of integer percentage values for scroll triggers. The trigger will fire when each percentage is reached when the view is scrolled vertically. Only
     * valid for AMP scroll triggers.
     */
    verticalScrollPercentageList?: tagmanager$Parameter;

    /**
     * A visibility trigger CSS selector (i.e. "#id"). Only valid for AMP Visibility trigger.
     */
    visibilitySelector?: tagmanager$Parameter;

    /**
     * A visibility trigger maximum percent visibility. Only valid for AMP Visibility trigger.
     */
    visiblePercentageMax?: tagmanager$Parameter;

    /**
     * A visibility trigger minimum percent visibility. Only valid for AMP Visibility trigger.
     */
    visiblePercentageMin?: tagmanager$Parameter;

    /**
     * Whether or not we should delay the form submissions or link opening until all of the tags have fired (by preventing the default action and later
     * simulating the default action). Only valid for Form Submission and Link Click triggers.
     */
    waitForTags?: tagmanager$Parameter;

    /**
     * How long to wait (in milliseconds) for tags to fire when 'waits_for_tags' above evaluates to true. Only valid for Form Submission and Link Click
     * triggers.
     */
    waitForTagsTimeout?: tagmanager$Parameter;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$UpdateWorkspaceProposalRequest {
    /**
     * When provided, this fingerprint must match the fingerprint of the proposal in storage.
     */
    fingerprint?: string;

    /**
     * If present, a new comment is added to the workspace proposal history.
     */
    newComment?: tagmanager$WorkspaceProposalHistoryComment;

    /**
     * If present, the list of reviewers of the workspace proposal is updated.
     */
    reviewers?: tagmanager$WorkspaceProposalUser[];

    /**
     * If present, the status of the workspace proposal is updated.
     */
    status?: string;
  }

  declare interface tagmanager$UserPermission {
    /**
     * GTM Account access permissions.
     */
    accountAccess?: tagmanager$AccountAccess;

    /**
     * The Account ID uniquely identifies the GTM Account.
     */
    accountId?: string;

    /**
     * GTM Container access permissions.
     */
    containerAccess?: tagmanager$ContainerAccess[];

    /**
     * User's email address.
     */
    emailAddress?: string;

    /**
     * GTM UserPermission's API relative path.
     */
    path?: string;
  }

  declare interface tagmanager$Variable {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * For mobile containers only: A list of trigger IDs for disabling conditional variables; the variable is enabled if one of the enabling trigger is true
     * while all the disabling trigger are false. Treated as an unordered set.
     */
    disablingTriggerId?: string[];

    /**
     * For mobile containers only: A list of trigger IDs for enabling conditional variables; the variable is enabled if one of the enabling triggers is true
     * while all the disabling triggers are false. Treated as an unordered set.
     */
    enablingTriggerId?: string[];

    /**
     * The fingerprint of the GTM Variable as computed at storage time. This value is recomputed whenever the variable is modified.
     */
    fingerprint?: string;

    /**
     * Variable display name.
     */
    name?: string;

    /**
     * User notes on how to apply this variable in the container.
     */
    notes?: string;

    /**
     * The variable's parameters.
     */
    parameter?: tagmanager$Parameter[];

    /**
     * Parent folder id.
     */
    parentFolderId?: string;

    /**
     * GTM Variable's API relative path.
     */
    path?: string;

    /**
     * The end timestamp in milliseconds to schedule a variable.
     */
    scheduleEndMs?: string;

    /**
     * The start timestamp in milliseconds to schedule a variable.
     */
    scheduleStartMs?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * GTM Variable Type.
     */
    type?: string;

    /**
     * The Variable ID uniquely identifies the GTM Variable.
     */
    variableId?: string;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$Workspace {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * Workspace description.
     */
    description?: string;

    /**
     * The fingerprint of the GTM Workspace as computed at storage time. This value is recomputed whenever the workspace is modified.
     */
    fingerprint?: string;

    /**
     * Workspace display name.
     */
    name?: string;

    /**
     * GTM Workspace's API relative path.
     */
    path?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * The Workspace ID uniquely identifies the GTM Workspace.
     */
    workspaceId?: string;
  }

  declare interface tagmanager$WorkspaceProposal {
    /**
     * List of authors for the workspace proposal.
     */
    authors?: tagmanager$WorkspaceProposalUser[];

    /**
     * The fingerprint of the GTM workspace proposal as computed at storage time. This value is recomputed whenever the proposal is modified.
     */
    fingerprint?: string;

    /**
     * Records the history of comments and status changes.
     */
    history?: tagmanager$WorkspaceProposalHistory[];

    /**
     * GTM workspace proposal's relative path.
     */
    path?: string;

    /**
     * Lists of reviewers for the workspace proposal.
     */
    reviewers?: tagmanager$WorkspaceProposalUser[];

    /**
     * The status of the workspace proposal as it goes through review.
     */
    status?: string;
  }

  declare interface tagmanager$WorkspaceProposalHistory {
    /**
     * A user or reviewer comment.
     */
    comment?: tagmanager$WorkspaceProposalHistoryComment;

    /**
     * The party responsible for the change in history.
     */
    createdBy?: tagmanager$WorkspaceProposalUser;

    /**
     * When this history event was added to the workspace proposal.
     */
    createdTimestamp?: tagmanager$Timestamp;

    /**
     * A change in the proposal's status.
     */
    statusChange?: tagmanager$WorkspaceProposalHistoryStatusChange;

    /**
     * The history type distinguishing between comments and status changes.
     */
    type?: string;
  }

  declare interface tagmanager$WorkspaceProposalHistoryComment {
    /**
     * The contents of the reviewer or author comment.
     */
    content?: string;
  }

  declare interface tagmanager$WorkspaceProposalHistoryStatusChange {
    /**
     * The new proposal status after that status change.
     */
    newStatus?: string;

    /**
     * The old proposal status before the status change.
     */
    oldStatus?: string;
  }

  declare interface tagmanager$WorkspaceProposalUser {
    /**
     * Gaia id associated with a user, absent for the Google Tag Manager system.
     */
    gaiaId?: string;

    /**
     * User type distinguishes between a user and the Google Tag Manager system.
     */
    type?: string;
  }

  declare interface tagmanager$Zone {
    /**
     * GTM Account ID.
     */
    accountId?: string;

    /**
     * This Zone's boundary.
     */
    boundary?: tagmanager$ZoneBoundary;

    /**
     * Containers that are children of this Zone.
     */
    childContainer?: tagmanager$ZoneChildContainer[];

    /**
     * GTM Container ID.
     */
    containerId?: string;

    /**
     * The fingerprint of the GTM Zone as computed at storage time. This value is recomputed whenever the zone is modified.
     */
    fingerprint?: string;

    /**
     * Zone display name.
     */
    name?: string;

    /**
     * User notes on how to apply this zone in the container.
     */
    notes?: string;

    /**
     * GTM Zone's API relative path.
     */
    path?: string;

    /**
     * Auto generated link to the tag manager UI
     */
    tagManagerUrl?: string;

    /**
     * This Zone's type restrictions.
     */
    typeRestriction?: tagmanager$ZoneTypeRestriction;

    /**
     * GTM Workspace ID.
     */
    workspaceId?: string;

    /**
     * The Zone ID uniquely identifies the GTM Zone.
     */
    zoneId?: string;
  }

  declare interface tagmanager$ZoneBoundary {
    /**
     * The conditions that, when conjoined, make up the boundary.
     */
    condition?: tagmanager$Condition[];

    /**
     * Custom evaluation trigger IDs. A zone will evaluate its boundary conditions when any of the listed triggers are true.
     */
    customEvaluationTriggerId?: string[];
  }

  declare interface tagmanager$ZoneChildContainer {
    /**
     * The zone's nickname for the child container.
     */
    nickname?: string;

    /**
     * The child container's public id.
     */
    publicId?: string;
  }

  declare interface tagmanager$ZoneTypeRestriction {
    /**
     * True if type restrictions have been enabled for this Zone.
     */
    enable?: boolean;

    /**
     * List of type public ids that have been whitelisted for use in this Zone.
     */
    whitelistedTypeId?: string[];
  }

  declare interface tagmanager$EnvironmentsResource {
    /**
     * Creates a GTM Environment.
     */
    create(request: {
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
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$Environment>;

    /**
     * Deletes a GTM Environment.
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
       * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
       */
      path: string,

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
     * Gets a GTM Environment.
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
       * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
       */
      path: string,

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
    }): Request<tagmanager$Environment>;

    /**
     * Lists all GTM Environments of a GTM Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListEnvironmentsResponse>;

    /**
     * Updates a GTM Environment. This method supports patch semantics.
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
       * When provided, this fingerprint must match the fingerprint of the environment in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
       */
      path: string,

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
    }): Request<tagmanager$Environment>;

    /**
     * Re-generates the authorization code for a GTM Environment.
     */
    reauthorize(request: {
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
       * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
       */
      path: string,

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
    }): Request<tagmanager$Environment>;

    /**
     * Updates a GTM Environment.
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
       * When provided, this fingerprint must match the fingerprint of the environment in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Environment's API relative path. Example: accounts/{account_id}/containers/{container_id}/environments/{environment_id}
       */
      path: string,

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
    }): Request<tagmanager$Environment>;
  }

  declare interface tagmanager$Version_headersResource {
    /**
     * Gets the latest container version header
     */
    latest(request: {
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
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$ContainerVersionHeader>;

    /**
     * Lists all Container Versions of a GTM Container.
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
       * Also retrieve deleted (archived) versions when true.
       */
      includeDeleted?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListContainerVersionsResponse>;
  }

  declare interface tagmanager$VersionsResource {
    /**
     * Deletes a Container Version.
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
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
     * Gets a Container Version.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The GTM ContainerVersion ID. Specify published to retrieve the currently published version.
       */
      containerVersionId?: string,

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
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
    }): Request<tagmanager$ContainerVersion>;

    /**
     * Gets the live (i.e. published) container version
     */
    live(request: {
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
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$ContainerVersion>;

    /**
     * Publishes a Container Version.
     */
    publish(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of the container version in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
    }): Request<tagmanager$PublishContainerVersionResponse>;

    /**
     * Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.
     */
    set_latest(request: {
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
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
    }): Request<tagmanager$ContainerVersion>;

    /**
     * Undeletes a Container Version.
     */
    undelete(request: {
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
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
    }): Request<tagmanager$ContainerVersion>;

    /**
     * Updates a Container Version.
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
       * When provided, this fingerprint must match the fingerprint of the container version in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM ContainerVersion's API relative path. Example: accounts/{account_id}/containers/{container_id}/versions/{version_id}
       */
      path: string,

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
    }): Request<tagmanager$ContainerVersion>;
  }

  declare interface tagmanager$Built_in_variablesResource {
    /**
     * Creates one or more GTM Built-In Variables.
     */
    create(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
       * The types of built-in variables to enable.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<tagmanager$CreateBuiltInVariableResponse>;

    /**
     * Deletes one or more GTM Built-In Variables.
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
       * GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
       */
      path: string,

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
       * The types of built-in variables to delete.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Lists all the enabled Built-In Variables of a GTM Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListEnabledBuiltInVariablesResponse>;

    /**
     * Reverts changes to a GTM Built-In Variables in a GTM Workspace.
     */
    revert(request: {
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
       * GTM BuiltInVariable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/built_in_variables
       */
      path: string,

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
       * The type of built-in variable to revert.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<tagmanager$RevertBuiltInVariableResponse>;
  }

  declare interface tagmanager$FoldersResource {
    /**
     * Creates a GTM Folder.
     */
    create(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$Folder>;

    /**
     * Deletes a GTM Folder.
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
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
     * List all entities in a GTM Folder.
     */
    entities(request: {
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
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
    }): Request<tagmanager$FolderEntities>;

    /**
     * Gets a GTM Folder.
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
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
    }): Request<tagmanager$Folder>;

    /**
     * Lists all GTM Folders of a Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListFoldersResponse>;

    /**
     * Moves entities to a GTM Folder.
     */
    move_entities_to_folder(request: {
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
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
       * The tags to be moved to the folder.
       */
      tagId?: string,

      /**
       * The triggers to be moved to the folder.
       */
      triggerId?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * The variables to be moved to the folder.
       */
      variableId?: string
    }): Request<void>;

    /**
     * Reverts changes to a GTM Folder in a GTM Workspace.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of the tag in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
    }): Request<tagmanager$RevertFolderResponse>;

    /**
     * Updates a GTM Folder.
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
       * When provided, this fingerprint must match the fingerprint of the folder in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Folder's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/folders/{folder_id}
       */
      path: string,

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
    }): Request<tagmanager$Folder>;
  }

  declare interface tagmanager$ProposalResource {
    /**
     * Creates a GTM Workspace Proposal.
     */
    create(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{aid}/containers/{cid}/workspace/{wid}
       */
      parent: string,

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
    }): Request<tagmanager$WorkspaceProposal>;

    /**
     * Deletes a GTM Workspace Proposal.
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
       * GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
       */
      path: string,

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

  declare interface tagmanager$TagsResource {
    /**
     * Creates a GTM Tag.
     */
    create(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$Tag>;

    /**
     * Deletes a GTM Tag.
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
       * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
       */
      path: string,

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
     * Gets a GTM Tag.
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
       * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
       */
      path: string,

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
    }): Request<tagmanager$Tag>;

    /**
     * Lists all GTM Tags of a Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListTagsResponse>;

    /**
     * Reverts changes to a GTM Tag in a GTM Workspace.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of thetag in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
       */
      path: string,

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
    }): Request<tagmanager$RevertTagResponse>;

    /**
     * Updates a GTM Tag.
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
       * When provided, this fingerprint must match the fingerprint of the tag in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Tag's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/tags/{tag_id}
       */
      path: string,

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
    }): Request<tagmanager$Tag>;
  }

  declare interface tagmanager$TriggersResource {
    /**
     * Creates a GTM Trigger.
     */
    create(request: {
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
       * GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$Trigger>;

    /**
     * Deletes a GTM Trigger.
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
       * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
       */
      path: string,

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
     * Gets a GTM Trigger.
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
       * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
       */
      path: string,

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
    }): Request<tagmanager$Trigger>;

    /**
     * Lists all GTM Triggers of a Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Workspaces's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListTriggersResponse>;

    /**
     * Reverts changes to a GTM Trigger in a GTM Workspace.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of the trigger in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
       */
      path: string,

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
    }): Request<tagmanager$RevertTriggerResponse>;

    /**
     * Updates a GTM Trigger.
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
       * When provided, this fingerprint must match the fingerprint of the trigger in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Trigger's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/triggers/{trigger_id}
       */
      path: string,

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
    }): Request<tagmanager$Trigger>;
  }

  declare interface tagmanager$VariablesResource {
    /**
     * Creates a GTM Variable.
     */
    create(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$Variable>;

    /**
     * Deletes a GTM Variable.
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
       * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
       */
      path: string,

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
     * Gets a GTM Variable.
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
       * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
       */
      path: string,

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
    }): Request<tagmanager$Variable>;

    /**
     * Lists all GTM Variables of a Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListVariablesResponse>;

    /**
     * Reverts changes to a GTM Variable in a GTM Workspace.
     */
    revert(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of the variable in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
       */
      path: string,

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
    }): Request<tagmanager$RevertVariableResponse>;

    /**
     * Updates a GTM Variable.
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
       * When provided, this fingerprint must match the fingerprint of the variable in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Variable's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}/variables/{variable_id}
       */
      path: string,

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
    }): Request<tagmanager$Variable>;
  }

  declare interface tagmanager$WorkspacesResource {
    /**
     * Creates a Workspace.
     */
    create(request: {
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
       * GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$Workspace>;

    /**
     * Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created
     * version.
     */
    create_version(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$CreateContainerVersionResponse>;

    /**
     * Deletes a Workspace.
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
     * Gets a Workspace.
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$Workspace>;

    /**
     * Gets a GTM Workspace Proposal.
     */
    getProposal(request: {
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
       * GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
       */
      path: string,

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
    }): Request<tagmanager$WorkspaceProposal>;

    /**
     * Finds conflicting and modified entities in the workspace.
     */
    getStatus(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$GetWorkspaceStatusResponse>;

    /**
     * Lists all Workspaces that belong to a GTM Container.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM parent Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListWorkspacesResponse>;

    /**
     * Quick previews a workspace by creating a fake container version from all entities in the provided workspace.
     */
    quick_preview(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$QuickPreviewResponse>;

    /**
     * Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.
     */
    resolve_conflict(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
     * Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.
     */
    sync(request: {
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
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$SyncWorkspaceResponse>;

    /**
     * Updates a Workspace.
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
       * When provided, this fingerprint must match the fingerprint of the workspace in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Workspace's API relative path. Example: accounts/{account_id}/containers/{container_id}/workspaces/{workspace_id}
       */
      path: string,

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
    }): Request<tagmanager$Workspace>;

    /**
     * Updates a GTM Workspace Proposal.
     */
    updateProposal(request: {
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
       * GTM workspace proposal's relative path: Example: accounts/{aid}/containers/{cid}/workspace/{wid}/workspace_proposal
       */
      path: string,

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
    }): Request<tagmanager$WorkspaceProposal>;
    built_in_variables: tagmanager$Built_in_variablesResource;
    folders: tagmanager$FoldersResource;
    proposal: tagmanager$ProposalResource;
    tags: tagmanager$TagsResource;
    triggers: tagmanager$TriggersResource;
    variables: tagmanager$VariablesResource;
  }

  declare interface tagmanager$ContainersResource {
    /**
     * Creates a Container.
     */
    create(request: {
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
       * GTM Account's API relative path. Example: accounts/{account_id}.
       */
      parent: string,

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
    }): Request<tagmanager$Container>;

    /**
     * Deletes a Container.
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
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      path: string,

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
     * Gets a Container.
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
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      path: string,

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
    }): Request<tagmanager$Container>;

    /**
     * Lists all Containers that belongs to a GTM Account.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Accounts's API relative path. Example: accounts/{account_id}.
       */
      parent: string,

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
    }): Request<tagmanager$ListContainersResponse>;

    /**
     * Updates a Container.
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
       * When provided, this fingerprint must match the fingerprint of the container in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Container's API relative path. Example: accounts/{account_id}/containers/{container_id}
       */
      path: string,

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
    }): Request<tagmanager$Container>;
    environments: tagmanager$EnvironmentsResource;
    version_headers: tagmanager$Version_headersResource;
    versions: tagmanager$VersionsResource;
    workspaces: tagmanager$WorkspacesResource;
  }

  declare interface tagmanager$User_permissionsResource {
    /**
     * Creates a user's Account & Container access.
     */
    create(request: {
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
       * GTM Account's API relative path. Example: accounts/{account_id}
       */
      parent: string,

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
    }): Request<tagmanager$UserPermission>;

    /**
     * Removes a user from the account, revoking access to it and all of its containers.
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
       * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
       */
      path: string,

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
     * Gets a user's Account & Container access.
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
       * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
       */
      path: string,

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
    }): Request<tagmanager$UserPermission>;

    /**
     * List all users that have access to the account along with Account and Container user access granted to each of them.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
       */
      pageToken?: string,

      /**
       * GTM Accounts's API relative path. Example: accounts/{account_id}
       */
      parent: string,

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
    }): Request<tagmanager$ListUserPermissionsResponse>;

    /**
     * Updates a user's Account & Container access.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM UserPermission's API relative path. Example: accounts/{account_id}/user_permissions/{user_permission_id}
       */
      path: string,

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
    }): Request<tagmanager$UserPermission>;
  }

  declare interface tagmanager$AccountsResource {
    /**
     * Gets a GTM Account.
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
       * GTM Accounts's API relative path. Example: accounts/{account_id}
       */
      path: string,

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
    }): Request<tagmanager$Account>;

    /**
     * Lists all GTM Accounts that a user has access to.
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
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Continuation token for fetching the next page of results.
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
    }): Request<tagmanager$ListAccountsResponse>;

    /**
     * Updates a GTM Account.
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
       * When provided, this fingerprint must match the fingerprint of the account in storage.
       */
      fingerprint?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * GTM Accounts's API relative path. Example: accounts/{account_id}
       */
      path: string,

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
    }): Request<tagmanager$Account>;
    containers: tagmanager$ContainersResource;
    user_permissions: tagmanager$User_permissionsResource;
  }
}
