declare module 'ascii2mathml' {
        declare module.exports: typeof A2MML

	declare var A2MML: ascii2mathml;
	declare interface ascii2mathml {

/**
 * Generates a function with default options set to convert
 * ASCIIMath expression to MathML markup.
 * @param options Options
 */
(options: A2MML$A2MML$Options): ascii2mathml,

/**
 * Converts ASCIIMath expression to MathML markup.
 * @param asciimath ASCIIMath expression
 * @param options Options
 */
(asciimath: string, options?: A2MML$A2MML$Options): string
} 
	declare interface A2MML$Options {
decimalMark?: string,
colSep?: string,
rowSep?: string,
display?: "inline" | "block",
dir?: "ltr" | "rtl",
bare?: boolean,
standalone?: boolean,
annotate?: boolean
} 
    }
