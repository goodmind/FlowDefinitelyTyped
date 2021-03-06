declare module "css-modules-require-hook" {
  declare interface Options {
    /**
     * Helps you to invalidate cache of all require calls.
     */
    devMode?: boolean;

    /**
     * Attach the require hook to additional file extensions.
     */
    extensions?: string | string[];

    /**
     * Provides possibility to exclude particular files from processing.
     */
    ignore?: string | RegExp | ((filepath: string) => boolean);

    /**
     * In rare cases you may want to precompile styles, before they will be passed to the PostCSS pipeline.
     */
    preprocessCss?: Function;

    /**
     * In rare cases you may want to get compiled styles in runtime, so providing this option helps.
     */
    processCss?: Function;

    /**
     * Provides possibility to pass custom options to the LazyResult instance.
     */
    processorOpts?: Object;

    /**
     * Camelizes exported class names.
     */
    camelCase?: boolean;

    /**
     * Appends custom plugins to the end of the PostCSS pipeline.
     */
    append?: any[];

    /**
     * Prepends custom plugins to the beginning of the PostCSS pipeline.
     */
    prepend?: any[];

    /**
     * Provides the full list of PostCSS plugins to the pipeline.
     */
    use?: any[];

    /**
     * Short alias for the postcss-modules-extract-imports plugin's createImportedName option.
     */
    createImportedName?: Function;

    /**
     * Short alias for the postcss-modules-scope plugin's option.
     */
    generateScopedName?: string | Function;

    /**
     * Short alias for the generic-names helper option.
     */
    hashPrefix?: string;

    /**
     * Short alias for the postcss-modules-local-by-default plugin's option.
     */
    mode?: string;

    /**
     * Provides absolute path to the project directory.
     */
    rootDir?: string;
  }
  declare var requireHook: (options?: Options) => void;
  declare module.exports: typeof requireHook;
}
