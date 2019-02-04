declare module 'findup-sync' {
        declare module.exports: typeof findupSync

	declare function findupSync(
patternOrPatterns: string[] | string,
micromatchOptions?: findupSync$findupSync$Options): string

	declare type findupSync$Options = {
cwd?: string
} & micromatch.findupSync$Options

    }
