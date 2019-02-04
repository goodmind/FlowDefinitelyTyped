declare module 'icon-gen' {
        declare interface icongen$Options {
favicon?: {
ico: number[],
name: string,
sizes: number[]
} | {},
icns?: {
name: string,
sizes: number[]
} | {},
ico?: {
name: string,
sizes: number[]
} | {},
report?: boolean
} 
	declare function icongen(
src: string,
dest: string,
options?: icongen$icongen$Options): Promise<string[]>

	declare module.exports: typeof icongen

    }
