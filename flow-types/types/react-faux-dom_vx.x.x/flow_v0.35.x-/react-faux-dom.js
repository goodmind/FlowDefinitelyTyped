declare module 'react-faux-dom' {
        import typeof * as React from 'react';

	declare export class Element mixins HTMLElement {
style: any;
constructor(nodeName: string, parentNode?: Element): this;
toReact(): React.ReactElement<any>
}
	declare export var defaultView: {
getComputedStyle(node: Element): {
getPropertyValue(name: string): string
}
};
	declare export function createElement(nodeName: string): Element

	declare export function createElementNS(namespace: string, nodeName: string): Element

	declare export function compareDocumentPosition(): number

	declare export interface ReactFauxDomProps {
connectFauxDOM(node: string, name: string, discardNode?: any): Element,
drawFauxDOM(): void,
animateFauxDOM(duration: number): void,
stopAnimatingFauxDOM(): void,
isAnimatingFauxDOM(): boolean
} 
	declare export function withFauxDOM<P>(
WrappedComponent: React.ComponentClass<P>): React.ComponentClass<Pick<P, Exclude<$Keys<P>, $Keys<ReactFauxDomProps>>>>

    }
