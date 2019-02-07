declare module "compression-webpack-plugin" {
  import type { Plugin } from "webpack";

  import type { CompressionPlugin$ZlibOptions as ZlibCompressionOptions } from "zlib";

  declare module.exports: typeof CompressionPlugin;

  declare class CompressionPlugin<O = any> mixins Plugin {
    constructor(options?: CompressionPlugin$CompressionPlugin$Options<O>): this;
  }
  declare type CompressionPlugin$AlgorithmCallback = (
    error: Error | null,
    result: Buffer
  ) => void;

  declare type CompressionPlugin$Algorithm<O> = (
    source: string,
    options: O,
    callback: CompressionPlugin$AlgorithmCallback
  ) => void;

  declare type CompressionPlugin$ZlibAlgorithm =
    | "deflate"
    | "deflateRaw"
    | "gzip";

  declare type CompressionPlugin$Pattern =
    | string
    | RegExp
    | $ReadOnlyArray<RegExp>
    | $ReadOnlyArray<string>;

  declare interface CompressionPlugin$BaseOptions {
    cache?: boolean | string;
    deleteOriginalAssets?: boolean;
    exclude?: CompressionPlugin$Pattern;
    filename?: string;
    include?: CompressionPlugin$Pattern;
    minRatio?: number;
    test?: CompressionPlugin$Pattern;
    threshold?: number;
  }

  declare type CompressionPlugin$ZlibOptions = {
    algorithm?: CompressionPlugin$ZlibAlgorithm,
    compressionOptions?: ZlibCompressionOptions
  } & CompressionPlugin$BaseOptions;

  declare type CompressionPlugin$CustomOptions<O> = {
    algorithm: CompressionPlugin$Algorithm<O>,
    compressionOptions?: O
  } & CompressionPlugin$BaseOptions;

  declare type CompressionPlugin$Options<O> =
    | CompressionPlugin$ZlibOptions
    | CompressionPlugin$CustomOptions<O>;
}
