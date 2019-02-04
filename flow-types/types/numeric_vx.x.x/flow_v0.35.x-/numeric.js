declare module 'numeric' {
        declare type NonNullPrimitive = number | string | boolean | void;
	declare type Scalar = number;
	declare type Vector = number[];
	declare type VectorBoolean = boolean[];
	declare type Matrix = number[][];
	declare type SparseMatrix = [Vector, Vector, Vector];
	declare type DeprecatedSparseMatrix = Array<Array<number | void>>;
	declare type DeprecatedSparseVector = Array<number | void>;
	declare type CCSComparisonResult = [Vector, Vector, VectorBoolean];
	declare type ShapeFunction = (i: number, j: number) => boolean;
	declare interface LUPP {
L: SparseMatrix,
U: SparseMatrix,
P: Vector,
Pinv: Vector
} 
	declare interface LU {
L: Matrix,
U: Matrix
} 
	declare type MultidimensionalArray<T> = T[][]
| T[][][]
| T[][][][]
| T[][][][][]
| T[][][][][][]
| T[][][][][][][]
| T[][][][][][][][]
| T[][][][][][][][][][]
| T[][][][][][][][][][][]
| T[][][][][][][][][][][][]
| T[][][][][][][][][][][][][]
| T[][][][][][][][][][][][][][]
| T[][][][][][][][][][][][][][][]
| T[][][][][][][][][][][][][][][][];
	declare type MultidimensionalMatrix = MultidimensionalArray<number>;
	declare type TensorValue = Scalar | Vector | MultidimensionalMatrix;
	declare type NonScalar = Vector | MultidimensionalMatrix;
	declare class Tensor  {
x: TensorValue;
y: TensorValue;
add(tensor: Tensor | TensorValue): Tensor;
sub(tensor: Tensor | TensorValue): Tensor;
mul(tensor: Tensor | TensorValue): Tensor;
reciprocal(): Tensor;
div(tensor: Tensor | TensorValue): Tensor;
dot(tensor: Tensor | TensorValue): Tensor;
transpose(): Tensor;
transjugate(): Tensor;
exp(): Tensor;
conj(): Tensor;
neg(): Tensor;
sin(): Tensor;
cos(): Tensor;
abs(): Tensor;
log(): Tensor;
norm2(): Tensor;
inv(): Tensor;
get(i: Vector): Tensor;
set(i: Vector, value: Tensor): Tensor;
getRows(i0: number, i1: number): Tensor;
setRows(i0: number, i1: number, tensor: Tensor): Tensor;
getRow(k: number): Tensor;
setRow(i: number, tensor: Tensor): Tensor;
getBlock(from: Vector, to: Vector): Tensor;
setBlock(from: Vector, to: Vector, tensor: Tensor): Tensor;
rep(s: Vector, value: Tensor | TensorValue): Tensor;
diag(d: Tensor | TensorValue): Tensor;
eig(): {
lambda: Tensor,
E: Tensor
};
identity(n: number): Tensor;
getDiag(): Tensor;
fft(): Tensor;
ifft(): Tensor
}
	declare class Spline  {
x: Vector;
yl: Vector;
yr: Vector;
kl: Vector;
kr: Vector;
at(x0: Vector | Scalar): Vector | Scalar;
diff(): Spline;
roots(): Vector
}
	declare class Dopri  {
x: Vector;
y: Vector;
f: Vector;
ymid: Vector;
iterations: number;
msg: string;
events: boolean | VectorBoolean;
at(x: Vector): Vector | Matrix
}
	declare interface Numeric {
+epsilon: number,
largeArray: number,
precision: number,
+version: string,
seedrandom: {
seedrandom(seed: number | string, useEntropy?: boolean): string,
random(): number
},
bench(func: () => any, interval?: number): number,
prettyPrint(x?: any): string,
parseDate(date: string): number,
parseDate(dates: string[]): number[],
parseFloat(input: string): number,
parseFloat(inputs: string[]): number[],
parseCSV(csv: string): string[][],
toCSV(csvArray: any[][]): string,
imageURL(img: number[][]): string,
getURL(url: string): any,
dim(arr: any): Vector,
same(x: any, y: any): boolean,
rep<T>(scale: Vector, value: T, key?: number): MultidimensionalArray<T>,
dot(
x: Vector | Matrix | Scalar,
y: Vector | Matrix | Scalar): Vector | Matrix | Scalar,
dotMMsmall(x: Matrix, y: Matrix): Matrix,
dotMMbig(x: Matrix, y: Matrix): Matrix,
dotMV(x: Matrix, y: Vector): Vector,
dotVM(x: Vector, y: Matrix): Vector,
dotVV(x: Vector, y: Vector): Scalar,
diag(diagonal: Vector): Matrix,
getDiag(matrix: Matrix): Vector,
identity(num: number): Matrix,
abs<T: NonScalar>(x: T): T,
absV(x: Vector): Vector,
abseqV(x: Vector): Vector,
abseq<T: NonScalar>(x: T): T,
acos<T: NonScalar>(x: T): T,
acosV(x: Vector): Vector,
acoseqV(x: Vector): Vector,
acoseq<T: NonScalar>(x: T): T,
asin<T: NonScalar>(x: T): T,
asinV(x: Vector): Vector,
asineqV(x: Vector): Vector,
asineq<T: NonScalar>(x: T): T,
atan<T: NonScalar>(x: T): T,
atanV(x: Vector): Vector,
ataneqV(x: Vector): Vector,
ataneq<T: NonScalar>(x: T): T,
ceil<T: NonScalar>(x: T): T,
ceilV(x: Vector): Vector,
ceileqV(x: Vector): Vector,
ceileq<T: NonScalar>(x: T): T,
cos<T: NonScalar>(x: T): T,
cosV(x: Vector): Vector,
coseqV(x: Vector): Vector,
coseq<T: NonScalar>(x: T): T,
exp<T: NonScalar>(x: T): T,
expV(x: Vector): Vector,
expeqV(x: Vector): Vector,
expeq<T: NonScalar>(x: T): T,
floor<T: NonScalar>(x: T): T,
floorV(x: Vector): Vector,
flooreqV(x: Vector): Vector,
flooreq<T: NonScalar>(x: T): T,
log<T: NonScalar>(x: T): T,
logV(x: Vector): Vector,
logeqV(x: Vector): Vector,
logeq<T: NonScalar>(x: T): T,
round<T: NonScalar>(x: T): T,
roundV(x: Vector): Vector,
roundeqV(x: Vector): Vector,
roundeq<T: NonScalar>(x: T): T,
sin<T: NonScalar>(x: T): T,
sinV(x: Vector): Vector,
sineqV(x: Vector): Vector,
sineq<T: NonScalar>(x: T): T,
sqrt<T: NonScalar>(x: T): T,
sqrtV(x: Vector): Vector,
sqrteqV(x: Vector): Vector,
sqrteq<T: NonScalar>(x: T): T,
tan<T: NonScalar>(x: T): T,
tanV(x: Vector): Vector,
taneqV(x: Vector): Vector,
taneq<T: NonScalar>(x: T): T,
isNaN(x: Vector): VectorBoolean,
isNaN(x: MultidimensionalMatrix): MultidimensionalArray<boolean>,
isNaNV(x: Vector): VectorBoolean,
isNaNeqV(x: Vector): VectorBoolean,
isNaNeq(x: Vector): VectorBoolean,
isNaNeq(x: MultidimensionalMatrix): MultidimensionalArray<boolean>,
isFinite(x: Vector): VectorBoolean,
isFinite(x: MultidimensionalMatrix): MultidimensionalArray<boolean>,
isFiniteV(x: Vector): VectorBoolean,
isFiniteeqV(x: Vector): VectorBoolean,
isFiniteeq(x: Vector): VectorBoolean,
isFiniteeq(x: MultidimensionalMatrix): MultidimensionalArray<boolean>,
neg<T: TensorValue>(x: T): T,
negV(x: Vector): Vector,
negeq<T: TensorValue>(x: T): T,
negeqV(x: Vector): Vector,
not(x: NonNullPrimitive): boolean,
not(x: NonNullPrimitive[]): VectorBoolean,
not(x: MultidimensionalArray<NonNullPrimitive>): MultidimensionalArray<boolean>,
notV(x: NonNullPrimitive[]): VectorBoolean,
noteq(x: NonNullPrimitive): boolean,
noteq(x: NonNullPrimitive[]): VectorBoolean,
noteq(x: MultidimensionalArray<NonNullPrimitive>): MultidimensionalArray<boolean>,
noteqV(x: NonNullPrimitive[]): VectorBoolean,
bnot<T: TensorValue>(x: T): T,
bnotV(x: Vector): Vector,
bnoteq<T: TensorValue>(x: T): T,
bnoteqV(x: Vector): Vector,
clone<T: NonNullPrimitive[] | MultidimensionalArray<NonNullPrimitive>>(x: T): T,
cloneV(x: NonNullPrimitive[]): NonNullPrimitive[],
cloneeq(x: NonNullPrimitive[]): NonNullPrimitive[],
cloneeq<T: NonNullPrimitive[] | MultidimensionalArray<NonNullPrimitive>>(x: T): T,
cloneeqV(x: NonNullPrimitive[]): NonNullPrimitive[],
add(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
add(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
add<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
+(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
+(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
+<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
addVV(x: Vector, y: Vector): Vector,
addSV(x: Scalar, y: Vector): Vector,
addVS(x: Vector, y: Scalar): Vector,
addeq(x: Vector, y: Vector | Scalar): Vector,
addeqV(x: Vector, y: Vector): Vector,
addeqS(x: Vector, y: Scalar): Vector,
sub(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
sub(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
sub<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
-(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
-(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
-<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
subVV(x: Vector, y: Vector): Vector,
subSV(x: Scalar, y: Vector): Vector,
subVS(x: Vector, y: Scalar): Vector,
subeq(x: Vector, y: Vector | Scalar): Vector,
subeqV(x: Vector, y: Vector): Vector,
subeqS(x: Vector, y: Scalar): Vector,
mul(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
mul(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
mul<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
*(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
*(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
*<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
mulVV(x: Vector, y: Vector): Vector,
mulSV(x: Scalar, y: Vector): Vector,
mulVS(x: Vector, y: Scalar): Vector,
muleq(x: Vector, y: Vector | Scalar): Vector,
muleqV(x: Vector, y: Vector): Vector,
muleqS(x: Vector, y: Scalar): Vector,
div(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
div(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
div<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
/(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
/(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
/<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
divVV(x: Vector, y: Vector): Vector,
divSV(x: Scalar, y: Vector): Vector,
divVS(x: Vector, y: Scalar): Vector,
diveq(x: Vector, y: Vector | Scalar): Vector,
diveqV(x: Vector, y: Vector): Vector,
diveqS(x: Vector, y: Scalar): Vector,
mod(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
mod(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
mod<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
%(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
%(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
%<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
modVV(x: Vector, y: Vector): Vector,
modSV(x: Scalar, y: Vector): Vector,
modVS(x: Vector, y: Scalar): Vector,
modeq(x: Vector, y: Vector | Scalar): Vector,
modeqV(x: Vector, y: Vector): Vector,
modeqS(x: Vector, y: Scalar): Vector,
and(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
and(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
and<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
&&(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
&&(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
&&<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
andVV(x: Vector, y: Vector): Vector,
andSV(x: Scalar, y: Vector): Vector,
andVS(x: Vector, y: Scalar): Vector,
andeq(x: Vector, y: Vector | Scalar): Vector,
andeqV(x: Vector, y: Vector): Vector,
andeqS(x: Vector, y: Scalar): Vector,
or(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
or(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
or<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
||(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
||(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
||<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
orVV(x: Vector, y: Vector): Vector,
orSV(x: Scalar, y: Vector): Vector,
orVS(x: Vector, y: Scalar): Vector,
oreq(x: Vector, y: Vector | Scalar): Vector,
oreqV(x: Vector, y: Vector): Vector,
oreqS(x: Vector, y: Scalar): Vector,
eq(x: Scalar, y: Scalar): boolean,
eq(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
eq(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
===(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
===(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
===(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
eqVV(x: Vector, y: Vector): VectorBoolean,
eqSV(x: Scalar, y: Vector): VectorBoolean,
eqVS(x: Vector, y: Scalar): VectorBoolean,
eqeq(x: Vector, y: Vector | Scalar): VectorBoolean,
eqeqV(x: Vector, y: Vector): VectorBoolean,
eqeqS(x: Vector, y: Scalar): VectorBoolean,
neq(x: Scalar, y: Scalar): boolean,
neq(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
neq(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
!==(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
!==(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
!==(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
neqVV(x: Vector, y: Vector): VectorBoolean,
neqSV(x: Scalar, y: Vector): VectorBoolean,
neqVS(x: Vector, y: Scalar): VectorBoolean,
neqeq(x: Vector, y: Vector | Scalar): VectorBoolean,
neqeqV(x: Vector, y: Vector): VectorBoolean,
neqeqS(x: Vector, y: Scalar): VectorBoolean,
lt(x: Scalar, y: Scalar): boolean,
lt(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
lt(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
<(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
<(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
<(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
ltVV(x: Vector, y: Vector): VectorBoolean,
ltSV(x: Scalar, y: Vector): VectorBoolean,
ltVS(x: Vector, y: Scalar): VectorBoolean,
lteq(x: Vector, y: Vector | Scalar): VectorBoolean,
lteqV(x: Vector, y: Vector): VectorBoolean,
lteqS(x: Vector, y: Scalar): VectorBoolean,
gt(x: Scalar, y: Scalar): boolean,
gt(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
gt(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
>(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
>(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
>(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
gtVV(x: Vector, y: Vector): VectorBoolean,
gtSV(x: Scalar, y: Vector): VectorBoolean,
gtVS(x: Vector, y: Scalar): VectorBoolean,
gteq(x: Vector, y: Vector | Scalar): VectorBoolean,
gteqV(x: Vector, y: Vector): VectorBoolean,
gteqS(x: Vector, y: Scalar): VectorBoolean,
leq(x: Scalar, y: Scalar): boolean,
leq(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
leq(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
<=(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
<=(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
<=(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
leqVV(x: Vector, y: Vector): VectorBoolean,
leqSV(x: Scalar, y: Vector): VectorBoolean,
leqVS(x: Vector, y: Scalar): VectorBoolean,
leqeq(x: Vector, y: Vector | Scalar): VectorBoolean,
leqeqV(x: Vector, y: Vector): VectorBoolean,
leqeqS(x: Vector, y: Scalar): VectorBoolean,
geq(x: Scalar, y: Scalar): boolean,
geq(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
geq(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
>=(x: Scalar, y: Scalar, ...args: Scalar[]): boolean,
>=(x: Scalar | Vector, y: Scalar | Vector): VectorBoolean,
>=(
x: MultidimensionalMatrix,
y: MultidimensionalMatrix): MultidimensionalArray<boolean>,
geqVV(x: Vector, y: Vector): VectorBoolean,
geqSV(x: Scalar, y: Vector): VectorBoolean,
geqVS(x: Vector, y: Scalar): VectorBoolean,
geqeq(x: Vector, y: Vector | Scalar): VectorBoolean,
geqeqV(x: Vector, y: Vector): VectorBoolean,
geqeqS(x: Vector, y: Scalar): VectorBoolean,
band(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
band(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
band<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
&(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
&(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
&<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
bandVV(x: Vector, y: Vector): Vector,
bandSV(x: Scalar, y: Vector): Vector,
bandVS(x: Vector, y: Scalar): Vector,
bandeq(x: Vector, y: Vector | Scalar): Vector,
bandeqV(x: Vector, y: Vector): Vector,
bandeqS(x: Vector, y: Scalar): Vector,
bor(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
bor(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
bor<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
|(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
|(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
|<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
borVV(x: Vector, y: Vector): Vector,
borSV(x: Scalar, y: Vector): Vector,
borVS(x: Vector, y: Scalar): Vector,
boreq(x: Vector, y: Vector | Scalar): Vector,
boreqV(x: Vector, y: Vector): Vector,
boreqS(x: Vector, y: Scalar): Vector,
bxor(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
bxor(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
bxor<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
^(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
^(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
^<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
bxorVV(x: Vector, y: Vector): Vector,
bxorSV(x: Scalar, y: Vector): Vector,
bxorVS(x: Vector, y: Scalar): Vector,
bxoreq(x: Vector, y: Vector | Scalar): Vector,
bxoreqV(x: Vector, y: Vector): Vector,
bxoreqS(x: Vector, y: Scalar): Vector,
lshift(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
lshift(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
lshift<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
<<(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
<<(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
<<<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
lshiftVV(x: Vector, y: Vector): Vector,
lshiftSV(x: Scalar, y: Vector): Vector,
lshiftVS(x: Vector, y: Scalar): Vector,
lshifteq(x: Vector, y: Vector | Scalar): Vector,
lshifteqV(x: Vector, y: Vector): Vector,
lshifteqS(x: Vector, y: Scalar): Vector,
rshift(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
rshift(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
rshift<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
>>(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
>>(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
>><T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
rshiftVV(x: Vector, y: Vector): Vector,
rshiftSV(x: Scalar, y: Vector): Vector,
rshiftVS(x: Vector, y: Scalar): Vector,
rshifteq(x: Vector, y: Vector | Scalar): Vector,
rshifteqV(x: Vector, y: Vector): Vector,
rshifteqS(x: Vector, y: Scalar): Vector,
rrshift(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
rrshift(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
rrshift<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
>>>(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
>>>(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
>>><T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
rrshiftVV(x: Vector, y: Vector): Vector,
rrshiftSV(x: Scalar, y: Vector): Vector,
rrshiftVS(x: Vector, y: Scalar): Vector,
rrshifteq(x: Vector, y: Vector | Scalar): Vector,
rrshifteqV(x: Vector, y: Vector): Vector,
rrshifteqS(x: Vector, y: Scalar): Vector,
atan2(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
atan2(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
atan2<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<T | Scalar>): T,
atan2VV(x: Vector, y: Vector): Vector,
atan2SV(x: Scalar, y: Vector): Vector,
atan2VS(x: Vector, y: Scalar): Vector,
atan2eq(x: Vector, y: Vector | Scalar): Vector,
atan2eqV(x: Vector, y: Vector): Vector,
atan2eqS(x: Vector, y: Scalar): Vector,
pow(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
pow(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
pow<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
powVV(x: Vector, y: Vector): Vector,
powSV(x: Scalar, y: Vector): Vector,
powVS(x: Vector, y: Scalar): Vector,
poweq(x: Vector, y: Vector | Scalar): Vector,
poweqV(x: Vector, y: Vector): Vector,
poweqS(x: Vector, y: Scalar): Vector,
max(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
max(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
max<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
maxVV(x: Vector, y: Vector): Vector,
maxSV(x: Scalar, y: Vector): Vector,
maxVS(x: Vector, y: Scalar): Vector,
maxeq(x: Vector, y: Vector | Scalar): Vector,
maxeqV(x: Vector, y: Vector): Vector,
maxeqS(x: Vector, y: Scalar): Vector,
min(x: Scalar, y: Scalar, ...args: Scalar[]): Scalar,
min(
x: Scalar | Vector,
y: Scalar | Vector,
...args: Array<Scalar | Vector>): Vector,
min<T: MultidimensionalMatrix>(x: T, y: T | Scalar, ...args: Array<Scalar | T>): T,
minVV(x: Vector, y: Vector): Vector,
minSV(x: Scalar, y: Vector): Vector,
minVS(x: Vector, y: Scalar): Vector,
mineq(x: Vector, y: Vector | Scalar): Vector,
mineqV(x: Vector, y: Vector): Vector,
mineqS(x: Vector, y: Scalar): Vector,
any(x: any): boolean,
anyV(x: any[]): boolean,
all(x: any): boolean,
allV(x: any[]): boolean,
sum(x: Scalar | Vector | MultidimensionalMatrix): number,
sumV(x: Vector): number,
prod(x: Scalar | Vector | MultidimensionalMatrix): number,
prodV(x: Vector): number,
norm2Squared(x: Scalar | Vector | MultidimensionalMatrix): number,
norm2SquaredV(x: Vector): number,
norminf(x: Scalar | Vector | MultidimensionalMatrix): number,
norminfV(x: Vector): number,
norm1(x: Scalar | Vector | MultidimensionalMatrix): number,
norm1V(x: Vector): number,
sup(x: Scalar | Vector | MultidimensionalMatrix): number,
supV(x: Vector): number,
inf(x: Scalar | Vector | MultidimensionalMatrix): number,
infV(x: Vector): number,
truncVV(x: Vector, y: Vector): Vector,
truncVS(x: Vector, y: number): Vector,
truncSV(x: number, y: Vector): Vector,
trunc(x: number | Vector, y: number | Vector): Vector,
inv(x: Matrix): Matrix,
det(x: Matrix): number,
transpose(x: Matrix): Matrix,
negtranspose(x: Matrix): Matrix,
random(s: Vector): Vector | MultidimensionalMatrix,
norm2(x: Scalar | Vector | MultidimensionalMatrix): number,
linspace(from: number, to: number, numberOfValues?: number): Vector,
getBlock<T: MultidimensionalMatrix>(x: T, from: Vector, to: Vector): T,
setBlock<T: MultidimensionalMatrix>(x: T, from: Vector, to: Vector, b: T): T,
blockMatrix(x: Scalar | Vector | MultidimensionalMatrix): Matrix,
tensor(x: Scalar, y: Scalar): Scalar,
tensor(x: Vector, y: Vector): Matrix,
t(x: TensorValue, y?: TensorValue): Tensor,
house(x: Vector): Vector,
toUpperHessenberg(matrix: Matrix): {
H: Matrix,
Q: Matrix
},
QRFrancis(x: Matrix, maxiter?: number): {
Q: Matrix,
B: Matrix
},
eig(A: Matrix, maxiter?: number): {
lambda: Tensor,
E: Tensor
},
ccsSparse(matrix: Matrix): SparseMatrix,
ccsFull(matrix: SparseMatrix): Matrix,
ccsTSolve(matrix: SparseMatrix, b: Vector, x?: Vector, bj?: Vector, xj?: Vector): Vector,
ccsDot(A: SparseMatrix, B: SparseMatrix): SparseMatrix,
ccsLUP(matrix: SparseMatrix, threshold?: number): LUPP,
ccsDim(matrix: SparseMatrix): Vector,
ccsGetBlock(matrix: SparseMatrix, i?: Vector | Scalar, j?: Vector | Scalar): SparseMatrix,
ccsLUPSolve(lup: LUPP, B: SparseMatrix): Vector,
ccsScatter(matrix: SparseMatrix): SparseMatrix,
ccsGather(matrix: SparseMatrix): SparseMatrix,
ccsadd(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsadd(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsaddMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccssub(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccssub(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccssubMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsmul(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsmul(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsmulMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsdiv(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsdiv(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsdivMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsmod(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsmod(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsmodMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsand(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsand(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsandMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsor(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsor(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsorMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccseq(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccseq(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccseqMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsneq(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccsneq(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsneqMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccslt(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccslt(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsltMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsgt(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccsgt(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsgtMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsleq(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccsleq(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsleqMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsgeq(x: SparseMatrix, y: Scalar | SparseMatrix): CCSComparisonResult,
ccsgeq(x: Scalar | SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsgeqMM(x: SparseMatrix, y: SparseMatrix): CCSComparisonResult,
ccsband(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsband(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsbandMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsbor(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsbor(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsborMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsbxor(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsbxor(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsbxorMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccslshift(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccslshift(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccslshiftMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsrshift(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsrshift(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsrshiftMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsrrshift(x: SparseMatrix, y: Scalar | SparseMatrix): SparseMatrix,
ccsrrshift(x: Scalar | SparseMatrix, y: SparseMatrix): SparseMatrix,
ccsrrshiftMM(x: SparseMatrix, y: SparseMatrix): SparseMatrix,

/**
 * @deprecated
 */
sdim(matrix: any, ret?: Vector, k?: number): Vector,

/**
 * @deprecated
 */
sclone<T>(matrix: T, k?: number, n?: number): T,

/**
 * @deprecated
 */
sdiag(d: Vector): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sidentity(n: Scalar): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
stranspose(matrix: DeprecatedSparseMatrix): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sdotMM(a: DeprecatedSparseMatrix, b: DeprecatedSparseMatrix): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sdotMV(
matrix: DeprecatedSparseMatrix,
vector: DeprecatedSparseVector): DeprecatedSparseVector,

/**
 * @deprecated
 */
sdotVM(
vector: DeprecatedSparseVector,
matrix: DeprecatedSparseMatrix): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sdotVV(x: DeprecatedSparseVector, y: DeprecatedSparseVector): number,

/**
 * @deprecated
 */
sdot(
x: Scalar | DeprecatedSparseVector | DeprecatedSparseMatrix,
y: Scalar | DeprecatedSparseVector | DeprecatedSparseMatrix): Scalar | DeprecatedSparseVector | DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sscatter(matrix: DeprecatedSparseMatrix): DeprecatedSparseMatrix,

/**
 * @deprecated
 */
sgather(
matrix: DeprecatedSparseMatrix,
ret?: DeprecatedSparseVector,
k?: DeprecatedSparseVector): DeprecatedSparseMatrix,
cLU(matrix: Matrix): LU,
cLUSolve(lu: LU, b: Vector): Vector,
cgrid(n: number | [number, number], shape?: "L" | ShapeFunction): Matrix,
cdelsq(g: Matrix): Matrix,
cdotmv(matrix: Matrix, x: Vector): Vector,
spline(
x: Vector,
y: Vector | Matrix,
k1?: "periodic" | Scalar,
kn?: "periodic" | Scalar): Spline,
uncmin(
f: (x: Vector) => Scalar,
x0: Vector,
tol?: number,
gradient?: any,
maxit?: number,
callback?: (it: number, x0: Vector, f0: Scalar, g0: Vector, h1: Matrix) => any,
options?: {
Hinv: Matrix
}): {
solution: Vector,
f: Scalar,
gradient: Vector,
invHessian: Matrix,
iterations: number,
message: string
},
gradient(f: (x: Vector) => Scalar, x: Vector): Vector,
dopri(
x0: Scalar,
x1: Scalar,
y0: Scalar,
f: (x: Vector | Scalar, y: Vector | Scalar) => Vector | Scalar,
tol?: number,
maxit?: number,
event?: (x: Vector | Scalar, y: Vector | Scalar) => Vector | Scalar): Dopri,
solve(matrix: Matrix, vector: Vector): Vector,
LU(matrix: Matrix, fast?: boolean): {
LU: Matrix,
P: Vector
},
LUsolve(lup: {
LU: Matrix,
P: Vector
}, vector: Vector): Vector,
echelonize(matrix: Matrix): {
I: Matrix,
A: Matrix,
P: Vector
},
solveLP(
c: Vector,
A: Matrix,
b: Vector,
Aeq?: Matrix,
beq?: Matrix,
tol?: number,
maxit?: number): {
solution: Scalar | Vector,
message: string,
iterations: number
},
solveQP(
Dmat: Matrix,
dvec: Vector,
Amat: Matrix,
bvec: Vector,
meq?: number,
factorized?: any): {
solution: Vector,
value: Vector,
unconstrained_solution: Vector,
iterations: Vector,
iact: Vector,
message: string
},
svd(matrix: Matrix): {
U: Matrix,
S: Vector,
V: Matrix
}
} 
	declare var numeric: Numeric;
	declare module.exports: typeof numeric

    }
