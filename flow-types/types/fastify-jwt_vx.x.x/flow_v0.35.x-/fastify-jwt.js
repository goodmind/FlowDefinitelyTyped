declare module 'fastify-jwt' {
        import type {
          Secret,SignOptions,VerifyOptions,VerifyCallback,SignCallback,DecodeOptions
        } from 'jsonwebtoken';

	import type {
          IncomingMessage,ServerResponse
        } from 'http';

	declare module 'fastify' {
        declare interface FastifyInstance<HttpServer, HttpRequest, HttpResponse> {
jwt: jwt
} 
	declare interface SignFunction {
(payload: string | Buffer | {[key: string]: any}, options?: SignOptions): string,
(payload: string | Buffer | {[key: string]: any}, options?: SignOptions, callback?: SignCallback): void
} 
	declare interface VerifyFunction {
(token: string, options?: VerifyOptions, callback?: VerifyCallback): void,
(token: string, options?: VerifyOptions): {[key: string]: any} | string
} 
	declare interface jwt {
sign: SignFunction,
verify: VerifyFunction,
decode(token: string, options?: DecodeOptions): null | {
[key: string]: any
} | string,
secret: Secret
} 
	declare interface FastifyRequest<HttpRequest> {
jwtVerify: (
options?: VerifyOptions | VerifyCallback,
next?: VerifyCallback) => Promise<null | {
[key: string]: any
} | string> | null | {
[key: string]: any
} | string
} 
	declare interface FastifyReply<HttpResponse> {
jwtSign: (
payload: string | Buffer | {[key: string]: any},
options?: SignOptions | SignCallback,
next?: SignCallback) => void
} 
    }

	declare function fastifyJwt(): void

	declare type fastifyJwt$SecretCallback = (
request: fastify.FastifyRequest<IncomingMessage>,
reply: string | Buffer | {[key: string]: any},
callback?: VerifyCallback | SignCallback) => void;

declare interface fastifyJwt$FastifyJwtOptions {
secret: string | fastifyJwt$SecretCallback
} 
	declare module.exports: typeof fastifyJwt

    }
