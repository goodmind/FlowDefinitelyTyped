declare module 'reapop' {
        import typeof * as React from 'react';

	import type {
          Dispatch
        } from 'redux';

	
/**
 * Add a notification (thunk action creator)
 * 
 * We use a thunk here to create an ADD_NOTIFICATION action
 * and only return the notification object.
 */
declare export function addNotification(notification: Notification): (dispatch: Dispatch<any>) => Notification

	
/**
 * Update a notification (thunk action creator)
 * 
 * We use a thunk here to create an UPDATE_NOTIFICATION action
 * and only return the notification object.
 */
declare export function updateNotification(notification: Notification): (dispatch: Dispatch<any>) => Notification

	
/**
 * Remove a notification (action creator)
 */
declare export function removeNotification(notification: Notification): {
type: string,
payload: Notification
}

	
/**
 * Remove all notifications (action creator)
 */
declare export function removeNotifications(): {
type: string
}

	declare interface Actions {
addNotification(notification: Notification): Notification,
updateNotification(notification: Notification): Notification,
removeNotification(notification: Notification): {
type: string,
payload: Notification
},
removeNotifications(): {
type: string
}
} 
	declare export var actions: Actions;
	declare type ADD_NOTIFICATION = string;
	declare type UPDATE_NOTIFICATION = string;
	declare type REMOVE_NOTIFICATION = string;
	declare type REMOVE_NOTIFICATIONS = string;
	declare type ActionTypes = ADD_NOTIFICATION | UPDATE_NOTIFICATION | REMOVE_NOTIFICATION | REMOVE_NOTIFICATIONS;
	declare interface Types {
ADD_NOTIFICATION: ADD_NOTIFICATION,
UPDATE_NOTIFICATION: UPDATE_NOTIFICATION,
REMOVE_NOTIFICATION: REMOVE_NOTIFICATION,
REMOVE_NOTIFICATIONS: REMOVE_NOTIFICATIONS
} 
	declare export var types: Types;
	declare export function reducer(
defaultNotification?: Notification): (
state: Notification[],
notification: {
type: ActionTypes,
payload: any
}) => Notification[]

	declare type DEFAULT_STATUS = string;
	declare type INFO_STATUS = string;
	declare type SUCCESS_STATUS = string;
	declare type WARNING_STATUS = string;
	declare type ERROR_STATUS = string;
	declare type STATUSES = DEFAULT_STATUS
| INFO_STATUS
| SUCCESS_STATUS
| WARNING_STATUS
| ERROR_STATUS;
	declare interface STATUS_TYPES {
default: DEFAULT_STATUS,
info: INFO_STATUS,
success: SUCCESS_STATUS,
warning: WARNING_STATUS,
error: ERROR_STATUS
} 
	declare export var STATUS: STATUS_TYPES;
	declare type TOP = string;
	declare type TOP_CENTER = string;
	declare type TOP_LEFT_POSITION = string;
	declare type TOP_RIGHT_POSITION = string;
	declare type BOTTOM = string;
	declare type BOTTOM_CENTER = string;
	declare type BOTTOM_LEFT_POSITION = string;
	declare type BOTTOM_RIGHT_POSITION = string;
	declare type POSITION = TOP
| TOP_CENTER
| TOP_LEFT_POSITION
| TOP_RIGHT_POSITION
| BOTTOM
| BOTTOM_CENTER
| BOTTOM_LEFT_POSITION
| BOTTOM_RIGHT_POSITION;
	declare interface POSITIONS_TYPES {
top: TOP,
topCenter: TOP_CENTER,
topLeft: TOP_LEFT_POSITION,
topRight: TOP_RIGHT_POSITION,
bottom: BOTTOM,
bottomCenter: BOTTOM_CENTER,
bottomLeft: BOTTOM_LEFT_POSITION,
bottomRight: BOTTOM_RIGHT_POSITION
} 
	declare export var POSITIONS: POSITIONS_TYPES;
	declare interface Button {
name: string,
primary: boolean,
onClick(): void
} 
	declare export interface Notification {
id?: string | number,
title?: string,
message?: string,
image?: string,
status?: string | number | STATUSES,
position?: string | POSITION,
dismissible?: boolean,
dismissAfter?: number,
closeButton?: boolean,
buttons?: Button[],
onAdd(): void,
onRemove(): void,
allowHTML?: boolean
} 
	declare export var DEFAULT_NOTIFICATION: Notification;
	declare export interface NotificationSystemTheme {
smallScreenMin?: number,
notificationsSystem?: {
className?: string
},
notificationsContainerClassName?: {
main?: string,
position(position: string): string
},
notificationsContainerTransition?: {
enterTimeout?: number,
leaveTimeout?: number,
name?: any
},
notificationClassName?: {
wrapper?: string,
main?: string,
meta?: string,
title?: string,
message?: string,
icon?: string,
imageContainer?: string,
image?: string,
status(status: string): string,
dismissible?: string,
closeButtonContainer(): string,
closeButton(): string,
buttons(): string,
button?: string,
buttonText?: string
}
} 
	declare export interface NotificationSystemProps {
theme: NotificationSystemTheme,
filter(notification: Notification): boolean
} 
	declare class NotificationSystem mixins React.Component<NotificationSystemProps, any> {}
	declare export default typeof NotificationSystem

    }
