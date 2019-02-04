declare module 'needle' {
        import typeof * as http from 'http';

	import typeof * as Buffer from 'buffer';

	import typeof * as https from 'https';

	declare type core$NeedleResponse = {
body: any,
raw: Buffer,
bytes: number,
cookies?: core$Cookies,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} & http.IncomingMessage


declare type core$ReadableStream = NodeJS.core$ReadableStream;

declare type core$NeedleCallback = (error: Error | null, response: core$NeedleResponse, body: any) => void;

declare interface core$Cookies {
[name: string]: any
} 

declare type core$NeedleOptions = core$RequestOptions & core$ResponseOptions & core$RedirectOptions & https.core$RequestOptions;

declare type core$NeedleReadonlyHttpVerbs = "get" | "head";

declare type core$NeedleReadWriteHttpVerbs = "delete" | "patch" | "post" | "put";

declare type core$NeedleHttpVerbs = core$NeedleReadonlyHttpVerbs | core$NeedleReadWriteHttpVerbs;

declare interface core$RequestOptions {

/**
 * Returns error if connection takes longer than X milisecs to establish.
 * Defaults to 10000 (10 secs). 0 means no timeout.
 */
open_timeout?: number,

/**
 * Alias for open_timeout
 */
timeout?: $ElementType<core$RequestOptions, "open_timeout">,

/**
 * Returns error if data transfer takes longer than X milisecs,
 * after connection is established. Defaults to 0 (no timeout).
 */
read_timeout?: number,

/**
 * Number of redirects to follow. Defaults to 0.
 */
follow_max?: number,

/**
 * Alias for follow_max
 */
follow?: $ElementType<core$RequestOptions, "follow_max">,

/**
 * Enables multipart/form-data encoding. Defaults to false.
 * Use it when uploading files.
 */
multipart?: boolean,

/**
 * Uses an http.Agent of your choice, instead of the global, default one.
 * Useful for tweaking the behaviour at the connection level, such as when doing tunneling.
 */
agent?: http.Agent | boolean,

/**
 * Forwards request through HTTP(s) proxy.
 * Eg. proxy: 'http://user:pass@proxy.server.com:3128'.
 * For more advanced proxying/tunneling use a custom agent.
 */
proxy?: string,

/**
 * Object containing custom HTTP headers for request.
 */
headers?: {},

/**
 * Determines what to do with provided username/password.
 * Options are auto, digest or basic (default).
 * auto will detect the type of authentication depending on the response headers.
 */
auth?: "auto" | "digest" | "basic",

/**
 * When true, sets content type to application/json and sends request body as JSON string,
 * instead of a query string.
 */
json?: boolean,

/**
 * When sending streams, this lets manually set the Content-Length header
 * --if the stream's bytecount is known beforehand--,
 * preventing ECONNRESET (socket hang up) errors on some servers that misbehave
 * when receiving payloads of unknown size.
 * Set it to 0 and Needle will get and set the stream's length,
 * or leave unset for the default behavior,
 * which is no Content-Length header for stream payloads.
 */
stream_length?: number,

/**
 * Builds and sets a Cookie header from a { key: 'value' } object.
 */
cookies?: core$Cookies,

/**
 * If true, sets 'Accept-Encoding' header to 'gzip,deflate',
 * and inflates content if zipped.
 * Defaults to false.
 */
compressed?: boolean,

/**
 * For HTTP basic auth.
 */
username?: string,

/**
 * For HTTP basic auth. Requires username to be passed, but is optional.
 */
password?: string,

/**
 * Sets 'Accept' HTTP header. Defaults to &#x2a;&#x2f;&#x2a;.
 */
accept?: string,

/**
 * Sets 'Connection' HTTP header.
 * Not set by default, unless running Node < 0.11.4
 * in which case it defaults to close.
 */
connection?: string,

/**
 * Sets the 'User-Agent' HTTP header.
 * Defaults to Needle/{version} (Node.js {node_version}).
 */
user_agent?: string,

/**
 * Sets the 'Content-Type' header.
 * Unset by default, unless you're sending data
 * in which case it's set accordingly to whatever is being sent
 * (application/x-www-form-urlencoded, application/json or multipart/form-data).
 * That is, of course, unless the option is passed,
 * either here or through options.headers.
 */
content_type?: string
} 

declare interface core$ResponseOptions {

/**
 * Whether to decode the text responses to UTF-8,
 * if Content-Type header shows a different charset. Defaults to true.
 */
decode_response?: boolean,

/**
 * Alias for decode_response
 */
decode?: $ElementType<core$ResponseOptions, "decode_response">,

/**
 * Whether to parse XML or JSON response bodies automagically.
 * Defaults to true.
 * You can also set this to 'xml' or 'json' in which case Needle
 * will only parse the response if the content type matches.
 */
parse_response?: boolean | "json" | "xml",

/**
 * Alias for parse_response
 */
parse?: $ElementType<core$ResponseOptions, "parse_response">,

/**
 * Whether to parse response’s Set-Cookie header.
 * Defaults to true.
 * If parsed, response cookies will be available at resp.cookies.
 */
parse_cookies?: boolean,

/**
 * Dump response output to file.
 * This occurs after parsing and charset decoding is done.
 */
output?: string
} 

declare interface core$RedirectOptions {

/**
 * Sends the cookies received in the set-cookie header
 * as part of the following request.
 * false by default.
 */
follow_set_cookie?: boolean,

/**
 * Sets the 'Referer' header to the requested URI
 * when following a redirect.
 * false by default.
 */
follow_set_referer?: boolean,

/**
 * If enabled, resends the request using the original verb
 * instead of being rewritten to get with no data.
 * false by default.
 */
follow_keep_method?: boolean,

/**
 * When true, Needle will only follow redirects that point to the same host
 * as the original request.
 * false by default.
 */
follow_if_same_host?: boolean,

/**
 * When true, Needle will only follow redirects that point to the same protocol
 * as the original request.
 * false by default.
 */
follow_if_same_protocol?: boolean
} 

declare interface core$KeyValue {
[key: string]: any
} 

declare type core$BodyData = Buffer
| core$KeyValue
| NodeJS.core$ReadableStream
| string
| null;
	
/**
 * Calling needle() directly returns a Promise.
 * 
 * Since needle 2.0
 * @param method Designates an HTTP verb for the request.
 */
declare function needle(
method: core$core$NeedleReadonlyHttpVerbs,
url: string,
options?: core$core$NeedleOptions): Promise<core$core$NeedleResponse>

	
/**
 * Calling needle() directly returns a Promise.
 * 
 * Since needle 2.0
 * @param method Designates an HTTP verb for the request.
 * @param data May be null when issuing an HTTP DELETE request, but you need to explicity pass it.
 */
declare function needle(
method: core$core$NeedleHttpVerbs,
url: string,
data: core$core$BodyData,
options?: core$core$NeedleOptions): Promise<core$core$NeedleResponse>

	
      declare var npm$namespace$needle: {
        defaults: typeof needle$defaults,
head: typeof needle$head,
get: typeof needle$get,
post: typeof needle$post,
put: typeof needle$put,
patch: typeof needle$patch,
deleteFunc: typeof needle$deleteFunc,
request: typeof needle$request,
        
      }
declare type needle$BodyData = Buffer
| core$KeyValue
| NodeJS.core$ReadableStream
| string
| null;

declare type needle$NeedleCallback = (error: Error | null, response: core$NeedleResponse, body: any) => void;

declare type needle$NeedleHttpVerbs = core$NeedleReadonlyHttpVerbs | core$NeedleReadWriteHttpVerbs;

declare type needle$NeedleOptions = core$RequestOptions & core$ResponseOptions & core$RedirectOptions & https.core$RequestOptions;

declare type needle$NeedleResponse = {
body: any,
raw: Buffer,
bytes: number,
cookies?: core$Cookies,
"NO PRINT IMPLEMENTED: function Object() { [native code] }"
} & http.IncomingMessage


declare type needle$ReadableStream = NodeJS.needle$ReadableStream;


/**
 * Lets override the defaults for all future requests.
 */
declare export function needle$defaults(options: needle$NeedleOptions): needle$NeedleOptions



/**
 * Issues an HTTP HEAD request.
 */
declare export function needle$head(url: string, callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP HEAD request.
 */
declare export function needle$head(
url: string,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP GET request.
 */
declare export function needle$get(url: string, callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP GET request.
 */
declare export function needle$get(
url: string,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP POST request.
 */
declare export function needle$post(
url: string,
data: needle$BodyData,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP POST request.
 */
declare export function needle$post(
url: string,
data: needle$BodyData,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP PUT request.
 */
declare export function needle$put(
url: string,
data: needle$BodyData,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP PUT request.
 */
declare export function needle$put(
url: string,
data: needle$BodyData,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Same behaviour as PUT.
 */
declare export function needle$patch(
url: string,
data: needle$BodyData,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Same behaviour as PUT.
 */
declare export function needle$patch(
url: string,
data: needle$BodyData,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP DELETE request.
 */
declare function needle$deleteFunc(
url: string,
data: needle$BodyData,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Issues an HTTP DELETE request.
 */
declare function needle$deleteFunc(
url: string,
data: needle$BodyData,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream


declare export {
          delete
        }



/**
 * Generic request.
 * This not only allows for flexibility, but also lets you perform a GET request with data,
 * in which case will be appended to the request as a query string,
 * unless you pass a json: true option.
 * @param method Designates an HTTP verb for the request.
 */
declare export function needle$request(
method: needle$NeedleHttpVerbs,
url: string,
data: needle$BodyData,
callback?: needle$NeedleCallback): needle$ReadableStream



/**
 * Generic request.
 * This not only allows for flexibility, but also lets you perform a GET request with data,
 * in which case will be appended to the request as a query string,
 * unless you pass a json: true option.
 * @param method Designates an HTTP verb for the request.
 */
declare export function needle$request(
method: needle$NeedleHttpVerbs,
url: string,
data: needle$BodyData,
options?: needle$NeedleOptions,
callback?: needle$NeedleCallback): needle$ReadableStream

	declare module.exports: typeof needle

    }
