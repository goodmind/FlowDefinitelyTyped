declare module 'diacritics' {
        declare export function remove(str: string): string

	declare export var replacementList: Array<{
base: string,
chars: string
}>;
	declare export var diacriticsMap: {
[key: string]: string
};
    }
