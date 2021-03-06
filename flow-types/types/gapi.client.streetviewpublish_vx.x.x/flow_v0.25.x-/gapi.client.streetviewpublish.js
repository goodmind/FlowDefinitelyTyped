declare module "gapi.client.streetviewpublish" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    photo: typeof gapi$client$photo,
    photos: typeof gapi$client$photos
  };

  /**
   * Load Street View Publish API v1
   */
  declare function gapi$client$load(
    name: "streetviewpublish",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "streetviewpublish",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$photo: streetviewpublish$PhotoResource;

  declare var gapi$client$photos: streetviewpublish$PhotosResource;

  declare interface gapi$client$streetviewpublish$BatchDeletePhotosRequest {
    /**
     * Required. IDs of the Photos. For HTTP
     * GET requests, the URL query parameter should be
     * `photoIds=<id1>&photoIds=<id2>&...`.
     */
    photoIds?: string[];
  }

  declare interface gapi$client$streetviewpublish$BatchDeletePhotosResponse {
    /**
     * The status for the operation to delete a single
     * Photo in the batch request.
     */
    status?: streetviewpublish$Status[];
  }

  declare interface gapi$client$streetviewpublish$BatchGetPhotosResponse {
    /**
     * List of results for each individual
     * Photo requested, in the same order as
     * the requests in
     * BatchGetPhotos.
     */
    results?: streetviewpublish$PhotoResponse[];
  }

  declare interface gapi$client$streetviewpublish$BatchUpdatePhotosRequest {
    /**
     * Required. List of
     * UpdatePhotoRequests.
     */
    updatePhotoRequests?: streetviewpublish$UpdatePhotoRequest[];
  }

  declare interface gapi$client$streetviewpublish$BatchUpdatePhotosResponse {
    /**
     * List of results for each individual
     * Photo updated, in the same order as
     * the request.
     */
    results?: streetviewpublish$PhotoResponse[];
  }

  declare interface gapi$client$streetviewpublish$Connection {
    /**
     * Required. The destination of the connection from the containing photo to
     * another photo.
     */
    target?: streetviewpublish$PhotoId;
  }

  declare interface gapi$client$streetviewpublish$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;

    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }

  declare interface gapi$client$streetviewpublish$Level {
    /**
     * Required. A name assigned to this Level, restricted to 3 characters.
     * Consider how the elevator buttons would be labeled for this level if there
     * was an elevator.
     */
    name?: string;

    /**
     * Floor number, used for ordering. 0 indicates the ground level, 1 indicates
     * the first level above ground level, -1 indicates the first level under
     * ground level. Non-integer values are OK.
     */
    number?: number;
  }

  declare interface gapi$client$streetviewpublish$ListPhotosResponse {
    /**
     * Token to retrieve the next page of results, or empty if there are no more
     * results in the list.
     */
    nextPageToken?: string;

    /**
     * List of photos. The maximum number of items returned is based on the
     * pageSize field
     * in the request.
     */
    photos?: streetviewpublish$Photo[];
  }

  declare interface gapi$client$streetviewpublish$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * The error result of the operation in case of failure or cancellation.
     */
    error?: streetviewpublish$Status;

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

  declare interface gapi$client$streetviewpublish$Photo {
    /**
     * Absolute time when the photo was captured.
     * When the photo has no exif timestamp, this is used to set a timestamp in
     * the photo metadata.
     */
    captureTime?: string;

    /**
     * Connections to other photos. A connection represents the link from this
     * photo to another photo.
     */
    connections?: gapi$client$streetviewpublish$Connection[];

    /**
     * Output only. The download URL for the photo bytes. This field is set only
     * when
     * GetPhotoRequest.view
     * is set to
     * PhotoView.INCLUDE_DOWNLOAD_URL.
     */
    downloadUrl?: string;

    /**
     * Required when updating a photo. Output only when creating a photo.
     * Identifier for the photo, which is unique among all photos in
     * Google.
     */
    photoId?: streetviewpublish$PhotoId;

    /**
     * Places where this photo belongs.
     */
    places?: streetviewpublish$Place[];

    /**
     * Pose of the photo.
     */
    pose?: streetviewpublish$Pose;

    /**
     * Output only. The share link for the photo.
     */
    shareLink?: string;

    /**
     * Output only. The thumbnail URL for showing a preview of the given photo.
     */
    thumbnailUrl?: string;

    /**
     * Required when creating a photo. Input only. The resource URL where the
     * photo bytes are uploaded to.
     */
    uploadReference?: streetviewpublish$UploadRef;

    /**
     * Output only. View count of the photo.
     */
    viewCount?: string;
  }

  declare interface gapi$client$streetviewpublish$PhotoId {
    /**
     * Required. A unique identifier for a photo.
     */
    id?: string;
  }

  declare interface gapi$client$streetviewpublish$PhotoResponse {
    /**
     * The Photo resource, if the request
     * was successful.
     */
    photo?: gapi$client$streetviewpublish$Photo;

    /**
     * The status for the operation to get or update a single photo in the batch
     * request.
     */
    status?: streetviewpublish$Status;
  }

  declare interface gapi$client$streetviewpublish$Place {
    /**
     * Place identifier, as described in
     * https://developers.google.com/places/place-id.
     */
    placeId?: string;
  }

  declare interface gapi$client$streetviewpublish$Pose {
    /**
     * Altitude of the pose in meters above ground level (as defined by WGS84).
     * NaN indicates an unmeasured quantity.
     */
    altitude?: number;

    /**
     * Compass heading, measured at the center of the photo in degrees clockwise
     * from North. Value must be >=0 and <360.
     * NaN indicates an unmeasured quantity.
     */
    heading?: number;

    /**
     * Latitude and longitude pair of the pose, as explained here:
     * https://cloud.google.com/datastore/docs/reference/rest/Shared.Types/LatLng
     * When creating a Photo, if the
     * latitude and longitude pair are not provided here, the geolocation from the
     * exif header will be used. If the latitude and longitude pair is not
     * provided and cannot be found in the exif header, the create photo process
     * will fail.
     */
    latLngPair?: gapi$client$streetviewpublish$LatLng;

    /**
     * Level (the floor in a building) used to configure vertical navigation.
     */
    level?: gapi$client$streetviewpublish$Level;

    /**
     * Pitch, measured at the center of the photo in degrees. Value must be >=-90
     * and <= 90. A value of -90 means looking directly down, and a value of 90
     * means looking directly up.
     * NaN indicates an unmeasured quantity.
     */
    pitch?: number;

    /**
     * Roll, measured in degrees. Value must be >= 0 and <360. A value of 0
     * means level with the horizon.
     * NaN indicates an unmeasured quantity.
     */
    roll?: number;
  }

  declare interface gapi$client$streetviewpublish$Status {
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

  declare interface gapi$client$streetviewpublish$UpdatePhotoRequest {
    /**
     * Required. Photo object containing the
     * new metadata.
     */
    photo?: gapi$client$streetviewpublish$Photo;

    /**
     * Mask that identifies fields on the photo metadata to update.
     * If not present, the old Photo
     * metadata will be entirely replaced with the
     * new Photo metadata in this request.
     * The update fails if invalid fields are specified. Multiple fields can be
     * specified in a comma-delimited list.
     *
     * The following fields are valid:
     *
     * &#42; `pose.heading`
     * &#42; `pose.latLngPair`
     * &#42; `pose.pitch`
     * &#42; `pose.roll`
     * &#42; `pose.level`
     * &#42; `pose.altitude`
     * &#42; `connections`
     * &#42; `places`
     *
     *
     * <aside class="note"><b>Note:</b> Repeated fields in
     * updateMask
     * mean the entire set of repeated values will be replaced with the new
     * contents. For example, if
     * updateMask
     * contains `connections` and `UpdatePhotoRequest.photo.connections` is empty,
     * all connections will be removed.</aside>
     */
    updateMask?: string;
  }

  declare interface gapi$client$streetviewpublish$UploadRef {
    /**
     * Required. An upload reference should be unique for each user. It follows
     * the form:
     * "https://streetviewpublish.googleapis.com/media/user/{account_id}/photo/{upload_reference}"
     */
    uploadUrl?: string;
  }

  declare interface gapi$client$streetviewpublish$PhotoResource {
    /**
     * After the client finishes uploading the photo with the returned
     * UploadRef,
     * CreatePhoto
     * publishes the uploaded Photo to
     * Street View on Google Maps.
     *
     * Currently, the only way to set heading, pitch, and roll in CreatePhoto is
     * through the [Photo Sphere XMP
     * metadata](https://developers.google.com/streetview/spherical-metadata) in
     * the photo bytes. The `pose.heading`, `pose.pitch`, `pose.roll`,
     * `pose.altitude`, and `pose.level` fields in Pose are ignored for
     * CreatePhoto.
     *
     * This method returns the following error codes:
     *
     * &#42; google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
     * &#42; google.rpc.Code.NOT_FOUND if the upload reference does not exist.
     * &#42; google.rpc.Code.RESOURCE_EXHAUSTED if the account has reached the
     * storage limit.
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
    }): Request<gapi$client$streetviewpublish$Photo>;

    /**
     * Deletes a Photo and its metadata.
     *
     * This method returns the following error codes:
     *
     * &#42; google.rpc.Code.PERMISSION_DENIED if the requesting user did not
     * create the requested photo.
     * &#42; google.rpc.Code.NOT_FOUND if the photo ID does not exist.
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
       * Required. ID of the Photo.
       */
      photoId: string,

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
     * Gets the metadata of the specified
     * Photo.
     *
     * This method returns the following error codes:
     *
     * &#42; google.rpc.Code.PERMISSION_DENIED if the requesting user did not
     * create the requested Photo.
     * &#42; google.rpc.Code.NOT_FOUND if the requested
     * Photo does not exist.
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
       * Required. ID of the Photo.
       */
      photoId: string,

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
      upload_protocol?: string,

      /**
       * Specifies if a download URL for the photo bytes should be returned in the
       * Photo response.
       */
      view?: string
    }): Request<gapi$client$streetviewpublish$Photo>;

    /**
     * Creates an upload session to start uploading photo bytes. The upload URL of
     * the returned UploadRef is used to
     * upload the bytes for the Photo.
     *
     * In addition to the photo requirements shown in
     * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604,
     * the photo must also meet the following requirements:
     *
     * &#42; Photo Sphere XMP metadata must be included in the photo medadata. See
     * https://developers.google.com/streetview/spherical-metadata for the
     * required fields.
     * &#42; The pixel size of the photo must meet the size requirements listed in
     * https://support.google.com/maps/answer/7012050?hl=en&ref_topic=6275604, and
     * the photo must be a full 360 horizontally.
     *
     * After the upload is complete, the
     * UploadRef is used with
     * CreatePhoto
     * to create the Photo object entry.
     */
    startUpload(request: {
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
    }): Request<gapi$client$streetviewpublish$UploadRef>;

    /**
     * Updates the metadata of a Photo, such
     * as pose, place association, connections, etc. Changing the pixels of a
     * photo is not supported.
     *
     * Only the fields specified in the
     * updateMask
     * field are used. If `updateMask` is not present, the update applies to all
     * fields.
     *
     * <aside class="note"><b>Note:</b> To update
     * Pose.altitude,
     * Pose.latLngPair has to be
     * filled as well. Otherwise, the request will fail.</aside>
     *
     * This method returns the following error codes:
     *
     * &#42; google.rpc.Code.PERMISSION_DENIED if the requesting user did not
     * create the requested photo.
     * &#42; google.rpc.Code.INVALID_ARGUMENT if the request is malformed.
     * &#42; google.rpc.Code.NOT_FOUND if the requested photo does not exist.
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
       * Required. A unique identifier for a photo.
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
       * Mask that identifies fields on the photo metadata to update.
       * If not present, the old Photo
       * metadata will be entirely replaced with the
       * new Photo metadata in this request.
       * The update fails if invalid fields are specified. Multiple fields can be
       * specified in a comma-delimited list.
       *
       * The following fields are valid:
       *
       * &#42; `pose.heading`
       * &#42; `pose.latLngPair`
       * &#42; `pose.pitch`
       * &#42; `pose.roll`
       * &#42; `pose.level`
       * &#42; `pose.altitude`
       * &#42; `connections`
       * &#42; `places`
       *
       *
       * <aside class="note"><b>Note:</b> Repeated fields in
       * updateMask
       * mean the entire set of repeated values will be replaced with the new
       * contents. For example, if
       * updateMask
       * contains `connections` and `UpdatePhotoRequest.photo.connections` is empty,
       * all connections will be removed.</aside>
       */
      updateMask?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$streetviewpublish$Photo>;
  }

  declare interface gapi$client$streetviewpublish$PhotosResource {
    /**
     * Deletes a list of Photos and their
     * metadata.
     *
     * Note that if
     * BatchDeletePhotos
     * fails, either critical fields are missing or there was an authentication
     * error. Even if
     * BatchDeletePhotos
     * succeeds, there may have been failures for single photos in the batch.
     * These failures will be specified in each
     * PhotoResponse.status
     * in
     * BatchDeletePhotosResponse.results.
     * See
     * DeletePhoto
     * for specific failures that can occur per photo.
     */
    batchDelete(request: {
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
    }): Request<gapi$client$streetviewpublish$BatchDeletePhotosResponse>;

    /**
     * Gets the metadata of the specified
     * Photo batch.
     *
     * Note that if
     * BatchGetPhotos
     * fails, either critical fields are missing or there was an authentication
     * error. Even if
     * BatchGetPhotos
     * succeeds, there may have been failures for single photos in the batch.
     * These failures will be specified in each
     * PhotoResponse.status
     * in
     * BatchGetPhotosResponse.results.
     * See
     * GetPhoto
     * for specific failures that can occur per photo.
     */
    batchGet(request: {
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
       * Required. IDs of the Photos. For HTTP
       * GET requests, the URL query parameter should be
       * `photoIds=<id1>&photoIds=<id2>&...`.
       */
      photoIds?: string,

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
      upload_protocol?: string,

      /**
       * Specifies if a download URL for the photo bytes should be returned in the
       * Photo response.
       */
      view?: string
    }): Request<gapi$client$streetviewpublish$BatchGetPhotosResponse>;

    /**
     * Updates the metadata of Photos, such
     * as pose, place association, connections, etc. Changing the pixels of photos
     * is not supported.
     *
     * Note that if
     * BatchUpdatePhotos
     * fails, either critical fields are missing or there was an authentication
     * error. Even if
     * BatchUpdatePhotos
     * succeeds, there may have been failures for single photos in the batch.
     * These failures will be specified in each
     * PhotoResponse.status
     * in
     * BatchUpdatePhotosResponse.results.
     * See
     * UpdatePhoto
     * for specific failures that can occur per photo.
     *
     * Only the fields specified in
     * updateMask
     * field are used. If `updateMask` is not present, the update applies to all
     * fields.
     *
     * <aside class="note"><b>Note:</b> To update
     * Pose.altitude,
     * Pose.latLngPair has to be
     * filled as well. Otherwise, the request will fail.</aside>
     */
    batchUpdate(request: {
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
    }): Request<gapi$client$streetviewpublish$BatchUpdatePhotosResponse>;

    /**
     * Lists all the Photos that belong to
     * the user.
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
       * The filter expression. For example: `placeId=ChIJj61dQgK6j4AR4GeTYWZsKWw`.
       *
       * The only filter supported at the moment is `placeId`.
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
       * The maximum number of photos to return.
       * `pageSize` must be non-negative. If `pageSize` is zero or is not provided,
       * the default page size of 100 will be used.
       * The number of photos returned in the response may be less than `pageSize`
       * if the number of photos that belong to the user is less than `pageSize`.
       */
      pageSize?: number,

      /**
       * The
       * nextPageToken
       * value returned from a previous
       * ListPhotos
       * request, if any.
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
      upload_protocol?: string,

      /**
       * Specifies if a download URL for the photos bytes should be returned in the
       * Photos response.
       */
      view?: string
    }): Request<gapi$client$streetviewpublish$ListPhotosResponse>;
  }
}
