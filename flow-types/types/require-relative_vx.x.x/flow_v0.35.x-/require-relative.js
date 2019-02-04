declare module 'require-relative' {
        declare function requireRelative(id: string, relativeTo?: string): any

	
      declare var npm$namespace$requireRelative: {
        resolve: typeof requireRelative$resolve,
        
      }
declare function requireRelative$resolve(id: string, relativeTo?: string): string

	declare module.exports: typeof requireRelative

    }
