declare module 'snowball-stemmers' {
        declare export interface Stemmer {
stem(term: string): string
} 
	declare export function newStemmer(locale: string): Stemmer

	declare export function algorithms(): string[]

    }
