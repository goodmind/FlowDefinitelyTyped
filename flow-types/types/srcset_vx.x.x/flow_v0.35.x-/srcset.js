declare module 'srcset' {
        
/**
 * Parse the HTML `<img>`
 * [srcset](http://mobile.smashingmagazine.com/2013/08/21/webkit-implements-srcset-and-why-its-a-good-thing/) attribute.
 * @param srcset An srcset string.
 */
declare export function parse(srcset: string): SrcSetDefinition[]

	
/**
 * Stringify a list of `SrcSetDefinition`s.
 * @param srcSetDefinitions An array of `SrcSetDefinition` object.
 * @returns A srcset string.
 */
declare export function stringify(srcSetDefinitions: SrcSetDefinition[]): string

	declare export interface SrcSetDefinition {
url: string,
width?: number,
height?: number,
density?: number
} 
    }
