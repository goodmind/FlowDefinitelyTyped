declare module "gapi.client.videointelligence" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    videos: typeof client$videos
  };

  /**
   * Load Cloud Video Intelligence API v1beta1
   */
  declare function client$load(
    name: "videointelligence",
    version: "v1beta1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "videointelligence",
    version: "v1beta1",
    callback: () => any
  ): void;

  declare var client$videos: videointelligence$videointelligence$VideosResource;

  declare interface videointelligence$GoogleCloudVideointelligenceV1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: videointelligence$GoogleCloudVideointelligenceV1_VideoAnnotationProgress[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: videointelligence$GoogleCloudVideointelligenceV1_VideoAnnotationResults[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_LabelAnnotation {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;

    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;

    /**
     * Where the label was detected and with what confidence.
     */
    locations?: videointelligence$GoogleCloudVideointelligenceV1_LabelLocation[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_LabelLocation {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;

    /**
     * Label level.
     */
    level?: string;

    /**
     * Video segment. Unset for video-level labels.
     * Set to a frame timestamp for frame-level labels.
     * Otherwise, corresponds to one of `AnnotateSpec.segments`
     * (if specified) or to shot boundaries (if requested).
     */
    segment?: videointelligence$GoogleCloudVideointelligenceV1_VideoSegment;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_SafeSearchAnnotation {
    /**
     * Likelihood of adult content.
     */
    adult?: string;

    /**
     * Time-offset, relative to the beginning of the video,
     * corresponding to the video frame for this annotation.
     */
    time?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_VideoAnnotationProgress {
    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Approximate percentage processed thus far.
     * Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number;

    /**
     * Time when the request was received.
     */
    startTime?: string;

    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: videointelligence$GoogleRpc_Status;

    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Label annotations. There is exactly one element for each unique label.
     */
    labelAnnotations?: videointelligence$GoogleCloudVideointelligenceV1_LabelAnnotation[];

    /**
     * Safe search annotations.
     */
    safeSearchAnnotations?: videointelligence$GoogleCloudVideointelligenceV1_SafeSearchAnnotation[];

    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: videointelligence$GoogleCloudVideointelligenceV1_VideoSegment[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video,
     * corresponding to the end of the segment (inclusive).
     */
    endTime?: string;

    /**
     * Time-offset, relative to the beginning of the video,
     * corresponding to the start of the segment (inclusive).
     */
    startTime?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_AnnotateVideoRequest {
    /**
     * Requested video annotation features.
     */
    features?: string[];

    /**
     * The video data bytes. Encoding: base64. If unset, the input video(s)
     * should be specified via `input_uri`. If set, `input_uri` should be unset.
     */
    inputContent?: string;

    /**
     * Input video location. Currently, only
     * [Google Cloud Storage](https://cloud.google.com/storage/) URIs are
     * supported, which must be specified in the following format:
     * `gs://bucket-id/object-id` (other URI formats return
     * google.rpc.Code.INVALID_ARGUMENT). For more information, see
     * [Request URIs](/storage/docs/reference-uris).
     * A video URI may include wildcards in `object-id`, and thus identify
     * multiple videos. Supported wildcards: '&#42;' to match 0 or more characters;
     * '?' to match 1 character. If unset, the input video should be embedded
     * in the request as `input_content`. If set, `input_content` should be unset.
     */
    inputUri?: string;

    /**
     * Optional cloud region where annotation should take place. Supported cloud
     * regions: `us-east1`, `us-west1`, `europe-west1`, `asia-east1`. If no region
     * is specified, a region will be determined based on video file location.
     */
    locationId?: string;

    /**
     * Optional location where the output (in JSON format) should be stored.
     * Currently, only [Google Cloud Storage](https://cloud.google.com/storage/)
     * URIs are supported, which must be specified in the following format:
     * `gs://bucket-id/object-id` (other URI formats return
     * google.rpc.Code.INVALID_ARGUMENT). For more information, see
     * [Request URIs](/storage/docs/reference-uris).
     */
    outputUri?: string;

    /**
     * Additional video context and/or feature-specific parameters.
     */
    videoContext?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoContext;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_LabelAnnotation {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;

    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;

    /**
     * Where the label was detected and with what confidence.
     */
    locations?: videointelligence$GoogleCloudVideointelligenceV1beta1_LabelLocation[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_LabelLocation {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;

    /**
     * Label level.
     */
    level?: string;

    /**
     * Video segment. Set to [-1, -1] for video-level labels.
     * Set to [timestamp, timestamp] for frame-level labels.
     * Otherwise, corresponds to one of `AnnotateSpec.segments`
     * (if specified) or to shot boundaries (if requested).
     */
    segment?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoSegment;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation {
    /**
     * Likelihood of adult content.
     */
    adult?: string;

    /**
     * Likelihood of medical content.
     */
    medical?: string;

    /**
     * Likelihood of racy content.
     */
    racy?: string;

    /**
     * Likelihood that an obvious modification was made to the original
     * version to make it appear funny or offensive.
     */
    spoof?: string;

    /**
     * Video time offset in microseconds.
     */
    timeOffset?: string;

    /**
     * Likelihood of violent content.
     */
    violent?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_VideoAnnotationProgress {
    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Approximate percentage processed thus far.
     * Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number;

    /**
     * Time when the request was received.
     */
    startTime?: string;

    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: videointelligence$GoogleRpc_Status;

    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Label annotations. There is exactly one element for each unique label.
     */
    labelAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta1_LabelAnnotation[];

    /**
     * Safe search annotations.
     */
    safeSearchAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta1_SafeSearchAnnotation[];

    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoSegment[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_VideoContext {
    /**
     * If label detection has been requested, what labels should be detected
     * in addition to video-level labels or segment-level labels. If unspecified,
     * defaults to `SHOT_MODE`.
     */
    labelDetectionMode?: string;

    /**
     * Model to use for label detection.
     * Supported values: "latest" and "stable" (the default).
     */
    labelDetectionModel?: string;

    /**
     * Model to use for safe search detection.
     * Supported values: "latest" and "stable" (the default).
     */
    safeSearchDetectionModel?: string;

    /**
     * Video segments to annotate. The segments may overlap and are not required
     * to be contiguous or span the whole video. If unspecified, each video
     * is treated as a single segment.
     */
    segments?: videointelligence$GoogleCloudVideointelligenceV1beta1_VideoSegment[];

    /**
     * Model to use for shot change detection.
     * Supported values: "latest" and "stable" (the default).
     */
    shotChangeDetectionModel?: string;

    /**
     * Whether the video has been shot from a stationary (i.e. non-moving) camera.
     * When set to true, might improve detection accuracy for moving objects.
     */
    stationaryCamera?: boolean;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta1_VideoSegment {
    /**
     * End offset in microseconds (inclusive). Unset means 0.
     */
    endTimeOffset?: string;

    /**
     * Start offset in microseconds (inclusive). Unset means 0.
     */
    startTimeOffset?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_AnnotateVideoProgress {
    /**
     * Progress metadata for all videos specified in `AnnotateVideoRequest`.
     */
    annotationProgress?: videointelligence$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_AnnotateVideoResponse {
    /**
     * Annotation results for all videos specified in `AnnotateVideoRequest`.
     */
    annotationResults?: videointelligence$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_Entity {
    /**
     * Textual description, e.g. `Fixed-gear bicycle`.
     */
    description?: string;

    /**
     * Opaque entity ID. Some IDs may be available in
     * [Google Knowledge Graph Search
     * API](https://developers.google.com/knowledge-graph/).
     */
    entityId?: string;

    /**
     * Language code for `description` in BCP-47 format.
     */
    languageCode?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation {
    /**
     * All video frames where explicit content was detected.
     */
    frames?: videointelligence$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_ExplicitContentFrame {
    /**
     * Likelihood of the pornography content..
     */
    pornographyLikelihood?: string;

    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_LabelAnnotation {
    /**
     * Common categories for the detected entity.
     * E.g. when the label is `Terrier` the category is likely `dog`. And in some
     * cases there might be more than one categories e.g. `Terrier` could also be
     * a `pet`.
     */
    categoryEntities?: videointelligence$GoogleCloudVideointelligenceV1beta2_Entity[];

    /**
     * Detected entity.
     */
    entity?: videointelligence$GoogleCloudVideointelligenceV1beta2_Entity;

    /**
     * All video frames where a label was detected.
     */
    frames?: videointelligence$GoogleCloudVideointelligenceV1beta2_LabelFrame[];

    /**
     * All video segments where a label was detected.
     */
    segments?: videointelligence$GoogleCloudVideointelligenceV1beta2_LabelSegment[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_LabelFrame {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;

    /**
     * Time-offset, relative to the beginning of the video, corresponding to the
     * video frame for this location.
     */
    timeOffset?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_LabelSegment {
    /**
     * Confidence that the label is accurate. Range: [0, 1].
     */
    confidence?: number;

    /**
     * Video segment where a label was detected.
     */
    segment?: videointelligence$GoogleCloudVideointelligenceV1beta2_VideoSegment;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_VideoAnnotationProgress {
    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Approximate percentage processed thus far.
     * Guaranteed to be 100 when fully processed.
     */
    progressPercent?: number;

    /**
     * Time when the request was received.
     */
    startTime?: string;

    /**
     * Time of the most recent update.
     */
    updateTime?: string;
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_VideoAnnotationResults {
    /**
     * If set, indicates an error. Note that for a single `AnnotateVideoRequest`
     * some videos may succeed and some may fail.
     */
    error?: videointelligence$GoogleRpc_Status;

    /**
     * Explicit content annotation.
     */
    explicitAnnotation?: videointelligence$GoogleCloudVideointelligenceV1beta2_ExplicitContentAnnotation;

    /**
     * Label annotations on frame level.
     * There is exactly one element for each unique label.
     */
    frameLabelAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];

    /**
     * Video file location in
     * [Google Cloud Storage](https://cloud.google.com/storage/).
     */
    inputUri?: string;

    /**
     * Label annotations on video level or user specified segment level.
     * There is exactly one element for each unique label.
     */
    segmentLabelAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];

    /**
     * Shot annotations. Each shot is represented as a video segment.
     */
    shotAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta2_VideoSegment[];

    /**
     * Label annotations on shot level.
     * There is exactly one element for each unique label.
     */
    shotLabelAnnotations?: videointelligence$GoogleCloudVideointelligenceV1beta2_LabelAnnotation[];
  }

  declare interface videointelligence$GoogleCloudVideointelligenceV1beta2_VideoSegment {
    /**
     * Time-offset, relative to the beginning of the video,
     * corresponding to the end of the segment (inclusive).
     */
    endTimeOffset?: string;

    /**
     * Time-offset, relative to the beginning of the video,
     * corresponding to the start of the segment (inclusive).
     */
    startTimeOffset?: string;
  }

  declare interface videointelligence$GoogleLongrunning_Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: videointelligence$GoogleRpc_Status;

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

  declare interface videointelligence$GoogleRpc_Status {
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

  declare interface videointelligence$VideosResource {
    /**
     * Performs asynchronous video annotation. Progress and results can be
     * retrieved through the `google.longrunning.Operations` interface.
     * `Operation.metadata` contains `AnnotateVideoProgress` (progress).
     * `Operation.response` contains `AnnotateVideoResponse` (results).
     */
    annotate(request: {
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
    }): Request<videointelligence$GoogleLongrunning_Operation>;
  }
}
