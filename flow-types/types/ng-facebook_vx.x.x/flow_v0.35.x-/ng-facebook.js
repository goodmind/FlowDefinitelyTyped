declare module 'ng-facebook' {
        import typeof * as angular from 'angular';

	declare module 'angular' {
        declare interface ngFacebook$IFacebookProvider {
setAppId(appId: string): ngFacebook$IFacebookProvider,
getAppId(): string,
setVersion(version: string): ngFacebook$IFacebookProvider,
getVersion(): string,
setPermissions(permissions: string | Array<string>): ngFacebook$IFacebookProvider,
getPermissions(): string,
setCustomInit(customInit: FBInitParams): ngFacebook$IFacebookProvider,
getCustomInit(): FBInitParams
} 

declare type ngFacebook$FBUIParams = ShareDialogParams
| PageTabDialogParams
| RequestsDialogParams
| SendDialogParams
| PayDialogParams
| FeedDialogParams;

declare interface ngFacebook$IFacebookService {
config<T: string | number | FBInitParams>(property: string): T,
init(): void,
setCache<T>(attr: string, val: T): void,
getCache<T>(attr: string): T,
clearCache(): void,
isConnected(): boolean,
getAuthResponse(): {},
getLoginStatus(force?: boolean): angular.IPromise<{}>,
login(permissions?: string, rerequest?: boolean): angular.IPromise<{}>,
logout(): angular.IPromise<void>,
ui(params: ngFacebook$FBUIParams): angular.IPromise<any>,
api(path: string): angular.IPromise<{}>,
api(path: string, method: string): angular.IPromise<{}>,
api(path: string, params: Object): angular.IPromise<{}>,
api(path: string, method: string, params: Object): angular.IPromise<{}>,
cachedApi(path: string): angular.IPromise<any>
} 
    }

    }
