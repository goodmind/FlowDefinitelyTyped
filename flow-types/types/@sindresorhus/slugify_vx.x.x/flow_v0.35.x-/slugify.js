declare module '@sindresorhus/slugify' {
        declare interface slugify$Options {

/**
 * @default "-"
 */
separator?: string,

/**
 * Make the slug lowercase.
 * @default true
 */
lowercase?: boolean,

/**
 * Convert camelcase to separate words. Internally it does `fooBar` → `foo bar`.
 * @default true
 */
decamelize?: boolean,

/**
 * Specifying this only replaces the default if you set an item with the same key, like &.
 * The replacements are run on the original string before any other transformations.
 * 
 * Add a leading and trailing space to the replacement to have it separated by dashes.
 * @default [ ['&', ' and '], ['🦄', ' unicorn '], ['♥', ' love '] ]
 */
customReplacements?: $ReadOnlyArray<[string, string]>
} 
	
/**
 * Slugify a string
 */
declare function slugify(input: string, options?: slugify$slugify$Options): string

	declare module.exports: typeof slugify

    }
