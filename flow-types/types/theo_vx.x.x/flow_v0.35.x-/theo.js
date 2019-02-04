declare module 'theo' {
        import type {
          Iterable,Collection,Map,List,OrderedMap
        } from 'immutable';

	declare export type StyleProperty = "name"
| "value"
| "type"
| "originalValue"
| "category"
| "comment"
| "meta";
	declare export type Format = "custom-properties.css"
| "cssmodules.css"
| "scss"
| "sass"
| "less"
| "styl"
| "map.css"
| "map.variable.scss"
| "list.scss"
| "module.js"
| "common.js"
| "html";
	declare export type Transform = "raw" | "ios" | "android" | "web";
	declare export type ValueTransform = "color/rgb"
| "color/hex"
| "color/hex8rgba"
| "color/hex8argb"
| "percentage/float"
| "relative/pixel"
| "relative/pixelValue";
	declare export function convert(options: ConvertOptions): Promise<string>

	declare export function convertSync(options: ConvertOptions): string

	declare export function registerFormat(name: Format, format: FormatResultFn | string): void

	declare export function registerTransform(name: Transform, valueTransforms: ValueTransform[]): void

	declare export function registerValueTransform(
name: ValueTransform,
predicate: (prop: Prop) => boolean,
transform: (prop: Prop) => string | number): void

	declare export type Prop = Map<StyleProperty, string | number>;
	declare export type Props = List<Prop>;
	declare export type Aliases = OrderedMap<string, Map<string, string | number>>;
	declare export type Meta = Map<string, string>;
	declare export type FormatResultFn = (result: ImmutableStyleMap) => string;
	declare export interface StyleMap {
aliases: Aliases,
props: Props,
meta: Meta,
options: {[key: string]: any}
} 
	declare export type ImmutableStyleMap = {
toJS(): StyleMap,
get<K: $Keys<StyleMap>>(key: K): $ElementType<StyleMap, K>
} & Map<string, any>

	declare export interface ConvertOptions {
transform: TransformOptions,
format: FormatOptions
} 
	declare export interface TransformOptions {
type?: Transform,
file: string,
data?: string
} 
	declare export interface FormatOptions {
type: Format,
options?: (
options: {[key: string]: any},
transformPropName?: (name: string) => string) => void
} 
    }
