declare module 'svg-path-bounding-box' {
        declare module.exports: typeof svgPathBoundingBox

	declare function svgPathBoundingBox(path: string): svgPathBoundingBox$svgPathBoundingBox$BoundingBoxView

	
/**
 * pass in initial points if you want
 * @see https://github.com/gabelerner/canvg/blob/860e418aca67b9a41e858a223d74d375793ec364/canvg.js#L449
 */
declare class svgPathBoundingBox$BoundingBox  {
x1: number;
y1: number;
x2: number;
y2: number;
constructor(x1: number, y1: number, x2: number, y2: number): this;
width(): number;
height(): number;
addPoint(x: number, y: number): void;
addX(x: number): void;
addY(y: number): void;
addQuadraticCurve(
p0x: number,
p0y: number,
p1x: number,
p1y: number,
p2x: number,
p2y: number): void;

/**
 * @see http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
 */
addBezierCurve(
p0x: number,
p0y: number,
p1x: number,
p1y: number,
p2x: number,
p2y: number,
p3x: number,
p3y: number): void
}

declare class svgPathBoundingBox$BoundingBoxView  {
x1: number;
y1: number;
x2: number;
y2: number;
minX: number;
minY: number;
maxX: number;
maxY: number;
width: number;
height: number;
constructor(boundingBox: svgPathBoundingBox$BoundingBox): this;
round(precision?: number): this;
scale(scale?: number): this;
toString(): string
}

declare class svgPathBoundingBox$Path  {
d: string;
constructor(d: string): this;
getBoundingBox(): svgPathBoundingBox$BoundingBoxView
}
    }
