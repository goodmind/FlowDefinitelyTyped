declare module 'angular' {
        declare interface material$IAriaProvider {
disableWarnings(): void
} 

declare interface material$ResolveObject {
[name: string]: Injectable<(...args: any[]) => PromiseLike<any>>
} 

declare interface material$IBottomSheetOptions {
templateUrl?: string,
template?: string,
scope?: IScope,
preserveScope?: boolean,
controller?: string | Injectable<IControllerConstructor>,
locals?: {
[index: string]: any
},
clickOutsideToClose?: boolean,
bindToController?: boolean,
disableBackdrop?: boolean,
escapeToClose?: boolean,
resolve?: material$ResolveObject,
controllerAs?: string,
parent?: ((scope: IScope, element: JQuery) => Element | JQuery) | string | Element | JQuery,
disableParentScroll?: boolean
} 

declare interface material$IBottomSheetService {
show(options: material$IBottomSheetOptions): IPromise<any>,
hide(response?: any): void,
cancel(response?: any): void
} 

declare interface material$IPresetDialog<T> {
title(title: string): T,
textContent(textContent: string): T,
htmlContent(htmlContent: string): T,
ok(ok: string): T,
theme(theme: string): T,
templateUrl(templateUrl?: string): T,
template(template?: string): T,
targetEvent(targetEvent?: MouseEvent): T,
scope(scope?: IScope): T,
preserveScope(preserveScope?: boolean): T,
disableParentScroll(disableParentScroll?: boolean): T,
hasBackdrop(hasBackdrop?: boolean): T,
clickOutsideToClose(clickOutsideToClose?: boolean): T,
escapeToClose(escapeToClose?: boolean): T,
focusOnOpen(focusOnOpen?: boolean): T,
controller(controller?: string | Injectable<IControllerConstructor>): T,
locals(locals?: {
[index: string]: any
}): T,
bindToController(bindToController?: boolean): T,
resolve(resolve?: material$ResolveObject): T,
controllerAs(controllerAs?: string): T,
parent(parent?: string | Element | JQuery): T,
ariaLabel(ariaLabel: string): T,
openFrom(from: string | Element | Event | {
top: number,
left: number
}): T,
closeTo(to: string | Element | {
top: number,
left: number
}): T,
multiple(multiple: boolean): T
} 

declare type material$IAlertDialog = {} & material$IPresetDialog<material$IAlertDialog>


declare type material$IConfirmDialog = {
cancel(cancel: string): material$IConfirmDialog,
multiple(multiple: boolean): material$IConfirmDialog
} & material$IPresetDialog<material$IConfirmDialog>


declare type material$IPromptDialog = {
cancel(cancel: string): material$IPromptDialog,
required(required: boolean): material$IPromptDialog,
placeholder(placeholder: string): material$IPromptDialog,
initialValue(initialValue: string): material$IPromptDialog
} & material$IPresetDialog<material$IPromptDialog>


declare interface material$IColorExpression {
[cssPropertyName: string]: string
} 

declare interface material$IColorService {
applyThemeColors(element: Element | JQuery, colorExpression: material$IColorExpression): void,
getThemeColor(expression: string): string,
hasTheme(): boolean
} 

declare interface material$IDialogOptions {
templateUrl?: string,
template?: string,
contentElement?: string | Element,
autoWrap?: boolean,
targetEvent?: MouseEvent,
openFrom?: any,
closeTo?: any,
scope?: IScope,
preserveScope?: boolean,
disableParentScroll?: boolean,
hasBackdrop?: boolean,
clickOutsideToClose?: boolean,
escapeToClose?: boolean,
focusOnOpen?: boolean,
controller?: string | Injectable<IControllerConstructor>,
locals?: {
[index: string]: any
},
bindToController?: boolean,
resolve?: material$ResolveObject,
controllerAs?: string,
parent?: string | Element | JQuery,
onShowing?: (scope: IScope, element: JQuery) => void,
onComplete?: (scope: IScope, element: JQuery) => void,
onRemoving?: (element: JQuery, removePromise: IPromise<any>) => void,
skipHide?: boolean,
multiple?: boolean,
fullscreen?: boolean
} 

declare interface material$IDialogService {
[presetName: string]: Function,
show(
dialog: material$IDialogOptions | material$IAlertDialog | material$IConfirmDialog | material$IPromptDialog): IPromise<any>,
confirm(): material$IConfirmDialog,
alert(): material$IAlertDialog,
prompt(): material$IPromptDialog,
hide(response?: any): IPromise<any>,
cancel(response?: any): void
} 

declare interface material$IDialogProvider {
addPreset(
presetName: string,
presetOptions: {
methods?: $ReadOnlyArray<string>,
options: () => material$IDialogOptions
}): material$IDialogProvider
} 

declare type material$IIcon = (id: string) => IPromise<Element>;

declare interface material$IIconProvider {
icon(id: string, url: string, viewBoxSize?: number): material$IIconProvider,
iconSet(id: string, url: string, viewBoxSize?: number): material$IIconProvider,
defaultIconSet(url: string, viewBoxSize?: number): material$IIconProvider,
defaultViewBoxSize(viewBoxSize: number): material$IIconProvider,
defaultFontSet(name: string): material$IIconProvider
} 

declare interface material$IInkRippleProvider {
disableInkRipple(): void
} 

declare type material$IMedia = (media: string) => boolean;

declare interface material$ISidenavObject {
toggle(): IPromise<void>,
open(): IPromise<void>,
close(): IPromise<void>,
isOpen(): boolean,
isLockedOpen(): boolean,
onClose(onClose: () => void): void
} 

declare interface material$ISidenavService {
(component: string, enableWait: boolean): IPromise<material$ISidenavObject>,
(component: string): material$ISidenavObject
} 

declare interface material$IToastPreset<T> {
textContent(content: string): T,
action(action: string): T,
highlightAction(highlightAction: boolean): T,
highlightClass(highlightClass: string): T,
capsule(capsule: boolean): T,
theme(theme: string): T,
hideDelay(delay: number | false): T,
position(position: string): T,
parent(parent?: string | Element | JQuery): T,
toastClass(toastClass: string): T
} 

declare type material$ISimpleToastPreset = {} & material$IToastPreset<material$ISimpleToastPreset>


declare interface material$IToastOptions {
templateUrl?: string,
template?: string,
autoWrap?: boolean,
scope?: IScope,
preserveScope?: boolean,
hideDelay?: number | false,
position?: string,
toastClass?: string,
controller?: string | Injectable<IControllerConstructor>,
locals?: {
[index: string]: any
},
bindToController?: boolean,
resolve?: material$ResolveObject,
controllerAs?: string,
parent?: string | Element | JQuery
} 

declare interface material$IToastService {
show(
optionsOrPreset: material$IToastOptions | material$IToastPreset<any>): IPromise<any>,
showSimple(content: string): IPromise<any>,
simple(): material$ISimpleToastPreset,
build(): material$IToastPreset<any>,
updateContent(newContent: string): void,
updateTextContent(newContent: string): void,
hide(response?: any): void,
cancel(response?: any): void
} 

declare interface material$IPalette {
0?: string,
50?: string,
100?: string,
200?: string,
300?: string,
400?: string,
500?: string,
600?: string,
700?: string,
800?: string,
900?: string,
A100?: string,
A200?: string,
A400?: string,
A700?: string,
contrastDefaultColor?: string,
contrastDarkColors?: string | string[],
contrastLightColors?: string | string[],
contrastStrongLightColors?: string | string[]
} 

declare interface material$IThemeHues {
default?: string,
"hue-1"?: string,
"hue-2"?: string,
"hue-3"?: string
} 

declare interface material$IThemePalette {
name: string,
hues: material$IThemeHues
} 

declare interface material$IBrowserColors {
theme: string,
palette: string,
hue: string
} 

declare interface material$IThemeColors {
accent: material$IThemePalette,
background: material$IThemePalette,
primary: material$IThemePalette,
warn: material$IThemePalette
} 

declare interface material$IThemeGrayScalePalette {
1: string,
2: string,
3: string,
4: string,
name: string
} 

declare interface material$ITheme {
name: string,
isDark: boolean,
colors: material$IThemeColors,
foregroundPalette: material$IThemeGrayScalePalette,
foregroundShadow: string,
accentPalette(name: string, hues?: material$IThemeHues): material$ITheme,
primaryPalette(name: string, hues?: material$IThemeHues): material$ITheme,
warnPalette(name: string, hues?: material$IThemeHues): material$ITheme,
backgroundPalette(name: string, hues?: material$IThemeHues): material$ITheme,
dark(isDark?: boolean): material$ITheme
} 

declare interface material$IThemeConfig {
disableTheming: boolean,
generateOnDemand: boolean,
nonce: string,
defaultTheme: string,
alwaysWatchTheme: boolean,
registeredStyles: string[]
} 

declare interface material$IThemingProvider {
alwaysWatchTheme(alwaysWatch: boolean): void,
definePalette(name: string, palette: material$IPalette): material$IThemingProvider,
enableBrowserColor(browserColors: material$IBrowserColors): () => void,
extendPalette(name: string, palette: material$IPalette): material$IPalette,
registerStyles(styles: string): void,
setDefaultTheme(theme: string): void,
setNonce(nonce: string): void,
theme(name: string, inheritFrom?: string): material$ITheme,
generateThemesOnDemand(onDemand: boolean): void,
disableTheming(isDisabled?: boolean): void,
configuration(): material$IThemeConfig
} 

declare interface material$IDefineThemeOptions {
primary?: string,
accent?: string,
warn?: string,
background?: string,
dark?: boolean
} 

declare interface material$IThemingService {
PALETTES: material$IConfiguredColorPalette,
THEMES: material$IConfiguredThemes,
(element: JQuery): void,
registered(themeName: string): boolean,
defaultTheme(): string,
generateTheme(name: string): void,
setBrowserColor(options: material$IBrowserColors): () => void,
defineTheme(name: string, options: material$IDefineThemeOptions): IPromise<string>
} 

declare interface material$IDateLocaleProvider {
months: string[],
shortMonths: string[],
days: string[],
shortDays: string[],
dates: string[],
firstDayOfWeek: number,
parseDate(dateString: string): Date,
formatDate(date: Date): string,
monthHeaderFormatter(date: Date): string,
weekNumberFormatter(weekNumber: number): string,
msgCalendar: string,
msgOpenCalendar: string
} 

declare interface material$IMenuService {
close(): void,
hide(response?: any, options?: any): IPromise<any>,
open(event?: MouseEvent | JQueryEventObject): void
} 

declare interface material$IColorPalette {
red: material$IPalette,
pink: material$IPalette,
"deep-purple": material$IPalette,
indigo: material$IPalette,
blue: material$IPalette,
"light-blue": material$IPalette,
cyan: material$IPalette,
teal: material$IPalette,
green: material$IPalette,
"light-green": material$IPalette,
lime: material$IPalette,
yellow: material$IPalette,
amber: material$IPalette,
orange: material$IPalette,
"deep-orange": material$IPalette,
brown: material$IPalette,
grey: material$IPalette,
"blue-grey": material$IPalette
} 

declare type material$IConfiguredColorPalette = {
[name: string]: material$IPalette
} & material$IColorPalette


declare interface material$IThemes {
default: material$ITheme
} 

declare type material$IConfiguredThemes = {
[name: string]: material$ITheme
} & material$IThemes


declare interface material$IPanelConfig {
id?: string,
template?: string,
templateUrl?: string,
controller?: string | Injectable<IControllerConstructor>,
controllerAs?: string,
bindToController?: boolean,
locals?: {
[index: string]: any
},
resolve?: material$ResolveObject,
attachTo?: string | JQuery | Element,
propagateContainerEvents?: boolean,
panelClass?: string,
zIndex?: number,
position?: material$IPanelPosition,
clickOutsideToClose?: boolean,
escapeToClose?: boolean,
trapFocus?: boolean,
focusOnOpen?: boolean,
fullscreen?: boolean,
animation?: material$IPanelAnimation,
hasBackdrop?: boolean,
disableParentScroll?: boolean,
onDomAdded?: (...args: any[]) => PromiseLike<void> | void,
onOpenComplete?: (...args: any[]) => PromiseLike<void> | void,
onRemoving?: (...args: any[]) => PromiseLike<void> | void,
onDomRemoved?: (...args: any[]) => PromiseLike<void> | void,
origin?: string | JQuery | Element,
onCloseSuccess?: ((panel: material$IPanelRef, closeReason: string) => any)
} 

declare interface material$IPanelRef {
id: string,
config: material$IPanelConfig,
isAttached: boolean,
panelContainer: JQuery,
panelEl: JQuery,
open(): IPromise<any>,
close(): IPromise<any>,
attach(): IPromise<any>,
detach(): IPromise<any>,
show(): IPromise<any>,
hide(): IPromise<any>,
destroy(): void,
addClass(newClass: string): void,
removeClass(oldClass: string): void,
toggleClass(toggleClass: string): void,
updatePosition(position: material$IPanelPosition): void,
registerInterceptor(type: string, callback: () => IPromise<any>): material$IPanelRef,
removeInterceptor(type: string, callback: () => IPromise<any>): material$IPanelRef,
removeAllInterceptors(type?: string): material$IPanelRef
} 

declare interface material$IPanelPosition {
absolute(): material$IPanelPosition,
relativeTo(someElement: string | JQuery | Element): material$IPanelPosition,
top(top?: string): material$IPanelPosition,
bottom(bottom?: string): material$IPanelPosition,
start(start?: string): material$IPanelPosition,
end(end?: string): material$IPanelPosition,
left(left?: string): material$IPanelPosition,
right(right?: string): material$IPanelPosition,
centerHorizontally(): material$IPanelPosition,
centerVertically(): material$IPanelPosition,
center(): material$IPanelPosition,
addPanelPosition(xPosition: string, yPosition: string): material$IPanelPosition,
withOffsetX(
offsetX: string | ((panel: material$IPanelPosition) => string)): material$IPanelPosition,
withOffsetY(
offsetY: string | ((panel: material$IPanelPosition) => string)): material$IPanelPosition
} 

declare interface material$IPanelAnimation {
openFrom(
from: string | Element | Event | {
top: number,
left: number
}): material$IPanelAnimation,
closeTo(to: string | Element | {
top: number,
left: number
}): material$IPanelAnimation,
withAnimation(cssClass: string | {
open: string,
close: string
}): material$IPanelAnimation
} 

declare interface material$IPanelService {
create(opt_config: material$IPanelConfig): material$IPanelRef,
open(opt_config: material$IPanelConfig): IPromise<material$IPanelRef>,
newPanelPosition(): material$IPanelPosition,
newPanelAnimation(): material$IPanelAnimation,
xPosition: {
CENTER: string,
ALIGN_START: string,
ALIGN_END: string,
OFFSET_START: string,
OFFSET_END: string
},
yPosition: {
CENTER: string,
ALIGN_TOPS: string,
ALIGN_BOTTOMS: string,
ABOVE: string,
BELOW: string
},
animation: {
SLIDE: string,
SCALE: string,
FADE: string
},
interceptorTypes: {
CLOSE: string
},
closeReasons: {
CLICK_OUTSIDE: string,
ESCAPE: string
},
absPosition: {
TOP: string,
RIGHT: string,
BOTTOM: string,
LEFT: string
}
} 

declare interface material$IProgressCircularConfig {
progressSize?: number,
strokeWidth?: number,
duration?: number,
easeFn?: (t: number, b: number, c: number, d: number) => number,
durationIndeterminate?: number,
startIndeterminate?: number,
endIndeterminate?: number,
easeFnIndeterminate?: (t: number, b: number, c: number, d: number) => number
} 

declare interface material$IProgressCircularProvider {
configure(options: material$IProgressCircularConfig): void
} 

declare type material$IStickyService = (scope: IScope, element: JQuery, elementClone?: JQuery) => void;

declare interface material$IInteractionService {
getLastInteractionType(): string | null,
isUserInvoked(checkDelay?: number): boolean
} 
    }
declare module 'angular-material' {
        import typeof * as angular from 'angular';

	declare var _: string;
	declare export default typeof _

    }
