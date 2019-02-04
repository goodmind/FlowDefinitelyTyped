declare module 'find-versions' {
        declare function findVersions(version: string, options?: {
loose: boolean
}): string[]

	declare module.exports: typeof findVersions

    }
