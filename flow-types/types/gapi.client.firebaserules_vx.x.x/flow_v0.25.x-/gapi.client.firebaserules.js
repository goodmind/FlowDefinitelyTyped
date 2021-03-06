declare module "gapi.client.firebaserules" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Firebase Rules API v1
   */
  declare function gapi$client$load(
    name: "firebaserules",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "firebaserules",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: firebaserules$ProjectsResource;

  declare interface gapi$client$firebaserules$Arg {
    /**
     * Argument matches any value provided.
     */
    anyValue?: any;

    /**
     * Argument exactly matches value provided.
     */
    exactValue?: any;
  }

  declare interface gapi$client$firebaserules$File {
    /**
     * Textual Content.
     */
    content?: string;

    /**
     * Fingerprint (e.g. github sha) associated with the `File`.
     */
    fingerprint?: string;

    /**
     * File name.
     */
    name?: string;
  }

  declare interface gapi$client$firebaserules$FunctionCall {
    /**
     * The arguments that were provided to the function.
     */
    args?: any[];

    /**
     * Name of the function invoked.
     */
    function?: string;
  }

  declare interface gapi$client$firebaserules$FunctionMock {
    /**
     * The list of `Arg` values to match. The order in which the arguments are
     * provided is the order in which they must appear in the function
     * invocation.
     */
    args?: gapi$client$firebaserules$Arg[];

    /**
     * The name of the function.
     *
     * The function name must match one provided by a service declaration.
     */
    function?: string;

    /**
     * The mock result of the function call.
     */
    result?: firebaserules$Result;
  }

  declare interface gapi$client$firebaserules$GetReleaseExecutableResponse {
    /**
     * Executable view of the `Ruleset` referenced by the `Release`.
     */
    executable?: string;

    /**
     * The Rules runtime version of the executable.
     */
    executableVersion?: string;

    /**
     * `Language` used to generate the executable bytes.
     */
    language?: string;

    /**
     * `Ruleset` name associated with the `Release` executable.
     */
    rulesetName?: string;

    /**
     * Timestamp for the most recent `Release.update_time`.
     */
    updateTime?: string;
  }

  declare interface gapi$client$firebaserules$Issue {
    /**
     * Short error description.
     */
    description?: string;

    /**
     * The severity of the issue.
     */
    severity?: string;

    /**
     * Position of the issue in the `Source`.
     */
    sourcePosition?: firebaserules$SourcePosition;
  }

  declare interface gapi$client$firebaserules$ListReleasesResponse {
    /**
     * The pagination token to retrieve the next page of results. If the value is
     * empty, no further results remain.
     */
    nextPageToken?: string;

    /**
     * List of `Release` instances.
     */
    releases?: firebaserules$Release[];
  }

  declare interface gapi$client$firebaserules$ListRulesetsResponse {
    /**
     * The pagination token to retrieve the next page of results. If the value is
     * empty, no further results remain.
     */
    nextPageToken?: string;

    /**
     * List of `Ruleset` instances.
     */
    rulesets?: firebaserules$Ruleset[];
  }

  declare interface gapi$client$firebaserules$Release {
    /**
     * Time the release was created.
     * Output only.
     */
    createTime?: string;

    /**
     * Resource name for the `Release`.
     *
     * `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
     * which affords developers a great deal of flexibility in mapping the name
     * to the style that best fits their existing development practices. For
     * example, a name could refer to an environment, an app, a version, or some
     * combination of three.
     *
     * In the table below, for the project name `projects/foo`, the following
     * relative release paths show how flat and structured names might be chosen
     * to match a desired development / deployment strategy.
     *
     * Use Case     | Flat Name           | Structured Name
     * -------------|---------------------|----------------
     * Environments | releases/qa         | releases/qa
     * Apps         | releases/app1_qa    | releases/app1/qa
     * Versions     | releases/app1_v2_qa | releases/app1/v2/qa
     *
     * The delimiter between the release name path elements can be almost anything
     * and it should work equally well with the release name list filter, but in
     * many ways the structured paths provide a clearer picture of the
     * relationship between `Release` instances.
     *
     * Format: `projects/{project_id}/releases/{release_id}`
     */
    name?: string;

    /**
     * Name of the `Ruleset` referred to by this `Release`. The `Ruleset` must
     * exist the `Release` to be created.
     */
    rulesetName?: string;

    /**
     * Time the release was updated.
     * Output only.
     */
    updateTime?: string;
  }

  declare interface gapi$client$firebaserules$Result {
    /**
     * The result is undefined, meaning the result could not be computed.
     */
    undefined?: any;

    /**
     * The result is an actual value. The type of the value must match that
     * of the type declared by the service.
     */
    value?: any;
  }

  declare interface gapi$client$firebaserules$Ruleset {
    /**
     * Time the `Ruleset` was created.
     * Output only.
     */
    createTime?: string;

    /**
     * Name of the `Ruleset`. The ruleset_id is auto generated by the service.
     * Format: `projects/{project_id}/rulesets/{ruleset_id}`
     * Output only.
     */
    name?: string;

    /**
     * `Source` for the `Ruleset`.
     */
    source?: firebaserules$Source;
  }

  declare interface gapi$client$firebaserules$Source {
    /**
     * `File` set constituting the `Source` bundle.
     */
    files?: gapi$client$firebaserules$File[];
  }

  declare interface gapi$client$firebaserules$SourcePosition {
    /**
     * First column on the source line associated with the source fragment.
     */
    column?: number;

    /**
     * Name of the `File`.
     */
    fileName?: string;

    /**
     * Line number of the source fragment. 1-based.
     */
    line?: number;
  }

  declare interface gapi$client$firebaserules$TestCase {
    /**
     * Test expectation.
     */
    expectation?: string;

    /**
     * Optional function mocks for service-defined functions. If not set, any
     * service defined function is expected to return an error, which may or may
     * not influence the test outcome.
     */
    functionMocks?: gapi$client$firebaserules$FunctionMock[];

    /**
     * Request context.
     *
     * The exact format of the request context is service-dependent. See the
     * appropriate service documentation for information about the supported
     * fields and types on the request. Minimally, all services support the
     * following fields and types:
     *
     * Request field  | Type
     * ---------------|-----------------
     * auth.uid       | `string`
     * auth.token     | `map<string, string>`
     * headers        | `map<string, string>`
     * method         | `string`
     * params         | `map<string, string>`
     * path           | `string`
     * time           | `google.protobuf.Timestamp`
     *
     * If the request value is not well-formed for the service, the request will
     * be rejected as an invalid argument.
     */
    request?: any;

    /**
     * Optional resource value as it appears in persistent storage before the
     * request is fulfilled.
     *
     * The resource type depends on the `request.path` value.
     */
    resource?: any;
  }

  declare interface gapi$client$firebaserules$TestResult {
    /**
     * Debug messages related to test execution issues encountered during
     * evaluation.
     *
     * Debug messages may be related to too many or too few invocations of
     * function mocks or to runtime errors that occur during evaluation.
     *
     * For example: ```Unable to read variable [name: "resource"]```
     */
    debugMessages?: string[];

    /**
     * Position in the `Source` or `Ruleset` where the principle runtime error
     * occurs.
     *
     * Evaluation of an expression may result in an error. Rules are deny by
     * default, so a `DENY` expectation when an error is generated is valid.
     * When there is a `DENY` with an error, the `SourcePosition` is returned.
     *
     * E.g. `error_position { line: 19 column: 37 }`
     */
    errorPosition?: gapi$client$firebaserules$SourcePosition;

    /**
     * The set of function calls made to service-defined methods.
     *
     * Function calls are included in the order in which they are encountered
     * during evaluation, are provided for both mocked and unmocked functions,
     * and included on the response regardless of the test `state`.
     */
    functionCalls?: gapi$client$firebaserules$FunctionCall[];

    /**
     * State of the test.
     */
    state?: string;
  }

  declare interface gapi$client$firebaserules$TestRulesetRequest {
    /**
     * Optional `Source` to be checked for correctness.
     *
     * This field must not be set when the resource name refers to a `Ruleset`.
     */
    source?: gapi$client$firebaserules$Source;

    /**
     * Inline `TestSuite` to run.
     */
    testSuite?: firebaserules$TestSuite;
  }

  declare interface gapi$client$firebaserules$TestRulesetResponse {
    /**
     * Syntactic and semantic `Source` issues of varying severity. Issues of
     * `ERROR` severity will prevent tests from executing.
     */
    issues?: gapi$client$firebaserules$Issue[];

    /**
     * The set of test results given the test cases in the `TestSuite`.
     * The results will appear in the same order as the test cases appear in the
     * `TestSuite`.
     */
    testResults?: gapi$client$firebaserules$TestResult[];
  }

  declare interface gapi$client$firebaserules$TestSuite {
    /**
     * Collection of test cases associated with the `TestSuite`.
     */
    testCases?: gapi$client$firebaserules$TestCase[];
  }

  declare interface gapi$client$firebaserules$ReleasesResource {
    /**
     * Create a `Release`.
     *
     * Release names should reflect the developer's deployment practices. For
     * example, the release name may include the environment name, application
     * name, application version, or any other name meaningful to the developer.
     * Once a `Release` refers to a `Ruleset`, the rules can be enforced by
     * Firebase Rules-enabled services.
     *
     * More than one `Release` may be 'live' concurrently. Consider the following
     * three `Release` names for `projects/foo` and the `Ruleset` to which they
     * refer.
     *
     * Release Name                    | Ruleset Name
     * --------------------------------|-------------
     * projects/foo/releases/prod      | projects/foo/rulesets/uuid123
     * projects/foo/releases/prod/beta | projects/foo/rulesets/uuid123
     * projects/foo/releases/prod/v23  | projects/foo/rulesets/uuid456
     *
     * The table reflects the `Ruleset` rollout in progress. The `prod` and
     * `prod/beta` releases refer to the same `Ruleset`. However, `prod/v23`
     * refers to a new `Ruleset`. The `Ruleset` reference for a `Release` may be
     * updated using the UpdateRelease method.
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
       * Resource name for the project which owns this `Release`.
       *
       * Format: `projects/{project_id}`
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
    }): Request<gapi$client$firebaserules$Release>;

    /**
     * Delete a `Release` by resource name.
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
       * Resource name for the `Release` to delete.
       *
       * Format: `projects/{project_id}/releases/{release_id}`
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
     * Get a `Release` by name.
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
       * Resource name of the `Release`.
       *
       * Format: `projects/{project_id}/releases/{release_id}`
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
    }): Request<gapi$client$firebaserules$Release>;

    /**
     * Get the `Release` executable to use when enforcing rules.
     */
    getExecutable(request: {
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
       * The requested runtime executable version.
       * Defaults to FIREBASE_RULES_EXECUTABLE_V1
       */
      executableVersion?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Resource name of the `Release`.
       *
       * Format: `projects/{project_id}/releases/{release_id}`
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
    }): Request<gapi$client$firebaserules$GetReleaseExecutableResponse>;

    /**
     * List the `Release` values for a project. This list may optionally be
     * filtered by `Release` name, `Ruleset` name, `TestSuite` name, or any
     * combination thereof.
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
       * `Release` filter. The list method supports filters with restrictions on the
       * `Release.name`, `Release.ruleset_name`, and `Release.test_suite_name`.
       *
       * Example 1: A filter of 'name=prod&#42;' might return `Release`s with names
       * within 'projects/foo' prefixed with 'prod':
       *
       * Name                          | Ruleset Name
       * ------------------------------|-------------
       * projects/foo/releases/prod    | projects/foo/rulesets/uuid1234
       * projects/foo/releases/prod/v1 | projects/foo/rulesets/uuid1234
       * projects/foo/releases/prod/v2 | projects/foo/rulesets/uuid8888
       *
       * Example 2: A filter of `name=prod&#42; ruleset_name=uuid1234` would return only
       * `Release` instances for 'projects/foo' with names prefixed with 'prod'
       * referring to the same `Ruleset` name of 'uuid1234':
       *
       * Name                          | Ruleset Name
       * ------------------------------|-------------
       * projects/foo/releases/prod    | projects/foo/rulesets/1234
       * projects/foo/releases/prod/v1 | projects/foo/rulesets/1234
       *
       * In the examples, the filter parameters refer to the search filters are
       * relative to the project. Fully qualified prefixed may also be used. e.g.
       * `test_suite_name=projects/foo/testsuites/uuid1`
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Resource name for the project.
       *
       * Format: `projects/{project_id}`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page size to load. Maximum of 100. Defaults to 10.
       * Note: `page_size` is just a hint and the service may choose to load fewer
       * than `page_size` results due to the size of the output. To traverse all of
       * the releases, the caller should iterate until the `page_token` on the
       * response is empty.
       */
      pageSize?: number,

      /**
       * Next page token for the next batch of `Release` instances.
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
    }): Request<gapi$client$firebaserules$ListReleasesResponse>;

    /**
     * Update a `Release`.
     *
     * Only updates to the `ruleset_name` and `test_suite_name` fields will be
     * honored. `Release` rename is not supported. To create a `Release` use the
     * CreateRelease method.
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
       * Resource name for the `Release`.
       *
       * `Release` names may be structured `app1/prod/v2` or flat `app1_prod_v2`
       * which affords developers a great deal of flexibility in mapping the name
       * to the style that best fits their existing development practices. For
       * example, a name could refer to an environment, an app, a version, or some
       * combination of three.
       *
       * In the table below, for the project name `projects/foo`, the following
       * relative release paths show how flat and structured names might be chosen
       * to match a desired development / deployment strategy.
       *
       * Use Case     | Flat Name           | Structured Name
       * -------------|---------------------|----------------
       * Environments | releases/qa         | releases/qa
       * Apps         | releases/app1_qa    | releases/app1/qa
       * Versions     | releases/app1_v2_qa | releases/app1/v2/qa
       *
       * The delimiter between the release name path elements can be almost anything
       * and it should work equally well with the release name list filter, but in
       * many ways the structured paths provide a clearer picture of the
       * relationship between `Release` instances.
       *
       * Format: `projects/{project_id}/releases/{release_id}`
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
    }): Request<gapi$client$firebaserules$Release>;
  }

  declare interface gapi$client$firebaserules$RulesetsResource {
    /**
     * Create a `Ruleset` from `Source`.
     *
     * The `Ruleset` is given a unique generated name which is returned to the
     * caller. `Source` containing syntactic or semantics errors will result in an
     * error response indicating the first error encountered. For a detailed view
     * of `Source` issues, use TestRuleset.
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
       * Resource name for Project which owns this `Ruleset`.
       *
       * Format: `projects/{project_id}`
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
    }): Request<gapi$client$firebaserules$Ruleset>;

    /**
     * Delete a `Ruleset` by resource name.
     *
     * If the `Ruleset` is referenced by a `Release` the operation will fail.
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
       * Resource name for the ruleset to delete.
       *
       * Format: `projects/{project_id}/rulesets/{ruleset_id}`
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
     * Get a `Ruleset` by name including the full `Source` contents.
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
       * Resource name for the ruleset to get.
       *
       * Format: `projects/{project_id}/rulesets/{ruleset_id}`
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
    }): Request<gapi$client$firebaserules$Ruleset>;

    /**
     * List `Ruleset` metadata only and optionally filter the results by `Ruleset`
     * name.
     *
     * The full `Source` contents of a `Ruleset` may be retrieved with
     * GetRuleset.
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
       * `Ruleset` filter. The list method supports filters with restrictions on
       * `Ruleset.name`.
       *
       * Filters on `Ruleset.create_time` should use the `date` function which
       * parses strings that conform to the RFC 3339 date/time specifications.
       *
       * Example: `create_time > date("2017-01-01") AND name=UUID-&#42;`
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Resource name for the project.
       *
       * Format: `projects/{project_id}`
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Page size to load. Maximum of 100. Defaults to 10.
       * Note: `page_size` is just a hint and the service may choose to load less
       * than `page_size` due to the size of the output. To traverse all of the
       * releases, caller should iterate until the `page_token` is empty.
       */
      pageSize?: number,

      /**
       * Next page token for loading the next batch of `Ruleset` instances.
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
    }): Request<gapi$client$firebaserules$ListRulesetsResponse>;
  }

  declare interface gapi$client$firebaserules$ProjectsResource {
    /**
     * Test `Source` for syntactic and semantic correctness. Issues present, if
     * any, will be returned to the caller with a description, severity, and
     * source location.
     *
     * The test method may be executed with `Source` or a `Ruleset` name.
     * Passing `Source` is useful for unit testing new rules. Passing a `Ruleset`
     * name is useful for regression testing an existing rule.
     *
     * The following is an example of `Source` that permits users to upload images
     * to a bucket bearing their user id and matching the correct metadata:
     *
     * _&#42;Example&#42;_
     *
     * // Users are allowed to subscribe and unsubscribe to the blog.
     * service firebase.storage {
     * match /users/{userId}/images/{imageName} {
     * allow write: if userId == request.auth.uid
     * && (imageName.matches('&#42;.png$')
     * || imageName.matches('&#42;.jpg$'))
     * && resource.mimeType.matches('^image/')
     * }
     * }
     */
    test(request: {
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
       * Tests may either provide `source` or a `Ruleset` resource name.
       *
       * For tests against `source`, the resource name must refer to the project:
       * Format: `projects/{project_id}`
       *
       * For tests against a `Ruleset`, this must be the `Ruleset` resource name:
       * Format: `projects/{project_id}/rulesets/{ruleset_id}`
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
    }): Request<gapi$client$firebaserules$TestRulesetResponse>;
    releases: gapi$client$firebaserules$ReleasesResource;
    rulesets: gapi$client$firebaserules$RulesetsResource;
  }
}
