declare module "hasha" {
  import typeof * as crypto from "crypto";

  declare export default typeof hasha;

  declare function hasha(input: hasha$HashaInput): string;

  declare function hasha<E: hasha$ToStringEncoding>(
    input: hasha$HashaInput,
    options: hasha$HashaOptions<E>
  ): string;

  declare function hasha<E: "buffer">(
    input: hasha$HashaInput,
    options: hasha$HashaOptions<E>
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
    stream: NodeJS.ReadableStream
  ): Promise<string | null>;

  declare function hasha$fromStream<E: hasha$ToStringEncoding>(
    stream: NodeJS.ReadableStream,
    options?: hasha$HashaOptions<E>
  ): Promise<string | null>;

  declare function hasha$fromStream<E: "buffer">(
    stream: NodeJS.ReadableStream,
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
