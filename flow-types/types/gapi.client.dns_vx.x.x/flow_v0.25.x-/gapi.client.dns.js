declare module "gapi.client.dns" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    changes: typeof gapi$client$changes,
    managedZones: typeof gapi$client$managedZones,
    projects: typeof gapi$client$projects,
    resourceRecordSets: typeof gapi$client$resourceRecordSets
  };

  /**
   * Load Google Cloud DNS API v1
   */
  declare function gapi$client$load(
    name: "dns",
    version: "v1"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "dns",
    version: "v1",
    callback: () => any
  ): void;

  declare var gapi$client$changes: dns$ChangesResource;

  declare var gapi$client$managedZones: dns$ManagedZonesResource;

  declare var gapi$client$projects: dns$ProjectsResource;

  declare var gapi$client$resourceRecordSets: dns$ResourceRecordSetsResource;

  declare interface gapi$client$dns$Change {
    /**
     * Which ResourceRecordSets to add?
     */
    additions?: dns$ResourceRecordSet[];

    /**
     * Which ResourceRecordSets to remove? Must match existing data exactly.
     */
    deletions?: dns$ResourceRecordSet[];

    /**
     * Unique identifier for the resource; defined by the server (output only).
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dns#change".
     */
    kind?: string;

    /**
     * The time that this operation was started by the server (output only). This is in RFC3339 text format.
     */
    startTime?: string;

    /**
     * Status of the operation (output only).
     */
    status?: string;
  }

  declare interface gapi$client$dns$ChangesListResponse {
    /**
     * The requested changes.
     */
    changes?: gapi$client$dns$Change[];

    /**
     * Type of resource.
     */
    kind?: string;

    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another
     * list request using this value as your pagination token.
     *
     * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change
     * between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to
     * retrieve a "snapshot" of collections larger than the maximum page size.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$dns$ManagedZone {
    /**
     * The time that this resource was created on the server. This is in RFC3339 text format. Output only.
     */
    creationTime?: string;

    /**
     * A mutable string of at most 1024 characters associated with this resource for the user's convenience. Has no effect on the managed zone's function.
     */
    description?: string;

    /**
     * The DNS name of this managed zone, for instance "example.com.".
     */
    dnsName?: string;

    /**
     * Unique identifier for the resource; defined by the server (output only)
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dns#managedZone".
     */
    kind?: string;

    /**
     * User assigned name for this resource. Must be unique within the project. The name must be 1-63 characters long, must begin with a letter, end with a
     * letter or digit, and only contain lowercase letters, digits or dashes.
     */
    name?: string;

    /**
     * Optionally specifies the NameServerSet for this ManagedZone. A NameServerSet is a set of DNS name servers that all host the same ManagedZones. Most
     * users will leave this field unset.
     */
    nameServerSet?: string;

    /**
     * Delegate your managed_zone to these virtual name servers; defined by the server (output only)
     */
    nameServers?: string[];
  }

  declare interface gapi$client$dns$ManagedZonesListResponse {
    /**
     * Type of resource.
     */
    kind?: string;

    /**
     * The managed zone resources.
     */
    managedZones?: gapi$client$dns$ManagedZone[];

    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another
     * list request using this value as your page token.
     *
     * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change
     * between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to
     * retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string;
  }

  declare interface gapi$client$dns$Project {
    /**
     * User assigned unique identifier for the resource (output only).
     */
    id?: string;

    /**
     * Identifies what kind of resource this is. Value: the fixed string "dns#project".
     */
    kind?: string;

    /**
     * Unique numeric identifier for the resource; defined by the server (output only).
     */
    number?: string;

    /**
     * Quotas assigned to this project (output only).
     */
    quota?: dns$Quota;
  }

  declare interface gapi$client$dns$Quota {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dns#quota".
     */
    kind?: string;

    /**
     * Maximum allowed number of managed zones in the project.
     */
    managedZones?: number;

    /**
     * Maximum allowed number of ResourceRecords per ResourceRecordSet.
     */
    resourceRecordsPerRrset?: number;

    /**
     * Maximum allowed number of ResourceRecordSets to add per ChangesCreateRequest.
     */
    rrsetAdditionsPerChange?: number;

    /**
     * Maximum allowed number of ResourceRecordSets to delete per ChangesCreateRequest.
     */
    rrsetDeletionsPerChange?: number;

    /**
     * Maximum allowed number of ResourceRecordSets per zone in the project.
     */
    rrsetsPerManagedZone?: number;

    /**
     * Maximum allowed size for total rrdata in one ChangesCreateRequest in bytes.
     */
    totalRrdataSizePerChange?: number;
  }

  declare interface gapi$client$dns$ResourceRecordSet {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dns#resourceRecordSet".
     */
    kind?: string;

    /**
     * For example, www.example.com.
     */
    name?: string;

    /**
     * As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).
     */
    rrdatas?: string[];

    /**
     * Number of seconds that this ResourceRecordSet can be cached by resolvers.
     */
    ttl?: number;

    /**
     * The identifier of a supported record type, for example, A, AAAA, MX, TXT, and so on.
     */
    type?: string;
  }

  declare interface gapi$client$dns$ResourceRecordSetsListResponse {
    /**
     * Type of resource.
     */
    kind?: string;

    /**
     * The presence of this field indicates that there exist more results following your last page of results in pagination order. To fetch them, make another
     * list request using this value as your pagination token.
     *
     * In this way you can retrieve the complete contents of even very large collections one page at a time. However, if the contents of the collection change
     * between the first and last paginated list request, the set of all elements returned will be an inconsistent view of the collection. There is no way to
     * retrieve a consistent snapshot of a collection larger than the maximum page size.
     */
    nextPageToken?: string;

    /**
     * The resource record set resources.
     */
    rrsets?: gapi$client$dns$ResourceRecordSet[];
  }

  declare interface gapi$client$dns$ChangesResource {
    /**
     * Atomically update the ResourceRecordSet collection.
     */
    create(request: {
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
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$Change>;

    /**
     * Fetch the representation of an existing Change.
     */
    get(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * The identifier of the requested change, from a previous ResourceRecordSetsChangeResponse.
       */
      changeId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$Change>;

    /**
     * Enumerate Changes to a ResourceRecordSet collection.
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
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Sorting criterion. The only supported value is change sequence.
       */
      sortBy?: string,

      /**
       * Sorting order direction: 'ascending' or 'descending'.
       */
      sortOrder?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$ChangesListResponse>;
  }

  declare interface gapi$client$dns$ManagedZonesResource {
    /**
     * Create a new ManagedZone.
     */
    create(request: {
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
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$ManagedZone>;

    /**
     * Delete a previously created ManagedZone.
     */
    delete(request: {
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
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

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
     * Fetch the representation of an existing ManagedZone.
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
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$ManagedZone>;

    /**
     * Enumerate ManagedZones that have been created but not yet deleted.
     */
    list(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * Restricts the list to return only zones with this domain name.
       */
      dnsName?: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$ManagedZonesListResponse>;
  }

  declare interface gapi$client$dns$ProjectsResource {
    /**
     * Fetch the representation of an existing Project.
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
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$Project>;
  }

  declare interface gapi$client$dns$ResourceRecordSetsResource {
    /**
     * Enumerate ResourceRecordSets that have been created but not yet deleted.
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
       * Identifies the managed zone addressed by this request. Can be the managed zone name or id.
       */
      managedZone: string,

      /**
       * Optional. Maximum number of results to be returned. If unspecified, the server will decide how many results to return.
       */
      maxResults?: number,

      /**
       * Restricts the list to return only records with this fully qualified domain name.
       */
      name?: string,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Optional. A tag returned by a previous list request that was truncated. Use this parameter to continue a previous list request.
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Identifies the project addressed by this request.
       */
      project: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Restricts the list to return only records of this type. If present, the "name" parameter must also be present.
       */
      type?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<gapi$client$dns$ResourceRecordSetsListResponse>;
  }
}
