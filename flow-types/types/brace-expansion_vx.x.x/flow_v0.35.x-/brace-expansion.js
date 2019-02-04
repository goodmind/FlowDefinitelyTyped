declare module 'brace-expansion' {
        declare module.exports: typeof expand

	declare function expand(input: string): string[]

    }
