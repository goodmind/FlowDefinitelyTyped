declare module "subscribe-ui-event" {
  declare export type UIEventType =
    | "resize"
    | "resizeEnd"
    | "resizeStart"
    | "scroll"
    | "scrollEnd"
    | "scrollStart"
    | "visibilitychange";
  declare export type TouchEventType =
    | "touchend"
    | "touchmove"
    | "touchmoveEnd"
    | "touchmoveStart"
    | "touchstart";
  declare export type EventType = UIEventType | TouchEventType;
  declare export interface SubscribeOptions {
    context?: any;
    enableResizeInfo?: boolean;
    enableScrollInfo?: boolean;
    enableTouchInfo?: boolean;
    eventOptions?: AddEventListenerOptions;
    throttleRate?: number;
    useRAF?: boolean;
  }
  declare export interface ArgmentedEvent<T: EventType> {
    mainType: string;
    resize: {
      height: number,
      width: number
    };
    scroll: {
      delta: number,
      top: number
    };
    subType: string;
    type: T;
    touch: {
      axisIntention: "x" | "y" | "",
      deltaX: number,
      deltaY: number,
      startX: number,
      startY: number
    };
  }
  declare export type UIEventCallback<T: UIEventType = UIEventType> = (
    event: UIEvent,
    payload: ArgmentedEvent<T>
  ) => any;
  declare export type TouchEventCallback<T: TouchEventType = TouchEventType> = (
    event: TouchEvent,
    payload: ArgmentedEvent<T>
  ) => any;
  declare export interface Subscription {
    unsubscribe: () => void;
  }
  declare export function subscribe<T: UIEventType>(
    eventType: T,
    callback: UIEventCallback<T>,
    options?: SubscribeOptions
  ): Subscription;

  declare export function subscribe<T: TouchEventType>(
    eventType: T,
    callback: TouchEventCallback<T>,
    options?: SubscribeOptions
  ): Subscription;

  declare export function unsubscribe<T: UIEventType>(
    eventType: T,
    callback: UIEventCallback<T>
  ): void;

  declare export function unsubscribe<T: TouchEventType>(
    eventType: T,
    callback: TouchEventCallback<T>
  ): void;

  declare export function listen(
    target: EventTarget,
    eventType: string,
    handler: EventListenerOrEventListenerObject,
    options?: AddEventListenerOptions
  ): {
    remove: () => void
  };
}
