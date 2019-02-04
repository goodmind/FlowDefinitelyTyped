declare module 'csprng' {
        declare module.exports: typeof csprng

	declare function csprng(bits: number, radix: number): string

    }
