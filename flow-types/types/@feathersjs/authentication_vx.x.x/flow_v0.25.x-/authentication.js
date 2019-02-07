declare module "@feathersjs/authentication" {
  import type { Hook, Params } from "@feathersjs/feathers";

  import typeof * as self from "@feathersjs/authentication";

  import type { RequestHandler, Application } from "express";

  import type { create } from "domain";

  declare var feathersAuthentication: ((
    config?: FeathersAuthenticationOptions
  ) => () => void) &
    typeof self;
  declare export default typeof feathersAuthentication;

  declare export var hooks: AuthHooks$AuthHooks$Hooks;
  declare export interface FeathersAuthenticationOptions {
    path?: string;
    header?: string;
    entity?: string;
    service?: string;
    passReqToCallback?: boolean;
    session?: boolean;
    cookie?: {
      enabled?: boolean,
      name?: string,
      httpOnly?: boolean,
      secure?: boolean
    };
    jwt?: {
      /**
       * By default is an access token
       */
      header?: {
        [key: string]: any
      },

      /**
       * The resource server where the token is processed
       */
      audience?: string,

      /**
       * Typically the entity id associated with the JWT
       */
      subject?: string,

      /**
       * The issuing server, application or resource
       */
      issuer?: string,
      algorithm?: string,
      expiresIn?: string
    };
  }

  declare var npm$namespace$express: {
    exposeHeaders: typeof express$exposeHeaders,
    exposeCookies: typeof express$exposeCookies,
    authenticate: typeof express$authenticate,
    setCookie: typeof express$setCookie,
    successRedirect: typeof express$successRedirect,
    failureRedirect: typeof express$failureRedirect,
    emitEvents: typeof express$emitEvents
  };
  declare function express$exposeHeaders(): RequestHandler;

  declare function express$exposeCookies(): RequestHandler;

  declare function express$authenticate(
    strategy: string | string[],
    options?: FeathersAuthenticationOptions
  ): RequestHandler;

  declare function express$setCookie(
    options?: FeathersAuthenticationOptions
  ): RequestHandler;

  declare function express$successRedirect(): RequestHandler;

  declare function express$failureRedirect(
    options?: FeathersAuthenticationOptions
  ): RequestHandler;

  declare function express$emitEvents(): RequestHandler;

  declare export function service(
    options: FeathersAuthenticationOptions
  ): (app?: Application) => void;

  declare class service$Service<T = any> {
    constructor(app: Application): this;
    create(
      data: $Shape<T>,
      params: Params
    ): Promise<{
      accessToken: string
    }>;
    remove(
      id: null | string,
      params: Params
    ): Promise<{
      accessToken: string
    }>;
  }
  declare interface AuthHooks$HashPassOptions {
    passwordField: string;
  }

  declare interface AuthHooks$RestrictOptions {
    ownerField: string;
    idField: string;
  }

  declare interface AuthHooks$Hooks {
    express$authenticate(strategies: string[] | string): Hook;

    /**
     * The `verifyToken` hook will attempt to verify a token.
     * If the token is missing or is invalid it returns an error.
     * If the token is valid it adds the decrypted payload to hook.params.payload which contains the user id.
     * It is intended to be used as a before hook on any of the service methods.
     */
    verifyToken(options?: any): Hook;

    /**
     * The populateUser hook is for populating a user based on an id.
     * It can be used on any service method as either a before or after hook.
     * It is called internally after a token is created.
     */
    populateUser(options?: any): Hook;

    /**
     * The `restrictToAuthenticated` hook throws an error if there isn't a logged-in user by checking for the `hook.params.user` object.
     * It can be used on any service method and is intended to be used as a before hook.
     * It doesn't take any arguments.
     */
    restrictToAuthenticated(): Hook;

    /**
     * `restrictToOwner` is meant to be used as a before hook.
     * It only allows the user to retrieve resources that are owned by them.
     * It will return a *Forbidden* error without the proper permissions.
     * It can be used on `get`, `create`, `update`, `patch` or `remove` methods.
     */
    restrictToOwner(options?: AuthHooks$RestrictOptions): Hook;

    /**
     * The `hashPassword` hook will automatically hash the data coming in on the provided passwordField.
     * It is intended to be used as a before hook on the user service for the create, update, or patch methods.
     */
    hashPassword(options?: AuthHooks$HashPassOptions): Hook;
  }
}
