declare var ScrollReveal: scrollReveal$scrollReveal$ScrollRevealObject;declare module 'scrollreveal' {
        declare module.exports: typeof ScrollReveal

    }
declare interface scrollReveal$ScrollRevealRotateObject {
x?: number,
y?: number,
z?: number
} 

declare interface scrollReveal$ScrollRevealPositionObject {
top?: number,
right?: number,
bottom?: number,
left?: number
} 

declare interface scrollReveal$ScrollRevealObjectOptions {
origin?: string,
distance?: string,
duration?: number,
delay?: number,
rotate?: scrollReveal$ScrollRevealRotateObject,
opacity?: number,
scale?: number,
easing?: string,
container?: any,
mobile?: boolean,
reset?: boolean,
useDelay?: string,
viewFactor?: number,
viewOffset?: scrollReveal$ScrollRevealPositionObject,
beforeReveal(domEl: HTMLElement): void,
afterReveal(domEl: HTMLElement): void,
beforeReset(domEl: HTMLElement): void,
afterReset(domEl: HTMLElement): void,
beforeReveal(domEl: NodeListOf<Element>): void,
afterReveal(domEl: NodeListOf<Element>): void,
beforeReset(domEl: NodeListOf<Element>): void,
afterReset(domEl: NodeListOf<Element>): void
} 

declare interface scrollReveal$ScrollRevealObject {
(): scrollReveal$ScrollRevealObject,
(options: scrollReveal$ScrollRevealObjectOptions): scrollReveal$ScrollRevealObject,
reveal(selector: string): scrollReveal$ScrollRevealObject,
reveal(selector: string, interval: number): scrollReveal$ScrollRevealObject,
reveal(
selector: string,
options: scrollReveal$ScrollRevealObjectOptions): scrollReveal$ScrollRevealObject,
reveal(
selector: string,
options: scrollReveal$ScrollRevealObjectOptions,
interval: number): scrollReveal$ScrollRevealObject,
reveal(selector: HTMLElement): scrollReveal$ScrollRevealObject,
reveal(selector: HTMLElement, interval: number): scrollReveal$ScrollRevealObject,
reveal(
selector: HTMLElement,
options: scrollReveal$ScrollRevealObjectOptions): scrollReveal$ScrollRevealObject,
reveal(
selector: HTMLElement,
options: scrollReveal$ScrollRevealObjectOptions,
interval: number): scrollReveal$ScrollRevealObject,
reveal(selector: NodeListOf<Element>): scrollReveal$ScrollRevealObject,
reveal(
selector: NodeListOf<Element>,
interval: number): scrollReveal$ScrollRevealObject,
reveal(
selector: NodeListOf<Element>,
options: scrollReveal$ScrollRevealObjectOptions): scrollReveal$ScrollRevealObject,
reveal(
selector: NodeListOf<Element>,
options: scrollReveal$ScrollRevealObjectOptions,
interval: number): scrollReveal$ScrollRevealObject,
sync(): void
} 