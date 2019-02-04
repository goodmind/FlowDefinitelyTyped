declare module 'localized-countries' {
        declare interface LocalizedCountries {
get(code: string): string,
array(): Array<{
code: string,
label: string
}>,
object(): {
[code: string]: string
}
} 
	declare function localizedCountries(locale: string | {[key: string]: any}): LocalizedCountries

	declare module.exports: typeof localizedCountries

    }
