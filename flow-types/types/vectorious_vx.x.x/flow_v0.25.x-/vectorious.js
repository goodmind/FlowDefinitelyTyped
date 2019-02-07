declare module "vectorious" {
  declare export class Vector {
    /**
     * @method constructor
     * @desc Creates a two-dimensional `Vector` from the supplied arguments.
     */
    constructor(data: number[]): this;

    /**
     * Static method. Adds two vectors `a` and `b` together.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Vector} a vector containing the sum of `a` and `b`
     */
    static add(a: Vector, v: Vector): Vector;

    /**
     * Adds `vector` to the current vector.
     * @param {Vector} vector
     * @returns {Vector} this
     */
    add(vector: Vector): Vector;

    /**
     * Static method. Subtracts the vector `b` from vector `a`.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Vector} a vector containing the difference between `a` and `b`
     */
    static subtract(a: Vector, b: Vector): Vector;

    /**
     * Subtracts `vector` from the current vector.
     * @param {Vector} vector
     * @returns {Vector} this
     */
    subtract(vector: Vector): Vector;

    /**
     * Static method. Multiplies all elements of `vector` with a specified `scalar`.
     * @param {Vector} vector
     * @param {Number} scalar
     * @returns {Vector} a resultant scaled vector
     */
    static scale(vector: Vector, scalar: number): Vector;

    /**
     * Multiplies all elements of current vector with a specified `scalar`.
     * @param {Number} scalar
     * @returns {Vector} this
     */
    scale(scalar: number): Vector;

    /**
     * Static method. Normalizes `vector`, i.e. divides all elements with the magnitude.
     * @param {Vector} vector
     * @returns {Vector} a resultant normalized vector
     */
    static normalize(vector: Vector): Vector;

    /**
     * Normalizes current vector.
     * @returns {Vector} a resultant normalized vector
     */
    normalize(): Vector;

    /**
     * Static method. Projects the vector `a` onto the vector `b` using
     * the projection formula `(b * (a * b / b * b))`.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Vector} a new resultant projected vector
     */
    static project(a: Vector, b: Vector): Vector;

    /**
     * Projects the current vector onto `vector` using
     * the projection formula `(b * (a * b / b * b))`.
     * @param {Vector} vector
     * @returns {Vector} `vector`
     */
    project(vector: Vector): Vector;

    /**
     * Static method. Creates a vector containing zeros (`0`) of `count` size, takes
     * an optional `type` argument which should be an instance of `TypedArray`.
     * @param {Number} count
     * @param {TypedArray} type
     * @returns {Vector} a new vector of the specified size and `type`
     */
    static zeros(count: number, type?: any): Vector;

    /**
     * Static method. Creates a vector containing ones (`1`) of `count` size, takes
     * an optional `type` argument which should be an instance of `TypedArray`.
     * @param {Number} count
     * @param {TypedArray} type
     * @returns {Vector} a new vector of the specified size and `type`
     */
    static ones(count: number, type?: any): Vector;

    /**
     * Static method. Creates a vector containing a range (can be either ascending or descending)
     * of numbers specified by the arguments provided (e.g. `Vector.range(0, .5, 2)`
     * gives a vector containing all numbers in the interval `[0, 2)` separated by
     * steps of `0.5`), takes an optional `type` argument which should be an instance of
     * `TypedArray`.
     * @param {Number} start
     * @param {Number} step - optional
     * @param {Number} end
     * @returns {Vector} a new vector containing the specified range of the specified `type`
     */
    static range(start: number, end: number): Vector;
    static range(start: number, step: number, end: number): Vector;

    /**
     * Static method. Creates a vector of `count` elements containing random
     * values according to a normal distribution, takes an optional `type`
     * argument which should be an instance of `TypedArray`.
     * @param {Number} count
     * @param {Number} deviation (default 1)
     * @param {Number} mean (default 0)
     * @param {TypedArray} type
     * @returns {Vector} a new vector of the specified size and `type`
     */
    static random(
      count: number,
      deviation?: number,
      mean?: number,
      type?: any
    ): Vector;

    /**
     * Static method. Performs dot multiplication with two vectors `a` and `b`.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Number} the dot product of the two vectors
     */
    static dot(a: Vector, b: Vector): number;

    /**
     * Performs dot multiplication with current vector and `vector`
     * @param {Vector} vector
     * @returns {Number} the dot product of the two vectors
     */
    dot(vector: Vector): number;

    /**
     * Calculates the magnitude of a vector (also called L2 norm or Euclidean length).
     * @returns {Number} the magnitude (L2 norm) of the vector
     */
    magnitude(): number;

    /**
     * Static method. Determines the angle between two vectors `a` and `b`.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Number} the angle between the two vectors in radians
     */
    static angle(a: Vector, b: Vector): number;

    /**
     * Determines the angle between the current vector and `vector`.
     * @param {Vector} vector
     * @returns {Number} the angle between the two vectors in radians
     */
    angle(vector: Vector): number;

    /**
     * Static method. Checks the equality of two vectors `a` and `b`.
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
     */
    static equals(a: Vector, b: Vector): boolean;

    /**
     * Checks the equality of the current vector and `vector`.
     * @param {Vector} vector
     * @returns {Boolean} `true` if the two vectors are equal, `false` otherwise
     */
    equals(vector: Vector): boolean;

    /**
     * Gets the element at `index` from current vector.
     * @param {Number} index
     * @returns {Number} the element at `index`
     */
    get(index: number): number;

    /**
     * Gets the minimum value (smallest) element of current vector.
     * @returns {Number} the smallest element of the current vector
     */
    min(): number;

    /**
     * Gets the maximum value (largest) element of current vector.
     * @returns {Number} the largest element of current vector
     */
    max(): number;

    /**
     * Sets the element at `index` to `value`.
     * @param {Number} index
     * @param {Number} value
     * @returns {Vector} this
     */
    set(index: number, value: number): Vector;

    /**
     * Static method. Combines two vectors `a` and `b` (appends `b` to `a`).
     * @param {Vector} a
     * @param {Vector} b
     * @returns {Vector} `b` appended to vector `a`
     */
    static combine(a: Vector, b: Vector): Vector;

    /**
     * Combines the current vector with `vector`
     * @param {Vector} vector
     * @returns {Vector} `vector` combined with current vector
     */
    combine(vector: Vector): Vector;

    /**
     * Pushes a new `value` into current vector.
     * @param {Number} value
     * @returns {Vector} `this`
     */
    push(value: number): Vector;

    /**
     * Maps a function `callback` to all elements of current vector.
     * @param {Function} callback
     * @returns {Vector} `this`
     */
    map(callback: (element: number) => number): Vector;

    /**
     * Functional version of for-looping the vector, is equivalent
     * to `Array.prototype.forEach`.
     * @param {Function} callback
     * @returns {Vector} `this`
     */
    each(callback: (element: number) => void): Vector;

    /**
     * Equivalent to `TypedArray.prototype.reduce`.
     * @param {Function} callback
     * @param {Number} initialValue
     * @returns {Number} result of reduction
     */
    reduce(
      callback: (memo: number, element: number) => number,
      initialValue?: number
    ): number;

    /**
     * Converts current vector into a readable formatted string.
     * @returns {String} a string of the vector's contents
     */
    toString(): string;

    /**
     * Converts current vector into a JavaScript array.
     * @returns {Array} an array containing all elements of current vector
     */
    toArray(): number[];
  }
  declare export class Matrix {
    T: Matrix;
    shape: number[];

    /**
     * @method constructor
     * @desc Creates a `Matrix` from the supplied arguments.
     */
    constructor(data: number[][], options?: any): this;
    static fromTypedArray(data: any, shape: number[]): Matrix;
    static fromArray(data: number[][]): Matrix;

    /**
     * Static method. Adds two matrices `a` and `b` together.
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Matrix} a new matrix containing the sum of `a` and `b`
     */
    static add(a: Matrix, b: Matrix): Matrix;

    /**
     * Adds `matrix` to current matrix.
     * @param {Matrix} matrix
     * @returns {Matrix} `this`
     */
    add(matrix: Matrix): Matrix;

    /**
     * Static method. Subtracts the matrix `b` from matrix `a`.
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Matrix} a new matrix containing the difference between `a` and `b`
     */
    static subtract(a: Matrix, b: Matrix): Matrix;

    /**
     * Subtracts `matrix` from current matrix.
     * @param {Matrix} matrix
     * @returns {Matrix} `this`
     */
    subtract(matrix: Matrix): Matrix;

    /**
     * Static method. Multiplies all elements of a matrix `a` with a specified `scalar`.
     * @param {Matrix} matrix
     * @param {Number} scalar
     * @returns {Matrix} a new scaled matrix
     */
    static scale(matrix: Matrix, scalar: number): Matrix;

    /**
     * Multiplies all elements of current matrix with a specified `scalar`.
     * @param {Number} scalar
     * @returns {Matrix} `this`
     */
    scale(scalar: number): Matrix;

    /**
     * Static method. Hadamard product of matrices
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Matrix} a new matrix containing the hadamard product
     */
    static product(a: Matrix, b: Matrix): Matrix;

    /**
     * Hadamard product of matrices
     * @param {Matrix} matrix
     * @returns {Matrix} `this`
     */
    product(matrix: Matrix): Matrix;

    /**
     * Static method. Creates an `i x j` matrix containing zeros (`0`), takes an
     * optional `type` argument which should be an instance of `TypedArray`.
     * @param {Number} i
     * @param {Number} j
     * @param {TypedArray} type
     * @returns {Matrix} a matrix of the specified dimensions and `type`
     */
    static zeros(i: number, j: number, type?: any): Matrix;

    /**
     * Static method. Creates an `i x j` matrix containing ones (`1`), takes an
     * optional `type` argument which should be an instance of `TypedArray`.
     * @param {Number} i
     * @param {Number} j
     * @param {TypedArray} type
     * @returns {Matrix} a matrix of the specified dimensions and `type`
     */
    static ones(i: number, j: number, type?: any): Matrix;

    /**
     * Static method. Creates an `i x j` matrix containing random values
     * according to a normal distribution, takes an optional `type` argument
     * which should be an instance of `TypedArray`.
     * @param {Number} i
     * @param {Number} j
     * @param {Number} mean (default 0)
     * @param {Number} standard deviation (default 1)
     * @param {TypedArray} type
     * @returns {Matrix} a matrix of the specified dimensions and `type`
     */
    static random(
      i: number,
      j: number,
      deviation?: number,
      mean?: number,
      type?: any
    ): Matrix;

    /**
     * Static method. Multiplies two matrices `a` and `b` of matching dimensions.
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Matrix} a new resultant matrix containing the matrix product of `a` and `b`
     */
    static multiply(a: Matrix, b: Matrix): Matrix;

    /**
     * Multiplies two matrices `a` and `b` of matching dimensions.
     * @param {Matrix} Matrix
     * @returns {Matrix} a new resultant matrix containing the matrix product of `a` and `b`
     */
    multiply(matrix: Matrix): Matrix;

    /**
     * Transposes a matrix (mirror across the diagonal).
     * @returns {Matrix} `this`
     */
    transpose(): Matrix;

    /**
     * Determines the inverse of any invertible square matrix using
     * Gaussian elimination.
     * @returns {Matrix} the inverse of the matrix
     */
    inverse(): Matrix;

    /**
     * Performs Gaussian elimination on a matrix.
     * @returns {Matrix} the matrix in reduced row echelon form
     */
    gauss(): Matrix;

    /**
 * Performs full LU decomposition on a matrix.
 * @returns {Array} a triple (3-tuple) of the lower triangular resultant matrix `L`, the upper
triangular resultant matrix `U` and the pivot array `ipiv`
 */
    lu(): number[];

    /**
 * Static method. Performs LU factorization on current matrix.
 * @returns {Array} an array with a new instance of the current matrix LU-
factorized and the corresponding pivot Int32Array
 */
    static plu(matrix: Matrix): any[];

    /**
 * Performs LU factorization on current matrix.
 * @returns {Array} an array with the current matrix LU-factorized and the
corresponding pivot Int32Array
 */
    plu(): any[];

    /**
     * Solves an LU factorized matrix with the supplied right hand side(s)
     * @param {Matrix} rhs , right hand side(s) to solve for
     * @param {Int32Array} array of pivoted row indices
     * @returns {Matrix} rhs replaced by the solution
     */
    lusolve(rhs: Matrix, ipiv: Int32Array): Matrix;

    /**
     * Solves AX = B using LU factorization, where A is the current matrix and
     * B is a Vector/Matrix containing the right hand side(s) of the equation.
     * @param {Matrix} /Vector} rhs, right hand side(s) to solve for
     * @param {Int32Array} array of pivoted row indices
     * @returns {Matrix} a new matrix containing the solutions of the system
     */
    solve(rhs: Matrix | Vector): Matrix;

    /**
     * Static method. Augments two matrices `a` and `b` of matching dimensions
     * (appends `b` to `a`).
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Matrix} the resultant matrix of `b` augmented to `a`
     */
    static augment(a: Matrix, b: Matrix): Matrix;

    /**
     * Augments `matrix` with current matrix.
     * @param {Matrix} matrix
     * @returns {Matrix} `this`
     */
    augment(matrix: Matrix): Matrix;

    /**
     * Static method. Creates an identity matrix of `size`, takes an optional `type` argument
     * which should be an instance of `TypedArray`.
     * @param {Number} size
     * @param {TypedArray} type
     * @returns {Matrix} an identity matrix of the specified `size` and `type`
     */
    static identity(size: number, type?: any): Matrix;

    /**
     * Static method. Creates a magic square matrix of `size`, takes an optional `type` argument
     * which should be an instance of `TypedArray`.
     * @param {Number} size
     * @param {Number} type
     * @returns {Matrix} a magic square matrix of the specified `size` and `type`
     */
    static magic(size: number, type?: any): Matrix;

    /**
     * Gets the diagonal of a matrix.
     * @returns {Vector} the diagonal of the matrix as a vector
     */
    diag(): Vector;

    /**
     * Gets the determinant of any square matrix using LU factorization.
     * @returns {Number} the determinant of the matrix
     */
    determinant(): number;

    /**
     * Gets the trace of the matrix (the sum of all diagonal elements).
     * @returns {Number} the trace of the matrix
     */
    trace(): number;

    /**
     * Static method. Checks the equality of two matrices `a` and `b`.
     * @param {Matrix} a
     * @param {Matrix} b
     * @returns {Boolean} `true` if equal, `false` otherwise
     */
    static equals(a: Matrix, b: Matrix): boolean;

    /**
     * Checks the equality of `matrix` and current matrix.
     * @param {Matrix} matrix
     * @returns {Boolean} `true` if equal, `false` otherwise
     */
    equals(matrix: Matrix): boolean;

    /**
     * Gets the value of the element in row `i`, column `j` of current matrix
     * @param {Number} i
     * @param {Number} j
     * @returns {Number} the element at row `i`, column `j` of current matrix
     */
    get(i: number, j: number): number;

    /**
     * Sets the element at row `i`, column `j` to value
     * @param {Number} i
     * @param {Number} j
     * @param {Number} value
     * @returns {Matrix} `this`
     */
    set(i: number, j: number, value: number): Matrix;

    /**
     * Swaps two rows `i` and `j` in a matrix
     * @param {Number} i
     * @param {Number} j
     * @returns {Matrix} `this`
     */
    swap(i: number, j: number): Matrix;

    /**
     * Maps a function `callback` to all elements of a copy of current matrix.
     * @param {Function} callback
     * @returns {Matrix} the resultant mapped matrix
     */
    map(callback: (element: number) => number): Matrix;

    /**
     * Functional version of for-looping the elements in a matrix, is
     * equivalent to `Array.prototype.forEach`.
     * @param {Function} callback
     * @returns {Matrix} `this`
     */
    each(callback: (element: number) => void): Matrix;

    /**
     * Equivalent to `TypedArray.prototype.reduce`.
     * @param {Function} callback
     * @param {Number} initialValue
     * @returns {Number} result of reduction
     */
    reduce(
      callback: (memo: number, element: number) => number,
      initialValue?: number
    ): number;

    /**
     * Finds the rank of the matrix using row echelon form
     * @returns {Number} rank
     */
    rank(): number;

    /**
     * Static method. Finds the rank of a matrix using row echelon form
     * @param {Matrix} matrix
     * @returns {Number} rank
     */
    static rank(matrix: Matrix): number;

    /**
     * Converts current matrix into a readable formatted string
     * @returns {String} a string of the matrix' contents
     */
    toString(): string;

    /**
     * Converts current matrix into a two-dimensional array
     * @returns {Array} an array of the matrix' contents
     */
    toArray(): number[][];
  }
  declare export class BLAS {}
}
