declare module 'pusher-js' {
        declare interface pusher$PusherStatic {
logToConsole: boolean,
log: (msg: string) => void,
new (apiKey: string, config?: pusher$Config): pusher$Pusher
} 

declare type pusher$Pusher = {
channel(name: string): pusher$Channel,
allChannels(): pusher$Channel[],
connect(): void,
disconnect(): void,
subscribe(name: string): pusher$Channel,
subscribeAll(): void,
unsubscribe(name: string): void,
isEncrypted(): boolean,
key: string,
config: pusher$Config,
channels: any,
global_emitter: pusher$EventsDispatcher,
sessionID: number,
timeline: any,
connection: pusher$ConnectionManager
} & pusher$EventsDispatcher


declare interface pusher$Config {

/**
 * Forces the connection to use encrypted transports.
 */
encrypted?: boolean,

/**
 * Endpoint on your server that will return the authentication signature needed for private channels.
 */
authEndpoint?: string,

/**
 * Defines how the authentication endpoint, defined using authEndpoint, will be called.
 * There are two options available: ajax and jsonp.
 */
authTransport?: "ajax" | "jsonp",

/**
 * Allows passing additional data to authorizers. Supports query string params and headers (AJAX only).
 * For example, following will pass foo=bar via the query string and baz: boo via headers:
 */
auth?: pusher$AuthConfig,

/**
 * If you need custom authorization behavior you can provide your own authorizer function as follows:
 */
authorizer?: pusher$Authorizer,

/**
 * Allows connecting to a different datacenter by setting up correct hostnames and ports for the connection.
 */
cluster?: string,

/**
 * Disables stats collection, so that connection metrics are not submitted to Pusher’s servers. These stats
 * are used for internal monitoring only and they do not affect the account stats.
 */
disableStats?: boolean,

/**
 * Specifies which transports should be used by Pusher to establish a connection.
 * Useful for applications running in controlled, well-behaving environments.
 * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
 * Additional transports may be added in the future and without adding them to this list, they will be disabled.
 */
enabledTransports?: pusher$Transport[],

/**
 * Specified which transports must not be used by Pusher to establish a connection.
 * This settings overwrites transports whitelisted via the enabledTransports options.
 * Available transports: ws, wss, xhr_streaming, xhr_polling, sockjs.
 * Additional transports may be added in the future and without adding them to this list, they will be enabled.
 */
disabledTransports?: pusher$Transport[],

/**
 * Ignores null origin checks for HTTP fallbacks. Use with care, it should be disabled only if necessary (i.e. PhoneGap).
 */
ignoreNullOrigin?: boolean,

/**
 * After this time (in miliseconds) without any messages received from the server,
 * a ping message will be sent to check if the connection is still working.
 * Default value is is supplied by the server, low values will result in unnecessary traffic.
 */
activityTimeout?: number,

/**
 * Time before the connection is terminated after sending a ping message.
 * Default is 30000 (30s). Low values will cause false disconnections, if latency is high.
 */
pongTimeout?: number,
wsHost?: string,
wsPath?: string,
wsPort?: number,
wssPort?: number,
httpHost?: string,
httpPort?: number,
httpsPort?: number
} 

declare type pusher$Transport = "ws"
| "wss"
| "xhr_streaming"
| "xhr_polling"
| "sockjs";

declare interface pusher$AuthConfig {
params?: {
[key: string]: any
},
headers?: {
[key: string]: any
}
} 

declare interface pusher$AuthInfo {
auth: string,
channel_data?: string
} 

declare type pusher$Authorizer = (
channel: pusher$Channel,
options: pusher$Config) => {
authorize: (
socketId: string,
callback: (errored: boolean, authInfo?: pusher$AuthInfo) => void) => void
};

declare type pusher$EventCallback = (context: any, data: any) => void;

declare interface pusher$EventsDispatcher {
bind(eventName: string, callback: pusher$EventCallback, context?: any): this,
bind_global(callback: pusher$EventCallback): this,
unbind(
eventName?: string | null,
callback?: pusher$EventCallback | null,
context?: any): this,
unbind_global(callback?: pusher$EventCallback): this,
unbind_all(): this,
emit(eventName: string, data?: any): this
} 

declare type pusher$Channel = {

/**
 * Triggers an event
 */
trigger(eventName: string, data?: any): boolean,
pusher: pusher$Pusher,
name: string,
subscribed: boolean,

/**
 * Authenticates the connection as a member of the channel.
 */
authorize(socketId: string, callback: (data: any) => void): void
} & pusher$EventsDispatcher


declare type pusher$ConnectionManager = {
key: string,
options: any,
state: string,
socket_id: string,
connection: any,
encrypted: boolean,
timeline: any,
connectionCallbacks: {
message: (message: string) => void,
ping: () => void,
activity: () => void,
error: (error: any) => void,
closed: () => void
},
errorCallbacks: {
ssl_only: () => void,
refused: () => void,
backoff: () => void,
retry: () => void
},
handshakeCallbacks: {
ssl_only: () => void,
refused: () => void,
backoff: () => void,
retry: () => void,
connected: (handshake: any) => void
},

/**
 * Establishes a connection to Pusher.
 * 
 * Does nothing when connection is already established. See top-level doc
 * to find events emitted on connection attempts.
 */
connect(): void,

/**
 * Sends raw data.
 */
send(data: string): boolean,

/**
 * Sends an event.
 */
send_event(name: string, data: string, channel: string): boolean,

/**
 * Closes the connection.
 */
disconnect(): void,
isEncrypted(): boolean
} & pusher$EventsDispatcher


declare type pusher$PresenceChannel<T> = {
members: pusher$Members<T>
} & pusher$Channel


declare interface pusher$Members<T> {

/**
 * Returns member's info for given id.
 * 
 * Resulting object containts two fields - id and info.
 */
get(id: string): null | T,

/**
 * Calls back for each member in unspecified order.
 */
each(callback: (member: pusher$Member<T>) => void): void,
members: {
[id: string]: pusher$Member<T>
},
count: number,
myID: string,
me: pusher$Member<T>
} 

declare interface pusher$Member<T> {
id: string,
info: T
} 
	declare var pusher: pusher$pusher$PusherStatic;
	declare module.exports: typeof pusher

    }
