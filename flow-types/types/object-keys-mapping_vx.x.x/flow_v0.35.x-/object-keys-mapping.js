declare module 'object-keys-mapping' {
        declare export function trim(
origin: {[key: string]: any},
ignore?: (v: any) => boolean): {[key: string]: any}

	declare export function trim(
origin: $ReadOnlyArray<{[key: string]: any}>,
ignore?: (v: any) => boolean): {[key: string]: any}[]

	declare export function toCamelcase(origin: {[key: string]: any}): {[key: string]: any}

	declare export function toCamelcase(origin: $ReadOnlyArray<{[key: string]: any}>): {[key: string]: any}[]

	declare export function reverseCamelcase(origin: {[key: string]: any}): {[key: string]: any}

	declare export function reverseCamelcase(origin: $ReadOnlyArray<{[key: string]: any}>): {[key: string]: any}[]

	declare export interface OperatorOptions {
camelcase?: boolean,
mapping?: {[key: string]: any}
} 
	declare export class Operator  {
constructor(opts?: {
camelcase?: boolean
}): this;
map(origin: {[key: string]: any}): {[key: string]: any};
map(origin: $ReadOnlyArray<{[key: string]: any}>): {[key: string]: any}[];
mapField(path: string): string;
mapObject(origin: {[key: string]: any}, path: string): {[key: string]: any};
mapArray(origin: $ReadOnlyArray<{[key: string]: any}>): {[key: string]: any}[]
}
    }
