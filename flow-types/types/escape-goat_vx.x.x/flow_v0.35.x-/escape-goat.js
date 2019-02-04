declare module 'escape-goat' {
        declare export function escape(input: string): string

	declare export function unescape(input: string): string

	declare export function escapeTag(template: TemplateStringsArray, ...substitutions: any[]): string

	declare export function unescapeTag(template: TemplateStringsArray, ...substitutions: any[]): string

    }
