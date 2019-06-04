declare module "@hapi/hapi" {
  declare interface ServerAuth {
    strategy(
      name: string,
      scheme: "cookie",
      options?: hapiAuthCookie$Options
    ): void;
  }
  declare interface PluginSpecificConfiguration {
    "hapi-auth-cookie"?: {
      redirectTo?: boolean
    };
  }
  declare interface Request {
    cookieAuth: {
      set(session: { [key: string]: any }): void,
      set(key: string, value: { [key: string]: any } | string): void,
      clear(key?: string): void,
      ttl(milliseconds: number): void
    };
  }
}
declare module "@hapi/cookie" {
  import type {
    Request,
    ResponseObject,
    Plugin,
    ResponseToolkit,
    AuthCredentials,
    ServerStateCookieOptions
  } from "@hapi/hapi";

  declare interface hapiAuthCookie$ValidateResponse {
    valid: boolean;
    credentials?: AuthCredentials;
  }

  declare type hapiAuthCookie$ValidateFunction = (
    request?: Request,
    session?: { [key: string]: any }
  ) => Promise<hapiAuthCookie$ValidateResponse>;

  declare type hapiAuthCookie$RedirectToFunction = (
    request?: Request
  ) => string;

  /**
   * Options passed to 'hapi.auth.strategy' when this plugin is used
   */
  declare interface hapiAuthCookie$Options {
    /**
     * Cookie options.
     * @default { name: 'sid', clearInvalid: false, isSameSite: 'Strict', isSecure: true, isHttpOnly: true }
     */
    cookie?: ServerStateCookieOptions & {
      name: string
    };

    /**
     * Automatically sets the session cookie after validation to extend the current session for a new TTL duration.
     * @default false
     */
    keepAlive?: boolean;

    /**
     * Login URI or function that returns a URI to redirect unauthenticated requests to.
     * Note that it will only trigger when the authentication mode is 'required'.
     * Defaults to no redirection.
     */
    redirectTo?: string | hapiAuthCookie$RedirectToFunction;

    /**
     * Only works if 'redirectTo' is true
     * If set to true, a string, or an object, appends the current request path to the query component of the 'redirectTo' URI.
     */
    appendNext?: boolean | string;

    /**
     * An optional session validation function used to validate the content of the session cookie on each request.
     * Used to verify that the internal session state is still valid (e.g. user account still exists).
     */
    validateFunc?: hapiAuthCookie$ValidateFunction;

    /**
     * A name to use with decorating the request object.
     * Using multiple decorator names for separate authentication strategies could allow a developer to call the methods for the wrong strategy.
     * Potentially resulting in unintended authorized access.
     * @default 'cookieAuth'
     */
    requestDecoratorName?: string;
  }
  declare var hapiAuthCookie: Plugin<void>;
  declare export default typeof hapiAuthCookie;
}
