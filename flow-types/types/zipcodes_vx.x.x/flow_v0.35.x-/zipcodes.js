declare module 'zipcodes' {
        declare export interface ZipCode {
zip: string,
latitude: number,
longitude: number,
city: string,
state: string,
country: string
} 
	declare export function lookup(zip: string | number): ZipCode | void

	declare export function lookupByName(city: string, state: string): ZipCode[]

	declare export function lookupByState(state: string): ZipCode[]

	declare export function distance(zipA: string | number, zipB: string | number): number | null

	declare export function radius(zip: string | number, miles: number, full: boolean): string[] | ZipCode[]

	declare export function toMiles(kilos: number): number

	declare export function toKilometers(miles: number): number

	declare export function lookupByCoords(lat: number, lon: number): string | null

    }
