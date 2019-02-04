declare module 'markdown-it-anchor' {
        declare interface anchor$AnchorInfo {
slug: string,
title: string
} 

declare interface anchor$AnchorOptions {
level?: number,
slugify(str: string): string,
permalink?: boolean,
renderPermalink(slug: string, opts: anchor$AnchorOptions, state: Core, idx: number): void,
permalinkClass?: string,
permalinkSymbol?: string,
permalinkBefore?: boolean,
permalinkHref(slug: string): string,
callback(token: Token, anchor_info: anchor$AnchorInfo): void
} 
	declare function anchor(md: MarkdownIt, opts: anchor$anchor$AnchorOptions): void

	declare module.exports: typeof anchor

    }
