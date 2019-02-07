declare module "vertx3-eventbus-client" {
  declare interface EventBus$EventBusStatic {
    new(url: string, options?: any): EventBus$EventBus;
  }

  declare interface EventBus$EventBus {
    url: string;
    options?: any;
    onopen(): any;
    onerror(error: Error): any;
    onclose(): any;
    registerHandler(
      address: string,
      headers: any,
      callback: (error: Error, message: any) => any
    ): any;
    unregisterHandler(
      address: string,
      headers: any,
      callback: (error: Error, message: any) => any
    ): any;
    send(
      address: string,
      message: any,
      headers: any,
      callback?: (error: Error, message: any) => any
    ): any;
    publish(address: string, message: any, headers?: any): any;
    enableReconnect(enable: boolean): void;
    enablePing(enable: boolean): void;
    close(): any;
  }
  declare var EventBus$EventBus: EventBus$EventBus.EventBus$EventBusStatic;
  declare module.exports: typeof EventBus$EventBus;
}
