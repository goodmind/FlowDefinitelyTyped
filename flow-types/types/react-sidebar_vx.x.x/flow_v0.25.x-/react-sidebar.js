declare module "react-sidebar" {
  import type { Component } from "react";

  declare export interface SidebarProps {
    contentClassName?: string;
    defaultSidebarWidth?: number;
    docked?: boolean;
    dragToggleDistance?: number;
    onSetOpen?: (open: boolean) => void;
    open?: boolean;
    overlayClassName?: string;
    pullRight?: boolean;
    rootClassName?: string;
    shadow?: boolean;
    sidebar?: React.ReactNode;
    sidebarClassName?: string;
    styles?: SidebarStyles;
    transitions?: boolean;
    touch?: boolean;
    touchHandleWidth?: number;
    rootId?: string;
    sidebarId?: string;
    contentId?: string;
    overlayId?: string;
  }
  declare export interface SidebarStyles {
    content?: $Shape<CSSStyleDeclaration>;
    dragHandle?: $Shape<CSSStyleDeclaration>;
    overlay?: $Shape<CSSStyleDeclaration>;
    root?: $Shape<CSSStyleDeclaration>;
    sidebar?: $Shape<CSSStyleDeclaration>;
  }
  declare export default class Sidebar mixins Component<SidebarProps> {}
}
