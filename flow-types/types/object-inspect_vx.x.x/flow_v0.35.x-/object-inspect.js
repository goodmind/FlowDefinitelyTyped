declare module 'object-inspect' {
        
/**
 * Inspection options
 */
declare interface objectInspect$Options {

/**
 * Maximum depth of the inspection. Default: `5`.
 */
depth?: number
} 
	
/**
 * Return a string `s` with the string representation of `obj` up to a depth of `opts.depth`.
 * @param obj Object to inspect
 * @param opts Inspection options. Default: `{}`.
 * @return String representation of `obj`
 */
declare function objectInspect(obj: any, opts?: objectInspect$objectInspect$Options): string

	declare module.exports: typeof objectInspect

    }
