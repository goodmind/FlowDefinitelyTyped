declare module "eventsource" {
  declare class EventSource {
    static CLOSED: number;
    static CONNECTING: number;
    static OPEN: number;
    constructor(
      url: string,
      eventSourceInitDict?: EventSource$EventSource$EventSourceInitDict
    ): this;
    CLOSED: number;
    CONNECTING: number;
    OPEN: number;
    url: string;
    readyState: number;
    withCredentials: boolean;
    onopen: (evt: MessageEvent) => any;
    onmessage: (evt: MessageEvent) => any;
    onerror: (evt: MessageEvent) => any;
    addEventListener(type: string, listener: EventListener): void;
    dispatchEvent(evt: Event): boolean;
    removeEventListener(type: string, listener?: EventListener): void;
    close(): void;
  }
  declare class EventSource$ReadyState {
    constructor(...args: empty): mixed;
    static +CONNECTING: Class<EventSource$ReadyState__CONNECTING> &
      EventSource$ReadyState__CONNECTING &
      0; // 0
    static +OPEN: Class<EventSource$ReadyState__OPEN> &
      EventSource$ReadyState__OPEN &
      1; // 1
    static +CLOSED: Class<EventSource$ReadyState__CLOSED> &
      EventSource$ReadyState__CLOSED &
      2; // 2
  }

  declare class EventSource$ReadyState__CONNECTING
    mixins EventSource$ReadyState {}
  declare class EventSource$ReadyState__OPEN mixins EventSource$ReadyState {}
  declare class EventSource$ReadyState__CLOSED mixins EventSource$ReadyState {}

  declare interface EventSource$EventSourceInitDict {
    withCredentials?: boolean;
    headers?: { [key: string]: any };
    proxy?: string;
    https?: { [key: string]: any };
    rejectUnauthorized?: boolean;
  }
  declare module.exports: typeof EventSource;
}
