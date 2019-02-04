declare module 'caller' {
        declare function caller(depth?: number): string

	declare module.exports: typeof caller

    }
