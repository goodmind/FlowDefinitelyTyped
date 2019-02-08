declare interface jwt$JwtToken {
  iss?: string;
  sub?: string;
  aud?: string;
  exp?: number;
  nbf?: number;
  iat?: number;
  jti?: string;
  unique_name?: string;
}

declare interface jwt$IJwtHelper {
  decodeToken(token: string): jwt$JwtToken;
  getTokenExpirationDate(token: any): Date;
  isTokenExpired(token: any, offsetSeconds?: number): boolean;
}

declare interface jwt$IJwtInterceptor {
  tokenGetter(...params: any[]): string;
}

declare interface jwt$IAuthManagerServiceProvider {
  authenticate(): void;
  unauthenticate(): void;
  checkAuthOnRefresh(): void;
  redirectWhenUnauthenticated(): void;
}
declare module "angular" {
}
declare module "angular-jwt" {
  import typeof * as angular from "angular";
}
