declare module 'i18n-abide' {
        import type {
          RequestHandler
        } from 'express';

	declare export function abide(options?: AbideOptions): RequestHandler

	declare export function parseAcceptLanguage(header?: string): Array<{
lang: string,
quality: number
}>

	declare export function bestLanguage(
languages: Array<{
lang: string,
quality: number
}>,
supported_languages: string[],
defaultLanguage: string): string

	declare export function localeFrom(language?: string): string

	declare export function languageFrom(locale?: string): string

	declare export function normalizeLanguage(language?: string): string

	declare export function normalizeLocale(locale?: string): string

	declare export function format(fmt: string, obj?: any, named?: boolean): string

	declare export function getLocales(): string[]

	declare export interface AbideOptions {
gettext_alias?: string,
supported_languages?: string[],
default_lang?: string,
debug_lang?: string,
disable_locale_check?: boolean,
translation_directory?: string,
logger?: {
warn(msg: string): void,
error(msg: string): void
}
} 
    }
