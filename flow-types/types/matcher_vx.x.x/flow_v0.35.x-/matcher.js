declare module 'matcher' {
        declare module.exports: typeof matcher

	declare function matcher(
inputs: string[],
patterns: string[],
options?: matcher$matcher$Options): string[]

	
      declare var npm$namespace$matcher: {
        isMatch: typeof matcher$isMatch,
        
      }
declare function matcher$isMatch(input: string, pattern: string, options?: matcher$Options): boolean


declare interface matcher$Options {
caseSensitive?: boolean
} 
    }
