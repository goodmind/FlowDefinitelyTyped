declare module 'angular-translate' {
        declare var _: string;
	declare module.exports: typeof _

	import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface translate$ITranslationTable {
[key: string]: string | translate$ITranslationTable
} 

declare interface translate$ILanguageKeyAlias {
[key: string]: string
} 

declare interface translate$IStorage {
get(name: string): string,
put(name: string, value: string): void
} 

declare interface translate$IStaticFilesLoaderOptions {
prefix: string,
suffix: string,
key?: string
} 

declare interface translate$IPartialLoader<T> {
addPart(name: string, priority?: number): T,
deletePart(name: string): T,
isPartAvailable(name: string): boolean
} 

declare type translate$ITranslatePartialLoaderService = {
getRegisteredParts(): Array<string>,
isPartLoaded(name: string, lang: string): boolean
} & translate$IPartialLoader<translate$ITranslatePartialLoaderService>


declare type translate$ITranslatePartialLoaderProvider = {
setPart(
lang: string,
part: string,
table: translate$ITranslationTable): translate$ITranslatePartialLoaderProvider
} & angular.IServiceProvider & translate$IPartialLoader<translate$ITranslatePartialLoaderProvider>


declare interface translate$ITranslateService {
(translationId: string, interpolateParams?: any, interpolationId?: string, defaultTranslationText?: string, forceLanguage?: string, sanitizeStrategy?: string): angular.IPromise<string>,
(translationId: string[], interpolateParams?: any, interpolationId?: string, defaultTranslationText?: string, forceLanguage?: string, sanitizeStrategy?: string): angular.IPromise<{
[key: string]: string
}>,
cloakClassName(): string,
cloakClassName(name: string): translate$ITranslateProvider,
fallbackLanguage(langKey?: string): string,
fallbackLanguage(langKey?: string[]): string,
instant(
translationId: string,
interpolateParams?: any,
interpolationId?: string,
forceLanguage?: string,
sanitizeStrategy?: string): string,
instant(
translationId: string[],
interpolateParams?: any,
interpolationId?: string,
forceLanguage?: string,
sanitizeStrategy?: string): {
[key: string]: string
},
isPostCompilingEnabled(): boolean,
preferredLanguage(langKey?: string): string,
proposedLanguage(): string,
refresh(langKey?: string): angular.IPromise<void>,
storage(): translate$IStorage,
storageKey(): string,
use(): string,
use(key: string): angular.IPromise<string>,
useFallbackLanguage(langKey?: string): void,
versionInfo(): string,
loaderCache(): any,
isReady(): boolean,
onReady(fn?: () => void): angular.IPromise<void>,
resolveClientLocale(): string,
getAvailableLanguageKeys(): string[]
} 

declare type translate$ITranslateProvider = {
translations(key?: string): translate$ITranslationTable,
translations(
key: string,
translationTable: translate$ITranslationTable): translate$ITranslateProvider,
cloakClassName(): string,
cloakClassName(name: string): translate$ITranslateProvider,
addInterpolation(factory: any): translate$ITranslateProvider,
useMessageFormatInterpolation(): translate$ITranslateProvider,
useInterpolation(factory: string): translate$ITranslateProvider,
useSanitizeValueStrategy(value: string): translate$ITranslateProvider,
preferredLanguage(): translate$ITranslateProvider,
preferredLanguage(language: string): translate$ITranslateProvider,
translationNotFoundIndicator(indicator: string): translate$ITranslateProvider,
translationNotFoundIndicatorLeft(): string,
translationNotFoundIndicatorLeft(indicator: string): translate$ITranslateProvider,
translationNotFoundIndicatorRight(): string,
translationNotFoundIndicatorRight(indicator: string): translate$ITranslateProvider,
fallbackLanguage(): translate$ITranslateProvider,
fallbackLanguage(language: string): translate$ITranslateProvider,
fallbackLanguage(languages: string[]): translate$ITranslateProvider,
forceAsyncReload(value: boolean): translate$ITranslateProvider,
use(): string,
use(key: string): translate$ITranslateProvider,
storageKey(): string,
storageKey(key: string): void,
uniformLanguageTag(options: string | Object): translate$ITranslateProvider,
useUrlLoader(url: string): translate$ITranslateProvider,
useStaticFilesLoader(
options: translate$IStaticFilesLoaderOptions | {
files: translate$IStaticFilesLoaderOptions[]
}): translate$ITranslateProvider,
useLoader(loaderFactory: string, options?: any): translate$ITranslateProvider,
useLocalStorage(): translate$ITranslateProvider,
useCookieStorage(): translate$ITranslateProvider,
useStorage(storageFactory: any): translate$ITranslateProvider,
storagePrefix(): string,
storagePrefix(prefix: string): translate$ITranslateProvider,
useMissingTranslationHandlerLog(): translate$ITranslateProvider,
useMissingTranslationHandler(factory: string): translate$ITranslateProvider,
usePostCompiling(value: boolean): translate$ITranslateProvider,
directivePriority(): number,
directivePriority(priority: number): translate$ITranslateProvider,
determinePreferredLanguage(fn?: () => void): translate$ITranslateProvider,
registerAvailableLanguageKeys(): string[],
registerAvailableLanguageKeys(
languageKeys: string[],
aliases?: translate$ILanguageKeyAlias): translate$ITranslateProvider,
useLoaderCache(cache?: any): translate$ITranslateProvider,
resolveClientLocale(): string
} & angular.IServiceProvider

	declare interface IFilterService {
(name: "translate"): {
(translationId: string, interpolateParams?: any, interpolation?: string, forceLanguage?: string): string
}
} 
    }

    }
