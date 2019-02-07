declare module "reconnect-core" {
  import type { Backoff, ExponentialOptions } from "backoff";

  import type { EventEmitter } from "events";

  import type { Stream } from "stream";

  declare type reconnect$CustomModule<ArgType, ConnectionType> = (
    opts?: reconnect$ModuleOptions<ConnectionType>,
    cb?: (con: ConnectionType) => void
  ) => reconnect$Instance<ArgType, ConnectionType>;

  declare type reconnect$ModuleOptions<ConnectionType> = {
    immediate?: boolean,
    failAfter?: number,
    onConnect?: (con: ConnectionType) => void,
    strategy?: "fibonacci" | "exponential" | Backoff
  } & ExponentialOptions;

  declare type reconnect$Instance<ArgType, ConnectionType> = {
    connect(opts: ArgType): this,
    listen(opts: ArgType): this,
    disconnect(): this,
    reset(): void,
    +connected: boolean,
    reconnect: boolean,
    on(
      event: "backoff",
      cb: (n: number, delay: number, err?: any) => void
    ): this,
    on(
      event: "connect" | "connection",
      cb: (con: ConnectionType) => void
    ): this,
    on(event: "disconnect", cb: (err?: any) => void): this,
    on(event: "error" | "fail", cb: (err: any) => void): this,
    on(event: "reconnect", cb: (n: number, delay: number) => void): this
  } & EventEmitter;

  declare type ConnectFunction<ArgType, ConnectionType> = (
    opts: ArgType
  ) => ConnectionType;
  declare function reconnect<ArgType, ConnectionType>(
    cf: ConnectFunction<ArgType, ConnectionType>
  ): reconnect$reconnect$CustomModule<ArgType, ConnectionType>;

  declare module.exports: typeof reconnect;
}
