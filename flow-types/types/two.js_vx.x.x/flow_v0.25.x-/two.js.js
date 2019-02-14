declare module "two.js" {
  declare type _Object = Two$Object;
  declare class Two {
    constructor(params?: Two$ConstructorParams): this;
    type: Two$Types;
    frameCount: number;
    timeDelta: number;
    width: number;
    height: number;
    playing: boolean;
    renderer: Two$Renderer;
    scene: Two$Group;
    appendTo(domElement: HTMLElement): this;
    play(): this;
    pause(): this;
    update(): this;
    render(): this;
    add(...objects: Two$Object[]): this;
    add(objects: $ReadOnlyArray<Two$Object>): this;
    remove(...objects: Two$Object[]): this;
    remove(objects: $ReadOnlyArray<Two$Object>): this;
    clear(): this;
    makeLine(x1: number, y1: number, x2: number, y2: number): Two$Line;
    makeRectangle(
      x: number,
      y: number,
      width: number,
      height: number
    ): Two$Rectangle;
    makeRoundedRectangle(
      x: number,
      y: number,
      width: number,
      height: number,
      radius: number
    ): Two$RoundedRectangle;
    makeCircle(x: number, y: number, radius: number): Two$Circle;
    makeEllipse(
      x: number,
      y: number,
      width: number,
      height: number
    ): Two$Ellipse;
    makeStar(
      ox: number,
      oy: number,
      or: number,
      ir: number,
      sides: number
    ): Two$Star;
    makePolygon(
      x: number,
      y: number,
      radius: number,
      sides: number
    ): Two$Polygon;
    makeArcSegment(
      ox: number,
      oy: number,
      ir: number,
      or: number,
      sa: number,
      ea: number,
      res?: number
    ): Two$ArcSegment;
    makeCurve(...coords: Array<number | boolean>): Two$Path;
    makeCurve(points: $ReadOnlyArray<Two$Vector>, open?: boolean): Two$Path;
    makePath(...coords: Array<number | boolean>): Two$Path;
    makePath(points: $ReadOnlyArray<Two$Vector>, open?: boolean): Two$Path;
    makeGroup(objects: $ReadOnlyArray<Two$Object>): Two$Group;
    makeGroup(...objects: Two$Object[]): Two$Group;
    interpret(svgNode: SVGElement): Two$Group;
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
    Instances: typeof Two$Instances,
    Types: typeof Two$Types,
    Events: typeof Two$Events,
    Commands: typeof Two$Commands,
    Error: typeof Two$Error,
    Path: typeof Two$Path,
    Line: typeof Two$Line,
    Rectangle: typeof Two$Rectangle,
    RoundedRectangle: typeof Two$RoundedRectangle,
    Ellipse: typeof Two$Ellipse,
    Star: typeof Two$Star,
    Polygon: typeof Two$Polygon,
    Circle: typeof Two$Circle,
    ArcSegment: typeof Two$ArcSegment,
    Group: typeof Two$Group,
    Vector: typeof Two$Vector,
    Anchor: typeof Two$Anchor,
    Stop: typeof Two$Stop,
    LinearGradient: typeof Two$LinearGradient,
    RadialGradient: typeof Two$RadialGradient,
    Text: typeof Two$Text,
    SVGRenderer: typeof Two$SVGRenderer,
    WebGLRenderer: typeof Two$WebGLRenderer,
    CanvasRenderer: typeof Two$CanvasRenderer,
    Utils: typeof npm$namespace$Two$Utils
  };
  declare interface Two$ConstructorParams {
    type?: Two$Types;
    width?: number;
    height?: number;
    autostart?: boolean;
    fullscreen?: boolean;
    ratio?: number;
  }

  declare var npm$namespace$Two$Utils: {
    Collection: typeof Two$Utils$Collection
  };
  declare class Two$Utils$Collection<T> mixins Array<T> {}

  declare var Two$Types: {|
    +svg: 0, // 0
    +webgl: 1, // 1
    +canvas: 2 // 2
  |};

  declare var Two$Properties: any[];

  declare var Two$Events: {|
    +change: 0, // 0
    +insert: 1, // 1
    +load: 2, // 2
    +order: 3, // 3
    +pause: 4, // 4
    +play: 5, // 5
    +remove: 6, // 6
    +render: 7, // 7
    +resize: 8, // 8
    +update: 9 // 9
  |};

  declare var Two$Commands: {|
    +move: 0, // 0
    +line: 1, // 1
    +curve: 2, // 2
    +arc: 3, // 3
    +close: 4 // 4
  |};

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
    vertices: Utils$Collection<Two$Anchor>;
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

  declare class Two$Line mixins Path {
    constructor(x1: number, y1: number, x2: number, y2: number): this;
  }

  declare class Two$Rectangle mixins Path {
    constructor(x: number, y: number, width: number, height: number): this;
  }

  declare class Two$RoundedRectangle mixins Path {
    constructor(
      x: number,
      y: number,
      width: number,
      height: number,
      radius?: number
    ): this;
  }

  declare class Two$Ellipse mixins Path {
    constructor(x: number, y: number, width: number, height: number): this;
  }

  declare class Two$Star mixins Path {
    constructor(
      ox: number,
      oy: number,
      or: number,
      ir?: number,
      sides?: number
    ): this;
  }

  declare class Two$Polygon mixins Path {
    constructor(x: number, y: number, radius: number, sides?: number): this;
  }

  declare class Two$Circle mixins Path {
    constructor(x: number, y: number, radius: number): this;
  }

  declare class Two$ArcSegment mixins Path {
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

  declare class Two$Anchor mixins Vector {
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
    stops: Utils$Collection<Two$Stop>;
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
    stops: Utils$Collection<Two$Stop>;
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
  declare export default typeof Two;
}
