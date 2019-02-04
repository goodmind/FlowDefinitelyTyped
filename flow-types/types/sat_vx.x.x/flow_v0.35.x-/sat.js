
      declare var npm$namespace$SAT: {
        pointInCircle: typeof SAT$pointInCircle,
pointInPolygon: typeof SAT$pointInPolygon,
testCircleCircle: typeof SAT$testCircleCircle,
testPolygonCircle: typeof SAT$testPolygonCircle,
testCirclePolygon: typeof SAT$testCirclePolygon,
testPolygonPolygon: typeof SAT$testPolygonPolygon,
        
      }

/**
 * This is a simple 2D vector/point class,Vector has two parameters {x},{y}.
 */
declare export class SAT$Vector  {

/**
 * @class Vector has two properties
 * @param {number} x The x-coordinate of the Vector.
 * @param {number} y The y-coordinate of the Vector.
 */
constructor(x?: number, y?: number): this;
x: number;
y: number;
copy(other: SAT$Vector): SAT$Vector;
clone(): SAT$Vector;
perp(): SAT$Vector;
rotate(angle: number): SAT$Vector;
reverse(): SAT$Vector;
normalize(): SAT$Vector;
add(other: SAT$Vector): SAT$Vector;
sub(other: SAT$Vector): SAT$Vector;
scale(x: number, y?: number): SAT$Vector;
project(other: SAT$Vector): SAT$Vector;
projectN(other: SAT$Vector): SAT$Vector;
reflect(axis: SAT$Vector): SAT$Vector;
reflectN(axis: SAT$Vector): SAT$Vector;
dot(other: SAT$Vector): number;
len2(): number;
len(): number
}


/**
 * This is simple circle with a center {pos} position and radius {r}.
 */
declare export class SAT$Circle  {
constructor(pos?: SAT$Vector, r?: number): this;
pos: SAT$Vector;
r: number
}

declare export class SAT$Polygon  {
constructor(pos?: SAT$Vector, points?: SAT$Vector[]): this;
pos: SAT$Vector;
points: SAT$Vector[];
angle: number;
offset: SAT$Vector;
calcPoints: SAT$Vector[];
edges: SAT$Vector[];
normals: SAT$Vector[];
setPoints(points: SAT$Vector[]): SAT$Polygon;
setAngle(angle: number): SAT$Polygon;
setOffset(offset: SAT$Vector): SAT$Polygon;
rotate(angle: number): SAT$Polygon;
translate(x: number, y: number): SAT$Polygon;
getAABB(): SAT$Polygon;
getCentroid(): SAT$Vector
}

declare export class SAT$Box  {
constructor(pos?: SAT$Vector, width?: number, height?: number): this;
pos: SAT$Vector;
w: number;
h: number;
toPolygon(): SAT$Polygon
}

declare export class SAT$Response  {
constructor(): this;
a: any;
b: any;
overlap: number;
overlapN: SAT$Vector;
overlapV: SAT$Vector;
aInB: boolean;
bInA: boolean;
clear(): SAT$Response
}


/**
 * @function {pointInCircle} checks whether a given point {p} is inside the specified circle {c}.
 * @param {SAT$Vector} p given a point to checks.
 * @param {SAT$Circle} c check with a specified circle
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$pointInCircle(p: SAT$Vector, c: SAT$Circle): boolean



/**
 * @function {pointInPolygon} checks whether a given point [p] is inside a specified convex polygon.
 * @param {SAT$Vector} p given a point to check.
 * @param {SAT$Polygon} poly check with a spcified convex polygon.
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$pointInPolygon(p: SAT$Vector, poly: SAT$Polygon): boolean



/**
 * @function {testCicleCircle} tests a collision between two {Circle}s, {a} and {b}.
if a {response} is to be calculated in the event of a collision, pass in a cleared {Response} object.
 * @param {SAT$Circle} a specified circle a to tests.
 * @param {SAT$Circle} b spacified circle b to tests.
 * @param {SAT$Response} response specified the result of a collision between two circle.
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$testCircleCircle(a: SAT$Circle, b: SAT$Circle, response?: SAT$Response): boolean



/**
 * @function {testPolygonCicle} tests a collision between a {Polygon} and a {Circle}. if a response is to
be calculated in the event of a collision, pass in a cleared {Response} object.
 * @param {SAT$Polygon} polygon specified a Polygon to tests a collision.
 * @param {SAT$Circle} circle specified a Circle to tests a collision.
 * @param {SAT$Response} response specified the result of a collision between a {Polygon} and a {Circle}.
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$testPolygonCircle(polygon: SAT$Polygon, circle: SAT$Circle, response?: SAT$Response): boolean



/**
 * @function {testCirclePolygon} tests a collision between a {Circle} and a {Polygon}. if a response is to
be calculated in the event of a collision, pass in a cleared {Response} object.
 * @param {SAT$Circle} circle specified a {Circle} to tests a collision.
 * @param {SAT$Polygon} polygon specified a {Polygon} to tests a collision.
 * @param {SAT$Response} response specified the result of a collision between a {Circle} and a {Polygon}.
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$testCirclePolygon(circle: SAT$Circle, polygon: SAT$Polygon, response?: SAT$Response): boolean



/**
 * @function {testPolygonPolygon} tests whether two polygons {a} and {b} collide.
if a response is to be calculated in the event of a collision, pass in a cleared {Response} object.
 * @param {SAT$Polygon} a specified a {Polygon} {a} to test a collision.
 * @param {SAT$Polygon} b specified a {Polygon} {b} to test a collision.
 * @param {SAT$Response} response specified the result of a collision between two {Polygon}s.
 * @return {boolean} return {true} if there is a collision. {false} otherwise.
 */
declare export function SAT$testPolygonPolygon(a: SAT$Polygon, b: SAT$Polygon, response?: SAT$Response): boolean
declare module 'sat' {
        declare module.exports: typeof SAT

    }
