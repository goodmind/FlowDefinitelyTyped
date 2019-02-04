declare module 'country-list' {
        
/**
 * Expects an array of code and country name pairs to add to the list. Doesn't return anything.
 */
declare export function overwrite(countries: Array<{
code: string,
name: string
}>): void

	
/**
 * Expects a two-digit country code. Returns the name for that country. If not found, it returns undefined.
 */
declare export function getName(code: string): string | void

	
/**
 * Expects the English country name. Returns the code for that country. If not found, it returns undefined.
 */
declare export function getCode(name: string): string | void

	
/**
 * Returns an array of all country names.
 */
declare export function getNames(): string[]

	
/**
 * Returns an array of all country codes.
 */
declare export function getCodes(): string[]

	
/**
 * Returns a key-value object of all countries using the name as key.
 */
declare export function getNameList(): {
[name: string]: string
}

	
/**
 * Returns a key-value object of all countries using the code as key.
 */
declare export function getCodeList(): {
[code: string]: string
}

	
/**
 * Returns an array of all country information, in the same format as it gets imported.
 */
declare export function getData(): Array<{
code: string,
name: string
}>

    }
