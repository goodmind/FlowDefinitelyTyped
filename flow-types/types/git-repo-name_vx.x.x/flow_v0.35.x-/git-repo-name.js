declare module 'git-repo-name' {
        declare module.exports: typeof gitRepoName

	declare function gitRepoName(options?: string | gitRepoName$gitRepoName$Options): Promise<string>

	declare function gitRepoName(callback: (err: Error | null, repoName: string) => void): void

	declare function gitRepoName(
options: string | gitRepoName$gitRepoName$Options,
callback: (err: Error | null, repoName: string) => void): void

	
      declare var npm$namespace$gitRepoName: {
        promise: typeof gitRepoName$promise,
sync: typeof gitRepoName$sync,
        
      }
declare function gitRepoName$promise(options?: string | gitRepoName$Options): Promise<string>


declare function gitRepoName$sync(options?: string | gitRepoName$Options): string


declare interface gitRepoName$Options {
cwd?: string,
path?: string
} 
    }
