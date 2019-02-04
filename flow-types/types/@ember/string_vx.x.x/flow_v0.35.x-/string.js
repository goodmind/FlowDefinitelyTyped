declare module '@ember/string' {
        import type {
          SafeString
        } from 'handlebars';

	declare export function camelize(str: string): string

	declare export function capitalize(str: string): string

	declare export function classify(str: string): string

	declare export function dasherize(str: string): string

	declare export function decamelize(str: string): string

	declare export function htmlSafe(str: string): Handlebars.SafeString

	declare export function isHTMLSafe(str: string): boolean

	declare export function loc(template: string, args?: string[]): string

	declare export function underscore(str: string): string

	declare export function w(str: string): string[]

    }
