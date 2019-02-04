declare module 'prettyjson' {
        
/**
 * Defines prettyjson version
 */
declare export var version: string;
	
/**
 * Render pretty json.
 * @param {any} data Data to prettify.
 * @param {IOptions} options Hash with different options to configure the renderer.
 * @param {number} indentation Indentation size.
 * @return {string} pretty serialized json data ready to display.
 */
declare export function render(data: any, options?: RendererOptions, indentation?: number): string

	
/**
 * Render pretty json from a string.
 * @param {string} data Serialized JSON data to prettify.
 * @param {IOptions} options Hash with different options to configure the renderer.
 * @param {number} indentation Indentation size.
 * @return {string} pretty serialized json data ready to display.
 */
declare export function renderString(data: string, options?: RendererOptions, indentation?: number): string

	declare export interface RendererOptions {

/**
 * Define behavior for Array objects
 */
emptyArrayMsg?: string,
inlineArrays?: boolean,

/**
 * Color definition
 */
noColor?: boolean,
keysColor?: string,
dashColor?: string,
numberColor?: string,
stringColor?: string,
defaultIndentation?: number
} 
    }
