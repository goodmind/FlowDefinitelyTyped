declare module "gapi.client.safebrowsing" {
  declare var npm$namespace$gapi: {
    client: typeof npm$namespace$gapi$client
  };

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    encodedFullHashes: typeof gapi$client$encodedFullHashes,
    encodedUpdates: typeof gapi$client$encodedUpdates,
    fullHashes: typeof gapi$client$fullHashes,
    threatListUpdates: typeof gapi$client$threatListUpdates,
    threatLists: typeof gapi$client$threatLists,
    threatMatches: typeof gapi$client$threatMatches
  };

  /**
   * Load Google Safe Browsing API v4
   */
  declare function gapi$client$load(
    name: "safebrowsing",
    version: "v4"
  ): PromiseLike<void>;

  declare function gapi$client$load(
    name: "safebrowsing",
    version: "v4",
    callback: () => any
  ): void;

  declare var gapi$client$encodedFullHashes: safebrowsing$EncodedFullHashesResource;

  declare var gapi$client$encodedUpdates: safebrowsing$EncodedUpdatesResource;

  declare var gapi$client$fullHashes: safebrowsing$FullHashesResource;

  declare var gapi$client$threatListUpdates: safebrowsing$ThreatListUpdatesResource;

  declare var gapi$client$threatLists: safebrowsing$ThreatListsResource;

  declare var gapi$client$threatMatches: safebrowsing$ThreatMatchesResource;

  declare interface gapi$client$safebrowsing$Checksum {
    /**
     * The SHA256 hash of the client state; that is, of the sorted list of all
     * hashes present in the database.
     */
    sha256?: string;
  }

  declare interface gapi$client$safebrowsing$ClientInfo {
    /**
     * A client ID that (hopefully) uniquely identifies the client implementation
     * of the Safe Browsing API.
     */
    clientId?: string;

    /**
     * The version of the client implementation.
     */
    clientVersion?: string;
  }

  declare interface gapi$client$safebrowsing$Constraints {
    /**
     * Sets the maximum number of entries that the client is willing to have
     * in the local database. This should be a power of 2 between 2&#42;&#42;10 and
     * 2&#42;&#42;20. If zero, no database size limit is set.
     */
    maxDatabaseEntries?: number;

    /**
     * The maximum size in number of entries. The update will not contain more
     * entries than this value.  This should be a power of 2 between 2&#42;&#42;10 and
     * 2&#42;&#42;20.  If zero, no update size limit is set.
     */
    maxUpdateEntries?: number;

    /**
     * Requests the list for a specific geographic location. If not set the
     * server may pick that value based on the user's IP address. Expects ISO
     * 3166-1 alpha-2 format.
     */
    region?: string;

    /**
     * The compression types supported by the client.
     */
    supportedCompressions?: string[];
  }

  declare interface gapi$client$safebrowsing$FetchThreatListUpdatesRequest {
    /**
     * The client metadata.
     */
    client?: gapi$client$safebrowsing$ClientInfo;

    /**
     * The requested threat list updates.
     */
    listUpdateRequests?: safebrowsing$ListUpdateRequest[];
  }

  declare interface gapi$client$safebrowsing$FetchThreatListUpdatesResponse {
    /**
     * The list updates requested by the clients.
     */
    listUpdateResponses?: safebrowsing$ListUpdateResponse[];

    /**
     * The minimum duration the client must wait before issuing any update
     * request. If this field is not set clients may update as soon as they want.
     */
    minimumWaitDuration?: string;
  }

  declare interface gapi$client$safebrowsing$FindFullHashesRequest {
    /**
     * Client metadata associated with callers of higher-level APIs built on top
     * of the client's implementation.
     */
    apiClient?: gapi$client$safebrowsing$ClientInfo;

    /**
     * The client metadata.
     */
    client?: gapi$client$safebrowsing$ClientInfo;

    /**
     * The current client states for each of the client's local threat lists.
     */
    clientStates?: string[];

    /**
     * The lists and hashes to be checked.
     */
    threatInfo?: safebrowsing$ThreatInfo;
  }

  declare interface gapi$client$safebrowsing$FindFullHashesResponse {
    /**
     * The full hashes that matched the requested prefixes.
     */
    matches?: safebrowsing$ThreatMatch[];

    /**
     * The minimum duration the client must wait before issuing any find hashes
     * request. If this field is not set, clients can issue a request as soon as
     * they want.
     */
    minimumWaitDuration?: string;

    /**
     * For requested entities that did not match the threat list, how long to
     * cache the response.
     */
    negativeCacheDuration?: string;
  }

  declare interface gapi$client$safebrowsing$FindThreatMatchesRequest {
    /**
     * The client metadata.
     */
    client?: gapi$client$safebrowsing$ClientInfo;

    /**
     * The lists and entries to be checked for matches.
     */
    threatInfo?: safebrowsing$ThreatInfo;
  }

  declare interface gapi$client$safebrowsing$FindThreatMatchesResponse {
    /**
     * The threat list matches.
     */
    matches?: safebrowsing$ThreatMatch[];
  }

  declare interface gapi$client$safebrowsing$ListThreatListsResponse {
    /**
     * The lists available for download by the client.
     */
    threatLists?: safebrowsing$ThreatListDescriptor[];
  }

  declare interface gapi$client$safebrowsing$ListUpdateRequest {
    /**
     * The constraints associated with this request.
     */
    constraints?: gapi$client$safebrowsing$Constraints;

    /**
     * The type of platform at risk by entries present in the list.
     */
    platformType?: string;

    /**
     * The current state of the client for the requested list (the encrypted
     * client state that was received from the last successful list update).
     */
    state?: string;

    /**
     * The types of entries present in the list.
     */
    threatEntryType?: string;

    /**
     * The type of threat posed by entries present in the list.
     */
    threatType?: string;
  }

  declare interface gapi$client$safebrowsing$ListUpdateResponse {
    /**
     * A set of entries to add to a local threat type's list. Repeated to allow
     * for a combination of compressed and raw data to be sent in a single
     * response.
     */
    additions?: safebrowsing$ThreatEntrySet[];

    /**
     * The expected SHA256 hash of the client state; that is, of the sorted list
     * of all hashes present in the database after applying the provided update.
     * If the client state doesn't match the expected state, the client must
     * disregard this update and retry later.
     */
    checksum?: gapi$client$safebrowsing$Checksum;

    /**
     * The new client state, in encrypted format. Opaque to clients.
     */
    newClientState?: string;

    /**
     * The platform type for which data is returned.
     */
    platformType?: string;

    /**
     * A set of entries to remove from a local threat type's list. In practice,
     * this field is empty or contains exactly one ThreatEntrySet.
     */
    removals?: safebrowsing$ThreatEntrySet[];

    /**
     * The type of response. This may indicate that an action is required by the
     * client when the response is received.
     */
    responseType?: string;

    /**
     * The format of the threats.
     */
    threatEntryType?: string;

    /**
     * The threat type for which data is returned.
     */
    threatType?: string;
  }

  declare interface gapi$client$safebrowsing$MetadataEntry {
    /**
     * The metadata entry key. For JSON requests, the key is base64-encoded.
     */
    key?: string;

    /**
     * The metadata entry value. For JSON requests, the value is base64-encoded.
     */
    value?: string;
  }

  declare interface gapi$client$safebrowsing$RawHashes {
    /**
     * The number of bytes for each prefix encoded below.  This field can be
     * anywhere from 4 (shortest prefix) to 32 (full SHA256 hash).
     */
    prefixSize?: number;

    /**
     * The hashes, in binary format, concatenated into one long string. Hashes are
     * sorted in lexicographic order. For JSON API users, hashes are
     * base64-encoded.
     */
    rawHashes?: string;
  }

  declare interface gapi$client$safebrowsing$RawIndices {
    /**
     * The indices to remove from a lexicographically-sorted local list.
     */
    indices?: number[];
  }

  declare interface gapi$client$safebrowsing$RiceDeltaEncoding {
    /**
     * The encoded deltas that are encoded using the Golomb-Rice coder.
     */
    encodedData?: string;

    /**
     * The offset of the first entry in the encoded data, or, if only a single
     * integer was encoded, that single integer's value.
     */
    firstValue?: string;

    /**
     * The number of entries that are delta encoded in the encoded data. If only a
     * single integer was encoded, this will be zero and the single value will be
     * stored in `first_value`.
     */
    numEntries?: number;

    /**
     * The Golomb-Rice parameter, which is a number between 2 and 28. This field
     * is missing (that is, zero) if `num_entries` is zero.
     */
    riceParameter?: number;
  }

  declare interface gapi$client$safebrowsing$ThreatEntry {
    /**
     * The digest of an executable in SHA256 format. The API supports both
     * binary and hex digests. For JSON requests, digests are base64-encoded.
     */
    digest?: string;

    /**
     * A hash prefix, consisting of the most significant 4-32 bytes of a SHA256
     * hash. This field is in binary format. For JSON requests, hashes are
     * base64-encoded.
     */
    hash?: string;

    /**
     * A URL.
     */
    url?: string;
  }

  declare interface gapi$client$safebrowsing$ThreatEntryMetadata {
    /**
     * The metadata entries.
     */
    entries?: gapi$client$safebrowsing$MetadataEntry[];
  }

  declare interface gapi$client$safebrowsing$ThreatEntrySet {
    /**
     * The compression type for the entries in this set.
     */
    compressionType?: string;

    /**
     * The raw SHA256-formatted entries.
     */
    rawHashes?: gapi$client$safebrowsing$RawHashes;

    /**
     * The raw removal indices for a local list.
     */
    rawIndices?: gapi$client$safebrowsing$RawIndices;

    /**
     * The encoded 4-byte prefixes of SHA256-formatted entries, using a
     * Golomb-Rice encoding. The hashes are converted to uint32, sorted in
     * ascending order, then delta encoded and stored as encoded_data.
     */
    riceHashes?: gapi$client$safebrowsing$RiceDeltaEncoding;

    /**
     * The encoded local, lexicographically-sorted list indices, using a
     * Golomb-Rice encoding. Used for sending compressed removal indices. The
     * removal indices (uint32) are sorted in ascending order, then delta encoded
     * and stored as encoded_data.
     */
    riceIndices?: gapi$client$safebrowsing$RiceDeltaEncoding;
  }

  declare interface gapi$client$safebrowsing$ThreatInfo {
    /**
     * The platform types to be checked.
     */
    platformTypes?: string[];

    /**
     * The threat entries to be checked.
     */
    threatEntries?: gapi$client$safebrowsing$ThreatEntry[];

    /**
     * The entry types to be checked.
     */
    threatEntryTypes?: string[];

    /**
     * The threat types to be checked.
     */
    threatTypes?: string[];
  }

  declare interface gapi$client$safebrowsing$ThreatListDescriptor {
    /**
     * The platform type targeted by the list's entries.
     */
    platformType?: string;

    /**
     * The entry types contained in the list.
     */
    threatEntryType?: string;

    /**
     * The threat type posed by the list's entries.
     */
    threatType?: string;
  }

  declare interface gapi$client$safebrowsing$ThreatMatch {
    /**
     * The cache lifetime for the returned match. Clients must not cache this
     * response for more than this duration to avoid false positives.
     */
    cacheDuration?: string;

    /**
     * The platform type matching this threat.
     */
    platformType?: string;

    /**
     * The threat matching this threat.
     */
    threat?: gapi$client$safebrowsing$ThreatEntry;

    /**
     * Optional metadata associated with this threat.
     */
    threatEntryMetadata?: gapi$client$safebrowsing$ThreatEntryMetadata;

    /**
     * The threat entry type matching this threat.
     */
    threatEntryType?: string;

    /**
     * The threat type matching this threat.
     */
    threatType?: string;
  }

  declare interface gapi$client$safebrowsing$EncodedFullHashesResource {
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
       * A client ID that (hopefully) uniquely identifies the client implementation
       * of the Safe Browsing API.
       */
      clientId?: string,

      /**
       * The version of the client implementation.
       */
      clientVersion?: string,

      /**
       * A serialized FindFullHashesRequest proto.
       */
      encodedRequest: string,

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
    }): Request<gapi$client$safebrowsing$FindFullHashesResponse>;
  }

  declare interface gapi$client$safebrowsing$EncodedUpdatesResource {
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
       * A client ID that uniquely identifies the client implementation of the Safe
       * Browsing API.
       */
      clientId?: string,

      /**
       * The version of the client implementation.
       */
      clientVersion?: string,

      /**
       * A serialized FetchThreatListUpdatesRequest proto.
       */
      encodedRequest: string,

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
    }): Request<gapi$client$safebrowsing$FetchThreatListUpdatesResponse>;
  }

  declare interface gapi$client$safebrowsing$FullHashesResource {
    /**
     * Finds the full hashes that match the requested hash prefixes.
     */
    find(request: {
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
    }): Request<gapi$client$safebrowsing$FindFullHashesResponse>;
  }

  declare interface gapi$client$safebrowsing$ThreatListUpdatesResource {
    /**
     * Fetches the most recent threat list updates. A client can request updates
     * for multiple lists at once.
     */
    fetch(request: {
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
    }): Request<gapi$client$safebrowsing$FetchThreatListUpdatesResponse>;
  }

  declare interface gapi$client$safebrowsing$ThreatListsResource {
    /**
     * Lists the Safe Browsing threat lists available for download.
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
    }): Request<gapi$client$safebrowsing$ListThreatListsResponse>;
  }

  declare interface gapi$client$safebrowsing$ThreatMatchesResource {
    /**
     * Finds the threat entries that match the Safe Browsing lists.
     */
    find(request: {
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
    }): Request<gapi$client$safebrowsing$FindThreatMatchesResponse>;
  }
}
