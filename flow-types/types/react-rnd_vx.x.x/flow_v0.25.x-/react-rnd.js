declare module "react-rnd" {
  import typeof * as React from "react";

  declare type CSSProperties = React.CSSProperties;
  declare export type Direction =
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "left"
    | "right"
    | "top"
    | "topLeft"
    | "topRight";
  declare export interface Enable {
    bottom?: boolean;
    bottomLeft?: boolean;
    bottomRight?: boolean;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    topLeft?: boolean;
    topRight?: boolean;
  }
  declare export interface HandleClasses {
    bottom?: string;
    bottomLeft?: string;
    bottomRight?: string;
    left?: string;
    right?: string;
    top?: string;
    topLeft?: string;
    topRight?: string;
  }
  declare export interface HandleStyles {
    bottom?: CSSProperties;
    bottomLeft?: CSSProperties;
    bottomRight?: CSSProperties;
    left?: CSSProperties;
    right?: CSSProperties;
    top?: CSSProperties;
    topLeft?: CSSProperties;
    topRight?: CSSProperties;
  }
  declare export interface Position {
    x: number;
    y: number;
  }
  declare export interface Size {
    width: number;
    height: number;
  }
  declare export interface DraggableData {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
  }
  declare export type DraggableEventHandler = (
    e: MouseEvent | TouchEvent,
    data: DraggableData
  ) => void | false;
  declare export type ResizeHandler = (
    e: MouseEvent | TouchEvent,
    direction: Direction,
    ref: HTMLDivElement,
    delta: Size,
    position: Position
  ) => void;
  declare export interface Options {
    default: {
      x?: number,
      y?: number,
      width?: number | string,
      height?: number | string
    };
    className: string;
    style: any;
    width: number | string;
    height: number | string;
    minWidth: number | string;
    minHeight: number | string;
    maxWidth: number | string;
    maxHeight: number | string;
    z: number;
    bounds: "parent" | "window" | "body" | string;
    resizeHandleClasses: HandleClasses;
    resizeHandleStyles: HandleStyles;
    lockAspectRatio: boolean;
    enableResizing?: Enable;
    disableDragging?: boolean;
    onResizeStart: () => void;
    onResize: () => void;
    onResizeStop: ResizeHandler;
    onDragStart: DraggableEventHandler;
    onDrag: DraggableEventHandler;
    onDragStop: DraggableEventHandler;
  }
  declare class Rnd mixins React.Component<$Shape<Options>> {}
  declare export default typeof Rnd;
}
