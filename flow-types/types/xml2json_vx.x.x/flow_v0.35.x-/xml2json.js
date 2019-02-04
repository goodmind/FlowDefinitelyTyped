declare module 'xml2json' {
        declare export function toJson(xml: string, options?: {
object?: false
} & JsonOptions): string

	declare export function toJson(xml: string, options?: {
object: true
} & JsonOptions): {}

	declare export function toXml(json: {} | string, options?: XmlOptions): string

	declare export interface XmlOptions {

/**
 * Sanitizes the following characters present in element values (default false):
 * @example var chars =  {
'<': '&lt;',
'>': '&gt;',
'(': '&#40;',
')': '&#41;',
'#': '&#35;',
'&': '&amp;',
'"': '&quot;',
"'": '&apos;'
};
 * @example
 */
sanitize?: boolean
} 
	declare export interface JsonOptions {

/**
 * Returns a Javascript object instead of a JSON string.
 * Makes the JSON reversible to XML.
 * xml2json tranforms CDATA content to JSON, but it doesn't generate a reversible structure.
 */
reversible?: boolean,

/**
 * Makes type coercion.
 * i.e.: numbers and booleans present in attributes and element values are converted from string to its correspondent data types.
 * Coerce can be optionally defined as an object with specific methods of coercion based on attribute name or tag name, with fallback to default coercion.
 */
coerce?: boolean,

/**
 * Sanitizes the following characters present in element values (default true):
 * @example var chars =  {
'<': '&lt;',
'>': '&gt;',
'(': '&#40;',
')': '&#41;',
'#': '&#35;',
'&': '&amp;',
'"': '&quot;',
"'": '&apos;'
};
 * @example
 */
sanitize?: boolean,

/**
 * Removes leading and trailing whitespaces as well as line terminators in element values.
 * Defaults to true.
 */
trim?: boolean,

/**
 * XML child nodes are always treated as arrays
 */
arrayNotation?: boolean
} 
    }
