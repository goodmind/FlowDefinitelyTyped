declare interface httpAuth$IAuthService {
  loginConfirmed(data?: any, configUpdater?: Function): void;
  loginCancelled(data?: any, reason?: any): void;
}

declare interface httpAuth$IHttpBuffer {
  append(
    config: ng.IRequestConfig,
    deferred: {
      resolve(data: any): void,
      reject(data: any): void
    }
  ): void;
  rejectAll(reason?: any): void;
  retryAll(updater?: Function): void;
}
declare module "angular" {
}
declare module "angular-http-auth" {
  import typeof * as ng from "angular";
}
