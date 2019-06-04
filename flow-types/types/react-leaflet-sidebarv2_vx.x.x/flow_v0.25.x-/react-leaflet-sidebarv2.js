declare module "react-leaflet-sidebarv2" {
  import typeof * as React from "react";

  declare type Icon = string | React.ElementType;
  declare type Anchor = "top" | "bottom";
  declare type Position = "left" | "right";
  declare interface TabProps {
    id: string;
    header: string;
    icon: Icon;
    anchor?: Anchor;
    disabled?: boolean;
    onClose?: () => void;
    closeIcon?: Icon;
    position?: Position;
    active?: boolean;
  }
  declare class Tab mixins React.Component<TabProps, any> {}
  declare type TabType =
    | React.ReactElement<Tab>
    | Array<React.ReactElement<Tab>>;
  declare interface SidebarProps {
    id: string;
    collapsed: boolean;
    position: Position;
    selected: string;
    closeIcon?: Icon;
    onClose?: () => void;
    onOpen?: () => void;
    children: TabType;
  }
  declare class Sidebar mixins React.Component<SidebarProps, any> {}
  declare export { Tab, Sidebar };
}
