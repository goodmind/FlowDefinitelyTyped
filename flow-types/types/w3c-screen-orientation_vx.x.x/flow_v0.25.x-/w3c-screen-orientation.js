declare module "w3c-screen-orientation" {
  declare type OrientationType =
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary";
  declare type ScreenOrientationLockType =
    | "any"
    | "natural"
    | "landscape"
    | "portrait"
    | "portrait-primary"
    | "portrait-secondary"
    | "landscape-primary"
    | "landscape-secondary";
  declare type ScreenOrientation = {
    lock(orientation: ScreenOrientationLockType): Promise<void>,
    unlock(): void,
    +type: OrientationType,
    +angle: number,
    addEventListener(
      type: "change",
      listener: (ev: Event) => any,
      useCapture?: boolean
    ): void
  } & EventTarget;

  declare interface Screen {
    +orientation: ScreenOrientation;
  }
}
