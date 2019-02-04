declare module 'recase' {
        declare export interface Recase {
camelCopy(orig: any): any,
snakeCopy(orig: any): any
} 
	declare export function create(opts: {
exceptions?: {
[origKey: string]: string
}
}): Recase

    }
