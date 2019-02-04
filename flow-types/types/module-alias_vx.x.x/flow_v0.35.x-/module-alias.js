declare module 'module-alias' {
        declare module.exports: typeof init

	
/**
 * Import aliases from package.json
 */
declare function init(options?: string | init$init$Options): void

	
      declare var npm$namespace$init: {
        isPathMatchesAlias: typeof init$isPathMatchesAlias,
addPath: typeof init$addPath,
addAlias: typeof init$addAlias,
addAliases: typeof init$addAliases,
reset: typeof init$reset,
        
      }
declare function init$isPathMatchesAlias(path: string, alias: string): boolean



/**
 * Register a custom modules directory
 */
declare function init$addPath(path: string): void



/**
 * Register a single alias
 */
declare function init$addAlias(alias: string, path: string): void



/**
 * Register mutliple aliases
 */
declare function init$addAliases(aliases: {
[alias: string]: string
}): void



/**
 * Reset any changes maded (resets all registered aliases
 * and custom module directories)
 * The function is undocumented and for testing purposes only
 */
declare function init$reset(): void



/**
 * module intialis options type
 */
declare interface init$Options {
base: string
} 
    }
