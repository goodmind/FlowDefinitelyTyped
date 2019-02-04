declare module 'mark.js' {
        declare type Mark$MarkAccuracy = "partially" | "complementary" | "exactly";

declare interface Mark$MarkOptions {
element?: string,
className?: string,
exclude?: string[],
separateWordSearch?: boolean,
accuracy?: Mark$MarkAccuracy | {
value: Mark$MarkAccuracy
},
diacritics?: boolean,
synonyms?: {
[index: string]: string
},
iframes?: boolean,
iframesTimeout?: number,
acrossElements?: boolean,
caseSensitive?: boolean,
ignoreJoiners?: boolean,
ignorePunctuation?: string[],
wildcards?: "disabled" | "enabled" | "withSpaces",
each(element: Element): void,
filter(
textNode: Element,
term: string,
marksSoFar: number,
marksTotal: number): boolean,
noMatch(term: string): void,
done(marksTotal: number): void,
debug?: boolean,
log?: {[key: string]: any}
} 

declare interface Mark$MarkRegExpOptions {
element?: string,
className?: string,
exclude?: string[],
iframes?: boolean,
iframesTimeout?: number,
acrossElements?: boolean,
ignoreGroups?: number,
each(element: Element): void,
filter(
textNode: Element,
term: string,
marksSoFar: number,
marksTotal: number): boolean,
noMatch(term: string): void,
done(marksTotal: number): void,
debug?: boolean,
log?: {[key: string]: any}
} 

declare interface Mark$UnmarkOptions {
element?: string,
className?: string,
exclude?: string[],
iframes?: boolean,
iframesTimeout?: number,
done(marksTotal: number): void,
debug?: boolean,
log?: {[key: string]: any}
} 

declare interface Mark$Range {
start: number,
length: number
} 
	declare class Mark  {
constructor(context: string | HTMLElement | $ReadOnlyArray<HTMLElement> | NodeList): this;

/**
 * highlight custom search terms.
 * @param keyword The keyword to be marked. Can also be an array with multiple keywords.
Note that keywords will be escaped. If you need to mark unescaped keywords (e.g. containing a pattern),
have a look at the `markRegExp()`
 * @param options Optional options
 */
mark(
keyword: string | $ReadOnlyArray<string>,
options?: Mark$Mark$MarkOptions): void;

/**
 * highlight custom regular expressions.
 * @param regexp The regular expression to be marked. Example: /Lor[^]?m/gmi.
Note that groups will be ignored and mark.js will always find all matches, regardless of the g flag.
 * @param options Optional options
 */
markRegExp(regexp: RegExp, options?: Mark$Mark$MarkRegExpOptions): void;

/**
 * A method to mark ranges with a start position and length. They will be applied
 * to text nodes in the specified context.
 * @param ranges An array of objects with a start and length property.
Note that the start positions must be specified including whitespace characters.
 * @param options Optional options
 */
markRanges(ranges: $ReadOnlyArray<Mark$Mark$Range>, options?: Mark$Mark$MarkOptions): void;

/**
 * A method to remove highlights created by mark.js.
 * @param options Optional options
 */
unmark(options?: Mark$Mark$MarkOptions): void
}
	declare module.exports: typeof Mark

	declare module 'global' {
        declare interface JQuery {
mark(term: string | $ReadOnlyArray<string>, options?: Mark$Mark$MarkOptions): void,
unmark(options?: Mark$Mark$UnmarkOptions): void
} 
	declare interface JQueryStatic {
mark(term: string | $ReadOnlyArray<string>, options?: Mark$Mark$MarkOptions): void,
unmark(options?: Mark$Mark$UnmarkOptions): void
} 
    }

    }
