declare module 'logform' {
        declare export interface TransformableInfo {
level: string,
message: string,
[key: string]: any
} 
	declare export type TransformFunction = (info: TransformableInfo, opts?: any) => TransformableInfo | boolean;
	declare export type Colors = {
[key: string]: string | string[]
};
	declare export type FormatWrap = (opts?: any) => Format;
	declare export class Format  {
constructor(opts?: {[key: string]: any}): this;
options: {[key: string]: any};
transform: TransformFunction
}
	declare export class Colorizer mixins Format {
constructor(opts?: {[key: string]: any}): this;
createColorize: (opts?: {[key: string]: any}) => Colorizer;
addColors: (colors: Colors) => Colors;
format$colorize: (level: string, message: string) => string
}
	declare export function format(transform: TransformFunction): FormatWrap

	declare export function levels(config: {[key: string]: any}): {[key: string]: any}

	
      declare var npm$namespace$format: {
        align: typeof format$align,
cli: typeof format$cli,
colorize: typeof format$colorize,
combine: typeof format$combine,
json: typeof format$json,
label: typeof format$label,
logstash: typeof format$logstash,
padLevels: typeof format$padLevels,
prettyPrint: typeof format$prettyPrint,
printf: typeof format$printf,
simple: typeof format$simple,
splat: typeof format$splat,
timestamp: typeof format$timestamp,
uncolorize: typeof format$uncolorize,
        
      }
declare function format$align(opts?: {[key: string]: any}): Format


declare function format$cli(opts?: {[key: string]: any}): Format


declare function format$colorize(opts?: {[key: string]: any}): Colorizer


declare function format$combine(...formats: Format[]): Format


declare function format$json(opts?: {[key: string]: any}): Format


declare function format$label(opts?: {[key: string]: any}): Format


declare function format$logstash(opts?: {[key: string]: any}): Format


declare function format$padLevels(opts?: {[key: string]: any}): Format


declare function format$prettyPrint(opts?: {[key: string]: any}): Format


declare function format$printf(templateFunction: (info: TransformableInfo) => string): Format


declare function format$simple(opts?: {[key: string]: any}): Format


declare function format$splat(opts?: {[key: string]: any}): Format


declare function format$timestamp(opts?: {[key: string]: any}): Format


declare function format$uncolorize(opts?: {[key: string]: any}): Format

    }
