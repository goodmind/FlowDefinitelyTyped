declare module "theo" {
  import type { Collection, Map, List, OrderedMap } from "immutable";

  declare export type StyleProperty =
    | "name"
    | "value"
    | "type"
    | "originalValue"
    | "category"
    | "comment"
    | "meta";
  declare export type Format =
    | "custom-properties.css"
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
    | "html"
    | "json"
    | "raw.json"
    | "ios.json"
    | "android.xml"
    | "aura.tokens";
  declare export function convert(options: ConvertOptions): Promise<string>;

  declare export function convertSync(options: ConvertOptions): string;

  declare export function registerFormat(
    name: string,
    format: FormatResultFn | string
  ): void;

  declare export function registerTransform(
    name: string,
    valueTransforms: string[]
  ): void;

  declare export function registerValueTransform(
    name: string,
    predicate: (prop: Prop) => boolean,
    transform: (prop: Prop) => string | number
  ): void;

  declare export type Prop = Map<StyleProperty, string | number>;
  declare export type Props = List<Prop>;
  declare export type Aliases = OrderedMap<
    string,
    Map<string, string | number>
  >;
  declare export type Meta = Map<string, string>;
  declare export type FormatResultFn = (result: ImmutableStyleMap) => string;
  declare export interface StyleMap {
    aliases: Aliases;
    global?: Props;
    imports?: string[];
    props: Props;
    meta: Meta;
    options: { [key: string]: any };
  }
  declare export type ImmutableStyleMap = {
    toJS(): StyleMap,
    get<K: $Keys<StyleMap>>(key: K): $ElementType<StyleMap, K>
  } & Map<string, any>;

  declare export interface ConvertOptions {
    transform: TransformOptions;
    format: FormatOptions;
    resolveAliases?: boolean;
    resolveMetaAliases?: boolean;
  }
  declare export interface TransformOptions {
    type?: string;
    file: string;
    data?: string;
  }
  declare export interface FormatOptions {
    type: Format;
    options?: (
      options: { [key: string]: any },
      transformPropName?: (name: string) => string
    ) => void;
  }
}
