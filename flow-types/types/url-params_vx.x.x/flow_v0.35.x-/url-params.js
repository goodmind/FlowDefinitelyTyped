declare module 'url-params' {
        declare export function add(oldUrl: string, param: string, value: any): string

	declare export function createUrlObject(oldUrl: string): any

	declare export function remove(oldUrl: string, param: string, value: any): string

	declare export function set(oldUrl: string, param: string, value: any): string

    }
