declare module "body-scroll-lock" {
  declare export interface BodyScrollOptions {
    reserveScrollBarGap?: boolean;
    allowTouchMove?: (el: HTMLElement) => void;
  }
  declare export function disableBodyScroll(
    targetElement: HTMLElement,
    options?: BodyScrollOptions
  ): void;

  declare export function enableBodyScroll(targetElement: HTMLElement): void;

  declare export function clearAllBodyScrollLocks(): void;
}
