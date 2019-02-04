declare module 'resolve-pkg' {
        declare module.exports: typeof resolvePkg

	declare function resolvePkg(moduleId: string, options?: resolvePkg$resolvePkg$Options): string

	declare interface resolvePkg$Options {
cwd?: boolean
} 
    }
