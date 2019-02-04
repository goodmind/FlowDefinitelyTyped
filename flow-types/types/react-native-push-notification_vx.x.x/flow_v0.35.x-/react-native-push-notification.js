declare module 'react-native-push-notification' {
        declare export interface PushNotificationPermissions {
alert?: boolean,
badge?: boolean,
sound?: boolean
} 
	declare export interface PushNotification {
foreground: boolean,
userInteraction: boolean,
message: string | {[key: string]: any},
data: {[key: string]: any},
badge: number,
alert: {[key: string]: any},
sound: string,
finish: (fetchResult: string) => void,
configure(options: PushNotificationOptions): void,
unregister(): void,
localNotification(details: PushNotificationObject): void,
localNotificationSchedule(details: PushNotificationScheduleObject): void,
requestPermissions(): void,
presentLocalNotification(details: PushNotificationObject): void,
scheduleLocalNotification(details: PushNotificationScheduleObject): void,
cancelLocalNotifications(details: {[key: string]: any}): void,
cancelAllLocalNotifications(): void,
setApplicationIconBadgeNumber(badgeCount: number): void,
getApplicationIconBadgeNumber(callback: (badgeCount: number) => void): void,
popInitialNotification(callback: (notification: PushNotification | null) => void): void,
abandonPermissions(): void,
checkPermissions(callback: (permissions: PushNotificationPermissions) => void): void,
registerNotificationActions(actions: string[]): void,
clearAllNotifications(): void
} 
	declare export interface PushNotificationOptions {
onRegister?: (token: {
os: string,
token: string
}) => void,
onNotification?: (notification: PushNotification) => void,
senderID?: string,
permissions?: PushNotificationPermissions,
popInitialNotification?: boolean,
requestPermissions?: boolean
} 
	declare export type PriorityType = "max"
| "high"
| "low"
| "min"
| "default";
	declare export type RepeatType = "week"
| "day"
| "hour"
| "minute"
| "time";
	declare export class PushNotificationObject  {
id: string;
ticker: string;
autoCancel: boolean;
largeIcon: string;
smallIcon: string;
bigText: string;
subText: string;
color: string;
vibrate: boolean;
vibration: number;
tag: string;
group: string;
ongoing: boolean;
priority: PriorityType;
alertAction: any;
category: any;
userInfo: any;
title: string;
message: string;
playSound: boolean;
soundName: string;
number: string;
repeatType: RepeatType;
actions: string
}
	declare export class PushNotificationScheduleObject mixins PushNotificationObject {
date: Date
}
	declare var PushNotification: PushNotification;
	declare export default typeof PushNotification

    }
