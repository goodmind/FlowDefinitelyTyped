declare module 'promise.prototype.finally' {
        declare module 'global' {
        declare interface Promise<T> {
finally<U>(onFinally?: () => U | PromiseLike<U>): Promise<T>
} 
    }

	declare module.exports: typeof promiseFinally

	declare function promiseFinally<T, U>(promise: Promise<T>, onFinally?: () => U | PromiseLike<U>): Promise<T>

	
      declare var npm$namespace$promiseFinally: {
        shim: typeof promiseFinally$shim,
        
      }
declare function promiseFinally$shim(): void

    }
