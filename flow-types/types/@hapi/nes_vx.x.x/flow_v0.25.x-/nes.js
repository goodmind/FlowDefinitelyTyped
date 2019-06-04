declare module "@hapi/hapi" {
  declare interface Request {
    socket: nes$Socket;
  }
  declare interface Server {
    broadcast(message: any, options?: nes$ServerBroadcastOptions): void;
    subscription(path: string, options?: nes$ServerSubscriptionOptions): void;
    publish(
      path: string,
      message: any,
      options?: nes$ServerPublishOptions
    ): void;
    eachSocket(
      each: (socket: nes$Socket) => void,
      options?: nes$ServerEachSocketOptions
    ): void;
  }
}
declare module "@hapi/nes" {
  import type { Plugin } from "@hapi/hapi";

  import typeof * as NesClient from "@hapi/nes/lib/client";

  declare interface nes$SocketAuthObject {
    isAuthenticated: boolean;
    credentials: any;
    artifacts: any;
  }

  declare interface nes$ServerBroadcastOptions {
    user: any;
  }

  declare interface nes$ServerSubscriptionOptionsFilterOptions {
    socket: nes$Socket;
    credentials?: any;
    params?: any;
  }

  declare interface nes$ServerSubscriptionOptionsAuthOptions {
    mode?: "required" | "optional";
    scope?: string | string[];
    entity?: "user" | "app" | "any";
    index?: boolean;
  }

  declare export type nes$ServerOnSubscribeWithParams = (
    socket: nes$Socket,
    path: string,
    params: any
  ) => Promise<any>;

  declare export type nes$ServerOnSubscribeWithoutParams = (
    socket: nes$Socket,
    path: string
  ) => Promise<any>;

  declare export type nes$ServerOnSubscribe =
    | nes$ServerOnSubscribeWithParams
    | nes$ServerOnSubscribeWithoutParams;

  declare export type nes$ServerOnUnSubscribeWithParams = (
    socket: nes$Socket,
    path: string,
    params: any
  ) => void;

  declare export type nes$ServerOnUnSubscribeWithoutParams = (
    socket: nes$Socket,
    path: string
  ) => void;

  declare export type nes$ServerOnUnSubscribe =
    | nes$ServerOnUnSubscribeWithParams
    | nes$ServerOnUnSubscribeWithoutParams;

  declare interface nes$ServerSubscriptionOptions {
    filter?: (
      path: string,
      message: any,
      options: nes$ServerSubscriptionOptionsFilterOptions,
      next: (isMatch: boolean, override?: any) => void
    ) => void;
    auth?: boolean | nes$ServerSubscriptionOptionsAuthOptions;
    onSubscribe?: nes$ServerOnSubscribe;
    onUnsubscribe?: nes$ServerOnUnSubscribe;
  }

  declare interface nes$ServerPublishOptions {
    internal?: any;
    user?: any;
  }

  declare interface nes$ServerEachSocketOptions {
    subscription?: string;
    user?: any;
  }

  declare interface nes$Socket {
    id: string;
    app: Object;
    auth: nes$SocketAuthObject;
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
  declare type nes$Client = {} & NesClient.Client;

  declare type nes$Handler = {} & NesClient.Client.Handler;

  declare type nes$ClientOptions = {} & NesClient.Client.ClientOptions;

  declare type nes$ClientConnectOptions = {} & NesClient.Client.ClientConnectOptions;

  declare type nes$ClientRequestOptions = {} & NesClient.Client.ClientRequestOptions;

  declare type nes$ClientSubscribeFlags = {} & NesClient.Client.ClientSubscribeFlags;

  declare interface NesClassExports {
    Client: {
      new(
        url: string,
        options?: NesClient.Client.ClientOptions
      ): NesClient.Client
    };
  }
  declare var nes: NesClassExports & Plugin<{}>;
  declare export default typeof nes;
}
