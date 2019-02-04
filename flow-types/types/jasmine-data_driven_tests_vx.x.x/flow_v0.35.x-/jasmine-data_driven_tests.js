declare module 'jasmine-data_driven_tests' {
        declare var all: JasmineDataDrivenTest;
	declare var xall: JasmineDataDrivenTest;
	declare interface JasmineDataDrivenTest {
(description: string, dataset: Array<[T, U, V, W, X, Y, Z]>, assertion: (
arg0: T,
arg1: U,
arg2: V,
arg3: W,
arg4: X,
arg5: Y,
arg6: Z,
done: () => void) => void): void,
(description: string, dataset: Array<[T, U, V, W, X, Y]>, assertion: (arg0: T, arg1: U, arg2: V, arg3: W, arg4: X, arg5: Y, done: () => void) => void): void,
(description: string, dataset: Array<[T, U, V, W, X]>, assertion: (arg0: T, arg1: U, arg2: V, arg3: W, arg4: X, done: () => void) => void): void,
(description: string, dataset: Array<[T, U, V, W]>, assertion: (arg0: T, arg1: U, arg2: V, arg3: W, done: () => void) => void): void,
(description: string, dataset: Array<[T, U, V]>, assertion: (arg0: T, arg1: U, arg2: V, done: () => void) => void): void,
(description: string, dataset: Array<[T, U]>, assertion: (arg0: T, arg1: U, done: () => void) => void): void,
(description: string, dataset: T[], assertion: (value: T, done: () => void) => void): void
} 
    }
