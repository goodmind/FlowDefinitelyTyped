declare module "gulp-watch" {
  import typeof * as File from "vinyl";

  import type { SrcOptions } from "vinyl-fs";

  declare type IOptions = {
    ignoreInitial?: boolean,
    events?: Array<string>,
    base?: string,
    name?: string,
    verbose?: boolean,
    readDelay?: number
  } & SrcOptions;

  declare type IWatchStream = {
    add(path: string | Array<string>): NodeJS.ReadWriteStream,
    unwatch(path: string | Array<string>): NodeJS.ReadWriteStream,
    close(): NodeJS.ReadWriteStream
  } & NodeJS.ReadWriteStream;

  declare type Cb = (
    file: File & {
      event: "add" | "change" | "unlink"
    }
  ) => void;
  declare function watch(
    glob: string | Array<string>,
    callback?: Cb
  ): IWatchStream;

  declare function watch(
    glob: string | Array<string>,
    options?: IOptions,
    callback?: Cb
  ): IWatchStream;

  declare module.exports: typeof watch;
}
