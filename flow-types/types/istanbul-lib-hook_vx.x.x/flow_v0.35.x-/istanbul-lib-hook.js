declare module 'istanbul-lib-hook' {
        declare export interface Options {
verbose: boolean
} 
	declare export type HookRequireOptions = {
extensions: string[],
postLoadHook(filename: string): void
} & Options

	declare export function hookRequire(
matcher: Matcher,
transformer: Transformer,
options?: $Shape<HookRequireOptions>): () => void

	declare export function hookCreateScript(matcher: Matcher, transformer: Transformer, options?: $Shape<Options>): void

	declare export function unhookCreateScript(): void

	declare export function hookRunInThisContext(matcher: Matcher, transformer: Transformer, options?: $Shape<Options>): void

	declare export function unhookRunInThisContext(): void

	declare export function unloadRequireCache(matcher: Matcher): void

	declare export type Matcher = (filename: string) => boolean;
	declare export type Transformer = (code: string, filepath: string) => string;
    }
