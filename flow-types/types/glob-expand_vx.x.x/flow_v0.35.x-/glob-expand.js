declare module 'glob-expand' {
        import typeof * as glob from 'glob';

	declare interface Option {
filter?: string | ((filePath: string) => boolean),
cwd?: string
} 
	declare type _glob = typeof glob;
	
      declare var npm$namespace$expand: {
        
        glob: typeof expand$glob,
VERSION: typeof expand$VERSION,
      }
declare var expand$glob: _glob;

declare var expand$VERSION: string;
	declare function expand(opts: Option, patterns: (string | RegExp)[]): string[]

	declare function expand(opts: Option, ...patterns: (string | RegExp)[]): string[]

	declare function expand(patterns: (string | RegExp)[]): string[]

	declare function expand(...patterns: (string | RegExp)[]): string[]

	declare module.exports: typeof expand

    }
