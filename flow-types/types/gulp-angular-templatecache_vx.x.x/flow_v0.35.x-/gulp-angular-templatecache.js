declare module 'gulp-angular-templatecache' {
        declare function templatecache(): NodeJS.ReadWriteStream

	declare function templatecache(filename: string): NodeJS.ReadWriteStream

	declare function templatecache(options: templatecache$templatecache$Options): NodeJS.ReadWriteStream

	declare function templatecache(
filename: string,
options: templatecache$templatecache$Options): NodeJS.ReadWriteStream

	declare interface templatecache$Options {

/**
 * Name to use when concatenating.
 */
filename?: string,

/**
 * Prefix for template URLs.
 */
root?: string,

/**
 * Name of AngularJS module.
 */
module?: string,

/**
 * Create a new AngularJS module, instead of using an existing.
 */
standalone?: boolean,

/**
 * Override file base path.
 */
base?: string | Function,

/**
 * Wrap the templateCache in a module system. Currently supported systems: RequireJS, Browserify, ES6 and IIFE (Immediately-Invoked Function Expression).
 */
moduleSystem?: string,

/**
 * Transform the generated URL before it's put into $templateCache.
 */
transformUrl?: Function,

/**
 * Override template header.
 */
templateHeader?: string,

/**
 * Override template body.
 */
templateBody?: string,

/**
 * Override template footer.
 */
templateFooter?: string
} 
	declare module.exports: typeof templatecache

    }
