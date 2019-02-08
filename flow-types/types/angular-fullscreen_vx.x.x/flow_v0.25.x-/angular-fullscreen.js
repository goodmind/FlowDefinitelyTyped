/**
 * Prefixing interface name with "I" is not recommended: http://www.typescriptlang.org/Handbook#writing-dts-files
 * However, we let it here to keep consistency with all the other Angular-related definitions
 */
declare interface fullscreen$IFullscreen {
  all(): void;
  toggleAll(): void;
  enable(element: Element | HTMLElement): void;
  cancel(): void;
  isEnabled(): boolean;
  isSupported(): boolean;
}
declare module "angular" {
}
declare module "angular-fullscreen" {
  import typeof * as angular from "angular";
}
