declare module 'sails.io.js' {
        declare export interface SailsIOJS$SDKInfo {
version?: string,
language?: string,
platform?: "browser" | "node",
versionString?: string
} 

declare export interface SailsIOJS$ClientSails {
url?: string,
autoConnect?: boolean,
headers?: {
[index: string]: string
},
transports?: Array<"websocket" | "polling">,
rejectUnauthorized?: boolean,
reconnection?: boolean,
reconnectionAttempts?: number,
reconnectionDelay?: number,
reconnectionDelayMax?: number,
useCORSRouteToGetCookie?: boolean,
query?: string,
path?: string,
environment?: "production" | string,
connect(url?: string, config?: SailsIOJS$ConnectConfig): SailsIOJS$Socket,
initialConnectionHeaders?: SailsIOJS$InitialConnectionHeaders,
strict?: boolean,
sdk?: SailsIOJS$SDKInfo
} 

declare export interface SailsIOJS$ConnectConfig {
initialConnectionHeaders?: SailsIOJS$InitialConnectionHeaders
} 

declare export interface SailsIOJS$InitialConnectionHeaders {
nosession?: boolean
} 

declare export interface SailsIOJS$Client {
socket: SailsIOJS$Socket,
sails: SailsIOJS$ClientSails
} 

declare export interface SailsIOJS$Headers {
[index: string]: string
} 

declare export interface SailsIOJS$RequestOptions {
url: string,
method?: string,
headers?: SailsIOJS$Headers,
params?: any,
data?: any
} 

declare export interface SailsIOJS$JWR {
headers: SailsIOJS$Headers,
statusCode: number,
body: any,
error?: Error,
function toString() { [native code] }: () => string,
toPOJO: () => {
body: any,
headers: SailsIOJS$Headers,
statusCode: number
},
pipe: () => Error
} 

declare export type SailsIOJS$RequestCallback = {
(body: any, jwr: SailsIOJS$JWR): any
};

declare export type SailsIOJS$Data = Object;

declare export interface SailsIOJS$Socket {
get(url: string, data?: SailsIOJS$Data): void,
get(url: string, cb?: SailsIOJS$RequestCallback): void,
get(url: string, data: SailsIOJS$Data, cb: SailsIOJS$RequestCallback): void,
post(url: string, data?: SailsIOJS$Data): void,
post(url: string, cb?: SailsIOJS$RequestCallback): void,
post(url: string, data: SailsIOJS$Data, cb: SailsIOJS$RequestCallback): void,
put(url: string, data?: SailsIOJS$Data): void,
put(url: string, cb?: SailsIOJS$RequestCallback): void,
put(url: string, data: SailsIOJS$Data, cb: SailsIOJS$RequestCallback): void,
delete(url: string, data?: SailsIOJS$Data): void,
delete(url: string, cb?: SailsIOJS$RequestCallback): void,
delete(url: string, data: SailsIOJS$Data, cb: SailsIOJS$RequestCallback): void,
request(options: SailsIOJS$RequestOptions, cb?: SailsIOJS$RequestCallback): void,
on(event: string, cb: (...args: Array<any>) => any): SailsIOJS$Socket,
on(event: "connect", cb: () => any): SailsIOJS$Socket,
on(event: "disconnect", cb: () => any): SailsIOJS$Socket,
on(event: "reconnecting", cb: (numAttempts: number) => any): SailsIOJS$Socket,
on(
event: "reconnect",
cb: (transport: string, numAttempts: number) => any): SailsIOJS$Socket,
on(event: "error", cb: (err: any) => any): SailsIOJS$Socket,
off(event: string, cb: () => any): SailsIOJS$Socket,
removeAllListeners(): SailsIOJS$Socket,
isConnecting(): boolean,
isConnected(): boolean,
reconnect(): SailsIOJS$Socket,
mightBeAboutToAutoConnect(): boolean,
replay(): SailsIOJS$Socket
} 
	declare function SailsIOJS(client: SocketIOClientStatic): SailsIOJS$SailsIOJS$Client

	declare module.exports: typeof SailsIOJS

    }
