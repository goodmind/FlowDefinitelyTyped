declare module "gl-vec3" {
  /**
   * Adds two number's.
   */
  declare export function add(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Get the angle between two 3D vectors.
   */
  declare export function angle(a: number[], b: number[]): number;

  /**
   * Creates a new number initialized with values from an existing vector.
   */
  declare export function clone(a: number[]): number[];

  /**
   * Math.ceil the components of a number.
   */
  declare export function ceil(out: number[], a: number[]): number[];

  /**
   * Copy the values from one number to another.
   */
  declare export function copy(out: number[], a: number[]): number[];

  /**
   * Creates a new, empty number.
   */
  declare export function create(): number[];

  /**
   * Computes the cross product of two number's.
   */
  declare export function cross(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Calculates the euclidian distance between two number's. Aliased as dist.
   */
  declare export function dist(a: number[], b: number[]): number;

  /**
   * Divides two number's. Aliased as div.
   */
  declare export function div(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Calculates the dot product of two number's.
   */
  declare export function dot(a: number[], b: number[]): number;

  /**
   * Returns whether or not the vectors have approximately the same elements in the same position..
   */
  declare export function equals(a: number[], b: number[]): boolean;

  /**
   * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===).
   */
  declare export function exactEquals(a: number[], b: number[]): boolean;

  /**
   * Math.floor the components of a number.
   */
  declare export function floor(out: number[], a: number[]): number[];

  /**
   * Perform some operation over an array of numbers.
   */
  declare export function forEach(
    a: number[],
    stride: number,
    offset: number,
    count: number,
    fn: (a: number[], b: number[], arg: { [key: string]: any }) => number[],
    arg: { [key: string]: any }
  ): number[];

  /**
   * Creates a new number initialized with the given values.
   */
  declare export function fromValues(x: number, y: number, z: number): number[];

  /**
   * Returns the inverse of the components of a number.
   */
  declare export function inverse(out: number[], a: number[]): number[];

  /**
   * Calculates the length of a number. Aliased as len.
   */
  declare export function len(a: number[]): number;

  /**
   * Performs a linear interpolation between two number]'s.
   */
  declare export function lerp(
    out: number[],
    a: number[],
    b: number[],
    t: number
  ): number[];

  /**
   * Returns the maximum of two number's.
   */
  declare export function max(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Returns the minimum of two number's.
   */
  declare export function min(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Multiplies two number's. Aliased as mul.
   */
  declare export function mul(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Negates the components of a number.
   */
  declare export function negate(out: number[], a: number[]): number[];

  /**
   * Normalize a number
   */
  declare export function normalize(out: number[], a: number[]): number[];

  /**
   * Generates a random vector with the given scale.
   */
  declare export function random(out: number[], scale: number): number[];

  /**
   * Rotate a 3D vector around the x-axis.
   */
  declare export function rotateX(
    out: number[],
    a: number[],
    b: number[],
    c: number
  ): number[];

  /**
   * Rotate a 3D vector around the y-axis.
   */
  declare export function rotateY(
    out: number[],
    a: number[],
    b: number[],
    c: number
  ): number[];

  /**
   * Rotate a 3D vector around the z-axis.
   */
  declare export function rotateZ(
    out: number[],
    a: number[],
    b: number[],
    c: number
  ): number[];

  /**
   * Math.round the components of a number.
   */
  declare export function round(out: number[], a: number[]): number[];

  /**
   * Scales a number by a scalar number.
   */
  declare export function scale(
    out: number[],
    a: number[],
    b: number
  ): number[];

  /**
   * Adds two numbers after scaling the second operand by a scalar value.
   */
  declare export function scaleAndAdd(
    out: number[],
    a: number[],
    b: number[],
    scale: number
  ): number[];

  /**
   * Set the components of a number to the given values.
   */
  declare export function set(
    out: number[],
    x: number,
    y: number,
    z: number
  ): number[];

  /**
   * Calculates the squared euclidian distance between two number's. Aliased as sqrDist.
   */
  declare export function sqrDist(a: number[], b: number[]): number[];

  /**
   * Calculates the squared length of a number. Aliased as sqrLen.
   */
  declare export function sqrLen(a: number[]): number[];

  /**
   * Subtracts vector b from vector a. Aliased as sub.
   */
  declare export function sub(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Transforms the number with a mat3.
   */
  declare export function transformMat3(
    out: number[],
    a: number[],
    m: number[]
  ): number[];

  /**
   * Transforms the number with a mat4. 4th vector component is implicitly '1'.
   */
  declare export function transformMat4(
    out: number[],
    a: number[],
    m: number[]
  ): number[];

  /**
   * Transforms the number with a quat.
   */
  declare export function transformQuat(
    out: number[],
    a: number[],
    q: number[]
  ): number[];
}
