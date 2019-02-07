declare module "react-sortable-pane" {
  import typeof * as React from "react";

  declare export type PaneId = string | number;
  declare export interface PaneSize {
    width: number;
    height: number;
  }
  declare export interface PaneProperty {
    id: PaneId;
    width: number | string;
    height: number | string;
    order: number;
  }
  declare export interface PaneResizeData {
    pane: PaneProperty;
    direction: "x" | "y" | "xy";
    delta: PaneSize;
  }
  declare export interface SortablePaneProps {
    className?: string;
    style?: React.HTMLAttributes<HTMLElement>;
    direction?: "horizontal" | "vertical";
    margin?: number;
    zIndex?: number;
    grid?: [number, number];
    isSortable?: boolean;
    disableEffect?: boolean;
    dragHandleClassName?: string;
    onOrderChange?: (
      oldPanes: PaneProperty[],
      newPanes: PaneProperty[]
    ) => void;
    onResizeStart?: (
      e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
      id: PaneId,
      panes: PaneProperty[]
    ) => void;
    onResize?: (
      e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
      id: PaneId,
      panes: PaneProperty[],
      data: PaneResizeData
    ) => void;
    onResizeStop?: (
      e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
      id: PaneId,
      panes: PaneProperty[],
      data: PaneResizeData
    ) => void;
    onDragStart?: (
      e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
      id: PaneId,
      panes: PaneProperty[]
    ) => void;
    onDragStop?: (
      e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>,
      id: PaneId,
      panes: PaneProperty[]
    ) => void;
  }
  declare export class SortablePane mixins React.Component<SortablePaneProps> {
    render(): JSX.Element;
  }
  declare export interface PaneProps {
    id: PaneId;
    width: string | number;
    height: string | number;
    minWidth?: string | number;
    minHeight?: string | number;
    maxWidth?: string | number;
    maxHeight?: string | number;
    className?: string;
    style?: React.HTMLAttributes<HTMLElement>;
    isResizable?: {
      x?: boolean,
      y?: boolean,
      xy?: boolean
    };
  }
  declare export class Pane mixins React.Component<PaneProps> {
    render(): JSX.Element;
  }
}
