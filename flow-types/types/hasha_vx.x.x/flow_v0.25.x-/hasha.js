declare module "hasha" {
  import typeof * as crypto from "crypto";

  declare module.exports: typeof hasha;

  declare function hasha(input: hasha$hasha$HashaInput): string;

  declare function hasha<E: hasha$hasha$ToStringEncoding>(
    input: hasha$hasha$HashaInput,
    options: hasha$hasha$HashaOptions<E>
  ): string;

  declare function hasha<E: "buffer">(
    input: hasha$hasha$HashaInput,
    options: hasha$hasha$HashaOptions<E>
  ): Buffer;

  declare var npm$namespace$hasha: {
    stream: typeof hasha$stream,
    fromStream: typeof hasha$fromStream,
    fromFile: typeof hasha$fromFile,
    fromFileSync: typeof hasha$fromFileSync
  };
  declare type hasha$HashaInput = string | string[] | Buffer | Buffer[];

  declare type hasha$ToStringEncoding =
    | "hex"
    | "base64"
    | "latin1"
    | "binary"
    | void;

  declare type hasha$HashaEncoding = hasha$ToStringEncoding | "buffer";

  declare interface hasha$HashaOptions<E: hasha$HashaEncoding> {
    encoding?: E;
    algorithm?: string;
  }

  declare function hasha$stream(
    options?: hasha$HashaOptions<hasha$HashaEncoding>
  ): crypto.Hash;

  declare function hasha$fromStream(
    hasha$stream: NodeJS.ReadableStream
  ): Promise<string | null>;

  declare function hasha$fromStream<E: hasha$ToStringEncoding>(
    hasha$stream: NodeJS.ReadableStream,
    options?: hasha$HashaOptions<E>
  ): Promise<string | null>;

  declare function hasha$fromStream<E: "buffer">(
    hasha$stream: NodeJS.ReadableStream,
    options?: hasha$HashaOptions<E>
  ): Promise<Buffer | null>;

  declare function hasha$fromFile(filePath: string): Promise<string | null>;

  declare function hasha$fromFile<E: hasha$ToStringEncoding>(
    filePath: string,
    options: hasha$HashaOptions<E>
  ): Promise<string | null>;

  declare function hasha$fromFile<E: "buffer">(
    filePath: string,
    options: hasha$HashaOptions<E>
  ): Promise<Buffer | null>;

  declare function hasha$fromFileSync(filePath: string): string;

  declare function hasha$fromFileSync<E: hasha$ToStringEncoding>(
    filePath: string,
    options: hasha$HashaOptions<E>
  ): string;

  declare function hasha$fromFileSync<E: "buffer">(
    filePath: string,
    options: hasha$HashaOptions<E>
  ): Buffer;
}
