declare interface BezierJs$Point {
x: number,
y: number,
z?: number
} 

declare type BezierJs$Projection = {
t?: number,
d?: number
} & BezierJs$Point


declare interface BezierJs$Inflection {
x: number[],
y: number[],
z?: number[],
values: number[]
} 

declare type BezierJs$Offset = {
c: BezierJs$Point,
n: BezierJs$Point
} & BezierJs$Point


declare interface BezierJs$Pair {
left: BezierJs$Bezier,
right: BezierJs$Bezier
} 

declare type BezierJs$Split = {
span: BezierJs$Point[],
_t1?: number,
_t2?: number
} & BezierJs$Pair


declare interface BezierJs$MinMax {
min: number,
mid?: number,
max: number,
size?: number
} 

declare interface BezierJs$BBox {
x: BezierJs$MinMax,
y: BezierJs$MinMax,
z?: BezierJs$MinMax
} 

declare interface BezierJs$Line {
p1: BezierJs$Point,
p2: BezierJs$Point
} 

declare type BezierJs$Arc = {
e: number,
r: number,
s: number,
interval: {
start: number,
end: number
}
} & BezierJs$Point


declare interface BezierJs$Shape {
startcap: BezierJs$BezierCap,
forward: BezierJs$Bezier,
back: BezierJs$Bezier,
endcap: BezierJs$BezierCap,
bbox: BezierJs$BBox,
intersections: (shape: BezierJs$Shape) => string[][] | number[][]
} 

declare interface BezierJs$ABC {
A: BezierJs$Point,
B: BezierJs$Point,
C: BezierJs$Point
} 

declare interface BezierJs$Closest {
mdist: number,
mpos: number
} 


/**
 * Bezier curve constructor. The constructor argument can be one of three things:
 * 
 * 1. array/4 of {x:..., y:..., z:...}, z optional
 * 2. numerical array/8 ordered x1,y1,x2,y2,x3,y3,x4,y4
 * 3. numerical array/12 ordered x1,y1,z1,x2,y2,z2,x3,y3,z3,x4,y4,z4
 */
declare class BezierJs$Bezier  {
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
constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4?: number, y4?: number): this;
constructor(p1: BezierJs$Point, p2: BezierJs$Point, p3: BezierJs$Point, p4?: BezierJs$Point): this;
static fromSVG(svgString: string): BezierJs$Bezier;
static getABC(
n: number,
S: BezierJs$Point,
B: BezierJs$Point,
E: BezierJs$Point,
t: number): BezierJs$ABC;
static quadraticFromPoints(
p1: BezierJs$Point,
p2: BezierJs$Point,
p3: BezierJs$Point,
t?: number): BezierJs$Bezier;
static cubicFromPoints(
S: BezierJs$Point,
B: BezierJs$Point,
E: BezierJs$Point,
t?: number,
d1?: number): BezierJs$Bezier;
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
outline(d1: number, d2?: number, d3?: number, d4?: number): BezierJs$PolyBezier;
outlineshapes(d1: number, d2: number, curveIntersectionThreshold?: number): BezierJs$Shape[];
intersects(
curve: BezierJs$Bezier,
curveIntersectionThreshold?: number): string[] | number[];
intersects(curve: BezierJs$Line): string[] | number[];
lineIntersects(line: BezierJs$Line): number[];
selfintersects(curveIntersectionThreshold?: number): string[];
curveintersects(
c1: BezierJs$Bezier[],
c2: BezierJs$Bezier[],
curveIntersectionThreshold?: number): string[];
arcs(errorThreshold?: number): BezierJs$Arc[]
}

declare class BezierJs$BezierCap mixins BezierJs$Bezier {
virtual: boolean
}


      declare var npm$namespace$utils: {
        arcfn: typeof utils$arcfn,
between: typeof utils$between,
approximately: typeof utils$approximately,
length: typeof utils$length,
map: typeof utils$map,
lerp: typeof utils$lerp,
pointToString: typeof utils$pointToString,
pointsToString: typeof utils$pointsToString,
copy: typeof utils$copy,
angle: typeof utils$angle,
round: typeof utils$round,
dist: typeof utils$dist,
closest: typeof utils$closest,
abcratio: typeof utils$abcratio,
projectionratio: typeof utils$projectionratio,
lli8: typeof utils$lli8,
lli4: typeof utils$lli4,
lli: typeof utils$lli,
makeline: typeof utils$makeline,
findbbox: typeof utils$findbbox,
shapeintersections: typeof utils$shapeintersections,
makeshape: typeof utils$makeshape,
getminmax: typeof utils$getminmax,
align: typeof utils$align,
roots: typeof utils$roots,
droots: typeof utils$droots,
inflections: typeof utils$inflections,
bboxoverlap: typeof utils$bboxoverlap,
expandbox: typeof utils$expandbox,
pairiteration: typeof utils$pairiteration,
getccenter: typeof utils$getccenter,
        Tvalues: typeof utils$Tvalues,
Cvalues: typeof utils$Cvalues,
      }
declare var utils$Tvalues: number[];

declare var utils$Cvalues: number[];

declare function utils$arcfn(t: number, derivativeFn: Function): number


declare function utils$between(v: number, m: number, M: number): boolean


declare function utils$approximately(a: number, b: number, precision?: number): boolean


declare function utils$length(derivativeFn: Function): number


declare function utils$map(v: number, ds: number, de: number, ts: number, te: number): number


declare function utils$lerp(r: number, v1: BezierJs$Point, v2: BezierJs$Point): BezierJs$Point


declare function utils$pointToString(p: BezierJs$Point): string


declare function utils$pointsToString(points: BezierJs$Point[]): string


declare function utils$copy(obj: Object): any


declare function utils$angle(o: BezierJs$Point, v1: BezierJs$Point, v2: BezierJs$Point): number


declare function utils$round(v: number, d: number): number


declare function utils$dist(p1: BezierJs$Point, p2: BezierJs$Point): number


declare function utils$closest(LUT: BezierJs$Point[], point: BezierJs$Point): BezierJs$Closest


declare function utils$abcratio(t: number, n: number): number


declare function utils$projectionratio(t: number, n: number): number


declare function utils$lli8(
x1: number,
y1: number,
x2: number,
y2: number,
x3: number,
y3: number,
x4: number,
y4: number): BezierJs$Point


declare function utils$lli4(
p1: BezierJs$Point,
p2: BezierJs$Point,
p3: BezierJs$Point,
p4: BezierJs$Point): BezierJs$Point


declare function utils$lli(v1: BezierJs$Offset, v2: BezierJs$Offset): BezierJs$Point


declare function utils$makeline(p1: BezierJs$Point, p2: BezierJs$Point): BezierJs$Bezier


declare function utils$findbbox(sections: BezierJs$Bezier[]): BezierJs$BBox


declare function utils$shapeintersections(
s1: BezierJs$Shape,
bbox1: BezierJs$BBox,
s2: BezierJs$Shape,
bbox2: BezierJs$BBox,
curveIntersectionThreshold?: number): string[][] | number[][]


declare function utils$makeshape(
forward: BezierJs$Bezier,
back: BezierJs$Bezier,
curveIntersectionThreshold?: number): BezierJs$Shape


declare function utils$getminmax(curve: BezierJs$Bezier, d: string, list: number[]): BezierJs$MinMax


declare function utils$align(points: BezierJs$Point[], line: BezierJs$Line): BezierJs$Point[]


declare function utils$roots(points: BezierJs$Point[], line: BezierJs$Line): number[]


declare function utils$droots(p: number[]): number[]


declare function utils$inflections(points: BezierJs$Point[]): number[]


declare function utils$bboxoverlap(b1: BezierJs$BBox, b2: BezierJs$BBox): boolean


declare function utils$expandbox(bbox: BezierJs$BBox, _bbox: BezierJs$BBox): void


declare function utils$pairiteration(
c1: BezierJs$Bezier,
c2: BezierJs$Bezier,
curveIntersectionThreshold?: number): string[]


declare function utils$getccenter(p1: BezierJs$Point, p2: BezierJs$Point, p3: BezierJs$Point): BezierJs$Arc



/**
 * Poly Bezier
 * @param {[type]} curves [description]
 */
declare class BezierJs$PolyBezier  {
curves: BezierJs$Bezier[];
points: BezierJs$Point[];
constructor(curves: BezierJs$Bezier[]): this;
valueOf(): string;
toString(): string;
addCurve(curve: BezierJs$Bezier): void;
length(): number;
curve(idx: number): BezierJs$Bezier;
bbox(): BezierJs$BBox;
offset(d: number): BezierJs$PolyBezier
}declare module 'bezier-js' {
        declare module.exports: typeof BezierJs$BezierJs$Bezier

    }
