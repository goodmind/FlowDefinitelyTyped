declare module 'peer-dial' {
        import typeof * as events from 'events';

	import typeof * as express from 'express';

	import typeof * as uuid from 'node-uuid';

	declare export class Server mixins events.EventEmitter {
constructor(options: ServerOptions): this;
start(): void;
stop(): void;
corsOptionsAppsDelegate(req: string, callback: (err: any, data: CorsOptions) => void): void
}
	declare export interface CorsOptions {
origin: boolean,
methods: string[],
exposedHeaders: string[]
} 
	declare export interface ServerOptions {
expressApp: express.Express,
prefix: string,
port: number,
host?: string,
uuid?: uuid.UUIDOptions,
friendlyName?: string,
manufacturer: string,
modelName: string,
maxContentLength?: number,
extraHeaders?: {[key: string]: any},
delegate: Delegate,
corsAllowOrigins: string | boolean
} 
	declare export interface Delegate {
getApp(appName: string): App,
launchApp(appName: string, launchData: string, callback: (data: string) => void): void,
stopApp(appName: string, pid: string, callback: (data: boolean) => void): void
} 
	declare export interface App {
name: string,
state: string,
allowStop: boolean,
pid: string,
launch(launchData: string): void
} 
	declare export interface AppInfo {
dialVer: string,
name: string,
options: AppInfoOptions,
state: string,
xmlns: string
} 
	declare export interface AppInfoOptions {
allowStop: string
} 
	declare export class Client mixins events.EventEmitter {
getDialDevice(
deviceDescriptionUrl: string,
callback?: (data: DialDevice, err: any) => void): void;
start(): void;
refresh(): void;
stop(): void
}
	declare export class DialDevice  {
constructor(deviceInfo: DeviceInfo): this;
getAppInfoXml(appName: string, callback?: (data: string, err: any) => void): void;
getAppInfo(appName: string, callback?: (data: AppInfo, err: any) => void): void;
launchApp(
appName: string,
launchData: string,
contentType: string,
callback?: (data: string, err: any) => void): void;
stopApp(
appName: string,
pid: string,
callback?: (data: number, err: any) => void): void
}
	declare export interface DeviceInfo {
descriptionUrl: string,
applicationUrl: string,
deviceType: string,
friendlyName: string,
manufacturer: string,
modelName: string,
UDN: string,
iconList: {[key: string]: any}[] | {
icon: {[key: string]: any}
}
} 
    }
