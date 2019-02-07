declare module "react-router-config" {
  import typeof * as React from "react";

  import type { RouteComponentProps, SwitchProps, match } from "react-router";

  import type { Location } from "history";

  declare export type RouteConfigComponentProps<
    Params: $ObjMapi<Params, <K>(K) => string> = {}
  > = {
    route?: RouteConfig
  } & RouteComponentProps<Params>;

  declare export interface RouteConfig {
    location?: Location;
    component?:
      | React.ComponentType<RouteConfigComponentProps<any>>
      | React.ComponentType;
    path?: string;
    exact?: boolean;
    strict?: boolean;
    routes?: RouteConfig[];
  }
  declare export interface MatchedRoute<
    Params: $ObjMapi<Params, <K>(K) => string>
  > {
    route: RouteConfig;
    match: match<Params>;
  }
  declare export function matchRoutes<
    Params: $ObjMapi<Params, <K>(K) => string>
  >(
    routes: RouteConfig[],
    pathname: string
  ): Array<MatchedRoute<Params>>;

  declare export function renderRoutes(
    routes: RouteConfig[] | void,
    extraProps?: any,
    switchProps?: SwitchProps
  ): JSX.Element;
}
