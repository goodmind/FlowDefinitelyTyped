declare module "tmp" {
  declare export type Options = {
    mode?: number,
    discardDescriptor?: boolean,
    detachDescriptor?: boolean
  } & SimpleOptions;

  declare export interface SimpleOptions {
    prefix?: string;
    postfix?: string;
    template?: string;
    dir?: string;
    tries?: number;
    keep?: boolean;
    unsafeCleanup?: boolean;
  }
  declare export interface SynchrounousResult {
    name: string;
    fd: number;
    removeCallback(): void;
  }
  declare export function file(
    callback: (
      err: any,
      path: string,
      fd: number,
      cleanupCallback: () => void
    ) => void
  ): void;

  declare export function file(
    config: Options,
    callback?: (
      err: any,
      path: string,
      fd: number,
      cleanupCallback: () => void
    ) => void
  ): void;

  declare export function fileSync(config?: Options): SynchrounousResult;

  declare export function dir(
    callback: (err: any, path: string, cleanupCallback: () => void) => void
  ): void;

  declare export function dir(
    config: Options,
    callback?: (err: any, path: string, cleanupCallback: () => void) => void
  ): void;

  declare export function dirSync(config?: Options): SynchrounousResult;

  declare export function tmpName(
    callback: (err: any, path: string) => void
  ): void;

  declare export function tmpName(
    config: SimpleOptions,
    callback?: (err: any, path: string) => void
  ): void;

  declare export function tmpNameSync(config?: SimpleOptions): string;

  declare export function setGracefulCleanup(): void;
}
