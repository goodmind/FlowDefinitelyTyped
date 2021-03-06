declare module "gapi.client.clouddebugger" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    controller: typeof gapi$client$controller
  };

  /**
   * Load Stackdriver Debugger API v2
   */
  declare function gapi$client$load(
    name: "clouddebugger",
    version: "v2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "clouddebugger",
    version: "v2",
    callback: () => any
  ): void;

  declare var gapi$client$controller: clouddebugger$ControllerResource;

  declare interface gapi$client$clouddebugger$AliasContext {
    /**
     * The alias kind.
     */
    kind?: string;

    /**
     * The alias name.
     */
    name?: string;
  }

  declare interface gapi$client$clouddebugger$Breakpoint {
    /**
     * Action that the agent should perform when the code at the
     * breakpoint location is hit.
     */
    action?: string;

    /**
     * Condition that triggers the breakpoint.
     * The condition is a compound boolean expression composed using expressions
     * in a programming language at the source location.
     */
    condition?: string;

    /**
     * Time this breakpoint was created by the server in seconds resolution.
     */
    createTime?: string;

    /**
     * Values of evaluated expressions at breakpoint time.
     * The evaluated expressions appear in exactly the same order they
     * are listed in the `expressions` field.
     * The `name` field holds the original expression text, the `value` or
     * `members` field holds the result of the evaluated expression.
     * If the expression cannot be evaluated, the `status` inside the `Variable`
     * will indicate an error and contain the error text.
     */
    evaluatedExpressions?: clouddebugger$Variable[];

    /**
     * List of read-only expressions to evaluate at the breakpoint location.
     * The expressions are composed using expressions in the programming language
     * at the source location. If the breakpoint action is `LOG`, the evaluated
     * expressions are included in log statements.
     */
    expressions?: string[];

    /**
     * Time this breakpoint was finalized as seen by the server in seconds
     * resolution.
     */
    finalTime?: string;

    /**
     * Breakpoint identifier, unique in the scope of the debuggee.
     */
    id?: string;

    /**
     * When true, indicates that this is a final result and the
     * breakpoint state will not change from here on.
     */
    isFinalState?: boolean;

    /**
     * A set of custom breakpoint properties, populated by the agent, to be
     * displayed to the user.
     */
    labels?: Record<string, string>;

    /**
     * Breakpoint source location.
     */
    location?: clouddebugger$SourceLocation;

    /**
     * Indicates the severity of the log. Only relevant when action is `LOG`.
     */
    logLevel?: string;

    /**
     * Only relevant when action is `LOG`. Defines the message to log when
     * the breakpoint hits. The message may include parameter placeholders `$0`,
     * `$1`, etc. These placeholders are replaced with the evaluated value
     * of the appropriate expression. Expressions not referenced in
     * `log_message_format` are not logged.
     *
     * Example: `Message received, id = $0, count = $1` with
     * `expressions` = `[ message.id, message.count ]`.
     */
    logMessageFormat?: string;

    /**
     * The stack at breakpoint time.
     */
    stackFrames?: clouddebugger$StackFrame[];

    /**
     * Breakpoint status.
     *
     * The status includes an error flag and a human readable message.
     * This field is usually unset. The message can be either
     * informational or an error message. Regardless, clients should always
     * display the text message back to the user.
     *
     * Error status indicates complete failure of the breakpoint.
     *
     * Example (non-final state): `Still loading symbols...`
     *
     * Examples (final state):
     *
     * &#42;   `Invalid line number` referring to location
     * &#42;   `Field f not found in class C` referring to condition
     */
    status?: clouddebugger$StatusMessage;

    /**
     * E-mail address of the user that created this breakpoint
     */
    userEmail?: string;

    /**
     * The `variable_table` exists to aid with computation, memory and network
     * traffic optimization.  It enables storing a variable once and reference
     * it from multiple variables, including variables stored in the
     * `variable_table` itself.
     * For example, the same `this` object, which may appear at many levels of
     * the stack, can have all of its data stored once in this table.  The
     * stack frame variables then would hold only a reference to it.
     *
     * The variable `var_table_index` field is an index into this repeated field.
     * The stored objects are nameless and get their name from the referencing
     * variable. The effective variable is a merge of the referencing variable
     * and the referenced variable.
     */
    variableTable?: clouddebugger$Variable[];
  }

  declare interface gapi$client$clouddebugger$CloudRepoSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: gapi$client$clouddebugger$AliasContext;

    /**
     * The name of an alias (branch, tag, etc.).
     */
    aliasName?: string;

    /**
     * The ID of the repo.
     */
    repoId?: clouddebugger$RepoId;

    /**
     * A revision ID.
     */
    revisionId?: string;
  }

  declare interface gapi$client$clouddebugger$CloudWorkspaceId {
    /**
     * The unique name of the workspace within the repo.  This is the name
     * chosen by the client in the Source API's CreateWorkspace method.
     */
    name?: string;

    /**
     * The ID of the repo containing the workspace.
     */
    repoId?: clouddebugger$RepoId;
  }

  declare interface gapi$client$clouddebugger$CloudWorkspaceSourceContext {
    /**
     * The ID of the snapshot.
     * An empty snapshot_id refers to the most recent snapshot.
     */
    snapshotId?: string;

    /**
     * The ID of the workspace.
     */
    workspaceId?: gapi$client$clouddebugger$CloudWorkspaceId;
  }

  declare interface gapi$client$clouddebugger$Debuggee {
    /**
     * Version ID of the agent.
     * Schema: `domain/language-platform/vmajor.minor` (for example
     * `google.com/java-gcp/v1.1`).
     */
    agentVersion?: string;

    /**
     * Human readable description of the debuggee.
     * Including a human-readable project name, environment name and version
     * information is recommended.
     */
    description?: string;

    /**
     * References to the locations and revisions of the source code used in the
     * deployed application.
     *
     * NOTE: this field is experimental and can be ignored.
     */
    extSourceContexts?: clouddebugger$ExtendedSourceContext[];

    /**
     * Unique identifier for the debuggee generated by the controller service.
     */
    id?: string;

    /**
     * If set to `true`, indicates that the agent should disable itself and
     * detach from the debuggee.
     */
    isDisabled?: boolean;

    /**
     * If set to `true`, indicates that Controller service does not detect any
     * activity from the debuggee agents and the application is possibly stopped.
     */
    isInactive?: boolean;

    /**
     * A set of custom debuggee properties, populated by the agent, to be
     * displayed to the user.
     */
    labels?: Record<string, string>;

    /**
     * Project the debuggee is associated with.
     * Use project number or id when registering a Google Cloud Platform project.
     */
    project?: string;

    /**
     * References to the locations and revisions of the source code used in the
     * deployed application.
     */
    sourceContexts?: clouddebugger$SourceContext[];

    /**
     * Human readable message to be displayed to the user about this debuggee.
     * Absence of this field indicates no status. The message can be either
     * informational or an error status.
     */
    status?: clouddebugger$StatusMessage;

    /**
     * Uniquifier to further distiguish the application.
     * It is possible that different applications might have identical values in
     * the debuggee message, thus, incorrectly identified as a single application
     * by the Controller service. This field adds salt to further distiguish the
     * application. Agents should consider seeding this field with value that
     * identifies the code, binary, configuration and environment.
     */
    uniquifier?: string;
  }

  declare interface gapi$client$clouddebugger$ExtendedSourceContext {
    /**
     * Any source context.
     */
    context?: clouddebugger$SourceContext;

    /**
     * Labels with user defined metadata.
     */
    labels?: Record<string, string>;
  }

  declare interface gapi$client$clouddebugger$FormatMessage {
    /**
     * Format template for the message. The `format` uses placeholders `$0`,
     * `$1`, etc. to reference parameters. `$$` can be used to denote the `$`
     * character.
     *
     * Examples:
     *
     * &#42;   `Failed to load '$0' which helps debug $1 the first time it
     *              * is loaded.  Again, $0 is very important.`
     * &#42;   `Please pay $$10 to use $0 instead of $1.`
     */
    format?: string;

    /**
     * Optional parameters to be embedded into the message.
     */
    parameters?: string[];
  }

  declare interface gapi$client$clouddebugger$GerritSourceContext {
    /**
     * An alias, which may be a branch or tag.
     */
    aliasContext?: gapi$client$clouddebugger$AliasContext;

    /**
     * The name of an alias (branch, tag, etc.).
     */
    aliasName?: string;

    /**
     * The full project name within the host. Projects may be nested, so
     * "project/subproject" is a valid project name.
     * The "repo name" is hostURI/project.
     */
    gerritProject?: string;

    /**
     * The URI of a running Gerrit instance.
     */
    hostUri?: string;

    /**
     * A revision (commit) ID.
     */
    revisionId?: string;
  }

  declare interface gapi$client$clouddebugger$GetBreakpointResponse {
    /**
     * Complete breakpoint state.
     * The fields `id` and `location` are guaranteed to be set.
     */
    breakpoint?: gapi$client$clouddebugger$Breakpoint;
  }

  declare interface gapi$client$clouddebugger$GitSourceContext {
    /**
     * Git commit hash.
     * required.
     */
    revisionId?: string;

    /**
     * Git repository URL.
     */
    url?: string;
  }

  declare interface gapi$client$clouddebugger$ListActiveBreakpointsResponse {
    /**
     * List of all active breakpoints.
     * The fields `id` and `location` are guaranteed to be set on each breakpoint.
     */
    breakpoints?: gapi$client$clouddebugger$Breakpoint[];

    /**
     * A token that can be used in the next method call to block until
     * the list of breakpoints changes.
     */
    nextWaitToken?: string;

    /**
     * If set to `true`, indicates that there is no change to the
     * list of active breakpoints and the server-selected timeout has expired.
     * The `breakpoints` field would be empty and should be ignored.
     */
    waitExpired?: boolean;
  }

  declare interface gapi$client$clouddebugger$ListBreakpointsResponse {
    /**
     * List of breakpoints matching the request.
     * The fields `id` and `location` are guaranteed to be set on each breakpoint.
     * The fields: `stack_frames`, `evaluated_expressions` and `variable_table`
     * are cleared on each breakpoint regardless of its status.
     */
    breakpoints?: gapi$client$clouddebugger$Breakpoint[];

    /**
     * A wait token that can be used in the next call to `list` (REST) or
     * `ListBreakpoints` (RPC) to block until the list of breakpoints has changes.
     */
    nextWaitToken?: string;
  }

  declare interface gapi$client$clouddebugger$ListDebuggeesResponse {
    /**
     * List of debuggees accessible to the calling user.
     * The fields `debuggee.id` and `description` are guaranteed to be set.
     * The `description` field is a human readable field provided by agents and
     * can be displayed to users.
     */
    debuggees?: gapi$client$clouddebugger$Debuggee[];
  }

  declare interface gapi$client$clouddebugger$ProjectRepoId {
    /**
     * The ID of the project.
     */
    projectId?: string;

    /**
     * The name of the repo. Leave empty for the default repo.
     */
    repoName?: string;
  }

  declare interface gapi$client$clouddebugger$RegisterDebuggeeRequest {
    /**
     * Debuggee information to register.
     * The fields `project`, `uniquifier`, `description` and `agent_version`
     * of the debuggee must be set.
     */
    debuggee?: gapi$client$clouddebugger$Debuggee;
  }

  declare interface gapi$client$clouddebugger$RegisterDebuggeeResponse {
    /**
     * Debuggee resource.
     * The field `id` is guranteed to be set (in addition to the echoed fields).
     * If the field `is_disabled` is set to `true`, the agent should disable
     * itself by removing all breakpoints and detaching from the application.
     * It should however continue to poll `RegisterDebuggee` until reenabled.
     */
    debuggee?: gapi$client$clouddebugger$Debuggee;
  }

  declare interface gapi$client$clouddebugger$RepoId {
    /**
     * A combination of a project ID and a repo name.
     */
    projectRepoId?: gapi$client$clouddebugger$ProjectRepoId;

    /**
     * A server-assigned, globally unique identifier.
     */
    uid?: string;
  }

  declare interface gapi$client$clouddebugger$SetBreakpointResponse {
    /**
     * Breakpoint resource.
     * The field `id` is guaranteed to be set (in addition to the echoed fileds).
     */
    breakpoint?: gapi$client$clouddebugger$Breakpoint;
  }

  declare interface gapi$client$clouddebugger$SourceContext {
    /**
     * A SourceContext referring to a revision in a cloud repo.
     */
    cloudRepo?: gapi$client$clouddebugger$CloudRepoSourceContext;

    /**
     * A SourceContext referring to a snapshot in a cloud workspace.
     */
    cloudWorkspace?: gapi$client$clouddebugger$CloudWorkspaceSourceContext;

    /**
     * A SourceContext referring to a Gerrit project.
     */
    gerrit?: gapi$client$clouddebugger$GerritSourceContext;

    /**
     * A SourceContext referring to any third party Git repo (e.g. GitHub).
     */
    git?: gapi$client$clouddebugger$GitSourceContext;
  }

  declare interface gapi$client$clouddebugger$SourceLocation {
    /**
     * Line inside the file. The first line in the file has the value `1`.
     */
    line?: number;

    /**
     * Path to the source file within the source context of the target binary.
     */
    path?: string;
  }

  declare interface gapi$client$clouddebugger$StackFrame {
    /**
     * Set of arguments passed to this function.
     * Note that this might not be populated for all stack frames.
     */
    arguments?: clouddebugger$Variable[];

    /**
     * Demangled function name at the call site.
     */
    function?: string;

    /**
     * Set of local variables at the stack frame location.
     * Note that this might not be populated for all stack frames.
     */
    locals?: clouddebugger$Variable[];

    /**
     * Source location of the call site.
     */
    location?: gapi$client$clouddebugger$SourceLocation;
  }

  declare interface gapi$client$clouddebugger$StatusMessage {
    /**
     * Status message text.
     */
    description?: gapi$client$clouddebugger$FormatMessage;

    /**
     * Distinguishes errors from informational messages.
     */
    isError?: boolean;

    /**
     * Reference to which the message applies.
     */
    refersTo?: string;
  }

  declare interface gapi$client$clouddebugger$UpdateActiveBreakpointRequest {
    /**
     * Updated breakpoint information.
     * The field `id` must be set.
     * The agent must echo all Breakpoint specification fields in the update.
     */
    breakpoint?: gapi$client$clouddebugger$Breakpoint;
  }

  declare interface gapi$client$clouddebugger$Variable {
    /**
     * Members contained or pointed to by the variable.
     */
    members?: gapi$client$clouddebugger$Variable[];

    /**
     * Name of the variable, if any.
     */
    name?: string;

    /**
     * Status associated with the variable. This field will usually stay
     * unset. A status of a single variable only applies to that variable or
     * expression. The rest of breakpoint data still remains valid. Variables
     * might be reported in error state even when breakpoint is not in final
     * state.
     *
     * The message may refer to variable name with `refers_to` set to
     * `VARIABLE_NAME`. Alternatively `refers_to` will be set to `VARIABLE_VALUE`.
     * In either case variable value and members will be unset.
     *
     * Example of error message applied to name: `Invalid expression syntax`.
     *
     * Example of information message applied to value: `Not captured`.
     *
     * Examples of error message applied to value:
     *
     * &#42;   `Malformed string`,
     * &#42;   `Field f not found in class C`
     * &#42;   `Null pointer dereference`
     */
    status?: gapi$client$clouddebugger$StatusMessage;

    /**
     * Variable type (e.g. `MyClass`). If the variable is split with
     * `var_table_index`, `type` goes next to `value`. The interpretation of
     * a type is agent specific. It is recommended to include the dynamic type
     * rather than a static type of an object.
     */
    type?: string;

    /**
     * Simple value of the variable.
     */
    value?: string;

    /**
     * Reference to a variable in the shared variable table. More than
     * one variable can reference the same variable in the table. The
     * `var_table_index` field is an index into `variable_table` in Breakpoint.
     */
    varTableIndex?: number;
  }

  declare interface gapi$client$clouddebugger$BreakpointsResource {
    /**
     * Returns the list of all active breakpoints for the debuggee.
     *
     * The breakpoint specification (`location`, `condition`, and `expressions`
     * fields) is semantically immutable, although the field values may
     * change. For example, an agent may update the location line number
     * to reflect the actual line where the breakpoint was set, but this
     * doesn't change the breakpoint semantics.
     *
     * This means that an agent does not need to check if a breakpoint has changed
     * when it encounters the same breakpoint on a successive call.
     * Moreover, an agent should remember the breakpoints that are completed
     * until the controller removes them from the active list to avoid
     * setting those breakpoints again.
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
       * Identifies the debuggee.
       */
      debuggeeId: string,

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
       * If set to `true` (recommended), returns `google.rpc.Code.OK` status and
       * sets the `wait_expired` response field to `true` when the server-selected
       * timeout has expired.
       *
       * If set to `false` (deprecated), returns `google.rpc.Code.ABORTED` status
       * when the server-selected timeout has expired.
       */
      successOnTimeout?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * A token that, if specified, blocks the method call until the list
       * of active breakpoints has changed, or a server-selected timeout has
       * expired. The value should be set from the `next_wait_token` field in
       * the last response. The initial value should be set to `"init"`.
       */
      waitToken?: string
    }): Request<gapi$client$clouddebugger$ListActiveBreakpointsResponse>;

    /**
     * Updates the breakpoint state or mutable fields.
     * The entire Breakpoint message must be sent back to the controller service.
     *
     * Updates to active breakpoint fields are only allowed if the new value
     * does not change the breakpoint specification. Updates to the `location`,
     * `condition` and `expressions` fields should not alter the breakpoint
     * semantics. These may only make changes such as canonicalizing a value
     * or snapping the location to the correct line of code.
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
       * Identifies the debuggee being debugged.
       */
      debuggeeId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Breakpoint identifier, unique in the scope of the debuggee.
       */
      id: string,

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
    }): Request<{}>;

    /**
     * Deletes the breakpoint from the debuggee.
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
       * ID of the breakpoint to delete.
       */
      breakpointId: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * The client version making the call.
       * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       */
      clientVersion?: string,

      /**
       * ID of the debuggee whose breakpoint to delete.
       */
      debuggeeId: string,

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
    }): Request<{}>;

    /**
     * Gets breakpoint information.
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
       * ID of the breakpoint to get.
       */
      breakpointId: string,

      /**
       * JSONP
       */
      callback?: string,

      /**
       * The client version making the call.
       * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       */
      clientVersion?: string,

      /**
       * ID of the debuggee whose breakpoint to get.
       */
      debuggeeId: string,

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
    }): Request<gapi$client$clouddebugger$GetBreakpointResponse>;

    /**
     * Lists all breakpoints for the debuggee.
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
       * Only breakpoints with the specified action will pass the filter.
       */
      "action.value"?: string,

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
       * The client version making the call.
       * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       */
      clientVersion?: string,

      /**
       * ID of the debuggee whose breakpoints to list.
       */
      debuggeeId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When set to `true`, the response includes the list of breakpoints set by
       * any user. Otherwise, it includes only breakpoints set by the caller.
       */
      includeAllUsers?: boolean,

      /**
       * When set to `true`, the response includes active and inactive
       * breakpoints. Otherwise, it includes only active breakpoints.
       */
      includeInactive?: boolean,

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
       * This field is deprecated. The following fields are always stripped out of
       * the result: `stack_frames`, `evaluated_expressions` and `variable_table`.
       */
      stripResults?: boolean,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string,

      /**
       * A wait token that, if specified, blocks the call until the breakpoints
       * list has changed, or a server selected timeout has expired.  The value
       * should be set from the last response. The error code
       * `google.rpc.Code.ABORTED` (RPC) is returned on wait timeout, which
       * should be called again with the same `wait_token`.
       */
      waitToken?: string
    }): Request<gapi$client$clouddebugger$ListBreakpointsResponse>;

    /**
     * Sets the breakpoint to the debuggee.
     */
    set(request: {
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
       * The client version making the call.
       * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       */
      clientVersion?: string,

      /**
       * ID of the debuggee where the breakpoint is to be set.
       */
      debuggeeId: string,

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
    }): Request<gapi$client$clouddebugger$SetBreakpointResponse>;
  }

  declare interface gapi$client$clouddebugger$DebuggeesResource {
    /**
     * Registers the debuggee with the controller service.
     *
     * All agents attached to the same application must call this method with
     * exactly the same request content to get back the same stable `debuggee_id`.
     * Agents should call this method again whenever `google.rpc.Code.NOT_FOUND`
     * is returned from any controller method.
     *
     * This protocol allows the controller service to disable debuggees, recover
     * from data loss, or change the `debuggee_id` format. Agents must handle
     * `debuggee_id` value changing upon re-registration.
     */
    register(request: {
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
    }): Request<gapi$client$clouddebugger$RegisterDebuggeeResponse>;
    breakpoints: gapi$client$clouddebugger$BreakpointsResource;

    /**
     * Lists all the debuggees that the user has access to.
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
       * The client version making the call.
       * Schema: `domain/type/version` (e.g., `google.com/intellij/v1`).
       */
      clientVersion?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * When set to `true`, the result includes all debuggees. Otherwise, the
       * result includes only debuggees that are active.
       */
      includeInactive?: boolean,

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
       * Project number of a Google Cloud project whose debuggees to list.
       */
      project?: string,

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
    }): Request<gapi$client$clouddebugger$ListDebuggeesResponse>;
    breakpoints: gapi$client$clouddebugger$BreakpointsResource;
  }

  declare interface gapi$client$clouddebugger$ControllerResource {
    debuggees: gapi$client$clouddebugger$DebuggeesResource;
  }

  declare interface gapi$client$clouddebugger$DebuggerResource {
    debuggees: gapi$client$clouddebugger$DebuggeesResource;
  }
}
