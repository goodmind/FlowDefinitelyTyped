declare module "obelisk.js" {
  declare export var version: string;
  declare export var author: string;
  declare export class Matrix {
    constructor(
      a?: number,
      b?: number,
      c?: number,
      d?: number,
      tx?: number,
      ty?: number
    ): this;
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
  }
  declare export class Point {
    constructor(x?: number, y?: number): this;
    x: number;
    y: number;
  }
  declare export class Point3D {
    constructor(x?: number, y?: number, z?: number): this;
    x: number;
    y: number;
    z: number;
    toGlobalCoordinates(offset?: obelisk.Point): obelisk.Point;
  }
  declare export class ColorGeom {
    static get32(color: number): number;
    static applyBrightness(
      color: number,
      brightness: number,
      highlight?: boolean
    ): number;
  }
  declare export class ColorPattern {
    static GRASS_GREEN: number;
    static YELLOW: number;
    static WINE_RED: number;
    static PINK: number;
    static PURPLE: number;
    static BLUE: number;
    static GRAY: number;
    static BLACK: number;
    static FINE_COLORS: number[];
    static getRandomComfortableColor(): number;
  }
  declare export class CanvasTool {
    static getPixel(imageData: ImageData, x: number, y: number): number;
  }
  declare export class CanvasManager {
    static defaultCanvas: HTMLCanvasElement;
    static getDefaultCanvas(): HTMLCanvasElement;
    static getNewCanvas(): HTMLCanvasElement;
  }
  declare export class AbstractColor {
    constructor(): this;
    inner: number;
    border: number;
    borderHighlight: number;
    left: number;
    right: number;
    horizontal: number;
    leftSlope: number;
    rightSlope: number;
  }
  declare export class CubeColor mixins AbstractColor {
    constructor(
      border?: number,
      borderHighlight?: number,
      left?: number,
      right?: number,
      horizontal?: number
    ): this;
    BRIGHTNESS_GAIN: number;
    getByHorizontalColor(horizontal: number): CubeColor;
  }
  declare export class PyramidColor mixins AbstractColor {
    constructor(
      border?: number,
      borderHighlight?: number,
      left?: number,
      right?: number
    ): this;
    BRIGHTNESS_GAIN: number;
    getByRightColor(horizontal: number): PyramidColor;
  }
  declare export class SideColor mixins AbstractColor {
    constructor(border?: number, inner?: number): this;
    BRIGHTNESS_GAIN: number;
    getByInnerColor(inner: number): SideColor;
  }
  declare export class SlopeColor mixins AbstractColor {
    constructor(
      border?: number,
      borderHighlight?: number,
      left?: number,
      right?: number,
      leftSlope?: number,
      rightSlope?: number
    ): this;
    BRIGHTNESS_GAIN: number;
    getByHorizontalColor(horizontal: number): SlopeColor;
  }
  declare export class LineColor mixins AbstractColor {
    constructor(border?: number, inner?: number): this;
  }
  declare export class AbstractDimension {
    constructor(): this;
    xAxis: number;
    yAxis: number;
    zAxis: number;
    tall: boolean;
  }
  declare export class BrickDimension mixins AbstractDimension {
    constructor(xAxis?: number, yAxis?: number): this;
  }
  declare export class CubeDimension mixins AbstractDimension {
    constructor(xAxis?: number, yAxis?: number, zAxis?: number): this;
  }
  declare export class PyramidDimension mixins AbstractDimension {
    constructor(axis?: number, tall?: boolean): this;
  }
  declare export class SideXDimension mixins AbstractDimension {
    constructor(xAxis?: number, zAxis?: number): this;
  }
  declare export class SideYDimension mixins AbstractDimension {
    constructor(yAxis?: number, zAxis?: number): this;
  }
  declare export class SlopeDimension mixins AbstractDimension {
    constructor(xAxis?: number, yAxis?: number): this;
  }
  declare export class LineXDimension mixins AbstractDimension {
    constructor(axis?: number): this;
  }
  declare export class LineYDimension mixins AbstractDimension {
    constructor(axis?: number): this;
  }
  declare export class LineZDimension mixins AbstractDimension {
    constructor(axis?: number): this;
  }
  declare export class BitmapData {
    constructor(w: number, h: number, useDefaultCanvas?: boolean): this;
    imageData: ImageData;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    setPixel(posX: number, posY: number, color: number): void;
    setPixelByIndex(index: number, color: number): void;
    checkPixelAvailable(x: number, y: number): boolean;
    floodFill(posX: number, posY: number, color: number): void;
  }
  declare export class PixelObject {
    constructor(primitive: AbstractPrimitive, point3D?: Point3D): this;
    x: number;
    y: number;
    canvas: HTMLCanvasElement;
  }
  declare export class PixelView {
    constructor(canvas: HTMLCanvasElement, point?: Point): this;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    point: Point;
    renderObject(primitive: AbstractPrimitive, point3D?: Point3D): void;
    clear(): void;
  }
  declare export class AbstractPrimitive {
    constructor(): this;
    canvas: HTMLCanvasElement;
    w: number;
    h: number;
    dimension: AbstractDimension;
    color: AbstractColor;
    border: boolean;
    bitmapData: BitmapData;
    useDefaultCanvas: boolean;
    matrix: Matrix;
  }
  declare export class Brick mixins AbstractPrimitive {
    constructor(
      dimension?: BrickDimension,
      color?: SideColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class Cube mixins AbstractPrimitive {
    constructor(
      dimension?: CubeDimension,
      color?: CubeColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class Pyramid mixins AbstractPrimitive {
    constructor(
      dimension?: PyramidDimension,
      color?: PyramidColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SideX mixins AbstractPrimitive {
    constructor(
      dimension?: SideXDimension,
      color?: SideColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SideY mixins AbstractPrimitive {
    constructor(
      dimension?: SideYDimension,
      color?: SideColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SlopeEast mixins AbstractPrimitive {
    constructor(
      dimension?: SlopeDimension,
      color?: SlopeColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SlopeNorth mixins AbstractPrimitive {
    constructor(
      dimension?: SlopeDimension,
      color?: SlopeColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SlopeSouth mixins AbstractPrimitive {
    constructor(
      dimension?: SlopeDimension,
      color?: SlopeColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class SlopeWest mixins AbstractPrimitive {
    constructor(
      dimension?: SlopeDimension,
      color?: SlopeColor,
      border?: boolean,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class LineX mixins AbstractPrimitive {
    constructor(
      dimension?: LineXDimension,
      color?: LineColor,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class LineY mixins AbstractPrimitive {
    constructor(
      dimension?: LineYDimension,
      color?: LineColor,
      useDefaultCanvas?: boolean
    ): this;
  }
  declare export class LineZ mixins AbstractPrimitive {
    constructor(
      dimension?: LineZDimension,
      color?: LineColor,
      useDefaultCanvas?: boolean
    ): this;
  }
}
