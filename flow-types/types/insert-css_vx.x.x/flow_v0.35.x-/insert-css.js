declare module 'insert-css' {
        declare export interface InsertCssOptions {
container?: HTMLElement,
prepend?: boolean
} 
	declare export type InsertCssStyleElement = {
styleSheet?: CSSStyleSheet
} & HTMLStyleElement

	declare export function insertCss(css: string, options?: InsertCssOptions): InsertCssStyleElement

    }
