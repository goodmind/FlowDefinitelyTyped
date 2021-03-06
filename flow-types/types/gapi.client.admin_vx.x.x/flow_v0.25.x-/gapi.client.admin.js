declare module "gapi.client.admin" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    activities: typeof gapi$client$activities,
    channels: typeof gapi$client$channels,
    customerUsageReports: typeof gapi$client$customerUsageReports,
    userUsageReport: typeof gapi$client$userUsageReport
  };

  /**
   * Load Admin Reports API reports_v1
   */
  declare function gapi$client$load(
    name: "admin",
    version: "reports_v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "admin",
    version: "reports_v1",
    callback: () => any
  ): void;

  declare var gapi$client$activities: admin$ActivitiesResource;

  declare var gapi$client$channels: admin$ChannelsResource;

  declare var gapi$client$customerUsageReports: admin$CustomerUsageReportsResource;

  declare var gapi$client$userUsageReport: admin$UserUsageReportResource;

  declare interface gapi$client$admin$Activities {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * Each record in read response.
     */
    items?: admin$Activity[];

    /**
     * Kind of list response this is.
     */
    kind?: string;

    /**
     * Token for retrieving the next page
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$admin$Activity {
    /**
     * User doing the action.
     */
    actor?: {
      /**
       * User or OAuth 2LO request.
       */
      callerType?: string,

      /**
       * Email address of the user.
       */
      email?: string,

      /**
       * For OAuth 2LO API requests, consumer_key of the requestor.
       */
      key?: string,

      /**
       * Obfuscated user id of the user.
       */
      profileId?: string
    };

    /**
     * ETag of the entry.
     */
    etag?: string;

    /**
     * Activity events.
     */
    events?: Array<{
      /**
       * Name of event.
       */
      name?: string,

      /**
       * Parameter value pairs for various applications.
       */
      parameters?: Array<{
        /**
         * Boolean value of the parameter.
         */
        boolValue?: boolean,

        /**
         * Integral value of the parameter.
         */
        intValue?: string,

        /**
         * Multi-int value of the parameter.
         */
        multiIntValue?: string[],

        /**
         * Multi-string value of the parameter.
         */
        multiValue?: string[],

        /**
         * The name of the parameter.
         */
        name?: string,

        /**
         * String value of the parameter.
         */
        value?: string
      }>,

      /**
       * Type of event.
       */
      type?: string
    }>;

    /**
     * Unique identifier for each activity record.
     */
    id?: {
      /**
       * Application name to which the event belongs.
       */
      applicationName?: string,

      /**
       * Obfuscated customer ID of the source customer.
       */
      customerId?: string,

      /**
       * Time of occurrence of the activity.
       */
      time?: string,

      /**
       * Unique qualifier if multiple events have the same time.
       */
      uniqueQualifier?: string
    };

    /**
     * IP Address of the user doing the action.
     */
    ipAddress?: string;

    /**
     * Kind of resource this is.
     */
    kind?: string;

    /**
     * Domain of source customer.
     */
    ownerDomain?: string;
  }

  declare interface gapi$client$admin$Channel {
    /**
     * The address where notifications are delivered for this channel.
     */
    address?: string;

    /**
     * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
     */
    expiration?: string;

    /**
     * A UUID or similar unique string that identifies this channel.
     */
    id?: string;

    /**
     * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string "api#channel".
     */
    kind?: string;

    /**
     * Additional parameters controlling delivery channel behavior. Optional.
     */
    params?: Record<string, string>;

    /**
     * A Boolean value to indicate whether payload is wanted. Optional.
     */
    payload?: boolean;

    /**
     * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
     */
    resourceId?: string;

    /**
     * A version-specific identifier for the watched resource.
     */
    resourceUri?: string;

    /**
     * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
     */
    token?: string;

    /**
     * The type of delivery mechanism used for this channel.
     */
    type?: string;
  }

  declare interface gapi$client$admin$UsageReport {
    /**
     * The date to which the record belongs.
     */
    date?: string;

    /**
     * Information about the type of the item.
     */
    entity?: {
      /**
       * Obfuscated customer id for the record.
       */
      customerId?: string,

      /**
       * Obfuscated user id for the record.
       */
      profileId?: string,

      /**
       * The type of item, can be a customer or user.
       */
      type?: string,

      /**
       * user's email.
       */
      userEmail?: string
    };

    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * The kind of object.
     */
    kind?: string;

    /**
     * Parameter value pairs for various applications.
     */
    parameters?: Array<{
      /**
       * Boolean value of the parameter.
       */
      boolValue?: boolean,

      /**
       * RFC 3339 formatted value of the parameter.
       */
      datetimeValue?: string,

      /**
       * Integral value of the parameter.
       */
      intValue?: string,

      /**
       * Nested message value of the parameter.
       */
      msgValue?: Array<Record<string, any>>,

      /**
       * The name of the parameter.
       */
      name?: string,

      /**
       * String value of the parameter.
       */
      stringValue?: string
    }>;
  }

  declare interface gapi$client$admin$UsageReports {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * The kind of object.
     */
    kind?: string;

    /**
     * Token for retrieving the next page
     */
    nextPageToken?: string;

    /**
     * Various application parameter records.
     */
    usageReports?: gapi$client$admin$UsageReport[];

    /**
     * Warnings if any.
     */
    warnings?: Array<{
      /**
       * Machine readable code / warning type.
       */
      code?: string,

      /**
       * Key-Value pairs to give detailed information on the warning.
       */
      data?: Array<{
        /**
         * Key associated with a key-value pair to give detailed information on the warning.
         */
        key?: string,

        /**
         * Value associated with a key-value pair to give detailed information on the warning.
         */
        value?: string
      }>,

      /**
       * Human readable message for the warning.
       */
      message?: string
    }>;
  }

  declare interface gapi$client$admin$ActivitiesResource {
    /**
     * Retrieves a list of activities for a specific customer and application.
     */
    list(request: {
      /**
       * IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
       */
      actorIpAddress?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Application name for which the events are to be retrieved.
       */
      applicationName: string,

      /**
       * Represents the customer for which the data is to be fetched.
       */
      customerId?: string,

      /**
       * Return events which occurred at or before this time.
       */
      endTime?: string,

      /**
       * Name of the event being queried.
       */
      eventName?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
       */
      filters?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Number of activity records to be shown in each page.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token to specify next page.
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
       * Return events which occurred at or after this time.
       */
      startTime?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for
       * all users.
       */
      userKey: string
    }): Request<gapi$client$admin$Activities>;

    /**
     * Push changes to activities
     */
    watch(request: {
      /**
       * IP Address of host where the event was performed. Supports both IPv4 and IPv6 addresses.
       */
      actorIpAddress?: string,

      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Application name for which the events are to be retrieved.
       */
      applicationName: string,

      /**
       * Represents the customer for which the data is to be fetched.
       */
      customerId?: string,

      /**
       * Return events which occurred at or before this time.
       */
      endTime?: string,

      /**
       * Name of the event being queried.
       */
      eventName?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Event parameters in the form [parameter1 name][operator][parameter1 value],[parameter2 name][operator][parameter2 value],...
       */
      filters?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Number of activity records to be shown in each page.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token to specify next page.
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
       * Return events which occurred at or after this time.
       */
      startTime?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string,

      /**
       * Represents the profile id or the user email for which the data should be filtered. When 'all' is specified as the userKey, it returns usageReports for
       * all users.
       */
      userKey: string
    }): Request<gapi$client$admin$Channel>;
  }

  declare interface gapi$client$admin$ChannelsResource {
    /**
     * Stop watching resources through this channel
     */
    stop(request: {
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
  }

  declare interface gapi$client$admin$CustomerUsageReportsResource {
    /**
     * Retrieves a report which is a collection of properties / statistics for a specific customer.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Represents the customer for which the data is to be fetched.
       */
      customerId?: string,

      /**
       * Represents the date in yyyy-mm-dd format for which the data is to be fetched.
       */
      date: string,

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
       * Token to specify next page.
       */
      pageToken?: string,

      /**
       * Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
       */
      parameters?: string,

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
    }): Request<gapi$client$admin$UsageReports>;
  }

  declare interface gapi$client$admin$UserUsageReportResource {
    /**
     * Retrieves a report which is a collection of properties / statistics for a set of users.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Represents the customer for which the data is to be fetched.
       */
      customerId?: string,

      /**
       * Represents the date in yyyy-mm-dd format for which the data is to be fetched.
       */
      date: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * Represents the set of filters including parameter operator value.
       */
      filters?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of results to return. Maximum allowed is 1000
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token to specify next page.
       */
      pageToken?: string,

      /**
       * Represents the application name, parameter name pairs to fetch in csv as app_name1:param_name1, app_name2:param_name2.
       */
      parameters?: string,

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
      userIp?: string,

      /**
       * Represents the profile id or the user email for which the data should be filtered.
       */
      userKey: string
    }): Request<gapi$client$admin$UsageReports>;
  }
}
