declare module 'nunjucks' {
        declare export function render(name: string, context?: {[key: string]: any}): string

	declare export function render(
name: string,
context?: {[key: string]: any},
callback?: (err: any, res: string) => any): void

	declare export function renderString(src: string, context: {[key: string]: any}): string

	declare export function renderString(
src: string,
context: {[key: string]: any},
callback?: (err: any, res: string) => any): void

	declare export function compile(
src: string,
env?: Environment,
callback?: (err: any, res: Template) => any): Template

	declare export function precompile(path: string, opts?: PrecompileOptions): string

	declare export function precompileString(src: string, opts?: PrecompileOptions): string

	declare export interface PrecompileOptions {
name?: string,
asFunction?: boolean,
force?: boolean,
env?: Environment,
include?: string[],
exclude?: string[],
wrapper(templates: {
name: string,
template: string
}, opts: PrecompileOptions): string
} 
	declare export class Template  {
constructor(src: string, env?: Environment, eagerCompile?: boolean): this;
render(context?: {[key: string]: any}): string;
render(
context?: {[key: string]: any},
callback?: (err: any, res: string) => any): void
}
	declare export function configure(options: ConfigureOptions): Environment

	declare export function configure(path: string | string[], options?: ConfigureOptions): Environment

	declare export interface ConfigureOptions {
autoescape?: boolean,
throwOnUndefined?: boolean,
trimBlocks?: boolean,
lstripBlocks?: boolean,
watch?: boolean,
noCache?: boolean,
web?: {
useCache?: boolean,
async?: boolean
},
express?: {[key: string]: any},
tags?: {
blockStart?: string,
blockEnd?: string,
variableStart?: string,
variableEnd?: string,
commentStart?: string,
commentEnd?: string
}
} 
	declare export class Environment  {
options: {
autoescape: boolean
};
constructor(loader?: ILoader | ILoader[] | null, opts?: ConfigureOptions): this;
render(name: string, context?: {[key: string]: any}): string;
render(
name: string,
context?: {[key: string]: any},
callback?: (err: any, res: string) => any): void;
renderString(name: string, context: {[key: string]: any}): string;
renderString(
name: string,
context: {[key: string]: any},
callback?: (err: any, res: string) => any): void;
addFilter(name: string, func: (...args: any[]) => any, async?: boolean): void;
getFilter(name: string): void;
addExtension(name: string, ext: Extension): void;
removeExtension(name: string): void;
getExtension(name: string): Extension;
hasExtension(name: string): void;
addGlobal(name: string, value: any): void;
getTemplate(name: string, eagerCompile?: boolean): Template;
getTemplate(
name: string,
eagerCompile?: boolean,
callback?: (err: any, templ: Template) => Template): void;
express(app: {[key: string]: any}): void
}
	declare export interface Extension {
tags: string[],
parse(parser: any, nodes: any, lexer: any): any
} 
	declare export function installJinjaCompat(): void

	declare export interface ILoader {
async?: boolean,
getSource(name: string): LoaderSource,
getSource(name: string, callback: (err?: any, result?: LoaderSource) => void): void,
extend(extender: ILoader): ILoader
} 
	declare export class Loader  {
on(name: string, func: (...args: any[]) => any): void;
emit(name: string, ...args: any[]): void;
resolve(from: string, to: string): string;
isRelative(filename: string): boolean;
extend(toExtend: ILoader): ILoader
}
	declare export interface LoaderSource {
src: string,
path: string,
noCache: boolean
} 
	declare export interface FileSystemLoaderOptions {

/**
 * if true, the system will automatically update templates when they are changed on the filesystem
 */
watch?: boolean,

/**
 * if true, the system will avoid using a cache and templates will be recompiled every single time
 */
noCache?: boolean
} 
	declare export class FileSystemLoader mixins Loader, ILoader {
init(searchPaths: string[], opts: any): void;
getSource(name: string): LoaderSource;
constructor(searchPaths?: string | string[], opts?: FileSystemLoaderOptions): this
}
	declare export class WebLoader mixins Loader, ILoader {
constructor(baseUrl: string, opts?: any): this;
getSource(name: string): LoaderSource
}
	declare export class PrecompiledLoader mixins Loader, ILoader {
init(searchPaths: string[], opts: any): void;
getSource(name: string): LoaderSource
}
	declare class runtime$SafeString  {
constructor(val: string): this;
val: string;
length: number;
valueOf(): string;
toString(): string
}
    }
