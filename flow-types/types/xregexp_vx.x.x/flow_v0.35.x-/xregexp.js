declare module 'xregexp' {
        declare function OuterXRegExp(pattern: string, flags?: string): RegExp

	declare function OuterXRegExp(pattern: RegExp): RegExp

	
      declare var npm$namespace$OuterXRegExp: {
        XRegExp: typeof OuterXRegExp$XRegExp,
addToken: typeof OuterXRegExp$addToken,
build: typeof OuterXRegExp$build,
cache: typeof OuterXRegExp$cache,
escape: typeof OuterXRegExp$escape,
exec: typeof OuterXRegExp$exec,
forEach: typeof OuterXRegExp$forEach,
globalize: typeof OuterXRegExp$globalize,
install: typeof OuterXRegExp$install,
isInstalled: typeof OuterXRegExp$isInstalled,
isRegExp: typeof OuterXRegExp$isRegExp,
match: typeof OuterXRegExp$match,
matchChain: typeof OuterXRegExp$matchChain,
matchRecursive: typeof OuterXRegExp$matchRecursive,
replace: typeof OuterXRegExp$replace,
replaceEach: typeof OuterXRegExp$replaceEach,
split: typeof OuterXRegExp$split,
test: typeof OuterXRegExp$test,
uninstall: typeof OuterXRegExp$uninstall,
union: typeof OuterXRegExp$union,
        version: typeof OuterXRegExp$version,
      }
declare interface OuterXRegExp$TokenOpts {
scope?: string,
trigger?: () => boolean,
customFlags?: string
} 

declare function OuterXRegExp$XRegExp(pattern: string, flags?: string): RegExp


declare function OuterXRegExp$XRegExp(pattern: RegExp): RegExp


declare function OuterXRegExp$addToken(
regex: RegExp,
handler: (matchArr: RegExpExecArray, scope: string) => string,
options?: OuterXRegExp$TokenOpts): void


declare function OuterXRegExp$build(pattern: string, subs: string[], flags?: string): RegExp


declare function OuterXRegExp$cache(pattern: string, flags?: string): RegExp


declare function OuterXRegExp$escape(str: string): string


declare function OuterXRegExp$exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray


declare function OuterXRegExp$forEach(
str: string,
regex: RegExp,
callback: (
matchArr: RegExpExecArray,
index: number,
input: string,
regexp: RegExp) => void): any


declare function OuterXRegExp$globalize(regex: RegExp): RegExp


declare function OuterXRegExp$install(options: string): void


declare function OuterXRegExp$install(options: Object): void


declare function OuterXRegExp$isInstalled(feature: string): boolean


declare function OuterXRegExp$isRegExp(value: any): boolean


declare function OuterXRegExp$match(str: string, regex: RegExp, scope: string): any


declare function OuterXRegExp$match(str: string, regex: RegExp, scope: "one"): string


declare function OuterXRegExp$match(str: string, regex: RegExp, scope: "all"): string[]


declare function OuterXRegExp$match(str: string, regex: RegExp): string[]


declare function OuterXRegExp$matchChain(str: string, chain: RegExp[]): string[]


declare function OuterXRegExp$matchChain(str: string, chain: {
regex: RegExp,
backref: string
}[]): string[]


declare function OuterXRegExp$matchChain(str: string, chain: {
regex: RegExp,
backref: number
}[]): string[]


declare function OuterXRegExp$matchRecursive(
str: string,
left: string,
right: string,
flags?: string,
options?: Object): string[]


declare function OuterXRegExp$replace(str: string, search: string, replacement: string, scope?: string): string


declare function OuterXRegExp$replace(str: string, search: string, replacement: Function, scope?: string): string


declare function OuterXRegExp$replace(str: string, search: RegExp, replacement: string, scope?: string): string


declare function OuterXRegExp$replace(str: string, search: RegExp, replacement: Function, scope?: string): string


declare function OuterXRegExp$replaceEach(str: string, replacements: Array<RegExp | string>[]): string


declare function OuterXRegExp$split(str: string, separator: string, limit?: number): string[]


declare function OuterXRegExp$split(str: string, separator: RegExp, limit?: number): string[]


declare function OuterXRegExp$test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean


declare function OuterXRegExp$uninstall(options: Object): void


declare function OuterXRegExp$uninstall(options: string): void


declare function OuterXRegExp$union(patterns: (string | RegExp)[], flags?: string): RegExp


declare var OuterXRegExp$version: string;


      declare var npm$namespace$XRegExp: {
        addToken: typeof XRegExp$addToken,
build: typeof XRegExp$build,
cache: typeof XRegExp$cache,
escape: typeof XRegExp$escape,
exec: typeof XRegExp$exec,
forEach: typeof XRegExp$forEach,
globalize: typeof XRegExp$globalize,
install: typeof XRegExp$install,
isInstalled: typeof XRegExp$isInstalled,
isRegExp: typeof XRegExp$isRegExp,
match: typeof XRegExp$match,
matchChain: typeof XRegExp$matchChain,
matchRecursive: typeof XRegExp$matchRecursive,
replace: typeof XRegExp$replace,
replaceEach: typeof XRegExp$replaceEach,
split: typeof XRegExp$split,
test: typeof XRegExp$test,
uninstall: typeof XRegExp$uninstall,
union: typeof XRegExp$union,
        version: typeof XRegExp$version,
      }
declare function XRegExp$addToken(
regex: RegExp,
handler: (matchArr: RegExpExecArray, scope: string) => string,
options?: OuterXRegExp$TokenOpts): void


declare function XRegExp$build(pattern: string, subs: string[], flags?: string): RegExp


declare function XRegExp$cache(pattern: string, flags?: string): RegExp


declare function XRegExp$escape(str: string): string


declare function XRegExp$exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray


declare function XRegExp$forEach(
str: string,
regex: RegExp,
callback: (
matchArr: RegExpExecArray,
index: number,
input: string,
regexp: RegExp) => void): any


declare function XRegExp$globalize(regex: RegExp): RegExp


declare function XRegExp$install(options: string): void


declare function XRegExp$install(options: Object): void


declare function XRegExp$isInstalled(feature: string): boolean


declare function XRegExp$isRegExp(value: any): boolean


declare function XRegExp$match(str: string, regex: RegExp, scope: string): any


declare function XRegExp$match(str: string, regex: RegExp, scope: "one"): string


declare function XRegExp$match(str: string, regex: RegExp, scope: "all"): string[]


declare function XRegExp$match(str: string, regex: RegExp): string[]


declare function XRegExp$matchChain(str: string, chain: RegExp[]): string[]


declare function XRegExp$matchChain(str: string, chain: {
regex: RegExp,
backref: string
}[]): string[]


declare function XRegExp$matchChain(str: string, chain: {
regex: RegExp,
backref: number
}[]): string[]


declare function XRegExp$matchRecursive(
str: string,
left: string,
right: string,
flags?: string,
options?: Object): string[]


declare function XRegExp$replace(str: string, search: string, replacement: string, scope?: string): string


declare function XRegExp$replace(str: string, search: string, replacement: Function, scope?: string): string


declare function XRegExp$replace(str: string, search: RegExp, replacement: string, scope?: string): string


declare function XRegExp$replace(str: string, search: RegExp, replacement: Function, scope?: string): string


declare function XRegExp$replaceEach(str: string, replacements: Array<RegExp | string>[]): string


declare function XRegExp$split(str: string, separator: string, limit?: number): string[]


declare function XRegExp$split(str: string, separator: RegExp, limit?: number): string[]


declare function XRegExp$test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean


declare function XRegExp$uninstall(options: Object): void


declare function XRegExp$uninstall(options: string): void


declare function XRegExp$union(patterns: (string | RegExp)[], flags?: string): RegExp


declare var XRegExp$version: string;
	declare module.exports: typeof OuterXRegExp

    }
