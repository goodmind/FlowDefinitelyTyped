declare module "react-svg-pan-zoom" {
  import typeof * as React from "react";

  declare export var MODE_IDLE: any; // "idle";
  declare export var MODE_PANNING: any; // "panning";
  declare export var MODE_ZOOMING: any; // "zooming";
  declare export var TOOL_AUTO: any; // "auto";
  declare export var TOOL_NONE: any; // "none";
  declare export var TOOL_PAN: any; // "pan";
  declare export var TOOL_ZOOM_IN: any; // "zoom-in";
  declare export var TOOL_ZOOM_OUT: any; // "zoom-out";
  declare export var POSITION_NONE: any; // "none";
  declare export var POSITION_TOP: any; // "top";
  declare export var POSITION_RIGHT: any; // "right";
  declare export var POSITION_BOTTOM: any; // "bottom";
  declare export var POSITION_LEFT: any; // "left";
  declare export type Mode =
    | typeof MODE_IDLE
    | typeof MODE_PANNING
    | typeof MODE_ZOOMING;
  declare export interface Value {
    version: 2;
    mode: Mode;
    focus: boolean;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
    viewerWidth: number;
    viewerHeight: number;
    SVGWidth: number;
    SVGHeight: number;
    startX?: number | null;
    startY?: number | null;
    endX?: number | null;
    endY?: number | null;
  }
  declare export type Tool =
    | typeof TOOL_AUTO
    | typeof TOOL_NONE
    | typeof TOOL_PAN
    | typeof TOOL_ZOOM_IN
    | typeof TOOL_ZOOM_OUT;
  declare export type ToolbarPosition =
    | typeof POSITION_NONE
    | typeof POSITION_TOP
    | typeof POSITION_RIGHT
    | typeof POSITION_BOTTOM
    | typeof POSITION_LEFT;
  declare export interface OptionalProps {
    background: string;
    SVGBackground: string;
    value: Value | null;
    style: { [key: string]: any };
    className: string;
    detectWheel: boolean;
    detectAutoPan: boolean;
    toolbarPosition: ToolbarPosition;
    onChangeValue(value: Value): void;
    onChangeTool(tool: Tool): void;
    onClick<T>(event: ViewerMouseEvent<T>): void;
    onDoubleClick<T>(event: ViewerMouseEvent<T>): void;
    onMouseUp<T>(event: ViewerMouseEvent<T>): void;
    onMouseMove<T>(event: ViewerMouseEvent<T>): void;
    onMouseDown<T>(event: ViewerMouseEvent<T>): void;
    preventPanOutside: boolean;
    scaleFactor: number;
    tool: Tool;
    modifierKeys: string[];
    customToolbar: React.Component<any> | React.StatelessComponent<any>;
  }
  declare export interface RequiredProps {
    width: number;
    height: number;
  }
  declare export type Props = RequiredProps & $Shape<OptionalProps>;
  declare export class ReactSVGPanZoom mixins React.Component<Props> {
    pan(SVGDeltaX: number, SVGDeltaY: number): void;
    zoom(SVGPointX: number, SVGPointY: number, scaleFactor: number): void;
    fitSelection(
      selectionSVGPointX: number,
      selectionSVGPointY: number,
      selectionWidth: number,
      selectionHeight: number
    ): void;
    fitToViewer(): void;
    setPointOnViewerCenter(
      SVGPointX: number,
      SVGPointY: number,
      zoomLevel: number
    ): void;
    reset(): void;
    zoomOnViewerCenter(scaleFactor: number): void;
    getValue(): Value;
    setValue(value: Value): void;
    getTool(): Tool;
    setTool(tool: Tool): void;
  }
  declare export interface Point {
    x: number;
    y: number;
  }
  declare export interface ViewerMouseEvent<T> {
    originalEvent: React.MouseEvent<T>;
    SVGViewer: SVGSVGElement;
    point: Point;
    x: number;
    y: number;
    scaleFactor: number;
    translationX: number;
    translationY: number;
    preventDefault(): void;
    stopPropagation(): void;
  }
  declare export interface ViewerTouchEvent<T> {
    originalEvent: React.TouchEvent<T>;
    SVGViewer: SVGSVGElement;
    points: Point[];
    changedPoints: Point[];
    scaleFactor: number;
    translationX: number;
    translationY: number;
    preventDefault(): void;
    stopPropagation(): void;
  }
  declare export function pan(
    value: Value,
    SVGDeltaX: number,
    SVGDeltaY: number,
    panLimit?: number
  ): Value;

  declare export function zoom(
    value: Value,
    SVGPointX: number,
    SVGPointY: number,
    scaleFactor: number
  ): Value;

  declare export function fitSelection(
    value: Value,
    selectionSVGPointX: number,
    selectionSVGPointY: number,
    selectionWidth: number,
    selectionHeight: number
  ): Value;

  declare export function fitToViewer(value: Value): Value;

  declare export function zoomOnViewerCenter(
    value: Value,
    scaleFactor: number
  ): Value;

  declare export function setPointOnViewerCenter(
    value: Value,
    SVGPointX: number,
    SVGPointY: number,
    zoomLevel: number
  ): Value;

  declare export function reset(value: Value): Value;
}
