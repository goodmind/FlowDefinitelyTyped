declare module 'ejson' {
        declare interface StringifyOptions {
canonical: boolean,
indent: boolean | number | string
} 
	declare interface CloneOptions {
keyOrderSensitive: boolean
} 
	declare export function clone<T>(obj: T): T

	declare export function parse(str: string): any

	declare export function stringify(obj: any, options?: StringifyOptions): string

	declare export function toJSONValue(obj: any): string

	declare export function fromJSONValue(obj: string): any

	declare export function isBinary(value: any): boolean

	declare export function newBinary(len: number): Uint8Array

	declare export function equals(a: any, b: any, options?: CloneOptions): boolean

    }
