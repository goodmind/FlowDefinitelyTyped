declare module "swagger-node-runner" {
  import type { Express, NextFunction } from "express";

  import type { Spec } from "swagger-schema-official";

  import type { EventEmitter } from "events";

  import typeof * as Hapi from "hapi";

  import typeof * as Restify from "restify";

  /**
   * Config object for SwaggerNodeRunner
   */
  declare export interface Config {
    /**
     * Path to app
     */
    appRoot: string;

    /**
     * If `true` API is in mock mode
     *
     * default is `false`
     */
    mockMode?: boolean;

    /**
     * If `true` resonse is validated
     *
     * default is `true`
     */
    validateResponse?: boolean;

    /**
     * Sets `NODE_CONFIG_DIR` env if not set yet
     */
    configDir?: string;

    /**
     * Swagger controller directories
     *
     * default is array with `/api/controllers` relative to `appRoot`
     */
    controllersDirs?: string[];

    /**
     * Swagger mock controller directories
     *
     * default is array with `/api/mocks` relative to `appRoot`
     */
    mockControllersDirs?: string[];

    /**
     * Used for Bagpipes library
     *
     * default is `[api/fittings]`
     */
    fittingsDirs?: string[];

    /**
     * Define Middleware for using Swagger security information to authenticate requests. Part of _swagger-tools_
     *
     * default is `undefined`
     * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-security.js|Github Source}
     */
    swaggerSecurityHandlers?: SwaggerSecurityHandlers;

    /**
     * Used for Bagpipes library
     * @se
     * @link {https://github.com/apigee-127/bagpipes|Github Source}
     */
    bagpipes?: any;

    /**
     * default is `null`
     */
    defaultPipe?: string;

    /**
     * default is `swagger_controllers`
     */
    swaggerControllerPipe?: string;

    /**
     * Absolute path to swagger.yml file, if not set default value is used.
     */
    swaggerFile?: string;
  }

  /**
   * Internally stored version of config
   */
  declare export interface ConfigInternal {
    /**
     * Config of SwaggerNodeRunner
     */
    swagger?: Config;
  }

  /**
   * Middleware used by `swagger-tools`
   */
  declare export type SwaggerToolsMiddleware = (
    req: any,
    res: any,
    next: any
  ) => any;

  /**
 * @param callback - Error is returned if request is unauthorized.
The Error may include "message", "state", and "code" fields to be conveyed to the client in the response body and a
"headers" field containing an object representing headers to be set on the response to the client.
In addition, if the Error has a statusCode field, the response statusCode will be set to match -
otherwise, the statusCode will be set to 403.
 */
  declare export type SwaggerToolsSecurityHandler = (
    request: any,
    securityDefinition: any,
    scopes: any,
    callback: (err: Error) => void
  ) => void;

  /**
   * The keys match SecurityDefinition names and the associated values are functions that accept the following parameters:
   * `(request, securityDefinition, scopes, callback)`
   */
  declare export interface SwaggerSecurityHandlers {
    [name: string]: SwaggerToolsSecurityHandler;
  }

  /**
   * Runner instance
   */
  declare export type Runner = {
    /**
     * Resolves path (relative to `config.appRoot`)
     */
    resolveAppPath(...to: any[]): string,
    defaultErrorHandler(): any,

    /**
     * Fetch a _bagpipe_ pipe
     */
    getPipe(req: {
      swagger: {
        path: any
      }
    }): any,
    config: ConfigInternal,

    /**
     * Current OpenAPI Specification (formaly known as Swagger RESTful API Documentation Specification)
     * @see {@link http://swagger.io/specification/|Swagger Specs}
     */
    swagger: Spec,

    /**
     * References to Swagger Tools Midleware (from _swagger-tools_ module)     *
     * @see {@link https://github.com/apigee-127/swagger-tools|Github Source}
     */
    swaggerTools: {
      /**
       * Middleware for providing Swagger information to downstream middleware and request handlers.
       * @param rlOrSO - The Resource Listing (Swagger 1.2) or Swagger Object (Swagger 2.0)
       * @param apiDeclarations - The array of API Declarations (Swagger 1.2)
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-metadata.js|Git Source}
       */
      swaggerMetadata(
        rlOrSO: any,
        apiDeclarations: any[]
      ): SwaggerToolsMiddleware,

      /**
       * Middleware for using Swagger information to route requests to handlers.
       * @param options - The configuration options
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/docs/Middleware.md#swaggerrouteroptions|Docs}
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-router.js|Github Source}
       */
      swaggerRouter(options?: any): SwaggerToolsMiddleware,

      /**
       * Middleware for using Swagger security information to authenticate requests.
       * @param options - The configuration options
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-security.js|Github Source}
       */
      swaggerSecurity(
        options?: SwaggerSecurityHandlers
      ): SwaggerToolsMiddleware,

      /**
       * Middleware for serving the Swagger documents and Swagger UI.
       * @param rlOrSO - The Resource Listing (Swagger 1.2) or Swagger Object (Swagger 2.0)
       * @param apiDeclarations - The array of API Declarations (Swagger 1.2)
       * @param options - The configuration options
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-ui.js|Github Source}
       */
      swaggerUi(
        rlOrSO: any,
        apiDeclarations: any[],
        options?: any
      ): SwaggerToolsMiddleware,

      /**
       * Middleware for using Swagger information to validate API requests/responses.type
       * @param options - The configuration options
       * @see {@link https://github.com/apigee-127/swagger-tools/blob/master/middleware/swagger-validator.js|Github Source}
       */
      swaggerValidator(options?: any): SwaggerToolsMiddleware
    },
    swaggerSecurityHandlers: SwaggerSecurityHandlers | void,

    /**
     * Nested Key Value description for _backpipes_ module
     * @see {@link https://github.com/apigee-127/bagpipes#pipes|Github Source}
     */
    bagpipes: {
      [name: string]: any
    },

    /**
     * Create new Connect middleware
     */
    connectMiddleware(): ConnectMiddleware,

    /**
     * Create new Express middleware
     */
    expressMiddleware(): ExpressMiddleware,

    /**
     * Create new Restify middleware
     */
    restifyMiddleware(): RestifyMiddleware,

    /**
     * Create new Sails middleware
     */
    sailsMiddleware(): SailsMiddleware,

    /**
     * Create new Hapi middleware
     */
    hapiMiddleware(): HapiMiddleware
  } & EventEmitter;

  /**
   * base used by all middleware versions
   */
  declare export interface Middleware {
    /**
     * Back-reference to `swagger-node-runner`s `Runner` that has created this middleware
     */
    runner: Runner;
  }

  /**
   * Connect/Express specific Middleware
   */
  declare export type ConnectMiddleware = {
    middleware(): (
      req: Express.Request,
      res: Express.Response,
      next: NextFunction
    ) => void,

    /**
     * Register this Middleware with `app`
     */
    register(app: Express.Application): void
  } & Middleware;

  /**
   * Express specific Middleware
   *
   * _Alias for `ConnectMiddleware`_
   */
  declare export type ExpressMiddleware = {} & ConnectMiddleware;

  /**
   * Sails specific Middleware
   */
  declare export type SailsMiddleware = {
    /**
     * Express style middleware
     */
    chain(): (
      req: Express.Request,
      res: Express.Response,
      next: NextFunction
    ) => void
  } & Middleware;

  /**
   * Hapi specific Middleware
   */
  declare export type HapiMiddleware = {
    /**
     * Back-reference to Config object of `Runner` that has created this middleware
     */
    config: ConfigInternal,

    /**
     * Hapi Plugin
     */
    plugin: {
      /**
       * Hapi plugin `register` implementation.
       * @see {@link https://hapijs.com/tutorials/plugins|Hapi Docs}
       */
      register: {
        /**
         * Registers Plugin with `onRequest` and traces `request-error` callbacks
         *              *
         * @param server - Hapi server
         * @param options - options for plugin (not used in the moment)
         * @param next - callback called when register is done
         */
        (server: Hapi.Server, options: any, next: () => void): void,

        /**
         * Object attached to `register` function to provide hapi with some additional information about the plugin
         */
        attributes: {
          /**
           * Name of Plugin (e.g. `swagger-node-runner`)
           */
          name: string,

          /**
           * Version of Plugin
           */
          version: string
        }
      }
    }
  } & Middleware;

  /**
   * Restify specific Middleware
   */
  declare export type RestifyMiddleware = {
    /**
     * Register this Middleware with `app`
     */
    register(app: Restify.Server): void
  } & Middleware;

  /**
   * Create new SwaggerNodeRunner Instance
   *
   * SwaggerNode config priority:
   *    1. `swagger_**` environment vars
   *    2. `config` passed to `create()`
   *    3. read from swagger node in `default.yaml` in config directory
   *    4. defaults
   * @param config - Configuration for `Runner`
   * @param runner - This Callback is called when the `Runner` has been instantiated
   */
  declare export function create(
    config: Config,
    cb: (err: Error | void, runner: Runner) => void
  ): void;
}
