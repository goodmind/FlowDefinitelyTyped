declare module 'angular-strap' {
        declare type modal$IModalService = (config?: modal$IModalOptions) => modal$IModal;

declare interface modal$IModalProvider {
defaults: modal$IModalOptions
} 

declare interface modal$IModal {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface modal$IModalOptions {
animation?: string,
backdropAnimation?: string,
placement?: string,
title?: string,
content?: string,
html?: boolean,
backdrop?: boolean | string,
keyboard?: boolean,
show?: boolean,
container?: string | boolean,
controller?: any,
controllerAs?: string,
resolve?: any,
locals?: any,
template?: string,
templateUrl?: string,
contentTemplate?: string,
prefixEvent?: string,
id?: string,
scope?: ng.IScope,
onShow(modal: modal$IModal): void,
onBeforeShow(modal: modal$IModal): void,
onHide(modal: modal$IModal): void,
onBeforeHide(modal: modal$IModal): void
} 

declare type modal$IModalScope = {
$show(): void,
$hide(): void,
$toggle(): void
} & ng.IScope


declare type aside$IAsideService = (config?: aside$IAsideOptions) => aside$IAside;

declare interface aside$IAsideProvider {
defaults: aside$IAsideOptions
} 

declare interface aside$IAside {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface aside$IAsideOptions {
animation?: string,
placement?: string,
title?: string,
content?: string,
html?: boolean,
backdrop?: boolean | string,
keyboard?: boolean,
show?: boolean,
container?: string | boolean,
controller?: any,
controllerAs?: string,
template?: string,
templateUrl?: string,
contentTemplate?: string,
scope?: ng.IScope,
onShow(aside: aside$IAside): void,
onBeforeShow(aside: aside$IAside): void,
onHide(aside: aside$IAside): void,
onBeforeHide(aside: aside$IAside): void
} 

declare type aside$IAsideScope = {
$show(): void,
$hide(): void,
$toggle(): void
} & ng.IScope


declare type alert$IAlertService = (config?: alert$IAlertOptions) => alert$IAlert;

declare interface alert$IAlertProvider {
defaults: alert$IAlertOptions
} 

declare interface alert$IAlert {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface alert$IAlertOptions {
animation?: string,
placement?: string,
title?: string,
content?: string,
type?: string,
show?: boolean,
container?: string | boolean,
controller?: any,
controllerAs?: string,
template?: string,
templateUrl?: string,
duration?: number | boolean,
dismissable?: boolean,
onShow(alert: alert$IAlert): void,
onBeforeShow(alert: alert$IAlert): void,
onHide(alert: alert$IAlert): void,
onBeforeHide(alert: alert$IAlert): void
} 

declare type alert$IAlertScope = {
$show(): void,
$hide(): void,
$toggle(): void
} & ng.IScope


declare type tooltip$ITooltipService = (
element: ng.IAugmentedJQuery,
config?: tooltip$ITooltipOptions) => tooltip$ITooltip;

declare interface tooltip$ITooltipProvider {
defaults: tooltip$ITooltipOptions
} 

declare interface tooltip$ITooltip {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface tooltip$ITooltipOptions {
animation?: string,
placement?: string,
trigger?: string,
title?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
target?: string | ng.IAugmentedJQuery | boolean,
template?: string,
templateUrl?: string,
titleTemplate?: string,
prefixEvent?: string,
id?: string,
onShow(tooltip: tooltip$ITooltip): void,
onBeforeShow(tooltip: tooltip$ITooltip): void,
onHide(tooltip: tooltip$ITooltip): void,
onBeforeHide(tooltip: tooltip$ITooltip): void,
viewport?: string | {
selector: string,
padding: string | number
}
} 

declare type tooltip$ITooltipScope = {
$show(): void,
$hide(): void,
$toggle(): void,
$setEnabled(isEnabled: boolean): void
} & ng.IScope


declare type popover$IPopoverService = (
element: ng.IAugmentedJQuery,
config?: popover$IPopoverOptions) => popover$IPopover;

declare interface popover$IPopoverProvider {
defaults: popover$IPopoverOptions
} 

declare interface popover$IPopover {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface popover$IPopoverOptions {
animation?: string,
placement?: string,
trigger?: string,
title?: string,
content?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
target?: string | ng.IAugmentedJQuery | boolean,
template?: string,
templateUrl?: string,
contentTemplate?: string,
autoClose?: boolean,
id?: string,
onShow(popover: popover$IPopover): void,
onBeforeShow(popover: popover$IPopover): void,
onHide(popover: popover$IPopover): void,
onBeforeHide(popover: popover$IPopover): void,
viewport?: string | {
selector: string,
padding: string | number
}
} 

declare type popover$IPopoverScope = {
$show(): void,
$hide(): void,
$toggle(): void
} & ng.IScope


declare type typeahead$ITypeaheadService = (
element: ng.IAugmentedJQuery,
controller: any,
config?: typeahead$ITypeaheadOptions) => typeahead$ITypeahead;

declare interface typeahead$ITypeaheadProvider {
defaults: typeahead$ITypeaheadOptions
} 

declare interface typeahead$ITypeahead {
$promise: ng.IPromise<void>,
show(): void,
hide(): void,
toggle(): void
} 

declare interface typeahead$ITypeaheadOptions {
animation?: string,
placement?: string,
trigger?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
template?: string,
limit?: number,
minLength?: number,
autoSelect?: boolean,
comparator?: string,
id?: string,
watchOptions?: boolean,
trimValue?: boolean,
onShow(typeahead: typeahead$ITypeahead): void,
onBeforeShow(typeahead: typeahead$ITypeahead): void,
onHide(typeahead: typeahead$ITypeahead): void,
onBeforeHide(typeahead: typeahead$ITypeahead): void,
onSelect(typeahead: typeahead$ITypeahead): void
} 

declare type datepicker$IDatepickerService = (
element: ng.IAugmentedJQuery,
controller: any,
config?: datepicker$IDatepickerOptions) => datepicker$IDatepicker;

declare interface datepicker$IDatepickerProvider {
defaults: datepicker$IDatepickerOptions
} 

declare interface datepicker$IDatepicker {
update(date: Date): void,
updateDisabledDates(dateRanges: datepicker$IDatepickerDateRange[]): void,
select(dateConstructorArg: string | number | number[], keep: boolean): void,
setMode(mode: any): void,
int(): void,
destroy(): void,
show(): void,
hide(): void
} 

declare interface datepicker$IDatepickerDateRange {
start: Date,
end: Date
} 

declare interface datepicker$IDatepickerOptions {
animation?: string,
placement?: string,
trigger?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
template?: string,
onShow(datepicker: datepicker$IDatepicker): void,
onBeforeShow(datepicker: datepicker$IDatepicker): void,
onHide(datepicker: datepicker$IDatepicker): void,
onBeforeHide(datepicker: datepicker$IDatepicker): void,
dateFormat?: string,
modelDateFormat?: string,
dateType?: string,
timezone?: string,
autoclose?: boolean,
useNative?: boolean,
minDate?: Date,
maxDate?: Date,
startView?: number,
minView?: number,
startWeek?: number,
startDate?: Date,
iconLeft?: string,
iconRight?: string,
daysOfWeekDisabled?: string,
disabledDates?: datepicker$IDatepickerDateRange[]
} 

declare type timepicker$ITimepickerService = (
element: ng.IAugmentedJQuery,
controller: any,
config?: timepicker$ITimepickerOptions) => timepicker$ITimepicker;

declare interface timepicker$ITimepickerProvider {
defaults: timepicker$ITimepickerOptions
} 

declare interface timepicker$ITimepicker {} 

declare interface timepicker$ITimepickerOptions {
animation?: string,
placement?: string,
trigger?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
template?: string,
onShow(timepicker: timepicker$ITimepicker): void,
onBeforeShow(timepicker: timepicker$ITimepicker): void,
onHide(timepicker: timepicker$ITimepicker): void,
onBeforeHide(timepicker: timepicker$ITimepicker): void,
timeFormat?: string,
modelTimeFormat?: string,
timeType?: string,
autoclose?: boolean,
useNative?: boolean,
minTime?: Date,
maxTime?: Date,
length?: number,
hourStep?: number,
minuteStep?: number,
secondStep?: number,
roundDisplay?: boolean,
iconUp?: string,
iconDown?: string,
arrowBehaviour?: string
} 

declare type select$ISelectService = (
element: ng.IAugmentedJQuery,
controller: any,
config: select$ISelectOptions) => select$ISelect;

declare interface select$ISelectProvider {
defaults: select$ISelectOptions
} 

declare interface select$ISelect {
update(matches: any): void,
active(index: number): number,
select(index: number): void,
show(): void,
hide(): void
} 

declare interface select$ISelectOptions {
animation?: string,
placement?: string,
trigger?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
template?: string,
toggle?: boolean,
onShow(select: select$ISelect): void,
onBeforeShow(select: select$ISelect): void,
onHide(select: select$ISelect): void,
onBeforeHide(select: select$ISelect): void,
multiple?: boolean,
allNoneButtons?: boolean,
allText?: string,
noneText?: string,
maxLength?: number,
maxLengthHtml?: string,
sort?: boolean,
placeholder?: string,
iconCheckmark?: string,
id?: string
} 

declare interface tab$ITabProvider {
defaults: tab$ITabOptions
} 

declare interface tab$ITabService {
defaults: tab$ITabOptions,
controller: any
} 

declare interface tab$ITabOptions {
animation?: string,
template?: string,
navClass?: string,
activeClass?: string
} 

declare interface collapse$ICollapseProvider {
defaults: collapse$ICollapseOptions
} 

declare interface collapse$ICollapseOptions {
animation?: string,
activeClass?: string,
disallowToggle?: boolean,
startCollapsed?: boolean,
allowMultiple?: boolean
} 

declare interface dropdown$IDropdownProvider {
defaults: dropdown$IDropdownOptions
} 

declare type dropdown$IDropdownService = (
element: ng.IAugmentedJQuery,
config: dropdown$IDropdownOptions) => dropdown$IDropdown;

declare interface dropdown$IDropdown {
show(): void,
hide(): void,
destroy(): void
} 

declare interface dropdown$IDropdownOptions {
animation?: string,
placement?: string,
trigger?: string,
html?: boolean,
delay?: number | {
show: number,
hide: number
},
container?: string | boolean,
template?: string,
templateUrl?: string,
onShow(dropdown: dropdown$IDropdown): void,
onBeforeShow(dropdown: dropdown$IDropdown): void,
onHide(dropdown: dropdown$IDropdown): void,
onBeforeHide(dropdown: dropdown$IDropdown): void
} 

declare interface navbar$INavbarProvider {
defaults: navbar$INavbarOptions
} 

declare interface navbar$INavbarOptions {
activeClass?: string,
routeAttr?: string
} 

declare interface navbar$INavbarService {
defaults: navbar$INavbarOptions
} 

declare interface scrollspy$IScrollspyProvider {
defaults: scrollspy$IScrollspyOptions
} 

declare type scrollspy$IScrollspyService = (
element: ng.IAugmentedJQuery,
options: scrollspy$IScrollspyOptions) => scrollspy$IScrollspy;

declare interface scrollspy$IScrollspy {
checkOffsets(): void,
trackElement(target: any, source: any): void,
untrackElement(target: any, source: any): void,
activate(index: number): void
} 

declare interface scrollspy$IScrollspyOptions {
target?: string,
offset?: number
} 

declare interface affix$IAffixProvider {
defaults: affix$IAffixOptions
} 

declare type affix$IAffixService = (element: ng.IAugmentedJQuery, options: affix$IAffixOptions) => affix$IAffix;

declare interface affix$IAffix {
init(): void,
destroy(): void,
checkPositionWithEventLoop(): void,
checkPosition(): void
} 

declare interface affix$IAffixOptions {
offsetTop?: number,
offsetBottom?: number,
offsetParent?: number,
offsetUnpin?: number
} 
    }
