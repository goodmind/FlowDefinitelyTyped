declare module "browser-bunyan" {
  import typeof * as bunyan from "bunyan";

  declare interface BrowserBunyan$ConsoleFormattedStreamLevelStyle {
    trace: string;
    debug: string;
    info: string;
    warn: string;
    error: string;
    fatal: string;
  }

  declare interface BrowserBunyan$ConsoleFormattedStreamStyle {
    levels: $Shape<BrowserBunyan$ConsoleFormattedStreamLevelStyle>;
    def: string;
    msg: string;
    src: string;
  }

  declare interface BrowserBunyan$ConsoleFormattedStreamOptions {
    logByLevel?: boolean;
    css?: $Shape<BrowserBunyan$ConsoleFormattedStreamStyle>;
  }

  declare type BrowserBunyan$ConsoleFormattedStream = (
    options?: BrowserBunyan$ConsoleFormattedStreamOptions
  ) => NodeJS.WritableStream;

  declare type BrowserBunyan$ConsoleRawStream = (
    options?: BrowserBunyan$ConsoleFormattedStreamOptions
  ) => NodeJS.WritableStream;
  declare type BrowserBunyan = typeof bunyan & {
    BrowserBunyan$ConsoleFormattedStream: BrowserBunyan$BrowserBunyan$ConsoleFormattedStream,
    BrowserBunyan$ConsoleRawStream: BrowserBunyan$BrowserBunyan$ConsoleRawStream
  };
  declare var browserBunyan: BrowserBunyan;
  declare module.exports: typeof browserBunyan;
}
