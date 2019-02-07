declare module 'virtual-keyboard' {
        declare export type kbEventHandler = (event?: Event | string, keyboard?: Element, el?: Element) => void;
	declare export interface NavigateOptions {
focusClass?: string,
position?: number[],
rowLooping?: boolean,
toggleMode?: boolean
} 
	declare export interface CustomLayout {
[index: string]: string[]
} 
	declare export interface KeyboardOptions {
type: string,
layout?: string,
color?: string,
class?: string,
updateOnChange?: boolean,
customLayout?: CustomLayout,
position?: boolean | {[key: string]: any},
reposition?: boolean,
css?: {[key: string]: any},
display?: {[key: string]: any},
language?: string | string[],
wheelMessage?: string,
comboRegex?: RegExp,
rtl?: boolean,
acceptValid?: boolean,
alwaysOpen?: boolean,
appendLocally?: boolean,
appendTo?: string | {[key: string]: any},
autoAccept?: boolean,
autoAcceptOnEsc?: boolean,
autoAcceptOnValid?: boolean,
cancelClose?: boolean,
caretToEnd?: boolean,
closeByClickEvent?: boolean,
combos?: {[key: string]: any},
enterMod?: string,
enterNavigation?: boolean,
ignoreEsc?: boolean,
initialFocus?: boolean,
keyBinding?: string,
lockInput?: boolean,
maxInsert?: boolean,
maxLength?: boolean | number,
noFocus?: boolean,
openOn?: string,
preventPaste?: string,
repeatDelay?: number,
repeatRate?: number,
resetDefault?: boolean,
restrictInclude?: string,
restrictInput?: boolean,
scrollAdjustment?: number | string,
stayOpen?: boolean,
stickyShift?: boolean,
stopAtEnd?: boolean,
tabNavigation?: boolean,
useCombos?: boolean,
usePreview?: boolean,
useWheel?: boolean,
userClosed?: boolean,
accepted?: kbEventHandler,
beforeClose?: kbEventHandler,
beforeInsert?: kbEventHandler,
beforeVisible?: kbEventHandler,
buildKey?: kbEventHandler,
canceled?: kbEventHandler,
change?: kbEventHandler,
hidden?: kbEventHandler,
initialized?: kbEventHandler,
restricted?: kbEventHandler,
switchInput?: kbEventHandler,
validate?: kbEventHandler,
visible?: kbEventHandler
} 
	declare module 'global' {
        declare interface JQuery {
keyboard(options: KeyboardOptions): this,
addNavigation(options: NavigateOptions): this
} 
    }

    }
