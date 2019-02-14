declare module "gapi.client.cloudtrace" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Stackdriver Trace API v2
   */
  declare function gapi$client$load(
    name: "cloudtrace",
    version: "v2"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudtrace",
    version: "v2",
    callback: () => any
  ): void;

  declare var gapi$client$projects: cloudtrace$ProjectsResource;

  declare interface gapi$client$cloudtrace$Annotation {
    /**
     * A set of attributes on the annotation. There is a limit of 4 attributes
     * per Annotation.
     */
    attributes?: cloudtrace$Attributes;

    /**
     * A user-supplied message describing the event. The maximum length for
     * the description is 256 bytes.
     */
    description?: cloudtrace$TruncatableString;
  }

  declare interface gapi$client$cloudtrace$AttributeValue {
    /**
     * A Boolean value represented by `true` or `false`.
     */
    boolValue?: boolean;

    /**
     * A 64-bit signed integer.
     */
    intValue?: string;

    /**
     * A string up to 256 bytes long.
     */
    stringValue?: cloudtrace$TruncatableString;
  }

  declare interface gapi$client$cloudtrace$Attributes {
    /**
     * The set of attributes. Each attribute's key can be up to 128 bytes
     * long. The value can be a string up to 256 bytes, an integer, or the
     * Boolean values `true` and `false`. For example:
     *
     * "/instance_id": "my-instance"
     * "/http/user_agent": ""
     * "/http/request_bytes": 300
     * "abc.com/myattribute": true
     */
    attributeMap?: Record<string, gapi$client$cloudtrace$AttributeValue>;

    /**
     * The number of attributes that were discarded. Attributes can be discarded
     * because their keys are too long or because there are too many attributes.
     * If this value is 0 then all attributes are valid.
     */
    droppedAttributesCount?: number;
  }

  declare interface gapi$client$cloudtrace$BatchWriteSpansRequest {
    /**
     * A collection of spans.
     */
    spans?: cloudtrace$Span[];
  }

  declare interface gapi$client$cloudtrace$Link {
    /**
     * A set of attributes on the link. There is a limit of 32 attributes per
     * link.
     */
    attributes?: gapi$client$cloudtrace$Attributes;

    /**
     * `SPAN_ID` identifies a span within a trace.
     */
    spanId?: string;

    /**
     * `TRACE_ID` identifies a trace within a project.
     */
    traceId?: string;

    /**
     * The relationship of the current span relative to the linked span.
     */
    type?: string;
  }

  declare interface gapi$client$cloudtrace$Links {
    /**
     * The number of dropped links after the maximum size was enforced. If
     * this value is 0, then no links were dropped.
     */
    droppedLinksCount?: number;

    /**
     * A collection of links.
     */
    link?: gapi$client$cloudtrace$Link[];
  }

  declare interface gapi$client$cloudtrace$Module {
    /**
     * A unique identifier for the module, usually a hash of its
     * contents (up to 128 bytes).
     */
    buildId?: cloudtrace$TruncatableString;

    /**
     * For example: main binary, kernel modules, and dynamic libraries
     * such as libc.so, sharedlib.so (up to 256 bytes).
     */
    module?: cloudtrace$TruncatableString;
  }

  declare interface gapi$client$cloudtrace$NetworkEvent {
    /**
     * The number of compressed bytes sent or received.
     */
    compressedMessageSize?: string;

    /**
     * An identifier for the message, which must be unique in this span.
     */
    messageId?: string;

    /**
     * For sent messages, this is the time at which the first bit was sent.
     * For received messages, this is the time at which the last bit was
     * received.
     */
    time?: string;

    /**
     * Type of NetworkEvent. Indicates whether the RPC message was sent or
     * received.
     */
    type?: string;

    /**
     * The number of uncompressed bytes sent or received.
     */
    uncompressedMessageSize?: string;
  }

  declare interface gapi$client$cloudtrace$Span {
    /**
     * A set of attributes on the span. There is a limit of 32 attributes per
     * span.
     */
    attributes?: gapi$client$cloudtrace$Attributes;

    /**
     * An optional number of child spans that were generated while this span
     * was active. If set, allows implementation to detect missing child spans.
     */
    childSpanCount?: number;

    /**
     * A description of the span's operation (up to 128 bytes).
     * Stackdriver Trace displays the description in the
     * {% dynamic print site_values.console_name %}.
     * For example, the display name can be a qualified method name or a file name
     * and a line number where the operation is called. A best practice is to use
     * the same display name within an application and at the same call point.
     * This makes it easier to correlate spans in different traces.
     */
    displayName?: cloudtrace$TruncatableString;

    /**
     * The end time of the span. On the client side, this is the time kept by
     * the local machine where the span execution ends. On the server side, this
     * is the time when the server application handler stops running.
     */
    endTime?: string;

    /**
     * A maximum of 128 links are allowed per Span.
     */
    links?: gapi$client$cloudtrace$Links;

    /**
     * The resource name of the span in the following format:
     *
     * projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project.
     * [SPAN_ID] is a unique identifier for a span within a trace,
     * assigned when the span is created.
     */
    name?: string;

    /**
     * The [SPAN_ID] of this span's parent span. If this is a root span,
     * then this field must be empty.
     */
    parentSpanId?: string;

    /**
     * A highly recommended but not required flag that identifies when a trace
     * crosses a process boundary. True when the parent_span belongs to the
     * same process as the current span.
     */
    sameProcessAsParentSpan?: boolean;

    /**
     * The [SPAN_ID] portion of the span's resource name.
     */
    spanId?: string;

    /**
     * Stack trace captured at the start of the span.
     */
    stackTrace?: cloudtrace$StackTrace;

    /**
     * The start time of the span. On the client side, this is the time kept by
     * the local machine where the span execution starts. On the server side, this
     * is the time when the server's application handler starts running.
     */
    startTime?: string;

    /**
     * An optional final status for this span.
     */
    status?: cloudtrace$Status;

    /**
     * The included time events. There can be up to 32 annotations and 128 network
     * events per span.
     */
    timeEvents?: cloudtrace$TimeEvents;
  }

  declare interface gapi$client$cloudtrace$StackFrame {
    /**
     * The column number where the function call appears, if available.
     * This is important in JavaScript because of its anonymous functions.
     */
    columnNumber?: string;

    /**
     * The name of the source file where the function call appears (up to 256
     * bytes).
     */
    fileName?: cloudtrace$TruncatableString;

    /**
     * The fully-qualified name that uniquely identifies the function or
     * method that is active in this frame (up to 1024 bytes).
     */
    functionName?: cloudtrace$TruncatableString;

    /**
     * The line number in `file_name` where the function call appears.
     */
    lineNumber?: string;

    /**
     * The binary module from where the code was loaded.
     */
    loadModule?: gapi$client$cloudtrace$Module;

    /**
     * An un-mangled function name, if `function_name` is
     * [mangled](http://www.avabodh.com/cxxin/namemangling.html). The name can
     * be fully-qualified (up to 1024 bytes).
     */
    originalFunctionName?: cloudtrace$TruncatableString;

    /**
     * The version of the deployed source code (up to 128 bytes).
     */
    sourceVersion?: cloudtrace$TruncatableString;
  }

  declare interface gapi$client$cloudtrace$StackFrames {
    /**
     * The number of stack frames that were dropped because there
     * were too many stack frames.
     * If this value is 0, then no stack frames were dropped.
     */
    droppedFramesCount?: number;

    /**
     * Stack frames in this call stack.
     */
    frame?: gapi$client$cloudtrace$StackFrame[];
  }

  declare interface gapi$client$cloudtrace$StackTrace {
    /**
     * Stack frames in this stack trace. A maximum of 128 frames are allowed.
     */
    stackFrames?: gapi$client$cloudtrace$StackFrames;

    /**
     * The hash ID is used to conserve network bandwidth for duplicate
     * stack traces within a single trace.
     *
     * Often multiple spans will have identical stack traces.
     * The first occurrence of a stack trace should contain both the
     * `stackFrame` content and a value in `stackTraceHashId`.
     *
     * Subsequent spans within the same request can refer
     * to that stack trace by only setting `stackTraceHashId`.
     */
    stackTraceHashId?: string;
  }

  declare interface gapi$client$cloudtrace$Status {
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

  declare interface gapi$client$cloudtrace$TimeEvent {
    /**
     * Text annotation with a set of attributes.
     */
    annotation?: gapi$client$cloudtrace$Annotation;

    /**
     * An event describing an RPC message sent/received on the network.
     */
    networkEvent?: gapi$client$cloudtrace$NetworkEvent;

    /**
     * The timestamp indicating the time the event occurred.
     */
    time?: string;
  }

  declare interface gapi$client$cloudtrace$TimeEvents {
    /**
     * The number of dropped annotations in all the included time events.
     * If the value is 0, then no annotations were dropped.
     */
    droppedAnnotationsCount?: number;

    /**
     * The number of dropped network events in all the included time events.
     * If the value is 0, then no network events were dropped.
     */
    droppedNetworkEventsCount?: number;

    /**
     * A collection of `TimeEvent`s.
     */
    timeEvent?: gapi$client$cloudtrace$TimeEvent[];
  }

  declare interface gapi$client$cloudtrace$TruncatableString {
    /**
     * The number of bytes removed from the original string. If this
     * value is 0, then the string was not shortened.
     */
    truncatedByteCount?: number;

    /**
     * The shortened string. For example, if the original string was 500
     * bytes long and the limit of the string was 128 bytes, then this
     * value contains the first 128 bytes of the 500-byte string. Note that
     * truncation always happens on the character boundary, to ensure that
     * truncated string is still valid UTF8. In case of multi-byte characters,
     * size of truncated string can be less than truncation limit.
     */
    value?: string;
  }

  declare interface gapi$client$cloudtrace$SpansResource {
    /**
     * Creates a new Span.
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
       * The resource name of the span in the following format:
       *
       * projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project.
       * [SPAN_ID] is a unique identifier for a span within a trace,
       * assigned when the span is created.
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
    }): Request<gapi$client$cloudtrace$Span>;
  }

  declare interface gapi$client$cloudtrace$TracesResource {
    /**
     * Sends new spans to Stackdriver Trace or updates existing traces. If the
     * name of a trace that you send matches that of an existing trace, new spans
     * are added to the existing trace. Attempt to update existing spans results
     * undefined behavior. If the name does not match, a new trace is created
     * with given set of spans.
     */
    batchWrite(request: {
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
       * Required. Name of the project where the spans belong. The format is
       * `projects/PROJECT_ID`.
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
    spans: gapi$client$cloudtrace$SpansResource;
  }

  declare interface gapi$client$cloudtrace$ProjectsResource {
    traces: gapi$client$cloudtrace$TracesResource;
  }
}
