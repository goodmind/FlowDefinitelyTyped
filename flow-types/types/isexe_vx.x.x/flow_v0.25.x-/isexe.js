declare module "isexe" {
  declare export default typeof isExe;

  declare function isExe(
    path: string,
    options?: isExe$Options
  ): Promise<boolean>;

  declare function isExe(
    path: string,
    callback: (error: NodeJS.ErrnoException | void, isExe: boolean) => void
  ): void;

  declare function isExe(
    path: string,
    options: isExe$Options,
    callback: (error: NodeJS.ErrnoException | void, isExe: boolean) => void
  ): void;

  declare var npm$namespace$isExe: {
    sync: typeof isExe$sync
  };
  declare function isExe$sync(path: string, options?: isExe$Options): boolean;

  declare interface isExe$Options {
    ignoreErrors?: boolean;
    uid?: number;
    gid?: number;
    pathExt?: string;
  }
}
