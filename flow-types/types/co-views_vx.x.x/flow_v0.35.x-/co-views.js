declare module 'co-views' {
        declare interface CoViews$Options {

/**
 * default extname
 */
ext?: string,

/**
 * default extname
 */
default?: string,

/**
 * engine map
 */
map?: Object,

/**
 * proxy partials
 */
partials?: Object,

/**
 * cache compiled templates
 */
cache?: boolean,

/**
 * common locals data
 */
locals?: Object
} 
	
/**
 * Pass views `dir` and `opts` to return a render function.
 */
declare function CoViews(
dir?: string,
opts?: CoViews$CoViews$Options): (view: string, locals?: Object) => any

	declare module.exports: typeof CoViews

    }
