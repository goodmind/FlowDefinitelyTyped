declare module 'generate-changelog' {
        declare export interface Options {

/**
 * exclude listed commit types (e.g. `['chore', 'style', 'refactor']`)
 */
exclude?: string[],

/**
 * whether it should be a patch changelog
 */
patch?: boolean,

/**
 * whether it should be a minor changelog
 */
minor?: boolean,

/**
 * whether it should be a major changelog
 */
major?: boolean,

/**
 * repo URL that will be used when linking commits
 */
repoUrl?: string,

/**
 * generate from specific tag or range (e.g. `v1.2.3` or `v1.2.3..v1.2.4`)'
 */
tag?: string
} 
	declare export function generate(options: Options): Promise<string>

    }
