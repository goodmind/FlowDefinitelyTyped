declare module 'spdy' {
        import typeof * as http from 'http';

	import typeof * as https from 'https';

	
      declare var npm$namespace$agent: {
        create: typeof agent$create,
        
      }
declare class agent$Agent mixins https.agent$Agent {}

declare class agent$PlainAgent mixins http.agent$Agent {}

declare function agent$create(base: any, options: agent$AgentOptions): agent$Agent | agent$PlainAgent


declare type agent$AgentOptions = {
port?: number,
spdy?: {
plain?: boolean,
ssl?: boolean,
"x-forwarded-for"?: string,
protocol?: string,
protocols?: string[]
}
} & https.agent$AgentOptions

	declare export interface Handle {
create(options: {[key: string]: any}, stream: any, socket: socket$Socket): Handle,
getStream(callback?: (stream: any) => void): any,
assignSocket(socket: socket$Socket, options: {[key: string]: any}): void,
assignClientRequest(req: any): void,
assignRequest(req: any): void,
assignResponse(res: any): void,
emitRequest(): void,
emitResponse(status: any, headers: any): void
} 
	
      declare var npm$namespace$request: {
        onNewListener: typeof request$onNewListener,
        
      }
declare function request$onNewListener(type: string): void

	
      declare var npm$namespace$response: {
        writeHead: typeof response$writeHead,
end: typeof response$end,
        
      }
declare function response$writeHead(statusCode: number, reason: string, obj: {[key: string]: any}): void


declare function response$writeHead(statusCode: number, obj: {[key: string]: any}): void


declare function response$end(data: any, encoding: string, callback: () => void): void

	
      declare var npm$namespace$server: {
        create: typeof server$create,
        
      }
declare type server$Server = https.server$Server;

declare type server$PlainServer = http.server$Server;

declare type server$IncomingMessage = http.server$IncomingMessage;

declare type server$ServerResponse = {
push(filename: string, options: server$PushOptions): any
} & http.server$ServerResponse


declare function server$create(
base: any,
options: https.server$ServerOptions,
handler: (
request: server$IncomingMessage,
response: server$ServerResponse | http.server$ServerResponse) => void): server$Server


declare function server$create(
options: https.server$ServerOptions,
handler: (request: server$IncomingMessage, response: http.server$ServerResponse) => void): server$Server


declare function server$create(
handler: (
request: server$IncomingMessage,
response: server$ServerResponse | http.server$ServerResponse) => void): server$Server


declare type server$Protocol = "h2"
| "spdy/3.1"
| "spdy/3"
| "spdy/2"
| "http/1.1"
| "http/1.0";

declare interface server$PushOptions {
status?: number,
method?: string,
request?: any,
response?: any
} 

declare type server$ServerOptions = {
spdy?: {
protocols?: server$Protocol[],
plain?: boolean,
"x-forwarded-for"?: boolean,
connection?: {
windowSize?: number,
autoSpdy31?: boolean
}
}
} & https.server$ServerOptions

	declare interface socket$Socket {} 
	declare export type Agent = agent$agent$Agent;
	declare export type PlainAgent = agent$agent$PlainAgent;
	declare export type AgentOptions = agent$agent$AgentOptions;
	declare export type Socket = socket$socket$Socket;
	declare export type Server = server$server$Server;
	declare export type IncomingMessage = server$server$IncomingMessage;
	declare export type ServerRequest = server$server$IncomingMessage;
	declare export type ServerResponse = server$server$ServerResponse;
	declare export type PlainServer = server$server$PlainServer;
	declare export type ServerOptions = server$server$ServerOptions;
	declare export function createAgent(base: any, options: agent$AgentOptions): agent$Agent | agent$PlainAgent

	declare export function createAgent(options: agent$AgentOptions): agent$Agent | agent$PlainAgent

	declare export function createServer(
base: any,
options: server$ServerOptions,
handler: (request: server$IncomingMessage, response: http.server$ServerResponse) => void): server$Server

	declare export function createServer(
options: server$ServerOptions,
handler: (request: server$IncomingMessage, response: http.server$ServerResponse) => void): server$Server

	declare export function createServer(
handler: (request: server$IncomingMessage, response: http.server$ServerResponse) => void): server$Server

    }
