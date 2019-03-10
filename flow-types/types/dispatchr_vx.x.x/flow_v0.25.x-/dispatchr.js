declare module "dispatchr" {
  import type { EventEmitter } from "events";

  declare export interface DispatcherState {
    stores: {
      [storeName: string]: any
    };
  }
  declare export interface DispatcherOption {
    stores?: StoreClass[];
    errorHandler?: (e: DispatcherError, context: DispatcherContext) => void;
  }
  declare export interface StoreClass {
    storeName: string;
    new(): Store<>;
  }
  declare export type Store<S = {}> = {
    dehydrate?: () => S,
    rehydrate?: (state: S) => void,
    shouldDehydrate?: () => boolean,
    emitChange(): void
  } & EventEmitter;

  declare export interface Dispatcher {
    createContext(context: { [key: string]: any }): DispatcherContext;
    registerStore(store: StoreClass): void;
    isRegistered(store: StoreClass | string): boolean;
    getStoreName(store: StoreClass | string): string;
  }
  declare export interface DispatcherInterface {
    getContext(): DispatcherContext;
    getStore: $PropertyType<DispatcherContext, "getStore">;
    waitFor: $PropertyType<DispatcherContext, "waitFor">;
  }
  declare export interface DispatcherContext {
    getStore(name: string): Store<>;
    getStore<T: StoreClass>(name: T): T;
    dispatch(actionName: string, payload: any): void;
    dehydrate(): DispatcherState;
    rehydrate(dispatcherState: DispatcherState): void;
    waitFor(
      stores: $ReadOnlyArray<string | StoreClass>,
      callback: () => void
    ): void;
    dispatcherInterface: DispatcherInterface;
  }
  declare export interface DispatcherError {
    message: string;
    type: string;
    meta: {
      actionName?: string,
      payload?: any,
      error: Error
    };
  }
  declare export function createDispatcher(
    options: DispatcherOption
  ): Dispatcher;
}
