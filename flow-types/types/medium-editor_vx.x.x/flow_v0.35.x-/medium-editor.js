declare export interface MediumEditor$MediumEditor {
new (
elements: MediumEditor$elementType,
options?: MediumEditor$CoreOptions): MediumEditor$MediumEditor,
destroy(): void,
setup(): void,
addElements(elements: MediumEditor$elementType): void,
removeElements(elements: MediumEditor$elementType): void,
on(
targets: HTMLElement | NodeList,
event: string,
listener: EventListenerOrEventListenerObject,
useCapture: boolean): MediumEditor$MediumEditor,
off(
targets: HTMLElement | NodeList,
event: string,
listener: EventListenerOrEventListenerObject,
useCapture: boolean): MediumEditor$MediumEditor,
subscribe(
name: string,
listener: (data: any, editable: HTMLElement) => void): MediumEditor$MediumEditor,
unsubscribe(
name: string,
listener: (data: any, editable: HTMLElement) => void): MediumEditor$MediumEditor,
trigger(name: string, data: any, editable: HTMLElement): MediumEditor$MediumEditor,
checkSelection(): MediumEditor$MediumEditor,
exportSelection(): MediumEditor$selectionObject,
importSelection(
selectionState: MediumEditor$selectionObject,
favorLaterSelectionAnchor: boolean): void,
getFocusedElement(): HTMLElement,
getSelectedParentElement(range?: Range): HTMLElement,
restoreSelection(): void,
saveSelection(): void,
selectAllContents(): void,
selectElement(element: HTMLElement): void,
stopSelectionUpdates(): void,
startSelectionUpdates(): void,
cleanPaste(text: string): void,
createLink(opts: MediumEditor$CreateLinkOptions): void,
execAction(action: string, opts?: string | MediumEditor$CreateLinkOptions): boolean,
pasteHTML(html: string, options?: MediumEditor$PasteHTMLOptions): void,
queryCommandState(action: string): boolean,
checkContentChanged(editable?: HTMLElement): void,
delay(fn: () => any): void,
getContent(index?: number): string,
getExtensionByName(name: string): any,
resetContent(element: HTMLElement): void,
serialize(): any,
setContent(html: string, index?: number): void,
getEditorFromElement(element: HTMLElement): MediumEditor$MediumEditor,
version: {
major: number,
minor: number,
revision: number,
preRelease: string,
toString(): string
}
} 

declare export interface MediumEditor$CoreOptions {
activeButtonClass?: string,
allowMultiParagraphSelection?: boolean,
buttonLabels?: string | boolean,
contentWindow?: Window,
delay?: number,
disableReturn?: boolean,
disableDoubleReturn?: boolean,
disableExtraSpaces?: boolean,
disableEditing?: boolean,
elementsContainer?: HTMLElement,
extensions?: any,
ownerDocument?: Document,
spellcheck?: boolean,
targetBlank?: boolean,
toolbar?: MediumEditor$ToolbarOptions | boolean,
anchorPreview?: MediumEditor$AnchorPreviewOptions | boolean,
placeholder?: MediumEditor$PlaceholderOptions | boolean,
anchor?: MediumEditor$AnchorFormOptions,
paste?: MediumEditor$PasteOptions,
keyboardCommands?: MediumEditor$KeyboardCommandsOptions | boolean,
autoLink?: boolean,
imageDragging?: boolean
} 

declare export interface MediumEditor$ToolbarOptions {
align?: string,
allowMultiParagraphSelection?: boolean,
buttons?: MediumEditor$Button[],
diffLeft?: number,
diffTop?: number,
firstButtonClass?: string,
lastButtonClass?: string,
standardizeSelectionStart?: boolean,
static?: boolean,
sticky?: boolean,
stickyTopOffset?: number,
updateOnEmptySelection?: boolean,
relativeContainer?: Node
} 

declare export interface MediumEditor$AnchorPreviewOptions {
hideDelay?: number,
previewValueSelector?: string,
showWhenToolbarIsVisible?: boolean,
showOnEmptyLinks?: boolean
} 

declare export interface MediumEditor$PlaceholderOptions {
text?: string,
hideOnClick?: boolean
} 

declare export interface MediumEditor$AnchorFormOptions {
customClassOption?: string,
customClassOptionText?: string,
linkValidation?: boolean,
placeholderText?: string,
targetCheckbox?: boolean,
targetCheckboxText?: string
} 

declare export interface MediumEditor$PasteOptions {
forcePlainText?: boolean,
cleanPastedHTML?: boolean,
preCleanReplacements?: any[],
cleanReplacements?: any[],
cleanAttrs?: string[],
cleanTags?: string[],
unwrapTags?: string[]
} 

declare export interface MediumEditor$KeyboardCommandsOptions {
commands?: MediumEditor$KeyboardCommandOptions[]
} 

declare export interface MediumEditor$KeyboardCommandOptions {
command: string,
key: string,
meta: boolean,
shift: boolean,
alt: boolean
} 

declare export interface MediumEditor$CreateLinkOptions {
value: string,
target?: string,
buttonClass?: string
} 

declare export interface MediumEditor$PasteHTMLOptions {
cleanAttrs?: string[],
cleanTags?: string[],
unwrapTags?: string[]
} 

declare export interface MediumEditor$ButtonOptions {
name?: string,
action?: string,
aria?: string,
tagNames?: string[],
style?: {
prop: string,
value: string
},
useQueryState?: boolean,
contentDefault?: string,
contentFA?: string,
classList?: string[],
attrs?: {
[key: string]: string
}
} 

declare export type MediumEditor$Button = string | MediumEditor$ButtonOptions;

declare export type MediumEditor$elementType = string
| HTMLElement
| HTMLElement[]
| NodeList
| NodeListOf<Element>
| HTMLCollection;

declare export interface MediumEditor$selectionObject {
start: number,
end: number
} declare var MediumEditor$MediumEditor: MediumEditor$MediumEditor.MediumEditor$MediumEditor;declare module 'medium-editor' {
        declare module.exports: typeof MediumEditor$MediumEditor

    }
