declare module 'extract-stack' {
        declare module.exports: typeof extractStack

	declare function extractStack(input: Error | string | void): string

	
      declare var npm$namespace$extractStack: {
        lines: typeof extractStack$lines,
        
      }
declare function extractStack$lines(input: Error | string | void): string[]

    }
