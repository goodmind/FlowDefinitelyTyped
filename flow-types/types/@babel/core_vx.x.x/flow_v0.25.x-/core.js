declare module "@babel/core" {
  import type { GeneratorOptions } from "@babel/generator";

  import type traverse, { Visitor, NodePath } from "@babel/traverse";

  import typeof template from "@babel/template";

  import typeof * as t from "@babel/types";

  import type { ParserOptions } from "@babel/parser";

  declare export {
    ParserOptions,
    GeneratorOptions,
    t as types,
    template,
    traverse,
    Visitor
  };

  declare export type Node = t.Node;
  declare export type ParseResult = t.File | t.Program;
  declare export var version: string;
  declare export interface TransformOptions {
    /**
     * Include the AST in the returned object
     *
     * Default: `false`
     */
    ast?: boolean | null;

    /**
     * Attach a comment after all non-user injected code
     *
     * Default: `null`
     */
    auxiliaryCommentAfter?: string | null;

    /**
     * Attach a comment before all non-user injected code
     *
     * Default: `null`
     */
    auxiliaryCommentBefore?: string | null;

    /**
     * Specify the "root" folder that defines the location to search for "babel.config.js", and the default folder to allow `.babelrc` files inside of.
     *
     * Default: `"."`
     */
    root?: string | null;

    /**
     * The config file to load Babel's config from. Defaults to searching for "babel.config.js" inside the "root" folder. `false` will disable searching for config files.
     *
     * Default: `undefined`
     */
    configFile?: string | false | null;

    /**
     * Specify whether or not to use .babelrc and
     * .babelignore files.
     *
     * Default: `true`
     */
    babelrc?: boolean | null;

    /**
     * Specify which packages should be search for .babelrc files when they are being compiled. `true` to always search, or a path string or an array of paths to packages to search
     * inside of. Defaults to only searching the "root" package.
     *
     * Default: `(root)`
     */
    babelrcRoots?: true | string | string[] | null;

    /**
     * Defaults to environment variable `BABEL_ENV` if set, or else `NODE_ENV` if set, or else it defaults to `"development"`
     *
     * Default: env vars
     */
    envName?: string | null;

    /**
     * Enable code generation
     *
     * Default: `true`
     */
    code?: boolean | null;

    /**
     * Output comments in generated output
     *
     * Default: `true`
     */
    comments?: boolean | null;

    /**
     * Do not include superfluous whitespace characters and line terminators. When set to `"auto"` compact is set to `true` on input sizes of >500KB
     *
     * Default: `"auto"`
     */
    compact?: boolean | "auto" | null;

    /**
     * The working directory that Babel's programmatic options are loaded relative to.
     *
     * Default: `"."`
     */
    cwd?: string | null;

    /**
     * This is an object of keys that represent different environments. For example, you may have: `{ env: { production: { \/* specific options *\/ } } }`
     * which will use those options when the `envName` is `production`
     *
     * Default: `{}`
     */
    env?: {
      [index: string]: TransformOptions | null | void
    } | null;

    /**
     * A path to a `.babelrc` file to extend
     *
     * Default: `null`
     */
    extends?: string | null;

    /**
     * Filename for use in errors etc
     *
     * Default: `"unknown"`
     */
    filename?: string | null;

    /**
     * Filename relative to `sourceRoot`
     *
     * Default: `(filename)`
     */
    filenameRelative?: string | null;

    /**
     * An object containing the options to be passed down to the babel code generator, @babel/generator
     *
     * Default: `{}`
     */
    generatorOpts?: GeneratorOptions | null;

    /**
     * Specify a custom callback to generate a module id with. Called as `getModuleId(moduleName)`. If falsy value is returned then the generated module id is used
     *
     * Default: `null`
     */
    getModuleId?: ((moduleName: string) => string | null | void) | null;

    /**
     * ANSI highlight syntax error code frames
     *
     * Default: `true`
     */
    highlightCode?: boolean | null;

    /**
     * Opposite to the `only` option. `ignore` is disregarded if `only` is specified
     *
     * Default: `null`
     */
    ignore?: string[] | null;

    /**
     * A source map object that the output source map will be based on
     *
     * Default: `null`
     */
    inputSourceMap?: { [key: string]: any } | null;

    /**
     * Should the output be minified (not printing last semicolons in blocks, printing literal string values instead of escaped ones, stripping `()` from `new` when safe)
     *
     * Default: `false`
     */
    minified?: boolean | null;

    /**
     * Specify a custom name for module ids
     *
     * Default: `null`
     */
    moduleId?: string | null;

    /**
     * If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for `common` modules)
     *
     * Default: `false`
     */
    moduleIds?: boolean | null;

    /**
     * Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions
     *
     * Default: `(sourceRoot)`
     */
    moduleRoot?: string | null;

    /**
     * A glob, regex, or mixed array of both, matching paths to **only** compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile
     * a non-matching file it's returned verbatim
     *
     * Default: `null`
     */
    only?: string | RegExp | Array<string | RegExp> | null;

    /**
     * An object containing the options to be passed down to the babel parser, @babel/parser
     *
     * Default: `{}`
     */
    parserOpts?: ParserOptions | null;

    /**
     * List of plugins to load and use
     *
     * Default: `[]`
     */
    plugins?: PluginItem[] | null;

    /**
     * List of presets (a set of plugins) to load and use
     *
     * Default: `[]`
     */
    presets?: PluginItem[] | null;

    /**
     * Retain line numbers. This will lead to wacky code but is handy for scenarios where you can't use source maps. (**NOTE**: This will not retain the columns)
     *
     * Default: `false`
     */
    retainLines?: boolean | null;

    /**
     * An optional callback that controls whether a comment should be output or not. Called as `shouldPrintComment(commentContents)`. **NOTE**: This overrides the `comment` option when used
     *
     * Default: `null`
     */
    shouldPrintComment?: ((commentContents: string) => boolean) | null;

    /**
     * Set `sources[0]` on returned source map
     *
     * Default: `(filenameRelative)`
     */
    sourceFileName?: string | null;

    /**
     * If truthy, adds a `map` property to returned output. If set to `"inline"`, a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to `"both"`
     * then a `map` property is returned as well as a source map comment appended. **This does not emit sourcemap files by itself!**
     *
     * Default: `false`
     */
    sourceMaps?: boolean | "inline" | "both" | null;

    /**
     * The root from which all sources are relative
     *
     * Default: `(moduleRoot)`
     */
    sourceRoot?: string | null;

    /**
     * Indicate the mode the code should be parsed in. Can be one of "script", "module", or "unambiguous". `"unambiguous"` will make Babel attempt to guess, based on the presence of ES6
     * `import` or `export` statements. Files with ES6 `import`s and `export`s are considered `"module"` and are otherwise `"script"`.
     *
     * Default: `("module")`
     */
    sourceType?: "script" | "module" | "unambiguous" | null;

    /**
     * An optional callback that can be used to wrap visitor methods. **NOTE**: This is useful for things like introspection, and not really needed for implementing anything. Called as
     * `wrapPluginVisitorMethod(pluginAlias, visitorType, callback)`.
     */
    wrapPluginVisitorMethod?:
      | ((
          pluginAlias: string,
          visitorType: "enter" | "exit",
          callback: (path: NodePath, state: any) => void
        ) => (path: NodePath, state: any) => void)
      | null;
  }
  declare export type FileResultCallback = (
    err: Error | null,
    result: BabelFileResult | null
  ) => any;

  /**
   * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
   */
  declare export function transform(
    code: string,
    callback: FileResultCallback
  ): void;

  /**
   * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
   */
  declare export function transform(
    code: string,
    opts: TransformOptions | void,
    callback: FileResultCallback
  ): void;

  /**
   * Here for backward-compatibility. Ideally use `transformSync` if you want a synchronous API.
   */
  declare export function transform(
    code: string,
    opts?: TransformOptions
  ): BabelFileResult | null;

  /**
   * Transforms the passed in code. Returning an object with the generated code, source map, and AST.
   */
  declare export function transformSync(
    code: string,
    opts?: TransformOptions
  ): BabelFileResult | null;

  /**
   * Transforms the passed in code. Calling a callback with an object with the generated code, source map, and AST.
   */
  declare export function transformAsync(
    code: string,
    opts?: TransformOptions
  ): Promise<BabelFileResult | null>;

  /**
   * Asynchronously transforms the entire contents of a file.
   */
  declare export function transformFile(
    filename: string,
    callback: FileResultCallback
  ): void;

  /**
   * Asynchronously transforms the entire contents of a file.
   */
  declare export function transformFile(
    filename: string,
    opts: TransformOptions | void,
    callback: FileResultCallback
  ): void;

  /**
   * Synchronous version of `babel.transformFile`. Returns the transformed contents of the `filename`.
   */
  declare export function transformFileSync(
    filename: string,
    opts?: TransformOptions
  ): BabelFileResult | null;

  /**
   * Asynchronously transforms the entire contents of a file.
   */
  declare export function transformFileAsync(
    filename: string,
    opts?: TransformOptions
  ): Promise<BabelFileResult | null>;

  /**
   * Given an AST, transform it.
   */
  declare export function transformFromAst(
    ast: Node,
    code: string | void,
    callback: FileResultCallback
  ): void;

  /**
   * Given an AST, transform it.
   */
  declare export function transformFromAst(
    ast: Node,
    code: string | void,
    opts: TransformOptions | void,
    callback: FileResultCallback
  ): void;

  /**
   * Here for backward-compatibility. Ideally use ".transformSync" if you want a synchronous API.
   */
  declare export function transformFromAstSync(
    ast: Node,
    code?: string,
    opts?: TransformOptions
  ): BabelFileResult | null;

  /**
   * Given an AST, transform it.
   */
  declare export function transformFromAstAsync(
    ast: Node,
    code?: string,
    opts?: TransformOptions
  ): Promise<BabelFileResult | null>;

  declare export interface PluginObj<S = {}> {
    name?: string;
    manipulateOptions?: (opts: any, parserOpts: any) => void;
    pre?: (state: any) => void;
    visitor: Visitor<S>;
    post?: (state: any) => void;
    inherits?: any;
  }
  declare export interface BabelFileResult {
    ast?: t.File | null;
    code?: string | null;
    ignored?: boolean;
    map?: {
      version: number,
      sources: string[],
      names: string[],
      sourceRoot?: string,
      sourcesContent?: string[],
      mappings: string,
      file: string
    } | null;
    metadata?: BabelFileMetadata;
  }
  declare export interface BabelFileMetadata {
    usedHelpers: string[];
    marked: Array<{
      type: string,
      message: string,
      loc: { [key: string]: any }
    }>;
    modules: BabelFileModulesMetadata;
  }
  declare export interface BabelFileModulesMetadata {
    imports: { [key: string]: any }[];
    exports: {
      exported: { [key: string]: any }[],
      specifiers: { [key: string]: any }[]
    };
  }
  declare export type FileParseCallback = (
    err: Error | null,
    result: ParseResult | null
  ) => any;

  /**
   * Given some code, parse it using Babel's standard behavior.
   * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
   */
  declare export function parse(
    code: string,
    callback: FileParseCallback
  ): void;

  /**
   * Given some code, parse it using Babel's standard behavior.
   * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
   */
  declare export function parse(
    code: string,
    options: TransformOptions | void,
    callback: FileParseCallback
  ): void;

  /**
   * Given some code, parse it using Babel's standard behavior.
   * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
   */
  declare export function parse(
    code: string,
    options?: TransformOptions
  ): ParseResult | null;

  /**
   * Given some code, parse it using Babel's standard behavior.
   * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
   */
  declare export function parseSync(
    code: string,
    options?: TransformOptions
  ): ParseResult | null;

  /**
   * Given some code, parse it using Babel's standard behavior.
   * Referenced presets and plugins will be loaded such that optional syntax plugins are automatically enabled.
   */
  declare export function parseAsync(
    code: string,
    options?: TransformOptions
  ): Promise<ParseResult | null>;

  /**
   * Resolve Babel's options fully, resulting in an options object where:
   *
   * * opts.plugins is a full list of Plugin instances.
   * * opts.presets is empty and all presets are flattened into opts.
   * * It can be safely passed back to Babel. Fields like babelrc have been set to false so that later calls to Babel
   * will not make a second attempt to load config files.
   *
   * Plugin instances aren't meant to be manipulated directly, but often callers will serialize this opts to JSON to
   * use it as a cache key representing the options Babel has received. Caching on this isn't 100% guaranteed to
   * invalidate properly, but it is the best we have at the moment.
   */
  declare export function loadOptions(
    options?: TransformOptions
  ): { [key: string]: any } | null;

  /**
   * To allow systems to easily manipulate and validate a user's config, this function resolves the plugins and
   * presets and proceeds no further. The expectation is that callers will take the config's .options, manipulate it
   * as then see fit and pass it back to Babel again.
   *
   * * `babelrc: string | void` - The path of the `.babelrc` file, if there was one.
   * * `babelignore: string | void` - The path of the `.babelignore` file, if there was one.
   * * `options: ValidatedOptions` - The partially resolved options, which can be manipulated and passed back
   * to Babel again.
   *   * `plugins: Array<ConfigItem>` - See below.
   *   * `presets: Array<ConfigItem>` - See below.
   *   * It can be safely passed back to Babel. Fields like `babelrc` have been set to false so that later calls to
   * Babel will not make a second attempt to load config files.
   *
   * `ConfigItem` instances expose properties to introspect the values, but each item should be treated as
   * immutable. If changes are desired, the item should be removed from the list and replaced with either a normal
   * Babel config value, or with a replacement item created by `babel.createConfigItem`. See that function for
   * information about `ConfigItem` fields.
   */
  declare export function loadPartialConfig(
    options?: TransformOptions
  ): $ReadOnly<PartialConfig> | null;

  declare export interface PartialConfig {
    options: TransformOptions;
    babelrc?: string;
    babelignore?: string;
    config?: string;
  }
  declare export interface ConfigItem {
    /**
     * The name that the user gave the plugin instance, e.g. `plugins: [ ['env', {}, 'my-env'] ]`
     */
    name?: string;

    /**
     * The resolved value of the plugin.
     */
    value: { [key: string]: any } | ((...args: any[]) => any);

    /**
     * The options object passed to the plugin.
     */
    options?: { [key: string]: any } | false;

    /**
     * The path that the options are relative to.
     */
    dirname: string;

    /**
     * Information about the plugin's file, if Babel knows it.
     *   *
     */
    file?: {
      /**
       * The file that the user requested, e.g. `"@babel/env"`
       */
      request: string,

      /**
       * The full path of the resolved file, e.g. `"/tmp/node_modules/@babel/preset-env/lib/index.js"`
       */
      resolved: string
    } | null;
  }
  declare export type PluginOptions = { [key: string]: any } | void | false;
  declare export type PluginTarget =
    | string
    | { [key: string]: any }
    | ((...args: any[]) => any);
  declare export type PluginItem =
    | ConfigItem
    | PluginObj<any>
    | PluginTarget
    | [PluginTarget, PluginOptions]
    | [PluginTarget, PluginOptions, string | void];
  declare export interface CreateConfigItemOptions {
    dirname?: string;
    type?: "preset" | "plugin";
  }

  /**
   * Allows build tooling to create and cache config items up front. If this function is called multiple times for a
   * given plugin, Babel will call the plugin's function itself multiple times. If you have a clear set of expected
   * plugins and presets to inject, pre-constructing the config items would be recommended.
   */
  declare export function createConfigItem(
    value:
      | PluginTarget
      | [PluginTarget, PluginOptions]
      | [PluginTarget, PluginOptions, string | void],
    options?: CreateConfigItemOptions
  ): ConfigItem;
}
