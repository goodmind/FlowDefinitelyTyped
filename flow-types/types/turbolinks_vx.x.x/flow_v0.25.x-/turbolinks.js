declare module "turbolinks" {
  declare export default typeof Turbolinks;

  declare var Turbolinks: Turbolinks$TurbolinksStatic;
  declare interface Turbolinks$Action {
    action: "advance" | "replace";
  }

  declare interface Turbolinks$TurbolinksStatic {
    start(): void;
    visit(location: string, options?: Turbolinks$Action): void;
    clearCache(): void;
    setProgressBarDelay(delayInMilliseconds: number): void;
    supported: boolean;
  }
}
