declare module 'resolve-global' {
        declare module.exports: typeof resolveGlobal

	declare function resolveGlobal(moduleId: string): string

	
      declare var npm$namespace$resolveGlobal: {
        silent: typeof resolveGlobal$silent,
        
      }
declare function resolveGlobal$silent(moduleId: string): string | null

    }
