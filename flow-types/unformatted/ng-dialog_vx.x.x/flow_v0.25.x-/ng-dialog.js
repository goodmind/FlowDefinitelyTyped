declare module 'ng-dialog' {
        import typeof * as angular from 'angular';

	declare export type IDialogService = angular.dialog.dialog$IDialogService;
	declare export type IDialogOpenResult = angular.dialog.dialog$IDialogOpenResult;
	declare export type IDialogClosePromise = angular.dialog.dialog$IDialogClosePromise;
	declare export type IDialogProvider = angular.dialog.dialog$IDialogProvider;
	declare export type IDialogScope = angular.dialog.dialog$IDialogScope;
	declare export type IDialogConfirmScope = angular.dialog.dialog$IDialogConfirmScope;
	declare export type IDialogOptions = angular.dialog.dialog$IDialogOptions;
	declare export type IDialogOpenOptions = angular.dialog.dialog$IDialogOpenOptions;
	declare export type IDialogOpenConfirmOptions = angular.dialog.dialog$IDialogOpenConfirmOptions;
	declare module 'angular' {
        declare interface dialog$IDialogService {
getDefaults(): dialog$IDialogOptions,
open(options: dialog$IDialogOpenOptions): dialog$IDialogOpenResult,
openConfirm(options: dialog$IDialogOpenConfirmOptions): IPromise<any>,

/**
 * Determine whether the specified dialog is open or not.
 * @param id Dialog id to check for.
 * @returns {boolean} Indicating whether it exists or not.
 */
isOpen(id: string): boolean,
close(id: string, value?: any): void,
closeAll(value?: any): void,
getOpenDialogs(): string[]
} 

declare interface dialog$IDialogOpenResult {
id: string,
close: (value?: any) => void,
closePromise: IPromise<dialog$IDialogClosePromise>
} 

declare interface dialog$IDialogClosePromise {
id: string,
value: any
} 

declare type dialog$IDialogProvider = {

/**
 * Default options for the dialogs.
 * @param defaultOptions
 * @returns {}
 */
setDefaults(defaultOptions: dialog$IDialogOptions): void,

/**
 * Adds an additional listener on every $locationChangeSuccess event and gets update version of html into dialog.
 * May be useful in some rare cases when you're dependant on DOM changes, defaults to false.
 * @param {boolean} force
 */
setForceHtmlReload(force: boolean): void,

/**
 * Adds additional listener on every $locationChangeSuccess event and gets updated version of body into dialog.
 * Maybe useful in some rare cases when you're dependant on DOM changes, defaults to false. Use it in module's
 * config as provider instance:
 * @param {boolean} force
 */
setForceBodyReload(force: boolean): void
} & angular.IServiceProvider



/**
 * Dialog Scope which extends the $scope.
 */
declare type dialog$IDialogScope = {

/**
 * This allows you to close dialog straight from handler in a popup element.
 * @param value Any value passed to this function will be attached to the object which resolves on the close promise for this dialog.
For dialogs opened with the openConfirm() method the value is used as the reject reason.
 */
closeThisDialog(value?: any): void,

/**
 * Any serializable data that you want to be stored in the controller's dialog scope.
 * From version 0.3.6 $scope.ngDialogData keeps references to the objects instead of copying them.
 */
ngDialogData: string | {} | any[],

/**
 * The id of the dialog. If you you ngDialogData, it'll be also available under ngDialogData.ngDialogId
 */
ngDialogId: string
} & angular.IScope


declare type dialog$IDialogConfirmScope = {

/**
 * Use this method to close the dialog and resolve the promise that was returned when opening the modal.
 * 
 * The function accepts a single optional parameter which is used as the value of the resolved promise.
 * @param {any} value - The value with which the promise will resolve
 */
confirm(value?: any): void
} & dialog$IDialogScope


declare interface dialog$IDialogOptions {

/**
 * This option allows you to control the dialog's look, you can use built-in themes or create your own styled modals.
 * It will be appended with the "ngdialog" class e.g. className is "default-theme flat-ui" it will be class="ngdialog default-theme flat-ui".
 */
className?: string,

/**
 * Unlike the className property, which overrides any default classes specified through the setDefaults() method (see docs), appendClassName allows for the addition of a class on top of any defaults.
 */
appendClassName?: string,

/**
 * If true then animation for the dialog will be disabled, default false.
 */
disableAnimation?: boolean,

/**
 * If false it allows to hide overlay div behind the modals, default true.
 */
overlay?: boolean,

/**
 * If false it allows to hide close button on modals, default true.
 */
showClose?: boolean,

/**
 * It allows to close modals by clicking Esc button, default true.
 * This will close all open modals if there several of them open at the same time.
 */
closeByEscape?: boolean,

/**
 * It allows to close modals by clicking on overlay background, default true. If @see Hammer.js is loaded, it will listen for tap instead of click.
 */
closeByDocument?: boolean,

/**
 * Listens for $locationChangeSuccess event and closes open dialogs if true (also handles the ui.router $stateChangeSuccess event if ui.router is used)
 * default : false
 */
closeByNavigation?: boolean,

/**
 * If true allows to use plain string as template, default false.
 */
plain?: boolean,

/**
 * Give a name for a dialog instance. It is useful for identifying specific dialog if there are multiple dialog boxes opened.
 */
name?: string | number,

/**
 * Provide either the name of a function or a function to be called before the dialog is closed.
 * If the callback function specified in the option returns false then the dialog will not be closed.
 * Alternatively, if the callback function returns a promise that gets resolved the dialog will be closed.
 * 
 * more: https://github.com/likeastore/ngDialog#preclosecallback-string--function
 */
preCloseCallback?: string | Function,

/**
 * Pass false to disable template caching. Useful for developing purposes, default is true.
 */
cache?: boolean,

/**
 * Specify your element where to append dialog instance, accepts selector string (e.g. #yourId, .yourClass).
 * If not specified appends dialog to body as default behavior.
 */
appendTo?: string,

/**
 * When true, ensures that the focused element remains within the dialog to conform to accessibility recommendations.
 * Default value is true
 */
trapFocus?: boolean,

/**
 * When true, closing the dialog restores focus to the element that launched it. Designed to improve keyboard
 * accessibility. Default value is true
 */
preserveFocus?: boolean,

/**
 * When true, automatically selects appropriate values for any unspecified accessibility attributes. Default value is true
 */
ariaAuto?: boolean,

/**
 * Specifies the value for the role attribute that should be applied to the dialog element. Default value is null (unspecified)
 */
ariaRole?: string,

/**
 * Specifies the value for the aria-labelledby attribute that should be applied to the dialog element.
 * Default value is null (unspecified)
 * 
 * If specified, the value is not validated against the DOM
 */
ariaLabelledById?: string,

/**
 * Specifies the CSS selector for the element to be referenced by the aria-labelledby attribute on the dialog element. Default value is null (unspecified)
 * 
 * If specified, the first matching element is used.
 */
ariaLabelledBySelector?: string,

/**
 * Specifies the value for the aria-describedby attribute that should be applied to the dialog element. Default value is null (unspecified)
 * 
 * If specified, the value is not validated against the DOM.
 */
ariaDescribedById?: string,

/**
 * Specifies the CSS selector for the element to be referenced by the aria-describedby attribute on the dialog element. Default value is null (unspecified)
 * 
 * If specified, the first matching element is used.
 */
ariaDescribedBySelector?: string,

/**
 * Specifies the width of the dialog content element. Default value is null (unspecified)
 */
width?: string | number,

/**
 * Specifies the height of the dialog content element. Default value is null (unspecified)
 */
height?: string | number
} 


/**
 * Options which are provided to open a dialog.
 */
declare type dialog$IDialogOpenOptions = {
template: string,
controller?: string | any[] | any,
controllerAs?: string,
bindToController?: boolean,

/**
 * Scope object that will be passed to dialog. If you use controller with separate $scope service this object will be passed to $scope.$parent param.
 */
scope?: dialog$IDialogScope,

/**
 * An optional map of dependencies which should be injected into the controller. If any of these dependencies
 * are promises, ngDialog will wait for them all to be resolved or one to be rejected before the controller
 * is instantiated.
 */
resolve?: {
[key: string]: string | Function
},

/**
 * Any serializable data that you want to be stored in the controller's dialog scope. ($scope.ngDialogData).
 * From version 0.3.6 $scope.ngDialogData keeps references to the objects instead of copying them.
 */
data?: string | {} | any[]
} & dialog$IDialogOptions


declare type dialog$IDialogOpenConfirmOptions = {
scope?: dialog$IDialogConfirmScope
} & dialog$IDialogOpenOptions

    }

    }
