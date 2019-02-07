declare module "gapi.client.licensing" {
  declare var npm$namespace$client: {
    load: typeof client$load,
    licenseAssignments: typeof client$licenseAssignments
  };

  /**
   * Load Enterprise License Manager API v1
   */
  declare function client$load(
    name: "licensing",
    version: "v1"
  ): PromiseLike<void>;

  declare function client$load(
    name: "licensing",
    version: "v1",
    callback: () => any
  ): void;

  declare var client$licenseAssignments: licensing$licensing$LicenseAssignmentsResource;

  declare interface licensing$LicenseAssignment {
    /**
     * ETag of the resource.
     */
    etags?: string;

    /**
     * Identifies the resource as a LicenseAssignment.
     */
    kind?: string;

    /**
     * Id of the product.
     */
    productId?: string;

    /**
     * Display Name of the product.
     */
    productName?: string;

    /**
     * Link to this page.
     */
    selfLink?: string;

    /**
     * Id of the sku of the product.
     */
    skuId?: string;

    /**
     * Display Name of the sku of the product.
     */
    skuName?: string;

    /**
     * Email id of the user.
     */
    userId?: string;
  }

  declare interface licensing$LicenseAssignmentInsert {
    /**
     * Email id of the user
     */
    userId?: string;
  }

  declare interface licensing$LicenseAssignmentList {
    /**
     * ETag of the resource.
     */
    etag?: string;

    /**
     * The LicenseAssignments in this page of results.
     */
    items?: licensing$LicenseAssignment[];

    /**
     * Identifies the resource as a collection of LicenseAssignments.
     */
    kind?: string;

    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
  }

  declare interface licensing$LicenseAssignmentsResource {
    /**
     * Revoke License.
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
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku
       */
      skuId: string,

      /**
       * email id or unique Id of the user
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<void>;

    /**
     * Get license assignment of a particular product and sku for a user
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
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku
       */
      skuId: string,

      /**
       * email id or unique Id of the user
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignment>;

    /**
     * Assign License.
     */
    insert(request: {
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
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku
       */
      skuId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignment>;

    /**
     * List license assignments for given product of the customer.
     */
    listForProduct(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * CustomerId represents the customer for whom licenseassignments are queried
       */
      customerId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token to fetch the next page.Optional. By default server will return first page
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignmentList>;

    /**
     * List license assignments for given product and sku of the customer.
     */
    listForProductAndSku(request: {
      /**
       * Data format for the response.
       */
      alt?: string,

      /**
       * CustomerId represents the customer for whom licenseassignments are queried
       */
      customerId: string,

      /**
       * Selector specifying which fields to include in a partial response.
       */
      fields?: string,

      /**
       * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
       */
      key?: string,

      /**
       * Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100.
       */
      maxResults?: number,

      /**
       * OAuth 2.0 token for the current user.
       */
      oauth_token?: string,

      /**
       * Token to fetch the next page.Optional. By default server will return first page
       */
      pageToken?: string,

      /**
       * Returns response with indentations and line breaks.
       */
      prettyPrint?: boolean,

      /**
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku
       */
      skuId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignmentList>;

    /**
     * Assign License. This method supports patch semantics.
     */
    patch(request: {
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
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku for which license would be revoked
       */
      skuId: string,

      /**
       * email id or unique Id of the user
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignment>;

    /**
     * Assign License.
     */
    update(request: {
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
       * Name for product
       */
      productId: string,

      /**
       * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
       * Overrides userIp if both are provided.
       */
      quotaUser?: string,

      /**
       * Name for sku for which license would be revoked
       */
      skuId: string,

      /**
       * email id or unique Id of the user
       */
      userId: string,

      /**
       * IP address of the site where the request originates. Use this if you want to enforce per-user limits.
       */
      userIp?: string
    }): Request<licensing$LicenseAssignment>;
  }
}
