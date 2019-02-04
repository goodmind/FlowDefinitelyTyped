declare module 'angular-dynamic-locale' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface dynamicLocale$tmhDynamicLocaleService {
set(locale: string): angular.IPromise<string>,
get(): string
} 

declare type dynamicLocale$tmhDynamicLocaleProvider = {
defaultLocale(locale: string): void,
localeLocationPattern(location: string): dynamicLocale$tmhDynamicLocaleProvider,
localeLocationPattern(): string,
storageKey(storageKey: string): void,
useStorage(storageName: string): void,
useCookieStorage(): void
} & angular.IServiceProvider

    }

    }
