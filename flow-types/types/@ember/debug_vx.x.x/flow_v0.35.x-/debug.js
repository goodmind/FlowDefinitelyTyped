declare module '@ember/debug' {
        
/**
 * Define an assertion that will throw an exception if the condition is not met.
 */
declare export function assert(desc: string, test?: boolean): void | empty

	
/**
 * Display a debug notice.
 */
declare export function debug(message: string): void

	
/**
 * Convenience method to inspect an object. This method will attempt to
 * convert the object into a useful string description.
 */
declare export function inspect(obj: any): string

	
/**
 * Allows for runtime registration of handler functions that override the default deprecation behavior.
 * Deprecations are invoked by calls to [Ember.deprecate](http://emberjs.com/api/classes/Ember.html#method_deprecate).
 * The following example demonstrates its usage by registering a handler that throws an error if the
 * message contains the word "should", otherwise defers to the default handler.
 */
declare export function registerDeprecationHandler(
handler: (
message: string,
options: {
id: string,
until: string
},
next: () => void) => void): void

	
/**
 * Allows for runtime registration of handler functions that override the default warning behavior.
 * Warnings are invoked by calls made to [Ember.warn](http://emberjs.com/api/classes/Ember.html#method_warn).
 * The following example demonstrates its usage by registering a handler that does nothing overriding Ember's
 * default warning behavior.
 */
declare export function registerWarnHandler(
handler: (message: string, options: {
id: string
}, next: () => void) => void): void

	
/**
 * Run a function meant for debugging.
 */
declare export function runInDebug(func: () => any): void

	
/**
 * Display a warning with the provided message.
 */
declare export function warn(message: string, test: boolean, options: {
id: string
}): void

	declare export function warn(message: string, options: {
id: string
}): void

	
/**
 * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
 */
declare export function warn(message: string, test: boolean, options?: {
id?: string
}): void

	
/**
 * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
 */
declare export function warn(message: string, options?: {
id?: string
}): void

    }
