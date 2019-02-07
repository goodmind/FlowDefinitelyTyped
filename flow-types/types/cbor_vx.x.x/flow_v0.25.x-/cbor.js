declare module "cbor" {
  declare export function decode(input: Buffer | string): any;

  declare export function decodeAll(
    input: Buffer | string,
    callback: (error: any, objs: any[]) => void
  ): void;

  declare export function decodeAllSync(input: Buffer | string): any[];

  declare export function decodeFirst(
    input: Buffer | string,
    callback: (error: any, obj: any) => void
  ): void;

  declare export function decodeFirstSync(input: Buffer | string): any;

  declare export function encode(input: any): Buffer;

  declare export class Decoder mixins stream.Transform {
    constructor(params?: {
      input?: Buffer | string,
      encoding?: string,
      tags?: {
        [tag: number]: (val: any[]) => any
      }
    }): this;
  }
  declare export class Encoder mixins stream.Transform {
    constructor(): this;
    addSemanticType<T>(
      type: (...args: any[]) => T,
      encodeFunction: (encoder: Encoder, t: T) => void
    ): void;
    pushAny(input: any): void;
  }

  declare var npm$namespace$leveldb: {
    decode: typeof leveldb$decode,
    encode: typeof leveldb$encode,
    buffer: typeof leveldb$buffer,
    name: typeof leveldb$name
  };
  declare export function leveldb$decode(input: Buffer | string): any[];

  declare export function leveldb$encode(input: any): Buffer;

  declare export var leveldb$buffer: boolean;

  declare export var leveldb$name: string;
}
