declare module "amqp-rpc" {
  declare export interface Options {
    connection?: any;
    url?: string;
    exchangeInstance?: any;
    exchange?: string;
    exchange_options?: {
      exclusive?: boolean,
      autoDelete?: boolean
    };
    ipml_options?: {
      defaultExchangeName?: string
    };
    conn_options?: any;
  }
  declare export interface CallOptions {
    correlationId?: string;
    autoDeleteCallback?: any;
  }
  declare export interface HandlerOptions {
    queueName?: string;
    durable?: boolean;
    exclusive?: boolean;
    autoDelete?: boolean;
  }
  declare export interface BroadcastOptions {
    ttl?: number;
    onResponse?: any;
    context?: any;
    onComplete?: any;
  }
  declare export interface CommandInfo {
    cmd?: string;
    exchange?: string;
    contentType?: string;
    size?: number;
  }
  declare export interface Callback {
    (...args: any[]): void;
  }
  declare export interface CallbackWithError {
    (err: any, ...args: any[]): void;
  }
  declare export function factory(opt?: Options): amqpRPC;

  declare export class amqpRPC {
    constructor(opt?: Options): this;
    generateQueueName(type: string): string;
    disconnect(): void;
    call<T>(
      cmd: string,
      params: T,
      cb?: Callback,
      context?: any,
      options?: CallOptions
    ): string;
    on<T>(
      cmd: string,
      cb: (param?: T, cb?: Callback, info?: CommandInfo) => void,
      context?: any,
      options?: HandlerOptions
    ): boolean;
    off(cmd: string): boolean;
    callBroadcast<T>(cmd: string, params: T, options?: BroadcastOptions): void;
    onBroadcast<T>(
      cmd: string,
      cb?: (params?: T, cb?: CallbackWithError) => void,
      context?: any,
      options?: any
    ): boolean;
    offBroadcast(cmd: string): boolean;
  }
}
