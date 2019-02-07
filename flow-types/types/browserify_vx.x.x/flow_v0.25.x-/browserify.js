declare module "browserify" {
  declare var browserify: browserify$browserify$BrowserifyConstructor;
  declare module.exports: typeof browserify;

  /**
   * Options pertaining to an individual file.
   */
  declare interface browserify$FileOptions {
    entry?: boolean;
    expose?: string;
    basedir?: string;
    file?: string;
    external?: boolean;
    transform?: boolean;
    id?: string;
  }

  declare type browserify$InputFile =
    | string
    | NodeJS.ReadableStream
    | browserify$FileOptions;

  /**
   * Core options pertaining to a Browserify instance, extended by user options
   */
  declare interface browserify$CustomOptions {
    /**
     * Custom properties can be defined on Options.
     * These options are forwarded along to module-deps and browser-pack directly.
     */
    [propName: string]: any;

    /**
     * the directory that Browserify starts bundling from for filenames that start with ..
     */
    basedir?: string;
  }

  /**
   * Options pertaining to a Browserify instance.
   */
  declare type browserify$Options = {
    entries?: browserify$InputFile | browserify$InputFile[],
    noParse?: string[],
    extensions?: string[],
    paths?: string[],
    commondir?: boolean,
    fullPaths?: boolean,
    builtins?:
      | string[]
      | {
          [builtinName: string]: string
        }
      | boolean,
    bundleExternal?: boolean,
    insertGlobals?: boolean,
    detectGlobals?: boolean,
    debug?: boolean,
    standalone?: string,
    insertGlobalVars?: insertGlobals.VarsOption,
    externalRequireName?: string
  } & browserify$CustomOptions;

  declare interface browserify$BrowserifyConstructor {
    (
      files: browserify$InputFile[],
      opts?: browserify$Options
    ): browserify$BrowserifyObject;
    (
      file: browserify$InputFile,
      opts?: browserify$Options
    ): browserify$BrowserifyObject;
    (opts?: browserify$Options): browserify$BrowserifyObject;
    new(
      files: browserify$InputFile[],
      opts?: browserify$Options
    ): browserify$BrowserifyObject;
    new(
      file: browserify$InputFile,
      opts?: browserify$Options
    ): browserify$BrowserifyObject;
    new(opts?: browserify$Options): browserify$BrowserifyObject;
  }

  declare type browserify$BrowserifyObject = {
    /**
     * Add an entry file from file that will be executed when the bundle loads.
     * If file is an array, each item in file will be added as an entry file.
     */
    add(
      file: browserify$InputFile | browserify$InputFile[],
      opts?: browserify$FileOptions
    ): browserify$BrowserifyObject,

    /**
     * Make file available from outside the bundle with require(file).
     * The file param is anything that can be resolved by require.resolve().
     * file can also be a stream, but you should also use opts.basedir so that relative requires will be resolvable.
     * If file is an array, each item in file will be required. In file array form, you can use a string or object for each item. Object items should have a file property and the rest of the parameters will be used for the opts.
     * Use the expose property of opts to specify a custom dependency name. require('./vendor/angular/angular.js', {expose: 'angular'}) enables require('angular')
     */
    require(
      file: browserify$InputFile,
      opts?: browserify$FileOptions
    ): browserify$BrowserifyObject,

    /**
     * Bundle the files and their dependencies into a single javascript file.
     * Return a readable stream with the javascript file contents or optionally specify a cb(err, buf) to get the buffered results.
     */
    bundle(cb?: (err: any, src: Buffer) => any): NodeJS.ReadableStream,

    /**
     * Prevent file from being loaded into the current bundle, instead referencing from another bundle.
     * If file is an array, each item in file will be externalized.
     * If file is another bundle, that bundle's contents will be read and excluded from the current bundle as the bundle in file gets bundled.
     */
    external(
      file: string[],
      opts?: browserify$CustomOptions
    ): browserify$BrowserifyObject,
    external(
      file: string,
      opts?: browserify$CustomOptions
    ): browserify$BrowserifyObject,
    external(file: browserify$BrowserifyObject): browserify$BrowserifyObject,

    /**
     * Prevent the module name or file at file from showing up in the output bundle.
     * Instead you will get a file with module.exports = {}.
     */
    ignore(
      file: string,
      opts?: browserify$CustomOptions
    ): browserify$BrowserifyObject,

    /**
     * Prevent the module name or file at file from showing up in the output bundle.
     * If your code tries to require() that file it will throw unless you've provided another mechanism for loading it.
     */
    exclude(
      file: string,
      opts?: browserify$CustomOptions
    ): browserify$BrowserifyObject,

    /**
     * Transform source code before parsing it for require() calls with the transform function or module name tr.
     * If tr is a function, it will be called with tr(file) and it should return a through-stream that takes the raw file contents and produces the transformed source.
     * If tr is a string, it should be a module name or file path of a transform module
     */
    transform<T: browserify$CustomOptions>(
      tr: string,
      opts?: T
    ): browserify$BrowserifyObject,
    transform<T: browserify$CustomOptions>(
      tr: (file: string, opts: T) => NodeJS.ReadWriteStream,
      opts?: T
    ): browserify$BrowserifyObject,

    /**
     * Register a plugin with opts. Plugins can be a string module name or a function the same as transforms.
     * plugin(b, opts) is called with the Browserify instance b.
     */
    plugin<T: browserify$CustomOptions>(
      plugin: string,
      opts?: T
    ): browserify$BrowserifyObject,
    plugin<T: browserify$CustomOptions>(
      plugin: (b: browserify$BrowserifyObject, opts: T) => any,
      opts?: T
    ): browserify$BrowserifyObject,

    /**
     * Reset the pipeline back to a normal state. This function is called automatically when bundle() is called multiple times.
     * This function triggers a 'reset' event.
     */
    reset(opts?: browserify$Options): void,

    /**
     * When a file is resolved for the bundle, the bundle emits a 'file' event with the full file path, the id string passed to require(), and the parent object used by browser-resolve.
     * You could use the file event to implement a file watcher to regenerate bundles when files change.
     */
    on(
      event: "file",
      listener: (file: string, id: string, parent: any) => any
    ): this,

    /**
     * When a package.json file is read, this event fires with the contents.
     * The package directory is available at pkg.__dirname.
     */
    on(event: "package", listener: (pkg: any) => any): this,

    /**
     * When .bundle() is called, this event fires with the bundle output stream.
     */
    on(event: "bundle", listener: (bundle: NodeJS.ReadableStream) => any): this,

    /**
     * When the .reset() method is called or implicitly called by another call to .bundle(), this event fires.
     */
    on(event: "reset", listener: () => any): this,

    /**
     * When a transform is applied to a file, the 'transform' event fires on the bundle stream with the transform stream tr and the file that the transform is being applied to.
     */
    on(
      event: "transform",
      listener: (tr: NodeJS.ReadWriteStream, file: string) => any
    ): this,
    on(event: string, listener: Function): this,

    /**
     * Set to any until substack/labeled-stream-splicer is defined
     */
    pipeline: any
  } & NodeJS.EventEmitter;
}
