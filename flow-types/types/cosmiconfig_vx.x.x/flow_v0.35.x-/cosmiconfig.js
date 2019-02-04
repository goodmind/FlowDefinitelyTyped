declare module 'cosmiconfig' {
        declare function cosmiconfig(
moduleName: string,
options?: cosmiconfig$cosmiconfig$ExplorerOptions): cosmiconfig$cosmiconfig$Explorer

	declare interface cosmiconfig$Config {
[key: string]: any
} 

declare type cosmiconfig$CosmiconfigResult = {
config: cosmiconfig$Config,
filepath: string,
isEmpty?: boolean
} | null;

declare interface cosmiconfig$LoaderResult {
config: cosmiconfig$Config | null,
filepath: string
} 

declare type cosmiconfig$SyncLoader = (filepath: string, content: string) => cosmiconfig$Config | null;

declare type cosmiconfig$AsyncLoader = (
filepath: string,
content: string) => cosmiconfig$Config | null | Promise<{[key: string]: any} | null>;

declare interface cosmiconfig$LoaderEntry {
sync?: cosmiconfig$SyncLoader,
async?: cosmiconfig$AsyncLoader
} 

declare interface cosmiconfig$Loaders {
[key: string]: cosmiconfig$LoaderEntry
} 

declare interface cosmiconfig$Explorer {
search(searchFrom?: string): Promise<null | cosmiconfig$CosmiconfigResult>,
searchSync(searchFrom?: string): null | cosmiconfig$CosmiconfigResult,
load(loadPath: string): Promise<cosmiconfig$CosmiconfigResult>,
loadSync(loadPath: string): cosmiconfig$CosmiconfigResult,
clearLoadCache(): void,
clearSearchCache(): void,
clearCaches(): void
} 

declare interface cosmiconfig$ExplorerOptions {
stopDir?: string,
cache?: boolean,
transform?: (
result: cosmiconfig$CosmiconfigResult) => Promise<cosmiconfig$CosmiconfigResult> | cosmiconfig$CosmiconfigResult,
packageProp?: string,
loaders?: cosmiconfig$Loaders,
searchPlaces?: string[],
ignoreEmptySearchPlaces?: boolean
} 
	declare module.exports: typeof cosmiconfig

    }
