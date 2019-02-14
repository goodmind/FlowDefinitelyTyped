declare module "react-treeview" {
  import type { Component, HTMLAttributes } from "react";

  declare type TreeView$TreeProps = {
    collapsed?: boolean,
    defaultCollapsed?: boolean,
    nodeLabel: React.ReactNode,
    itemClassName?: string,
    treeViewClassName?: string,
    childrenClassName?: string
  } & HTMLAttributes<HTMLDivElement>;

  declare class TreeView mixins Component<TreeView$TreeProps, any> {}
  declare export default typeof TreeView;
}
