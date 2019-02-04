declare module 'subsume' {
        declare module.exports: typeof Subsume

	declare class Subsume  {
static parse(text: string, id: string): Subsume$Subsume$ParseResult;
static parseAll(text: string, ids?: string[]): Subsume$Subsume$ParseResults;
id: string;
prefix: string;
postfix: string;
regex: RegExp;
constructor(id?: string): this;
compose(text: string): string;
parse(text: string): Subsume$Subsume$ParseResult
}
	declare interface Subsume$ParseResult {
data?: string,
rest: string
} 

declare interface Subsume$ParseResults {
data: Map<string, string>,
rest: string
} 
    }
