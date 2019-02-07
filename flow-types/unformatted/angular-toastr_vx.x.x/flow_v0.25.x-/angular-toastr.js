declare module 'angular-toastr' {
        import typeof * as angular from 'angular';

	declare export type IToastBaseConfig = angular.toastr.toastr$IToastBaseConfig;
	declare export type IToastContainerConfig = angular.toastr.toastr$IToastContainerConfig;
	declare export type IToastConfig = angular.toastr.toastr$IToastConfig;
	declare export type IToastrConfig = angular.toastr.toastr$IToastrConfig;
	declare export type IToastScope = angular.toastr.toastr$IToastScope;
	declare export type IToast = angular.toastr.toastr$IToast;
	declare export type IToastOptions = angular.toastr.toastr$IToastOptions;
	declare export type IToastrService = angular.toastr.toastr$IToastrService;
	declare module 'angular' {
        declare interface toastr$IToastBaseConfig {
allowHtml?: boolean,
closeButton?: boolean,
closeHtml?: string,
extendedTimeOut?: number,
extraData?: any,
messageClass?: string,
onHidden?: (wasClicked: boolean, toast: angular.toastr.toastr$IToast) => void,
onShown?: (toast: angular.toastr.toastr$IToast) => void,
onTap?: (toast: angular.toastr.toastr$IToast) => void,
progressBar?: boolean,
tapToDismiss?: boolean,
templates?: {
toast?: string,
progressbar?: string
},
timeOut?: number,
titleClass?: string,
toastClass?: string
} 

declare interface toastr$IToastContainerConfig {
autoDismiss?: boolean,
containerId?: string,
maxOpened?: number,
newestOnTop?: boolean,
positionClass?: string,
preventDuplicates?: boolean,
preventOpenDuplicates?: boolean,
target?: string
} 

declare type toastr$IToastConfig = {
iconClasses?: {
error?: string,
info?: string,
success?: string,
warning?: string
}
} & toastr$IToastBaseConfig


declare type toastr$IToastrConfig = {} & toastr$IToastContainerConfig & toastr$IToastConfig


declare type toastr$IToastScope = {
message: string,
options: toastr$IToastConfig,
title: string,
toastId: number,
toastType: string
} & angular.IScope


declare interface toastr$IToast {
el: angular.IAugmentedJQuery,
iconClass: string,
isOpened: boolean,
open: angular.IPromise<any>,
scope: toastr$IToastScope,
toastId: number
} 

declare type toastr$IToastOptions = {
iconClass?: string,
target?: string
} & toastr$IToastBaseConfig


declare interface toastr$IToastrService {

/**
 * Return the number of active toasts in screen.
 */
active(): number,

/**
 * Remove toast from screen. If no toast is passed in, all toasts will be closed.
 * @param {toastr$IToast} toast Optional toast object to delete
 */
clear(toast?: toastr$IToast): void,

/**
 * Create error toast notification message.
 * @param {String} message Message to show on toast
 * @param {String} title Title to show on toast
 * @param {toastr$IToastOptions} options Override default toast options
 */
error(message: string, title?: string, options?: toastr$IToastOptions): toastr$IToast,

/**
 * Create info toast notification message.
 * @param {String} message Message to show on toast
 * @param {String} title Title to show on toast
 * @param {toastr$IToastOptions} options Override default toast options
 */
info(message: string, title?: string, options?: toastr$IToastOptions): toastr$IToast,

/**
 * Create success toast notification message.
 * @param {String} message Message to show on toast
 * @param {String} title Title to show on toast
 * @param {toastr$IToastOptions} options Override default toast options
 */
success(message: string, title?: string, options?: toastr$IToastOptions): toastr$IToast,

/**
 * Create warning toast notification message.
 * @param {String} message Message to show on toast
 * @param {String} title Title to show on toast
 * @param {toastr$IToastOptions} options Override default toast options
 */
warning(message: string, title?: string, options?: toastr$IToastOptions): toastr$IToast
} 
    }

    }
