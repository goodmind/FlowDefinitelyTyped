declare module 'd3-hsv' {
        import type {
          Color,RGBColor,ColorSpaceObject,ColorCommonInstance
        } from 'd3-color';

	declare export type ColorSpaceObjectWithHSV = ColorSpaceObject | HSVColor;
	declare export type HSVColorFactory = {

/**
 * Constructs a new HSV color.
 * @param h The hue of the returned color.
 * @param s The saturation of the returned color.
 * @param v The value of the returned color.
 * @param opacity The opacity of the returned color.
 */
(h: number, s: number, v: number, opacity?: number): HSVColor,

/**
 * Constructs a new HSV color.
 * @param cssColorSpecifier A CSS Color Module Level 3 specifier string,
it is parsed and then converted to the HSV color space.
 */
(cssColorSpecifier: string): HSVColor,

/**
 * Constructs a new HSV color.
 * @param color A color instance, it will be converted to the RGB color space
using `color.rgb` and then converted to HSV.
 */
(color: HSVColor | ColorSpaceObject | ColorCommonInstance): HSVColor,
+prototype: HSVColor
} & Function

	declare export type HSVColor = {

/**
 * The color hue.
 */
h: number,

/**
 * The color saturation.
 */
s: number,

/**
 * The color value.
 */
v: number,

/**
 * The color opacity.
 */
opacity: number,

/**
 * Returns a brighter copy of this color.
 * @param k Controls how much brighter the returned color should be (defaults to 1).
 */
brighter(k?: number): this,

/**
 * Returns a darker copy of this color.
 * @param k Controls how much darker the returned color should be (defaults to 1).
 */
darker(k?: number): this,

/**
 * Returns the RGB equivalent of this color.
 */
rgb(): RGBColor
} & Color

	declare export var hsv: HSVColorFactory;
	
/**
 * Returns an HSV color space interpolator between the two colors a and b.
 * If either color’s hue or chroma is NaN, the opposing color’s channel value is used.
 * The shortest path between hues is used. The return value of the interpolator is an RGB string.
 * @param a The starting color; it will be converted to HSV using `d3.hsv`.
 * @param b The ending color; it will be converted to HSV using `d3.hsv`.
 */
declare export function interpolateHsv(
a: string | ColorCommonInstance,
b: string | ColorCommonInstance): (t: number) => string

	
/**
 * Like `interpolateHsv`, but does not use the shortest path between hues.
 * @param a The starting color; it will be converted to HSV using `d3.hsv`.
 * @param b The ending color; it will be converted to HSV using `d3.hsv`.
 */
declare export function interpolateHsvLong(
a: string | ColorCommonInstance,
b: string | ColorCommonInstance): (t: number) => string

    }
