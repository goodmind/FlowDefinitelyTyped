declare module 'd3-scale-chromatic' {
        
/**
 * An array of ten categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeCategory10: $ReadOnlyArray<string>;
	
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeAccent: $ReadOnlyArray<string>;
	
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeDark2: $ReadOnlyArray<string>;
	
/**
 * An array of twelve categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemePaired: $ReadOnlyArray<string>;
	
/**
 * An array of nine categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemePastel1: $ReadOnlyArray<string>;
	
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemePastel2: $ReadOnlyArray<string>;
	
/**
 * An array of nine categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeSet1: $ReadOnlyArray<string>;
	
/**
 * An array of eight categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeSet2: $ReadOnlyArray<string>;
	
/**
 * An array of twelve categorical colors represented as RGB hexadecimal strings.
 */
declare export var schemeSet3: $ReadOnlyArray<string>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “BrBG” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateBrBG(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “BrBG” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeBrBG[9] contains an array of nine strings representing the nine colors of the
 *   brown-blue-green diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeBrBG: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PRGn” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePRGn(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PRGn” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePRGn[9] contains an array of nine strings representing the nine colors of the
 *   purple-green diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemePRGn: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PiYG” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePiYG(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PiYG” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePiYG[9] contains an array of nine strings representing the nine colors of the
 *   pink-yellow-green diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemePiYG: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuOr” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePuOr(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PuOr” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePuOr[9] contains an array of nine strings representing the nine colors of the
 *   purple-orange diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemePuOr: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdBu” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateRdBu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “RdBu” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeRdBu[9] contains an array of nine strings representing the nine colors of the
 *   red-blue diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeRdBu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdGy” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateRdGy(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “RdGy” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeRdGy[9] contains an array of nine strings representing the nine colors of the
 *   red-grey diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeRdGy: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdYlBu” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateRdYlBu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “RdYlBu” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeRdYlBu[9] contains an array of nine strings representing the nine colors of the
 *   red-yellow-blue diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeRdYlBu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdYlGn” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateRdYlGn(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “RdYlGn” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeRdYlGn[9] contains an array of nine strings representing the nine colors of the
 *   red-yellow-green diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeRdYlGn: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Spectral” diverging color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateSpectral(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Spectral” diverging color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeSpectral[9] contains an array of nine strings representing the nine colors of the
 *   spectral diverging color scheme. Diverging color schemes support a size k ranging from 3 to 11.
 */
declare export var schemeSpectral: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Blues” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateBlues(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Blues” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeBlues[9] contains an array of nine strings representing the nine colors of the
 *   blue sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeBlues: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Greens” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateGreens(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Greens” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeGreens[9] contains an array of nine strings representing the nine colors of the
 *   green sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeGreens: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Greys” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateGreys(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Greys” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeGreys[9] contains an array of nine strings representing the nine colors of the
 *   grey sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeGreys: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Oranges” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateOranges(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Oranges” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeOranges[9] contains an array of nine strings representing the nine colors of the
 *   orange sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeOranges: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Purples” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePurples(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Purples” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePurples[9] contains an array of nine strings representing the nine colors of the
 *   purple sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemePurples: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “Reds” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateReds(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “Reds” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeReds[9] contains an array of nine strings representing the nine colors of the
 *   red sequential color scheme. Sequential, single-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeReds: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “viridis” perceptually-uniform color scheme designed by van der Walt, Smith and Firing for matplotlib,
 * represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateViridis(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “inferno” perceptually-uniform color scheme designed by van der Walt and Smith for matplotlib,
 * represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateInferno(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “magma” perceptually-uniform color scheme designed by van der Walt and Smith for matplotlib,
 * represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateMagma(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “plasma” perceptually-uniform color scheme designed by van der Walt and Smith for matplotlib,
 * represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolatePlasma(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from a 180° rotation of Niccoli’s perceptual rainbow, represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateWarm(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from Niccoli’s perceptual rainbow, represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateCool(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from d3.interpolateWarm scale from [0.0, 0.5] followed by the d3.interpolateCool scale from [0.5, 1.0],
 * thus implementing the cyclical less-angry rainbow color scheme.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateRainbow(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “sinebow” color scheme by Jim Bumgardner and Charlie Loyd.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateSinebow(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from Green’s default Cubehelix represented as an RGB string.
 * @param t A number in the interval [0, 1].
 */
declare export function interpolateCubehelixDefault(t: number): string

	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “BuGn” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateBuGn(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “BuGn” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeBuGn[9] contains an array of nine strings representing the nine colors of the
 *   blue-green sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeBuGn: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “BuPu” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateBuPu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “BuPu” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeBuPu[9] contains an array of nine strings representing the nine colors of the
 *   blue-purple sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeBuPu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “GnBu” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateGnBu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “GnBu” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeGnBu[9] contains an array of nine strings representing the nine colors of the
 *   green-blue sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeGnBu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “OrRd” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateOrRd(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “OrRd” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeOrRd[9] contains an array of nine strings representing the nine colors of the
 *   orange-red sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeOrRd: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuBuGn” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePuBuGn(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PuBuGn” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePuBuGn[9] contains an array of nine strings representing the nine colors of the
 *   purple-blue-green sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemePuBuGn: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuBu” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePuBu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PuBu” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePuBu[9] contains an array of nine strings representing the nine colors of the
 *   purple-blue sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemePuBu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “PuRd” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolatePuRd(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “PuRd” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemePuRd[9] contains an array of nine strings representing the nine colors of the
 *   purple-red sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemePuRd: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “RdPu” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateRdPu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “RdPu” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeRdPu[9] contains an array of nine strings representing the nine colors of the
 *   red-purple sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeRdPu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlGnBu” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateYlGnBu(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “YlGnBu” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeYlGnBu[9] contains an array of nine strings representing the nine colors of the
 *   yellow-green-blue sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeYlGnBu: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlGn” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateYlGn(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “YlGn” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeYlGn[9] contains an array of nine strings representing the nine colors of the
 *   yellow-green sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeYlGn: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlOrBr” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateYlOrBr(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “YlOrBr” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeYlOrBr[9] contains an array of nine strings representing the nine colors of the
 *   yellow-orange-brown sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeYlOrBr: $ReadOnlyArray<$ReadOnlyArray<string>>;
	
/**
 * Given a number t in the range [0,1], returns the corresponding color from the “YlOrRd” sequential color scheme represented as an RGB string.
 * @param t Number in the range [0, 1].
 */
declare export function interpolateYlOrRd(t: number): string

	
/**
 * An array of arrays of hexadecimal color strings from the “YlOrRd” sequential color scheme. The kth element of this array contains
 *   the color scheme of size k; for example, d3.schemeYlOrRd[9] contains an array of nine strings representing the nine colors of the
 *   yellow-orange-red sequential color scheme. Sequential, multi-hue color schemes support a size k ranging from 3 to 9.
 */
declare export var schemeYlOrRd: $ReadOnlyArray<$ReadOnlyArray<string>>;
    }
