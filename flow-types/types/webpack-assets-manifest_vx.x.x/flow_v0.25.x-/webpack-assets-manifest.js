declare module "webpack-assets-manifest" {
  import type { Plugin } from "webpack";

  import type { SyncHook, SyncWaterfallHook } from "tapable";

  declare class WebpackAssetsManifest mixins Plugin {
    constructor(
      options?: WebpackAssetsManifest$WebpackAssetsManifest$Options
    ): this;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#hooks
     */
    hooks: {
      apply: SyncHook<WebpackAssetsManifest>,

      /**
       * The `SyncWaterfallHook` class supports 3 type parameters only but this hook actually has 4 parameters. The type of 4th parameter is `AnyObject`.
       *
       * Refer to https://github.com/webdeveric/webpack-assets-manifest#hooks for details
       */
      customize: SyncWaterfallHook<
        WebpackAssetsManifest$WebpackAssetsManifest$Entry,
        WebpackAssetsManifest$WebpackAssetsManifest$AnyObject,
        WebpackAssetsManifest
      >,
      transform: SyncWaterfallHook<
        WebpackAssetsManifest$WebpackAssetsManifest$AnyObject,
        WebpackAssetsManifest
      >,
      done: SyncHook<
        WebpackAssetsManifest,
        WebpackAssetsManifest$WebpackAssetsManifest$AnyObject
      >,
      options: SyncWaterfallHook<WebpackAssetsManifest$WebpackAssetsManifest$Options>,
      afterOptions: SyncHook<WebpackAssetsManifest$WebpackAssetsManifest$Options>
    };

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema
     */
    options: WebpackAssetsManifest$WebpackAssetsManifest$Options;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#options-read-the-schema
     */
    defaultOptions: WebpackAssetsManifest$WebpackAssetsManifest$Options;

    /**
     * Determine if the manifest data is currently being merged
     */
    isMerging: boolean;

    /**
     * Get the file extension
     */
    getExtension(filename: string): string;

    /**
     * Replace backslash with forward slash
     */
    fixKey(key: string): string;

    /**
     * Determine if the filename matches the HMR filename pattern
     */
    isHMR(filename: string): boolean;

    /**
     * Add item to assets without modifying the key or value
     */
    setRaw(key: string, value: string): this;

    /**
     * Add an item to the manifest
     */
    set(key: string, value: string): this;

    /**
     * Determine if an item exist in the manifest
     */
    has(key: string): boolean;

    /**
     * Get an item from the manifest
     */
    get(key: string, defaultValue?: string): any;

    /**
     * Delete an item from the manifest
     */
    delete(key: string): boolean;

    /**
     * Get the file system path to the manifest
     */
    getOutputPath(): string;

    /**
     * Get the public path for the filename
     */
    getPublicPath(filename: string): string;

    /**
     * Get a [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) for the manifest
     * @param raw - Use `setRaw` instead of `set`
     */
    getProxy(raw?: boolean): ProxyHandler<WebpackAssetsManifest>;
  }
  declare interface WebpackAssetsManifest$Options {
    /**
     * https://github.com/webdeveric/webpack-assets-manifest#assets
     */
    assets?: { [key: string]: any };

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#output
     */
    output?: string;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#replacer
     */
    replacer?:
      | null
      | $ReadOnlyArray<string>
      | ((
          key: string,
          value: string
        ) => number | string | boolean | null | { [key: string]: any } | void);

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#space
     */
    space?: number;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#writetodisk
     */
    writeToDisk?: boolean;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#fileextregex
     */
    fileExtRegex?: RegExp | null | false;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#sortmanifest
     */
    sortManifest?: boolean | ((a: string, b: string) => number);

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#merge
     */
    merge?: boolean | "customize";

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#publicpath
     */
    publicPath?:
      | string
      | boolean
      | null
      | ((filename: string, manifest: WebpackAssetsManifest) => string);

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#apply
     */
    apply?: ((manifest: WebpackAssetsManifest) => void) | null;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#customize
     */
    customize?:
      | ((
          entry: WebpackAssetsManifest$Entry,
          original: WebpackAssetsManifest$AnyObject,
          manifest: WebpackAssetsManifest,
          asset: WebpackAssetsManifest$AnyObject
        ) => WebpackAssetsManifest$Entry | false)
      | null;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#transform
     */
    transform?:
      | ((
          assets: WebpackAssetsManifest$AnyObject,
          manifest: WebpackAssetsManifest
        ) => any)
      | null;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#done
     */
    done?:
      | ((
          manifest: WebpackAssetsManifest,
          stats: WebpackAssetsManifest$AnyObject
        ) => void)
      | null;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#entrypoints
     */
    entrypoints?: boolean;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#entrypointskey
     */
    entrypointsKey?: string | false;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#integrity
     */
    integrity?: boolean;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#integrityhashes
     */
    integrityHashes?: $ReadOnlyArray<string>;

    /**
     * https://github.com/webdeveric/webpack-assets-manifest#integritypropertyname
     */
    integrityPropertyName?: string;
  }

  declare interface WebpackAssetsManifest$Entry {
    key: string;
    value: string;
  }

  declare type WebpackAssetsManifest$AnyObject = {
    [index: string]: any
  } & Object;

  declare module.exports: typeof WebpackAssetsManifest;
}
