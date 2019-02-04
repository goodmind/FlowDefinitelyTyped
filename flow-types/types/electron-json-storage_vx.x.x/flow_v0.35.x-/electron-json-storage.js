declare module 'electron-json-storage' {
        declare export interface DataOptions {
dataPath: string
} 
	declare export function getDefaultDataPath(): string

	declare export function setDataPath(directory?: string): void

	declare export function getDataPath(): string

	declare export function get(key: string, callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function get(
key: string,
options: DataOptions,
callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function getMany(
keys: $ReadOnlyArray<string>,
callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function getMany(
keys: $ReadOnlyArray<string>,
options: DataOptions,
callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function getAll(callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function getAll(
options: DataOptions,
callback: (error: any, data: {[key: string]: any}) => void): void

	declare export function set(key: string, json: {[key: string]: any}, callback: (error: any) => void): void

	declare export function set(
key: string,
json: {[key: string]: any},
options: DataOptions,
callback: (error: any) => void): void

	declare export function has(key: string, callback: (error: any, hasKey: boolean) => void): void

	declare export function has(
key: string,
options: DataOptions,
callback: (error: any, hasKey: boolean) => void): void

	declare export function keys(callback: (error: any, keys: string[]) => void): void

	declare export function keys(options: DataOptions, callback: (error: any, keys: string[]) => void): void

	declare export function remove(key: string, callback: (error: any) => void): void

	declare export function remove(key: string, options: DataOptions, callback: (error: any) => void): void

	declare export function clear(callback: (error: any) => void): void

	declare export function clear(options: DataOptions, callback: (error: any) => void): void

    }
