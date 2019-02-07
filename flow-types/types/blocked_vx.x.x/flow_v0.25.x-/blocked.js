declare module "blocked" {
  declare module.exports: typeof Blocked;

  declare function Blocked(
    callback: (ms: number) => void,
    options?: Blocked$Blocked$Options
  ): NodeJS.Timer;

  declare interface Blocked$Options {
    threshold: number;
  }
}
