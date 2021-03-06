declare module "browser-pack" {
  declare export interface browserPack$Options {
    /**
     * Whether the bundle should include require= (or the opts.externalRequireName) so that
     * require() is available outside the bundle
     */
    hasExports?: boolean;

    /**
     * A string to use in place of 'require' if opts.hasExports is specified, default is 'require'
     */
    externalRequireName?: string;

    /**
     * Specify a custom prelude, but know what you're doing first. See the prelude.js file in
     * this repo for the default prelude. If you specify a custom prelude, you must also specify
     * a valid opts.preludePath to the prelude source file for sourcemaps to work
     */
    prelude?: string;

    /**
     * prelude.js path if a custom opts.prelude is specified
     */
    preludePath?: string;

    /**
     * Used if opts.preludePath is undefined, this is used to resolve the prelude.js file location, default: 'process.cwd()'
     */
    basedir?: string;

    /**
     * if given, the writable end of the stream will expect objects to be written to
     * it instead of expecting a stream of json text it will need to parse, default false
     */
    raw?: boolean;

    /**
     * External string name to use for UMD, if not provided, UMD declaration is not wrapped around output
     */
    standalone?: string;

    /**
     * Sets the internal module name to export for standalone
     */
    standaloneModule?: string;

    /**
     * If given and source maps are computed, the opts.sourceMapPrefix string will be used instead of default: '//#'
     */
    sourceMapPrefix?: string;
  }

  /**
   * pack node-style source files from a json stream into a browser bundle
   */
  declare function browserPack(
    opts?: browserPack$browserPack$Options
  ): NodeJS.ReadWriteStream;

  declare module.exports: typeof browserPack;
}
