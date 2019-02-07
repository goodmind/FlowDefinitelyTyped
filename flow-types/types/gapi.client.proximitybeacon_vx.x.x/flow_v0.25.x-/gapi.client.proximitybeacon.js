declare module "gapi.client.proximitybeacon" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    beaconinfo: typeof client$beaconinfo,
    beacons: typeof client$beacons,
    namespaces: typeof client$namespaces,
    v1beta1: typeof client$v1beta1
  };

  /**
   * Load Google Proximity Beacon API v1beta1
   */
  declare function client$load(
    name: "proximitybeacon",
    version: "v1beta1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "proximitybeacon",
    version: "v1beta1",
    callback: () => any
  ): void;

  declare var client$beaconinfo: proximitybeacon$proximitybeacon$BeaconinfoResource;

  declare var client$beacons: proximitybeacon$proximitybeacon$BeaconsResource;

  declare var client$namespaces: proximitybeacon$proximitybeacon$NamespacesResource;

  declare var client$v1beta1: proximitybeacon$proximitybeacon$V1beta1Resource;

  declare interface proximitybeacon$AdvertisedId {
    /**
     * The actual beacon identifier, as broadcast by the beacon hardware. Must be
     * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
     * requests, and will be so encoded (with padding) in responses. The base64
     * encoding should be of the binary byte-stream and not any textual (such as
     * hex) representation thereof.
     * Required.
     */
    id?: string;

    /**
     * Specifies the identifier type.
     * Required.
     */
    type?: string;
  }

  declare interface proximitybeacon$AttachmentInfo {
    /**
     * An opaque data container for client-provided data.
     */
    data?: string;

    /**
     * Specifies what kind of attachment this is. Tells a client how to
     * interpret the `data` field. Format is <var>namespace/type</var>, for
     * example <code>scrupulous-wombat-12345/welcome-message</code>
     */
    namespacedType?: string;
  }

  declare interface proximitybeacon$Beacon {
    /**
     * The identifier of a beacon as advertised by it. This field must be
     * populated when registering. It may be empty when updating a beacon
     * record because it is ignored in updates.
     *
     * When registering a beacon that broadcasts Eddystone-EID, this field
     * should contain a "stable" Eddystone-UID that identifies the beacon and
     * links it to its attachments. The stable Eddystone-UID is only used for
     * administering the beacon.
     */
    advertisedId?: proximitybeacon$AdvertisedId;

    /**
     * Resource name of this beacon. A beacon name has the format
     * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
     * the beacon and N is a code for the beacon's type. Possible values are
     * `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.
     *
     * This field must be left empty when registering. After reading a beacon,
     * clients can use the name for future operations.
     */
    beaconName?: string;

    /**
     * Free text used to identify and describe the beacon. Maximum length 140
     * characters.
     * Optional.
     */
    description?: string;

    /**
     * Write-only registration parameters for beacons using Eddystone-EID
     * (remotely resolved ephemeral ID) format. This information will not be
     * populated in API responses. When submitting this data, the `advertised_id`
     * field must contain an ID of type Eddystone-UID. Any other ID type will
     * result in an error.
     */
    ephemeralIdRegistration?: proximitybeacon$EphemeralIdRegistration;

    /**
     * Expected location stability. This is set when the beacon is registered or
     * updated, not automatically detected in any way.
     * Optional.
     */
    expectedStability?: string;

    /**
     * The indoor level information for this beacon, if known. As returned by the
     * Google Maps API.
     * Optional.
     */
    indoorLevel?: proximitybeacon$IndoorLevel;

    /**
     * The location of the beacon, expressed as a latitude and longitude pair.
     * This location is given when the beacon is registered or updated. It does
     * not necessarily indicate the actual current location of the beacon.
     * Optional.
     */
    latLng?: proximitybeacon$LatLng;

    /**
     * The [Google Places API](/places/place-id) Place ID of the place where
     * the beacon is deployed. This is given when the beacon is registered or
     * updated, not automatically detected in any way.
     * Optional.
     */
    placeId?: string;

    /**
     * Properties of the beacon device, for example battery type or firmware
     * version.
     * Optional.
     */
    properties?: Record<string, string>;

    /**
     * Some beacons may require a user to provide an authorization key before
     * changing any of its configuration (e.g. broadcast frames, transmit power).
     * This field provides a place to store and control access to that key.
     * This field is populated in responses to `GET /v1beta1/beacons/3!beaconId`
     * from users with write access to the given beacon. That is to say: If the
     * user is authorized to write the beacon's confidential data in the service,
     * the service considers them authorized to configure the beacon. Note
     * that this key grants nothing on the service, only on the beacon itself.
     */
    provisioningKey?: string;

    /**
     * Current status of the beacon.
     * Required.
     */
    status?: string;
  }

  declare interface proximitybeacon$BeaconAttachment {
    /**
     * Resource name of this attachment. Attachment names have the format:
     * <code>beacons/<var>beacon_id</var>/attachments/<var>attachment_id</var></code>.
     * Leave this empty on creation.
     */
    attachmentName?: string;

    /**
     * The UTC time when this attachment was created, in milliseconds since the
     * UNIX epoch.
     */
    creationTimeMs?: string;

    /**
     * An opaque data container for client-provided data. Must be
     * [base64](http://tools.ietf.org/html/rfc4648#section-4) encoded in HTTP
     * requests, and will be so encoded (with padding) in responses.
     * Required.
     */
    data?: string;

    /**
     * The distance away from the beacon at which this attachment should be
     * delivered to a mobile app.
     *
     * Setting this to a value greater than zero indicates that the app should
     * behave as if the beacon is "seen" when the mobile device is less than this
     * distance away from the beacon.
     *
     * Different attachments on the same beacon can have different max distances.
     *
     * Note that even though this value is expressed with fractional meter
     * precision, real-world behavior is likley to be much less precise than one
     * meter, due to the nature of current Bluetooth radio technology.
     *
     * Optional. When not set or zero, the attachment should be delivered at the
     * beacon's outer limit of detection.
     *
     * Negative values are invalid and return an error.
     */
    maxDistanceMeters?: number;

    /**
     * Specifies what kind of attachment this is. Tells a client how to
     * interpret the `data` field. Format is <var>namespace/type</var>. Namespace
     * provides type separation between clients. Type describes the type of
     * `data`, for use by the client when parsing the `data` field.
     * Required.
     */
    namespacedType?: string;
  }

  declare interface proximitybeacon$BeaconInfo {
    /**
     * The ID advertised by the beacon.
     */
    advertisedId?: proximitybeacon$AdvertisedId;

    /**
     * Attachments matching the type(s) requested.
     * May be empty if no attachment types were requested.
     */
    attachments?: proximitybeacon$AttachmentInfo[];

    /**
     * The name under which the beacon is registered.
     */
    beaconName?: string;
  }

  declare interface proximitybeacon$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year/month where the day is not significant.
     */
    day?: number;

    /**
     * Month of year. Must be from 1 to 12.
     */
    month?: number;

    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
     * a year.
     */
    year?: number;
  }

  declare interface proximitybeacon$DeleteAttachmentsResponse {
    /**
     * The number of attachments that were deleted.
     */
    numDeleted?: number;
  }

  declare interface proximitybeacon$Diagnostics {
    /**
     * An unordered list of Alerts that the beacon has.
     */
    alerts?: string[];

    /**
     * Resource name of the beacon. For Eddystone-EID beacons, this may
     * be the beacon's current EID, or the beacon's "stable" Eddystone-UID.
     */
    beaconName?: string;

    /**
     * The date when the battery is expected to be low. If the value is missing
     * then there is no estimate for when the battery will be low.
     * This value is only an estimate, not an exact date.
     */
    estimatedLowBatteryDate?: proximitybeacon$Date;
  }

  declare interface proximitybeacon$EphemeralIdRegistration {
    /**
     * The beacon's public key used for the Elliptic curve Diffie-Hellman
     * key exchange. When this field is populated, `service_ecdh_public_key`
     * must also be populated, and `beacon_identity_key` must not be.
     */
    beaconEcdhPublicKey?: string;

    /**
     * The private key of the beacon. If this field is populated,
     * `beacon_ecdh_public_key` and `service_ecdh_public_key` must not be
     * populated.
     */
    beaconIdentityKey?: string;

    /**
     * The initial clock value of the beacon. The beacon's clock must have
     * begun counting at this value immediately prior to transmitting this
     * value to the resolving service. Significant delay in transmitting this
     * value to the service risks registration or resolution failures. If a
     * value is not provided, the default is zero.
     */
    initialClockValue?: string;

    /**
     * An initial ephemeral ID calculated using the clock value submitted as
     * `initial_clock_value`, and the secret key generated by the
     * Diffie-Hellman key exchange using `service_ecdh_public_key` and
     * `service_ecdh_public_key`. This initial EID value will be used by the
     * service to confirm that the key exchange process was successful.
     */
    initialEid?: string;

    /**
     * Indicates the nominal period between each rotation of the beacon's
     * ephemeral ID. "Nominal" because the beacon should randomize the
     * actual interval. See [the spec at github](https://github.com/google/eddystone/tree/master/eddystone-eid)
     * for details. This value corresponds to a power-of-two scaler on the
     * beacon's clock: when the scaler value is K, the beacon will begin
     * broadcasting a new ephemeral ID on average every 2^K seconds.
     */
    rotationPeriodExponent?: number;

    /**
     * The service's public key used for the Elliptic curve Diffie-Hellman
     * key exchange. When this field is populated, `beacon_ecdh_public_key`
     * must also be populated, and `beacon_identity_key` must not be.
     */
    serviceEcdhPublicKey?: string;
  }

  declare interface proximitybeacon$EphemeralIdRegistrationParams {
    /**
     * Indicates the maximum rotation period supported by the service.
     * See EddystoneEidRegistration.rotation_period_exponent
     */
    maxRotationPeriodExponent?: number;

    /**
     * Indicates the minimum rotation period supported by the service.
     * See EddystoneEidRegistration.rotation_period_exponent
     */
    minRotationPeriodExponent?: number;

    /**
     * The beacon service's public key for use by a beacon to derive its
     * Identity Key using Elliptic Curve Diffie-Hellman key exchange.
     */
    serviceEcdhPublicKey?: string;
  }

  declare interface proximitybeacon$GetInfoForObservedBeaconsRequest {
    /**
     * Specifies what kind of attachments to include in the response.
     * When given, the response will include only attachments of the given types.
     * When empty, no attachments will be returned. Must be in the format
     * <var>namespace/type</var>. Accepts `&#42;` to specify all types in
     * all namespaces owned by the client.
     * Optional.
     */
    namespacedTypes?: string[];

    /**
     * The beacons that the client has encountered.
     * At least one must be given.
     */
    observations?: proximitybeacon$Observation[];
  }

  declare interface proximitybeacon$GetInfoForObservedBeaconsResponse {
    /**
     * Public information about beacons.
     * May be empty if the request matched no beacons.
     */
    client$beacons?: proximitybeacon$BeaconInfo[];
  }

  declare interface proximitybeacon$IndoorLevel {
    /**
     * The name of this level.
     */
    name?: string;
  }

  declare interface proximitybeacon$LatLng {
    /**
     * The latitude in degrees. It must be in the range [-90.0, +90.0].
     */
    latitude?: number;

    /**
     * The longitude in degrees. It must be in the range [-180.0, +180.0].
     */
    longitude?: number;
  }

  declare interface proximitybeacon$ListBeaconAttachmentsResponse {
    /**
     * The attachments that corresponded to the request params.
     */
    attachments?: proximitybeacon$BeaconAttachment[];
  }

  declare interface proximitybeacon$ListBeaconsResponse {
    /**
     * The beacons that matched the search criteria.
     */
    client$beacons?: proximitybeacon$Beacon[];

    /**
     * An opaque pagination token that the client may provide in their next
     * request to retrieve the next page of results.
     */
    nextPageToken?: string;

    /**
     * Estimate of the total number of beacons matched by the query. Higher
     * values may be less accurate.
     */
    totalCount?: string;
  }

  declare interface proximitybeacon$ListDiagnosticsResponse {
    /**
     * The diagnostics matching the given request.
     */
    diagnostics?: proximitybeacon$Diagnostics[];

    /**
     * Token that can be used for pagination. Returned only if the
     * request matches more beacons than can be returned in this response.
     */
    nextPageToken?: string;
  }

  declare interface proximitybeacon$ListNamespacesResponse {
    /**
     * The attachments that corresponded to the request params.
     */
    client$namespaces?: proximitybeacon$Namespace[];
  }

  declare interface proximitybeacon$Namespace {
    /**
     * Resource name of this namespace. Namespaces names have the format:
     * <code>namespaces/<var>namespace</var></code>.
     */
    namespaceName?: string;

    /**
     * Specifies what clients may receive attachments under this namespace
     * via `beaconinfo.getforobserved`.
     */
    servingVisibility?: string;
  }

  declare interface proximitybeacon$Observation {
    /**
     * The ID advertised by the beacon the client has encountered.
     *
     * If the submitted `advertised_id` type is Eddystone-EID, then the client
     * must be authorized to resolve the given beacon. Otherwise no data will be
     * returned for that beacon.
     * Required.
     */
    advertisedId?: proximitybeacon$AdvertisedId;

    /**
     * The array of telemetry bytes received from the beacon. The server is
     * responsible for parsing it. This field may frequently be empty, as
     * with a beacon that transmits telemetry only occasionally.
     */
    telemetry?: string;

    /**
     * Time when the beacon was observed.
     */
    timestampMs?: string;
  }

  declare interface proximitybeacon$BeaconinfoResource {
    /**
     * Given one or more beacon observations, returns any beacon information
     * and attachments accessible to your application. Authorize by using the
     * [API key](https://developers.google.com/beacons/proximity/get-started#request_a_browser_api_key)
     * for the application.
     */
    getforobserved(request: {
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
    }): Request<proximitybeacon$GetInfoForObservedBeaconsResponse>;
  }

  declare interface proximitybeacon$AttachmentsResource {
    /**
     * Deletes multiple attachments on a given beacon. This operation is
     * permanent and cannot be undone.
     *
     * You can optionally specify `namespacedType` to choose which attachments
     * should be deleted. If you do not specify `namespacedType`,  all your
     * attachments on the given beacon will be deleted. You also may explicitly
     * specify `&#42;/&#42;` to delete all.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * The beacon whose attachments should be deleted. A beacon name has the
       * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
       * by the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * Specifies the namespace and type of attachments to delete in
       * `namespace/type` format. Accepts `&#42;/&#42;` to specify
       * "all types in all namespaces".
       * Optional.
       */
      namespacedType?: string,

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
       * The project id to delete beacon attachments under. This field can be
       * used when "&#42;" is specified to mean all attachment namespaces. Projects
       * may have multiple attachments with multiple namespaces. If "&#42;" is
       * specified and the projectId string is empty, then the project
       * making the request is used.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$DeleteAttachmentsResponse>;

    /**
     * Associates the given data with the specified beacon. Attachment data must
     * contain two parts:
     * <ul>
     * <li>A namespaced type.</li>
     * <li>The actual attachment data itself.</li>
     * </ul>
     * The namespaced type consists of two parts, the namespace and the type.
     * The namespace must be one of the values returned by the `namespaces`
     * endpoint, while the type can be a string of any characters except for the
     * forward slash (`/`) up to 100 characters in length.
     *
     * Attachment data can be up to 1024 bytes long.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * Beacon on which the attachment should be created. A beacon name has the
       * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
       * by the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the project the attachment will belong to. If
       * the project id is not specified then the project making the request
       * is used.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$BeaconAttachment>;

    /**
     * Deletes the specified attachment for the given beacon. Each attachment has
     * a unique attachment name (`attachmentName`) which is returned when you
     * fetch the attachment data via this API. You specify this with the delete
     * request to control which attachment is removed. This operation cannot be
     * undone.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * The attachment name (`attachmentName`) of
       * the attachment to remove. For example:
       * `beacons/3!893737abc9/attachments/c5e937-af0-494-959-ec49d12738`. For
       * Eddystone-EID beacons, the beacon ID portion (`3!893737abc9`) may be the
       * beacon's current EID, or its "stable" Eddystone-UID.
       * Required.
       */
      attachmentName: string,

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
       * The project id of the attachment to delete. If not provided, the project
       * that is making the request is used.
       * Optional.
       */
      projectId?: string,

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
     * Returns the attachments for the specified beacon that match the specified
     * namespaced-type pattern.
     *
     * To control which namespaced types are returned, you add the
     * `namespacedType` query parameter to the request. You must either use
     * `&#42;/&#42;`, to return all attachments, or the namespace must be one of
     * the ones returned from the  `namespaces` endpoint.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;viewer&#42;&#42;, &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42;
     * permissions in the Google Developers Console project.
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
       * Beacon whose attachments should be fetched. A beacon name has the
       * format "beacons/N!beaconId" where the beaconId is the base16 ID broadcast
       * by the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * Specifies the namespace and type of attachment to include in response in
       * <var>namespace/type</var> format. Accepts `&#42;/&#42;` to specify
       * "all types in all namespaces".
       */
      namespacedType?: string,

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
       * The project id to list beacon attachments under. This field can be
       * used when "&#42;" is specified to mean all attachment namespaces. Projects
       * may have multiple attachments with multiple namespaces. If "&#42;" is
       * specified and the projectId string is empty, then the project
       * making the request is used.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$ListBeaconAttachmentsResponse>;
  }

  declare interface proximitybeacon$DiagnosticsResource {
    /**
     * List the diagnostics for a single beacon. You can also list diagnostics for
     * all the beacons owned by your Google Developers Console project by using
     * the beacon name `beacons/-`.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;viewer&#42;&#42;, &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42;
     * permissions in the Google Developers Console project.
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
       * Requests only beacons that have the given alert. For example, to find
       * beacons that have low batteries use `alert_filter=LOW_BATTERY`.
       */
      alertFilter?: string,

      /**
       * Data format for response.
       */
      alt?: string,

      /**
       * Beacon that the diagnostics are for.
       */
      beaconName: string,

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
       * Specifies the maximum number of results to return. Defaults to
       * 10. Maximum 1000. Optional.
       */
      pageSize?: number,

      /**
       * Requests results that occur after the `page_token`, obtained from the
       * response to a previous request. Optional.
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
       * Requests only diagnostic records for the given project id. If not set,
       * then the project making the request will be used for looking up
       * diagnostic records. Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$ListDiagnosticsResponse>;
  }

  declare interface proximitybeacon$BeaconsResource {
    /**
     * Activates a beacon. A beacon that is active will return information
     * and attachment data when queried via `beaconinfo.getforobserved`.
     * Calling this method on an already active beacon will do nothing (but
     * will return a successful response code).
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
     */
    activate(request: {
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
       * Beacon that should be activated. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the beacon to activate. If the project id is not
       * specified then the project making the request is used. The project id
       * must match the project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
     * Deactivates a beacon. Once deactivated, the API will not return
     * information nor attachment data for the beacon when queried via
     * `beaconinfo.getforobserved`. Calling this method on an already inactive
     * beacon will do nothing (but will return a successful response code).
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
     */
    deactivate(request: {
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
       * Beacon that should be deactivated. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the beacon to deactivate. If the project id is not
       * specified then the project making the request is used. The project id must
       * match the project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
     * Decommissions the specified beacon in the service. This beacon will no
     * longer be returned from `beaconinfo.getforobserved`. This operation is
     * permanent -- you will not be able to re-register a beacon with this ID
     * again.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
     */
    decommission(request: {
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
       * Beacon that should be decommissioned. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID of the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the beacon to decommission. If the project id is not
       * specified then the project making the request is used. The project id
       * must match the project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
     * Deletes the specified beacon including all diagnostics data for the beacon
     * as well as any attachments on the beacon (including those belonging to
     * other projects). This operation cannot be undone.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * Beacon that should be deleted. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the beacon to delete. If not provided, the project
       * that is making the request is used.
       * Optional.
       */
      projectId?: string,

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
     * Returns detailed information about the specified beacon.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;viewer&#42;&#42;, &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42;
     * permissions in the Google Developers Console project.
     *
     * Requests may supply an Eddystone-EID beacon name in the form:
     * `beacons/4!beaconId` where the `beaconId` is the base16 ephemeral ID
     * broadcast by the beacon. The returned `Beacon` object will contain the
     * beacon's stable Eddystone-UID. Clients not authorized to resolve the
     * beacon's ephemeral Eddystone-EID broadcast will receive an error.
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
       * Resource name of this beacon. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone-UID, `4` for Eddystone-EID, `1` for iBeacon, or `5`
       * for AltBeacon. For Eddystone-EID beacons, you may use either the
       * current EID or the beacon's "stable" UID.
       * Required.
       */
      beaconName: string,

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
       * The project id of the beacon to request. If the project id is not specified
       * then the project making the request is used. The project id must match the
       * project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$Beacon>;

    /**
     * Searches the beacon registry for beacons that match the given search
     * criteria. Only those beacons that the client has permission to list
     * will be returned.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;viewer&#42;&#42;, &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42;
     * permissions in the Google Developers Console project.
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
       * The maximum number of records to return for this request, up to a
       * server-defined upper limit.
       */
      pageSize?: number,

      /**
       * A pagination token obtained from a previous request to list beacons.
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
       * The project id to list beacons under. If not present then the project
       * credential that made the request is used as the project.
       * Optional.
       */
      projectId?: string,

      /**
       * Filter query string that supports the following field filters:
       *
       * &#42; &#42;&#42;description:`"<string>"`&#42;&#42;
       * For example: &#42;&#42;description:"Room 3"&#42;&#42;
       * Returns beacons whose description matches tokens in the string "Room 3"
       * (not necessarily that exact string).
       * The string must be double-quoted.
       * &#42; &#42;&#42;status:`<enum>`&#42;&#42;
       * For example: &#42;&#42;status:active&#42;&#42;
       * Returns beacons whose status matches the given value. Values must be
       * one of the Beacon.Status enum values (case insensitive). Accepts
       * multiple filters which will be combined with OR logic.
       * &#42; &#42;&#42;stability:`<enum>`&#42;&#42;
       * For example: &#42;&#42;stability:mobile&#42;&#42;
       * Returns beacons whose expected stability matches the given value.
       * Values must be one of the Beacon.Stability enum values (case
       * insensitive). Accepts multiple filters which will be combined with
       * OR logic.
       * &#42; &#42;&#42;place\_id:`"<string>"`&#42;&#42;
       * For example: &#42;&#42;place\_id:"ChIJVSZzVR8FdkgRXGmmm6SslKw="&#42;&#42;
       * Returns beacons explicitly registered at the given place, expressed as
       * a Place ID obtained from [Google Places API](/places/place-id). Does not
       * match places inside the given place. Does not consider the beacon's
       * actual location (which may be different from its registered place).
       * Accepts multiple filters that will be combined with OR logic. The place
       * ID must be double-quoted.
       * &#42; &#42;&#42;registration\_time`[<|>|<=|>=]<integer>`&#42;&#42;
       * For example: &#42;&#42;registration\_time>=1433116800&#42;&#42;
       * Returns beacons whose registration time matches the given filter.
       * Supports the operators: <, >, <=, and >=. Timestamp must be expressed as
       * an integer number of seconds since midnight January 1, 1970 UTC. Accepts
       * at most two filters that will be combined with AND logic, to support
       * "between" semantics. If more than two are supplied, the latter ones are
       * ignored.
       * &#42; &#42;&#42;lat:`<double> lng:<double> radius:<integer>`&#42;&#42;
       * For example: &#42;&#42;lat:51.1232343 lng:-1.093852 radius:1000&#42;&#42;
       * Returns beacons whose registered location is within the given circle.
       * When any of these fields are given, all are required. Latitude and
       * longitude must be decimal degrees between -90.0 and 90.0 and between
       * -180.0 and 180.0 respectively. Radius must be an integer number of
       * meters between 10 and 1,000,000 (1000 km).
       * &#42; &#42;&#42;property:`"<string>=<string>"`&#42;&#42;
       * For example: &#42;&#42;property:"battery-type=CR2032"&#42;&#42;
       * Returns beacons which have a property of the given name and value.
       * Supports multiple filters which will be combined with OR logic.
       * The entire name=value string must be double-quoted as one string.
       * &#42; &#42;&#42;attachment\_type:`"<string>"`&#42;&#42;
       * For example: &#42;&#42;attachment_type:"my-namespace/my-type"&#42;&#42;
       * Returns beacons having at least one attachment of the given namespaced
       * type. Supports "any within this namespace" via the partial wildcard
       * syntax: "my-namespace/&#42;". Supports multiple filters which will be
       * combined with OR logic. The string must be double-quoted.
       * &#42; &#42;&#42;indoor\_level:`"<string>"`&#42;&#42;
       * For example: &#42;&#42;indoor\_level:"1"&#42;&#42;
       * Returns beacons which are located on the given indoor level. Accepts
       * multiple filters that will be combined with OR logic.
       *
       * Multiple filters on the same field are combined with OR logic (except
       * registration_time which is combined with AND logic).
       * Multiple filters on different fields are combined with AND logic.
       * Filters should be separated by spaces.
       *
       * As with any HTTP query string parameter, the whole filter expression must
       * be URL-encoded.
       *
       * Example REST request:
       * `GET /v1beta1/beacons?q=status:active%20lat:51.123%20lng:-1.095%20radius:1000`
       */
      q?: string,

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
    }): Request<proximitybeacon$ListBeaconsResponse>;

    /**
     * Registers a previously unregistered beacon given its `advertisedId`.
     * These IDs are unique within the system. An ID can be registered only once.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * The project id of the project the beacon will be registered to. If
       * the project id is not specified then the project making the request
       * is used.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$Beacon>;

    /**
     * Updates the information about the specified beacon. &#42;&#42;Any field that you do
     * not populate in the submitted beacon will be permanently erased&#42;&#42;, so you
     * should follow the "read, modify, write" pattern to avoid inadvertently
     * destroying data.
     *
     * Changes to the beacon status via this method will be  silently ignored.
     * To update beacon status, use the separate methods on this API for
     * activation, deactivation, and decommissioning.
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42; permissions in the
     * Google Developers Console project.
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
       * Resource name of this beacon. A beacon name has the format
       * "beacons/N!beaconId" where the beaconId is the base16 ID broadcast by
       * the beacon and N is a code for the beacon's type. Possible values are
       * `3` for Eddystone, `1` for iBeacon, or `5` for AltBeacon.
       *
       * This field must be left empty when registering. After reading a beacon,
       * clients can use the name for future operations.
       */
      beaconName: string,

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
       * The project id of the beacon to update. If the project id is not
       * specified then the project making the request is used. The project id
       * must match the project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$Beacon>;
    attachments: proximitybeacon$AttachmentsResource;
    diagnostics: proximitybeacon$DiagnosticsResource;
  }

  declare interface proximitybeacon$NamespacesResource {
    /**
     * Lists all attachment namespaces owned by your Google Developers Console
     * project. Attachment data associated with a beacon must include a
     * namespaced type, and the namespace must be owned by your project.
     *
     * Authenticate using an [OAuth access token](https://developers.google.com/identity/protocols/OAuth2)
     * from a signed-in user with &#42;&#42;viewer&#42;&#42;, &#42;&#42;Is owner&#42;&#42; or &#42;&#42;Can edit&#42;&#42;
     * permissions in the Google Developers Console project.
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
       * The project id to list namespaces under.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$ListNamespacesResponse>;

    /**
     * Updates the information about the specified namespace. Only the namespace
     * visibility can be updated.
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
       * Resource name of this namespace. Namespaces names have the format:
       * <code>namespaces/<var>namespace</var></code>.
       */
      namespaceName: string,

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
       * The project id of the namespace to update. If the project id is not
       * specified then the project making the request is used. The project id
       * must match the project that owns the beacon.
       * Optional.
       */
      projectId?: string,

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
    }): Request<proximitybeacon$Namespace>;
  }

  declare interface proximitybeacon$V1beta1Resource {
    /**
     * Gets the Proximity Beacon API's current public key and associated
     * parameters used to initiate the Diffie-Hellman key exchange required to
     * register a beacon that broadcasts the Eddystone-EID format. This key
     * changes periodically; clients may cache it and re-use the same public key
     * to provision and register multiple beacons. However, clients should be
     * prepared to refresh this key when they encounter an error registering an
     * Eddystone-EID beacon.
     */
    getEidparams(request: {
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
    }): Request<proximitybeacon$EphemeralIdRegistrationParams>;
  }
}
