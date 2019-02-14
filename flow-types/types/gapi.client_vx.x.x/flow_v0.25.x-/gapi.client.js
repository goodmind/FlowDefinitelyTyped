declare module "gapi.client" {
  declare var npm$namespace$gapi: {
    load: typeof gapi$load,

    client: typeof npm$namespace$gapi$client,
    auth: typeof npm$namespace$gapi$auth
  };

  /**
   * Pragmatically initialize gapi class member.
   */
  declare function gapi$load(api: string, callback: () => void): void;

  declare var npm$namespace$gapi$client: {
    load: typeof gapi$client$load,
    request: typeof gapi$client$request,
    setApiKey: typeof gapi$client$setApiKey,
    newBatch: typeof gapi$client$newBatch
  };

  /**
   * Loads the client library interface to a particular API. The new API interface will be in the form gapi.client.api.collection.method.
   * @param name The name of the API to load.
   * @param version The version of the API to load
   * @param callback the function that is called once the API interface is loaded
   */
  declare function gapi$client$load(
    name: string,
    version: string,
    callback: () => any
  ): void;

  declare function gapi$client$load(
    name: string,
    version: string
  ): PromiseLike<void>;

  /**
   * Creates a HTTP request for making RESTful requests.
   * An object encapsulating the various arguments for this method.
   */
  declare function gapi$client$request<T>(args: {
    /**
     * The URL to handle the request
     */
    path: string,

    /**
     * The HTTP request method to use. Default is GET
     */
    method?: string,

    /**
     * URL params in key-value pair form
     */
    params?: any,

    /**
     * Additional HTTP request headers
     */
    headers?: any,

    /**
     * The HTTP request body (applies to PUT or POST).
     */
    body?: any
  }): client$Request<T>;

  /**
   * Sets the API key for the application.
   * @param apiKey The API key to set
   */
  declare function gapi$client$setApiKey(apiKey: string): void;

  /**
   * An object containing information about the HTTP response
   */
  declare interface gapi$client$Response<T> {
    result: T;
    body: string;
    headers?: any[];
    status?: number;
    statusText?: string;
  }

  /**
   * An object encapsulating an HTTP request. This object is not instantiated directly, rather it is returned by gapi.client.request.
   */
  declare type gapi$client$Request<T> = {
    /**
     * Executes the request and runs the supplied callback on response.
     * @param callback The callback function which executes when the request succeeds or fails.
     */
    execute(callback: (response: gapi$client$Response<T>) => any): void
  } & PromiseLike<gapi$client$Response<T>>;

  declare interface gapi$client$ResponseMap<T> {
    [id: string]: gapi$client$Response<T>;
  }

  /**
   * Represents an HTTP Batch operation. Individual HTTP requests are added with the add method and the batch is executed using execute.
   */
  declare type gapi$client$Batch<T> = {
    /**
     * Adds a gapi.client.Request to the batch.
     * @param request The HTTP request to add to this batch.
     * @param opt_params extra parameters for this batch entry.
     */
    add<T>(
      request: gapi$client$Request<T>,
      opt_params?: {
        /**
         * Identifies the response for this request in the map of batch responses. If one is not provided, the system generates a random ID.
         */
        id: string,
        callback(
          individualResponse: gapi$client$Response<T>,
          rawBatchResponse: string
        ): any
      }
    ): void,

    /**
     * Executes all requests in the batch. The supplied callback is executed on success or failure.
     * @param callback The callback to execute when the batch returns.
     */
    execute(
      callback: (
        responseMap: gapi$client$ResponseMap<T>,
        rawBatchResponse: string
      ) => any
    ): void
  } & PromiseLike<gapi$client$Response<gapi$client$ResponseMap<T>>>;

  /**
   * Creates a batch object for batching individual requests.
   */
  declare function gapi$client$newBatch<T>(): gapi$client$Batch<T>;

  declare var npm$namespace$gapi$auth: {
    authorize: typeof gapi$auth$authorize,
    init: typeof gapi$auth$init,
    getToken: typeof gapi$auth$getToken,
    setToken: typeof gapi$auth$setToken
  };

  /**
   * The OAuth 2.0 token object represents the OAuth 2.0 token and any associated data.
   */
  declare interface gapi$auth$GoogleApiOAuth2TokenObject {
    /**
     * The OAuth 2.0 token. Only present in successful responses
     */
    access_token: string;

    /**
     * Details about the error. Only present in error responses
     */
    error: string;

    /**
     * The duration, in seconds, the token is valid for. Only present in successful responses
     */
    expires_in: string;

    /**
     * The Google API scopes related to this token
     */
    state: string;
  }

  /**
   * Initiates the OAuth 2.0 authorization process. The browser displays a popup window prompting the user authenticate and authorize.
   * After the user authorizes, the popup closes and the callback function fires.
   * @param params A key/value map of parameters for the request. If the key is not one of the expected OAuth 2.0 parameters, it is added to the
   * URI as a query parameter.
   * @param callback The function to call once the login process is complete. The function takes an OAuth 2.0 token object as its only parameter.
   */
  declare function gapi$auth$authorize(
    params: {
      /**
       * The application's client ID. Visit the Google Developers Console to get an OAuth 2.0 client ID.
       */
      client_id?: string,

      /**
       * If true, then login uses "immediate mode", which means that the token is refreshed behind the scenes, and no UI is shown to the user.
       */
      immediate?: boolean,

      /**
       * The OAuth 2.0 response type property. Default: token
       */
      response_type?: string,

      /**
       * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
       */
      scope?: string | string[]
    },
    callback: (authResult: gapi$auth$GoogleApiOAuth2TokenObject) => void
  ): void;

  /**
   * Initializes the authorization feature. Call this when the client loads to prevent popup blockers from blocking the auth window on gapi.auth.authorize calls.
   * @param callback A callback to execute when the auth feature is ready to make authorization calls.
   */
  declare function gapi$auth$init(callback: () => any): void;

  /**
   * Retrieves the OAuth 2.0 token for the application.
   * @return The OAuth 2.0 token.
   */
  declare function gapi$auth$getToken(): gapi$auth$GoogleApiOAuth2TokenObject;

  /**
   * Sets the OAuth 2.0 token for the application.
   * @param token The token to set.
   */
  declare function gapi$auth$setToken(
    token: gapi$auth$GoogleApiOAuth2TokenObject
  ): void;
}
