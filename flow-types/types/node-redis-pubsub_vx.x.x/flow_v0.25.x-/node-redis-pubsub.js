declare module "node-redis-pubsub" {
  import typeof * as redis from "redis";

  declare function NRP(options: {
    [key: string]: any
  }): NRP$NRP$NodeRedisPubSub;

  declare var npm$namespace$NRP: {
    initClient: typeof NRP$initClient
  };
  declare function NRP$initClient(options: {
    [key: string]: any
  }): NRP$NodeRedisPubSub;

  declare class NRP$NodeRedisPubSub {
    constructor(options: { [key: string]: any }): this;
    getRedisClient(): redis.RedisClient;
    on(
      channel: string,
      handler: (data: string, channel: string) => void,
      callback?: () => void
    ): () => void;
    subscribe(
      channel: string,
      handler: (data: string, channel: string) => void,
      callback?: () => void
    ): () => void;
    emit(channel: string, message: string): void;
    publish(channel: string, message: string): void;
    quit(): void;
    end(): void;
  }
  declare module.exports: typeof NRP;
}
