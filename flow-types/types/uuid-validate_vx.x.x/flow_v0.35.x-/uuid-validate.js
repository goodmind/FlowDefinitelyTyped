declare module 'uuid-validate' {
        declare function validate(uuid: string, validate$version?: number): boolean

	
      declare var npm$namespace$validate: {
        version: typeof validate$version,
        
      }
declare function validate$version(uuid: string): number

	declare module.exports: typeof validate

    }
