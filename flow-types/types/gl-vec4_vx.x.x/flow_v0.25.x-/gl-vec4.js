declare module "gl-vec4" {
  /**
   * Adds two vec4's.
   */
  declare export function add(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Creates a new vec4 initialized with values from an existing vector.
   */
  declare export function clone(a: number[]): number[];

  /**
   * Copy the values from one vec4 to another.
   */
  declare export function copy(out: number[], a: number[]): number[];

  /**
   * Creates a new, empty vec4.
   */
  declare export function create(): number[];

  /**
   * Calculates the euclidian distance between two vec4's.
   */
  declare export function distance(a: number[], b: number[]): number;

  /**
   * Divides two vec4's.
   */
  declare export function divide(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Calculates the dot product of two vec4's.
   */
  declare export function dot(a: number[], b: number[]): number;

  /**
   * Creates a new vec4 initialized with the given values.
   */
  declare export function fromValues(
    x: number,
    y: number,
    z: number,
    w: number
  ): number[];

  /**
   * Returns the inverse of the components of a vec4.
   */
  declare export function inverse(out: number[], a: number[]): number[];

  /**
   * Calculates the length of a vec4.
   */
  declare export function length(a: number[]): number;

  /**
   * Performs a linear interpolation between two vec4's.
   */
  declare export function lerp(
    out: number[],
    a: number[],
    b: number[],
    t: number
  ): number[];

  /**
   * Returns the maximum of two vec4's.
   */
  declare export function max(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Returns the minimum of two vec4's.
   */
  declare export function min(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Multiplies two vec4's.
   */
  declare export function multiply(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Negates the components of a vec4.
   */
  declare export function negate(out: number[], a: number[]): number[];

  /**
   * Normalize a vec4.
   */
  declare export function normalize(out: number[], a: number[]): number[];

  /**
   * Generates a random vector with the given scale.
   */
  declare export function random(out: number[], scale: number): number[];

  /**
   * Scales a vec4 by a scalar number.
   */
  declare export function scale(
    out: number[],
    a: number[],
    b: number
  ): number[];

  /**
   * Adds two vec4's after scaling the second operand by a scalar value.
   */
  declare export function scaleAndAdd(
    out: number[],
    a: number[],
    b: number[],
    scale: number
  ): number[];

  /**
   * Set the components of a vec4 to the given values.
   */
  declare export function set(
    out: number[],
    x: number[],
    y: number[],
    z: number,
    w: number
  ): number[];

  /**
   * Calculates the squared euclidian distance between two vec4's.
   */
  declare export function squaredDistance(a: number[], b: number[]): number;

  /**
   * Calculates the squared length of a vec4.
   */
  declare export function squaredLength(a: number[]): number;

  /**
   * Subtracts vector b from vector a.
   */
  declare export function subtract(
    out: number[],
    a: number[],
    b: number[]
  ): number[];

  /**
   * Transforms the vec4 with a mat4..
   */
  declare export function transformMat4(
    out: number[],
    a: number[],
    m: number[]
  ): number[];

  /**
   * Transforms the vec4 with a quat.
   */
  declare export function transformQuat(
    out: number[],
    a: number[],
    q: number[]
  ): number[];
}
