declare module "wouter" {
  import typeof * as React from "react";

  declare export type Params = {
    [paramName: string]: string
  } | null;
  declare export type Path = string;
  declare export type PushCallback = (to: string) => void;
  declare export type Match = [boolean, Params];
  declare export interface RouteProps {
    children?: ((params: Params) => React.Node) | React.Node;
    path: Path;
    component?: React.ComponentType<any>;
    match?: boolean;
  }
  declare export var Route: React.FunctionComponent<RouteProps>;
  declare export interface LinkProps {
    to?: string;
    href?: string;
    children: React.ReactElement;
    onClick?: () => void;
  }
  declare export var Link: React.FunctionComponent<LinkProps>;
  declare export interface RedirectProps {
    to?: string;
    href?: string;
  }
  declare export var Redirect: React.FunctionComponent<RedirectProps>;
  declare export interface SwitchProps {
    location?: string;
    children: Array<React.ReactElement<RouteProps>>;
  }
  declare export var Switch: React.FunctionComponent<SwitchProps>;
  declare export interface History {
    path: () => Path;
    push: PushCallback;
    subscribe: (cb: PushCallback) => () => void;
  }
  declare export interface RouterProps {
    history: History;
    matcher: (pattern: string, path: Path) => Match;
  }
  declare export var Router: React.FunctionComponent<$Shape<RouterProps>>;
  declare export function useRouter(): RouterProps;

  declare export function useRoute(pattern: string): Match;

  declare export function useLocation(): [Path, PushCallback];
}
