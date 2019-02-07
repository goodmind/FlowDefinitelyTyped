declare module "mirrorx" {
  import typeof * as H from "history";

  import typeof * as React from "react";

  import type { Connect } from "react-redux";

  import type { match } from "react-router";

  declare export type Omit<T, K: $Keys<T>> = Pick<
    T,
    $ElementType<
      $ObjMapi<T, <P>(P) => P> &
        $ObjMapi<{ [k: K]: any }, <P>(P) => empty> & {
          [x: string]: empty,
          [x: number]: empty
        },
      $Keys<T>
    >
  >;
  declare export interface model {
    name: string;
    initialState?: any;
    reducers?: any;
    effects?: any;
  }
  declare export interface _model {
    name: string;
    reducers: any;
  }
  declare export type LinkProps = {
    to: H.LocationDescriptor,
    replace?: boolean
  } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

  declare export type NavLinkProps = {
    activeClassName?: string,
    activeStyle?: React.CSSProperties,
    exact?: boolean,
    strict?: boolean,
    isActive?: (match: match<any>, location: H.Location) => boolean,
    location?: H.Location
  } & LinkProps;

  declare export interface SwitchProps {
    children?: React.ReactNode;
    location?: H.Location;
  }
  declare export interface RedirectProps {
    to: H.LocationDescriptor;
    push?: boolean;
    from?: string;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }
  declare export interface RouteComponentProps<
    Params: $ObjMapi<Params, <K>(K) => string>
  > {
    match: match<Params>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
  }
  declare export interface RouteProps {
    location?: H.Location;
    component?:
      | React.ComponentType<RouteComponentProps<any>>
      | React.ComponentType<any>;
    render?: (props: RouteComponentProps<any>) => React.ReactNode;
    children?:
      | ((props: RouteComponentProps<any>) => React.ReactNode)
      | React.ReactNode;
    path?: string;
    exact?: boolean;
    strict?: boolean;
  }
  declare export interface PromptProps {
    message: string | ((location: H.Location) => string | boolean);
    when?: boolean;
  }
  declare export interface LocationActionPayload {
    method: string;
    args?: any[];
  }
  declare export interface RouterAction {
    type: "@@router/CALL_HISTORY_METHOD";
    payload: LocationActionPayload;
  }
  declare export interface routeActions {
    push(location: any, state?: any): RouterAction;
    replace(location: any, state?: any): RouterAction;
    go(n: number): RouterAction;
    goBack(): RouterAction;
    goForward(): RouterAction;
  }
  declare export interface ConnectedRouterProps<State> {
    store?: any;
    history?: H.History;
  }
  declare export interface Actions {
    routing: routeActions;
    [propName: string]: any;
  }
  declare export interface defaultOptions {
    initialState?: {};
    historyMode?: string;
    middlewares: any[];
    reducers: {};
    addEffect(name: string, handler: () => any): any;
  }
  declare export interface Renderer {
    <T: Element>(
      element: React.DOMElement<React.DOMAttributes<T>, T>,
      container: Element | null,
      callback?: () => void
    ): T;
    (
      element: Array<React.DOMElement<React.DOMAttributes<any>, any>>,
      container: Element | null,
      callback?: () => void
    ): Element;
    (
      element: React.SFCElement<any> | Array<React.SFCElement<any>>,
      container: Element | null,
      callback?: () => void
    ): void;
    <P, T: React.Component<P, React.ComponentState>>(
      element: React.CElement<P, T>,
      container: Element | null,
      callback?: () => void
    ): T;
    (
      element: Array<
        React.CElement<any, React.Component<any, React.ComponentState>>
      >,
      container: Element | null,
      callback?: () => void
    ): React.Component<any, React.ComponentState>;
    <P>(
      element: React.ReactElement<P>,
      container: Element | null,
      callback?: () => void
    ): React.Component<P, React.ComponentState> | Element | void;
    (
      element: Array<React.ReactElement<any>>,
      container: Element | null,
      callback?: () => void
    ): React.Component<any, React.ComponentState> | Element | void;
    (
      parentComponent: React.Component<any> | Array<React.Component<any>>,
      element: React.SFCElement<any>,
      container: Element,
      callback?: () => void
    ): void;
  }

  /**
   * This method is used to create and inject a model.
   */
  declare export function model(options: model): _model;

  /**
   * connect connects your React component to your Redux store
   */
  declare export var connect: Connect;
  declare export var actions: Actions;
  declare export function hook(): (subscriber: () => any) => any;

  declare export function defaults(): (options: defaultOptions) => void;

  declare export var render: Renderer;
  declare export class Router<State>
    mixins React.Component<ConnectedRouterProps<State>> {}
  declare export class Link mixins React.Component<LinkProps, any> {}
  declare export class NavLink mixins React.Component<NavLinkProps, any> {}
  declare export class Redirect mixins React.Component<RedirectProps, any> {}
  declare export class Route<T: RouteProps = RouteProps>
    mixins React.Component<T, any> {}
  declare export class Prompt mixins React.Component<PromptProps, any> {}
  declare export function withRouter<P: RouteComponentProps<any>>(
    component: React.ComponentType<P>
  ): React.ComponentClass<Omit<P, $Keys<RouteComponentProps<any>>>>;

  declare export function withRouter<TFunction: React.ComponentClass<any>>(
    target: TFunction
  ): TFunction;
}
