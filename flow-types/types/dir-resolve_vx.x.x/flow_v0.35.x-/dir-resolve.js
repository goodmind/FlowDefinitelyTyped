declare module 'dir-resolve' {
        declare function resolve(path: string): string

	declare module.exports: typeof resolve

    }
