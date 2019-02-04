declare module 'anymatch' {
        declare module.exports: typeof anymatch

	declare function anymatch(matcher: anymatch$anymatch$Matcher): CurrriedMatcher

	declare function anymatch(
matcher: anymatch$anymatch$Matcher,
testString: string | string[],
returnIndex: true,
startIndex?: number,
endIndex?: number): number

	declare function anymatch(
matcher: anymatch$anymatch$Matcher,
testString: string | string[],
returnIndex?: boolean,
startIndex?: number,
endIndex?: number): boolean

	declare type anymatch$Matcher = anymatch$MatcherType | anymatch$MatcherType[];

declare type anymatch$MatcherType = string | RegExp | ((...testStrings: string[]) => boolean);
	declare interface CurrriedMatcher {
(testString: string | string[], returnIndex: true, startIndex?: number, endIndex?: number): number,
(testString: string | string[], returnIndex?: boolean, startIndex?: number, endIndex?: number): boolean
} 
    }
