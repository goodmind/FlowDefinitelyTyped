declare module 'pleasejs' {
        declare var PleaseJS$Please: PleaseJS$PleaseJS$Please;
	declare export interface PleaseJS$Please {

/**
 * *
 * generate and return a random hex string
 * @param {PleaseJS$MakeColorOption} options
 * @returns {Array}
 */
make_color(options?: PleaseJS$MakeColorOption): Array<string>,
make_color(options?: PleaseJS$MakeColorOption): Array<PleaseJS$RGB>,
make_color(options?: PleaseJS$MakeColorOption): Array<PleaseJS$HSV>,

/**
 * *
 * make a color scheme
 * @param {PleaseJS$MakeSchemeOption} options
 * @returns {Array}
 */
make_scheme(base_color: PleaseJS$HSV, options?: PleaseJS$MakeSchemeOption): Array<string>,
make_scheme(
base_color: PleaseJS$HSV,
options?: PleaseJS$MakeSchemeOption): Array<PleaseJS$RGB>,
make_scheme(
base_color: PleaseJS$HSV,
options?: PleaseJS$MakeSchemeOption): Array<PleaseJS$HSV>,

/**
 * *
 * convert color name into hex string
 * @param {string} name
 * @returns {string}
 */
NAME_to_HEX(name: string): string,

/**
 * *
 * convert color name into RGB
 * @param {string} name
 * @returns {PleaseJS$RGB}
 */
NAME_to_RGB(name: string): PleaseJS$RGB,

/**
 * *
 * convert color name into RGB
 * @param {string} name
 * @returns {PleaseJS$HSV}
 */
NAME_to_HSV(name: string): PleaseJS$HSV,

/**
 * *
 * convert HEX into RGB
 * @param {string} hex
 * @returns {PleaseJS$RGB}
 */
HEX_to_RGB(hex: string): PleaseJS$RGB,

/**
 * *
 * convert RGB into HEX
 * @param {PleaseJS$RGB} rgb
 * @returns {string}
 */
RGB_to_HEX(rgb: PleaseJS$RGB): string,

/**
 * *
 * convert HSV into RGB
 * @param {PleaseJS$HSV} hsv
 * @returns {PleaseJS$RGB}
 */
HSV_to_RGB(hsv: PleaseJS$HSV): PleaseJS$RGB,

/**
 * *
 * convert RGB into HSV
 * @param {PleaseJS$RGB} rgb
 * @returns {PleaseJS$HSV}
 */
RGB_to_HSV(rgb: PleaseJS$RGB): PleaseJS$HSV,

/**
 * *
 * convert HSV into HEX
 * @param {PleaseJS$HSV} hsv
 * @returns {string}
 */
HSV_to_HEX(hsv: PleaseJS$HSV): string,

/**
 * *
 * convert HEX into HSV
 * @param {string} hex
 * @returns {PleaseJS$HSV}
 */
HEX_to_HSV(hex: string): PleaseJS$HSV
} 

declare export interface PleaseJS$MakeColorOption {
hue?: number,
saturation?: number,
value?: number,
base_color?: string,
greyscale?: boolean,
grayscale?: boolean,
golden?: boolean,
full_random?: boolean,
colors_returned?: number,
format?: string
} 

declare export interface PleaseJS$MakeSchemeOption {
scheme_type: string,
format: string
} 

declare export interface PleaseJS$RGB {
r: number,
g: number,
b: number
} 

declare export interface PleaseJS$HSV {
h: number,
s: number,
v: number
} 
    }
