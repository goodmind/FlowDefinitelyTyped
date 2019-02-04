import type {
          Decimal
        } from 'decimal.js';
declare var math: math$math$MathJsStatic;declare module.exports: typeof math
declare type math$MathArray = number[] | number[][];

declare type math$MathType = number
| math$BigNumber
| math$Fraction
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix;

declare type math$MathExpression = string | string[] | math$MathArray | math$Matrix;

declare interface math$MathJsStatic {
e: number,
pi: number,
i: number,
Infinity: number,
LN2: number,
LN10: number,
LOG2E: number,
LOG10E: number,
NaN: number,
null: number,
phi: number,
SQRT1_2: number,
SQRT2: number,
tau: number,
uninitialized: any,
version: string,
expression: math$MathNode,
json: math$MathJsJson,

/**
 * ***********************************************************************
 * Core functions
 * **********************************************************************
 * Set configuration options for math.js, and get current options. Will
 * emit a ‘config’ event, with arguments (curr, prev, changes).
 * @param options Available options: {number} epsilon Minimum relative
difference between two compared values, used by all comparison
functions. {string} matrix A string ‘Matrix’ (default) or ‘Array’.
{string} number A string ‘number’ (default), ‘BigNumber’, or
‘Fraction’ {number} precision The number of significant digits for
BigNumbers. Not applicable for Numbers. {string} parenthesis How to
display parentheses in LaTeX and string output. {string} randomSeed
Random seed for seeded pseudo random number generator. Set to null to
randomly seed.
 * @returns Returns the current configuration
 */
config: (options: math$ConfigOptions) => math$ConfigOptions,

/**
 * Create a typed-function which checks the types of the arguments and
 * can match them against multiple provided signatures. The
 * typed-function automatically converts inputs in order to find a
 * matching signature. Typed functions throw informative errors in case
 * of wrong input arguments.
 * @param name Optional name for the typed-function
 * @param signatures Object with one or multiple function signatures
 * @returns The created typed-function.
 */
typed: (
name: string,
signatures: Record<string, (...args: any[]) => any>) => ((...args: any[]) => any),

/**
 * ***********************************************************************
 * Construction functions
 * **********************************************************************
 * Create a BigNumber, which can store numbers with arbitrary precision.
 * When a matrix is provided, all elements will be converted to
 * BigNumber.
 * @param x Value for the big number, 0 by default.
 * @returns The created bignumber
 */
bignumber(
x?: number
| string
| math$Fraction
| math$BigNumber
| math$MathArray
| math$Matrix
| boolean
| math$Fraction
| null): math$BigNumber,

/**
 * Create a boolean or convert a string or number to a boolean. In case
 * of a number, true is returned for non-zero numbers, and false in case
 * of zero. Strings can be 'true' or 'false', or can contain a number.
 * When value is a matrix, all elements will be converted to boolean.
 * @param x A value of any type
 * @returns The boolean value
 */
boolean(
x: string
| number
| boolean
| math$MathArray
| math$Matrix
| null): boolean | math$MathArray | math$Matrix,

/**
 * Wrap any value in a chain, allowing to perform chained operations on
 * the value. All methods available in the math.js library can be called
 * upon the chain, and then will be evaluated with the value itself as
 * first argument. The chain can be closed by executing chain.done(),
 * which returns the final value. The chain has a number of special
 * functions: done() Finalize the chain and return the chain's value.
 * valueOf() The same as done() toString() Executes math.format() onto
 * the chain's value, returning a string representation of the value.
 * @param value A value of any type on which to start a chained
operation.
 * @returns The created chain
 */
chain(value?: any): math$MathJsChain,

/**
 * Create a complex value or convert a value to a complex value.
 * @param args Arguments specifying the real and imaginary part of the
complex number
 * @returns Returns a complex value
 */
complex(arg?: math$Complex | string | math$PolarCoordinates): math$Complex,
complex(arg?: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * @param re Argument specifying the real part of the complex number
 * @param im Argument specifying the imaginary part of the complex
number
 * @returns Returns a complex value
 */
complex(re: number, im: number): math$Complex,

/**
 * Create a user-defined unit and register it with the Unit type.
 * @param name The name of the new unit. Must be unique. Example: ‘knot’
 * @param definition Definition of the unit in terms of existing units.
For example, ‘0.514444444 m / s’.
 * @param options (optional) An object containing any of the following
properties:</br>- prefixes {string} “none”, “short”, “long”,
“binary_short”, or “binary_long”. The default is “none”.</br>-
aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
‘kts’]</br>- offset {Numeric} An offset to apply when converting from
the unit. For example, the offset for celsius is 273.15. Default is
0.
 * @returns The new unit
 */
createUnit(
name: string,
definition?: string | math$UnitDefinition,
options?: math$CreateUnitOptions): math$Unit,

/**
 * Create a user-defined unit and register it with the Unit type.
 * @param units Definition of the unit
 * @param options
 * @returns The new unit
 */
createUnit(
units: Record<string, string | math$UnitDefinition>,
options?: math$CreateUnitOptions): math$Unit,

/**
 * Create a fraction convert a value to a fraction.
 * @param args Arguments specifying the numerator and denominator of the
fraction
 * @returns Returns a fraction
 */
fraction(
args: math$Fraction | math$MathArray | math$Matrix): math$Fraction | math$MathArray | math$Matrix,

/**
 * @param numerator Argument specifying the numerator of the fraction
 * @param denominator Argument specifying the denominator of the
fraction
 * @returns Returns a fraction
 */
fraction(
numerator: number | string | math$MathArray | math$Matrix,
denominator?: number | string | math$MathArray | math$Matrix): math$Fraction | math$MathArray | math$Matrix,

/**
 * Create an index. An Index can store ranges having start, step, and
 * end for multiple dimensions. Matrix.get, Matrix.set, and math.subset
 * accept an Index as input.
 * @param ranges Zero or more ranges or numbers.
 * @returns Returns the created index
 */
index(...ranges: any[]): math$Index,

/**
 * Create a Matrix. The function creates a new math.type.Matrix object
 * from an Array. A Matrix has utility functions to manipulate the data
 * in the matrix, like getting the size and getting or setting values in
 * the matrix. Supported storage formats are 'dense' and 'sparse'.
 * @param format The Matrix storage format
 * @returns The created Matrix
 */
matrix(format?: "sparse" | "dense"): math$Matrix,

/**
 * @param data A multi dimensional array
 * @param format The Matrix storage format
 * @param dataType The Matrix data type
 * @returns The created Matrix
 */
matrix(
data: math$MathArray | math$Matrix,
format?: "sparse" | "dense",
dataType?: string): math$Matrix,

/**
 * Create a number or convert a string, boolean, or unit to a number.
 * When value is a matrix, all elements will be converted to number.
 * @param value Value to be converted
 * @returns The created number
 */
number(
value?: string
| number
| math$BigNumber
| math$Fraction
| boolean
| math$MathArray
| math$Matrix
| math$Unit
| null): number | math$MathArray | math$Matrix,

/**
 * @param value Value to be converted
 * @param valuelessUnit A valueless unit, used to convert a unit to a
number
 * @returns The created number
 */
number(unit: math$Unit, valuelessUnit: math$Unit | string): number,

/**
 * Create a Sparse Matrix. The function creates a new math.type.Matrix
 * object from an Array. A Matrix has utility functions to manipulate
 * the data in the matrix, like getting the size and getting or setting
 * values in the matrix.
 * @param data A two dimensional array
 * @param dataType Sparse Matrix data type
 * @returns The created matrix
 */
sparse(data?: math$MathArray | math$Matrix, dataType?: string): math$Matrix,

/**
 * Split a unit in an array of units whose sum is equal to the original
 * unit.
 * @param unit A unit to be split
 * @param parts An array of strings or valueless units
 * @returns An array of units
 */
splitUnit(unit: math$Unit, parts: math$Unit[]): math$Unit[],

/**
 * Create a string or convert any object into a string. Elements of
 * Arrays and Matrices are processed element wise.
 * @param value A value to convert to a string
 * @returns The created string
 */
string(value: math$MathType | null): string | math$MathArray | math$Matrix,

/**
 * Create a unit. Depending on the passed arguments, the function will
 * create and return a new math.type.Unit object. When a matrix is
 * provided, all elements will be converted to units.
 * @param unit The unit to be created
 * @returns The created unit
 */
unit(unit: string): math$Unit,

/**
 * @param value The value of the unit to be created
 * @param unit The unit to be created
 * @returns The created unit
 */
unit(value: number | math$MathArray | math$Matrix, unit: string): math$Unit,

/**
 * ***********************************************************************
 * Expression functions
 * **********************************************************************
 * Parse and compile an expression. Returns a an object with a function
 * eval([scope]) to evaluate the compiled expression.
 * @param expr The expression to be compiled
 * @returns An object with the compiled expression
 */
compile(expr: math$MathExpression): math$EvalFunction,

/**
 * @param exprs The expressions to be compiled
 * @returns An array of objects with the compiled expressions
 */
compile(exprs: math$MathExpression[]): math$EvalFunction[],

/**
 * Evaluate an expression.
 * @param expr The expression to be evaluated
 * @param scope Scope to read/write variables
 * @returns The result of the expression
 */
eval(
expr: math$MathExpression | math$MathExpression[] | math$Matrix,
scope?: {[key: string]: any}): any,

/**
 * Retrieve help on a function or data type. Help files are retrieved
 * from the documentation in math.expression.docs.
 * @param search A function or function name for which to get help
 * @returns A help object
 */
help(search: () => any): math$Help,

/**
 * Parse an expression. Returns a node tree, which can be evaluated by
 * invoking node.eval();
 * @param expr Expression to be parsed
 * @param options Available options: nodes - a set of custome nodes
 * @returns A node
 */
parse(expr: math$MathExpression, options?: any): math$MathNode,

/**
 * @param exprs Expressions to be parsed
 * @param options Available options: nodes - a set of custome nodes
 * @returns An arry of nodes
 */
parse(exprs: math$MathExpression[], options?: any): math$MathNode[],

/**
 * Create a parser. The function creates a new math.expression.Parser
 * object.
 * @returns A Parser object
 */
parser(): math$Parser,

/**
 * ***********************************************************************
 * Algebra functions
 * **********************************************************************
 * @param expr The expression to differentiate
 * @param variable The variable over which to differentiate
 * @param options There is one option available, simplify, which is true
by default. When false, output will not be simplified.
 * @returns The derivative of expr
 */
derivative(
expr: math$MathNode | string,
variable: math$MathNode | string,
options?: {
simplify: boolean
}): math$MathNode,

/**
 * Solves the linear equation system by forwards substitution. Matrix
 * must be a lower triangular matrix.
 * @param L A N x N matrix or array (L)
 * @param b A column vector with the b values
 * @returns A column vector with the linear system solution (x)
 */
lsolve(
L: math$Matrix | math$MathArray,
b: math$Matrix | math$MathArray): math$Matrix | math$MathArray,

/**
 * Calculate the Matrix LU decomposition with partial pivoting. Matrix A
 * is decomposed in two matrices (L, U) and a row permutation vector p
 * where A[p,:] = L * U
 * @param A A two dimensional matrix or array for which to get the LUP
decomposition.
 * @returns The lower triangular matrix, the upper triangular matrix and
the permutation matrix.
 */
lup(
A?: math$Matrix | math$MathArray): {
L: math$MathArray | math$Matrix,
U: math$MathArray | math$Matrix,
P: number[]
},

/**
 * Solves the linear system A * x = b where A is an [n x n] matrix and b
 * is a [n] column vector.
 * @param A Invertible Matrix or the Matrix LU decomposition
 * @param b Column Vector
 * @param order The Symbolic Ordering and Analysis order, see slu for
details. Matrix must be a SparseMatrix
 * @param threshold Partial pivoting threshold (1 for partial pivoting),
see slu for details. Matrix must be a SparseMatrix.
 * @returns Column vector with the solution to the linear system A * x =
b
 */
lusolve(
A: math$Matrix | math$MathArray | number,
b: math$Matrix | math$MathArray,
order?: number,
threshold?: number): math$Matrix | math$MathArray,

/**
 * Calculate the Matrix QR decomposition. Matrix A is decomposed in two
 * matrices (Q, R) where Q is an orthogonal matrix and R is an upper
 * triangular matrix.
 * @param A A two dimensional matrix or array for which to get the QR
decomposition.
 * @returns Q: the orthogonal matrix and R: the upper triangular matrix
 */
qr(
A: math$Matrix | math$MathArray): {
Q: math$MathArray | math$Matrix,
R: math$MathArray | math$Matrix
},

/**
 * Transform a rationalizable expression in a rational fraction. If
 * rational fraction is one variable polynomial then converts the
 * numerator and denominator in canonical form, with decreasing
 * exponents, returning the coefficients of numerator.
 * @param expr The expression to check if is a polynomial expression
 * @param optional scope of expression or true for already evaluated
rational expression at input
 * @param detailed optional True if return an object, false if return
expression node (default)
 * @returns The rational polynomial of expr
 */
rationalize(
expr: math$MathNode | string,
optional?: {[key: string]: any} | boolean,
detailed?: true): {
expression: math$MathNode | string,
variables: string[],
coefficients: math$MathType[]
},
rationalize(
expr: math$MathNode | string,
optional?: {[key: string]: any} | boolean,
detailed?: false): math$MathNode,

/**
 * Simplify an expression tree.
 * @param expr The expression to be simplified
 * @param rules A list of rules are applied to an expression, repeating
over the list until no further changes are made. It’s possible to
pass a custom set of rules to the function as second argument. A rule
can be specified as an object, string, or function.
 * @param scope Scope to variables
 * @returns Returns the simplified form of expr
 */
simplify(
expr: math$MathNode | string,
rules?: Array<({
l: string,
r: string
} | string | ((node: math$MathNode) => math$MathNode))>,
scope?: {[key: string]: any}): math$MathNode,

/**
 * Calculate the Sparse Matrix LU decomposition with full pivoting.
 * Sparse Matrix A is decomposed in two matrices (L, U) and two
 * permutation vectors (pinv, q) where P * A * Q = L * U
 * @param A A two dimensional sparse matrix for which to get the LU
decomposition.
 * @param order The Symbolic Ordering and Analysis order: 0 - Natural
ordering, no permutation vector q is returned 1 - Matrix must be
square, symbolic ordering and analisis is performed on M = A + A' 2 -
Symbolic ordering and analysis is performed on M = A' * A. Dense
columns from A' are dropped, A recreated from A'. This is appropriate
for LU factorization of non-symmetric matrices. 3 - Symbolic ordering
and analysis is performed on M = A' * A. This is best used for LU
factorization is matrix M has no dense rows. A dense row is a row
with more than 10*sqr(columns) entries.
 * @param threshold Partial pivoting threshold (1 for partial pivoting)
 * @returns The lower triangular matrix, the upper triangular matrix and
the permutation vectors.
 */
slu(A: math$Matrix, order: number, threshold: number): {[key: string]: any},

/**
 * Solves the linear equation system by backward substitution. Matrix
 * must be an upper triangular matrix. U * x = b
 * @param U A N x N matrix or array (U)
 * @param b A column vector with the b values
 * @returns A column vector with the linear system solution (x)
 */
usolve(
U: math$Matrix | math$MathArray,
b: math$Matrix | math$MathArray): math$Matrix | math$MathArray,

/**
 * ***********************************************************************
 * Arithmetic functions
 * **********************************************************************
 * Calculate the absolute value of a number. For matrices, the function
 * is evaluated element wise.
 * @param x A number or matrix for which to get the absolute value
 * @returns Absolute value of x
 */
abs(x: number): number,
abs(x: math$BigNumber): math$BigNumber,
abs(x: math$Fraction): math$Fraction,
abs(x: math$Complex): math$Complex,
abs(x: math$MathArray): math$MathArray,
abs(x: math$Matrix): math$Matrix,
abs(x: math$Unit): math$Unit,

/**
 * Add two values, x + y. For matrices, the function is evaluated
 * element wise.
 * @param x First value to add
 * @param y Second value to add
 * @returns Sum of x and y
 */
add(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Calculate the cubic root of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Value for which to calculate the cubic root.
 * @param allRoots Optional, false by default. Only applicable when x is
a number or complex number. If true, all complex roots are returned,
if false (default) the principal root is returned.
 * @returns Returns the cubic root of x
 */
cbrt(x: number, allRoots?: boolean): number,
cbrt(x: math$BigNumber, allRoots?: boolean): math$BigNumber,
cbrt(x: math$Fraction, allRoots?: boolean): math$Fraction,
cbrt(x: math$Complex, allRoots?: boolean): math$Complex,
cbrt(x: math$MathArray, allRoots?: boolean): math$MathArray,
cbrt(x: math$Matrix, allRoots?: boolean): math$Matrix,
cbrt(x: math$Unit, allRoots?: boolean): math$Unit,

/**
 * Round a value towards plus infinity If x is complex, both real and
 * imaginary part are rounded towards plus infinity. For matrices, the
 * function is evaluated element wise.
 * @param x Number to be rounded
 * @returns Rounded value
 */
ceil(x: number): number,
ceil(x: math$BigNumber): math$BigNumber,
ceil(x: math$Fraction): math$Fraction,
ceil(x: math$Complex): math$Complex,
ceil(x: math$MathArray): math$MathArray,
ceil(x: math$Matrix): math$Matrix,
ceil(x: math$Unit): math$Unit,

/**
 * Compute the cube of a value, x * x * x. For matrices, the function is
 * evaluated element wise.
 * @param x Number for which to calculate the cube
 * @returns Cube of x
 */
cube(x: number): number,
cube(x: math$BigNumber): math$BigNumber,
cube(x: math$Fraction): math$Fraction,
cube(x: math$Complex): math$Complex,
cube(x: math$MathArray): math$MathArray,
cube(x: math$Matrix): math$Matrix,
cube(x: math$Unit): math$Unit,

/**
 * Divide two values, x / y. To divide matrices, x is multiplied with
 * the inverse of y: x * inv(y).
 * @param x Numerator
 * @param y Denominator
 * @returns Quotient, x / y
 */
divide(x: math$Unit, y: math$Unit): math$Unit,
divide(x: number, y: number): number,
divide(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Divide two matrices element wise. The function accepts both matrices
 * and scalar values.
 * @param x Numerator
 * @param y Denominator
 * @returns Quotient, x ./ y
 */
dotDivide(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Multiply two matrices element wise. The function accepts both
 * matrices and scalar values.
 * @param x Left hand value
 * @param y Right hand value
 * @returns Multiplication of x and y
 */
dotMultiply(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Calculates the power of x to y element wise.
 * @param x The base
 * @param y The exponent
 * @returns The value of x to the power y
 */
dotPow(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Calculate the exponent of a value. For matrices, the function is
 * evaluated element wise.
 * @param x A number or matrix to exponentiate
 * @returns Exponent of x
 */
exp(x: number): number,
exp(x: math$BigNumber): math$BigNumber,
exp(x: math$Complex): math$Complex,
exp(x: math$MathArray): math$MathArray,
exp(x: math$Matrix): math$Matrix,

/**
 * Calculate the value of subtracting 1 from the exponential value. For
 * matrices, the function is evaluated element wise.
 * @param x A number or matrix to apply expm1
 * @returns Exponent of x
 */
expm1(x: number): number,
expm1(x: math$BigNumber): math$BigNumber,
expm1(x: math$Complex): math$Complex,
expm1(x: math$MathArray): math$MathArray,
expm1(x: math$Matrix): math$Matrix,

/**
 * Round a value towards zero. For matrices, the function is evaluated
 * element wise.
 * @param x Number to be rounded
 * @returns Rounded value
 */
fix(x: number): number,
fix(x: math$BigNumber): math$BigNumber,
fix(x: math$Fraction): math$Fraction,
fix(x: math$Complex): math$Complex,
fix(x: math$MathArray): math$MathArray,
fix(x: math$Matrix): math$Matrix,

/**
 * Round a value towards minus infinity. For matrices, the function is
 * evaluated element wise.
 * @param Number to be rounded
 * @returns Rounded value
 */
floor(x: number): number,
floor(x: math$BigNumber): math$BigNumber,
floor(x: math$Fraction): math$Fraction,
floor(x: math$Complex): math$Complex,
floor(x: math$MathArray): math$MathArray,
floor(x: math$Matrix): math$Matrix,

/**
 * Calculate the greatest common divisor for two or more values or
 * arrays. For matrices, the function is evaluated element wise.
 * @param args Two or more integer numbers
 * @returns The greatest common divisor
 */
gcd(...args: number[]): number,
gcd(...args: math$BigNumber[]): math$BigNumber,
gcd(...args: math$Fraction[]): math$Fraction,
gcd(...args: math$MathArray[]): math$MathArray,
gcd(...args: math$Matrix[]): math$Matrix,

/**
 * Calculate the hypotenusa of a list with values. The hypotenusa is
 * defined as: hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...) For
 * matrix input, the hypotenusa is calculated for all values in the
 * matrix.
 * @param args A list with numeric values or an Array or Matrix. Matrix
and Array input is flattened and returns a single number for the
whole matrix.
 * @returns Returns the hypothenuse of the input values.
 */
hypot(...args: number[]): number,
hypot(...args: math$BigNumber[]): math$BigNumber,

/**
 * Calculate the least common multiple for two or more values or arrays.
 * lcm is defined as: lcm(a, b) = abs(a * b) / gcd(a, b) For matrices,
 * the function is evaluated element wise.
 * @param a An integer number
 * @param b An integer number
 * @returns The least common multiple
 */
lcm(a: number, b: number): number,
lcm(a: math$BigNumber, b: math$BigNumber): math$BigNumber,
lcm(a: math$MathArray, b: math$MathArray): math$MathArray,
lcm(a: math$Matrix, b: math$Matrix): math$Matrix,

/**
 * Calculate the logarithm of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Value for which to calculate the logarithm.
 * @param base Optional base for the logarithm. If not provided, the
natural logarithm of x is calculated. Default value: e.
 * @returns Returns the logarithm of x
 */
log(
x: number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix,
base?: number | math$BigNumber | math$Complex): number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix,

/**
 * Calculate the 10-base of a value. This is the same as calculating
 * log(x, 10). For matrices, the function is evaluated element wise.
 * @param x Value for which to calculate the logarithm.
 * @returns Returns the 10-base logarithm of x
 */
log10(x: number): number,
log10(x: math$BigNumber): math$BigNumber,
log10(x: math$Complex): math$Complex,
log10(x: math$MathArray): math$MathArray,
log10(x: math$Matrix): math$Matrix,

/**
 * Calculate the logarithm of a value+1. For matrices, the function is
 * evaluated element wise.
 * @param x Value for which to calculate the logarithm.
 * @returns Returns the logarithm of x+1
 */
log1p(x: number, base?: number | math$BigNumber | math$Complex): number,
log1p(
x: math$BigNumber,
base?: number | math$BigNumber | math$Complex): math$BigNumber,
log1p(x: math$Complex, base?: number | math$BigNumber | math$Complex): math$Complex,
log1p(
x: math$MathArray,
base?: number | math$BigNumber | math$Complex): math$MathArray,
log1p(x: math$Matrix, base?: number | math$BigNumber | math$Complex): math$Matrix,

/**
 * Calculate the 2-base of a value. This is the same as calculating
 * log(x, 2). For matrices, the function is evaluated element wise.
 * @param x Value for which to calculate the logarithm.
 * @returns Returns the 2-base logarithm of x
 */
log2(x: number): number,
log2(x: math$BigNumber): math$BigNumber,
log2(x: math$Complex): math$Complex,
log2(x: math$MathArray): math$MathArray,
log2(x: math$Matrix): math$Matrix,

/**
 * Calculates the modulus, the remainder of an integer division. For
 * matrices, the function is evaluated element wise. The modulus is
 * defined as: x - y * floor(x / y)
 * @see http://en.wikipedia.org/wiki/Modulo_operation.
 * @param x Dividend
 * @param y Divisor
 * @returns Returns the remainder of x divided by y
 */
mod(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix,
y: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix): number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix,

/**
 * Multiply two values, x * y. The result is squeezed. For matrices, the
 * matrix product is calculated.
 * @param x The first value to multiply
 * @param y The second value to multiply
 * @returns Multiplication of x and y
 */
multiply(
x: math$Matrix | math$MathArray,
y: math$MathType): math$Matrix | math$MathArray,
multiply(x: math$Unit, y: math$Unit): math$Unit,
multiply(x: number, y: number): number,
multiply(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Calculate the norm of a number, vector or matrix. The second
 * parameter p is optional. If not provided, it defaults to 2.
 * @param x Value for which to calculate the norm
 * @param p Vector space. Supported numbers include Infinity and
-Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The
Frobenius norm) Default value: 2.
 * @returns the p-norm
 */
norm(
x: number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix,
p?: number | math$BigNumber | string): number | math$BigNumber,

/**
 * Calculate the nth root of a value. The principal nth root of a
 * positive real number A, is the positive real solution of the equation
 * x^root = A For matrices, the function is evaluated element wise.
 * @param a Value for which to calculate the nth root
 * @param root The root. Default value: 2.
 * @return The nth root of a
 */
nthRoot(
a: number
| math$BigNumber
| math$MathArray
| math$Matrix
| math$Complex,
root?: number | math$BigNumber): number | math$Complex | math$MathArray | math$Matrix,

/**
 * Calculates the power of x to y, x ^ y. Matrix exponentiation is
 * supported for square matrices x, and positive integer exponents y.
 * @param x The base
 * @param y The exponent
 * @returns x to the power y
 */
pow(x: math$MathType, y: number | math$BigNumber | math$Complex): math$MathType,

/**
 * Round a value towards the nearest integer. For matrices, the function
 * is evaluated element wise.
 * @param x Number to be rounded
 * @param n Number of decimals Default value: 0.
 * @returns Rounded value of x
 */
round(
x: number
| math$BigNumber
| math$Fraction
| math$Complex
| math$MathArray
| math$Matrix,
n?: number | math$BigNumber | math$MathArray): number
| math$BigNumber
| math$Fraction
| math$Complex
| math$MathArray
| math$Matrix,

/**
 * Compute the sign of a value. The sign of a value x is: 1 when x > 1
 * -1 when x < 0 0 when x == 0 For matrices, the function is evaluated
 * element wise.
 * @param x The number for which to determine the sign
 * @returns The sign of x
 */
sign(x: number): number,
sign(x: math$BigNumber): math$BigNumber,
sign(x: math$Fraction): math$Fraction,
sign(x: math$Complex): math$Complex,
sign(x: math$MathArray): math$MathArray,
sign(x: math$Matrix): math$Matrix,
sign(x: math$Unit): math$Unit,

/**
 * Calculate the square root of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Value for which to calculate the square root
 * @returns Returns the square root of x
 */
sqrt(x: number): number,
sqrt(x: math$BigNumber): math$BigNumber,
sqrt(x: math$Complex): math$Complex,
sqrt(x: math$MathArray): math$MathArray,
sqrt(x: math$Matrix): math$Matrix,
sqrt(x: math$Unit): math$Unit,

/**
 * Compute the square of a value, x * x. For matrices, the function is
 * evaluated element wise.
 * @param x Number for which to calculate the square
 * @returns Squared value
 */
square(x: number): number,
square(x: math$BigNumber): math$BigNumber,
square(x: math$Fraction): math$Fraction,
square(x: math$Complex): math$Complex,
square(x: math$MathArray): math$MathArray,
square(x: math$Matrix): math$Matrix,
square(x: math$Unit): math$Unit,

/**
 * Subtract two values, x - y. For matrices, the function is evaluated
 * element wise.
 * @param x Initial value
 * @param y Value to subtract from x
 * @returns Subtraction of x and y
 */
subtract(x: math$MathType, y: math$MathType): math$MathType,

/**
 * Inverse the sign of a value, apply a unary minus operation. For
 * matrices, the function is evaluated element wise. Boolean values and
 * strings will be converted to a number. For complex numbers, both real
 * and complex value are inverted.
 * @param x Number to be inverted
 * @returns Retursn the value with inverted sign
 */
unaryMinus(x: number): number,
unaryMinus(x: math$BigNumber): math$BigNumber,
unaryMinus(x: math$Fraction): math$Fraction,
unaryMinus(x: math$Complex): math$Complex,
unaryMinus(x: math$MathArray): math$MathArray,
unaryMinus(x: math$Matrix): math$Matrix,
unaryMinus(x: math$Unit): math$Unit,

/**
 * Unary plus operation. Boolean values and strings will be converted to
 * a number, numeric values will be returned as is. For matrices, the
 * function is evaluated element wise.
 * @param x Input value
 * @returns Returns the input value when numeric, converts to a number
when input is non-numeric.
 */
unaryPlus(x: number): number,
unaryPlus(x: math$BigNumber): math$BigNumber,
unaryPlus(x: math$Fraction): math$Fraction,
unaryPlus(x: string): string,
unaryPlus(x: math$Complex): math$Complex,
unaryPlus(x: math$MathArray): math$MathArray,
unaryPlus(x: math$Matrix): math$Matrix,
unaryPlus(x: math$Unit): math$Unit,

/**
 * Calculate the extended greatest common divisor for two values. See
 * http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
 * @param a An integer number
 * @param b An integer number
 * @returns Returns an array containing 3 integers [div, m, n] where div
= gcd(a, b) and a*m + b*n = div
 */
xgcd(a: number | math$BigNumber, b: number | math$BigNumber): math$MathArray,

/**
 * ***********************************************************************
 * Bitwise functions
 * **********************************************************************
 * Bitwise AND two values, x & y. For matrices, the function is
 * evaluated element wise.
 * @param x First value to and
 * @param y Second value to and
 * @returns AND of x and y
 */
bitAnd(
x: number | math$BigNumber | math$MathArray | math$Matrix,
y: number | math$BigNumber | math$MathArray | math$Matrix): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Bitwise NOT value, ~x. For matrices, the function is evaluated
 * element wise. For units, the function is evaluated on the best prefix
 * base.
 * @param x Value to not
 * @returns NOT of x
 */
bitNot(x: number): number,
bitNot(x: math$BigNumber): math$BigNumber,
bitNot(x: math$MathArray): math$MathArray,
bitNot(x: math$Matrix): math$Matrix,

/**
 * Bitwise OR two values, x | y. For matrices, the function is evaluated
 * element wise. For units, the function is evaluated on the lowest
 * print base.
 * @param x First value to or
 * @param y Second value to or
 * @returns OR of x and y
 */
bitOr(x: number, y: number): number,
bitOr(x: math$BigNumber, y: math$BigNumber): math$BigNumber,
bitOr(x: math$MathArray, y: math$MathArray): math$MathArray,
bitOr(x: math$Matrix, y: math$Matrix): math$Matrix,

/**
 * Bitwise XOR two values, x ^ y. For matrices, the function is
 * evaluated element wise.
 * @param x First value to xor
 * @param y Second value to xor
 * @returns XOR of x and y
 */
bitXor(
x: number | math$BigNumber | math$MathArray | math$Matrix,
y: number | math$BigNumber | math$MathArray | math$Matrix): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Bitwise left logical shift of a value x by y number of bits, x << y.
 * For matrices, the function is evaluated element wise. For units, the
 * function is evaluated on the best prefix base.
 * @param x Value to be shifted
 * @param y Amount of shifts
 * @returns x shifted left y times
 */
leftShift(
x: number | math$BigNumber | math$MathArray | math$Matrix,
y: number | math$BigNumber): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Bitwise right arithmetic shift of a value x by y number of bits, x >>
 * y. For matrices, the function is evaluated element wise. For units,
 * the function is evaluated on the best prefix base.
 * @param x Value to be shifted
 * @param y Amount of shifts
 * @returns x sign-filled shifted right y times
 */
rightArithShift(
x: number | math$BigNumber | math$MathArray | math$Matrix,
y: number | math$BigNumber): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Bitwise right logical shift of value x by y number of bits, x >>> y.
 * For matrices, the function is evaluated element wise. For units, the
 * function is evaluated on the best prefix base.
 * @param x Value to be shifted
 * @param y Amount of shifts
 * @returns x zero-filled shifted right y times
 */
rightLogShift(
x: number | math$MathArray | math$Matrix,
y: number): number | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Combinatorics functions
 * **********************************************************************
 * The Bell Numbers count the number of partitions of a set. A partition
 * is a pairwise disjoint subset of S whose union is S. bellNumbers only
 * takes integer arguments. The following condition must be enforced: n
 * >= 0
 * @param n Total number of objects in the set
 * @returns B(n)
 */
bellNumbers(n: number): number,
bellNumbers(n: math$BigNumber): math$BigNumber,

/**
 * The Catalan Numbers enumerate combinatorial structures of many
 * different types. catalan only takes integer arguments. The following
 * condition must be enforced: n >= 0
 * @param n nth Catalan number
 * @returns Cn(n)
 */
catalan(n: number): number,
catalan(n: math$BigNumber): math$BigNumber,

/**
 * The composition counts of n into k parts. Composition only takes
 * integer arguments. The following condition must be enforced: k <= n.
 * @param n Total number of objects in the set
 * @param k Number of objects in the subset
 * @returns Returns the composition counts of n into k parts.
 */
composition(
n: number | math$BigNumber,
k: number | math$BigNumber): number | math$BigNumber,

/**
 * The Stirling numbers of the second kind, counts the number of ways to
 * partition a set of n labelled objects into k nonempty unlabelled
 * subsets. stirlingS2 only takes integer arguments. The following
 * condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) =
 * 1
 * @param n Total number of objects in the set
 * @param k Number of objects in the subset
 * @returns S(n,k)
 */
stirlingS2(
n: number | math$BigNumber,
k: number | math$BigNumber): number | math$BigNumber,

/**
 * ***********************************************************************
 * Complex functions
 * **********************************************************************
 * Compute the argument of a complex value. For a complex number a + bi,
 * the argument is computed as atan2(b, a). For matrices, the function
 * is evaluated element wise.
 * @param x A complex number or array with complex numbers
 * @returns The argument of x
 */
arg(x: number | math$Complex): number,
arg(x: math$BigNumber | math$Complex): math$BigNumber,
arg(x: math$MathArray): math$MathArray,
arg(x: math$Matrix): math$Matrix,

/**
 * Compute the complex conjugate of a complex value. If x = a+bi, the
 * complex conjugate of x is a - bi. For matrices, the function is
 * evaluated element wise.
 * @param x A complex number or array with complex numbers
 * @returns The complex conjugate of x
 */
conj(
x: number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix): number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix,

/**
 * Get the imaginary part of a complex number. For a complex number a +
 * bi, the function returns b. For matrices, the function is evaluated
 * element wise.
 * @param x A complex number or array with complex numbers
 * @returns The imaginary part of x
 */
im(
x: number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Get the real part of a complex number. For a complex number a + bi,
 * the function returns a. For matrices, the function is evaluated
 * element wise.
 * @param x A complex number or array of complex numbers
 * @returns The real part of x
 */
re(
x: number
| math$BigNumber
| math$Complex
| math$MathArray
| math$Matrix): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Geometry functions
 * **********************************************************************
 * Calculates: The eucledian distance between two points in 2 and 3
 * dimensional spaces. Distance between point and a line in 2 and 3
 * dimensional spaces. Pairwise distance between a set of 2D or 3D
 * points NOTE: When substituting coefficients of a line(a, b and c),
 * use ax + by + c = 0 instead of ax + by = c For parametric equation of
 * a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b,
 * c)
 * @param x Coordinates of the first point
 * @param y Coordinates of the second point
 * @returns Returns the distance from two/three points
 */
distance(
x: math$MathArray | math$Matrix | {[key: string]: any},
y: math$MathArray | math$Matrix | {[key: string]: any}): number | math$BigNumber,

/**
 * Calculates the point of intersection of two lines in two or three
 * dimensions and of a line and a plane in three dimensions. The inputs
 * are in the form of arrays or 1 dimensional matrices. The line
 * intersection functions return null if the lines do not meet. Note:
 * Fill the plane coefficients as x + y + z = c and not as x + y + z + c
 * = 0.
 * @param w Co-ordinates of first end-point of first line
 * @param x Co-ordinates of second end-point of first line
 * @param y Co-ordinates of first end-point of second line OR
Coefficients of the plane's equation
 * @param z Co-ordinates of second end-point of second line OR null if
the calculation is for line and plane
 * @returns Returns the point of intersection of lines/lines-planes
 */
intersect(
w: math$MathArray | math$Matrix,
x: math$MathArray | math$Matrix,
y: math$MathArray | math$Matrix,
z: math$MathArray | math$Matrix): math$MathArray,

/**
 * ***********************************************************************
 * Logical functions
 * **********************************************************************
 * Logical and. Test whether two values are both defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param x First value to and
 * @param y Second value to and
 * @returns Returns true when both inputs are defined with a
nonzero/nonempty value.
 */
and(
x: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix,
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): boolean | math$MathArray | math$Matrix,

/**
 * Logical not. Flips boolean value of a given parameter. For matrices,
 * the function is evaluated element wise.
 * @param x First value to not
 * @returns Returns true when input is a zero or empty value.
 */
not(
x: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): boolean | math$MathArray | math$Matrix,

/**
 * Logical or. Test if at least one value is defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param x First value to or
 * @param y Second value to or
 * @returns Returns true when one of the inputs is defined with a
nonzero/nonempty value.
 */
or(
x: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix,
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): boolean | math$MathArray | math$Matrix,

/**
 * Logical xor. Test whether one and only one value is defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param x First value to xor
 * @param y Second value to xor
 * @returns Returns true when one and only one input is defined with a
nonzero/nonempty value.
 */
xor(
x: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix,
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): boolean | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Matrix functions
 * **********************************************************************
 * Concatenate two or more matrices. dim: number is a zero-based
 * dimension over which to concatenate the matrices. By default the last
 * dimension of the matrices.
 * @param args Two or more matrices
 * @returns Concatenated matrix
 */
concat(...args: Array<math$MathArray | math$Matrix>): math$MathArray | math$Matrix,

/**
 * Calculate the cross product for two vectors in three dimensional
 * space. The cross product of A = [a1, a2, a3] and B =[b1, b2, b3] is
 * defined as: cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1
 * * b2 - a2 * b1 ]
 * @param x First vector
 * @param y Second vector
 * @returns Returns the cross product of x and y
 */
cross(
x: math$MathArray | math$Matrix,
y: math$MathArray | math$Matrix): math$Matrix | math$MathArray,

/**
 * Calculate the determinant of a matrix.
 * @param x A Matrix
 * @returns the determinant of x
 */
det(x: math$MathArray | math$Matrix): number,

/**
 * Create a diagonal matrix or retrieve the diagonal of a matrix. When x
 * is a vector, a matrix with vector x on the diagonal will be returned.
 * When x is a two dimensional matrix, the matrixes kth diagonal will be
 * returned as vector. When k is positive, the values are placed on the
 * super diagonal. When k is negative, the values are placed on the sub
 * diagonal.
 * @param X A two dimensional matrix or a vector
 * @param k The diagonal where the vector will be filled in or
retrieved. Default value: 0.
 * @param format The matrix storage format. Default value: 'dense'.
 * @returns Diagonal matrix from input vector, or diagonal from input
matrix
 */
diag(X: math$MathArray | math$Matrix, format?: string): math$Matrix,
diag(
X: math$MathArray | math$Matrix,
k: number | math$BigNumber,
format?: string): math$Matrix | math$MathArray,

/**
 * Calculate the dot product of two vectors. The dot product of A = [a1,
 * a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as: dot(A,
 * B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
 * @param x First vector
 * @param y Second vector
 * @returns Returns the dot product of x and y
 */
dot(x: math$MathArray | math$Matrix, y: math$MathArray | math$Matrix): number,

/**
 * Compute the matrix exponential, expm(A) = e^A. The matrix must be
 * square. Not to be confused with exp(a), which performs element-wise
 * exponentiation. The exponential is calculated using the Padé
 * approximant with scaling and squaring; see “Nineteen Dubious Ways to
 * Compute the Exponential of a Matrix,” by Moler and Van Loan.
 * @param x A square matrix
 * @returns The exponential of x
 */
expm(x: math$Matrix): math$Matrix,

/**
 * Create a 2-dimensional identity matrix with size m x n or n x n. The
 * matrix has ones on the diagonal and zeros elsewhere.
 * @param size The size for the matrix
 * @param format The Matrix storage format
 * @returns A matrix with ones on the diagonal
 */
eye(
size: number | number[] | math$Matrix | math$MathArray,
format?: string): math$Matrix | math$MathArray | number,

/**
 * @param m The x dimension for the matrix
 * @param n The y dimension for the matrix
 * @param format The Matrix storage format
 * @returns A matrix with ones on the diagonal
 */
eye(m: number, n: number, format?: string): math$Matrix | math$MathArray | number,

/**
 * Filter the items in an array or one dimensional matrix.
 * @param x A one dimensional matrix or array to filter
 * @param test A function or regular expression to test items. All
entries for which test returns true are returned. When test is a
function, it is invoked with three parameters: the value of the
element, the index of the element, and the matrix/array being
traversed. The function must return a boolean.
 */
filter(
x: math$Matrix | math$MathArray | string[],
test: ((
value: any,
index: any,
matrix: math$Matrix | math$MathArray | string[]) => boolean) | RegExp): math$Matrix | math$MathArray,

/**
 * Flatten a multi dimensional matrix into a single dimensional matrix.
 * @param x Matrix to be flattened
 * @returns Returns the flattened matrix
 */
flatten(x: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Iterate over all elements of a matrix/array, and executes the given
 * callback function.
 * @param x The matrix to iterate on.
 * @param callback The callback function is invoked with three
parameters: the value of the element, the index of the element, and
the Matrix/array being traversed.
 */
forEach(
x: math$Matrix | math$MathArray,
callback: ((value: any, index: any, matrix: math$Matrix | math$MathArray) => void)): void,

/**
 * Calculate the inverse of a square matrix.
 * @param x Matrix to be inversed
 * @returns The inverse of x
 */
inv(
x: number | math$Complex | math$MathArray | math$Matrix): number | math$Complex | math$MathArray | math$Matrix,

/**
 * Calculate the kronecker product of two matrices or vectors
 * @param x First vector
 * @param y Second vector
 * @returns Returns the kronecker product of x and y
 */
kron(x: math$Matrix | math$MathArray, y: math$Matrix | math$MathArray): math$Matrix,

/**
 * Iterate over all elements of a matrix/array, and executes the given
 * callback function.
 * @param x The matrix to iterate on.
 * @param callback The callback function is invoked with three
parameters: the value of the element, the index of the element, and
the Matrix/array being traversed.
 * @returns Transformed map of x
 */
map(
x: math$Matrix | math$MathArray,
callback: ((
value: any,
index: any,
matrix: math$Matrix | math$MathArray) => math$MathType | string)): math$Matrix | math$MathArray,

/**
 * Create a matrix filled with ones. The created matrix can have one or
 * multiple dimensions.
 * @param size The size of each dimension of the matrix
 * @param format The matrix storage format
 * @returns A matrix filled with ones
 */
ones(size: number | number[], format?: string): math$MathArray | math$Matrix,

/**
 * @param m The x dimension of the matrix
 * @param n The y dimension of the amtrix
 * @param format The matrix storage format
 * @returns A matrix filled with ones
 */
ones(m: number, n: number, format?: string): math$MathArray | math$Matrix,

/**
 * Partition-based selection of an array or 1D matrix. Will find the kth
 * smallest value, and mutates the input array. Uses Quickselect.
 * @param x A one dimensional matrix or array to sort
 * @param k The kth smallest value to be retrieved; zero-based index
 * @param compare An optional comparator function. The function is
called as compare(a, b), and must return 1 when a > b, -1 when a < b,
and 0 when a == b. Default value: 'asc'.
 * @returns Returns the kth lowest value.
 */
partitionSelect(
x: math$MathArray | math$Matrix,
k: number,
compare?: "asc" | "desc" | ((a: any, b: any) => number)): any,

/**
 * Create an array from a range. By default, the range end is excluded.
 * This can be customized by providing an extra parameter includeEnd.
 * @param str A string 'start:end' or 'start:step:end'
 * @param start Start of the range
 * @param end End of the range, excluded by default, included when
parameter includeEnd=true
 * @param step Step size. Default value is 1.
 * @param includeEnd : Option to specify whether to include the end or
not. False by default
 * @returns Parameters describing the ranges start, end, and optional
step.
 */
range(str: string, includeEnd?: boolean): math$Matrix,
range(
start: number | math$BigNumber,
end: number | math$BigNumber,
includeEnd?: boolean): math$Matrix,
range(
start: number | math$BigNumber,
end: number | math$BigNumber,
step: number | math$BigNumber,
includeEnd?: boolean): math$Matrix,

/**
 * Reshape a multi dimensional array to fit the specified dimensions
 * @param x Matrix to be reshaped
 * @param sizes One dimensional array with integral sizes for each
dimension
 * @returns A reshaped clone of matrix x
 */
reshape(x: math$MathArray | math$Matrix, sizes: number[]): math$MathArray | math$Matrix,

/**
 * Resize a matrix
 * @param x Matrix to be resized
 * @param size One dimensional array with numbers
 * @param defaultValue Zero by default, except in case of a string, in
that case defaultValue = ' ' Default value: 0.
 * @returns A resized clone of matrix x
 */
resize(
x: math$MathArray | math$Matrix,
size: math$MathArray | math$Matrix,
defaultValue?: number | string): math$MathArray | math$Matrix,

/**
 * Calculate the size of a matrix or scalar.
 * @param A matrix
 * @returns A vector with the size of x
 */
size(
x: boolean
| number
| math$Complex
| math$Unit
| string
| math$MathArray
| math$Matrix): math$MathArray | math$Matrix,

/**
 * Sort the items in a matrix
 * @param x A one dimensional matrix or array to sort
 * @param compare An optional _comparator function or name. The function
is called as compare(a, b), and must return 1 when a > b, -1 when a <
b, and 0 when a == b. Default value: ‘asc’
 * @returns Returns the sorted matrix
 */
sort(
x: math$Matrix | math$MathArray,
compare: ((a: any, b: any) => number) | "asc" | "desc" | "natural"): math$Matrix | math$MathArray,

/**
 * Calculate the principal square root of a square matrix. The principal
 * square root matrix X of another matrix A is such that X * X = A.
 * @param A The square matrix A
 * @returns The principal square root of matrix A
 */
sqrtm(A: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Squeeze a matrix, remove inner and outer singleton dimensions from a
 * matrix.
 * @param x Matrix to be squeezed
 * @returns Squeezed matrix
 */
squeeze(x: math$MathArray | math$Matrix): math$Matrix | math$MathArray,

/**
 * Get or set a subset of a matrix or string.
 * @param value An array, matrix, or string
 * @param index An index containing ranges for each dimension
 * @param replacement An array, matrix, or scalar. If provided, the
subset is replaced with replacement. If not provided, the subset is
returned
 * @param defaultValue Default value, filled in on new entries when the
matrix is resized. If not provided, math.matrix elements will be left
undefined. Default value: undefined.
 * @returns Either the retrieved subset or the updated matrix
 */
subset(
value: math$MathArray | math$Matrix | string,
index: math$Index,
replacement?: any,
defaultValue?: any): math$MathArray | math$Matrix | string,

/**
 * Calculate the trace of a matrix: the sum of the elements on the main
 * diagonal of a square matrix.
 * @param x A matrix
 * @returns The trace of x
 */
trace(x: math$MathArray | math$Matrix): number,

/**
 * Transpose a matrix. All values of the matrix are reflected over its
 * main diagonal. Only two dimensional matrices are supported.
 * @param x Matrix to be transposed
 * @returns The transposed matrix
 */
transpose(x: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Create a matrix filled with zeros. The created matrix can have one or
 * multiple dimensions.
 * @param size The size of each dimension of the matrix
 * @param format The matrix storage format
 * @returns A matrix filled with zeros
 */
zeros(size: number | number[], format?: string): math$MathArray | math$Matrix,

/**
 * @param m The x dimension of the matrix
 * @param n The y dimension of the matrix
 * @param format The matrix storage format
 * @returns A matrix filled with zeros
 */
zeros(m: number, n: number, format?: string): math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Probability functions
 * **********************************************************************
 * Compute the number of ways of picking k unordered outcomes from n
 * possibilities. Combinations only takes integer arguments. The
 * following condition must be enforced: k <= n.
 * @param n Total number of objects in the set
 * @param k Number of objects in the subset
 * @returns Number of possible combinations
 */
combinations(
n: number | math$BigNumber,
k: number | math$BigNumber): number | math$BigNumber,

/**
 * Compute the factorial of a value Factorial only supports an integer
 * value as argument. For matrices, the function is evaluated element
 * wise.
 * @param n An integer number
 * @returns The factorial of n
 */
factorial(
n: number | math$BigNumber | math$MathArray | math$Matrix): number | math$BigNumber | math$MathArray | math$Matrix,

/**
 * Compute the gamma function of a value using Lanczos approximation for
 * small values, and an extended Stirling approximation for large
 * values. For matrices, the function is evaluated element wise.
 * @param n A real or complex number
 * @returns The gamma of n
 */
gamma(
n: number | math$MathArray | math$Matrix): number | math$MathArray | math$Matrix,

/**
 * Calculate the Kullback-Leibler (KL) divergence between two
 * distributions
 * @param q First vector
 * @param p Second vector
 * @returns Returns disance between q and p
 */
kldivergence(q: math$MathArray | math$Matrix, p: math$MathArray | math$Matrix): number,

/**
 * Multinomial Coefficients compute the number of ways of picking a1,
 * a2, ..., ai unordered outcomes from n possibilities. multinomial
 * takes one array of integers as an argument. The following condition
 * must be enforced: every ai <= 0
 * @param a Integer number of objects in the subset
 * @returns multinomial coefficent
 */
multinomial(a: number[] | math$BigNumber[]): number | math$BigNumber,

/**
 * Compute the number of ways of obtaining an ordered subset of k
 * elements from a set of n elements. Permutations only takes integer
 * arguments. The following condition must be enforced: k <= n.
 * @param n The number of objects in total
 * @param k The number of objects in the subset
 * @returns The number of permutations
 */
permutations(
n: number | math$BigNumber,
k?: number | math$BigNumber): number | math$BigNumber,

/**
 * Random pick a value from a one dimensional array. Array element is
 * picked using a random function with uniform distribution.
 * @param array A one dimensional array
 * @param number An int or float
 * @param weights An array of ints or floats
 * @returns Returns a single random value from array when number is 1 or
undefined. Returns an array with the configured number of elements
when number is > 1.
 */
pickRandom(array: number[], number?: number, weights?: number[]): number,

/**
 * Return a random number larger or equal to min and smaller than max
 * using a uniform distribution.
 * @param size If provided, an array or matrix with given size and
filled with random values is returned
 * @param min Minimum boundary for the random value, included
 * @param max Maximum boundary for the random value, excluded
 * @returns A random number
 */
random(min?: number, max?: number): number,
random(
size: math$MathArray | math$Matrix,
min?: number,
max?: number): math$MathArray | math$Matrix,

/**
 * Return a random integer number larger or equal to min and smaller
 * than max using a uniform distribution.
 * @param size If provided, an array or matrix with given size and
filled with random values is returned
 * @param min Minimum boundary for the random value, included
 * @param max Maximum boundary for the random value, excluded
 * @returns A random number
 */
randomInt(min: number, max?: number): number,
randomInt(
size: math$MathArray | math$Matrix,
min?: number,
max?: number): math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Relational functions
 * **********************************************************************
 * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x
 * == y. x and y are considered equal when the relative difference
 * between x and y is smaller than the configured epsilon. The function
 * cannot be used to compare values smaller than approximately 2.22e-16.
 * For matrices, the function is evaluated element wise.
 * @param x First value to compare
 * @param y Second value to compare
 * @returns Returns the result of the comparison: 1 when x > y, -1 when
x < y, and 0 when x == y.
 */
compare(
x: math$MathType | string,
y: math$MathType | string): number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix,

/**
 * Compare two values of any type in a deterministic, natural way. For
 * numeric values, the function works the same as math.compare. For
 * types of values that can’t be compared mathematically, the function
 * compares in a natural way.
 * @param x First value to compare
 * @param y Second value to compare
 * @returns Returns the result of the comparison: 1 when x > y, -1 when
x < y, and 0 when x == y.
 */
compareNatural(x: any, y: any): number,

/**
 * Compare two strings lexically. Comparison is case sensitive. Returns
 * 1 when x > y, -1 when x < y, and 0 when x == y. For matrices, the
 * function is evaluated element wise.
 * @param x First string to compare
 * @param y Second string to compare
 * @returns Returns the result of the comparison: 1 when x > y, -1 when
x < y, and 0 when x == y.
 */
compareText(
x: string | math$MathArray | math$Matrix,
y: string | math$MathArray | math$Matrix): number | math$MathArray | math$Matrix,

/**
 * Test element wise whether two matrices are equal. The function
 * accepts both matrices and scalar values.
 * @param x First matrix to compare
 * @param y Second amtrix to compare
 * @returns Returns true when the input matrices have the same size and
each of their elements is equal.
 */
deepEqual(
x: math$MathType,
y: math$MathType): number
| math$BigNumber
| math$Fraction
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix,

/**
 * Test whether two values are equal.
 * 
 * The function tests whether the relative difference between x and y is
 * smaller than the configured epsilon. The function cannot be used to
 * compare values smaller than approximately 2.22e-16. For matrices, the
 * function is evaluated element wise. In case of complex numbers, x.re
 * must equal y.re, and x.im must equal y.im. Values null and undefined
 * are compared strictly, thus null is only equal to null and nothing
 * else, and undefined is only equal to undefined and nothing else.
 * @param x First value to compare
 * @param y Second value to compare
 * @returns Returns true when the compared values are equal, else
returns false
 */
equal(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * Check equality of two strings. Comparison is case sensitive. For
 * matrices, the function is evaluated element wise.
 * @param x First string to compare
 * @param y Second string to compare
 * @returns Returns true if the values are equal, and false if not.
 */
equalText(
x: string | math$MathArray | math$Matrix,
y: string | math$MathArray | math$Matrix): number | math$MathArray | math$Matrix,

/**
 * Test whether value x is larger than y. The function returns true when
 * x is larger than y and the relative difference between x and y is
 * larger than the configured epsilon. The function cannot be used to
 * compare values smaller than approximately 2.22e-16. For matrices, the
 * function is evaluated element wise.
 * @param x First value to compare
 * @param y Second value to vcompare
 * @returns Returns true when x is larger than y, else returns false
 */
larger(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * Test whether value x is larger or equal to y. The function returns
 * true when x is larger than y or the relative difference between x and
 * y is smaller than the configured epsilon. The function cannot be used
 * to compare values smaller than approximately 2.22e-16. For matrices,
 * the function is evaluated element wise.
 * @param x First value to compare
 * @param y Second value to vcompare
 * @returns Returns true when x is larger than or equal to y, else
returns false
 */
largerEq(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * Test whether value x is smaller than y. The function returns true
 * when x is smaller than y and the relative difference between x and y
 * is smaller than the configured epsilon. The function cannot be used
 * to compare values smaller than approximately 2.22e-16. For matrices,
 * the function is evaluated element wise.
 * @param x First value to compare
 * @param y Second value to vcompare
 * @returns Returns true when x is smaller than y, else returns false
 */
smaller(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * Test whether value x is smaller or equal to y. The function returns
 * true when x is smaller than y or the relative difference between x
 * and y is smaller than the configured epsilon. The function cannot be
 * used to compare values smaller than approximately 2.22e-16. For
 * matrices, the function is evaluated element wise.
 * @param x First value to compare
 * @param y Second value to vcompare
 * @returns Returns true when x is smaller than or equal to y, else
returns false
 */
smallerEq(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * Test whether two values are unequal. The function tests whether the
 * relative difference between x and y is larger than the configured
 * epsilon. The function cannot be used to compare values smaller than
 * approximately 2.22e-16. For matrices, the function is evaluated
 * element wise. In case of complex numbers, x.re must unequal y.re, or
 * x.im must unequal y.im. Values null and undefined are compared
 * strictly, thus null is unequal with everything except null, and
 * undefined is unequal with everything except undefined.
 * @param x First value to compare
 * @param y Second value to vcompare
 * @returns Returns true when the compared values are unequal, else
returns false
 */
unequal(
x: math$MathType | string,
y: math$MathType | string): boolean | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Set functions
 * **********************************************************************
 * Create the cartesian product of two (multi)sets. Multi-dimension
 * arrays will be converted to single-dimension arrays before the
 * operation.
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns The cartesian product of two (multi)sets
 */
setCartesian(
a1: math$MathArray | math$Matrix,
a2: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Create the difference of two (multi)sets: every element of set1, that
 * is not the element of set2. Multi-dimension arrays will be converted
 * to single-dimension arrays before the operation
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns The difference of two (multi)sets
 */
setDifference(
a1: math$MathArray | math$Matrix,
a2: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Collect the distinct elements of a multiset. A multi-dimension array
 * will be converted to a single-dimension array before the operation.
 * @param a A multiset
 * @returns A set containing the distinct elements of the multiset
 */
setDistinct(a: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Create the intersection of two (multi)sets. Multi-dimension arrays
 * will be converted to single-dimension arrays before the operation.
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns The intersection of two (multi)sets
 */
setIntersect(
a1: math$MathArray | math$Matrix,
a2: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Check whether a (multi)set is a subset of another (multi)set. (Every
 * element of set1 is the element of set2.) Multi-dimension arrays will
 * be converted to single-dimension arrays before the operation.
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns True if a1 is subset of a2, else false
 */
setIsSubset(a1: math$MathArray | math$Matrix, a2: math$MathArray | math$Matrix): boolean,

/**
 * Count the multiplicity of an element in a multiset. A multi-dimension
 * array will be converted to a single-dimension array before the
 * operation.
 * @param e An element in the multiset
 * @param a A multiset
 * @returns The number of how many times the multiset contains the
element
 */
setMultiplicity(
e: number | math$BigNumber | math$Fraction | math$Complex,
a: math$MathArray | math$Matrix): number,

/**
 * Create the powerset of a (multi)set. (The powerset contains very
 * possible subsets of a (multi)set.) A multi-dimension array will be
 * converted to a single-dimension array before the operation.
 * @param a A multiset
 * @returns The powerset of the (multi)set
 */
setPowerset(a: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Count the number of elements of a (multi)set. When a second parameter
 * is ‘true’, count only the unique values. A multi-dimension array will
 * be converted to a single-dimension array before the operation.
 * @param a A multiset
 * @returns The number of elements of the (multi)set
 */
setSize(a: math$MathArray | math$Matrix): number,

/**
 * Create the symmetric difference of two (multi)sets. Multi-dimension
 * arrays will be converted to single-dimension arrays before the
 * operation.
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns The symmetric difference of two (multi)sets
 */
setSymDifference(
a1: math$MathArray | math$Matrix,
a2: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Create the union of two (multi)sets. Multi-dimension arrays will be
 * converted to single-dimension arrays before the operation.
 * @param a1 A (multi)set
 * @param a2 A (multi)set
 * @returns The union of two (multi)sets
 */
setUnion(
a1: math$MathArray | math$Matrix,
a2: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Special functions
 * **********************************************************************
 * Compute the erf function of a value using a rational Chebyshev
 * approximations for different intervals of x.
 * @param x A real number
 * @returns The erf of x
 */
erf(
x: number | math$MathArray | math$Matrix): number | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Statistics functions
 * **********************************************************************
 * Compute the median absolute deviation of a matrix or a list with
 * values. The median absolute deviation is defined as the median of the
 * absolute deviations from the median.
 * @param array A single matrix or multiple scalar values.
 * @returns The median absolute deviation
 */
mad(array: math$MathArray | math$Matrix): any,

/**
 * Compute the maximum value of a matrix or a list with values. In case
 * of a multi dimensional array, the maximum of the flattened array will
 * be calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param args A single matrix or multiple scalar values
 * @returns The maximum value
 */
max(...args: math$MathType[]): any,

/**
 * @param A A single matrix
 * @param dim The maximum over the selected dimension
 * @returns The maximum value
 */
max(A: math$MathArray | math$Matrix, dim?: number): any,

/**
 * Compute the mean value of matrix or a list with values. In case of a
 * multi dimensional array, the mean of the flattened array will be
 * calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param args A single matrix or multiple scalar values
 * @returns The mean of all values
 */
mean(...args: math$MathType[]): any,

/**
 * @param A A single matrix
 * @param dim The mean over the selected dimension
 * @returns The mean of all values
 */
mean(A: math$MathArray | math$Matrix, dim?: number): any,

/**
 * Compute the median of a matrix or a list with values. The values are
 * sorted and the middle value is returned. In case of an even number of
 * values, the average of the two middle values is returned. Supported
 * types of values are: Number, BigNumber, Unit In case of a (multi
 * dimensional) array or matrix, the median of all elements will be
 * calculated.
 * @param args A single matrix or or multiple scalar values
 * @returns The median
 */
median(...args: math$MathType[]): any,

/**
 * Compute the maximum value of a matrix or a list of values. In case of
 * a multi dimensional array, the maximum of the flattened array will be
 * calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param args A single matrix or or multiple scalar values
 * @returns The minimum value
 */
min(...args: math$MathType[]): any,

/**
 * @param A A single matrix
 * @param dim The minimum over the selected dimension
 * @returns The minimum value
 */
min(A: math$MathArray | math$Matrix, dim?: number): any,

/**
 * Computes the mode of a set of numbers or a list with values(numbers
 * or characters). If there are more than one modes, it returns a list
 * of those values.
 * @param args A single matrix
 * @returns The mode of all values
 */
mode(...args: math$MathType[]): any,

/**
 * Compute the product of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the sum of all elements will be
 * calculated.
 * @param args A single matrix or multiple scalar values
 * @returns The product of all values
 */
prod(...args: math$MathType[]): any,

/**
 * Compute the prob order quantile of a matrix or a list with values.
 * The sequence is sorted and the middle value is returned. Supported
 * types of sequence values are: Number, BigNumber, Unit Supported types
 * of probability are: Number, BigNumber In case of a (multi
 * dimensional) array or matrix, the prob order quantile of all elements
 * will be calculated.
 * @param A A single matrix or array
 * @param probOrN prob is the order of the quantile, while N is the
amount of evenly distributed steps of probabilities; only one of
these options can be provided
 * @param sorted =false is data sorted in ascending order
 * @returns Quantile(s)
 */
quantileSeq(
A: math$MathArray | math$Matrix,
prob: number | math$BigNumber | math$MathArray,
sorted?: boolean): number | math$BigNumber | math$Unit | math$MathArray,

/**
 * Compute the standard deviation of a matrix or a list with values. The
 * standard deviations is defined as the square root of the variance:
 * std(A) = sqrt(var(A)). In case of a (multi dimensional) array or
 * matrix, the standard deviation over all elements will be calculated.
 * Optionally, the type of normalization can be specified as second
 * parameter. The parameter normalization can be one of the following
 * values: 'unbiased' (default) The sum of squared errors is divided by
 * (n - 1) 'uncorrected' The sum of squared errors is divided by n
 * 'biased' The sum of squared errors is divided by (n + 1)
 * @param array A single matrix or multiple scalar values
 * @param normalization Determines how to normalize the variance. Choose
‘unbiased’ (default), ‘uncorrected’, or ‘biased’. Default value:
‘unbiased’.
 * @returns The standard deviation
 */
std(
array: math$MathArray | math$Matrix,
normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"): number,

/**
 * Compute the sum of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the sum of all elements will be
 * calculated.
 * @param args A single matrix or multiple scalar values
 * @returns The sum of all values
 */
sum(...args: Array<number | math$BigNumber | math$Fraction>): any,

/**
 * @param array A single matrix
 * @returns The sum of all values
 */
sum(array: math$MathArray | math$Matrix): any,

/**
 * Compute the variance of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the variance over all elements
 * will be calculated. Optionally, the type of normalization can be
 * specified as second parameter. The parameter normalization can be one
 * of the following values: 'unbiased' (default) The sum of squared
 * errors is divided by (n - 1) 'uncorrected' The sum of squared errors
 * is divided by n 'biased' The sum of squared errors is divided by (n +
 * 1) Note that older browser may not like the variable name var. In
 * that case, the function can be called as math['var'](...) instead of
 * math.var(...).
 * @param args A single matrix or multiple scalar values
 * @returns The variance
 */
var(...args: Array<number | math$BigNumber | math$Fraction>): any,

/**
 * @param array A single matrix
 * @param normalization normalization Determines how to normalize the
variance. Choose ‘unbiased’ (default), ‘uncorrected’, or ‘biased’.
Default value: ‘unbiased’.
 * @returns The variance
 */
var(
array: math$MathArray | math$Matrix,
normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"): any,

/**
 * ***********************************************************************
 * String functions
 * **********************************************************************
 * Format a value of any type into a string.
 * @param value The value to be formatted
 * @param options An object with formatting options.
 * @param callback A custom formatting function, invoked for all numeric
elements in value, for example all elements of a matrix, or the real
and imaginary parts of a complex number. This callback can be used to
override the built-in numeric notation with any type of formatting.
Function callback is called with value as parameter and must return a
string.
 * @see http://mathjs.org/docs/reference/functions/format.html
 * @returns The formatted value
 */
format(
value: any,
options?: math$FormatOptions | number | ((item: any) => string),
callback?: ((value: any) => string)): string,

/**
 * Interpolate values into a string template.
 * @param template A string containing variable placeholders.
 * @param values An object containing variables which will be filled in
in the template.
 * @param precision Number of digits to format numbers. If not provided,
the value will not be rounded.
 * @param options Formatting options, or the number of digits to format
numbers. See function math.format for a description of all options.
 * @returns Interpolated string
 */
print(
template: string,
values: any,
precision?: number,
options?: number | {[key: string]: any}): void,

/**
 * ***********************************************************************
 * Trigonometry functions
 * **********************************************************************
 * Calculate the inverse cosine of a value. For matrices, the function
 * is evaluated element wise.
 * @param x Function input
 * @returns The arc cosine of x
 */
acos(x: number): number,
acos(x: math$BigNumber): math$BigNumber,
acos(x: math$Complex): math$Complex,
acos(x: math$MathArray): math$MathArray,
acos(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic arccos of a value, defined as acosh(x) =
 * ln(sqrt(x^2 - 1) + x). For matrices, the function is evaluated
 * element wise.
 * @param x Function input
 * @returns The hyperbolic arccosine of x
 */
acosh(x: number): number,
acosh(x: math$BigNumber): math$BigNumber,
acosh(x: math$Complex): math$Complex,
acosh(x: math$MathArray): math$MathArray,
acosh(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse cotangent of a value. For matrices, the
 * function is evaluated element wise.
 * @param x Function input
 * @returns The arc cotangent of x
 */
acot(x: number): number,
acot(x: math$BigNumber): math$BigNumber,
acot(x: math$MathArray): math$MathArray,
acot(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic arccotangent of a value, defined as acoth(x)
 * = (ln((x+1)/x) + ln(x/(x-1))) / 2. For matrices, the function is
 * evaluated element wise.
 * @param x Function input
 * @returns The hyperbolic arccotangent of x
 */
acoth(x: number): number,
acoth(x: math$BigNumber): math$BigNumber,
acoth(x: math$MathArray): math$MathArray,
acoth(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse cosecant of a value. For matrices, the function
 * is evaluated element wise.
 * @param x Function input
 * @returns The arc cosecant of x
 */
acsc(x: number): number,
acsc(x: math$BigNumber): math$BigNumber,
acsc(x: math$MathArray): math$MathArray,
acsc(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic arccosecant of a value, defined as acsch(x)
 * = ln(1/x + sqrt(1/x^2 + 1)). For matrices, the function is evaluated
 * element wise.
 * @param x Function input
 * @returns The hyperbolic arccosecant of x
 */
acsch(x: number): number,
acsch(x: math$BigNumber): math$BigNumber,
acsch(x: math$MathArray): math$MathArray,
acsch(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse secant of a value. For matrices, the function
 * is evaluated element wise.
 * @param x Function input
 * @returns The arc secant of x
 */
asec(x: number): number,
asec(x: math$BigNumber): math$BigNumber,
asec(x: math$MathArray): math$MathArray,
asec(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic arcsecant of a value, defined as asech(x) =
 * ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated
 * element wise.
 * @param x Function input
 * @returns The hyperbolic arcsecant of x
 */
asech(x: number): number,
asech(x: math$BigNumber): math$BigNumber,
asech(x: math$MathArray): math$MathArray,
asech(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse sine of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Function input
 * @returns The arc sine of x
 */
asin(x: number): number,
asin(x: math$BigNumber): math$BigNumber,
asin(x: math$Complex): math$Complex,
asin(x: math$MathArray): math$MathArray,
asin(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic arcsine of a value, defined as asinh(x) =
 * ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated
 * element wise.
 * @param x Function input
 * @returns The hyperbolic arcsine of x
 */
asinh(x: number): number,
asinh(x: math$BigNumber): math$BigNumber,
asinh(x: math$MathArray): math$MathArray,
asinh(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse tangent of a value. For matrices, the function
 * is evaluated element wise.
 * @param x Function input
 * @returns The arc tangent of x
 */
atan(x: number): number,
atan(x: math$BigNumber): math$BigNumber,
atan(x: math$MathArray): math$MathArray,
atan(x: math$Matrix): math$Matrix,

/**
 * Calculate the inverse tangent function with two arguments, y/x. By
 * providing two arguments, the right quadrant of the computed angle can
 * be determined. For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns Four quadrant inverse tangent
 */
atan2(y: number, x: number): number,
atan2(
y: math$MathArray | math$Matrix,
x: math$MathArray | math$Matrix): math$MathArray | math$Matrix,

/**
 * Calculate the hyperbolic arctangent of a value, defined as atanh(x) =
 * ln((1 + x)/(1 - x)) / 2. For matrices, the function is evaluated
 * element wise.
 * @param x Function input
 * @returns The hyperbolic arctangent of x
 */
atanh(x: number): number,
atanh(x: math$BigNumber): math$BigNumber,
atanh(x: math$MathArray): math$MathArray,
atanh(x: math$Matrix): math$Matrix,

/**
 * Calculate the cosine of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Function input
 * @returns The cosine of x
 */
cos(x: number | math$Unit): number,
cos(x: math$BigNumber): math$BigNumber,
cos(x: math$Complex): math$Complex,
cos(x: math$MathArray): math$MathArray,
cos(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2
 * * (exp(x) + exp(-x)). For matrices, the function is evaluated element
 * wise.
 * @param x Function input
 * @returns The hyperbolic cosine of x
 */
cosh(x: number | math$Unit): number,
cosh(x: math$BigNumber): math$BigNumber,
cosh(x: math$Complex): math$Complex,
cosh(x: math$MathArray): math$MathArray,
cosh(x: math$Matrix): math$Matrix,

/**
 * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x).
 * For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The cotangent of x
 */
cot(x: number | math$Unit): number,
cot(x: math$Complex): math$Complex,
cot(x: math$MathArray): math$MathArray,
cot(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1
 * / tanh(x). For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The hyperbolic cotangent of x
 */
coth(x: number | math$Unit): number,
coth(x: math$Complex): math$Complex,
coth(x: math$MathArray): math$MathArray,
coth(x: math$Matrix): math$Matrix,

/**
 * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For
 * matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The cosecant hof x
 */
csc(x: number | math$Unit): number,
csc(x: math$Complex): math$Complex,
csc(x: math$MathArray): math$MathArray,
csc(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1
 * / sinh(x). For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The hyperbolic cosecant of x
 */
csch(x: number | math$Unit): number,
csch(x: math$Complex): math$Complex,
csch(x: math$MathArray): math$MathArray,
csch(x: math$Matrix): math$Matrix,

/**
 * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For
 * matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The secant of x
 */
sec(x: number | math$Unit): number,
sec(x: math$Complex): math$Complex,
sec(x: math$MathArray): math$MathArray,
sec(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 /
 * cosh(x). For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The hyperbolic secant of x
 */
sech(x: number | math$Unit): number,
sech(x: math$Complex): math$Complex,
sech(x: math$MathArray): math$MathArray,
sech(x: math$Matrix): math$Matrix,

/**
 * Calculate the sine of a value. For matrices, the function is
 * evaluated element wise.
 * @param x Function input
 * @returns The sine of x
 */
sin(x: number | math$Unit): number,
sin(x: math$BigNumber): math$BigNumber,
sin(x: math$Complex): math$Complex,
sin(x: math$MathArray): math$MathArray,
sin(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 *
 * (exp(x) - exp(-x)). For matrices, the function is evaluated element
 * wise.
 * @param x Function input
 * @returns The hyperbolic sine of x
 */
sinh(x: number | math$Unit): number,
sinh(x: math$BigNumber): math$BigNumber,
sinh(x: math$Complex): math$Complex,
sinh(x: math$MathArray): math$MathArray,
sinh(x: math$Matrix): math$Matrix,

/**
 * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x).
 * For matrices, the function is evaluated element wise.
 * @param x Function input
 * @returns The tangent of x
 */
tan(x: number | math$Unit): number,
tan(x: math$BigNumber): math$BigNumber,
tan(x: math$Complex): math$Complex,
tan(x: math$MathArray): math$MathArray,
tan(x: math$Matrix): math$Matrix,

/**
 * Calculate the hyperbolic tangent of a value, defined as tanh(x) =
 * (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is
 * evaluated element wise.
 * @param x Function input
 * @returns The hyperbolic tangent of x
 */
tanh(x: number | math$Unit): number,
tanh(x: math$BigNumber): math$BigNumber,
tanh(x: math$Complex): math$Complex,
tanh(x: math$MathArray): math$MathArray,
tanh(x: math$Matrix): math$Matrix,

/**
 * ***********************************************************************
 * Unit functions
 * **********************************************************************
 * Change the unit of a value. For matrices, the function is evaluated
 * element wise.
 * @param x The unit to be converted.
 * @param unit New unit. Can be a string like "cm" or a unit without
value.
 * @returns Value with changed, fixed unit
 */
to(
x: math$Unit | math$MathArray | math$Matrix,
unit: math$Unit | string): math$Unit | math$MathArray | math$Matrix,

/**
 * ***********************************************************************
 * Utils functions
 * **********************************************************************
 * Clone an object.
 * @param x Object to be cloned
 * @returns A clone of object x
 */
clone(x: any): any,

/**
 * Test whether a value is an integer number. The function supports
 * number, BigNumber, and Fraction. The function is evaluated
 * element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x contains a numeric, integer value.
Throws an error in case of an unknown data type.
 */
isInteger(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix): boolean,

/**
 * Test whether a value is NaN (not a number). The function supports
 * types number, BigNumber, Fraction, Unit and Complex. The function is
 * evaluated element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is NaN. Throws an error in case of an
unknown data type.
 */
isNaN(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix
| math$Unit): boolean,

/**
 * Test whether a value is negative: smaller than zero. The function
 * supports types number, BigNumber, Fraction, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is larger than zero. Throws an error in
case of an unknown data type.
 */
isNegative(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix
| math$Unit): boolean,

/**
 * Test whether a value is an numeric value. The function is evaluated
 * element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is a number, BigNumber, Fraction, or
boolean. Returns false for other types. Throws an error in case of
unknown types.
 */
isNumeric(x: any): boolean,

/**
 * Test whether a value is positive: larger than zero. The function
 * supports types number, BigNumber, Fraction, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is larger than zero. Throws an error in
case of an unknown data type.
 */
isPositive(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix
| math$Unit): boolean,

/**
 * Test whether a value is prime: has no divisors other than itself and
 * one. The function supports type number, bignumber. The function is
 * evaluated element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is larger than zero. Throws an error in
case of an unknown data type.
 */
isPrime(x: number | math$BigNumber | math$MathArray | math$Matrix): boolean,

/**
 * Test whether a value is zero. The function can check for zero for
 * types number, BigNumber, Fraction, Complex, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 * @param x Value to be tested
 * @returns Returns true when x is zero. Throws an error in case of an
unknown data type.
 */
isZero(
x: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix
| math$Unit
| math$Complex): boolean,

/**
 * Determine the type of a variable.
 * @param x The variable for which to test the type
 * @returns Returns the name of the type. Primitive types are lower
case, non-primitive types are upper-camel-case. For example ‘number’,
‘string’, ‘Array’, ‘Date’.
 */
typeof(x: any): string,

/**
 * Import functions from an object or a module
 * To avoid errors when using one of the imported functions extend module like this:
 * @example // imported_math_functions.ts
declare module 'mathjs' {
interface MathJsStatic {
hello(a: number): number;
}
}
 * @param object An object with functions to be imported.
 * @param options An object with import options.
 */
import(
object: math$ImportObject | math$ImportObject[],
options: math$ImportOptions): void
} 

declare interface math$Matrix {
type: string,
storage(): string,
datatype(): string,
create(data: math$MathArray, datatype?: string): void,
density(): number,
subset(index: math$Index, replacement?: any, defaultValue?: any): math$Matrix,
get(index: number[]): any,
set(index: number[], value: any, defaultValue?: number | string): math$Matrix,
resize(
size: math$MathArray | math$Matrix,
defaultValue?: number | string): math$Matrix,
clone(): math$Matrix,
size(): number[],
map(
callback: (a: any, b: number, c: math$Matrix) => any,
skipZeros?: boolean): math$Matrix,
forEach(
callback: (a: any, b: number, c: math$Matrix) => void,
skipZeros?: boolean): void,
toArray(): math$MathArray | math$Matrix,
valueOff(): math$MathArray | math$Matrix,
format(options?: math$FormatOptions | number | ((value: any) => string)): string,
toString(): string,
toJSON(): any,
diagonal(k?: number | math$BigNumber): any[],
swapRows(i: number, j: number): math$Matrix
} 

declare type math$BigNumber = {} & Decimal


declare interface math$Fraction {
s: number,
n: number,
d: number
} 

declare interface math$Complex {
re: number,
im: number,
clone(): math$Complex,
equals(other: math$Complex): boolean,
format(precision?: number): string,
fromJSON(json: {[key: string]: any}): math$Complex,
fromPolar(polar: {[key: string]: any}): math$Complex,
fromPolar(r: number, phi: number): math$Complex,
toJSON(): {[key: string]: any},
toPolar(): math$PolarCoordinates,
toString(): string,
compare(a: math$Complex, b: math$Complex): number
} 

declare interface math$PolarCoordinates {
r: number,
phi: number
} 

declare interface math$MathJSON {
mathjs?: string,
value: number,
unit: string,
fixPrefix?: boolean
} 

declare interface math$Unit {
valueOf(): string,
clone(): math$Unit,
hasBase(base: any): boolean,
equalBase(unit: math$Unit): boolean,
equals(unit: math$Unit): boolean,
multiply(unit: math$Unit): math$Unit,
divide(unit: math$Unit): math$Unit,
pow(unit: math$Unit): math$Unit,
abs(unit: math$Unit): math$Unit,
to(unit: string): math$Unit,
toNumber(unit: string): number,
toNumeric(unit: string): number | math$Fraction | math$BigNumber,
toSI(): math$Unit,
toString(): string,
toJSON(): math$MathJSON,
formatUnits(): string,
format(options: math$FormatOptions): string,
splitUnit(parts: $ReadOnlyArray<string | math$Unit>): math$Unit[]
} 

declare interface math$CreateUnitOptions {
prefixes?: "none"
| "short"
| "long"
| "binary_short"
| "binary_long",
aliases?: string[],
offset?: number,
override?: boolean
} 

declare interface math$UnitDefinition {
definition?: string | math$Unit,
prefixes?: string,
offset?: number,
aliases?: string[]
} 

declare interface math$Index {} 

declare interface math$EvalFunction {
eval(scope?: any): any
} 

declare interface math$MathNode {
isNode: boolean,
isAccessorNode?: boolean,
isArrayNode?: boolean,
isAssignmentNode?: boolean,
isBlockNode?: boolean,
isConditionalnode?: boolean,
isConstantNode?: boolean,
isFunctionAssignmentNode?: boolean,
isFunctionNode?: boolean,
isIndexNode?: boolean,
isObjectNode?: boolean,
isOperatorNode?: boolean,
isParenthesisNode?: boolean,
isRangeNode?: boolean,
isSymbolNode?: boolean,
isUpdateNode?: boolean,
comment?: string,
op?: string,
fn?: string,
args?: math$MathNode[],
type: string,
name?: string,
value?: any,

/**
 * Create a shallow clone of the node. The node itself is cloned, its
 * childs are not cloned.
 */
clone(): math$MathNode,

/**
 * Create a deep clone of the node. Both the node as well as all its
 * childs are cloned recursively.
 */
cloneDeep(): math$MathNode,

/**
 * Compile an expression into optimized JavaScript code. compile returns
 * an object with a function eval([scope]) to evaluate. Example:
 */
compile(): math$EvalFunction,

/**
 * Compile and eval an expression, this is the equivalent of doing
 * node.compile().eval(scope). Example:
 */
eval(expr?: any): any,

/**
 * Test whether this node equals an other node. Does a deep comparison
 * of the values of both nodes.
 */
equals(other: math$MathNode): boolean,

/**
 * Filter nodes in an expression tree. The callback function is called
 * as callback(node: MathNode, path: string, parent: MathNode) : boolean
 * for every node in the tree, and must return a boolean. The function
 * filter returns an array with nodes for which the test returned true.
 * Parameter path is a string containing a relative JSON Path.
 * 
 * Example:
 * 
 * ```
 *          * var node = math.parse('x^2 + x/4 + 3*y');
 *          * var filtered = node.filter(function (node) {
 *          * return node.isSymbolMathNode && node.name == 'x';
 *          * });
 *          * // returns an array with two entries: two SymbolMathNodes 'x'
 *          * ```
 * 
 * The callback function is called as callback(node: MathNode, path:
 * string, parent: MathNode) : boolean for every node in the tree, and
 * must return a boolean. The function filter returns an array with
 * nodes for which the test returned true. Parameter path is a string
 * containing a relative JSON Path.
 * @return Returns an array with nodes for which test returned true
 */
filter(
callback: (node: math$MathNode, path: string, parent: math$MathNode) => any): math$MathNode[],

/**
 * [forEach description]
 */
forEach(
callback: (node: math$MathNode, path: string, parent: math$MathNode) => any): math$MathNode[],

/**
 * Transform a node. Creates a new MathNode having it’s child's be the
 * results of calling the provided callback function for each of the
 * child's of the original node. The callback function is called as
 * `callback(child: MathNode, path: string, parent: MathNode)` and must
 * return a MathNode. Parameter path is a string containing a relative
 * JSON Path.
 * 
 * 
 * See also transform, which is a recursive version of map.
 */
map(
callback: (node: math$MathNode, path: string, parent: math$MathNode) => math$MathNode): math$MathNode,

/**
 * Get a HTML representation of the parsed expression.
 */
toHtml(options?: {[key: string]: any}): string,

/**
 * Get a string representation of the parsed expression. This is not
 * exactly the same as the original input.
 */
toString(options?: {[key: string]: any}): string,

/**
 * Get a LaTeX representation of the expression.
 */
toTex(options?: {[key: string]: any}): string,

/**
 * Recursively transform an expression tree via a transform function.
 * Similar to Array.map, but recursively executed on all nodes in the
 * expression tree. The callback function is a mapping function
 * accepting a node, and returning a replacement for the node or the
 * original node. Function callback is called as callback(node:
 * MathNode, path: string, parent: MathNode) for every node in the tree,
 * and must return a MathNode. Parameter path is a string containing a
 * relative JSON Path.
 * 
 * For example, to replace all nodes of type SymbolMathNode having name
 * ‘x’ with a ConstantMathNode with value 3:
 * ```js
 *          * var node = math.parse('x^2 + 5*x');
 *          * var transformed = node.transform(function (node, path, parent) {
 *          *   if (node.SymbolMathNode && node.name == 'x') {
 *          *     return new math.expression.node.ConstantMathNode(3);
 *          *   }
 *          *   else {
 *          *     return node;
 *          *   }
 *          * });
 *          * transformed.toString(); // returns '(3 ^ 2) + (5 * 3)'
 *          * ```
 */
transform(
callback: (node: math$MathNode, path: string, parent: math$MathNode) => math$MathNode): math$MathNode,

/**
 * `traverse(callback)`
 * 
 * Recursively traverse all nodes in a node tree. Executes given
 * callback for this node and each of its child nodes. Similar to
 * Array.forEach, except recursive. The callback function is a mapping
 * function accepting a node, and returning a replacement for the node
 * or the original node. Function callback is called as callback(node:
 * MathNode, path: string, parent: MathNode) for every node in the tree.
 * Parameter path is a string containing a relative JSON Path. Example:
 * 
 * ```
 *          * var node = math.parse('3 * x + 2');
 *          * node.traverse(function (node, path, parent) {
 *          * switch (node.type) {
 *          * case 'OperatorMathNode': console.log(node.type, node.op);    break;
 *          * case 'ConstantMathNode': console.log(node.type, node.value); break;
 *          * case 'SymbolMathNode':   console.log(node.type, node.name);  break;
 *          * default:             console.log(node.type);
 *          * }
 *          * });
 *          * // outputs:
 *          * //   OperatorMathNode +
 *          * //   OperatorMathNode *
 *          * //   ConstantMathNode 3
 *          * //   SymbolMathNode x
 *          * //   ConstantMathNode 2
 *          * ```
 */
traverse(
callback: (node: math$MathNode, path: string, parent: math$MathNode) => void): any
} 

declare interface math$Parser {
eval(expr: string): any,
get(variable: string): any,
getAll(): {
[key: string]: any
},
set: (variable: string, value: any) => void,
clear: () => void
} 

declare interface math$Distribution {
random(size: any, min?: any, max?: any): any,
randomInt(min: any, max?: any): any,
pickRandom(array: any): any
} 

declare interface math$FormatOptions {

/**
 * Number notation. Choose from: 'fixed' Always use regular number
 * notation. For example '123.40' and '14000000' 'exponential' Always
 * use exponential notation. For example '1.234e+2' and '1.4e+7' 'auto'
 * (default) Regular number notation for numbers having an absolute
 * value between lower and upper bounds, and uses exponential notation
 * elsewhere. Lower bound is included, upper bound is excluded. For
 * example '123.4' and '1.4e7'.
 */
notation?: "fixed" | "exponential" | "engineering" | "auto",

/**
 * A number between 0 and 16 to round the digits of the number. In case
 * of notations 'exponential' and 'auto', precision defines the total
 * number of significant digits returned and is undefined by default. In
 * case of notation 'fixed', precision defines the number of significant
 * digits after the decimal point, and is 0 by default.
 */
precision?: number,

/**
 * Exponent determining the lower boundary for formatting a value with
 * an exponent when notation='auto. Default value is -3.
 */
lowerExp?: number,

/**
 * Exponent determining the upper boundary for formatting a value with
 * an exponent when notation='auto. Default value is 5.
 */
upperExp?: number,

/**
 * Available values: 'ratio' (default) or 'decimal'. For example
 * format(fraction(1, 3)) will output '1/3' when 'ratio' is configured,
 * and will output 0.(3) when 'decimal' is configured.
 */
fraction?: string
} 

declare interface math$Help {
toString(): string,
toJSON(): string
} 

declare interface math$ConfigOptions {
epsilon?: number,
matrix?: string,
number?: string,
precision?: number,
parenthesis?: string,
randomSeed?: string
} 

declare interface math$MathJsJson {

/**
 * Returns reviver function that can be used as reviver in JSON.parse function.
 */
reviver(): (key: any, value: any) => any
} 

declare interface math$MathJsChain {
done(): any,

/**
 * ***********************************************************************
 * Construction functions
 * **********************************************************************
 * Create a BigNumber, which can store numbers with arbitrary precision.
 * When a matrix is provided, all elements will be converted to
 * BigNumber.
 */
bignumber(): math$MathJsChain,

/**
 * Create a boolean or convert a string or number to a boolean. In case
 * of a number, true is returned for non-zero numbers, and false in case
 * of zero. Strings can be 'true' or 'false', or can contain a number.
 * When value is a matrix, all elements will be converted to boolean.
 */
boolean(): math$MathJsChain,

/**
 * Create a complex value or convert a value to a complex value.
 * @param im Argument specifying the imaginary part of the complex
number
 */
complex(im?: number): math$MathJsChain,

/**
 * Create a user-defined unit and register it with the Unit type.
 * @param definition Definition of the unit in terms of existing units.
For example, ‘0.514444444 m / s’.
 * @param options (optional) An object containing any of the following
properties:</br>- prefixes {string} “none”, “short”, “long”,
“binary_short”, or “binary_long”. The default is “none”.</br>-
aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
‘kts’]</br>- offset {Numeric} An offset to apply when converting from
the unit. For example, the offset for celsius is 273.15. Default is
0.
 */
createUnit(
definition?: string | math$UnitDefinition,
options?: math$CreateUnitOptions): math$MathJsChain,

/**
 * Create a user-defined unit and register it with the Unit type.
 * @param options (optional) An object containing any of the following
properties:</br>- prefixes {string} “none”, “short”, “long”,
“binary_short”, or “binary_long”. The default is “none”.</br>-
aliases {Array} Array of strings. Example: [‘knots’, ‘kt’,
‘kts’]</br>- offset {Numeric} An offset to apply when converting from
the unit. For example, the offset for celsius is 273.15. Default is
0.
 */
createUnit(options?: math$CreateUnitOptions): math$MathJsChain,

/**
 * Create a fraction convert a value to a fraction.
 * @param denominator Argument specifying the denominator of the
fraction
 */
fraction(denominator?: number | string | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Create an index. An Index can store ranges having start, step, and
 * end for multiple dimensions. Matrix.get, Matrix.set, and math.subset
 * accept an Index as input.
 */
index(): math$MathJsChain,

/**
 * Create a Matrix. The function creates a new math.type.Matrix object
 * from an Array. A Matrix has utility functions to manipulate the data
 * in the matrix, like getting the size and getting or setting values in
 * the matrix. Supported storage formats are 'dense' and 'sparse'.
 */
matrix(format?: "sparse" | "dense", dataType?: string): math$MathJsChain,

/**
 * Create a number or convert a string, boolean, or unit to a number.
 * When value is a matrix, all elements will be converted to number.
 * @param valuelessUnit A valueless unit, used to convert a unit to a
number
 */
number(valuelessUnit?: math$Unit | string): math$MathJsChain,

/**
 * Create a Sparse Matrix. The function creates a new math.type.Matrix
 * object from an Array. A Matrix has utility functions to manipulate
 * the data in the matrix, like getting the size and getting or setting
 * values in the matrix.
 * @param dataType Sparse Matrix data type
 */
sparse(dataType?: string): math$MathJsChain,

/**
 * Split a unit in an array of units whose sum is equal to the original
 * unit.
 * @param parts An array of strings or valueless units
 */
splitUnit(parts: math$Unit[]): math$MathJsChain,

/**
 * Create a string or convert any object into a string. Elements of
 * Arrays and Matrices are processed element wise.
 */
string(): math$MathJsChain,

/**
 * Create a unit. Depending on the passed arguments, the function will
 * create and return a new math.type.Unit object. When a matrix is
 * provided, all elements will be converted to units.
 * @param unit The unit to be created
 */
unit(unit?: string): math$MathJsChain,

/**
 * ***********************************************************************
 * Expression functions
 * **********************************************************************
 * Parse and compile an expression. Returns a an object with a function
 * eval([scope]) to evaluate the compiled expression.
 */
compile(): math$MathJsChain,

/**
 * Evaluate an expression.
 * @param scope Scope to read/write variables
 */
eval(scope?: {[key: string]: any}): math$MathJsChain,

/**
 * Retrieve help on a function or data type. Help files are retrieved
 * from the documentation in math.expression.docs.
 */
help(): math$MathJsChain,

/**
 * Parse an expression. Returns a node tree, which can be evaluated by
 * invoking node.eval();
 * @param options Available options: nodes - a set of custome nodes
 */
parse(options?: any): math$MathJsChain,

/**
 * @param options Available options: nodes - a set of custome nodes
 */
parse(options?: any): math$MathJsChain,

/**
 * Create a parser. The function creates a new math.expression.Parser
 * object.
 */
parser(): math$MathJsChain,

/**
 * ***********************************************************************
 * Algebra functions
 * **********************************************************************
 * @param variable The variable over which to differentiate
 * @param options There is one option available, simplify, which is true
by default. When false, output will not be simplified.
 */
derivative(
variable: math$MathNode | string,
options?: {
simplify: boolean
}): math$MathJsChain,

/**
 * Solves the linear equation system by forwards substitution. Matrix
 * must be a lower triangular matrix.
 * @param b A column vector with the b values
 */
lsolve(b: math$Matrix | math$MathArray): math$MathJsChain,

/**
 * Calculate the Matrix LU decomposition with partial pivoting. Matrix A
 * is decomposed in two matrices (L, U) and a row permutation vector p
 * where A[p,:] = L * U
 */
lup(): math$MathJsChain,

/**
 * Solves the linear system A * x = b where A is an [n x n] matrix and b
 * is a [n] column vector.
 * @param b Column Vector
 * @param order The Symbolic Ordering and Analysis order, see slu for
details. Matrix must be a SparseMatrix
 * @param threshold Partial pivoting threshold (1 for partial pivoting),
see slu for details. Matrix must be a SparseMatrix.
 */
lusolve(
b: math$Matrix | math$MathArray,
order?: number,
threshold?: number): math$MathJsChain,

/**
 * Calculate the Matrix QR decomposition. Matrix A is decomposed in two
 * matrices (Q, R) where Q is an orthogonal matrix and R is an upper
 * triangular matrix.
 */
qr(): math$MathJsChain,

/**
 * Transform a rationalizable expression in a rational fraction. If
 * rational fraction is one variable polynomial then converts the
 * numerator and denominator in canonical form, with decreasing
 * exponents, returning the coefficients of numerator.
 * @param optional scope of expression or true for already evaluated
rational expression at input
 * @param detailed optional True if return an object, false if return
expression node (default)
 */
rationalize(
optional?: {[key: string]: any} | boolean,
detailed?: boolean): math$MathJsChain,

/**
 * Simplify an expression tree.
 * @param rules A list of rules are applied to an expression, repeating
over the list until no further changes are made. It’s possible to
pass a custom set of rules to the function as second argument. A rule
can be specified as an object, string, or function.
 * @param scope Scope to variables
 */
simplify(
rules?: Array<({
l: string,
r: string
} | string | ((node: math$MathNode) => math$MathNode))>,
scope?: {[key: string]: any}): math$MathJsChain,

/**
 * Calculate the Sparse Matrix LU decomposition with full pivoting.
 * Sparse Matrix A is decomposed in two matrices (L, U) and two
 * permutation vectors (pinv, q) where P * A * Q = L * U
 * @param order The Symbolic Ordering and Analysis order: 0 - Natural
ordering, no permutation vector q is returned 1 - Matrix must be
square, symbolic ordering and analisis is performed on M = A + A' 2 -
Symbolic ordering and analysis is performed on M = A' * A. Dense
columns from A' are dropped, A recreated from A'. This is appropriate
for LU factorization of non-symmetric matrices. 3 - Symbolic ordering
and analysis is performed on M = A' * A. This is best used for LU
factorization is matrix M has no dense rows. A dense row is a row
with more than 10*sqr(columns) entries.
 * @param threshold Partial pivoting threshold (1 for partial pivoting)
 */
slu(order: number, threshold: number): math$MathJsChain,

/**
 * Solves the linear equation system by backward substitution. Matrix
 * must be an upper triangular matrix. U * x = b
 * @param b A column vector with the b values
 */
usolve(b: math$Matrix | math$MathArray): math$MathJsChain,

/**
 * ***********************************************************************
 * Arithmetic functions
 * **********************************************************************
 * Calculate the absolute value of a number. For matrices, the function
 * is evaluated element wise.
 */
abs(): math$MathJsChain,

/**
 * Add two values, x + y. For matrices, the function is evaluated
 * element wise.
 * @param y Second value to add
 */
add(y: math$MathType): math$MathJsChain,

/**
 * Calculate the cubic root of a value. For matrices, the function is
 * evaluated element wise.
 * @param allRoots Optional, false by default. Only applicable when x is
a number or complex number. If true, all complex roots are returned,
if false (default) the principal root is returned.
 */
cbrt(allRoots?: boolean): math$MathJsChain,

/**
 * Round a value towards plus infinity If x is complex, both real and
 * imaginary part are rounded towards plus infinity. For matrices, the
 * function is evaluated element wise.
 */
ceil(): math$MathJsChain,

/**
 * Compute the cube of a value, x * x * x. For matrices, the function is
 * evaluated element wise.
 */
cube(): math$MathJsChain,

/**
 * Divide two values, x / y. To divide matrices, x is multiplied with
 * the inverse of y: x * inv(y).
 * @param y Denominator
 */
divide(y: math$MathType): math$MathJsChain,

/**
 * Divide two matrices element wise. The function accepts both matrices
 * and scalar values.
 * @param y Denominator
 */
dotDivide(y: math$MathType): math$MathJsChain,

/**
 * Multiply two matrices element wise. The function accepts both
 * matrices and scalar values.
 * @param y Right hand value
 */
dotMultiply(y: math$MathType): math$MathJsChain,

/**
 * Calculates the power of x to y element wise.
 * @param y The exponent
 */
dotPow(y: math$MathType): math$MathJsChain,

/**
 * Calculate the exponent of a value. For matrices, the function is
 * evaluated element wise.
 */
exp(): math$MathJsChain,

/**
 * Calculate the value of subtracting 1 from the exponential value. For
 * matrices, the function is evaluated element wise.
 */
expm1(): math$MathJsChain,

/**
 * Round a value towards zero. For matrices, the function is evaluated
 * element wise.
 */
fix(): math$MathJsChain,

/**
 * Round a value towards minus infinity. For matrices, the function is
 * evaluated element wise.
 */
floor(): math$MathJsChain,

/**
 * Calculate the greatest common divisor for two or more values or
 * arrays. For matrices, the function is evaluated element wise.
 */
gcd(): math$MathJsChain,

/**
 * Calculate the hypotenusa of a list with values. The hypotenusa is
 * defined as: hypot(a, b, c, ...) = sqrt(a^2 + b^2 + c^2 + ...) For
 * matrix input, the hypotenusa is calculated for all values in the
 * matrix.
 */
hypot(): math$MathJsChain,

/**
 * Calculate the least common multiple for two or more values or arrays.
 * lcm is defined as: lcm(a, b) = abs(a * b) / gcd(a, b) For matrices,
 * the function is evaluated element wise.
 * @param b An integer number
 */
lcm(b: number | math$BigNumber | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Calculate the logarithm of a value. For matrices, the function is
 * evaluated element wise.
 * @param base Optional base for the logarithm. If not provided, the
natural logarithm of x is calculated. Default value: e.
 */
log(base?: number | math$BigNumber | math$Complex): math$MathJsChain,

/**
 * Calculate the 10-base of a value. This is the same as calculating
 * log(x, 10). For matrices, the function is evaluated element wise.
 */
log10(): math$MathJsChain,

/**
 * Calculate the logarithm of a value+1. For matrices, the function is
 * evaluated element wise.
 */
log1p(base?: number | math$BigNumber | math$Complex): math$MathJsChain,

/**
 * Calculate the 2-base of a value. This is the same as calculating
 * log(x, 2). For matrices, the function is evaluated element wise.
 */
log2(): math$MathJsChain,

/**
 * Calculates the modulus, the remainder of an integer division. For
 * matrices, the function is evaluated element wise. The modulus is
 * defined as: x - y * floor(x / y)
 * @see http://en.wikipedia.org/wiki/Modulo_operation.
 * @param y Divisor
 */
mod(
y: number
| math$BigNumber
| math$Fraction
| math$MathArray
| math$Matrix): math$MathJsChain,

/**
 * Multiply two values, x * y. The result is squeezed. For matrices, the
 * matrix product is calculated.
 * @param y The second value to multiply
 */
multiply(y: math$MathType): math$MathJsChain,

/**
 * Calculate the norm of a number, vector or matrix. The second
 * parameter p is optional. If not provided, it defaults to 2.
 * @param p Vector space. Supported numbers include Infinity and
-Infinity. Supported strings are: 'inf', '-inf', and 'fro' (The
Frobenius norm) Default value: 2.
 */
norm(p?: number | math$BigNumber | string): math$MathJsChain,

/**
 * Calculate the nth root of a value. The principal nth root of a
 * positive real number A, is the positive real solution of the equation
 * x^root = A For matrices, the function is evaluated element wise.
 * @param root The root. Default value: 2.
 */
nthRoot(root?: number | math$BigNumber): math$MathJsChain,

/**
 * Calculates the power of x to y, x ^ y. Matrix exponentiation is
 * supported for square matrices x, and positive integer exponents y.
 * @param y The exponent
 */
pow(): math$MathJsChain,

/**
 * Round a value towards the nearest integer. For matrices, the function
 * is evaluated element wise.
 * @param n Number of decimals Default value: 0.
 */
round(n?: number | math$BigNumber | math$MathArray): math$MathJsChain,

/**
 * Compute the sign of a value. The sign of a value x is: 1 when x > 1
 * -1 when x < 0 0 when x == 0 For matrices, the function is evaluated
 * element wise.
 * @param x The number for which to determine the sign
 * @returns The sign of x
 */
sign(): math$MathJsChain,

/**
 * Calculate the square root of a value. For matrices, the function is
 * evaluated element wise.
 */
sqrt(): math$MathJsChain,

/**
 * Compute the square of a value, x * x. For matrices, the function is
 * evaluated element wise.
 */
square(): math$MathJsChain,

/**
 * Subtract two values, x - y. For matrices, the function is evaluated
 * element wise.
 * @param y Value to subtract from x
 */
subtract(y: math$MathType): math$MathJsChain,

/**
 * Inverse the sign of a value, apply a unary minus operation. For
 * matrices, the function is evaluated element wise. Boolean values and
 * strings will be converted to a number. For complex numbers, both real
 * and complex value are inverted.
 */
unaryMinus(): math$MathJsChain,

/**
 * Unary plus operation. Boolean values and strings will be converted to
 * a number, numeric values will be returned as is. For matrices, the
 * function is evaluated element wise.
 */
unaryPlus(): math$MathJsChain,

/**
 * Calculate the extended greatest common divisor for two values. See
 * http://en.wikipedia.org/wiki/Extended_Euclidean_algorithm.
 * @param b An integer number
 */
xgcd(b: number | math$BigNumber): math$MathJsChain,

/**
 * ***********************************************************************
 * Bitwise functions
 * **********************************************************************
 * Bitwise AND two values, x & y. For matrices, the function is
 * evaluated element wise.
 * @param y Second value to and
 */
bitAnd(y: number | math$BigNumber | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Bitwise NOT value, ~x. For matrices, the function is evaluated
 * element wise. For units, the function is evaluated on the best prefix
 * base.
 */
bitNot(): math$MathJsChain,

/**
 * Bitwise OR two values, x | y. For matrices, the function is evaluated
 * element wise. For units, the function is evaluated on the lowest
 * print base.
 * @param y Second value to or
 */
bitOr(y: number | math$BigNumber | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Bitwise XOR two values, x ^ y. For matrices, the function is
 * evaluated element wise.
 * @param y Second value to xor
 */
bitXor(y: number | math$BigNumber | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Bitwise left logical shift of a value x by y number of bits, x << y.
 * For matrices, the function is evaluated element wise. For units, the
 * function is evaluated on the best prefix base.
 * @param y Amount of shifts
 */
leftShift(y: number | math$BigNumber): math$MathJsChain,

/**
 * Bitwise right arithmetic shift of a value x by y number of bits, x >>
 * y. For matrices, the function is evaluated element wise. For units,
 * the function is evaluated on the best prefix base.
 * @param y Amount of shifts
 */
rightArithShift(y: number | math$BigNumber): math$MathJsChain,

/**
 * Bitwise right logical shift of value x by y number of bits, x >>> y.
 * For matrices, the function is evaluated element wise. For units, the
 * function is evaluated on the best prefix base.
 * @param y Amount of shifts
 */
rightLogShift(y: number): math$MathJsChain,

/**
 * ***********************************************************************
 * Combinatorics functions
 * **********************************************************************
 * The Bell Numbers count the number of partitions of a set. A partition
 * is a pairwise disjoint subset of S whose union is S. bellNumbers only
 * takes integer arguments. The following condition must be enforced: n
 * >= 0
 */
bellNumbers(): math$MathJsChain,

/**
 * The Catalan Numbers enumerate combinatorial structures of many
 * different types. catalan only takes integer arguments. The following
 * condition must be enforced: n >= 0
 */
catalan(): math$MathJsChain,

/**
 * The composition counts of n into k parts. Composition only takes
 * integer arguments. The following condition must be enforced: k <= n.
 * @param k Number of objects in the subset
 */
composition(k: number | math$BigNumber): math$MathJsChain,

/**
 * The Stirling numbers of the second kind, counts the number of ways to
 * partition a set of n labelled objects into k nonempty unlabelled
 * subsets. stirlingS2 only takes integer arguments. The following
 * condition must be enforced: k <= n. If n = k or k = 1, then s(n,k) =
 * 1
 * @param k Number of objects in the subset
 */
stirlingS2(k: number | math$BigNumber): math$MathJsChain,

/**
 * ***********************************************************************
 * Complex functions
 * **********************************************************************
 * Compute the argument of a complex value. For a complex number a + bi,
 * the argument is computed as atan2(b, a). For matrices, the function
 * is evaluated element wise.
 */
arg(): math$MathJsChain,

/**
 * Compute the complex conjugate of a complex value. If x = a+bi, the
 * complex conjugate of x is a - bi. For matrices, the function is
 * evaluated element wise.
 */
conj(): math$MathJsChain,

/**
 * Get the imaginary part of a complex number. For a complex number a +
 * bi, the function returns b. For matrices, the function is evaluated
 * element wise.
 */
im(): math$MathJsChain,

/**
 * Get the real part of a complex number. For a complex number a + bi,
 * the function returns a. For matrices, the function is evaluated
 * element wise.
 */
re(): math$MathJsChain,

/**
 * ***********************************************************************
 * Geometry functions
 * **********************************************************************
 * Calculates: The eucledian distance between two points in 2 and 3
 * dimensional spaces. Distance between point and a line in 2 and 3
 * dimensional spaces. Pairwise distance between a set of 2D or 3D
 * points NOTE: When substituting coefficients of a line(a, b and c),
 * use ax + by + c = 0 instead of ax + by = c For parametric equation of
 * a 3D line, x0, y0, z0, a, b, c are from: (x−x0, y−y0, z−z0) = t(a, b,
 * c)
 * @param y Coordinates of the second point
 */
distance(y: math$MathArray | math$Matrix | {[key: string]: any}): math$MathJsChain,

/**
 * Calculates the point of intersection of two lines in two or three
 * dimensions and of a line and a plane in three dimensions. The inputs
 * are in the form of arrays or 1 dimensional matrices. The line
 * intersection functions return null if the lines do not meet. Note:
 * Fill the plane coefficients as x + y + z = c and not as x + y + z + c
 * = 0.
 * @param x Co-ordinates of second end-point of first line
 * @param y Co-ordinates of first end-point of second line OR
Coefficients of the plane's equation
 * @param z Co-ordinates of second end-point of second line OR null if
the calculation is for line and plane
 */
intersect(
x: math$MathArray | math$Matrix,
y: math$MathArray | math$Matrix,
z: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * ***********************************************************************
 * Logical functions
 * **********************************************************************
 * Logical and. Test whether two values are both defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param y Second value to and
 */
and(
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): math$MathJsChain,

/**
 * Logical not. Flips boolean value of a given parameter. For matrices,
 * the function is evaluated element wise.
 */
not(): math$MathJsChain,

/**
 * Logical or. Test if at least one value is defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param y Second value to or
 */
or(
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): math$MathJsChain,

/**
 * Logical xor. Test whether one and only one value is defined with a
 * nonzero/nonempty value. For matrices, the function is evaluated
 * element wise.
 * @param y Second value to xor
 */
xor(
y: number
| math$BigNumber
| math$Complex
| math$Unit
| math$MathArray
| math$Matrix): math$MathJsChain,

/**
 * ***********************************************************************
 * Matrix functions
 * **********************************************************************
 * Concatenate two or more matrices. dim: number is a zero-based
 * dimension over which to concatenate the matrices. By default the last
 * dimension of the matrices.
 */
concat(): math$MathJsChain,

/**
 * Calculate the cross product for two vectors in three dimensional
 * space. The cross product of A = [a1, a2, a3] and B =[b1, b2, b3] is
 * defined as: cross(A, B) = [ a2 * b3 - a3 * b2, a3 * b1 - a1 * b3, a1
 * * b2 - a2 * b1 ]
 * @param y Second vector
 */
cross(y: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Calculate the determinant of a matrix.
 */
det(): math$MathJsChain,

/**
 * Create a diagonal matrix or retrieve the diagonal of a matrix. When x
 * is a vector, a matrix with vector x on the diagonal will be returned.
 * When x is a two dimensional matrix, the matrixes kth diagonal will be
 * returned as vector. When k is positive, the values are placed on the
 * super diagonal. When k is negative, the values are placed on the sub
 * diagonal.
 * @param k The diagonal where the vector will be filled in or
retrieved. Default value: 0.
 * @param format The matrix storage format. Default value: 'dense'.
 */
diag(format?: string): math$MathJsChain,
diag(k: number | math$BigNumber, format?: string): math$MathJsChain,

/**
 * Calculate the dot product of two vectors. The dot product of A = [a1,
 * a2, a3, ..., an] and B = [b1, b2, b3, ..., bn] is defined as: dot(A,
 * B) = a1 * b1 + a2 * b2 + a3 * b3 + ... + an * bn
 * @param y Second vector
 */
dot(y: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Compute the matrix exponential, expm(A) = e^A. The matrix must be
 * square. Not to be confused with exp(a), which performs element-wise
 * exponentiation. The exponential is calculated using the Padé
 * approximant with scaling and squaring; see “Nineteen Dubious Ways to
 * Compute the Exponential of a Matrix,” by Moler and Van Loan.
 */
expm(): math$MathJsChain,

/**
 * Create a 2-dimensional identity matrix with size m x n or n x n. The
 * matrix has ones on the diagonal and zeros elsewhere.
 * @param format The Matrix storage format
 */
eye(format?: string): math$MathJsChain,

/**
 * @param n The y dimension for the matrix
 * @param format The Matrix storage format
 */
eye(n: number, format?: string): math$MathJsChain,

/**
 * Filter the items in an array or one dimensional matrix.
 */
filter(
test: ((
value: any,
index: any,
matrix: math$Matrix | math$MathArray) => math$Matrix | math$MathArray) | RegExp): math$MathJsChain,

/**
 * Flatten a multi dimensional matrix into a single dimensional matrix.
 */
flatten(): math$MathJsChain,

/**
 * Iterate over all elements of a matrix/array, and executes the given
 * callback function.
 */
forEach(
callback: ((value: any, index: any, matrix: math$Matrix | math$MathArray) => void)): math$MathJsChain,

/**
 * Calculate the inverse of a square matrix.
 */
inv(): math$MathJsChain,

/**
 * Calculate the kronecker product of two matrices or vectors
 * @param y Second vector
 */
kron(y: math$Matrix | math$MathArray): math$MathJsChain,

/**
 * Iterate over all elements of a matrix/array, and executes the given
 * callback function.
 * @param callback The callback function is invoked with three
parameters: the value of the element, the index of the element, and
the Matrix/array being traversed.
 */
map(
callback: ((
value: any,
index: any,
matrix: math$Matrix | math$MathArray) => math$Matrix | math$MathArray)): math$MathJsChain,

/**
 * Create a matrix filled with ones. The created matrix can have one or
 * multiple dimensions.
 * @param format The matrix storage format
 */
ones(format?: string): math$MathJsChain,

/**
 * @param format The matrix storage format
 */
ones(n: number, format?: string): math$MathJsChain,

/**
 * Partition-based selection of an array or 1D matrix. Will find the kth
 * smallest value, and mutates the input array. Uses Quickselect.
 * @param k The kth smallest value to be retrieved; zero-based index
 * @param compare An optional comparator function. The function is
called as compare(a, b), and must return 1 when a > b, -1 when a < b,
and 0 when a == b. Default value: 'asc'.
 */
partitionSelect(
k: number,
compare?: "asc" | "desc" | ((a: any, b: any) => number)): math$MathJsChain,

/**
 * Create an array from a range. By default, the range end is excluded.
 * This can be customized by providing an extra parameter includeEnd.
 * @param end End of the range, excluded by default, included when
parameter includeEnd=true
 * @param step Step size. Default value is 1.
 * @param includeEnd : Option to specify whether to include the end or
not. False by default
 */
range(includeEnd?: boolean): math$Matrix,
range(end: number | math$BigNumber, includeEnd?: boolean): math$MathJsChain,
range(
end: number | math$BigNumber,
step: number | math$BigNumber,
includeEnd?: boolean): math$MathJsChain,

/**
 * Reshape a multi dimensional array to fit the specified dimensions
 * @param sizes One dimensional array with integral sizes for each
dimension
 */
reshape(sizes: number[]): math$MathJsChain,

/**
 * Resize a matrix
 * @param size One dimensional array with numbers
 * @param defaultValue Zero by default, except in case of a string, in
that case defaultValue = ' ' Default value: 0.
 */
resize(
size: math$MathArray | math$Matrix,
defaultValue?: number | string): math$MathJsChain,

/**
 * Calculate the size of a matrix or scalar.
 */
size(): math$MathJsChain,

/**
 * Sort the items in a matrix
 * @param compare An optional _comparator function or name. The function
is called as compare(a, b), and must return 1 when a > b, -1 when a <
b, and 0 when a == b. Default value: ‘asc’
 */
sort(
compare: ((a: any, b: any) => number) | "asc" | "desc" | "natural"): math$MathJsChain,

/**
 * Calculate the principal square root of a square matrix. The principal
 * square root matrix X of another matrix A is such that X * X = A.
 */
sqrtm(): math$MathJsChain,

/**
 * Squeeze a matrix, remove inner and outer singleton dimensions from a
 * matrix.
 */
squeeze(): math$MathJsChain,

/**
 * Get or set a subset of a matrix or string.
 * @param index An index containing ranges for each dimension
 * @param replacement An array, matrix, or scalar. If provided, the
subset is replaced with replacement. If not provided, the subset is
returned
 * @param defaultValue Default value, filled in on new entries when the
matrix is resized. If not provided, math.matrix elements will be left
undefined. Default value: undefined.
 */
subset(index: math$Index, replacement?: any, defaultValue?: any): math$MathJsChain,

/**
 * Calculate the trace of a matrix: the sum of the elements on the main
 * diagonal of a square matrix.
 */
trace(): math$MathJsChain,

/**
 * Transpose a matrix. All values of the matrix are reflected over its
 * main diagonal. Only two dimensional matrices are supported.
 */
transpose(): math$MathJsChain,

/**
 * Create a matrix filled with zeros. The created matrix can have one or
 * multiple dimensions.
 * @param format The matrix storage format
 * @returns A matrix filled with zeros
 */
zeros(format?: string): math$MathJsChain,

/**
 * @param n The y dimension of the matrix
 * @param format The matrix storage format
 */
zeros(n: number, format?: string): math$MathJsChain,

/**
 * ***********************************************************************
 * Probability functions
 * **********************************************************************
 * Compute the number of ways of picking k unordered outcomes from n
 * possibilities. Combinations only takes integer arguments. The
 * following condition must be enforced: k <= n.
 * @param k Number of objects in the subset
 */
combinations(k: number | math$BigNumber): math$MathJsChain,

/**
 * Compute the factorial of a value Factorial only supports an integer
 * value as argument. For matrices, the function is evaluated element
 * wise.
 */
factorial(): math$MathJsChain,

/**
 * Compute the gamma function of a value using Lanczos approximation for
 * small values, and an extended Stirling approximation for large
 * values. For matrices, the function is evaluated element wise.
 */
gamma(): math$MathJsChain,

/**
 * Calculate the Kullback-Leibler (KL) divergence between two
 * distributions
 * @param p Second vector
 */
kldivergence(p: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Multinomial Coefficients compute the number of ways of picking a1,
 * a2, ..., ai unordered outcomes from n possibilities. multinomial
 * takes one array of integers as an argument. The following condition
 * must be enforced: every ai <= 0
 */
multinomial(): math$MathJsChain,

/**
 * Compute the number of ways of obtaining an ordered subset of k
 * elements from a set of n elements. Permutations only takes integer
 * arguments. The following condition must be enforced: k <= n.
 * @param k The number of objects in the subset
 */
permutations(k?: number | math$BigNumber): math$MathJsChain,

/**
 * Random pick a value from a one dimensional array. Array element is
 * picked using a random function with uniform distribution.
 * @param number An int or float
 * @param weights An array of ints or floats
 */
pickRandom(number?: number, weights?: number[]): math$MathJsChain,

/**
 * Return a random number larger or equal to min and smaller than max
 * using a uniform distribution.
 * @param min Minimum boundary for the random value, included
 * @param max Maximum boundary for the random value, excluded
 */
random(max?: number): math$MathJsChain,
random(min: number, max: number): math$MathJsChain,

/**
 * Return a random integer number larger or equal to min and smaller
 * than max using a uniform distribution.
 * @param min Minimum boundary for the random value, included
 * @param max Maximum boundary for the random value, excluded
 */
randomInt(max?: number): math$MathJsChain,
randomInt(min: number, max: number): math$MathJsChain,

/**
 * ***********************************************************************
 * Relational functions
 * **********************************************************************
 * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x
 * == y. x and y are considered equal when the relative difference
 * between x and y is smaller than the configured epsilon. The function
 * cannot be used to compare values smaller than approximately 2.22e-16.
 * For matrices, the function is evaluated element wise.
 * @param y Second value to compare
 */
compare(y: math$MathType | string): math$MathJsChain,

/**
 * Compare two values of any type in a deterministic, natural way. For
 * numeric values, the function works the same as math.compare. For
 * types of values that can’t be compared mathematically, the function
 * compares in a natural way.
 * @param y Second value to compare
 */
compareNatural(y: any): math$MathJsChain,

/**
 * Compare two strings lexically. Comparison is case sensitive. Returns
 * 1 when x > y, -1 when x < y, and 0 when x == y. For matrices, the
 * function is evaluated element wise.
 * @param y Second string to compare
 */
compareText(y: string | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Test element wise whether two matrices are equal. The function
 * accepts both matrices and scalar values.
 * @param y Second amtrix to compare
 */
deepEqual(y: math$MathType): math$MathJsChain,

/**
 * Test whether two values are equal.
 * 
 * The function tests whether the relative difference between x and y is
 * smaller than the configured epsilon. The function cannot be used to
 * compare values smaller than approximately 2.22e-16. For matrices, the
 * function is evaluated element wise. In case of complex numbers, x.re
 * must equal y.re, and x.im must equal y.im. Values null and undefined
 * are compared strictly, thus null is only equal to null and nothing
 * else, and undefined is only equal to undefined and nothing else.
 * @param y Second value to compare
 */
equal(y: math$MathType | string): math$MathJsChain,

/**
 * Check equality of two strings. Comparison is case sensitive. For
 * matrices, the function is evaluated element wise.
 * @param y Second string to compare
 */
equalText(y: string | math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Test whether value x is larger than y. The function returns true when
 * x is larger than y and the relative difference between x and y is
 * larger than the configured epsilon. The function cannot be used to
 * compare values smaller than approximately 2.22e-16. For matrices, the
 * function is evaluated element wise.
 * @param y Second value to compare
 */
larger(y: math$MathType | string): math$MathJsChain,

/**
 * Test whether value x is larger or equal to y. The function returns
 * true when x is larger than y or the relative difference between x and
 * y is smaller than the configured epsilon. The function cannot be used
 * to compare values smaller than approximately 2.22e-16. For matrices,
 * the function is evaluated element wise.
 * @param y Second value to vcompare
 */
largerEq(y: math$MathType | string): math$MathJsChain,

/**
 * Test whether value x is smaller than y. The function returns true
 * when x is smaller than y and the relative difference between x and y
 * is smaller than the configured epsilon. The function cannot be used
 * to compare values smaller than approximately 2.22e-16. For matrices,
 * the function is evaluated element wise.
 * @param y Second value to vcompare
 */
smaller(y: math$MathType | string): math$MathJsChain,

/**
 * Test whether value x is smaller or equal to y. The function returns
 * true when x is smaller than y or the relative difference between x
 * and y is smaller than the configured epsilon. The function cannot be
 * used to compare values smaller than approximately 2.22e-16. For
 * matrices, the function is evaluated element wise.
 * @param y Second value to compare
 */
smallerEq(y: math$MathType | string): math$MathJsChain,

/**
 * Test whether two values are unequal. The function tests whether the
 * relative difference between x and y is larger than the configured
 * epsilon. The function cannot be used to compare values smaller than
 * approximately 2.22e-16. For matrices, the function is evaluated
 * element wise. In case of complex numbers, x.re must unequal y.re, or
 * x.im must unequal y.im. Values null and undefined are compared
 * strictly, thus null is unequal with everything except null, and
 * undefined is unequal with everything except undefined.
 * @param y Second value to vcompare
 */
unequal(y: math$MathType | string): math$MathJsChain,

/**
 * ***********************************************************************
 * Set functions
 * **********************************************************************
 * Create the cartesian product of two (multi)sets. Multi-dimension
 * arrays will be converted to single-dimension arrays before the
 * operation.
 * @param a2 A (multi)set
 */
setCartesian(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Create the difference of two (multi)sets: every element of set1, that
 * is not the element of set2. Multi-dimension arrays will be converted
 * to single-dimension arrays before the operation
 * @param a2 A (multi)set
 */
setDifference(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Collect the distinct elements of a multiset. A multi-dimension array
 * will be converted to a single-dimension array before the operation.
 */
setDistinct(): math$MathJsChain,

/**
 * Create the intersection of two (multi)sets. Multi-dimension arrays
 * will be converted to single-dimension arrays before the operation.
 * @param a2 A (multi)set
 */
setIntersect(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Check whether a (multi)set is a subset of another (multi)set. (Every
 * element of set1 is the element of set2.) Multi-dimension arrays will
 * be converted to single-dimension arrays before the operation.
 * @param a2 A (multi)set
 */
setIsSubset(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Count the multiplicity of an element in a multiset. A multi-dimension
 * array will be converted to a single-dimension array before the
 * operation.
 * @param a A multiset
 */
setMultiplicity(a: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Create the powerset of a (multi)set. (The powerset contains very
 * possible subsets of a (multi)set.) A multi-dimension array will be
 * converted to a single-dimension array before the operation.
 */
setPowerset(): math$MathJsChain,

/**
 * Count the number of elements of a (multi)set. When a second parameter
 * is ‘true’, count only the unique values. A multi-dimension array will
 * be converted to a single-dimension array before the operation.
 */
setSize(): math$MathJsChain,

/**
 * Create the symmetric difference of two (multi)sets. Multi-dimension
 * arrays will be converted to single-dimension arrays before the
 * operation.
 * @param a2 A (multi)set
 */
setSymDifference(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * Create the union of two (multi)sets. Multi-dimension arrays will be
 * converted to single-dimension arrays before the operation.
 * @param a2 A (multi)set
 */
setUnion(a2: math$MathArray | math$Matrix): math$MathJsChain,

/**
 * ***********************************************************************
 * Special functions
 * **********************************************************************
 * Compute the erf function of a value using a rational Chebyshev
 * approximations for different intervals of x.
 */
erf(): math$MathJsChain,

/**
 * ***********************************************************************
 * Statistics functions
 * **********************************************************************
 * Compute the median absolute deviation of a matrix or a list with
 * values. The median absolute deviation is defined as the median of the
 * absolute deviations from the median.
 */
mad(): math$MathJsChain,

/**
 * Compute the maximum value of a matrix or a list with values. In case
 * of a multi dimensional array, the maximum of the flattened array will
 * be calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param dim The maximum over the selected dimension
 */
max(dim?: number): math$MathJsChain,

/**
 * Compute the mean value of matrix or a list with values. In case of a
 * multi dimensional array, the mean of the flattened array will be
 * calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param dim The mean over the selected dimension
 */
mean(dim?: number): math$MathJsChain,

/**
 * Compute the median of a matrix or a list with values. The values are
 * sorted and the middle value is returned. In case of an even number of
 * values, the average of the two middle values is returned. Supported
 * types of values are: Number, BigNumber, Unit In case of a (multi
 * dimensional) array or matrix, the median of all elements will be
 * calculated.
 */
median(): math$MathJsChain,

/**
 * Compute the maximum value of a matrix or a list of values. In case of
 * a multi dimensional array, the maximum of the flattened array will be
 * calculated. When dim is provided, the maximum over the selected
 * dimension will be calculated. Parameter dim is zero-based.
 * @param dim The minimum over the selected dimension
 */
min(dim?: number): math$MathJsChain,

/**
 * Computes the mode of a set of numbers or a list with values(numbers
 * or characters). If there are more than one modes, it returns a list
 * of those values.
 */
mode(): math$MathJsChain,

/**
 * Compute the product of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the sum of all elements will be
 * calculated.
 */
prod(): math$MathJsChain,

/**
 * Compute the prob order quantile of a matrix or a list with values.
 * The sequence is sorted and the middle value is returned. Supported
 * types of sequence values are: Number, BigNumber, Unit Supported types
 * of probability are: Number, BigNumber In case of a (multi
 * dimensional) array or matrix, the prob order quantile of all elements
 * will be calculated.
 * @param probOrN prob is the order of the quantile, while N is the
amount of evenly distributed steps of probabilities; only one of
these options can be provided
 * @param sorted =false is data sorted in ascending order
 */
quantileSeq(
prob: number | math$BigNumber | math$MathArray,
sorted?: boolean): math$MathJsChain,

/**
 * Compute the standard deviation of a matrix or a list with values. The
 * standard deviations is defined as the square root of the variance:
 * std(A) = sqrt(var(A)). In case of a (multi dimensional) array or
 * matrix, the standard deviation over all elements will be calculated.
 * Optionally, the type of normalization can be specified as second
 * parameter. The parameter normalization can be one of the following
 * values: 'unbiased' (default) The sum of squared errors is divided by
 * (n - 1) 'uncorrected' The sum of squared errors is divided by n
 * 'biased' The sum of squared errors is divided by (n + 1)
 * @param array A single matrix or multiple scalar values
 * @param normalization Determines how to normalize the variance. Choose
‘unbiased’ (default), ‘uncorrected’, or ‘biased’. Default value:
‘unbiased’.
 * @returns The standard deviation
 */
std(
normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"): math$MathJsChain,

/**
 * Compute the sum of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the sum of all elements will be
 * calculated.
 */
sum(): math$MathJsChain,

/**
 * Compute the variance of a matrix or a list with values. In case of a
 * (multi dimensional) array or matrix, the variance over all elements
 * will be calculated. Optionally, the type of normalization can be
 * specified as second parameter. The parameter normalization can be one
 * of the following values: 'unbiased' (default) The sum of squared
 * errors is divided by (n - 1) 'uncorrected' The sum of squared errors
 * is divided by n 'biased' The sum of squared errors is divided by (n +
 * 1) Note that older browser may not like the variable name var. In
 * that case, the function can be called as math['var'](...) instead of
 * math.var(...).
 * @param normalization normalization Determines how to normalize the
variance. Choose ‘unbiased’ (default), ‘uncorrected’, or ‘biased’.
Default value: ‘unbiased’.
 * @returns The variance
 */
var(
normalization?: "unbiased" | "uncorrected" | "biased" | "unbiased"): math$MathJsChain,

/**
 * ***********************************************************************
 * String functions
 * **********************************************************************
 * Format a value of any type into a string.
 * @param options An object with formatting options.
 * @param callback A custom formatting function, invoked for all numeric
elements in value, for example all elements of a matrix, or the real
and imaginary parts of a complex number. This callback can be used to
override the built-in numeric notation with any type of formatting.
Function callback is called with value as parameter and must return a
string.
 * @see http://mathjs.org/docs/reference/functions/format.html
 */
format(
value: any,
options?: math$FormatOptions | number | ((item: any) => string),
callback?: ((value: any) => string)): math$MathJsChain,

/**
 * Interpolate values into a string template.
 * @param values An object containing variables which will be filled in
in the template.
 * @param precision Number of digits to format numbers. If not provided,
the value will not be rounded.
 * @param options Formatting options, or the number of digits to format
numbers. See function math.format for a description of all options.
 */
print(
values: any,
precision?: number,
options?: number | {[key: string]: any}): math$MathJsChain,

/**
 * ***********************************************************************
 * Trigonometry functions
 * **********************************************************************
 * Calculate the inverse cosine of a value. For matrices, the function
 * is evaluated element wise.
 */
acos(): math$MathJsChain,

/**
 * Calculate the hyperbolic arccos of a value, defined as acosh(x) =
 * ln(sqrt(x^2 - 1) + x). For matrices, the function is evaluated
 * element wise.
 */
acosh(): math$MathJsChain,

/**
 * Calculate the inverse cotangent of a value. For matrices, the
 * function is evaluated element wise.
 */
acot(): math$MathJsChain,

/**
 * Calculate the hyperbolic arccotangent of a value, defined as acoth(x)
 * = (ln((x+1)/x) + ln(x/(x-1))) / 2. For matrices, the function is
 * evaluated element wise.
 */
acoth(): math$MathJsChain,

/**
 * Calculate the inverse cosecant of a value. For matrices, the function
 * is evaluated element wise.
 */
acsc(): math$MathJsChain,

/**
 * Calculate the hyperbolic arccosecant of a value, defined as acsch(x)
 * = ln(1/x + sqrt(1/x^2 + 1)). For matrices, the function is evaluated
 * element wise.
 */
acsch(): math$MathJsChain,

/**
 * Calculate the inverse secant of a value. For matrices, the function
 * is evaluated element wise.
 */
asec(): math$MathJsChain,

/**
 * Calculate the hyperbolic arcsecant of a value, defined as asech(x) =
 * ln(sqrt(1/x^2 - 1) + 1/x). For matrices, the function is evaluated
 * element wise.
 */
asech(): math$MathJsChain,

/**
 * Calculate the inverse sine of a value. For matrices, the function is
 * evaluated element wise.
 */
asin(): math$MathJsChain,

/**
 * Calculate the hyperbolic arcsine of a value, defined as asinh(x) =
 * ln(x + sqrt(x^2 + 1)). For matrices, the function is evaluated
 * element wise.
 */
asinh(): math$MathJsChain,

/**
 * Calculate the inverse tangent of a value. For matrices, the function
 * is evaluated element wise.
 */
atan(): math$MathJsChain,

/**
 * Calculate the inverse tangent function with two arguments, y/x. By
 * providing two arguments, the right quadrant of the computed angle can
 * be determined. For matrices, the function is evaluated element wise.
 */
atan2(): math$MathJsChain,

/**
 * Calculate the hyperbolic arctangent of a value, defined as atanh(x) =
 * ln((1 + x)/(1 - x)) / 2. For matrices, the function is evaluated
 * element wise.
 */
atanh(): math$MathJsChain,

/**
 * Calculate the cosine of a value. For matrices, the function is
 * evaluated element wise.
 */
cos(): math$MathJsChain,

/**
 * Calculate the hyperbolic cosine of a value, defined as cosh(x) = 1/2
 * * (exp(x) + exp(-x)). For matrices, the function is evaluated element
 * wise.
 */
cosh(): math$MathJsChain,

/**
 * Calculate the cotangent of a value. cot(x) is defined as 1 / tan(x).
 * For matrices, the function is evaluated element wise.
 */
cot(): math$MathJsChain,

/**
 * Calculate the hyperbolic cotangent of a value, defined as coth(x) = 1
 * / tanh(x). For matrices, the function is evaluated element wise.
 */
coth(): math$MathJsChain,

/**
 * Calculate the cosecant of a value, defined as csc(x) = 1/sin(x). For
 * matrices, the function is evaluated element wise.
 */
csc(): math$MathJsChain,

/**
 * Calculate the hyperbolic cosecant of a value, defined as csch(x) = 1
 * / sinh(x). For matrices, the function is evaluated element wise.
 */
csch(): math$MathJsChain,

/**
 * Calculate the secant of a value, defined as sec(x) = 1/cos(x). For
 * matrices, the function is evaluated element wise.
 */
sec(): math$MathJsChain,

/**
 * Calculate the hyperbolic secant of a value, defined as sech(x) = 1 /
 * cosh(x). For matrices, the function is evaluated element wise.
 */
sech(): math$MathJsChain,

/**
 * Calculate the sine of a value. For matrices, the function is
 * evaluated element wise.
 */
sin(): math$MathJsChain,

/**
 * Calculate the hyperbolic sine of a value, defined as sinh(x) = 1/2 *
 * (exp(x) - exp(-x)). For matrices, the function is evaluated element
 * wise.
 */
sinh(): math$MathJsChain,

/**
 * Calculate the tangent of a value. tan(x) is equal to sin(x) / cos(x).
 * For matrices, the function is evaluated element wise.
 */
tan(): math$MathJsChain,

/**
 * Calculate the hyperbolic tangent of a value, defined as tanh(x) =
 * (exp(2 * x) - 1) / (exp(2 * x) + 1). For matrices, the function is
 * evaluated element wise.
 */
tanh(): math$MathJsChain,

/**
 * ***********************************************************************
 * Unit functions
 * **********************************************************************
 * Change the unit of a value. For matrices, the function is evaluated
 * element wise.
 * @param unit New unit. Can be a string like "cm" or a unit without
value.
 */
to(unit: math$Unit | string): math$MathJsChain,

/**
 * ***********************************************************************
 * Utils functions
 * **********************************************************************
 * Clone an object.
 */
clone(): math$MathJsChain,

/**
 * Test whether a value is an integer number. The function supports
 * number, BigNumber, and Fraction. The function is evaluated
 * element-wise in case of Array or Matrix input.
 */
isInteger(): math$MathJsChain,

/**
 * Test whether a value is NaN (not a number). The function supports
 * types number, BigNumber, Fraction, Unit and Complex. The function is
 * evaluated element-wise in case of Array or Matrix input.
 */
isNaN(): math$MathJsChain,

/**
 * Test whether a value is negative: smaller than zero. The function
 * supports types number, BigNumber, Fraction, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 */
isNegative(): math$MathJsChain,

/**
 * Test whether a value is an numeric value. The function is evaluated
 * element-wise in case of Array or Matrix input.
 */
isNumeric(): math$MathJsChain,

/**
 * Test whether a value is positive: larger than zero. The function
 * supports types number, BigNumber, Fraction, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 */
isPositive(): math$MathJsChain,

/**
 * Test whether a value is prime: has no divisors other than itself and
 * one. The function supports type number, bignumber. The function is
 * evaluated element-wise in case of Array or Matrix input.
 */
isPrime(): math$MathJsChain,

/**
 * Test whether a value is zero. The function can check for zero for
 * types number, BigNumber, Fraction, Complex, and Unit. The function is
 * evaluated element-wise in case of Array or Matrix input.
 */
isZero(): math$MathJsChain,

/**
 * Determine the type of a variable.
 */
typeof(): math$MathJsChain
} 

declare interface math$ImportOptions {
override?: boolean,
silent?: boolean,
wrap?: boolean
} 

declare interface math$ImportObject {
[key: string]: any
} 