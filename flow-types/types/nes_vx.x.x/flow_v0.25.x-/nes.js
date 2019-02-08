import { Plugin } from "hapi";
declare module "hapi" {
  declare interface Server {
    broadcast(message: any, options?: nes.ServerBroadcastOptions): void;
    subscription(path: string, options?: nes.ServerSubscriptionOptions): void;
    publish(
      path: string,
      message: any,
      options?: nes.ServerPublishOptions
    ): void;
    eachSocket(
      each: (socket: nes.Socket) => void,
      options?: nes.ServerEachSocketOptions
    ): void;
  }
  declare interface Request {
    socket: nes.Socket;
  }
}
declare module "nes" {
  declare interface SocketAuthObject {
    isAuthenticated: boolean;
    credentials: any;
    artifacts: any;
  }
  declare interface ServerBroadcastOptions {
    user: any;
  }
  declare interface ServerSubscriptionOptionsFilterOptions {
    socket: Socket;
    credentials?: any;
    params?: any;
  }
  declare interface ServerSubscriptionOptionsAuthOptions {
    mode?: "required" | "optional";
    scope?: string | string[];
    entity?: "user" | "app" | "any";
    index?: boolean;
  }
  declare export type ServerOnSubscribeWithParams = (
    socket: Socket,
    path: string,
    params: any
  ) => Promise<any>;
  declare export type ServerOnSubscribeWithoutParams = (
    socket: Socket,
    path: string
  ) => Promise<any>;
  declare export type ServerOnSubscribe =
    | ServerOnSubscribeWithParams
    | ServerOnSubscribeWithoutParams;
  declare export type ServerOnUnSubscribeWithParams = (
    socket: Socket,
    path: string,
    params: any
  ) => void;
  declare export type ServerOnUnSubscribeWithoutParams = (
    socket: Socket,
    path: string
  ) => void;
  declare export type ServerOnUnSubscribe =
    | ServerOnUnSubscribeWithParams
    | ServerOnUnSubscribeWithoutParams;
  declare interface ServerSubscriptionOptions {
    filter?: (
      path: string,
      message: any,
      options: ServerSubscriptionOptionsFilterOptions,
      next: (isMatch: boolean, override?: any) => void
    ) => void;
    auth?: boolean | ServerSubscriptionOptionsAuthOptions;
    onSubscribe?: ServerOnSubscribe;
    onUnsubscribe?: ServerOnUnSubscribe;
  }
  declare interface ServerPublishOptions {
    internal?: any;
    user?: any;
  }
  declare interface ServerEachSocketOptions {
    subscription?: string;
    user?: any;
  }
  declare interface Socket {
    id: string;
    app: Object;
    auth: nes.SocketAuthObject;
    disconnect(): Promise<any>;
    send(message: any): Promise<any>;
    publish(path: string, message: any): Promise<any>;
    revoke(path: string, message: any): Promise<any>;
  }

  /**
   * TODO (if possible) use a drier, more robust way of doing this that
   * allows for:
   *       * the export to have be of type Hapi.PluginFunction whilst
   *       * also exposing the Client type
   *       * exporting the NesClient as the Client class without having to
   *           duplicate the constructor definition
   *       * and all the type exports from the NesClient namespace (Handler,
   *           ClientOptions, ClientConnectOptions, ClientRequestOptions,
   *           ClientSubscribeFlags)
   */
  declare type Client = {} & NesClient;

  declare type Handler = {} & NesClient.Handler;

  declare type ClientOptions = {} & NesClient.ClientOptions;

  declare type ClientConnectOptions = {} & NesClient.ClientConnectOptions;

  declare type ClientRequestOptions = {} & NesClient.ClientRequestOptions;

  declare type ClientSubscribeFlags = {} & NesClient.ClientSubscribeFlags;
}
declare interface NesClassExports {
  Client: {
    new(url: string, options?: NesClient.ClientOptions): NesClient
  };
}
declare var nes: NesClassExports & Plugin<{}>;
declare export default typeof nes;
