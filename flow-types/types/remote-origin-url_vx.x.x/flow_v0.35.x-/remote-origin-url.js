declare module 'remote-origin-url' {
        declare module.exports: typeof remoteOriginUrl

	declare function remoteOriginUrl(
options?: string | remoteOriginUrl$remoteOriginUrl$Options): Promise<string | void>

	declare function remoteOriginUrl(callback: remoteOriginUrl$remoteOriginUrl$Callback): void

	declare function remoteOriginUrl(
options: string | remoteOriginUrl$remoteOriginUrl$Options,
callback: remoteOriginUrl$remoteOriginUrl$Callback): void

	
      declare var npm$namespace$remoteOriginUrl: {
        promise: typeof remoteOriginUrl$promise,
sync: typeof remoteOriginUrl$sync,
        
      }
declare function remoteOriginUrl$promise(options?: string | remoteOriginUrl$Options): Promise<string | void>


declare function remoteOriginUrl$sync(options?: string | remoteOriginUrl$Options): string | void


declare interface remoteOriginUrl$Options {
path?: string
} 

declare type remoteOriginUrl$Callback = (error: Error | null, url?: string) => void;
    }
