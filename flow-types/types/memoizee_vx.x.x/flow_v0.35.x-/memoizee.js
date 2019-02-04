declare module 'memoizee' {
        declare interface memoizee$Options {
length?: number | false,
maxAge?: number,
max?: number,
preFetch?: number | true,
promise?: boolean,
dispose(value: any): void,
async?: boolean,
primitive?: boolean,
normalizer(value: any): void,
resolvers?: Array<(arg: any) => any>
} 

declare interface memoizee$Memoized<F> {
delete: F,
clear: F & (() => void)
} 
	declare function memoizee<F: Function>(
f: F,
options?: memoizee$memoizee$Options): F & memoizee$memoizee$Memoized<F>

	declare module.exports: typeof memoizee

    }
