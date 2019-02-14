declare module "readdir-enhanced" {
  declare var npm$namespace$re: {
    stat: typeof re$stat,
    async: typeof re$async,
    readdirAsyncStat: typeof re$readdirAsyncStat,
    stream: typeof re$stream,
    readdirStreamStat: typeof re$readdirStreamStat,
    sync: typeof re$sync,
    readdirSyncStat: typeof re$readdirSyncStat,

    async: typeof npm$namespace$re$async,
    stream: typeof npm$namespace$re$stream,
    sync: typeof npm$namespace$re$sync
  };
  declare type re$Entry = {
    path: string,
    depth: number
  } & fs.Stats;

  declare type re$FilterFunction = (stat: re$Entry) => boolean;

  declare type re$Callback<T> = (err: NodeJS.ErrnoException, result: T) => void;

  declare type re$CallbackString = re$Callback<string[]>;

  declare type re$CallbackEntry = re$Callback<re$Entry[]>;

  declare interface re$FileSystem {
    readdir?: (path: string, callback: re$Callback<string[]>) => void;
    lstat?: (path: string, callback: re$Callback<fs.Stats>) => void;
    stat?: (path: string, callback: re$Callback<fs.Stats>) => void;
  }

  declare interface re$Options {
    filter?: string | RegExp | re$FilterFunction;
    deep?: boolean | number | RegExp | re$FilterFunction;
    sep?: string;
    basePath?: string;
    fs?: re$FileSystem;
  }

  declare function re$stat(
    root: string,
    options?: re$Options
  ): Promise<re$Entry[]>;

  declare function re$stat(root: string, callback: re$CallbackEntry): void;

  declare function re$stat(
    root: string,
    options: re$Options,
    callback: re$CallbackEntry
  ): void;

  declare function re$async(
    root: string,
    options?: re$Options
  ): Promise<string[]>;

  declare function re$async(root: string, callback: re$CallbackString): void;

  declare function re$async(
    root: string,
    options: re$Options,
    callback: re$CallbackString
  ): void;

  declare function re$readdirAsyncStat(
    root: string,
    options?: re$Options
  ): Promise<re$Entry[]>;

  declare function re$readdirAsyncStat(
    root: string,
    callback: re$CallbackEntry
  ): void;

  declare function re$readdirAsyncStat(
    root: string,
    options: re$Options,
    callback: re$CallbackEntry
  ): void;

  declare var npm$namespace$re$async: {
    stat: typeof re$async$stat
  };
  declare function re$async$stat(
    root: string,
    options?: re$Options
  ): Promise<re$Entry[]>;

  declare function re$async$stat(
    root: string,
    callback: re$CallbackEntry
  ): void;

  declare function re$async$stat(
    root: string,
    options: re$Options,
    callback: re$CallbackEntry
  ): void;

  declare function re$stream(
    root: string,
    options?: re$Options
  ): NodeJS.ReadableStream;

  declare function re$readdirStreamStat(
    root: string,
    options?: re$Options
  ): NodeJS.ReadableStream;

  declare var npm$namespace$re$stream: {
    stat: typeof re$stream$stat
  };
  declare function re$stream$stat(
    root: string,
    options?: re$Options
  ): NodeJS.ReadableStream;

  declare function re$sync(root: string, options?: re$Options): string[];

  declare function re$readdirSyncStat(
    root: string,
    options?: re$Options
  ): re$Entry[];

  declare var npm$namespace$re$sync: {
    stat: typeof re$sync$stat
  };
  declare function re$sync$stat(root: string, options?: re$Options): re$Entry[];

  declare function re(root: string, options?: re$Options): Promise<string[]>;

  declare function re(root: string, callback: re$CallbackString): void;

  declare function re(
    root: string,
    options: re$Options,
    callback: re$CallbackString
  ): void;

  declare export default typeof re;
}
