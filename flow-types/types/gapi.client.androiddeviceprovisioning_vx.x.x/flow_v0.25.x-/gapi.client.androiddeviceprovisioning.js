declare module "gapi.client.androiddeviceprovisioning" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    operations: typeof client$operations,
    partners: typeof client$partners
  };

  /**
   * Load Android Device Provisioning Partner API v1
   */
  declare function client$load(
    name: "androiddeviceprovisioning",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "androiddeviceprovisioning",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$operations: androiddeviceprovisioning$androiddeviceprovisioning$OperationsResource;

  declare var client$partners: androiddeviceprovisioning$androiddeviceprovisioning$PartnersResource;

  declare interface androiddeviceprovisioning$ClaimDeviceRequest {
    /**
     * The customer to claim for.
     */
    customerId?: string;

    /**
     * The device identifier of the device to claim.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * The section to claim.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$ClaimDeviceResponse {
    /**
     * The device ID of the claimed device.
     */
    deviceId?: string;

    /**
     * The resource name of the device in the format
     * `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     */
    deviceName?: string;
  }

  declare interface androiddeviceprovisioning$ClaimDevicesRequest {
    /**
     * List of claims.
     */
    claims?: androiddeviceprovisioning$PartnerClaim[];
  }

  declare interface androiddeviceprovisioning$Company {
    /**
     * Input only. Optional. Email address of customer's users in the admin role.
     * Each email address must be associated with a Google Account.
     */
    adminEmails?: string[];

    /**
     * Output only. The ID of the company. Assigned by the server.
     */
    companyId?: string;

    /**
     * Required. The name of the company. For example _XYZ Corp_. Characters
     * allowed are: Latin letters, numerals, hyphens, and spaces. Displayed to the
     * customer's employees in the zero-touch enrollment portal.
     */
    companyName?: string;

    /**
     * Output only. The API resource name of the company in the format
     * `partners/[PARTNER_ID]/customers/[CUSTOMER_ID]`. Assigned by the server.
     */
    name?: string;

    /**
     * Input only. Email address of customer's users in the owner role. At least
     * one `owner_email` is required. Each email address must be associated with a
     * Google Account. Owners share the same access as admins but can also add,
     * delete, and edit your organization's portal users.
     */
    ownerEmails?: string[];
  }

  declare interface androiddeviceprovisioning$CreateCustomerRequest {
    /**
     * Required. The company data to populate the new customer. Must contain a
     * value for `companyName` and at least one `owner_email` that's associated
     * with a Google Account. The values for `companyId` and `name` must be empty.
     */
    customer?: androiddeviceprovisioning$Company;
  }

  declare interface androiddeviceprovisioning$Device {
    /**
     * Claims.
     */
    claims?: androiddeviceprovisioning$DeviceClaim[];

    /**
     * The resource name of the configuration.
     * Only set for customers.
     */
    configuration?: string;

    /**
     * Device ID.
     */
    deviceId?: string;

    /**
     * Device identifier.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * Device metadata.
     */
    deviceMetadata?: androiddeviceprovisioning$DeviceMetadata;

    /**
     * Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     */
    name?: string;
  }

  declare interface androiddeviceprovisioning$DeviceClaim {
    /**
     * Owner ID.
     */
    ownerCompanyId?: string;

    /**
     * Section type of the device claim.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$DeviceIdentifier {
    /**
     * IMEI number.
     */
    imei?: string;

    /**
     * Manufacturer name to match `android.os.Build.MANUFACTURER` (required).
     * Allowed values listed in
     * [manufacturer names](/zero-touch/resources/manufacturer-names).
     */
    manufacturer?: string;

    /**
     * MEID number.
     */
    meid?: string;

    /**
     * Serial number (optional).
     */
    serialNumber?: string;
  }

  declare interface androiddeviceprovisioning$DeviceMetadata {
    /**
     * Metadata entries
     */
    entries?: Record<string, string>;
  }

  declare interface androiddeviceprovisioning$DevicesLongRunningOperationMetadata {
    /**
     * Number of devices parsed in your requests.
     */
    devicesCount?: number;

    /**
     * The overall processing status.
     */
    processingStatus?: string;

    /**
     * Processing progress from 0 to 100.
     */
    progress?: number;
  }

  declare interface androiddeviceprovisioning$DevicesLongRunningOperationResponse {
    /**
     * Processing status for each device.
     * One `PerDeviceStatus` per device. The order is the same as in your requests.
     */
    perDeviceStatus?: androiddeviceprovisioning$OperationPerDevice[];

    /**
     * Number of succeesfully processed ones.
     */
    successCount?: number;
  }

  declare interface androiddeviceprovisioning$FindDevicesByDeviceIdentifierRequest {
    /**
     * The device identifier to search.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * Number of devices to show.
     */
    limit?: string;

    /**
     * Page token.
     */
    pageToken?: string;
  }

  declare interface androiddeviceprovisioning$FindDevicesByDeviceIdentifierResponse {
    /**
     * Found devices.
     */
    devices?: androiddeviceprovisioning$Device[];

    /**
     * Page token of the next page.
     */
    nextPageToken?: string;
  }

  declare interface androiddeviceprovisioning$FindDevicesByOwnerRequest {
    /**
     * List of customer IDs to search for.
     */
    customerId?: string[];

    /**
     * The number of devices to show in the result.
     */
    limit?: string;

    /**
     * Page token.
     */
    pageToken?: string;

    /**
     * The section type.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$FindDevicesByOwnerResponse {
    /**
     * Devices found.
     */
    devices?: androiddeviceprovisioning$Device[];

    /**
     * Page token of the next page.
     */
    nextPageToken?: string;
  }

  declare interface androiddeviceprovisioning$ListCustomersResponse {
    /**
     * List of customers related to this partner.
     */
    customers?: androiddeviceprovisioning$Company[];
  }

  declare interface androiddeviceprovisioning$Operation {
    /**
     * If the value is `false`, it means the operation is still in progress.
     * If `true`, the operation is completed, and either `error` or `response` is
     * available.
     */
    done?: boolean;

    /**
     * This field will always be not set if the operation is created by `claimAsync`, `unclaimAsync`, or `updateMetadataAsync`. In this case, error
     * information for each device is set in `response.perDeviceStatus.result.status`.
     */
    error?: androiddeviceprovisioning$Status;

    /**
     * This field will contain a `DevicesLongRunningOperationMetadata` object if the operation is created by `claimAsync`, `unclaimAsync`, or
     * `updateMetadataAsync`.
     */
    metadata?: Record<string, any>;

    /**
     * The server-assigned name, which is only unique within the same service that
     * originally returns it. If you use the default HTTP mapping, the
     * `name` should have the format of `operations/some/unique/name`.
     */
    name?: string;

    /**
     * This field will contain a `DevicesLongRunningOperationResponse` object if the operation is created by `claimAsync`, `unclaimAsync`, or
     * `updateMetadataAsync`.
     */
    response?: Record<string, any>;
  }

  declare interface androiddeviceprovisioning$OperationPerDevice {
    /**
     * Request to claim a device.
     */
    claim?: androiddeviceprovisioning$PartnerClaim;

    /**
     * Processing result for every device.
     */
    result?: androiddeviceprovisioning$PerDeviceStatusInBatch;

    /**
     * Request to unclaim a device.
     */
    unclaim?: androiddeviceprovisioning$PartnerUnclaim;

    /**
     * Request to set metadata for a device.
     */
    updateMetadata?: androiddeviceprovisioning$UpdateMetadataArguments;
  }

  declare interface androiddeviceprovisioning$PartnerClaim {
    /**
     * Customer ID to claim for.
     */
    customerId?: string;

    /**
     * Device identifier of the device.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * Metadata to set at claim.
     */
    deviceMetadata?: androiddeviceprovisioning$DeviceMetadata;

    /**
     * Section type to claim.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$PartnerUnclaim {
    /**
     * Device ID of the device.
     */
    deviceId?: string;

    /**
     * Device identifier of the device.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * Section type to unclaim.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$PerDeviceStatusInBatch {
    /**
     * Device ID of the device if process succeeds.
     */
    deviceId?: string;

    /**
     * Error identifier.
     */
    errorIdentifier?: string;

    /**
     * Error message.
     */
    errorMessage?: string;

    /**
     * Process result.
     */
    status?: string;
  }

  declare interface androiddeviceprovisioning$Status {
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

  declare interface androiddeviceprovisioning$UnclaimDeviceRequest {
    /**
     * The device ID returned by `ClaimDevice`.
     */
    deviceId?: string;

    /**
     * The device identifier you used when you claimed this device.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * The section type to unclaim for.
     */
    sectionType?: string;
  }

  declare interface androiddeviceprovisioning$UnclaimDevicesRequest {
    /**
     * List of devices to unclaim.
     */
    unclaims?: androiddeviceprovisioning$PartnerUnclaim[];
  }

  declare interface androiddeviceprovisioning$UpdateDeviceMetadataInBatchRequest {
    /**
     * List of metadata updates.
     */
    updates?: androiddeviceprovisioning$UpdateMetadataArguments[];
  }

  declare interface androiddeviceprovisioning$UpdateDeviceMetadataRequest {
    /**
     * The metdata to set.
     */
    deviceMetadata?: androiddeviceprovisioning$DeviceMetadata;
  }

  declare interface androiddeviceprovisioning$UpdateMetadataArguments {
    /**
     * Device ID of the device.
     */
    deviceId?: string;

    /**
     * Device identifier.
     */
    deviceIdentifier?: androiddeviceprovisioning$DeviceIdentifier;

    /**
     * The metadata to update.
     */
    deviceMetadata?: androiddeviceprovisioning$DeviceMetadata;
  }

  declare interface androiddeviceprovisioning$OperationsResource {
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
    }): Request<androiddeviceprovisioning$Operation>;
  }

  declare interface androiddeviceprovisioning$CustomersResource {
    /**
     * Creates a customer for zero-touch enrollment. After the method returns
     * successfully, admin and owner roles can manage devices and EMM configs
     * by calling API methods or using their zero-touch enrollment portal. The API
     * doesn't notify the customer that they have access.
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
       * Required. The parent resource ID in format `partners/[PARTNER_ID]` that
       * identifies the reseller.
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
    }): Request<androiddeviceprovisioning$Company>;

    /**
     * Lists the customers that are enrolled to the reseller identified by the
     * `partnerId` argument. This list includes customers that the reseller
     * created and customers that enrolled themselves using the portal.
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
       * The ID of the partner.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$ListCustomersResponse>;
  }

  declare interface androiddeviceprovisioning$DevicesResource {
    /**
     * Claim the device identified by device identifier.
     */
    claim(request: {
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
       * ID of the partner.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$ClaimDeviceResponse>;

    /**
     * Claim devices asynchronously.
     */
    claimAsync(request: {
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
       * Partner ID.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$Operation>;

    /**
     * Find devices by device identifier.
     */
    findByIdentifier(request: {
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
       * ID of the partner.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$FindDevicesByDeviceIdentifierResponse>;

    /**
     * Find devices by ownership.
     */
    findByOwner(request: {
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
       * ID of the partner.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$FindDevicesByOwnerResponse>;

    /**
     * Get a device.
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
       * Resource name in `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
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
    }): Request<androiddeviceprovisioning$Device>;

    /**
     * Update the metadata.
     */
    metadata(request: {
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
       * ID of the partner.
       */
      deviceId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The owner of the newly set metadata. Set this to the partner ID.
       */
      metadataOwnerId: string,

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
    }): Request<androiddeviceprovisioning$DeviceMetadata>;

    /**
     * Unclaim the device identified by the `device_id` or the `deviceIdentifier`.
     */
    unclaim(request: {
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
       * ID of the partner.
       */
      partnerId: string,

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
     * Unclaim devices asynchronously.
     */
    unclaimAsync(request: {
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
       * Partner ID.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$Operation>;

    /**
     * Set metadata in batch asynchronously.
     */
    updateMetadataAsync(request: {
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
       * Partner ID.
       */
      partnerId: string,

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
    }): Request<androiddeviceprovisioning$Operation>;
  }

  declare interface androiddeviceprovisioning$PartnersResource {
    customers: androiddeviceprovisioning$CustomersResource;
    devices: androiddeviceprovisioning$DevicesResource;
  }
}
