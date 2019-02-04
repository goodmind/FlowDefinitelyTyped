declare module 'keycloak-connect' {
        import type {
          RequestHandler,Request,Response
        } from 'express';

	declare class Keycloak  {
constructor(config: Keycloak$Keycloak$Config, keycloakConfig?: {} | string): this;
middleware(options?: Keycloak$Keycloak$MiddlewareOptions): RequestHandler;
protect(spec?: string | Keycloak$Keycloak$SpecHandler): RequestHandler;
authenticated: (request: Request) => void;
deauthenticated: (request: Request) => void;
accessDenied: (request: Request, response: Response) => void;
getGrant: (request: Request, response: Response) => Promise<Keycloak$Keycloak$Grant>;
storeGrant: (
grant: Keycloak$Keycloak$Grant,
request: Request,
response: Response) => Keycloak$Keycloak$Grant;
unstoreGrant: (sessionId: string) => void;
getGrantFromCode: (
code: string,
request: Request,
response: Response) => Promise<Keycloak$Keycloak$Grant>;
loginUrl: (uuid: string, redirectUrl: string) => string;
logoutUrl: (redirectUrl: string) => string;
accountUrl: () => string;
getAccount: (token: Keycloak$Keycloak$Token) => Promise<any>;
redirectToLogin: (request: Request) => boolean
}
	declare interface Keycloak$BaseConfig {
scope?: any
} 

declare type Keycloak$StoreConfig = {
store: any
} & Keycloak$BaseConfig


declare type Keycloak$CookiesConfig = {
cookies: any
} & Keycloak$BaseConfig


declare type Keycloak$Config = Keycloak$StoreConfig | Keycloak$CookiesConfig | Keycloak$BaseConfig;

declare interface Keycloak$MiddlewareOptions {
logout?: string,
admin?: string
} 

declare interface Keycloak$TokenContent {
exp: number,
resource_access?: any,
realm_access?: {
roles?: string[]
}
} 

declare interface Keycloak$Token {
token: string,
clientId: string,
header?: any,
content: Keycloak$TokenContent,
signature?: Buffer,
signed?: string,
isExpired: () => boolean,
hasRole: (roleName: string) => boolean,
hasApplicationRole: (appName: string, roleName: string) => boolean,
hasRealmRole: (roleName: string) => boolean
} 

declare type Keycloak$SpecHandler = (token: Keycloak$Token, request: Request, response: Response) => boolean;

declare interface Keycloak$Grant {
access_token: Keycloak$Token,
refresh_token: Keycloak$Token,
id_token: Keycloak$Token,
expires_in: number,
token_type: string,
__raw: string,
update: (grant: Keycloak$Grant) => void,
function toString() { [native code] }: () => string,
isExpired: () => boolean,
store: (request: Request, response: Response) => void
} 

declare type Keycloak$GrantedRequest = {
kauth: {
grant?: Keycloak$Grant
}
} & Request

	declare module.exports: typeof Keycloak

    }
