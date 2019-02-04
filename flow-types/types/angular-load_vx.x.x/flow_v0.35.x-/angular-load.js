declare module 'angular-load' {
        declare interface load$IAngularLoadService {
loadScript(url: string): ng.IPromise<any>,
loadCSS(url: string): ng.IPromise<any>
} 
    }
