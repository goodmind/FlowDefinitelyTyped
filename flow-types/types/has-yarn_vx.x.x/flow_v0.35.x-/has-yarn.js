declare module 'has-yarn' {
        declare module.exports: typeof hasYarn

	declare function hasYarn(cwd?: string): boolean

    }
