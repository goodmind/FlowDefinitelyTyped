declare module 'koa-morgan' {
        import type {
          IncomingMessage,ServerResponse
        } from 'http';

	import typeof * as Koa from 'koa';

	import typeof * as originalMorgan from 'morgan';

	
      declare var npm$namespace$morgan: {
        token: typeof morgan$token,
format: typeof morgan$format,
compile: typeof morgan$compile,
        
      }
declare interface morgan$FormatFn {
(tokens: morgan$TokenIndexer, req: IncomingMessage, res: ServerResponse): string
} 

declare interface morgan$TokenCallbackFn {
(req: IncomingMessage, res: ServerResponse, arg?: string | number | boolean): string
} 

declare type morgan$TokenIndexer = originalMorgan.morgan$TokenIndexer;


/**
 * Public interface of morgan logger
 */
declare interface morgan$KoaMorgan {

/**
 * Create a new morgan logger middleware function using the given format and options. The
 * format argument may be a string of a predefined name (see below for the names),
 * or a string of a format string containing defined tokens.
 */
(morgan$format: string, options?: morgan$Options): Koa.Middleware,

/**
 * Standard Apache combined log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 */
(morgan$format: "combined", options?: morgan$Options): Koa.Middleware,

/**
 * Standard Apache common log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
 */
(morgan$format: "common", options?: morgan$Options): Koa.Middleware,

/**
 * Concise output colored by response status for development use. The :status token will be colored red for
 * server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
 * :method :url :status :response-time ms - :res[content-length]
 */
(morgan$format: "dev", options?: morgan$Options): Koa.Middleware,

/**
 * Shorter than default, also including response time.
 * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
 */
(morgan$format: "short", options?: morgan$Options): Koa.Middleware,

/**
 * The minimal output.
 * :method :url :status :res[content-length] - :response-time ms
 */
(morgan$format: "tiny", options?: morgan$Options): Koa.Middleware,

/**
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a
 * custom format function which adheres to the signature.
 */
(morgan$format: morgan$FormatFn, options?: morgan$Options): Koa.Middleware,

/**
 * Define a custom token which can be used in custom morgan logging formats.
 */
token(name: string, callback: morgan$TokenCallbackFn): morgan$KoaMorgan,

/**
 * Define a named custom format by specifying a format string in token notation
 */
format(name: string, fmt: string): morgan$KoaMorgan,

/**
 * Define a named custom format by specifying a format function
 */
format(name: string, fmt: morgan$FormatFn): morgan$KoaMorgan,

/**
 * Compile a format string in token notation into a format function
 */
compile(morgan$format: string): morgan$FormatFn
} 


/**
 * Define a custom token which can be used in custom morgan logging formats.
 */
declare function morgan$token(name: string, callback: morgan$TokenCallbackFn): morgan$KoaMorgan



/**
 * Define a named custom format by specifying a format string in token notation
 */
declare function morgan$format(name: string, fmt: string): morgan$KoaMorgan



/**
 * Define a named custom format by specifying a format function
 */
declare function morgan$format(name: string, fmt: morgan$FormatFn): morgan$KoaMorgan



/**
 * Compile a format string in token notation into a format function
 */
declare function morgan$compile(morgan$format: string): morgan$FormatFn


declare type morgan$StreamOptions = originalMorgan.morgan$StreamOptions;


/**
 * Morgan accepts these properties in the options object.
 */
declare interface morgan$Options {

/**
 * Buffer duration before writing logs to the stream, defaults to false. When set to true, defaults to 1000 ms.
 */
buffer?: boolean,

/**
 * Write log line on request instead of response. This means that a requests will be logged even if the server
 * crashes, but data from the response cannot be logged (like the response code).
 */
immediate?: boolean,

/**
 * Function to determine if logging is skipped, defaults to false. This function will be called as skip(req, res).
 */
skip?: (req: IncomingMessage, res: ServerResponse) => boolean,

/**
 * Output stream for writing log lines, defaults to process.stdout.
 */
stream?: morgan$StreamOptions
} 
	
/**
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a string
 * of a predefined name (see below for the names), or a string of a format string containing defined tokens.
 */
declare function morgan(morgan$format: string, options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * Standard Apache combined log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 */
declare function morgan(morgan$format: "combined", options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * Standard Apache common log output.
 * :remote-addr - :remote-user [:date] ":method :url HTTP/:http-version" :status :res[content-length]
 */
declare function morgan(morgan$format: "common", options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * Concise output colored by response status for development use. The :status token will be colored red for server error codes,
 * yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
 * :method :url :status :response-time ms - :res[content-length]
 */
declare function morgan(morgan$format: "dev", options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * Shorter than default, also including response time.
 * :remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms
 */
declare function morgan(morgan$format: "short", options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * The minimal output.
 * :method :url :status :res[content-length] - :response-time ms
 */
declare function morgan(morgan$format: "tiny", options?: morgan$morgan$Options): Koa.Middleware

	
/**
 * Create a new morgan logger middleware function using the given format and options. The format argument may be a
 * custom format function which adheres to the signature.
 */
declare function morgan(custom: (req: IncomingMessage, res: ServerResponse) => string): Koa.Middleware

	declare module.exports: typeof morgan

    }
