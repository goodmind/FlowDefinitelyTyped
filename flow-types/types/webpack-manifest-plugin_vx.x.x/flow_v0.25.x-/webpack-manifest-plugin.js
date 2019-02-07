declare module "webpack-manifest-plugin" {
  import type { Plugin } from "webpack";

  declare module.exports: typeof WebpackManifestPlugin;

  declare class WebpackManifestPlugin mixins Plugin {
    constructor(
      options?: WebpackManifestPlugin$WebpackManifestPlugin$Options
    ): this;
  }
  declare interface WebpackManifestPlugin$Chunk {
    id: string;
    parents: string[];
    [propName: string]: any;
  }

  declare interface WebpackManifestPlugin$FileDescriptor {
    path: string;
    name: string | null;

    /**
     * Is required to run you app. Cannot be true if isChunk is false.
     */
    isInitial: boolean;
    isChunk: boolean;

    /**
     * Only available is isChunk is true.
     */
    chunk?: WebpackManifestPlugin$Chunk;
    isAsset: boolean;

    /**
     * Is required by a module. Cannot be true if isAsset is false.
     */
    isModuleAsset: boolean;
  }

  declare interface WebpackManifestPlugin$Options {
    /**
     * The manifest filename in your output directory.
     * Default: manifest.json
     */
    fileName?: string;

    /**
     * A path prefix that will be added to values of the manifest.
     * Default: output.publicPath
     */
    publicPath?: string;

    /**
     * A path prefix for all keys. Useful for including your output path in the manifest.
     */
    basePath?: string;

    /**
     * If set to true will emit to build folder and memory in combination with webpack-dev-server
     * Default: false
     */
    writeToFileEmit?: boolean;

    /**
     * A cache of key/value pairs to used to seed the manifest. This may include a set of custom key/value pairs to include in your manifest,
     * or may be used to combine manifests across compilations in multi-compiler mode.
     * To combine manifests, pass a shared seed object to each compiler's ManifestPlugin instance.
     * Default: {}
     */
    seed?: { [key: string]: any };

    /**
     * Filter out files.
     */
    filter?: (file: WebpackManifestPlugin$FileDescriptor) => boolean;

    /**
     * Modify files details before the manifest is created.
     */
    map?: (
      file: WebpackManifestPlugin$FileDescriptor
    ) => WebpackManifestPlugin$FileDescriptor;

    /**
     * Sort files before they are passed to generate.
     */
    sort?: (
      a: WebpackManifestPlugin$FileDescriptor,
      b: WebpackManifestPlugin$FileDescriptor
    ) => number;

    /**
     * Create the manifest. It can return anything as long as it's serialisable by JSON.stringify.
     */
    generate?: (
      seed: { [key: string]: any },
      files: WebpackManifestPlugin$FileDescriptor[]
    ) => { [key: string]: any };

    /**
     * Output manifest file in different format then json (i.e. yaml).
     */
    serialize?: (manifest: { [key: string]: any }) => string;
  }
}
