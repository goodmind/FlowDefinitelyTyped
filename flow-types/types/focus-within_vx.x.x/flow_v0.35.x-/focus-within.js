declare module 'focus-within' {
        declare interface focusWithin$FocusWithinOpts {
attr?: boolean,
className?: string
} 
	declare function focusWithin(document: HTMLDocument, opts?: focusWithin$focusWithin$FocusWithinOpts): void

	declare module.exports: typeof focusWithin

    }
