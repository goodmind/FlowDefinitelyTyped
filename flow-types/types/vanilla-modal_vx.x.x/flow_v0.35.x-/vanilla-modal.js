declare module 'vanilla-modal' {
        declare export interface VanillaModalConfig {
modal?: string | HTMLElement,
modalInner?: string,
modalContent?: string,
open?: string,
close?: string,
page?: string,
class?: string,
loadClass?: string,
clickOutside?: boolean,
closeKeys?: number[] | void[] | boolean,
transitions?: string,
transitionEnd(): void,
onBeforeOpen(): void,
onBeforeClose(): void,
onOpen(): void,
onClose(): void
} 
	declare export interface VanillaModalDomNodes {
modal: HTMLElement,
page: HTMLElement,
modalInner: HTMLElement,
modalContent: HTMLElement
} 
	declare export default class VanillaModal  {
constructor(settings?: VanillaModalConfig): this;
getDomNodes(): VanillaModalDomNodes;
addLoadedCssClass(): void;
setOpenId(id: string): void;
removeOpenId(): void;
open(allMatches: string, e?: Event): void;
detectTransition(): boolean;
close(e?: Event): void;
closeModal(e: Event): void;
closeModalWithTransition(e: Event): void;
captureNode(node: Node): void;
releaseNode(node: Node): void;
closeKeyHandler(e: Event): void;
outsideClickHandler(e: Event): void;
delegateOpen(e: Event): void;
delegateClose(e: Event): void;
listen(): void;
destroy(): void
}
    }
