declare module 'semver-diff' {
        declare type SemverDiff$SemverDiffReturn = "major"
| "minor"
| "patch"
| "prerelease"
| "build"
| null;
	declare function SemverDiff(versionA: string, versionB: string): SemverDiff$SemverDiff$SemverDiffReturn

	declare module.exports: typeof SemverDiff

    }
