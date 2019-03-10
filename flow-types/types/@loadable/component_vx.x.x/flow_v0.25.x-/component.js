declare module "@loadable/component" {
  import typeof * as React from "react";

  declare export interface DefaultImportedComponent<P> {
    default: React.ComponentType<P>;
  }
  declare export type DefaultComponent<P> =
    | React.ComponentType<P>
    | DefaultImportedComponent<P>;
  declare export interface Options {
    fallback?: React$Node;
  }
  declare export type LoadableComponent<T> = React.ComponentType<
    T & {
      fallback?: React$Node
    }
  >;
  declare export type LoadableLibrary<TModule> = React.ComponentType<{
    fallback?: React$Node,
    children?: (module: TModule) => React.Node,
    ref?: React.Ref<TModule>
  }> &
    TModule;
  declare function lib<T>(
    loadFn: (props: { [key: string]: any }) => Promise<T>,
    options?: Options
  ): LoadableLibrary<T>;

  declare function loadableFunc<T>(
    loadFn: (props: T) => Promise<DefaultComponent<T>>,
    options?: Options
  ): LoadableComponent<T>;

  declare var loadable: typeof loadableFunc & {
    lib: typeof lib
  };
  declare export default typeof loadable;

  declare var npm$namespace$lazy: {
    lib: typeof lazy$lib
  };
  declare function lazy$lib<TModule>(
    loadFn: (props: { [key: string]: any }) => Promise<TModule>
  ): LoadableLibrary<TModule>;

  declare export function lazy<T>(
    loadFn: (props: T) => Promise<DefaultComponent<T>>
  ): LoadableComponent<T>;

  declare export function loadableReady(done?: () => any): Promise<void>;
}
