declare module 'to-semver' {
        declare module.exports: typeof toSemver

	
/**
 * Get an array of valid, sorted, and cleaned [semver](http://semver.org/) versions from an array of strings.
 */
declare function toSemver(versions: string[], options?: toSemver$toSemver$Options): string[]

	declare interface toSemver$Options {

/**
 * Include prereleases, like `1.2.3-alpha.3`.
 * @default true
 */
includePrereleases?: boolean,

/**
 * Clean versions. For example `v1.3.0` → `1.3.0`.
 * @default true
 */
clean?: boolean
} 
    }
