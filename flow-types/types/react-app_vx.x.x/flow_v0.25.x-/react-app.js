declare module "react-app" {
  import typeof * as React from "react";

  declare export interface LinkProps {
    to: string;
    onClick?: () => void;
    className?: string;
  }
  declare export interface LayoutProps {
    className: string;
  }
  declare export interface RouteProps {
    path: string;
    children: ChildProps[];
  }
  declare export interface ChildProps {
    path: string;
    action(params: any): any;
  }
  declare export interface CreateAppObject {
    routes: RouteProps;
    context: {};
    container: Element | null;
  }
  declare export function createApp(
    createAppObject: CreateAppObject
  ): React$Node;

  declare export class Link mixins React.Component<LinkProps> {}
  declare export class Layout mixins React.Component<LayoutProps> {}
  declare export class Header mixins React.Component<> {}
  declare export class Navigation mixins React.Component<> {}
}
