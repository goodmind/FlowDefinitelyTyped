declare module 'util-deprecate' {
        declare module.exports: typeof deprecate

	declare function deprecate<T: Function>(fn: T, message: string): T

    }
