declare module 'bin-version' {
        declare module.exports: typeof binVersion

	declare function binVersion(binary: string, options?: binVersion$binVersion$Options): Promise<string>

	declare interface binVersion$Options {
args?: string[]
} 
    }
