declare module 'latest-semver' {
        declare module.exports: typeof latestSemver

	declare function latestSemver(versions: string[]): string | void

    }
