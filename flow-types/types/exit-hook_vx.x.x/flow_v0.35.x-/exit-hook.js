declare module 'exit-hook' {
        declare module.exports: typeof exitHook

	declare function exitHook(cb: () => void): void

    }
