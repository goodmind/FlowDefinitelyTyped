declare module "redux-seamless-immutable" {
  import type { Reducer, Action } from "redux";

  import type { Immutable } from "seamless-immutable";

  declare export interface SeamlessReducers {
    [reducerName: string]: Reducer<any, any>;
  }
  declare export function combineReducers(reducers: SeamlessReducers): Reducer;

  declare export function routerReducer<T: Reducer>(
    state: T,
    action: Action
  ): T;

  declare export function stateTransformer<T>(state: Immutable<T>): T;
}
