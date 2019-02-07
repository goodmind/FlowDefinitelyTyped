declare module "redux-router" {
  import typeof * as React from "react";

  import typeof * as ReactRouter from "react-router";

  import typeof * as Redux from "redux";

  import typeof * as H from "history";

  import typeof routerStateReducer from "./lib/routerStateReducer";

  import typeof ReduxRouter from "./lib/ReduxRouter";

  import typeof reduxReactRouter from "./lib/client";

  import typeof isActive from "./lib/isActive";

  import type {
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
  } from "./lib/actionCreators";

  declare export {
    ReduxRouter,
    routerStateReducer,
    reduxReactRouter,
    isActive,
    historyAPI,
    pushState,
    push,
    replaceState,
    replace,
    setState,
    go,
    goBack,
    goForward
  };
}
