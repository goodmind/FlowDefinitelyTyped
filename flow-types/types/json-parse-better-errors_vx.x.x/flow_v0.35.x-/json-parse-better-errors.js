declare module 'json-parse-better-errors' {
        declare module.exports: typeof json_parse_better_errors

	
/**
 * Converts a JavaScript Object Notation (JSON) string into an object.
 * @param text A valid JSON string.
 * @param reviver A function that transforms the results. This function is called for each member of the object.
If a member contains nested objects, the nested objects are transformed before the parent object is.
 * @param context The number of characters to display in each direction around the position of an error.
 */
declare function json_parse_better_errors(txt: string, reviver?: (key: string, value: any) => any, context?: number): any

    }
