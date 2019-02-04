declare module 'sizzle' {
        declare var Sizzle: SizzleStatic;
	declare module.exports: typeof Sizzle

	declare interface SizzleStatic {
selectors: Sizzle$Sizzle$Selectors,
(selector: string, context: Element | Document | DocumentFragment, results: TArrayLike): TArrayLike,
(selector: string, context?: Element | Document | DocumentFragment): Element[],
compile(selector: string): Function,
matchSelector(element: Element, selector: string): boolean,
matches(selector: string, elements: Element[]): Element[]
} 
	declare interface Sizzle$Selectors {
cacheLength: number,
match: Sizzle$Selectors.Selectors$Matches,
find: Sizzle$Selectors.Selectors$FindFunctions,
preFilter: Sizzle$Selectors.Selectors$PreFilterFunctions,
filter: Sizzle$Selectors.Selectors$FilterFunctions,
attrHandle: Sizzle$Selectors.Selectors$AttrHandleFunctions,
pseudos: Sizzle$Selectors.Selectors$PseudoFunctions,
setFilters: Sizzle$Selectors.Selectors$SetFilterFunctions,
createPseudo(
fn: Sizzle$Selectors.Selectors$CreatePseudoFunction): Sizzle$Selectors.Selectors$PseudoFunction
} 

declare interface Selectors$Matches {
[name: string]: RegExp
} 

declare interface Selectors$FindFunction {
(match: RegExpMatchArray, context: Element | Document, isXML: boolean): Element[] | void
} 

declare interface Selectors$FindFunctions {
[name: string]: Selectors$FindFunction
} 

declare interface Selectors$PreFilterFunction {
(match: RegExpMatchArray): string[]
} 

declare interface Selectors$PreFilterFunctions {
[name: string]: Selectors$PreFilterFunction
} 

declare interface Selectors$FilterFunction {
(element: string, ...matches: string[]): boolean
} 

declare interface Selectors$FilterFunctions {
[name: string]: Selectors$FilterFunction
} 

declare interface Selectors$AttrHandleFunction {
(elem: any, casePreservedName: string, isXML: boolean): string
} 

declare interface Selectors$AttrHandleFunctions {
[name: string]: Selectors$AttrHandleFunction
} 

declare interface Selectors$PseudoFunction {
(elem: Element): boolean
} 

declare interface Selectors$PseudoFunctions {
[name: string]: Selectors$PseudoFunction
} 

declare interface Selectors$SetFilterFunction {
(elements: Element[], argument: number, not: boolean): Element[]
} 

declare interface Selectors$SetFilterFunctions {
[name: string]: Selectors$SetFilterFunction
} 

declare interface Selectors$CreatePseudoFunction {
(...args: any[]): Selectors$PseudoFunction
} 
    }
