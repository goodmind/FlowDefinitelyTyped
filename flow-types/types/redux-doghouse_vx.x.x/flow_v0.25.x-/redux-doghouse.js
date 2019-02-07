declare module "redux-doghouse" {
  import type {
    ActionCreator,
    ActionCreatorsMapObject,
    bindActionCreators,
    Dispatch,
    Reducer
  } from "redux";

  declare export class ScopedActionFactory<
    A: ActionCreator<any> | ActionCreatorsMapObject
  > {
    constructor(actionCreator: A): this;
    scope(id: string | number): A;
  }
  declare export interface ActionFactoriesMap {
    [key: string]:
      | ScopedActionFactory<any>
      | ActionCreator<any>
      | ActionFactoriesMap;
  }
  declare export function bindActionCreatorsDeep<M: ActionFactoriesMap, S>(
    actionFactories: M,
    dispatch: Dispatch<S>
  ): M;

  declare export function bindActionCreatorsDeep<A: ActionCreator<any>, S>(
    actionFactories: A,
    dispatch: Dispatch<S>
  ): A;

  declare export function bindActionCreatorsDeep<
    A: ActionCreator<any> | ActionCreatorsMapObject,
    F: ScopedActionFactory<A>,
    S
  >(
    actionFactories: F,
    dispatch: Dispatch<S>
  ): F;

  declare export function bindScopedActionFactories<M: ActionFactoriesMap, S>(
    actionFactories: M,
    dispatch: Dispatch<S>,
    bindFn?: typeof bindActionCreators
  ): M;

  declare export function bindScopedActionFactories<A: ActionCreator<any>, S>(
    actionFactories: A,
    dispatch: Dispatch<S>,
    bindFn?: typeof bindActionCreators
  ): A;

  declare export function bindScopedActionFactories<
    A: ActionCreator<any> | ActionCreatorsMapObject,
    F: ScopedActionFactory<A>,
    S
  >(
    actionFactories: F,
    dispatch: Dispatch<S>,
    bindFn?: typeof bindActionCreators
  ): F;

  declare export function scopeActionCreators<
    A: ActionCreator<any> | ActionCreatorsMapObject
  >(
    actionCreator: A,
    scopeID: string | number
  ): A;

  declare export function scopeReducers(reducers?: {
    [key: string]: Reducer<any>
  }): Reducer<any>;
}
