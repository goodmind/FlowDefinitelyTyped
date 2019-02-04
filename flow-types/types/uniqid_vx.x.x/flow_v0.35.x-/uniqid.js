declare module 'uniqid' {
        declare function f(prefix?: string): string

	declare var x: typeof f & {
process: typeof f
} & {
time: typeof f
};
	declare module.exports: typeof x

    }
