declare module "redux-first-routing" {
  import typeof createBrowserHistory from "history/createBrowserHistory";

  import type {
    History,
    Pathname,
    Search,
    Hash,
    Path,
    LocationDescriptorObject
  } from "history";

  import type { Action, Store, Reducer, Middleware } from "redux";

  declare export { createBrowserHistory };

  declare export function startListener(history: History, store: Store): void;

  declare export var PUSH: "ROUTER/PUSH";
  declare export var REPLACE: "ROUTER/REPLACE";
  declare export var GO: "ROUTER/GO";
  declare export var GO_BACK: "ROUTER/GO_BACK";
  declare export var GO_FORWARD: "ROUTER/GO_FORWARD";
  declare export var LOCATION_CHANGE: "ROUTER/LOCATION_CHANGE";
  declare export type pushAction<T: Path | LocationDescriptorObject> = {
    payload: T
  } & Action<typeof PUSH>;

  declare export function push<T: Path | LocationDescriptorObject>(
    href: T
  ): pushAction<T>;

  declare export type replaceAction<T: Path | LocationDescriptorObject> = {
    payload: T
  } & Action<typeof REPLACE>;

  declare export function replace<T: Path | LocationDescriptorObject>(
    href: T
  ): replaceAction<T>;

  declare export type goAction<T: number> = {
    payload: T
  } & Action<typeof GO>;

  declare export function go<T: number>(index: T): goAction<T>;

  declare export type goBackAction = Action<typeof GO_BACK>;
  declare export function goBack(): goBackAction;

  declare export type goForwardAction = Action<typeof GO_FORWARD>;
  declare export function goForward(): goForwardAction;

  declare export type locationChangeAction<P: Pathname, S: Search, H: Hash> = {
    payload: {
      pathname: P,
      search: S,
      queries: any,
      hash: H
    }
  } & Action<typeof LOCATION_CHANGE>;

  declare export function locationChange<P: Pathname, S: Search, H: Hash>(_: {
    pathname: P,
    search: S,
    hash: H
  }): locationChangeAction<P, S, H>;

  declare export interface State {
    pathname: Pathname;
    search: Search;
    queries: any;
    hash: Hash;
  }
  declare export var routerReducer: Reducer<State>;
  declare export function routerMiddleware(
    history: History
  ): Middleware<any, State>;
}
