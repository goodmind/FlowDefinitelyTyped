declare module 'webpack-serve' {
        import typeof * as koa from 'koa';

	import typeof * as webpack from 'webpack';

	import typeof * as webpackDevMiddleware from 'webpack-dev-middleware';

	import typeof * as webpackHotClient from 'webpack-hot-client';

	import typeof * as https from 'https';

	import typeof * as net from 'net';

	declare module 'webpack' {
        declare interface Configuration {
serve?: WebpackServe$WebpackServe$Options
} 
    }

	declare function WebpackServe(
argv: {[key: string]: any},
options: WebpackServe$WebpackServe$Options): Promise<WebpackServe$WebpackServe$Result>

	declare interface WebpackServe$Result {

/**
 * An instance of a Koa application, extended with a server property, and stop method, which is used to programatically stop the server
 */
app: WebpackServe$InitializedKoa,

/**
 * A function which binds a serve event-name to a function
 */
on<K: $Keys<WebpackServe$EventMap>>(
type: K,
callback: (args: $ElementType<WebpackServe$EventMap, K>) => void): void,

/**
 * Access to a frozen copy of the internal options object used by the module.
 */
options: WebpackServe$InitializedOptions
} 

declare interface WebpackServe$Options {

/**
 * Addon to webpack-serve that allows access to the Koa server instance
 */
add?: (
app: WebpackServe$InitializedKoa,
middleware: WebpackServe$Middleware,
options: WebpackServe$Options) => void,

/**
 * Custom instance of a webpack compiler
 */
compiler?: webpack.Compiler,

/**
 * Webpack configuration for creating a new webpack compiler instance
 */
config?: webpack.Configuration,

/**
 * A path or array of paths where content will be served from
 */
content?: string | string[],

/**
 * Copy the server URL to the clipboard when the server is started
 */
clipboard?: boolean,

/**
 * Options for webpack-dev-middleware
 */
devMiddleware?: webpackDevMiddleware.WebpackServe$Options,

/**
 * The host the server will listen on
 */
host?: string,

/**
 * Options for webpack-hot-client
 */
hotClient?: webpackHotClient.WebpackServe$Options | boolean,

/**
 * Enable HTTP2 support
 */
http2?: boolean,

/**
 * Configuration object for the server to use HTTPS
 */
https?: https.ServerOptions,

/**
 * Level of information for webpack-serve to output
 */
logLevel?: "trace"
| "debug"
| "info"
| "warn"
| "error"
| "silent",

/**
 * Prepend timestamp to each log line
 */
logTime?: boolean,

/**
 * Object of subscribers to webpack-serve bus events
 */
on?: WebpackServe$OnOptions,

/**
 * Open the browser when started
 */
open?: WebpackServe$OpenOptions | boolean,

/**
 * Port that the server listens on
 */
port?: number
} 

declare interface WebpackServe$OpenOptions {

/**
 * Name of the browser to open
 */
app?: string,

/**
 * Path on the server to open
 */
path?: string
} 

declare type WebpackServe$OnOptions = $ObjMapi<WebpackServe$EventMap, <K>(K) => (args: $ElementType<WebpackServe$EventMap, K>) => void>;

declare type WebpackServe$InitializedKoa = {
server: net.Server,
stop: () => void
} & koa


declare type WebpackServe$InitializedOptions = {
protocol: "http" | "https"
} & WebpackServe$Options


declare interface WebpackServe$Middleware {

/**
 * Function to call to add koa-static
 */
content: () => void,

/**
 * Function to call to add the webpack-dev-middleware
 */
webpack: () => void
} 

declare interface WebpackServe$EventMap {
"build-started": {
compiler: webpack.Compiler
},
"build-finished": {
compiler: webpack.Compiler,
stats: webpack.Stats
},
"compiler-error": {
compiler: webpack.Compiler,
stats: any
},
"compiler-warning": {
compiler: webpack.Compiler,
stats: any
},
listening: {
server: net.Server,
options: WebpackServe$InitializedOptions
}
} 
	declare module.exports: typeof WebpackServe

    }
