declare module "pinterest-sdk" {
  declare export default typeof PDK;

  declare var npm$namespace$PDK: {
    me: typeof PDK$me,
    request: typeof PDK$request,
    login: typeof PDK$login,
    logout: typeof PDK$logout,
    getSession: typeof PDK$getSession,
    setSession: typeof PDK$setSession,
    init: typeof PDK$init,
    pin: typeof PDK$pin,

    OAuthScopes: typeof PDK$OAuthScopes,
    HttpMethod: typeof PDK$HttpMethod
  };

  declare var PDK$OAuthScopes: {|
    +read_public: 0, // 0
    +write_public: 1, // 1
    +read_relationships: 2, // 2
    +write_relationships: 3 // 3
  |};

  declare var PDK$HttpMethod: {|
    +get: 0, // 0
    +put: 1, // 1
    +post: 2, // 2
    +delete: 3 // 3
  |};

  declare type PDK$OauthSession = {
    accessToken?: string,
    scope?: string,
    error?: string
  };

  declare interface PDK$LoginOptions {
    scope: string | PDK$OAuthScopes;
    method?: string;
    appId?: string;
    cookie?: boolean;
    logging?: boolean;
    session?: PDK$OauthSession;
  }

  declare interface PDK$OAuthRequestParams {
    accessToken?: string;
    data?: any;
  }

  declare interface PDK$InitOptions {
    /**
     * Your application ID from developer.pinterest.com
     */
    appId?: string;
    cookie?: boolean;
    logging?: boolean;
    session?: PDK$OauthSession;
  }

  declare interface PDK$PinData {
    board: string;
    note: string;
    link: string;
    image_url: string;
  }

  /**
   * Get information on the currently authenticated user
   * @param cb the callback export function to handle the response
   */
  declare export function PDK$me(callback: Function): void;

  /**
   * Get information on the currently authenticated user
   * @param path the url path
   * @param cb the callback export function to handle the response
   */
  declare export function PDK$me(path: string, callback: Function): void;

  /**
   * Get information on the currently authenticated user
   * @param path the url path
   * @param params the parameters for the request
   * @param cb the callback export function to handle the response
   */
  declare export function PDK$me(
    path: string,
    params: Object,
    callback: Function
  ): void;

  /**
   * Make an API call to the server
   *
   * The path is the only required argument.
   * @param path URL path
   * @param httpMethod HTTP verb
   */
  declare export function PDK$request(
    path: string,
    httpMethod?: string | PDK$HttpMethod,
    data?: PDK$PinData,
    callback?: Function
  ): void;

  /**
   * Show user login dialog, and save access token
   */
  declare export function PDK$login(
    options: PDK$LoginOptions,
    callback: Function
  ): void;

  /**
   * Remove the session of the current user.
   *
   * Need to call login to re-connect, unless session is saved on server.
   */
  declare export function PDK$logout(
    callback?: (session: PDK$OauthSession) => any
  ): void;

  /**
   * Get the active session for the current user
   */
  declare export function PDK$getSession(): PDK$OauthSession;

  /**
   * Save the user specified session
   */
  declare export function PDK$setSession(
    session: PDK$OauthSession,
    callback?: (session: PDK$OauthSession) => any
  ): void;

  /**
   * Initialize the library.
   *
   * Typical initialization enabling all optional features:
   * ```
   *     *      <script src="pin-sdk.js"></script>
   *     *      <script>
   *     *        PDK.init({
   *     *          appId  : 'YOUR APP ID',
   *     *          cookie : true // enable cookies to allow the server to access the session
   *     *        });
   *     *      </script>
   *     * ```
   *  The best place to put this code is right before the closing
   *  `</body>` tag.
   *
   *  - Asynchronous Loading -
   *
   *  The library makes non-blocking loading of the script easy to use by
   *  providing the `pAsyncInit` hook. If this global export function is defined, it
   *  will be executed when the library is loaded:
   *  ```
   *     *     <div id="p-root"></div>
   *     *     <script>
   *     *       window.pAsyncInit = function() {
   *     *         PDK.init({
   *     *           appId  : 'YOUR APP ID',
   *     *           cookie : true // enable cookies to allow the server to access the session
   *     *         });
   *     *       };
   *     *
   *     *       (function() {
   *     *         var e = document.createElement('script');
   *     *         e.src = 'pin-sdk.js';
   *     *         e.async = true;
   *     *         document.getElementById('p-root').appendChild(e);
   *     *       }());
   *     *     </script>
   *     * ```
   */
  declare export function PDK$init(options: PDK$InitOptions): void;

  /**
   * Allow an unauthenticated user to pin using a popup
   * @param imageUrl URL for image that you want to Pin.
   * @param note The Pin's description.
   * @param url The URL the Pin will link to when you click through.
   */
  declare export function PDK$pin(
    imageUrl: string,
    note: string,
    url: string,
    callback: Function
  ): void;
}
