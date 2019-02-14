declare module "minilog" {
  declare interface Minilog {
    debug(...msg: any[]): Minilog;
    info(...msg: any[]): Minilog;
    log(...msg: any[]): Minilog;
    warn(...msg: any[]): Minilog;
    error(...msg: any[]): Minilog;
  }
  declare function Minilog(namespace: string): Minilog;

  declare var npm$namespace$Minilog: {
    enable: typeof Minilog$enable,
    disable: typeof Minilog$disable,
    pipe: typeof Minilog$pipe,
    suggest: typeof Minilog$suggest,
    backends: typeof Minilog$backends,
    defaultBackend: typeof Minilog$defaultBackend,
    defaultFormatter: typeof Minilog$defaultFormatter,

    Filter: typeof Minilog$Filter,
    Console: typeof Minilog$Console,
    Transform: typeof Minilog$Transform
  };
  declare export function Minilog$enable(): Minilog;

  declare export function Minilog$disable(): Minilog;

  declare export function Minilog$pipe(dest: any): Minilog$Transform;

  declare export var Minilog$suggest: Minilog$Filter;

  declare export var Minilog$backends: Minilog$MinilogBackends;

  declare export var Minilog$defaultBackend: any;

  declare export var Minilog$defaultFormatter: string;

  declare export class Minilog$Filter mixins Transform {
    /**
     * Adds an entry to the whitelist
     * Returns this filter
     */
    allow(name: any, level?: any): Minilog$Filter;

    /**
     * Adds an entry to the blacklist
     * Returns this filter
     */
    deny(name: any, level?: any): Minilog$Filter;

    /**
     * Empties the whitelist and blacklist
     * Returns this filter
     */
    clear(): Minilog$Filter;
    test(name: any, level: any): boolean;

    /**
     * specifies the behavior when a log line doesn't match either the whitelist or the blacklist.
     * The default is true (= "allow by default") - lines that do not match the whitelist or the blacklist are not filtered (e.g. ).
     * If you want to flip the default so that lines are filtered unless they are on the whitelist, set this to false (= "deny by default").
     */
    defaultResult: boolean;

    /**
     * controls whether the filter is enabled. Default: true
     */
    enabled: boolean;
  }

  declare export interface Minilog$MinilogBackends {
    array: any;
    browser: any;
    console: Minilog$Console;
    localstorage: any;
    jQuery: any;
  }

  declare export class Minilog$Console mixins Transform {
    /**
     * List of available formatters
     */
    formatters: string[];
    color: Minilog$Transform;
    minilog: Minilog$Transform;
    formatClean: Minilog$Transform;
    formatColor: Minilog$Transform;
    formatNpm: Minilog$Transform;
    formatLearnboost: Minilog$Transform;
    formatMinilog: Minilog$Transform;
    formatWithStack: Minilog$Transform;
  }

  declare export class Minilog$Transform {
    write(name: any, level: any, args: any): void;
    pipe(dest: any): any;
    unpipe(from: any): Minilog$Transform;
    mixin(dest: any): void;
  }
  declare export default typeof Minilog;
}
