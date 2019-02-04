declare module 'json-rpc-ws' {
        import typeof * as ws from 'ws';

	declare export function createServer<TConnection: Connection>(): Server<TConnection>

	declare export function createClient<TConnection: Connection>(): Client<TConnection>

	declare export class Server<TConnection: Connection> mixins Base<TConnection> {
constructor(): this;

/**
 * Start the server
 */
start(options?: ws.ServerOptions, callback?: () => void): void;
server: ws.Server;

/**
 * Stop the server
 */
stop(): void
}
	declare export class Client<TConnection: Connection> mixins Base<TConnection> {
constructor(WebSocket: ws, browser?: boolean): this;

/**
 * Connect to a json-rpc-ws server
 */
connect(url: string, connected: () => void): void;

/**
 * Test whether we have a connection or not
 */
isConnected(): boolean;

/**
 * Return the current connection (there can be only one)
 */
getConnection(): TConnection;

/**
 * Close the current connection
 */
disconnect(callback: () => void): void
}
	declare export class Base<TConnection: Connection>  {

/**
 * Add a handler function for a given method
 */
expose<ParamType, ParamCallbackType>(
eventName: string,
handler: Handler<TConnection, ParamType, ParamCallbackType>): void;

/**
 * Send a method request through a specific connection
 */
send<ParamType, ParamCallbackType>(
eventName: string,
params?: ParamType,
callback?: ReplyCallback<ParamCallbackType>): void;
send<ParamType>(eventName: string, params: ParamType): void;

/**
 * Connected event handler
 */
connected(socket: ws): void;

/**
 * Disconnected event handler
 */
disconnected(connection: TConnection): void;

/**
 * Test if a handler exists for a given method
 */
hasHandler(method: string): boolean;

/**
 * Get handler for a given method
 */
getHandler<ParamType, ParamCallbackType>(
method: string): Handler<TConnection, ParamType, ParamCallbackType>;

/**
 * Get a connection by id
 */
getConnection(id: string): Connection;

/**
 * Shut down all existing connections
 */
hangup(): void
}
	declare export interface Connection {
id: string,
socket: ws,
parent: Base<any>,
responseHandlers: {
[id: string]: ReplyCallback<any>
},
sendRaw<ParamType>(payload: Payload<ParamType>): void,
processPayload<ParamType>(payload: Payload<ParamType>): void,
sendResult(id: string, error?: any, result?: any): void,
sendMethod<ParamType, ParamCallbackType>(
method: string,
params: ParamType,
callback?: ReplyCallback<ParamCallbackType>): void,
sendError(error: any, id?: string, data?: any): void,
close(error?: any): void,
hangup(callback?: () => void): void,
message(data: any): void
} 
	declare export interface Payload<ParamType> {
jsonrpc?: "2.0",
id: string,
method: string,
params?: ParamType,
result?: any,
error?: any
} 
	declare export type Handler<TConnection: Connection, ParamType, ParamCallbackType> = (params: ParamType, reply: ReplyCallback<ParamCallbackType>) => void;
	declare export type ReplyCallback<ParamType> = (error: any, params?: ParamType) => void;
	
/**
 * Returns a valid jsonrpc2.0 error reply
 */
declare export function Errors(type: string, id: string | number | null, data: any): any | null

    }
