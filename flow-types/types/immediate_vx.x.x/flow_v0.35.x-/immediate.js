declare module 'immediate' {
        declare module.exports: typeof immediate

	declare function immediate<TArgs: any[]>(task: (...args: TArgs) => void, ...args: TArgs): void

    }
