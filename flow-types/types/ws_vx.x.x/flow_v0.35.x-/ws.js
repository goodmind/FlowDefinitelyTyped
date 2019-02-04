declare module 'ws' {
        import typeof * as events from 'events';

	import typeof * as http from 'http';

	import typeof * as https from 'https';

	import typeof * as net from 'net';

	declare class WebSocket mixins events.EventEmitter {
static CONNECTING: number;
static OPEN: number;
static CLOSING: number;
static CLOSED: number;
binaryType: string;
bufferedAmount: number;
extensions: string;
protocol: string;
readyState: number;
url: string;
CONNECTING: number;
OPEN: number;
CLOSING: number;
CLOSED: number;
onopen: (event: {
target: WebSocket
}) => void;
onerror: (
event: {
error: any,
message: string,
type: string,
target: WebSocket
}) => void;
onclose: (
event: {
wasClean: boolean,
code: number,
reason: string,
target: WebSocket
}) => void;
onmessage: (
event: {
data: WebSocket$WebSocket$Data,
type: string,
target: WebSocket
}) => void;
constructor(address: string, options?: WebSocket$WebSocket$ClientOptions): this;
constructor(address: string, protocols?: string | string[], options?: WebSocket$WebSocket$ClientOptions): this;
close(code?: number, data?: string): void;
ping(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
pong(data?: any, mask?: boolean, cb?: (err: Error) => void): void;
send(data: any, cb?: (err?: Error) => void): void;
send(
data: any,
options: {
mask?: boolean,
binary?: boolean,
compress?: boolean,
fin?: boolean
},
cb?: (err?: Error) => void): void;
terminate(): void;
addEventListener(
method: "message",
cb?: (event: {
data: any,
type: string,
target: WebSocket
}) => void): void;
addEventListener(
method: "close",
cb?: (
event: {
wasClean: boolean,
code: number,
reason: string,
target: WebSocket
}) => void): void;
addEventListener(
method: "error",
cb?: (event: {
error: any,
message: any,
type: string,
target: WebSocket
}) => void): void;
addEventListener(method: "open", cb?: (event: {
target: WebSocket
}) => void): void;
addEventListener(method: string, listener?: () => void): void;
removeEventListener(
method: "message",
cb?: (event: {
data: any,
type: string,
target: WebSocket
}) => void): void;
removeEventListener(
method: "close",
cb?: (
event: {
wasClean: boolean,
code: number,
reason: string,
target: WebSocket
}) => void): void;
removeEventListener(
method: "error",
cb?: (event: {
error: any,
message: any,
type: string,
target: WebSocket
}) => void): void;
removeEventListener(method: "open", cb?: (event: {
target: WebSocket
}) => void): void;
removeEventListener(method: string, listener?: () => void): void;
on(event: "close", listener: (code: number, reason: string) => void): this;
on(event: "error", listener: (err: Error) => void): this;
on(event: "upgrade", listener: (request: http.IncomingMessage) => void): this;
on(event: "message", listener: (data: WebSocket$WebSocket$Data) => void): this;
on(event: "open", listener: () => void): this;
on(event: "ping" | "pong", listener: (data: Buffer) => void): this;
on(
event: "unexpected-response",
listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
addListener(event: "close", listener: (code: number, message: string) => void): this;
addListener(event: "error", listener: (err: Error) => void): this;
addListener(event: "upgrade", listener: (request: http.IncomingMessage) => void): this;
addListener(event: "message", listener: (data: WebSocket$WebSocket$Data) => void): this;
addListener(event: "open", listener: () => void): this;
addListener(event: "ping" | "pong", listener: (data: Buffer) => void): this;
addListener(
event: "unexpected-response",
listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this;
removeListener(event: "close", listener: (code: number, message: string) => void): this;
removeListener(event: "error", listener: (err: Error) => void): this;
removeListener(event: "upgrade", listener: (request: http.IncomingMessage) => void): this;
removeListener(event: "message", listener: (data: WebSocket$WebSocket$Data) => void): this;
removeListener(event: "open", listener: () => void): this;
removeListener(event: "ping" | "pong", listener: (data: Buffer) => void): this;
removeListener(
event: "unexpected-response",
listener: (request: http.ClientRequest, response: http.IncomingMessage) => void): this;
removeListener(event: string | Symbol, listener: (...args: any[]) => void): this
}
	
/**
 * Data represents the message payload received over the WebSocket.
 */
declare type WebSocket$Data = string | Buffer | ArrayBuffer | Buffer[];


/**
 * CertMeta represents the accepted types for certificate & key data.
 */
declare type WebSocket$CertMeta = string | string[] | Buffer | Buffer[];


/**
 * VerifyClientCallbackSync is a synchronous callback used to inspect the
 * incoming message. The return value (boolean) of the function determines
 * whether or not to accept the handshake.
 */
declare type WebSocket$VerifyClientCallbackSync = (
info: {
origin: string,
secure: boolean,
req: http.IncomingMessage
}) => boolean;


/**
 * VerifyClientCallbackAsync is an asynchronous callback used to inspect the
 * incoming message. The return value (boolean) of the function determines
 * whether or not to accept the handshake.
 */
declare type WebSocket$VerifyClientCallbackAsync = (
info: {
origin: string,
secure: boolean,
req: http.IncomingMessage
},
callback: (
res: boolean,
code?: number,
message?: string,
headers?: http.OutgoingHttpHeaders) => void) => void;

declare interface WebSocket$ClientOptions {
protocol?: string,
handshakeTimeout?: number,
perMessageDeflate?: boolean | WebSocket$PerMessageDeflateOptions,
localAddress?: string,
protocolVersion?: number,
headers?: {
[key: string]: string
},
origin?: string,
agent?: http.Agent,
host?: string,
family?: number,
checkServerIdentity(servername: string, cert: WebSocket$CertMeta): boolean,
rejectUnauthorized?: boolean,
passphrase?: string,
ciphers?: string,
cert?: WebSocket$CertMeta,
key?: WebSocket$CertMeta,
pfx?: string | Buffer,
ca?: WebSocket$CertMeta,
maxPayload?: number
} 

declare interface WebSocket$PerMessageDeflateOptions {
serverNoContextTakeover?: boolean,
clientNoContextTakeover?: boolean,
serverMaxWindowBits?: number,
clientMaxWindowBits?: number,
zlibDeflateOptions?: {
flush?: number,
finishFlush?: number,
chunkSize?: number,
windowBits?: number,
level?: number,
memLevel?: number,
strategy?: number,
dictionary?: Buffer | Buffer[] | DataView,
info?: boolean
},
threshold?: number,
concurrencyLimit?: number
} 

declare interface WebSocket$ServerOptions {
host?: string,
port?: number,
backlog?: number,
server?: http.WebSocket$Server | https.WebSocket$Server,
verifyClient?: WebSocket$VerifyClientCallbackAsync | WebSocket$VerifyClientCallbackSync,
handleProtocols?: any,
path?: string,
noServer?: boolean,
clientTracking?: boolean,
perMessageDeflate?: boolean | WebSocket$PerMessageDeflateOptions,
maxPayload?: number
} 

declare interface WebSocket$AddressInfo {
address: string,
family: string,
port: number
} 

declare class WebSocket$Server mixins events.EventEmitter {
options: WebSocket$ServerOptions;
path: string;
clients: Set<WebSocket>;
constructor(options?: WebSocket$ServerOptions, callback?: () => void): this;
address(): WebSocket$AddressInfo | string;
close(cb?: (err?: Error) => void): void;
handleUpgrade(
request: http.IncomingMessage,
socket: net.Socket,
upgradeHead: Buffer,
callback: (client: WebSocket) => void): void;
shouldHandle(request: http.IncomingMessage): boolean;
on(
event: "connection",
cb: (socket: WebSocket, request: http.IncomingMessage) => void): this;
on(event: "error", cb: (error: Error) => void): this;
on(
event: "headers",
cb: (headers: string[], request: http.IncomingMessage) => void): this;
on(event: "listening", cb: () => void): this;
on(event: string | Symbol, listener: (...args: any[]) => void): this;
addListener(event: "connection", cb: (client: WebSocket) => void): this;
addListener(event: "error", cb: (err: Error) => void): this;
addListener(
event: "headers",
cb: (headers: string[], request: http.IncomingMessage) => void): this;
addListener(event: "listening", cb: () => void): this;
addListener(event: string | Symbol, listener: (...args: any[]) => void): this
}
	declare module.exports: typeof WebSocket

    }
