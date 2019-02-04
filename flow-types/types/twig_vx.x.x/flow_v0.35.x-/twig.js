declare module 'twig' {
        declare export interface Parameters {
id?: any,
blocks?: any,
macros?: any,
base?: any,
path?: any,
href?: any,
name?: any,
method?: any,
options?: any,
data?: any,
async?: any,
load?: (template: Template) => void
} 
	declare export interface Template {
reset(blocks: any): void,
render(context?: any, params?: any, allow_async?: boolean): string | Promise<string>,
renderAsync(context?: any, params?: any): Promise<string>,
importFile(file: string): Template,
importBlocks(file: string, override?: boolean): void,
importMacros(file: string): Template,
getLoaderMethod(): string,
compile(options: any): string
} 
	declare export interface CompileOptions {
filename: string,
settings: any
} 
	declare export function twig(params: Parameters): Template

	declare export function extendFilter(name: string, definition: (left: any, ...params: any[]) => string): void

	declare export function extendFunction(name: string, definition: (...params: any[]) => string): void

	declare export function extendTest(name: string, definition: (value: any) => boolean): void

	declare export function extendTag(definition: any): void

	declare export function compile(markup: string, options: CompileOptions): (context: any) => any

	declare export function renderFile(
path: string,
options: CompileOptions,
fn: (err: Error, result: any) => void): void

	declare export function __express(
path: string,
options: CompileOptions,
fn: (err: Error, result: any) => void): void

	declare export function cache(value: boolean): void

    }
