declare module "browser-resolve" {
  import typeof * as resolve from "resolve";

  /**
   * Callback invoked when resolving asynchronously
   * @param error
   * @param resolved Absolute path to resolved identifier
   */
  declare type resolveCallback = (err?: Error, resolved?: string) => void;

  /**
   * Resolve a module path and call cb(err, path [, pkg])
   * @param id Identifier to resolve
   * @param callback
   */
  declare function browserResolve(id: string, cb: resolveCallback): void;

  /**
   * Resolve a module path and call cb(err, path [, pkg])
   * @param id Identifier to resolve
   * @param options Options to use for resolving, optional.
   * @param callback
   */
  declare function browserResolve(
    id: string,
    opts: browserResolve$AsyncOpts,
    cb: resolveCallback
  ): void;

  /**
   * Returns a module path
   * @param id Identifier to resolve
   * @param options Options to use for resolving, optional.
   */
  declare function browserResolveSync(
    id: string,
    opts?: browserResolve$SyncOpts
  ): string;

  declare var npm$namespace$browserResolve: {
    sync: typeof browserResolve$sync
  };
  declare interface browserResolve$Opts {
    browser?: string;
    filename?: string;
    modules?: any;
  }

  declare export type browserResolve$AsyncOpts = {} & resolve.AsyncOpts & Opts;

  declare export type browserResolve$SyncOpts = {} & resolve.SyncOpts & Opts;

  declare export var browserResolve$sync: typeof browserResolveSync;
  declare export default typeof browserResolve;
}
