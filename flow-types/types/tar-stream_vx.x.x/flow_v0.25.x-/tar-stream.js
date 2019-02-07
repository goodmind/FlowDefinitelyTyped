declare module "tar-stream" {
  declare export type Callback = (err?: Error | null) => any;
  declare export interface Headers {
    name: string;
    mode?: number;
    uid?: number;
    gid?: number;
    size?: number;
    mtime?: Date;
    linkname?: string | null;
    type?:
      | "file"
      | "link"
      | "symlink"
      | "character-device"
      | "block-device"
      | "directory"
      | "fifo"
      | "contiguous-file"
      | "pax-header"
      | "pax-global-header"
      | "gnu-long-link-path"
      | "gnu-long-path"
      | null;
    uname?: string;
    gname?: string;
    devmajor?: number;
    devminor?: number;
  }
  declare export type Pack = {
    entry(
      headers: Headers,
      buffer?: string | Buffer | Callback,
      callback?: Callback
    ): stream.Writable,
    finalize(): void
  } & stream.Readable;

  declare export type Extract = {
    on(event: string, listener: (...args: any[]) => void): this,
    on(
      event: "entry",
      listener: (
        headers: Headers,
        stream: stream.PassThrough,
        next: () => void
      ) => void
    ): this
  } & stream.Writable;

  declare export function extract(
    opts?: stream.WritableOptions
  ): stream.Writable;

  declare export function pack(opts?: stream.ReadableOptions): Pack;
}
