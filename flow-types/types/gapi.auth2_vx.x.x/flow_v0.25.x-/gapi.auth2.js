declare module "gapi.auth2" {
  declare var npm$namespace$gapi: {
    auth2: typeof npm$namespace$gapi$auth2,
    signin2: typeof npm$namespace$gapi$signin2
  };

  declare var npm$namespace$gapi$auth2: {
    init: typeof gapi$auth2$init,
    getAuthInstance: typeof gapi$auth2$getAuthInstance,
    authorize: typeof gapi$auth2$authorize,

    GoogleAuth: typeof gapi$auth2$GoogleAuth,
    SigninOptionsBuilder: typeof gapi$auth2$SigninOptionsBuilder
  };

  /**
   * GoogleAuth is a singleton class that provides methods to allow the user to sign in with a Google account,
   * get the user's current sign-in status, get specific data from the user's Google profile,
   * request additional scopes, and sign out from the current account.
   */
  declare class gapi$auth2$GoogleAuth {
    isSignedIn: auth2$IsSignedIn;
    currentUser: auth2$CurrentUser;

    /**
     * Calls the onInit function when the GoogleAuth object is fully initialized, or calls the onFailure function if
     * initialization fails.
     */
    then(
      onInit: (googleAuth: gapi$auth2$GoogleAuth) => any,
      onFailure?: (reason: {
        error: string,
        details: string
      }) => any
    ): any;

    /**
     * Signs in the user using the specified options.
     * If no option specified here, fallback to the options specified to gapi.auth2.init().
     */
    signIn(
      options?: auth2$SigninOptions | auth2$SigninOptionsBuilder
    ): Promise<auth2$GoogleUser>;

    /**
     * Signs out all accounts from the application.
     */
    signOut(): any;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     */
    grantOfflineAccess(
      options?: auth2$OfflineAccessOptions
    ): Promise<{
      code: string
    }>;

    /**
     * Attaches the sign-in flow to the specified container's click handler.
     */
    attachClickHandler(
      container: any,
      options: auth2$SigninOptions,
      onsuccess: (googleUser: auth2$GoogleUser) => any,
      onfailure: (reason: string) => any
    ): any;
  }

  declare interface gapi$auth2$IsSignedIn {
    /**
     * Returns whether the current user is currently signed in.
     */
    get(): boolean;

    /**
     * Listen for changes in the current user's sign-in state.
     */
    listen(listener: (signedIn: boolean) => any): void;
  }

  declare interface gapi$auth2$CurrentUser {
    /**
     * Returns a GoogleUser object that represents the current user. Note that in a newly-initialized
     * GoogleAuth instance, the current user has not been set. Use the currentUser.listen() method or the
     * GoogleAuth.then() to get an initialized GoogleAuth instance.
     */
    get(): auth2$GoogleUser;

    /**
     * Listen for changes in currentUser.
     */
    listen(listener: (user: auth2$GoogleUser) => any): void;
  }

  declare interface gapi$auth2$SigninOptions {
    /**
     * The package name of the Android app to install over the air.
     * See Android app installs from your web site:
     * https://developers.google.com/identity/sign-in/web/android-app-installs
     */
    app_package_name?: string;

    /**
     * Fetch users' basic profile information when they sign in.
     * Adds 'profile', 'email' and 'openid' to the requested scopes.
     * True if unspecified.
     */
    fetch_basic_profile?: boolean;

    /**
     * Specifies whether to prompt the user for re-authentication.
     * See OpenID Connect Request Parameters:
     * https://openid.net/specs/openid-connect-basic-1_0.html#RequestParameters
     */
    prompt?: string;

    /**
     * The scopes to request, as a space-delimited string.
     * Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;

    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: "popup" | "redirect";

    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
  }

  /**
   * Definitions by: John <https://github.com/jhcao23>
   * Interface that represents the different configuration parameters for the GoogleAuth.grantOfflineAccess(options) method.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2offlineaccessoptions
   */
  declare interface gapi$auth2$OfflineAccessOptions {
    scope?: string;
    prompt?: "select_account" | "consent";
    app_package_name?: string;
  }

  /**
   * Interface that represents the different configuration parameters for the gapi.auth2.init method.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
   */
  declare interface gapi$auth2$ClientConfig {
    /**
     * The app's client ID, found and created in the Google Developers Console.
     */
    client_id?: string;

    /**
     * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
     * Defaults to single_host_origin if unspecified.
     */
    cookie_policy?: string;

    /**
     * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
     */
    scope?: string;

    /**
     * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
     */
    fetch_basic_profile?: boolean;

    /**
     * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
     * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
     * and the hd claim in the ID Token on the server to verify the domain is what you expected.
     */
    hosted_domain?: string;

    /**
     * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
     * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
     */
    openid_realm?: string;

    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     */
    ux_mode?: "popup" | "redirect";

    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     */
    redirect_uri?: string;
  }

  declare class gapi$auth2$SigninOptionsBuilder {
    setAppPackageName(name: string): any;
    setFetchBasicProfile(fetch: boolean): any;
    setPrompt(prompt: string): any;
    setScope(scope: string): any;
  }

  declare interface gapi$auth2$BasicProfile {
    getId(): string;
    getName(): string;
    getGivenName(): string;
    getFamilyName(): string;
    getImageUrl(): string;
    getEmail(): string;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authresponse
   */
  declare interface gapi$auth2$AuthResponse {
    access_token: string;
    id_token: string;
    login_hint: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeconfig
   */
  declare interface gapi$auth2$AuthorizeConfig {
    client_id: string;
    scope: string;
    response_type?: string;
    prompt?: string;
    cookie_policy?: string;
    hosted_domain?: string;
    login_hint?: string;
    app_package_name?: string;
    openid_realm?: string;
    include_granted_scopes?: boolean;
  }

  /**
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeresponse
   */
  declare interface gapi$auth2$AuthorizeResponse {
    access_token: string;
    id_token: string;
    code: string;
    scope: string;
    expires_in: number;
    first_issued_at: number;
    expires_at: number;
    error: string;
    error_subtype: string;
  }

  /**
   * A GoogleUser object represents one user account.
   */
  declare interface gapi$auth2$GoogleUser {
    /**
     * Get the user's unique ID string.
     */
    getId(): string;

    /**
     * Returns true if the user is signed in.
     */
    isSignedIn(): boolean;

    /**
     * Get the user's Google Apps domain if the user signed in with a Google Apps account.
     */
    getHostedDomain(): string;

    /**
     * Get the scopes that the user granted as a space-delimited string.
     */
    getGrantedScopes(): string;

    /**
     * Get the user's basic profile information.
     */
    getBasicProfile(): gapi$auth2$BasicProfile;

    /**
     * Get the response object from the user's auth session.
     */
    getAuthResponse(
      includeAuthorizationData?: boolean
    ): gapi$auth2$AuthResponse;

    /**
     * Forces a refresh of the access token, and then returns a Promise for the new AuthResponse.
     */
    reloadAuthResponse(): Promise<gapi$auth2$AuthResponse>;

    /**
     * Returns true if the user granted the specified scopes.
     */
    hasGrantedScopes(scopes: string): boolean;

    /**
     * Signs in the user. Use this method to request additional scopes for incremental
     * authorization or to sign in a user after the user has signed out.
     * When you use GoogleUser.signIn(), the sign-in flow skips the account chooser step.
     * See GoogleAuth.signIn().
     */
    signIn(
      options?: gapi$auth2$SigninOptions | gapi$auth2$SigninOptionsBuilder
    ): any;

    /**
     * See GoogleUser.signIn()
     */
    grant(
      options?: gapi$auth2$SigninOptions | gapi$auth2$SigninOptionsBuilder
    ): any;

    /**
     * Get permission from the user to access the specified scopes offline.
     * When you use GoogleUser.grantOfflineAccess(), the sign-in flow skips the account chooser step.
     * See GoogleUser.grantOfflineAccess().
     */
    grantOfflineAccess(scopes: string): void;

    /**
     * Revokes all of the scopes that the user granted.
     */
    disconnect(): void;
  }

  /**
   * Initializes the GoogleAuth object.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2initparams
   */
  declare function gapi$auth2$init(
    params: gapi$auth2$ClientConfig
  ): gapi$auth2$GoogleAuth;

  /**
   * Returns the GoogleAuth object. You must initialize the GoogleAuth object with gapi.auth2.init() before calling this method.
   */
  declare function gapi$auth2$getAuthInstance(): gapi$auth2$GoogleAuth;

  /**
   * Performs a one time OAuth 2.0 authorization.
   * Reference: https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2authorizeparams-callback
   */
  declare function gapi$auth2$authorize(
    params: gapi$auth2$AuthorizeConfig,
    callback: (response: gapi$auth2$AuthorizeResponse) => void
  ): void;

  declare var npm$namespace$gapi$signin2: {
    render: typeof gapi$signin2$render
  };
  declare function gapi$signin2$render(
    id: any,
    options: {
      /**
       * The auth scope or scopes to authorize. Auth scopes for individual APIs can be found in their documentation.
       */
      scope?: string,

      /**
       * The width of the button in pixels (default: 120).
       */
      width?: number,

      /**
       * The height of the button in pixels (default: 36).
       */
      height?: number,

      /**
       * Display long labels such as "Sign in with Google" rather than "Sign in" (default: false).
       */
      longtitle?: boolean,

      /**
       * The color theme of the button: either light or dark (default: light).
       */
      theme?: string,

      /**
       * The callback function to call when a user successfully signs in (default: none).
       */
      onsuccess?: (user: auth2$GoogleUser) => void,

      /**
       * The callback function to call when sign-in fails (default: none).
       */
      onfailure?: (reason: {
        error: string
      }) => void,

      /**
       * The package name of the Android app to install over the air. See
       * <a href="https://developers.google.com/identity/sign-in/web/android-app-installs">Android app installs from your web site</a>.
       * Optional. (default: none)
       */
      app_package_name?: string
    }
  ): void;
}
