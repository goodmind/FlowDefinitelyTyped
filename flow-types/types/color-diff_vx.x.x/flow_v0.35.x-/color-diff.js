declare module 'color-diff' {
        declare export interface RGBColor {
R: number,
G: number,
B: number,
A?: number
} 
	declare export interface LabColor {
L: number,
a: number,
b: number
} 
	declare export function diff(c1: LabColor, c2: LabColor): number

	declare export function rgb_to_lab(c: RGBColor): LabColor

	declare export function rgba_to_lab(c: RGBColor, bc?: RGBColor): LabColor

	declare export function closest(
color: RGBColor,
palette: $ReadOnlyArray<RGBColor>,
backgroundColor?: RGBColor): RGBColor

	declare export function furthest(
color: RGBColor,
palette: $ReadOnlyArray<RGBColor>,
backgroundColor?: RGBColor): RGBColor

	declare export function map_palette(
a: $ReadOnlyArray<RGBColor>,
b: $ReadOnlyArray<RGBColor>,
type?: "closest" | "furthest",
backgroundColor?: RGBColor): {
[key: string]: RGBColor
}

	declare export function palette_map_key(c: RGBColor): string

	declare export function closest_lab(color: LabColor, palette: $ReadOnlyArray<LabColor>): LabColor

	declare export function furthest_lab(color: LabColor, palette: $ReadOnlyArray<LabColor>): LabColor

	declare export function map_palette_lab(
p1: $ReadOnlyArray<LabColor>,
p2: $ReadOnlyArray<LabColor>): {
[key: string]: LabColor
}

	declare export function lab_palette_map_key(c: LabColor): string

	declare export function match_palette_lab(
target_color: LabColor,
palette: $ReadOnlyArray<LabColor>,
find_furthest: boolean): LabColor

    }
