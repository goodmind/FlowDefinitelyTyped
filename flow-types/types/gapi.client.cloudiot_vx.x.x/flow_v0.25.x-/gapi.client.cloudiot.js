declare module "gapi.client.cloudiot" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    projects: typeof gapi$client$projects
  };

  /**
   * Load Google Cloud IoT API v1
   */
  declare function gapi$client$load(
    name: "cloudiot",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudiot",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$projects: cloudiot$ProjectsResource;

  declare interface gapi$client$cloudiot$AuditConfig {
    /**
     * The configuration for logging of each type of permission.
     * Next ID: 4
     */
    auditLogConfigs?: cloudiot$AuditLogConfig[];
    exemptedMembers?: string[];

    /**
     * Specifies a service that will be enabled for audit logging.
     * For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.
     * `allServices` is a special value that covers all services.
     */
    service?: string;
  }

  declare interface gapi$client$cloudiot$AuditLogConfig {
    /**
     * Specifies the identities that do not cause logging for this type of
     * permission.
     * Follows the same format of Binding.members.
     */
    exemptedMembers?: string[];

    /**
     * The log type that this config enables.
     */
    logType?: string;
  }

  declare interface gapi$client$cloudiot$Binding {
    /**
     * The condition that is associated with this binding.
     * NOTE: an unsatisfied condition will not allow user access via current
     * binding. Different bindings, including their conditions, are examined
     * independently.
     * This field is GOOGLE_INTERNAL.
     */
    condition?: cloudiot$Expr;

    /**
     * Specifies the identities requesting access for a Cloud Platform resource.
     * `members` can have the following values:
     *
     * &#42; `allUsers`: A special identifier that represents anyone who is
     * on the internet; with or without a Google account.
     *
     * &#42; `allAuthenticatedUsers`: A special identifier that represents anyone
     * who is authenticated with a Google account or a service account.
     *
     * &#42; `user:{emailid}`: An email address that represents a specific Google
     * account. For example, `alice@gmail.com` or `joe@example.com`.
     *
     *
     * &#42; `serviceAccount:{emailid}`: An email address that represents a service
     * account. For example, `my-other-app@appspot.gserviceaccount.com`.
     *
     * &#42; `group:{emailid}`: An email address that represents a Google group.
     * For example, `admins@example.com`.
     *
     *
     * &#42; `domain:{domain}`: A Google Apps domain name that represents all the
     * users of that domain. For example, `google.com` or `example.com`.
     */
    members?: string[];

    /**
     * Role that is assigned to `members`.
     * For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
     * Required
     */
    role?: string;
  }

  declare interface gapi$client$cloudiot$Device {
    /**
     * If a device is blocked, connections or requests from this device will fail.
     * Can be used to temporarily prevent the device from connecting if, for
     * example, the sensor is generating bad data and needs maintenance.
     */
    blocked?: boolean;

    /**
     * The most recent device configuration, which is eventually sent from
     * Cloud IoT Core to the device. If not present on creation, the
     * configuration will be initialized with an empty payload and version value
     * of `1`. To update this field after creation, use the
     * `DeviceManager.ModifyCloudToDeviceConfig` method.
     */
    config?: cloudiot$DeviceConfig;

    /**
     * The credentials used to authenticate this device. To allow credential
     * rotation without interruption, multiple device credentials can be bound to
     * this device. No more than 3 credentials can be bound to a single device at
     * a time. When new credentials are added to a device, they are verified
     * against the registry credentials. For details, see the description of the
     * `DeviceRegistry.credentials` field.
     */
    credentials?: cloudiot$DeviceCredential[];

    /**
     * The user-defined device identifier. The device ID must be unique
     * within a device registry.
     */
    id?: string;

    /**
     * [Output only] The last time a cloud-to-device config version acknowledgment
     * was received from the device. This field is only for configurations
     * sent through MQTT.
     */
    lastConfigAckTime?: string;

    /**
     * [Output only] The last time a cloud-to-device config version was sent to
     * the device.
     */
    lastConfigSendTime?: string;

    /**
     * [Output only] The error message of the most recent error, such as a failure
     * to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this
     * field. If no errors have occurred, this field has an empty message
     * and the status code 0 == OK. Otherwise, this field is expected to have a
     * status code other than OK.
     */
    lastErrorStatus?: cloudiot$Status;

    /**
     * [Output only] The time the most recent error occurred, such as a failure to
     * publish to Cloud Pub/Sub. This field is the timestamp of
     * 'last_error_status'.
     */
    lastErrorTime?: string;

    /**
     * [Output only] The last time a telemetry event was received. Timestamps are
     * periodically collected and written to storage; they may be stale by a few
     * minutes.
     */
    lastEventTime?: string;

    /**
     * [Output only] The last time a heartbeat was received. Timestamps are
     * periodically collected and written to storage; they may be stale by a few
     * minutes. This field is only for devices connecting through MQTT.
     */
    lastHeartbeatTime?: string;

    /**
     * [Output only] The last time a state event was received. Timestamps are
     * periodically collected and written to storage; they may be stale by a few
     * minutes.
     */
    lastStateTime?: string;

    /**
     * The metadata key-value pairs assigned to the device. This metadata is not
     * interpreted or indexed by Cloud IoT Core. It can be used to add contextual
     * information for the device.
     *
     * Keys must conform to the regular expression [a-zA-Z0-9-_]+ and be less than
     * 128 bytes in length.
     *
     * Values are free-form strings. Each value must be less than or equal to 32
     * KB in size.
     *
     * The total size of all keys and values must be less than 256 KB, and the
     * maximum number of key-value pairs is 500.
     */
    metadata?: Record<string, string>;

    /**
     * The resource path name. For example,
     * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
     * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
     * When `name` is populated as a response from the service, it always ends
     * in the device numeric ID.
     */
    name?: string;

    /**
     * [Output only] A server-defined unique numeric ID for the device. This is a
     * more compact way to identify devices, and it is globally unique.
     */
    numId?: string;

    /**
     * [Output only] The state most recently received from the device. If no state
     * has been reported, this field is not present.
     */
    state?: cloudiot$DeviceState;
  }

  declare interface gapi$client$cloudiot$DeviceConfig {
    /**
     * The device configuration data.
     */
    binaryData?: string;

    /**
     * [Output only] The time at which this configuration version was updated in
     * Cloud IoT Core. This timestamp is set by the server.
     */
    cloudUpdateTime?: string;

    /**
     * [Output only] The time at which Cloud IoT Core received the
     * acknowledgment from the device, indicating that the device has received
     * this configuration version. If this field is not present, the device has
     * not yet acknowledged that it received this version. Note that when
     * the config was sent to the device, many config versions may have been
     * available in Cloud IoT Core while the device was disconnected, and on
     * connection, only the latest version is sent to the device. Some
     * versions may never be sent to the device, and therefore are never
     * acknowledged. This timestamp is set by Cloud IoT Core.
     */
    deviceAckTime?: string;

    /**
     * [Output only] The version of this update. The version number is assigned by
     * the server, and is always greater than 0 after device creation. The
     * version must be 0 on the `CreateDevice` request if a `config` is
     * specified; the response of `CreateDevice` will always have a value of 1.
     */
    version?: string;
  }

  declare interface gapi$client$cloudiot$DeviceCredential {
    /**
     * [Optional] The time at which this credential becomes invalid. This
     * credential will be ignored for new client authentication requests after
     * this timestamp; however, it will not be automatically deleted.
     */
    expirationTime?: string;

    /**
     * A public key used to verify the signature of JSON Web Tokens (JWTs).
     * When adding a new device credential, either via device creation or via
     * modifications, this public key credential may be required to be signed by
     * one of the registry level certificates. More specifically, if the
     * registry contains at least one certificate, any new device credential
     * must be signed by one of the registry certificates. As a result,
     * when the registry contains certificates, only X.509 certificates are
     * accepted as device credentials. However, if the registry does
     * not contain a certificate, self-signed certificates and public keys will
     * be accepted. New device credentials must be different from every
     * registry-level certificate.
     */
    publicKey?: cloudiot$PublicKeyCredential;
  }

  declare interface gapi$client$cloudiot$DeviceRegistry {
    /**
     * The credentials used to verify the device credentials. No more than 10
     * credentials can be bound to a single registry at a time. The verification
     * process occurs at the time of device creation or update. If this field is
     * empty, no verification is performed. Otherwise, the credentials of a newly
     * created device or added credentials of an updated device should be signed
     * with one of these registry credentials.
     *
     * Note, however, that existing devices will never be affected by
     * modifications to this list of credentials: after a device has been
     * successfully created in a registry, it should be able to connect even if
     * its registry credentials are revoked, deleted, or modified.
     */
    credentials?: cloudiot$RegistryCredential[];

    /**
     * The configuration for notification of telemetry events received from the
     * device. All telemetry events that were successfully published by the
     * device and acknowledged by Cloud IoT Core are guaranteed to be
     * delivered to Cloud Pub/Sub. Only the first configuration is used.
     */
    eventNotificationConfigs?: cloudiot$EventNotificationConfig[];

    /**
     * The DeviceService (HTTP) configuration for this device registry.
     */
    httpConfig?: cloudiot$HttpConfig;

    /**
     * The identifier of this device registry. For example, `myRegistry`.
     */
    id?: string;

    /**
     * The MQTT configuration for this device registry.
     */
    mqttConfig?: cloudiot$MqttConfig;

    /**
     * The resource path name. For example,
     * `projects/example-project/locations/us-central1/registries/my-registry`.
     */
    name?: string;

    /**
     * The configuration for notification of new states received from the device.
     * State updates are guaranteed to be stored in the state history, but
     * notifications to Cloud Pub/Sub are not guaranteed. For example, if
     * permissions are misconfigured or the specified topic doesn't exist, no
     * notification will be published but the state will still be stored in Cloud
     * IoT Core.
     */
    stateNotificationConfig?: cloudiot$StateNotificationConfig;
  }

  declare interface gapi$client$cloudiot$DeviceState {
    /**
     * The device state data.
     */
    binaryData?: string;

    /**
     * [Output only] The time at which this state version was updated in Cloud
     * IoT Core.
     */
    updateTime?: string;
  }

  declare interface gapi$client$cloudiot$EventNotificationConfig {
    /**
     * A Cloud Pub/Sub topic name. For example,
     * `projects/myProject/topics/deviceEvents`.
     */
    pubsubTopicName?: string;
  }

  declare interface gapi$client$cloudiot$Expr {
    /**
     * An optional description of the expression. This is a longer text which
     * describes the expression, e.g. when hovered over it in a UI.
     */
    description?: string;

    /**
     * Textual representation of an expression in
     * Common Expression Language syntax.
     *
     * The application context of the containing message determines which
     * well-known feature set of CEL is supported.
     */
    expression?: string;

    /**
     * An optional string indicating the location of the expression for error
     * reporting, e.g. a file name and a position in the file.
     */
    location?: string;

    /**
     * An optional title for the expression, i.e. a short string describing
     * its purpose. This can be used e.g. in UIs which allow to enter the
     * expression.
     */
    title?: string;
  }

  declare interface gapi$client$cloudiot$HttpConfig {
    /**
     * If enabled, allows devices to use DeviceService via the HTTP protocol.
     * Otherwise, any requests to DeviceService will fail for this registry.
     */
    httpEnabledState?: string;
  }

  declare interface gapi$client$cloudiot$ListDeviceConfigVersionsResponse {
    /**
     * The device configuration for the last few versions. Versions are listed
     * in decreasing order, starting from the most recent one.
     */
    deviceConfigs?: gapi$client$cloudiot$DeviceConfig[];
  }

  declare interface gapi$client$cloudiot$ListDeviceRegistriesResponse {
    /**
     * The registries that matched the query.
     */
    deviceRegistries?: gapi$client$cloudiot$DeviceRegistry[];

    /**
     * If not empty, indicates that there may be more registries that match the
     * request; this value should be passed in a new
     * `ListDeviceRegistriesRequest`.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudiot$ListDeviceStatesResponse {
    /**
     * The last few device states. States are listed in descending order of server
     * update time, starting from the most recent one.
     */
    deviceStates?: gapi$client$cloudiot$DeviceState[];
  }

  declare interface gapi$client$cloudiot$ListDevicesResponse {
    /**
     * The devices that match the request.
     */
    devices?: gapi$client$cloudiot$Device[];

    /**
     * If not empty, indicates that there may be more devices that match the
     * request; this value should be passed in a new `ListDevicesRequest`.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudiot$ModifyCloudToDeviceConfigRequest {
    /**
     * The configuration data for the device.
     */
    binaryData?: string;

    /**
     * The version number to update. If this value is zero, it will not check the
     * version number of the server and will always update the current version;
     * otherwise, this update will fail if the version number found on the server
     * does not match this version number. This is used to support multiple
     * simultaneous updates without losing data.
     */
    versionToUpdate?: string;
  }

  declare interface gapi$client$cloudiot$MqttConfig {
    /**
     * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT
     * connections to this registry will fail.
     */
    mqttEnabledState?: string;
  }

  declare interface gapi$client$cloudiot$Policy {
    /**
     * Specifies cloud audit logging configuration for this policy.
     */
    auditConfigs?: gapi$client$cloudiot$AuditConfig[];

    /**
     * Associates a list of `members` to a `role`.
     * `bindings` with no members will result in an error.
     */
    bindings?: gapi$client$cloudiot$Binding[];

    /**
     * `etag` is used for optimistic concurrency control as a way to help
     * prevent simultaneous updates of a policy from overwriting each other.
     * It is strongly suggested that systems make use of the `etag` in the
     * read-modify-write cycle to perform policy updates in order to avoid race
     * conditions: An `etag` is returned in the response to `getIamPolicy`, and
     * systems are expected to put that etag in the request to `setIamPolicy` to
     * ensure that their change will be applied to the same version of the policy.
     *
     * If no `etag` is provided in the call to `setIamPolicy`, then the existing
     * policy is overwritten blindly.
     */
    etag?: string;
    iamOwned?: boolean;

    /**
     * Version of the `Policy`. The default version is 0.
     */
    version?: number;
  }

  declare interface gapi$client$cloudiot$PublicKeyCertificate {
    /**
     * The certificate data.
     */
    certificate?: string;

    /**
     * The certificate format.
     */
    format?: string;

    /**
     * [Output only] The certificate details. Used only for X.509 certificates.
     */
    x509Details?: cloudiot$X509CertificateDetails;
  }

  declare interface gapi$client$cloudiot$PublicKeyCredential {
    /**
     * The format of the key.
     */
    format?: string;

    /**
     * The key data.
     */
    key?: string;
  }

  declare interface gapi$client$cloudiot$RegistryCredential {
    /**
     * A public key certificate used to verify the device credentials.
     */
    publicKeyCertificate?: gapi$client$cloudiot$PublicKeyCertificate;
  }

  declare interface gapi$client$cloudiot$SetIamPolicyRequest {
    /**
     * REQUIRED: The complete policy to be applied to the `resource`. The size of
     * the policy is limited to a few 10s of KB. An empty policy is a
     * valid policy but certain Cloud Platform services (such as Projects)
     * might reject them.
     */
    policy?: gapi$client$cloudiot$Policy;

    /**
     * OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
     * the fields in the mask will be modified. If no mask is provided, the
     * following default mask is used:
     * paths: "bindings, etag"
     * This field is only used by Cloud IAM.
     */
    updateMask?: string;
  }

  declare interface gapi$client$cloudiot$StateNotificationConfig {
    /**
     * A Cloud Pub/Sub topic name. For example,
     * `projects/myProject/topics/deviceEvents`.
     */
    pubsubTopicName?: string;
  }

  declare interface gapi$client$cloudiot$Status {
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

  declare interface gapi$client$cloudiot$TestIamPermissionsRequest {
    /**
     * The set of permissions to check for the `resource`. Permissions with
     * wildcards (such as '&#42;' or 'storage.&#42;') are not allowed. For more
     * information see
     * [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
     */
    permissions?: string[];
  }

  declare interface gapi$client$cloudiot$TestIamPermissionsResponse {
    /**
     * A subset of `TestPermissionsRequest.permissions` that the caller is
     * allowed.
     */
    permissions?: string[];
  }

  declare interface gapi$client$cloudiot$X509CertificateDetails {
    /**
     * The time the certificate becomes invalid.
     */
    expiryTime?: string;

    /**
     * The entity that signed the certificate.
     */
    issuer?: string;

    /**
     * The type of public key in the certificate.
     */
    publicKeyType?: string;

    /**
     * The algorithm used to sign the certificate.
     */
    signatureAlgorithm?: string;

    /**
     * The time the certificate becomes valid.
     */
    startTime?: string;

    /**
     * The entity the certificate and public key belong to.
     */
    subject?: string;
  }

  declare interface gapi$client$cloudiot$ConfigVersionsResource {
    /**
     * Lists the last few versions of the device configuration in descending
     * order (i.e.: newest first).
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
       * The name of the device. For example,
       * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
       * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
       */
      name: string,

      /**
       * The number of versions to list. Versions are listed in decreasing order of
       * the version number. The maximum number of versions retained is 10. If this
       * value is zero, it will return all the versions available.
       */
      numVersions?: number,

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
    }): Request<gapi$client$cloudiot$ListDeviceConfigVersionsResponse>;
  }

  declare interface gapi$client$cloudiot$StatesResource {
    /**
     * Lists the last few versions of the device state in descending order (i.e.:
     * newest first).
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
       * The name of the device. For example,
       * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
       * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
       */
      name: string,

      /**
       * The number of states to list. States are listed in descending order of
       * update time. The maximum number of states retained is 10. If this
       * value is zero, it will return all the states available.
       */
      numStates?: number,

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
    }): Request<gapi$client$cloudiot$ListDeviceStatesResponse>;
  }

  declare interface gapi$client$cloudiot$DevicesResource {
    /**
     * Creates a device in a device registry.
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
       * The name of the device registry where this device should be created.
       * For example,
       * `projects/example-project/locations/us-central1/registries/my-registry`.
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
    }): Request<gapi$client$cloudiot$Device>;

    /**
     * Deletes a device.
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
       * The name of the device. For example,
       * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
       * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
     * Gets details about a device.
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
       * The name of the device. For example,
       * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
       * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
    }): Request<gapi$client$cloudiot$Device>;

    /**
     * List devices in a device registry.
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
       * A list of device string identifiers. If empty, it will ignore this field.
       * For example, `['device0', 'device12']`. This field cannot hold more than
       * 10,000 entries.
       */
      deviceIds?: string,

      /**
       * A list of device numerical ids. If empty, it will ignore this field. This
       * field cannot hold more than 10,000 entries.
       */
      deviceNumIds?: string,

      /**
       * The fields of the `Device` resource to be returned in the response. The
       * fields `id`, and `num_id` are always returned by default, along with any
       * other fields specified.
       */
      fieldMask?: string,

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
       * The maximum number of devices to return in the response. If this value
       * is zero, the service will select a default size. A call may return fewer
       * objects than requested, but if there is a non-empty `page_token`, it
       * indicates that more entries are available.
       */
      pageSize?: number,

      /**
       * The value returned by the last `ListDevicesResponse`; indicates
       * that this is a continuation of a prior `ListDevices` call, and
       * that the system should return the next page of data.
       */
      pageToken?: string,

      /**
       * The device registry path. Required. For example,
       * `projects/my-project/locations/us-central1/registries/my-registry`.
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
    }): Request<gapi$client$cloudiot$ListDevicesResponse>;

    /**
     * Modifies the configuration for the device, which is eventually sent from
     * the Cloud IoT Core servers. Returns the modified configuration version and
     * its metadata.
     */
    modifyCloudToDeviceConfig(request: {
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
       * The name of the device. For example,
       * `projects/p0/locations/us-central1/registries/registry0/devices/device0` or
       * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
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
    }): Request<gapi$client$cloudiot$DeviceConfig>;

    /**
     * Updates a device.
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
       * The resource path name. For example,
       * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
       * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
       * When `name` is populated as a response from the service, it always ends
       * in the device numeric ID.
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
       * Only updates the `device` fields indicated by this mask.
       * The field mask must not be empty, and it must not contain fields that
       * are immutable or only set by the server.
       * Mutable top-level fields: `credentials`, `enabled_state`, and `metadata`
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
    }): Request<gapi$client$cloudiot$Device>;
    configVersions: gapi$client$cloudiot$ConfigVersionsResource;
    states: gapi$client$cloudiot$StatesResource;
  }

  declare interface gapi$client$cloudiot$RegistriesResource {
    /**
     * Creates a device registry that contains devices.
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
       * The project and cloud region where this device registry must be created.
       * For example, `projects/example-project/locations/us-central1`.
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
    }): Request<gapi$client$cloudiot$DeviceRegistry>;

    /**
     * Deletes a device registry configuration.
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
       * The name of the device registry. For example,
       * `projects/example-project/locations/us-central1/registries/my-registry`.
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
     * Gets a device registry configuration.
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
       * The name of the device registry. For example,
       * `projects/example-project/locations/us-central1/registries/my-registry`.
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
    }): Request<gapi$client$cloudiot$DeviceRegistry>;

    /**
     * Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
     */
    getIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudiot$Policy>;

    /**
     * Lists device registries.
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
       * The maximum number of registries to return in the response. If this value
       * is zero, the service will select a default size. A call may return fewer
       * objects than requested, but if there is a non-empty `page_token`, it
       * indicates that more entries are available.
       */
      pageSize?: number,

      /**
       * The value returned by the last `ListDeviceRegistriesResponse`; indicates
       * that this is a continuation of a prior `ListDeviceRegistries` call, and
       * that the system should return the next page of data.
       */
      pageToken?: string,

      /**
       * The project and cloud region path. For example,
       * `projects/example-project/locations/us-central1`.
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
    }): Request<gapi$client$cloudiot$ListDeviceRegistriesResponse>;

    /**
     * Updates a device registry configuration.
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
       * The resource path name. For example,
       * `projects/example-project/locations/us-central1/registries/my-registry`.
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
       * Only updates the `device_registry` fields indicated by this mask.
       * The field mask must not be empty, and it must not contain fields that
       * are immutable or only set by the server.
       * Mutable top-level fields: `event_notification_config`, `mqtt_config`, and
       * `state_notification_config`.
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
    }): Request<gapi$client$cloudiot$DeviceRegistry>;

    /**
     * Sets the access control policy on the specified resource. Replaces any
     * existing policy.
     */
    setIamPolicy(request: {
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
       * REQUIRED: The resource for which the policy is being specified.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudiot$Policy>;

    /**
     * Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     */
    testIamPermissions(request: {
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
       * REQUIRED: The resource for which the policy detail is being requested.
       * See the operation documentation for the appropriate value for this field.
       */
      resource: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudiot$TestIamPermissionsResponse>;
    devices: gapi$client$cloudiot$DevicesResource;
  }

  declare interface gapi$client$cloudiot$LocationsResource {
    registries: gapi$client$cloudiot$RegistriesResource;
  }

  declare interface gapi$client$cloudiot$ProjectsResource {
    locations: gapi$client$cloudiot$LocationsResource;
  }
}
