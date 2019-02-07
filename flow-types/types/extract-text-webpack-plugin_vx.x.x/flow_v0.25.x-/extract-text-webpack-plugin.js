declare module "extract-text-webpack-plugin" {
  import type { Plugin, Loader } from "webpack";

  declare module.exports: typeof ExtractTextPlugin;

  /**
   * Use an `ExtractTextPlugin` instance and a loader returned by `extract` in concert to write files to disk instead of loading them into others.
   * Usage example at https://github.com/webpack/extract-text-webpack-plugin#usage-example-with-css
   */
  declare class ExtractTextPlugin mixins Plugin {
    /**
     * Create a plugin instance defining the extraction target file(s) for the files loaded by `extract`
     */
    constructor(
      options: string | ExtractTextPlugin$ExtractTextPlugin$PluginOptions
    ): this;

    /**
     * Creates an extracting loader from an existing loader (static).
     * Use the resulting loader in `module.rules`/`module.loaders`.
     * @see {@link https://www.npmjs.com/package/extract-text-webpack-plugin#extract}
     */
    static extract: (
      loader:
        | Loader
        | Loader[]
        | ExtractTextPlugin$ExtractTextPlugin$LoaderOptions
    ) => Loader[];

    /**
     * Creates an extracting loader from an existing loader (instance).
     * Use the resulting loader in `module.rules`/`module.loaders`.
     * @see {@link https://www.npmjs.com/package/extract-text-webpack-plugin#multiple-instances}
     */
    extract: (
      loader:
        | Loader
        | Loader[]
        | ExtractTextPlugin$ExtractTextPlugin$LoaderOptions
    ) => Loader[];
  }
  declare interface ExtractTextPlugin$PluginOptions {
    /**
     * the filename of the result file. May contain `[name]`, `[id]` and `[contenthash]`
     */
    filename: string;

    /**
     * extract from all additional chunks too (by default it extracts only from the initial chunk(s))
     */
    allChunks?: boolean;

    /**
     * disables the plugin
     */
    disable?: boolean;

    /**
     * Unique ident for this plugin instance. (For advanced usage only, by default automatically generated)
     */
    id?: string;
  }

  declare interface ExtractTextPlugin$LoaderOptions {
    /**
     * the loader(s) that should be used for converting the resource to a css exporting module
     */
    use: Loader | Loader[];

    /**
     * the loader(s) that should be used when the css is not extracted (i.e. in an additional chunk when `allChunks: false`)
     */
    fallback?: Loader | Loader[];

    /**
     * override the `publicPath` setting for this loader
     */
    publicPath?: string;
  }
}
