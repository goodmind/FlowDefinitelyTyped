declare module "gapi.client.serviceuser" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    projects: typeof client$projects,
    services: typeof client$services
  };

  /**
   * Load Google Service User API v1
   */
  declare function client$load(
    name: "serviceuser",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "serviceuser",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$projects: serviceuser$serviceuser$ProjectsResource;

  declare var client$services: serviceuser$serviceuser$ServicesResource;

  declare interface serviceuser$Api {
    /**
     * The methods of this interface, in unspecified order.
     */
    methods?: serviceuser$Method[];

    /**
     * Included interfaces. See Mixin.
     */
    mixins?: serviceuser$Mixin[];

    /**
     * The fully qualified name of this interface, including package name
     * followed by the interface's simple name.
     */
    name?: string;

    /**
     * Any metadata attached to the interface.
     */
    options?: serviceuser$Option[];

    /**
     * Source context for the protocol buffer service represented by this
     * message.
     */
    sourceContext?: serviceuser$SourceContext;

    /**
     * The source syntax of the service.
     */
    syntax?: string;

    /**
     * A version string for this interface. If specified, must have the form
     * `major-version.minor-version`, as in `1.10`. If the minor version is
     * omitted, it defaults to zero. If the entire version field is empty, the
     * major version is derived from the package name, as outlined below. If the
     * field is not empty, the version in the package name will be verified to be
     * consistent with what is provided here.
     *
     * The versioning schema uses [semantic
     * versioning](http://semver.org) where the major version number
     * indicates a breaking change and the minor version an additive,
     * non-breaking change. Both version numbers are signals to users
     * what to expect from different versions, and should be carefully
     * chosen based on the product plan.
     *
     * The major version is also reflected in the package name of the
     * interface, which must end in `v<major-version>`, as in
     * `google.feature.v1`. For major versions 0 and 1, the suffix can
     * be omitted. Zero major versions must only be used for
     * experimental, non-GA interfaces.
     */
    version?: string;
  }

  declare interface serviceuser$AuthProvider {
    /**
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * "https://Service_name/API_name"
     * will be accepted. For example, if no audiences are in the setting,
     * LibraryService API will only accept JWTs with the following audience
     * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
     *
     * Example:
     *
     * audiences: bookstore_android.apps.googleusercontent.com,
     * bookstore_web.apps.googleusercontent.com
     */
    audiences?: string;

    /**
     * Redirect URL if JWT token is required but no present or is expired.
     * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
     */
    authorizationUrl?: string;

    /**
     * The unique identifier of the auth provider. It will be referred to by
     * `AuthRequirement.provider_id`.
     *
     * Example: "bookstore_auth".
     */
    id?: string;

    /**
     * Identifies the principal that issued the JWT. See
     * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
     * Usually a URL or an email address.
     *
     * Example: https://securetoken.google.com
     * Example: 1234567-compute@developer.gserviceaccount.com
     */
    issuer?: string;

    /**
     * URL of the provider's public key set to validate signature of the JWT. See
     * [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
     * Optional if the key set document:
     * - can be retrieved from
     * [OpenID Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html
     * of the issuer.
     * - can be inferred from the email domain of the issuer (e.g. a Google service account).
     *
     * Example: https://www.googleapis.com/oauth2/v1/certs
     */
    jwksUri?: string;
  }

  declare interface serviceuser$AuthRequirement {
    /**
     * NOTE: This will be deprecated soon, once AuthProvider.audiences is
     * implemented and accepted in all the runtime components.
     *
     * The list of JWT
     * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
     * that are allowed to access. A JWT containing any of these audiences will
     * be accepted. When this setting is absent, only JWTs with audience
     * "https://Service_name/API_name"
     * will be accepted. For example, if no audiences are in the setting,
     * LibraryService API will only accept JWTs with the following audience
     * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
     *
     * Example:
     *
     * audiences: bookstore_android.apps.googleusercontent.com,
     * bookstore_web.apps.googleusercontent.com
     */
    audiences?: string;

    /**
     * id from authentication provider.
     *
     * Example:
     *
     * provider_id: bookstore_auth
     */
    providerId?: string;
  }

  declare interface serviceuser$Authentication {
    /**
     * Defines a set of authentication providers that a service supports.
     */
    providers?: serviceuser$AuthProvider[];

    /**
     * A list of authentication rules that apply to individual API methods.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$AuthenticationRule[];
  }

  declare interface serviceuser$AuthenticationRule {
    /**
     * Whether to allow requests without a credential. The credential can be
     * an OAuth token, Google cookies (first-party auth) or EndUserCreds.
     *
     * For requests without credentials, if the service control environment is
     * specified, each incoming request &#42;&#42;must&#42;&#42; be associated with a service
     * consumer. This can be done by passing an API key that belongs to a consumer
     * project.
     */
    allowWithoutCredential?: boolean;

    /**
     * Configuration for custom authentication.
     */
    customAuth?: serviceuser$CustomAuthRequirements;

    /**
     * The requirements for OAuth credentials.
     */
    oauth?: serviceuser$OAuthRequirements;

    /**
     * Requirements for additional authentication providers.
     */
    requirements?: serviceuser$AuthRequirement[];

    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$AuthorizationConfig {
    /**
     * The name of the authorization provider, such as
     * firebaserules.googleapis.com.
     */
    provider?: string;
  }

  declare interface serviceuser$Backend {
    /**
     * A list of API backend rules that apply to individual API methods.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$BackendRule[];
  }

  declare interface serviceuser$BackendRule {
    /**
     * The address of the API backend.
     */
    address?: string;

    /**
     * The number of seconds to wait for a response from a request.  The default
     * deadline for gRPC is infinite (no deadline) and HTTP requests is 5 seconds.
     */
    deadline?: number;

    /**
     * Minimum deadline in seconds needed for this method. Calls having deadline
     * value lower than this will be rejected.
     */
    minDeadline?: number;

    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$Billing {
    /**
     * Billing configurations for sending metrics to the consumer project.
     * There can be multiple consumer destinations per service, each one must have
     * a different monitored resource type. A metric can be used in at most
     * one consumer destination.
     */
    consumerDestinations?: serviceuser$BillingDestination[];
  }

  declare interface serviceuser$BillingDestination {
    /**
     * Names of the metrics to report to this billing destination.
     * Each name must be defined in Service.metrics section.
     */
    metrics?: string[];

    /**
     * The monitored resource type. The type must be defined in
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }

  declare interface serviceuser$Context {
    /**
     * A list of RPC context rules that apply to individual API methods.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$ContextRule[];
  }

  declare interface serviceuser$ContextRule {
    /**
     * A list of full type names of provided contexts.
     */
    provided?: string[];

    /**
     * A list of full type names of requested contexts.
     */
    requested?: string[];

    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$Control {
    /**
     * The service control environment to use. If empty, no control plane
     * feature (like quota and billing) will be enabled.
     */
    environment?: string;
  }

  declare interface serviceuser$CustomAuthRequirements {
    /**
     * A configuration string containing connection information for the
     * authentication provider, typically formatted as a SmartService string
     * (go/smartservice).
     */
    provider?: string;
  }

  declare interface serviceuser$CustomError {
    /**
     * The list of custom error rules that apply to individual API messages.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$CustomErrorRule[];

    /**
     * The list of custom error detail types, e.g. 'google.foo.v1.CustomError'.
     */
    types?: string[];
  }

  declare interface serviceuser$CustomErrorRule {
    /**
     * Mark this message as possible payload in error response.  Otherwise,
     * objects of this type will be filtered when they appear in error payload.
     */
    isErrorType?: boolean;

    /**
     * Selects messages to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$CustomHttpPattern {
    /**
     * The name of this custom HTTP verb.
     */
    kind?: string;

    /**
     * The path matched by this custom verb.
     */
    path?: string;
  }

  declare interface serviceuser$Documentation {
    /**
     * The URL to the root of documentation.
     */
    documentationRootUrl?: string;

    /**
     * Declares a single overview page. For example:
     * <pre><code>documentation:
     * summary: ...
     * overview: &#40;== include overview.md ==&#41;
     * </code></pre>
     * This is a shortcut for the following declaration (using pages style):
     * <pre><code>documentation:
     * summary: ...
     * pages:
     * - name: Overview
     * content: &#40;== include overview.md ==&#41;
     * </code></pre>
     * Note: you cannot specify both `overview` field and `pages` field.
     */
    overview?: string;

    /**
     * The top level pages for the documentation set.
     */
    pages?: serviceuser$Page[];

    /**
     * A list of documentation rules that apply to individual API elements.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$DocumentationRule[];

    /**
     * A short summary of what the service does. Can only be provided by
     * plain text.
     */
    summary?: string;
  }

  declare interface serviceuser$DocumentationRule {
    /**
     * Deprecation description of the selected element(s). It can be provided if an
     * element is marked as `deprecated`.
     */
    deprecationDescription?: string;

    /**
     * Description of the selected API(s).
     */
    description?: string;

    /**
     * The selector is a comma-separated list of patterns. Each pattern is a
     * qualified name of the element which may end in "&#42;", indicating a wildcard.
     * Wildcards are only allowed at the end and for a whole component of the
     * qualified name, i.e. "foo.&#42;" is ok, but not "foo.b&#42;" or "foo.&#42;.bar". To
     * specify a default for all applicable elements, the whole pattern "&#42;"
     * is used.
     */
    selector?: string;
  }

  declare interface serviceuser$Endpoint {
    /**
     * DEPRECATED: This field is no longer supported. Instead of using aliases,
     * please specify multiple google.api.Endpoint for each of the intented
     * alias.
     *
     * Additional names that this endpoint will be hosted on.
     */
    aliases?: string[];

    /**
     * Allowing
     * [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), aka
     * cross-domain traffic, would allow the backends served from this endpoint to
     * receive and respond to HTTP OPTIONS requests. The response will be used by
     * the browser to determine whether the subsequent cross-origin request is
     * allowed to proceed.
     */
    allowCors?: boolean;

    /**
     * The list of APIs served by this endpoint.
     *
     * If no APIs are specified this translates to "all APIs" exported by the
     * service, as defined in the top-level service configuration.
     */
    apis?: string[];

    /**
     * The list of features enabled on this endpoint.
     */
    features?: string[];

    /**
     * The canonical name of this endpoint.
     */
    name?: string;

    /**
     * The specification of an Internet routable address of API frontend that will
     * handle requests to this [API Endpoint](https://cloud.google.com/apis/design/glossary).
     * It should be either a valid IPv4 address or a fully-qualified domain name.
     * For example, "8.8.8.8" or "myservice.appspot.com".
     */
    target?: string;
  }

  declare interface serviceuser$Enum {
    /**
     * Enum value definitions.
     */
    enumvalue?: serviceuser$EnumValue[];

    /**
     * Enum type name.
     */
    name?: string;

    /**
     * Protocol buffer options.
     */
    options?: serviceuser$Option[];

    /**
     * The source context.
     */
    sourceContext?: serviceuser$SourceContext;

    /**
     * The source syntax.
     */
    syntax?: string;
  }

  declare interface serviceuser$EnumValue {
    /**
     * Enum value name.
     */
    name?: string;

    /**
     * Enum value number.
     */
    number?: number;

    /**
     * Protocol buffer options.
     */
    options?: serviceuser$Option[];
  }

  declare interface serviceuser$Experimental {
    /**
     * Authorization configuration.
     */
    authorization?: serviceuser$AuthorizationConfig;
  }

  declare interface serviceuser$Field {
    /**
     * The field cardinality.
     */
    cardinality?: string;

    /**
     * The string value of the default value of this field. Proto2 syntax only.
     */
    defaultValue?: string;

    /**
     * The field JSON name.
     */
    jsonName?: string;

    /**
     * The field type.
     */
    kind?: string;

    /**
     * The field name.
     */
    name?: string;

    /**
     * The field number.
     */
    number?: number;

    /**
     * The index of the field type in `Type.oneofs`, for message or enumeration
     * types. The first type has index 1; zero means the type is not in the list.
     */
    oneofIndex?: number;

    /**
     * The protocol buffer options.
     */
    options?: serviceuser$Option[];

    /**
     * Whether to use alternative packed wire representation.
     */
    packed?: boolean;

    /**
     * The field type URL, without the scheme, for message or enumeration
     * types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
     */
    typeUrl?: string;
  }

  declare interface serviceuser$Http {
    /**
     * When set to true, URL path parmeters will be fully URI-decoded except in
     * cases of single segment matches in reserved expansion, where "%2F" will be
     * left encoded.
     *
     * The default behavior is to not decode RFC 6570 reserved characters in multi
     * segment matches.
     */
    fullyDecodeReservedExpansion?: boolean;

    /**
     * A list of HTTP configuration rules that apply to individual API methods.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$HttpRule[];
  }

  declare interface serviceuser$HttpRule {
    /**
     * Additional HTTP bindings for the selector. Nested bindings must
     * not contain an `additional_bindings` field themselves (that is,
     * the nesting may only be one level deep).
     */
    additionalBindings?: serviceuser$HttpRule[];

    /**
     * The name of the request field whose value is mapped to the HTTP body, or
     * `&#42;` for mapping all fields not captured by the path pattern to the HTTP
     * body. NOTE: the referred field must not be a repeated field and must be
     * present at the top-level of request message type.
     */
    body?: string;

    /**
     * The custom pattern is used for specifying an HTTP method that is not
     * included in the `pattern` field, such as HEAD, or "&#42;" to leave the
     * HTTP method unspecified for this rule. The wild-card rule is useful
     * for services that provide content to Web (HTML) clients.
     */
    custom?: serviceuser$CustomHttpPattern;

    /**
     * Used for deleting a resource.
     */
    delete?: string;

    /**
     * Used for listing and getting information about resources.
     */
    get?: string;

    /**
     * Use this only for Scotty Requests. Do not use this for bytestream methods.
     * For media support, add instead [][google.bytestream.RestByteStream] as an
     * API to your configuration.
     */
    mediaDownload?: serviceuser$MediaDownload;

    /**
     * Use this only for Scotty Requests. Do not use this for media support using
     * Bytestream, add instead
     * [][google.bytestream.RestByteStream] as an API to your
     * configuration for Bytestream methods.
     */
    mediaUpload?: serviceuser$MediaUpload;

    /**
     * Used for updating a resource.
     */
    patch?: string;

    /**
     * Used for creating a resource.
     */
    post?: string;

    /**
     * Used for updating a resource.
     */
    put?: string;

    /**
     * The name of the response field whose value is mapped to the HTTP body of
     * response. Other response fields are ignored. This field is optional. When
     * not set, the response message will be used as HTTP body of response.
     * NOTE: the referred field must be not a repeated field and must be present
     * at the top-level of response message type.
     */
    responseBody?: string;

    /**
     * Selects methods to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$LabelDescriptor {
    /**
     * A human-readable description for the label.
     */
    description?: string;

    /**
     * The label key.
     */
    key?: string;

    /**
     * The type of data that can be assigned to the label.
     */
    valueType?: string;
  }

  declare interface serviceuser$ListEnabledServicesResponse {
    /**
     * Token that can be passed to `ListEnabledServices` to resume a paginated
     * query.
     */
    nextPageToken?: string;

    /**
     * Services enabled for the specified parent.
     */
    client$services?: serviceuser$PublishedService[];
  }

  declare interface serviceuser$LogDescriptor {
    /**
     * A human-readable description of this log. This information appears in
     * the documentation and can contain details.
     */
    description?: string;

    /**
     * The human-readable name for this log. This information appears on
     * the user interface and should be concise.
     */
    displayName?: string;

    /**
     * The set of labels that are available to describe a specific log entry.
     * Runtime requests that contain labels not specified here are
     * considered invalid.
     */
    labels?: serviceuser$LabelDescriptor[];

    /**
     * The name of the log. It must be less than 512 characters long and can
     * include the following characters: upper- and lower-case alphanumeric
     * characters [A-Za-z0-9], and punctuation characters including
     * slash, underscore, hyphen, period [/_-.].
     */
    name?: string;
  }

  declare interface serviceuser$Logging {
    /**
     * Logging configurations for sending logs to the consumer project.
     * There can be multiple consumer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one consumer destination.
     */
    consumerDestinations?: serviceuser$LoggingDestination[];

    /**
     * Logging configurations for sending logs to the producer project.
     * There can be multiple producer destinations, each one must have a
     * different monitored resource type. A log can be used in at most
     * one producer destination.
     */
    producerDestinations?: serviceuser$LoggingDestination[];
  }

  declare interface serviceuser$LoggingDestination {
    /**
     * Names of the logs to be sent to this destination. Each name must
     * be defined in the Service.logs section. If the log name is
     * not a domain scoped name, it will be automatically prefixed with
     * the service name followed by "/".
     */
    logs?: string[];

    /**
     * The monitored resource type. The type must be defined in the
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }

  declare interface serviceuser$MediaDownload {
    /**
     * A boolean that determines whether a notification for the completion of a
     * download should be sent to the backend.
     */
    completeNotification?: boolean;

    /**
     * DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.
     *
     * Specify name of the download service if one is used for download.
     */
    downloadService?: string;

    /**
     * Name of the Scotty dropzone to use for the current API.
     */
    dropzone?: string;

    /**
     * Whether download is enabled.
     */
    enabled?: boolean;

    /**
     * Optional maximum acceptable size for direct download.
     * The size is specified in bytes.
     */
    maxDirectDownloadSize?: string;

    /**
     * A boolean that determines if direct download from ESF should be used for
     * download of this media.
     */
    useDirectDownload?: boolean;
  }

  declare interface serviceuser$MediaUpload {
    /**
     * A boolean that determines whether a notification for the completion of an
     * upload should be sent to the backend. These notifications will not be seen
     * by the client and will not consume quota.
     */
    completeNotification?: boolean;

    /**
     * Name of the Scotty dropzone to use for the current API.
     */
    dropzone?: string;

    /**
     * Whether upload is enabled.
     */
    enabled?: boolean;

    /**
     * Optional maximum acceptable size for an upload.
     * The size is specified in bytes.
     */
    maxSize?: string;

    /**
     * An array of mimetype patterns. Esf will only accept uploads that match one
     * of the given patterns.
     */
    mimeTypes?: string[];

    /**
     * Whether to receive a notification for progress changes of media upload.
     */
    progressNotification?: boolean;

    /**
     * Whether to receive a notification on the start of media upload.
     */
    startNotification?: boolean;

    /**
     * DO NOT USE FIELDS BELOW THIS LINE UNTIL THIS WARNING IS REMOVED.
     *
     * Specify name of the upload service if one is used for upload.
     */
    uploadService?: string;
  }

  declare interface serviceuser$Method {
    /**
     * The simple name of this method.
     */
    name?: string;

    /**
     * Any metadata attached to the method.
     */
    options?: serviceuser$Option[];

    /**
     * If true, the request is streamed.
     */
    requestStreaming?: boolean;

    /**
     * A URL of the input message type.
     */
    requestTypeUrl?: string;

    /**
     * If true, the response is streamed.
     */
    responseStreaming?: boolean;

    /**
     * The URL of the output message type.
     */
    responseTypeUrl?: string;

    /**
     * The source syntax of this method.
     */
    syntax?: string;
  }

  declare interface serviceuser$MetricDescriptor {
    /**
     * A detailed description of the metric, which can be used in documentation.
     */
    description?: string;

    /**
     * A concise name for the metric, which can be displayed in user interfaces.
     * Use sentence case without an ending period, for example "Request count".
     */
    displayName?: string;

    /**
     * The set of labels that can be used to describe a specific
     * instance of this metric type. For example, the
     * `appengine.googleapis.com/http/server/response_latencies` metric
     * type has a label for the HTTP response code, `response_code`, so
     * you can look at latencies for successful responses or just
     * for responses that failed.
     */
    labels?: serviceuser$LabelDescriptor[];

    /**
     * Whether the metric records instantaneous values, changes to a value, etc.
     * Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    metricKind?: string;

    /**
     * The resource name of the metric descriptor. Depending on the
     * implementation, the name typically includes: (1) the parent resource name
     * that defines the scope of the metric type or of its data; and (2) the
     * metric's URL-encoded type, which also appears in the `type` field of this
     * descriptor. For example, following is the resource name of a custom
     * metric within the GCP project `my-project-id`:
     *
     * "projects/my-project-id/metricDescriptors/custom.googleapis.com%2Finvoice%2Fpaid%2Famount"
     */
    name?: string;

    /**
     * The metric type, including its DNS name prefix. The type is not
     * URL-encoded.  All user-defined custom metric types have the DNS name
     * `custom.googleapis.com`.  Metric types should use a natural hierarchical
     * grouping. For example:
     *
     * "custom.googleapis.com/invoice/paid/amount"
     * "appengine.googleapis.com/http/server/response_latencies"
     */
    type?: string;

    /**
     * The unit in which the metric value is reported. It is only applicable
     * if the `value_type` is `INT64`, `DOUBLE`, or `DISTRIBUTION`. The
     * supported units are a subset of [The Unified Code for Units of
     * Measure](http://unitsofmeasure.org/ucum.html) standard:
     *
     * &#42;&#42;Basic units (UNIT)&#42;&#42;
     *
     * &#42; `bit`   bit
     * &#42; `By`    byte
     * &#42; `s`     second
     * &#42; `min`   minute
     * &#42; `h`     hour
     * &#42; `d`     day
     *
     * &#42;&#42;Prefixes (PREFIX)&#42;&#42;
     *
     * &#42; `k`     kilo    (10&#42;&#42;3)
     * &#42; `M`     mega    (10&#42;&#42;6)
     * &#42; `G`     giga    (10&#42;&#42;9)
     * &#42; `T`     tera    (10&#42;&#42;12)
     * &#42; `P`     peta    (10&#42;&#42;15)
     * &#42; `E`     exa     (10&#42;&#42;18)
     * &#42; `Z`     zetta   (10&#42;&#42;21)
     * &#42; `Y`     yotta   (10&#42;&#42;24)
     * &#42; `m`     milli   (10&#42;&#42;-3)
     * &#42; `u`     micro   (10&#42;&#42;-6)
     * &#42; `n`     nano    (10&#42;&#42;-9)
     * &#42; `p`     pico    (10&#42;&#42;-12)
     * &#42; `f`     femto   (10&#42;&#42;-15)
     * &#42; `a`     atto    (10&#42;&#42;-18)
     * &#42; `z`     zepto   (10&#42;&#42;-21)
     * &#42; `y`     yocto   (10&#42;&#42;-24)
     * &#42; `Ki`    kibi    (2&#42;&#42;10)
     * &#42; `Mi`    mebi    (2&#42;&#42;20)
     * &#42; `Gi`    gibi    (2&#42;&#42;30)
     * &#42; `Ti`    tebi    (2&#42;&#42;40)
     *
     * &#42;&#42;Grammar&#42;&#42;
     *
     * The grammar includes the dimensionless unit `1`, such as `1/s`.
     *
     * The grammar also includes these connectors:
     *
     * &#42; `/`    division (as an infix operator, e.g. `1/s`).
     * &#42; `.`    multiplication (as an infix operator, e.g. `GBy.d`)
     *
     * The grammar for a unit is as follows:
     *
     * Expression = Component { "." Component } { "/" Component } ;
     *
     * Component = [ PREFIX ] UNIT [ Annotation ]
     * | Annotation
     * | "1"
     * ;
     *
     * Annotation = "{" NAME "}" ;
     *
     * Notes:
     *
     * &#42; `Annotation` is just a comment if it follows a `UNIT` and is
     * equivalent to `1` if it is used alone. For examples,
     * `{requests}/s == 1/s`, `By{transmitted}/s == By/s`.
     * &#42; `NAME` is a sequence of non-blank printable ASCII characters not
     * containing '{' or '}'.
     */
    unit?: string;

    /**
     * Whether the measurement is an integer, a floating-point number, etc.
     * Some combinations of `metric_kind` and `value_type` might not be supported.
     */
    valueType?: string;
  }

  declare interface serviceuser$MetricRule {
    /**
     * Metrics to update when the selected methods are called, and the associated
     * cost applied to each metric.
     *
     * The key of the map is the metric name, and the values are the amount
     * increased for the metric against which the quota limits are defined.
     * The value must not be negative.
     */
    metricCosts?: Record<string, string>;

    /**
     * Selects the methods to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$Mixin {
    /**
     * The fully qualified name of the interface which is included.
     */
    name?: string;

    /**
     * If non-empty specifies a path under which inherited HTTP paths
     * are rooted.
     */
    root?: string;
  }

  declare interface serviceuser$MonitoredResourceDescriptor {
    /**
     * Optional. A detailed description of the monitored resource type that might
     * be used in documentation.
     */
    description?: string;

    /**
     * Optional. A concise name for the monitored resource type that might be
     * displayed in user interfaces. It should be a Title Cased Noun Phrase,
     * without any article or other determiners. For example,
     * `"Google Cloud SQL Database"`.
     */
    displayName?: string;

    /**
     * Required. A set of labels used to describe instances of this monitored
     * resource type. For example, an individual Google Cloud SQL database is
     * identified by values for the labels `"database_id"` and `"zone"`.
     */
    labels?: serviceuser$LabelDescriptor[];

    /**
     * Optional. The resource name of the monitored resource descriptor:
     * `"projects/{project_id}/monitoredResourceDescriptors/{type}"` where
     * {type} is the value of the `type` field in this object and
     * {project_id} is a project ID that provides API-specific context for
     * accessing the type.  APIs that do not use project information can use the
     * resource name format `"monitoredResourceDescriptors/{type}"`.
     */
    name?: string;

    /**
     * Required. The monitored resource type. For example, the type
     * `"cloudsql_database"` represents databases in Google Cloud SQL.
     * The maximum length of this value is 256 characters.
     */
    type?: string;
  }

  declare interface serviceuser$Monitoring {
    /**
     * Monitoring configurations for sending metrics to the consumer project.
     * There can be multiple consumer destinations, each one must have a
     * different monitored resource type. A metric can be used in at most
     * one consumer destination.
     */
    consumerDestinations?: serviceuser$MonitoringDestination[];

    /**
     * Monitoring configurations for sending metrics to the producer project.
     * There can be multiple producer destinations, each one must have a
     * different monitored resource type. A metric can be used in at most
     * one producer destination.
     */
    producerDestinations?: serviceuser$MonitoringDestination[];
  }

  declare interface serviceuser$MonitoringDestination {
    /**
     * Names of the metrics to report to this monitoring destination.
     * Each name must be defined in Service.metrics section.
     */
    metrics?: string[];

    /**
     * The monitored resource type. The type must be defined in
     * Service.monitored_resources section.
     */
    monitoredResource?: string;
  }

  declare interface serviceuser$OAuthRequirements {
    /**
     * The list of publicly documented OAuth scopes that are allowed access. An
     * OAuth token containing any of these scopes will be accepted.
     *
     * Example:
     *
     * canonical_scopes: https://www.googleapis.com/auth/calendar,
     * https://www.googleapis.com/auth/calendar.read
     */
    canonicalScopes?: string;
  }

  declare interface serviceuser$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: serviceuser$Status;

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

  declare interface serviceuser$OperationMetadata {
    /**
     * Percentage of completion of this operation, ranging from 0 to 100.
     */
    progressPercentage?: number;

    /**
     * The full name of the resources that this operation is directly
     * associated with.
     */
    resourceNames?: string[];

    /**
     * The start time of the operation.
     */
    startTime?: string;

    /**
     * Detailed status information for each step. The order is undetermined.
     */
    steps?: serviceuser$Step[];
  }

  declare interface serviceuser$Option {
    /**
     * The option's name. For protobuf built-in options (options defined in
     * descriptor.proto), this is the short name. For example, `"map_entry"`.
     * For custom options, it should be the fully-qualified name. For example,
     * `"google.api.http"`.
     */
    name?: string;

    /**
     * The option's value packed in an Any message. If the value is a primitive,
     * the corresponding wrapper type defined in google/protobuf/wrappers.proto
     * should be used. If the value is an enum, it should be stored as an int32
     * value using the google.protobuf.Int32Value type.
     */
    value?: Record<string, any>;
  }

  declare interface serviceuser$Page {
    /**
     * The Markdown content of the page. You can use <code>&#40;== include {path} ==&#41;</code>
     * to include content from a Markdown file.
     */
    content?: string;

    /**
     * The name of the page. It will be used as an identity of the page to
     * generate URI of the page, text of the link to this page in navigation,
     * etc. The full page name (start from the root page name to this page
     * concatenated with `.`) can be used as reference to the page in your
     * documentation. For example:
     * <pre><code>pages:
     * - name: Tutorial
     * content: &#40;== include tutorial.md ==&#41;
     * subpages:
     * - name: Java
     * content: &#40;== include tutorial_java.md ==&#41;
     * </code></pre>
     * You can reference `Java` page using Markdown reference link syntax:
     * `Java`.
     */
    name?: string;

    /**
     * Subpages of this page. The order of subpages specified here will be
     * honored in the generated docset.
     */
    subpages?: serviceuser$Page[];
  }

  declare interface serviceuser$PublishedService {
    /**
     * The resource name of the service.
     *
     * A valid name would be:
     * - services/serviceuser.googleapis.com
     */
    name?: string;

    /**
     * The service's published configuration.
     */
    service?: serviceuser$Service;
  }

  declare interface serviceuser$Quota {
    /**
     * List of `QuotaLimit` definitions for the service.
     */
    limits?: serviceuser$QuotaLimit[];

    /**
     * List of `MetricRule` definitions, each one mapping a selected method to one
     * or more metrics.
     */
    metricRules?: serviceuser$MetricRule[];
  }

  declare interface serviceuser$QuotaLimit {
    /**
     * Default number of tokens that can be consumed during the specified
     * duration. This is the number of tokens assigned when a client
     * application developer activates the service for his/her project.
     *
     * Specifying a value of 0 will block all requests. This can be used if you
     * are provisioning quota to selected consumers and blocking others.
     * Similarly, a value of -1 will indicate an unlimited quota. No other
     * negative values are allowed.
     *
     * Used by group-based quotas only.
     */
    defaultLimit?: string;

    /**
     * Optional. User-visible, extended description for this quota limit.
     * Should be used only when more context is needed to understand this limit
     * than provided by the limit's display name (see: `display_name`).
     */
    description?: string;

    /**
     * User-visible display name for this limit.
     * Optional. If not set, the UI will provide a default display name based on
     * the quota configuration. This field can be used to override the default
     * display name generated from the configuration.
     */
    displayName?: string;

    /**
     * Duration of this limit in textual notation. Example: "100s", "24h", "1d".
     * For duration longer than a day, only multiple of days is supported. We
     * support only "100s" and "1d" for now. Additional support will be added in
     * the future. "0" indicates indefinite duration.
     *
     * Used by group-based quotas only.
     */
    duration?: string;

    /**
     * Free tier value displayed in the Developers Console for this limit.
     * The free tier is the number of tokens that will be subtracted from the
     * billed amount when billing is enabled.
     * This field can only be set on a limit with duration "1d", in a billable
     * group; it is invalid on any other limit. If this field is not set, it
     * defaults to 0, indicating that there is no free tier for this service.
     *
     * Used by group-based quotas only.
     */
    freeTier?: string;

    /**
     * Maximum number of tokens that can be consumed during the specified
     * duration. Client application developers can override the default limit up
     * to this maximum. If specified, this value cannot be set to a value less
     * than the default limit. If not specified, it is set to the default limit.
     *
     * To allow clients to apply overrides with no upper bound, set this to -1,
     * indicating unlimited maximum quota.
     *
     * Used by group-based quotas only.
     */
    maxLimit?: string;

    /**
     * The name of the metric this quota limit applies to. The quota limits with
     * the same metric will be checked together during runtime. The metric must be
     * defined within the service config.
     *
     * Used by metric-based quotas only.
     */
    metric?: string;

    /**
     * Name of the quota limit. The name is used to refer to the limit when
     * overriding the default limit on per-consumer basis.
     *
     * For metric-based quota limits, the name must be provided, and it must be
     * unique within the service. The name can only include alphanumeric
     * characters as well as '-'.
     *
     * The maximum length of the limit name is 64 characters.
     *
     * The name of a limit is used as a unique identifier for this limit.
     * Therefore, once a limit has been put into use, its name should be
     * immutable. You can use the display_name field to provide a user-friendly
     * name for the limit. The display name can be evolved over time without
     * affecting the identity of the limit.
     */
    name?: string;

    /**
     * Specify the unit of the quota limit. It uses the same syntax as
     * Metric.unit. The supported unit kinds are determined by the quota
     * backend system.
     *
     * The [Google Service Control](https://cloud.google.com/service-control)
     * supports the following unit components:
     * &#42; One of the time intevals:
     * &#42; "/min"  for quota every minute.
     * &#42; "/d"  for quota every 24 hours, starting 00:00 US Pacific Time.
     * &#42; Otherwise the quota won't be reset by time, such as storage limit.
     * &#42; One and only one of the granted containers:
     * &#42; "/{project}" quota for a project
     *
     * Here are some examples:
     * &#42; "1/min/{project}" for quota per minute per project.
     *
     * Note: the order of unit components is insignificant.
     * The "1" at the beginning is required to follow the metric unit syntax.
     *
     * Used by metric-based quotas only.
     */
    unit?: string;

    /**
     * Tiered limit values, currently only STANDARD is supported.
     */
    values?: Record<string, string>;
  }

  declare interface serviceuser$SearchServicesResponse {
    /**
     * Token that can be passed to `ListAvailableServices` to resume a paginated
     * query.
     */
    nextPageToken?: string;

    /**
     * Services available publicly or available to the authenticated caller.
     */
    client$services?: serviceuser$PublishedService[];
  }

  declare interface serviceuser$Service {
    /**
     * A list of API interfaces exported by this service. Only the `name` field
     * of the google.protobuf.Api needs to be provided by the configuration
     * author, as the remaining fields will be derived from the IDL during the
     * normalization process. It is an error to specify an API interface here
     * which cannot be resolved against the associated IDL files.
     */
    apis?: serviceuser$Api[];

    /**
     * Auth configuration.
     */
    authentication?: serviceuser$Authentication;

    /**
     * API backend configuration.
     */
    backend?: serviceuser$Backend;

    /**
     * Billing configuration.
     */
    billing?: serviceuser$Billing;

    /**
     * The semantic version of the service configuration. The config version
     * affects the interpretation of the service configuration. For example,
     * certain features are enabled by default for certain config versions.
     * The latest config version is `3`.
     */
    configVersion?: number;

    /**
     * Context configuration.
     */
    context?: serviceuser$Context;

    /**
     * Configuration for the service control plane.
     */
    control?: serviceuser$Control;

    /**
     * Custom error configuration.
     */
    customError?: serviceuser$CustomError;

    /**
     * Additional API documentation.
     */
    documentation?: serviceuser$Documentation;

    /**
     * Configuration for network endpoints.  If this is empty, then an endpoint
     * with the same name as the service is automatically generated to service all
     * defined APIs.
     */
    endpoints?: serviceuser$Endpoint[];

    /**
     * A list of all enum types included in this API service.  Enums
     * referenced directly or indirectly by the `apis` are automatically
     * included.  Enums which are not referenced but shall be included
     * should be listed here by name. Example:
     *
     * enums:
     * - name: google.someapi.v1.SomeEnum
     */
    enums?: serviceuser$Enum[];

    /**
     * Experimental configuration.
     */
    experimental?: serviceuser$Experimental;

    /**
     * HTTP configuration.
     */
    http?: serviceuser$Http;

    /**
     * A unique ID for a specific instance of this message, typically assigned
     * by the client for tracking purpose. If empty, the server may choose to
     * generate one instead.
     */
    id?: string;

    /**
     * Logging configuration.
     */
    logging?: serviceuser$Logging;

    /**
     * Defines the logs used by this service.
     */
    logs?: serviceuser$LogDescriptor[];

    /**
     * Defines the metrics used by this service.
     */
    metrics?: serviceuser$MetricDescriptor[];

    /**
     * Defines the monitored resources used by this service. This is required
     * by the Service.monitoring and Service.logging configurations.
     */
    monitoredResources?: serviceuser$MonitoredResourceDescriptor[];

    /**
     * Monitoring configuration.
     */
    monitoring?: serviceuser$Monitoring;

    /**
     * The DNS address at which this service is available,
     * e.g. `calendar.googleapis.com`.
     */
    name?: string;

    /**
     * The Google project that owns this service.
     */
    producerProjectId?: string;

    /**
     * Quota configuration.
     */
    quota?: serviceuser$Quota;

    /**
     * Output only. The source information for this configuration if available.
     */
    sourceInfo?: serviceuser$SourceInfo;

    /**
     * System parameter configuration.
     */
    systemParameters?: serviceuser$SystemParameters;

    /**
     * A list of all proto message types included in this API service.
     * It serves similar purpose as [google.api.Service.types], except that
     * these types are not needed by user-defined APIs. Therefore, they will not
     * show up in the generated discovery doc. This field should only be used
     * to define system APIs in ESF.
     */
    systemTypes?: serviceuser$Type[];

    /**
     * The product title for this service.
     */
    title?: string;

    /**
     * A list of all proto message types included in this API service.
     * Types referenced directly or indirectly by the `apis` are
     * automatically included.  Messages which are not referenced but
     * shall be included, such as types used by the `google.protobuf.Any` type,
     * should be listed here by name. Example:
     *
     * types:
     * - name: google.protobuf.Int32
     */
    types?: serviceuser$Type[];

    /**
     * Configuration controlling usage of this service.
     */
    usage?: serviceuser$Usage;

    /**
     * API visibility configuration.
     */
    visibility?: serviceuser$Visibility;
  }

  declare interface serviceuser$SourceContext {
    /**
     * The path-qualified name of the .proto file that contained the associated
     * protobuf element.  For example: `"google/protobuf/source_context.proto"`.
     */
    fileName?: string;
  }

  declare interface serviceuser$SourceInfo {
    /**
     * All files used during config generation.
     */
    sourceFiles?: Array<Record<string, any>>;
  }

  declare interface serviceuser$Status {
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

  declare interface serviceuser$Step {
    /**
     * The short description of the step.
     */
    description?: string;

    /**
     * The status code.
     */
    status?: string;
  }

  declare interface serviceuser$SystemParameter {
    /**
     * Define the HTTP header name to use for the parameter. It is case
     * insensitive.
     */
    httpHeader?: string;

    /**
     * Define the name of the parameter, such as "api_key" . It is case sensitive.
     */
    name?: string;

    /**
     * Define the URL query parameter name to use for the parameter. It is case
     * sensitive.
     */
    urlQueryParameter?: string;
  }

  declare interface serviceuser$SystemParameterRule {
    /**
     * Define parameters. Multiple names may be defined for a parameter.
     * For a given method call, only one of them should be used. If multiple
     * names are used the behavior is implementation-dependent.
     * If none of the specified names are present the behavior is
     * parameter-dependent.
     */
    parameters?: serviceuser$SystemParameter[];

    /**
     * Selects the methods to which this rule applies. Use '&#42;' to indicate all
     * methods in all APIs.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$SystemParameters {
    /**
     * Define system parameters.
     *
     * The parameters defined here will override the default parameters
     * implemented by the system. If this field is missing from the service
     * config, default system parameters will be used. Default system parameters
     * and names is implementation-dependent.
     *
     * Example: define api key for all methods
     *
     * system_parameters
     * rules:
     * - selector: "&#42;"
     * parameters:
     * - name: api_key
     * url_query_parameter: api_key
     *
     *
     * Example: define 2 api key names for a specific method.
     *
     * system_parameters
     * rules:
     * - selector: "/ListShelves"
     * parameters:
     * - name: api_key
     * http_header: Api-Key1
     * - name: api_key
     * http_header: Api-Key2
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$SystemParameterRule[];
  }

  declare interface serviceuser$Type {
    /**
     * The list of fields.
     */
    fields?: serviceuser$Field[];

    /**
     * The fully qualified message name.
     */
    name?: string;

    /**
     * The list of types appearing in `oneof` definitions in this type.
     */
    oneofs?: string[];

    /**
     * The protocol buffer options.
     */
    options?: serviceuser$Option[];

    /**
     * The source context.
     */
    sourceContext?: serviceuser$SourceContext;

    /**
     * The source syntax.
     */
    syntax?: string;
  }

  declare interface serviceuser$Usage {
    /**
     * The full resource name of a channel used for sending notifications to the
     * service producer.
     *
     * Google Service Management currently only supports
     * [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification
     * channel. To use Google Cloud Pub/Sub as the channel, this must be the name
     * of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format
     * documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel?: string;

    /**
     * Requirements that must be satisfied before a consumer project can use the
     * service. Each requirement is of the form <service.name>/<requirement-id>;
     * for example 'serviceusage.googleapis.com/billing-enabled'.
     */
    requirements?: string[];

    /**
     * A list of usage rules that apply to individual API methods.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$UsageRule[];
  }

  declare interface serviceuser$UsageRule {
    /**
     * True, if the method allows unregistered calls; false otherwise.
     */
    allowUnregisteredCalls?: boolean;

    /**
     * Selects the methods to which this rule applies. Use '&#42;' to indicate all
     * methods in all APIs.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;

    /**
     * True, if the method should skip service control. If so, no control plane
     * feature (like quota and billing) will be enabled.
     */
    skipServiceControl?: boolean;
  }

  declare interface serviceuser$Visibility {
    /**
     * A list of visibility rules that apply to individual API elements.
     *
     * &#42;&#42;NOTE:&#42;&#42; All service configuration rules follow "last one wins" order.
     */
    rules?: serviceuser$VisibilityRule[];
  }

  declare interface serviceuser$VisibilityRule {
    /**
     * A comma-separated list of visibility labels that apply to the `selector`.
     * Any of the listed labels can be used to grant the visibility.
     *
     * If a rule has multiple labels, removing one of the labels but not all of
     * them can break clients.
     *
     * Example:
     *
     * visibility:
     * rules:
     * - selector: google.calendar.Calendar.EnhancedSearch
     * restriction: GOOGLE_INTERNAL, TRUSTED_TESTER
     *
     * Removing GOOGLE_INTERNAL from this restriction will break clients that
     * rely on this method and only had access to it through GOOGLE_INTERNAL.
     */
    restriction?: string;

    /**
     * Selects methods, messages, fields, enums, etc. to which this rule applies.
     *
     * Refer to selector for syntax details.
     */
    selector?: string;
  }

  declare interface serviceuser$ServicesResource {
    /**
     * Disable a service so it can no longer be used with a
     * project. This prevents unintended usage that may cause unexpected billing
     * charges or security leaks.
     *
     * Operation<response: google.protobuf.Empty>
     */
    disable(request: {
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
       * Name of the consumer and the service to disable for that consumer.
       *
       * The Service User implementation accepts the following forms for consumer:
       * - "project:<project_id>"
       *
       * A valid path would be:
       * - /v1/projects/my-project/services/servicemanagement.googleapis.com:disable
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
    }): Request<serviceuser$Operation>;

    /**
     * Enable a service so it can be used with a project.
     * See [Cloud Auth Guide](https://cloud.google.com/docs/authentication) for
     * more information.
     *
     * Operation<response: google.protobuf.Empty>
     */
    enable(request: {
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
       * Name of the consumer and the service to enable for that consumer.
       *
       * A valid path would be:
       * - /v1/projects/my-project/services/servicemanagement.googleapis.com:enable
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
    }): Request<serviceuser$Operation>;

    /**
     * List enabled services for the specified consumer.
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
       * Requested size of the next page of data.
       */
      pageSize?: number,

      /**
       * Token identifying which result to start with; returned by a previous list
       * call.
       */
      pageToken?: string,

      /**
       * List enabled services for the specified parent.
       *
       * An example valid parent would be:
       * - projects/my-project
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
    }): Request<serviceuser$ListEnabledServicesResponse>;

    /**
     * Search available services.
     *
     * When no filter is specified, returns all accessible services. For
     * authenticated users, also returns all services the calling user has
     * "servicemanagement.services.bind" permission for.
     */
    search(request: {
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
       * Requested size of the next page of data.
       */
      pageSize?: number,

      /**
       * Token identifying which result to start with; returned by a previous list
       * call.
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
    }): Request<serviceuser$SearchServicesResponse>;
  }

  declare interface serviceuser$ProjectsResource {
    client$services: serviceuser$ServicesResource;
  }
}
