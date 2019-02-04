declare interface PageIcon$Icon {
source: string,
name: string,
data: Buffer,
size: number,
ext: string,
mime: string
} 

declare interface PageIcon$FetchOptions {
ext?: string
} declare module 'page-icon' {
        declare var mod: (
url: string,
opts?: PageIcon$PageIcon$FetchOptions) => Promise<PageIcon$PageIcon$Icon>;
	declare module.exports: typeof mod

    }
