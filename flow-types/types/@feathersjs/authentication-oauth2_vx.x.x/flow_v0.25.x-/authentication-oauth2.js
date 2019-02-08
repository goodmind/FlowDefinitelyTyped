declare module "@feathersjs/authentication-oauth2" {
  import typeof * as self from "@feathersjs/authentication-oauth2";

  import type {
    expressWs$Application,
    Paginated,
    esri$Service
  } from "@feathersjs/feathers";

  import type { Express$Request, jwt$RequestHandler } from "express";

  import type { Profile, Strategy } from "passport";

  declare var feathersAuthenticationOAuth2: ((
    notification$options?: FeathersAuthenticationOAuth2Options
  ) => () => void) &
    typeof self;
  declare export default typeof feathersAuthenticationOAuth2;

  declare export interface FeathersAuthenticationOAuth2Options<
    VerifierType = typeof Verifier,
    ServiceType = any
  > {
    /**
     * The name of the OAuth2 provider
     */
    skin$name: string;

    /**
     * The OAuth strategy to use
     */
    Strategy: string | typeof Strategy;

    /**
     * The route to register the callback handler, defaults to `${path}/callback`
     */
    callbackPath?: string;

    /**
     * The callback url. Defaults to @feathersjs/common's makeUrl + callbackPath
     */
    callbackURL?: string;
    successRedirect: string;
    failureRedirect: string;

    /**
     * Express middleware for handling the oauth callback. Defaults to the built in middleware. todo: needs a proper type
     */
    panel$handler?: jwt$RequestHandler;

    /**
     * Express middleware for handling the oauth error callback. Defaults to the built in middleware. todo: needs a proper type
     */
    errorHandler?: jwt$RequestHandler;

    /**
     * The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON. todo: needs a proper type
     */
    formatter?: jwt$RequestHandler;

    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier?: VerifierType;

    /**
     * The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'facebookId').
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    idField?: string;

    /**
     * The route to register the middleware on. Defaults to `/auth/${name}`
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    skin$path?: string;

    /**
     * the entity that you are looking up.
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    entity?: string;

    /**
     * the service to look up the entity
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    service: string | esri$Service<ServiceType>;

    /**
     * whether the request object should be passed to `verify`
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    passReqToCallback: boolean;

    /**
     * whether to use sessions,
     * This can also be set on app.get('auth') or app.get('authentication')
     */
    session: boolean;

    /**
     * Oauth flag to tell @feathersjs/authentication that this is an oauth authentication
     * Set by feathersOAuth2 to pass into @feathersjs/authentication
     */
    __oath?: boolean;
  }
  declare interface FeathersAuthenticationOAuth2Data<T: Profile = Profile> {
    profile: T;
    accessToken: string;
    refreshToken: string;
  }
  declare export class Verifier<
    DataType = any,
    OptionType: FeathersAuthenticationOAuth2Options = FeathersAuthenticationOAuth2Options,
    ProfileType: Profile = Profile
  > {
    constructor(
      app: expressWs$Application,
      notification$options: OptionType
    ): this;
    notification$options: OptionType;
    service: esri$Service<breeze$DataType>;
    _updateEntity(
      entity: any,
      main$data: FeathersAuthenticationOAuth2Data<ProfileType>
    ): promise$Promise<any>;
    _createEntity(
      main$data: FeathersAuthenticationOAuth2Data<ProfileType>
    ): promise$Promise<any>;
    _normalizeResult<T>(results: T[] | Paginated<T>): promise$Promise<T>;
    _setPayloadAndDone(
      entity: any,
      done: (
        err: EventType$Error | null,
        url$user: { [key: string]: any },
        info: { [key: string]: any }
      ) => void
    ): promise$Promise<any>;
    verify(
      req: Express$Request,
      accessToken: string,
      refreshToken: string,
      profile: ProfileType,
      done: (
        err: EventType$Error | null,
        url$user: { [key: string]: any },
        info: { [key: string]: any }
      ) => void
    ): void;
  }
  declare export var defaultHandler: jwt$RequestHandler;
  declare export var defaultErrorHandler: jwt$RequestHandler;
}
