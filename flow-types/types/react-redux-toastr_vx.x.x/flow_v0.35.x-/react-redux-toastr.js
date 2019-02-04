declare module 'react-redux-toastr' {
        import type {
          Component
        } from 'react';

	import type {
          Action,Reducer
        } from 'redux';

	declare export type iconType = "success" | "info" | "warning" | "error";
	declare export type positionType = "top-left"
| "top-center"
| "top-right"
| "bottom-left"
| "bottom-center"
| "bottom-right";
	declare export type toastType = "success"
| "info"
| "warning"
| "light"
| "error"
| "confirm"
| "message";
	declare export type transitionInType = "bounceIn" | "bounceInDown" | "fadeIn";
	declare export type transitionOutType = "bounceOut" | "bounceOutUp" | "fadeOut";
	declare interface BasicToastrOptions {
attention?: boolean,
className?: string,
component?: Component | JSX.Element,
icon?: JSX.Element,
onCloseButtonClick?: () => void,
onHideComplete?: () => void,
onShowComplete?: () => void,
onToastrClick?: () => void,
progressBar?: boolean,
removeOnHover?: boolean,
showCloseButton?: boolean,
timeOut?: number,
transitionIn?: transitionInType,
transitionOut?: transitionOutType
} 
	declare interface LightToastrOptions {
attention?: boolean,
className?: string,
component?: JSX.Element,
icon?: iconType | JSX.Element,
onCloseButtonClick?: () => void,
onHideComplete?: () => void,
onShowComplete?: () => void,
progressBar?: boolean,
removeOnHover?: boolean,
showCloseButton?: boolean,
status?: iconType,
timeOut?: number,
transitionIn?: transitionInType,
transitionOut?: transitionOutType
} 
	declare interface ConfirmToastrOptions {
disableCancel?: boolean,
onCancel?: () => void,
onOk?: () => void
} 
	declare interface ConfirmToastrCustomOptions {
component: JSX.Element
} 
	declare export interface Toastr {
id: string,
message?: string,
options: BasicToastrOptions | LightToastrOptions,
position: positionType,
title?: string,
type: toastType
} 
	declare export interface AddToastPayload {
id?: string,
message?: string,
options?: BasicToastrOptions | LightToastrOptions,
position?: positionType,
title?: string,
type: toastType
} 
	declare export interface ToastrState {
confirm?: {
id: string,
message: string,
options: ConfirmToastrOptions | ConfirmToastrCustomOptions,
show: boolean
},
toastrs: Toastr[]
} 
	declare interface ReduxToastrProps {
confirmOptions?: {
cancelText: string,
okText: string
},
newestOnTop?: boolean,
options?: any,
position?: positionType,
preventDuplicates?: boolean,
progressBar?: boolean,
timeOut?: number,
toastr?: ToastrState,
transitionIn?: transitionInType,
transitionOut?: transitionOutType,
className?: string,
closeOnToastrClick?: boolean
} 
	declare interface ToastrEmitter {
clean: () => void,
confirm: (message: string, options: ConfirmToastrOptions) => void,
error: (title: string, message: string, options?: BasicToastrOptions) => void,
info: (title: string, message: string, options?: BasicToastrOptions) => void,
light: (title: string, message: string, options?: LightToastrOptions) => void,
message: (title: string, message: string, options?: BasicToastrOptions) => void,
removeByType: (type: string) => void,
success: (title: string, message: string, options?: BasicToastrOptions) => void,
warning: (title: string, message: string, options?: BasicToastrOptions) => void
} 
	declare interface ToastrActionCreators {
add: (toastr: AddToastPayload) => Action,
clean: () => Action,
hideConfirm: () => Action,
remove: (id: string) => Action,
removeByType: (type: toastType) => Action,
showConfirm: (confirm: ConfirmToastrOptions | ConfirmToastrCustomOptions) => Action
} 
	declare export default class ReduxToastr mixins Component<ReduxToastrProps> {}
	declare export var actions: ToastrActionCreators;
	declare export var reducer: Reducer<ToastrState>;
	declare export var toastr: ToastrEmitter;
    }
