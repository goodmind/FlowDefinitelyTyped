declare module "signature_pad" {
  declare class SignaturePad$Point {
    x: number;
    y: number;
    time: number;
    color: string;
    constructor(x: number, y: number, time: number): this;
    velocityFrom(start: SignaturePad$Point): number;
    distanceTo(start: SignaturePad$Point): number;
  }

  declare class SignaturePad$CurveControl {
    c1: SignaturePad$Point;
    c2: SignaturePad$Point;
    constructor(c1: SignaturePad$Point, c2: SignaturePad$Point): this;
  }

  declare class SignaturePad$Bezier {
    startPoint: SignaturePad$Point;
    control1: SignaturePad$CurveControl;
    control2: SignaturePad$CurveControl;
    endPoint: SignaturePad$Point;
    startWidth: number;
    endWidth: number;
    constructor(
      startPoint: SignaturePad$Point,
      control1: SignaturePad$Point,
      control2: SignaturePad$Point,
      endPoint: SignaturePad$Point
    ): this;
    length(): number;
    _point(
      t: number,
      start: number,
      c1: number,
      c2: number,
      end: number
    ): number;
  }

  declare interface SignaturePad$SignaturePadOptions {
    dotSize?: number | (() => number);
    minWidth?: number;
    maxWidth?: number;
    throttle?: number;
    minDistance?: number;
    backgroundColor?: string;
    penColor?: string;
    velocityFilterWeight?: number;
    onBegin?: (event: MouseEvent) => void;
    onEnd?: (event: MouseEvent) => void;
  }
  declare class SignaturePad {
    backgroundColor: string;
    canvas: HTMLCanvasElement;
    dotSize: number | (() => number);
    maxWidth: number;
    minDistance: number;
    minWidth: number;
    options: SignaturePad$SignaturePad$SignaturePadOptions;
    penColor: string;
    throttle: number;
    velocityFilterWeight: number;
    _ctx: CanvasRenderingContext2D;
    _data: Array<{
      color: string,
      points: Array<SignaturePad$SignaturePad$Point>
    }>;
    _isEmpty: boolean;
    _lastVelocity: number;
    _lastWidth: number;
    _mouseButtonDown: boolean;
    _points: Array<SignaturePad$SignaturePad$Point>;

    /**
     * Callback when stroke begin
     */
    onBegin: (event: MouseEvent) => void;

    /**
     * Callback when stroke end.
     */
    onEnd: (event: MouseEvent) => void;

    /**
     * Clears the canvas
     */
    clear: () => void;

    /**
     * Draws signature image from data URL
     */
    fromDataURL: (
      dataUrl: string,
      options?: {
        ratio?: number,
        width?: number,
        height?: number,
        callback?: (error?: ErrorEvent) => void
      }
    ) => void;

    /**
     * Returns signature image as data URL.
     * If 'type' parameter is ommitted, PNG dataUrl is returned.
     */
    toDataURL: (type?: string, encoderOptions?: any) => string;

    /**
     * Rebinds all event handlers
     */
    on: () => void;

    /**
     * Unbinds all event handlers
     */
    off: () => void;

    /**
     * Returns true if canvas is empty, otherwise returns false
     */
    isEmpty: () => boolean;

    /**
     * Draws signature image from array of signature point groups
     */
    fromData: (
      pointGroups: Array<Array<SignaturePad$SignaturePad$Point>>
    ) => void;

    /**
     * Returns array of signature point groups
     */
    toData: () => Array<Array<SignaturePad$SignaturePad$Point>>;

    /**
     * Privates
     */
    _handleMouseDown: (event: MouseEvent) => void;
    _handleMouseMove: (event: MouseEvent) => void;
    _handleMouseUp: (event: MouseEvent) => void;
    _handleTouchStart: (event: MouseEvent) => void;
    _handleTouchMove: (event: MouseEvent) => void;
    _handleTouchEnd: (event: MouseEvent) => void;
    _strokeMoveUpdate: () => void;
    _strokeBegin: (event: MouseEvent) => void;
    _strokeUpdate: (event: MouseEvent) => void;
    _strokeEnd: (event: MouseEvent) => void;
    _handleMouseEvents: (event: MouseEvent) => void;
    _handleTouchEvents: (event: TouchEvent) => void;
    _reset: () => void;
    _createPoint: (x: number, y: number) => SignaturePad$SignaturePad$Point;
    _addPoint: (
      point: SignaturePad$SignaturePad$Point
    ) => SignaturePad$SignaturePad$Bezier | null;
    _calculateCurveWidths: (
      startPoint: SignaturePad$SignaturePad$Point,
      endPoint: SignaturePad$SignaturePad$Point
    ) => {
      end: number,
      start: number
    };
    _strokeWidth: (velocity: number) => number;
    _drawCurveSegment: (x: number, y: number, width: number) => void;
    _drawCurve: (_a: {
      color: string,
      curve: SignaturePad$SignaturePad$Bezier
    }) => void;
    _drawDot: (_a: {
      color: string,
      point: SignaturePad$SignaturePad$Point
    }) => void;
    _fromData: (
      pointGroups: Array<Array<SignaturePad$SignaturePad$Point>>,
      drawCurve: (_a: {
        color: string,
        curve: SignaturePad$SignaturePad$Bezier
      }) => void,
      drawDot: (_a: {
        color: string,
        point: SignaturePad$SignaturePad$Point
      }) => void
    ) => void;
    _toSVG: () => string;
    constructor(
      canvas: HTMLCanvasElement,
      options?: SignaturePad$SignaturePad$SignaturePadOptions
    ): this;
  }
  declare export default typeof SignaturePad;
}
