declare module 'k6' {
        declare export type bytes = any;
	declare module 'global' {
        declare function open(filePath: string): string

	declare function open(filePath: string, mode: "b"): bytes

    }

	declare export function check<T>(
val: T,
sets: {
[key: string]: (val: T) => boolean
},
tags?: {[key: string]: any}): boolean

	declare export function fail(err?: string): void

	declare export function group<T>(name: string, fn: () => T): T

	declare export function sleep(t: number): void

    }
