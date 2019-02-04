declare module 'react-global-configuration' {
        declare export interface Options {
freeze: boolean,
assign: boolean
} 
	declare export function set(newConfiguration: any, newOptions?: Options): void

	declare export function get(key?: string): any

	declare export function get<Value>(key: string, fallbackValue: Value): Value

	declare export function serialize(): string

    }
