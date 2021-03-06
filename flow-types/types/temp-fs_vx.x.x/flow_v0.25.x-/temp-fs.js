declare module "temp-fs" {
  declare export default typeof tempfs;

  declare var npm$namespace$tempfs: {
    clear: typeof tempfs$clear,
    clearSync: typeof tempfs$clearSync,
    dir: typeof tempfs$dir,
    mkdir: typeof tempfs$mkdir,
    mkdirSync: typeof tempfs$mkdirSync,
    name: typeof tempfs$name,
    open: typeof tempfs$open,
    openSync: typeof tempfs$openSync,
    track: typeof tempfs$track
  };

  /**
   * A tempdir.
   */
  declare interface tempfs$dir {
    /**
     * The absolute path to the tempdir.
     */
    path: String;

    /**
     * Whether {@link dir#unlink} will remove the tempdir recursively.
     */
    recursive: Boolean;

    /**
     * A special function for you to remove the directory.
     *
     * If the directory is not tracked, it may throw when an error occurs or
     * the first argument of the callback function will be an Error object.
     * @param callback makes it asynchronous.
     */
    unlink(callback?: (error: Error) => any): any;
  }

  /**
   * A tempfile.
   */
  declare interface tempfs$file {
    /**
     * The absolute path to the tempfile.
     */
    path: String;

    /**
     * An integer file descriptor.
     */
    fd: Number;

    /**
     * A special function for you to delete the file.
     *
     * If the file is not tracked, it may throw when an error occurs or the
     * first argument of the callback function will be an Error object.
     * @param callback makes it asynchronous.
     */
    unlink(callback?: (error: Error) => any): any;
  }

  /**
   * Options.
   */
  declare interface tempfs$options {
    /**
     * Where to put the generated tempfile or tempdir.
     *
     * Also see {@link options#name}. Default: <code>tempfs.dir()</code>
     */
    dir?: String;

    /**
     * The maximum number of chance to retry before throwing an error.
     *
     * It should be a finite number. Default: 5
     */
    limit?: Number;

    /**
     * File mode (default: 0600) or directory mode (default: 0700) to use.
     */
    mode?: Number;

    /**
     * If set, join the two paths <code>{@link options#dir} ||
     * tempfs.dir()</code> and {@link options#name} together and use the
     * result as the customized filename/pathname.
     */
    name?: String;

    /**
     * The prefix for the generated random name.
     *
     * Default: "tmp-"
     */
    prefix?: String;

    /**
     * Whether {@link dir#unlink} should remove a directory recursively.
     *
     * Default: false
     */
    recursive?: Boolean;

    /**
     * The suffix for the generated random name.
     *
     * Default: ""
     */
    suffix?: String;

    /**
     * A string containing some capital letters Xs for substitution with
     * random characters.
     *
     * Then it is used as part of the filename/dirname. Just like what you
     * do with the <code>mktemp(3)</code> function in the C library.
     */
    template?: String;

    /**
     * If set to true, let temp-fs manage the the current file/directory for
     * you even if the global tracking is off. If set to false, don't let
     * temp-fs manage it even if the global tracking is on. Otherwise, use
     * the current global setting.
     */
    track?: Boolean;
  }

  /**
   * Remove all tracked files and directories asynchronously.
   */
  declare function tempfs$clear(callback?: () => any): any;

  /**
   * Remove all tracked files and directories synchronously.
   */
  declare function tempfs$clearSync(): any;

  /**
   * Return the path of a system-provided tempdir as
   * <code>require('os').tmpdir()</code> does.
   *
   * You should not make any assumption about whether the path contains a
   * trailing path separator, or it is a real path. On most system it is not a
   * fixed path, and it can be changed by the user environment. When in doubt,
   * check it first.
   */
  declare function tempfs$dir(): string;

  /**
   * Try to create a new tempdir asynchronously.
   * @param callback function receives two arguments <code>error</code> and
   * <code>dir</code>. If <code>error</code> is
   * <code>null</code>, <code>dir</code> has the properties of
   * {@link dir}.
   */
  declare function tempfs$mkdir(
    options?: tempfs$options,
    callback?: (err: any, dir: tempfs$dir) => any
  ): any;

  /**
   * The synchronous version of {@link mkdir}.
   * @throws when an error happens.
   */
  declare function tempfs$mkdirSync(options?: tempfs$options): tempfs$dir;

  /**
   * Return a customized/random filename/dirname.
   */
  declare function tempfs$name(options?: tempfs$options): string;

  /**
   * Try to open a unique tempfile asynchronously.
   * @param callback function receives two arguments <code>error</code> and
   * <code>file</code>. If <code>error</code> is
   * <code>null</code>, <code>file</code> has the properties
   * of {@link file}.
   */
  declare function tempfs$open(
    callback?: (err: any, file: tempfs$file) => any
  ): any;

  declare function tempfs$open(
    options?: tempfs$options,
    callback?: (err: any, file: tempfs$file) => any
  ): any;

  /**
   * The synchronous version of {@link open}.
   * @throws when an error happens.
   */
  declare function tempfs$openSync(options?: tempfs$options): tempfs$file;

  /**
   * Use it to switch global files/directories tracking on or off.
   *
   * Turn it on if you don't want to manually delete everything. When it is
   * turned off, all recorded files and directories will not be removed but
   * still kept in case it is turned on again before the program exits.
   *
   * This switch does not affect manually tracked files through
   * {@link options#track}. They will be removed automatically on exit.
   *
   * <b>Note: When an uncaught exception occurs, all tracked temporary files
   * and directories will be removed no matter it is on or off.</b>
   */
  declare function tempfs$track(on?: Boolean): void;
}
