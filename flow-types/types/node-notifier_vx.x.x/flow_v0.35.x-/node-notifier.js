declare module 'node-notifier' {
        declare type nodeNotifier$NodeNotifier = {
notify(
notification?: WindowsBalloon$Notification,
callback?: nodeNotifier$NotificationCallback): nodeNotifier$NodeNotifier,
NotificationCenter: NotificationCenter,
NotifySend: NotifySend,
WindowsToaster: WindowsToaster,
WindowsBalloon: WindowsBalloon,
Growl: Growl
} & NodeJS.EventEmitter


declare interface nodeNotifier$Notification {
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,
subtitle?: string,

/**
 * Attach image? (Absolute path)
 */
contentImage?: string,

/**
 * URL to open on click
 */
open?: string,
title?: string,
message?: string,
icon?: string,

/**
 * Specifies the urgency level  (low,  normal,  critical).
 */
urgency?: string,

/**
 * Specifies  the  timeout  in  milliseconds at which to expire the notification
 */
time?: number,

/**
 * Specifies the notification category
 */
category?: string,

/**
 * Specifies basic extra data to pass. Valid types are int, double, string and byte.
 */
hint?: string,
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,

/**
 * whether or not to sticky the notification (defaults to false)
 */
sticky?: boolean,

/**
 * type of notification to use (defaults to the first registered type)
 */
label: string,

/**
 * the priority of the notification from lowest (-2) to highest (2)
 */
priority: number,
title?: string,
message?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * How long to show balloons in ms
 */
time?: number,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean
} 

declare interface nodeNotifier$NotificationCallback {
(err: any, response: any): any
} 

declare interface nodeNotifier$Option {
withFallback?: boolean,
customPath?: string,
name?: string,
host?: string,
port?: number
} 
	declare var nodeNotifier: nodeNotifier$nodeNotifier$NodeNotifier;
	declare module.exports: typeof nodeNotifier

    }
declare module 'node-notifier/notifiers/notificationcenter' {
        declare class NotificationCenter  {
constructor(option?: notifier.nodeNotifier$Option): this;
notify(
notification?: NotificationCenter$nodeNotifier$Notification,
callback?: notifier.nodeNotifier$NotificationCallback): NotificationCenter
}
	declare interface NotificationCenter$Notification {
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,
subtitle?: string,

/**
 * Attach image? (Absolute path)
 */
contentImage?: string,

/**
 * URL to open on click
 */
open?: string,
title?: string,
message?: string,
icon?: string,

/**
 * Specifies the urgency level  (low,  normal,  critical).
 */
urgency?: string,

/**
 * Specifies  the  timeout  in  milliseconds at which to expire the notification
 */
time?: number,

/**
 * Specifies the notification category
 */
category?: string,

/**
 * Specifies basic extra data to pass. Valid types are int, double, string and byte.
 */
hint?: string,
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,

/**
 * whether or not to sticky the notification (defaults to false)
 */
sticky?: boolean,

/**
 * type of notification to use (defaults to the first registered type)
 */
label: string,

/**
 * the priority of the notification from lowest (-2) to highest (2)
 */
priority: number,
title?: string,
message?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * How long to show balloons in ms
 */
time?: number,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean
} 
	declare module.exports: typeof NotificationCenter

    }
declare module 'node-notifier/notifiers/notifysend' {
        declare class NotifySend  {
constructor(option?: notifier.nodeNotifier$Option): this;
notify(
notification?: NotifySend$NotificationCenter$Notification,
callback?: notifier.nodeNotifier$NotificationCallback): NotifySend
}
	declare interface NotifySend$Notification {
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,
subtitle?: string,

/**
 * Attach image? (Absolute path)
 */
contentImage?: string,

/**
 * URL to open on click
 */
open?: string,
title?: string,
message?: string,
icon?: string,

/**
 * Specifies the urgency level  (low,  normal,  critical).
 */
urgency?: string,

/**
 * Specifies  the  timeout  in  milliseconds at which to expire the notification
 */
time?: number,

/**
 * Specifies the notification category
 */
category?: string,

/**
 * Specifies basic extra data to pass. Valid types are int, double, string and byte.
 */
hint?: string,
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,

/**
 * whether or not to sticky the notification (defaults to false)
 */
sticky?: boolean,

/**
 * type of notification to use (defaults to the first registered type)
 */
label: string,

/**
 * the priority of the notification from lowest (-2) to highest (2)
 */
priority: number,
title?: string,
message?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * How long to show balloons in ms
 */
time?: number,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean
} 
	declare module.exports: typeof NotifySend

    }
declare module 'node-notifier/notifiers/toaster' {
        declare class WindowsToaster  {
constructor(option?: notifier.nodeNotifier$Option): this;
notify(
notification?: notifier.NotifySend$Notification,
callback?: notifier.nodeNotifier$NotificationCallback): WindowsToaster
}
	declare module.exports: typeof WindowsToaster

    }
declare module 'node-notifier/notifiers/growl' {
        declare class Growl  {
constructor(option?: Growl$nodeNotifier$Option): this;
notify(
notification?: Growl$NotifySend$Notification,
callback?: notifier.nodeNotifier$NotificationCallback): Growl
}
	declare interface Growl$Option {
withFallback?: boolean,
customPath?: string,
name?: string,
host?: string,
port?: number
} 

declare interface Growl$Notification {
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,
subtitle?: string,

/**
 * Attach image? (Absolute path)
 */
contentImage?: string,

/**
 * URL to open on click
 */
open?: string,
title?: string,
message?: string,
icon?: string,

/**
 * Specifies the urgency level  (low,  normal,  critical).
 */
urgency?: string,

/**
 * Specifies  the  timeout  in  milliseconds at which to expire the notification
 */
time?: number,

/**
 * Specifies the notification category
 */
category?: string,

/**
 * Specifies basic extra data to pass. Valid types are int, double, string and byte.
 */
hint?: string,
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,

/**
 * whether or not to sticky the notification (defaults to false)
 */
sticky?: boolean,

/**
 * type of notification to use (defaults to the first registered type)
 */
label: string,

/**
 * the priority of the notification from lowest (-2) to highest (2)
 */
priority: number,
title?: string,
message?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * How long to show balloons in ms
 */
time?: number,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean
} 
	declare module.exports: typeof Growl

    }
declare module 'node-notifier/notifiers/balloon' {
        declare class WindowsBalloon  {
constructor(option?: notifier.Growl$Option): this;
notify(
notification?: WindowsBalloon$Growl$Notification,
callback?: notifier.nodeNotifier$NotificationCallback): WindowsBalloon
}
	declare interface WindowsBalloon$Notification {
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,
subtitle?: string,

/**
 * Attach image? (Absolute path)
 */
contentImage?: string,

/**
 * URL to open on click
 */
open?: string,
title?: string,
message?: string,
icon?: string,

/**
 * Specifies the urgency level  (low,  normal,  critical).
 */
urgency?: string,

/**
 * Specifies  the  timeout  in  milliseconds at which to expire the notification
 */
time?: number,

/**
 * Specifies the notification category
 */
category?: string,

/**
 * Specifies basic extra data to pass. Valid types are int, double, string and byte.
 */
hint?: string,
title?: string,
message?: string,

/**
 * Absolute path (not balloons)
 */
icon?: string,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean,

/**
 * whether or not to sticky the notification (defaults to false)
 */
sticky?: boolean,

/**
 * type of notification to use (defaults to the first registered type)
 */
label: string,

/**
 * the priority of the notification from lowest (-2) to highest (2)
 */
priority: number,
title?: string,
message?: string,

/**
 * Only Notification Center or Windows Toasters
 */
sound?: boolean,

/**
 * How long to show balloons in ms
 */
time?: number,

/**
 * Wait with callback until user action is taken on notification
 */
wait?: boolean
} 
	declare module.exports: typeof WindowsBalloon

    }
