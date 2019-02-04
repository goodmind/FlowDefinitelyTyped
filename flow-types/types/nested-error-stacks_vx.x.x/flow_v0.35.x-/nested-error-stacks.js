declare module 'nested-error-stacks' {
        declare class NestedError mixins Error {
constructor(message?: any, nested?: Error): this
}
	declare module.exports: typeof NestedError

    }
