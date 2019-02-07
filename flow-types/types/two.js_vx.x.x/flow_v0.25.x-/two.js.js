declare module "two.js" {
  declare type _Object = Two$Two$Object;
  declare class Two {
    constructor(params?: Two$Two$ConstructorParams): this;
    type: Two$Two$Types;
    frameCount: number;
    timeDelta: number;
    width: number;
    height: number;
    playing: boolean;
    renderer: Two$Two$Renderer;
    scene: Two$Two$Group;
    appendTo(domElement: HTMLElement): this;
    play(): this;
    pause(): this;
    update(): this;
    render(): this;
    add(...objects: Two$Two$Object[]): this;
    add(objects: $ReadOnlyArray<Two$Two$Object>): this;
    remove(...objects: Two$Two$Object[]): this;
    remove(objects: $ReadOnlyArray<Two$Two$Object>): this;
    clear(): this;
    makeLine(x1: number, y1: number, x2: number, y2: number): Two$Two$Line;
    makeRectangle(
      x: number,
      y: number,
      width: number,
      height: number
    ): Two$Two$Rectangle;
    makeRoundedRectangle(
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ): Two$Two$RoundedRectangle;
    makeCircle(x: number, y: number, radius: number): Two$Two$Circle;
    makeEllipse(
      x: number,
      y: number,
      width: number,
      height: number
    ): Two$Two$Ellipse;
    makeStar(
      ox: number,
      oy: number,
      or: number,
      ir: number,
      sides: number
    ): Two$Two$Star;
    makePolygon(
      x: number,
      y: number,
      radius: number,
      sides: number
    ): Two$Two$Polygon;
    makeArcSegment(
      ox: number,
      oy: number,
      ir: number,
      or: number,
      sa: number,
      ea: number,
      res?: number
    ): Two$Two$ArcSegment;
    makeCurve(...coords: Array<number | boolean>): Two$Two$Path;
    makeCurve(
      points: $ReadOnlyArray<Two$Two$Vector>,
      open?: boolean
    ): Two$Two$Path;
    makePath(...coords: Array<number | boolean>): Two$Two$Path;
    makePath(
      points: $ReadOnlyArray<Two$Two$Vector>,
      open?: boolean
    ): Two$Two$Path;
    makeGroup(objects: $ReadOnlyArray<Two$Two$Object>): Two$Two$Group;
    makeGroup(...objects: Two$Two$Object[]): Two$Two$Group;
    interpret(svgNode: SVGElement): Two$Two$Group;
    bind(event: string, callback: (...args: any[]) => void): this;
    unbind(
      event: string | null,
      callback: ((...args: any[]) => void) | null
    ): this;
    static Array: typeof Float32Array | typeof Array;
  }

  declare var npm$namespace$Two: {
    noConflict: typeof Two$noConflict,
    Properties: typeof Two$Properties,
    Resolution: typeof Two$Resolution,
    Instances: typeof Two$Instances
  };
  declare interface Two$ConstructorParams {
    type?: Two$Types;
    width?: number;
    height?: number;
    autostart?: boolean;
    fullscreen?: boolean;
    ratio?: number;
  }

  declare class Utils$Collection<T> mixins Array<T> {}

  declare class Two$Types {
    constructor(...args: empty): mixed;
    static +svg: Class<Two$Types__svg> & Two$Types__svg & 0; // 0
    static +webgl: Class<Two$Types__webgl> & Two$Types__webgl & 1; // 1
    static +canvas: Class<Two$Types__canvas> & Two$Types__canvas & 2; // 2
  }

  declare class Two$Types__svg mixins Two$Types {}
  declare class Two$Types__webgl mixins Two$Types {}
  declare class Two$Types__canvas mixins Two$Types {}

  declare var Two$Properties: any[];

  declare class Two$Events {
    constructor(...args: empty): mixed;
    static +change: Class<Two$Events__change> & Two$Events__change & 0; // 0
    static +insert: Class<Two$Events__insert> & Two$Events__insert & 1; // 1
    static +load: Class<Two$Events__load> & Two$Events__load & 2; // 2
    static +order: Class<Two$Events__order> & Two$Events__order & 3; // 3
    static +pause: Class<Two$Events__pause> & Two$Events__pause & 4; // 4
    static +play: Class<Two$Events__play> & Two$Events__play & 5; // 5
    static +remove: Class<Two$Events__remove> & Two$Events__remove & 6; // 6
    static +render: Class<Two$Events__render> & Two$Events__render & 7; // 7
    static +resize: Class<Two$Events__resize> & Two$Events__resize & 8; // 8
    static +update: Class<Two$Events__update> & Two$Events__update & 9; // 9
  }

  declare class Two$Events__change mixins Two$Events {}
  declare class Two$Events__insert mixins Two$Events {}
  declare class Two$Events__load mixins Two$Events {}
  declare class Two$Events__order mixins Two$Events {}
  declare class Two$Events__pause mixins Two$Events {}
  declare class Two$Events__play mixins Two$Events {}
  declare class Two$Events__remove mixins Two$Events {}
  declare class Two$Events__render mixins Two$Events {}
  declare class Two$Events__resize mixins Two$Events {}
  declare class Two$Events__update mixins Two$Events {}

  declare class Two$Commands {
    constructor(...args: empty): mixed;
    static +move: Class<Two$Commands__move> & Two$Commands__move & 0; // 0
    static +line: Class<Two$Commands__line> & Two$Commands__line & 1; // 1
    static +curve: Class<Two$Commands__curve> & Two$Commands__curve & 2; // 2
    static +arc: Class<Two$Commands__arc> & Two$Commands__arc & 3; // 3
    static +close: Class<Two$Commands__close> & Two$Commands__close & 4; // 4
  }

  declare class Two$Commands__move mixins Two$Commands {}
  declare class Two$Commands__line mixins Two$Commands {}
  declare class Two$Commands__curve mixins Two$Commands {}
  declare class Two$Commands__arc mixins Two$Commands {}
  declare class Two$Commands__close mixins Two$Commands {}

  declare var Two$Resolution: number;

  declare var Two$Instances: Two[];

  declare function Two$noConflict(): Two;

  declare class Two$Error {
    constructor(message: string): this;
    message: string;
  }

  declare class Two$Path {
    constructor(
      vertices: $ReadOnlyArray<Two$Vector>,
      closed: boolean,
      curved: boolean,
      manual?: boolean
    ): this;
    id: number;
    stroke: Two$Color;
    fill: Two$Color;
    linewidth: number;
    opacity: number;
    cap: string;
    join: string;
    miter: number;
    rotation: number;
    scale: number;
    translation: Two$Vector;
    parent: Two$Group;
    vertices: Utils$Utils$Collection<Two$Anchor>;
    closed: boolean;
    curved: boolean;
    automatic: boolean;
    beginning: number;
    ending: number;
    clip: boolean;
    clone(): this;
    center(): this;
    addTo(group: Two$Group): this;
    remove(): this;
    getBoundingClientRect(shallow?: boolean): Two$BoundingClientRect;
    noFill(): this;
    noStroke(): this;
    plot(): this;
    subdivide(): this;
    static MakeObservable(obj: any): any;
  }

  declare class Two$Line mixins Two$Path {
    constructor(x1: number, y1: number, x2: number, y2: number): this;
  }

  declare class Two$Rectangle mixins Two$Path {
    constructor(x: number, y: number, width: number, height: number): this;
  }

  declare class Two$RoundedRectangle mixins Two$Path {
    constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      radius?: number
    ): this;
  }

  declare class Two$Ellipse mixins Two$Path {
    constructor(x: number, y: number, width: number, height: number): this;
  }

  declare class Two$Star mixins Two$Path {
    constructor(
      ox: number,
      oy: number,
      or: number,
      ir?: number,
      sides?: number
    ): this;
  }

  declare class Two$Polygon mixins Two$Path {
    constructor(x: number, y: number, radius: number, sides?: number): this;
  }

  declare class Two$Circle mixins Two$Path {
    constructor(x: number, y: number, radius: number): this;
  }

  declare class Two$ArcSegment mixins Two$Path {
    constructor(
      ox: number,
      oy: number,
      ir: number,
      or: number,
      sa: number,
      ea: number,
      res?: number
    ): this;
  }

  declare class Two$Group {
    constructor(): this;
    id: string;
    stroke: Two$Color;
    fill: Two$Color;
    linewidth: number;
    opacity: number;
    cap: string;
    join: string;
    miter: number;
    rotation: number;
    scale: number;
    translation: Two$Vector;
    children: _Object[];
    parent: Two$Group;
    mask: Two$Path;
    clone(): this;
    center(): this;
    addTo(group: Two$Group): this;
    add(...objects: _Object[]): this;
    add(objects: $ReadOnlyArray<_Object>): this;
    remove(...objects: _Object[]): this;
    remove(objects: $ReadOnlyArray<_Object>): this;
    getBoundingClientRect(shallow?: boolean): Two$BoundingClientRect;
    noFill(): this;
    noStroke(): this;
    static MakeObservable(obj: any): any;
  }

  declare type Two$BoundingClientRect = {} & Record<
    "top" | "left" | "right" | "bottom" | "width" | "height",
    number
  >;

  declare type Two$Object = Two$Path | Two$Group;

  declare class Two$Vector {
    constructor(x: number, y: number): this;
    x: number;
    y: number;
    set(x: number, y: number): this;
    copy(v: Two$Vector): this;
    clear(): this;
    clone(): this;
    add(v1: Two$Vector, v2: Two$Vector): this;
    addSelf(v: Two$Vector): this;
    sub(v1: Two$Vector, v2: Two$Vector): this;
    subSelf(v: Two$Vector): this;
    multiplySelf(v: Two$Vector): this;
    multiplyScalar(value: number): this;
    divideScalar(value: number): this;
    negate(): this;
    dot(v: Two$Vector): number;
    lengthSquared(): number;
    length(): number;
    normalize(): this;
    distanceTo(v: Two$Vector): number;
    distanceSquared(v: Two$Vector): number;
    setLength(length: number): this;
    equals(v: Two$Vector): boolean;
    lerp(v: Two$Vector, t: number): this;
    isZero(): boolean;
  }

  declare class Two$Anchor mixins Two$Vector {
    constructor(
      x: number,
      y: number,
      lx: number,
      ly: number,
      rx: number,
      ry: number,
      command: Two$Commands | string
    ): this;
    command: string;
    controls: {
      right: Two$Vector,
      left: Two$Vector
    };
    listen(): this;
    ignore(): this;
    static AppendCurveProperties(): void;
  }

  declare class Two$Stop {
    constructor(offset: number, color: string, opacity: number): this;
    offset: number;
    color: string;
    opacity: number;
    clone(): this;
  }

  declare type Two$Color = string | Two$LinearGradient | Two$RadialGradient;

  declare class Two$LinearGradient {
    constructor(
      x1: number,
      y1: number,
      x2: number,
      y2: number,
      stops: $ReadOnlyArray<Two$Stop>
    ): this;
    left: Two$Vector;
    right: Two$Vector;
    spread: string;
    stops: Utils$Utils$Collection<Two$Stop>;
    clone(): this;
  }

  declare class Two$RadialGradient {
    constructor(
      x: number,
      y: number,
      radius: number,
      stops: $ReadOnlyArray<Two$Stop>,
      fx?: number,
      fy?: number
    ): this;
    center: Two$Vector;
    radius: number;
    focal: Two$Vector;
    spread: string;
    stops: Utils$Utils$Collection<Two$Stop>;
    clone(): this;
  }

  declare class Two$Text {
    constructor(message: string, x: number, y: number, styles?: any): this;
    value: string;
    family: string;
    size: number;
    leading: number;
    alignment: string;
    fill: Two$Color;
    stroke: Two$Color;
    linewidth: number;
    style: string;
    weight: number | string;
    decoration: string;
    baseline: string;
    opacity: number;
    visible: boolean;
    rotation: number;
    scale: number;
    translation: Two$Vector;
    clone(): this;
    getBoundingClientRect(shallow?: boolean): {};
    noFill(): this;
    noStroke(): this;
    static MakeObservable(obj: any): any;
  }

  declare type Two$Renderer =
    | Two$SVGRenderer
    | Two$WebGLRenderer
    | Two$CanvasRenderer;

  declare class Two$SVGRenderer {}

  declare class Two$WebGLRenderer {}

  declare class Two$CanvasRenderer {}
  declare module.exports: typeof Two;
}
