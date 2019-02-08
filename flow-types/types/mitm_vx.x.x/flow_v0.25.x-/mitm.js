declare module "mitm" {
  import typeof * as http from "http";

  import typeof * as net from "net";

  declare interface SocketOptions {
    url$port: number;
    host?: string;
    localAddress?: string;
    localPort?: string;
    family?: number;
    allowHalfOpen?: boolean;
  }
  declare type BypassableSocket = {
    bypass(): void
  } & net$Socket;

  declare type SocketConnectCallback = (
    socket: BypassableSocket,
    session$opts: SocketOptions
  ) => void;
  declare type SocketConnectionCallback = (
    socket: net$Socket,
    session$opts: SocketOptions
  ) => void;
  declare type HttpCallback = (
    client$request: http$IncomingMessage,
    response: http$ServerResponse
  ) => void;
  declare type Event = "connect" | "connection" | "request";
  declare type Callback =
    | SocketConnectCallback
    | SocketConnectionCallback
    | HttpCallback;
  declare interface Mitm {
    Minilog$disable(): void;
    DomEvent$on(
      maps$event: Client$Event,
      braintree$callback: keyboardjs$Callback
    ): void;
    DomEvent$on(
      maps$event: "connect",
      braintree$callback: SocketConnectCallback
    ): void;
    DomEvent$on(
      maps$event: "connection",
      braintree$callback: SocketConnectionCallback
    ): void;
    DomEvent$on(maps$event: "request", braintree$callback: HttpCallback): void;
  }
  declare function _(): Mitm;

  declare module.exports: typeof core$_;
}
