declare module 'unorm' {
        declare var unorm: unorm$unorm$Static;
	declare module.exports: typeof unorm

	declare interface unorm$Static {
nfd(str: string): string,
nfkd(str: string): string,
nfc(str: string): string,
nfkc(str: string): string
} 
    }
