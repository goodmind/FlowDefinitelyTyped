declare module "requestidlecallback" {
  declare export function requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ): IdleCallbackHandle;

  declare export function cancelIdleCallback(handle: IdleCallbackHandle): void;

  declare export type DOMHighResTimeStamp = number;
  declare export type IdleCallbackHandle = number;
  declare export type IdleRequestCallback = (deadline: IdleDeadline) => void;
  declare export interface IdleDeadline {
    timeRemaining(): DOMHighResTimeStamp;
    +didTimeout: boolean;
  }
  declare export interface IdleRequestOptions {
    timeout: number;
  }
}
