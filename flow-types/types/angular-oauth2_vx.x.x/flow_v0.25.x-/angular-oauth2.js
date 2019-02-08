declare interface oauth2$OAuthConfig {
  baseUrl: string;
  clientId: string;
  clientSecret?: string;
  grantPath?: string;
  revokePath?: string;
}

declare interface oauth2$OAuthProvider {
  configure(params: oauth2$OAuthConfig): oauth2$OAuthConfig;
}

declare interface oauth2$Data {
  username: string;
  password: string;
}

declare interface oauth2$OAuth {
  isAuthenticated(): boolean;
  getAccessToken(data: oauth2$Data, options?: any): IPromise<string>;
  getRefreshToken(data?: oauth2$Data, options?: any): IPromise<string>;
  revokeToken(data?: oauth2$Data, options?: any): IPromise<string>;
}

declare interface oauth2$OAuthTokenConfig {
  name: string;
  options: any;
}

declare interface oauth2$OAuthTokenOptions {
  secure: boolean;
}

declare interface oauth2$OAuthTokenProvider {
  configure(params: oauth2$OAuthTokenConfig): oauth2$OAuthTokenConfig;
}
declare module "angular" {
}
declare module "angular-oauth2" {
  import typeof * as angular from "angular";
}
