declare module "cordova-plugin-ms-adal" {
  declare interface ADAL$UserInfo {
    displayableId: string;
    userId: string;
    familyName: string;
    givenName: string;
    identityProvider: string;
    passwordChangeUrl: string;
    passwordExpiresOn: Date;
    uniqueId: string;
  }

  declare interface ADAL$TokenCacheItem {
    accessToken: string;
    authority: string;
    clientId: string;
    displayableId: string;
    expiresOn: Date;
    isMultipleResourceRefreshToken: boolean;
    resource: string;
    tenantId: string;
    userInfo: ADAL$UserInfo;
  }

  declare interface ADAL$Promise {
    then(doneCallBack: () => any, failCallBack?: (message: string) => any): any;
  }

  declare interface ADAL$PromiseTokenCacheItems {
    then(
      doneCallBack: (tokenCacheItems: ADAL$TokenCacheItem[]) => any,
      failCallBack?: (message: string) => any
    ): any;
  }

  declare class ADAL$TokenCache {
    contextAuthority: string;

    /**
     * Clears the cache by deleting all the items.
     * @returns {ADAL$Promise} Promise either fulfilled when operation is completed or rejected with error.
     */
    clear(): ADAL$Promise;

    /**
     * Gets all cached items.
     * @returns {ADAL$Promise} Promise either fulfilled with array of cached items or rejected with error.
     */
    readItems(): ADAL$PromiseTokenCacheItems;

    /**
     * Deletes cached item.
     * @param {ADAL$TokenCacheItem} item Cached item to delete from cache
     * @returns {ADAL$Promise} Promise either fulfilled when operation is completed or rejected with error.
     */
    deleteItem(item: ADAL$TokenCacheItem): ADAL$Promise;
  }

  declare class ADAL$AuthenticationResult {
    accessToken: string;
    accessTokenType: string;
    expiresOn: Date;
    idToken: string;
    isMultipleResourceRefreshToken: boolean;
    status: string;
    statusCode: string;
    tenantId: string;
    userInfo: ADAL$UserInfo;

    /**
     * Creates authorization header for web requests.
     * @returns {String} The authorization header.
     */
    createAuthorizationHeader(): string;
  }

  declare interface ADAL$PromiseAuthenticationResult {
    then(
      doneCallBack: (context: ADAL$AuthenticationResult) => any,
      failCallBack?: (message: string) => any
    ): any;
  }

  declare interface ADAL$PromiseAuthenticationContext {
    then(
      doneCallBack: (context: ADAL$AuthenticationContext) => any,
      failCallBack?: (message: string) => any
    ): any;
  }

  declare class ADAL$AuthenticationContext {
    authority: string;
    validateAuthority: boolean;
    tokenCache: ADAL$TokenCache;

    /**
 * Constructs context to use with known authority to get the token. It reuses existing context
 * for this authority URL in native proxy or creates a new one if it doesn't exists.
 * Corresponding native context will be created at first time when it will be needed.
 * @param {String} authority Authority url to send code and token requests
 * @param {Boolean} validateAuthority Validate authority before sending token request
When context is being created syncronously using this constructor
validateAuthority in native context will be disabled to prevent
context initialization failure
 * @returns {Object} Newly created authentication context.
 */
    constructor(authority: string, validateAuthority?: boolean): this;

    /**
     * Constructs context asynchronously to use with known authority to get the token.
     * It reuses existing context for this authority URL in native proxy or creates a new one if it doesn't exists.
     * @param {String} authority Authority url to send code and token requests
     * @param {Boolean} validateAuthority Validate authority before sending token request. True by default
     * @returns {ADAL$Promise} Promise either fulfilled with newly created authentication context or rejected with error
     */
    static createAsync(
      authority: string,
      validateAuthority?: boolean
    ): ADAL$PromiseAuthenticationContext;

    /**
 * Acquires token using interactive flow if needed. It checks the cache to return existing result
 * if not expired. It tries to use refresh token if available. If it fails to get token with
 * refresh token, it will remove this refresh token from cache and start authentication.
 * @param {String} resourceUrl Resource identifier
 * @param {String} clientId Client (application) identifier
 * @param {String} redirectUrl Redirect url for this application
 * @param {String} userId User identifier (optional)
 * @param {String} extraQueryParameters Extra query parameters (optional)
Parameters should be escaped before passing to this method (e.g. using 'encodeURI()')
 * @returns {ADAL$Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
 */
    acquireTokenAsync(
      resourceUrl: string,
      clientId: string,
      redirectUrl: string,
      userId?: string,
      extraQueryParameters?: string
    ): ADAL$PromiseAuthenticationResult;

    /**
     * Acquires token WITHOUT using interactive flow. It checks the cache to return existing result
     * if not expired. It tries to use refresh token if available. If it fails to get token without
     * displaying UI it will fail. This method guarantees that no UI will be shown to user.
     * @param {String} resourceUrl Resource identifier
     * @param {String} clientId Client (application) identifier
     * @param {String} userId User identifier (optional)
     * @returns {ADAL$Promise} Promise either fulfilled with AuthenticationResult object or rejected with error
     */
    acquireTokenSilentAsync(
      resourceUrl: string,
      clientId: string,
      userId: string
    ): ADAL$PromiseAuthenticationResult;
  }
}
