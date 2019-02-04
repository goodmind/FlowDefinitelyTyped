declare module 'wcwidth' {
        declare function wcwidth(input: string): number

	declare module.exports: typeof wcwidth

    }
