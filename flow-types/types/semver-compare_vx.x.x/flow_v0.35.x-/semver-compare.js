declare module 'semver-compare' {
        declare function semverCompare<T>(a: T, b: T): number

	declare module.exports: typeof semverCompare

    }
