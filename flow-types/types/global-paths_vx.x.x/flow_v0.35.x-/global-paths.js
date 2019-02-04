declare module 'global-paths' {
        declare module.exports: typeof globalPaths

	declare function globalPaths(cwd?: string): string[]

    }
