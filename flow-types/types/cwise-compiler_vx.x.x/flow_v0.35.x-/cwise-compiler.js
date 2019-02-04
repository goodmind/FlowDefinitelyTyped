declare module 'cwise-compiler' {
        import type {
          CompiledRoutine
        } from 'cwise-parser';

	import typeof * as ndarray from 'ndarray';

	declare interface cwise_compiler$BlockIndice {
blockIndices: number
} 

declare interface cwise_compiler$OffsetArg {
offset: number[],
array: number
} 

declare type cwise_compiler$ArgType = "array"
| "offset"
| "shape"
| "scalar"
| "index"
| cwise_compiler$BlockIndice
| cwise_compiler$OffsetArg;

declare interface cwise_compiler$UserArgs {
args: cwise_compiler$ArgType[],
pre: CompiledRoutine,
body: CompiledRoutine,
post: CompiledRoutine,
debug: boolean,
funcName: string,
blockSize: number,
printCode?: boolean
} 

declare interface cwise_compiler$Procedure {
argTypes: cwise_compiler$ArgType[],
shimArgs: string[],
arrayArgs: number[],
arrayBlockIndices: number[],
scalarArgs: number[],
offsetArgs: cwise_compiler$OffsetArg[],
offsetArgIndex: number[],
indexArgs: number[],
shapeArgs: number[],
funcName: string,
pre: CompiledRoutine,
body: CompiledRoutine,
post: CompiledRoutine,
debug: boolean,
blockSize?: number
} 
	declare function cwise_compiler(
user_args: cwise_compiler$cwise_compiler$UserArgs): (a: ndarray, b: ndarray, ...args: ndarray[]) => ndarray

	declare module.exports: typeof cwise_compiler

    }
