declare module 'jquery-focus-exit' {
        declare export interface FocusElements {
lostFocus?: HTMLElement,
gainedFocus: HTMLElement
} 
	declare module 'global' {
        declare interface JQuery {
focusExit(options?: {
debug: boolean
}): JQuery,
on(
event: "focusExit",
handler: ((event: JQuery.TriggeredEvent<HTMLElement>, data: FocusElements) => void)): JQuery,
one(
event: "focusin",
handler: ((event: JQuery.TriggeredEvent<HTMLElement>) => void)): JQuery
} 
    }

    }
