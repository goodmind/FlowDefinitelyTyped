declare module "browser-sync" {
  import typeof * as chokidar from "chokidar";

  import typeof * as fs from "fs";

  import typeof * as http from "http";

  import typeof * as mm from "micromatch";

  import type { ServeStaticOptions } from "serve-static";

  declare interface browserSync$Options {
    /**
     * Browsersync includes a user-interface that is accessed via a separate port. The UI allows to controls
     * all devices, push sync updates and much more.
     *
     * port - Default: 3001
     * weinre.port - Default: 8080
     * Note: Requires at least version 2.0.0.
     */
    ui?: browserSync$UIOptions | boolean;

    /**
     * Browsersync can watch your files as you work. Changes you make will either be injected into the page (CSS
     * & images) or will cause all browsers to do a full-page refresh. See anymatch for more information on glob
     * patterns.
     * Default: false
     */
    files?:
      | string
      | (string | browserSync$FileCallback | { [key: string]: any })[];

    /**
     * Specify which file events to respond to.
     * Available events: `add`, `change`, `unlink`, `addDir`, `unlinkDir`
     */
    watchEvents?: browserSync$WatchEvents | string[];

    /**
     * Watch files automatically.
     */
    watch?: boolean;

    /**
     * Patterns for any watchers to ignore.
     * Anything provided here will end up inside 'watchOptions.ignored'.
     */
    ignore?: string[];

    /**
     * Serve an index.html file for all non-asset routes.
     * Useful when using client-routers.
     */
    single?: boolean;

    /**
     * File watching options that get passed along to Chokidar. Check their docs for available options
     * Default: undefined
     * Note: Requires at least version 2.6.0.
     */
    watchOptions?: chokidar.WatchOptions;

    /**
     * Use the built-in static server for basic HTML/JS/CSS websites.
     * Default: false
     */
    server?: string | boolean | string[] | browserSync$ServerOptions;

    /**
     * Proxy an EXISTING vhost. Browsersync will wrap your vhost with a proxy URL to view your site.
     * Passing only a URL as a string equates to passing only target property of ProxyOptions type.
     * target - Default: undefined
     * ws - Default: undefined
     * middleware - Default: undefined
     * reqHeaders - Default: undefined
     * proxyRes - Default: undefined (http.ServerResponse if expecting single parameter)
     * proxyReq - Default: undefined
     */
    proxy?: string | browserSync$ProxyOptions;

    /**
     * Use a specific port (instead of the one auto-detected by Browsersync)
     * Default: 3000
     */
    port?: number;

    /**
     * Functions or actual plugins used as middleware.
     */
    middleware?:
      | browserSync$MiddlewareHandler
      | browserSync$PerRouteMiddleware
      | (browserSync$MiddlewareHandler | browserSync$PerRouteMiddleware)[];

    /**
     * Add additional directories from which static files should be served.
     * Should only be used in proxy or snippet mode.
     * Default: []
     * Note: Requires at least version 2.8.0.
     */
    serveStatic?: browserSync$StaticOptions[] | string[];

    /**
     * Options that are passed to the serve-static middleware when you use the
     * string[] syntax: eg: `serveStatic: ['./app']`.
     * Please see [serve-static](https://github.com/expressjs/serve-static) for details.
     */
    serveStaticOptions?: ServeStaticOptions;

    /**
     * Enable https for localhost development.
     * Note: This may not be needed for proxy option as it will try to infer from your target url.
     * Note: If privacy error is encountered please see HttpsOptions below, setting those will resolve.
     * Note: Requires at least version 1.3.0.
     */
    https?: boolean | browserSync$HttpsOptions;

    /**
     * Override http module to allow using 3rd party server modules (such as http2).
     */
    httpModule?: string;

    /**
     * Clicks, Scrolls & Form inputs on any device will be mirrored to all others.
     * clicks - Default: true
     * scroll - Default: true
     * forms - Default: true
     */
    ghostMode?: browserSync$GhostOptions | boolean;

    /**
     * Can be either "info", "debug", "warn", or "silent"
     * Default: info
     */
    logLevel?: browserSync$LogLevel;

    /**
     * Change the console logging prefix. Useful if you're creating your own project based on Browsersync
     * Default: BS
     * Note: Requires at least version 1.5.1.
     */
    logPrefix?: string;

    /**
     * Whether or not to log connections
     * Default: false
     */
    logConnections?: boolean;

    /**
     * Whether or not to log information about changed files
     * Default: false
     */
    logFileChanges?: boolean;

    /**
     * Log the snippet to the console when you're in snippet mode (no proxy/server)
     * Default: true
     * Note: Requires at least version 1.5.2.
     */
    logSnippet?: boolean;

    /**
     * You can control how the snippet is injected onto each page via a custom regex + function.
     * You can also provide patterns for certain urls that should be ignored from the snippet injection.
     * Note: Requires at least version 2.0.0.
     */
    snippetOptions?: browserSync$SnippetOptions;

    /**
     * Add additional HTML rewriting rules.
     * Default: false
     * Note: Requires at least version 2.4.0.
     */
    rewriteRules?: boolean | browserSync$RewriteRules[];

    /**
     * Tunnel the Browsersync server through a random Public URL
     * Default: null
     */
    tunnel?: string | boolean;

    /**
     * Some features of Browsersync (such as xip & tunnel) require an internet connection, but if you're
     * working offline, you can reduce start-up time by setting this option to false
     */
    online?: boolean;

    /**
     * Default: true
     * Decide which URL to open automatically when Browsersync starts. Defaults to "local" if none set.
     * Can be true, local, external, ui, ui-external, tunnel or false
     */
    open?: browserSync$OpenOptions | boolean;

    /**
     * The browser(s) to open
     * Default: default
     */
    browser?: string | string[];

    /**
     * Add HTTP access control (CORS) headers to assets served by Browsersync.
     * Default: false
     * Note: Requires at least version 2.16.0.
     */
    cors?: boolean;

    /**
     * Requires an internet connection - useful for services such as Typekit as it allows you to configure
     * domains such as *.xip.io in your kit settings
     * Default: false
     */
    xip?: boolean;

    /**
     * Reload each browser when Browsersync is restarted.
     * Default: false
     */
    reloadOnRestart?: boolean;

    /**
     * The small pop-over notifications in the browser are not always needed/wanted.
     * Default: true
     */
    notify?: boolean;

    /**
     * scrollProportionally: false // Sync viewports to TOP position
     * Default: true
     */
    scrollProportionally?: boolean;

    /**
     * How often to send scroll events
     * Default: 0
     */
    scrollThrottle?: number;

    /**
     * Decide which technique should be used to restore scroll position following a reload.
     * Can be window.name or cookie
     * Default: 'window.name'
     */
    scrollRestoreTechnique?: string;

    /**
     * Sync the scroll position of any element on the page. Add any amount of CSS selectors
     * Default: []
     * Note: Requires at least version 2.9.0.
     */
    scrollElements?: string[];

    /**
     * Default: []
     * Note: Requires at least version 2.9.0.
     * Sync the scroll position of any element on the page - where any scrolled element will cause
     * all others to match scroll position. This is helpful when a breakpoint alters which element
     * is actually scrolling
     */
    scrollElementMapping?: string[];

    /**
     * Time, in milliseconds, to wait before instructing the browser to reload/inject following a file
     * change event
     * Default: 0
     */
    reloadDelay?: number;

    /**
     * Restrict the frequency in which browser:reload events can be emitted to connected clients
     * Default: 0
     * Note: Requires at least version 2.6.0.
     */
    reloadDebounce?: number;

    /**
     * Emit only the first event during sequential time windows of a specified duration.
     * Note: Requires at least version 2.13.0.
     */
    reloadThrottle?: number;

    /**
     * User provided plugins
     * Default: []
     * Note: Requires at least version 2.6.0.
     */
    plugins?: any[];

    /**
     * Whether to inject changes (rather than a page refresh)
     * Default: true
     */
    injectChanges?: boolean;

    /**
     * The initial path to load
     */
    startPath?: string;

    /**
     * Whether to minify the client script
     * Default: true
     */
    minify?: boolean;

    /**
     * Override host detection if you know the correct IP to use
     */
    host?: string;

    /**
     * Support environments where dynamic hostnames are not required (ie: electron).
     */
    localOnly?: boolean;

    /**
     * Send file-change events to the browser
     * Default: true
     */
    codeSync?: boolean;

    /**
     * Append timestamps to injected files
     * Default: true
     */
    timestamps?: boolean;

    /**
     * ¯\_(ツ)_/¯
     * Best guess, when ghostMode (or SocketIO?) is setup the events
     * listed here will be emitted and able to hook into.
     */
    clientEvents?: string[];

    /**
     * Alter the script path for complete control over where the Browsersync Javascript is served
     * from. Whatever you return from this function will be used as the script path.
     * Note: Requires at least version 1.5.0.
     */
    scriptPath?: (path: string) => string;

    /**
     * Configure the Socket.IO path and namespace & domain to avoid collisions.
     * path - Default: "/browser-sync/socket.io"
     * clientPath - Default: "/browser-sync"
     * namespace - Default: "/browser-sync"
     * domain - Default: undefined
     * port - Default: undefined
     * clients.heartbeatTimeout - Default: 5000
     * Note: Requires at least version 1.6.2.
     */
    socket?: browserSync$SocketOptions;

    /**
     * ¯\_(ツ)_/¯
     */
    tagNames?: browserSync$TagNamesOptions;

    /**
     * ¯\_(ツ)_/¯
     */
    injectFileTypes?: string[];

    /**
     * ¯\_(ツ)_/¯
     */
    excludeFileTypes?: string[];
  }

  declare type browserSync$WatchEvents =
    | "add"
    | "change"
    | "unlink"
    | "addDir"
    | "unlinkDir";

  declare type browserSync$LogLevel = "info" | "debug" | "warn" | "silent";

  declare type browserSync$OpenOptions =
    | "local"
    | "external"
    | "ui"
    | "ui-external"
    | "tunnel";

  declare interface browserSync$Hash<T> {
    [path: string]: T;
  }

  declare interface browserSync$UIOptions {
    /**
     * set the default port
     */
    port?: number;

    /**
     * set the default weinre port
     */
    weinre?: {
      port?: number
    };
  }

  declare interface browserSync$FileCallback {
    match?: string | string[];
    fn: (event: string, file: string) => any;
    options?: chokidar.WatchOptions;
  }

  declare interface browserSync$ServerOptions {
    /**
     * set base directory
     */
    baseDir?: string | string[];

    /**
     * enable directory listing
     */
    directory?: boolean;

    /**
     * set index filename
     */
    index?: string;

    /**
     * key-value object hash, where the key is the url to match,
     * and the value is the folder to serve (relative to your working directory)
     */
    routes?: browserSync$Hash<string>;

    /**
     * configure custom middleware
     */
    middleware?: (
      | browserSync$MiddlewareHandler
      | browserSync$PerRouteMiddleware
    )[];
    serveStaticOptions?: ServeStaticOptions;
  }

  declare interface browserSync$ProxyOptions {
    target?: string;
    middleware?: browserSync$MiddlewareHandler;
    ws?: boolean;
    reqHeaders?: (config: { [key: string]: any }) => browserSync$Hash<{
      [key: string]: any
    }>;
    proxyRes?:
      | browserSync$ProxyResponseMiddleware
      | browserSync$ProxyResponseMiddleware[];
    proxyReq?:
      | ((res: http.IncomingMessage) => void)[]
      | ((res: http.IncomingMessage) => void);
    error?: (
      err: NodeJS.ErrnoException,
      req: http.IncomingMessage,
      res: http.ServerResponse
    ) => void;
  }

  declare interface browserSync$ProxyResponseMiddleware {
    (
      proxyRes: http.ServerResponse | http.IncomingMessage,
      res: http.ServerResponse,
      req: http.IncomingMessage
    ): void;
  }

  declare interface browserSync$HttpsOptions {
    key?: string;
    cert?: string;
  }

  declare interface browserSync$StaticOptions {
    route: string | string[];
    dir: string | string[];
  }

  declare interface browserSync$MiddlewareHandler {
    (
      req: http.IncomingMessage,
      res: http.ServerResponse,
      next: () => void
    ): any;
  }

  declare interface browserSync$PerRouteMiddleware {
    id?: string;
    route: string;
    handle: browserSync$MiddlewareHandler;
  }

  declare interface browserSync$GhostOptions {
    clicks?: boolean;
    scroll?: boolean;
    forms?: browserSync$FormsOptions | boolean;
  }

  declare interface browserSync$FormsOptions {
    inputs: boolean;
    submit: boolean;
    toggles: boolean;
  }

  declare interface browserSync$SnippetOptions {
    async?: boolean;
    whitelist?: string[];
    blacklist?: string[];
    rule?: {
      match?: RegExp,
      fn?: (snippet: string, match: string) => any
    };
  }

  declare interface browserSync$SocketOptions {
    path?: string;
    clientPath?: string;
    namespace?: string;
    domain?: string;
    port?: number;
    clients?: {
      heartbeatTimeout?: number
    };
  }

  declare interface browserSync$TagNamesOptions {
    less?: string;
    scss?: string;
    css?: string;
    jpg?: string;
    jpeg?: string;
    png?: string;
    svg?: string;
    gif?: string;
    js?: string;
  }

  declare interface browserSync$RewriteRules {
    match: RegExp;
    replace?: string;
    fn?: (
      req: http.IncomingMessage,
      res: http.ServerResponse,
      match: string
    ) => string;
  }

  declare interface browserSync$StreamOptions {
    once?: boolean;
    match?: mm.Pattern | mm.Pattern[];
  }

  declare type browserSync$BrowserSyncStatic = {
    /**
     * Start the Browsersync service. This will launch a server, proxy or start the snippet mode
     * depending on your use-case.
     */
    (
      config?: browserSync$Options,
      callback?: (err: Error, bs: { [key: string]: any }) => any
    ): browserSync$BrowserSyncInstance,

    /**
     */
    instances: Array<browserSync$BrowserSyncInstance>,

    /**
     * Create a Browsersync instance
     * @param name an identifier that can used for retrieval later
     */
    create(
      name?: string,
      emitter?: NodeJS.EventEmitter
    ): browserSync$BrowserSyncInstance,

    /**
     * Get a single instance by name. This is useful if you have your build scripts in separate files
     * @param name the identifier used for retrieval
     */
    get(name: string): browserSync$BrowserSyncInstance,

    /**
     * Check if an instance has been created.
     * @param name the name of the instance
     */
    has(name: string): boolean,

    /**
     * Reset the state of the module.
     * (should only be needed for test environments)
     */
    reset(): void
  } & browserSync$BrowserSyncInstance;

  declare interface browserSync$BrowserSyncInstance {
    /**
     * the name of this instance of browser-sync
     */
    name: string;

    /**
     * Start the Browsersync service. This will launch a server, proxy or start the snippet mode
     * depending on your use-case.
     */
    init(
      config?: browserSync$Options,
      callback?: (err: Error, bs: { [key: string]: any }) => any
    ): browserSync$BrowserSyncInstance;

    /**
     * This method will close any running server, stop file watching & exit the current process.
     */
    exit(): void;

    /**
     * Helper method for browser notifications
     * @param message Can be a simple message such as 'Connected' or HTML
     * @param timeout How long the message will remain in the browser.
     * @since 1.3.0
     */
    notify(message: string, timeout?: number): void;

    /**
     * Method to pause file change events
     */
    pause(): void;

    /**
     * Method to resume paused watchers
     */
    resume(): void;

    /**
     * Reload the browser
     * The reload method will inform all browsers about changed files and will either cause the browser
     * to refresh, or inject the files where possible.
     */
    reload(): void;

    /**
     * Reload a single file
     * The reload method will inform all browsers about changed files and will either cause the browser
     * to refresh, or inject the files where possible.
     */
    reload(file: string): void;

    /**
     * Reload multiple files
     * The reload method will inform all browsers about changed files and will either cause the browser
     * to refresh, or inject the files where possible.
     */
    reload(files: string[]): void;

    /**
     * The reload method will inform all browsers about changed files and will either cause the browser
     * to refresh, or inject the files where possible.
     */
    reload(options: {
      stream: boolean
    }): NodeJS.ReadWriteStream;

    /**
     * The stream method returns a transform stream and can act once or on many files.
     * @param opts Configuration for the stream method
     */
    stream(opts?: browserSync$StreamOptions): NodeJS.ReadWriteStream;

    /**
     * Instance Cleanup.
     */
    cleanup(
      fn?: (
        error: NodeJS.ErrnoException,
        bs: browserSync$BrowserSyncInstance
      ) => void
    ): void;

    /**
     * Register a plugin.
     * Must implement at least a 'plugin' property that returns
     * callable function.
     * @method use
     * @param {{[key: string]: any}} module The object to be `required`.
     * @param {{[key: string]: any}} options The
     * @param {any} cb A callback function that will return any errors.
     */
    use(
      module: {
        "plugin:name"?: string,
        plugin: (
          opts: { [key: string]: any },
          bs: browserSync$BrowserSyncInstance
        ) => any
      },
      options?: { [key: string]: any },
      cb?: any
    ): void;

    /**
     * Callback helper to examine what options have been set.
     * @param {string} name The key to search options map for.
     */
    getOption(name: string): any;

    /**
     * Stand alone file-watcher. Use this along with Browsersync to create your own, minimal build system
     */
    watch(
      patterns: string,
      opts?: chokidar.WatchOptions,
      fn?: (event: string, file: fs.Stats) => any
    ): NodeJS.EventEmitter;

    /**
     * The internal Event Emitter used by the running Browsersync instance (if there is one). You can use
     * this to emit your own events, such as changed files, logging etc.
     */
    emitter: NodeJS.EventEmitter;

    /**
     * A simple true/false flag that you can use to determine if there's a currently-running Browsersync instance.
     */
    active: boolean;

    /**
     * A simple true/false flag to determine if the current instance is paused
     */
    paused: boolean;
  }
  declare var browserSync: browserSync$browserSync$BrowserSyncStatic;
  declare module.exports: typeof browserSync;
}
