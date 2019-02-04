declare module 'fuzzy-search' {
        declare class FuzzySearch<T: {[key: string]: any} | string>  {
haystack: T[];
keys: string[];
options: Required<FuzzySearch$FuzzySearch$Options>;
static isMatch(item: string, query: string, caseSensitive: boolean): number;
constructor(haystack: T[], keys?: string[], options?: FuzzySearch$FuzzySearch$Options): this;
search(needle?: string): T[]
}
	declare interface FuzzySearch$Options {
caseSensitive?: boolean,
sort?: boolean
} 
	declare module.exports: typeof FuzzySearch

    }
