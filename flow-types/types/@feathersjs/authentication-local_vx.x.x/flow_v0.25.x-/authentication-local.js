declare module "@feathersjs/authentication-local" {
  import type { Application, Hook, Paginated } from "@feathersjs/feathers";

  import type { Request } from "express";

  import typeof * as self from "@feathersjs/authentication-local";

  declare var feathersAuthenticationLocal: ((
    options?: $Shape<FeathersAuthenticationLocalOptions>
  ) => () => void) &
    typeof self;
  declare export default typeof feathersAuthenticationLocal;

  declare export interface FeathersAuthenticationLocalOptions {
    /**
     * the name to use when invoking the authentication Strategy
     */
    name: string;

    /**
     * the entity that you're comparing username/password against
     */
    entity: string;

    /**
     * the service to look up the entity
     */
    service: string;

    /**
     * key name of username field on the request
     */
    usernameField: string;

    /**
     * key name of password field on the request
     */
    passwordField: string;

    /**
     * key name of the username field on the entity (defaults to `usernameField`)
     */
    entityUsernameField: string;

    /**
     * key name of the password on the entity (defaults to `passwordField`)
     */
    entityPasswordField: string;

    /**
     * whether the request object should be passed to `verify`
     */
    passReqToCallback: boolean;

    /**
     * whether to use sessions,
     */
    session: boolean;

    /**
     * A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
     */
    Verifier: LocalVerifier;
  }
  declare export class LocalVerifier {
    constructor(app: Application, options: any): this;
    _comparePassword<T>(entity: T, password: string): Promise<T>;
    _normalizeResult<T>(results: T[] | Paginated<T>): Promise<T>;
    verify(
      req: Request,
      username: string,
      password: string,
      done: (
        error: any,
        user?: any,
        options?: {
          message: string
        }
      ) => void
    ): void;
  }

  declare var npm$namespace$hooks: {
    hashPassword: typeof hooks$hashPassword,
    protect: typeof hooks$protect
  };
  declare function hooks$hashPassword(options?: any): Hook;

  declare function hooks$protect(...fields: string[]): Hook;

  declare export var defaults: {
    name: string,
    usernameField: string,
    passwordField: string
  };
}
