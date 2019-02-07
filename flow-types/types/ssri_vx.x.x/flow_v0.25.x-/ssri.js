declare module "ssri" {
  import type { Utf8AsciiLatin1Encoding, Hash as CryptoHash } from "crypto";

  import type { Readable, Transform } from "stream";

  declare export interface HashLike {
    algorithm: string;
    digest: string;
    options?: string[];
  }
  declare export interface IntegrityLike {
    [algorithm: string]: HashLike[];
  }
  declare export type IntegrityMap = Integrity & IntegrityLike;
  declare export class Hash mixins HashLike {
    constructor(
      hash: string,
      opts?: {
        strict?: boolean
      }
    ): this;
    source: string;
    algorithm: string;
    digest: string;
    options: string[];
    isHash: boolean;
    hexDigest(): string;
    toJSON(): string;
    toString(opts?: {
      strict?: boolean
    }): string;
  }
  declare export class Integrity {
    isIntegrity: boolean;
    toJSON(): string;
    toString(opts?: {
      strict?: boolean,
      sep?: string
    }): string;
    concat(
      integrity: string | IntegrityLike | HashLike,
      opts?: {
        strict?: boolean
      }
    ): IntegrityMap;
    hexDigest(): string;
    match(
      integrity: string | IntegrityLike | HashLike,
      opts?: {
        strict?: boolean,
        pickAlgorithm?: (algo1: string, algo2: string) => string
      }
    ): Hash | false;
    pickAlgorithm(opts?: {
      pickAlgorithm?: (algo1: string, algo2: string) => string
    }): string;
  }
  declare export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: {
      strict?: boolean
    }
  ): IntegrityMap;

  declare export function parse(
    sri: string | IntegrityLike | HashLike,
    opts?: {
      single: true,
      strict?: boolean
    }
  ): Hash;

  declare export function stringify(
    obj: string | IntegrityLike | HashLike,
    opts?: {
      strict?: boolean,
      sep?: string
    }
  ): string;

  declare export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
      strict?: boolean,
      options?: $ReadOnlyArray<string>
    }
  ): IntegrityMap;

  declare export function fromHex(
    hexDigest: string,
    algorithm: string,
    opts?: {
      single: true,
      strict?: boolean,
      options?: $ReadOnlyArray<string>
    }
  ): Hash;

  declare export function fromData(
    data: string | Buffer | NodeJS.TypedArray | DataView,
    opts?: {
      strict?: boolean,
      options?: $ReadOnlyArray<string>,
      algorithms?: $ReadOnlyArray<string>
    }
  ): IntegrityMap;

  declare export function fromStream(
    stream: Readable,
    opts?: {
      strict?: boolean,
      options?: $ReadOnlyArray<string>,
      algorithms?: $ReadOnlyArray<string>,
      Promise?: PromiseConstructorLike
    }
  ): PromiseLike<IntegrityMap>;

  declare export function checkData(
    data: string | Buffer | NodeJS.TypedArray,
    sri: string | IntegrityLike | HashLike,
    opts?: {
      strict?: boolean,
      error?: boolean,
      size?: number,
      pickAlgorithm?: (algo1: string, algo2: string) => string
    }
  ): Hash | false;

  declare export function checkStream(
    stream: Readable,
    sri: string | IntegrityLike | HashLike,
    opts?: {
      strict?: boolean,
      options?: $ReadOnlyArray<string>,
      size?: number,
      pickAlgorithm?: (algo1: string, algo2: string) => string,
      Promise?: PromiseConstructorLike
    }
  ): PromiseLike<Hash>;

  declare export function integrityStream(opts?: {
    single?: boolean,
    strict?: boolean,
    options?: $ReadOnlyArray<string>,
    algorithms?: $ReadOnlyArray<string>,
    integrity?: string | IntegrityLike | HashLike,
    size?: number,
    pickAlgorithm?: (algo1: string, algo2: string) => string
  }): Transform;

  declare export function create(opts?: {
    strict?: boolean,
    options?: $ReadOnlyArray<string>,
    algorithms?: $ReadOnlyArray<string>
  }): CryptoHash;
}
