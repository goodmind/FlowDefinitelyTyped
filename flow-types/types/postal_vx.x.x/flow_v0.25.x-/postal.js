declare interface IConfiguration {
  SYSTEM_CHANNEL: string;
  DEFAULT_CHANNEL: string;
  resolver: IResolver;
}
declare interface IResolver {
  compare(binding: string, topic: string, headerOptions: {}): boolean;
  reset(): void;
  purge(options?: {
    topic?: string,
    binding?: string,
    compact?: boolean
  }): void;
}
declare interface ICallback<T> {
  (data: T, envelope: IEnvelope<T>): void;
}
declare interface ISubscriptionDefinition<T> {
  channel: string;
  topic: string;
  callback: ICallback<T>;
  constraint(
    predicateFn: (data: T, envelope: IEnvelope<T>) => boolean
  ): ISubscriptionDefinition<T>;
  constraints(
    predicateFns: ((data: T, envelope: IEnvelope<T>) => boolean)[]
  ): ISubscriptionDefinition<T>;
  context(theContext: any): ISubscriptionDefinition<T>;
  debounce(interval: number): ISubscriptionDefinition<T>;
  defer(): ISubscriptionDefinition<T>;
  delay(waitTime: number): ISubscriptionDefinition<T>;
  disposeAfter(maxCalls: number): ISubscriptionDefinition<T>;
  distinct(): ISubscriptionDefinition<T>;
  distinctUntilChanged(): ISubscriptionDefinition<T>;
  logError(): ISubscriptionDefinition<T>;
  once(): ISubscriptionDefinition<T>;
  throttle(interval: number): ISubscriptionDefinition<T>;
  subscribe(callback: ICallback<T>): ISubscriptionDefinition<T>;
  unsubscribe(): void;
}
declare interface IEnvelope<T> {
  topic: string;
  data?: T;
  channel?: string;
  timeStamp?: string;
}
declare interface IChannelDefinition<T> {
  subscribe(topic: string, callback: ICallback<T>): ISubscriptionDefinition<T>;
  publish(topic: string, data?: T): void;
  channel: string;
}
declare interface IPostal {
  subscriptions: {};
  wireTaps: ICallback<any>[];
  addWireTap(callback: ICallback<any>): () => void;
  channel<T>(name?: string): IChannelDefinition<T>;
  getSubscribersFor(): ISubscriptionDefinition<any>[];
  getSubscribersFor(options: {
    channel?: string,
    topic?: string,
    context?: any
  }): ISubscriptionDefinition<any>[];
  getSubscribersFor(
    predicateFn: (sub: ISubscriptionDefinition<any>) => boolean
  ): ISubscriptionDefinition<any>[];
  publish(envelope: IEnvelope<any>): void;
  reset(): void;
  subscribe(options: {
    channel?: string,
    topic: string,
    callback: ICallback<any>
  }): ISubscriptionDefinition<any>;
  unsubscribe(sub: ISubscriptionDefinition<any>): void;
  unsubscribeFor(): void;
  unsubscribeFor(options: {
    channel?: string,
    topic?: string,
    context?: any
  }): void;
  configuration: IConfiguration;
}
declare var postal: IPostal;
declare module "postal" {
  declare var postal: IPostal;
  declare module.exports: typeof postal;
}
