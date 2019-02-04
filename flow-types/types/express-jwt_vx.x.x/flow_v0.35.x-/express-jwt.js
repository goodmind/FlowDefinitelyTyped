declare module 'express-jwt' {
        declare module.exports: typeof jwt

	declare function jwt(options: jwt$jwt$Options): jwt$jwt$RequestHandler

	declare export type jwt$secretType = string | Buffer;

declare export type jwt$ErrorCode = "revoked_token"
| "invalid_token"
| "credentials_bad_scheme"
| "credentials_bad_format"
| "credentials_required";

declare export interface jwt$SecretCallbackLong {
(req: express.Request, header: any, payload: any, done: (err: any, secret?: jwt$secretType) => void): void
} 

declare export interface jwt$SecretCallback {
(req: express.Request, payload: any, done: (err: any, secret?: jwt$secretType) => void): void
} 

declare export interface jwt$IsRevokedCallback {
(req: express.Request, payload: any, done: (err: any, revoked?: boolean) => void): void
} 

declare export interface jwt$GetTokenCallback {
(req: express.Request): any
} 

declare export interface jwt$Options {
secret: jwt$secretType | jwt$SecretCallback | jwt$SecretCallbackLong,
userProperty?: string,
skip?: string[],
credentialsRequired?: boolean,
isRevoked?: jwt$IsRevokedCallback,
requestProperty?: string,
getToken?: jwt$GetTokenCallback,
[property: string]: any
} 

declare export type jwt$RequestHandler = {
unless: typeof unless
} & express.jwt$RequestHandler


declare export class jwt$UnauthorizedError mixins Error {
status: number;
message: string;
name: "UnauthorizedError";
code: jwt$ErrorCode;
inner: {
message: string
};
constructor(code: jwt$ErrorCode, error: {
message: string
}): this
}
    }
