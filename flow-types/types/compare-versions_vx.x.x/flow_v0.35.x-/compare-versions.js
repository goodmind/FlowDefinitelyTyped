declare module 'compare-versions' {
        declare function compareVersions(firstVersion: string, secondVersion: string): number

	declare module.exports: typeof compareVersions

    }
