declare module "redux-injectable-store" {
  import type { Reducer, Store, StoreEnhancer } from "redux";

  declare export type InjectableStore<S> = {
    inject(namespace: string, reducer: Reducer<any>): void,
    injectAll(reducers: {
      [key: string]: Reducer<any>
    }): void,
    clearReducers(): void
  } & Store<S>;

  declare export type WrapReducer<S> = (reducer: Reducer<S>) => Reducer<S>;
  declare export interface InjectableStoreCreator {
    <S>(
      enhancer?: StoreEnhancer<S>,
      wrapReducer?: WrapReducer<S>
    ): InjectableStore<S>;
    <S>(
      preloadedState: S,
      enhancer?: StoreEnhancer<S>,
      wrapReducer?: WrapReducer<S>
    ): InjectableStore<S>;
  }
  declare export var createInjectableStore: InjectableStoreCreator;
}
