/**
 * {@link https://github.com/marak/colors.js/}
 */
declare interface String {
  yellow: string;
  cyan: string;
  white: string;
  magenta: string;
  green: string;
  red: string;
  grey: string;
  blue: string;
}
/**
 * {@link http://npmjs.org/doc/json.html}
 */
declare interface node$NodePackage {
  name: string;
  version: string;
  description?: string;
  keywords?: string[];
  homepage?: string;
}
/**
 * A minimal matching utility options.
 *
 * This is the matching library used internally by npm.
 * Eventually, it will replace the C binding in node-glob.
 * It works by converting glob expressions into JavaScript RegExp objects.
 */
declare interface minimatch$IMinimatchOptions {
  /**
   * Dump a ton of stuff to stderr.
   */
  debug?: boolean;

  /**
   * Do not expand {a,b} and {1..3} brace sets.
   */
  nobrace?: boolean;

  /**
   * Disable ** matching against multiple folder names.
   */
  noglobstar?: boolean;

  /**
   * Allow patterns to match filenames starting with a period,
   * even if the pattern does not explicitly have a period in that spot.
   */
  dot?: boolean;

  /**
   * Disable "extglob" style patterns like +(a|b).
   */
  noext?: boolean;

  /**
   * Perform a case-insensitive match.
   */
  nocase?: boolean;

  /**
   * When a match is not found by minimatch.match, return a list containing the pattern itself.
   * When set, an empty list is returned if there are no matches.
   */
  nonull?: boolean;

  /**
   * If set, then patterns without slashes will be matched against the basename of the path if it contains slashes.
   * For example, a?b would match the path /xyz/123/acb, but not /xyz/acb/123.
   */
  matchBase?: boolean;

  /**
   * Suppress the behavior of treating # at the start of a pattern as a comment.
   */
  nocomment?: boolean;

  /**
   * Suppress the behavior of treating a leading ! character as negation.
   */
  nonegate?: boolean;

  /**
   * Returns from negate expressions the same as if they were not negated. (Ie, true on a hit, false on a miss.)
   */
  flipNegate?: boolean;
}
/**
 * {@link http://gruntjs.com/sample-gruntfile}
 */
declare interface config$IProjectConfig {
  [plugin: string]: any;
}

/**
 * {@link http://gruntjs.com/api/grunt.config}
 */
declare interface config$ConfigModule {
  /**
   * Get or set a value from the project's Grunt configuration.
   * This method serves as an alias to other methods;
   * if two arguments are passed, grunt.config.set is called,
   * otherwise grunt.config.get is called.
   */
  (prop: string, value: any): any;
  (prop: string): any;

  /**
   * Initialize a configuration object for the current project.
   * The specified configObject is used by tasks and can be accessed using the grunt.config method.
   * Nearly every project's Gruntfile will call this method.
   */
  init(config: config$IProjectConfig): void;

  /**
   * Get a value from the project's Grunt configuration.
   * If prop is specified, that property's value is returned, or null if that property is not defined.
   * If prop isn't specified, a copy of the entire config object is returned.
   * Templates strings will be recursively processed using the grunt.config.process method.
   * @note Although this accepts a generic type, you may still get the wrong typed value.
   */
  get<T>(prop: string): T;
  get(): config$ConfigModule;

  /**
   * Process a value, recursively expanding <% %> templates (via the grunt.template.process method)
   * in the context of the Grunt config, as they are encountered.
   * this method is called automatically by grunt.config.get but not by grunt.config.getRaw.
   *
   * If any retrieved value is entirely a single '<%= foo %>' or '<%= foo.bar %>' template string,
   * and the specified foo or foo.bar property is a non-string (and not null or undefined) value,
   * it will be expanded to the actual value. That, combined with grunt's task system automatically
   * flattening arrays, can be extremely useful.
   */
  process<T>(value: string): T;

  /**
   * Get a raw value from the project's Grunt configuration, without processing <% %> template strings.
   * If prop is specified, that property's value is returned, or null if that property is not defined.
   * If prop isn't specified, a copy of the entire config object is returned.
   */
  getRaw<T>(prop: string): T;

  /**
   * Set a value into the project's Grunt configuration.
   * @note any specified <% %> template strings will only be processed when config data is retrieved.
   */
  set<T>(prop: string, value: T): T;

  /**
   * Escape '.' dots in the given propString. This should be used for property names that contain dots.
   */
  escape(propString: string): string;

  /**
   * Fail the current task if one or more required config properties is missing, null or undefined.
   * One or more string or array config properties may be specified.
   */
  requires(prop: string, ...andProps: string[]): void;
  requires(prop: string[], ...andProps: string[][]): void;

  /**
   * Recursively merges properties of the specified configObject into the current project configuration.
   * You can use this method to append configuration options, targets, etc., to already defined tasks.
   */
  merge<T>(configObject: T): void;
}

/**
 * {@link https://github.com/hij1nx/EventEmitter2}
 */
declare interface event$EventModule {
  /**
   * Adds a listener to the end of the listeners array for the specified event.
   */
  addListener(event: string, listener: Function): event$EventModule;
  on(event: string, listener: Function): event$EventModule;

  /**
   * Adds a listener that will be fired when any event is emitted.
   */
  onAny(listener: Function): event$EventModule;

  /**
   * Removes the listener that will be fired when any event is emitted.
   */
  offAny(listener: Function): event$EventModule;

  /**
   * Adds a one time listener for the event.
   * The listener is invoked only the first time the event is fired, after which it is removed.
   */
  once(event: string, listener: Function): event$EventModule;

  /**
   * Adds a listener that will execute n times for the event before being removed.
   * The listener is invoked only the first time the event is fired, after which it is removed.
   */
  many(
    event: string,
    timesToListen: number,
    listener: Function
  ): event$EventModule;

  /**
   * Remove a listener from the listener array for the specified event.
   * Caution: changes array indices in the listener array behind the listener.
   */
  removeListener(event: string, listener: Function): event$EventModule;
  off(event: string, listener: Function): event$EventModule;

  /**
   * Removes all listeners, or those of the specified event.
   */
  removeAllListeners(event: string): event$EventModule;

  /**
   * By default EventEmitters will print a warning if more than 10 listeners are added to it.
   * This is a useful default which helps finding memory leaks. Obviously not all Emitters
   * should be limited to 10. This function allows that to be increased.
   *
   * Set to zero for unlimited.
   */
  setMaxListener(n: number): void;

  /**
   * Returns an array of listeners for the specified event.
   * This array can be manipulated, e.g. to remove listeners.
   */
  listeners(event: string): Function[];

  /**
   * Returns an array of listeners that are listening for any event that is specified.
   * This array can be manipulated, e.g. to remove listeners.
   */
  listenersAny(): Function[];

  /**
   * Execute each of the listeners that may be listening for the specified event name
   * in order with the list of arguments.
   */
  emit(event: string, ...args: any[]): any;
}

declare class fail$ErrorCode {
  constructor(...args: empty): mixed;
  static +NoError: Class<fail$ErrorCode__NoError> & fail$ErrorCode__NoError & 0; // 0
  static +Fatal: Class<fail$ErrorCode__Fatal> & fail$ErrorCode__Fatal & 1; // 1
  static +MissingGruntfile: Class<fail$ErrorCode__MissingGruntfile> &
    fail$ErrorCode__MissingGruntfile &
    2; // 2
  static +Task: Class<fail$ErrorCode__Task> & fail$ErrorCode__Task & 3; // 3
  static +Template: Class<fail$ErrorCode__Template> &
    fail$ErrorCode__Template &
    4; // 4
  static +Autocomplete: Class<fail$ErrorCode__Autocomplete> &
    fail$ErrorCode__Autocomplete &
    5; // 5
  static +Warning: Class<fail$ErrorCode__Warning> & fail$ErrorCode__Warning & 6; // 6
}

declare class fail$ErrorCode__NoError mixins fail$ErrorCode {}
declare class fail$ErrorCode__Fatal mixins fail$ErrorCode {}
declare class fail$ErrorCode__MissingGruntfile mixins fail$ErrorCode {}
declare class fail$ErrorCode__Task mixins fail$ErrorCode {}
declare class fail$ErrorCode__Template mixins fail$ErrorCode {}
declare class fail$ErrorCode__Autocomplete mixins fail$ErrorCode {}
declare class fail$ErrorCode__Warning mixins fail$ErrorCode {}

declare interface fail$FailModule {
  /**
   * Display a warning and abort Grunt immediately.
   * Grunt will continue processing tasks if the --force command-line option was specified.
   */
  warn(error: string, errorCode?: fail$ErrorCode): void;
  warn(error: Error, errorCode?: fail$ErrorCode): void;

  /**
   * Display a warning and abort Grunt immediately.
   */
  fatal(error: string, errorCode?: fail$ErrorCode): void;
  fatal(error: Error, errorCode?: fail$ErrorCode): void;
}

/**
 * {@link http://gruntjs.com/api/grunt.file#grunt.file.defaultencoding}
 */
declare interface file$IFileEncodedOption {
  encoding: string;
}

/**
 * {@link http://gruntjs.com/api/grunt.file#grunt.file.copy}
 * @see IFileWriteBufferOption
 * @see IFileWriteStringOption
 */
declare interface file$IFileWriteOptions {
  /**
   * These optional globbing patterns will be matched against the filepath
   * (not the filename) using grunt.file.isMatch. If any specified globbing
   * pattern matches, the file won't be processed via the `process` function.
   * If `true` is specified, processing will be prevented.
   */
  noProcess?: any;
}

/**
 * @see IFileWriteOptions
 */
declare type file$IFileWriteBufferOption = {
  /**
   * The source file contents and file path are passed into this function,
   * whose return value will be used as the destination file's contents. If
   * this function returns `false`, the file copy will be aborted.
   */
  process?: (buffer: Buffer) => boolean
} & undefined.file$IFileWriteOptions;

/**
 * @see IFileWriteOptions
 */
declare type file$IFileWriteStringOption = {
  /**
   * The source file contents and file path are passed into this function,
   * whose return value will be used as the destination file's contents. If
   * this function returns `false`, the file copy will be aborted.
   */
  process?: (file: string) => boolean
} & undefined.file$IFileWriteOptions;

/**
 * {@link http://gruntjs.com/api/grunt.file}
 */
declare interface file$FileModule {
  /**
   * Set this property to change the default encoding used by all grunt.file methods.
   * Defaults to 'utf8'.
   *
   * If you do have to change this value, it's recommended that you change
   * it as early as possible inside your Gruntfile.
   */
  defaultEncoding: string;

  /**
   * Read and return a file's contents.
   * Returns a string, unless options.encoding is null in which case it returns a Buffer.
   */
  read(filepath: string): string;
  read(filepath: string, options: file$IFileEncodedOption): Buffer;

  /**
   * Read a file's contents, parsing the data as JSON and returning the result.
   * @see FileModule.read for a list of supported options.
   */
  readJSON(filepath: string): any;
  readJSON(filepath: string, options: file$IFileEncodedOption): Buffer;

  /**
   * Read a file's contents, parsing the data as YAML and returning the result.
   * @see FileModule.read for a list of supported options.
   */
  readYAML(filepath: string): any;
  readYAML(filepath: string, options: file$IFileEncodedOption): Buffer;

  /**
   * Write the specified contents to a file, creating intermediate directories if necessary.
   * Strings will be encoded using the specified character encoding, Buffers will be written to disk as-specified.
   * @param contents If `contents` is a Buffer, encoding is ignored.
   * @param options If an encoding is not specified, default to grunt.file.defaultEncoding.
   */
  write(
    filepath: string,
    contents: string,
    options?: file$IFileEncodedOption
  ): void;
  write(filepath: string, contents: Buffer): void;

  /**
   * Copy a source file to a destination path, creating intermediate directories if necessary.
   */
  copy(srcpath: string, destpath: string): void;
  copy(
    srcpath: string,
    destpath: string,
    options: file$IFileWriteStringOption
  ): void;
  copy(
    srcpath: string,
    destpath: string,
    options: file$IFileWriteBufferOption
  ): void;

  /**
   * Delete the specified filepath. Will delete files and folders recursively.
   * @return true if the files could be deleted, otherwise false.
   */
  delete(
    filepath: string,
    options?: {
      force?: boolean
    }
  ): boolean;

  /**
   * Works like mkdir -p. Create a directory along with any intermediate directories.
   * If mode isn't specified, it defaults to 0777 & (~process.umask()).
   */
  mkdir(dirpath: string, mode?: string): void;

  /**
   * Recurse into a directory, executing callback for each file.
   *
   * Callback args:
   * abspath  - The full path to the current file,
   *             which is nothing more than the rootdir + subdir + filename arguments, joined.
   * rootdir  - The root director, as originally specified.
   * subdir   - The current file's directory, relative to rootdir.
   * filename - The filename of the current file, without any directory parts.
   */
  recurse(
    rootdir: string,
    callback: (
      abspath: string,
      rootdir: string,
      subdir: string,
      filename: string
    ) => void
  ): void;

  /**
   * Return a unique array of all file or directory paths that match the given globbing pattern(s).
   * This method accepts either comma separated globbing patterns or an array of globbing patterns.
   * Paths matching patterns that begin with ! will be excluded from the returned array.
   * Patterns are processed in order, so inclusion and exclusion order is significant.
   *
   * File paths are relative to the Gruntfile unless the current working directory is changed with
   * grunt.file.setBase or the --base command-line option.
   */
  expand(patterns: string | string[]): string[];
  expand(options: file$IFilesConfig, patterns: string | string[]): string[];

  /**
 * Returns an array of src-dest file mapping objects.
 * For each source file matched by a specified pattern, join that file path to the specified dest.
 * This file path may be flattened or renamed, depending on the options specified.
 * @see FileModule.expand method documentation for an explanation of how the patterns
and options arguments may be specified.
 */
  expandMapping(
    patterns: string[],
    dest: string,
    options: file$IExpandedFilesConfig
  ): Array<file$IFileMap>;

  /**
   * Match one or more globbing patterns against one or more file paths.
   * Returns a uniqued array of all file paths that match any of the specified globbing patterns.
   * Both the patterns and filepaths argument can be a single string or array of strings.
   * Paths matching patterns that begin with ! will be excluded from the returned array.
   * Patterns are processed in order, so inclusion and exclusion order is significant.
   */
  match(pattern: string, filepath: string): string[];
  match(pattern: string, filepaths: string[]): string[];
  match(patterns: string[], filepath: string): string[];
  match(patterns: string[], filepaths: string[]): string[];
  match(
    options: minimatch$minimatch$IMinimatchOptions,
    pattern: string,
    filepath: string
  ): string[];
  match(
    options: minimatch$minimatch$IMinimatchOptions,
    pattern: string,
    filepaths: string[]
  ): string[];
  match(
    options: minimatch$minimatch$IMinimatchOptions,
    patterns: string[],
    filepath: string
  ): string[];
  match(
    options: minimatch$minimatch$IMinimatchOptions,
    patterns: string[],
    filepaths: string[]
  ): string[];

  /**
   * This method contains the same signature and logic as the grunt.file.match method,
   * but simply returns true if any files were matched, otherwise false.
   * @see FileModule.match
   */
  isMatch(pattern: string, filepath: string): boolean;
  isMatch(pattern: string, filepaths: string[]): boolean;
  isMatch(patterns: string[], filepath: string): boolean;
  isMatch(patterns: string[], filepaths: string[]): boolean;
  isMatch(
    options: minimatch$minimatch$IMinimatchOptions,
    pattern: string,
    filepath: string
  ): boolean;
  isMatch(
    options: minimatch$minimatch$IMinimatchOptions,
    pattern: string,
    filepaths: string[]
  ): boolean;
  isMatch(
    options: minimatch$minimatch$IMinimatchOptions,
    patterns: string[],
    filepath: string
  ): boolean;
  isMatch(
    options: minimatch$minimatch$IMinimatchOptions,
    patterns: string[],
    filepaths: string[]
  ): boolean;

  /**
   * Does the given path exist?
   */
  exists(path: string, ...append: string[]): boolean;

  /**
   * Is the given path a symbolic link?
   */
  isLink(path: string, ...append: string[]): boolean;

  /**
   * Is the given path a symbolic link?
   */
  isDir(path: string, ...append: string[]): boolean;

  /**
   * Is the given path a file?
   */
  isFile(path: string, ...append: string[]): boolean;

  /**
   * Is a given file path absolute?
   */
  isPathAbsolute(path: string, ...append: string[]): boolean;

  /**
   * Do all the specified paths refer to the same path?
   */
  arePathsEquivalent(path: string, ...append: string[]): boolean;

  /**
   * Are all descendant path(s) contained within the specified ancestor path?
   */
  doesPathContain(ancestorPath: string, decendantPaths: string[]): boolean;

  /**
   * Is a given file path the current working directory (CWD)?
   */
  isPathCwd(path: string, ...append: string[]): boolean;

  /**
   * Change grunt's current working directory (CWD).
   * By default, all file paths are relative to the Gruntfile.
   * This works just like the --base command-line option.
   */
  setBase(path: string, ...append: string[]): void;
  glob: any;
  minimatch: any;
  findup: any;
}

/**
 * A convenience type.
 *
 * {@link http://gruntjs.com/configuring-tasks#files}
 */
declare type file$IFilesArray = {} & Array<file$IFilesConfig>;

/**
 * {@link http://gruntjs.com/configuring-tasks#files}
 */
declare type file$IFilesConfig = {
  /**
   * Pattern(s) to match, relative to the {@link IExpandedFilesConfig.cwd}.
   */
  src?: string[],

  /**
   * Destination path prefix.
   */
  dest?: string,

  /**
   * Process a dynamic src-dest file mapping,
   * @see {@link http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically for more information.
   */
  expand?: boolean,

  /**
   * Either a valid fs.Stats method name:
   * - isFile
   * - isDirectory
   * - isBlockDevice
   * - isCharacterDevice
   * - isSymbolicLink
   * - isFIFO
   * - isSocket
   *
   * or a function that is passed the matched src filepath and returns true or false.
   *
   * string
   * (src: string) => boolean
   */
  filter?: any,

  /**
   * Patterns will be matched relative to this path, and all returned filepaths will
   * also be relative to this path.
   */
  cwd?: string
} & minimatch$minimatch$IMinimatchOptions;

/**
 * These are valid for compact-format
 */
declare type file$IExpandedFilesConfig = {
  /**
   * Enables the following options
   */
  expand?: boolean,

  /**
   * All {@link IExpandedFilesConfig.src} matches are relative to (but don't include) this path.
   */
  cwd?: string,

  /**
   * Replace any existing extension with this value in generated {@link IExpandedFilesConfig.dest} paths.
   */
  ext?: string,

  /**
   * Remove all path parts from generated {@link IExpandedFilesConfig.dest} paths.
   */
  flatten?: boolean,

  /**
   * This function is called for each matched src file, (after extension renaming and flattening).
   * The {@link IExpandedFilesConfig.dest} and matched {@link IExpandedFilesConfig.src} path are passed in,
   * and this function must return a new dest value.
   * If the same dest is returned more than once, each src which used it will be added to an array of sources for it.
   */
  rename?: Function
} & file$IFilesConfig;

/**
 * @see {@link http://gruntjs.com/configuring-tasks#files-array-format}
 */
declare interface file$IFileMap {
  /**
   * source filenames.
   */
  src: string[];

  /**
   * destination filename.
   */
  dest: string;
}

/**
 * Grunt output should look consistent, and maybe even pretty.
 * As such, there is a plethora of logging methods, and a few useful patterns.
 * All of the methods that actually log something are chainable.
 */
declare interface log$CommonLogging<T> {
  /**
   * Log the specified msg string, with no trailing newline.
   */
  write(msg: string): T;

  /**
   * Log the specified msg string, with trailing newline.
   */
  writeln(msg: string): T;

  /**
   * If msg string is omitted, logs ERROR in red,
   * otherwise logs >> msg, with trailing newline.
   */
  error(msg: string): T;

  /**
   * Log an error with grunt.log.error, wrapping text to 80 columns using grunt.log.wraptext.
   */
  errorlns(msg: string): T;

  /**
   * If msg string is omitted, logs OK in green, otherwise logs >> msg, with trailing newline.
   */
  ok(msg: string): T;

  /**
   * Log an ok message with grunt.log.ok, wrapping text to 80 columns using grunt.log.wraptext.
   */
  oklns(msg: string): T;

  /**
   * Log the specified msg string in bold, with trailing newline.
   */
  subhead(msg: string): T;

  /**
   * Log a list of obj properties (good for debugging flags).
   */
  writeflags(obj: any): T;

  /**
   * Log an warning with grunt.log.warn
   */
  warn(msg: string): T;
}

/**
 * @note all methods available under grunt.verbose work exactly like grunt.log methods,
but only log if the --verbose command-line option was specified.
 */
declare type log$VerboseLogModule = {
  or: log$NotVerboseLogModule
} & log$CommonLogging<log$VerboseLogModule>;

/**
 * @note all methods available under grunt.verbose work exactly like grunt.log methods,
but only log if the --verbose command-line option was not specified.
 */
declare type log$NotVerboseLogModule = {
  or: log$VerboseLogModule
} & log$CommonLogging<log$NotVerboseLogModule>;

/**
 * {@link http://gruntjs.com/api/grunt.log}
 */
declare type log$LogModule = {
  verbose: log$VerboseLogModule,
  notverbose: log$NotVerboseLogModule
} & log$CommonLogging<log$LogModule>;

/**
 * {@link http://gruntjs.com/api/grunt.option}
 */
declare interface option$OptionModule {
  /**
   * Gets or sets an option.
   * Boolean options can be negated by prepending no- onto the key. For example:
   *
   * grunt.option('staging', false);
   * var isDev = grunt.option('no-staging');
   * assert(isDev === true)
   */
  <T>(key: string, value: T): void;
  <T>(key: string): T;

  /**
   * Initialize grunt.option.
   * If initObject is omitted option will be initialized to an empty object
   * otherwise will be set to initObject.
   */
  init(initObject?: any): void;

  /**
   * Returns the options as an array of command line parameters.
   */
  flags: grunt$grunt$IFlag[];
}

/**
 * {@link http://gruntjs.com/api/grunt.task}
 */
declare interface task$CommonTaskModule {
  /**
   * If a task list is specified, the new task will be an alias for one or more other tasks.
   * Whenever this "alias task" is run, every specified task in taskList will be run, in the order specified.
   * The taskList argument must be an array of tasks.
   */
  registerTask(taskName: string, taskList: string[]): void;
  registerTask(taskName: string, description: string, taskList: string[]): void;

  /**
   * If a description and taskFunction are passed, the specified function will be executed
   * whenever the task is run.
   *
   * In addition, the specified description will be shown when grunt --help is run.
   * Task-specific properties and methods are available inside the task function as properties
   * of the this object. The task function can return false to indicate that the task has failed.
   * @note taskFunction.apply(scope: grunt.task.ITask, args: any[])
   */
  registerTask(taskName: string, taskFunction: (...args: any[]) => void): void;
  registerTask(
    taskName: string,
    description: string,
    taskFunction: (...args: any[]) => void
  ): void;

  /**
   * Register a "multi task." A multi task is a task that implicitly iterates over all of its
   * named sub-properties (AKA targets) if no target was specified.
   * In addition to the default properties and methods, extra multi task-specific properties
   * are available inside the task function as properties of the this object.
   * @note taskFunction.apply(scope: grunt.task.IMultiTask<any>, args: any[])
   */
  registerMultiTask(
    taskName: string,
    taskFunction: (...args: any[]) => void
  ): void;
  registerMultiTask(
    taskName: string,
    taskDescription: string,
    taskFunction: (...args: any[]) => void
  ): void;

  /**
   * Check with the name, if a task exists in the registered tasks.
   * @param name The task name to check.
   * @since 0.4.5
   */
  exists(name: string): boolean;

  /**
   * Rename a task. This might be useful if you want to override the default behavior of a task, while retaining the old name.
   * Note that if a task has been renamed, the this.name and this.nameArgs properties will change accordingly.
   * @see ITask
   * @param oldname The previous name of the task.
   * @param newname The new name for the task.
   */
  renameTask(oldname: string, newname: string): void;
}

/**
 * {@link http://gruntjs.com/api/grunt.task#queueing-tasks}
 */
declare type task$TaskModule = {
  /**
   * Enqueue one or more tasks.
   * Every specified task in taskList will be run immediately after the current task completes,
   * in the order specified. The task list can be an array of tasks or individual task arguments.
   */
  run(tasks: string[]): void,
  run(task: string, ...thenTasks: string[]): void,

  /**
   * Empty the task queue completely. Unless additional tasks are enqueued, no more tasks will be run.
   */
  clearQueue(): void,

  /**
   * Normalizes a task target configuration object into an array of src-dest file mappings.
   * This method is used internally by the multi task system this.files / grunt.task.current.files property.
   */
  normalizeMultiTaskFiles(
    data: grunt$config.config$IProjectConfig,
    targetname?: string
  ): Array<grunt$file.file$IFileMap>,

  /**
   * The currently running task or multitask.
   * @see http://gruntjs.com/api/inside-tasks
   */
  current: grunt$task.task$IMultiTask<any>
} & task$CommonTaskModule;

declare interface task$AsyncResultCatcher {
  /**
   * Either false or an Error object may be passed to the done function
   * to instruct Grunt that the task has failed.
   */
  (success: boolean): void;
  (error: Error): void;
  (result: any): void;
  (): void;
}

/**
 * @link http://gruntjs.com/inside-tasks

Grunt version 0.4.x
 */
declare interface task$ITask {
  /**
   * If a task is asynchronous, this method must be invoked to instruct Grunt to wait.
   * It returns a handle to a "done" function that should be called when the task has completed.
   *
   *    // Tell Grunt this task is asynchronous.
   *    var done = this.async();
   *    // Your async code.
   *    setTimeout(function() {
   *      // Let's simulate an error, sometimes.
   *      var success = Math.random() > 0.5;
   *      // All done!
   *      done(success);
   *    }, 1000);
   */
  async(): task$AsyncResultCatcher;

  /**
 * If one task depends on the successful completion of another task (or tasks),
 * this method can be used to force Grunt to abort if the other task didn't run,
 * or if the other task failed.
 * @param tasks an array of task names or individual task names, as arguments.
 * @note that this won't actually run the specified task(s),
it will just fail the current task if they haven't already run successfully.
 */
  requires(tasks: string[]): void;
  requires(tasks: string, ...otherTasks: string[]): void;
  requires(tasks: string[], ...otherTasks: string[][]): void;

  /**
   * Fail the current task if one or more required config properties is missing.
   * One or more string or array config properties may be specified.
   * this.requiresConfig(prop [, prop [, ...]])
   */
  requiresConfig(prop: string, ...andProps: string[]): void;

  /**
   * The name of the task, as defined in grunt.registerTask.
   * For example, if a "sample" task was run as grunt sample or grunt sample:foo,
   * inside the task function, this.name would be "sample".
   */
  name: string;

  /**
   * The name of the task, including any colon-separated arguments or flags specified on the command-line.
   * For example, if a "sample" task was run as grunt sample:foo,
   * inside the task function, this.nameArgs would be "sample:foo".
   */
  nameArgs: string;

  /**
   * An array of arguments passed to the task.
   * For example, if a "sample" task was run as grunt sample:foo:bar,
   * inside the task function, this.args would be ["foo", "bar"].
   */
  args: string[];

  /**
   * An object generated from the arguments passed to the task.
   * For example, if a "sample" task was run as grunt sample:foo:bar,
   * inside the task function, this.flags would be {foo: true, bar: true}.
   */
  flags: grunt$grunt$IFlag[];

  /**
   * The number of grunt.log.error calls that occurred during this task.
   * This can be used to fail a task if errors were logged during the task.
   */
  errorCount: number;

  /**
   * Returns an options object.
   * Properties of the optional defaultsObj argument will be overridden by any task-level options
   * object properties, which will be further overridden in multi tasks by any target-level
   * options object properties.
   */
  options<T>(defaultsObj: T): T;
  options(defaultsObj: any): task$ITaskOptions;
}

/**
 * {@link http://gruntjs.com/inside-tasks#inside-multi-tasks}
 */
declare type task$IMultiTask<T> = {
  /**
   * In a multi task, this property contains the name of the target currently being iterated over.
   * For example, if a "sample" multi task was run as grunt sample:foo with the config data
   * {sample: {foo: "bar"}}, inside the task function, this.target would be "foo".
   */
  target: string,

  /**
 * In a multi task, all files specified using any Grunt-supported file formats and options,
 * globbing patterns or dynamic mappings will automatically be normalized into a single format:
 * the Files Array file format.
 * 
 * What this means is that tasks don't need to contain a ton of boilerplate for explicitly
 * handling custom file formats, globbing patterns, mapping source files to destination files
 * or filtering out files or directories. A task user can just specify files per the Configuring
 * tasks guide, and Grunt will handle all the details.
 * 
 * Your task should iterate over the this.files array, utilizing the src and dest properties of
 * each object in that array. The this.files property will always be an array.
 * The src property will also always be an array, in case your task cares about multiple source
 * files per destination file.
 * @note it's possible that nonexistent files might be included in src values,
so you may want to explicitly test that source files exist before using them.
 */
  files: grunt$file.file$IFilesArray,

  /**
   * In a multi task, all src files files specified via any file format are reduced to a single array.
   * If your task is "read only" and doesn't care about destination filepaths,
   * use this array instead of this.files.
   */
  filesSrc: string[],

  /**
 * In a multi task, this is the actual data stored in the Grunt config object for the given target.
 * For example, if a "sample" multi task was run as grunt sample:foo with the config data
 * {sample: {foo: "bar"}}, inside the task function, this.data would be "bar".
 * @note It is recommended that this.options this.files and this.filesSrc are used instead of this.data,
as their values are normalized.
 */
  data: T
} & task$ITask;

/**
 * {@link http://gruntjs.com/configuring-tasks}
 *
 * A TaskConfig can be either be a full config or a compacted files config.
 * @see ITaskCompactOptions
 */
declare interface task$ITaskOptions {
  options?: any;
  files?: any;
}

/**
 * @see ITaskOptions
 */
declare type task$ITaskCompactOptions = {} & undefined.task$ITaskOptions &
  undefined.file$IFilesConfig;

declare interface template$TemplateModule {
  /**
   * Process a Lo-Dash template string.
   *
   * The template argument will be processed recursively until there are no more templates to process.
   *
   * The default data object is the entire config object, but if options.data is set, that object will
   * be used instead. The default template delimiters are <% %> but if options.delimiters is set to a
   * custom delimiter name, those template delimiters will be used instead.
   *
   * Inside templates, the grunt object is exposed so that you can do things like:
   *      <%= grunt.template.today('yyyy') %>
   * @note if the data object already has a grunt property, the grunt API will not be accessible in templates.
   */
  process(template: string): (options: any) => string;
  process(template: string, options: any): string;

  /**
   * Set the Lo-Dash template delimiters to a predefined set in case you grunt.util._.template
   * needs to be called manually.
   *
   * The config delimiters <% %> are included by default.
   */
  setDelimiters(name: string): void;

  /**
   * Add a named set of Lo-Dash template delimiters.
   *
   * You probably won't need to use this method, because the built-in delimiters should be sufficient,
   * but you could always add {% %} or [% %] style delimiters.
   */
  addDelimiters(name: string, opener: string, closer: string): void;

  /**
   * Format a date using the dateformat library.
   * {@link https://github.com/felixge/node-dateformat}
   * @note if you don't include the mask argument, dateFormat.masks.default is used
   */
  date(date?: Date, format?: string): string;
  date(date?: number, format?: string): string;
  date(date?: string, format?: string): string;

  /**
   * Format today's date using the dateformat library using the current date and time.
   * {@link https://github.com/felixge/node-dateformat}
   * @note if you don't include the mask argument, dateFormat.masks.default is used
   */
  today(format?: string): string;
}

/**
 * {@link http://gruntjs.com/api/grunt.util}
 */
declare interface util$UtilModule {
  /**
   * Return the "kind" of a value. Like typeof but returns the internal [Class](Class/) value.
   * Possible results are "number", "string", "boolean", "function", "regexp", "array", "date",
   * "error", "null", "undefined" and the catch-all "object".
   */
  kindOf(value: any): string;

  /**
   * Return a new Error instance (that can be thrown) with the appropriate message.
   * If an Error object is specified instead of message that object will be returned.
   * Also, if an Error object is specified for origError and Grunt was run with the --debug 9 option,
   * the original Error stack will be dumped.
   */
  error(message: string, origError?: Error): Error;
  error(error: Error, origError?: Error): Error;
  error(error: any, origError?: Error): Error;

  /**
   * The linefeed character, normalized for the current operating system.
   * (\r\n on Windows, \n otherwise)
   */
  linefeed: string;

  /**
   * Given a string, return a new string with all the linefeeds normalized for the current operating system.
   * (\r\n on Windows, \n otherwise)
   */
  normalizelf(str: string): string;

  /**
   * Recurse through nested objects and arrays, executing callbackFunction for each non-object value.
   * If continueFunction returns false, a given object or value will be skipped.
   */
  recurse(
    object: any,
    callbackFunction: (value: any) => void,
    continueFunction: (objOrValue: any) => boolean
  ): void;

  /**
   * Return string str repeated n times.
   */
  repeat(n: number, str: string): string;

  /**
   * Given str of "a/b", If n is 1, return "a" otherwise "b".
   * You can specify a custom separator if '/' doesn't work for you.
   */
  pluralize(n: number, str: string, separator?: string): string;

  /**
 * Spawn a child process, keeping track of its stdout, stderr and exit code.
 * The method returns a reference to the spawned child.
 * When the child exits, the done function is called.
 * @param done a function with arguments:
error  - If the exit code was non-zero and a fallback wasn't specified,
     an Error object, otherwise null.
result - The result object is an
code   - The numeric exit code.
 */
  spawn(
    options: util$ISpawnOptions,
    done: (error: Error, result: util$ISpawnResult, code: number) => void
  ): util$ISpawnedChild;

  /**
   * Given an array or array-like object, return an array.
   * Great for converting arguments objects into arrays.
   */
  toArray<T>(arrayLikeObject: any): T[];

  /**
   * Normalizes both "returns a value" and "passes result to a callback" functions to always
   * pass a result to the specified callback. If the original function returns a value,
   * that value will now be passed to the callback, which is specified as the last argument,
   * after all other predefined arguments. If the original function passed a value to a callback,
   * it will continue to do so.
   */
  callbackify<R>(
    syncOrAsyncFunction: () => R
  ): (callback: (result: R) => void) => void;
  callbackify<A, R>(
    syncOrAsyncFunction: (a: A) => R
  ): (a: A, callback: (result: R) => void) => void;
  callbackify<A, B, R>(
    syncOrAsyncFunction: (a: A, b: B) => R
  ): (a: A, b: B, callback: (result: R) => void) => void;
  callbackify<A, B, C, R>(
    syncOrAsyncFunction: (a: A, b: B, c: C) => R
  ): (a: A, b: B, c: C, callback: (result: R) => void) => void;
  callbackify<A, B, C, D, R>(
    syncOrAsyncFunction: (a: A, b: B, c: C, d: D) => R
  ): (a: A, b: B, c: C, d: D, callback: (result: R) => void) => void;
  namespace: any;
  task: any;
}

/**
 * {@link http://gruntjs.com/api/grunt.util#grunt.util.spawn}
 */
declare interface util$ISpawnOptions {
  /**
   * The command to execute. It should be in the system path.
   */
  cmd?: string;

  /**
   * If specified, the same grunt bin that is currently running will be
   * spawned as the child command, instead of the "cmd" option.
   * Defaults to false.
   */
  grunt?: boolean;

  /**
   * An array of arguments to pass to the command.
   */
  args?: string[];

  /**
   * Additional options for the Node.js child_process spawn method.
   */
  opts?: {
    cwd?: string,
    stdio?: any,
    custom?: any,
    env?: any,
    detached?: boolean
  };

  /**
   * If this value is set and an error occurs, it will be used as the value
   * and null will be passed as the error value.
   */
  fallback?: any;
}

/**
 * @note When result is coerced to a string, the value is stdout if the exit code
was zero, the fallback if the exit code was non-zero and a fallback was
specified, or stderr if the exit code was non-zero and a fallback was
not specified.
 */
declare interface util$ISpawnResult {
  stdout: string;
  stderr: string;
  code: number;
}

/**
 * {@link https://github.com/snbartell/node-spawn}
 */
declare interface util$ISpawnedChild {
  /**
   * Start the cmd with the options provided.
   */
  start(): void;

  /**
   * Convenience function. Overrides options. restarts to 0.
   * Runs command exactly once no matter the options passed into the constructor.
   */
  once(): void;

  /**
   * Convenience function. Overrides options.restarts to -1.
   * Runs command indefinitely no matter the options passed into the constructor.
   */
  forever(): void;

  /**
   * Shut down the child and don't let it restart.
   */
  kill(): void;
}

declare interface grunt$IFlag {
  [flag: string]: boolean;
}

declare type grunt$IConfigComponents = {
  /**
   * An alias
   * @see grunt.config.ConfigModule.init
   */
  initConfig(config: grunt$config.config$IProjectConfig): void
} & undefined.config$ConfigModule;

declare type grunt$ITaskComponents = {
  /**
   * Load task-related files from the specified directory, relative to the Gruntfile.
   * This method can be used to load task-related files from a local Grunt plugin by
   * specifying the path to that plugin's "tasks" subdirectory.
   */
  loadTasks(tasksPath: string): void,

  /**
   * Load tasks from the specified Grunt plugin.
   * This plugin must be installed locally via npm, and must be relative to the Gruntfile.
   * Grunt plugins can be created by using the grunt-init gruntplugin template: grunt init:gruntplugin.
   */
  loadNpmTasks(pluginName: string): void
} & undefined.task$CommonTaskModule;

/**
 * The main Grunt module.
 *
 * {@link http://gruntjs.com/api/grunt}
 */
declare type IGrunt = {
  config: grunt$config.config$ConfigModule,
  event: grunt$event.event$EventModule,
  fail: grunt$fail.fail$FailModule,
  file: grunt$file.file$FileModule,
  log: grunt$log.log$LogModule,
  option: grunt$option.option$OptionModule,
  task: grunt$task.task$TaskModule,
  template: grunt$template.template$TemplateModule,
  util: grunt$util.util$UtilModule,

  /**
   * The current Grunt package.json metadata, as an object.
   */
  package: node$node$NodePackage,

  /**
   * The current Grunt version, as a string. This is just a shortcut to the grunt.package.version property.
   */
  version: string
} & grunt$grunt$IConfigComponents &
  undefined.fail$FailModule &
  grunt$grunt$ITaskComponents;
declare module "grunt" {
  declare var grunt: IGrunt;
  declare module.exports: typeof grunt;
}
