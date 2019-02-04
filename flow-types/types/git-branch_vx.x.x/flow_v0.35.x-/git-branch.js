declare module 'git-branch' {
        declare module.exports: typeof GitBranch

	declare function GitBranch(cwd?: string): Promise<string>

	declare function GitBranch(cwd?: string, callback?: (err: null | string, name: string) => void): void

	declare function GitBranch(callback: (err: null | string, name: string) => void): void

	
      declare var npm$namespace$GitBranch: {
        sync: typeof GitBranch$sync,
        
      }
declare function GitBranch$sync(cwd?: string): string

    }
