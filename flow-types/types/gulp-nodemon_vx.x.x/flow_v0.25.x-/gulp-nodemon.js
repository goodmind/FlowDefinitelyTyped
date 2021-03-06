declare module "gulp-nodemon" {
  declare interface nodemon$Nodemon {
    (option?: nodemon$Option): nodemon$EventEmitter;
  }

  declare type nodemon$Option = {
    tasks?: string[] | ((changedFiles: string[]) => string[])
  } & nodemon$_Option;

  declare interface nodemon$_Option {
    env?: {
      [key: string]: string | boolean | number
    };
    script?: string;

    /**
     * Extensions to look for, ie. js,jade,hbs.
     */
    ext?: string;

    /**
     * Execute script with "app", ie. -x "python -v".
     */
    exec?: string;

    /**
     * Watch directory "dir" or files. use once for each directory or file to watch.
     */
    watch?: string[];

    /**
     * Ignore specific files or directories.
     */
    ignore?: string[];

    /**
     * Minimise nodemon messages to start/stop only.
     */
    quiet?: boolean;

    /**
     * Show detail on what is causing restarts.
     */
    verbose?: boolean;

    /**
     * Try to read from stdin.
     */
    stdin?: boolean;
    stdout?: boolean;

    /**
     * Execute script on change only, not startup
     */
    runOnChangeOnly?: boolean;

    /**
     * Debounce restart in seconds.
     */
    delay?: number;

    /**
     * Forces node to use the most compatible version for watching file changes.
     */
    legacyWatch?: boolean;

    /**
     * Exit on crash, allows use of nodemon with daemon tools like forever.js.
     */
    exitcrash?: boolean;
    execMap?: {
      [key: string]: string | boolean | number
    };
    events?: {
      [key: string]: string
    };
    restartable?: string;
    args?: string[];
    nodeArgs?: string[];
    scriptPosition?: number;
  }

  declare type nodemon$EventEmitter = {
    addListener(event: string, listener: Function): this,
    addListener(event: string, tasks: string[]): this,
    on(event: string, listener: Function): this,
    on(event: string, tasks: string[]): this,
    once(event: string, listener: Function): this,
    once(event: string, tasks: string[]): this
  } & NodeJS.nodemon$EventEmitter;

  declare var nodemon: nodemon$nodemon$Nodemon;
  declare module.exports: typeof nodemon;
}
