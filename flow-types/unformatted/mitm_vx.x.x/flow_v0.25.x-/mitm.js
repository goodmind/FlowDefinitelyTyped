declare module 'mitm' {
        import typeof * as http from 'http';

	import typeof * as net from 'net';

	declare interface SocketOptions {
port: number,
host?: string,
localAddress?: string,
localPort?: string,
family?: number,
allowHalfOpen?: boolean
} 
	declare type BypassableSocket = {
bypass(): void
} & net.Socket

	declare type SocketConnectCallback = (socket: BypassableSocket, opts: SocketOptions) => void;
	declare type SocketConnectionCallback = (socket: net.Socket, opts: SocketOptions) => void;
	declare type HttpCallback = (request: http.IncomingMessage, response: http.ServerResponse) => void;
	declare type Event = "connect" | "connection" | "request";
	declare type Callback = SocketConnectCallback | SocketConnectionCallback | HttpCallback;
	declare interface Mitm {
disable(): void,
on(event: Event, callback: Callback): void,
on(event: "connect", callback: SocketConnectCallback): void,
on(event: "connection", callback: SocketConnectionCallback): void,
on(event: "request", callback: HttpCallback): void
} 
	declare function _(): Mitm

	declare export default typeof _

    }
