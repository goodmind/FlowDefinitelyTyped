declare module 'deglob' {
        declare type Callback = (err: Error | null, files: string[]) => void;
	declare function deglob(patterns: string[], cb: Callback): void

	declare function deglob(patterns: string[], opts: deglob$deglob$Options, cb: Callback): void

	declare interface deglob$Options {
useGitIgnore?: boolean,
usePackageJson?: boolean,
configKey?: string,
gitIgnoreFile?: string,
ignore?: string[],
cwd?: string
} 
	declare module.exports: typeof deglob

    }
