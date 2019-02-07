declare module "gapi.client.kgsearch" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    entities: typeof client$entities
  };

  /**
   * Load Knowledge Graph Search API v1
   */
  declare function client$load(
    name: "kgsearch",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "kgsearch",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$entities: kgsearch$kgsearch$EntitiesResource;

  declare interface kgsearch$SearchResponse {
    /**
     * The local context applicable for the response. See more details at
     * http://www.w3.org/TR/json-ld/#context-definitions.
     */
    "@context"?: any;

    /**
     * The schema type of top-level JSON-LD object, e.g. ItemList.
     */
    "@type"?: any;

    /**
     * The item list of search results.
     */
    itemListElement?: any[];
  }

  declare interface kgsearch$EntitiesResource {
    /**
     * Searches Knowledge Graph for entities that match the constraints.
     * A list of matched entities will be returned in response, which will be in
     * JSON-LD format and compatible with http://schema.org
     */
    search(request: {
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
       * The list of entity id to be used for search instead of query string.
       * To specify multiple ids in the HTTP request, repeat the parameter in the
       * URL as in ...?ids=A&ids=B
       */
      ids?: string,

      /**
       * Enables indenting of json results.
       */
      indent?: boolean,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * The list of language codes (defined in ISO 693) to run the query with,
       * e.g. 'en'.
       */
      languages?: string,

      /**
       * Limits the number of entities to be returned.
       */
      limit?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Pretty-print response.
       */
      pp?: boolean,

      /**
       * Enables prefix match against names and aliases of entities
       */
      prefix?: boolean,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * The literal query string for search.
       */
      query?: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       */
      quotaUser?: string,

      /**
       * Restricts returned entities with these types, e.g. Person
       * (as defined in http://schema.org/Person). If multiple types are specified,
       * returned entities will contain one or more of these types.
       */
      types?: string,

      /**
       * Legacy upload protocol for media (e.g. "media", "multipart").
       */
      uploadType?: string,

      /**
       * Upload protocol for media (e.g. "raw", "multipart").
       */
      upload_protocol?: string
    }): Request<kgsearch$SearchResponse>;
  }
}
