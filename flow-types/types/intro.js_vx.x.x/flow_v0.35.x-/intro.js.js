declare interface IntroJs$Step {
intro: string,
element?: string | HTMLElement | Element,
position?: "top"
| "left"
| "right"
| "bottom"
| "bottom-left-aligned"
| "bottom-middle-aligned"
| "bottom-right-aligned"
| "auto",
tooltipClass?: string,
highlightClass?: string,
scrollTo?: "off" | "tooltip" | "element",
disableInteraction?: boolean
} 

declare interface IntroJs$Hint {
hint: string,
element?: string | HTMLElement | Element,
hintPosition?: string
} 

declare interface IntroJs$Options {
nextLabel?: string,
prevLabel?: string,
skipLabel?: string,
doneLabel?: string,
hidePrev?: boolean,
hideNext?: boolean,
tooltipPosition?: string,
tooltipClass?: string,
highlightClass?: string,
exitOnEsc?: boolean,
exitOnOverlayClick?: boolean,
showStepNumbers?: boolean,
keyboardNavigation?: boolean,
showButtons?: boolean,
showBullets?: boolean,
showProgress?: boolean,
scrollToElement?: boolean,
overlayOpacity?: number,
scrollPadding?: number,
positionPrecedence?: string[],
disableInteraction?: boolean,
hintPosition?: string,
hintButtonLabel?: string,
hintAnimation?: boolean,
steps?: IntroJs$Step[],
hints?: IntroJs$Hint[]
} 

declare interface IntroJs$IntroJs {
start(): IntroJs$IntroJs,
exit(): IntroJs$IntroJs,
clone(): IntroJs$IntroJs,
goToStepNumber(stepId: number): IntroJs$IntroJs,
goToStep(step: number): IntroJs$IntroJs,
nextStep(): IntroJs$IntroJs,
previousStep(): IntroJs$IntroJs,
refresh(): IntroJs$IntroJs,
setOption(option: string, value: string | number | boolean): IntroJs$IntroJs,
setOptions(options: IntroJs$Options): IntroJs$IntroJs,
onexit(callback: Function): IntroJs$IntroJs,
onbeforechange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
onafterchange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
onchange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
oncomplete(callback: Function): IntroJs$IntroJs,
addHints(): IntroJs$IntroJs,
showHint(stepId: number): IntroJs$IntroJs,
showHints(): IntroJs$IntroJs,
hideHint(stepId: number): IntroJs$IntroJs,
hideHints(): IntroJs$IntroJs,
removeHint(stepId: number): IntroJs$IntroJs,
removeHints(): IntroJs$IntroJs,
onhintsadded(callback: Function): IntroJs$IntroJs,
onhintclick(
callback: (hintElement: HTMLElement, item: IntroJs$Step, stepId: number) => any): IntroJs$IntroJs,
onhintclose(callback: (stepId: number) => any): IntroJs$IntroJs
} 

declare interface IntroJs$Factory {
(): IntroJs$IntroJs,
(element: HTMLElement): IntroJs$IntroJs,
(querySelector: string): IntroJs$IntroJs
} declare var introJs: IntroJs$IntroJs.IntroJs$Factory;declare module 'intro.js' {
        declare module.exports: typeof IntroJs$IntroJs

    }
