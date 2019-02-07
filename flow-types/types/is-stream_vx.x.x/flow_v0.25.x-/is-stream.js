declare module "is-stream" {
  import typeof * as stream from "stream";

  declare module.exports: typeof isStream;

  declare function isStream(maybeStream: any): boolean;

  declare var npm$namespace$isStream: {
    writable: typeof isStream$writable,
    readable: typeof isStream$readable,
    duplex: typeof isStream$duplex,
    transform: typeof isStream$transform
  };
  declare function isStream$writable(maybeWritable: any): boolean;

  declare function isStream$readable(maybeReadable: any): boolean;

  declare function isStream$duplex(maybeDuplex: any): boolean;

  declare function isStream$transform(maybeTransform: any): boolean;
}
