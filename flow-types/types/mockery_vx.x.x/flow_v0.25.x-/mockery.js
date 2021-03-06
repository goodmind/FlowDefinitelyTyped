declare module "mockery" {
  declare interface MockeryEnableArgs {
    useCleanCache?: boolean;
    warnOnReplace?: boolean;
    warnOnUnregistered?: boolean;
  }
  declare export function enable(args?: MockeryEnableArgs): void;

  declare export function disable(): void;

  declare export function registerMock(name: string, mock: any): void;

  declare export function deregisterMock(name: string): void;

  declare export function registerSubstitute(
    name: string,
    substitute: string
  ): void;

  declare export function deregisterSubstitute(name: string): void;

  declare export function registerAllowable(
    name: string,
    unhook?: boolean
  ): void;

  declare export function deregisterAllowable(name: string): void;

  declare export function registerAllowables(names: string[]): void;

  declare export function deregisterAllowables(names: string[]): void;

  declare export function deregisterAll(): void;

  declare export function resetCache(): void;

  declare export function warnOnUnregistered(value: boolean): void;

  declare export function warnOnReplace(value: boolean): void;
}
