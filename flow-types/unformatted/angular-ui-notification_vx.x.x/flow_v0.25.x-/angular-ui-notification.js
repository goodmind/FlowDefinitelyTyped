declare module 'angular-ui-notification' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare type uiNotification$XPosition = "right" | "left" | "center";

declare type uiNotification$YPosition = "top" | "bottom";

declare type uiNotification$MessageType = "primary"
| "info"
| "success"
| "warning"
| "error";

declare interface uiNotification$IGlobalMessageOptions {
delay?: number,
startTop?: number,
startRight?: number,
verticalSpacing?: number,
horizontalSpacing?: number,
positionX?: uiNotification$XPosition,
positionY?: uiNotification$YPosition,
replaceMessage?: boolean,
templateUrl?: string,
onClose?: (element: any) => any,
closeOnClick?: boolean,
maxCount?: number
} 

declare interface uiNotification$IMessageOptions {
title?: string,
message?: string,
templateUrl?: string,
delay?: number,
type?: uiNotification$MessageType,
positionX?: uiNotification$XPosition,
positionY?: uiNotification$YPosition,
replaceMessage?: boolean,
closeOnClick?: boolean
} 

declare interface uiNotification$INotificationScope {
kill(isHard: boolean): void
} 

declare interface uiNotification$INotificationProvider {
setOptions(options: uiNotification$IGlobalMessageOptions): void
} 

declare type uiNotification$Message = string | uiNotification$IMessageOptions;

declare interface uiNotification$INotificationService {
primary(message: uiNotification$Message): IPromise<uiNotification$INotificationScope>,
info(message: uiNotification$Message): IPromise<uiNotification$INotificationScope>,
success(message: uiNotification$Message): IPromise<uiNotification$INotificationScope>,
warning(message: uiNotification$Message): IPromise<uiNotification$INotificationScope>,
error(message: uiNotification$Message): IPromise<uiNotification$INotificationScope>,
clearAll(): void,
(message: uiNotification$Message, type?: uiNotification$MessageType): IPromise<uiNotification$INotificationScope>
} 
    }

    }
