declare module "react-resizable" {
  import typeof * as React from "react";

  declare export type Axis = "both" | "x" | "y" | "none";
  declare export interface ResizableState {
    resizing: boolean;
    width: number;
    height: number;
    slackW: number;
    slackH: number;
  }
  declare export interface DragCallbackData {
    node: HTMLElement;
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    lastX: number;
    lastY: number;
  }
  declare export interface ResizeCallbackData {
    node: HTMLElement;
    size: {
      width: number,
      height: number
    };
  }
  declare export interface ResizableProps {
    className?: string;
    width: number;
    height: number;
    handleSize?: [number, number];
    lockAspectRatio?: boolean;
    axis?: Axis;
    minConstraints?: [number, number];
    maxConstraints?: [number, number];
    onResizeStop?: (e: React.SyntheticEvent<>, data: ResizeCallbackData) => any;
    onResizeStart?: (
      e: React.SyntheticEvent<>,
      data: ResizeCallbackData
    ) => any;
    onResize?: (e: React.SyntheticEvent<>, data: ResizeCallbackData) => any;
    draggableOpts?: any;
  }
  declare export class Resizable
    mixins React.Component<ResizableProps, ResizableState> {}
  declare export interface ResizableBoxState {
    height: number;
    width: number;
  }
  declare export type ResizableBoxProps = ResizableProps;
  declare export class ResizableBox
    mixins React.Component<ResizableBoxProps, ResizableBoxState> {}
}
