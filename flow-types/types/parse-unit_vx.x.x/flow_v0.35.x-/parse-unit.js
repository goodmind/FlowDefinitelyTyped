declare module 'parse-unit' {
        declare function parse(value: string): [number, string]

	declare module.exports: typeof parse

    }
