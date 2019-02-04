declare module 'to-markdown' {
        declare module.exports: typeof toMarkdown

	
/**
 * Converts HTML to markdown.
 */
declare function toMarkdown(input: string, options?: toMarkdown$toMarkdown$Options): string

	
      declare var npm$namespace$toMarkdown: {
        isBlock: typeof toMarkdown$isBlock,
isVoid: typeof toMarkdown$isVoid,
outer: typeof toMarkdown$outer,
        
      }
declare type toMarkdown$Filter = string | string[] | ((node: HTMLElement) => boolean);

declare interface toMarkdown$Options {
converters?: toMarkdown$Converter[],
gfm?: boolean
} 

declare interface toMarkdown$Converter {
filter: toMarkdown$Filter,
replacement(innerHTML: string, node: HTMLElement): string
} 


/**
 * Returns true / false depending on whether the element is block level.
 */
declare function toMarkdown$isBlock(node: HTMLElement): boolean



/**
 * Returns true / false depending on whether the element is void.
 */
declare function toMarkdown$isVoid(node: HTMLElement): boolean



/**
 * Returns the HTML string of an element with its contents converted.
 */
declare function toMarkdown$outer(node: HTMLElement, content: string): boolean

    }
