declare module "gulp" {
  import typeof * as vfs from "vinyl-fs";

  import typeof * as chokidar from "chokidar";

  import typeof * as Undertaker from "undertaker";

  import typeof * as fs from "fs";

  import type { Duplex } from "stream";

  declare type GulpClient$Globs = string | string[];

  declare type GulpClient$TaskFunction = Undertaker.GulpClient$TaskFunction;

  /**
   * @deprecated - Now use `TaskFunction`.
   */
  declare type GulpClient$TaskCallback = GulpClient$TaskFunction;

  declare type GulpClient$Gulp = {
    /**
     * Emits files matching provided glob or array of globs. Returns a stream of Vinyl files that can be piped to plugins.
     * @param globs Glob or array of globs to read.
     * @param options Options to pass to node-glob through glob-stream.
     */
    src: GulpClient$SrcMethod,

    /**
     * Can be piped to and it will write files. Re-emits all data passed to it so you can pipe to multiple folders.
     * Folders that don't exist will be created.
     * @param path The path (output folder) to write files to. Or a function that returns it, the function will be provided a vinyl File instance.
     */
    dest: GulpClient$DestMethod,

    /**
     * Functions exactly like gulp.dest, but will create symlinks instead of copying a directory.
     * @param folder A folder path or a function that receives in a file and returns a folder path.
     */
    symlink: typeof undefined,

    /**
     * Takes a path string, an array of path strings, a glob string or an array of glob strings as globs to watch on the filesystem.
     * Also optionally takes options to configure the watcher and a fn to execute when a file changes.
     * @globs A path string, an array of path strings, a glob string or an array of glob strings that indicate which files to watch for changes.
     * @opts Options that are passed to chokidar.
     * @fn Once async completion is signalled, if another run is queued, it will be executed.
     */
    watch: GulpClient$WatchMethod
  } & Undertaker;

  declare type GulpClient$WatchOptions = {
    /**
     * The delay to wait before triggering the fn.
     * Useful for waiting on many changes before doing the work on changed files, e.g. find-and-replace on many files.
     * @default 200
     */
    delay?: number,

    /**
     * Whether or not a file change should queue the fn execution if the fn is already running. Useful for a long running fn.
     * @default true
     */
    queue?: boolean
  } & chokidar.GulpClient$WatchOptions;

  declare interface GulpClient$WatchMethod {
    (
      globs: GulpClient$Globs,
      fn?: Undertaker.GulpClient$TaskFunction
    ): fs.FSWatcher;
    (
      globs: GulpClient$Globs,
      opts?: GulpClient$WatchOptions,
      fn?: Undertaker.GulpClient$TaskFunction
    ): fs.FSWatcher;
  }

  declare type GulpClient$SrcMethod = typeof undefined;

  declare type GulpClient$DestMethod = typeof undefined;
  declare var GulpClient: GulpClient$GulpClient$Gulp;
  declare module.exports: typeof GulpClient;
}
