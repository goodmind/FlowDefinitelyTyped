declare var npm$namespace$Snap: {
  Matrix: typeof Snap$Matrix,
  matrix: typeof Snap$matrix,
  ajax: typeof Snap$ajax,
  format: typeof Snap$format,
  fragment: typeof Snap$fragment,
  getElementByPoint: typeof Snap$getElementByPoint,
  is: typeof Snap$is,
  load: typeof Snap$load,
  plugin: typeof Snap$plugin,
  select: typeof Snap$select,
  selectAll: typeof Snap$selectAll,
  set: typeof Snap$set,
  snapTo: typeof Snap$snapTo,
  animate: typeof Snap$animate,
  animation: typeof Snap$animation,
  color: typeof Snap$color,
  getRGB: typeof Snap$getRGB,
  hsb: typeof Snap$hsb,
  hsl: typeof Snap$hsl,
  rgb: typeof Snap$rgb,
  hsb2rgb: typeof Snap$hsb2rgb,
  hsl2rgb: typeof Snap$hsl2rgb,
  rgb2hsb: typeof Snap$rgb2hsb,
  rgb2hsl: typeof Snap$rgb2hsl,
  angle: typeof Snap$angle,
  rad: typeof Snap$rad,
  deg: typeof Snap$deg,
  sin: typeof Snap$sin,
  cos: typeof Snap$cos,
  tan: typeof Snap$tan,
  asin: typeof Snap$asin,
  acos: typeof Snap$acos,
  atan: typeof Snap$atan,
  atan2: typeof Snap$atan2,
  len: typeof Snap$len,
  len2: typeof Snap$len2,
  parse: typeof Snap$parse,
  parsePathString: typeof Snap$parsePathString,
  parseTransformString: typeof Snap$parseTransformString,
  closest: typeof Snap$closest,
  filter: typeof Snap$filter,
  path: typeof Snap$path
};
declare export var Snap$filter: Snap$Filter;

declare export var Snap$path: Snap$Path;

declare export function Snap$Matrix(): void;

declare export function Snap$matrix(): Snap$Matrix;

declare export function Snap$matrix(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number,
  f: number
): Snap$Matrix;

declare export function Snap$matrix(svgMatrix: SVGMatrix): Snap$Matrix;

declare export function Snap$ajax(
  url: string,
  postData: string,
  callback: Function,
  scope?: Object
): XMLHttpRequest;

declare export function Snap$ajax(
  url: string,
  postData: Object,
  callback: Function,
  scope?: Object
): XMLHttpRequest;

declare export function Snap$ajax(
  url: string,
  callback: Function,
  scope?: Object
): XMLHttpRequest;

declare export function Snap$format(token: string, json: Object): string;

declare export function Snap$fragment(varargs: any): Snap$Fragment;

declare export function Snap$getElementByPoint(
  x: number,
  y: number
): Snap$Snap$Element;

declare export function Snap$is(o: any, type: string): boolean;

declare export function Snap$load(
  url: string,
  callback: (f: Snap$Fragment) => void,
  scope?: Object
): void;

declare export function Snap$plugin(f: Function): void;

declare export function Snap$select(query: string): Snap$Snap$Element;

declare export function Snap$selectAll(query: string): any;

declare export function Snap$set(...els: Snap$Snap$Element[]): Snap$Snap$Set;

declare export function Snap$snapTo(
  values: Array<number> | number,
  value: number,
  tolerance?: number
): number;

declare export function Snap$animate(
  from: number | number[],
  to: number | number[],
  updater: (n: number) => void,
  duration: number,
  easing?: (num: number) => number,
  callback?: () => void
): mina.MinaAnimation;

declare export function Snap$animation(
  attr: Object,
  duration: number,
  easing?: (num: number) => number,
  callback?: () => void
): Snap$Snap$Animation;

declare export function Snap$color(clr: string): Snap$RGBHSB;

declare export function Snap$getRGB(Snap$color: string): Snap$RGB;

declare export function Snap$hsb(h: number, s: number, b: number): Snap$HSB;

declare export function Snap$hsl(h: number, s: number, l: number): Snap$HSL;

declare export function Snap$rgb(r: number, g: number, b: number): Snap$RGB;

declare export function Snap$hsb2rgb(h: number, s: number, v: number): Snap$RGB;

declare export function Snap$hsl2rgb(h: number, s: number, l: number): Snap$RGB;

declare export function Snap$rgb2hsb(r: number, g: number, b: number): Snap$HSB;

declare export function Snap$rgb2hsl(r: number, g: number, b: number): Snap$HSL;

declare export function Snap$angle(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3?: number,
  y3?: number
): number;

declare export function Snap$rad(Snap$deg: number): number;

declare export function Snap$deg(Snap$rad: number): number;

declare export function Snap$sin(Snap$angle: number): number;

declare export function Snap$cos(Snap$angle: number): number;

declare export function Snap$tan(Snap$angle: number): number;

declare export function Snap$asin(Snap$angle: number): number;

declare export function Snap$acos(Snap$angle: number): number;

declare export function Snap$atan(Snap$angle: number): number;

declare export function Snap$atan2(Snap$angle: number): number;

declare export function Snap$len(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;

declare export function Snap$len2(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number;

declare export function Snap$parse(svg: string): Snap$Fragment;

declare export function Snap$parsePathString(pathString: string): Array<any>;

declare export function Snap$parsePathString(
  pathString: Array<string>
): Array<any>;

declare export function Snap$parseTransformString(TString: string): Array<any>;

declare export function Snap$parseTransformString(
  TString: Array<string>
): Array<any>;

declare export function Snap$closest(
  x: number,
  y: number,
  X: number,
  Y: number
): boolean;

export interface Snap$RGB {
  r: number;
  g: number;
  b: number;
  hex: string;
}

export interface Snap$HSB {
  h: number;
  s: number;
  b: number;
}

export interface Snap$RGBHSB {
  r: number;
  g: number;
  b: number;
  hex: string;
  error: boolean;
  h: number;
  s: number;
  v: number;
  l: number;
}

export interface Snap$HSL {
  h: number;
  s: number;
  l: number;
}

export interface Snap$BBox {
  cx: number;
  cy: number;
  h: number;
  height: number;
  Snap$path: number;
  r0: number;
  r1: number;
  r2: number;
  vb: string;
  w: number;
  width: number;
  x2: number;
  x: number;
  y2: number;
  y: number;
}

export interface Snap$TransformationDescriptor {
  string: string;
  globalMatrix: Snap$Snap$Matrix;
  localMatrix: Snap$Snap$Matrix;
  diffMatrix: Snap$Snap$Matrix;
  global: string;
  local: string;
  toString(): string;
}

export interface Snap$Animation {
  attr: {
    [attr: string]: string | number | boolean | any
  };
  duration: number;
  easing?: (num: number) => number;
  callback?: () => void;
}

export interface Snap$Element {
  add(el: Snap$Snap$Element): Snap$Snap$Element;
  add(el: Snap$Snap$Set): Snap$Snap$Element;
  addClass(value: string): Snap$Snap$Element;
  after(el: Snap$Snap$Element): Snap$Snap$Element;
  align(el: Snap$Snap$Element, way: string): Snap$Snap$Element;
  Snap$animate(Snap$animation: any): Snap$Snap$Element;
  Snap$animate(
    attrs: {
      [attr: string]: string | number | boolean | any
    },
    duration: number,
    easing?: (num: number) => number,
    callback?: () => void
  ): Snap$Snap$Element;
  append(el: Snap$Snap$Element): Snap$Snap$Element;
  append(el: Snap$Snap$Set): Snap$Snap$Element;
  appendTo(el: Snap$Snap$Element): Snap$Snap$Element;
  asPX(attr: string, value?: string): number;
  attr(param: "viewBox"): Snap$BBox;
  attr(param: string): string;
  attr(params: {
    [attr: string]: string | number | boolean | Snap$BBox | any
  }): Snap$Snap$Element;
  before(el: Snap$Snap$Element): Snap$Snap$Element;
  children(): Snap$Snap$Element[];
  clone(): Snap$Snap$Element;
  data(key: string, value?: any): any;
  getAlign(el: Snap$Snap$Element, way: string): string;
  getBBox(): Snap$BBox;
  getPointAtLength(
    length: number
  ): {
    x: number,
    y: number,
    alpha: number
  };
  getSubpath(from: number, to: number): string;
  getTotalLength(): number;
  hasClass(value: string): boolean;
  inAnim(): {
    anim: Snap$Animation,
    mina: mina.AnimationDescriptor,
    curStatus: number,
    status: (n?: number) => number,
    stop: () => void
  }[];
  innerSVG(): string;
  insertAfter(el: Snap$Snap$Element): Snap$Snap$Element;
  insertBefore(el: Snap$Snap$Element): Snap$Snap$Element;
  marker(
    x: number,
    y: number,
    width: number,
    height: number,
    refX: number,
    refY: number
  ): Snap$Snap$Element;
  node: HTMLElement;
  outerSVG(): string;

  /**
   * The top level element will included an reference to its Paper after it is rendered.
   */
  paper?: Snap$Snap$Paper;
  parent(): Snap$Snap$Element;
  pattern(x: any, y: any, width: any, height: any): Snap$Snap$Element;
  prepend(el: Snap$Snap$Element): Snap$Snap$Element;
  prependTo(el: Snap$Snap$Element): Snap$Snap$Element;
  remove(): Snap$Snap$Element;
  removeClass(value: string): Snap$Snap$Element;
  removeData(key?: string): Snap$Snap$Element;
  Snap$select(query: string): Snap$Snap$Element;
  stop(): Snap$Snap$Element;
  toDefs(): Snap$Snap$Element;
  toJSON(): any;
  toggleClass(value: string, flag: boolean): Snap$Snap$Element;
  toPattern(x: number, y: number, width: number, height: number): Object;
  toPattern(x: string, y: string, width: string, height: string): Object;
  toString(): string;
  transform(): Snap$TransformationDescriptor;
  transform(tstr: string): Snap$Snap$Element;
  type: string;
  use(): Object;
  Snap$selectAll(): Snap$Snap$Set;
  Snap$selectAll(query: string): Snap$Snap$Set;
  click(handler: (event: MouseEvent) => void, thisArg?: any): Snap$Snap$Element;
  dblclick(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  mousedown(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  mousemove(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  mouseout(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  mouseover(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  mouseup(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  touchstart(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  touchmove(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  touchend(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  touchcancel(
    handler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  unclick(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  undblclick(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  unmousedown(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  unmousemove(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  unmouseout(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  unmouseover(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  unmouseup(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  untouchstart(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  untouchmove(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  untouchend(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  untouchcancel(handler?: (event: MouseEvent) => void): Snap$Snap$Element;
  hover(
    hoverInHandler: (event: MouseEvent) => void,
    hoverOutHandler: (event: MouseEvent) => void,
    thisArg?: any
  ): Snap$Snap$Element;
  hover(
    hoverInHandler: (event: MouseEvent) => void,
    hoverOutHandler: (event: MouseEvent) => void,
    inThisArg?: any,
    outThisArg?: any
  ): Snap$Snap$Element;
  unhover(
    hoverInHandler: (event: MouseEvent) => void,
    hoverOutHandler: (event: MouseEvent) => void
  ): Snap$Snap$Element;
  drag(): Snap$Snap$Element;
  drag(
    onMove: (
      dx: number,
      dy: number,
      x: number,
      y: number,
      event: MouseEvent
    ) => void,
    onStart: (x: number, y: number, event: MouseEvent) => void,
    onEnd: (event: MouseEvent) => void,
    moveThisArg?: any,
    startThisArg?: any,
    endThisArg?: any
  ): Snap$Snap$Element;
  undrag(
    onMove: (dx: number, dy: number, event: MouseEvent) => void,
    onStart: (x: number, y: number, event: MouseEvent) => void,
    onEnd: (event: MouseEvent) => void
  ): Snap$Snap$Element;
  undrag(): Snap$Snap$Element;
}

declare type Snap$Gradient = {
  stops: () => Snap$Snap$Element[],
  addStop: (Snap$color: string, offset: number) => Snap$Gradient,
  setStops: (str: string) => Snap$Gradient
} & Snap$Element;

export interface Snap$Fragment {
  Snap$select(query: string): Snap$Snap$Element;
  Snap$selectAll(query?: string): Snap$Snap$Set;
}

export interface Snap$Matrix {
  add(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ): Snap$Matrix;
  add(Snap$matrix: Snap$Matrix): Snap$Matrix;
  clone(): Snap$Matrix;
  determinant(): number;
  invert(): Snap$Matrix;
  rotate(a: number, x?: number, y?: number): Snap$Matrix;
  scale(x: number, y?: number, cx?: number, cy?: number): Snap$Matrix;
  split(): Snap$ExplicitTransform;
  toTransformString(): string;
  translate(x: number, y: number): Snap$Matrix;
  x(x: number, y: number): number;
  y(x: number, y: number): number;
}

declare interface Snap$ExplicitTransform {
  dx: number;
  dy: number;
  scalex: number;
  scaley: number;
  shear: number;
  rotate: number;
  isSimple: boolean;
}

declare type Snap$Paper = {
  clear(): void,
  el(name: string, attr: Object): Snap$Snap$Element,
  Snap$filter(filstr: string): Snap$Snap$Element,
  gradient(gradient: string): Snap$Snap$Gradient,
  g(varargs?: any): Snap$Snap$Paper,
  group(...els: any[]): Snap$Snap$Paper,
  mask(varargs: any): Object,
  ptrn(
    x: number,
    y: number,
    width: number,
    height: number,
    vbx: number,
    vby: number,
    vbw: number,
    vbh: number
  ): Object,
  svg(
    x: number,
    y: number,
    width: number,
    height: number,
    vbx: number,
    vby: number,
    vbw: number,
    vbh: number
  ): Object,
  toDataURL(): string,
  toString(): string,
  use(id?: string): Object,
  use(id?: Snap$Snap$Element): Object,
  circle(x: number, y: number, r: number): Snap$Snap$Element,
  ellipse(x: number, y: number, rx: number, ry: number): Snap$Snap$Element,
  image(
    src: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): Snap$Snap$Element,
  line(x1: number, y1: number, x2: number, y2: number): Snap$Snap$Element,
  Snap$path(pathSpec: string | (string | number)[][]): Snap$Snap$Element,
  polygon(varargs: any[]): Snap$Snap$Element,
  polyline(varargs: any[]): Snap$Snap$Element,
  rect(
    x: number,
    y: number,
    width: number,
    height: number,
    rx?: number,
    ry?: number
  ): Snap$Snap$Element,
  text(x: number, y: number, text: string | number): Snap$Snap$Element,
  text(x: number, y: number, text: Array<string | number>): Snap$Snap$Element,
  symbol(vbx: number, vby: number, vbw: number, vbh: number): Snap$Snap$Element
} & Snap$Snap$Element;

export interface Snap$Set {
  Snap$animate(
    attrs: {
      [attr: string]: string | number | boolean | any
    },
    duration: number,
    easing?: (num: number) => number,
    callback?: () => void
  ): Snap$Snap$Set;
  Snap$animate(
    ...attrs: [
      {
        [attr: string]: string | number | boolean | any
      },
      "NO PRINT IMPLEMENTED: OptionalType",
      "NO PRINT IMPLEMENTED: OptionalType",
      "NO PRINT IMPLEMENTED: OptionalType"
    ][]
  ): Snap$Snap$Element;
  attr(params: {
    [attr: string]: string | number | boolean | Snap$BBox | any
  }): Snap$Snap$Set;
  attr(param: "viewBox"): Snap$Snap$Set;
  attr(param: string): Snap$Snap$Set;
  bind(attr: string, callback: Function): Snap$Snap$Set;
  bind(attr: string, element: Snap$Snap$Element): Snap$Snap$Set;
  bind(attr: string, element: Snap$Snap$Element, eattr: string): Snap$Snap$Set;
  clear(): void;
  exclude(el: Snap$Snap$Element): boolean;
  forEach(
    callback: (el: Snap$Snap$Element, index?: number) => void | boolean,
    thisArg?: Object
  ): Snap$Snap$Set;
  getBBox(): Snap$BBox;
  insertAfter(): Snap$Snap$Set;
  pop(): Snap$Snap$Element;
  push(el: Snap$Snap$Element): Snap$Snap$Set;
  push(...els: Snap$Snap$Element[]): Snap$Snap$Set;
  remove(): Snap$Snap$Set;
  splice(
    index: number,
    count: number,
    ...insertion: Snap$Snap$Element[]
  ): Snap$Snap$Set;
}

declare interface Snap$Filter {
  blur(x: number, y?: number): string;
  brightness(amount: number): string;
  contrast(amount: number): string;
  grayscale(amount: number): string;
  hueRotate(Snap$angle: number): string;
  invert(amount: number): string;
  saturate(amount: number): string;
  sepia(amount: number): string;
  shadow(
    dx: number,
    dy: number,
    blur: number,
    Snap$color: string,
    opacity: number
  ): string;
  shadow(dx: number, dy: number, Snap$color: string, opacity: number): string;
  shadow(dx: number, dy: number, opacity: number): string;
}

declare interface Snap$Path {
  bezierBBox(...args: number[]): Snap$BBox;
  bezierBBox(bez: Array<number>): Snap$BBox;
  findDotsAtSegment(
    p1x: number,
    p1y: number,
    c1x: number,
    c1y: number,
    c2x: number,
    c2y: number,
    p2x: number,
    p2y: number,
    t: number
  ): Object;
  getBBox(Snap$path: string): Snap$BBox;
  getPointAtLength(Snap$path: string, length: number): Object;
  getSubpath(Snap$path: string, from: number, to: number): string;
  getTotalLength(Snap$path: string): number;
  intersection(path1: string, path2: string): Array<Snap$IntersectionDot>;
  isBBoxIntersect(bbox1: Snap$BBox, bbox2: Snap$BBox): boolean;
  isPointInside(Snap$path: string, x: number, y: number): boolean;
  isPointInsideBBox(bbox: Snap$BBox, x: number, y: number): boolean;
  map(Snap$path: string, Snap$matrix: Snap$Snap$Matrix): string;
  map(Snap$path: string, Snap$matrix: Object): string;
  toAbsolute(Snap$path: string): Array<any>;
  toCubic(pathString: string): Array<any>;
  toCubic(pathString: Array<string>): Array<any>;
  toRelative(Snap$path: string): Array<any>;
}

declare interface Snap$IntersectionDot {
  x: number;
  y: number;
  t1: number;
  t2: number;
  segment1: number;
  segment2: number;
  bez1: Array<number>;
  bez2: Array<number>;
}
declare module "snapsvg" {
  declare export default typeof Snap;

  declare function Snap(
    width: number | string,
    height: number | string
  ): Snap$Snap$Paper;

  declare function Snap(query: string): Snap$Snap$Paper;

  declare function Snap(DOM: SVGElement): Snap$Snap$Paper;
}
