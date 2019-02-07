declare module "@ember/test" {
  import typeof Application from "@ember/application";

  /**
   * `registerHelper` is used to register a test helper that will be injected
   * when `App.injectTestHelpers` is called.
   */
  declare export function registerHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => any,
    options?: { [key: string]: any }
  ): any;

  /**
   * `registerAsyncHelper` is used to register an async test helper that will be injected
   * when `App.injectTestHelpers` is called.
   */
  declare export function registerAsyncHelper(
    name: string,
    helperMethod: (app: Application, ...args: any[]) => any
  ): void;

  /**
   * Remove a previously added helper method.
   */
  declare export function unregisterHelper(name: string): void;

  /**
   * This allows ember-testing to play nicely with other asynchronous
   * events, such as an application that is waiting for a CSS3
   * transition or an IndexDB transaction. The waiter runs periodically
   * after each async helper (i.e. `click`, `andThen`, `visit`, etc) has executed,
   * until the returning result is truthy. After the waiters finish, the next async helper
   * is executed and the process repeats.
   */
  declare export function registerWaiter(callback: () => boolean): any;

  declare export function registerWaiter<Context>(
    context: Context,
    callback: () => boolean
  ): any;

  /**
   * `unregisterWaiter` is used to unregister a callback that was
   * registered with `registerWaiter`.
   */
  declare export function unregisterWaiter(callback: () => boolean): any;

  declare export function unregisterWaiter<Context>(
    context: Context,
    callback: () => boolean
  ): any;
}
