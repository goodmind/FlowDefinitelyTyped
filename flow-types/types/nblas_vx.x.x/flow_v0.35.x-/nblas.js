declare module 'nblas' {
        declare export  class TRANS {
  constructor(...args: empty): mixed;
static +NoTrans: Class<TRANS__NoTrans> & TRANS__NoTrans & 111;// 111
static +Trans: Class<TRANS__Trans> & TRANS__Trans & 112;// 112
static +ConjTrans: Class<TRANS__ConjTrans> & TRANS__ConjTrans & 113;// 113

}

declare class TRANS__NoTrans mixins TRANS {}
declare class TRANS__Trans mixins TRANS {}
declare class TRANS__ConjTrans mixins TRANS {}

	declare export  class UPLO {
  constructor(...args: empty): mixed;
static +Upper: Class<UPLO__Upper> & UPLO__Upper & 121;// 121
static +Lower: Class<UPLO__Lower> & UPLO__Lower & 122;// 122

}

declare class UPLO__Upper mixins UPLO {}
declare class UPLO__Lower mixins UPLO {}

	declare export  class DIAG {
  constructor(...args: empty): mixed;
static +NonUnit: Class<DIAG__NonUnit> & DIAG__NonUnit & 131;// 131
static +Unit: Class<DIAG__Unit> & DIAG__Unit & 132;// 132

}

declare class DIAG__NonUnit mixins DIAG {}
declare class DIAG__Unit mixins DIAG {}

	declare export  class SIDE {
  constructor(...args: empty): mixed;
static +Left: Class<SIDE__Left> & SIDE__Left & 141;// 141
static +Right: Class<SIDE__Right> & SIDE__Right & 142;// 142

}

declare class SIDE__Left mixins SIDE {}
declare class SIDE__Right mixins SIDE {}

	declare export var NoTrans: TRANS.NoTrans;
	declare export var Trans: TRANS.Trans;
	declare export var ConjTrans: TRANS.ConjTrans;
	declare export var Upper: UPLO.Upper;
	declare export var Lower: UPLO.Lower;
	declare export var NonUnit: DIAG.NonUnit;
	declare export var Unit: DIAG.Unit;
	declare export var Left: SIDE.Left;
	declare export var Right: SIDE.Right;
	declare export function asum(x: Float32Array | Float64Array): number

	declare export function axpy(x: Float32Array, y: Float32Array, alpha?: number): void

	declare export function axpy(x: Float64Array, y: Float64Array, alpha?: number): void

	declare export function copy(x: Float32Array, y: Float32Array): void

	declare export function copy(x: Float64Array, y: Float64Array): void

	declare export function dot(x: Float32Array, y: Float32Array): number

	declare export function dot(x: Float64Array, y: Float64Array): number

	declare export function nrm2(x: Float32Array | Float64Array): number

	declare export function rot(x: Float32Array, y: Float32Array, c: number, s: number): void

	declare export function rot(x: Float64Array, y: Float64Array, c: number, s: number): void

	declare export function rotg(x: Float32Array, y: Float32Array, c: Float32Array, s: Float32Array): void

	declare export function rotg(x: Float64Array, y: Float64Array, c: Float64Array, s: Float64Array): void

	declare export function rotm(x: Float32Array, y: Float32Array, param: Float32Array): void

	declare export function rotm(x: Float64Array, y: Float64Array, param: Float64Array): void

	declare export function rotmg(
d1: Float32Array,
d2: Float32Array,
x1: Float32Array,
y1: number,
param: Float32Array): void

	declare export function rotmg(
d1: Float64Array,
d2: Float64Array,
x1: Float64Array,
y1: number,
param: Float64Array): void

	declare export function scal(x: Float32Array | Float64Array, alpha: number): void

	declare export function swap(x: Float32Array, y: Float32Array): void

	declare export function swap(x: Float64Array, y: Float64Array): void

	declare export function iamax(x: Float32Array | Float64Array): number

	declare export function gbmv(
a: Float32Array,
x: Float32Array,
y: Float32Array,
kl?: number,
ku?: number,
alpha?: number,
beta?: number,
trans?: TRANS): void

	declare export function gbmv(
a: Float64Array,
x: Float64Array,
y: Float64Array,
kl?: number,
ku?: number,
alpha?: number,
beta?: number,
trans?: TRANS): void

	declare export function gemv(
a: Float32Array,
x: Float32Array,
y: Float32Array,
alpha?: number,
beta?: number,
trans?: TRANS): void

	declare export function gemv(
a: Float64Array,
x: Float64Array,
y: Float64Array,
alpha?: number,
beta?: number,
trans?: TRANS): void

	declare export function ger(a: Float32Array, x: Float32Array, y: Float32Array, alpha?: number): void

	declare export function ger(a: Float64Array, x: Float64Array, y: Float64Array, alpha?: number): void

	declare export function sbmv(
a: Float32Array,
x: Float32Array,
y: Float32Array,
k?: number,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function sbmv(
a: Float64Array,
x: Float64Array,
y: Float64Array,
k?: number,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function spmv(
ap: Float32Array,
x: Float32Array,
y: Float32Array,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function spmv(
ap: Float64Array,
x: Float64Array,
y: Float64Array,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function spr(ap: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void

	declare export function spr(ap: Float64Array, x: Float64Array, uplo?: UPLO, alpha?: number): void

	declare export function spr2(
ap: Float32Array,
x: Float32Array,
y: Float32Array,
uplo?: UPLO,
alpha?: number): void

	declare export function spr2(
ap: Float64Array,
x: Float64Array,
y: Float64Array,
uplo?: UPLO,
alpha?: number): void

	declare export function symv(
a: Float32Array,
x: Float32Array,
y: Float32Array,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function symv(
a: Float64Array,
x: Float64Array,
y: Float64Array,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function syr(a: Float32Array, x: Float32Array, uplo?: UPLO, alpha?: number): void

	declare export function syr(a: Float64Array, x: Float64Array, uplo?: UPLO, alpha?: number): void

	declare export function syr2(
a: Float32Array,
x: Float32Array,
y: Float32Array,
uplo?: UPLO,
alpha?: number): void

	declare export function syr2(
a: Float64Array,
x: Float64Array,
y: Float64Array,
uplo?: UPLO,
alpha?: number): void

	declare export function tbmv(
a: Float32Array,
x: Float32Array,
y: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tbmv(
a: Float64Array,
x: Float64Array,
y: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tbsv(
a: Float32Array,
x: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tbsv(
a: Float64Array,
x: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tpmv(
ap: Float32Array,
x: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tpmv(
ap: Float64Array,
x: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tpsv(
ap: Float32Array,
x: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function tpsv(
ap: Float64Array,
x: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function trmv(
a: Float32Array,
x: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function trmv(
a: Float64Array,
x: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function trsv(
a: Float32Array,
x: Float32Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function trsv(
a: Float64Array,
x: Float64Array,
uplo?: UPLO,
trans?: TRANS,
diag?: DIAG): void

	declare export function gemm(
a: Float32Array,
b: Float32Array,
c: Float32Array,
m: number,
n: number,
k: number,
transa?: TRANS,
transb?: TRANS,
alpha?: number,
beta?: number): void

	declare export function gemm(
a: Float64Array,
b: Float64Array,
c: Float64Array,
m: number,
n: number,
k: number,
transa?: TRANS,
transb?: TRANS,
alpha?: number,
beta?: number): void

	declare export function symm(
a: Float32Array,
b: Float32Array,
c: Float32Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function symm(
a: Float64Array,
b: Float64Array,
c: Float64Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
alpha?: number,
beta?: number): void

	declare export function syrk(
a: Float32Array,
c: Float32Array,
n: number,
k: number,
uplo?: UPLO,
trans?: TRANS,
alpha?: number,
beta?: number): void

	declare export function syrk(
a: Float64Array,
c: Float64Array,
n: number,
k: number,
uplo?: UPLO,
trans?: TRANS,
alpha?: number,
beta?: number): void

	declare export function syr2k(
a: Float32Array,
b: Float32Array,
c: Float32Array,
n: number,
k: number,
uplo?: UPLO,
trans?: TRANS,
alpha?: number,
beta?: number): void

	declare export function syr2k(
a: Float64Array,
b: Float64Array,
c: Float64Array,
n: number,
k: number,
uplo?: UPLO,
trans?: TRANS,
alpha?: number,
beta?: number): void

	declare export function trmm(
a: Float32Array,
b: Float32Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
transa?: TRANS,
diag?: DIAG,
alpha?: number): void

	declare export function trmm(
a: Float64Array,
b: Float64Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
transa?: TRANS,
diag?: DIAG,
alpha?: number): void

	declare export function trsm(
a: Float32Array,
b: Float32Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
transa?: TRANS,
diag?: DIAG,
alpha?: number): void

	declare export function trsm(
a: Float64Array,
b: Float64Array,
m: number,
n: number,
side: SIDE,
uplo?: UPLO,
transa?: TRANS,
diag?: DIAG,
alpha?: number): void

    }
