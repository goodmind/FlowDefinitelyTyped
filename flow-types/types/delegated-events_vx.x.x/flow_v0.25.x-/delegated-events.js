declare module "delegated-events" {
  declare export interface EventListenerOptions {
    capture?: boolean;
  }
  declare export function on(
    name: string,
    selector: string,
    handler: EventListenerOrEventListenerObject,
    options?: EventListenerOptions
  ): void;

  declare export function off(
    name: string,
    selector: string,
    handler: EventListenerOrEventListenerObject,
    options?: EventListenerOptions
  ): void;

  declare export function fire(
    target: EventTarget,
    name: string,
    detail?: any
  ): boolean;
}
