declare module 'geometry-dom' {
        declare export interface GeometryDom$DOMPointReadOnly {

/**
 * x coordinate / readonly
 */
x: number,

/**
 * y coordinate / readonly
 */
y: number,

/**
 * z coordinate / readonly
 */
z: number,

/**
 * w coordinate / readonly
 */
w: number,

/**
 * Post-multiply point with matrix.
 * @param matrix
 */
matrixTransform(matrix: GeometryDom$DOMMatrixReadOnly): GeometryDom$DOMPoint
} 

declare type GeometryDom$DOMPoint = {

/**
 * x coordinate
 */
x: number,

/**
 * y coordinate
 */
y: number,

/**
 * z coordinate
 */
z: number,

/**
 * w coordinate
 */
w: number
} & GeometryDom$DOMPointReadOnly


declare type GeometryDom$DOMRect = {

/**
 * x coordinate
 */
x: number,

/**
 * y coordinate
 */
y: number,

/**
 * width value
 */
width: number,

/**
 * height value
 */
height: number
} & GeometryDom$DOMRectReadOnly


declare interface GeometryDom$DOMRectReadOnly {

/**
 * x coordinate
 */
x: number,

/**
 * y coordinate
 */
y: number,

/**
 * width value
 */
width: number,

/**
 * height value
 */
height: number,

/**
 * min(y coordinate, y coordinate + height dimension)
 */
top: number,

/**
 * max(x coordinate, x coordinate + width dimension)
 */
right: number,

/**
 * max(y coordinate, y coordinate + height dimension)
 */
bottom: number,

/**
 * min(x coordinate, x coordinate + width dimension)
 */
left: number
} 

declare interface GeometryDom$DOMRectList {

/**
 * total number of DOMRect objects associated with the object.
 * readonly unsigned long length
 */
length: number,

/**
 * the DOMRect object at index must be returned.
 * @param index
 */
item(index: number): GeometryDom$DOMRect
} 

declare interface GeometryDom$DOMQuad {

/**
 * a DOMPoint that represents p1 of the quadrilateral
 */
p1: GeometryDom$DOMPoint,

/**
 * a DOMPoint that represents p2 of the quadrilateral
 */
p2: GeometryDom$DOMPoint,

/**
 * a DOMPoint that represents p3 of the quadrilateral
 */
p3: GeometryDom$DOMPoint,

/**
 * a DOMPoint that represents p4 of the quadrilateral
 */
p4: GeometryDom$DOMPoint,

/**
 * the associated bounding rectangle of the quadrilateral
 */
bounds: GeometryDom$DOMRectReadOnly
} 

declare interface GeometryDom$DOMMatrixReadOnly {

/**
 * These attributes are simple aliases for certain elements of the 4x4 matrix
 */
a: number,
b: number,
c: number,
d: number,
e: number,
f: number,
m11: number,
m12: number,
m13: number,
m14: number,
m21: number,
m22: number,
m23: number,
m24: number,
m31: number,
m32: number,
m33: number,
m34: number,
m41: number,
m42: number,
m43: number,
m44: number,
is2D: boolean,
isIdentity: boolean,
translate(tx: number, ty: number, tz?: number): GeometryDom$DOMMatrix,
scale(scale: number, originX?: number, originY?: number): GeometryDom$DOMMatrix,
scale3d(
scale: number,
originX?: number,
originY?: number,
originZ?: number): GeometryDom$DOMMatrix,
scaleNonUniform(
scale: number,
scaleX: number,
scaleY: number,
scaleZ: number,
originX: number,
originY: number,
originZ: number): GeometryDom$DOMMatrix,
rotate(angle: number, originX?: number, originY?: number): GeometryDom$DOMMatrix,
rotateFromVector(x: number, y: number): GeometryDom$DOMMatrix,
rotateAxisAngle(x: number, y: number, z: number, angle: number): GeometryDom$DOMMatrix,
skewX(sx: number): GeometryDom$DOMMatrix,
skewY(sx: number): GeometryDom$DOMMatrix,
multiply(other: GeometryDom$DOMMatrix): GeometryDom$DOMMatrix,
flipX(): GeometryDom$DOMMatrix,
flipY(): GeometryDom$DOMMatrix,
inverse(): GeometryDom$DOMMatrix,
transformPoint(point?: DOMPointInit): GeometryDom$DOMPoint,
toFloat32Array(): Array<number>,
toFloat64Array(): Array<number>
} 

declare type GeometryDom$DOMMatrix = {
a: number,
b: number,
c: number,
d: number,
e: number,
f: number,
m11: number,
m12: number,
m13: number,
m14: number,
m21: number,
m22: number,
m23: number,
m24: number,
m31: number,
m32: number,
m33: number,
m34: number,
m41: number,
m42: number,
m43: number,
m44: number,
multiplySelf(other: GeometryDom$DOMMatrix): GeometryDom$DOMMatrix,
preMultiplySelf(other: GeometryDom$DOMMatrix): GeometryDom$DOMMatrix,
translateSelf(tx: number, ty: number, tz?: number): GeometryDom$DOMMatrix,
scaleSelf(scale: number, originX?: number, originY?: number): GeometryDom$DOMMatrix,
scale3dSelf(
scale: number,
originX?: number,
originY?: number,
originZ?: number): GeometryDom$DOMMatrix,
scaleNonUniformSelf(
scaleX: number,
scaleY?: number,
scaleZ?: number,
originX?: number,
originY?: number,
originZ?: number): GeometryDom$DOMMatrix,
rotateSelf(angle: number, originX?: number, originY?: number): GeometryDom$DOMMatrix,
rotateFromVectorSelf(x: number, y: number): GeometryDom$DOMMatrix,
rotateAxisAngleSelf(x: number, y: number, z: number, angle: number): GeometryDom$DOMMatrix,
skewXSelf(sx: number): GeometryDom$DOMMatrix,
skewYSelf(sy: number): GeometryDom$DOMMatrix,
invertSelf(): GeometryDom$DOMMatrix,
setMatrixValue(transformList: GeometryDom$DOMMatrix): GeometryDom$DOMMatrix
} & GeometryDom$DOMMatrixReadOnly

	declare var GeometryDom$DOMPointReadOnly: {
prototype: GeometryDom$GeometryDom$DOMPointReadOnly,
new (
x: number,
y: number,
z: number,
w: number): GeometryDom$GeometryDom$DOMPointReadOnly
};
	declare var GeometryDom$DOMPoint: {
prototype: GeometryDom$GeometryDom$DOMPoint,
new (
x?: number,
y?: number,
z?: number,
w?: number): GeometryDom$GeometryDom$DOMPoint
};
	declare interface DOMPointInit {

/**
 * x coordinate: 0
 */
x: number,

/**
 * y coordinate: 0
 */
y: number,

/**
 * z coordinate: 0
 */
z?: number,

/**
 * w coordinate: 1
 */
w?: number
} 
	declare var GeometryDom$DOMRect: {
prototype: GeometryDom$GeometryDom$DOMRect,
new (
x: number,
y: number,
width: number,
height: number): GeometryDom$GeometryDom$DOMRect
};
	declare var GeometryDom$DOMRectReadOnly: {
prototype: GeometryDom$GeometryDom$DOMRectReadOnly,
new (
x: number,
y: number,
width: number,
height: number): GeometryDom$GeometryDom$DOMRectReadOnly
};
	declare interface DOMRectInit {

/**
 * x coordinate
 */
x: number,

/**
 * y coordinate
 */
y: number,

/**
 * width value
 */
width: number,

/**
 * height value
 */
height: number
} 
	declare interface DOMRectList {

/**
 * total number of DOMRect objects associated with the object.
 * readonly unsigned long length
 */
length: number,

/**
 * the DOMRect object at index must be returned.
 * @param index
 */
item(index: number): GeometryDom$GeometryDom$DOMRect
} 
	declare var GeometryDom$DOMQuad: {
prototype: GeometryDom$GeometryDom$DOMQuad,
new (rect?: DOMRectInit): GeometryDom$GeometryDom$DOMQuad,
new (
p1?: DOMPointInit,
p2?: DOMPointInit,
p3?: DOMPointInit,
p4?: DOMPointInit): GeometryDom$GeometryDom$DOMQuad
};
	declare var GeometryDom$DOMMatrixReadOnly: {
prototype: GeometryDom$GeometryDom$DOMMatrixReadOnly,
new (numberSequence: Array<number>): GeometryDom$GeometryDom$DOMMatrixReadOnly
};
	declare var GeometryDom$DOMMatrix: {
prototype: GeometryDom$GeometryDom$DOMMatrix,
new (): GeometryDom$GeometryDom$DOMMatrix,
new (transformList: string): GeometryDom$GeometryDom$DOMMatrix,
new (
other: GeometryDom$GeometryDom$DOMMatrixReadOnly): GeometryDom$GeometryDom$DOMMatrix,
new (array: Array<number>): GeometryDom$GeometryDom$DOMMatrix,
new (
a: number,
b: number,
c: number,
d: number,
e: number,
f: number): GeometryDom$GeometryDom$DOMMatrix
};
    }
