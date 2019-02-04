declare module 'marked-terminal' {
        import type {
          Chalk
        } from 'chalk';

	import type {
          Renderer
        } from 'marked';

	declare module.exports: typeof TerminalRenderer

	declare class TerminalRenderer mixins Renderer {
constructor(options?: TerminalRenderer$TerminalRenderer$TerminalRendererOptions): this
}
	declare interface TerminalRenderer$TerminalRendererOptions {
code?: Chalk | ((s: string) => string),
blockquote?: Chalk | ((s: string) => string),
html?: Chalk | ((s: string) => string),
heading?: Chalk | ((s: string) => string),
firstHeading?: Chalk | ((s: string) => string),
hr?: Chalk | ((s: string) => string),
listitem?: Chalk | ((s: string) => string),
table?: Chalk | ((s: string) => string),
paragraph?: Chalk | ((s: string) => string),
strong?: Chalk | ((s: string) => string),
em?: Chalk | ((s: string) => string),
codespan?: Chalk | ((s: string) => string),
del?: Chalk | ((s: string) => string),
link?: Chalk | ((s: string) => string),
href?: Chalk | ((s: string) => string),
list?: (body: string, ordered?: boolean) => string,
width?: number,
reflowText?: boolean,
showSectionPrefix?: boolean,
unescape?: boolean,
emoji?: boolean,
tableOptions?: any,
tab?: number
} 
    }
