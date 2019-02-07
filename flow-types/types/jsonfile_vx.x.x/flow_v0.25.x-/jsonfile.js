declare module "jsonfile" {
  import type { Url } from "url";

  import type {
    PathLike,
    readFile as fsReadFile,
    readFileSync as fsReadFileSync,
    writeFile as fsWriteFile,
    writeFileSync as fsWriteFileSync
  } from "fs";

  declare export type Path = PathLike | Url;
  declare export interface FS {
    readFile: typeof fsReadFile;
    readFileSync: typeof fsReadFileSync;
    writeFile: typeof fsWriteFile;
    writeFileSync: typeof fsWriteFileSync;
  }
  declare export type JFReadOptions =
    | {
        encoding?: string | null,
        flag?: string,
        throws?: boolean,
        fs?: FS,
        reviver?: (key: any, value: any) => any
      }
    | string
    | null
    | void;
  declare export type JFWriteOptions =
    | {
        encoding?: string | null,
        mode?: string | number,
        flag?: string,
        fs?: FS,
        EOL?: string,
        spaces?: string | number,
        replacer?: (key: string, value: any) => any
      }
    | string
    | null;
  declare export type ReadCallback = (
    err: NodeJS.ErrnoException | null,
    data: any
  ) => void;
  declare export type WriteCallback = (err: NodeJS.ErrnoException) => void;
  declare export function readFile(
    file: Path,
    options: JFReadOptions,
    callback: ReadCallback
  ): void;

  declare export function readFile(file: Path, callback: ReadCallback): void;

  declare export function readFile(
    file: Path,
    options?: JFReadOptions
  ): Promise<any>;

  declare export function readFileSync(
    file: Path,
    options?: JFReadOptions
  ): any;

  declare export function writeFile(
    file: Path,
    obj: any,
    options: JFWriteOptions,
    callback: WriteCallback
  ): void;

  declare export function writeFile(
    file: Path,
    obj: any,
    callback: WriteCallback
  ): void;

  declare export function writeFile(
    file: Path,
    obj: any,
    options?: JFWriteOptions
  ): Promise<void>;

  declare export function writeFileSync(
    file: Path,
    obj: any,
    options?: JFWriteOptions
  ): void;
}
