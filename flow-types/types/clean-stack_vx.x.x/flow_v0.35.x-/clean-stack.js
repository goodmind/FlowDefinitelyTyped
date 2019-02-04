declare module 'clean-stack' {
        declare module.exports: typeof cleanStack

	declare function cleanStack(stack: string, options?: cleanStack$cleanStack$Options): string

	declare interface cleanStack$Options {
pretty?: boolean
} 
    }
