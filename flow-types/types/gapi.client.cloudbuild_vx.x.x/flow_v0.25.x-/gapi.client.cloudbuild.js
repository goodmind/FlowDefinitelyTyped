declare module "gapi.client.cloudbuild" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    operations: typeof gapi$client$operations,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud Container Builder API v1
   */
  declare function gapi$client$load(
    name: "cloudbuild",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudbuild",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$operations: cloudbuild$OperationsResource;

  declare var gapi$client$projects: cloudbuild$ProjectsResource;

  declare interface gapi$client$cloudbuild$Build {
    /**
     * The ID of the BuildTrigger that triggered this build, if it was
     * triggered automatically.
     * @OutputOnly
     */
    buildTriggerId?: string;

    /**
     * Time at which the request to create the build was received.
     * @OutputOnly
     */
    createTime?: string;

    /**
     * Time at which execution of the build was finished.
     *
     * The difference between finish_time and start_time is the duration of the
     * build's execution.
     * @OutputOnly
     */
    finishTime?: string;

    /**
     * Unique identifier of the build.
     * @OutputOnly
     */
    id?: string;

    /**
     * A list of images to be pushed upon the successful completion of all build
     * steps.
     *
     * The images will be pushed using the builder service account's credentials.
     *
     * The digests of the pushed images will be stored in the Build resource's
     * results field.
     *
     * If any of the images fail to be pushed, the build is marked FAILURE.
     */
    images?: string[];

    /**
     * URL to logs for this build in Google Cloud Logging.
     * @OutputOnly
     */
    logUrl?: string;

    /**
     * Google Cloud Storage bucket where logs should be written (see
     * [Bucket Name
     * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     * Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
     */
    logsBucket?: string;

    /**
     * Special options for this build.
     */
    options?: cloudbuild$BuildOptions;

    /**
     * ID of the project.
     * @OutputOnly .
     */
    projectId?: string;

    /**
     * Results of the build.
     * @OutputOnly
     */
    results?: cloudbuild$Results;

    /**
     * Secrets to decrypt using Cloud KMS.
     */
    secrets?: cloudbuild$Secret[];

    /**
     * Describes where to find the source files to build.
     */
    source?: cloudbuild$Source;

    /**
     * A permanent fixed identifier for source.
     * @OutputOnly
     */
    sourceProvenance?: cloudbuild$SourceProvenance;

    /**
     * Time at which execution of the build was started.
     * @OutputOnly
     */
    startTime?: string;

    /**
     * Status of the build.
     * @OutputOnly
     */
    status?: string;

    /**
     * Customer-readable message about the current status.
     * @OutputOnly
     */
    statusDetail?: string;

    /**
     * Describes the operations to be performed on the workspace.
     */
    steps?: cloudbuild$BuildStep[];

    /**
     * Substitutions data for Build resource.
     */
    substitutions?: Record<string, string>;

    /**
     * Tags for annotation of a Build. These are not docker tags.
     */
    tags?: string[];

    /**
     * Amount of time that this build should be allowed to run, to second
     * granularity. If this amount of time elapses, work on the build will cease
     * and the build status will be TIMEOUT.
     *
     * Default time is ten minutes.
     */
    timeout?: string;
  }

  declare interface gapi$client$cloudbuild$BuildOperationMetadata {
    /**
     * The build that the operation is tracking.
     */
    build?: gapi$client$cloudbuild$Build;
  }

  declare interface gapi$client$cloudbuild$BuildOptions {
    /**
     * Requested verifiability options.
     */
    requestedVerifyOption?: string;

    /**
     * Requested hash for SourceProvenance.
     */
    sourceProvenanceHash?: string[];

    /**
     * SubstitutionOption to allow unmatch substitutions.
     */
    substitutionOption?: string;
  }

  declare interface gapi$client$cloudbuild$BuildStep {
    /**
     * A list of arguments that will be presented to the step when it is started.
     *
     * If the image used to run the step's container has an entrypoint, these args
     * will be used as arguments to that entrypoint. If the image does not define
     * an entrypoint, the first element in args will be used as the entrypoint,
     * and the remainder will be used as arguments.
     */
    args?: string[];

    /**
     * Working directory (relative to project source root) to use when running
     * this operation's container.
     */
    dir?: string;

    /**
     * Optional entrypoint to be used instead of the build step image's default
     * If unset, the image's default will be used.
     */
    entrypoint?: string;

    /**
     * A list of environment variable definitions to be used when running a step.
     *
     * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
     * being given the value "VALUE".
     */
    env?: string[];

    /**
     * Optional unique identifier for this build step, used in wait_for to
     * reference this build step as a dependency.
     */
    id?: string;

    /**
     * The name of the container image that will run this particular build step.
     *
     * If the image is already available in the host's Docker daemon's cache, it
     * will be run directly. If not, the host will attempt to pull the image
     * first, using the builder service account's credentials if necessary.
     *
     * The Docker daemon's cache will already have the latest versions of all of
     * the officially supported build steps
     * ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
     * The Docker daemon will also have cached many of the layers for some popular
     * images, like "ubuntu", "debian", but they will be refreshed at the time you
     * attempt to use them.
     *
     * If you built an image in a previous build step, it will be stored in the
     * host's Docker daemon's cache and is available to use as the name for a
     * later build step.
     */
    name?: string;

    /**
     * A list of environment variables which are encrypted using a Cloud KMS
     * crypto key. These values must be specified in the build's secrets.
     */
    secretEnv?: string[];

    /**
     * List of volumes to mount into the build step.
     *
     * Each volume will be created as an empty volume prior to execution of the
     * build step. Upon completion of the build, volumes and their contents will
     * be discarded.
     *
     * Using a named volume in only one step is not valid as it is indicative
     * of a mis-configured build request.
     */
    volumes?: cloudbuild$Volume[];

    /**
     * The ID(s) of the step(s) that this build step depends on.
     * This build step will not start until all the build steps in wait_for
     * have completed successfully. If wait_for is empty, this build step will
     * start when all previous build steps in the Build.Steps list have completed
     * successfully.
     */
    waitFor?: string[];
  }

  declare interface gapi$client$cloudbuild$BuildTrigger {
    /**
     * Contents of the build template.
     */
    build?: gapi$client$cloudbuild$Build;

    /**
     * Time when the trigger was created.
     * @OutputOnly
     */
    createTime?: string;

    /**
     * Human-readable description of this trigger.
     */
    description?: string;

    /**
     * If true, the trigger will never result in a build.
     */
    disabled?: boolean;

    /**
     * Path, from the source root, to a file whose contents is used for the
     * template.
     */
    filename?: string;

    /**
     * Unique identifier of the trigger.
     * @OutputOnly
     */
    id?: string;

    /**
     * Substitutions data for Build resource.
     */
    substitutions?: Record<string, string>;

    /**
     * Template describing the types of source changes to trigger a build.
     *
     * Branch and tag names in trigger templates are interpreted as regular
     * expressions. Any branch or tag change that matches that regular expression
     * will trigger a build.
     */
    triggerTemplate?: cloudbuild$RepoSource;
  }

  declare interface gapi$client$cloudbuild$BuiltImage {
    /**
     * Docker Registry 2.0 digest.
     */
    digest?: string;

    /**
     * Name used to push the container image to Google Container Registry, as
     * presented to `docker push`.
     */
    name?: string;
  }

  declare interface gapi$client$cloudbuild$FileHashes {
    /**
     * Collection of file hashes.
     */
    fileHash?: cloudbuild$Hash[];
  }

  declare interface gapi$client$cloudbuild$Hash {
    /**
     * The type of hash that was performed.
     */
    type?: string;

    /**
     * The hash value.
     */
    value?: string;
  }

  declare interface gapi$client$cloudbuild$ListBuildTriggersResponse {
    /**
     * BuildTriggers for the project, sorted by create_time descending.
     */
    triggers?: gapi$client$cloudbuild$BuildTrigger[];
  }

  declare interface gapi$client$cloudbuild$ListBuildsResponse {
    /**
     * Builds will be sorted by create_time, descending.
     */
    builds?: gapi$client$cloudbuild$Build[];

    /**
     * Token to receive the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudbuild$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;

    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: cloudbuild$Operation[];
  }

  declare interface gapi$client$cloudbuild$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: cloudbuild$Status;

    /**
     * Service-specific metadata associated with the operation.  It typically
     * contains progress information and common metadata such as create time.
     * Some services might not provide such metadata.  Any method that returns a
     * long-running operation should document the metadata type, if any.
     */
    metadata?: Record<string, any>;

    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;

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
    response?: Record<string, any>;
  }

  declare interface gapi$client$cloudbuild$RepoSource {
    /**
     * Name of the branch to build.
     */
    branchName?: string;

    /**
     * Explicit commit SHA to build.
     */
    commitSha?: string;

    /**
     * ID of the project that owns the repo. If omitted, the project ID requesting
     * the build is assumed.
     */
    projectId?: string;

    /**
     * Name of the repo. If omitted, the name "default" is assumed.
     */
    repoName?: string;

    /**
     * Name of the tag to build.
     */
    tagName?: string;
  }

  declare interface gapi$client$cloudbuild$Results {
    /**
     * List of build step digests, in order corresponding to build step indices.
     */
    buildStepImages?: string[];

    /**
     * Images that were built as a part of the build.
     */
    images?: gapi$client$cloudbuild$BuiltImage[];
  }

  declare interface gapi$client$cloudbuild$Secret {
    /**
     * Cloud KMS key name to use to decrypt these envs.
     */
    kmsKeyName?: string;

    /**
     * Map of environment variable name to its encrypted value.
     *
     * Secret environment variables must be unique across all of a build's
     * secrets, and must be used by at least one build step. Values can be at most
     * 1 KB in size. There can be at most ten secret values across all of a
     * build's secrets.
     */
    secretEnv?: Record<string, string>;
  }

  declare interface gapi$client$cloudbuild$Source {
    /**
     * If provided, get source from this location in a Cloud Repo.
     */
    repoSource?: gapi$client$cloudbuild$RepoSource;

    /**
     * If provided, get the source from this location in Google Cloud Storage.
     */
    storageSource?: cloudbuild$StorageSource;
  }

  declare interface gapi$client$cloudbuild$SourceProvenance {
    /**
     * Hash(es) of the build source, which can be used to verify that the original
     * source integrity was maintained in the build. Note that FileHashes will
     * only be populated if BuildOptions has requested a SourceProvenanceHash.
     *
     * The keys to this map are file paths used as build source and the values
     * contain the hash values for those files.
     *
     * If the build source came in a single package such as a gzipped tarfile
     * (.tar.gz), the FileHash will be for the single path to that file.
     * @OutputOnly
     */
    fileHashes?: Record<string, gapi$client$cloudbuild$FileHashes>;

    /**
     * A copy of the build's source.repo_source, if exists, with any
     * revisions resolved.
     */
    resolvedRepoSource?: gapi$client$cloudbuild$RepoSource;

    /**
     * A copy of the build's source.storage_source, if exists, with any
     * generations resolved.
     */
    resolvedStorageSource?: cloudbuild$StorageSource;
  }

  declare interface gapi$client$cloudbuild$Status {
    /**
     * The status code, which should be an enum value of google.rpc.Code.
     */
    code?: number;

    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: Array<Record<string, any>>;

    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * google.rpc.Status.details field, or localized by the client.
     */
    message?: string;
  }

  declare interface gapi$client$cloudbuild$StorageSource {
    /**
     * Google Cloud Storage bucket containing source (see
     * [Bucket Name
     * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
     */
    bucket?: string;

    /**
     * Google Cloud Storage generation for the object. If the generation is
     * omitted, the latest generation will be used.
     */
    generation?: string;

    /**
     * Google Cloud Storage object containing source.
     *
     * This object must be a gzipped archive file (.tar.gz) containing source to
     * build.
     */
    object?: string;
  }

  declare interface gapi$client$cloudbuild$Volume {
    /**
     * Name of the volume to mount.
     *
     * Volume names must be unique per build step and must be valid names for
     * Docker volumes. Each named volume must be used by at least two build steps.
     */
    name?: string;

    /**
     * Path at which to mount the volume.
     *
     * Paths must be absolute and cannot conflict with other volume paths on the
     * same build step or with certain reserved volume paths.
     */
    path?: string;
  }

  declare interface gapi$client$cloudbuild$OperationsResource {
    /**
     * Starts asynchronous cancellation on a long-running operation.  The server
     * makes a best effort to cancel the operation, but success is not
     * guaranteed.  If the server doesn't support this method, it returns
     * `google.rpc.Code.UNIMPLEMENTED`.  Clients can use
     * Operations.GetOperation or
     * other methods to check whether the cancellation succeeded or whether the
     * operation completed despite cancellation. On successful cancellation,
     * the operation is not deleted; instead, it becomes an operation with
     * an Operation.error value with a google.rpc.Status.code of 1,
     * corresponding to `Code.CANCELLED`.
     */
    cancel(request: {
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
       * The name of the operation resource to be cancelled.
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
     * Gets the latest state of a long-running operation.  Clients can use this
     * method to poll the operation result at intervals as recommended by the API
     * service.
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
    }): Request<gapi$client$cloudbuild$Operation>;

    /**
     * Lists operations that match the specified filter in the request. If the
     * server doesn't support this method, it returns `UNIMPLEMENTED`.
     *
     * NOTE: the `name` binding allows API services to override the binding
     * to use different resource name schemes, such as `users/&#42;/operations`. To
     * override the binding, API services can add a binding such as
     * `"/v1/{name=users/&#42;}/operations"` to their service configuration.
     * For backwards compatibility, the default name includes the operations
     * collection id, however overriding users must ensure the name binding
     * is the parent resource, without the operations collection id.
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
       * The name of the operation's parent resource.
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
    }): Request<gapi$client$cloudbuild$ListOperationsResponse>;
  }

  declare interface gapi$client$cloudbuild$BuildsResource {
    /**
     * Cancels a requested build in progress.
     */
    cancel(request: {
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
       * ID of the build.
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
       * ID of the project.
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
    }): Request<gapi$client$cloudbuild$Build>;

    /**
     * Starts a build with the specified configuration.
     *
     * The long-running Operation returned by this method will include the ID of
     * the build, which can be passed to GetBuild to determine its status (e.g.,
     * success or failure).
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project.
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
    }): Request<gapi$client$cloudbuild$Operation>;

    /**
     * Returns information about a previously requested build.
     *
     * The Build that is returned includes its status (e.g., success or failure,
     * or in-progress), and timing information.
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
       * ID of the build.
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
       * ID of the project.
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
    }): Request<gapi$client$cloudbuild$Build>;

    /**
     * Lists previously requested builds.
     *
     * Previously requested builds may still be in-progress, or may have finished
     * successfully or unsuccessfully.
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
       * The raw filter text to constrain the results.
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
       * Number of results to return in the list.
       */
      pageSize?: number,

      /**
       * Token to provide to skip to a particular spot in the list.
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
       * ID of the project.
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
    }): Request<gapi$client$cloudbuild$ListBuildsResponse>;
  }

  declare interface gapi$client$cloudbuild$TriggersResource {
    /**
     * Creates a new BuildTrigger.
     *
     * This API is experimental.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project for which to configure automatic builds.
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
    }): Request<gapi$client$cloudbuild$BuildTrigger>;

    /**
     * Deletes an BuildTrigger by its project ID and trigger ID.
     *
     * This API is experimental.
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
       * ID of the project that owns the trigger.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * ID of the BuildTrigger to delete.
       */
      triggerId: string,

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
     * Gets information about a BuildTrigger.
     *
     * This API is experimental.
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
       * ID of the project that owns the trigger.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * ID of the BuildTrigger to get.
       */
      triggerId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudbuild$BuildTrigger>;

    /**
     * Lists existing BuildTrigger.
     *
     * This API is experimental.
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
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * ID of the project for which to list BuildTriggers.
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
    }): Request<gapi$client$cloudbuild$ListBuildTriggersResponse>;

    /**
     * Updates an BuildTrigger by its project ID and trigger ID.
     *
     * This API is experimental.
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
       * ID of the project that owns the trigger.
       */
      projectId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * ID of the BuildTrigger to update.
       */
      triggerId: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudbuild$BuildTrigger>;
  }

  declare interface gapi$client$cloudbuild$ProjectsResource {
    builds: gapi$client$cloudbuild$BuildsResource;
    triggers: gapi$client$cloudbuild$TriggersResource;
  }
}
