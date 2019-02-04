declare module 'interpret' {
        declare export interface Hook {
(m: {
extensions: string
} | NodeModule): any,
install(m?: {
extension: string,
[key: string]: any
}): void
} 
	declare export type RegisterFn = (hook: Hook) => void;
	declare export interface ExtensionDescriptor {
module: string,
register: RegisterFn
} 
	declare export type Extension = string | ExtensionDescriptor | Array<string | ExtensionDescriptor>;
	declare export interface Extensions {
[extension: string]: Extension | null
} 
	declare export var extensions: Extensions;
	declare export var jsVariants: Extensions;
    }
