declare module "react-router-hash-link" {
  import typeof * as React from "react";

  import type { LinkProps, NavLinkProps } from "react-router-dom";

  declare export type HashLinkProps = {
    smooth?: boolean,
    scroll?: (element: HTMLElement) => void
  } & LinkProps;

  declare export class HashLink mixins React.Component<HashLinkProps, any> {}
  declare export type NavHashLinkProps = {} & NavLinkProps & HashLinkProps;

  declare export class NavHashLink
    mixins React.Component<NavHashLinkProps, any> {}
}
