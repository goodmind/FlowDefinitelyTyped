declare module 'mozilla-readability' {
        declare module.exports: typeof Readability

	declare class Readability  {
constructor(doc: Document, options?: Readability$Readability$Options): this;
parse(): Readability$Readability$ParseResult;
isProbablyReaderable(helperIsVisible?: (node: any) => boolean): boolean
}
	declare interface Readability$Options {
debug?: boolean,
maxElemsToParse?: number,
nbTopCandidates?: number,
wordThreshold?: number,
classesToPreserve?: string[]
} 

declare interface Readability$ParseResult {
title: string,
byline: string,
dir: string,
content: string,
textContent: string,
length: number,
excerpt: string
} 
    }
