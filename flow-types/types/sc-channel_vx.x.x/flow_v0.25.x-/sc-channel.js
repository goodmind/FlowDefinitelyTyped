declare module "sc-channel" {
  import type { SCExchange, handlerFunction } from "sc-broker-cluster";

  declare export interface SCChannelOptions {
    waitForAuth?: boolean;
    batch?: boolean;
    data?: any;
  }
  declare export class SCChannel mixins Emitter {
    PENDING: "pending";
    SUBSCRIBED: "subscribed";
    UNSUBSCRIBED: "unsubscribed";
    name: string;
    state: ChannelState;
    waitForAuth: boolean;
    batch: boolean;
    data: any;
    constructor(
      name: string,
      client: SCExchange,
      options?: SCChannelOptions
    ): this;
    setOptions(options?: SCChannelOptions): void;
    getState(): "pending" | "subscribed" | "unsubscribed";
    subscribe(options?: any): void;
    unsubscribe(): void;
    isSubscribed(includePending?: boolean): boolean;
    publish(data: any, callback?: (err?: Error) => void): void;
    watch(handler: handlerFunction): void;
    unwatch(handler?: handlerFunction): void;
    watchers(): handlerFunction[];
    destroy(): void;
  }
  declare export type ChannelState = "pending" | "subscribed" | "unsubscribed";
}
