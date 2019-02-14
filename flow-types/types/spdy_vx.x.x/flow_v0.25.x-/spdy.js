declare module "spdy" {
  import typeof * as http from "http";

  import typeof * as https from "https";

  declare var npm$namespace$agent: {
    create: typeof agent$create,

    Agent: typeof agent$Agent,
    PlainAgent: typeof agent$PlainAgent
  };
  declare class agent$Agent mixins https.Agent {}

  declare class agent$PlainAgent mixins http.Agent {}

  declare function agent$create(
    base: any,
    options: agent$AgentOptions
  ): agent$Agent | agent$PlainAgent;

  declare type agent$AgentOptions = {
    port?: number,
    spdy?: {
      plain?: boolean,
      ssl?: boolean,
      "x-forwarded-for"?: string,
      protocol?: string,
      protocols?: string[]
    }
  } & https.AgentOptions;

  declare export interface Handle {
    create(
      options: { [key: string]: any },
      stream: any,
      socket: socket$Socket
    ): Handle;
    getStream(callback?: (stream: any) => void): any;
    assignSocket(socket: socket$Socket, options: { [key: string]: any }): void;
    assignClientRequest(req: any): void;
    assignRequest(req: any): void;
    assignResponse(res: any): void;
    emitRequest(): void;
    emitResponse(status: any, headers: any): void;
  }

  declare var npm$namespace$request: {
    onNewListener: typeof request$onNewListener
  };
  declare function request$onNewListener(type: string): void;

  declare var npm$namespace$response: {
    writeHead: typeof response$writeHead,
    end: typeof response$end
  };
  declare function response$writeHead(
    statusCode: number,
    reason: string,
    obj: { [key: string]: any }
  ): void;

  declare function response$writeHead(
    statusCode: number,
    obj: { [key: string]: any }
  ): void;

  declare function response$end(
    data: any,
    encoding: string,
    callback: () => void
  ): void;

  declare var npm$namespace$server: {
    create: typeof server$create
  };
  declare type server$Server = https.Server;

  declare type server$PlainServer = http.Server;

  declare type server$IncomingMessage = http.IncomingMessage;

  declare type server$ServerResponse = {
    push(filename: string, options: server$PushOptions): any
  } & http.ServerResponse;

  declare function server$create(
    base: any,
    options: https.ServerOptions,
    handler: (
      request: server$IncomingMessage,
      response: server$ServerResponse | http.ServerResponse
    ) => void
  ): server$Server;

  declare function server$create(
    options: https.ServerOptions,
    handler: (
      request: server$IncomingMessage,
      response: http.ServerResponse
    ) => void
  ): server$Server;

  declare function server$create(
    handler: (
      request: server$IncomingMessage,
      response: server$ServerResponse | http.ServerResponse
    ) => void
  ): server$Server;

  declare type server$Protocol =
    | "h2"
    | "spdy/3.1"
    | "spdy/3"
    | "spdy/2"
    | "http/1.1"
    | "http/1.0";

  declare interface server$PushOptions {
    status?: number;
    method?: string;
    request?: any;
    response?: any;
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
  } & https.ServerOptions;

  declare interface socket$Socket {}
  declare export type Agent = agent$Agent;
  declare export type PlainAgent = agent$PlainAgent;
  declare export type AgentOptions = agent$AgentOptions;
  declare export type Socket = socket$Socket;
  declare export type Server = server$Server;
  declare export type IncomingMessage = server$IncomingMessage;
  declare export type ServerRequest = server$IncomingMessage;
  declare export type ServerResponse = server$ServerResponse;
  declare export type PlainServer = server$PlainServer;
  declare export type ServerOptions = server$ServerOptions;
  declare export function createAgent(
    base: any,
    options: agent$AgentOptions
  ): agent$Agent | agent$PlainAgent;

  declare export function createAgent(
    options: agent$AgentOptions
  ): agent$Agent | agent$PlainAgent;

  declare export function createServer(
    base: any,
    options: server$ServerOptions,
    handler: (
      request: server$IncomingMessage,
      response: http.ServerResponse
    ) => void
  ): server$Server;

  declare export function createServer(
    options: server$ServerOptions,
    handler: (
      request: server$IncomingMessage,
      response: http.ServerResponse
    ) => void
  ): server$Server;

  declare export function createServer(
    handler: (
      request: server$IncomingMessage,
      response: http.ServerResponse
    ) => void
  ): server$Server;
}
