declare module "numjs" {
  import typeof * as BaseNdArray from "ndarray";

  declare export type NdType<T> = BaseNdArray.DataType | BaseNdArray.Data<T>;
  declare export type NdArray<T = number> = {
    ndim: number,
    T: NdArray<T>,
    slice(...args: Array<number | number[]>): NdArray<T>,

    /**
     * Return a copy of the array collapsed into one dimension using row-major order (C-style)
     */
    flatten<P>(): NdArray<P>,

    /**
     * Permute the dimensions of the array.
     */
    transpose(args?: number[]): NdArray<T>,
    transpose(...args: number[]): NdArray<T>,

    /**
     * Dot product of two arrays.
     */
    dot(x: NjArray<T>): NdArray<T>,

    /**
     * Assign `x` to the array, element-wise.
     */
    assign(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Add `x` to the array, element-wise.
     */
    add(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Subtract `x` to the array, element-wise.
     */
    subtract(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Multiply array by `x`, element-wise.
     */
    multiply(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Divide array by `x`, element-wise.
     */
    divide(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Raise array elements to powers from given array, element-wise.
     * @param copy - set to false to modify the array rather than create a new one
     */
    pow(x: NjParam<T>, copy?: boolean): NdArray<T>,

    /**
     * Calculate the exponential of all elements in the array, element-wise.
     * @param copy - set to false to modify the array rather than create a new one
     */
    exp(copy?: boolean): NdArray<T>,

    /**
     * Calculate the positive square-root of all elements in the array, element-wise.
     * @param copy - set to false to modify the array rather than create a new one
     */
    sqrt(copy?: boolean): NdArray<T>,

    /**
     * Return the maximum value of the array
     */
    max(): T,

    /**
     * Return the minimum value of the array
     */
    min(): T,

    /**
     * Sum of array elements.
     */
    sum(): T,

    /**
     * Returns the standard deviation, a measure of the spread of a distribution, of the array elements.
     */
    std(): number,

    /**
     * Return the arithmetic mean of array elements.
     */
    mean(): T,

    /**
     * Converts {NdArray} to a native JavaScript {Array}
     */
    tolist<LT>(): LT[],
    valueOf<LT>(): LT[],

    /**
     * Stringify the array to make it readable in the console, by a human.
     */
    inspect(): string,

    /**
     * Stringify object to JSON
     */
    toJSON(): any,

    /**
     * Create a full copy of the array
     */
    clone(): NdArray<T>,

    /**
     * Return true if two arrays have the same shape and elements, false otherwise.
     */
    equal<U>(array: NjArray<U>): boolean,

    /**
     * Round array to the to the nearest integer.
     */
    round(copy?: boolean): NdArray<T>,

    /**
     * Return the inverse of the array, element-wise.
     */
    negative(): NdArray<T>,
    diag(): NdArray<T>,
    iteraxis(axis: number, cb: (x: NdArray<T>, i: number) => any): void,

    /**
     * Returns the discrete, linear convolution of the array using the given filter.
     * @note : Arrays must have the same dimensions and `filter` must be smaller than the array.
     * @note : The convolution product is only given for points where the signals overlap completely. Values outside the signal boundary have no effect. This behaviour is known as the 'valid' mode.
     * @note : Use optimized code for 3x3, 3x3x1, 5x5, 5x5x1 filters, FFT otherwise.
     */
    convolve(filter: NjArray<T>): NdArray<T>,
    fftconvolve(filter: NjArray<T>): NdArray<T>
  } & BaseNdArray<T>;

  declare export type NdArrayData<T> = BaseNdArray.Data<T>;
  declare export type NjArray<T> = NdArrayData<T> | NdArray<T>;
  declare export type NjParam<T> = NjArray<T> | number;

  /**
   * Return absolute value of the input array, element-wise.
   */
  declare export function abs<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Add arguments, element-wise.
   */
  declare export function add<T>(a: NjParam<T>, b: NjParam<T>): NdArray<T>;

  /**
   * Return evenly spaced values within a given interval.
   * @param start Start of interval. The interval includes this value.
   * @param stop End of interval. The interval does not include this value.
   * @param step Spacing between values. The default step size is 1. If step is specified, start must also be given.
   * @param dtype The type of the output array.
   * @returns Array of evenly spaced values.
   */
  declare export function arange<T>(
    start: number,
    stop?: number,
    dtype?: NdType<T>
  ): NdArray<T>;

  declare export function arange<T>(stop: number, dtype: NdType<T>): NdArray<T>;

  declare export function arange<T>(
    start: number,
    stop: number,
    step: number,
    dtype?: NdType<T>
  ): NdArray<T>;

  /**
   * Return trigonometric inverse cosine of the input array, element-wise.
   */
  declare export function arccos<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Return trigonometric inverse sine of the input array, element-wise.
   */
  declare export function arcsin<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Return trigonometric inverse tangent of the input array, element-wise.
   */
  declare export function arctan<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Clip (limit) the values in an array between min and max, element-wise.
   */
  declare export function clip<T>(
    x: NjParam<T>,
    min?: number,
    max?: number
  ): NdArray<T>;

  /**
   * Join given arrays along the last axis.
   */
  declare export function concatenate<T>(
    ...arrays: Array<NjArray<T>>
  ): NdArray<T>;

  /**
   * Convolve 2 N-dimensionnal arrays
   */
  declare export function convolve<T>(a: NjArray<T>, b: NjArray<T>): NdArray<T>;

  /**
   * Return trigonometric cosine of the input array, element-wise.
   */
  declare export function cos<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Divide `a` by `b`, element-wise.
   */
  declare export function divide<T>(a: NjArray<T>, b: NjParam<T>): NdArray<T>;

  /**
   * Dot product of two arrays. WARNING: supported products are: - matrix dot matrix - vector dot vector - matrix dot vector - vector dot matrix
   */
  declare export function dot<T>(a: NjArray<T>, b: NjArray<T>): NdArray<T>;

  /**
   * Return a new array of given shape and type, filled with `undefined` values.
   * @param shape Shape of the new array, e.g., [2, 3] or 2.
   * @param dtype The type of the output array.
   * @returns Array of `undefined` values with the given shape and dtype
   */
  declare export function empty<T>(
    shape: NdArrayData<T> | number,
    dtype?: NdType<T>
  ): NdArray<T>;

  /**
   * Return true if two arrays have the same shape and elements, false otherwise.
   */
  declare export function equal<T>(a: NjArray<T>, b: NjArray<T>): boolean;

  /**
   * Calculate the exponential of all elements in the input array, element-wise.
   */
  declare export function exp<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Convolve 2 N-dimensionnal arrays using Fast Fourier Transform (FFT)
   */
  declare export function fftconvolve<T>(
    a: NjArray<T>,
    b: NjArray<T>
  ): NdArray<T>;

  /**
   * Return a copy of the array collapsed into one dimension using row-major order (C-style)
   */
  declare export function flatten<T>(array: NjArray<T>): NdArray<T>;

  declare export function getRawData<T>(array: NdArrayData<T>): Uint8Array;

  declare export function setRawData<T>(
    array: NdArrayData<T>,
    data: NdArrayData<T>
  ): Uint8Array;

  /**
   * Return the maximum value of the array
   */
  declare export function max<T>(x: NjParam<T>): T;

  /**
   * Return the arithmetic mean of input array elements.
   */
  declare export function mean<T>(x: NjParam<T>): T;

  /**
   * Return the minimum value of the array
   */
  declare export function min<T>(x: NjParam<T>): T;

  /**
   * Multiply arguments, element-wise.
   */
  declare export function multiply<T>(a: NjArray<T>, b: NjParam<T>): NdArray<T>;

  /**
   * Return the inverse of the input array, element-wise.
   */
  declare export function negative<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Return a new array of given shape and type, filled with ones.
   * @param shape Shape of the new array, e.g., [2, 3] or 2.
   * @param dtype The type of the output array.
   * @returns Array of ones with the given shape and dtype
   */
  declare export function ones<T>(
    shape: NdArrayData<T> | number,
    dtype?: BaseNdArray.DataType
  ): NdArray<T>;

  /**
   * Raise first array elements to powers from second array, element-wise.
   */
  declare export function power<T>(x1: NjParam<T>, x2: NjParam<T>): NdArray<T>;

  /**
   * Create an array of the given shape and propagate it with random samples from a uniform distribution over [0, 1].
   * @param shape he dimensions of the returned array, should all be positive integers
   */
  declare export function random<T>(
    shape?: NdArrayData<T> | number
  ): NdArray<T>;

  /**
   * Gives a new shape to an array without changing its data.
   * @param shape The new shape should be compatible with the original shape. If an integer, then the result will be a 1-D array of that length
   */
  declare export function reshape<T>(
    array: NjArray<T>,
    shape: NdArray<T>
  ): NdArray<T>;

  /**
   * Round an array to the to the nearest integer.
   */
  declare export function round<T>(x: NjArray<T>): NdArray<T>;

  /**
   * Return the sigmoid of the input array, element-wise.
   * @param t stifness parameter
   */
  declare export function sigmoid<T>(x: NjParam<T>, t?: number): NdArray<T>;

  /**
   * Return trigonometric sine of the input array, element-wise.
   */
  declare export function sin<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Return the softmax, or normalized exponential, of the input array, element-wise.
   */
  declare export function softmax<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Calculate the positive square-root of all elements in the input array, element-wise.
   */
  declare export function sqrt<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Returns the standard deviation, a measure of the spread of a distribution, of the input array elements.
   */
  declare export function std<T>(x: NjParam<T>): T;

  /**
   * Subtract second argument from the first, element-wise.
   */
  declare export function subtract<T>(a: NjParam<T>, b: NjParam<T>): T;

  /**
   * Return the sum of input array elements.
   */
  declare export function sum<T>(x: NjParam<T>): T;

  /**
   * Return trigonometric tangent of the input array, element-wise.
   */
  declare export function tan<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Return hyperbolic tangent of the input array, element-wise.
   */
  declare export function tanh<T>(x: NjParam<T>): NdArray<T>;

  /**
   * Permute the dimensions of the input array according to the given axes.
   * @example arr = nj.arange(6).reshape(1,2,3)
   * // array([[[ 0, 1, 2],
   * //         [ 3, 4, 5]]])
   * arr.T
   * // array([[[ 0],
   * //         [ 3]],
   * //        [[ 1],
   * //         [ 4]],
   * //        [[ 2],
   * //         [ 5]]])
   * arr.transpose(1,0,2)
   * // array([[[ 0, 1, 2]],
   * //        [[ 3, 4, 5]]])
   */
  declare export function transpose<T>(
    x: NjParam<T>,
    axes?: number
  ): NdArray<T>;

  /**
   * Return a new array of given shape and type, filled with zeros.
   * @param shape Shape of the new array, e.g., [2, 3] or 2.
   * @param dtype The type of the output array.
   * @returns Array of zeros with the given shape and dtype
   */
  declare export function zeros<T>(
    shape: NdArrayData<T> | number,
    dtype?: BaseNdArray.DataType
  ): NdArray<T>;

  declare var npm$namespace$errors: {
    ValueError: typeof errors$ValueError,
    ConfigError: typeof errors$ConfigError,
    NotImplementedError: typeof errors$NotImplementedError
  };
  declare function errors$ValueError(message?: string): Error;

  declare function errors$ConfigError(message?: string): Error;

  declare function errors$NotImplementedError(message?: string): Error;

  declare export function broadcast<T, U>(
    shape1: T[],
    shape2: U[]
  ): Array<T | U>;

  declare export function fft<T>(x: NjArray<T>): NdArray<T>;

  declare export function ifft<T>(x: NjArray<T>): NdArray<T>;

  /**
   * Extract a diagonal or construct a diagonal array.
   * @returns a view a of the original array when possible, a new array otherwise
   */
  declare export function diag<T>(x: NjArray<T>): NdArray<T>;

  /**
   * The identity array is a square array with ones on the main diagonal.
   * @param Number of rows (and columns) in n x n output.
   * @param dtype The type of the output array.
   * @return n x n array with its main diagonal set to one, and all other elements 0
   */
  declare export function identity<T>(
    n: T,
    dtype?: BaseNdArray.DataType
  ): NdArray<T>;

  /**
   * Join a sequence of arrays along a new axis.
   * The axis parameter specifies the index of the new axis in the dimensions of the result.
   * For example, if axis=0 it will be the first dimension and if axis=-1 it will be the last dimension.
   * @param sequence of array_like
   * @param axis The axis in the result array along which the input arrays are stacked.
   * @return The stacked array has one more dimension than the input arrays.
   */
  declare export function stack<T>(
    arrays: Array<NdArray<T>>,
    axis?: number
  ): NdArray<T>;

  declare var npm$namespace$images: {
    read: typeof images$read,
    save: typeof images$save,
    resize: typeof images$resize,
    sat: typeof images$sat,
    ssat: typeof images$ssat,
    sobel: typeof images$sobel,
    scharr: typeof images$scharr,
    areaSum: typeof images$areaSum,
    areaValue: typeof images$areaValue,
    rgb2gray: typeof images$rgb2gray,
    flip: typeof images$flip,

    data: typeof npm$namespace$images$data
  };

  declare var npm$namespace$images$data: {
    digit: typeof images$data$digit,
    five: typeof images$data$five,
    node: typeof images$data$node,
    lena: typeof images$data$lena,
    lenna: typeof images$data$lenna,
    moon: typeof images$data$moon
  };

  /**
   * 28x28 grayscale image with an handwritten digit extracted from MNIST database
   */
  declare var images$data$digit: NdArray<>;

  /**
   * 28x28 grayscale image with an handwritten digit extracted from MNIST database
   */
  declare var images$data$five: NdArray<>;

  /**
   * 300x600 COLOR image representing Node.js's logo
   */
  declare var images$data$node: NdArray<>;

  /**
   * The standard, yet sometimes controversial
   * Lena test image was scanned from the November 1972 edition of
   * Playboy magazine. From an image processing perspective, this image
   * is useful because it contains smooth, textured, shaded as well as
   * detail areas.
   */
  declare var images$data$lena: NdArray<>;

  /**
   * The standard, yet sometimes
   * controversial Lena test image was scanned from the November 1972
   * edition of Playboy magazine. From an image processing perspective,
   * this image is useful because it contains smooth, textured, shaded as
   * well as detail areas.
   */
  declare var images$data$lenna: NdArray<>;

  /**
   * This low-contrast image of the surface of
   * the moon is useful for illustrating histogram equalization and
   * contrast stretching.
   */
  declare var images$data$moon: NdArray<>;

  declare function images$read(input: string): NdArray<Uint8Array>;

  declare function images$save<T>(img: NdArray<T>, dest: string): void;

  declare function images$resize<T>(
    img: NdArray<T>,
    height: number,
    width: number
  ): NdArray<Uint8Array>;

  declare function images$sat<T>(img: NdArray<T>): NdArray<Uint32Array>;

  declare function images$ssat<T>(img: NdArray<T>): NdArray<Uint32Array>;

  declare function images$sobel<T>(img: NdArray<T>): NdArray<Float32Array>;

  declare function images$scharr<T>(img: NdArray<T>): NdArray<Float32Array>;

  declare function images$areaSum<T>(
    h0: number,
    w0: number,
    H: number,
    W: number,
    SAT: NdArray<T>
  ): number;

  declare function images$areaValue<T>(img: NdArray<T>): number;

  declare function images$rgb2gray<T>(img: NdArray<T>): NdArray<Uint8Array>;

  declare function images$flip<T, O>(img: NdArray<T>): NdArray<O>;

  declare export function array<T>(
    arr: NjArray<T>,
    dtype?: BaseNdArray.DataType
  ): NdArray<T>;

  declare export function int8<T>(arr: NjArray<T>): NjArray<Int8Array>;

  declare export function uint8<T>(arr: NjArray<T>): NjArray<Uint8Array>;

  declare export function int16<T>(arr: NjArray<T>): NjArray<Int16Array>;

  declare export function uint16<T>(arr: NjArray<T>): NjArray<Uint16Array>;

  declare export function int32<T>(arr: NjArray<T>): NjArray<Int32Array>;

  declare export function uint32<T>(arr: NjArray<T>): NjArray<Uint32Array>;

  declare export function float32<T>(arr: NjArray<T>): NjArray<Float32Array>;

  declare export function float64<T>(arr: NjArray<T>): NjArray<Float64Array>;
}
