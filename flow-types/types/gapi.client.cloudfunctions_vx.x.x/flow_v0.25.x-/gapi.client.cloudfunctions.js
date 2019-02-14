declare module "gapi.client.cloudfunctions" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    operations: typeof gapi$client$operations,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud Functions API v1
   */
  declare function gapi$client$load(
    name: "cloudfunctions",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudfunctions",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$operations: cloudfunctions$OperationsResource;

  declare var gapi$client$projects: cloudfunctions$ProjectsResource;

  declare interface gapi$client$cloudfunctions$ListLocationsResponse {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: cloudfunctions$Location[];

    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudfunctions$ListOperationsResponse {
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;

    /**
     * A list of operations that matches the specified filter in the request.
     */
    operations?: cloudfunctions$Operation[];
  }

  declare interface gapi$client$cloudfunctions$Location {
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

  declare interface gapi$client$cloudfunctions$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: cloudfunctions$Status;

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

  declare interface gapi$client$cloudfunctions$OperationMetadataV1Beta2 {
    /**
     * The original request that started the operation.
     */
    request?: Record<string, any>;

    /**
     * Target of the operation - for example
     * projects/project-1/locations/region-1/functions/function-1
     */
    target?: string;

    /**
     * Type of operation.
     */
    type?: string;

    /**
     * Version id of the function created or updated by an API call.
     * This field is only pupulated for Create and Update operations.
     */
    versionId?: string;
  }

  declare interface gapi$client$cloudfunctions$Status {
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

  declare interface gapi$client$cloudfunctions$OperationsResource {
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
    }): Request<gapi$client$cloudfunctions$Operation>;

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
      name?: string,

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
    }): Request<gapi$client$cloudfunctions$ListOperationsResponse>;
  }

  declare interface gapi$client$cloudfunctions$LocationsResource {
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
    }): Request<gapi$client$cloudfunctions$ListLocationsResponse>;
  }

  declare interface gapi$client$cloudfunctions$ProjectsResource {
    locations: gapi$client$cloudfunctions$LocationsResource;
  }
}
