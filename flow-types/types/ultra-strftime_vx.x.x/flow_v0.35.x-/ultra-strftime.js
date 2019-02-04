declare module 'ultra-strftime' {
        declare function strftime(
fmt: string,
d?: Date,
locale?: strftime$strftime.strftime$Locale,
options?: strftime$strftime.strftime$Options): string

	declare function strftime(
fmt: string,
locale?: strftime$strftime.strftime$Locale,
options?: strftime$strftime.strftime$Options): string

	
      declare var npm$namespace$strftime: {
        strftimeUTC: typeof strftime$strftimeUTC,
strftimeTZ: typeof strftime$strftimeTZ,
localizedStrftime: typeof strftime$localizedStrftime,
strftime: typeof strftime$strftime,
        
      }
declare type strftime$StrftimeFunction = (fmt: string, d?: Date, options?: strftime$Options) => string;

declare interface strftime$LocaleFormats {

/**
 * equivalent to %m/%d/%y in en_US
 */
D: string,

/**
 * equivalent to %Y-%m-%d in en_US
 */
F: string,

/**
 * equivalent to %H:%M in en_US
 */
R: string,

/**
 * equivalent to %D in en_US
 */
X: string,

/**
 * equivalent to %a %b %d %X %Y %Z in en_US
 */
c: string,

/**
 * equivalent to %I:%M:%S %p in en_US
 */
r: string,

/**
 * equivalent to %H:%M:%S in en_US
 */
T: string,

/**
 * equivalent to %e-%b-%Y in en_US
 */
v: string,

/**
 * equivalent to %T in en_US
 */
x: string
} 

declare interface strftime$Locale {
days: string[],
shortDays: string[],
months: string[],
shortMonths: string[],
AM: string,
PM: string,
am: string,
pm: string,
formats: strftime$LocaleFormats
} 

declare interface strftime$Options {
timezone?: string | number,
utc?: boolean
} 

declare function strftime$strftimeUTC(fmt: string, d?: Date, locale?: strftime$Locale): string


declare function strftime$strftimeTZ(fmt: string, d: Date, locale: strftime$Locale, timezone: number): string


declare function strftime$strftimeTZ(fmt: string, d: Date, timezone: number): string


declare function strftime$localizedStrftime(locale: strftime$Locale): strftime$StrftimeFunction


declare function strftime$strftime(
fmt: string,
d?: Date,
locale?: strftime$Locale,
options?: strftime$Options): string


declare function strftime$strftime(fmt: string, locale?: strftime$Locale, options?: strftime$Options): string

	declare module.exports: typeof strftime$strftime

    }
