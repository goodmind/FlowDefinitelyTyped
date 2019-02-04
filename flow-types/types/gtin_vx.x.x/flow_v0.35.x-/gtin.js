declare module 'gtin' {
        declare export type GtinFormat = "GTIN-8" | "GTIN-12" | "GTIN-13" | "GTIN-14";
	declare export function isGTIN(gtin: string): boolean

	declare export function validate(gtin: string): boolean

	declare export function minify(gtin: string): string

	declare export function getFormat(gtin: string): GtinFormat

	declare export function getRealFormat(gtin: string): GtinFormat

	
      declare var npm$namespace$upce: {
        compress: typeof upce$compress,
expand: typeof upce$expand,
        
      }
declare function upce$compress(gtin: string): string | null


declare function upce$expand(gtin: string): string

    }
