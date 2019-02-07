declare module "bunnymq" {
  declare function bunnymq(
    options?: bunnymq$bunnymq$Options
  ): bunnymq$bunnymq$Instance;

  declare type bunnymq$ConsumerCallback<T> = (...args: any[]) => T;

  declare type bunnymq$LoggerOutput = (format: any, ...args: any[]) => void;

  declare interface bunnymq$Connection {
    [address: string]: any;
    startedAt: string;
  }

  declare interface bunnymq$Consumer {
    /**
     * Handle messages from a named queue.
     * @param queue A named queue.
     * @param callback A callback.
     */
    consume<T>(queue: string, callback: bunnymq$ConsumerCallback<T>): void;
  }

  declare interface bunnymq$Instance {
    connection: bunnymq$Connection;
    consumer: bunnymq$Consumer;
    producer: bunnymq$Producer;

    /**
     * Subscriber to handle messages from a named queue.
     * @param queue A named queue.
     * @param callback A callback.
     */
    subscribe<T>(
      queueName: string,
      callback: bunnymq$ConsumerCallback<T>
    ): void;

    /**
     * Publisher to send messages to a named queue.
     * @return The consumer response.
     */
    publish<T>(
      queueName: string,
      message: any,
      options?: bunnymq$ProducerOptions
    ): Promise<T>;
  }

  declare interface bunnymq$Logger {
    debug: bunnymq$LoggerOutput;
    error: bunnymq$LoggerOutput;
    info: bunnymq$LoggerOutput;
    log: bunnymq$LoggerOutput;
    warn: bunnymq$LoggerOutput;
  }

  declare interface bunnymq$Options {
    consumerSuffix?: string;
    host?: string;
    hostname?: string;

    /**
     * Number of fetched messages at once on the channel.
     */
    prefetch?: number;

    /**
     * Requeue put back message into the broker if consumer crashes/trigger exception.
     */
    requeue?: boolean;
    rpcTimeout?: number;
    timeout?: number;
    transport?: any;
  }

  declare interface bunnymq$Producer {
    /**
     * Send messages to a named queue.
     * @param queue A named queue.
     * @param message A message.
     * @return The consumer response.
     */
    produce<T>(
      queue: string,
      message: any,
      options?: bunnymq$ProducerOptions
    ): Promise<T>;
  }

  declare interface bunnymq$ProducerOptions {
    routingKey?: string;
    rpc?: boolean;
    timeout?: number;
  }
  declare module.exports: typeof bunnymq;
}
