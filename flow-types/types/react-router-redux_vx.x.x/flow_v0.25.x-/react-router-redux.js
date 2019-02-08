declare module "react-router-redux" {
  import type { Store, Dispatch, Middleware, Reducer } from "redux";

  import type {
    History,
    Location,
    Path,
    LocationState,
    LocationDescriptor
  } from "history";

  import typeof * as React from "react";

  import type { match } from "react-router";

  declare export interface ConnectedRouterProps<State> {
    store?: Store<State>;
    history: History;
  }
  declare export class ConnectedRouter<State>
    mixins React.Component<ConnectedRouterProps<State>> {}
  declare export var LOCATION_CHANGE: any; // "@@router/LOCATION_CHANGE";
  declare export interface RouterState {
    location: Location | null;
  }
  declare export var routerReducer: Reducer<RouterState>;
  declare export var CALL_HISTORY_METHOD: any; // "@@router/CALL_HISTORY_METHOD";
  declare export function push(
    location: LocationDescriptor,
    state?: LocationState
  ): RouterAction;

  declare export function replace(
    location: LocationDescriptor,
    state?: LocationState
  ): RouterAction;

  declare export function go(n: number): RouterAction;

  declare export function goBack(): RouterAction;

  declare export function goForward(): RouterAction;

  declare export var routerActions: {
    push: typeof push,
    replace: typeof replace,
    go: typeof go,
    goBack: typeof goBack,
    goForward: typeof goForward
  };
  declare export interface LocationActionPayload {
    method: string;
    args?: any[];
  }
  declare export interface RouterAction {
    type: typeof CALL_HISTORY_METHOD;
    payload: LocationActionPayload;
  }
  declare export interface LocationChangeAction {
    type: typeof LOCATION_CHANGE;
    payload: Location & {
      props?: {
        match: {
          path: string,
          url: string,
          params: any,
          isExact: boolean
        },
        location: Location,
        history: History
      }
    };
  }
  declare export function routerMiddleware(history: History): Middleware;

  declare export function createMatchSelector(
    path: string
  ): (state: {
    router: RouterState
  }) => match | null;
}
