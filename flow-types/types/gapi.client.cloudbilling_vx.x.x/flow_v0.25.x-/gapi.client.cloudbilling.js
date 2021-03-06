declare module "gapi.client.cloudbilling" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    billingAccounts: typeof gapi$client$billingAccounts,
    projects: typeof gapi$client$projects,
    services: typeof gapi$client$services
  };

  /**
   * Load Google Cloud Billing API v1
   */
  declare function gapi$client$load(
    name: "cloudbilling",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "cloudbilling",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$billingAccounts: cloudbilling$BillingAccountsResource;

  declare var gapi$client$projects: cloudbilling$ProjectsResource;

  declare var gapi$client$services: cloudbilling$ServicesResource;

  declare interface gapi$client$cloudbilling$AggregationInfo {
    /**
     * The number of intervals to aggregate over.
     * Example: If aggregation_level is "DAILY" and aggregation_count is 14,
     * aggregation will be over 14 days.
     */
    aggregationCount?: number;
    aggregationInterval?: string;
    aggregationLevel?: string;
  }

  declare interface gapi$client$cloudbilling$BillingAccount {
    /**
     * The display name given to the billing account, such as `My Billing
     *              * Account`. This name is displayed in the Google Cloud Console.
     */
    displayName?: string;

    /**
     * The resource name of the billing account. The resource name has the form
     * `billingAccounts/{billing_account_id}`. For example,
     * `billingAccounts/012345-567890-ABCDEF` would be the resource name for
     * billing account `012345-567890-ABCDEF`.
     */
    name?: string;

    /**
     * True if the billing account is open, and will therefore be charged for any
     * usage on associated projects. False if the billing account is closed, and
     * therefore projects associated with it will be unable to use paid services.
     */
    open?: boolean;
  }

  declare interface gapi$client$cloudbilling$Category {
    /**
     * The type of product the SKU refers to.
     * Example: "Compute", "Storage", "Network", "ApplicationServices" etc.
     */
    resourceFamily?: string;

    /**
     * A group classification for related SKUs.
     * Example: "RAM", "GPU", "Prediction", "Ops", "GoogleEgress" etc.
     */
    resourceGroup?: string;

    /**
     * The display name of the service this SKU belongs to.
     */
    serviceDisplayName?: string;

    /**
     * Represents how the SKU is consumed.
     * Example: "OnDemand", "Preemptible", "Commit1Mo", "Commit1Yr" etc.
     */
    usageType?: string;
  }

  declare interface gapi$client$cloudbilling$ListBillingAccountsResponse {
    /**
     * A list of billing accounts.
     */
    billingAccounts?: gapi$client$cloudbilling$BillingAccount[];

    /**
     * A token to retrieve the next page of results. To retrieve the next page,
     * call `ListBillingAccounts` again with the `page_token` field set to this
     * value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$cloudbilling$ListProjectBillingInfoResponse {
    /**
     * A token to retrieve the next page of results. To retrieve the next page,
     * call `ListProjectBillingInfo` again with the `page_token` field set to this
     * value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;

    /**
     * A list of `ProjectBillingInfo` resources representing the projects
     * associated with the billing account.
     */
    projectBillingInfo?: cloudbilling$ProjectBillingInfo[];
  }

  declare interface gapi$client$cloudbilling$ListServicesResponse {
    /**
     * A token to retrieve the next page of results. To retrieve the next page,
     * call `ListServices` again with the `page_token` field set to this
     * value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;

    /**
     * A list of services.
     */
    services?: cloudbilling$Service[];
  }

  declare interface gapi$client$cloudbilling$ListSkusResponse {
    /**
     * A token to retrieve the next page of results. To retrieve the next page,
     * call `ListSkus` again with the `page_token` field set to this
     * value. This field is empty if there are no more results to retrieve.
     */
    nextPageToken?: string;

    /**
     * The list of public SKUs of the given service.
     */
    skus?: cloudbilling$Sku[];
  }

  declare interface gapi$client$cloudbilling$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;

    /**
     * Number of nano (10^-9) units of the amount.
     * The value must be between -999,999,999 and +999,999,999 inclusive.
     * If `units` is positive, `nanos` must be positive or zero.
     * If `units` is zero, `nanos` can be positive, zero, or negative.
     * If `units` is negative, `nanos` must be negative or zero.
     * For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
     */
    nanos?: number;

    /**
     * The whole units of the amount.
     * For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.
     */
    units?: string;
  }

  declare interface gapi$client$cloudbilling$PricingExpression {
    /**
     * The base unit for the SKU which is the unit used in usage exports.
     * Example: "By"
     */
    baseUnit?: string;

    /**
     * Conversion factor for converting from price per usage_unit to price per
     * base_unit, and start_usage_amount to start_usage_amount in base_unit.
     * unit_price / base_unit_conversion_factor = price per base_unit.
     * start_usage_amount &#42; base_unit_conversion_factor = start_usage_amount in
     * base_unit.
     */
    baseUnitConversionFactor?: number;

    /**
     * The base unit in human readable form.
     * Example: "byte".
     */
    baseUnitDescription?: string;

    /**
     * The recommended quantity of units for displaying pricing info. When
     * displaying pricing info it is recommended to display:
     * (unit_price &#42; display_quantity) per display_quantity usage_unit.
     * This field does not affect the pricing formula and is for display purposes
     * only.
     * Example: If the unit_price is "0.0001 USD", the usage_unit is "GB" and
     * the display_quantity is "1000" then the recommended way of displaying the
     * pricing info is "0.10 USD per 1000 GB"
     */
    displayQuantity?: number;

    /**
     * The list of tiered rates for this pricing. The total cost is computed by
     * applying each of the tiered rates on usage. This repeated list is sorted
     * by ascending order of start_usage_amount.
     */
    tieredRates?: cloudbilling$TierRate[];

    /**
     * The short hand for unit of usage this pricing is specified in.
     * Example: usage_unit of "GiBy" means that usage is specified in "Gibi Byte".
     */
    usageUnit?: string;

    /**
     * The unit of usage in human readable form.
     * Example: "gibi byte".
     */
    usageUnitDescription?: string;
  }

  declare interface gapi$client$cloudbilling$PricingInfo {
    /**
     * Aggregation Info. This can be left unspecified if the pricing expression
     * doesn't require aggregation.
     */
    aggregationInfo?: gapi$client$cloudbilling$AggregationInfo;

    /**
     * Conversion rate for currency conversion, from USD to the currency specified
     * in the request. If the currency is not specified this defaults to 1.0.
     * Example: USD &#42; currency_conversion_rate = JPY
     */
    currencyConversionRate?: number;

    /**
     * The timestamp from which this pricing was effective.
     */
    effectiveTime?: string;

    /**
     * Expresses the pricing formula. See `PricingExpression` for an example.
     */
    pricingExpression?: gapi$client$cloudbilling$PricingExpression;

    /**
     * An optional human readable summary of the pricing information, has a
     * maximum length of 256 characters.
     */
    summary?: string;
  }

  declare interface gapi$client$cloudbilling$ProjectBillingInfo {
    /**
     * The resource name of the billing account associated with the project, if
     * any. For example, `billingAccounts/012345-567890-ABCDEF`.
     */
    billingAccountName?: string;

    /**
     * True if the project is associated with an open billing account, to which
     * usage on the project is charged. False if the project is associated with a
     * closed billing account, or no billing account at all, and therefore cannot
     * use paid services. This field is read-only.
     */
    billingEnabled?: boolean;

    /**
     * The resource name for the `ProjectBillingInfo`; has the form
     * `projects/{project_id}/billingInfo`. For example, the resource name for the
     * billing information for project `tokyo-rain-123` would be
     * `projects/tokyo-rain-123/billingInfo`. This field is read-only.
     */
    name?: string;

    /**
     * The ID of the project that this `ProjectBillingInfo` represents, such as
     * `tokyo-rain-123`. This is a convenience field so that you don't need to
     * parse the `name` field to obtain a project ID. This field is read-only.
     */
    projectId?: string;
  }

  declare interface gapi$client$cloudbilling$Service {
    /**
     * A human readable display name for this service.
     */
    displayName?: string;

    /**
     * The resource name for the service.
     * Example: "services/DA34-426B-A397"
     */
    name?: string;

    /**
     * The identifier for the service.
     * Example: "DA34-426B-A397"
     */
    serviceId?: string;
  }

  declare interface gapi$client$cloudbilling$Sku {
    /**
     * The category hierarchy of this SKU, purely for organizational purpose.
     */
    category?: gapi$client$cloudbilling$Category;

    /**
     * A human readable description of the SKU, has a maximum length of 256
     * characters.
     */
    description?: string;

    /**
     * The resource name for the SKU.
     * Example: "services/DA34-426B-A397/skus/AA95-CD31-42FE"
     */
    name?: string;

    /**
     * A timeline of pricing info for this SKU in chronological order.
     */
    pricingInfo?: gapi$client$cloudbilling$PricingInfo[];

    /**
     * Identifies the service provider.
     * This is 'Google' for first party services in Google Cloud Platform.
     */
    serviceProviderName?: string;

    /**
     * List of service regions this SKU is offered at.
     * Example: "asia-east1"
     * Service regions can be found at https://cloud.google.com/about/locations/
     */
    serviceRegions?: string[];

    /**
     * The identifier for the SKU.
     * Example: "AA95-CD31-42FE"
     */
    skuId?: string;
  }

  declare interface gapi$client$cloudbilling$TierRate {
    /**
     * Usage is priced at this rate only after this amount.
     * Example: start_usage_amount of 10 indicates that the usage will be priced
     * at the unit_price after the first 10 usage_units.
     */
    startUsageAmount?: number;

    /**
     * The price per unit of usage.
     * Example: unit_price of amount $10 indicates that each unit will cost $10.
     */
    unitPrice?: gapi$client$cloudbilling$Money;
  }

  declare interface gapi$client$cloudbilling$ProjectsResource {
    /**
     * Lists the projects associated with a billing account. The current
     * authenticated user must be an [owner of the billing
     * account](https://support.google.com/cloud/answer/4430947).
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
       * The resource name of the billing account associated with the projects that
       * you want to list. For example, `billingAccounts/012345-567890-ABCDEF`.
       */
      name: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Requested page size. The maximum page size is 100; this is also the
       * default.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results to be returned. This should be a
       * `next_page_token` value returned from a previous `ListProjectBillingInfo`
       * call. If unspecified, the first page of results is returned.
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
    }): Request<gapi$client$cloudbilling$ListProjectBillingInfoResponse>;

    /**
     * Gets the billing information for a project. The current authenticated user
     * must have [permission to view the
     * project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
     * ).
     */
    getBillingInfo(request: {
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
       * The resource name of the project for which billing information is
       * retrieved. For example, `projects/tokyo-rain-123`.
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
    }): Request<gapi$client$cloudbilling$ProjectBillingInfo>;

    /**
     * Sets or updates the billing account associated with a project. You specify
     * the new billing account by setting the `billing_account_name` in the
     * `ProjectBillingInfo` resource to the resource name of a billing account.
     * Associating a project with an open billing account enables billing on the
     * project and allows charges for resource usage. If the project already had a
     * billing account, this method changes the billing account used for resource
     * usage charges.
     *
     * &#42;Note:&#42; Incurred charges that have not yet been reported in the transaction
     * history of the Google Cloud Console may be billed to the new billing
     * account, even if the charge occurred before the new billing account was
     * assigned to the project.
     *
     * The current authenticated user must have ownership privileges for both the
     * [project](https://cloud.google.com/docs/permissions-overview#h.bgs0oxofvnoo
     * ) and the [billing
     * account](https://support.google.com/cloud/answer/4430947).
     *
     * You can disable billing on the project by setting the
     * `billing_account_name` field to empty. This action disassociates the
     * current billing account from the project. Any billable activity of your
     * in-use services will stop, and your application could stop functioning as
     * expected. Any unbilled charges to date will be billed to the previously
     * associated account. The current authenticated user must be either an owner
     * of the project or an owner of the billing account for the project.
     *
     * Note that associating a project with a &#42;closed&#42; billing account will have
     * much the same effect as disabling billing on the project: any paid
     * resources used by the project will be shut down. Thus, unless you wish to
     * disable billing, you should always call this method with the name of an
     * &#42;open&#42; billing account.
     */
    updateBillingInfo(request: {
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
       * The resource name of the project associated with the billing information
       * that you want to update. For example, `projects/tokyo-rain-123`.
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
    }): Request<gapi$client$cloudbilling$ProjectBillingInfo>;
  }

  declare interface gapi$client$cloudbilling$BillingAccountsResource {
    /**
     * Gets information about a billing account. The current authenticated user
     * must be an [owner of the billing
     * account](https://support.google.com/cloud/answer/4430947).
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
       * The resource name of the billing account to retrieve. For example,
       * `billingAccounts/012345-567890-ABCDEF`.
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
    }): Request<gapi$client$cloudbilling$BillingAccount>;

    /**
     * Lists the billing accounts that the current authenticated user
     * [owns](https://support.google.com/cloud/answer/4430947).
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
       * Requested page size. The maximum page size is 100; this is also the
       * default.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results to return. This should be a
       * `next_page_token` value returned from a previous `ListBillingAccounts`
       * call. If unspecified, the first page of results is returned.
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
    }): Request<gapi$client$cloudbilling$ListBillingAccountsResponse>;
    projects: gapi$client$cloudbilling$ProjectsResource;
  }

  declare interface gapi$client$cloudbilling$SkusResource {
    /**
     * Lists all publicly available SKUs for a given cloud service.
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
       * The ISO 4217 currency code for the pricing info in the response proto.
       * Will use the conversion rate as of start_time.
       * Optional. If not specified USD will be used.
       */
      currencyCode?: string,

      /**
       * Optional exclusive end time of the time range for which the pricing
       * versions will be returned. Timestamps in the future are not allowed.
       * Maximum allowable time range is 1 month (31 days). Time range as a whole
       * is optional. If not specified, the latest pricing will be returned (up to
       * 12 hours old at most).
       */
      endTime?: string,

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
       * Requested page size. Defaults to 5000.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results to return. This should be a
       * `next_page_token` value returned from a previous `ListSkus`
       * call. If unspecified, the first page of results is returned.
       */
      pageToken?: string,

      /**
       * The name of the service.
       * Example: "services/DA34-426B-A397"
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
       * Optional inclusive start time of the time range for which the pricing
       * versions will be returned. Timestamps in the future are not allowed.
       * Maximum allowable time range is 1 month (31 days). Time range as a whole
       * is optional. If not specified, the latest pricing will be returned (up to
       * 12 hours old at most).
       */
      startTime?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<gapi$client$cloudbilling$ListSkusResponse>;
  }

  declare interface gapi$client$cloudbilling$ServicesResource {
    /**
     * Lists all public cloud services.
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
       * Requested page size. Defaults to 5000.
       */
      pageSize?: number,

      /**
       * A token identifying a page of results to return. This should be a
       * `next_page_token` value returned from a previous `ListServices`
       * call. If unspecified, the first page of results is returned.
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
    }): Request<gapi$client$cloudbilling$ListServicesResponse>;
    skus: gapi$client$cloudbilling$SkusResource;
  }
}
