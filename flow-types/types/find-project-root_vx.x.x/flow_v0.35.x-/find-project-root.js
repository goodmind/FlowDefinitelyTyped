declare module 'find-project-root' {
        
/**
 * Finds the project root by custom markers
 */
declare function findProjectRoot(path: string, options?: findProjectRoot$findProjectRoot$Options): null | string

	declare interface findProjectRoot$Options {

/**
 * total number of levels the algorithm can traverse
 */
maxDepth?: number,

/**
 * markers that it will search for
 */
markers?: string[]
} 
	declare module.exports: typeof findProjectRoot

    }
