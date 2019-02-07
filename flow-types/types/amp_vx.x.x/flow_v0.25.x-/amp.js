declare module "amp" {
  import typeof * as stream from "stream";

  declare export function decode(buf: Buffer): Buffer[];

  declare export function encode(args: Buffer[]): Buffer;

  declare export class Stream mixins stream.Writable {
    constructor(opts: stream.WritableOptions): this;
    _write(chunk: any, encoding: string, fn: () => void): void;
  }
}
