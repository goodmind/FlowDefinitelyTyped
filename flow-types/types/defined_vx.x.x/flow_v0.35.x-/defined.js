declare module 'defined' {
        declare module.exports: typeof defined

	declare function defined<T>(...args: T[]): T

	declare function defined(...args: any[]): any

    }
