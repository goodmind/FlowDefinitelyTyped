declare module "rsmq-worker" {
  import typeof * as RedisSMQ from "rsmq";

  declare export type RSMQWorker$Client = {
    start(): RSMQWorker$Client,
    stop(): RSMQWorker$Client,
    send(
      message: string,
      delay?: number,
      cb?: RSMQWorker$CallbackT<string>
    ): RSMQWorker$Client,
    send(message: string, cb: RSMQWorker$CallbackT<string>): RSMQWorker$Client,
    del(id: string, cb?: RSMQWorker$CallbackT<void>): RSMQWorker$Client,
    changeInterval(interval: number | number[]): RSMQWorker$Client
  } & events.EventEmitter;

  declare export interface RSMQWorker$Options {
    interval?: number;
    maxReceiveCount?: number;
    invisibletime?: number;
    defaultDelay?: number;
    autostart?: boolean;
    timeout?: number;
    customExceedCheck?: RSMQWorker$CustomExceedCheckCallback;
    rsmq?: RedisSMQ.RSMQWorker$Client;
    redis?: redis.RedisClient;
    redisPrefix?: string;
    host?: string;
    port?: number;
    options?: redis.ClientOpts;
  }

  declare export interface RSMQWorker$CustomExceedCheckCallback {
    (message: RedisSMQ.Message): boolean;
  }

  declare export interface RSMQWorker$CallbackT<R> {
    (e?: Error, res?: R): void;
  }
  declare interface RSMQWorkerStatic {
    new(
      queuename: string,
      options?: RSMQWorker$RSMQWorker$Options
    ): RSMQWorker$RSMQWorker$Client;
  }
  declare var RSMQWorker: RSMQWorkerStatic;
  declare module.exports: typeof RSMQWorker;
}
