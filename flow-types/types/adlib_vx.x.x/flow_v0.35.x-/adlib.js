declare module 'adlib' {
        
/**
 * Transform function to apply to interpolated value.
 * @param key Path within a handlebar-style expression to attempt to replace; e.g., `s.animal.type` in
https://github.com/Esri/adlib#transforms
 * @param value Value to replace expression with
 * @param settings Hash providing values to insert into template; see https://github.com/Esri/adlib#general-pattern
 * @param param Parameter for transform function; e.g., the `optional` transform accepts a count of levels
to delete if the value is not found (default is 0--just the current level);
see https://github.com/Esri/adlib#optional-transform
 */
declare export interface TransformFunction {
(key: string, value: any, settings: any, param?: any): any
} 
	
/**
 * Set of transformation functions keyed by the transform function's name.
 */
declare export interface TransformsList {
[transformFnName: string]: TransformFunction
} 
	
/**
 * A JavaScript library for interpolating property values in JSON Objects.
 * @param template A template that possibly containing handlebar-style property values to replace;
see https://github.com/Esri/adlib#general-pattern
 * @param settings Hash providing values to insert into template; see https://github.com/Esri/adlib#general-pattern
 * @param transforms Set of transformation functions
 * @return Copy of template with replacements performed
 */
declare export function adlib(template: any, settings: any, transforms?: TransformsList): any

	
/**
 * Reads a template and spits out unique handlebar-style property values.
 * @param template A template that possibly containing handlebar-style property values to replace;
see https://github.com/Esri/adlib#general-pattern
 * @return List of unique property values in template
 */
declare export function listDependencies(template: any): string[]

    }
