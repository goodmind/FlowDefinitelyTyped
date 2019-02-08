declare module 'util' {
        declare var promisify: {
(fn: (...args: any[]) => void): (...args: any[]) => Promise<any>,
custom: Symbol
};
    }

      declare var npm$namespace$promisify: {
        getPolyfill: typeof promisify$getPolyfill,
shim: typeof promisify$shim,
        custom: typeof promisify$custom,
customPromisifyArgs: typeof promisify$customPromisifyArgs,
implementation: typeof promisify$implementation,
      }
declare interface promisify$implementation {
(fn: (...args: any[]) => void): (...args: any[]) => Promise<any>,
custom: Symbol,
customPromisifyArgs: Symbol | void
} 

declare var promisify$custom: Symbol;

declare var promisify$customPromisifyArgs: Symbol;

declare function promisify$getPolyfill(): promisify$implementation


declare var promisify$implementation: promisify$implementation;

declare function promisify$shim(): promisify$implementation
declare module 'util.promisify' {
        declare export default typeof promisify

	declare function promisify(f: (...args: any[]) => void): (...args: any[]) => Promise<any>

	declare module 'util' {
        declare var promisify: {
(fn: (...args: any[]) => void): (...args: any[]) => Promise<any>,
promisify$custom: Symbol
};
    }

    }
