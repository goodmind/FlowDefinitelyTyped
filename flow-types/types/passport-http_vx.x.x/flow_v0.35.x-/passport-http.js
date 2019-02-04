declare module 'passport-http' {
        declare export interface BasicStrategyOptions<req: boolean> {
realm?: string,
passReqToCallback?: boolean
} 
	declare export interface DigestStrategyOptions {
realm?: string,
domain?: string | string[],
opaque?: string,
algorithm?: string,
qop?: string | string[]
} 
	declare export interface DigestValidateOptions {
nonce: string,
cnonce: string,
nc: number,
opaque: string
} 
	declare export type BasicVerifyFunction = (
username: string,
password: string,
done: (error: any, user?: any) => void) => any;
	declare export type BasicVerifyFunctionWithRequest = (
req: express.Request,
username: string,
password: string,
done: (error: any, user?: any) => void) => any;
	declare export type DigestSecretFunction = (
username: string,
done: (error: any, user?: any, password?: any) => void) => any;
	declare export type DigestValidateFunction = (
params: DigestValidateOptions,
done: (error: any, valid: boolean) => void) => any;
	declare export class BasicStrategy mixins passport.Strategy {
constructor(verify: BasicVerifyFunction): this;
constructor(options: BasicStrategyOptions<false>, verify: BasicVerifyFunction): this;
constructor(options: BasicStrategyOptions<true>, verify: BasicVerifyFunctionWithRequest): this;
name: string;
authenticate(req: express.Request, options?: {[key: string]: any}): void
}
	declare export class DigestStrategy mixins passport.Strategy {
constructor(secret: DigestSecretFunction, validate?: DigestValidateFunction): this;
constructor(options: DigestStrategyOptions, secret: DigestSecretFunction, validate?: DigestValidateFunction): this;
name: string;
authenticate(req: express.Request, options?: {[key: string]: any}): void
}
    }
