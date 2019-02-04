declare module 'npm-paths' {
        declare module.exports: typeof npmPaths

	declare function npmPaths(cwd?: string | {
cwd: string
}): string[]

    }
