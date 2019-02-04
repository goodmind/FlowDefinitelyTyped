declare module 'dts-bundle' {
        declare interface Options {
name: string,
main: string,
baseDir?: string,
out?: string,
externals?: boolean,
referenceExternals?: boolean,
exclude?: RegExp | ((file: string, external: boolean) => boolean),
removeSource?: boolean,
newLine?: string,
indent?: string,
prefix?: string,
separator?: string,
verbose?: boolean,
emitOnIncludedFileNotFound?: boolean,
emitOnNoIncludedFileNotFound?: boolean,
outputAsModuleFolder?: boolean,
headerPath?: string,
headerText?: string
} 
	declare export function bundle(opts: Options): void

    }
