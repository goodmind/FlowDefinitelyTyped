declare module 'react-notification-system-redux' {
        import type {
          Component
        } from 'react';

	import type {
          Action
        } from 'redux';

	import type {
          Attributes,Notification
        } from 'react-notification-system';

	declare module.exports: typeof Notifications

	declare class Notifications mixins Component<Notifications$Notifications$NotificationsProps> {}
	
      declare var npm$namespace$Notifications: {
        show: typeof Notifications$show,
hide: typeof Notifications$hide,
removeAll: typeof Notifications$removeAll,
        reducer: typeof Notifications$reducer,
error: typeof Notifications$error,
info: typeof Notifications$info,
success: typeof Notifications$success,
warning: typeof Notifications$warning,
      }
declare type Notifications$NotificationsState = Notification[];

declare type Notifications$NotificationLevel = "error" | "warning" | "info" | "success";

declare type Notifications$NotificationsReducer<A: Action> = (
state: Notifications$NotificationsState,
action: A) => Notifications$NotificationsState;

declare type Notifications$NotificationShow = (opts?: Notification) => Action;

declare type Notifications$NotificationsProps = {
notifications?: Notification[]
} & Attributes


declare var Notifications$reducer: Notifications$NotificationsReducer<any>;

declare function Notifications$show(opts?: Notification, level?: Notifications$NotificationLevel): Action


declare var Notifications$error: Notifications$NotificationShow;

declare function Notifications$hide(opts?: Notification | string | number): Action


declare var Notifications$info: Notifications$NotificationShow;

declare var Notifications$success: Notifications$NotificationShow;

declare var Notifications$warning: Notifications$NotificationShow;

declare function Notifications$removeAll(): Action

    }
