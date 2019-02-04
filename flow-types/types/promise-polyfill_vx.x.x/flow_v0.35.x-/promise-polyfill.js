declare module 'promise-polyfill' {
        declare export type PromisePolyfillConstructor = {
_immediateFn?: (handler: (() => void) | string) => void
} & PromiseConstructor

	declare var Promise: PromisePolyfillConstructor;
	declare export default typeof Promise

    }
