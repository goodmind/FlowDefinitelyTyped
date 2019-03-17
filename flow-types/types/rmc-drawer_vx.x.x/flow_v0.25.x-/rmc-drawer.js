declare module "rmc-drawer" {
  import typeof * as moment from "moment";

  import typeof * as React from "react";

  declare interface DrawerProps {
    className?: string;
    prefixCls?: string;
    children?: React.Node | React.Node[];
    style?: React.CSSProperties;
    sidebarStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
    overlayStyle?: React.CSSProperties;
    dragHandleStyle?: React.CSSProperties;
    sidebar?: React.Node;
    onOpenChange?: (
      open: boolean,
      overlay?: {
        overlayClicked: boolean
      }
    ) => void;
    open?: boolean;
    position?: "left" | "right" | "top" | "bottom";
    docked?: boolean;
    transitions?: boolean;
    touch?: boolean;
    enableDragHandle?: boolean;
    dragToggleDistance?: number;
  }
  declare class Drawer mixins React.Component<$Shape<DrawerProps>> {}
  declare export default typeof Drawer;
}
