declare module "redux" {
  declare type PromiseAction<S> = (
    dispatch: Redux.Dispatch<S>,
    getState?: () => S
  ) => any;
  declare interface Dispatch<S> {
    <R>(asyncAction: PromiseAction<S>): R;
  }
}
declare module "redux-promise" {
  import typeof * as Redux from "redux";

  declare var promise: ReduxPromise$Promise;
  declare export default typeof promise;

  declare export type ReduxPromise$Promise = {} & Redux.Middleware;
}
