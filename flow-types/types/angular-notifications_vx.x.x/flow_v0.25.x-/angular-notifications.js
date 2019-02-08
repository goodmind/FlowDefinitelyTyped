declare interface notifications$IAnimation {
  duration: number;
  enabled: boolean;
}

declare interface notifications$ISettings {
  info: notifications$IAnimation;
  warning: notifications$IAnimation;
  error: notifications$IAnimation;
  success: notifications$IAnimation;
  progress: notifications$IAnimation;
  custom: notifications$IAnimation;
  details: boolean;
  localStorage: boolean;
  html5Mode: boolean;
  html5DefaultIcon: string;
}

declare interface notifications$INotification {
  type: string;
  image: string;
  icon: string;
  title: string;
  content: string;
  timestamp: string;
  userData: string;
}

declare type notifications$INotificationFactory = {
  disableHtml5Mode(): void,
  disableType(notificationType: string): void,
  enableHtml5Mode(): void,
  enableType(notificationType: string): void,
  getSettings(): notifications$ISettings,
  toggleType(notificationType: string): void,
  toggleHtml5Mode(): void,
  requestHtml5ModePermissions(): boolean,
  getAll(): Array<notifications$INotification>,
  getQueue(): Array<notifications$INotification>,
  info(title: string): notifications$INotification,
  info(title: string, content: string): notifications$INotification,
  info(
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  error(title: string): notifications$INotification,
  error(title: string, content: string): notifications$INotification,
  error(
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  success(title: string): notifications$INotification,
  success(title: string, content: string): notifications$INotification,
  success(
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  warning(title: string): notifications$INotification,
  warning(title: string, content: string): notifications$INotification,
  warning(
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  awesomeNotify(
    type: string,
    icon: string,
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  notify(
    image: string,
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  makeNotification(
    type: string,
    image: string,
    icon: string,
    title: string,
    content: string,
    userData: any
  ): notifications$INotification,
  save(): void,
  restore(): void,
  clear(): void
} & angular.IModule;
declare module "angular" {
}
declare module "angular-notifications" {
  import typeof * as angular from "angular";
}
