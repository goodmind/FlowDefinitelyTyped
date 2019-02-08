declare module "loopback" {
  import typeof * as core from "express-serve-static-core";

  import type { Foxx$NextFunction, inert$RequestHandler } from "express";

  declare function l(): l$l$LoopBackApplication;

  declare var npm$namespace$l: {
    favicon: typeof l$favicon,
    rest: typeof l$rest,
    static: typeof l$static,
    status: typeof l$status,
    rewriteUserLiteral: typeof l$rewriteUserLiteral,
    token: typeof l$token,
    urlNotFound: typeof l$urlNotFound
  };

  /**
   * General type for a callback to an async function.
   */
  declare type l$CallbackWithoutResult = (err: EventType$Error | null) => any;

  declare type l$CallbackWithResult<T> = (
    err: EventType$Error | null,
    result: T
  ) => any;

  declare type l$CallbackWithMultipleResults<T, G> = (
    err: EventType$Error | null,
    arg0: T,
    arg1: G
  ) => any;

  /**
   * The `App` object represents a Loopback application
   * The App object extends [Express](expressjs.com/api.html#express) and
   * supports Express middleware. See
   * [Express documentation](expressjs.com) for details
   * ```js
   *        * var loopback = require('loopback');
   *        * var app = loopback()
   *        * app.get('/', function(req, res){
   *        *   res.send('hello world');
   *        * })
   *        * app.listen(3000);
   *        * ``
   *        * @class LoopBackApplication
   *        * @header var app = loopback();
   *        *
   */
  declare type l$LoopBackApplication = {
    start(): void,

    /**
 * Register a connector
 * When a new data-source is being added via `app.dataSource`, the connector
 * name is looked up in the registered connectors first
 * Connectors are required to be explicitly registered only for applications
 * using browserify, because browserify does not support dynamic require,
 * which is used by LoopBack to automatically load the connector module
 * @param {string} name Name of the connector, e.g. 'mysql'.
 * @param {any} connector Connector object as returne
by `require('loopback-connector-{name}')`
 */
    connector(skin$name: string, connector: any): void,

    /**
     * Define a DataSource
     * @param {string} name The data source name
     * @param {any} config The data source confi
     */
    dataSource(skin$name: string, main$config: any): void,

    /**
     * Enable app wide authentication
     */
    enableAuth(): void,

    /**
 * Listen for connections and update the configured port
 * When there are no parameters or there is only one callback parameter,
 * the server will listen on `app.get('host')` and `app.get('port')`
 * For example, to listen on host/port configured in app config:
 * ```js
 *              * app.listen();
 *              * ``
 *              * Otherwise all arguments are forwarded to `http.Server.listen`
 *              * For example, to listen on the specified port and all hosts, and ignore app config.
 *              * ```js
 * app.listen(80);
 * ``
 * The function also installs a `listening` callback that calls
 * `app.set('port')` with the value returned by `server.address().port`.
 * This way the port param contains always the real port number, even when
 * listen was called with port number 0
 * @param {() => void} cb If specified, the callback is added as a listener
for the server's "listening" event.
 * @returns {any} http.Server A node `http.Server` with this application configured
as the request handle
listen(cb?: () => void):http.Serve
 * Attach a model to the app. The `Model` will be available on the
 * `app.models` object
 * Example - Attach an existing mode
 * ```js
 *              * var User = loopback.User;
 *              * app.model(User)
 *              * ```
 * Example - Attach an existing model, alter some aspects of the model:
 * ```js
 *              * var User = loopback.User;
 *              * app.model(User, { dataSource: 'db' })
 *              * ``
 *              * @param {any|string} Model The model to attach
 *              * @options {any} config The model's configuration
 *              * @property {string|any} dataSource The `DataSource` to which to attach the model
 *              * @property {boolean} [public] Whether the model should be exposed via REST API
 *              * @property {any} [relations] Relations to add/update
 *              * @en
 *              * @returns {any} the model clas
 *              *
 */
    model(
      l$Model: any | string,
      main$config: {
        dataSource: string | any,
        public?: boolean,
        relations?: any
      }
    ): any,

    /**
     * Get the models exported by the app. Returns only models defined using `app.model()
     *              * There are two ways to access models
     *              * 1.  Call `app.models()` to get a list of all models
     *              * ```js
     * var models = app.models()
     * models.forEach(function(Model) {
     *   console.log(Model.modelName); // color
     * });
     * ```
     *              * 2. Use `app.model` to access a model by name.
     *              * `app.models` has properties for all defined models
     *              * The following example illustrates accessing the `Product` and `CustomerReceipt` models
     *              * using the `models` object
     *              * ```js
     * var loopback = require('loopback');
     *   var app = loopback();
     *   app.boot({
     *    dataSources: {
     *      db: {connector: 'memory'}
     *    }
     * })
     * app.model('product', {dataSource: 'db'});
     * app.model('customer-receipt', {dataSource: 'db'})
     * // available based on the given name
     * var Product = app.models.Product
     * // also available as camelCase
     * var product = app.models.product
     * // multi-word models are avaiable as pascal cased
     * var CustomerReceipt = app.models.CustomerReceipt
     * // also available as camelCase
     * var customerReceipt = app.models.customerReceipt;
     * ``
     * @returns {core$Array} Array of model classes
     */
    models(): core$Array<typeof Model>,

    /**
     * Get all remote objects.
     * @returns {any} [Remote objects](apidocs.strongloop.com/strong-remoting/#remoteObjectsoptions).
     */
    remoteObjects(): any,

    /**
     * Lazily load a set of [remote objects](apidocs.strongloop.com/strong-remoting/#remoteObjectsoptions).
     *
     * *NOTE:** Calling `app.remotes()` more than once returns only a single set of remote objects.
     * @returns {any} remoteObjects
     */
    remotes(): any,

    /**
     * Register a middleware using a factory function and a JSON config
     * **Example*
     * ```js
     *              * app.middlewareFromConfig(compression, {
     *              *   enabled: true,
     *              *   phase: 'initial',
     *              *   params: {
     *              *     threshold: 128
     *              *   }
     *              * });
     *              * ``
     *              * @param {function} factory The factory function creating a middleware handler.
     *              *   Typically a result of `require()` call, e.g. `require('compression')`.
     *              * @options {any} config The configuration.
     *              * @property {string} phase The phase to register the middleware in.
     *              * @property {boolean} [enabled] Whether the middleware is enabled.
     *              *   Default: `true`.
     *              * @property {Array|*} [params] The arguments to pass to the factory
     *              *   function. Either an Array of arguments,
     *              *   or the value of the first argument when the factory expects
     *              *   a single argument only.
     *              * @property {Array|string|RegExp} [paths] Optional list of paths limiting
     *              *   the scope of the middleware
     *              * @returns {any} this (fluent API
     *              * @header app.middlewareFromConfig(factory, config
     *              *
     */
    middlewareFromConfig(
      factory: () => void,
      main$config: {
        phase: string,
        debug$enabled?: boolean,
        params?: any[] | any,
        paths?: any[] | string | core$RegExp
      }
    ): any,

    /**
     * Register (new) middleware phases.
     *
     * If all names are new, then the phases are added just before "routes" phase.
     * Otherwise the provided list of names is merged with the existing phases
     * in such way that the order of phases is preserved
     *
     * **Examples*
     * ```js
     *              * // built-in phases:
     *              * // initial, session, auth, parse, routes, files, fina
     *              *
     *              * app.defineMiddlewarePhases('custom');
     *              * // new list of phases
     *              * // initial, session, auth, parse, custom, routes, files, fina
     *              * app.defineMiddlewarePhases([
     *              * 'initial', 'postinit', 'preauth', 'routes', 'subapps'
     *              * ]);
     *              * // new list of phases
     *              * // initial, postinit, preauth, session, auth, parse, custom,
     *              * // routes, subapps, files, final
     *              * ``
     *              * @param {string|string[]} nameOrArray A phase name or a list of phase
     *              * names to add
     *              * @returns {any} this (fluent API
     *              * @header app.defineMiddlewarePhases(nameOrArray
     *              *
     */
    defineMiddlewarePhases(nameOrArray: string | string[]): any,

    /**
 * Register a middleware handler to be executed in a given phase.
 * @param {string} name The phase name, e.g. "init" or "routes".
 * @param {core$Array | string | core$RegExp} paths Optional list of paths limiting
the scope of the middleware.
string paths are interpreted as expressjs path patterns,
regular expressions are used as-is.
 * @param {function} handler The middleware handler, one of
`function(req, res, next)` or
`function(err, req, res, next)`
 * @returns {any} this (fluent API
 * @header app.middleware(name, handler
 */
    KoaBouncer$middleware(
      skin$name: string,
      paths?: any[] | string | core$RegExp,
      panel$handler?: core$createRouter$Handler
    ): any
  } & core$l$Application;

  /**
 * LoopBack core module. It provides static properties and
 * methods to create models and data sources. The module itself is a function
 * that creates loopback `app`. For example:
 * 
 * ```js
 *        * var loopback = require('loopback');
 *        * var app = loopback();
 *        * ```
 * @property {string} version Version of LoopBack framework.  Static read-only property.
 * @property {string} mime
 * @property {boolean} isBrowser True if running in a browser environment; false otherwise.  Static read-only property.
 * @property {boolean} isServer True if running in a server environment; false otherwise.  Static read-only property.
 * @property {Registry} registry The global `Registry` object.
 * @property {string} faviconFile Path to a default favicon shipped with LoopBack.
Use as follows: `app.use(require('serve-favicon')(loopback.faviconFile));`
 * @class loopback
 * @header loopback
 */
  declare class l$loopback {
    /**
     * Version of LoopBack framework.  Static read-only property.
     */
    Giraffe$version: string;

    /**
     * Mime
     */
    mime: string;

    /**
     * True if running in a browser environment; false otherwise.  Static read-only property.
     */
    isBrowser: boolean;

    /**
     * True if running in a server environment; false otherwise.  Static read-only property.
     */
    isServer: boolean;

    /**
     * The global `Registry` object.
     */
    request$registry: l$Registry;

    /**
     * Path to a default favicon shipped with LoopBack.
     * Use as follows: `app.use(require('serve-favicon')(loopback.faviconFile));`
     */
    faviconFile: string;

    /**
     * Alter an existing Model class.
     * @param {l$Model} ModelCtor The model constructor to alter.
     * @options {any} config Additional configuration to apply
     * @property {any} dataSource Attach the model to a dataSource.
     * @property {any} [relations] Model relations to add/update
     * @header loopback.configureModel(ModelCtor, config
     */
    static configureModel(
      ModelCtor: l$Model,
      main$config: {
        dataSource: any,
        relations?: any
      }
    ): void;

    /**
 * Create a data source with passing the provided options to the connector
 * @param {string} name Optional name.
 * @options {any} options Data Source options
 * @property {any} connector LoopBack connector.
 * @property {*} [*] Other&nbsp;connector properties.
See the relevant connector documentation
 */
    static createDataSource(
      skin$name: string,
      notification$options: {
        connector: any,
        properties?: any
      }
    ): void;

    /**
     * Create a named vanilla JavaScript class constructor with an attached
     * set of properties and options
     * This function comes with two variants:
     *   * `loopback.createModel(name, properties, options)`
     *   * `loopback.createModel(config)
     *              * In the second variant, the parameters `name`, `properties` and `options`
     *              * are provided in the config object. Any additional config entries are
     *              * interpreted as `options`, i.e. the following two configs are identical
     *              *
     *              * ```js
     * { name: 'Customer', base: 'User' }
     * { name: 'Customer', options: { base: 'User' } }
     * ``
     * **Example*
     * Create an `Author` model using the three-parameter variant
     * ```js
     *              * loopback.createModel(
     *              *   'Author',
     *              *   {
     *              *     firstName: 'string',
     *              *     lastName: 'string'
     *              *   },
     *              *   {
     *              *     relations: {
     *              *       books: {
     *              *         model: 'Book',
     *              *         type: 'hasAndBelongsToMany'
     *              *       }
     *              *     }
     *              *   }
     *              * );
     *              * ``
     *              * Create the same model using a config object
     *              * ```js
     * loopback.createModel({
     *    name: 'Author',
     *    properties: {
     *      firstName: 'string',
     *      lastName: 'string'
     *    },
     *    relations: {
     *      books: {
     *        model: 'Book',
     *        type: 'hasAndBelongsToMany'
     *      }
     *    }
     * });
     * ``
     * @param {string} name Unique name.
     * @param {any} properties
     * @param {any} options (optional
     * @header loopback.createMode
     */
    static createModel(
      skin$name: string,
      properties: any,
      notification$options: any
    ): void;

    /**
     * Look up a model class by name from all models created by
     * `loopback.createModel()`
     * @param {string} modelName The model name
     * @returns {l$Model} The model clas
     * @header loopback.findModel(modelName
     */
    static findModel(modelName: string): l$Model;

    /**
     * Look up a model class by name from all models created by
     * `loopback.createModel()`. Throw an error when no such model exists
     * @param {string} modelName The model name
     * @returns {l$Model} The model clas
     * @header loopback.getModel(modelName
     */
    static getModel(modelName: string): l$Model;

    /**
     * Look up a model class by the base model class.
     * The method can be used by LoopBack
     * to find configured models in models.json over the base model.
     * @param {l$Model} modelType The base model class
     * @returns {l$Model} The subclass if found or the base clas
     * @header loopback.getModelByType(modelType
     */
    static getModelByType(modelType: l$Model): l$Model;

    /**
 * Get an in-memory data source. Use one if it already exists
 * @param {string} name The name of the data source.
If not provided, the `'default'` is used
 */
    static memory(skin$name?: string): void;

    /**
     * Add a remote method to a model.
     * @param {() => void} fn
     * @param {any} options (optional
     */
    static remoteMethod(fn: () => void, notification$options: any): void;

    /**
     * Create a template helper
     *      var render = loopback.template('foo.ejs');
     *      var html = render({foo: 'bar'})
     * @param {string} path Path to the template file.
     * @returns {() => void}
     */
    static template(skin$path: string): void;
  }

  /**
   * Define and reference `Models` and `anys`
   * @clas
   */
  declare class l$Registry {
    static addACL(acls: any[], acl: any): void;

    /**
     * Alter an existing Model class.
     * @param {l$Model} ModelCtor The model constructor to alter.
     * @options {any} config Additional configuration to apply
     * @property {any} dataSource Attach the model to a dataSource.
     * @property {any} [relations] Model relations to add/update
     * @header loopback.configureModel(ModelCtor, config
     */
    configureModel(
      ModelCtor: l$Model,
      main$config: {
        dataSource: any,
        relations?: any
      }
    ): void;

    /**
 * Create a data source with passing the provided options to the connector
 * @param {string} name Optional name.
 * @options {any} options Data Source options
 * @property {any} connector LoopBack connector.
 * @property {*} [*] Other&nbsp;connector properties.
See the relevant connector documentation
 */
    createDataSource(
      skin$name: string,
      notification$options: {
        connector: any,
        properties?: any
      }
    ): void;

    /**
     * Create a named vanilla JavaScript class constructor with an attached
     * set of properties and options
     * This function comes with two variants:
     *   * `loopback.createModel(name, properties, options)`
     *   * `loopback.createModel(config)
     *              * In the second variant, the parameters `name`, `properties` and `options`
     *              * are provided in the config object. Any additional config entries are
     *              * interpreted as `options`, i.e. the following two configs are identical
     *              * ```js
     * { name: 'Customer', base: 'User' }
     * { name: 'Customer', options: { base: 'User' } }
     * ``
     * **Example*
     * Create an `Author` model using the three-parameter variant
     * ```js
     *              * loopback.createModel(
     *              *   'Author',
     *              *   {
     *              *     firstName: 'string',
     *              *     lastName: 'string'
     *              *   },
     *              *   {
     *              *     relations: {
     *              *       books: {
     *              *         model: 'Book',
     *              *         type: 'hasAndBelongsToMany'
     *              *       }
     *              *     }
     *              *   }
     *              * );
     *              * ``
     *              * Create the same model using a config object
     *              * ```js
     * loopback.createModel({
     *    name: 'Author',
     *    properties: {
     *      firstName: 'string',
     *      lastName: 'string'
     *    },
     *    relations: {
     *      books: {
     *        model: 'Book',
     *        type: 'hasAndBelongsToMany'
     *      }
     *    }
     * });
     * ``
     * @param {string} name Unique name.
     * @param {any} properties
     * @param {any} options (optional
     * @header loopback.createMode
     */
    createModel(
      skin$name: string,
      properties: any,
      notification$options: any
    ): void;

    /**
     * Look up a model class by name from all models created by
     * `loopback.createModel()`
     * @param {string | ()} => void} modelOrName The model name or a `Model` constructor.
     * @returns {l$Model} The model clas
     * @header loopback.findModel(modelName
     */
    findModel(modelOrName: string): l$Model;

    /**
     * Look up a model class by name from all models created by
     * `loopback.createModel()`. **Throw an error when no such model exists.*
     * @param {string} modelOrName The model name or a `Model` constructor.
     * @returns {l$Model} The model clas
     * @header loopback.getModel(modelName
     */
    getModel(modelOrName: string): l$Model;

    /**
     * Look up a model class by the base model class.
     * The method can be used by LoopBack
     * to find configured models in models.json over the base model.
     * @param {l$Model} modelType The base model class
     * @returns {l$Model} The subclass if found or the base clas
     * @header loopback.getModelByType(modelType
     */
    getModelByType(modelType: l$Model): l$Model;

    /**
 * Get an in-memory data source. Use one if it already exists
 * @param {string} name The name of the data source.
If not provided, the `'default'` is used
 */
    memory(skin$name?: string): void;
  }

  /**
   * Access context represents the context for a request to access protected
   * resource
   * @class
   * @options {Context} context The context object
   * @constructor
   */
  declare class l$AccessContext {
    /**
     * context The context object
     */
    constructor(balloontoolbar$context: l$Context): this;

    /**
     * Add a principal to the context
     * @param {string} principalType The principal type
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} principalId The principal id
     * @param {string} principalName The principal name
     * @returns {boolean}
     */
    addPrincipal(
      principalType: string,
      principalId: any,
      principalName?: string
    ): boolean;

    /**
     * Get the user id
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    getUserId(): any;

    /**
     * Get the application id
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"}
     */
    getAppId(): any;

    /**
     * Check if the access context has authenticated principals
     * @returns {boolean}
     */
    isAuthenticated(): boolean;
  }

  /**
   * Context
   * @interface
   * @property {Principal[]} principals An Array of principals
   * @property {() => void} model The model class
   * @property {string} modelName The model name
   * @property {string} modelId The model id
   * @property {string} property The model property/method/relation name
   * @property {string} method The model method to be invoked
   * @property {string} accessType The access type
   * @property {AccessToken} accessToken The access toke
   * @returns {l$AccessContext}
   */
  declare interface l$Context {
    /**
     * An Array of principals
     */
    principals: l$Principal[];

    /**
     * The model class
     */
    model(): void;

    /**
     * The model name
     */
    modelName: string;

    /**
     * The model id
     */
    modelId: string;

    /**
     * The model property/method/relation name
     */
    property: string;

    /**
     * The model method to be invoked
     */
    method: string;

    /**
     * The access type
     */
    accesType: string;

    /**
     * The access token
     */
    accessToken: l$AccessToken;
  }

  /**
   * A request to access protected resources.
   * @param {string} model The model name
   * @param {string} property
   * @param {string} accessType The access type
   * @param {string} permission The requested permission
   * @returns {l$AccessRequest}
   * @class
   * @constructor
   */
  declare class l$AccessRequest {
    constructor(
      model: string,
      property: string,
      accessType: string,
      permission: string
    ): this;

    /**
     * Does the given `ACL` apply to this `AccessRequest`
     * @param {l$ACL} acl
     */
    exactlyMatches(acl: l$ACL): void;

    /**
     * Is the request for access allowed
     * @returns {boolean}
     */
    isAllowed(): boolean;

    /**
     * Does the request contain any wildcards
     * @returns {boolean}
     */
    isWildcard(): boolean;
  }

  /**
   * This class represents the abstract notion of a principal, which can be used
   * to represent any entity, such as an individual, a corporation, and a login id
   * @param {string} type The principal type
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The princiapl id
   * @param {string} name The principal name
   * @returns {l$Principal}
   * @class
   */
  declare class l$Principal {
    constructor(notification$type: string, id: any, skin$name: string): this;

    /**
     * Compare if two principals are equal
     * Returns true if argument principal is equal to this principal.
     * @param {any} p The other principa
     */
    equals(p: any): void;
  }

  /**
   * @interface
   * @property {string} path HTTP path (relative to the model) at which the method is exposed.
   * @property {'get' | 'post' | 'patch' | 'put' | 'del' | 'all'} verb HTTP method (verb) at which the method is available.
   * @property {number} status	Default HTTP status set when the callback is called without an error.
   * @property {number} errorStatus	Default HTTP status set when the callback is called with an error.
   */
  declare interface l$RemoteHttpOptions {
    /**
     * HTTP path (relative to the model) at which the method is exposed.
     * ```
     *              * http: {path: '/sayhi'}
     *              * ```
     */
    skin$path: string;

    /**
     * HTTP method (verb) at which the method is available.
     * ```
     *              * http: {path: '/sayhi', verb: 'get'}
     *              * ```
     * default = post
     */
    verb: "get" | "post" | "patch" | "put" | "del" | "all";

    /**
     * status	Default HTTP status set when the callback is called without an error.
     * ```
     *              * {status: 201}
     *              * ```
     */
    l$status?: number;

    /**
     * errorStatus	Default HTTP status set when the callback is called with an error.
     * ```
     *              * {errorStatus: 400}
     *              * ```
     */
    errorStatus?: number;
  }

  /**
   * @interface
   * @property {RemoteMethodArgument[]} accepts Defines arguments that the remote method accepts
   * @property {string|string[]} description Text description of the method
   * @property {RemoteHttpOptions} http The HTTP options for the remote method
   * @property {boolean} isStatic Whether the method is static (eg. `MyModel.myMethod`)
   * @property {string | string[]} notes Additional notes, used by API documentation generators like Swagger.
   * @property {RemoteMethodArgument} returns Describes the remote method's callback arguments
   */
  declare interface l$RemoteMethodOptions {
    /**
     * Defines arguments that the remote method accepts. These arguments map to the static method you define. For the example above, you can see the function signature:
     * Person.greet(name, age, callback)...
     * `name` is the first argument, `age` is the second argument and callback is automatically provided by LoopBack (do not specify it in your `accepts` array).
     * For more info, see Argument descriptions.
     * Default if not provided is the empty array, [].
     * {  ...
     * accepts: [
     *     {arg: 'name', type: 'string'},
     *     {arg: 'age', type: 'number'},...],
     * ... }
     */
    accepts?: l$RemoteMethodArgument[];

    /**
     * Text description of the method, used by API documentation generators such as Swagger.
     * You can put long strings in an array if needed (see note below).
     */
    description?: string | string[];

    /**
     */
    http?: l$RemoteHttpOptions;

    /**
     * boolean. Whether the method is static (eg. `MyModel.myMethod`). Use `false` to define the method on the prototype (for example, `MyModel.prototype.myMethod`). Default is true.
     * default: true
     */
    isStatic?: boolean;

    /**
     * Additional notes, used by API documentation generators like Swagger.
     * You can put long strings in an array if needed (see note below).
     */
    notes?: string | string[];

    /**
     * Describes the remote method's callback arguments; See Argument descriptions. The err argument is assumed; do not specify.
     * Default if not provided is the empty array,  [].
     * ```
     *              * returns: {arg: 'greeting', type: 'string'}`
     * ```
     *              *
     */
    returns?: l$RemoteMethodArgument;
  }

  /**
   * @interface
   * @property {string} arg	Argument name
   * @property {string | string[]} description A text description of the argument.
   * @property {any} http http	Object or Function	For input arguments: a function or an object describing mapping from HTTP request to the argument value.
   * @property {boolean} required	True if argument is required; false otherwise.
   * @property {boolean} root For callback arguments: set this property to true if your function has a single callback argument. Otherwise the root object returned is an object
   * @property {"any" | "Array" | "Boolean" | "Buffer" | "Date" | "GeoPoint" | "null" | "Number" | "Object" | "String"} type
   * @property {string} default Default value that will be used to populate loopback-explorer input fields and swagger documentation
   */
  declare interface l$RemoteMethodArgument {
    /**
     * Argument name
     */
    arg: string;

    /**
     * A text description of the argument. This is used by API documentation generators like Swagger.
     * You can split long descriptions into arrays of strings (lines) to keep line lengths manageable.
     * ```
     *              [
     *              "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
     *              "sed do eiusmod tempor incididunt ut labore et dolore",
     *              "magna aliqua."
     *              ]
     *              ```
     */
    description?: string | string[];

    /**
     * http	Object or Function	For input arguments: a function or an object describing mapping from HTTP request to the argument value. See HTTP mapping of input arguments below.
     * http.target
     * Map the callback argument value to the HTTP response object. The following values are supported.
     *
     * * status sets the res.statusCode to the provided value
     * * header sets the http.header or arg named header to the value
     */
    http?: l$RemoteHttpOptions;

    /**
     * True if argument is required; false otherwise.
     */
    required?: boolean;

    /**
     * For callback arguments: set this property to true if your function has a single callback argument to use as the root object returned to remote caller.
     *    Otherwise the root object returned is a map (argument-name to argument-value).
     */
    root?: boolean;

    /**
     * Argument datatype; must be a Loopback type. Additionally, callback arguments allow a special type "file"; see below.
     */
    notification$type:
      | "any"
      | "Array"
      | "Boolean"
      | "Buffer"
      | "Date"
      | "GeoPoint"
      | "null"
      | "Number"
      | "Object"
      | "String";

    /**
     * Default value that will be used to populate loopback-explorer input fields and swagger documentation.
     *     Note: This value will not be passed into remote methods function if argument is not present.
     */
    default?: string;
  }

  /**
   * The base class for **all models**
   * **Inheriting from `Model`*
   * ```js
   *        * var properties = {...};
   *        * var options = {...};
   *        * var MyModel = loopback.Model.extend('MyModel', properties, options);
   *        * ``
   *        * **Options*
   *        *  - `trackChanges` - If true, changes to the model will be tracked. **Required
   *        * for replication.*
   *        * **Events*
   *        * #### Event: `changed
   * Emitted after a model has been successfully created, saved, or updated.
   * Argument: `inst`, model instance, objec
   * ```js
   *        * MyModel.on('changed', function(inst) {
   *        *   console.log('model with id %s has been changed', inst.id);
   *        *   // => model with id 1 has been changed
   *        * });
   *        * ``
   *        *
   *        * #### Event: `deleted
   * Emitted after an individual model has been deleted.
   * Argument: `id`, model ID (number)
   * ```js
   *        * MyModel.on('deleted', function(id) {
   *        *   console.log('model with id %s has been deleted', id);
   *        *   // => model with id 1 has been deleted
   *        * });
   *        * ``
   *        * #### Event: `deletedAll
   *
   * Emitted after an individual model has been deleted.
   * Argument: `where` (optional), where filter, JSON object
   * ```js
   *        * MyModel.on('deletedAll', function(where) {
   *        *   if (where) {
   *        *     console.log('all models where ', where, ' have been deleted');
   *        *     // => all models where
   *        *     // => {price: {gt: 100}}
   *        *     // => have been deleted
   *        *   }
   *        * });
   *        * ``
   *        *
   *        * #### Event: `attached
   * Emitted after a `Model` has been attached to an `app`
   * #### Event: `dataSourceAttached
   *        * Emitted after a `Model` has been attached to a `DataSource`
   *        * #### Event: se
   *        * Emitted when model property is set.
   *        * Argument: `inst`, model instance, objec
   *        * ```js
   * MyModel.on('set', function(inst) {
   *    console.log('model with id %s has been changed', inst.id);
   *    // => model with id 1 has been changed
   * });
   * ``
   * @param {any} data
   * @property {string} Model.modelName The name of the model. Static property.
   * @property {DataSource} Model.dataSource Data source to which the model is connected, if any. Static property.
   * @property {any} Model.sharedMethod The `strong-remoting` [SharedClass](apidocs.strongloop.com/strong-remoting/#sharedclass) that contains remoting (and http) metadata. Static property.
   * @property {any} settings Contains additional model settings.
   * @property {string} settings.http.path Base URL of the model HTTP route.
   * @property [{string}] settings.acls Array of ACLs for the model.
   * @class
   * @constructor
   */
  declare class l$Model {
    /**
     * The name of the model.
     */
    static modelName: string;

    /**
     * Data source to which the model is connected, if any.
     */
    static dataSource: any;

    /**
     * The `strong-remoting`
     */
    static sharedMethod: any;

    /**
     * Contains additional model settings.
     */
    settings: l$Settings;
    constructor(main$data: any): this;

    /**
     * Check if the given access token can invoke the specified method
     * @param {l$AccessToken} token The access token.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} modelId The model ID.
     * @param {any} sharedMethod The method in question.
     * @param {any} ctx The remote invocation context.
     * @callback {() => void} callback The callback function.
     */
    static checkAccess(
      l$token: l$AccessToken,
      modelId: any,
      sharedMethod: any,
      ctx: any,
      braintree$callback: (
        err: string | EventType$Error,
        allowed: boolean
      ) => void
    ): void;

    /**
 * Disable remote invocation for the method with the given name
 * @param {string} name The name of the method.
 * @param {boolean} isStatic Is the method static (eg. `MyModel.myMethod`)? Pass
`false` if the method defined on the prototype (eg.
`MyModel.prototype.myMethod`)
 */
    static disableRemoteMethod(skin$name: string, isStatic: boolean): void;

    /**
 * Disable remote invocation for the method with the given name.
 * @param {string} name The name of the method.
The name of the method (include "prototype." if the method is defined on the prototype).
 */
    static disableRemoteMethodByName(skin$name: string): void;

    /**
     * Get the `Application` object to which the Model is attached
     * @callback {() => void} callback Callback function called with `(err, app)` arguments.
     * @end
     */
    static getApp(
      braintree$callback: (
        err: EventType$Error,
        Giraffe$app: l$Application
      ) => void
    ): void;

    /**
     * Enabled deeply-nested queries of related models via REST API
     * @param {string} relationName Name of the nested relation.
     * @options {any} [options] It is optional. See below.
     * @param {string} pathName The HTTP path (relative to the model) at which your remote method is exposed.
     * @param {string} filterMethod The filter name.
     * @param {string} paramName The argument name that the remote method accepts.
     * @param {string} getterName The getter name.
     * @param {boolean} hooks Whether to inherit before/after hooks.
     * @callback {() => void} filterCallback The Optional filter function.
     */
    static nestRemoting(
      relationName: string,
      pathName: string,
      filterMethod: string,
      paramName: string,
      getterName: string,
      hooks: boolean,
      notification$options?: {},
      filterCallback?: (SharedMethod: any, RelationDefinition: any) => void
    ): void;

    /**
     * Enable remote invocation for the specified method.
     * See [Remote methods](docs.strongloop.com/display/LB/Remote+methods) for more information
     * Static method example:
     * ```js
     *              * Model.myMethod();
     *              * Model.remoteMethod('myMethod');
     *              * ``
     *              * @param {string} name The name of the method.
     *              * @param {RemoteMethodOptions} options The remoting options.
     *              * See [Remote methods - Options](docs.strongloop.com/display/LB/Remote+methods#Remotemethods-Options)
     *              *
     */
    static remoteMethod(
      skin$name: string,
      notification$options: l$RemoteMethodOptions
    ): void;

    /**
     * The `loopback.Model.extend()` method calls this when you create a model that extends another model.
     * Add any setup or configuration code you want executed when the model is created.
     * See  [Setting up a custom model](docs.strongloop.com/display/LB/Extending+built-in+models#Extendingbuilt-inmodels-Settingupacustommodel)
     */
    static setup(): void;

    /**
     * loopback 3.x Remote hooks
     * http://loopback.io/doc/en/lb3/Remote-hooks.html
     * @param method
     * @param backback
     */
    beforeRemote(
      method: string,
      braintree$callback: (
        ctx: l$Context,
        modelInstanceOrNext: l$Model | Foxx$NextFunction,
        next?: Foxx$NextFunction
      ) => void
    ): void;
    afterRemote(
      method: string,
      braintree$callback: (
        ctx: l$Context,
        modelInstanceOrNext: l$Model | Foxx$NextFunction,
        next?: Foxx$NextFunction
      ) => void
    ): void;
    afterRemoteError(
      method: string,
      braintree$callback: Foxx$NextFunction
    ): void;
  }

  /**
   * SharedClass
   * Create a new SharedClass with the given options.
   * **NOTE** TODO : exported from another module type definition called strong-remoting
   * @param {string} name The SharedClass name
   * @param {() => void} constructor The constructor the SharedClass represents
   * @param {any} options Additional options.
   * @property {() => void } ctor The constructor
   * @property {any} http The HTTP settings
   */
  declare class l$SharedClass {
    /**
     * The SharedClass name
     */
    ctor: () => void;
    http: any;
    constructor(skin$name: string, constructor: () => void): this;

    /**
     * Normalize HTTP path.
     */
    static normalizeHttpPath(): void;

    /**
     * Define a shared method with the given name.
     * @param {string} name The method name
     * @param {any} options Set of options used to create a SharedMethod. See the full set of options https://apidocs.strongloop.com/strong-remoting/#sharedmethod
     */
    defineMethod(skin$name: string, notification$options: any): void;

    /**
     * Disable a sharedMethod with the given name or function object.
     * @param {string} fn The function or method name
     * @param {boolean} isStatic Disable a static or prototype method
     */
    disableMethod(fn: string, isStatic: boolean): void;

    /**
     * Disable a sharedMethod with the given static or prototype method name.
     * @param {string} methodName The method name
     */
    disableMethodByName(methodName: string): void;

    /**
     * Find a sharedMethod with the given name or function object.
     * @param {string | ()} => void} fn The function or method name
     * @param {boolean} isStatic Required if fn is a String. Only find a static method with the given name.
     * @return {any} SharedMethod https://apidocs.strongloop.com/strong-remoting/#sharedmethod
     */
    find(fn: () => void | string, isStatic: boolean): any;

    /**
     * Find a sharedMethod with the given static or prototype method name.
     * @param {string} methodName the method name Find a static or prototype method with the given name.
     * @return {any} SharedMethod
     */
    findMethodByName(methodName: string): any;

    /**
     * Get a key for the given method.
     * @param {string} fn The function or method name
     * @param {boolean} isStatic Disable a static or prototype method
     */
    getKeyFromMethodNameAndTarget(fn: string, isStatic: boolean): void;

    /**
     * Get all shared methods belonging to this shared class.
     * @param {any} options
     * @return {any[]} An array of shared methods SharedMethod[]
     */
    methods(notification$options: {
      includeDisabled: boolean
    }): any[];

    /**
     * Define a shared method resolver for dynamically defining methods.
     * ```
     *              * // below is a simple example
     *              * sharedClass.resolve(function(define) {
     *              *    define('myMethod', {
     *              *          accepts: {arg: 'str', type: 'string'},
     *              *          returns: {arg: 'str', type: 'string'}
     *              *          errors: [ { code: 404, message: 'Not Found', responseModel: 'Error' } ]
     *              *    }, myMethod);
     *              * });
     *              * function myMethod(str, cb) {
     *              * cb(null, str);
     *              * }
     *              * ```
     * @param {() => void} resolver The resolver function.
     */
    resolve(resolver: () => void): void;
  }

  declare interface l$Settings {
    http: {
      skin$path: string
    };
    acls: l$ACL[];
  }

  /**
   * Extends Model with basic query and CRUD support
   * **Change Event*
   * Listen for model changes using the `change` event
   * ```js
   *        * MyPersistedModel.on('changed', function(obj)
   *        *    console.log(obj) // => the changed model
   *        * });
   *        * ```
   * @class PersistedModel
   */
  declare class l$PersistedModel mixins l$Model {
    /**
     * Apply an update list
     * **Note: this is not atomic*
     * @param {core$Array} updates An updates list, usually from [createUpdates()](#persistedmodel-createupdates).
     * @param {any} options An optional options object to pass to underlying data-access calls.
     * @param {() => void} callback Callback function
     */
    static bulkUpdate(
      updates: any[],
      notification$options: any,
      braintree$callback: l$CallbackWithoutResult
    ): void;

    /**
     * Apply an update list
     * **Note: this is not atomic*
     * @param {core$Array} updates An updates list, usually from [createUpdates()](#persistedmodel-createupdates).
     * @param {any} options An optional options object to pass to underlying data-access calls.
     * @param {() => void} callback Callback function
     */
    static bulkUpdate(
      updates: any[],
      notification$options: any
    ): promise$Promise<void>;

    /**
     * Get the changes to a model since the specified checkpoint. Provide a filter object
     * to reduce the number of results returned.
     * @param {number} since Return only changes since this checkpoint.
     * @param {any} filter Include only changes that match this filter, the same as for [#persistedmodel-find](find()).
     * @callback {() => void} callback Callback function called with `(err, changes)` arguments.
     */
    static changes(
      since: number,
      util$filter: any,
      braintree$callback: l$CallbackWithResult<any>
    ): void;

    /**
     * Get the changes to a model since the specified checkpoint. Provide a filter object
     * to reduce the number of results returned.
     * @param {number} since Return only changes since this checkpoint.
     * @param {any} filter Include only changes that match this filter, the same as for [#persistedmodel-find](find()).
     * @callback {() => void} callback Callback function called with `(err, changes)` arguments.
     */
    static changes(since: number, util$filter: any): promise$Promise<any[]>;

    /**
     * Create a checkpoint
     * @param {() => void} callback
     */
    static checkpoint(braintree$callback?: () => void): void;

    /**
     * Create a checkpoint
     */
    static checkpoint(): promise$Promise<void>;

    /**
 * Return the number of records that match the optional "where" filter.
 * @param {any} where Optional where filter, like
```
             * { key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
 * @callback {() => void} callback Callback function called with `(err, count)` arguments.  Required.
 */
    static count(
      where: any,
      braintree$callback: l$CallbackWithResult<number>
    ): void;

    /**
 * Return the number of records that match the optional "where" filter.
 * @param {any} where Optional where filter, like
```
             * { key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
 * @callback {() => void} callback Callback function called with `(err, count)` arguments.  Required.
 */
    static count(where?: any): promise$Promise<number>;

    /**
     * Create new instance of Model, and save to database
     * @param {any} |[{any}] data Optional data argument.  Can be either a single model instance or an Array of instances
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static create<T>(
      main$data: any | any[],
      braintree$callback: l$CallbackWithResult<T | T[] | null>
    ): void;

    /**
     * Create new instance of Model, and save to database
     * @param {any} |[{any}] data Optional data argument.  Can be either a single model instance or an Array of instances
     * @returns {T | T[]} Model instances or null
     */
    static create<T>(main$data?: any | any[]): promise$Promise<T | T[] | null>;

    /**
     * Create a change stream. See here for more info http://loopback.io/doc/en/lb2/Realtime-server-sent-events.html
     * @param {any} options Only changes to models matching this where filter will be included in the ChangeStream.
     * @param {() => void} callback
     */
    static createChangeStream(
      notification$options: {
        where: any
      },
      braintree$callback: l$CallbackWithResult<any>
    ): void;

    /**
     * Create a change stream. See here for more info http://loopback.io/doc/en/lb2/Realtime-server-sent-events.html
     * @param {any} options Only changes to models matching this where filter will be included in the ChangeStream.
     * @returns {any} changes
     */
    static createChangeStream(notification$options: {
      where: any
    }): promise$Promise<any>;

    /**
     * Create an update list (for `Model.bulkUpdate()`) from a delta list
     * (result of `Change.diff()`)
     * @param {core$Array} deltas
     * @param {() => void} callback
     */
    static createUpdates(
      deltas: any[],
      braintree$callback: l$CallbackWithoutResult
    ): void;

    /**
     * Create an update list (for `Model.bulkUpdate()`) from a delta list
     * (result of `Change.diff()`)
     * @param {core$Array} deltas
     */
    static createUpdates(deltas: any[]): promise$Promise<void>;

    /**
     * Get the current checkpoint ID
     * @callback {() => void} callback Callback function called with `(err, currentCheckpointId)` arguments.  Required.
     */
    static currentCheckpoint(
      braintree$callback: l$CallbackWithResult<number>
    ): void;

    /**
     * Get the current checkpoint ID
     * @returns {promise$Promise<number>} resolves to currentCheckpointId
     */
    static currentCheckpoint(): promise$Promise<number>;

    /**
 * Destroy all model instances that match the optional `where` specification
 * @param {any} where Optional where filter, like:
```
             * {key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods)
 * @callback {() => void} callback Optional callback function called with `(err, info)` arguments.
 */
    static destroyAll(
      where: any,
      braintree$callback: l$CallbackWithMultipleResults<any, number>
    ): void;

    /**
 * Destroy all model instances that match the optional `where` specification
 * @param {any} where Optional where filter, like:
```
             * {key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods)
 * @returns {promise$Promise<{
count: number
}>} number of instances (rows, documents) destroyed
 */
    static destroyAll(
      where?: any
    ): promise$Promise<{
      info: any,
      infoCount: number
    }>;

    /**
     * Destroy model instance with the specified ID.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID value of model instance to delete.
     * @callback {() => void} callback Callback function called with `(err)` arguments.  Required.
     */
    static destroyById(
      id: any,
      braintree$callback: l$CallbackWithoutResult
    ): void;

    /**
     * Destroy model instance with the specified ID.
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID value of model instance to delete.
     */
    static destroyById(id: any): promise$Promise<void>;

    /**
     * Get a set of deltas and conflicts since the given checkpoint
     * See [Change.diff()](#change-diff) for details
     * @param {number} since Find deltas since this checkpoint.
     * @param {core$Array} remoteChanges An Array of change objects.
     * @callback {() => void} callback Callback function called with `(err, result)` arguments.  Required.
     */
    static diff(
      since: number,
      remoteChanges: any[],
      braintree$callback: l$CallbackWithResult<any>
    ): void;

    /**
     * Get a set of deltas and conflicts since the given checkpoint
     * See [Change.diff()](#change-diff) for details
     * @param {number} since Find deltas since this checkpoint.
     * @param {core$Array} remoteChanges An Array of change objects.
     */
    static diff(since: number, remoteChanges: any[]): promise$Promise<any>;

    /**
     * Enable the tracking of changes made to the model. Usually for replication.
     */
    static enableChangeTracking(): void;

    /**
     * Check whether a model instance exists in database
     * @param {id} id Identifier of object (primary key value)
     * @callback {() => void} callback Callback function called with `(err, exists)` arguments.  Required.
     */
    static exists(
      id: any,
      braintree$callback: l$CallbackWithResult<boolean>
    ): void;

    /**
     * Check whether a model instance exists in database
     * @param {id} id Identifier of object (primary key value)
     */
    static exists(id: any): promise$Promise<boolean>;

    /**
 * Find all model instances that match `filter` specification.
 * See [Querying models](docs.strongloop.com/display/LB/Querying+models)
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {number} limit Maximum number of instances to return.
<br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * { where: { key: val, key2: {gt: 'val2'}, ...} }
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries)
 * @callback {() => void} callback Callback function called with `(err, returned-instances)` arguments.    Required.
 */
    static find<T>(
      util$filter: {
        fields?: string | any | any[],
        include?: string | any | any[],
        limit?: number,
        order?: string,
        skip?: number,
        where?: any
      },
      braintree$callback: l$CallbackWithResult<T[]>
    ): void;

    /**
 * Find all model instances that match `filter` specification.
 * See [Querying models](docs.strongloop.com/display/LB/Querying+models)
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {number} limit Maximum number of instances to return.
<br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * { where: { key: val, key2: {gt: 'val2'}, ...} }
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries)
 */
    static find<T>(util$filter?: {
      fields?: string | any | any[],
      include?: string | any | any[],
      limit?: number,
      order?: string,
      skip?: number,
      where?: any
    }): promise$Promise<T[] | null>;

    /**
     * Find object by ID with an optional filter for include/fields
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id Primary key value
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
     */
    static findById<T>(
      id: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
 * Find object by ID with an optional filter for include/fields
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id Primary key value
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
 */
    static findById<T>(
      id: any,
      util$filter: {
        fields?: string | any | any[],
        include?: string | any | any[]
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
 * Find object by ID with an optional filter for include/fields
 * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id Primary key value
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 */
    static findById<T>(
      id: any,
      util$filter?: {
        fields?: string | any | any[],
        include?: string | any | any[]
      }
    ): promise$Promise<T | null>;

    /**
     * Find one model instance that matches `filter` specification.
     * Same as `find`, but limited to one result;
     * Returns object, not collection
     * @callback {() => void} callback Callback function called with `(err, returned-instance)` arguments.  Required.
     */
    static findOne<T>(braintree$callback: l$CallbackWithResult<T>): void;

    /**
 * Find one model instance that matches `filter` specification.
 * Same as `find`, but limited to one result;
 * Returns object, not collection
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * {where: { key: val, key2: {gt: 'val2'}, ...} }
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries)
 * @callback {() => void} callback Callback function called with `(err, returned-instance)` arguments.  Required.
 */
    static findOne<T>(
      util$filter: {
        fields?: string | any | any[],
        include?: string | any | any[],
        order?: string,
        skip?: number,
        where?: any
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
 * Find one model instance that matches `filter` specification.
 * Same as `find`, but limited to one result;
 * Returns object, not collection
 * @options {any} [filter] Optional Filter JSON object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * {where: { key: val, key2: {gt: 'val2'}, ...} }
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries)
 */
    static findOne<T>(util$filter?: {
      fields?: string | any | any[],
      include?: string | any | any[],
      order?: string,
      skip?: number,
      where?: any
    }): promise$Promise<T | null>;

    /**
     * Finds one record matching the optional filter object. If not found, creates
     * the object using the data provided as second argument. In this sense it is
     * the same as `find`, but limited to one object. Returns an object, not
     * collection. If you don't provide the filter object argument, it tries to
     * locate an existing object that matches the `data` argument
     * @param {any} data Data to insert if object matching the `where` filter is not found.
     * @callback {() => void} callback Callback function called with `cb(err, instance, created)` arguments.  Required.
     */
    static findOrCreate<T>(
      main$data: any,
      braintree$callback: l$CallbackWithMultipleResults<T, boolean>
    ): void;

    /**
 * Finds one record matching the optional filter object. If not found, creates
 * the object using the data provided as second argument. In this sense it is
 * the same as `find`, but limited to one object. Returns an object, not
 * collection. If you don't provide the filter object argument, it tries to
 * locate an existing object that matches the `data` argument
 * @options {any} [filter] Optional Filter object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {number} limit Maximum number of instances to return.
<br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * {where: {key: val, key2: {gt: val2}, ...}}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries).
 * @param {any} data Data to insert if object matching the `where` filter is not found.
 * @callback {() => void} callback Callback function called with `cb(err, instance, created)` arguments.  Required.
 */
    static findOrCreate<T>(
      main$data: any,
      util$filter: {
        fields?: string | any | any[],
        include?: string | any | any[],
        limit?: number,
        order?: string,
        skip?: number,
        where?: any
      },
      braintree$callback: l$CallbackWithMultipleResults<T, boolean>
    ): void;

    /**
 * Finds one record matching the optional filter object. If not found, creates
 * the object using the data provided as second argument. In this sense it is
 * the same as `find`, but limited to one object. Returns an object, not
 * collection. If you don't provide the filter object argument, it tries to
 * locate an existing object that matches the `data` argument
 * @options {any} [filter] Optional Filter object; see below.
 * @property {string|any|Array} fields Identify fields to include in return result.
<br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
 * @property {string|any|Array} include  See PersistedModel.include documentation.
<br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
 * @property {number} limit Maximum number of instances to return.
<br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
 * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
<br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
 * @property {number} skip number of results to skip.
<br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
 * @property {any} where Where clause, like
```
             * {where: {key: val, key2: {gt: val2}, ...}}
             * ```
<br/>See
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries).
 * @param {any} data Data to insert if object matching the `where` filter is not found.
 */
    static findOrCreate<T>(
      main$data: any,
      util$filter?: {
        fields?: string | any | any[],
        include?: string | any | any[],
        limit?: number,
        order?: string,
        skip?: number,
        where?: any
      }
    ): promise$Promise<{
      instance: T,
      created: boolean
    } | null>;

    /**
     * Get the `Change` model.
     * Throws an error if the change model is not correctly setup.
     */
    static getChangeModel(): void;

    /**
     * Get the `id` property name of the constructor
     * @returns {string} The `id` property nam
     */
    static getIdName(): string;

    /**
     * Get the source identifier for this model or dataSource
     * @callback {() => void} callback Callback function called with `(err, id)` arguments.
     */
    static getSourceId(braintree$callback: l$CallbackWithResult<string>): void;

    /**
     * Get the source identifier for this model or dataSource
     */
    static getSourceId(): promise$Promise<string>;

    /**
     * Handle a change error. Override this method in a subclassing model to customize
     * change error handling
     * @param {EventType$Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object)
     */
    static handleChangeError(err: EventType$Error): void;

    /**
     * Specify that a change to the model with the given ID has occurred
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID of the model that has changed.
     * @callback {() => void} callback
     */
    static rectifyChange(
      id: any,
      braintree$callback: l$CallbackWithoutResult
    ): void;

    /**
     * Specify that a change to the model with the given ID has occurred
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID of the model that has changed.
     */
    static rectifyChange(id: any): promise$Promise<void>;

    /**
     * Replace attributes for a model instance whose id is the first input
     * argument and persist it into the datasource.
     * Performs validation before replacing
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID value of model instance to replace.
     * @param {any} data Data to replace.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
     */
    static replaceById<T>(
      id: any,
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace attributes for a model instance whose id is the first input
     * argument and persist it into the datasource.
     * Performs validation before replacing
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID value of model instance to replace.
     * @param {any} data Data to replace.
     * @options {any} [options] Options for replace
     * @property {boolean} validate Perform validation before saving.  Default is true.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
     */
    static replaceById<T>(
      id: any,
      main$data: any,
      notification$options: {
        validate: boolean
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace attributes for a model instance whose id is the first input
     * argument and persist it into the datasource.
     * Performs validation before replacing
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} id The ID value of model instance to replace.
     * @param {any} data Data to replace.
     * @options {any} [options] Options for replace
     * @property {boolean} validate Perform validation before saving.  Default is true.
     */
    static replaceById<T>(
      id: any,
      main$data: any,
      notification$options?: {
        validate: boolean
      }
    ): promise$Promise<T>;

    /**
     * Replace or insert a model instance; replace existing record if one is found,
     * such that parameter `data.id` matches `id` of model instance; otherwise,
     * insert a new record.
     * @param {any} data The model instance data.
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static replaceOrCreate<T>(
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace or insert a model instance; replace existing record if one is found,
     * such that parameter `data.id` matches `id` of model instance; otherwise,
     * insert a new record.
     * @param {any} data The model instance data.
     * @options {any} [options] Options for replaceOrCreate
     * @property {boolean} validate Perform validation before saving.  Default is true.
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static replaceOrCreate<T>(
      main$data: any,
      notification$options: {
        validate: boolean
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace or insert a model instance; replace existing record if one is found,
     * such that parameter `data.id` matches `id` of model instance; otherwise,
     * insert a new record.
     * @param {any} data The model instance data.
     * @options {any} [options] Options for replaceOrCreate
     * @property {boolean} validate Perform validation before saving.  Default is true.
     */
    static replaceOrCreate<T>(
      main$data: any,
      notification$options?: {
        validate: boolean
      }
    ): promise$Promise<T>;

    /**
     * Replicate changes since the given checkpoint to the given target model
     * @param {number} since Since this checkpoint
     * @param {l$Model} targetModel Target this model class
     * @param {any} options
     * @param {any} Replicate models that match this filter
     * @callback {() => void} [callback] Callback function called with `(err, conflicts)` arguments.
     */
    static replicate(
      since?: number,
      targetModel?: l$Model,
      notification$options?: any,
      optionsFilter?: any,
      braintree$callback?: (
        err: EventType$Error,
        conflicts: l$Conflict[],
        param: any
      ) => void
    ): promise$Promise<{
      conflicts: l$Conflict[],
      params: any
    }> | void;

    /**
     * Update multiple instances that match the where clause.
     * @callback {() => void} callback Callback function called with `(err, info)` arguments.  Required.
     */
    static updateAll(
      braintree$callback: l$CallbackWithMultipleResults<any, number>
    ): void;

    /**
 * Update multiple instances that match the where clause.
 * 
 * Example:
 * 
 * ```js
 *              * Employee.updateAll({managerId: 'x001'}, {managerId: 'x002'}, function(err, info) {
 *              *     ...
 *              * });
 *              * ```
 * @param {any} where Optional `where` filter, like
```
             * { key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>see
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
 * @param {any} data any containing data to replace matching instances, if any.
 * @callback {() => void} callback Callback function called with `(err, info)` arguments.  Required.
 */
    static updateAll(
      whereOrData: any,
      braintree$callback: l$CallbackWithMultipleResults<any, number>
    ): void;

    /**
 * Update multiple instances that match the where clause.
 * 
 * Example:
 * 
 * ```js
 *              * Employee.updateAll({managerId: 'x001'}, {managerId: 'x002'}, function(err, info) {
 *              *     ...
 *              * });
 *              * ```
 * @param {any} where Optional `where` filter, like
```
             * { key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>see
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
 * @param {any} data any containing data to replace matching instances, if any.
 * @callback {() => void} callback Callback function called with `(err, info)` arguments.  Required.
 */
    static updateAll(
      where: any,
      main$data: any,
      braintree$callback: l$CallbackWithMultipleResults<any, number>
    ): void;

    /**
 * Update multiple instances that match the where clause.
 * 
 * Example:
 * 
 * ```js
 *              * Employee.updateAll({managerId: 'x001'}, {managerId: 'x002'}, function(err, info) {
 *              *     ...
 *              * });
 *              * ```
 * @param {any} where Optional `where` filter, like
```
             * { key: val, key2: {gt: 'val2'}, ...}
             * ```
<br/>see
[Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
 * @param {any} data any containing data to replace matching instances, if any.
 */
    static updateAll(where?: any, main$data?: any): promise$Promise<number>;

    /**
     * Update or insert a model instance
     * @param {any} data The model instance data to insert.
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static upsert<T>(
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Update or insert a model instance
     * @param {any} data The model instance data to insert.
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static upsert<T>(main$data: any): promise$Promise<T>;

    /**
     * Update or insert a model instance based on the search criteria.
     * If there is a single instance retrieved, update the retrieved model.
     * Creates a new model if no model instances were found.
     * Returns an error if multiple instances are found.
     * * @param {any} [where]  `where` filter, like
     * ```
     *              * { key: val, key2: {gt: 'val2'}, ...}
     *              * ```
     * <br/>see
     * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
     * @param {any} data The model instance data to insert.
     * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
     */
    static upsertWithWhere<T>(
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Update or insert a model instance based on the search criteria.
     * If there is a single instance retrieved, update the retrieved model.
     * Creates a new model if no model instances were found.
     * Returns an error if multiple instances are found.
     * * @param {any} [where]  `where` filter, like
     * ```
     *              * { key: val, key2: {gt: 'val2'}, ...}
     *              * ```
     * <br/>see
     * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
     * @param {any} data The model instance data to insert.
     */
    static upsertWithWhere<T>(main$data: any): promise$Promise<T>;

    /**
     * Deletes the model from persistence.
     * Triggers `destroy` hook (async) before and after destroying object.
     * @param {() => void} callback Callback function
     */
    destroy(braintree$callback: l$CallbackWithoutResult): void;

    /**
     * Deletes the model from persistence.
     * Triggers `destroy` hook (async) before and after destroying object.
     */
    destroy(): promise$Promise<void>;

    /**
     * Get the `id` value for the `PersistedModel`
     * @returns {"NO PRINT IMPLEMENTED: JSDocAllType"} The `id` valu
     */
    getId(): any;

    /**
     * Get the `id` property name of the constructor
     * @returns {string} The `id` property nam
     */
    getIdName(): string;

    /**
     * Determine if the data model is new.
     * @returns {boolean} Returns true if the data model is new; false otherwise
     */
    isNewRecord(): boolean;

    /**
     * Reload object from persistence.  Requires `id` member of `object` to be able to call `find`.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
     */
    reload<T>(braintree$callback: l$CallbackWithResult<T>): void;

    /**
     * Reload object from persistence.  Requires `id` member of `object` to be able to call `find`.
     */
    reload<T>(): promise$Promise<T>;

    /**
     * Replace attributes for a model instance and persist it into the datasource.
     * Performs validation before replacing
     * @param {any} data Data to replace.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
     */
    replaceAttributes<T>(
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace attributes for a model instance and persist it into the datasource.
     * Performs validation before replacing
     * @param {any} data Data to replace.
     * @options {any} [options] Options for replace
     * @property {boolean} validate Perform validation before saving.  Default is true.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
     */
    replaceAttributes<T>(
      main$data: any,
      notification$options: {
        validate: boolean
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Replace attributes for a model instance and persist it into the datasource.
     * Performs validation before replacing
     * @param {any} data Data to replace.
     * @options {any} [options] Options for replace
     * @property {boolean} validate Perform validation before saving.  Default is true.
     */
    replaceAttributes<T>(
      main$data: any,
      notification$options?: {
        validate: boolean
      }
    ): promise$Promise<T>;

    /**
     * Save model instance. If the instance doesn't have an ID, then calls [create](#persistedmodelcreatedata-cb) instead.
     * Triggers: validate, save, update, or create.
     * @callback {() => void} callback Optional callback function called with `(err, obj)` arguments.
     */
    save<T>(braintree$callback: l$CallbackWithResult<T>): void;

    /**
 * Save model instance. If the instance doesn't have an ID, then calls [create](#persistedmodelcreatedata-cb) instead.
 * Triggers: validate, save, update, or create.
 * @options {any} [options] See below.
 * @property {boolean} validate Perform validation before saving.  Default is true.
 * @property {boolean} throws If true, throw a validation error; WARNING: This can crash Node.
If false, report the error via callback.  Default is false.
 * @callback {() => void} callback Optional callback function called with `(err, obj)` arguments.
 */
    save<T>(
      notification$options: {
        validate: boolean,
        throws: boolean
      },
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
 * Save model instance. If the instance doesn't have an ID, then calls [create](#persistedmodelcreatedata-cb) instead.
 * Triggers: validate, save, update, or create.
 * @options {any} [options] See below.
 * @property {boolean} validate Perform validation before saving.  Default is true.
 * @property {boolean} throws If true, throw a validation error; WARNING: This can crash Node.
If false, report the error via callback.  Default is false.
 */
    save<T>(notification$options?: {
      validate: boolean,
      throws: boolean
    }): promise$Promise<T>;

    /**
     * Set the correct `id` property for the `PersistedModel`. Uses the `setId` method if the model is attached to
     * connector that defines it.  Otherwise, uses the default lookup.
     * Override this method to handle complex IDs
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} val The `id` value. Will be converted to the type that the `id` property specifies
     */
    setId(val: any): void;

    /**
     * Update a single attribute.
     * Equivalent to `updateAttributes({name: 'value'}, cb)
     *              * @param {string} name Name of property.
     *              * @param {any} value Value of property.
     *              * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
     *              * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
     *              * @param {any} instance Updated instance
     *              *
     */
    updateAttribute<T>(
      skin$name: string,
      value: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Update a single attribute.
     * Equivalent to `updateAttributes({name: 'value'}, cb)
     *              * @param {string} name Name of property.
     *              * @param {any} value Value of property.
     *              *
     */
    updateAttribute<T>(skin$name: string, value: any): promise$Promise<T>;

    /**
     * Update set of attributes.  Performs validation before updating
     * Triggers: `validation`, `save` and `update` hooks
     * @param {any} data Data to update.
     * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
     */
    updateAttributes<T>(
      main$data: any,
      braintree$callback: l$CallbackWithResult<T>
    ): void;

    /**
     * Update set of attributes.  Performs validation before updating
     * Triggers: `validation`, `save` and `update` hooks
     * @param {any} data Data to update.
     */
    updateAttributes<T>(main$data: any): promise$Promise<T>;
  }

  /**
   * Serve the LoopBack favicon.
   * @header loopback.favicon(
   */
  declare function l$favicon(): inert$RequestHandler;

  /**
   * Expose models over REST
   * For example:
   * ```js
   *        * app.use(loopback.rest());
   *        * ```
   * For more information, see [Exposing models over a REST API](docs.strongloop.com/display/DOC/Exposing+models+over+a+REST+API).
   * @header loopback.rest(
   */
  declare function l$rest(): inert$RequestHandler;

  /**
 * Serve static assets of a LoopBack application
 * @param {string} root The root directory from which the static assets are to
be served.
 * @param {any} options Refer to
[express documentation](expressjs.com/4x/api.html#express.static)
for the full list of available options.
 * @header loopback.static(root, [options])
 */
  declare function l$static(
    root: string,
    notification$options?: any
  ): inert$RequestHandler;

  /**
   * Return HTTP response with basic application status information:
   * date the application was started and uptime, in JSON format. For example:
   * ```
   *        * {
   *        *    "started": "2014-06-05T00:26:49.750Z",
   *        *    "uptime": 9.394
   *        * }
   *        * ```
   */
  declare function l$status(): inert$RequestHandler;

  /**
   * Rewrite the url to replace current user literal with the logged in user id
   */
  declare function l$rewriteUserLiteral(): inert$RequestHandler;

  /**
   * Check for an access token in cookies, headers, and query string parameters.
   * This function always checks for the following
   * - `access_token` (params only)
   * - `X-Access-Token` (headers only)
   * - `authorization` (headers and cookies
   *
   * It checks for these values in cookies, headers, and query string parameters _in addition_ to the items
   * specified in the options parameter
   * **NOTE:** This function only checks for [signed cookies](expressjs.com/api.html#req.signedCookies)
   * The following example illustrates how to check for an `accessToken` in a custom cookie, query string parameter
   * and header called `foo-auth`
   * ```js
   *        * app.use(loopback.token({
   *        *   cookies: ['foo-auth'],
   *        *   headers: ['foo-auth', 'X-Foo-Auth'],
   *        *   params: ['foo-auth', 'foo_auth']
   *        * }));
   *        * ```
   * @options {any} [options] Each option Array is used to add additional keys to find an `accessToken` for a `request`.
   * @property {Array} [cookies] Array of cookie names.
   * @property {Array} [headers] Array of header names.
   * @property {Array} [params] Array of param names.
   * @property {boolean} [searchDefaultTokenKeys] Use the default search locations for Token in request
   * @property {boolean} [enableDoublecheck] Execute middleware although an instance mounted earlier in the chain didn't find a token
   * @property {boolean} [overwriteExistingToken] only has effect in combination with `enableDoublecheck`. If truthy, will allow to overwrite an existing accessToken.
   * @property {() => void|string} [model] AccessToken model name or class to use.
   * @property {string} [currentUserLiteral] string literal for the current user.
   * @header loopback.token([options])
   */
  declare function l$token(notification$options?: {
    cookies?: any[],
    headers?: any[],
    params?: any[],
    searchDefaultTokenKeys?: boolean,
    enableDoublecheck?: boolean,
    overwriteExistingToken?: boolean,
    model?: () => void | string,
    currentUserLiteral?: string
  }): inert$RequestHandler;

  /**
   * Convert any request not handled so far to a 404 error
   * to be handled by error-handling middleware.
   * @header loopback.urlNotFound(
   */
  declare function l$urlNotFound(): inert$RequestHandler;

  /**
 * Token based authentication and access control
 * **Default ACLs*
 *   - DENY EVERYONE `*`
 *   - ALLOW EVERYONE creat
 * @property {string} id Generated token ID.
 * @property {number} ttl Time to live in seconds, 2 weeks by default.
 * @property {Date} created When the token was created.
 * @property {any} settings Extends the `Model.settings` object.
 * @property {number} settings.accessTokenIdLength Length of the base64-encoded string access token. Default value is 64.
Increase the length for a more secure access token
 * @class AccessToken
 * @inherits {PersistedModel}
 */
  declare class l$AccessToken mixins l$PersistedModel {
    /**
     * Generated token ID
     */
    id: string;

    /**
     * Time to live in seconds, 2 weeks by default.
     */
    ttl: number;

    /**
     * When the token was created.
     */
    created: entities$Date;

    /**
     * Extends the `Model.settings` object.
     */
    settings: {
      http: {
        skin$path: string
      },
      acls: l$ACL[],
      accessTokenIdLength: number
    };

    /**
     * Create a cryptographically random access token id
     * @callback {() => void} callback
     */
    static createAccessTokenId(
      braintree$callback: (err: EventType$Error, l$token: string) => void
    ): void;

    /**
     * Find a token for the given `any`
     * @param {any} req
     * @param {any} options Options for finding the token
     * @callback {() => void} callback
     */
    static findForRequest(
      req: any,
      notification$options?: any,
      braintree$callback?: (
        err: EventType$Error,
        l$token: l$AccessToken
      ) => void
    ): void;

    /**
     * Validate the token.
     * @callback {() => void} callback
     */
    validate(
      braintree$callback: (err: EventType$Error, isValid: boolean) => void
    ): void;
  }

  /**
 * A Model for access control meta data
 * System grants permissions to principals (users/applications, can be grouped
 * into roles)
 * Protected resource: the model data and operations
 * (model/property/method/relation/…
 * For a given principal, such as client application and/or user, is it allowed
 * to access (read/write/execute)
 * the protected resource
 * @header ACL
 * @property {string} model Name of the model.
 * @property {string} property Name of the property, method, scope, or relation.
 * @property {string} accessType Type of access being granted: one of READ, WRITE, or EXECUTE.
 * @property {string} permission Type of permission granted. One of
- ALARM: Generate an alarm, in a system-dependent way, the access specified in the permissions component of the ACL entry.
- ALLOW: Explicitly grants access to the resource.
- AUDIT: Log, in a system-dependent way, the access specified in the permissions component of the ACL entry.
- DENY: Explicitly denies access to the resource.
 * @property {string} principalType Type of the principal; one of: Application, Use, Role.
 * @property {string} principalId ID of the principal - such as appId, userId or roleId.
 * @property {any} settings Extends the `Model.settings` object.
 * @property {string} settings.defaultPermission Default permission setting: ALLOW, DENY, ALARM, or AUDIT. Default is ALLOW.
Set to DENY to prohibit all API access by default
 * @class ACL
 * @inherits PersistedMode
 */
  declare class l$ACL mixins l$PersistedModel {
    /**
     * model Name of the model.
     */
    model: string;

    /**
     * property Name of the property, method, scope, or relation.
     */
    property: string;

    /**
     * accessType Type of access being granted: one of READ, WRITE, or EXECUTE.
     */
    accesType: "READ" | "WRITE" | "EXECUTE";

    /**
     * permission Type of permission granted  One of:
     * - ALARM: Generate an alarm, in a system-dependent way, the access specified in the permissions component of the ACL entry.
     * - ALLOW: Explicitly grants access to the resource.
     * - AUDIT: Log, in a system-dependent way, the access specified in the permissions component of the ACL entry.
     * - DENY: Explicitly denies access to the resource.
     */
    permission: "ALARM" | "ALLOW" | "AUDIT" | "DENY";

    /**
     * principalType Type of the principal; one of: Application, Use, Role.
     */
    principalType: "Aplication" | "User" | "Role" | string;

    /**
     * principalId ID of the principal - such as appId, userId or roleId.
     */
    principalId: string;

    /**
     * settings Extends the `Model.settings` object.
     */
    settings: {
      http: {
        skin$path: string
      },
      acls: l$ACL[],
      defaultPermission: "DENY"
    };

    /**
 * Check if the request has the permission to access.
 * @options {any} context See below.
 * @property {any[]} principals An Array of principals.
 * @property {string|Model} model The model name or model class.
 * @property {*} id The model instance ID.
 * @property {string} property The property/method/relation name.
 * @property {string} accessType The access type:
READ, REPLICATE, WRITE, or EXECUTE.
 * @param {() => void} callback Callback functio
 */
    static checkAccessForContext(
      balloontoolbar$context: {
        principals: any[],
        model: string | l$Model,
        id: any,
        property: string,
        accessType: string
      },
      braintree$callback: () => void
    ): void;

    /**
     * Check if the given access token can invoke the method
     * @param {l$AccessToken} token The access token
     * @param {string} model The model name
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} modelId The model id
     * @param {string} method The method name
     * @callback {() => void} callback Callback function
     */
    static checkAccessForToken(
      l$token: l$AccessToken,
      model: string,
      modelId: any,
      method: string,
      braintree$callback: (
        err: string | EventType$Error,
        allowed: boolean
      ) => void
    ): void;

    /**
     * Check if the given principal is allowed to access the model/property
     * @param {string} principalType The principal type.
     * @param {string} principalId The principal ID.
     * @param {string} model The model name.
     * @param {string} property The property/method/relation name.
     * @param {string} accessType The access type.
     * @callback {() => void} callback Callback function.
     */
    static checkPermission(
      principalType: string,
      principalId: string,
      model: string,
      property: string,
      accessType: string,
      braintree$callback: (
        err: string | EventType$Error,
        result: l$AccessRequest
      ) => void
    ): void;

    /**
     * Calculate the matching score for the given rule and request
     * @param {l$ACL} rule The ACL entry
     * @param {l$AccessRequest} req The request
     * @returns {number}
     */
    static getMatchingScore(
      htmlParser$rule: l$ACL,
      req: l$AccessRequest
    ): number;

    /**
     * Check if the given principal is mapped to the role
     * @param {string} principalType Principal type
     * @param {string | "NO PRINT IMPLEMENTED: JSDocAllType"} principalId Principal id/name
     * @param {string | "NO PRINT IMPLEMENTED: JSDocAllType"} role Role id/name
     * @param {() => void} cb Callback functio
     */
    static isMappedToRole(
      principalType: string,
      principalId: string | any,
      role: string | any,
      cb: () => void
    ): void;

    /**
     * Resolve a principal by type/id
     * @param {string} type Principal type - ROLE/APP/USER
     * @param {string | number} id Principal id or name
     * @param {() => void} cb Callback function
     */
    static resolvePrincipal(
      notification$type: string,
      id: string | number,
      cb: () => void
    ): void;

    /**
     * Get matching score for the given `AccessRequest`.
     * @param {l$AccessRequest} req The request
     * @returns {number} scor
     */
    score(req: l$AccessRequest): number;
  }

  /**
 * Manage client applications and organize their users
 * @property {string} id  Generated ID.
 * @property {string} name Name; required.
 * @property {string} description Text description
 * @property {string} icon string Icon image URL.
 * @property {string} owner User ID of the developer who registers the application.
 * @property {string} email E-mail address
 * @property {boolean} emailVerified Whether the e-mail is verified.
 * @property {string} url OAuth 2.0  application URL.
 * @property {string}[]} callbackUrls The OAuth 2.0 code/token callback URL.
 * @property {string} status Status of the application; Either `production`, `sandbox` (default), or `disabled`.
 * @property {Date} created Date Application object was created.  Default: current date.
 * @property {Date} modified Date Application object was modified.  Default: current date
 * @property {any} pushSettings.apns APNS configuration, see the options
below and also
github.com/argon/node-apn/blob/master/doc/apn.markdown
 * @property {boolean} pushSettings.apns.production Whether to use production Apple Push Notification Service (APNS) servers to send push notifications.
If true, uses `gateway.push.apple.com:2195` and `feedback.push.apple.com:2196`.
If false, uses `gateway.sandbox.push.apple.com:2195` and `feedback.sandbox.push.apple.com:2196`
 * @property {string} pushSettings.apns.certData The certificate data loaded from the cert.pem file (APNS).
 * @property {string} pushSettings.apns.keyData The key data loaded from the key.pem file (APNS).
 * @property {string} pushSettings.apns.pushOptions.gateway (APNS).
 * @property {number} pushSettings.apns.pushOptions.port (APNS).
 * @property {string} pushSettings.apns.feedbackOptions.gateway  (APNS).
 * @property {number} pushSettings.apns.feedbackOptions.port (APNS).
 * @property {boolean} pushSettings.apns.feedbackOptions.batchFeedback (APNS).
 * @property {number} pushSettings.apns.feedbackOptions.interval (APNS).
 * @property {string} pushSettings.gcm.serverApiKey: Google Cloud Messaging API key
 * @property {boolean} authenticationEnabled
 * @property {boolean} anonymousAllowed
 * @property {Array} authenticationSchemes List of authentication schemes
(see below).
 * @property {string} authenticationSchemes.scheme Scheme name.
Supported values: `local`, `facebook`, `google`,
`twitter`, `linkedin`, `github`.
 * @property {any} authenticationSchemes.credential
Scheme-specific credentials
 * @class Application
 * @inherits {PersistedModel}
 */
  declare class l$Application mixins l$PersistedModel {
    /**
     * Generated ID.
     */
    id: string;

    /**
     * Name; required.
     */
    skin$name: string;

    /**
     * Text description
     */
    description: string;

    /**
     * string Icon image URL.
     */
    icon: string;

    /**
     * User ID of the developer who registers the application.
     */
    owner: string;

    /**
     * E-mail address
     */
    email: string;

    /**
     * Whether the e-mail is verified.
     */
    emailVerified: string;

    /**
     * OAuth 2.0  application URL.
     */
    data$url: string;

    /**
     * The OAuth 2.0 code/token callback URL.
     */
    callBackUrl: string[];

    /**
     * Status of the application; Either `production`, `sandbox` (default), or `disabled`.
     */
    l$status: string;

    /**
     * Date Application object was created.  Default: current date.
     */
    created: entities$Date;

    /**
     * modified Date Application object was modified.  Default: current date.
     */
    modified: entities$Date;

    /**
     * pushSettings.apns APNS configuration, see the options
     *    below and also
     *    github.com/argon/node-apn/blob/master/doc/apn.markdown
     *   pushSettings.apns.production Whether to use production Apple Push Notification Service (APNS) servers to send push notifications.
     * If true, uses `gateway.push.apple.com:2195` and `feedback.push.apple.com:2196`.
     * If false, uses `gateway.sandbox.push.apple.com:2195` and `feedback.sandbox.push.apple.com:2196`
     *   pushSettings.apns.certData The certificate data loaded from the cert.pem file (APNS).
     *   pushSettings.apns.keyData The key data loaded from the key.pem file (APNS).
     *   pushSettings.apns.pushOptions.gateway (APNS).
     *   pushSettings.apns.pushOptions.port (APNS).
     *   pushSettings.apns.feedbackOptions.gateway  (APNS).
     *   pushSettings.apns.feedbackOptions.port (APNS).
     *   pushSettings.apns.feedbackOptions.batchFeedback (APNS).
     *   pushSettings.apns.feedbackOptions.interval (APNS).
     *   pushSettings.gcm.serverApiKey: Google Cloud Messaging API key.
     */
    pushSetings: {
      apns: {
        production: boolean,
        cerData: string,
        keyData: string,
        pushOptions: {
          gateway: string,
          url$port: number
        },
        feedBackOptions: {
          gateway: string,
          url$port: number,
          batchFeedback: boolean,
          interval: number
        }
      },
      gcm: {
        serverApiKey: string
      }
    };
    authenticationEnabled: boolean;
    anonymousAllowed: boolean;
    authenticationSchemes: string[];

    /**
     * Authenticate the application id and key
     * @param {Asn1js$Any} appId
     * @param {string} key
     * @callback {() => void} callback
     */
    static authenticate(
      appId: any,
      key: string,
      braintree$callback: (err: EventType$Error, matched: string) => void
    ): void;

    /**
     * Register a new application
     * @param {string} owner Owner's user ID.
     * @param {string} name Name of the application
     * @param {any} options Other options
     * @param {() => void} callback Callback function
     */
    static register(
      owner: string,
      skin$name: string,
      notification$options: any,
      braintree$callback: () => void
    ): void;

    /**
     * Reset keys for the application instance
     * @callback {() => void} callback
     */
    static resetKeys(braintree$callback: (err: EventType$Error) => void): void;

    /**
     * Reset keys for a given application by the appId
     * @param {Asn1js$Any} appId
     * @callback {() => void} callback
     */
    resetKeys(
      appId: any,
      braintree$callback: (err: EventType$Error) => void
    ): void;
  }

  /**
 * Change list entry.
 * @property {string} id Hash of the modelName and ID.
 * @property {string} rev The current model revision.
 * @property {string} prev The previous model revision.
 * @property {number} checkpoint The current checkpoint at time of the change.
 * @property {string} modelName Model name.
 * @property {string} modelId Model ID.
 * @property {any} settings Extends the `Model.settings` object.
 * @property {string} settings.hashAlgorithm Algorithm used to create cryptographic hash, used as argument
to [crypto.createHash](nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm).  Default is sha1.
 * @property {boolean} settings.ignoreErrors By default, when changes are rectified, an error will throw an exception.
However, if this setting is true, then errors will not throw exceptions.
 * @class Change
 * @inherits {PersistedModel}
 */
  declare class l$Change mixins l$PersistedModel {
    /**
     * Hash of the modelName and ID.
     */
    id: string;

    /**
     * The current model revision.
     */
    rev: string;
    prev: string;
    checkpoint: number;

    /**
     * Model name.
     */
    modelName: string;

    /**
     * Model ID.
     */
    modelId: string;

    /**
     * settings Extends the `Model.settings` object.
     * settings.hashAlgorithm Algorithm used to create cryptographic hash, used as argument
     * to [crypto.createHash](nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm).Default is sha1.
     * settings.ignoreErrors By default, when changes are rectified, an error will throw an exception.
     * However, if this setting is true, then errors will not throw exceptions.
     */
    settings: {
      http: {
        skin$path: string
      },
      acls: l$ACL[],
      hashAlgorithm: string,
      ignoreErrors: boolean
    };

    /**
     * Are both changes deletes?
     * @param {l$Change} a
     * @param {l$Change} b
     */
    static bothDeleted(a: l$Change, b: l$Change): void;

    /**
     * Determine the differences for a given model since a given checkpoint.
     *
     * The callback will contain an error or `result`.
     *
     * **result**
     *
     * ```js
     *              * {
     *              *   deltas: Array,
     *              *   conflicts: Array
     *              * }
     *              * ```
     *
     * **deltas**
     *
     * An Array of changes that differ from `remoteChanges`.
     *
     * **conflicts**
     *
     * An Array of changes that conflict with `remoteChanges`.
     * @param {string} modelName
     * @param {number} since Compare changes after this checkpoint
     * @param {l$Change[]} remoteChanges A set of changes to compare
     * @callback {() => void} callback
     * Find or create a change for the given model
     * @param {string} modelName
     * @param {string} modelId
     * @callback {() => void} callback
     * @end
     */
    static findOrCreateChange(
      modelName: string,
      modelId: string,
      braintree$callback: (err: EventType$Error, change: l$Change) => void
    ): void;

    /**
     * Get the checkpoint model.
     */
    static getCheckpointModel(): void;

    /**
     * Create a hash of the given `string` with the `options.hashAlgorithm`.
     * **Default: `sha1`*
     * @param {string} str The string to be hashed
     */
    static hash(str: string): void;

    /**
     * Get an identifier for a given model
     * @param {string} modelName
     * @param {string} modelId
     */
    static idForModel(modelName: string, modelId: string): void;

    /**
     * Correct all change list entries.
     * @param {() => void} c
     */
    static rectifyAll(cb: () => void): void;

    /**
     * Track the recent change of the given modelIds
     * @param {string} modelName
     * @param {core$Array} modelIds
     * @callback {() => void} callback
     */
    static rectifyModelChanges(
      modelName: string,
      modelIds: any[],
      braintree$callback: (err: EventType$Error, changes: any[]) => void
    ): void;

    /**
     * Get the revision string for the given object
     * @param {any} inst The data to get the revision string for
     */
    static revisionForInst(inst: any): void;

    /**
     * Does this change conflict with the given change.
     * @param {l$Change} change
     * @return {boolean}
     */
    conflictsWith(change: l$Change): void;

    /**
     * Get a change's current revision based on current data.
     * @callback {() => void} callback
     */
    currentRevision(
      braintree$callback: (err: EventType$Error, rev: string) => void
    ): void;

    /**
     * Compare two changes.
     * @param {l$Change} change
     */
    equals(change: l$Change): void;

    /**
     * Get the `Model` class for `change.modelName`.
     */
    getModelCtor(): void;

    /**
     * Determine if the change is based on the given change.
     * @param {l$Change} change
     * @return {boolean}
     */
    isBasedOn(change: l$Change): void;

    /**
     * Update (or create) the change with the current revision
     * @callback {() => void} callback
     */
    rectify(
      braintree$callback: (err: EventType$Error, change: l$Change) => void
    ): void;

    /**
     * Get a change's type. Returns one of
     * - `Change.UPDATE`
     * - `Change.CREATE`
     * - `Change.DELETE`
     * - `Change.UNKNOWN
     *              *
     */
    type(): void;
  }

  /**
   * When two changes conflict a conflict is created
   * **Note**: call `conflict.fetch()` to get the `target` and `source` models
   * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} modelId
   * @param {l$PersistedModel} SourceModel
   * @param {l$PersistedModel} TargetModel
   * @property {ModelClass} source The source model instance
   * @property {ModelClass} target The target model instance
   * @class Change.Conflic
   */
  declare class l$Conflict {
    source: any;
    target: any;
    constructor(
      modelId: any,
      AltJS$SourceModel: l$PersistedModel,
      TargetModel: l$PersistedModel
    ): this;

    /**
     * Get the conflicting changes
     * @callback {() => void} callback
     */
    changes(
      braintree$callback: (
        err: EventType$Error,
        sourceChange: l$Change,
        targetChange: l$Change
      ) => void
    ): void;

    /**
     * Fetch the conflicting models
     * @callback {() => void} callback
     */
    models(
      braintree$callback: (
        err: EventType$Error,
        source: l$PersistedModel,
        target: l$PersistedModel
      ) => void
    ): void;

    /**
     * Resolve the conflict
     * Set the source change's previous revision to the current revision of the
     * (conflicting) target change. Since the changes are no longer conflicting
     * and appear as if the source change was based on the target, they will be
     * replicated normally as part of the next replicate() call
     * This is effectively resolving the conflict using the source version
     * @callback {() => void} callback
     */
    resolve(braintree$callback: (err: EventType$Error) => void): void;

    /**
 * Resolve the conflict using the supplied instance data
 * @param {any} data The set of changes to apply on the model
instance. Use `null` value to delete the source instance instead.
 * @callback {() => void} callback
 */
    resolveManually(
      main$data: any,
      braintree$callback: (err: EventType$Error) => void
    ): void;

    /**
     * Resolve the conflict using the instance data in the source model
     * @callback {() => void} callback
     */
    resolveUsingSource(
      braintree$callback: (err: EventType$Error) => void
    ): void;

    /**
     * Resolve the conflict using the instance data in the target model
     * @callback {() => void} callback
     */
    resolveUsingTarget(
      braintree$callback: (err: EventType$Error) => void
    ): void;

    /**
     * Return a new Conflict instance with swapped Source and Target models
     * This is useful when resolving a conflict in one-way
     * replication, where the source data must not be changed
     *
     * ```js
     *              * conflict.swapParties().resolveUsingTarget(cb);
     *              * ```
     * @returns {l$Conflict} A new Conflict instance
     */
    swapParties(): l$Conflict;

    /**
     * Determine the conflict type
     * Possible results ar
     *
     * - `Change.UPDATE`: Source and target models were updated
     * - `Change.DELETE`: Source and or target model was deleted.
     * - `Change.UNKNOWN`: the conflict type is uknown or due to an erro
     * @callback {() => void} callback
     */
    type(
      braintree$callback: (
        err: EventType$Error,
        notification$type: string
      ) => void
    ): void;
  }

  /**
   * Email model.  Extends LoopBack base [Model](#model-new-model).
   * @property {string} to Email addressee.  Required.
   * @property {string} from Email sender address.  Required.
   * @property {string} subject Email subject string.  Required.
   * @property {string} text Text body of email.
   * @property {string} html HTML body of email
   * @class Email
   * @inherits {Model}
   */
  declare class l$Email mixins l$Model {
    /**
     * Email addressee.  Required.
     */
    to: string;

    /**
     * Email sender address.  Required.
     */
    from: string;

    /**
     * Email subject string.  Required.
     */
    subject: string;

    /**
     * Text body of email.
     */
    dojo$text: string;

    /**
     * HTML body of email.
     */
    main$html: string;

    /**
     * Send an email with the given `options`
     * Example Options
     * ```js
     *              * {
     *              *   from: "Fred Foo <foo@blurdybloop.com>", // sender address
     *              *   to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
     *              *   subject: "Hello", // Subject line
     *              *   text: "Hello world", // plaintext body
     *              *   html: "<b>Hello world</b>" // html body
     *              * }
     *              * ``
     *              * See github.com/andris9/Nodemailer for other supported options
     *              *
     *              * @options {any} options See below
     *              * @prop {string} from Senders's email address
     *              * @prop {string} to List of one or more recipient email addresses (comma-delimited)
     *              * @prop {string} subject Subject line
     *              * @prop {string} text Body text
     *              * @prop {string} html Body HTML (optional)
     *              * @param {() => void} callback Called after the e-mail is sent or the sending faile
     *              *
     */
    static send(
      braintree$callback: () => void,
      notification$options: {
        from: string,
        to: string,
        subject: string,
        dojo$text: string,
        main$html: string
      }
    ): void;

    /**
     * A shortcut for Email.send(this).
     */
    send(): void;
  }

  /**
   * Data model for key-value databases.
   * @class
   */
  declare class l$KeyValueModel {
    /**
     * Set the TTL (time to live) in ms (milliseconds) for a given key.
     * TTL is the remaining time before a key-value pair is discarded from the database.
     *
     * Callback (Optional) Optional callback.
     * When the callback function is not provided, a promise is returned instead (see below).
     *
     * Promise
     * this method supports both callback-based and promise-based invocation.
     * Call this method with no callback argument to get back a promise instead.
     * @param {string} key Key to use when searching the database.
     * @param {number} ttl TTL in ms to set for the key.
     * @param {any} options
     * @param {() => void} callback
     */
    static expire(
      key: string,
      ttl: number,
      notification$options: any,
      braintree$callback: () => void
    ): PromiseLike<any>;

    /**
     * Return the value associated with a given key.
     *
     * Callback (Optional)
     * Optional callback. When the callback function is not provided, a promise is returned instead (see below).
     *
     * Promise
     * This method supports both callback-based and promise-based invocation.
     * Call this method with no callback argument to get back a promise instead.
     * @param {string} key Key to use when searching the database.
     * @param {any} options
     * @param {() => void} callback
     */
    static get(
      key: string,
      option?: any,
      braintree$callback?: (err: EventType$Error, result: any) => void
    ): PromiseLike<any>;

    /**
 * Asynchronously iterate all keys in the database. Similar to .keys()
 * but instead allows for iteration over large data sets without having
 * to load everything into memory at once.
 * Callback example:
 * ```
 *              * // Given a model named `Color` with two keys `red` and `blue`
 *              *    var iterator = Color.iterateKeys();
 *              *    t.next(function(err, key) {
 *              *    // key contains `red`
 *              *          it.next(function(err, key) {
 *              *          // key contains `blue`
 *              *          });
 *              *    });
 *              * ```
 * 
 * Promise example:
 * ```
 *              * // Given a model named `Color` with two keys `red` and `blue`
 *              * var iterator = Color.iterateKeys();
 *              * Promise.resolve().then(function() {
 *              *   return it.next();
 *              * })
 *              * .then(function(key) {
 *              *  // key contains `red`
 *              *   return it.next();
 *              * });
 *              * .then(function(key) {
 *              *   // key contains `blue`
 *              * });
 *              * ```
 * @param {any} filter An optional filter object with the following
 * @param {string} Glob string to use to filter returned keys (i.e. userid.*).
All connectors are required to support * and ?.
They may also support additional special characters that are specific to the backing database.
 * @param {any}
 * @return {any} result AsyncIterator An Object implementing next(cb) -> Promise function that can be used to iterate all keys.
 */
    static iterateKeys(util$filter: {
      match: string,
      notification$options: any
    }): any;

    /**
 * Return all keys in the database.
 * WARNING: This method is not suitable for large data sets as all key-values pairs
 * are loaded into memory at once. For large data sets, use iterateKeys() instead.
 * 
 * This method supports both callback-based and promise-based invocation.
 * Call this method with no callback argument to get back a promise instead
 * 
 * WARNING: this promise implementation will not resolve according to the callback function.
 * @param {any} filter An optional filter object with the following
 * @param {string} Glob string used to filter returned keys (i.e. userid.*).
All connectors are required to support * and ?, but may also support additional special
characters specific to the database.
 * @param {any}
 * @param {() => void} callback
 * @return {PromiseLike<any>}
 */
    static keys(
      util$filter: {
        match: string,
        notification$options: any
      },
      braintree$callback: () => void
    ): PromiseLike<any>;

    /**
     * Persist a value and associate it with the given key.
     *
     * Callback (Optional)
     * Optional callback. When the callback function is not provided, a promise is returned instead (see below).
     *
     * Promise
     * This method supports both callback-based and promise-based invocation.
     * Call this method with no callback argument to get back a promise instead.
     * @param {string} key Key to associate with the given value.
     * @param {any} value Value to persist.
     * @param {number | any} Optional settings for the key-value pair. If a Number is provided, it is set as the TTL (time to live) in ms (milliseconds) for the key-value pair.
     * @param {() => void} callback
     */
    static set(
      key: string,
      value: any,
      notification$options?: number | any,
      braintree$callback?: (err: EventType$Error) => void
    ): PromiseLike<any>;

    /**
     * Return the TTL (time to live) for a given key.
     * TTL is the remaining time before a key-value pair is discarded from the database.
     *
     * Callback (Optional)
     * Optional callback. When the callback function is not provided,
     * a promise is returned instead (see below).
     * @param {string} key Key to use when searching the database.
     * @param {any} options
     * @param {() => void} callback
     */
    static ttl(
      key: string,
      notification$options?: any,
      cb?: (log$error: EventType$Error) => void
    ): PromiseLike<any>;
  }

  /**
   * The Role model
   * @class Role
   * @inherits {PersistedModel}
   * @header Role objec
   */
  declare class l$Role mixins l$PersistedModel {
    /**
     * List roles for a given principal.
     * @param {any} context The security context.
     * @callback {() => void} callback Callback function.
     */
    static getRoles(
      balloontoolbar$context: any,
      braintree$callback: (err: EventType$Error, roles: string[]) => void
    ): void;

    /**
     * Check if the user ID is authenticated
     * @param {any} context The security context.
     * @callback {() => void} callback Callback function.
     */
    static isAuthenticated(
      balloontoolbar$context: any,
      braintree$callback: (
        err: EventType$Error,
        isAuthenticated: boolean
      ) => void
    ): void;

    /**
     * Check if a given principal is in the specified role.
     * @param {string} role The role name.
     * @param {any} context The context object.
     * @callback {() => void} callback Callback function.
     */
    static isInRole(
      role: string,
      balloontoolbar$context: any,
      braintree$callback: (err: EventType$Error, isInRole: boolean) => void
    ): void;

    /**
     * Check if a given user ID is the owner the model instance.
     * @param {() => void} modelClass The model class
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} modelId The model ID
     * @param {"NO PRINT IMPLEMENTED: JSDocAllType"} userId The user ID
     * @param {() => void} callback Callback function
     */
    static isOwner(
      modelClass: () => void,
      modelId: any,
      userId: any,
      braintree$callback: () => void
    ): void;

    /**
 * Add custom handler for roles.
 * @param {string} role Name of role.
 * @param {() => void} resolver () => void that determines
if a principal is in the specified role.
Should provide a callback or return a promise.
 */
    static registerResolver(
      role: string,
      resolver: (
        role: string,
        ctx: l$Context,
        braintree$callback?: (err: EventType$Error, resolved: boolean) => void
      ) => promise$Promise<boolean> | void
    ): void;
  }

  /**
   * The `RoleMapping` model extends from the built in `loopback.Model` type.
   * @property {string} id Generated ID.
   * @property {string} name Name of the role.
   * @property {string} Description Text description.
   * @class RoleMapping
   * @inherits {PersistedModel}
   */
  declare class l$RoleMapping mixins l$PersistedModel {
    /**
     * Generated ID.
     */
    id: string;

    /**
     * Name of the role.
     */
    skin$name: string;

    /**
     * Description Text description.
     */
    description: string;

    /**
     * Get the application principal
     * @callback {() => void} callback
     */
    application(
      braintree$callback: (
        err: EventType$Error,
        application: l$Application
      ) => void
    ): void;

    /**
     * Get the child role principal
     * @callback {() => void} callback
     */
    childRole(
      braintree$callback: (err: EventType$Error, childUser: l$User) => void
    ): void;

    /**
     * Get the user principal
     * @callback {() => void} callback
     */
    user(
      braintree$callback: (err: EventType$Error, url$user: l$User) => void
    ): void;
  }

  /**
   * Resource owner grants/delegates permissions to client application
   * For a protected resource, does the client application have the authorization
   * from the resource owner (user or system)
   * Scope has many resource access entrie
   * @class scope
   */
  declare class l$Scope {
    /**
     * Check if the given scope is allowed to access the model/property
     * @param {string} scope The scope name
     * @param {string} model The model name
     * @param {string} property The property/method/relation name
     * @param {string} accessType The access type
     * @callback {() => void} callback
     */
    static checkPermission(
      scope: string,
      model: string,
      property: string,
      accessType: string,
      braintree$callback: (
        err: string | EventType$Error,
        result: l$AccessRequest
      ) => void
    ): void;
  }

  /**
 * Built-in User model.
 * Extends LoopBack [PersistedModel](#persistedmodel-new-persistedmodel)
 * Default `User` ACLs
 * - DENY EVERYONE `*`
 * - ALLOW EVERYONE `create`
 * - ALLOW OWNER `deleteById`
 * - ALLOW EVERYONE `login`
 * - ALLOW EVERYONE `logout`
 * - ALLOW OWNER `findById`
 * - ALLOW OWNER `updateAttributes`
 * @property {string} username Must be unique.
 * @property {string} password Hidden from remote clients.
 * @property {string} email Must be valid email.
 * @property {boolean} emailVerified Set when a user's email has been verified via `confirm()`.
 * @property {string} verificationToken Set when `verify()` is called.
 * @property {string} realm The namespace the user belongs to. See [Partitioning users with realms](docs.strongloop.com/display/public/LB/Partitioning+users+with+realms) for details.
 * @property {Date} created The property is not used by LoopBack, you are free to use it for your own purposes.
 * @property {Date} lastUpdated The property is not used by LoopBack, you are free to use it for your own purposes.
 * @property {string} status The property is not used by LoopBack, you are free to use it for your own purposes.
 * @property {any} settings Extends the `Model.settings` object.
 * @property {boolean} settings.emailVerificationRequired Require the email verification
process before allowing a login.
 * @property {number} settings.ttl Default time to live (in seconds) for the `AccessToken` created by `User.login() / user.createAccessToken()`.
Default is `1209600` (2 weeks)
 * @property {number} settings.maxTTL The max value a user can request a token to be alive / valid for.
Default is `31556926` (1 year)
 * @property {boolean} settings.realmRequired Require a realm when logging in a user.
 * @property {string} settings.realmDelimiter When set a realm is required.
 * @property {number} settings.resetPasswordTokenTTL Time to live for password reset `AccessToken`. Default is `900` (15 minutes).
 * @property {number} settings.saltWorkFactor The `bcrypt` salt work factor. Default is `10`.
 * @property {boolean} settings.caseSensitiveEmail Enable case sensitive email.
 * @class User
 * @inherits {PersistedModel}
 */
  declare class l$User mixins l$PersistedModel {
    /**
     * Must be unique.
     */
    username: string;

    /**
     * Hidden from remote clients.
     */
    url$password: string;

    /**
     * Must be valid email.
     */
    email: string;

    /**
     * Set when a user's email has been verified via `confirm()`.
     */
    emailVerified: boolean;

    /**
     * Set when `verify()` is called.
     */
    verificationToken: string;

    /**
     * The namespace the user belongs to. See [Partitioning users with realms](docs.strongloop.com/display/public/LB/Partitioning+users+with+realms) for details.
     */
    realm: string;

    /**
     * The property is not used by LoopBack, you are free to use it for your own purposes.
     */
    created: entities$Date;

    /**
     * The property is not used by LoopBack, you are free to use it for your own purposes.
     */
    lastUpdate: entities$Date;

    /**
     * The property is not used by LoopBack, you are free to use it for your own purposes.
     */
    l$status: string;

    /**
     * ettings Extends the `Model.settings` object.
     * settings.emailVerificationRequired Require the email verification
     * process before allowing a login.
     * settings.ttl Default time to live (in seconds) for the `AccessToken` created by `User.login() / user.createAccessToken()`.
     * Default is `1209600` (2 weeks)
     * settings.maxTTL The max value a user can request a token to be alive / valid for.
     * Default is `31556926` (1 year)
     * settings.realmRequired Require a realm when logging in a user.
     * settings.realmDelimiter When set a realm is required.
     * settings.resetPasswordTokenTTL Time to live for password reset `AccessToken`. Default is `900` (15 minutes).
     * settings.saltWorkFactor The `bcrypt` salt work factor. Default is `10`.
     * settings.caseSensitiveEmail Enable case sensitive email.
     */
    settings: {
      http: {
        skin$path: string
      },
      acls: l$ACL[],
      emailVerificationRequired: boolean,
      ttl: number,
      maxTTL: number,
      realmRequired: boolean,
      realmDelimiter: string,
      resetPasswordTokenTTL: number,
      saltWorkFactor: number,
      caseSensitiveEmail: boolean
    };

    /**
     * Confirm the user's identity
     * @param {Asn1js$Any} userId
     * @param {string} token The validation token
     * @param {string} redirect URL to redirect the user to once confirmed
     * @callback {() => void} callback
     */
    static confirm(
      userId: any,
      l$token: string,
      redirect: string,
      braintree$callback?: (err: EventType$Error) => void
    ): promise$Promise<void> | void;

    /**
     * A default verification token generator which accepts the user the token is
     * being generated for and a callback function to indicate completion.
     * This one uses the crypto library and 64 random bytes (converted to hex)
     * for the token. When used in combination with the user.verify() method this
     * function will be called with the `user` object as it's context (`this`)
     * @param {any} user The User this token is being generated for.
     * @param {() => void} cb The generator must pass back the new token with this function cal
     */
    static generateVerificationToken(
      url$user: any,
      braintree$callback?: () => void
    ): promise$Promise<void> | void;

    /**
 * Login a user by with the given `credentials`
 * 
 * ```js
 *              *    User.login({username: 'foo', password: 'bar'}, function (err, token) {
 *              *          console.log(token.id);
 *              *    });
 *              * ```
 * @param {any} credentials username/password or email/password
 * @param {string[] | string} include Optionally set it to "user" to include
the user info
 * @callback {() => void} callback Callback function
 */
    static login(
      credentials: any,
      include?: string[] | string,
      braintree$callback?: (
        err: EventType$Error,
        l$token: l$AccessToken
      ) => void
    ): promise$Promise<l$AccessToken> | void;

    /**
     * Logout a user with the given accessToken id
     *
     * ```js
     *              *    User.logout('asd0a9f8dsj9s0s3223mk', function (err) {
     *              *     console.log(err || 'Logged out');
     *              *   });
     *              * ```
     * @param {string} accessTokenID
     * @callback {() => void} callback
     */
    static logout(
      accessTokenID: string,
      braintree$callback?: (err: EventType$Error) => void
    ): promise$Promise<void> | void;

    /**
     * Normalize the credentials
     * @param {any} credentials The credential object
     * @param {boolean} realmRequired
     * @param {string} realmDelimiter The realm delimiter, if not set, no realm is needed
     * @returns {any} The normalized credential objec
     */
    static normalizeCredentials(
      credentials: any,
      realmRequired: boolean,
      realmDelimiter: string
    ): any;

    /**
     * Create a short lived acess token for temporary login. Allows users
     * to change passwords if forgotten
     * @options {any} options
     * @prop {string} email The user's email address
     * @callback {() => void} callback
     */
    static resetPassword(
      notification$options: {},
      braintree$callback?: (err: EventType$Error) => void
    ): promise$Promise<void> | void;

    /**
     * Create access token for the logged in user. This method can be overridden to
     * customize how access tokens are generate
     * @param {number} ttl The requested ttl
     * @param {any} options The options for access token, such as scope, appId
     * @callback {() => void} cb The callback function
     */
    createAccessToken(
      ttl: number,
      notification$options?: any,
      braintree$callback?: (
        err: string | EventType$Error,
        l$token: l$AccessToken
      ) => void
    ): promise$Promise<l$AccessToken> | void;

    /**
     * Compare the given `password` with the users hashed password
     * @param {string} password The plain text password
     * @callback {() => void} callback Callback function
     */
    hasPassword(
      url$password: string,
      braintree$callback?: (err: EventType$Error, isMatch: boolean) => void
    ): promise$Promise<boolean> | void;

    /**
 * Verify a user's identity by sending them a confirmation email
 *   ```js
 *              *   var options = {
 *              *     type: 'email',
 *              *     to: user.email,
 *              *     template: 'verify.ejs',
 *              *     redirect: '/',
 *              *     tokenGenerator: function (user, cb) { cb("random-token"); }
 *              *   };
 *              *
 *              *   user.verify(options, next);
 *              * ```
 * @options {any} options
 * @property {string} type Must be 'email'.
 * @property {string} to Email address to which verification email is sent.
 * @property {string} from Sender email addresss, for example
`'noreply@myapp.com'`.
 * @property {string} subject Subject line text.
 * @property {string} text Text of email.
 * @property {string} template Name of template that displays verification
page, for example, `'verify.ejs'.
             * @property {string} redirect Page to which user will be redirected after
             *  they verify their email, for example `'/'` for root URI.
             * @property {() => void} generateVerificationToken A function to be used to
             *  generate the verification token. It must accept the user object and a
             *  callback function. This function should NOT add the token to the user
             *  object, instead simply execute the callback with the token! User saving
             *  and email sending will be handled in the `verify()` method
             *
 */
    verify(notification$options: {
      notification$type: string,
      to: string,
      from: string,
      subject: string,
      dojo$text: string,
      Util$template: string,
      redirect: string,
      generateVerificationToken(): void
    }): void;
  }
  declare module.exports: typeof l;
}
