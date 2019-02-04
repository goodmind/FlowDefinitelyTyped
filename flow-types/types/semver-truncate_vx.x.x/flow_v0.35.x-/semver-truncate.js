declare module 'semver-truncate' {
        declare module.exports: typeof semverTruncate

	declare function semverTruncate(version: string, type: "patch" | "minor" | "major"): string

    }
