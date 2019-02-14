declare var npm$namespace$BezierJs: {
  Bezier: typeof BezierJs$Bezier,
  BezierCap: typeof BezierJs$BezierCap,
  PolyBezier: typeof BezierJs$PolyBezier,
  utils: typeof npm$namespace$BezierJs$utils
};
declare interface BezierJs$Point {
  x: number;
  y: number;
  z?: number;
}

declare type BezierJs$Projection = {
  t?: number,
  d?: number
} & Point;

declare interface BezierJs$Inflection {
  x: number[];
  y: number[];
  z?: number[];
  values: number[];
}

declare type BezierJs$Offset = {
  c: BezierJs$Point,
  n: BezierJs$Point
} & Point;

declare interface BezierJs$Pair {
  left: BezierJs$Bezier;
  right: BezierJs$Bezier;
}

declare type BezierJs$Split = {
  span: BezierJs$Point[],
  _t1?: number,
  _t2?: number
} & Pair;

declare interface BezierJs$MinMax {
  min: number;
  mid?: number;
  max: number;
  size?: number;
}

declare interface BezierJs$BBox {
  x: BezierJs$MinMax;
  y: BezierJs$MinMax;
  z?: BezierJs$MinMax;
}

declare interface BezierJs$Line {
  p1: BezierJs$Point;
  p2: BezierJs$Point;
}

declare type BezierJs$Arc = {
  e: number,
  r: number,
  s: number,
  interval: {
    start: number,
    end: number
  }
} & Point;

declare interface BezierJs$Shape {
  startcap: BezierJs$BezierCap;
  forward: BezierJs$Bezier;
  back: BezierJs$Bezier;
  endcap: BezierJs$BezierCap;
  bbox: BezierJs$BBox;
  intersections: (shape: BezierJs$Shape) => string[][] | number[][];
}

declare interface BezierJs$ABC {
  A: BezierJs$Point;
  B: BezierJs$Point;
  C: BezierJs$Point;
}

declare interface BezierJs$Closest {
  mdist: number;
  mpos: number;
}

/**
 * Bezier curve constructor. The constructor argument can be one of three things:
 *
 * 1. array/4 of {x:..., y:..., z:...}, z optional
 * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
 * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
 */
declare class BezierJs$Bezier {
  clockwise: boolean;
  _3d: boolean;
  _t1: number;
  _t2: number;
  _lut: BezierJs$Point[];
  dpoints: BezierJs$Point[][];
  order: number;
  points: BezierJs$Point[];
  dims: string[];
  dimlen: number;
  constructor(points: BezierJs$Point[]): this;
  constructor(coords: number[]): this;
  constructor(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
    x4?: number,
    y4?: number
  ): this;
  constructor(
    p1: BezierJs$Point,
    p2: BezierJs$Point,
    p3: BezierJs$Point,
    p4?: BezierJs$Point
  ): this;
  static fromSVG(svgString: string): BezierJs$Bezier;
  static getABC(
    n: number,
    S: BezierJs$Point,
    B: BezierJs$Point,
    E: BezierJs$Point,
    t: number
  ): BezierJs$ABC;
  static quadraticFromPoints(
    p1: BezierJs$Point,
    p2: BezierJs$Point,
    p3: BezierJs$Point,
    t?: number
  ): BezierJs$Bezier;
  static cubicFromPoints(
    S: BezierJs$Point,
    B: BezierJs$Point,
    E: BezierJs$Point,
    t?: number,
    d1?: number
  ): BezierJs$Bezier;
  static getUtils(): typeof utils;
  getUtils(): typeof utils;
  valueOf(): string;
  toString(): string;
  toSVG(): string;
  update(): void;
  computedirection(): void;
  length(): number;
  getLUT(steps?: number): BezierJs$Point[];
  on(point: BezierJs$Point, error: number): number;
  project(point: BezierJs$Point): BezierJs$Projection;
  get(t: number): BezierJs$Point;
  point(idx: number): BezierJs$Point;
  compute(t: number): BezierJs$Point;
  raise(): BezierJs$Bezier;
  derivative(t: number): BezierJs$Point;
  inflections(): number[];
  normal(t: number): BezierJs$Point;
  __normal2(t: any): void;
  __normal3(t: any): void;
  __normal(t: any): void;
  hull(t: number): BezierJs$Point[];
  split(t1: number): BezierJs$Split;
  split(t1: number, t2: number): BezierJs$Bezier;
  extrema(): BezierJs$Inflection;
  bbox(): BezierJs$BBox;
  overlaps(curve: BezierJs$Bezier): boolean;
  offset(t: number, d?: number): BezierJs$Offset | BezierJs$Bezier[];
  simple(): boolean;
  reduce(): BezierJs$Bezier[];
  scale(d: Function): BezierJs$Bezier;
  scale(d: number): BezierJs$Bezier;
  outline(
    d1: number,
    d2?: number,
    d3?: number,
    d4?: number
  ): BezierJs$PolyBezier;
  outlineshapes(
    d1: number,
    d2: number,
    curveIntersectionThreshold?: number
  ): BezierJs$Shape[];
  intersects(
    curve: BezierJs$Bezier,
    curveIntersectionThreshold?: number
  ): string[] | number[];
  intersects(curve: BezierJs$Line): string[] | number[];
  lineIntersects(line: BezierJs$Line): number[];
  selfintersects(curveIntersectionThreshold?: number): string[];
  curveintersects(
    c1: BezierJs$Bezier[],
    c2: BezierJs$Bezier[],
    curveIntersectionThreshold?: number
  ): string[];
  arcs(errorThreshold?: number): BezierJs$Arc[];
  _error(pc: any, np1: any, s: any, e: any): void;
  _iterate(errorThreshold: any, circles: any): void;
}

declare class BezierJs$BezierCap mixins Bezier {
  virtual: boolean;
}

declare var npm$namespace$BezierJs$utils: {
  arcfn: typeof BezierJs$utils$arcfn,
  between: typeof BezierJs$utils$between,
  approximately: typeof BezierJs$utils$approximately,
  length: typeof BezierJs$utils$length,
  map: typeof BezierJs$utils$map,
  lerp: typeof BezierJs$utils$lerp,
  pointToString: typeof BezierJs$utils$pointToString,
  pointsToString: typeof BezierJs$utils$pointsToString,
  copy: typeof BezierJs$utils$copy,
  angle: typeof BezierJs$utils$angle,
  round: typeof BezierJs$utils$round,
  dist: typeof BezierJs$utils$dist,
  closest: typeof BezierJs$utils$closest,
  abcratio: typeof BezierJs$utils$abcratio,
  projectionratio: typeof BezierJs$utils$projectionratio,
  lli8: typeof BezierJs$utils$lli8,
  lli4: typeof BezierJs$utils$lli4,
  lli: typeof BezierJs$utils$lli,
  makeline: typeof BezierJs$utils$makeline,
  findbbox: typeof BezierJs$utils$findbbox,
  shapeintersections: typeof BezierJs$utils$shapeintersections,
  makeshape: typeof BezierJs$utils$makeshape,
  getminmax: typeof BezierJs$utils$getminmax,
  align: typeof BezierJs$utils$align,
  roots: typeof BezierJs$utils$roots,
  droots: typeof BezierJs$utils$droots,
  inflections: typeof BezierJs$utils$inflections,
  bboxoverlap: typeof BezierJs$utils$bboxoverlap,
  expandbox: typeof BezierJs$utils$expandbox,
  pairiteration: typeof BezierJs$utils$pairiteration,
  getccenter: typeof BezierJs$utils$getccenter,
  Tvalues: typeof BezierJs$utils$Tvalues,
  Cvalues: typeof BezierJs$utils$Cvalues
};
declare var BezierJs$utils$Tvalues: number[];

declare var BezierJs$utils$Cvalues: number[];

declare function BezierJs$utils$arcfn(
  t: number,
  derivativeFn: Function
): number;

declare function BezierJs$utils$between(
  v: number,
  m: number,
  M: number
): boolean;

declare function BezierJs$utils$approximately(
  a: number,
  b: number,
  precision?: number
): boolean;

declare function BezierJs$utils$length(derivativeFn: Function): number;

declare function BezierJs$utils$map(
  v: number,
  ds: number,
  de: number,
  ts: number,
  te: number
): number;

declare function BezierJs$utils$lerp(
  r: number,
  v1: BezierJs$Point,
  v2: BezierJs$Point
): BezierJs$Point;

declare function BezierJs$utils$pointToString(p: BezierJs$Point): string;

declare function BezierJs$utils$pointsToString(
  points: BezierJs$Point[]
): string;

declare function BezierJs$utils$copy(obj: Object): any;

declare function BezierJs$utils$angle(
  o: BezierJs$Point,
  v1: BezierJs$Point,
  v2: BezierJs$Point
): number;

declare function BezierJs$utils$round(v: number, d: number): number;

declare function BezierJs$utils$dist(
  p1: BezierJs$Point,
  p2: BezierJs$Point
): number;

declare function BezierJs$utils$closest(
  LUT: BezierJs$Point[],
  point: BezierJs$Point
): BezierJs$Closest;

declare function BezierJs$utils$abcratio(t: number, n: number): number;

declare function BezierJs$utils$projectionratio(t: number, n: number): number;

declare function BezierJs$utils$lli8(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
): BezierJs$Point;

declare function BezierJs$utils$lli4(
  p1: BezierJs$Point,
  p2: BezierJs$Point,
  p3: BezierJs$Point,
  p4: BezierJs$Point
): BezierJs$Point;

declare function BezierJs$utils$lli(
  v1: BezierJs$Offset,
  v2: BezierJs$Offset
): BezierJs$Point;

declare function BezierJs$utils$makeline(
  p1: BezierJs$Point,
  p2: BezierJs$Point
): BezierJs$Bezier;

declare function BezierJs$utils$findbbox(
  sections: BezierJs$Bezier[]
): BezierJs$BBox;

declare function BezierJs$utils$shapeintersections(
  s1: BezierJs$Shape,
  bbox1: BezierJs$BBox,
  s2: BezierJs$Shape,
  bbox2: BezierJs$BBox,
  curveIntersectionThreshold?: number
): string[][] | number[][];

declare function BezierJs$utils$makeshape(
  forward: BezierJs$Bezier,
  back: BezierJs$Bezier,
  curveIntersectionThreshold?: number
): BezierJs$Shape;

declare function BezierJs$utils$getminmax(
  curve: BezierJs$Bezier,
  d: string,
  list: number[]
): BezierJs$MinMax;

declare function BezierJs$utils$align(
  points: BezierJs$Point[],
  line: BezierJs$Line
): BezierJs$Point[];

declare function BezierJs$utils$roots(
  points: BezierJs$Point[],
  line: BezierJs$Line
): number[];

declare function BezierJs$utils$droots(p: number[]): number[];

declare function BezierJs$utils$inflections(points: BezierJs$Point[]): number[];

declare function BezierJs$utils$bboxoverlap(
  b1: BezierJs$BBox,
  b2: BezierJs$BBox
): boolean;

declare function BezierJs$utils$expandbox(
  bbox: BezierJs$BBox,
  _bbox: BezierJs$BBox
): void;

declare function BezierJs$utils$pairiteration(
  c1: BezierJs$Bezier,
  c2: BezierJs$Bezier,
  curveIntersectionThreshold?: number
): string[];

declare function BezierJs$utils$getccenter(
  p1: BezierJs$Point,
  p2: BezierJs$Point,
  p3: BezierJs$Point
): BezierJs$Arc;

/**
 * Poly Bezier
 * @param {[type]} curves [description]
 */
declare class BezierJs$PolyBezier {
  curves: BezierJs$Bezier[];
  points: BezierJs$Point[];
  constructor(curves: BezierJs$Bezier[]): this;
  valueOf(): string;
  toString(): string;
  addCurve(curve: BezierJs$Bezier): void;
  length(): number;
  curve(idx: number): BezierJs$Bezier;
  bbox(): BezierJs$BBox;
  offset(d: number): BezierJs$PolyBezier;
}
declare module "bezier-js" {
  declare export default typeof BezierJs$Bezier;
}
