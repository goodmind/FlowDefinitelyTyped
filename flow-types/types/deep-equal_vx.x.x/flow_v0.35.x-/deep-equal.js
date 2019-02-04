declare module 'deep-equal' {
        declare interface DeepEqualOptions {
strict: boolean
} 
	declare function deepEqual(actual: any, expected: any, opts?: DeepEqualOptions): boolean

	declare module.exports: typeof deepEqual

    }
