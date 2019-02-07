declare module "gapi.client.adsense" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    accounts: typeof client$accounts,
    adclients: typeof client$adclients,
    adunits: typeof client$adunits,
    alerts: typeof client$alerts,
    customchannels: typeof client$customchannels,
    metadata: typeof client$metadata,
    payments: typeof client$payments,
    reports: typeof client$reports,
    savedadstyles: typeof client$savedadstyles,
    urlchannels: typeof client$urlchannels
  };

  /**
   * Load AdSense Management API v1.4
   */
  declare function client$load(
    name: "adsense",
    version: "v1.4"
  ): PromiseLike<void>;

  declare function client$load(
    name: "adsense",
    version: "v1.4",
    callback: () => any
  ): void;

  declare var client$accounts: adsense$adsense$AccountsResource;

  declare var client$adclients: adsense$adsense$AdclientsResource;

  declare var client$adunits: adsense$adsense$AdunitsResource;

  declare var client$alerts: adsense$adsense$AlertsResource;

  declare var client$customchannels: adsense$adsense$CustomchannelsResource;

  declare var client$metadata: adsense$adsense$MetadataResource;

  declare var client$payments: adsense$adsense$PaymentsResource;

  declare var client$reports: adsense$adsense$ReportsResource;

  declare var client$savedadstyles: adsense$adsense$SavedadstylesResource;

  declare var client$urlchannels: adsense$adsense$UrlchannelsResource;

  declare interface adsense$Account {
    creation_time?: string;

    /**
     * Unique identifier of this account.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#account.
     */
    kind?: string;

    /**
     * Name of this account.
     */
    name?: string;

    /**
     * Whether this account is premium.
     */
    premium?: boolean;

    /**
     * Sub accounts of the this account.
     */
    subAccounts?: adsense$Account[];

    /**
     * AdSense timezone of this account.
     */
    timezone?: string;
  }

  declare interface adsense$Accounts {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The accounts returned in this list response.
     */
    items?: adsense$Account[];

    /**
     * Kind of list this is, in this case adsense#accounts.
     */
    kind?: string;

    /**
     * Continuation token used to page through accounts. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$AdClient {
    /**
     * Whether this ad client is opted in to ARC.
     */
    arcOptIn?: boolean;

    /**
     * Unique identifier of this ad client.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#adClient.
     */
    kind?: string;

    /**
     * This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.
     */
    productCode?: string;

    /**
     * Whether this ad client supports being reported on.
     */
    supportsReporting?: boolean;
  }

  declare interface adsense$AdClients {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The ad clients returned in this list response.
     */
    items?: adsense$AdClient[];

    /**
     * Kind of list this is, in this case adsense#adClients.
     */
    kind?: string;

    /**
     * Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$AdCode {
    /**
     * The ad code snippet.
     */
    adCode?: string;

    /**
     * Kind this is, in this case adsense#adCode.
     */
    kind?: string;
  }

  declare interface adsense$AdStyle {
    /**
     * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading
     * hash.
     */
    colors?: {
      /**
       * The color of the ad background.
       */
      background?: string,

      /**
       * The color of the ad border.
       */
      border?: string,

      /**
       * The color of the ad text.
       */
      text?: string,

      /**
       * The color of the ad title.
       */
      title?: string,

      /**
       * The color of the ad url.
       */
      url?: string
    };

    /**
     * The style of the corners in the ad (deprecated: never populated, ignored).
     */
    corners?: string;

    /**
     * The font which is included in the style.
     */
    font?: {
      /**
       * The family of the font.
       */
      family?: string,

      /**
       * The size of the font.
       */
      size?: string
    };

    /**
     * Kind this is, in this case adsense#adStyle.
     */
    kind?: string;
  }

  declare interface adsense$AdUnit {
    /**
     * Identity code of this ad unit, not necessarily unique across ad clients.
     */
    code?: string;

    /**
     * Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).
     */
    contentAdsSettings?: {
      /**
       * The backup option to be used in instances where no ad is available.
       */
      backupOption?: {
        /**
         * Color to use when type is set to COLOR.
         */
        color?: string,

        /**
         * Type of the backup option. Possible values are BLANK, COLOR and URL.
         */
        type?: string,

        /**
         * URL to use when type is set to URL.
         */
        url?: string
      },

      /**
       * Size of this ad unit.
       */
      size?: string,

      /**
       * Type of this ad unit.
       */
      type?: string
    };

    /**
     * Custom style information specific to this ad unit.
     */
    customStyle?: adsense$AdStyle;

    /**
     * Settings specific to feed ads (AFF) - deprecated.
     */
    feedAdsSettings?: {
      /**
       * The position of the ads relative to the feed entries.
       */
      adPosition?: string,

      /**
       * The frequency at which ads should appear in the feed (i.e. every N entries).
       */
      frequency?: number,

      /**
       * The minimum length an entry should be in order to have attached ads.
       */
      minimumWordCount?: number,

      /**
       * The type of ads which should appear.
       */
      type?: string
    };

    /**
     * Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#adUnit.
     */
    kind?: string;

    /**
     * Settings specific to WAP mobile content ads (AFMC) - deprecated.
     */
    mobileContentAdsSettings?: {
      /**
       * The markup language to use for this ad unit.
       */
      markupLanguage?: string,

      /**
       * The scripting language to use for this ad unit.
       */
      scriptingLanguage?: string,

      /**
       * Size of this ad unit.
       */
      size?: string,

      /**
       * Type of this ad unit.
       */
      type?: string
    };

    /**
     * Name of this ad unit.
     */
    name?: string;

    /**
     * ID of the saved ad style which holds this ad unit's style information.
     */
    savedStyleId?: string;

    /**
     * Status of this ad unit. Possible values are:
     * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
     *
     * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
     *
     * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
     */
    status?: string;
  }

  declare interface adsense$AdUnits {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The ad units returned in this list response.
     */
    items?: adsense$AdUnit[];

    /**
     * Kind of list this is, in this case adsense#adUnits.
     */
    kind?: string;

    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$AdsenseReportsGenerateResponse {
    /**
     * The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    averages?: string[];

    /**
     * The requested end date in yyyy-mm-dd format.
     */
    endDate?: string;

    /**
     * The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for
     * each metric in the request.
     */
    headers?: Array<{
      /**
       * The currency of this column. Only present if the header type is METRIC_CURRENCY.
       */
      currency?: string,

      /**
       * The name of the header.
       */
      name?: string,

      /**
       * The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.
       */
      type?: string
    }>;

    /**
     * Kind this is, in this case adsense#report.
     */
    kind?: string;

    /**
     * The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The
     * dimension cells contain strings, and the metric cells contain numbers.
     */
    rows?: string[][];

    /**
     * The requested start date in yyyy-mm-dd format.
     */
    startDate?: string;

    /**
     * The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or
     * the report row limit.
     */
    totalMatchedRows?: string;

    /**
     * The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.
     */
    totals?: string[];

    /**
     * Any warnings associated with generation of the report.
     */
    warnings?: string[];
  }

  declare interface adsense$Alert {
    /**
     * Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;

    /**
     * Whether this alert can be dismissed.
     */
    isDismissible?: boolean;

    /**
     * Kind of resource this is, in this case adsense#alert.
     */
    kind?: string;

    /**
     * The localized alert message.
     */
    message?: string;

    /**
     * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
     */
    severity?: string;

    /**
     * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY,
     * GRAYLISTED_PUBLISHER, API_HOLD.
     */
    type?: string;
  }

  declare interface adsense$Alerts {
    /**
     * The alerts returned in this list response.
     */
    items?: adsense$Alert[];

    /**
     * Kind of list this is, in this case adsense#alerts.
     */
    kind?: string;
  }

  declare interface adsense$CustomChannel {
    /**
     * Code of this custom channel, not necessarily unique across ad clients.
     */
    code?: string;

    /**
     * Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#customChannel.
     */
    kind?: string;

    /**
     * Name of this custom channel.
     */
    name?: string;

    /**
     * The targeting information of this custom channel, if activated.
     */
    targetingInfo?: {
      /**
       * The name used to describe this channel externally.
       */
      adsAppearOn?: string,

      /**
       * The external description of the channel.
       */
      description?: string,

      /**
       * The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT,
       * TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for
       * mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.
       */
      location?: string,

      /**
       * The language of the sites ads will be displayed on.
       */
      siteLanguage?: string
    };
  }

  declare interface adsense$CustomChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The custom channels returned in this list response.
     */
    items?: adsense$CustomChannel[];

    /**
     * Kind of list this is, in this case adsense#customChannels.
     */
    kind?: string;

    /**
     * Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$Metadata {
    items?: adsense$ReportingMetadataEntry[];

    /**
     * Kind of list this is, in this case adsense#metadata.
     */
    kind?: string;
  }

  declare interface adsense$Payment {
    /**
     * Unique identifier of this Payment.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#payment.
     */
    kind?: string;

    /**
     * The amount to be paid.
     */
    paymentAmount?: string;

    /**
     * The currency code for the amount to be paid.
     */
    paymentAmountCurrencyCode?: string;

    /**
     * The date this payment was/will be credited to the user, or none if the payment threshold has not been met.
     */
    paymentDate?: string;
  }

  declare interface adsense$Payments {
    /**
     * The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.
     */
    items?: adsense$Payment[];

    /**
     * Kind of list this is, in this case adsense#payments.
     */
    kind?: string;
  }

  declare interface adsense$ReportingMetadataEntry {
    /**
     * For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension
     * belongs to.
     */
    compatibleDimensions?: string[];

    /**
     * The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.
     */
    compatibleMetrics?: string[];

    /**
     * Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#reportingMetadataEntry.
     */
    kind?: string;

    /**
     * The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report
     * to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredDimensions?: string[];

    /**
     * The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to
     * be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.
     */
    requiredMetrics?: string[];

    /**
     * The codes of the projects supported by the dimension or metric this reporting metadata entry describes.
     */
    supportedProducts?: string[];
  }

  declare interface adsense$SavedAdStyle {
    /**
     * The AdStyle itself.
     */
    adStyle?: adsense$AdStyle;

    /**
     * Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#savedAdStyle.
     */
    kind?: string;

    /**
     * The user selected name of this SavedAdStyle.
     */
    name?: string;
  }

  declare interface adsense$SavedAdStyles {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The saved ad styles returned in this list response.
     */
    items?: adsense$SavedAdStyle[];

    /**
     * Kind of list this is, in this case adsense#savedAdStyles.
     */
    kind?: string;

    /**
     * Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$SavedReport {
    /**
     * Unique identifier of this saved report.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#savedReport.
     */
    kind?: string;

    /**
     * This saved report's name.
     */
    name?: string;
  }

  declare interface adsense$SavedReports {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The saved reports returned in this list response.
     */
    items?: adsense$SavedReport[];

    /**
     * Kind of list this is, in this case adsense#savedReports.
     */
    kind?: string;

    /**
     * Continuation token used to page through saved reports. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$UrlChannel {
    /**
     * Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.
     */
    id?: string;

    /**
     * Kind of resource this is, in this case adsense#urlChannel.
     */
    kind?: string;

    /**
     * URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home
     */
    urlPattern?: string;
  }

  declare interface adsense$UrlChannels {
    /**
     * ETag of this response for caching purposes.
     */
    etag?: string;

    /**
     * The URL channels returned in this list response.
     */
    items?: adsense$UrlChannel[];

    /**
     * Kind of list this is, in this case adsense#urlChannels.
     */
    kind?: string;

    /**
     * Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
  }

  declare interface adsense$AdclientsResource {
    /**
     * List all ad clients in the specified account.
     */
    list(request: {
      /**
       * Account for which to list ad clients.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad clients to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdClients>;

    /**
     * List all ad clients in this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad clients to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdClients>;
  }

  declare interface adsense$CustomchannelsResource {
    /**
     * List all custom channels which the specified ad unit belongs to.
     */
    list(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client which contains the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit for which to list custom channels.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of custom channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannels>;

    /**
     * Get the specified custom channel from the specified ad client for the specified account.
     */
    get(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client which contains the custom channel.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Custom channel to retrieve.
       */
      customChannelId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannel>;

    /**
     * List all custom channels in the specified ad client for the specified account.
     */
    list(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client for which to list custom channels.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of custom channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannels>;
    client$adunits: adsense$AdunitsResource;

    /**
     * List all custom channels which the specified ad unit belongs to.
     */
    list(request: {
      /**
       * Ad client which contains the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit for which to list custom channels.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of custom channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannels>;

    /**
     * Get the specified custom channel from the specified ad client.
     */
    get(request: {
      /**
       * Ad client which contains the custom channel.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Custom channel to retrieve.
       */
      customChannelId: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannel>;

    /**
     * List all custom channels in the specified ad client for this AdSense account.
     */
    list(request: {
      /**
       * Ad client for which to list custom channels.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of custom channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$CustomChannels>;
    client$adunits: adsense$AdunitsResource;
  }

  declare interface adsense$AdunitsResource {
    /**
     * Gets the specified ad unit in the specified ad client for the specified account.
     */
    get(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client for which to get the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit to retrieve.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnit>;

    /**
     * Get ad code for the specified ad unit.
     */
    getAdCode(request: {
      /**
       * Account which contains the ad client.
       */
      accountId: string,

      /**
       * Ad client with contains the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit to get the code for.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdCode>;

    /**
     * List all ad units in the specified ad client for the specified account.
     */
    list(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client for which to list ad units.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to include inactive ad units. Default: true.
       */
      includeInactive?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad units to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnits>;
    client$customchannels: adsense$CustomchannelsResource;

    /**
     * List all ad units in the specified custom channel.
     */
    list(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client which contains the custom channel.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Custom channel for which to list ad units.
       */
      customChannelId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to include inactive ad units. Default: true.
       */
      includeInactive?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad units to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnits>;

    /**
     * Gets the specified ad unit in the specified ad client.
     */
    get(request: {
      /**
       * Ad client for which to get the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit to retrieve.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnit>;

    /**
     * Get ad code for the specified ad unit.
     */
    getAdCode(request: {
      /**
       * Ad client with contains the ad unit.
       */
      adClientId: string,

      /**
       * Ad unit to get the code for.
       */
      adUnitId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdCode>;

    /**
     * List all ad units in the specified ad client for this AdSense account.
     */
    list(request: {
      /**
       * Ad client for which to list ad units.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to include inactive ad units. Default: true.
       */
      includeInactive?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad units to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnits>;
    client$customchannels: adsense$CustomchannelsResource;

    /**
     * List all ad units in the specified custom channel.
     */
    list(request: {
      /**
       * Ad client which contains the custom channel.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Custom channel for which to list ad units.
       */
      customChannelId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Whether to include inactive ad units. Default: true.
       */
      includeInactive?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of ad units to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdUnits>;
  }

  declare interface adsense$AlertsResource {
    /**
     * Dismiss (delete) the specified alert from the specified publisher AdSense account.
     */
    delete(request: {
      /**
       * Account which contains the ad unit.
       */
      accountId: string,

      /**
       * Alert to delete.
       */
      alertId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * List the alerts for the specified AdSense account.
     */
    list(request: {
      /**
       * Account for which to retrieve the alerts.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used
       * if the supplied locale is invalid or unsupported.
       */
      locale?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Alerts>;

    /**
     * Dismiss (delete) the specified alert from the publisher's AdSense account.
     */
    delete(request: {
      /**
       * Alert to delete.
       */
      alertId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * List the alerts for this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used
       * if the supplied locale is invalid or unsupported.
       */
      locale?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Alerts>;
  }

  declare interface adsense$PaymentsResource {
    /**
     * List the payments for the specified AdSense account.
     */
    list(request: {
      /**
       * Account for which to retrieve the payments.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Payments>;

    /**
     * List the payments for this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Payments>;
  }

  declare interface adsense$SavedResource {
    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     */
    generate(request: {
      /**
       * Account to which the saved reports belong.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
       */
      locale?: string,

      /**
       * The maximum number of rows of report data to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The saved report to retrieve.
       */
      savedReportId: string,

      /**
       * Index of the first row of report data to return.
       */
      startIndex?: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdsenseReportsGenerateResponse>;

    /**
     * List all saved reports in the specified AdSense account.
     */
    list(request: {
      /**
       * Account to which the saved reports belong.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of saved reports to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedReports>;

    /**
     * Generate an AdSense report based on the saved report ID sent in the query parameters.
     */
    generate(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
       */
      locale?: string,

      /**
       * The maximum number of rows of report data to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The saved report to retrieve.
       */
      savedReportId: string,

      /**
       * Index of the first row of report data to return.
       */
      startIndex?: number,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdsenseReportsGenerateResponse>;

    /**
     * List all saved reports in this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of saved reports to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedReports>;
  }

  declare interface adsense$ReportsResource {
    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
     * specify "alt=csv" as a query parameter.
     */
    generate(request: {
      /**
       * Account upon which to report.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
       */
      currency?: string,

      /**
       * Dimensions to base the report on.
       */
      dimension?: string,

      /**
       * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
       */
      endDate: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Filters to be run on the report.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
       */
      locale?: string,

      /**
       * The maximum number of rows of report data to return.
       */
      maxResults?: number,

      /**
       * Numeric columns to include in the report.
       */
      metric?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no
       * prefix is specified, the column is sorted ascending.
       */
      sort?: string,

      /**
       * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
       */
      startDate: string,

      /**
       * Index of the first row of report data to return.
       */
      startIndex?: number,

      /**
       * Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
       */
      useTimezoneReporting?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdsenseReportsGenerateResponse>;
    saved: adsense$SavedResource;

    /**
     * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format
     * specify "alt=csv" as a query parameter.
     */
    generate(request: {
      /**
       * Accounts upon which to report.
       */
      accountId?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
       */
      currency?: string,

      /**
       * Dimensions to base the report on.
       */
      dimension?: string,

      /**
       * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
       */
      endDate: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Filters to be run on the report.
       */
      filter?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
       */
      locale?: string,

      /**
       * The maximum number of rows of report data to return.
       */
      maxResults?: number,

      /**
       * Numeric columns to include in the report.
       */
      metric?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no
       * prefix is specified, the column is sorted ascending.
       */
      sort?: string,

      /**
       * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
       */
      startDate: string,

      /**
       * Index of the first row of report data to return.
       */
      startIndex?: number,

      /**
       * Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
       */
      useTimezoneReporting?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$AdsenseReportsGenerateResponse>;
    saved: adsense$SavedResource;
  }

  declare interface adsense$SavedadstylesResource {
    /**
     * List a specific saved ad style for the specified account.
     */
    get(request: {
      /**
       * Account for which to get the saved ad style.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Saved ad style to retrieve.
       */
      savedAdStyleId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedAdStyle>;

    /**
     * List all saved ad styles in the specified account.
     */
    list(request: {
      /**
       * Account for which to list saved ad styles.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of saved ad styles to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedAdStyles>;

    /**
     * Get a specific saved ad style from the user's account.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Saved ad style to retrieve.
       */
      savedAdStyleId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedAdStyle>;

    /**
     * List all saved ad styles in the user's account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of saved ad styles to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$SavedAdStyles>;
  }

  declare interface adsense$UrlchannelsResource {
    /**
     * List all URL channels in the specified ad client for the specified account.
     */
    list(request: {
      /**
       * Account to which the ad client belongs.
       */
      accountId: string,

      /**
       * Ad client for which to list URL channels.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of URL channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$UrlChannels>;

    /**
     * List all URL channels in the specified ad client for this AdSense account.
     */
    list(request: {
      /**
       * Ad client for which to list URL channels.
       */
      adClientId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of URL channels to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the
       * previous response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$UrlChannels>;
  }

  declare interface adsense$AccountsResource {
    /**
     * Get information about the selected AdSense account.
     */
    get(request: {
      /**
       * Account to get information about.
       */
      accountId: string,

      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Whether the tree of sub accounts should be returned.
       */
      tree?: boolean,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Account>;

    /**
     * List all accounts available to this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The maximum number of accounts to include in the response, used for paging.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous
       * response.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Accounts>;
    client$adclients: adsense$AdclientsResource;
    client$adunits: adsense$AdunitsResource;
    client$alerts: adsense$AlertsResource;
    client$customchannels: adsense$CustomchannelsResource;
    client$payments: adsense$PaymentsResource;
    client$reports: adsense$ReportsResource;
    client$savedadstyles: adsense$SavedadstylesResource;
    client$urlchannels: adsense$UrlchannelsResource;
  }

  declare interface adsense$DimensionsResource {
    /**
     * List the metadata for the dimensions available to this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Metadata>;
  }

  declare interface adsense$MetricsResource {
    /**
     * List the metadata for the metrics available to this AdSense account.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

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
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<adsense$Metadata>;
  }

  declare interface adsense$MetadataResource {
    dimensions: adsense$DimensionsResource;
    metrics: adsense$MetricsResource;
  }
}
