declare module "recursive-readdir" {
  import typeof * as fs from "fs";

  declare type RecursiveReaddir$IgnoreFunction = (
    file: string,
    stats: fs.Stats
  ) => boolean;

  declare type RecursiveReaddir$Ignores = $ReadOnlyArray<
    string | RecursiveReaddir$IgnoreFunction
  >;

  declare type RecursiveReaddir$Callback = (
    error: Error,
    files: string[]
  ) => void;

  declare interface RecursiveReaddir$readDir {
    (path: string, ignores?: RecursiveReaddir$Ignores): Promise<string[]>;
    (path: string, callback: RecursiveReaddir$Callback): void;
    (
      path: string,
      ignores: RecursiveReaddir$Ignores,
      callback: RecursiveReaddir$Callback
    ): void;
  }
  declare var recursiveReadDir: RecursiveReaddir$RecursiveReaddir$readDir;
  declare module.exports: typeof recursiveReadDir;
}
