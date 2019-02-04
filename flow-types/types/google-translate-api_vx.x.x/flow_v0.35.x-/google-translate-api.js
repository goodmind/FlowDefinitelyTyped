declare module 'google-translate-api' {
        declare interface TranslateOption {
from?: string,
to?: string,
raw?: boolean
} 
	declare interface TranslateResult {
text: string,
from: {
language: {
didYouMean: boolean,
iso: string
},
text: {
autoCorrected: boolean,
value: string,
didYouMean: boolean
}
},
raw: string
} 
	declare function translate(text: string, options?: TranslateOption): Promise<TranslateResult>

	declare module.exports: typeof translate

    }
