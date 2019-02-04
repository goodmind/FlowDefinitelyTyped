declare module 'named-regexp-groups' {
        declare type NamedRegExpExecArray = {
groups: {
[propName: string]: string
}
} & RegExpExecArray

	declare class NamedRegExp  {
constructor(pattern?: string | RegExp, flags?: string): this;

/**
 * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
 * @param string The String object or string literal on which to perform the search.
 */
exec(string: string): NamedRegExpExecArray | null;

/**
 * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
 * @param string String on which to perform the search.
 */
test(string: string): boolean;
toString(): string;
undefined(
str: string,
replacement: string | ((match: string, ...capturedGroups: string[]) => string)): string;
undefined(str: string): NamedRegExpExecArray;
undefined(str: string): string[];
undefined(str: string): number
}
	declare module.exports: typeof NamedRegExp

    }
