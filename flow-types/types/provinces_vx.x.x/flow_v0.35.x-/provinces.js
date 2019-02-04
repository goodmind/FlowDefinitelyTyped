declare module 'provinces' {
        declare module 'global' {
        
/**
 * @see {@link https://github.com/substack/provinces#data-format}
 */
declare interface Province {

/**
 * full name of the province or state
 */
name: string,

/**
 * country abbreviation
 */
country: string,

/**
 * optional 2 or 3 character short name
 */
short?: string,

/**
 * optional array of additional names and abbreviations
 */
alt?: string[],

/**
 * optional region of a country (for example: "Wales")
 */
region?: string
} 
    }

	
/**
 * @see {@link https://github.com/substack/provinces#methods}
 */
declare var provinces: Province[];
	declare module.exports: typeof provinces

    }
