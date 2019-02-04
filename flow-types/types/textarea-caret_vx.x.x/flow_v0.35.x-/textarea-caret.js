declare module 'textarea-caret' {
        declare module.exports: typeof textarea_caret

	declare interface Caret {
top: number,
left: number,
height: number
} 
	declare interface Options {
debug?: boolean
} 
	declare function textarea_caret(element: HTMLElement, position: number, options?: Options): Caret

    }
