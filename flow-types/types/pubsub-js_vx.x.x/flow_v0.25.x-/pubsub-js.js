declare type PubSubJS$Base = {
  version: string,
  name: string
} & PubSubJS$Publish &
  PubSubJS$Subscribe &
  PubSubJS$Unsubscribe &
  PubSubJS$ClearAllSubscriptions;

declare interface PubSubJS$Publish {
  publish(message: any, data: any): boolean;
  publish(
    message: any,
    data: any,
    sync: boolean,
    immediateExceptions: Function
  ): boolean;
  publishSync(message: any, data: any): boolean;
}

declare interface PubSubJS$Subscribe {
  subscribe(message: any, func: Function): any;
}

declare interface PubSubJS$Unsubscribe {
  unsubscribe(tokenOrFunction: any): any;
}

declare interface PubSubJS$ClearAllSubscriptions {
  clearAllSubscriptions(): any;
}
declare var PubSub: PubSubJS$PubSubJS$Base;
declare module "pubsub-js" {
  declare module.exports: typeof PubSub;
}
