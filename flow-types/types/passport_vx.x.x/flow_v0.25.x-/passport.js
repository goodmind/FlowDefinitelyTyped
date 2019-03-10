declare module "global" {
  declare interface Express$Request {
    authInfo?: any;
    user?: any;
    login(user: any, done: (err: any) => void): void;
    login(user: any, options: any, done: (err: any) => void): void;
    logIn(user: any, done: (err: any) => void): void;
    logIn(user: any, options: any, done: (err: any) => void): void;
    logout(): void;
    logOut(): void;
    isAuthenticated(): boolean;
    isUnauthenticated(): boolean;
  }
}
declare module "passport" {
  import typeof * as express from "express";

  declare interface passport$AuthenticateOptions {
    authInfo?: boolean;
    assignProperty?: string;
    failureFlash?: string | boolean;
    failureMessage?: boolean | string;
    failureRedirect?: string;
    failWithError?: boolean;
    session?: boolean;
    scope?: string | string[];
    successFlash?: string | boolean;
    successMessage?: boolean | string;
    successRedirect?: string;
    successReturnToOrRedirect?: string;
    state?: string;
    pauseStream?: boolean;
    userProperty?: string;
    passReqToCallback?: boolean;
    prompt?: string;
  }

  declare interface passport$Authenticator<
    InitializeRet = express.Handler,
    AuthenticateRet = any,
    AuthorizeRet = AuthenticateRet,
    AuthorizeOptions = passport$AuthenticateOptions
  > {
    use(strategy: passport$Strategy): this;
    use(name: string, strategy: passport$Strategy): this;
    unuse(name: string): this;
    framework<X, Y, Z>(
      fw: passport$Framework<X, Y, Z>
    ): passport$Authenticator<X, Y, Z>;
    initialize(options?: {
      userProperty: string
    }): InitializeRet;
    session(options?: {
      pauseStream: boolean
    }): AuthenticateRet;
    authenticate(
      strategy: string | string[],
      callback?: (...args: any[]) => any
    ): AuthenticateRet;
    authenticate(
      strategy: string | string[],
      options: passport$AuthenticateOptions,
      callback?: (...args: any[]) => any
    ): AuthenticateRet;
    authorize(
      strategy: string | string[],
      callback?: (...args: any[]) => any
    ): AuthorizeRet;
    authorize(
      strategy: string | string[],
      options: AuthorizeOptions,
      callback?: (...args: any[]) => any
    ): AuthorizeRet;
    serializeUser<TUser, TID>(
      fn: (user: TUser, done: (err: any, id?: TID) => void) => void
    ): void;
    deserializeUser<TUser, TID>(
      fn: (id: TID, done: (err: any, user?: TUser) => void) => void
    ): void;
    transformAuthInfo(
      fn: (info: any, done: (err: any, info: any) => void) => void
    ): void;
  }

  declare type passport$PassportStatic = {
    Authenticator: {
      new(): passport$Authenticator<>
    },
    Passport: $PropertyType<passport$PassportStatic, "Authenticator">,
    Strategy: {
      new(): passport$Strategy & passport$StrategyCreatedStatic
    }
  } & passport$Authenticator;

  declare interface passport$Strategy {
    name?: string;
    authenticate(req: express.Request, options?: any): any;
  }

  declare interface passport$StrategyCreatedStatic {
    /**
     * Authenticate `user`, with optional `info`.
     *
     * Strategies should call this function to successfully authenticate a
     * user.  `user` should be an object supplied by the application after it
     * has been given an opportunity to verify credentials.  `info` is an
     * optional argument containing additional user information.  This is
     * useful for third-party authentication strategies to pass profile
     * details.
     */
    success(user: { [key: string]: any }, info?: { [key: string]: any }): void;

    /**
     * Fail authentication, with optional `challenge` and `status`, defaulting
     * to 401.
     *
     * Strategies should call this function to fail an authentication attempt.
     */
    fail(challenge?: string | number, status?: number): void;

    /**
     * Redirect to `url` with optional `status`, defaulting to 302.
     *
     * Strategies should call this function to redirect the user (via their
     * user agent) to a third-party website for authentication.
     */
    redirect(url: string, status?: number): void;

    /**
     * Pass without making a success or fail decision.
     *
     * Under most circumstances, Strategies should not need to call this
     * function.  It exists primarily to allow previous authentication state
     * to be restored, for example from an HTTP session.
     */
    pass(): void;

    /**
     * Internal error while performing authentication.
     *
     * Strategies should call this function when an internal error occurs
     * during the process of performing authentication; for example, if the
     * user directory is not available.
     */
    error(err: any): void;
  }

  declare type passport$StrategyCreated<
    T,
    O = T & passport$StrategyCreatedStatic
  > = $ObjMapi<O, <P>(P) => $ElementType<O, P>>;

  declare interface passport$Profile {
    provider: string;
    id: string;
    displayName: string;
    username?: string;
    name?: {
      familyName: string,
      givenName: string,
      middleName?: string
    };
    emails?: Array<{
      value: string,
      type?: string
    }>;
    photos?: Array<{
      value: string
    }>;
  }

  declare interface passport$Framework<
    InitializeRet = any,
    AuthenticateRet = any,
    AuthorizeRet = AuthenticateRet
  > {
    initialize(
      passport: passport$Authenticator<
        InitializeRet,
        AuthenticateRet,
        AuthorizeRet
      >,
      options?: any
    ): (...args: any[]) => InitializeRet;
    authenticate(
      passport: passport$Authenticator<
        InitializeRet,
        AuthenticateRet,
        AuthorizeRet
      >,
      name: string,
      options?: any,
      callback?: (...args: any[]) => any
    ): (...args: any[]) => AuthenticateRet;
    authorize?: (
      passport: passport$Authenticator<
        InitializeRet,
        AuthenticateRet,
        AuthorizeRet
      >,
      name: string,
      options?: any,
      callback?: (...args: any[]) => any
    ) => (...args: any[]) => AuthorizeRet;
  }
  declare var passport: passport$PassportStatic;
  declare export default typeof passport;
}
