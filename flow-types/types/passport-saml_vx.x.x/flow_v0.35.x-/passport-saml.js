declare module 'passport-saml' {
        declare export interface CacheItem {
createdAt: Date,
value: any
} 
	declare export interface CacheProvider {
save(
key: string | null,
value: any,
callback: (err: Error | null, cacheItem: CacheItem) => void | null): void,
get(key: string, callback: (err: Error | null, value: any) => void | null): void,
remove(key: string, callback: (err: Error | null, key: string) => void | null): void
} 
	declare export type VerifiedCallback = (
err: Error | null,
user: {[key: string]: any},
info: {[key: string]: any}) => void;
	declare export type VerifyWithRequest = (
req: express.Request,
profile: {[key: string]: any},
done: VerifiedCallback) => void;
	declare export type VerifyWithoutRequest = (profile: {[key: string]: any}, done: VerifiedCallback) => void;
	declare export class Strategy mixins passport.Strategy {
constructor(config: SamlConfig, verify: VerifyWithRequest | VerifyWithoutRequest): this;
authenticate(req: express.Request, options: AuthenticateOptions | AuthorizeOptions): void;
logout(req: express.Request, callback: (err: Error | null, url: string) => void): void;
generateServiceProviderMetadata(decryptionCert?: string, signingCert?: string): string
}
	declare export type CertCallback = (callback: (err: Error | null, cert?: string | string[]) => void) => void;
	declare export interface SamlConfig {
callbackUrl?: string,
path?: string,
protocol?: string,
host?: string,
entryPoint: string,
issuer: string,
privateCert?: string,
cert?: string | string[] | CertCallback,
decryptionPvk?: string,
signatureAlgorithm?: "sha1" | "sha256" | "sha512",
additionalParams?: any,
additionalAuthorizeParams?: any,
identifierFormat?: string,
acceptedClockSkewMs?: number,
attributeConsumingServiceIndex?: string,
disableRequestedAuthnContext?: boolean,
authnContext?: string,
forceAuthn?: boolean,
skipRequestCompression?: boolean,
authnRequestBinding?: string,
validateInResponseTo?: boolean,
requestIdExpirationPeriodMs?: number,
cacheProvider?: CacheProvider,
name?: string,
passReqToCallback?: boolean,
logoutUrl?: string,
additionalLogoutParams?: any,
logoutCallbackUrl?: string
} 
	declare export type AuthenticateOptions = {
additionalParams?: {[key: string]: any}
} & passport.AuthenticateOptions

	declare export type AuthorizeOptions = {
samlFallback?: string
} & AuthenticateOptions

    }
