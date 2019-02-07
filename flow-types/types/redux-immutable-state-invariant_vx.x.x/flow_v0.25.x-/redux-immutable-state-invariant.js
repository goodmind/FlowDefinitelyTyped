declare module "redux-immutable-state-invariant" {
  import typeof * as Redux from "redux";

  declare type isImmutableDefault = (value: any) => boolean;
  declare type immutableStateInvariantMiddlewareInterface = (
    isImmutable?: isImmutableDefault
  ) => Redux.Middleware;
  declare var immutableStateInvariantMiddleware: immutableStateInvariantMiddlewareInterface;
  declare export default typeof immutableStateInvariantMiddleware;
}
