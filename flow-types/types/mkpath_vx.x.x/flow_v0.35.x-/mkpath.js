declare module 'mkpath' {
        
      declare var npm$namespace$mkpath: {
        sync: typeof mkpath$sync,
        
      }
declare function mkpath$sync(path: string, mode?: number): void

	declare function mkpath(path: string, callback?: (err: any) => void): void

	declare function mkpath(path: string, mode?: number, callback?: (err?: any) => void): void

	declare module.exports: typeof mkpath

    }
