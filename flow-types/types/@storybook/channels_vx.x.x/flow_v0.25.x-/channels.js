declare module "@storybook/channels" {
  declare type EventName = PropertyKey;
  declare type EventHandler = (event: Channel$Event) => void;
  declare type Listener = (...args: any) => void;
  declare interface Channel$Event {
    type: EventName;
    args: any;
    from: string;
  }

  declare interface Channel$Transport {
    setHandler(handler: EventHandler): void;
    send(event: any): void;
  }
  declare class Channel {
    constructor(options?: {
      transport?: Channel$Transport,
      async?: boolean
    }): this;
    addListener(type: EventName, listener: Listener): void;
    addPeerListener(type: EventName, listener: Listener): void;
    emit(type: EventName, ...args: any): void;
    eventNames(): EventName[];
    listenerCount(type: EventName): number;
    listeners(type: EventName): Listener[];
    on(type: EventName, listener: Listener): void;
    once(type: EventName, listener: Listener): void;
    prependListener(type: EventName, listener: Listener): void;
    removeAllListeners(type: EventName): void;
    removeListener(type: EventName, listener: Listener): void;
  }
  declare export default typeof Channel;
}
