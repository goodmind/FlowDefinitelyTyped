declare module "jackrabbit" {
  import type { Connection, Options, Message } from "amqplib";

  declare var npm$namespace$jackrabbit: {
    jackrabbit: typeof jackrabbit$jackrabbit,

    exchangeType: typeof jackrabbit$exchangeType
  };
  declare function jackrabbit$jackrabbit(url: string): jackrabbit$JackRabbit;

  declare type jackrabbit$JackRabbit = {
    default(): jackrabbit$Exchange,
    direct(name?: string): jackrabbit$Exchange,
    fanout(name?: string): jackrabbit$Exchange,
    topic(name?: string): jackrabbit$Exchange,
    close(callback: (e: Error) => any): void,
    getInternals: () => {
      amqp: any,
      connection: Connection
    }
  } & NodeJS.EventEmitter;

  declare var jackrabbit$exchangeType: {|
    +direct: "direct", // "direct"
    +fanout: "fanout", // "fanout"
    +topic: "topic" // "topic"
  |};

  declare type jackrabbit$Exchange = {
    name: string,
    type: jackrabbit$exchangeType,
    options: Options.AssertExchange,
    queue(options: jackrabbit$QueueOptions): jackrabbit$Queue,
    connect(con: Connection): jackrabbit$Exchange,
    publish(
      message: any,
      options?: jackrabbit$PublishOptions
    ): jackrabbit$Exchange
  } & NodeJS.EventEmitter;

  declare type jackrabbit$PublishOptions = Options.Publish & {
    key: string,
    reply?: jackrabbit$AckCallback
  };

  declare type jackrabbit$QueueOptions = Options.AssertQueue & {
    name?: string,
    key?: string,
    keys?: $ReadOnlyArray<string>,
    prefetch?: number
  };

  declare type jackrabbit$AckCallback = (data?: any) => void;

  declare type jackrabbit$Queue = {
    name: string,
    options: jackrabbit$QueueOptions,
    connect(con: Connection): void,
    consume: (
      callback: (
        data: any,
        ack: jackrabbit$AckCallback,
        nack: () => void,
        msg: Message
      ) => void,
      options?: Options.Consume
    ) => void,
    cancel(done: any): void,
    purge(done: any): void
  } & NodeJS.EventEmitter;

  declare export default typeof jackrabbit$jackrabbit;
}
