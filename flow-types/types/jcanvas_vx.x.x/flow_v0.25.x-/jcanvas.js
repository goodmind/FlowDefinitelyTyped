declare interface JCanvasRect {
  x: number;
  y: number;
  width: number;
  height: number;
}
declare interface JCanvasSliceDef {
  fillStyle: string;
  x: number;
  y: number;

  /**
   * Radius in pixels
   */
  radius: number;

  /**
   * Start angle in degrees from north
   */
  start: number;

  /**
   * End angle in degrees from north
   */
  end: number;

  /**
   * Distance between slices as a fraction of the radius
   */
  spread?: number;
  layer?: boolean;
  name?: string;
  groups?: string[];
}
declare interface JCanvasTextDef {
  fillStyle: string;
  strokeStyle: string;
  strokeWidth: number;
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  text: string;
}
declare interface JQuery {
  /**
   * This clearCanvas() clears all or any part of the canvas
   * If nothing is passed, the entire canvas is cleared.
   * Clearing a section works in the same way as drawing a rectangle,
   * with the rectangle being drawn from its center (by default).
   */
  clearCanvas(rect?: JCanvasRect): void;

  /**
   * A slice in jCanvas is, essentially, a slice of a circle (similar to a pizza slice).
   * You can draw a slice using the drawSlice() method. The size of a slice is determined by its start, end, and radius properties.
   * The position of a slice is determined by its x and y properties. These coordinates lie at the tip of the slice.
   */
  drawSlice(def: JCanvasSliceDef): void;

  /**
   * To draw text on the canvas, use the drawText() method.
   * The resulting text on the canvas is determined by the value of the text property, as well as any of the following font properties:
   * fontStyle
   * fontSize
   * fontFamily
   */
  drawText(def: JCanvasTextDef): void;
}
declare module "jcanvas" {
  declare function jcanvas(jquery: JQueryStatic, window: Window): void;

  declare module.exports: typeof jcanvas;
}
