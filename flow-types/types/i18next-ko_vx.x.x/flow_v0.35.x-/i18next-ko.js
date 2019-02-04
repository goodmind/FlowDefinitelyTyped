declare module 'i18next-ko' {
        import typeof * as i18next from 'i18next';

	declare export var i18n: i18next.i18n;
	declare export function init(
resourceStore: i18nextkoResourceStore,
language: string,
ko: KnockoutStatic): void

	declare export function setLanguage(language: string): void

	declare export function t(key: string): KnockoutComputed<string>

	declare export interface i18nextkoResourceStore {
[language: string]: {
translation: {
[key: string]: string
}
}
} 
    }
