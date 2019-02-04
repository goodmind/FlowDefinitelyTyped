declare module 'cson' {
        declare export function stringify(data: any, opts?: Object, indent?: any): string

	declare export function createCSONString(data: any, opts?: Object, next?: any): string

	declare export function createJSONString(data: any, opts?: Object, next?: any): string

	declare export function createString(data: any, opts?: Object, next?: any): string

	declare export function parse(data: string, opts?: Object, next?: any): any

	declare export function parseCSONString(data: string, opts?: Object, next?: any): any

	declare export function parseJSONString(data: string, opts?: Object, next?: any): any

	declare export function parseCSString(data: string, opts?: Object, next?: any): any

	declare export function parseJSString(data: string, opts?: Object, next?: any): any

	declare export function parseString(data: string, opts?: Object, next?: any): any

	declare export function load(filePath: string, opts?: Object, next?: any): any

	declare export function parseCSONFile(filePath: string, opts?: Object, next?: any): any

	declare export function parseJSONFile(filePath: string, opts?: Object, next?: any): any

	declare export function parseCSFile(filePath: string, opts?: Object, next?: any): any

	declare export function parseJSFile(filePath: string, opts?: Object, next?: any): any

	declare export function requireCSFile(filePath: string, opts?: Object, next?: any): any

	declare export function requireJSFile(filePath: string, opts?: Object, next?: any): any

	declare export function requireFile(filePath: string, opts?: Object, next?: any): any

    }
